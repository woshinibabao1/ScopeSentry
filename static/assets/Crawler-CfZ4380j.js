import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-B4sinkeh.js";import{d as a,N as t,e as l,a1 as o,I as r,r as s,Y as i,o as p,c as n,w as u,a as m,$ as d,H as c,t as g,Q as h,l as _,_ as f}from"./index-CbsoNNgc.js";import{_ as j}from"./Search.vue_vue_type_script_setup_true_lang-ChaJ0dKK.js";import{u as b}from"./useSearch-B7KyOfbH.js";import{u as x}from"./useTable-srm4bvKt.js";import{E as y}from"./el-card-Bu1pgq7H.js";import{E as v}from"./el-pagination-B4Yv1h_7.js";import"./el-tag-7Tafez-0.js";import"./el-popper-_HbrF1jO.js";import{E as w,a as H}from"./el-col-Dx3G6Gsk.js";import{_ as S,E as k,a as z}from"./Table.vue_vue_type_script_lang-DVJWTuWi.js";import"./el-checkbox-BX9zfJQq.js";import"./el-tooltip-l0sNRNKZ.js";import{E as P}from"./el-text-DlfLR9u9.js";import{E}from"./el-divider-CLgHEjVa.js";import{_ as I}from"./Dialog.vue_vue_type_style_index_0_lang-BiqtJw8z.js";import{u as C}from"./useCrudSchemas-BF5eLm3J.js";import{c as R}from"./index-Dr24QQr2.js";import"./useForm-DsUJ7Tn1.js";import"./el-form-item-4OkArQhq.js";import"./castArray-DuA9ouXu.js";import"./el-radio-group-D8MIitN0.js";/* empty css                          */import"./el-input-number-Bp7g6PFD.js";import"./el-select-v2-BfawHYzJ.js";import"./raf-C-vZNDhD.js";import"./useInput-Kf9RVEEH.js";import"./debounce-wcc1GRYs.js";import"./el-switch-CgsPf83W.js";import"./el-progress-CzAr_jmg.js";import"./InputPassword-DU4kh0H3.js";import"./style.css_vue_type_style_index_0_src_true_lang-ioP-pxAB.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DCMqnrji.js";import"./IconPicker-DfOuf_af.js";/* empty css                   */import"./el-tab-pane-DlW0wfXF.js";import"./tsxHelper-Cn8_hiAG.js";import"./index-QCvozDUF.js";import"./useIcon-DZCueV0L.js";import"./el-image-viewer-BySdG1W0.js";import"./el-dropdown-item-DPuD6G3N.js";import"./refs-Bj8u2PxR.js";import"./index-Dh6wrwZi.js";import"./tree-BfZhwLPs.js";import"./index-pyCy64cM.js";const U=f(a({__name:"Crawler",setup(a){const{t:f}=_(),{searchRegister:U}=b(),A=t([{field:"search",label:f("form.input"),component:"Input",formItemProps:{size:"large",style:{width:"100%"}},componentProps:{clearable:!1,slots:{suffix:()=>l(r,{class:"icon-button",onClick:N,text:!0,style:"outline: none;background-color: transparent !important; color: inherit !important; box-shadow: none !important;position: relative;left: 24%"},{default:()=>[l(o,{icon:"tdesign:chat-bubble-help"},null)]})}}}]),L=[{operator:"=",meaning:f("searchHelp.like")},{operator:"!=",meaning:f("searchHelp.notIn")},{operator:"==",meaning:f("searchHelp.equal")},{operator:"&&",meaning:f("searchHelp.and")},{operator:"||",meaning:f("searchHelp.or")},{operator:"()",meaning:f("searchHelp.brackets")}],W=[{keyword:"url",example:'url="http://example.com"',explain:f("searchHelp.url")},{keyword:"method",example:'method="POST"',explain:f("searchHelp.method")},{keyword:"body",example:'body="username=admin"',explain:f("searchHelp.crawlerBody")},{keyword:"project",example:'project="Hackerone"',explain:f("searchHelp.project")}],M=s(!1),N=()=>{M.value=!0},T=s(!0),V=s("inline"),q=s("left"),B=s(""),D=e=>{B.value=e.search,ae()},F=s(!1),Q=t([{field:"index",label:f("tableDemo.index"),type:"index",minWidth:10},{field:"method",label:"Method",minWidth:15},{field:"url",label:"URL",minWidth:60},{field:"body",label:f("crawler.postParameter"),minWidth:60}]),{allSchemas:Y}=C(Q),{tableRegister:G,tableState:J,tableMethods:K}=x({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=J,t=await R(B.value,e.value,a.value);return{list:t.data.list,total:t.data.total}},immediate:!1}),{loading:O,dataList:X,total:Z,currentPage:$,pageSize:ee}=J,{getList:ae}=K;function te(){return{background:"var(--el-fill-color-light)"}}ee.value=20,i((()=>{oe(),window.addEventListener("resize",oe)}));const le=s(0),oe=()=>{const e=window.innerHeight||document.documentElement.clientHeight;le.value=.7*e};return(a,t)=>(p(),n(h,null,[l(m(e),{style:{height:"80px"}},{default:u((()=>[l(m(j),{schema:A,"is-col":T.value,layout:V.value,"show-reset":!1,"button-position":q.value,"search-loading":F.value,onSearch:D,onReset:D,onRegister:m(U)},null,8,["schema","is-col","layout","button-position","search-loading","onRegister"])])),_:1}),l(m(H),null,{default:u((()=>[l(m(w),null,{default:u((()=>[l(m(y),null,{default:u((()=>[l(m(S),{pageSize:m(ee),"onUpdate:pageSize":t[0]||(t[0]=e=>d(ee)?ee.value=e:null),currentPage:m($),"onUpdate:currentPage":t[1]||(t[1]=e=>d($)?$.value=e:null),columns:m(Y).tableColumns,data:m(X),"max-height":le.value,stripe:"",border:!0,loading:m(O),resizable:!0,onRegister:m(G),headerCellStyle:te,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(m(w),{":span":24},{default:u((()=>[l(m(y),null,{default:u((()=>[l(m(v),{pageSize:m(ee),"onUpdate:pageSize":t[2]||(t[2]=e=>d(ee)?ee.value=e:null),currentPage:m($),"onUpdate:currentPage":t[3]||(t[3]=e=>d($)?$.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:m(Z)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),l(m(I),{modelValue:M.value,"onUpdate:modelValue":t[4]||(t[4]=e=>M.value=e),title:m(f)("common.querysyntax"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:u((()=>[l(m(H),null,{default:u((()=>[l(m(w),null,{default:u((()=>[l(m(P),{tag:"b",size:"small"},{default:u((()=>[c(g(m(f)("searchHelp.operator")),1)])),_:1}),l(m(E),{direction:"vertical"}),l(m(P),{size:"small",type:"danger"},{default:u((()=>[c(g(m(f)("searchHelp.notice")),1)])),_:1})])),_:1}),l(m(w),{style:{"margin-top":"10px"}},{default:u((()=>[l(m(k),{headerCellStyle:te,data:L},{default:u((()=>[l(m(z),{prop:"operator",label:m(f)("searchHelp.operator"),width:"300"},null,8,["label"]),l(m(z),{prop:"meaning",label:m(f)("searchHelp.meaning")},null,8,["label"])])),_:1})])),_:1}),l(m(w),{style:{"margin-top":"15px"}},{default:u((()=>[l(m(P),{tag:"b",size:"small"},{default:u((()=>[c(g(m(f)("searchHelp.keywords")),1)])),_:1})])),_:1}),l(m(w),{style:{"margin-top":"10px"}},{default:u((()=>[l(m(k),{headerCellStyle:te,data:W},{default:u((()=>[l(m(z),{prop:"keyword",label:m(f)("searchHelp.keywords")},null,8,["label"]),l(m(z),{prop:"example",label:m(f)("searchHelp.example")},null,8,["label"]),l(m(z),{prop:"explain",label:m(f)("searchHelp.explain")},null,8,["label"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-cce00434"]]);export{U as default};