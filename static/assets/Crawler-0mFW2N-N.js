import{d as e,r as t,s as a,K as l,o as r,c as o,e as s,a as i,w as p,N as n,F as m,l as u,_ as d}from"./index-B4Nyjh3H.js";import{u as c}from"./useTable-CG-SPGP0.js";import{E as j}from"./el-card-wk8kGoMw.js";import{E as g}from"./el-select-ErNzBCXo.js";import"./el-tag-DS_6W9-f.js";import"./el-popper-DBt0ZFPB.js";import{E as h,a as _}from"./el-col-ChTZtubL.js";import{_ as f}from"./Table.vue_vue_type_script_lang-DkXax4KK.js";import{u as x}from"./useCrudSchemas-C24QrNmN.js";import{f as b}from"./index-BS_iuBaF.js";import v from"./Csearch-BRD7XYf_.js";import"./useInput-Drsa8fv-.js";import"./index-ThnV7dxG.js";import"./isEqual-DFD3TClT.js";import"./debounce-4WtFbZlf.js";import"./el-table-column-D5fUDOpn.js";import"./el-checkbox-DAPJr8Xi.js";import"./isArrayLikeObject-CWayLN3s.js";import"./raf-jjs8tbGM.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-image-viewer-CLYRUyY9.js";import"./tsxHelper-TQdELaO0.js";import"./el-dropdown-item-BheZ-il5.js";import"./castArray-BrlE0VBR.js";import"./refs-CGmkSrb7.js";import"./index-xQ3iUQKd.js";import"./tree-BfZhwLPs.js";import"./index-CdbOSPly.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-BgCcO80c.js";import"./el-text-D_MjvMVh.js";import"./el-divider-C1wqG4VS.js";import"./el-tree-select-C06mNOXK.js";import"./index-CdW5lxxY.js";import"./Dialog.vue_vue_type_style_index_0_lang-bTolZCeI.js";import"./useIcon-DitchYFS.js";import"./exportData.vue_vue_type_script_setup_true_lang-wnjOG-ih.js";import"./el-tab-pane-Dsdbtla6.js";import"./el-form-DDCfLIJB.js";import"./el-radio-group-exGM2d1B.js";import"./el-space-D7hoWy8Y.js";const y=d(e({__name:"Crawler",props:{projectList:{}},setup(e){const{t:d}=u(),y=[{keyword:"url",example:'url="http://example.com"',explain:d("searchHelp.url")},{keyword:"method",example:'method="POST"',explain:d("searchHelp.method")},{keyword:"body",example:'body="username=admin"',explain:d("searchHelp.crawlerBody")},{keyword:"project",example:'project="Hackerone"',explain:d("searchHelp.project")}],S=t(""),w=e=>{S.value=e,A()},E=a([{field:"selection",type:"selection",minWidth:"55"},{field:"index",label:d("tableDemo.index"),type:"index",minWidth:55},{field:"method",label:"Method",minWidth:100},{field:"url",label:"URL",minWidth:500},{field:"body",label:d("crawler.postParameter"),minWidth:300}]),{allSchemas:z}=x(E),{tableRegister:L,tableState:k,tableMethods:P}=c({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=k,a=await b(S.value,e.value,t.value,F);return{list:a.data.list,total:a.data.total}},immediate:!1}),{loading:C,dataList:H,total:U,currentPage:T,pageSize:W}=k,{getList:A,getElTableExpose:D}=P;function I(){return{background:"var(--el-fill-color-light)"}}W.value=20,l((()=>{N(),window.addEventListener("resize",N)}));const R=t(0),N=()=>{const e=window.innerHeight||document.documentElement.clientHeight;R.value=.7*e},F=a({}),M=(e,t)=>{Object.keys(F).forEach((e=>delete F[e])),Object.assign(F,t),S.value=e,A()};return(e,t)=>(r(),o(m,null,[s(v,{getList:i(A),handleSearch:w,searchKeywordsData:y,index:"crawler",getElTableExpose:i(D),projectList:e.$props.projectList,handleFilterSearch:M},null,8,["getList","getElTableExpose","projectList"]),s(i(_),null,{default:p((()=>[s(i(h),null,{default:p((()=>[s(i(j),null,{default:p((()=>[s(i(f),{pageSize:i(W),"onUpdate:pageSize":t[0]||(t[0]=e=>n(W)?W.value=e:null),currentPage:i(T),"onUpdate:currentPage":t[1]||(t[1]=e=>n(T)?T.value=e:null),columns:i(z).tableColumns,data:i(H),"max-height":R.value,stripe:"",border:!0,loading:i(C),resizable:!0,onRegister:i(L),headerCellStyle:I,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),s(i(h),{":span":24},{default:p((()=>[s(i(j),null,{default:p((()=>[s(i(g),{pageSize:i(W),"onUpdate:pageSize":t[2]||(t[2]=e=>n(W)?W.value=e:null),currentPage:i(T),"onUpdate:currentPage":t[3]||(t[3]=e=>n(T)?T.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:i(U)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-4dec5ff1"]]);export{y as default};