import{d as e,s as t,v as a,I as o,G as i,r as l,o as n,c as d,e as m,w as s,a as c,f as u,t as r,y as p,z as f,J as v,i as b,j as _,F as y,l as h,_ as x}from"./index-KWTKF9N9.js";import{E as N,a as g}from"./el-col-t_F-vIr3.js";import{E as w,a as V}from"./el-form-item-i8ZQhvu8.js";import{a as j,E as T}from"./el-radio-group-MC2AFabc.js";import{E as S}from"./el-text-bFj0OZ8x.js";import{E as k}from"./el-switch-tqt83myp.js";import{E as U}from"./el-divider-685xvbVJ.js";import{E as I}from"./el-card-9F69xyLv.js";import{_ as A}from"./Dialog.vue_vue_type_style_index_0_lang-T5U2It3I.js";import{_ as E}from"./Table.vue_vue_type_script_lang-iUd8q4UT.js";import{u as C}from"./useTable-CuwOU5m7.js";import{e as M,f as D,h as P,u as R,i as G,j as H}from"./index-hnaQUBEc.js";import"./castArray-9Ouy5Ghy.js";import"./refs-WVQk01D0.js";import"./el-popper-pnFa2Ecw.js";import"./el-checkbox-U1iRgEY7.js";import"./useInput-CGBP5_dt.js";import"./debounce-QvfGQs-0.js";import"./el-tooltip-w40geAFS.js";import"./el-tag-MzjVikBY.js";import"./el-pagination-ooblyvhx.js";import"./el-image-viewer-S1bd3VyN.js";import"./tsxHelper-NOZkKkVH.js";import"./el-dropdown-item-bjCsATwt.js";import"./index-BS1c_xid.js";import"./raf-kE1zktlZ.js";import"./index-XFn6QxJu.js";const L={class:"mb-10px"},O={style:{position:"relative",top:"12px"}},W=x(e({__name:"notification",setup(e){const{t:x}=h(),W=t([{field:"selection",type:"selection",width:"55"},{field:"name",label:"Name",minWidth:20},{field:"method",label:"Method",minWidth:20},{field:"url",label:"URL"},{field:"contentType",label:"Content Type",minWidth:25},{field:"data",label:"POST DATA"},{field:"state",label:x("common.state"),minWidth:25,formatter:(e,t,i)=>{let l="",n="";return 1==i?(l="#2eb98a",n=x("common.on")):(l="red",n=x("common.off")),a(g,{gutter:20},[a(N,{span:1},[a(o,{icon:"clarity:circle-solid",color:l,size:10})]),a(N,{span:5},[a(S,{type:"info"},n)])])}},{field:"action",label:x("tableDemo.action"),formatter:(e,t,o)=>a("div",[a(i,{type:"primary",onClick:()=>te(e)},x("common.edit")),a(i,{type:"danger",onClick:()=>oe(e)},x("common.delete"))])}]),{tableState:F,tableMethods:z}=C({fetchDataApi:async()=>({list:(await D()).data.list})}),{dataList:J}=F,{getList:q,getElTableExpose:B}=z,K=t({name:"",url:"",method:"GET",contentType:"raw",data:"",state:!0}),Q=t({dirScanNotification:!0,portScanNotification:!0,sensitiveNotification:!0,subdomainNotification:!0,subdomainTakeoverNotification:!0,pageMonNotification:!0,vulNotification:!0});(async()=>{const e=await P();Q.dirScanNotification=e.data.dirScanNotification,Q.portScanNotification=e.data.portScanNotification,Q.sensitiveNotification=e.data.sensitiveNotification,Q.subdomainNotification=e.data.subdomainNotification,Q.subdomainTakeoverNotification=e.data.subdomainTakeoverNotification,Q.pageMonNotification=e.data.pageMonNotification,Q.vulNotification=e.data.vulNotification})();const X=l(!1),Y=l(!1),Z=async()=>{$.value="",K.name="",K.url="",K.method="GET",K.contentType="raw",K.data="",K.state=!0,Y.value=!0},$=l(""),ee=l(!1),te=e=>{$.value=e.id,K.name=e.name,K.url=e.url,K.method=e.method,K.contentType=e.contentType,K.data=e.data,K.state=e.state,Y.value=!0},ae=l(!1),oe=async e=>{ae.value=!0;try{await M([e.id]);ae.value=!1,q()}catch(t){ae.value=!1,q()}},ie=l([]),le=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await ne()},ne=async()=>{const e=await B(),t=(null==e?void 0:e.getSelectionRows())||[];ie.value=t.map((e=>e.id)),ae.value=!0;try{await M(ie.value);ae.value=!1,q()}catch(a){ae.value=!1,q()}};return(e,t)=>(n(),d(y,null,[m(c(I),{shadow:"never",class:"mb-20px"},{header:s((()=>[m(c(g),null,{default:s((()=>[m(c(N),{span:3,style:{height:"100%"}},{default:s((()=>[u("span",null,r(c(x)("configuration.noticeConfig")),1)])),_:1})])),_:1})])),default:s((()=>[m(c(g),null,{default:s((()=>[m(c(N),{style:{position:"relative",top:"16px"}},{default:s((()=>[u("div",L,[m(c(i),{type:"primary",onClick:Z},{default:s((()=>[p(r(c(x)("configuration.newWebhookConfig")),1)])),_:1}),m(c(i),{type:"danger",loading:ae.value,onClick:le},{default:s((()=>[p(r(c(x)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),u("div",O,[m(c(E),{data:c(J),columns:W,stripe:"",border:!0,resizable:!0,maxHeight:"200",style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["data","columns"])]),m(c(U)),m(c(w),{model:Q,"label-width":"auto","status-icon":"",ref:"ruleFormRef",style:{position:"relative",top:"1rem"}},{default:s((()=>[m(c(g),null,{default:s((()=>[m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("subdomain.subdomainName")},{default:s((()=>[m(c(k),{modelValue:Q.subdomainNotification,"onUpdate:modelValue":t[0]||(t[0]=e=>Q.subdomainNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("task.subdomainTakeover")},{default:s((()=>[m(c(k),{modelValue:Q.subdomainTakeoverNotification,"onUpdate:modelValue":t[1]||(t[1]=e=>Q.subdomainTakeoverNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("dirScan.dirScanName")},{default:s((()=>[m(c(k),{modelValue:Q.dirScanNotification,"onUpdate:modelValue":t[2]||(t[2]=e=>Q.dirScanNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),m(c(g),null,{default:s((()=>[m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("task.portScan")},{default:s((()=>[m(c(k),{modelValue:Q.portScanNotification,"onUpdate:modelValue":t[3]||(t[3]=e=>Q.portScanNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("sensitiveInformation.sensitiveInformationName")},{default:s((()=>[m(c(k),{modelValue:Q.sensitiveNotification,"onUpdate:modelValue":t[4]||(t[4]=e=>Q.sensitiveNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1}),m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("PageMonitoring.pageMonitoringName")},{default:s((()=>[m(c(k),{modelValue:Q.pageMonNotification,"onUpdate:modelValue":t[5]||(t[5]=e=>Q.pageMonNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),m(c(g),null,{default:s((()=>[m(c(N),{span:5},{default:s((()=>[m(c(V),{label:c(x)("vulnerability.vulnerabilityName")},{default:s((()=>[m(c(k),{modelValue:Q.vulNotification,"onUpdate:modelValue":t[6]||(t[6]=e=>Q.vulNotification=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"])])),_:1})])),_:1}),m(c(g),null,{default:s((()=>[m(c(N),{span:2,offset:8},{default:s((()=>[m(c(V),null,{default:s((()=>[m(c(f),{type:"primary",onClick:t[7]||(t[7]=e=>(async()=>{X.value=!0,await R(Q.dirScanNotification,Q.portScanNotification,Q.sensitiveNotification,Q.subdomainNotification,Q.subdomainTakeoverNotification,Q.pageMonNotification,Q.vulNotification),X.value=!1})()),loading:X.value},{default:s((()=>[p(r(c(x)("common.submit")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),m(c(A),{modelValue:Y.value,"onUpdate:modelValue":t[15]||(t[15]=e=>Y.value=e),title:c(x)("configuration.newWebhookConfig"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:"100"},{default:s((()=>[m(c(S),{class:"mx-2",type:"danger",size:"small",style:{position:"relative",left:"2rem"}},{default:s((()=>[p(r(c(x)("configuration.noticeHelp")),1)])),_:1}),m(c(w),{model:K,"label-width":"auto","status-icon":"",ref:"ruleFormRef",style:{position:"relative",top:"1rem"}},{default:s((()=>[m(c(V),{label:"Name",prop:"name"},{default:s((()=>[m(c(v),{modelValue:K.name,"onUpdate:modelValue":t[8]||(t[8]=e=>K.name=e),placeholder:"Input name."},null,8,["modelValue"])])),_:1}),m(c(V),{label:"Method",prop:"method"},{default:s((()=>[m(c(j),{modelValue:K.method,"onUpdate:modelValue":t[9]||(t[9]=e=>K.method=e)},{default:s((()=>[m(c(T),{value:"GET"},{default:s((()=>[p("GET")])),_:1}),m(c(T),{value:"POST"},{default:s((()=>[p("POST")])),_:1})])),_:1},8,["modelValue"])])),_:1}),m(c(V),{label:"URL",prop:"url"},{default:s((()=>[m(c(v),{modelValue:K.url,"onUpdate:modelValue":t[10]||(t[10]=e=>K.url=e),placeholder:"Input URL."},null,8,["modelValue"])])),_:1}),"POST"==K.method?(n(),b(c(V),{key:0,label:"Data Type",prop:"contentType"},{default:s((()=>[m(c(j),{modelValue:K.contentType,"onUpdate:modelValue":t[11]||(t[11]=e=>K.contentType=e)},{default:s((()=>[m(c(T),{value:"raw"},{default:s((()=>[p("Raw")])),_:1}),m(c(T),{value:"json"},{default:s((()=>[p("Json")])),_:1})])),_:1},8,["modelValue"])])),_:1})):_("",!0),"POST"==K.method?(n(),b(c(V),{key:1,label:"Data",prop:"Data"},{default:s((()=>[m(c(v),{modelValue:K.data,"onUpdate:modelValue":t[12]||(t[12]=e=>K.data=e),placeholder:"Input POST Data."},null,8,["modelValue"])])),_:1})):_("",!0),m(c(V),{label:c(x)("common.state")},{default:s((()=>[m(c(k),{modelValue:K.state,"onUpdate:modelValue":t[13]||(t[13]=e=>K.state=e),"inline-prompt":"","active-text":c(x)("common.switchAction"),"inactive-text":c(x)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),m(c(g),null,{default:s((()=>[m(c(N),{span:2,offset:8},{default:s((()=>[m(c(V),null,{default:s((()=>[m(c(f),{type:"primary",onClick:t[14]||(t[14]=e=>(async()=>{ee.value=!0,""==$.value?await G(K.name,K.url,K.method,K.contentType,K.data,K.state):await H($.value,K.name,K.url,K.method,K.contentType,K.data,K.state),q(),ee.value=!1,Y.value=!1})()),loading:ee.value},{default:s((()=>[p(r(c(x)("common.submit")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-00fd9ad3"]]);export{W as default};
