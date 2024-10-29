import{d as e,z as t,o as s,c as a,e as l,w as i,n as r,a as o,k as n,f as d,A as p,u as c,B as u,s as f,v as m,I as v,E as h,r as b,C as y,D as j,G as x,i as g,y as w,t as S,l as D}from"./index-B4Nyjh3H.js";import{E as B}from"./el-card-wk8kGoMw.js";import{D as _}from"./Descriptions-D_hZcBhj.js";import{g as H}from"./index-BS_iuBaF.js";import{a as L,E as k}from"./el-col-ChTZtubL.js";import{E as A}from"./el-tag-DS_6W9-f.js";import{E}from"./el-text-D_MjvMVh.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-DBt0ZFPB.js";import"./index-CdW5lxxY.js";import"./index-CdbOSPly.js";const P={class:"mb-20px pb-20px",style:{"border-bottom":"1px solid var(--el-border-color)"}},R=e({__name:"ContentDetailWrap",props:{title:t.string.def(""),message:t.string.def("")},setup(e){const{getPrefixCls:t}=n(),c=t("content-detail-wrap");return(e,t)=>(s(),a("div",{class:r([`${o(c)}-container`,"relative"])},[l(o(B),{class:r([`${o(c)}-body`,"mb-20px"]),shadow:"never"},{default:i((()=>[d("div",P,[p(e.$slots,"header")]),p(e.$slots,"default")])),_:3},8,["class"])],2))}}),C=e({__name:"AssetDetail",setup(e){const{push:t,go:a}=c(),{t:r}=D(),{query:n}=u(),d=f([{field:"host",label:r("asset.domain"),slots:{default:e=>{const t=e.host;return""==t?m("div","-"):m("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"IP",label:r("asset.IP"),slots:{default:e=>{const t=e.IP;return""==t?m("div","-"):m("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"URL",label:"URL",slots:{default:e=>{const t=e.URL;return""==t?m("div","-"):m("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"port",label:r("asset.port"),slots:{default:e=>{const t=e.port;return m("div",""==t?"-":[m(A,t)])}}},{field:"service",label:r("asset.service"),slots:{default:e=>{const t=e.service;return m("div",""==t?"-":[m(A,{type:"info",effect:"light",round:!0},t)])}}},{field:"title",label:r("asset.title"),slots:{default:e=>{const t=e.title;return m("div",""==t?"-":t)}}},{field:"status",label:r("asset.status"),slots:{default:e=>{const t=e.status;if(""==t)return m("div","-");const s=t<300?"#2eb98a":"#ff5252";return m("div",[m(L,{gutter:2},[m(k,{span:.99999},[m(v,{icon:"clarity:circle-solid",color:s,size:6,style:{transform:"translateY(-35%)"}})]),m(k,{span:2},[m(E,t)])])])}}},{field:"FaviconHash",label:"Favicon Hash",slots:{default:e=>{const t=e.FaviconHash;return""==t?m("div","-"):m("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"jarm",label:"Jarm",slots:{default:e=>{const t=e.jarm;return""==t?m("div","-"):m("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"time",label:r("asset.time"),slots:{default:e=>{const t=e.time;return""==t?m("div","-"):m("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"products",label:r("asset.products"),span:12,slots:{default:e=>{const t=e.products;if(!Array.isArray(t)||0===t.length)return m("div","-");const s=[];for(let l=0;l<t.length;l+=6){const e=l,a=l+6,i=t.slice(e,a);s.push(i)}const a=s.map(((e,t)=>{const s=e.map(((e,s)=>m(k,{span:3},m(A,{key:6*t+s,type:"success"},e))));return m(L,{gutter:1},s)}));return m("div",a)}}},{field:"project",label:r("project.projectName"),span:12,slots:{default:e=>{const t=e.project;return m("div",""==t?"-":[m(A,t)])}}},{field:"TLSData",label:"TLS",span:24,slots:{default:e=>{const t=e.TLSData;return""==t?m("div","-"):m(h,{maxHeight:"100px"},{default:()=>m("div",{style:{whiteSpace:"pre-line"}},t)})}}},{field:"hash",label:"Hash",span:24,slots:{default:e=>{const t=e.hash;return""==t?m("div","-"):m("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"banner",label:"Banner",span:24,slots:{default:e=>{const t=e.banner;return""==t?m("div","-"):m("div",{style:{whiteSpace:"pre-line"}},t)}}},{field:"ResponseBody",label:r("asset.responseBody"),span:24,slots:{default:e=>{const t=e.ResponseBody;return""==t?m("div","-"):m(h,{maxHeight:"100px"},{default:()=>m("div",{style:{whiteSpace:"pre-line"}},t)})}}}]),p=b(!0);let B=f({});return(async()=>{const e=await H(n.id);e&&(B=Object.assign(B,(null==e?void 0:e.data)||{}),p.value=!1)})(),(e,n)=>{const c=y("BaseButton"),u=j("loading");return x((s(),g(o(R),{title:o(r)("exampleDemo.detail"),onBack:n[1]||(n[1]=e=>o(t)("/asset-information/index"))},{header:i((()=>[l(c,{onClick:n[0]||(n[0]=e=>o(a)(-1))},{default:i((()=>[w(S(o(r)("common.back")),1)])),_:1})])),default:i((()=>[l(o(_),{title:o(r)("asset.assetDetail"),schema:d,data:o(B),collapse:!1},null,8,["title","schema","data"])])),_:1},8,["title"])),[[u,p.value]])}}});export{C as default};