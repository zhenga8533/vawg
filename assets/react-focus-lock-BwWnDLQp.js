import{r as a}from"./react-DEdpUTZM.js";import{_ as $,c as Se}from"./@babel-Ds7TnLC8.js";import{F as xe,a as Le,m as z,f as J,b as Ie,c as Re,d as ke,e as we,g as Oe,h as We,i as $e}from"./focus-lock-C3lLyJ0E.js";import{c as B,a as Be}from"./use-sidecar-BFrkB23O.js";import{u as Ge}from"./use-callback-ref-BH2RmtK3.js";import{w as _e}from"./react-clientside-effect-DzVJy-7E.js";var W={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},K=B({},function(r){var e=r.target,t=r.currentTarget;return{target:e,currentTarget:t}}),Q=B(),Te=B(),He=Be({async:!0,ssr:typeof document<"u"}),Me=a.createContext(void 0),De=[],G=a.forwardRef(function(e,t){var n,u=a.useState(),s=u[0],l=u[1],v=a.useRef(),h=a.useRef(!1),c=a.useRef(null),i=a.useState({}),F=i[1],R=e.children,m=e.disabled,o=m===void 0?!1:m,d=e.noFocusGuards,p=d===void 0?!1:d,x=e.persistentFocus,te=x===void 0?!1:x,H=e.crossFrame,re=H===void 0?!0:H,M=e.autoFocus,ae=M===void 0?!0:M;e.allowTextSelection;var ne=e.group,oe=e.className,ue=e.whiteList,se=e.hasPositiveIndices,D=e.shards,k=D===void 0?De:D,A=e.as,ie=A===void 0?"div":A,U=e.lockProps,ce=U===void 0?{}:U,de=e.sideCar,j=e.returnFocus,L=j===void 0?!1:j,fe=e.focusOptions,w=e.onActivation,O=e.onDeactivation,le=a.useState({}),ve=le[0],me=a.useCallback(function(f){var g=f.captureFocusRestore;if(!c.current){var E,b=(E=document)==null?void 0:E.activeElement;c.current=b,b!==document.body&&(c.current=g(b))}v.current&&w&&w(v.current),h.current=!0,F()},[w]),pe=a.useCallback(function(){h.current=!1,O&&O(v.current),F()},[O]),he=a.useCallback(function(f){var g=c.current;if(g){var E=(typeof g=="function"?g():g)||document.body,b=typeof L=="function"?L(E):L;if(b){var q=typeof b=="object"?b:void 0;c.current=null,f?Promise.resolve().then(function(){return E.focus(q)}):E.focus(q)}}},[L]),Fe=a.useCallback(function(f){h.current&&K.useMedium(f)},[]),be=Q.useMedium,ge=a.useCallback(function(f){v.current!==f&&(v.current=f,l(f))},[]),Ee=$((n={},n[xe]=o&&"disabled",n[Le]=ne,n),ce),N=p!==!0,ye=N&&p!=="tail",Ce=Ge([t,ge]),Pe=a.useMemo(function(){return{observed:v,shards:k,enabled:!o,active:h.current}},[o,h.current,k,s]);return a.createElement(a.Fragment,null,N&&[a.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:o?-1:0,style:W}),se?a.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:o?-1:1,style:W}):null],!o&&a.createElement(de,{id:ve,sideCar:He,observed:s,disabled:o,persistentFocus:te,crossFrame:re,autoFocus:ae,whiteList:ue,shards:k,onActivation:me,onDeactivation:pe,returnFocus:he,focusOptions:fe}),a.createElement(ie,$({ref:Ce},Ee,{className:oe,onBlur:be,onFocus:Fe}),a.createElement(Me.Provider,{value:Pe},R)),ye&&a.createElement("div",{"data-focus-guard":!0,tabIndex:o?-1:0,style:W}))});G.propTypes={};function _(r){setTimeout(r,1)}var Ae=function(e){return e&&"current"in e?e.current:e},Ue=function(){return document&&document.activeElement===document.body},je=function(){return Ue()||$e()},C=null,y=null,P=null,S=!1,Ne=function(){return!0},qe=function(e){return(C.whiteList||Ne)(e)},Ve=function(e,t){P={observerNode:e,portaledElement:t}},ze=function(e){return P&&P.portaledElement===e};function V(r,e,t,n){var u=null,s=r;do{var l=n[s];if(l.guard)l.node.dataset.focusAutoGuard&&(u=l);else if(l.lockItem){if(s!==r)return;u=null}else break}while((s+=t)!==e);u&&(u.node.tabIndex=0)}var Je=function(e){return e?!!S:S==="meanwhile"},Ke=function r(e,t,n){return t&&(t.host===e&&(!t.activeElement||n.contains(t.activeElement))||t.parentNode&&r(e,t.parentNode,n))},Qe=function(e,t){return t.some(function(n){return Ke(e,n,n)})},I=function(){var e=!1;if(C){var t=C,n=t.observed,u=t.persistentFocus,s=t.autoFocus,l=t.shards,v=t.crossFrame,h=t.focusOptions,c=n||P&&P.portaledElement,i=document&&document.activeElement;if(c){var F=[c].concat(l.map(Ae).filter(Boolean));if((!i||qe(i))&&(u||Je(v)||!je()||!y&&s)&&(c&&!(J(F)||i&&Qe(i,F)||ze(i))&&(document&&!y&&i&&!s?(i.blur&&i.blur(),document.body.focus()):(e=z(F,y,{focusOptions:h}),P={})),S=!1,y=document&&document.activeElement),document&&i!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var R=document&&document.activeElement,m=We(F),o=m.map(function(d){var p=d.node;return p}).indexOf(R);o>-1&&(m.filter(function(d){var p=d.guard,x=d.node;return p&&x.dataset.focusAutoGuard}).forEach(function(d){var p=d.node;return p.removeAttribute("tabIndex")}),V(o,m.length,1,m),V(o,-1,-1,m))}}}return e},X=function(e){I()&&e&&(e.stopPropagation(),e.preventDefault())},T=function(){return _(I)},Xe=function(e){var t=e.target,n=e.currentTarget;n.contains(t)||Ve(n,t)},Ye=function(){return null},Y=function(){S="just",_(function(){S="meanwhile"})},Ze=function(){document.addEventListener("focusin",X),document.addEventListener("focusout",T),window.addEventListener("blur",Y)},et=function(){document.removeEventListener("focusin",X),document.removeEventListener("focusout",T),window.removeEventListener("blur",Y)};function tt(r){return r.filter(function(e){var t=e.disabled;return!t})}var Z={moveFocusInside:z,focusInside:J,focusNextElement:Ie,focusPrevElement:Re,focusFirstElement:ke,focusLastElement:we,captureFocusRestore:Oe};function rt(r){var e=r.slice(-1)[0];e&&!C&&Ze();var t=C,n=t&&e&&e.id===t.id;C=e,t&&!n&&(t.onDeactivation(),r.filter(function(u){var s=u.id;return s===t.id}).length||t.returnFocus(!e)),e?(y=null,(!n||t.observed!==e.observed)&&e.onActivation(Z),I(),_(I)):(et(),y=null)}K.assignSyncMedium(Xe);Q.assignMedium(T);Te.assignMedium(function(r){return r(Z)});const at=_e(tt,rt)(Ye);var nt=a.forwardRef(function(e,t){return a.createElement(G,$({sideCar:at,ref:t},e))}),ee=G.propTypes||{};ee.sideCar;Se(ee,["sideCar"]);nt.propTypes={};export{nt as F};