import{d as a,r as e,V as s,o as t,i as o,w as n,e as l,a as d,f as i,t as u,M as r,y as c,l as m,_ as f}from"./index-B4Nyjh3H.js";import{E as p,a as v}from"./el-col-ChTZtubL.js";import{E as y}from"./el-card-wk8kGoMw.js";import{j as _,o as h,T as w}from"./index-Bus7aJ6T.js";import{a as x,b as j}from"./index-C-AHRbrW.js";import"./index-CdbOSPly.js";const b=f(a({__name:"Subfinder",setup(a){const{t:f}=m(),b=e(""),g=[_(),h];s((async()=>{try{const a=await x();200===a.code&&(b.value=a.data.content)}catch(a){}}));const V=async()=>{window.confirm("Do you want to save the data?")&&await E()},E=async()=>{L.value=!0;200==(await j(b.value)).code&&(L.value=!1)},L=e(!1);return(a,e)=>(t(),o(d(y),{shadow:"never",class:"mb-20px"},{header:n((()=>[l(d(v),null,{default:n((()=>[l(d(p),{span:3,style:{height:"100%"}},{default:n((()=>[i("span",null,u(d(f)("configuration.subfinder")),1)])),_:1}),l(d(p),{span:2,offset:19},{default:n((()=>[l(d(r),{type:"primary",onClick:V,onLoading:L.value},{default:n((()=>[c(u(d(f)("common.save")),1)])),_:1},8,["onLoading"])])),_:1})])),_:1})])),default:n((()=>[l(d(w),{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=a=>b.value=a),style:{height:"800px"},autofocus:!0,"indent-with-tab":!0,"tab-size":2,extensions:g},null,8,["modelValue"])])),_:1}))}}),[["__scopeId","data-v-3e181418"]]);export{b as default};