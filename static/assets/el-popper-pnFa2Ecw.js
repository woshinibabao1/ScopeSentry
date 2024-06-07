import{bZ as e,V as t,aV as n,a3 as r,aW as o,O as a,H as i,a_ as s,b2 as l,a as u,b8 as p,r as f,x as c,b_ as d,b$ as v,S as g,c0 as m,a6 as h,U as y,Z as b,a1 as w,d as x,R as O,a4 as R,a2 as A,a5 as E,o as T,c as S,n as C,aw as k,ao as j,D as B,c1 as M,aq as P,F,c2 as L,c3 as D,e as I,c4 as _,c5 as H,ba as $,i as W,w as q,ay as z,j as N,c6 as U,br as V,c7 as K,ac as Z,aP as X,a0 as Y,bj as G,ab as J,h as Q,c8 as ee,av as te,au as ne,bV as re,c9 as oe,t as ae}from"./index-KWTKF9N9.js";const ie=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const o=null==e?void 0:e(r);if(!1===n||!o)return null==t?void 0:t(r)},se=e=>t=>"mouse"===t.pointerType?e(t):void 0;function le(e){return void 0===e}const ue=e({type:t(Boolean),default:null}),pe=e({type:t(Function)}),fe=e=>{const t=`update:${e}`,u=`onUpdate:${e}`;return{useModelToggle:({indicator:p,toggleReason:f,shouldHideWhenRouteChanges:c,shouldProceed:d,onShow:v,onHide:g})=>{const m=n(),{emit:h}=m,y=m.props,b=r((()=>o(y[u]))),w=r((()=>null===y[e])),x=e=>{!0!==p.value&&(p.value=!0,f&&(f.value=e),o(v)&&v(e))},O=e=>{!1!==p.value&&(p.value=!1,f&&(f.value=e),o(g)&&g(e))},R=e=>{if(!0===y.disabled||o(d)&&!d())return;const n=b.value&&s;n&&h(t,!0),!w.value&&n||x(e)},A=e=>{if(!0===y.disabled||!s)return;const n=b.value&&s;n&&h(t,!1),!w.value&&n||O(e)},E=e=>{l(e)&&(y.disabled&&e?b.value&&h(t,!1):p.value!==e&&(e?x():O()))};return a((()=>y[e]),E),c&&void 0!==m.appContext.config.globalProperties.$route&&a((()=>({...m.proxy.$route})),(()=>{c.value&&p.value&&A()})),i((()=>{E(y[e])})),{hide:A,show:R,toggle:()=>{p.value?A():R()},hasUpdateHandler:b}},useModelToggleProps:{[e]:ue,[u]:pe},useModelToggleEmits:[t]}};fe("modelValue");var ce="top",de="bottom",ve="right",ge="left",me="auto",he=[ce,de,ve,ge],ye="start",be="end",we="clippingParents",xe="viewport",Oe="popper",Re="reference",Ae=he.reduce((function(e,t){return e.concat([t+"-"+ye,t+"-"+be])}),[]),Ee=[].concat(he,[me]).reduce((function(e,t){return e.concat([t,t+"-"+ye,t+"-"+be])}),[]),Te=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Se(e){return e?(e.nodeName||"").toLowerCase():null}function Ce(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ke(e){return e instanceof Ce(e).Element||e instanceof Element}function je(e){return e instanceof Ce(e).HTMLElement||e instanceof HTMLElement}function Be(e){return"undefined"!=typeof ShadowRoot&&(e instanceof Ce(e).ShadowRoot||e instanceof ShadowRoot)}var Me={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];!je(o)||!Se(o)||(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});!je(r)||!Se(r)||(Object.assign(r.style,a),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function Pe(e){return e.split("-")[0]}var Fe=Math.max,Le=Math.min,De=Math.round;function Ie(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(je(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(r=De(n.width)/i||1),a>0&&(o=De(n.height)/a||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function _e(e){var t=Ie(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function He(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Be(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function $e(e){return Ce(e).getComputedStyle(e)}function We(e){return["table","td","th"].indexOf(Se(e))>=0}function qe(e){return((ke(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return"html"===Se(e)?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||qe(e)}function Ne(e){return je(e)&&"fixed"!==$e(e).position?e.offsetParent:null}function Ue(e){for(var t=Ce(e),n=Ne(e);n&&We(n)&&"static"===$e(n).position;)n=Ne(n);return n&&("html"===Se(n)||"body"===Se(n)&&"static"===$e(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&je(e)&&"fixed"===$e(e).position)return null;var n=ze(e);for(Be(n)&&(n=n.host);je(n)&&["html","body"].indexOf(Se(n))<0;){var r=$e(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function Ve(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ke(e,t,n){return Fe(e,Le(t,n))}function Ze(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Xe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var Ye={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=Pe(n.placement),l=Ve(s),u=[ge,ve].indexOf(s)>=0?"height":"width";if(a&&i){var p=function(e,t){return Ze("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Xe(e,he))}(o.padding,n),f=_e(a),c="y"===l?ce:ge,d="y"===l?de:ve,v=n.rects.reference[u]+n.rects.reference[l]-i[l]-n.rects.popper[u],g=i[l]-n.rects.reference[l],m=Ue(a),h=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,y=v/2-g/2,b=p[c],w=h-f[u]-p[d],x=h/2-f[u]/2+y,O=Ke(b,x,w),R=l;n.modifiersData[r]=((t={})[R]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"==typeof r&&!(r=t.elements.popper.querySelector(r))||!He(t.elements.popper,r)||(t.elements.arrow=r))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ge(e){return e.split("-")[1]}var Je={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Qe(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,f=e.isFixed,c=i.x,d=void 0===c?0:c,v=i.y,g=void 0===v?0:v,m="function"==typeof p?p({x:d,y:g}):{x:d,y:g};d=m.x,g=m.y;var h=i.hasOwnProperty("x"),y=i.hasOwnProperty("y"),b=ge,w=ce,x=window;if(u){var O=Ue(n),R="clientHeight",A="clientWidth";if(O===Ce(n)&&("static"!==$e(O=qe(n)).position&&"absolute"===s&&(R="scrollHeight",A="scrollWidth")),o===ce||(o===ge||o===ve)&&a===be)w=de,g-=(f&&O===x&&x.visualViewport?x.visualViewport.height:O[R])-r.height,g*=l?1:-1;if(o===ge||(o===ce||o===de)&&a===be)b=ve,d-=(f&&O===x&&x.visualViewport?x.visualViewport.width:O[A])-r.width,d*=l?1:-1}var E,T=Object.assign({position:s},u&&Je),S=!0===p?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:De(t*r)/r||0,y:De(n*r)/r||0}}({x:d,y:g}):{x:d,y:g};return d=S.x,g=S.y,l?Object.assign({},T,((E={})[w]=y?"0":"",E[b]=h?"0":"",E.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+g+"px)":"translate3d("+d+"px, "+g+"px, 0)",E)):Object.assign({},T,((t={})[w]=y?g+"px":"",t[b]=h?d+"px":"",t.transform="",t))}var et={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,a=n.adaptive,i=void 0===a||a,s=n.roundOffsets,l=void 0===s||s,u={placement:Pe(t.placement),variation:Ge(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Qe(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Qe(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},tt={passive:!0};var nt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,i=r.resize,s=void 0===i||i,l=Ce(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,tt)})),s&&l.addEventListener("resize",n.update,tt),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,tt)})),s&&l.removeEventListener("resize",n.update,tt)}},data:{}},rt={left:"right",right:"left",bottom:"top",top:"bottom"};function ot(e){return e.replace(/left|right|bottom|top/g,(function(e){return rt[e]}))}var at={start:"end",end:"start"};function it(e){return e.replace(/start|end/g,(function(e){return at[e]}))}function st(e){var t=Ce(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function lt(e){return Ie(qe(e)).left+st(e).scrollLeft}function ut(e){var t=$e(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function pt(e){return["html","body","#document"].indexOf(Se(e))>=0?e.ownerDocument.body:je(e)&&ut(e)?e:pt(ze(e))}function ft(e,t){var n;void 0===t&&(t=[]);var r=pt(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),a=Ce(r),i=o?[a].concat(a.visualViewport||[],ut(r)?r:[]):r,s=t.concat(i);return o?s:s.concat(ft(ze(i)))}function ct(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function dt(e,t){return t===xe?ct(function(e){var t=Ce(e),n=qe(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,i=0,s=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=r.offsetLeft,s=r.offsetTop)),{width:o,height:a,x:i+lt(e),y:s}}(e)):ke(t)?function(e){var t=Ie(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ct(function(e){var t,n=qe(e),r=st(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=Fe(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Fe(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+lt(e),l=-r.scrollTop;return"rtl"===$e(o||n).direction&&(s+=Fe(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(qe(e)))}function vt(e,t,n){var r="clippingParents"===t?function(e){var t=ft(ze(e)),n=["absolute","fixed"].indexOf($e(e).position)>=0&&je(e)?Ue(e):e;return ke(n)?t.filter((function(e){return ke(e)&&He(e,n)&&"body"!==Se(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),a=o[0],i=o.reduce((function(t,n){var r=dt(e,n);return t.top=Fe(r.top,t.top),t.right=Le(r.right,t.right),t.bottom=Le(r.bottom,t.bottom),t.left=Fe(r.left,t.left),t}),dt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function gt(e){var t,n=e.reference,r=e.element,o=e.placement,a=o?Pe(o):null,i=o?Ge(o):null,s=n.x+n.width/2-r.width/2,l=n.y+n.height/2-r.height/2;switch(a){case ce:t={x:s,y:n.y-r.height};break;case de:t={x:s,y:n.y+n.height};break;case ve:t={x:n.x+n.width,y:l};break;case ge:t={x:n.x-r.width,y:l};break;default:t={x:n.x,y:n.y}}var u=a?Ve(a):null;if(null!=u){var p="y"===u?"height":"width";switch(i){case ye:t[u]=t[u]-(n[p]/2-r[p]/2);break;case be:t[u]=t[u]+(n[p]/2-r[p]/2)}}return t}function mt(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.boundary,i=void 0===a?we:a,s=n.rootBoundary,l=void 0===s?xe:s,u=n.elementContext,p=void 0===u?Oe:u,f=n.altBoundary,c=void 0!==f&&f,d=n.padding,v=void 0===d?0:d,g=Ze("number"!=typeof v?v:Xe(v,he)),m=p===Oe?Re:Oe,h=e.rects.popper,y=e.elements[c?m:p],b=vt(ke(y)?y:y.contextElement||qe(e.elements.popper),i,l),w=Ie(e.elements.reference),x=gt({reference:w,element:h,strategy:"absolute",placement:o}),O=ct(Object.assign({},h,x)),R=p===Oe?O:w,A={top:b.top-R.top+g.top,bottom:R.bottom-b.bottom+g.bottom,left:b.left-R.left+g.left,right:R.right-b.right+g.right},E=e.modifiersData.offset;if(p===Oe&&E){var T=E[o];Object.keys(A).forEach((function(e){var t=[ve,de].indexOf(e)>=0?1:-1,n=[ce,de].indexOf(e)>=0?"y":"x";A[e]+=T[n]*t}))}return A}var ht={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=void 0===o||o,i=n.altAxis,s=void 0===i||i,l=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,c=n.altBoundary,d=n.flipVariations,v=void 0===d||d,g=n.allowedAutoPlacements,m=t.options.placement,h=Pe(m),y=l||(h===m||!v?[ot(m)]:function(e){if(Pe(e)===me)return[];var t=ot(e);return[it(e),t,it(t)]}(m)),b=[m].concat(y).reduce((function(e,n){return e.concat(Pe(n)===me?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,u=void 0===l?Ee:l,p=Ge(r),f=p?s?Ae:Ae.filter((function(e){return Ge(e)===p})):he,c=f.filter((function(e){return u.indexOf(e)>=0}));0===c.length&&(c=f);var d=c.reduce((function(t,n){return t[n]=mt(e,{placement:n,boundary:o,rootBoundary:a,padding:i})[Pe(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:v,allowedAutoPlacements:g}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,A=b[0],E=0;E<b.length;E++){var T=b[E],S=Pe(T),C=Ge(T)===ye,k=[ce,de].indexOf(S)>=0,j=k?"width":"height",B=mt(t,{placement:T,boundary:p,rootBoundary:f,altBoundary:c,padding:u}),M=k?C?ve:ge:C?de:ce;w[j]>x[j]&&(M=ot(M));var P=ot(M),F=[];if(a&&F.push(B[S]<=0),s&&F.push(B[M]<=0,B[P]<=0),F.every((function(e){return e}))){A=T,R=!1;break}O.set(T,F)}if(R)for(var L=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},D=v?3:1;D>0;D--){if("break"===L(D))break}t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function yt(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function bt(e){return[ce,ve,de,ge].some((function(t){return e[t]>=0}))}var wt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=mt(t,{elementContext:"reference"}),s=mt(t,{altBoundary:!0}),l=yt(i,r),u=yt(s,o,a),p=bt(l),f=bt(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}};var xt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=void 0===o?[0,0]:o,i=Ee.reduce((function(e,n){return e[n]=function(e,t,n){var r=Pe(e),o=[ge,ce].indexOf(r)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*o,[ge,ve].indexOf(r)>=0?{x:s,y:i}:{x:i,y:s}}(n,t.rects,a),e}),{}),s=i[t.placement],l=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=i}};var Ot={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=gt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var Rt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=void 0===o||o,i=n.altAxis,s=void 0!==i&&i,l=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,c=n.tether,d=void 0===c||c,v=n.tetherOffset,g=void 0===v?0:v,m=mt(t,{boundary:l,rootBoundary:u,padding:f,altBoundary:p}),h=Pe(t.placement),y=Ge(t.placement),b=!y,w=Ve(h),x=function(e){return"x"===e?"y":"x"}(w),O=t.modifiersData.popperOffsets,R=t.rects.reference,A=t.rects.popper,E="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,T="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(O){if(a){var k,j="y"===w?ce:ge,B="y"===w?de:ve,M="y"===w?"height":"width",P=O[w],F=P+m[j],L=P-m[B],D=d?-A[M]/2:0,I=y===ye?R[M]:A[M],_=y===ye?-A[M]:-R[M],H=t.elements.arrow,$=d&&H?_e(H):{width:0,height:0},W=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},q=W[j],z=W[B],N=Ke(0,R[M],$[M]),U=b?R[M]/2-D-N-q-T.mainAxis:I-N-q-T.mainAxis,V=b?-R[M]/2+D+N+z+T.mainAxis:_+N+z+T.mainAxis,K=t.elements.arrow&&Ue(t.elements.arrow),Z=K?"y"===w?K.clientTop||0:K.clientLeft||0:0,X=null!=(k=null==S?void 0:S[w])?k:0,Y=P+V-X,G=Ke(d?Le(F,P+U-X-Z):F,P,d?Fe(L,Y):L);O[w]=G,C[w]=G-P}if(s){var J,Q="x"===w?ce:ge,ee="x"===w?de:ve,te=O[x],ne="y"===x?"height":"width",re=te+m[Q],oe=te-m[ee],ae=-1!==[ce,ge].indexOf(h),ie=null!=(J=null==S?void 0:S[x])?J:0,se=ae?re:te-R[ne]-A[ne]-ie+T.altAxis,le=ae?te+R[ne]+A[ne]-ie-T.altAxis:oe,ue=d&&ae?function(e,t,n){var r=Ke(e,t,n);return r>n?n:r}(se,te,le):Ke(d?se:re,te,d?le:oe);O[x]=ue,C[x]=ue-te}t.modifiersData[r]=C}},requiresIfExists:["offset"]};function At(e,t,n){void 0===n&&(n=!1);var r=je(t),o=je(t)&&function(e){var t=e.getBoundingClientRect(),n=De(t.width)/e.offsetWidth||1,r=De(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),a=qe(t),i=Ie(e,o),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&(("body"!==Se(t)||ut(a))&&(s=function(e){return e!==Ce(e)&&je(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):st(e)}(t)),je(t)?((l=Ie(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=lt(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function Et(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function Tt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var St={placement:"bottom",modifiers:[],strategy:"absolute"};function Ct(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function kt(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?St:o;return function(e,t,n){void 0===n&&(n=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},St,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,l={state:o,setOptions:function(n){var s="function"==typeof n?n(o.options):n;u(),o.options=Object.assign({},a,o.options,s),o.scrollParents={reference:ke(e)?ft(e):e.contextElement?ft(e.contextElement):[],popper:ft(t)};var p=function(e){var t=Et(e);return Te.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,a=e.effect;if("function"==typeof a){var s=a({state:o,name:t,instance:l,options:r}),u=function(){};i.push(s||u)}})),l.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(Ct(t,n)){o.rects={reference:At(t,Ue(n),"fixed"===o.options.strategy),popper:_e(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var a=o.orderedModifiers[r],i=a.fn,u=a.options,p=void 0===u?{}:u,f=a.name;"function"==typeof i&&(o=i({state:o,options:p,name:f,instance:l})||o)}else o.reset=!1,r=-1}}},update:Tt((function(){return new Promise((function(e){l.forceUpdate(),e(o)}))})),destroy:function(){u(),s=!0}};if(!Ct(e,t))return l;function u(){i.forEach((function(e){return e()})),i=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}kt(),kt({defaultModifiers:[nt,Ot,et,Me]});var jt=kt({defaultModifiers:[nt,Ot,et,Me,xt,ht,Rt,Ye,wt]});const Bt=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=function(e){const t=Object.keys(e.elements),n=d(t.map((t=>[t,e.styles[t]||{}]))),r=d(t.map((t=>[t,e.attributes[t]])));return{styles:n,attributes:r}}(e);Object.assign(l.value,t)},requires:["computeStyles"]},i=r((()=>{const{onFirstUpdate:e,placement:t,strategy:r,modifiers:a}=u(n);return{onFirstUpdate:e,placement:t||"bottom",strategy:r||"absolute",modifiers:[...a||[],o,{name:"applyStyles",enabled:!1}]}})),s=p(),l=f({styles:{popper:{position:u(i).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),v=()=>{s.value&&(s.value.destroy(),s.value=void 0)};return a(i,(e=>{const t=u(s);t&&t.setOptions(e)}),{deep:!0}),a([e,t],(([e,t])=>{v(),e&&t&&(s.value=jt(e,t,u(i)))})),c((()=>{v()})),{state:r((()=>{var e;return{...(null==(e=u(s))?void 0:e.state)||{}}})),styles:r((()=>u(l).styles)),attributes:r((()=>u(l).attributes)),update:()=>{var e;return null==(e=u(s))?void 0:e.update()},forceUpdate:()=>{var e;return null==(e=u(s))?void 0:e.forceUpdate()},instanceRef:r((()=>u(s)))}};function Mt(){let e;const t=()=>window.clearTimeout(e);return v((()=>t())),{registerTimeout:(n,r)=>{t(),e=window.setTimeout(n,r)},cancelTimeout:t}}let Pt;const Ft=()=>{const e=m(),t=h(),n=r((()=>`${e.value}-popper-container-${t.prefix}`)),o=r((()=>`#${n.value}`));return{id:n,selector:o}},Lt=()=>{const{id:e,selector:t}=Ft();return g((()=>{s&&(Pt||document.body.querySelector(t.value)||(Pt=(e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t})(e.value)))})),{id:e,selector:t}},Dt=y({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),It=Symbol("elForwardRef"),_t=Symbol("popper"),Ht=Symbol("popperContent"),$t=y({role:{type:String,values:["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],default:"tooltip"}}),Wt=x({name:"ElPopper",inheritAttrs:!1});var qt=R(x({...Wt,props:$t,setup(e,{expose:t}){const n=e,o={triggerRef:f(),popperInstanceRef:f(),contentRef:f(),referenceRef:f(),role:r((()=>n.role))};return t(o),w(_t,o),(e,t)=>O(e.$slots,"default")}}),[["__file","popper.vue"]]);const zt=y({arrowOffset:{type:Number,default:5}}),Nt=x({name:"ElPopperArrow",inheritAttrs:!1});var Ut=R(x({...Nt,props:zt,setup(e,{expose:t}){const n=e,r=A("popper"),{arrowOffset:o,arrowRef:i,arrowStyle:s}=E(Ht,void 0);return a((()=>n.arrowOffset),(e=>{o.value=e})),c((()=>{i.value=void 0})),t({arrowRef:i}),(e,t)=>(T(),S("span",{ref_key:"arrowRef",ref:i,class:C(u(r).e("arrow")),style:k(u(s)),"data-popper-arrow":""},null,6))}}),[["__file","arrow.vue"]]);const Vt=x({name:"ElOnlyChild",setup(e,{slots:t,attrs:n}){var r;const o=E(It),a=(i=null!=(r=null==o?void 0:o.setForwardRef)?r:j,{mounted(e){i(e)},updated(e){i(e)},unmounted(){i(null)}});var i;return()=>{var e;const r=null==(e=t.default)?void 0:e.call(t,n);if(!r)return null;if(r.length>1)return null;const o=Kt(r);return o?B(M(o,n),[[a]]):null}}});function Kt(e){if(!e)return null;const t=e;for(const n of t){if(P(n))switch(n.type){case D:continue;case L:case"svg":return Zt(n);case F:return Kt(n.children);default:return n}return Zt(n)}return null}function Zt(e){const t=A("only-child");return I("span",{class:t.e("content")},[e])}const Xt=y({virtualRef:{type:t(Object)},virtualTriggering:Boolean,onMouseenter:{type:t(Function)},onMouseleave:{type:t(Function)},onClick:{type:t(Function)},onKeydown:{type:t(Function)},onFocus:{type:t(Function)},onBlur:{type:t(Function)},onContextmenu:{type:t(Function)},id:String,open:Boolean}),Yt=x({name:"ElPopperTrigger",inheritAttrs:!1});var Gt=R(x({...Yt,props:Xt,setup(e,{expose:t}){const n=e,{role:o,triggerRef:s}=E(_t,void 0);var l;l=s,w(It,{setForwardRef:e=>{l.value=e}});const p=r((()=>d.value?n.id:void 0)),f=r((()=>{if(o&&"tooltip"===o.value)return n.open&&n.id?n.id:void 0})),d=r((()=>{if(o&&"tooltip"!==o.value)return o.value})),v=r((()=>d.value?`${n.open}`:void 0));let g;return i((()=>{a((()=>n.virtualRef),(e=>{e&&(s.value=_(e))}),{immediate:!0}),a(s,((e,t)=>{null==g||g(),g=void 0,H(e)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach((r=>{var o;const a=n[r];a&&(e.addEventListener(r.slice(2).toLowerCase(),a),null==(o=null==t?void 0:t.removeEventListener)||o.call(t,r.slice(2).toLowerCase(),a))})),g=a([p,f,d,v],(t=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(((n,r)=>{$(t[r])?e.removeAttribute(n):e.setAttribute(n,t[r])}))}),{immediate:!0})),H(t)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((e=>t.removeAttribute(e)))}),{immediate:!0})})),c((()=>{null==g||g(),g=void 0})),t({triggerRef:s}),(e,t)=>e.virtualTriggering?N("v-if",!0):(T(),W(u(Vt),z({key:0},e.$attrs,{"aria-controls":u(p),"aria-describedby":u(f),"aria-expanded":u(v),"aria-haspopup":u(d)}),{default:q((()=>[O(e.$slots,"default")])),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}}),[["__file","trigger.vue"]]);const Jt=y({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:t(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Ee,default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},strategy:{type:String,values:["fixed","absolute"],default:"absolute"}}),Qt=y({...Jt,id:String,style:{type:t([String,Array,Object])},className:{type:t([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:t([String,Array,Object])},popperStyle:{type:t([String,Array,Object])},referenceEl:{type:t(Object)},triggerTargetEl:{type:t(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),en={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},tn=(e,t=[])=>{const{placement:n,strategy:r,popperOptions:o}=e,a={placement:n,strategy:r,...o,modifiers:[...nn(e),...t]};return function(e,t){t&&(e.modifiers=[...e.modifiers,...null!=t?t:[]])}(a,null==o?void 0:o.modifiers),a};function nn(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:r}=e;return[{name:"offset",options:{offset:[0,null!=t?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:r}},{name:"computeStyles",options:{gpuAcceleration:n}}]}const rn=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:l}=E(_t,void 0),p=f(),c=f(),d=r((()=>({name:"eventListeners",enabled:!!e.visible}))),v=r((()=>{var e;const t=u(p),n=null!=(e=u(c))?e:0;return{name:"arrow",enabled:!le(t),options:{element:t,padding:n}}})),g=r((()=>({onFirstUpdate:()=>{w()},...tn(e,[u(v),u(d)])}))),m=r((()=>(e=>{if(s)return _(e)})(e.referenceEl)||u(o))),{attributes:h,state:y,styles:b,update:w,forceUpdate:x,instanceRef:O}=Bt(m,n,g);return a(O,(e=>t.value=e)),i((()=>{a((()=>{var e;return null==(e=u(m))?void 0:e.getBoundingClientRect()}),(()=>{w()}))})),{attributes:h,arrowRef:p,contentRef:n,instanceRef:O,state:y,styles:b,role:l,forceUpdate:x,update:w}},on=x({name:"ElPopperContent"});var an=R(x({...on,props:Qt,emits:en,setup(e,{expose:t,emit:n}){const o=e,{focusStartRef:s,trapped:l,onFocusAfterReleased:p,onFocusAfterTrapped:d,onFocusInTrap:v,onFocusoutPrevented:g,onReleaseRequested:m}=((e,t)=>{const n=f(!1),r=f();return{focusStartRef:r,trapped:n,onFocusAfterReleased:e=>{var n;"pointer"!==(null==(n=e.detail)?void 0:n.focusReason)&&(r.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:t=>{e.visible&&!n.value&&(t.target&&(r.value=t.target),n.value=!0)},onFocusoutPrevented:t=>{e.trapping||("pointer"===t.detail.focusReason&&t.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}})(o,n),{attributes:h,arrowRef:y,contentRef:x,styles:R,instanceRef:C,role:k,update:B}=rn(o),{ariaModal:M,arrowStyle:P,contentAttrs:F,contentClass:L,contentStyle:D,updateZIndex:_}=((e,{attributes:t,styles:n,role:o})=>{const{nextZIndex:a}=U(),i=A("popper"),s=r((()=>u(t).popper)),l=f(b(e.zIndex)?e.zIndex:a()),p=r((()=>[i.b(),i.is("pure",e.pure),i.is(e.effect),e.popperClass])),c=r((()=>[{zIndex:u(l)},u(n).popper,e.popperStyle||{}]));return{ariaModal:r((()=>"dialog"===o.value?"false":void 0)),arrowStyle:r((()=>u(n).arrow||{})),contentAttrs:s,contentClass:p,contentStyle:c,contentZIndex:l,updateZIndex:()=>{l.value=b(e.zIndex)?e.zIndex:a()}}})(o,{styles:R,attributes:h,role:k}),W=E(V,void 0),N=f();let Z;w(Ht,{arrowStyle:P,arrowRef:y,arrowOffset:N}),W&&(W.addInputId||W.removeInputId)&&w(V,{...W,addInputId:j,removeInputId:j});const X=(e=!0)=>{B(),e&&_()},Y=()=>{X(!1),o.visible&&o.focusOnShow?l.value=!0:!1===o.visible&&(l.value=!1)};return i((()=>{a((()=>o.triggerTargetEl),((e,t)=>{null==Z||Z(),Z=void 0;const n=u(e||x.value),r=u(t||x.value);H(n)&&(Z=a([k,()=>o.ariaLabel,M,()=>o.id],(e=>{["role","aria-label","aria-modal","id"].forEach(((t,r)=>{$(e[r])?n.removeAttribute(t):n.setAttribute(t,e[r])}))}),{immediate:!0})),r!==n&&H(r)&&["role","aria-label","aria-modal","id"].forEach((e=>{r.removeAttribute(e)}))}),{immediate:!0}),a((()=>o.visible),Y,{immediate:!0})})),c((()=>{null==Z||Z(),Z=void 0})),t({popperContentRef:x,popperInstanceRef:C,updatePopper:X,contentStyle:D}),(e,t)=>(T(),S("div",z({ref_key:"contentRef",ref:x},u(F),{style:u(D),class:u(L),tabindex:"-1",onMouseenter:t[0]||(t[0]=t=>e.$emit("mouseenter",t)),onMouseleave:t[1]||(t[1]=t=>e.$emit("mouseleave",t))}),[I(u(K),{trapped:u(l),"trap-on-focus-in":!0,"focus-trap-el":u(x),"focus-start-el":u(s),onFocusAfterTrapped:u(d),onFocusAfterReleased:u(p),onFocusin:u(v),onFocusoutPrevented:u(g),onReleaseRequested:u(m)},{default:q((()=>[O(e.$slots,"default")])),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}}),[["__file","content.vue"]]);const sn=Z(qt),ln=Symbol("elTooltip"),un=y({...Dt,...Qt,appendTo:{type:t([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:t(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean}),pn=y({...Xt,disabled:Boolean,trigger:{type:t([String,Array]),default:"hover"},triggerKeys:{type:t(Array),default:()=>[X.enter,X.space]}}),{useModelToggleProps:fn,useModelToggleEmits:cn,useModelToggle:dn}=fe("visible"),vn=y({...$t,...fn,...un,...pn,...zt,showArrow:{type:Boolean,default:!0}}),gn=[...cn,"before-show","before-hide","show","hide","open","close"],mn=(e,t,n)=>r=>{((e,t)=>Y(e)?e.includes(t):e===t)(u(e),t)&&n(r)},hn=x({name:"ElTooltipTrigger"});var yn=R(x({...hn,props:pn,setup(e,{expose:t}){const n=e,r=A("tooltip"),{controlled:o,id:a,open:i,onOpen:s,onClose:l,onToggle:p}=E(ln,void 0),c=f(null),d=()=>{if(u(o)||n.disabled)return!0},v=G(n,"trigger"),g=ie(d,mn(v,"hover",s)),m=ie(d,mn(v,"hover",l)),h=ie(d,mn(v,"click",(e=>{0===e.button&&p(e)}))),y=ie(d,mn(v,"focus",s)),b=ie(d,mn(v,"focus",l)),w=ie(d,mn(v,"contextmenu",(e=>{e.preventDefault(),p(e)}))),x=ie(d,(e=>{const{code:t}=e;n.triggerKeys.includes(t)&&(e.preventDefault(),p(e))}));return t({triggerRef:c}),(e,t)=>(T(),W(u(Gt),{id:u(a),"virtual-ref":e.virtualRef,open:u(i),"virtual-triggering":e.virtualTriggering,class:C(u(r).e("trigger")),onBlur:u(b),onClick:u(h),onContextmenu:u(w),onFocus:u(y),onMouseenter:u(g),onMouseleave:u(m),onKeydown:u(x)},{default:q((()=>[O(e.$slots,"default")])),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}}),[["__file","trigger.vue"]]);const bn=x({name:"ElTooltipContent",inheritAttrs:!1});var wn=R(x({...bn,props:un,setup(e,{expose:t}){const n=e,{selector:o}=Ft(),i=A("tooltip"),s=f(null),l=f(!1),{controlled:p,id:d,open:v,trigger:g,onClose:m,onOpen:h,onShow:y,onHide:b,onBeforeShow:w,onBeforeHide:x}=E(ln,void 0),R=r((()=>n.transition||`${i.namespace.value}-fade-in-linear`)),S=r((()=>n.persistent));c((()=>{l.value=!0}));const C=r((()=>!!u(S)||u(v))),k=r((()=>!n.disabled&&u(v))),j=r((()=>n.appendTo||o.value)),M=r((()=>{var e;return null!=(e=n.style)?e:{}})),P=r((()=>!u(v))),F=()=>{b()},L=()=>{if(u(p))return!0},D=ie(L,(()=>{n.enterable&&"hover"===u(g)&&h()})),_=ie(L,(()=>{"hover"===u(g)&&m()})),H=()=>{var e,t;null==(t=null==(e=s.value)?void 0:e.updatePopper)||t.call(e),null==w||w()},$=()=>{null==x||x()},U=()=>{y(),K=te(r((()=>{var e;return null==(e=s.value)?void 0:e.popperContentRef})),(()=>{if(u(p))return;"hover"!==u(g)&&m()}))},V=()=>{n.virtualTriggering||m()};let K;return a((()=>u(v)),(e=>{e||null==K||K()}),{flush:"post"}),a((()=>n.content),(()=>{var e,t;null==(t=null==(e=s.value)?void 0:e.updatePopper)||t.call(e)})),t({contentRef:s}),(e,t)=>(T(),W(ee,{disabled:!e.teleported,to:u(j)},[I(Q,{name:u(R),onAfterLeave:F,onBeforeEnter:H,onAfterEnter:U,onBeforeLeave:$},{default:q((()=>[u(C)?B((T(),W(u(an),z({key:0,id:u(d),ref_key:"contentRef",ref:s},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":u(P),"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,u(M)],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:u(k),"z-index":e.zIndex,onMouseenter:u(D),onMouseleave:u(_),onBlur:V,onClose:u(m)}),{default:q((()=>[l.value?N("v-if",!0):O(e.$slots,"default",{key:0})])),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[J,u(k)]]):N("v-if",!0)])),_:3},8,["name"])],8,["disabled","to"]))}}),[["__file","content.vue"]]);const xn=["innerHTML"],On={key:1},Rn=x({name:"ElTooltip"});const An=Z(R(x({...Rn,props:vn,emits:gn,setup(e,{expose:t,emit:n}){const o=e;Lt();const i=ne(),s=f(),p=f(),c=()=>{var e;const t=u(s);t&&(null==(e=t.popperInstanceRef)||e.update())},d=f(!1),v=f(),{show:g,hide:m,hasUpdateHandler:h}=dn({indicator:d,toggleReason:v}),{onOpen:y,onClose:x}=(({showAfter:e,hideAfter:t,autoClose:n,open:r,close:o})=>{const{registerTimeout:a}=Mt(),{registerTimeout:i,cancelTimeout:s}=Mt();return{onOpen:t=>{a((()=>{r(t);const e=u(n);b(e)&&e>0&&i((()=>{o(t)}),e)}),u(e))},onClose:e=>{s(),a((()=>{o(e)}),u(t))}}})({showAfter:G(o,"showAfter"),hideAfter:G(o,"hideAfter"),autoClose:G(o,"autoClose"),open:g,close:m}),R=r((()=>l(o.visible)&&!h.value));w(ln,{controlled:R,id:i,open:re(d),trigger:G(o,"trigger"),onOpen:e=>{y(e)},onClose:e=>{x(e)},onToggle:e=>{u(d)?x(e):y(e)},onShow:()=>{n("show",v.value)},onHide:()=>{n("hide",v.value)},onBeforeShow:()=>{n("before-show",v.value)},onBeforeHide:()=>{n("before-hide",v.value)},updatePopper:c}),a((()=>o.disabled),(e=>{e&&d.value&&(d.value=!1)}));return oe((()=>d.value&&m())),t({popperRef:s,contentRef:p,isFocusInsideContent:e=>{var t,n;const r=null==(n=null==(t=p.value)?void 0:t.contentRef)?void 0:n.popperContentRef,o=(null==e?void 0:e.relatedTarget)||document.activeElement;return r&&r.contains(o)},updatePopper:c,onOpen:y,onClose:x,hide:m}),(e,t)=>(T(),W(u(sn),{ref_key:"popperRef",ref:s,role:e.role},{default:q((()=>[I(yn,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:q((()=>[e.$slots.default?O(e.$slots,"default",{key:0}):N("v-if",!0)])),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),I(wn,{ref_key:"contentRef",ref:p,"aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.showAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:q((()=>[O(e.$slots,"content",{},(()=>[e.rawContent?(T(),S("span",{key:0,innerHTML:e.content},null,8,xn)):(T(),S("span",On,ae(e.content),1))])),e.showArrow?(T(),W(u(Ut),{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):N("v-if",!0)])),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])])),_:3},8,["role"]))}}),[["__file","tooltip.vue"]]));export{An as E,Vt as O,ln as T,Ee as a,pn as b,ie as c,le as i,un as u,se as w};
