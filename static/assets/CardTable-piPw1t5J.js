import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-F13nrP2r.js";import{d as t,l as s,r as i,o as a,i as r,w as o,e as l,a as n,f as p,t as c,y as m}from"./index-KWTKF9N9.js";import{_ as d}from"./Table.vue_vue_type_script_lang-iUd8q4UT.js";import{g as u}from"./index-K6iLrawz.js";import{E as j}from"./el-link-gktHyakg.js";import{E as f}from"./el-divider-685xvbVJ.js";import"./el-card-9F69xyLv.js";import"./el-tooltip-w40geAFS.js";import"./el-popper-pnFa2Ecw.js";import"./el-checkbox-U1iRgEY7.js";import"./useInput-CGBP5_dt.js";import"./debounce-QvfGQs-0.js";import"./el-tag-MzjVikBY.js";import"./el-pagination-ooblyvhx.js";import"./el-image-viewer-S1bd3VyN.js";import"./tsxHelper-NOZkKkVH.js";import"./el-dropdown-item-bjCsATwt.js";import"./castArray-9Ouy5Ghy.js";import"./refs-WVQk01D0.js";import"./index-BS1c_xid.js";import"./raf-kE1zktlZ.js";import"./index-XFn6QxJu.js";const x={class:"flex cursor-pointer"},v={class:"pr-16px"},_=["src"],g={class:"mb-12px font-700 font-size-16px"},y={class:"line-clamp-3 font-size-12px"},b={class:"flex justify-center items-center"},h=["onClick"],k=["onClick"],w=t({__name:"CardTable",setup(t){const{t:w}=s(),C=i(!0);let z=i([]);(async e=>{const t=await u(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{C.value=!1}));t&&(z.value=t.data.list)})();return(t,s)=>(a(),r(n(e),{title:n(w)("tableDemo.cardTable")},{default:o((()=>[l(n(d),{columns:[],data:n(z),loading:C.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:o((e=>[p("div",x,[p("div",v,[p("img",{src:e.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,_)]),p("div",null,[p("div",g,c(e.name),1),p("div",y,c(e.desc),1)])])])),"content-footer":o((e=>[p("div",b,[p("div",{class:"flex-1 text-center",onClick:()=>{}},[l(n(j),{underline:!1},{default:o((()=>[m("操作一")])),_:1})],8,h),l(n(f),{direction:"vertical"}),p("div",{class:"flex-1 text-center",onClick:()=>{}},[l(n(j),{underline:!1},{default:o((()=>[m("操作二")])),_:1})],8,k)])])),_:1},8,["data","loading"])])),_:1},8,["title"]))}});export{w as default};
