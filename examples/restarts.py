from typing import List

from activities import Activity, job, run_locally


@job
def read_websites():
    from pathlib import Path

    file_contents = Path("websites.txt").read_text()
    return file_contents.split()


@job
def time_website(website: str):
    import urllib.request
    from time import perf_counter

    stream = urllib.request.urlopen(website)
    start_time = perf_counter()
    stream.read()
    end_time = perf_counter()
    stream.close()
    return end_time - start_time


@job
def start_timing_jobs(websites: List[str]):
    from activities.core.job import Response

    jobs = []
    for website in websites:
        time_job = time_website(website)
        time_job.name = f"time {website}"
        jobs.append(time_job)

    output = [j.output for j in jobs]
    return Response(restart=Activity("timings", jobs, output))


@job
def sum_times(times: List[float]):
    return sum(times)


# create an activity that will:
# 1. load a list of websites from a file.
# 2. generate one new job for each website to time the website loading
# 3. sum all the times together
read_websites_job = read_websites()
timings_job = start_timing_jobs(read_websites_job.output)
sum_job = sum_times(timings_job.output)
my_activity = Activity(jobs=[read_websites_job, timings_job, sum_job])

# draw the activity graph
my_activity.draw_graph().show()

# run the activity, "responses" contains the output of all jobs
responses = run_locally(my_activity)
print(responses)