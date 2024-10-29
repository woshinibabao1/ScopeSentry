import{W as e,c6 as a,bk as i,X as t,Z as n,aZ as l,a1 as c,a0 as s,$ as o,bq as v,d,ax as u,aC as r,a4 as f,b9 as p,b8 as y,a5 as b,r as m,b4 as h,R as k,az as x,K as I,o as g,c as V,f as S,a as T,n as _,ab as w,i as C,w as A,aF as B,aa as N,j as E,t as P,e as K,aN as $,A as j,aE as z,ac as F,a6 as Z,ay as q,a_ as R,bs as W,ae as X}from"./index-B4Nyjh3H.js";const D=e({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:a},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:i},activeActionIcon:{type:i},activeIcon:{type:i},inactiveIcon:{type:i},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:t(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0}}),G={[n]:e=>l(e)||c(e)||s(e),[o]:e=>l(e)||c(e)||s(e),[v]:e=>l(e)||c(e)||s(e)},H=["onClick"],J=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],L=["aria-hidden"],M=["aria-hidden"],O=["aria-hidden"],Q="ElSwitch",U=d({name:Q});const Y=X(Z(d({...U,props:D,emits:G,setup(e,{expose:a,emit:i}){const t=e,{formItem:c}=u(),s=r(),d=f("switch"),{inputId:Z}=p(t,{formItemContext:c}),X=y(b((()=>t.loading))),D=m(!1!==t.modelValue),G=m(),U=m(),Y=b((()=>[d.b(),d.m(s.value),d.is("disabled",X.value),d.is("checked",ne.value)])),ee=b((()=>[d.e("label"),d.em("label","left"),d.is("active",!ne.value)])),ae=b((()=>[d.e("label"),d.em("label","right"),d.is("active",ne.value)])),ie=b((()=>({width:h(t.width)})));k((()=>t.modelValue),(()=>{D.value=!0}));const te=b((()=>!!D.value&&t.modelValue)),ne=b((()=>te.value===t.activeValue));[t.activeValue,t.inactiveValue].includes(te.value)||(i(n,t.inactiveValue),i(o,t.inactiveValue),i(v,t.inactiveValue)),k(ne,(e=>{var a;G.value.checked=e,t.validateEvent&&(null==(a=null==c?void 0:c.validate)||a.call(c,"change").catch((e=>x())))}));const le=()=>{const e=ne.value?t.inactiveValue:t.activeValue;i(n,e),i(o,e),i(v,e),q((()=>{G.value.checked=ne.value}))},ce=()=>{if(X.value)return;const{beforeChange:e}=t;if(!e)return void le();const a=e();[R(a),l(a)].includes(!0)||W(Q,"beforeChange must return type `Promise<boolean>` or `boolean`"),R(a)?a.then((e=>{e&&le()})).catch((e=>{})):a&&le()};return I((()=>{G.value.checked=ne.value})),a({focus:()=>{var e,a;null==(a=null==(e=G.value)?void 0:e.focus)||a.call(e)},checked:ne}),(e,a)=>(g(),V("div",{class:_(T(Y)),onClick:F(ce,["prevent"])},[S("input",{id:T(Z),ref_key:"input",ref:G,class:_(T(d).e("input")),type:"checkbox",role:"switch","aria-checked":T(ne),"aria-disabled":T(X),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:T(X),tabindex:e.tabindex,onChange:le,onKeydown:w(ce,["enter"])},null,42,J),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?E("v-if",!0):(g(),V("span",{key:0,class:_(T(ee))},[e.inactiveIcon?(g(),C(T(N),{key:0},{default:A((()=>[(g(),C(B(e.inactiveIcon)))])),_:1})):E("v-if",!0),!e.inactiveIcon&&e.inactiveText?(g(),V("span",{key:1,"aria-hidden":T(ne)},P(e.inactiveText),9,L)):E("v-if",!0)],2)),S("span",{ref_key:"core",ref:U,class:_(T(d).e("core")),style:z(T(ie))},[e.inlinePrompt?(g(),V("div",{key:0,class:_(T(d).e("inner"))},[e.activeIcon||e.inactiveIcon?(g(),C(T(N),{key:0,class:_(T(d).is("icon"))},{default:A((()=>[(g(),C(B(T(ne)?e.activeIcon:e.inactiveIcon)))])),_:1},8,["class"])):e.activeText||e.inactiveText?(g(),V("span",{key:1,class:_(T(d).is("text")),"aria-hidden":!T(ne)},P(T(ne)?e.activeText:e.inactiveText),11,M)):E("v-if",!0)],2)):E("v-if",!0),S("div",{class:_(T(d).e("action"))},[e.loading?(g(),C(T(N),{key:0,class:_(T(d).is("loading"))},{default:A((()=>[K(T($))])),_:1},8,["class"])):T(ne)?j(e.$slots,"active-action",{key:1},(()=>[e.activeActionIcon?(g(),C(T(N),{key:0},{default:A((()=>[(g(),C(B(e.activeActionIcon)))])),_:1})):E("v-if",!0)])):T(ne)?E("v-if",!0):j(e.$slots,"inactive-action",{key:2},(()=>[e.inactiveActionIcon?(g(),C(T(N),{key:0},{default:A((()=>[(g(),C(B(e.inactiveActionIcon)))])),_:1})):E("v-if",!0)]))],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?E("v-if",!0):(g(),V("span",{key:1,class:_(T(ae))},[e.activeIcon?(g(),C(T(N),{key:0},{default:A((()=>[(g(),C(B(e.activeIcon)))])),_:1})):E("v-if",!0),!e.activeIcon&&e.activeText?(g(),V("span",{key:1,"aria-hidden":!T(ne)},P(e.activeText),9,O)):E("v-if",!0)],2))],10,H))}}),[["__file","switch.vue"]]));export{Y as E};