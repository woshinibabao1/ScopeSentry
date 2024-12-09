import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-JnnrwuOA.js";import{d as t,r as a,s as l,e as o,S as i,C as s,F as n,M as r,o as p,c as u,w as c,a as m,y as d,t as g,G as f,z as v,f as y,H as _,I as j,l as h,L as x}from"./index-ChGT_YCB.js";import{E as b,a as w}from"./el-col-i_K16CKa.js";import{E as S}from"./el-text-iy-stWXi.js";import{E as k}from"./el-upload-DbBsNr1c.js";import"./el-progress-DPmiyG_Q.js";import"./el-tooltip-l0sNRNKZ.js";import{E as C}from"./el-popper-PhuldJD-.js";import{E}from"./el-tag-uqONbW_Z.js";import{_ as z}from"./Table.vue_vue_type_script_lang-BIM24Su6.js";import{u as F}from"./useTable-DVIhlLGs.js";import{u as A}from"./useIcon-Cv7WwndZ.js";import{g as I,d as U,a as P}from"./index-iHvimrm9.js";import{_ as T}from"./Detail.vue_vue_type_script_setup_true_lang-3HWzTRDt.js";import{_ as W}from"./Dialog.vue_vue_type_style_index_0_lang-CjT1Och0.js";import"./el-card-Bv8eL-PY.js";import"./index-CZTnDW2g.js";import"./el-table-column-D3t4SgcR.js";import"./debounce-Zw0D3mea.js";import"./el-checkbox-CasWmTQM.js";import"./isArrayLikeObject-7_HOgyXV.js";import"./raf-CI9lY1B7.js";import"./el-pagination-BHF_c2aK.js";import"./el-select-BqJxfjvU.js";import"./strings-Dm6yfrSz.js";import"./useInput-D50pGW-V.js";import"./el-image-viewer-DOJ4W1Wh.js";import"./el-empty-w9dzImmf.js";import"./tsxHelper-DC_KhjvT.js";import"./el-dropdown-item-DkQ0kmO2.js";import"./castArray-DD2tgwSj.js";import"./refs-Dfwo_yLk.js";import"./index-BAUEFq46.js";import"./index-D1H-7IS5.js";import"./el-form-D2bRQxI0.js";import"./el-divider-Dm9ByY6A.js";import"./el-virtual-list-CNowGpHm.js";import"./el-select-v2-wtxCX1rW.js";import"./index-asYEI0eh.js";const D={class:"mb-10px"},L={class:"mb-10px"};function N(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}const V=t({__name:"Poc",setup(t){const j=A({icon:"iconoir:search"}),{t:V}=h(),H=a(!1),R=a(""),M=()=>{q()};l({});const O=l([{field:"selection",type:"selection",width:"55"},{field:"name",label:V("poc.pocName"),minWidth:70},{field:"level",label:V("poc.level"),minWidth:50,columnKey:"level",formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",s="";return"critical"===a?(l="red",s=V("poc.critical")):"high"===a?(l="orange",s=V("poc.high")):"medium"===a?(l="yellow",s=V("poc.medium")):"low"===a?(l="blue",s=V("poc.low")):"info"===a?(l="green",s=V("poc.info")):"unknown"===a&&(l="gray",s=V("poc.unknown")),o(w,{gutter:20,style:"width: 80%"},{default:()=>[o(b,{span:1},{default:()=>[o(i,{icon:"clarity:circle-solid",color:l,size:10},null)]}),o(b,{span:5},{default:()=>[o(S,{type:"info"},N(s)?s:{default:()=>[s]})]})]})},filters:[{text:V("poc.critical"),value:"critical"},{text:V("poc.high"),value:"high"},{text:V("poc.medium"),value:"medium"},{text:V("poc.low"),value:"low"},{text:V("poc.info"),value:"info"},{text:V("poc.unknown"),value:"unknown"}]},{field:"tags",label:"TAG",fit:"true",formatter:(e,t,a)=>{if(0!=a.length){let e;return o(w,{style:{flexWrap:"wrap"}},N(e=a.map((e=>o(b,{span:24,key:e},{default:()=>[o("div",{onClick:()=>te("app",e),style:"display: inline-block; cursor: pointer"},[o(E,{type:"success"},N(e)?e:{default:()=>[e]})])]}))))?e:{default:()=>[e]})}}},{field:"time",label:V("node.createTime"),minWidth:50},{field:"action",label:V("tableDemo.action"),minWidth:30,formatter:(e,t,a)=>{let l,i;return o(n,null,[o(s,{type:"primary",onClick:()=>oe(e)},N(l=V("common.edit"))?l:{default:()=>[l]}),o(s,{type:"danger",onClick:()=>ne(e)},N(i=V("common.delete"))?i:{default:()=>[i]})])}}]),{tableRegister:G,tableState:$,tableMethods:B}=F({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=$,a=await P(R.value,e.value,t.value,ve);return{list:a.data.list,total:a.data.total}}}),{loading:J,dataList:K,total:Q,currentPage:X,pageSize:Y}=$,{getList:q,getElTableExpose:Z}=B;function ee(){return{background:"var(--el-fill-color-light)"}}const te=(e,t)=>{};let ae=l({id:"",name:"",level:"",content:"",tags:[]});const le=async()=>{ae.id="",ae.name="",ae.level="",ae.content="",ae.tags=[],H.value=!0},oe=async e=>{ae.id=e.id,ae.name=e.name,ae.level=e.level,ae.tags=e.tags;const t=await I(ae.id);ae.content=t.data.content,H.value=!0},ie=()=>{H.value=!1},se=a(!1),ne=async e=>{se.value=!0;try{await U([e.id]);se.value=!1,q()}catch(t){se.value=!1,q()}},re=a([]),pe=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await Z(),t=(null==e?void 0:e.getSelectionRows())||[];re.value=t.map((e=>e.id)),se.value=!0;try{await U(re.value),se.value=!1,q()}catch(a){se.value=!1,q()}})()},ue=r(),ce=a({Authorization:`${ue.getToken}`}),me=a(),de=e=>{me.value.clearFiles();const t=e[0];me.value.handleStart(t)},ge=e=>{var t;200===e.code?x.success("Upload succes"):x.error(e.message),505==e.code&&localStorage.removeItem("plugin_key"),q(),null==(t=me.value)||t.clearFiles()},fe=(e,t)=>{t.length>0&&me.value.submit()},ve=l({}),ye=async e=>{Object.assign(ve,e),q()};return(t,a)=>(p(),u(n,null,[o(m(e),null,{default:c((()=>[o(m(w),{gutter:20,style:{"margin-bottom":"15px"}},{default:c((()=>[o(m(b),{span:1.5},{default:c((()=>[o(m(S),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:c((()=>[d(g(m(V)("poc.pocName"))+":",1)])),_:1})])),_:1}),o(m(b),{span:5},{default:c((()=>[o(m(f),{modelValue:R.value,"onUpdate:modelValue":a[0]||(a[0]=e=>R.value=e),placeholder:m(V)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(m(b),{span:5,style:{position:"relative",left:"16px"}},{default:c((()=>[o(m(v),{type:"primary",icon:m(j),style:{height:"100%"},onClick:M},{default:c((()=>[d("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(m(w),{gutter:60},{default:c((()=>[o(m(b),{span:1},{default:c((()=>[y("div",D,[o(m(v),{type:"primary",onClick:le},{default:c((()=>[d(g(m(V)("common.new")),1)])),_:1})])])),_:1}),o(m(b),{span:1},{default:c((()=>[y("div",L,[o(m(s),{type:"danger",loading:se.value,onClick:pe},{default:c((()=>[d(g(m(V)("common.delete")),1)])),_:1},8,["loading"])])])),_:1}),o(m(b),{span:3},{default:c((()=>[o(m(C),{content:m(V)("common.uploadMsg"),placement:"top"},{default:c((()=>[o(m(k),{ref_key:"upload",ref:me,class:"flex items-center",action:"/api/poc/data/import",headers:ce.value,"on-success":ge,limit:1,"on-exceed":de,"auto-upload":!1,onChange:fe},{trigger:c((()=>[o(m(s),null,{icon:c((()=>[o(m(i),{icon:"iconoir:upload"})])),default:c((()=>[d(" "+g(m(V)("plugin.import")),1)])),_:1})])),_:1},8,["headers"])])),_:1},8,["content"])])),_:1})])),_:1}),o(m(z),{pageSize:m(Y),"onUpdate:pageSize":a[1]||(a[1]=e=>_(Y)?Y.value=e:null),currentPage:m(X),"onUpdate:currentPage":a[2]||(a[2]=e=>_(X)?X.value=e:null),onFilterChange:ye,columns:O,data:m(K),stripe:"",border:!0,loading:m(J),resizable:!0,pagination:{total:m(Q),pageSizes:[10,20,50,100,200,500,1e3]},onRegister:m(G),headerCellStyle:ee,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),o(m(W),{modelValue:H.value,"onUpdate:modelValue":a[3]||(a[3]=e=>H.value=e),title:m(ae).id?t.$t("common.edit"):t.$t("common.new"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:800},{default:c((()=>[o(T,{closeDialog:ie,pocForm:m(ae),getList:m(q)},null,8,["pocForm","getList"])])),_:1},8,["modelValue","title"])],64))}});export{V as default};
