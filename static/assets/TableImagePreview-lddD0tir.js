import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-F13nrP2r.js";import{d as t,l as a,e as i,r as l,o,i as r,w as s,a as m}from"./index-KWTKF9N9.js";import{_ as p}from"./Table.vue_vue_type_script_lang-iUd8q4UT.js";import{a as n}from"./index-K6iLrawz.js";import{E as d}from"./el-tag-MzjVikBY.js";import"./el-card-9F69xyLv.js";import"./el-tooltip-w40geAFS.js";import"./el-popper-pnFa2Ecw.js";import"./el-checkbox-U1iRgEY7.js";import"./useInput-CGBP5_dt.js";import"./debounce-QvfGQs-0.js";import"./el-pagination-ooblyvhx.js";import"./el-image-viewer-S1bd3VyN.js";import"./tsxHelper-NOZkKkVH.js";import"./el-dropdown-item-bjCsATwt.js";import"./castArray-9Ouy5Ghy.js";import"./refs-WVQk01D0.js";import"./index-BS1c_xid.js";import"./raf-kE1zktlZ.js";import"./index-XFn6QxJu.js";const u=t({__name:"TableImagePreview",setup(t){const{t:u}=a(),j=[{field:"title",label:u("tableDemo.title")},{field:"image_uri",label:u("tableDemo.preview")},{field:"author",label:u("tableDemo.author")},{field:"display_time",label:u("tableDemo.displayTime")},{field:"importance",label:u("tableDemo.importance"),formatter:(e,t,a)=>i(d,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[u(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:u("tableDemo.pageviews")}],c=l(!0);let b=l([]);return(async e=>{const t=await n(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{c.value=!1}));t&&(b.value=t.data.list)})(),(t,a)=>(o(),r(m(e),{title:m(u)("router.PicturePreview")},{default:s((()=>[i(m(p),{columns:j,data:m(b),loading:c.value,preview:["image_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{u as default};
