import{d as e,s as a,e as t,G as l,F as o,o as i,i as s,a as n,J as r,l as c}from"./index-KRGk12nW.js";import{_ as p}from"./Table.vue_vue_type_script_lang-DpFssv_i.js";import{u as m}from"./useTable-F7zxLGkE.js";import{c as d}from"./index-COS7TZtJ.js";import{u}from"./useIcon-C2iD-PC_.js";import{u as f,r as b,a as h}from"./index-CVD5zqZx.js";function g(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!r(e)}const y=e({__name:"plugin",props:{closeDialog:{type:Function},name:{}},setup(e){const{t:r}=c(),y=e,k=u({icon:"icon-park:check-one"}),j=u({icon:"line-md:close-circle",color:"#e01f1f"}),_=a([{field:"index",label:r("tableDemo.index"),type:"index",minWidth:"15"},{field:"name",label:r("plugin.name")},{field:"install",label:"Install",formatter:(e,a,t)=>"1"==t?k:j},{field:"check",label:"Check",formatter:(e,a,t)=>"1"==t?k:j},{field:"action",label:r("tableDemo.action"),minWidth:200,formatter:(e,a,i)=>{let s,n,c;return t(o,null,[t(l,{type:"warning",onClick:()=>A("reinstall",e)},g(s=r("plugin.reInstall"))?s:{default:()=>[s]}),t(l,{type:"success",onClick:()=>A("recheck",e)},g(n=r("plugin.reCheck"))?n:{default:()=>[n]}),t(l,{type:"danger",onClick:()=>A("uninstall",e)},g(c=r("plugin.uninstall"))?c:{default:()=>[c]})])}}]),{tableRegister:x,tableState:C}=m({fetchDataApi:async()=>({list:(await d(y.name)).data.list}),immediate:!0}),{loading:S,dataList:w}=C,A=(e,a)=>{switch(e){case"reinstall":h("all",a.hash,a.module);break;case"recheck":b("all",a.hash,a.module);break;case"uninstall":f("all",a.hash,a.module)}};return(e,a)=>(i(),s(n(p),{onRegister:n(x),columns:_,data:n(w),rowKey:"_id",loading:n(S),resizable:!0,"max-height":"600","tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!0,showAfter:0,popperOptions:{},popperClass:"test",placement:"top",hideAfter:0,disabled:!1},style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["onRegister","columns","data","loading"]))}});export{y as _};