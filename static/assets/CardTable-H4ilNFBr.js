import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BgCcO80c.js";import{d as t,l as s,r as i,o as a,i as r,w as o,e as l,a as p,f as n,t as m,y as c}from"./index-B4Nyjh3H.js";import{_ as d}from"./Table.vue_vue_type_script_lang-DkXax4KK.js";import{g as u}from"./index-B2RH5IwT.js";import{E as j}from"./el-link-B3spbBLv.js";import{E as x}from"./el-divider-C1wqG4VS.js";import"./el-card-wk8kGoMw.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DBt0ZFPB.js";import"./el-table-column-D5fUDOpn.js";import"./index-ThnV7dxG.js";import"./isEqual-DFD3TClT.js";import"./debounce-4WtFbZlf.js";import"./el-checkbox-DAPJr8Xi.js";import"./isArrayLikeObject-CWayLN3s.js";import"./raf-jjs8tbGM.js";import"./el-tag-DS_6W9-f.js";import"./el-select-ErNzBCXo.js";import"./useInput-Drsa8fv-.js";import"./el-image-viewer-CLYRUyY9.js";import"./tsxHelper-TQdELaO0.js";import"./el-dropdown-item-BheZ-il5.js";import"./castArray-BrlE0VBR.js";import"./refs-CGmkSrb7.js";import"./index-xQ3iUQKd.js";import"./index-CdbOSPly.js";const f={class:"flex cursor-pointer"},v={class:"pr-16px"},_=["src"],g={class:"mb-12px font-700 font-size-16px"},b={class:"line-clamp-3 font-size-12px"},y={class:"flex justify-center items-center"},w=["onClick"],k=["onClick"],C=t({__name:"CardTable",setup(t){const{t:C}=s(),h=i(!0);let z=i([]);(async e=>{const t=await u(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{h.value=!1}));t&&(z.value=t.data.list)})();return(t,s)=>(a(),r(p(e),{title:p(C)("tableDemo.cardTable")},{default:o((()=>[l(p(d),{columns:[],data:p(z),loading:h.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:o((e=>[n("div",f,[n("div",v,[n("img",{src:e.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,_)]),n("div",null,[n("div",g,m(e.name),1),n("div",b,m(e.desc),1)])])])),"content-footer":o((e=>[n("div",y,[n("div",{class:"flex-1 text-center",onClick:()=>{}},[l(p(j),{underline:!1},{default:o((()=>[c("操作一")])),_:1})],8,w),l(p(x),{direction:"vertical"}),n("div",{class:"flex-1 text-center",onClick:()=>{}},[l(p(j),{underline:!1},{default:o((()=>[c("操作二")])),_:1})],8,k)])])),_:1},8,["data","loading"])])),_:1},8,["title"]))}});export{C as default};