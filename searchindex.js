Search.setIndex({docnames:["changelog","contributing","contributors","flow","genindex","index","install","job","jobflow","jobflow.core","jobflow.managers","jobflow.settings","jobflow.utils","license","maker","tutorials","tutorials/1-quickstart","tutorials/2-introduction","tutorials/3-defining-jobs","tutorials/4-creating-flows","tutorials/5-dynamic-flows","tutorials/6-jobflow-database","tutorials/7-fireworks"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,nbsphinx:4,sphinx:56},filenames:["changelog.rst","contributing.rst","contributors.rst","flow.rst","genindex.rst","index.rst","install.rst","job.rst","jobflow.rst","jobflow.core.rst","jobflow.managers.rst","jobflow.settings.rst","jobflow.utils.rst","license.rst","maker.rst","tutorials.rst","tutorials/1-quickstart.nblink","tutorials/2-introduction.nblink","tutorials/3-defining-jobs.nblink","tutorials/4-creating-flows.rst","tutorials/5-dynamic-flows.rst","tutorials/6-jobflow-database.rst","tutorials/7-fireworks.rst"],objects:{"jobflow.core":[[9,0,0,"-","flow"],[9,0,0,"-","job"],[9,0,0,"-","maker"],[9,0,0,"-","reference"],[9,0,0,"-","state"],[9,0,0,"-","store"]],"jobflow.core.flow":[[9,1,1,"","Flow"],[9,1,1,"","JobOrder"],[9,5,1,"","get_flow"]],"jobflow.core.flow.Flow":[[9,2,1,"","append_name"],[9,2,1,"","draw_graph"],[9,3,1,"","graph"],[9,2,1,"","iterflow"],[9,3,1,"","job_uuids"],[9,2,1,"","update_kwargs"],[9,2,1,"","update_maker_kwargs"]],"jobflow.core.flow.JobOrder":[[9,4,1,"","AUTO"],[9,4,1,"","LINEAR"]],"jobflow.core.job":[[9,1,1,"","Job"],[9,1,1,"","JobConfig"],[9,1,1,"","Response"],[9,5,1,"","job"],[9,5,1,"","store_inputs"]],"jobflow.core.job.Job":[[9,2,1,"","append_name"],[9,2,1,"","as_dict"],[9,3,1,"","graph"],[9,3,1,"","input_references"],[9,3,1,"","input_references_grouped"],[9,3,1,"","input_uuids"],[9,3,1,"","maker"],[9,2,1,"","resolve_args"],[9,2,1,"","run"],[9,2,1,"","set_uuid"],[9,2,1,"","update_kwargs"],[9,2,1,"","update_maker_kwargs"]],"jobflow.core.job.Response":[[9,2,1,"","from_job_returns"]],"jobflow.core.maker":[[9,1,1,"","Maker"]],"jobflow.core.maker.Maker":[[9,2,1,"","make"],[9,3,1,"","name"],[9,2,1,"","update_kwargs"]],"jobflow.core.reference":[[9,1,1,"","OnMissing"],[9,1,1,"","OutputReference"],[9,5,1,"","find_and_get_references"],[9,5,1,"","find_and_resolve_references"],[9,5,1,"","resolve_references"]],"jobflow.core.reference.OnMissing":[[9,4,1,"","ERROR"],[9,4,1,"","NONE"],[9,4,1,"","PASS"]],"jobflow.core.reference.OutputReference":[[9,2,1,"","as_dict"],[9,3,1,"","attributes_formatted"],[9,2,1,"","resolve"],[9,2,1,"","set_uuid"]],"jobflow.core.store":[[9,1,1,"","JobStore"]],"jobflow.core.store.JobStore":[[9,2,1,"","close"],[9,2,1,"","connect"],[9,2,1,"","count"],[9,2,1,"","ensure_index"],[9,2,1,"","from_dict_spec"],[9,2,1,"","from_file"],[9,2,1,"","get_output"],[9,2,1,"","groupby"],[9,3,1,"","name"],[9,2,1,"","query"],[9,2,1,"","query_one"],[9,2,1,"","remove_docs"],[9,2,1,"","update"]],"jobflow.managers":[[10,0,0,"-","fireworks"],[10,0,0,"-","local"]],"jobflow.managers.fireworks":[[10,1,1,"","JobFiretask"],[10,5,1,"","flow_to_workflow"],[10,5,1,"","job_to_firework"]],"jobflow.managers.fireworks.JobFiretask":[[10,2,1,"","run_task"]],"jobflow.managers.local":[[10,5,1,"","run_locally"]],"jobflow.settings":[[11,6,1,"","JobflowSettings"]],"jobflow.settings.JobflowSettings":[[11,7,1,"","CONFIG_FILE"],[11,7,1,"","JOB_STORE"]],"jobflow.utils":[[12,0,0,"-","dict_mods"],[12,0,0,"-","enum"],[12,0,0,"-","find"],[12,0,0,"-","graph"],[12,0,0,"-","log"],[12,0,0,"-","uuid"]],"jobflow.utils.dict_mods":[[12,1,1,"","DictMods"],[12,5,1,"","apply_mod"]],"jobflow.utils.dict_mods.DictMods":[[12,2,1,"","add_to_set"],[12,2,1,"","inc"],[12,2,1,"","pop"],[12,2,1,"","pull"],[12,2,1,"","pull_all"],[12,2,1,"","push"],[12,2,1,"","push_all"],[12,2,1,"","rename"],[12,2,1,"","set"],[12,2,1,"","unset"]],"jobflow.utils.enum":[[12,1,1,"","ValueEnum"]],"jobflow.utils.enum.ValueEnum":[[12,2,1,"","as_dict"]],"jobflow.utils.find":[[12,5,1,"","contains_flow_or_job"],[12,5,1,"","find_key"],[12,5,1,"","find_key_value"],[12,5,1,"","update_in_dictionary"]],"jobflow.utils.graph":[[12,5,1,"","draw_graph"],[12,5,1,"","itergraph"],[12,5,1,"","to_pydot"]],"jobflow.utils.log":[[12,5,1,"","initialize_logger"]],"jobflow.utils.uuid":[[12,5,1,"","suuid"]],jobflow:[[11,0,0,"-","settings"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"],"6":["py","pydantic_settings","Python settings"],"7":["py","pydantic_field","Python field"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:property","4":"py:attribute","5":"py:function","6":"py:pydantic_settings","7":"py:pydantic_field"},terms:{"0":[7,9,12,17],"007624547999999898":17,"04":[16,17],"0400eb419a91":17,"06":[16,17],"0x7ff72bdf6af0":[7,9],"1":[3,5,7,9,12,13,14,16,17,18],"10":[3,9,14,16,17],"100":[1,12],"1000":[9,14],"11":17,"111":0,"118":0,"119":0,"12":[12,17,18],"121":0,"1234":9,"124":[0,17],"125":17,"13":[0,17,18],"14":18,"15":18,"16":18,"17":[16,17],"18":[0,18],"1d37":16,"2":[3,7,9,12,13,14,16,17,18],"20":12,"2021":[13,16,17],"21":0,"25":16,"27017":[9,11],"2d35baf4":17,"2e8f39b2":17,"3":[5,9,12,13,14,16,17,18],"3074257839999994":17,"30bc700e":18,"325":17,"327":17,"3369926760000004":17,"36":17,"38":0,"39":[16,17,18],"3bc98d5e":16,"4":[1,9,14,16,17],"4074":17,"4099":17,"43":17,"441a":17,"441d":17,"45":17,"45d134d6566d":17,"4698":[7,9],"47a1":16,"4922":17,"4a3f":18,"4ad1":16,"4bb86b98fe54":17,"4d83":17,"5":[3,5,9,14,16,17,18],"50":17,"531":17,"56":[16,17],"59b2":17,"6":[9,14,16,17],"67":0,"68":0,"7":[5,16,17],"75f3":17,"7dfabef8ac93":17,"8":[12,16,17],"81ef54446e92":18,"8306":17,"846add3f":16,"875":16,"877":16,"878":16,"879":16,"87d3":17,"880":16,"881":16,"9":[16,17],"917e":17,"9472":17,"94a0fdf57b1b":16,"958":17,"959":17,"961":17,"962":17,"9628085599999991":17,"966787a9ccfd":17,"971":17,"973":17,"9b34":[7,9],"abstract":[9,14],"case":[3,5,9,12,14,17],"class":[0,3,7,9,10,12,14,17],"default":[0,3,7,9,10,11,12,14,17],"do":[1,6,9,16],"enum":[8,9,17],"final":5,"float":[3,9,12,14],"function":[3,5,6,7,9,12,13,14,16,17,18],"import":[3,5,7,9,11,12,14,16,17,18],"int":[9,10,12],"long":17,"new":[0,1,9,10,11,12,14,17],"return":[3,5,7,9,10,12,14,16,17,18],"static":[9,12],"throw":9,"true":[0,3,9,10,12,14],"try":[7,9],"universit\u00e9":2,"while":5,A:[1,3,5,7,9,10,12,13,14,16,17],AND:13,AS:13,And:6,As:[5,16,17,18],BE:13,BUT:13,BY:13,By:[3,7,9,10,14],FOR:13,For:[1,3,7,9,11,12,14,17],IF:13,IN:13,IS:13,If:[1,3,5,6,7,9,10,11,12,14,17],In:[3,5,7,9,14,16,17,18],It:[1,7,12,17],NO:13,NOT:13,OF:13,ON:13,OR:13,Or:[6,9],SUCH:13,THE:13,TO:13,The:[1,2,3,5,6,7,9,10,11,12,13,14,16,17,18],Their:[16,17],There:[9,14],These:[3,9,14,15],To:[3,5,6,9,14,17],_add_to_set:12,_each:12,_inc:12,_pop:12,_pull:12,_pull_al:12,_push:12,_push_al:12,_renam:12,_set:12,_unset:12,a38209dd:17,a409:16,a5a7:17,a7f5:16,a_squar:[9,14],ab69:[7,9],abeb6f48:[7,9],abil:[5,9,14],abl:9,about:[5,16,17,18],abov:[13,17],absolut:1,accept:[1,7,9,11],access:[5,7,9,16,17,18],accordingli:[9,10],achiev:[16,17],across:5,act:[3,9,17],action_keyword:12,actual:[1,12],ad:[0,15],add:[0,3,5,7,9,12,14,16,18],add_first:[3,5,9,12,14,16,18],add_job:[3,9,14],add_mak:[3,9,14],add_second:[3,5,9,12,14,16,18],add_task:[7,9],add_third:[3,9],add_to_set:12,addit:[2,5,7,9,11,15,16,17],additional_stor:[7,9,11],addmak:[3,9,14],advanc:[5,12,15],advis:13,aec9:18,after:16,against:12,agreement:13,alex:[2,5],all:[0,1,3,5,9,13,16,17],allow:[0,3,5,9,11,12,17],alongsid:9,alreadi:[3,9],also:[3,6,7,9,12,14,17,18],altern:[9,10,11],alwai:[3,9,16,17],am:[7,9],an:[0,1,3,5,7,9,10,11,12,14,16,17,18],andrew:2,ani:[0,1,3,5,7,9,10,11,12,13,14,16,17,18],annot:17,anoth:[3,7,9,12,14,16,17,18],ansibl:12,anubhav:[2,5,12],anyon:13,anyth:[5,17],api:[0,5,16],appear:9,append:[3,9,12],append_nam:[0,3,9],append_str:[3,9],appli:[0,3,9,12,14,17,18],apply_mod:12,appreci:5,approach:5,appropri:17,approv:13,ar:[1,3,5,6,7,9,11,12,13,14,15,16,17,18],arbitrari:5,area:1,arg:[0,9,10,14],argument:[3,7,9,10,11,12,14,18],aris:13,arosen93:0,arosen:0,around:7,arrai:[3,9,16,17],as_dict:[9,11,12],ascend:9,ask:5,assign:[17,18],associ:9,atom:[5,16],attr:9,attribut:[5,7,9,16,17,18],attributes_format:9,auto:[3,9],autom:0,automat:[0,1,3,5,7,9,17],avail:[9,13,16,17,18],avoid:1,aw:17,b593:16,b:[3,5,7,9,12,14,16,18],b_squar:[9,14],background:1,bad:[3,9],base:[3,5,9,10,11,12,14],basemodel:9,baseset:11,basic:[1,6,9,18],bb88:17,becaus:[7,9,12,16,17],becom:1,been:[5,7,9,16,17,18],befor:[5,9,12,16],behavior:9,behaviour:12,being:1,belong:9,below:[3,5,7,9,13,14,16,17],berkelei:[2,13],best:1,better:0,between:[3,5,9],binari:13,blob_uuid:11,block:[16,17,18],bool:[3,9,10,12,14],bound:9,bracket:16,branch:1,bsd:[5,13],bucket:11,bug:[0,5,13],build:[5,16,17,18],built:[6,17],builtin:9,busi:13,c72f:17,c:[7,9,12,13,14,18],caa50ec0:17,cach:[0,9],california:[2,13],call:[3,7,9,16,17,18],callabl:[3,7,9,12],can:[0,1,3,5,6,7,9,10,11,12,14,16,17,18],cannot:[9,11],catholiqu:2,caus:13,cd:6,cef9136bb835:16,chain:9,chang:[1,5,9,14],changelog:5,check:[9,16,17],children:9,choos:13,ci:1,circular:0,claa:9,class_filt:[3,9,14],classmethod:9,clean:5,cleaner:[9,14],clone:6,close:9,cluster:[3,9,16,17],code:[12,13],codebas:1,collect:[3,5,9,16,17],collection_nam:[9,11],com:[6,17],combin:[9,17],come:[3,9,12],command:[9,16,17],comment:1,commit:1,common:17,compar:[1,12],compat:0,complet:9,complex:[5,18],complic:5,compon:[5,6],compos:[7,9],composit:5,comput:[3,5,7,9,10,13],compute_task:[7,9],concept:17,concret:[9,14],condit:13,config:[0,9,10],config_fil:11,configur:[7,9,10,18],confirm:1,confus:[3,9],connect:[3,5,9,16,17],consequenti:13,consid:[3,5,9,14],consider:12,construct:[3,7,9,12,14],constructor:[9,10,11],contain:[0,3,5,7,9,11,12,14,16,17],contains_flow_or_job:12,content:10,contract:13,contribut:2,contributor:[1,5,13],control:[0,7,9,12,14,16,17],convert:[5,7,9,10,12],copi:[9,12,14],copyright:13,core:[3,7,8,10,11,14],correct:[3,9],correctli:9,could:[3,9,10,14,17],count:9,cover:[16,17,18],creat:[1,3,5,7,9,11,12,14,15],create_fold:10,creation:[9,14],credenti:[9,11],criteria:9,current:[0,1,7,9,16,17,18],current_job:9,custodian:12,custom:[9,12,14,17],custom_add_mak:[9,14],customis:[9,10,14],cycl:12,d5460743:17,d:12,damag:13,data:[7,9,11,12,13],databas:[3,5,9,11,17,18],dataclass:[3,9,14],datatyp:17,date:17,datetim:17,david:2,davidwaroqui:0,db_file:9,de:2,decor:[5,7,9,14,16,17,18],dedic:1,def:[3,5,7,9,12,14,16,17,18],defin:[3,5,9,12,14,15,17],definit:[7,9],delai:[7,9,14,17,18],delv:[5,18],demonstr:17,depend:[0,6,9],dept:13,deriv:13,descend:9,describ:18,descript:9,design:[2,5,16,17],detail:[0,3,7,9,11,14,16,17,18],determin:[3,5,9,16,17],detour:[9,14,16,17],develop:[1,2,5,6,13],dfe0:18,dict:[3,9,10,12,14],dict_mod:[3,8,9,14],dictionari:[7,9,10,12,17,18],dictmod:[3,9,12,14],didn:1,differ:[6,9,10,14,16,17],digraph:[3,9,12],direct:[12,13],directli:[7,9,11,13],directori:6,disclaim:13,distinguish:5,distribut:13,doc:[0,6,9,11],docs_build:6,docs_stor:[7,9,11,17],docstr:[7,9,11],document:[0,1,9,12,13,17],doe:[3,9,12,16,17,18],doesn:[7,9,12],dot:12,doubl:[9,14],double_add_job:[9,14],doubleaddmak:[9,14],downstream:9,downstream_manager_config:0,draw:[3,9,12],draw_graph:[3,5,9,12,16,17],dump:[9,11],dumpfn:9,dure:[5,9,14],dynam:[0,5,9,10,14,18],e4dc2127ebe9:[7,9],e:[3,6,7,9,11,12],each:[10,18],easi:[0,1,5,16],easier:17,easiest:[17,18],easili:5,edg:12,effect:12,effici:9,either:[3,9,13],element:1,emphas:16,emploi:18,enabl:[3,9,12],encod:17,encount:1,encourag:[16,17],end_tim:17,endors:13,energi:13,enforc:9,enhanc:[0,13],enough:5,ensur:1,ensure_index:9,ensure_success:[0,10],enumer:12,env_set:11,environ:11,error:[1,7,9,10],essenti:[5,9,14,16],etc:17,even:[13,17,18],event:13,everi:[3,9,12],examin:15,exampl:[1,3,5,7,9,11,12,14,17],excel:1,exclus:13,exectut:[3,9],execut:[3,5,7,9,10,14,16,17,18],exemplari:13,exist:[7,9,12],expect:1,explain:[16,17],explicitli:[3,9,17],expos:[3,9,17],expose_stor:9,express:13,extend:12,extern:17,extract:[9,12],extrem:[9,14],f:17,factori:[9,14],fall:1,fals:[3,9,10,12,14,16,17],familiar:17,featur:[0,1,5,9,12,13,14,15,17],feel:18,fellow:2,few:1,field:[9,11,12,14],figsiz:[12,16],figur:12,file:[0,9,10,11,12,17],filenam:9,filter:[3,9,14],find:[1,8,9],find_and_get_refer:9,find_and_resolve_refer:9,find_kei:12,find_key_valu:12,finish:[1,16,17],firetask:10,firetaskbas:10,firework:[0,3,5,6,8,9,11,16,17],first:[3,5,6,9,12,14,16,17],fit:13,five:[5,15],fix:[0,1,13],flag:6,flavor:16,flexibl:5,flow:[0,1,5,6,7,8,10,12,14,15,18],flow_to_workflow:10,folder:[6,9,10],follow:[1,3,5,9,11,12,13,14],followup:1,foo:7,force_reset:9,fork:1,form:[5,11,13,17],format:[9,11,12,16,17],formatt:12,forum:[1,5],found:[5,9,12],framework:1,free:[5,13],friendli:5,from:[0,1,3,5,7,9,11,12,13,14,16,17,18],from_dict:9,from_dict_spec:9,from_fil:[9,11],from_job_return:9,full:[1,5],function_arg:[7,9],function_filt:[3,9],function_kwarg:[7,9],further:1,futur:[5,9,16,17,18],fw_spec:10,g:[11,12],gain:18,ganos:[2,5],genenr:[3,9],gener:[9,11,12,14,17],get:[3,5,7,9,16],get_flow:9,get_output:[0,9,17],git:6,github:[5,6,17],give:[7,9,16],given:[7,9],glimps:5,go:1,goal:5,good:[1,13,16,17],googl:[1,17],gpetretto:0,grant:13,graph:[0,3,5,7,8,9],graphviz:12,great:17,greatli:5,gridf:[5,17],gridfsstor:[9,11,17],group:[5,9],groupbi:9,guid:1,guido:2,ha:[5,7,9,12,14,16,17,18],hand:16,handl:[0,5,9,10],handler:12,happen:[1,5],hashabl:[9,12],have:[1,3,7,9,14,16,17,18],heavili:12,height:12,here:[1,5],herebi:13,hitchhik:1,holder:13,home:[0,11],host:[1,3,9,11],how:[9,17,18],howev:[3,7,9,13,14,17],http:[6,17],i:[3,7,9],idea:17,identifi:[3,9,12,16,17,18],ignor:9,implement:[1,9,12,14,17],impli:[7,9,13],importerror:9,impos:13,improv:1,inc:12,incident:13,includ:[1,3,5,9,12,13,17,18],include_end:12,incorpor:[1,13],incorrectli:[7,9],increment:12,index:[0,7,9,10,11,18],indic:[3,9],indirect:13,infinit:[3,9],info:[16,17],inform:[1,5,9,12],inherit:[9,14],init:[7,9,10],initi:[0,9,12,14,17],initialize_logg:12,inner:[3,9],inplac:9,input:[1,3,5,7,9,11,16,17,18],input_dict:12,input_refer:9,input_references_group:9,input_uuid:9,insert:[9,12],insid:[9,14],instal:[3,9,12,13],instanc:[9,12,14],instead:[0,1,3,9,12,14,17],integ:9,integr:[0,5],intend:[5,9,17],interconnect:17,interest:12,interfac:[3,7,9,17],interrupt:13,introduc:[16,17],introduct:15,introductori:16,ipynb:[16,17,18],isn:17,issu:[0,1,5],item:[9,12],iter:[3,9,12],iterflow:[3,9],itergraph:12,its:[1,5,9,13,14,17,18],itself:9,jain:[2,5,12],jimmi:2,jmmshn:0,job:[0,3,5,6,8,10,12,14,15],job_index:[16,17],job_kwarg:[7,9],job_return:9,job_stor:[0,9,10,11],job_to_firework:10,job_uuid:[3,9,16,17],jobconfig:[0,9,10],jobfiretask:10,jobflow:[0,2,3,7,13,14,15,16],jobflow_config_fil:11,jobflow_job_stor:11,jobflow_unittest:[9,11],jobflowset:[10,11],jobord:[3,9],jobstor:[0,7,9,10,11,15],join:9,jsanit:0,json:[3,5,9,14,17],jub:[7,9],jupyt:[16,17,18],just:[9,16,17],kei:[5,7,9,11,12,14],keyword:[3,7,9,10,11,12,14],know:[16,17],kwarg:[0,3,9,10,14],laboratori:[2,13],languag:[3,9,12,14],larg:[9,17],large_data:[7,9],last:9,lastli:[9,11],later:[5,16,17,18],latest:0,lawrenc:[2,13],layout:12,layout_funct:12,learn:[16,17,18],led:2,let:[16,17],level:12,liabil:13,liabl:13,librari:[5,9],licens:1,like:[3,9,12,17],limit:[9,12,13],linear:9,list:[1,3,5,9,10,12,13,18],livermor:2,ll:1,load:[0,9,11,17],load_typ:9,local:[0,3,5,8,9,11,16,17],localhost:[9,11],locat:12,log:[8,10,17],logger:12,look:9,loss:13,lot:[9,14],louvain:2,love:1,lowest:9,machin:5,made:[5,16,17],maggma:[0,5,9,10,11,17],mai:[9,13,17],main:[1,3,5,7,9,12,16,17],maintain:[1,5,6],major:0,make:[0,3,7,9,12,13,14],maker:[0,3,8],manag:[0,3,5,8,9,16,17],manager_config:[9,10],manger_config:9,mani:[1,12],manipul:12,map:[9,10],master:1,match:[3,9,11,12,14],materi:13,materialsproject:6,matplotlib:[3,9,12],matter:[16,17],mean:[1,9,12,14,17],meaning:1,memori:17,memorystor:[10,11,17],merchant:13,messag:[10,17],met:13,metadata:[0,9,10],method:[7,9,10,12,14],might:1,miller:2,minim:9,minut:[5,15],miss:[0,3,9],mod:[3,9,12,14],model:[0,9,11],modif:[0,12,13],modifi:[3,5,11,12,13],modul:[9,12],moment:1,mongo:12,mongodb:[5,17],mongostor:[9,11,17],monti:[3,9,14,17],montyencod:17,more:[0,1,3,5,7,9,11,12,14,15,16,17],move:1,msonabl:[3,9,12,14,17],much:[9,14],multicor:5,multipl:[0,5,9,11,17],must:[6,9,11,12,13,14],my_attribut:9,my_flow:12,my_job:[3,9],my_packag:9,name:[0,3,7,9,11,13,14,16,17],name_fild:[3,9],name_filt:[3,9,14],nation:[2,13],natur:[5,9,14],necessari:[1,6],need:[1,3,9,16,17],neglig:13,neither:13,nest:[0,3,5,9,12,14,18],networkx:12,new_job:[7,9,17],newli:[9,14],next:[6,9,14,15],node:[3,9,12],non:[0,13],none:[3,7,9,10,12,14,16,17],nor:13,notat:12,note:[1,3,9,10,11,12,14,16,17],notebook:[16,17,18],notic:13,now:[0,16,17],number:[3,5,9,12,14,16,17,18],nx:12,nytim:17,obj:[7,9,12],object:[3,5,7,9,10,12,14,15,16],oblig:13,on_miss:9,on_missing_refer:9,one:[3,9,14,17],ones:5,ong:12,onli:[0,3,7,9,14,17],onmiss:9,open:5,option:[0,3,6,7,9,10,14,16,17,18],order:[3,5,9,12,16,17],origin:12,os:9,other:[0,1,3,5,6,7,9,11,12,13,16,17],otherwis:[9,13],our:[1,5,17],out:13,outer_flow:[3,9],outlin:17,output:[0,3,5,7,9,11,12,14,15,18],output_blob:11,output_blobs_index:11,output_schema:9,outputrefer:[0,3,7,9,16,17,18],outputs_blob:[9,11],over:9,overrid:[9,14],overridden:[9,14],own:18,owner:13,packag:[5,6,10,16,17],page:[1,16,17,18],pair:12,paramet:[0,3,7,9,10,12,14,17,18],parent:[3,9,10],parent_map:10,pars:[0,11],part:[3,9],particular:[13,17],particularli:14,pass:[0,3,5,7,9,10,11,14],pass_manager_config:9,pass_metadata:0,patch:13,path:[0,9,11],perf_count:17,perform:[9,12,13],perman:17,permiss:13,permit:13,perpetu:13,petretto:2,ping:12,pip:5,place:[9,12,14],planar_layout:12,plane:6,pleas:[1,5],png:12,point:11,pointer:9,pop:12,port:[9,11],posit:9,possibl:[1,13,18],postdoctor:2,power:[5,9,14],pr:1,preced:9,prefix:11,prepar:13,prepend:[3,9],present:[3,7,9,14],primari:[9,17],print:[7,9,10],print_job:[7,9],print_messag:[7,9],print_sum:[7,9],print_sum_job:[7,9],print_task:9,prior:13,procedur:1,procur:13,produc:[3,7,9,14],product:[7,9,13,17],profit:13,progress:[1,15],project:2,promot:13,properti:[3,9,14],propog:0,propos:1,provid:[1,2,5,9,13,14,16,17],proxi:7,publicli:13,pull:[5,9,12],pull_al:12,purpos:[13,17,18],push:[1,9,12],push_al:12,put:9,pydant:[0,9,11],pydot:12,pymongo:9,pyplot:[3,9,12],pytest:6,python:[1,5,9,16,17,18],pyyaml:0,queri:[9,17],query_on:9,question:[1,5],queue:5,quick:1,quickstart:15,rais:[3,7,9,10,11,12],ran:9,rather:[3,9,17],re:1,read:17,receipt:13,recommend:17,redistribut:13,ref:9,refer:[0,3,5,7,8,12,16,17,18],referenc:[7,9],reflect:[9,14],regent:13,regist:[3,9,17],releas:[0,5],relev:17,remain:[9,11],remot:[16,17],remov:[0,9],remove_doc:9,renam:12,render:12,replac:[3,7,9,12,16,17,18],replacementmak:9,repo:1,report:5,repositori:6,repres:9,represent:[9,12],reproduc:[1,13],request:[5,9,17],requir:[0,3,6,7,9,11,12,13,14],research:2,reserv:13,reset:9,resolv:[0,3,5,7,9],resolve_arg:9,resolve_refer:9,resourc:[1,5],respons:[1,3,7,9,10,14,16,17,18],response_manager_config:9,restart:[3,9],restart_job:[3,9],restartmak:[3,9],result:[3,9],retain:13,review:1,right:13,root:[3,9],rosen:2,rout:12,royalti:13,run:[0,1,3,5,6,7,9,10,11,14,15],run_loc:[0,3,9,10,16,17],run_task:10,runner:11,s3:[5,17],s3store:[0,11,17],s:[1,9,13,16,17],same:1,sampl:1,save:9,save_typ:9,schema:[0,9],search:9,second:[3,9,14],see:[0,1,3,7,9,11,14],self:[3,9,14],separ:13,sequenc:[9,10],seri:17,serial:[0,5,9,10,12,17],serialis:9,serializ:12,servic:[1,13],set:[0,3,6,8,9,10,12,15,18],set_uuid:9,sever:17,shall:13,shen:2,should:[1,3,7,9,14],show:[3,5,9,16,17],shyue:12,similar:17,simpl:[3,5,7,9,14],simplest:[9,11],simplifi:12,simultan:9,singl:[0,5,9,17],size:12,skip:9,slowli:16,small:17,so:1,softwar:[5,13],some:[1,3,5,9,16],soon:15,sort:[9,12],sourc:[3,5,7,9,10,11,12,13,14],space:1,spec:[0,9,10],special:[12,13,17],specif:[0,1,9,12,13,16,17],specifi:[0,7,9,10,11,14],sphinx:6,squar:[9,14],square_add_job:[9,14],squarethenaddmak:[9,14],src:6,stack:1,standard:9,start:[5,16,17],start_tim:17,state:[1,3,8],step:[1,15],still:1,stop:[9,12],stop_children:[9,16,17],stop_jobflow:[9,16,17],store:[0,3,5,7,8,10,11,17,18],store_input:9,store_typ:9,stored_data:[9,16,17],str:[3,9,10,11,12,14,17],strict:13,string:[3,9,12],structur:[3,9,17,18],style:1,subclass:[3,9,11,14],subject:13,sublicens:13,submiss:10,submit:[1,5,10],subschema:0,subsequ:17,subset:6,substitut:13,success:9,successfulli:[10,16],suggest:5,sum:[7,9,17,18],sum_job:18,sum_numb:[17,18],sum_tim:17,summari:1,suppli:11,support:[0,5,9,11,12,16,17],suuid:12,system:5,t:[1,7,9,12,17],tab:1,take:[9,16,17],task:[7,9],team:1,test:[0,1],text:5,than:[3,9,12,16,17],thei:9,them:[3,9,14,17],themselv:[3,5,9,14],theori:13,thereof:13,thi:[1,3,7,9,10,12,13,14,16,17,18],thing:[16,17],think:1,thorough:1,those:[12,17,18],though:11,through:[3,5,9,12,13],time:[1,9,17,18],time_github:17,time_googl:17,time_nyt:17,time_websit:17,tip:[1,18],to_pydot:12,tool:[0,3,9,10,12,17],topolog:12,tort:13,total:9,trace:1,track:[1,5,17,18],transpar:1,tri:1,tupl:[3,9,12],tutori:[16,17,18],two:[3,5,9,14],txt:9,type:[3,7,9,10,11,12,14,17],u:[12,13],under:[1,5,13],understand:[1,18],union:[3,9,10,12,14],uniqu:[9,12,16,17,18],unit:6,unittest:1,univers:[2,12,13],unlik:9,unresolv:9,unset:12,up:[5,9,15],updat:[0,1,3,9,10,12,14],update_in_dictionari:12,update_kwarg:[3,9,14],update_maker_kwarg:[0,3,9],upgrad:13,upload:9,upon:9,urllib:17,urlopen:17,us:[0,1,3,5,6,7,9,10,11,12,13,14,16,17,18],usag:16,userwarn:[3,9],usual:[7,9,12],util:[3,8,9],uuid4:12,uuid:[3,8,9,10,16,17,18],v:12,valid:[0,9,11],validationerror:11,valu:[5,7,9,10,12,14],valueenum:[9,12],valueerror:[3,9,12],variabl:[9,11,14],ve:[5,16],veri:[9,14],version:[9,11,12],vi:6,visual:[6,16,17],visualis:[0,3,5,12],wa:[2,5,9,10,12],wai:[1,3,5,7,9,11,13,14,17,18],want:1,warn:[3,9],waroqui:2,warranti:13,we:[1,3,5,6,9,14,16,17],websit:17,welcom:1,well:1,were:12,what:[1,9,18],whatsoev:13,when:[1,3,7,9,11,14,17],where:[1,7,9,12],wherea:[9,17],whether:[1,3,9,10,12,13,14],which:[0,3,9,10,11,14,16,17],whose:[17,18],why:1,width:12,wish:17,within:[3,9,17],without:13,work:[1,3,9,12,13,15],workflow:[0,3,9,10,16,17,18],would:[1,9,11,17],wrap:[7,9],write:[0,1,5,12,16,18],written:[12,13],www:17,x:12,xuan:2,yaml:[0,9,11],yet:[5,7,9,16,17,18],yield:[3,9,12],you:[0,1,5,6,13,16,17,18],your:[1,13,16]},titles:["Change log","Contributing to jobflow","Contributors","Flow API","Index","Introduction","Install jobflow","Job API","jobflow","jobflow.core","jobflow.managers","jobflow.settings","jobflow.utils","License","Maker API","Tutorials","Five-minute quickstart","Introduction to jobflow","Defining jobs in jobflow","Creating Flows","Dynamic and nested Flows","Configuring the jobflow database","Running Flows with FireWorks"],titleterms:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"enum":12,"new":5,Is:5,acknowledg:5,addit:1,api:[3,7,14],bug:1,build:6,chang:0,code:1,configur:21,contribut:[1,5],contributor:2,core:9,creat:[16,17,18,19],databas:21,defin:[16,18],dict_mod:12,discuss:1,document:6,dynam:20,examin:[16,17],find:12,firework:[10,22],five:16,flow:[3,9,16,17,19,20,22],from:6,get:1,github:1,graph:12,great:1,help:[1,5],how:1,index:4,instal:[5,6],introduct:[5,17],job:[7,9,16,17,18],jobflow:[1,5,6,8,9,10,11,12,17,18,21],jobstor:17,licens:[5,13],local:10,log:[0,12],make:1,maker:[9,14],manag:10,me:5,minut:16,model:5,modif:1,need:5,nest:20,next:[16,17],object:[17,18],output:[16,17],pip:6,pull:1,quickstart:[5,16],refer:9,report:1,request:1,run:[16,17,22],s:5,set:[11,17],sourc:6,state:9,step:[16,17],store:9,test:6,through:1,tutori:[5,15],up:17,util:12,uuid:12,v0:0,what:5,workflow:5}})