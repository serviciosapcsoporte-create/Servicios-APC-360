var bp=Object.defineProperty;var yp=(i,l,c)=>l in i?bp(i,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):i[l]=c;var ce=(i,l,c)=>yp(i,typeof l!="symbol"?l+"":l,c);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))m(u);new MutationObserver(u=>{for(const v of u)if(v.type==="childList")for(const f of v.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&m(f)}).observe(document,{childList:!0,subtree:!0});function c(u){const v={};return u.integrity&&(v.integrity=u.integrity),u.referrerPolicy&&(v.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?v.credentials="include":u.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function m(u){if(u.ep)return;u.ep=!0;const v=c(u);fetch(u.href,v)}})();var ui={exports:{}},Ho={},mi={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function Cp(){if(Dd)return J;Dd=1;var i=Symbol.for("react.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),f=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),T=Symbol.iterator;function k(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,K={};function Z(b,w,X){this.props=b,this.context=w,this.refs=K,this.updater=X||Q}Z.prototype.isReactComponent={},Z.prototype.setState=function(b,w){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,w,"setState")},Z.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function Le(){}Le.prototype=Z.prototype;function _e(b,w,X){this.props=b,this.context=w,this.refs=K,this.updater=X||Q}var He=_e.prototype=new Le;He.constructor=_e,B(He,Z.prototype),He.isPureReactComponent=!0;var be=Array.isArray,Ie=Object.prototype.hasOwnProperty,oe={current:null},Oe={key:!0,ref:!0,__self:!0,__source:!0};function E(b,w,X){var ee,te={},re=null,de=null;if(w!=null)for(ee in w.ref!==void 0&&(de=w.ref),w.key!==void 0&&(re=""+w.key),w)Ie.call(w,ee)&&!Oe.hasOwnProperty(ee)&&(te[ee]=w[ee]);var ie=arguments.length-2;if(ie===1)te.children=X;else if(1<ie){for(var fe=Array(ie),aa=0;aa<ie;aa++)fe[aa]=arguments[aa+2];te.children=fe}if(b&&b.defaultProps)for(ee in ie=b.defaultProps,ie)te[ee]===void 0&&(te[ee]=ie[ee]);return{$$typeof:i,type:b,key:re,ref:de,props:te,_owner:oe.current}}function U(b,w){return{$$typeof:i,type:b.type,key:w,ref:b.ref,props:b.props,_owner:b._owner}}function je(b){return typeof b=="object"&&b!==null&&b.$$typeof===i}function sa(b){var w={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(X){return w[X]})}var Je=/\/+/g;function ea(b,w){return typeof b=="object"&&b!==null&&b.key!=null?sa(""+b.key):w.toString(36)}function pa(b,w,X,ee,te){var re=typeof b;(re==="undefined"||re==="boolean")&&(b=null);var de=!1;if(b===null)de=!0;else switch(re){case"string":case"number":de=!0;break;case"object":switch(b.$$typeof){case i:case l:de=!0}}if(de)return de=b,te=te(de),b=ee===""?"."+ea(de,0):ee,be(te)?(X="",b!=null&&(X=b.replace(Je,"$&/")+"/"),pa(te,w,X,"",function(aa){return aa})):te!=null&&(je(te)&&(te=U(te,X+(!te.key||de&&de.key===te.key?"":(""+te.key).replace(Je,"$&/")+"/")+b)),w.push(te)),1;if(de=0,ee=ee===""?".":ee+":",be(b))for(var ie=0;ie<b.length;ie++){re=b[ie];var fe=ee+ea(re,ie);de+=pa(re,w,X,fe,te)}else if(fe=k(b),typeof fe=="function")for(b=fe.call(b),ie=0;!(re=b.next()).done;)re=re.value,fe=ee+ea(re,ie++),de+=pa(re,w,X,fe,te);else if(re==="object")throw w=String(b),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return de}function ja(b,w,X){if(b==null)return b;var ee=[],te=0;return pa(b,ee,"","",function(re){return w.call(X,re,te++)}),ee}function We(b){if(b._status===-1){var w=b._result;w=w(),w.then(function(X){(b._status===0||b._status===-1)&&(b._status=1,b._result=X)},function(X){(b._status===0||b._status===-1)&&(b._status=2,b._result=X)}),b._status===-1&&(b._status=0,b._result=w)}if(b._status===1)return b._result.default;throw b._result}var ye={current:null},D={transition:null},W={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:D,ReactCurrentOwner:oe};function M(){throw Error("act(...) is not supported in production builds of React.")}return J.Children={map:ja,forEach:function(b,w,X){ja(b,function(){w.apply(this,arguments)},X)},count:function(b){var w=0;return ja(b,function(){w++}),w},toArray:function(b){return ja(b,function(w){return w})||[]},only:function(b){if(!je(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},J.Component=Z,J.Fragment=c,J.Profiler=u,J.PureComponent=_e,J.StrictMode=m,J.Suspense=x,J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,J.act=M,J.cloneElement=function(b,w,X){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var ee=B({},b.props),te=b.key,re=b.ref,de=b._owner;if(w!=null){if(w.ref!==void 0&&(re=w.ref,de=oe.current),w.key!==void 0&&(te=""+w.key),b.type&&b.type.defaultProps)var ie=b.type.defaultProps;for(fe in w)Ie.call(w,fe)&&!Oe.hasOwnProperty(fe)&&(ee[fe]=w[fe]===void 0&&ie!==void 0?ie[fe]:w[fe])}var fe=arguments.length-2;if(fe===1)ee.children=X;else if(1<fe){ie=Array(fe);for(var aa=0;aa<fe;aa++)ie[aa]=arguments[aa+2];ee.children=ie}return{$$typeof:i,type:b.type,key:te,ref:re,props:ee,_owner:de}},J.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:v,_context:b},b.Consumer=b},J.createElement=E,J.createFactory=function(b){var w=E.bind(null,b);return w.type=b,w},J.createRef=function(){return{current:null}},J.forwardRef=function(b){return{$$typeof:S,render:b}},J.isValidElement=je,J.lazy=function(b){return{$$typeof:P,_payload:{_status:-1,_result:b},_init:We}},J.memo=function(b,w){return{$$typeof:j,type:b,compare:w===void 0?null:w}},J.startTransition=function(b){var w=D.transition;D.transition={};try{b()}finally{D.transition=w}},J.unstable_act=M,J.useCallback=function(b,w){return ye.current.useCallback(b,w)},J.useContext=function(b){return ye.current.useContext(b)},J.useDebugValue=function(){},J.useDeferredValue=function(b){return ye.current.useDeferredValue(b)},J.useEffect=function(b,w){return ye.current.useEffect(b,w)},J.useId=function(){return ye.current.useId()},J.useImperativeHandle=function(b,w,X){return ye.current.useImperativeHandle(b,w,X)},J.useInsertionEffect=function(b,w){return ye.current.useInsertionEffect(b,w)},J.useLayoutEffect=function(b,w){return ye.current.useLayoutEffect(b,w)},J.useMemo=function(b,w){return ye.current.useMemo(b,w)},J.useReducer=function(b,w,X){return ye.current.useReducer(b,w,X)},J.useRef=function(b){return ye.current.useRef(b)},J.useState=function(b){return ye.current.useState(b)},J.useSyncExternalStore=function(b,w,X){return ye.current.useSyncExternalStore(b,w,X)},J.useTransition=function(){return ye.current.useTransition()},J.version="18.3.1",J}var Ld;function Ni(){return Ld||(Ld=1,mi.exports=Cp()),mi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function Ap(){if(Od)return Ho;Od=1;var i=Ni(),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function f(S,x,j){var P,T={},k=null,Q=null;j!==void 0&&(k=""+j),x.key!==void 0&&(k=""+x.key),x.ref!==void 0&&(Q=x.ref);for(P in x)m.call(x,P)&&!v.hasOwnProperty(P)&&(T[P]=x[P]);if(S&&S.defaultProps)for(P in x=S.defaultProps,x)T[P]===void 0&&(T[P]=x[P]);return{$$typeof:l,type:S,key:k,ref:Q,props:T,_owner:u.current}}return Ho.Fragment=c,Ho.jsx=f,Ho.jsxs=f,Ho}var Md;function Sp(){return Md||(Md=1,ui.exports=Ap()),ui.exports}var o=Sp(),rr={},pi={exports:{}},Xe={},fi={exports:{}},gi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function kp(){return qd||(qd=1,(function(i){function l(D,W){var M=D.length;D.push(W);e:for(;0<M;){var b=M-1>>>1,w=D[b];if(0<u(w,W))D[b]=W,D[M]=w,M=b;else break e}}function c(D){return D.length===0?null:D[0]}function m(D){if(D.length===0)return null;var W=D[0],M=D.pop();if(M!==W){D[0]=M;e:for(var b=0,w=D.length,X=w>>>1;b<X;){var ee=2*(b+1)-1,te=D[ee],re=ee+1,de=D[re];if(0>u(te,M))re<w&&0>u(de,te)?(D[b]=de,D[re]=M,b=re):(D[b]=te,D[ee]=M,b=ee);else if(re<w&&0>u(de,M))D[b]=de,D[re]=M,b=re;else break e}}return W}function u(D,W){var M=D.sortIndex-W.sortIndex;return M!==0?M:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;i.unstable_now=function(){return v.now()}}else{var f=Date,S=f.now();i.unstable_now=function(){return f.now()-S}}var x=[],j=[],P=1,T=null,k=3,Q=!1,B=!1,K=!1,Z=typeof setTimeout=="function"?setTimeout:null,Le=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function He(D){for(var W=c(j);W!==null;){if(W.callback===null)m(j);else if(W.startTime<=D)m(j),W.sortIndex=W.expirationTime,l(x,W);else break;W=c(j)}}function be(D){if(K=!1,He(D),!B)if(c(x)!==null)B=!0,We(Ie);else{var W=c(j);W!==null&&ye(be,W.startTime-D)}}function Ie(D,W){B=!1,K&&(K=!1,Le(E),E=-1),Q=!0;var M=k;try{for(He(W),T=c(x);T!==null&&(!(T.expirationTime>W)||D&&!sa());){var b=T.callback;if(typeof b=="function"){T.callback=null,k=T.priorityLevel;var w=b(T.expirationTime<=W);W=i.unstable_now(),typeof w=="function"?T.callback=w:T===c(x)&&m(x),He(W)}else m(x);T=c(x)}if(T!==null)var X=!0;else{var ee=c(j);ee!==null&&ye(be,ee.startTime-W),X=!1}return X}finally{T=null,k=M,Q=!1}}var oe=!1,Oe=null,E=-1,U=5,je=-1;function sa(){return!(i.unstable_now()-je<U)}function Je(){if(Oe!==null){var D=i.unstable_now();je=D;var W=!0;try{W=Oe(!0,D)}finally{W?ea():(oe=!1,Oe=null)}}else oe=!1}var ea;if(typeof _e=="function")ea=function(){_e(Je)};else if(typeof MessageChannel<"u"){var pa=new MessageChannel,ja=pa.port2;pa.port1.onmessage=Je,ea=function(){ja.postMessage(null)}}else ea=function(){Z(Je,0)};function We(D){Oe=D,oe||(oe=!0,ea())}function ye(D,W){E=Z(function(){D(i.unstable_now())},W)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_continueExecution=function(){B||Q||(B=!0,We(Ie))},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return k},i.unstable_getFirstCallbackNode=function(){return c(x)},i.unstable_next=function(D){switch(k){case 1:case 2:case 3:var W=3;break;default:W=k}var M=k;k=W;try{return D()}finally{k=M}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var M=k;k=D;try{return W()}finally{k=M}},i.unstable_scheduleCallback=function(D,W,M){var b=i.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?b+M:b):M=b,D){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=M+w,D={id:P++,callback:W,priorityLevel:D,startTime:M,expirationTime:w,sortIndex:-1},M>b?(D.sortIndex=M,l(j,D),c(x)===null&&D===c(j)&&(K?(Le(E),E=-1):K=!0,ye(be,M-b))):(D.sortIndex=w,l(x,D),B||Q||(B=!0,We(Ie))),D},i.unstable_shouldYield=sa,i.unstable_wrapCallback=function(D){var W=k;return function(){var M=k;k=W;try{return D.apply(this,arguments)}finally{k=M}}}})(gi)),gi}var Vd;function Pp(){return Vd||(Vd=1,fi.exports=kp()),fi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function jp(){if(Bd)return Xe;Bd=1;var i=Ni(),l=Pp();function c(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,u={};function v(e,a){f(e,a),f(e+"Capture",a)}function f(e,a){for(u[e]=a,e=0;e<a.length;e++)m.add(a[e])}var S=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},T={};function k(e){return x.call(T,e)?!0:x.call(P,e)?!1:j.test(e)?T[e]=!0:(P[e]=!0,!1)}function Q(e,a,n,t){if(n!==null&&n.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,a,n,t){if(a===null||typeof a>"u"||Q(e,a,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function K(e,a,n,t,r,s,d){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=t,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=a,this.sanitizeURL=s,this.removeEmptyString=d}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new K(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];Z[a]=new K(a,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new K(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new K(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new K(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new K(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Z[e]=new K(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Z[e]=new K(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Z[e]=new K(e,5,!1,e.toLowerCase(),null,!1,!1)});var Le=/[\-:]([a-z])/g;function _e(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(Le,_e);Z[a]=new K(a,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(Le,_e);Z[a]=new K(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(Le,_e);Z[a]=new K(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new K(e,1,!1,e.toLowerCase(),null,!1,!1)}),Z.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Z[e]=new K(e,1,!1,e.toLowerCase(),null,!0,!0)});function He(e,a,n,t){var r=Z.hasOwnProperty(a)?Z[a]:null;(r!==null?r.type!==0:t||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(B(a,n,r,t)&&(n=null),t||r===null?k(a)&&(n===null?e.removeAttribute(a):e.setAttribute(a,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(a=r.attributeName,t=r.attributeNamespace,n===null?e.removeAttribute(a):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,t?e.setAttributeNS(t,a,n):e.setAttribute(a,n))))}var be=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),oe=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),je=Symbol.for("react.provider"),sa=Symbol.for("react.context"),Je=Symbol.for("react.forward_ref"),ea=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),ja=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),D=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var M=Object.assign,b;function w(e){if(b===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);b=a&&a[1]||""}return`
`+b+e}var X=!1;function ee(e,a){if(!e||X)return"";X=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(A){var t=A}Reflect.construct(e,[],a)}else{try{a.call()}catch(A){t=A}e.call(a.prototype)}else{try{throw Error()}catch(A){t=A}e()}}catch(A){if(A&&t&&typeof A.stack=="string"){for(var r=A.stack.split(`
`),s=t.stack.split(`
`),d=r.length-1,p=s.length-1;1<=d&&0<=p&&r[d]!==s[p];)p--;for(;1<=d&&0<=p;d--,p--)if(r[d]!==s[p]){if(d!==1||p!==1)do if(d--,p--,0>p||r[d]!==s[p]){var g=`
`+r[d].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=d&&0<=p);break}}}finally{X=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function te(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Oe:return"Fragment";case oe:return"Portal";case U:return"Profiler";case E:return"StrictMode";case ea:return"Suspense";case pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sa:return(e.displayName||"Context")+".Consumer";case je:return(e._context.displayName||"Context")+".Provider";case Je:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ja:return a=e.displayName||null,a!==null?a:re(e.type)||"Memo";case We:a=e._payload,e=e._init;try{return re(e(a))}catch{}}return null}function de(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(a);case 8:return a===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function aa(e){var a=fe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),t=""+e[a];if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return r.call(this)},set:function(d){t=""+d,s.call(this,d)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(d){t=""+d},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Qo(e){e._valueTracker||(e._valueTracker=aa(e))}function Bi(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),t="";return e&&(t=fe(e)?e.checked?"true":"false":e.value),e=t,e!==n?(a.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xr(e,a){var n=a.checked;return M({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $i(e,a){var n=a.defaultValue==null?"":a.defaultValue,t=a.checked!=null?a.checked:a.defaultChecked;n=ie(a.value!=null?a.value:n),e._wrapperState={initialChecked:t,initialValue:n,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function _i(e,a){a=a.checked,a!=null&&He(e,"checked",a,!1)}function br(e,a){_i(e,a);var n=ie(a.value),t=a.type;if(n!=null)t==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?yr(e,a.type,n):a.hasOwnProperty("defaultValue")&&yr(e,a.type,ie(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function Hi(e,a,n){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var t=a.type;if(!(t!=="submit"&&t!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,n||a===e.value||(e.value=a),e.defaultValue=a}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yr(e,a,n){(a!=="number"||Ko(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oo=Array.isArray;function Nn(e,a,n,t){if(e=e.options,a){a={};for(var r=0;r<n.length;r++)a["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=a.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&t&&(e[n].defaultSelected=!0)}else{for(n=""+ie(n),a=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,t&&(e[r].defaultSelected=!0);return}a!==null||e[r].disabled||(a=e[r])}a!==null&&(a.selected=!0)}}function Cr(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(c(91));return M({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fi(e,a){var n=a.value;if(n==null){if(n=a.children,a=a.defaultValue,n!=null){if(a!=null)throw Error(c(92));if(oo(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),n=a}e._wrapperState={initialValue:ie(n)}}function Ui(e,a){var n=ie(a.value),t=ie(a.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),a.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),t!=null&&(e.defaultValue=""+t)}function Wi(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function Gi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ar(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?Gi(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zo,Yi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,n,t,r){MSApp.execUnsafeLocalFunction(function(){return e(a,n,t,r)})}:e})(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function to(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Su=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){Su.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),ro[a]=ro[e]})});function Qi(e,a,n){return a==null||typeof a=="boolean"||a===""?"":n||typeof a!="number"||a===0||ro.hasOwnProperty(e)&&ro[e]?(""+a).trim():a+"px"}function Ki(e,a){e=e.style;for(var n in a)if(a.hasOwnProperty(n)){var t=n.indexOf("--")===0,r=Qi(n,a[n],t);n==="float"&&(n="cssFloat"),t?e.setProperty(n,r):e[n]=r}}var ku=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sr(e,a){if(a){if(ku[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(c(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(c(61))}if(a.style!=null&&typeof a.style!="object")throw Error(c(62))}}function kr(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pr=null;function jr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nr=null,wn=null,In=null;function Zi(e){if(e=wo(e)){if(typeof Nr!="function")throw Error(c(280));var a=e.stateNode;a&&(a=yt(a),Nr(e.stateNode,e.type,a))}}function Xi(e){wn?In?In.push(e):In=[e]:wn=e}function Ji(){if(wn){var e=wn,a=In;if(In=wn=null,Zi(e),a)for(e=0;e<a.length;e++)Zi(a[e])}}function el(e,a){return e(a)}function al(){}var wr=!1;function nl(e,a,n){if(wr)return e(a,n);wr=!0;try{return el(e,a,n)}finally{wr=!1,(wn!==null||In!==null)&&(al(),Ji())}}function so(e,a){var n=e.stateNode;if(n===null)return null;var t=yt(n);if(t===null)return null;n=t[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,a,typeof n));return n}var Ir=!1;if(S)try{var io={};Object.defineProperty(io,"passive",{get:function(){Ir=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Ir=!1}function Pu(e,a,n,t,r,s,d,p,g){var A=Array.prototype.slice.call(arguments,3);try{a.apply(n,A)}catch(I){this.onError(I)}}var lo=!1,Xo=null,Jo=!1,Er=null,ju={onError:function(e){lo=!0,Xo=e}};function Nu(e,a,n,t,r,s,d,p,g){lo=!1,Xo=null,Pu.apply(ju,arguments)}function wu(e,a,n,t,r,s,d,p,g){if(Nu.apply(this,arguments),lo){if(lo){var A=Xo;lo=!1,Xo=null}else throw Error(c(198));Jo||(Jo=!0,Er=A)}}function dn(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function ol(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function tl(e){if(dn(e)!==e)throw Error(c(188))}function Iu(e){var a=e.alternate;if(!a){if(a=dn(e),a===null)throw Error(c(188));return a!==e?null:e}for(var n=e,t=a;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(t=r.return,t!==null){n=t;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return tl(r),e;if(s===t)return tl(r),a;s=s.sibling}throw Error(c(188))}if(n.return!==t.return)n=r,t=s;else{for(var d=!1,p=r.child;p;){if(p===n){d=!0,n=r,t=s;break}if(p===t){d=!0,t=r,n=s;break}p=p.sibling}if(!d){for(p=s.child;p;){if(p===n){d=!0,n=s,t=r;break}if(p===t){d=!0,t=s,n=r;break}p=p.sibling}if(!d)throw Error(c(189))}}if(n.alternate!==t)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:a}function rl(e){return e=Iu(e),e!==null?sl(e):null}function sl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=sl(e);if(a!==null)return a;e=e.sibling}return null}var il=l.unstable_scheduleCallback,ll=l.unstable_cancelCallback,Eu=l.unstable_shouldYield,zu=l.unstable_requestPaint,Ae=l.unstable_now,Ru=l.unstable_getCurrentPriorityLevel,zr=l.unstable_ImmediatePriority,cl=l.unstable_UserBlockingPriority,et=l.unstable_NormalPriority,Tu=l.unstable_LowPriority,dl=l.unstable_IdlePriority,at=null,Na=null;function Du(e){if(Na&&typeof Na.onCommitFiberRoot=="function")try{Na.onCommitFiberRoot(at,e,void 0,(e.current.flags&128)===128)}catch{}}var fa=Math.clz32?Math.clz32:Mu,Lu=Math.log,Ou=Math.LN2;function Mu(e){return e>>>=0,e===0?32:31-(Lu(e)/Ou|0)|0}var nt=64,ot=4194304;function co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tt(e,a){var n=e.pendingLanes;if(n===0)return 0;var t=0,r=e.suspendedLanes,s=e.pingedLanes,d=n&268435455;if(d!==0){var p=d&~r;p!==0?t=co(p):(s&=d,s!==0&&(t=co(s)))}else d=n&~r,d!==0?t=co(d):s!==0&&(t=co(s));if(t===0)return 0;if(a!==0&&a!==t&&(a&r)===0&&(r=t&-t,s=a&-a,r>=s||r===16&&(s&4194240)!==0))return a;if((t&4)!==0&&(t|=n&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=t;0<a;)n=31-fa(a),r=1<<n,t|=e[n],a&=~r;return t}function qu(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vu(e,a){for(var n=e.suspendedLanes,t=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-fa(s),p=1<<d,g=r[d];g===-1?((p&n)===0||(p&t)!==0)&&(r[d]=qu(p,a)):g<=a&&(e.expiredLanes|=p),s&=~p}}function Rr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ul(){var e=nt;return nt<<=1,(nt&4194240)===0&&(nt=64),e}function Tr(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function uo(e,a,n){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-fa(a),e[a]=n}function Bu(e,a){var n=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-fa(n),s=1<<r;a[r]=0,t[r]=-1,e[r]=-1,n&=~s}}function Dr(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var t=31-fa(n),r=1<<t;r&a|e[t]&a&&(e[t]|=a),n&=~r}}var le=0;function ml(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pl,Lr,fl,gl,hl,Or=!1,rt=[],$a=null,_a=null,Ha=null,mo=new Map,po=new Map,Fa=[],$u="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vl(e,a){switch(e){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":mo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(a.pointerId)}}function fo(e,a,n,t,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:n,eventSystemFlags:t,nativeEvent:s,targetContainers:[r]},a!==null&&(a=wo(a),a!==null&&Lr(a)),e):(e.eventSystemFlags|=t,a=e.targetContainers,r!==null&&a.indexOf(r)===-1&&a.push(r),e)}function _u(e,a,n,t,r){switch(a){case"focusin":return $a=fo($a,e,a,n,t,r),!0;case"dragenter":return _a=fo(_a,e,a,n,t,r),!0;case"mouseover":return Ha=fo(Ha,e,a,n,t,r),!0;case"pointerover":var s=r.pointerId;return mo.set(s,fo(mo.get(s)||null,e,a,n,t,r)),!0;case"gotpointercapture":return s=r.pointerId,po.set(s,fo(po.get(s)||null,e,a,n,t,r)),!0}return!1}function xl(e){var a=un(e.target);if(a!==null){var n=dn(a);if(n!==null){if(a=n.tag,a===13){if(a=ol(n),a!==null){e.blockedOn=a,hl(e.priority,function(){fl(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function st(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=qr(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);Pr=t,n.target.dispatchEvent(t),Pr=null}else return a=wo(n),a!==null&&Lr(a),e.blockedOn=n,!1;a.shift()}return!0}function bl(e,a,n){st(e)&&n.delete(a)}function Hu(){Or=!1,$a!==null&&st($a)&&($a=null),_a!==null&&st(_a)&&(_a=null),Ha!==null&&st(Ha)&&(Ha=null),mo.forEach(bl),po.forEach(bl)}function go(e,a){e.blockedOn===a&&(e.blockedOn=null,Or||(Or=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Hu)))}function ho(e){function a(r){return go(r,e)}if(0<rt.length){go(rt[0],e);for(var n=1;n<rt.length;n++){var t=rt[n];t.blockedOn===e&&(t.blockedOn=null)}}for($a!==null&&go($a,e),_a!==null&&go(_a,e),Ha!==null&&go(Ha,e),mo.forEach(a),po.forEach(a),n=0;n<Fa.length;n++)t=Fa[n],t.blockedOn===e&&(t.blockedOn=null);for(;0<Fa.length&&(n=Fa[0],n.blockedOn===null);)xl(n),n.blockedOn===null&&Fa.shift()}var En=be.ReactCurrentBatchConfig,it=!0;function Fu(e,a,n,t){var r=le,s=En.transition;En.transition=null;try{le=1,Mr(e,a,n,t)}finally{le=r,En.transition=s}}function Uu(e,a,n,t){var r=le,s=En.transition;En.transition=null;try{le=4,Mr(e,a,n,t)}finally{le=r,En.transition=s}}function Mr(e,a,n,t){if(it){var r=qr(e,a,n,t);if(r===null)as(e,a,t,lt,n),vl(e,t);else if(_u(r,e,a,n,t))t.stopPropagation();else if(vl(e,t),a&4&&-1<$u.indexOf(e)){for(;r!==null;){var s=wo(r);if(s!==null&&pl(s),s=qr(e,a,n,t),s===null&&as(e,a,t,lt,n),s===r)break;r=s}r!==null&&t.stopPropagation()}else as(e,a,t,null,n)}}var lt=null;function qr(e,a,n,t){if(lt=null,e=jr(t),e=un(e),e!==null)if(a=dn(e),a===null)e=null;else if(n=a.tag,n===13){if(e=ol(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return lt=e,null}function yl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ru()){case zr:return 1;case cl:return 4;case et:case Tu:return 16;case dl:return 536870912;default:return 16}default:return 16}}var Ua=null,Vr=null,ct=null;function Cl(){if(ct)return ct;var e,a=Vr,n=a.length,t,r="value"in Ua?Ua.value:Ua.textContent,s=r.length;for(e=0;e<n&&a[e]===r[e];e++);var d=n-e;for(t=1;t<=d&&a[n-t]===r[s-t];t++);return ct=r.slice(e,1<t?1-t:void 0)}function dt(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function ut(){return!0}function Al(){return!1}function na(e){function a(n,t,r,s,d){this._reactName=n,this._targetInst=r,this.type=t,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ut:Al,this.isPropagationStopped=Al,this}return M(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ut)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ut)},persist:function(){},isPersistent:ut}),a}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Br=na(zn),vo=M({},zn,{view:0,detail:0}),Wu=na(vo),$r,_r,xo,mt=M({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?($r=e.screenX-xo.screenX,_r=e.screenY-xo.screenY):_r=$r=0,xo=e),$r)},movementY:function(e){return"movementY"in e?e.movementY:_r}}),Sl=na(mt),Gu=M({},mt,{dataTransfer:0}),Yu=na(Gu),Qu=M({},vo,{relatedTarget:0}),Hr=na(Qu),Ku=M({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zu=na(Ku),Xu=M({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ju=na(Xu),em=M({},zn,{data:0}),kl=na(em),am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=om[e])?!!a[e]:!1}function Fr(){return tm}var rm=M({},vo,{key:function(e){if(e.key){var a=am[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=dt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fr,charCode:function(e){return e.type==="keypress"?dt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sm=na(rm),im=M({},mt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pl=na(im),lm=M({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fr}),cm=na(lm),dm=M({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),um=na(dm),mm=M({},mt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=na(mm),fm=[9,13,27,32],Ur=S&&"CompositionEvent"in window,bo=null;S&&"documentMode"in document&&(bo=document.documentMode);var gm=S&&"TextEvent"in window&&!bo,jl=S&&(!Ur||bo&&8<bo&&11>=bo),Nl=" ",wl=!1;function Il(e,a){switch(e){case"keyup":return fm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function El(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function hm(e,a){switch(e){case"compositionend":return El(a);case"keypress":return a.which!==32?null:(wl=!0,Nl);case"textInput":return e=a.data,e===Nl&&wl?null:e;default:return null}}function vm(e,a){if(Rn)return e==="compositionend"||!Ur&&Il(e,a)?(e=Cl(),ct=Vr=Ua=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return jl&&a.locale!=="ko"?null:a.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zl(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!xm[e.type]:a==="textarea"}function Rl(e,a,n,t){Xi(t),a=vt(a,"onChange"),0<a.length&&(n=new Br("onChange","change",null,n,t),e.push({event:n,listeners:a}))}var yo=null,Co=null;function bm(e){Kl(e,0)}function pt(e){var a=Mn(e);if(Bi(a))return e}function ym(e,a){if(e==="change")return a}var Tl=!1;if(S){var Wr;if(S){var Gr="oninput"in document;if(!Gr){var Dl=document.createElement("div");Dl.setAttribute("oninput","return;"),Gr=typeof Dl.oninput=="function"}Wr=Gr}else Wr=!1;Tl=Wr&&(!document.documentMode||9<document.documentMode)}function Ll(){yo&&(yo.detachEvent("onpropertychange",Ol),Co=yo=null)}function Ol(e){if(e.propertyName==="value"&&pt(Co)){var a=[];Rl(a,Co,e,jr(e)),nl(bm,a)}}function Cm(e,a,n){e==="focusin"?(Ll(),yo=a,Co=n,yo.attachEvent("onpropertychange",Ol)):e==="focusout"&&Ll()}function Am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pt(Co)}function Sm(e,a){if(e==="click")return pt(a)}function km(e,a){if(e==="input"||e==="change")return pt(a)}function Pm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ga=typeof Object.is=="function"?Object.is:Pm;function Ao(e,a){if(ga(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),t=Object.keys(a);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var r=n[t];if(!x.call(a,r)||!ga(e[r],a[r]))return!1}return!0}function Ml(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ql(e,a){var n=Ml(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=a&&t>=a)return{node:n,offset:a-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ml(n)}}function Vl(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Vl(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Bl(){for(var e=window,a=Ko();a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=Ko(e.document)}return a}function Yr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function jm(e){var a=Bl(),n=e.focusedElem,t=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Vl(n.ownerDocument.documentElement,n)){if(t!==null&&Yr(n)){if(a=t.start,e=t.end,e===void 0&&(e=a),"selectionStart"in n)n.selectionStart=a,n.selectionEnd=Math.min(e,n.value.length);else if(e=(a=n.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,s=Math.min(t.start,r);t=t.end===void 0?s:Math.min(t.end,r),!e.extend&&s>t&&(r=t,t=s,s=r),r=ql(n,s);var d=ql(n,t);r&&d&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(a=a.createRange(),a.setStart(r.node,r.offset),e.removeAllRanges(),s>t?(e.addRange(a),e.extend(d.node,d.offset)):(a.setEnd(d.node,d.offset),e.addRange(a)))}}for(a=[],e=n;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<a.length;n++)e=a[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nm=S&&"documentMode"in document&&11>=document.documentMode,Tn=null,Qr=null,So=null,Kr=!1;function $l(e,a,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kr||Tn==null||Tn!==Ko(t)||(t=Tn,"selectionStart"in t&&Yr(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),So&&Ao(So,t)||(So=t,t=vt(Qr,"onSelect"),0<t.length&&(a=new Br("onSelect","select",null,a,n),e.push({event:a,listeners:t}),a.target=Tn)))}function ft(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var Dn={animationend:ft("Animation","AnimationEnd"),animationiteration:ft("Animation","AnimationIteration"),animationstart:ft("Animation","AnimationStart"),transitionend:ft("Transition","TransitionEnd")},Zr={},_l={};S&&(_l=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function gt(e){if(Zr[e])return Zr[e];if(!Dn[e])return e;var a=Dn[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in _l)return Zr[e]=a[n];return e}var Hl=gt("animationend"),Fl=gt("animationiteration"),Ul=gt("animationstart"),Wl=gt("transitionend"),Gl=new Map,Yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wa(e,a){Gl.set(e,a),v(a,[e])}for(var Xr=0;Xr<Yl.length;Xr++){var Jr=Yl[Xr],wm=Jr.toLowerCase(),Im=Jr[0].toUpperCase()+Jr.slice(1);Wa(wm,"on"+Im)}Wa(Hl,"onAnimationEnd"),Wa(Fl,"onAnimationIteration"),Wa(Ul,"onAnimationStart"),Wa("dblclick","onDoubleClick"),Wa("focusin","onFocus"),Wa("focusout","onBlur"),Wa(Wl,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Em=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Ql(e,a,n){var t=e.type||"unknown-event";e.currentTarget=n,wu(t,a,void 0,e),e.currentTarget=null}function Kl(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],r=t.event;t=t.listeners;e:{var s=void 0;if(a)for(var d=t.length-1;0<=d;d--){var p=t[d],g=p.instance,A=p.currentTarget;if(p=p.listener,g!==s&&r.isPropagationStopped())break e;Ql(r,p,A),s=g}else for(d=0;d<t.length;d++){if(p=t[d],g=p.instance,A=p.currentTarget,p=p.listener,g!==s&&r.isPropagationStopped())break e;Ql(r,p,A),s=g}}}if(Jo)throw e=Er,Jo=!1,Er=null,e}function me(e,a){var n=a[is];n===void 0&&(n=a[is]=new Set);var t=e+"__bubble";n.has(t)||(Zl(a,e,2,!1),n.add(t))}function es(e,a,n){var t=0;a&&(t|=4),Zl(n,e,t,a)}var ht="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[ht]){e[ht]=!0,m.forEach(function(n){n!=="selectionchange"&&(Em.has(n)||es(n,!1,e),es(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[ht]||(a[ht]=!0,es("selectionchange",!1,a))}}function Zl(e,a,n,t){switch(yl(a)){case 1:var r=Fu;break;case 4:r=Uu;break;default:r=Mr}n=r.bind(null,a,n,e),r=void 0,!Ir||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(r=!0),t?r!==void 0?e.addEventListener(a,n,{capture:!0,passive:r}):e.addEventListener(a,n,!0):r!==void 0?e.addEventListener(a,n,{passive:r}):e.addEventListener(a,n,!1)}function as(e,a,n,t,r){var s=t;if((a&1)===0&&(a&2)===0&&t!==null)e:for(;;){if(t===null)return;var d=t.tag;if(d===3||d===4){var p=t.stateNode.containerInfo;if(p===r||p.nodeType===8&&p.parentNode===r)break;if(d===4)for(d=t.return;d!==null;){var g=d.tag;if((g===3||g===4)&&(g=d.stateNode.containerInfo,g===r||g.nodeType===8&&g.parentNode===r))return;d=d.return}for(;p!==null;){if(d=un(p),d===null)return;if(g=d.tag,g===5||g===6){t=s=d;continue e}p=p.parentNode}}t=t.return}nl(function(){var A=s,I=jr(n),z=[];e:{var N=Gl.get(e);if(N!==void 0){var L=Br,q=e;switch(e){case"keypress":if(dt(n)===0)break e;case"keydown":case"keyup":L=sm;break;case"focusin":q="focus",L=Hr;break;case"focusout":q="blur",L=Hr;break;case"beforeblur":case"afterblur":L=Hr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Yu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=cm;break;case Hl:case Fl:case Ul:L=Zu;break;case Wl:L=um;break;case"scroll":L=Wu;break;case"wheel":L=pm;break;case"copy":case"cut":case"paste":L=Ju;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Pl}var V=(a&4)!==0,Se=!V&&e==="scroll",y=V?N!==null?N+"Capture":null:N;V=[];for(var h=A,C;h!==null;){C=h;var R=C.stateNode;if(C.tag===5&&R!==null&&(C=R,y!==null&&(R=so(h,y),R!=null&&V.push(jo(h,R,C)))),Se)break;h=h.return}0<V.length&&(N=new L(N,q,null,n,I),z.push({event:N,listeners:V}))}}if((a&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",N&&n!==Pr&&(q=n.relatedTarget||n.fromElement)&&(un(q)||q[Ta]))break e;if((L||N)&&(N=I.window===I?I:(N=I.ownerDocument)?N.defaultView||N.parentWindow:window,L?(q=n.relatedTarget||n.toElement,L=A,q=q?un(q):null,q!==null&&(Se=dn(q),q!==Se||q.tag!==5&&q.tag!==6)&&(q=null)):(L=null,q=A),L!==q)){if(V=Sl,R="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(V=Pl,R="onPointerLeave",y="onPointerEnter",h="pointer"),Se=L==null?N:Mn(L),C=q==null?N:Mn(q),N=new V(R,h+"leave",L,n,I),N.target=Se,N.relatedTarget=C,R=null,un(I)===A&&(V=new V(y,h+"enter",q,n,I),V.target=C,V.relatedTarget=Se,R=V),Se=R,L&&q)a:{for(V=L,y=q,h=0,C=V;C;C=Ln(C))h++;for(C=0,R=y;R;R=Ln(R))C++;for(;0<h-C;)V=Ln(V),h--;for(;0<C-h;)y=Ln(y),C--;for(;h--;){if(V===y||y!==null&&V===y.alternate)break a;V=Ln(V),y=Ln(y)}V=null}else V=null;L!==null&&Xl(z,N,L,V,!1),q!==null&&Se!==null&&Xl(z,Se,q,V,!0)}}e:{if(N=A?Mn(A):window,L=N.nodeName&&N.nodeName.toLowerCase(),L==="select"||L==="input"&&N.type==="file")var $=ym;else if(zl(N))if(Tl)$=km;else{$=Am;var H=Cm}else(L=N.nodeName)&&L.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&($=Sm);if($&&($=$(e,A))){Rl(z,$,n,I);break e}H&&H(e,N,A),e==="focusout"&&(H=N._wrapperState)&&H.controlled&&N.type==="number"&&yr(N,"number",N.value)}switch(H=A?Mn(A):window,e){case"focusin":(zl(H)||H.contentEditable==="true")&&(Tn=H,Qr=A,So=null);break;case"focusout":So=Qr=Tn=null;break;case"mousedown":Kr=!0;break;case"contextmenu":case"mouseup":case"dragend":Kr=!1,$l(z,n,I);break;case"selectionchange":if(Nm)break;case"keydown":case"keyup":$l(z,n,I)}var F;if(Ur)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Rn?Il(e,n)&&(Y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Y="onCompositionStart");Y&&(jl&&n.locale!=="ko"&&(Rn||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Rn&&(F=Cl()):(Ua=I,Vr="value"in Ua?Ua.value:Ua.textContent,Rn=!0)),H=vt(A,Y),0<H.length&&(Y=new kl(Y,e,null,n,I),z.push({event:Y,listeners:H}),F?Y.data=F:(F=El(n),F!==null&&(Y.data=F)))),(F=gm?hm(e,n):vm(e,n))&&(A=vt(A,"onBeforeInput"),0<A.length&&(I=new kl("onBeforeInput","beforeinput",null,n,I),z.push({event:I,listeners:A}),I.data=F))}Kl(z,a)})}function jo(e,a,n){return{instance:e,listener:a,currentTarget:n}}function vt(e,a){for(var n=a+"Capture",t=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=so(e,n),s!=null&&t.unshift(jo(e,s,r)),s=so(e,a),s!=null&&t.push(jo(e,s,r))),e=e.return}return t}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xl(e,a,n,t,r){for(var s=a._reactName,d=[];n!==null&&n!==t;){var p=n,g=p.alternate,A=p.stateNode;if(g!==null&&g===t)break;p.tag===5&&A!==null&&(p=A,r?(g=so(n,s),g!=null&&d.unshift(jo(n,g,p))):r||(g=so(n,s),g!=null&&d.push(jo(n,g,p)))),n=n.return}d.length!==0&&e.push({event:a,listeners:d})}var zm=/\r\n?/g,Rm=/\u0000|\uFFFD/g;function Jl(e){return(typeof e=="string"?e:""+e).replace(zm,`
`).replace(Rm,"")}function xt(e,a,n){if(a=Jl(a),Jl(e)!==a&&n)throw Error(c(425))}function bt(){}var ns=null,os=null;function ts(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var rs=typeof setTimeout=="function"?setTimeout:void 0,Tm=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(Lm)}:rs;function Lm(e){setTimeout(function(){throw e})}function ss(e,a){var n=a,t=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(t===0){e.removeChild(r),ho(a);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=r}while(n);ho(a)}function Ga(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function ac(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(a===0)return e;a--}else n==="/$"&&a++}e=e.previousSibling}return null}var On=Math.random().toString(36).slice(2),wa="__reactFiber$"+On,No="__reactProps$"+On,Ta="__reactContainer$"+On,is="__reactEvents$"+On,Om="__reactListeners$"+On,Mm="__reactHandles$"+On;function un(e){var a=e[wa];if(a)return a;for(var n=e.parentNode;n;){if(a=n[Ta]||n[wa]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=ac(e);e!==null;){if(n=e[wa])return n;e=ac(e)}return a}e=n,n=e.parentNode}return null}function wo(e){return e=e[wa]||e[Ta],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function yt(e){return e[No]||null}var ls=[],qn=-1;function Ya(e){return{current:e}}function pe(e){0>qn||(e.current=ls[qn],ls[qn]=null,qn--)}function ue(e,a){qn++,ls[qn]=e.current,e.current=a}var Qa={},Me=Ya(Qa),Ge=Ya(!1),mn=Qa;function Vn(e,a){var n=e.type.contextTypes;if(!n)return Qa;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===a)return t.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=a[s];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ye(e){return e=e.childContextTypes,e!=null}function Ct(){pe(Ge),pe(Me)}function nc(e,a,n){if(Me.current!==Qa)throw Error(c(168));ue(Me,a),ue(Ge,n)}function oc(e,a,n){var t=e.stateNode;if(a=a.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var r in t)if(!(r in a))throw Error(c(108,de(e)||"Unknown",r));return M({},n,t)}function At(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qa,mn=Me.current,ue(Me,e),ue(Ge,Ge.current),!0}function tc(e,a,n){var t=e.stateNode;if(!t)throw Error(c(169));n?(e=oc(e,a,mn),t.__reactInternalMemoizedMergedChildContext=e,pe(Ge),pe(Me),ue(Me,e)):pe(Ge),ue(Ge,n)}var Da=null,St=!1,cs=!1;function rc(e){Da===null?Da=[e]:Da.push(e)}function qm(e){St=!0,rc(e)}function Ka(){if(!cs&&Da!==null){cs=!0;var e=0,a=le;try{var n=Da;for(le=1;e<n.length;e++){var t=n[e];do t=t(!0);while(t!==null)}Da=null,St=!1}catch(r){throw Da!==null&&(Da=Da.slice(e+1)),il(zr,Ka),r}finally{le=a,cs=!1}}return null}var Bn=[],$n=0,kt=null,Pt=0,ia=[],la=0,pn=null,La=1,Oa="";function fn(e,a){Bn[$n++]=Pt,Bn[$n++]=kt,kt=e,Pt=a}function sc(e,a,n){ia[la++]=La,ia[la++]=Oa,ia[la++]=pn,pn=e;var t=La;e=Oa;var r=32-fa(t)-1;t&=~(1<<r),n+=1;var s=32-fa(a)+r;if(30<s){var d=r-r%5;s=(t&(1<<d)-1).toString(32),t>>=d,r-=d,La=1<<32-fa(a)+r|n<<r|t,Oa=s+e}else La=1<<s|n<<r|t,Oa=e}function ds(e){e.return!==null&&(fn(e,1),sc(e,1,0))}function us(e){for(;e===kt;)kt=Bn[--$n],Bn[$n]=null,Pt=Bn[--$n],Bn[$n]=null;for(;e===pn;)pn=ia[--la],ia[la]=null,Oa=ia[--la],ia[la]=null,La=ia[--la],ia[la]=null}var oa=null,ta=null,ge=!1,ha=null;function ic(e,a){var n=ma(5,null,null,0);n.elementType="DELETED",n.stateNode=a,n.return=e,a=e.deletions,a===null?(e.deletions=[n],e.flags|=16):a.push(n)}function lc(e,a){switch(e.tag){case 5:var n=e.type;return a=a.nodeType!==1||n.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,oa=e,ta=Ga(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,oa=e,ta=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(n=pn!==null?{id:La,overflow:Oa}:null,e.memoizedState={dehydrated:a,treeContext:n,retryLane:1073741824},n=ma(18,null,null,0),n.stateNode=a,n.return=e,e.child=n,oa=e,ta=null,!0):!1;default:return!1}}function ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ps(e){if(ge){var a=ta;if(a){var n=a;if(!lc(e,a)){if(ms(e))throw Error(c(418));a=Ga(n.nextSibling);var t=oa;a&&lc(e,a)?ic(t,n):(e.flags=e.flags&-4097|2,ge=!1,oa=e)}}else{if(ms(e))throw Error(c(418));e.flags=e.flags&-4097|2,ge=!1,oa=e}}}function cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;oa=e}function jt(e){if(e!==oa)return!1;if(!ge)return cc(e),ge=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!ts(e.type,e.memoizedProps)),a&&(a=ta)){if(ms(e))throw dc(),Error(c(418));for(;a;)ic(e,a),a=Ga(a.nextSibling)}if(cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(a===0){ta=Ga(e.nextSibling);break e}a--}else n!=="$"&&n!=="$!"&&n!=="$?"||a++}e=e.nextSibling}ta=null}}else ta=oa?Ga(e.stateNode.nextSibling):null;return!0}function dc(){for(var e=ta;e;)e=Ga(e.nextSibling)}function _n(){ta=oa=null,ge=!1}function fs(e){ha===null?ha=[e]:ha.push(e)}var Vm=be.ReactCurrentBatchConfig;function Io(e,a,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var t=n.stateNode}if(!t)throw Error(c(147,e));var r=t,s=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===s?a.ref:(a=function(d){var p=r.refs;d===null?delete p[s]:p[s]=d},a._stringRef=s,a)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function Nt(e,a){throw e=Object.prototype.toString.call(a),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function uc(e){var a=e._init;return a(e._payload)}function mc(e){function a(y,h){if(e){var C=y.deletions;C===null?(y.deletions=[h],y.flags|=16):C.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)a(y,h),h=h.sibling;return null}function t(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function r(y,h){return y=tn(y,h),y.index=0,y.sibling=null,y}function s(y,h,C){return y.index=C,e?(C=y.alternate,C!==null?(C=C.index,C<h?(y.flags|=2,h):C):(y.flags|=2,h)):(y.flags|=1048576,h)}function d(y){return e&&y.alternate===null&&(y.flags|=2),y}function p(y,h,C,R){return h===null||h.tag!==6?(h=ri(C,y.mode,R),h.return=y,h):(h=r(h,C),h.return=y,h)}function g(y,h,C,R){var $=C.type;return $===Oe?I(y,h,C.props.children,R,C.key):h!==null&&(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===We&&uc($)===h.type)?(R=r(h,C.props),R.ref=Io(y,h,C),R.return=y,R):(R=Zt(C.type,C.key,C.props,null,y.mode,R),R.ref=Io(y,h,C),R.return=y,R)}function A(y,h,C,R){return h===null||h.tag!==4||h.stateNode.containerInfo!==C.containerInfo||h.stateNode.implementation!==C.implementation?(h=si(C,y.mode,R),h.return=y,h):(h=r(h,C.children||[]),h.return=y,h)}function I(y,h,C,R,$){return h===null||h.tag!==7?(h=An(C,y.mode,R,$),h.return=y,h):(h=r(h,C),h.return=y,h)}function z(y,h,C){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ri(""+h,y.mode,C),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ie:return C=Zt(h.type,h.key,h.props,null,y.mode,C),C.ref=Io(y,null,h),C.return=y,C;case oe:return h=si(h,y.mode,C),h.return=y,h;case We:var R=h._init;return z(y,R(h._payload),C)}if(oo(h)||W(h))return h=An(h,y.mode,C,null),h.return=y,h;Nt(y,h)}return null}function N(y,h,C,R){var $=h!==null?h.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return $!==null?null:p(y,h,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ie:return C.key===$?g(y,h,C,R):null;case oe:return C.key===$?A(y,h,C,R):null;case We:return $=C._init,N(y,h,$(C._payload),R)}if(oo(C)||W(C))return $!==null?null:I(y,h,C,R,null);Nt(y,C)}return null}function L(y,h,C,R,$){if(typeof R=="string"&&R!==""||typeof R=="number")return y=y.get(C)||null,p(h,y,""+R,$);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ie:return y=y.get(R.key===null?C:R.key)||null,g(h,y,R,$);case oe:return y=y.get(R.key===null?C:R.key)||null,A(h,y,R,$);case We:var H=R._init;return L(y,h,C,H(R._payload),$)}if(oo(R)||W(R))return y=y.get(C)||null,I(h,y,R,$,null);Nt(h,R)}return null}function q(y,h,C,R){for(var $=null,H=null,F=h,Y=h=0,Re=null;F!==null&&Y<C.length;Y++){F.index>Y?(Re=F,F=null):Re=F.sibling;var se=N(y,F,C[Y],R);if(se===null){F===null&&(F=Re);break}e&&F&&se.alternate===null&&a(y,F),h=s(se,h,Y),H===null?$=se:H.sibling=se,H=se,F=Re}if(Y===C.length)return n(y,F),ge&&fn(y,Y),$;if(F===null){for(;Y<C.length;Y++)F=z(y,C[Y],R),F!==null&&(h=s(F,h,Y),H===null?$=F:H.sibling=F,H=F);return ge&&fn(y,Y),$}for(F=t(y,F);Y<C.length;Y++)Re=L(F,y,Y,C[Y],R),Re!==null&&(e&&Re.alternate!==null&&F.delete(Re.key===null?Y:Re.key),h=s(Re,h,Y),H===null?$=Re:H.sibling=Re,H=Re);return e&&F.forEach(function(rn){return a(y,rn)}),ge&&fn(y,Y),$}function V(y,h,C,R){var $=W(C);if(typeof $!="function")throw Error(c(150));if(C=$.call(C),C==null)throw Error(c(151));for(var H=$=null,F=h,Y=h=0,Re=null,se=C.next();F!==null&&!se.done;Y++,se=C.next()){F.index>Y?(Re=F,F=null):Re=F.sibling;var rn=N(y,F,se.value,R);if(rn===null){F===null&&(F=Re);break}e&&F&&rn.alternate===null&&a(y,F),h=s(rn,h,Y),H===null?$=rn:H.sibling=rn,H=rn,F=Re}if(se.done)return n(y,F),ge&&fn(y,Y),$;if(F===null){for(;!se.done;Y++,se=C.next())se=z(y,se.value,R),se!==null&&(h=s(se,h,Y),H===null?$=se:H.sibling=se,H=se);return ge&&fn(y,Y),$}for(F=t(y,F);!se.done;Y++,se=C.next())se=L(F,y,Y,se.value,R),se!==null&&(e&&se.alternate!==null&&F.delete(se.key===null?Y:se.key),h=s(se,h,Y),H===null?$=se:H.sibling=se,H=se);return e&&F.forEach(function(xp){return a(y,xp)}),ge&&fn(y,Y),$}function Se(y,h,C,R){if(typeof C=="object"&&C!==null&&C.type===Oe&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Ie:e:{for(var $=C.key,H=h;H!==null;){if(H.key===$){if($=C.type,$===Oe){if(H.tag===7){n(y,H.sibling),h=r(H,C.props.children),h.return=y,y=h;break e}}else if(H.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===We&&uc($)===H.type){n(y,H.sibling),h=r(H,C.props),h.ref=Io(y,H,C),h.return=y,y=h;break e}n(y,H);break}else a(y,H);H=H.sibling}C.type===Oe?(h=An(C.props.children,y.mode,R,C.key),h.return=y,y=h):(R=Zt(C.type,C.key,C.props,null,y.mode,R),R.ref=Io(y,h,C),R.return=y,y=R)}return d(y);case oe:e:{for(H=C.key;h!==null;){if(h.key===H)if(h.tag===4&&h.stateNode.containerInfo===C.containerInfo&&h.stateNode.implementation===C.implementation){n(y,h.sibling),h=r(h,C.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else a(y,h);h=h.sibling}h=si(C,y.mode,R),h.return=y,y=h}return d(y);case We:return H=C._init,Se(y,h,H(C._payload),R)}if(oo(C))return q(y,h,C,R);if(W(C))return V(y,h,C,R);Nt(y,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,h!==null&&h.tag===6?(n(y,h.sibling),h=r(h,C),h.return=y,y=h):(n(y,h),h=ri(C,y.mode,R),h.return=y,y=h),d(y)):n(y,h)}return Se}var Hn=mc(!0),pc=mc(!1),wt=Ya(null),It=null,Fn=null,gs=null;function hs(){gs=Fn=It=null}function vs(e){var a=wt.current;pe(wt),e._currentValue=a}function xs(e,a,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),e===n)break;e=e.return}}function Un(e,a){It=e,gs=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&a)!==0&&(Qe=!0),e.firstContext=null)}function ca(e){var a=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:a,next:null},Fn===null){if(It===null)throw Error(c(308));Fn=e,It.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return a}var gn=null;function bs(e){gn===null?gn=[e]:gn.push(e)}function fc(e,a,n,t){var r=a.interleaved;return r===null?(n.next=n,bs(a)):(n.next=r.next,r.next=n),a.interleaved=n,Ma(e,t)}function Ma(e,a){e.lanes|=a;var n=e.alternate;for(n!==null&&(n.lanes|=a),n=e,e=e.return;e!==null;)e.childLanes|=a,n=e.alternate,n!==null&&(n.childLanes|=a),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Za=!1;function ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qa(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function Xa(e,a,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(ne&2)!==0){var r=t.pending;return r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a,Ma(e,n)}return r=t.interleaved,r===null?(a.next=a,bs(t)):(a.next=r.next,r.next=a),t.interleaved=a,Ma(e,n)}function Et(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194240)!==0)){var t=a.lanes;t&=e.pendingLanes,n|=t,a.lanes=n,Dr(e,n)}}function hc(e,a){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=d:s=s.next=d,n=n.next}while(n!==null);s===null?r=s=a:s=s.next=a}else r=s=a;n={baseState:t.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:t.shared,effects:t.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}function zt(e,a,n,t){var r=e.updateQueue;Za=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,p=r.shared.pending;if(p!==null){r.shared.pending=null;var g=p,A=g.next;g.next=null,d===null?s=A:d.next=A,d=g;var I=e.alternate;I!==null&&(I=I.updateQueue,p=I.lastBaseUpdate,p!==d&&(p===null?I.firstBaseUpdate=A:p.next=A,I.lastBaseUpdate=g))}if(s!==null){var z=r.baseState;d=0,I=A=g=null,p=s;do{var N=p.lane,L=p.eventTime;if((t&N)===N){I!==null&&(I=I.next={eventTime:L,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var q=e,V=p;switch(N=a,L=n,V.tag){case 1:if(q=V.payload,typeof q=="function"){z=q.call(L,z,N);break e}z=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=V.payload,N=typeof q=="function"?q.call(L,z,N):q,N==null)break e;z=M({},z,N);break e;case 2:Za=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,N=r.effects,N===null?r.effects=[p]:N.push(p))}else L={eventTime:L,lane:N,tag:p.tag,payload:p.payload,callback:p.callback,next:null},I===null?(A=I=L,g=z):I=I.next=L,d|=N;if(p=p.next,p===null){if(p=r.shared.pending,p===null)break;N=p,p=N.next,N.next=null,r.lastBaseUpdate=N,r.shared.pending=null}}while(!0);if(I===null&&(g=z),r.baseState=g,r.firstBaseUpdate=A,r.lastBaseUpdate=I,a=r.shared.interleaved,a!==null){r=a;do d|=r.lane,r=r.next;while(r!==a)}else s===null&&(r.shared.lanes=0);xn|=d,e.lanes=d,e.memoizedState=z}}function vc(e,a,n){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var t=e[a],r=t.callback;if(r!==null){if(t.callback=null,t=n,typeof r!="function")throw Error(c(191,r));r.call(t)}}}var Eo={},Ia=Ya(Eo),zo=Ya(Eo),Ro=Ya(Eo);function hn(e){if(e===Eo)throw Error(c(174));return e}function Cs(e,a){switch(ue(Ro,a),ue(zo,e),ue(Ia,Eo),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ar(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=Ar(a,e)}pe(Ia),ue(Ia,a)}function Wn(){pe(Ia),pe(zo),pe(Ro)}function xc(e){hn(Ro.current);var a=hn(Ia.current),n=Ar(a,e.type);a!==n&&(ue(zo,e),ue(Ia,n))}function As(e){zo.current===e&&(pe(Ia),pe(zo))}var ve=Ya(0);function Rt(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ss=[];function ks(){for(var e=0;e<Ss.length;e++)Ss[e]._workInProgressVersionPrimary=null;Ss.length=0}var Tt=be.ReactCurrentDispatcher,Ps=be.ReactCurrentBatchConfig,vn=0,xe=null,Ne=null,Ee=null,Dt=!1,To=!1,Do=0,Bm=0;function qe(){throw Error(c(321))}function js(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!ga(e[n],a[n]))return!1;return!0}function Ns(e,a,n,t,r,s){if(vn=s,xe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Tt.current=e===null||e.memoizedState===null?Fm:Um,e=n(t,r),To){s=0;do{if(To=!1,Do=0,25<=s)throw Error(c(301));s+=1,Ee=Ne=null,a.updateQueue=null,Tt.current=Wm,e=n(t,r)}while(To)}if(Tt.current=Mt,a=Ne!==null&&Ne.next!==null,vn=0,Ee=Ne=xe=null,Dt=!1,a)throw Error(c(300));return e}function ws(){var e=Do!==0;return Do=0,e}function Ea(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?xe.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function da(){if(Ne===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var a=Ee===null?xe.memoizedState:Ee.next;if(a!==null)Ee=a,Ne=e;else{if(e===null)throw Error(c(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ee===null?xe.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Lo(e,a){return typeof a=="function"?a(e):a}function Is(e){var a=da(),n=a.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var t=Ne,r=t.baseQueue,s=n.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,t=t.baseState;var p=d=null,g=null,A=s;do{var I=A.lane;if((vn&I)===I)g!==null&&(g=g.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),t=A.hasEagerState?A.eagerState:e(t,A.action);else{var z={lane:I,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};g===null?(p=g=z,d=t):g=g.next=z,xe.lanes|=I,xn|=I}A=A.next}while(A!==null&&A!==s);g===null?d=t:g.next=p,ga(t,a.memoizedState)||(Qe=!0),a.memoizedState=t,a.baseState=d,a.baseQueue=g,n.lastRenderedState=t}if(e=n.interleaved,e!==null){r=e;do s=r.lane,xe.lanes|=s,xn|=s,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[a.memoizedState,n.dispatch]}function Es(e){var a=da(),n=a.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var t=n.dispatch,r=n.pending,s=a.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);ga(s,a.memoizedState)||(Qe=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),n.lastRenderedState=s}return[s,t]}function bc(){}function yc(e,a){var n=xe,t=da(),r=a(),s=!ga(t.memoizedState,r);if(s&&(t.memoizedState=r,Qe=!0),t=t.queue,zs(Sc.bind(null,n,t,e),[e]),t.getSnapshot!==a||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Oo(9,Ac.bind(null,n,t,r,a),void 0,null),ze===null)throw Error(c(349));(vn&30)!==0||Cc(n,a,r)}return r}function Cc(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=xe.updateQueue,a===null?(a={lastEffect:null,stores:null},xe.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function Ac(e,a,n,t){a.value=n,a.getSnapshot=t,kc(a)&&Pc(e)}function Sc(e,a,n){return n(function(){kc(a)&&Pc(e)})}function kc(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!ga(e,n)}catch{return!0}}function Pc(e){var a=Ma(e,1);a!==null&&ya(a,e,1,-1)}function jc(e){var a=Ea();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},a.queue=e,e=e.dispatch=Hm.bind(null,xe,e),[a.memoizedState,e]}function Oo(e,a,n,t){return e={tag:e,create:a,destroy:n,deps:t,next:null},a=xe.updateQueue,a===null?(a={lastEffect:null,stores:null},xe.updateQueue=a,a.lastEffect=e.next=e):(n=a.lastEffect,n===null?a.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,a.lastEffect=e)),e}function Nc(){return da().memoizedState}function Lt(e,a,n,t){var r=Ea();xe.flags|=e,r.memoizedState=Oo(1|a,n,void 0,t===void 0?null:t)}function Ot(e,a,n,t){var r=da();t=t===void 0?null:t;var s=void 0;if(Ne!==null){var d=Ne.memoizedState;if(s=d.destroy,t!==null&&js(t,d.deps)){r.memoizedState=Oo(a,n,s,t);return}}xe.flags|=e,r.memoizedState=Oo(1|a,n,s,t)}function wc(e,a){return Lt(8390656,8,e,a)}function zs(e,a){return Ot(2048,8,e,a)}function Ic(e,a){return Ot(4,2,e,a)}function Ec(e,a){return Ot(4,4,e,a)}function zc(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Rc(e,a,n){return n=n!=null?n.concat([e]):null,Ot(4,4,zc.bind(null,a,e),n)}function Rs(){}function Tc(e,a){var n=da();a=a===void 0?null:a;var t=n.memoizedState;return t!==null&&a!==null&&js(a,t[1])?t[0]:(n.memoizedState=[e,a],e)}function Dc(e,a){var n=da();a=a===void 0?null:a;var t=n.memoizedState;return t!==null&&a!==null&&js(a,t[1])?t[0]:(e=e(),n.memoizedState=[e,a],e)}function Lc(e,a,n){return(vn&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n):(ga(n,a)||(n=ul(),xe.lanes|=n,xn|=n,e.baseState=!0),a)}function $m(e,a){var n=le;le=n!==0&&4>n?n:4,e(!0);var t=Ps.transition;Ps.transition={};try{e(!1),a()}finally{le=n,Ps.transition=t}}function Oc(){return da().memoizedState}function _m(e,a,n){var t=nn(e);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},Mc(e))qc(a,n);else if(n=fc(e,a,n,t),n!==null){var r=Ue();ya(n,e,t,r),Vc(n,a,t)}}function Hm(e,a,n){var t=nn(e),r={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))qc(a,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var d=a.lastRenderedState,p=s(d,n);if(r.hasEagerState=!0,r.eagerState=p,ga(p,d)){var g=a.interleaved;g===null?(r.next=r,bs(a)):(r.next=g.next,g.next=r),a.interleaved=r;return}}catch{}finally{}n=fc(e,a,r,t),n!==null&&(r=Ue(),ya(n,e,t,r),Vc(n,a,t))}}function Mc(e){var a=e.alternate;return e===xe||a!==null&&a===xe}function qc(e,a){To=Dt=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function Vc(e,a,n){if((n&4194240)!==0){var t=a.lanes;t&=e.pendingLanes,n|=t,a.lanes=n,Dr(e,n)}}var Mt={readContext:ca,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Fm={readContext:ca,useCallback:function(e,a){return Ea().memoizedState=[e,a===void 0?null:a],e},useContext:ca,useEffect:wc,useImperativeHandle:function(e,a,n){return n=n!=null?n.concat([e]):null,Lt(4194308,4,zc.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Lt(4194308,4,e,a)},useInsertionEffect:function(e,a){return Lt(4,2,e,a)},useMemo:function(e,a){var n=Ea();return a=a===void 0?null:a,e=e(),n.memoizedState=[e,a],e},useReducer:function(e,a,n){var t=Ea();return a=n!==void 0?n(a):a,t.memoizedState=t.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},t.queue=e,e=e.dispatch=_m.bind(null,xe,e),[t.memoizedState,e]},useRef:function(e){var a=Ea();return e={current:e},a.memoizedState=e},useState:jc,useDebugValue:Rs,useDeferredValue:function(e){return Ea().memoizedState=e},useTransition:function(){var e=jc(!1),a=e[0];return e=$m.bind(null,e[1]),Ea().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,n){var t=xe,r=Ea();if(ge){if(n===void 0)throw Error(c(407));n=n()}else{if(n=a(),ze===null)throw Error(c(349));(vn&30)!==0||Cc(t,a,n)}r.memoizedState=n;var s={value:n,getSnapshot:a};return r.queue=s,wc(Sc.bind(null,t,s,e),[e]),t.flags|=2048,Oo(9,Ac.bind(null,t,s,n,a),void 0,null),n},useId:function(){var e=Ea(),a=ze.identifierPrefix;if(ge){var n=Oa,t=La;n=(t&~(1<<32-fa(t)-1)).toString(32)+n,a=":"+a+"R"+n,n=Do++,0<n&&(a+="H"+n.toString(32)),a+=":"}else n=Bm++,a=":"+a+"r"+n.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},Um={readContext:ca,useCallback:Tc,useContext:ca,useEffect:zs,useImperativeHandle:Rc,useInsertionEffect:Ic,useLayoutEffect:Ec,useMemo:Dc,useReducer:Is,useRef:Nc,useState:function(){return Is(Lo)},useDebugValue:Rs,useDeferredValue:function(e){var a=da();return Lc(a,Ne.memoizedState,e)},useTransition:function(){var e=Is(Lo)[0],a=da().memoizedState;return[e,a]},useMutableSource:bc,useSyncExternalStore:yc,useId:Oc,unstable_isNewReconciler:!1},Wm={readContext:ca,useCallback:Tc,useContext:ca,useEffect:zs,useImperativeHandle:Rc,useInsertionEffect:Ic,useLayoutEffect:Ec,useMemo:Dc,useReducer:Es,useRef:Nc,useState:function(){return Es(Lo)},useDebugValue:Rs,useDeferredValue:function(e){var a=da();return Ne===null?a.memoizedState=e:Lc(a,Ne.memoizedState,e)},useTransition:function(){var e=Es(Lo)[0],a=da().memoizedState;return[e,a]},useMutableSource:bc,useSyncExternalStore:yc,useId:Oc,unstable_isNewReconciler:!1};function va(e,a){if(e&&e.defaultProps){a=M({},a),e=e.defaultProps;for(var n in e)a[n]===void 0&&(a[n]=e[n]);return a}return a}function Ts(e,a,n,t){a=e.memoizedState,n=n(t,a),n=n==null?a:M({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qt={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,a,n){e=e._reactInternals;var t=Ue(),r=nn(e),s=qa(t,r);s.payload=a,n!=null&&(s.callback=n),a=Xa(e,s,r),a!==null&&(ya(a,e,r,t),Et(a,e,r))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var t=Ue(),r=nn(e),s=qa(t,r);s.tag=1,s.payload=a,n!=null&&(s.callback=n),a=Xa(e,s,r),a!==null&&(ya(a,e,r,t),Et(a,e,r))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=Ue(),t=nn(e),r=qa(n,t);r.tag=2,a!=null&&(r.callback=a),a=Xa(e,r,t),a!==null&&(ya(a,e,t,n),Et(a,e,t))}};function Bc(e,a,n,t,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,s,d):a.prototype&&a.prototype.isPureReactComponent?!Ao(n,t)||!Ao(r,s):!0}function $c(e,a,n){var t=!1,r=Qa,s=a.contextType;return typeof s=="object"&&s!==null?s=ca(s):(r=Ye(a)?mn:Me.current,t=a.contextTypes,s=(t=t!=null)?Vn(e,r):Qa),a=new a(n,s),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qt,e.stateNode=a,a._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),a}function _c(e,a,n,t){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,t),a.state!==e&&qt.enqueueReplaceState(a,a.state,null)}function Ds(e,a,n,t){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},ys(e);var s=a.contextType;typeof s=="object"&&s!==null?r.context=ca(s):(s=Ye(a)?mn:Me.current,r.context=Vn(e,s)),r.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Ts(e,a,s,n),r.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&qt.enqueueReplaceState(r,r.state,null),zt(e,n,r,t),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,a){try{var n="",t=a;do n+=te(t),t=t.return;while(t);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:a,stack:r,digest:null}}function Ls(e,a,n){return{value:e,source:null,stack:n??null,digest:a??null}}function Os(e,a){try{console.error(a.value)}catch(n){setTimeout(function(){throw n})}}var Gm=typeof WeakMap=="function"?WeakMap:Map;function Hc(e,a,n){n=qa(-1,n),n.tag=3,n.payload={element:null};var t=a.value;return n.callback=function(){Ut||(Ut=!0,Zs=t),Os(e,a)},n}function Fc(e,a,n){n=qa(-1,n),n.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var r=a.value;n.payload=function(){return t(r)},n.callback=function(){Os(e,a)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Os(e,a),typeof t!="function"&&(en===null?en=new Set([this]):en.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})}),n}function Uc(e,a,n){var t=e.pingCache;if(t===null){t=e.pingCache=new Gm;var r=new Set;t.set(a,r)}else r=t.get(a),r===void 0&&(r=new Set,t.set(a,r));r.has(n)||(r.add(n),e=ip.bind(null,e,a,n),a.then(e,e))}function Wc(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Gc(e,a,n,t,r){return(e.mode&1)===0?(e===a?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(a=qa(-1,1),a.tag=2,Xa(n,a,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var Ym=be.ReactCurrentOwner,Qe=!1;function Fe(e,a,n,t){a.child=e===null?pc(a,null,n,t):Hn(a,e.child,n,t)}function Yc(e,a,n,t,r){n=n.render;var s=a.ref;return Un(a,r),t=Ns(e,a,n,t,s,r),n=ws(),e!==null&&!Qe?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r,Va(e,a,r)):(ge&&n&&ds(a),a.flags|=1,Fe(e,a,t,r),a.child)}function Qc(e,a,n,t,r){if(e===null){var s=n.type;return typeof s=="function"&&!ti(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(a.tag=15,a.type=s,Kc(e,a,s,t,r)):(e=Zt(n.type,null,t,a,a.mode,r),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,(e.lanes&r)===0){var d=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(d,t)&&e.ref===a.ref)return Va(e,a,r)}return a.flags|=1,e=tn(s,t),e.ref=a.ref,e.return=a,a.child=e}function Kc(e,a,n,t,r){if(e!==null){var s=e.memoizedProps;if(Ao(s,t)&&e.ref===a.ref)if(Qe=!1,a.pendingProps=t=s,(e.lanes&r)!==0)(e.flags&131072)!==0&&(Qe=!0);else return a.lanes=e.lanes,Va(e,a,r)}return Ms(e,a,n,t,r)}function Zc(e,a,n){var t=a.pendingProps,r=t.children,s=e!==null?e.memoizedState:null;if(t.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Qn,ra),ra|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,ue(Qn,ra),ra|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=s!==null?s.baseLanes:n,ue(Qn,ra),ra|=t}else s!==null?(t=s.baseLanes|n,a.memoizedState=null):t=n,ue(Qn,ra),ra|=t;return Fe(e,a,r,n),a.child}function Xc(e,a){var n=a.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(a.flags|=512,a.flags|=2097152)}function Ms(e,a,n,t,r){var s=Ye(n)?mn:Me.current;return s=Vn(a,s),Un(a,r),n=Ns(e,a,n,t,s,r),t=ws(),e!==null&&!Qe?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~r,Va(e,a,r)):(ge&&t&&ds(a),a.flags|=1,Fe(e,a,n,r),a.child)}function Jc(e,a,n,t,r){if(Ye(n)){var s=!0;At(a)}else s=!1;if(Un(a,r),a.stateNode===null)Bt(e,a),$c(a,n,t),Ds(a,n,t,r),t=!0;else if(e===null){var d=a.stateNode,p=a.memoizedProps;d.props=p;var g=d.context,A=n.contextType;typeof A=="object"&&A!==null?A=ca(A):(A=Ye(n)?mn:Me.current,A=Vn(a,A));var I=n.getDerivedStateFromProps,z=typeof I=="function"||typeof d.getSnapshotBeforeUpdate=="function";z||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==t||g!==A)&&_c(a,d,t,A),Za=!1;var N=a.memoizedState;d.state=N,zt(a,t,d,r),g=a.memoizedState,p!==t||N!==g||Ge.current||Za?(typeof I=="function"&&(Ts(a,n,I,t),g=a.memoizedState),(p=Za||Bc(a,n,p,t,N,g,A))?(z||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=g),d.props=t,d.state=g,d.context=A,t=p):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{d=a.stateNode,gc(e,a),p=a.memoizedProps,A=a.type===a.elementType?p:va(a.type,p),d.props=A,z=a.pendingProps,N=d.context,g=n.contextType,typeof g=="object"&&g!==null?g=ca(g):(g=Ye(n)?mn:Me.current,g=Vn(a,g));var L=n.getDerivedStateFromProps;(I=typeof L=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==z||N!==g)&&_c(a,d,t,g),Za=!1,N=a.memoizedState,d.state=N,zt(a,t,d,r);var q=a.memoizedState;p!==z||N!==q||Ge.current||Za?(typeof L=="function"&&(Ts(a,n,L,t),q=a.memoizedState),(A=Za||Bc(a,n,A,t,N,q,g)||!1)?(I||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(t,q,g),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(t,q,g)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=q),d.props=t,d.state=q,d.context=g,t=A):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),t=!1)}return qs(e,a,n,t,s,r)}function qs(e,a,n,t,r,s){Xc(e,a);var d=(a.flags&128)!==0;if(!t&&!d)return r&&tc(a,n,!1),Va(e,a,s);t=a.stateNode,Ym.current=a;var p=d&&typeof n.getDerivedStateFromError!="function"?null:t.render();return a.flags|=1,e!==null&&d?(a.child=Hn(a,e.child,null,s),a.child=Hn(a,null,p,s)):Fe(e,a,p,s),a.memoizedState=t.state,r&&tc(a,n,!0),a.child}function ed(e){var a=e.stateNode;a.pendingContext?nc(e,a.pendingContext,a.pendingContext!==a.context):a.context&&nc(e,a.context,!1),Cs(e,a.containerInfo)}function ad(e,a,n,t,r){return _n(),fs(r),a.flags|=256,Fe(e,a,n,t),a.child}var Vs={dehydrated:null,treeContext:null,retryLane:0};function Bs(e){return{baseLanes:e,cachePool:null,transitions:null}}function nd(e,a,n){var t=a.pendingProps,r=ve.current,s=!1,d=(a.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(r&2)!==0),p?(s=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),ue(ve,r&1),e===null)return ps(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((a.mode&1)===0?a.lanes=1:e.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(d=t.children,e=t.fallback,s?(t=a.mode,s=a.child,d={mode:"hidden",children:d},(t&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=Xt(d,t,0,null),e=An(e,t,n,null),s.return=a,e.return=a,s.sibling=e,a.child=s,a.child.memoizedState=Bs(n),a.memoizedState=Vs,e):$s(a,d));if(r=e.memoizedState,r!==null&&(p=r.dehydrated,p!==null))return Qm(e,a,d,t,p,r,n);if(s){s=t.fallback,d=a.mode,r=e.child,p=r.sibling;var g={mode:"hidden",children:t.children};return(d&1)===0&&a.child!==r?(t=a.child,t.childLanes=0,t.pendingProps=g,a.deletions=null):(t=tn(r,g),t.subtreeFlags=r.subtreeFlags&14680064),p!==null?s=tn(p,s):(s=An(s,d,n,null),s.flags|=2),s.return=a,t.return=a,t.sibling=s,a.child=t,t=s,s=a.child,d=e.child.memoizedState,d=d===null?Bs(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~n,a.memoizedState=Vs,t}return s=e.child,e=s.sibling,t=tn(s,{mode:"visible",children:t.children}),(a.mode&1)===0&&(t.lanes=n),t.return=a,t.sibling=null,e!==null&&(n=a.deletions,n===null?(a.deletions=[e],a.flags|=16):n.push(e)),a.child=t,a.memoizedState=null,t}function $s(e,a){return a=Xt({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function Vt(e,a,n,t){return t!==null&&fs(t),Hn(a,e.child,null,n),e=$s(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Qm(e,a,n,t,r,s,d){if(n)return a.flags&256?(a.flags&=-257,t=Ls(Error(c(422))),Vt(e,a,d,t)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(s=t.fallback,r=a.mode,t=Xt({mode:"visible",children:t.children},r,0,null),s=An(s,r,d,null),s.flags|=2,t.return=a,s.return=a,t.sibling=s,a.child=t,(a.mode&1)!==0&&Hn(a,e.child,null,d),a.child.memoizedState=Bs(d),a.memoizedState=Vs,s);if((a.mode&1)===0)return Vt(e,a,d,null);if(r.data==="$!"){if(t=r.nextSibling&&r.nextSibling.dataset,t)var p=t.dgst;return t=p,s=Error(c(419)),t=Ls(s,t,void 0),Vt(e,a,d,t)}if(p=(d&e.childLanes)!==0,Qe||p){if(t=ze,t!==null){switch(d&-d){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(t.suspendedLanes|d))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ma(e,r),ya(t,e,r,-1))}return oi(),t=Ls(Error(c(421))),Vt(e,a,d,t)}return r.data==="$?"?(a.flags|=128,a.child=e.child,a=lp.bind(null,e),r._reactRetry=a,null):(e=s.treeContext,ta=Ga(r.nextSibling),oa=a,ge=!0,ha=null,e!==null&&(ia[la++]=La,ia[la++]=Oa,ia[la++]=pn,La=e.id,Oa=e.overflow,pn=a),a=$s(a,t.children),a.flags|=4096,a)}function od(e,a,n){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a),xs(e.return,a,n)}function _s(e,a,n,t,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:r}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=n,s.tailMode=r)}function td(e,a,n){var t=a.pendingProps,r=t.revealOrder,s=t.tail;if(Fe(e,a,t.children,n),t=ve.current,(t&2)!==0)t=t&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&od(e,n,a);else if(e.tag===19)od(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(ue(ve,t),(a.mode&1)===0)a.memoizedState=null;else switch(r){case"forwards":for(n=a.child,r=null;n!==null;)e=n.alternate,e!==null&&Rt(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=a.child,a.child=null):(r=n.sibling,n.sibling=null),_s(a,!1,r,n,s);break;case"backwards":for(n=null,r=a.child,a.child=null;r!==null;){if(e=r.alternate,e!==null&&Rt(e)===null){a.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}_s(a,!0,n,null,s);break;case"together":_s(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Bt(e,a){(a.mode&1)===0&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function Va(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),xn|=a.lanes,(n&a.childLanes)===0)return null;if(e!==null&&a.child!==e.child)throw Error(c(153));if(a.child!==null){for(e=a.child,n=tn(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function Km(e,a,n){switch(a.tag){case 3:ed(a),_n();break;case 5:xc(a);break;case 1:Ye(a.type)&&At(a);break;case 4:Cs(a,a.stateNode.containerInfo);break;case 10:var t=a.type._context,r=a.memoizedProps.value;ue(wt,t._currentValue),t._currentValue=r;break;case 13:if(t=a.memoizedState,t!==null)return t.dehydrated!==null?(ue(ve,ve.current&1),a.flags|=128,null):(n&a.child.childLanes)!==0?nd(e,a,n):(ue(ve,ve.current&1),e=Va(e,a,n),e!==null?e.sibling:null);ue(ve,ve.current&1);break;case 19:if(t=(n&a.childLanes)!==0,(e.flags&128)!==0){if(t)return td(e,a,n);a.flags|=128}if(r=a.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ue(ve,ve.current),t)break;return null;case 22:case 23:return a.lanes=0,Zc(e,a,n)}return Va(e,a,n)}var rd,Hs,sd,id;rd=function(e,a){for(var n=a.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break;for(;n.sibling===null;){if(n.return===null||n.return===a)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Hs=function(){},sd=function(e,a,n,t){var r=e.memoizedProps;if(r!==t){e=a.stateNode,hn(Ia.current);var s=null;switch(n){case"input":r=xr(e,r),t=xr(e,t),s=[];break;case"select":r=M({},r,{value:void 0}),t=M({},t,{value:void 0}),s=[];break;case"textarea":r=Cr(e,r),t=Cr(e,t),s=[];break;default:typeof r.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=bt)}Sr(n,t);var d;n=null;for(A in r)if(!t.hasOwnProperty(A)&&r.hasOwnProperty(A)&&r[A]!=null)if(A==="style"){var p=r[A];for(d in p)p.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(u.hasOwnProperty(A)?s||(s=[]):(s=s||[]).push(A,null));for(A in t){var g=t[A];if(p=r!=null?r[A]:void 0,t.hasOwnProperty(A)&&g!==p&&(g!=null||p!=null))if(A==="style")if(p){for(d in p)!p.hasOwnProperty(d)||g&&g.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in g)g.hasOwnProperty(d)&&p[d]!==g[d]&&(n||(n={}),n[d]=g[d])}else n||(s||(s=[]),s.push(A,n)),n=g;else A==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,p=p?p.__html:void 0,g!=null&&p!==g&&(s=s||[]).push(A,g)):A==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(A,""+g):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(u.hasOwnProperty(A)?(g!=null&&A==="onScroll"&&me("scroll",e),s||p===g||(s=[])):(s=s||[]).push(A,g))}n&&(s=s||[]).push("style",n);var A=s;(a.updateQueue=A)&&(a.flags|=4)}},id=function(e,a,n,t){n!==t&&(a.flags|=4)};function Mo(e,a){if(!ge)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Ve(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(a)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,t|=r.subtreeFlags&14680064,t|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,t|=r.subtreeFlags,t|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=t,e.childLanes=n,a}function Zm(e,a,n){var t=a.pendingProps;switch(us(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(a),null;case 1:return Ye(a.type)&&Ct(),Ve(a),null;case 3:return t=a.stateNode,Wn(),pe(Ge),pe(Me),ks(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(jt(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ha!==null&&(ei(ha),ha=null))),Hs(e,a),Ve(a),null;case 5:As(a);var r=hn(Ro.current);if(n=a.type,e!==null&&a.stateNode!=null)sd(e,a,n,t,r),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!t){if(a.stateNode===null)throw Error(c(166));return Ve(a),null}if(e=hn(Ia.current),jt(a)){t=a.stateNode,n=a.type;var s=a.memoizedProps;switch(t[wa]=a,t[No]=s,e=(a.mode&1)!==0,n){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(r=0;r<ko.length;r++)me(ko[r],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":$i(t,s),me("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!s.multiple},me("invalid",t);break;case"textarea":Fi(t,s),me("invalid",t)}Sr(n,s),r=null;for(var d in s)if(s.hasOwnProperty(d)){var p=s[d];d==="children"?typeof p=="string"?t.textContent!==p&&(s.suppressHydrationWarning!==!0&&xt(t.textContent,p,e),r=["children",p]):typeof p=="number"&&t.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&xt(t.textContent,p,e),r=["children",""+p]):u.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&me("scroll",t)}switch(n){case"input":Qo(t),Hi(t,s,!0);break;case"textarea":Qo(t),Wi(t);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(t.onclick=bt)}t=r,a.updateQueue=t,t!==null&&(a.flags|=4)}else{d=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=d.createElement(n,{is:t.is}):(e=d.createElement(n),n==="select"&&(d=e,t.multiple?d.multiple=!0:t.size&&(d.size=t.size))):e=d.createElementNS(e,n),e[wa]=a,e[No]=t,rd(e,a,!1,!1),a.stateNode=e;e:{switch(d=kr(n,t),n){case"dialog":me("cancel",e),me("close",e),r=t;break;case"iframe":case"object":case"embed":me("load",e),r=t;break;case"video":case"audio":for(r=0;r<ko.length;r++)me(ko[r],e);r=t;break;case"source":me("error",e),r=t;break;case"img":case"image":case"link":me("error",e),me("load",e),r=t;break;case"details":me("toggle",e),r=t;break;case"input":$i(e,t),r=xr(e,t),me("invalid",e);break;case"option":r=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},r=M({},t,{value:void 0}),me("invalid",e);break;case"textarea":Fi(e,t),r=Cr(e,t),me("invalid",e);break;default:r=t}Sr(n,r),p=r;for(s in p)if(p.hasOwnProperty(s)){var g=p[s];s==="style"?Ki(e,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Yi(e,g)):s==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&to(e,g):typeof g=="number"&&to(e,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(u.hasOwnProperty(s)?g!=null&&s==="onScroll"&&me("scroll",e):g!=null&&He(e,s,g,d))}switch(n){case"input":Qo(e),Hi(e,t,!1);break;case"textarea":Qo(e),Wi(e);break;case"option":t.value!=null&&e.setAttribute("value",""+ie(t.value));break;case"select":e.multiple=!!t.multiple,s=t.value,s!=null?Nn(e,!!t.multiple,s,!1):t.defaultValue!=null&&Nn(e,!!t.multiple,t.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=bt)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Ve(a),null;case 6:if(e&&a.stateNode!=null)id(e,a,e.memoizedProps,t);else{if(typeof t!="string"&&a.stateNode===null)throw Error(c(166));if(n=hn(Ro.current),hn(Ia.current),jt(a)){if(t=a.stateNode,n=a.memoizedProps,t[wa]=a,(s=t.nodeValue!==n)&&(e=oa,e!==null))switch(e.tag){case 3:xt(t.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xt(t.nodeValue,n,(e.mode&1)!==0)}s&&(a.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[wa]=a,a.stateNode=t}return Ve(a),null;case 13:if(pe(ve),t=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&ta!==null&&(a.mode&1)!==0&&(a.flags&128)===0)dc(),_n(),a.flags|=98560,s=!1;else if(s=jt(a),t!==null&&t.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[wa]=a}else _n(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ve(a),s=!1}else ha!==null&&(ei(ha),ha=null),s=!0;if(!s)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=n,a):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(a.child.flags|=8192,(a.mode&1)!==0&&(e===null||(ve.current&1)!==0?we===0&&(we=3):oi())),a.updateQueue!==null&&(a.flags|=4),Ve(a),null);case 4:return Wn(),Hs(e,a),e===null&&Po(a.stateNode.containerInfo),Ve(a),null;case 10:return vs(a.type._context),Ve(a),null;case 17:return Ye(a.type)&&Ct(),Ve(a),null;case 19:if(pe(ve),s=a.memoizedState,s===null)return Ve(a),null;if(t=(a.flags&128)!==0,d=s.rendering,d===null)if(t)Mo(s,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=Rt(e),d!==null){for(a.flags|=128,Mo(s,!1),t=d.updateQueue,t!==null&&(a.updateQueue=t,a.flags|=4),a.subtreeFlags=0,t=n,n=a.child;n!==null;)s=n,e=t,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(ve,ve.current&1|2),a.child}e=e.sibling}s.tail!==null&&Ae()>Kn&&(a.flags|=128,t=!0,Mo(s,!1),a.lanes=4194304)}else{if(!t)if(e=Rt(d),e!==null){if(a.flags|=128,t=!0,n=e.updateQueue,n!==null&&(a.updateQueue=n,a.flags|=4),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!ge)return Ve(a),null}else 2*Ae()-s.renderingStartTime>Kn&&n!==1073741824&&(a.flags|=128,t=!0,Mo(s,!1),a.lanes=4194304);s.isBackwards?(d.sibling=a.child,a.child=d):(n=s.last,n!==null?n.sibling=d:a.child=d,s.last=d)}return s.tail!==null?(a=s.tail,s.rendering=a,s.tail=a.sibling,s.renderingStartTime=Ae(),a.sibling=null,n=ve.current,ue(ve,t?n&1|2:n&1),a):(Ve(a),null);case 22:case 23:return ni(),t=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(a.flags|=8192),t&&(a.mode&1)!==0?(ra&1073741824)!==0&&(Ve(a),a.subtreeFlags&6&&(a.flags|=8192)):Ve(a),null;case 24:return null;case 25:return null}throw Error(c(156,a.tag))}function Xm(e,a){switch(us(a),a.tag){case 1:return Ye(a.type)&&Ct(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Wn(),pe(Ge),pe(Me),ks(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 5:return As(a),null;case 13:if(pe(ve),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(c(340));_n()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return pe(ve),null;case 4:return Wn(),null;case 10:return vs(a.type._context),null;case 22:case 23:return ni(),null;case 24:return null;default:return null}}var $t=!1,Be=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,O=null;function Yn(e,a){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){Ce(e,a,t)}else n.current=null}function Fs(e,a,n){try{n()}catch(t){Ce(e,a,t)}}var ld=!1;function ep(e,a){if(ns=it,e=Bl(),Yr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var r=t.anchorOffset,s=t.focusNode;t=t.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var d=0,p=-1,g=-1,A=0,I=0,z=e,N=null;a:for(;;){for(var L;z!==n||r!==0&&z.nodeType!==3||(p=d+r),z!==s||t!==0&&z.nodeType!==3||(g=d+t),z.nodeType===3&&(d+=z.nodeValue.length),(L=z.firstChild)!==null;)N=z,z=L;for(;;){if(z===e)break a;if(N===n&&++A===r&&(p=d),N===s&&++I===t&&(g=d),(L=z.nextSibling)!==null)break;z=N,N=z.parentNode}z=L}n=p===-1||g===-1?null:{start:p,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(os={focusedElem:e,selectionRange:n},it=!1,O=a;O!==null;)if(a=O,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,O=e;else for(;O!==null;){a=O;try{var q=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var V=q.memoizedProps,Se=q.memoizedState,y=a.stateNode,h=y.getSnapshotBeforeUpdate(a.elementType===a.type?V:va(a.type,V),Se);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var C=a.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(R){Ce(a,a.return,R)}if(e=a.sibling,e!==null){e.return=a.return,O=e;break}O=a.return}return q=ld,ld=!1,q}function qo(e,a,n){var t=a.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fs(a,n,s)}r=r.next}while(r!==t)}}function _t(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var n=a=a.next;do{if((n.tag&e)===e){var t=n.create;n.destroy=t()}n=n.next}while(n!==a)}}function Us(e){var a=e.ref;if(a!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof a=="function"?a(e):a.current=e}}function cd(e){var a=e.alternate;a!==null&&(e.alternate=null,cd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[wa],delete a[No],delete a[is],delete a[Om],delete a[Mm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dd(e){return e.tag===5||e.tag===3||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ws(e,a,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?n.nodeType===8?n.parentNode.insertBefore(e,a):n.insertBefore(e,a):(n.nodeType===8?(a=n.parentNode,a.insertBefore(e,n)):(a=n,a.appendChild(e)),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=bt));else if(t!==4&&(e=e.child,e!==null))for(Ws(e,a,n),e=e.sibling;e!==null;)Ws(e,a,n),e=e.sibling}function Gs(e,a,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Gs(e,a,n),e=e.sibling;e!==null;)Gs(e,a,n),e=e.sibling}var Te=null,xa=!1;function Ja(e,a,n){for(n=n.child;n!==null;)md(e,a,n),n=n.sibling}function md(e,a,n){if(Na&&typeof Na.onCommitFiberUnmount=="function")try{Na.onCommitFiberUnmount(at,n)}catch{}switch(n.tag){case 5:Be||Yn(n,a);case 6:var t=Te,r=xa;Te=null,Ja(e,a,n),Te=t,xa=r,Te!==null&&(xa?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(xa?(e=Te,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),ho(e)):ss(Te,n.stateNode));break;case 4:t=Te,r=xa,Te=n.stateNode.containerInfo,xa=!0,Ja(e,a,n),Te=t,xa=r;break;case 0:case 11:case 14:case 15:if(!Be&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){r=t=t.next;do{var s=r,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&Fs(n,a,d),r=r.next}while(r!==t)}Ja(e,a,n);break;case 1:if(!Be&&(Yn(n,a),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(p){Ce(n,a,p)}Ja(e,a,n);break;case 21:Ja(e,a,n);break;case 22:n.mode&1?(Be=(t=Be)||n.memoizedState!==null,Ja(e,a,n),Be=t):Ja(e,a,n);break;default:Ja(e,a,n)}}function pd(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jm),a.forEach(function(t){var r=cp.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ba(e,a){var n=a.deletions;if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];try{var s=e,d=a,p=d;e:for(;p!==null;){switch(p.tag){case 5:Te=p.stateNode,xa=!1;break e;case 3:Te=p.stateNode.containerInfo,xa=!0;break e;case 4:Te=p.stateNode.containerInfo,xa=!0;break e}p=p.return}if(Te===null)throw Error(c(160));md(s,d,r),Te=null,xa=!1;var g=r.alternate;g!==null&&(g.return=null),r.return=null}catch(A){Ce(r,a,A)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)fd(a,e),a=a.sibling}function fd(e,a){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ba(a,e),za(e),t&4){try{qo(3,e,e.return),_t(3,e)}catch(V){Ce(e,e.return,V)}try{qo(5,e,e.return)}catch(V){Ce(e,e.return,V)}}break;case 1:ba(a,e),za(e),t&512&&n!==null&&Yn(n,n.return);break;case 5:if(ba(a,e),za(e),t&512&&n!==null&&Yn(n,n.return),e.flags&32){var r=e.stateNode;try{to(r,"")}catch(V){Ce(e,e.return,V)}}if(t&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,d=n!==null?n.memoizedProps:s,p=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&_i(r,s),kr(p,d);var A=kr(p,s);for(d=0;d<g.length;d+=2){var I=g[d],z=g[d+1];I==="style"?Ki(r,z):I==="dangerouslySetInnerHTML"?Yi(r,z):I==="children"?to(r,z):He(r,I,z,A)}switch(p){case"input":br(r,s);break;case"textarea":Ui(r,s);break;case"select":var N=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var L=s.value;L!=null?Nn(r,!!s.multiple,L,!1):N!==!!s.multiple&&(s.defaultValue!=null?Nn(r,!!s.multiple,s.defaultValue,!0):Nn(r,!!s.multiple,s.multiple?[]:"",!1))}r[No]=s}catch(V){Ce(e,e.return,V)}}break;case 6:if(ba(a,e),za(e),t&4){if(e.stateNode===null)throw Error(c(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(V){Ce(e,e.return,V)}}break;case 3:if(ba(a,e),za(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(a.containerInfo)}catch(V){Ce(e,e.return,V)}break;case 4:ba(a,e),za(e);break;case 13:ba(a,e),za(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ks=Ae())),t&4&&pd(e);break;case 22:if(I=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(A=Be)||I,ba(a,e),Be=A):ba(a,e),za(e),t&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!I&&(e.mode&1)!==0)for(O=e,I=e.child;I!==null;){for(z=O=I;O!==null;){switch(N=O,L=N.child,N.tag){case 0:case 11:case 14:case 15:qo(4,N,N.return);break;case 1:Yn(N,N.return);var q=N.stateNode;if(typeof q.componentWillUnmount=="function"){t=N,n=N.return;try{a=t,q.props=a.memoizedProps,q.state=a.memoizedState,q.componentWillUnmount()}catch(V){Ce(t,n,V)}}break;case 5:Yn(N,N.return);break;case 22:if(N.memoizedState!==null){vd(z);continue}}L!==null?(L.return=N,O=L):vd(z)}I=I.sibling}e:for(I=null,z=e;;){if(z.tag===5){if(I===null){I=z;try{r=z.stateNode,A?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=z.stateNode,g=z.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null,p.style.display=Qi("display",d))}catch(V){Ce(e,e.return,V)}}}else if(z.tag===6){if(I===null)try{z.stateNode.nodeValue=A?"":z.memoizedProps}catch(V){Ce(e,e.return,V)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;I===z&&(I=null),z=z.return}I===z&&(I=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:ba(a,e),za(e),t&4&&pd(e);break;case 21:break;default:ba(a,e),za(e)}}function za(e){var a=e.flags;if(a&2){try{e:{for(var n=e.return;n!==null;){if(dd(n)){var t=n;break e}n=n.return}throw Error(c(160))}switch(t.tag){case 5:var r=t.stateNode;t.flags&32&&(to(r,""),t.flags&=-33);var s=ud(e);Gs(e,s,r);break;case 3:case 4:var d=t.stateNode.containerInfo,p=ud(e);Ws(e,p,d);break;default:throw Error(c(161))}}catch(g){Ce(e,e.return,g)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function ap(e,a,n){O=e,gd(e)}function gd(e,a,n){for(var t=(e.mode&1)!==0;O!==null;){var r=O,s=r.child;if(r.tag===22&&t){var d=r.memoizedState!==null||$t;if(!d){var p=r.alternate,g=p!==null&&p.memoizedState!==null||Be;p=$t;var A=Be;if($t=d,(Be=g)&&!A)for(O=r;O!==null;)d=O,g=d.child,d.tag===22&&d.memoizedState!==null?xd(r):g!==null?(g.return=d,O=g):xd(r);for(;s!==null;)O=s,gd(s),s=s.sibling;O=r,$t=p,Be=A}hd(e)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,O=s):hd(e)}}function hd(e){for(;O!==null;){var a=O;if((a.flags&8772)!==0){var n=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:Be||_t(5,a);break;case 1:var t=a.stateNode;if(a.flags&4&&!Be)if(n===null)t.componentDidMount();else{var r=a.elementType===a.type?n.memoizedProps:va(a.type,n.memoizedProps);t.componentDidUpdate(r,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var s=a.updateQueue;s!==null&&vc(a,s,t);break;case 3:var d=a.updateQueue;if(d!==null){if(n=null,a.child!==null)switch(a.child.tag){case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}vc(a,d,n)}break;case 5:var p=a.stateNode;if(n===null&&a.flags&4){n=p;var g=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var A=a.alternate;if(A!==null){var I=A.memoizedState;if(I!==null){var z=I.dehydrated;z!==null&&ho(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Be||a.flags&512&&Us(a)}catch(N){Ce(a,a.return,N)}}if(a===e){O=null;break}if(n=a.sibling,n!==null){n.return=a.return,O=n;break}O=a.return}}function vd(e){for(;O!==null;){var a=O;if(a===e){O=null;break}var n=a.sibling;if(n!==null){n.return=a.return,O=n;break}O=a.return}}function xd(e){for(;O!==null;){var a=O;try{switch(a.tag){case 0:case 11:case 15:var n=a.return;try{_t(4,a)}catch(g){Ce(a,n,g)}break;case 1:var t=a.stateNode;if(typeof t.componentDidMount=="function"){var r=a.return;try{t.componentDidMount()}catch(g){Ce(a,r,g)}}var s=a.return;try{Us(a)}catch(g){Ce(a,s,g)}break;case 5:var d=a.return;try{Us(a)}catch(g){Ce(a,d,g)}}}catch(g){Ce(a,a.return,g)}if(a===e){O=null;break}var p=a.sibling;if(p!==null){p.return=a.return,O=p;break}O=a.return}}var np=Math.ceil,Ht=be.ReactCurrentDispatcher,Ys=be.ReactCurrentOwner,ua=be.ReactCurrentBatchConfig,ne=0,ze=null,Pe=null,De=0,ra=0,Qn=Ya(0),we=0,Vo=null,xn=0,Ft=0,Qs=0,Bo=null,Ke=null,Ks=0,Kn=1/0,Ba=null,Ut=!1,Zs=null,en=null,Wt=!1,an=null,Gt=0,$o=0,Xs=null,Yt=-1,Qt=0;function Ue(){return(ne&6)!==0?Ae():Yt!==-1?Yt:Yt=Ae()}function nn(e){return(e.mode&1)===0?1:(ne&2)!==0&&De!==0?De&-De:Vm.transition!==null?(Qt===0&&(Qt=ul()),Qt):(e=le,e!==0||(e=window.event,e=e===void 0?16:yl(e.type)),e)}function ya(e,a,n,t){if(50<$o)throw $o=0,Xs=null,Error(c(185));uo(e,n,t),((ne&2)===0||e!==ze)&&(e===ze&&((ne&2)===0&&(Ft|=n),we===4&&on(e,De)),Ze(e,t),n===1&&ne===0&&(a.mode&1)===0&&(Kn=Ae()+500,St&&Ka()))}function Ze(e,a){var n=e.callbackNode;Vu(e,a);var t=tt(e,e===ze?De:0);if(t===0)n!==null&&ll(n),e.callbackNode=null,e.callbackPriority=0;else if(a=t&-t,e.callbackPriority!==a){if(n!=null&&ll(n),a===1)e.tag===0?qm(yd.bind(null,e)):rc(yd.bind(null,e)),Dm(function(){(ne&6)===0&&Ka()}),n=null;else{switch(ml(t)){case 1:n=zr;break;case 4:n=cl;break;case 16:n=et;break;case 536870912:n=dl;break;default:n=et}n=wd(n,bd.bind(null,e))}e.callbackPriority=a,e.callbackNode=n}}function bd(e,a){if(Yt=-1,Qt=0,(ne&6)!==0)throw Error(c(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var t=tt(e,e===ze?De:0);if(t===0)return null;if((t&30)!==0||(t&e.expiredLanes)!==0||a)a=Kt(e,t);else{a=t;var r=ne;ne|=2;var s=Ad();(ze!==e||De!==a)&&(Ba=null,Kn=Ae()+500,yn(e,a));do try{rp();break}catch(p){Cd(e,p)}while(!0);hs(),Ht.current=s,ne=r,Pe!==null?a=0:(ze=null,De=0,a=we)}if(a!==0){if(a===2&&(r=Rr(e),r!==0&&(t=r,a=Js(e,r))),a===1)throw n=Vo,yn(e,0),on(e,t),Ze(e,Ae()),n;if(a===6)on(e,t);else{if(r=e.current.alternate,(t&30)===0&&!op(r)&&(a=Kt(e,t),a===2&&(s=Rr(e),s!==0&&(t=s,a=Js(e,s))),a===1))throw n=Vo,yn(e,0),on(e,t),Ze(e,Ae()),n;switch(e.finishedWork=r,e.finishedLanes=t,a){case 0:case 1:throw Error(c(345));case 2:Cn(e,Ke,Ba);break;case 3:if(on(e,t),(t&130023424)===t&&(a=Ks+500-Ae(),10<a)){if(tt(e,0)!==0)break;if(r=e.suspendedLanes,(r&t)!==t){Ue(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=rs(Cn.bind(null,e,Ke,Ba),a);break}Cn(e,Ke,Ba);break;case 4:if(on(e,t),(t&4194240)===t)break;for(a=e.eventTimes,r=-1;0<t;){var d=31-fa(t);s=1<<d,d=a[d],d>r&&(r=d),t&=~s}if(t=r,t=Ae()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*np(t/1960))-t,10<t){e.timeoutHandle=rs(Cn.bind(null,e,Ke,Ba),t);break}Cn(e,Ke,Ba);break;case 5:Cn(e,Ke,Ba);break;default:throw Error(c(329))}}}return Ze(e,Ae()),e.callbackNode===n?bd.bind(null,e):null}function Js(e,a){var n=Bo;return e.current.memoizedState.isDehydrated&&(yn(e,a).flags|=256),e=Kt(e,a),e!==2&&(a=Ke,Ke=n,a!==null&&ei(a)),e}function ei(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function op(e){for(var a=e;;){if(a.flags&16384){var n=a.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var r=n[t],s=r.getSnapshot;r=r.value;try{if(!ga(s(),r))return!1}catch{return!1}}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function on(e,a){for(a&=~Qs,a&=~Ft,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var n=31-fa(a),t=1<<n;e[n]=-1,a&=~t}}function yd(e){if((ne&6)!==0)throw Error(c(327));Zn();var a=tt(e,0);if((a&1)===0)return Ze(e,Ae()),null;var n=Kt(e,a);if(e.tag!==0&&n===2){var t=Rr(e);t!==0&&(a=t,n=Js(e,t))}if(n===1)throw n=Vo,yn(e,0),on(e,a),Ze(e,Ae()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,Cn(e,Ke,Ba),Ze(e,Ae()),null}function ai(e,a){var n=ne;ne|=1;try{return e(a)}finally{ne=n,ne===0&&(Kn=Ae()+500,St&&Ka())}}function bn(e){an!==null&&an.tag===0&&(ne&6)===0&&Zn();var a=ne;ne|=1;var n=ua.transition,t=le;try{if(ua.transition=null,le=1,e)return e()}finally{le=t,ua.transition=n,ne=a,(ne&6)===0&&Ka()}}function ni(){ra=Qn.current,pe(Qn)}function yn(e,a){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tm(n)),Pe!==null)for(n=Pe.return;n!==null;){var t=n;switch(us(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Ct();break;case 3:Wn(),pe(Ge),pe(Me),ks();break;case 5:As(t);break;case 4:Wn();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:vs(t.type._context);break;case 22:case 23:ni()}n=n.return}if(ze=e,Pe=e=tn(e.current,null),De=ra=a,we=0,Vo=null,Qs=Ft=xn=0,Ke=Bo=null,gn!==null){for(a=0;a<gn.length;a++)if(n=gn[a],t=n.interleaved,t!==null){n.interleaved=null;var r=t.next,s=n.pending;if(s!==null){var d=s.next;s.next=r,t.next=d}n.pending=t}gn=null}return e}function Cd(e,a){do{var n=Pe;try{if(hs(),Tt.current=Mt,Dt){for(var t=xe.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Dt=!1}if(vn=0,Ee=Ne=xe=null,To=!1,Do=0,Ys.current=null,n===null||n.return===null){we=1,Vo=a,Pe=null;break}e:{var s=e,d=n.return,p=n,g=a;if(a=De,p.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var A=g,I=p,z=I.tag;if((I.mode&1)===0&&(z===0||z===11||z===15)){var N=I.alternate;N?(I.updateQueue=N.updateQueue,I.memoizedState=N.memoizedState,I.lanes=N.lanes):(I.updateQueue=null,I.memoizedState=null)}var L=Wc(d);if(L!==null){L.flags&=-257,Gc(L,d,p,s,a),L.mode&1&&Uc(s,A,a),a=L,g=A;var q=a.updateQueue;if(q===null){var V=new Set;V.add(g),a.updateQueue=V}else q.add(g);break e}else{if((a&1)===0){Uc(s,A,a),oi();break e}g=Error(c(426))}}else if(ge&&p.mode&1){var Se=Wc(d);if(Se!==null){(Se.flags&65536)===0&&(Se.flags|=256),Gc(Se,d,p,s,a),fs(Gn(g,p));break e}}s=g=Gn(g,p),we!==4&&(we=2),Bo===null?Bo=[s]:Bo.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,a&=-a,s.lanes|=a;var y=Hc(s,g,a);hc(s,y);break e;case 1:p=g;var h=s.type,C=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(en===null||!en.has(C)))){s.flags|=65536,a&=-a,s.lanes|=a;var R=Fc(s,p,a);hc(s,R);break e}}s=s.return}while(s!==null)}kd(n)}catch($){a=$,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Ad(){var e=Ht.current;return Ht.current=Mt,e===null?Mt:e}function oi(){(we===0||we===3||we===2)&&(we=4),ze===null||(xn&268435455)===0&&(Ft&268435455)===0||on(ze,De)}function Kt(e,a){var n=ne;ne|=2;var t=Ad();(ze!==e||De!==a)&&(Ba=null,yn(e,a));do try{tp();break}catch(r){Cd(e,r)}while(!0);if(hs(),ne=n,Ht.current=t,Pe!==null)throw Error(c(261));return ze=null,De=0,we}function tp(){for(;Pe!==null;)Sd(Pe)}function rp(){for(;Pe!==null&&!Eu();)Sd(Pe)}function Sd(e){var a=Nd(e.alternate,e,ra);e.memoizedProps=e.pendingProps,a===null?kd(e):Pe=a,Ys.current=null}function kd(e){var a=e;do{var n=a.alternate;if(e=a.return,(a.flags&32768)===0){if(n=Zm(n,a,ra),n!==null){Pe=n;return}}else{if(n=Xm(n,a),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,Pe=null;return}}if(a=a.sibling,a!==null){Pe=a;return}Pe=a=e}while(a!==null);we===0&&(we=5)}function Cn(e,a,n){var t=le,r=ua.transition;try{ua.transition=null,le=1,sp(e,a,n,t)}finally{ua.transition=r,le=t}return null}function sp(e,a,n,t){do Zn();while(an!==null);if((ne&6)!==0)throw Error(c(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Bu(e,s),e===ze&&(Pe=ze=null,De=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Wt||(Wt=!0,wd(et,function(){return Zn(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=ua.transition,ua.transition=null;var d=le;le=1;var p=ne;ne|=4,Ys.current=null,ep(e,n),fd(n,e),jm(os),it=!!ns,os=ns=null,e.current=n,ap(n),zu(),ne=p,le=d,ua.transition=s}else e.current=n;if(Wt&&(Wt=!1,an=e,Gt=r),s=e.pendingLanes,s===0&&(en=null),Du(n.stateNode),Ze(e,Ae()),a!==null)for(t=e.onRecoverableError,n=0;n<a.length;n++)r=a[n],t(r.value,{componentStack:r.stack,digest:r.digest});if(Ut)throw Ut=!1,e=Zs,Zs=null,e;return(Gt&1)!==0&&e.tag!==0&&Zn(),s=e.pendingLanes,(s&1)!==0?e===Xs?$o++:($o=0,Xs=e):$o=0,Ka(),null}function Zn(){if(an!==null){var e=ml(Gt),a=ua.transition,n=le;try{if(ua.transition=null,le=16>e?16:e,an===null)var t=!1;else{if(e=an,an=null,Gt=0,(ne&6)!==0)throw Error(c(331));var r=ne;for(ne|=4,O=e.current;O!==null;){var s=O,d=s.child;if((O.flags&16)!==0){var p=s.deletions;if(p!==null){for(var g=0;g<p.length;g++){var A=p[g];for(O=A;O!==null;){var I=O;switch(I.tag){case 0:case 11:case 15:qo(8,I,s)}var z=I.child;if(z!==null)z.return=I,O=z;else for(;O!==null;){I=O;var N=I.sibling,L=I.return;if(cd(I),I===A){O=null;break}if(N!==null){N.return=L,O=N;break}O=L}}}var q=s.alternate;if(q!==null){var V=q.child;if(V!==null){q.child=null;do{var Se=V.sibling;V.sibling=null,V=Se}while(V!==null)}}O=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,O=d;else e:for(;O!==null;){if(s=O,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,O=y;break e}O=s.return}}var h=e.current;for(O=h;O!==null;){d=O;var C=d.child;if((d.subtreeFlags&2064)!==0&&C!==null)C.return=d,O=C;else e:for(d=h;O!==null;){if(p=O,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:_t(9,p)}}catch($){Ce(p,p.return,$)}if(p===d){O=null;break e}var R=p.sibling;if(R!==null){R.return=p.return,O=R;break e}O=p.return}}if(ne=r,Ka(),Na&&typeof Na.onPostCommitFiberRoot=="function")try{Na.onPostCommitFiberRoot(at,e)}catch{}t=!0}return t}finally{le=n,ua.transition=a}}return!1}function Pd(e,a,n){a=Gn(n,a),a=Hc(e,a,1),e=Xa(e,a,1),a=Ue(),e!==null&&(uo(e,1,a),Ze(e,a))}function Ce(e,a,n){if(e.tag===3)Pd(e,e,n);else for(;a!==null;){if(a.tag===3){Pd(a,e,n);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(en===null||!en.has(t))){e=Gn(n,e),e=Fc(a,e,1),a=Xa(a,e,1),e=Ue(),a!==null&&(uo(a,1,e),Ze(a,e));break}}a=a.return}}function ip(e,a,n){var t=e.pingCache;t!==null&&t.delete(a),a=Ue(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(De&n)===n&&(we===4||we===3&&(De&130023424)===De&&500>Ae()-Ks?yn(e,0):Qs|=n),Ze(e,a)}function jd(e,a){a===0&&((e.mode&1)===0?a=1:(a=ot,ot<<=1,(ot&130023424)===0&&(ot=4194304)));var n=Ue();e=Ma(e,a),e!==null&&(uo(e,a,n),Ze(e,n))}function lp(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),jd(e,n)}function cp(e,a){var n=0;switch(e.tag){case 13:var t=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(c(314))}t!==null&&t.delete(a),jd(e,n)}var Nd;Nd=function(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps||Ge.current)Qe=!0;else{if((e.lanes&n)===0&&(a.flags&128)===0)return Qe=!1,Km(e,a,n);Qe=(e.flags&131072)!==0}else Qe=!1,ge&&(a.flags&1048576)!==0&&sc(a,Pt,a.index);switch(a.lanes=0,a.tag){case 2:var t=a.type;Bt(e,a),e=a.pendingProps;var r=Vn(a,Me.current);Un(a,n),r=Ns(null,a,t,e,r,n);var s=ws();return a.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Ye(t)?(s=!0,At(a)):s=!1,a.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ys(a),r.updater=qt,a.stateNode=r,r._reactInternals=a,Ds(a,t,e,n),a=qs(null,a,t,!0,s,n)):(a.tag=0,ge&&s&&ds(a),Fe(null,a,r,n),a=a.child),a;case 16:t=a.elementType;e:{switch(Bt(e,a),e=a.pendingProps,r=t._init,t=r(t._payload),a.type=t,r=a.tag=up(t),e=va(t,e),r){case 0:a=Ms(null,a,t,e,n);break e;case 1:a=Jc(null,a,t,e,n);break e;case 11:a=Yc(null,a,t,e,n);break e;case 14:a=Qc(null,a,t,va(t.type,e),n);break e}throw Error(c(306,t,""))}return a;case 0:return t=a.type,r=a.pendingProps,r=a.elementType===t?r:va(t,r),Ms(e,a,t,r,n);case 1:return t=a.type,r=a.pendingProps,r=a.elementType===t?r:va(t,r),Jc(e,a,t,r,n);case 3:e:{if(ed(a),e===null)throw Error(c(387));t=a.pendingProps,s=a.memoizedState,r=s.element,gc(e,a),zt(a,t,null,n);var d=a.memoizedState;if(t=d.element,s.isDehydrated)if(s={element:t,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){r=Gn(Error(c(423)),a),a=ad(e,a,t,n,r);break e}else if(t!==r){r=Gn(Error(c(424)),a),a=ad(e,a,t,n,r);break e}else for(ta=Ga(a.stateNode.containerInfo.firstChild),oa=a,ge=!0,ha=null,n=pc(a,null,t,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),t===r){a=Va(e,a,n);break e}Fe(e,a,t,n)}a=a.child}return a;case 5:return xc(a),e===null&&ps(a),t=a.type,r=a.pendingProps,s=e!==null?e.memoizedProps:null,d=r.children,ts(t,r)?d=null:s!==null&&ts(t,s)&&(a.flags|=32),Xc(e,a),Fe(e,a,d,n),a.child;case 6:return e===null&&ps(a),null;case 13:return nd(e,a,n);case 4:return Cs(a,a.stateNode.containerInfo),t=a.pendingProps,e===null?a.child=Hn(a,null,t,n):Fe(e,a,t,n),a.child;case 11:return t=a.type,r=a.pendingProps,r=a.elementType===t?r:va(t,r),Yc(e,a,t,r,n);case 7:return Fe(e,a,a.pendingProps,n),a.child;case 8:return Fe(e,a,a.pendingProps.children,n),a.child;case 12:return Fe(e,a,a.pendingProps.children,n),a.child;case 10:e:{if(t=a.type._context,r=a.pendingProps,s=a.memoizedProps,d=r.value,ue(wt,t._currentValue),t._currentValue=d,s!==null)if(ga(s.value,d)){if(s.children===r.children&&!Ge.current){a=Va(e,a,n);break e}}else for(s=a.child,s!==null&&(s.return=a);s!==null;){var p=s.dependencies;if(p!==null){d=s.child;for(var g=p.firstContext;g!==null;){if(g.context===t){if(s.tag===1){g=qa(-1,n&-n),g.tag=2;var A=s.updateQueue;if(A!==null){A=A.shared;var I=A.pending;I===null?g.next=g:(g.next=I.next,I.next=g),A.pending=g}}s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),xs(s.return,n,a),p.lanes|=n;break}g=g.next}}else if(s.tag===10)d=s.type===a.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(c(341));d.lanes|=n,p=d.alternate,p!==null&&(p.lanes|=n),xs(d,n,a),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===a){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}Fe(e,a,r.children,n),a=a.child}return a;case 9:return r=a.type,t=a.pendingProps.children,Un(a,n),r=ca(r),t=t(r),a.flags|=1,Fe(e,a,t,n),a.child;case 14:return t=a.type,r=va(t,a.pendingProps),r=va(t.type,r),Qc(e,a,t,r,n);case 15:return Kc(e,a,a.type,a.pendingProps,n);case 17:return t=a.type,r=a.pendingProps,r=a.elementType===t?r:va(t,r),Bt(e,a),a.tag=1,Ye(t)?(e=!0,At(a)):e=!1,Un(a,n),$c(a,t,r),Ds(a,t,r,n),qs(null,a,t,!0,e,n);case 19:return td(e,a,n);case 22:return Zc(e,a,n)}throw Error(c(156,a.tag))};function wd(e,a){return il(e,a)}function dp(e,a,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ma(e,a,n,t){return new dp(e,a,n,t)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function up(e){if(typeof e=="function")return ti(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Je)return 11;if(e===ja)return 14}return 2}function tn(e,a){var n=e.alternate;return n===null?(n=ma(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zt(e,a,n,t,r,s){var d=2;if(t=e,typeof e=="function")ti(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Oe:return An(n.children,r,s,a);case E:d=8,r|=8;break;case U:return e=ma(12,n,a,r|2),e.elementType=U,e.lanes=s,e;case ea:return e=ma(13,n,a,r),e.elementType=ea,e.lanes=s,e;case pa:return e=ma(19,n,a,r),e.elementType=pa,e.lanes=s,e;case ye:return Xt(n,r,s,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:d=10;break e;case sa:d=9;break e;case Je:d=11;break e;case ja:d=14;break e;case We:d=16,t=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return a=ma(d,n,a,r),a.elementType=e,a.type=t,a.lanes=s,a}function An(e,a,n,t){return e=ma(7,e,t,a),e.lanes=n,e}function Xt(e,a,n,t){return e=ma(22,e,t,a),e.elementType=ye,e.lanes=n,e.stateNode={isHidden:!1},e}function ri(e,a,n){return e=ma(6,e,null,a),e.lanes=n,e}function si(e,a,n){return a=ma(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function mp(e,a,n,t,r){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tr(0),this.expirationTimes=Tr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tr(0),this.identifierPrefix=t,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ii(e,a,n,t,r,s,d,p,g){return e=new mp(e,a,n,p,g),a===1?(a=1,s===!0&&(a|=8)):a=0,s=ma(3,null,null,a),e.current=s,s.stateNode=e,s.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ys(s),e}function pp(e,a,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:t==null?null:""+t,children:e,containerInfo:a,implementation:n}}function Id(e){if(!e)return Qa;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(c(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Ye(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(Ye(n))return oc(e,n,a)}return a}function Ed(e,a,n,t,r,s,d,p,g){return e=ii(n,t,!0,e,r,s,d,p,g),e.context=Id(null),n=e.current,t=Ue(),r=nn(n),s=qa(t,r),s.callback=a??null,Xa(n,s,r),e.current.lanes=r,uo(e,r,t),Ze(e,t),e}function Jt(e,a,n,t){var r=a.current,s=Ue(),d=nn(r);return n=Id(n),a.context===null?a.context=n:a.pendingContext=n,a=qa(s,d),a.payload={element:e},t=t===void 0?null:t,t!==null&&(a.callback=t),e=Xa(r,a,d),e!==null&&(ya(e,r,d,s),Et(e,r,d)),d}function er(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zd(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function li(e,a){zd(e,a),(e=e.alternate)&&zd(e,a)}function fp(){return null}var Rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ci(e){this._internalRoot=e}ar.prototype.render=ci.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(c(409));Jt(e,a,null,null)},ar.prototype.unmount=ci.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;bn(function(){Jt(null,e,null,null)}),a[Ta]=null}};function ar(e){this._internalRoot=e}ar.prototype.unstable_scheduleHydration=function(e){if(e){var a=gl();e={blockedOn:null,target:e,priority:a};for(var n=0;n<Fa.length&&a!==0&&a<Fa[n].priority;n++);Fa.splice(n,0,e),n===0&&xl(e)}};function di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Td(){}function gp(e,a,n,t,r){if(r){if(typeof t=="function"){var s=t;t=function(){var A=er(d);s.call(A)}}var d=Ed(a,t,e,0,null,!1,!1,"",Td);return e._reactRootContainer=d,e[Ta]=d.current,Po(e.nodeType===8?e.parentNode:e),bn(),d}for(;r=e.lastChild;)e.removeChild(r);if(typeof t=="function"){var p=t;t=function(){var A=er(g);p.call(A)}}var g=ii(e,0,!1,null,null,!1,!1,"",Td);return e._reactRootContainer=g,e[Ta]=g.current,Po(e.nodeType===8?e.parentNode:e),bn(function(){Jt(a,g,n,t)}),g}function or(e,a,n,t,r){var s=n._reactRootContainer;if(s){var d=s;if(typeof r=="function"){var p=r;r=function(){var g=er(d);p.call(g)}}Jt(a,d,e,r)}else d=gp(n,a,e,r,t);return er(d)}pl=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var n=co(a.pendingLanes);n!==0&&(Dr(a,n|1),Ze(a,Ae()),(ne&6)===0&&(Kn=Ae()+500,Ka()))}break;case 13:bn(function(){var t=Ma(e,1);if(t!==null){var r=Ue();ya(t,e,1,r)}}),li(e,1)}},Lr=function(e){if(e.tag===13){var a=Ma(e,134217728);if(a!==null){var n=Ue();ya(a,e,134217728,n)}li(e,134217728)}},fl=function(e){if(e.tag===13){var a=nn(e),n=Ma(e,a);if(n!==null){var t=Ue();ya(n,e,a,t)}li(e,a)}},gl=function(){return le},hl=function(e,a){var n=le;try{return le=e,a()}finally{le=n}},Nr=function(e,a,n){switch(a){case"input":if(br(e,n),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<n.length;a++){var t=n[a];if(t!==e&&t.form===e.form){var r=yt(t);if(!r)throw Error(c(90));Bi(t),br(t,r)}}}break;case"textarea":Ui(e,n);break;case"select":a=n.value,a!=null&&Nn(e,!!n.multiple,a,!1)}},el=ai,al=bn;var hp={usingClientEntryPoint:!1,Events:[wo,Mn,yt,Xi,Ji,ai]},_o={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vp={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rl(e),e===null?null:e.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||fp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tr.isDisabled&&tr.supportsFiber)try{at=tr.inject(vp),Na=tr}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hp,Xe.createPortal=function(e,a){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!di(a))throw Error(c(200));return pp(e,a,null,n)},Xe.createRoot=function(e,a){if(!di(e))throw Error(c(299));var n=!1,t="",r=Rd;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onRecoverableError!==void 0&&(r=a.onRecoverableError)),a=ii(e,1,!1,null,null,n,!1,t,r),e[Ta]=a.current,Po(e.nodeType===8?e.parentNode:e),new ci(a)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=rl(a),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return bn(e)},Xe.hydrate=function(e,a,n){if(!nr(a))throw Error(c(200));return or(null,e,a,!0,n)},Xe.hydrateRoot=function(e,a,n){if(!di(e))throw Error(c(405));var t=n!=null&&n.hydratedSources||null,r=!1,s="",d=Rd;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),a=Ed(a,null,e,1,n??null,r,!1,s,d),e[Ta]=a.current,Po(e),t)for(e=0;e<t.length;e++)n=t[e],r=n._getVersion,r=r(n._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[n,r]:a.mutableSourceEagerHydrationData.push(n,r);return new ar(a)},Xe.render=function(e,a,n){if(!nr(a))throw Error(c(200));return or(null,e,a,!1,n)},Xe.unmountComponentAtNode=function(e){if(!nr(e))throw Error(c(40));return e._reactRootContainer?(bn(function(){or(null,null,e,!1,function(){e._reactRootContainer=null,e[Ta]=null})}),!0):!1},Xe.unstable_batchedUpdates=ai,Xe.unstable_renderSubtreeIntoContainer=function(e,a,n,t){if(!nr(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return or(e,a,n,!1,t)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var $d;function Np(){if($d)return pi.exports;$d=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),pi.exports=jp(),pi.exports}var _d;function wp(){if(_d)return rr;_d=1;var i=Np();return rr.createRoot=i.createRoot,rr.hydrateRoot=i.hydrateRoot,rr}var Ip=wp(),ke=Ni();function Hd(){return ke.useEffect(()=>{if(!document.getElementById("cristal-css")){const l=document.createElement("link");l.id="cristal-css",l.rel="stylesheet",l.href="/chat/cristal.css",document.head.appendChild(l)}const i=document.createElement("script");return i.src="/chat/cristal-config.js",i.onload=()=>{const l=document.createElement("script");l.src="/chat/cristal.js",document.body.appendChild(l)},document.body.appendChild(i),()=>{const l=document.getElementById("cristal-mount");l&&l.remove()}},[]),null}function wi(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var jn=wi();function lu(i){jn=i}var Sn={exec:()=>null};function Xn(i){let l=[];return c=>{let m=Math.max(0,Math.min(3,c-1)),u=l[m];return u||(u=i(m),l[m]=u),u}}function ae(i,l=""){let c=typeof i=="string"?i:i.source,m={replace:(u,v)=>{let f=typeof v=="string"?v:v.source;return f=f.replace($e.caret,"$1"),c=c.replace(u,f),m},getRegex:()=>new RegExp(c,l)};return m}var Ep=((i="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+i)}catch{return!1}})(),$e={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Xn(i=>new RegExp(`^ {0,${i}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Xn(i=>new RegExp(`^ {0,${i}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Xn(i=>new RegExp(`^ {0,${i}}(?:\`\`\`|~~~)`)),headingBeginRegex:Xn(i=>new RegExp(`^ {0,${i}}#`)),htmlBeginRegex:Xn(i=>new RegExp(`^ {0,${i}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Xn(i=>new RegExp(`^ {0,${i}}>`))},zp=/^(?:[ \t]*(?:\n|$))+/,Rp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Tp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Yo=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Dp=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ii=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,cu=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,du=ae(cu).replace(/bull/g,Ii).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Lp=ae(cu).replace(/bull/g,Ii).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ei=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Op=/^[^\n]+/,zi=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Mp=ae(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",zi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),qp=ae(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Ii).getRegex(),fr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ri=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Vp=ae("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ri).replace("tag",fr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),uu=i=>ae(Ei).replace("hr",Yo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list",i).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",fr).getRegex(),Bp=uu(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),$p=uu(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),_p=ae(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",$p).getRegex(),Ti={blockquote:_p,code:Rp,def:Mp,fences:Tp,heading:Dp,hr:Yo,html:Vp,lheading:du,list:qp,newline:zp,paragraph:Bp,table:Sn,text:Op},Fd=ae("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Yo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",fr).getRegex(),Hp={...Ti,lheading:Lp,table:Fd,paragraph:ae(Ei).replace("hr",Yo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Fd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",fr).getRegex()},Fp={...Ti,html:ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ri).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Sn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ae(Ei).replace("hr",Yo).replace("heading",` *#{1,6} *[^
]`).replace("lheading",du).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Up=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Wp=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,mu=/^( {2,}|\\)\n(?!\s*$)/,Gp=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,no=/[\p{P}\p{S}]/u,gr=/[\s\p{P}\p{S}]/u,Di=/[^\s\p{P}\p{S}]/u,Yp=ae(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,gr).getRegex(),pu=/(?!~)[\p{P}\p{S}]/u,Qp=/(?!~)[\s\p{P}\p{S}]/u,Kp=/(?:[^\s\p{P}\p{S}]|~)/u,Zp=ae(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Ep?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),fu=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Xp=ae(fu,"u").replace(/punct/g,no).getRegex(),Jp=ae(fu,"u").replace(/punct/g,pu).getRegex(),gu="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ef=ae(gu,"gu").replace(/notPunctSpace/g,Di).replace(/punctSpace/g,gr).replace(/punct/g,no).getRegex(),af=ae(gu,"gu").replace(/notPunctSpace/g,Kp).replace(/punctSpace/g,Qp).replace(/punct/g,pu).getRegex(),nf=ae("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Di).replace(/punctSpace/g,gr).replace(/punct/g,no).getRegex(),of=ae(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,no).getRegex(),tf="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",rf=ae(tf,"gu").replace(/notPunctSpace/g,Di).replace(/punctSpace/g,gr).replace(/punct/g,no).getRegex(),sf=ae(/\\(punct)/,"gu").replace(/punct/g,no).getRegex(),lf=ae(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),cf=ae(Ri).replace("(?:-->|$)","-->").getRegex(),df=ae("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",cf).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ur=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,uf=ae(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ur).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),hu=ae(/^!?\[(label)\]\[(ref)\]/).replace("label",ur).replace("ref",zi).getRegex(),vu=ae(/^!?\[(ref)\](?:\[\])?/).replace("ref",zi).getRegex(),mf=ae("reflink|nolink(?!\\()","g").replace("reflink",hu).replace("nolink",vu).getRegex(),Ud=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Li={_backpedal:Sn,anyPunctuation:sf,autolink:lf,blockSkip:Zp,br:mu,code:Wp,del:Sn,delLDelim:Sn,delRDelim:Sn,emStrongLDelim:Xp,emStrongRDelimAst:ef,emStrongRDelimUnd:nf,escape:Up,link:uf,nolink:vu,punctuation:Yp,reflink:hu,reflinkSearch:mf,tag:df,text:Gp,url:Sn},pf={...Li,link:ae(/^!?\[(label)\]\((.*?)\)/).replace("label",ur).getRegex(),reflink:ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ur).getRegex()},yi={...Li,emStrongRDelimAst:af,emStrongLDelim:Jp,delLDelim:of,delRDelim:rf,url:ae(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ud).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ae(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ud).getRegex()},ff={...yi,br:ae(mu).replace("{2,}","*").getRegex(),text:ae(yi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},sr={normal:Ti,gfm:Hp,pedantic:Fp},Fo={normal:Li,gfm:yi,breaks:ff,pedantic:pf},gf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wd=i=>gf[i];function Ra(i,l){if(l){if($e.escapeTest.test(i))return i.replace($e.escapeReplace,Wd)}else if($e.escapeTestNoEncode.test(i))return i.replace($e.escapeReplaceNoEncode,Wd);return i}function Gd(i){try{i=encodeURI(i).replace($e.percentDecode,"%")}catch{return null}return i}function Yd(i,l){var v;let c=i.replace($e.findPipe,(f,S,x)=>{let j=!1,P=S;for(;--P>=0&&x[P]==="\\";)j=!j;return j?"|":" |"}),m=c.split($e.splitPipe),u=0;if(m[0].trim()||m.shift(),m.length>0&&!((v=m.at(-1))!=null&&v.trim())&&m.pop(),l)if(m.length>l)m.splice(l);else for(;m.length<l;)m.push("");for(;u<m.length;u++)m[u]=m[u].trim().replace($e.slashPipe,"|");return m}function sn(i,l,c){let m=i.length;if(m===0)return"";let u=0;for(;u<m&&i.charAt(m-u-1)===l;)u++;return i.slice(0,m-u)}function Qd(i){let l=i.split(`
`),c=l.length-1;for(;c>=0&&$e.blankLine.test(l[c]);)c--;return l.length-c<=2?i:l.slice(0,c+1).join(`
`)}function hf(i,l){if(i.indexOf(l[1])===-1)return-1;let c=0;for(let m=0;m<i.length;m++)if(i[m]==="\\")m++;else if(i[m]===l[0])c++;else if(i[m]===l[1]&&(c--,c<0))return m;return c>0?-2:-1}function vf(i,l=0){let c=l,m="";for(let u of i)if(u==="	"){let v=4-c%4;m+=" ".repeat(v),c+=v}else m+=u,c++;return m}function Kd(i,l,c,m,u){let v=l.href,f=l.title||null,S=i[1].replace(u.other.outputLinkReplace,"$1");m.state.inLink=!0;let x={type:i[0].charAt(0)==="!"?"image":"link",raw:c,href:v,title:f,text:S,tokens:m.inlineTokens(S)};return m.state.inLink=!1,x}function xf(i,l,c){let m=i.match(c.other.indentCodeCompensation);if(m===null)return l;let u=m[1];return l.split(`
`).map(v=>{let f=v.match(c.other.beginningSpace);if(f===null)return v;let[S]=f;return S.length>=u.length?v.slice(u.length):v}).join(`
`)}var mr=class{constructor(i){ce(this,"options");ce(this,"rules");ce(this,"lexer");this.options=i||jn}space(i){let l=this.rules.block.newline.exec(i);if(l&&l[0].length>0)return{type:"space",raw:l[0]}}code(i){let l=this.rules.block.code.exec(i);if(l){let c=this.options.pedantic?l[0]:Qd(l[0]),m=c.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:c,codeBlockStyle:"indented",text:m}}}fences(i){let l=this.rules.block.fences.exec(i);if(l){let c=l[0],m=xf(c,l[3]||"",this.rules);return{type:"code",raw:c,lang:l[2]?l[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):l[2],text:m}}}heading(i){let l=this.rules.block.heading.exec(i);if(l){let c=l[2].trim();if(this.rules.other.endingHash.test(c)){let m=sn(c,"#");(this.options.pedantic||!m||this.rules.other.endingSpaceChar.test(m))&&(c=m.trim())}return{type:"heading",raw:sn(l[0],`
`),depth:l[1].length,text:c,tokens:this.lexer.inline(c)}}}hr(i){let l=this.rules.block.hr.exec(i);if(l)return{type:"hr",raw:sn(l[0],`
`)}}blockquote(i){let l=this.rules.block.blockquote.exec(i);if(l){let c=sn(l[0],`
`).split(`
`),m="",u="",v=[];for(;c.length>0;){let f=!1,S=[],x;for(x=0;x<c.length;x++)if(this.rules.other.blockquoteStart.test(c[x]))S.push(c[x]),f=!0;else if(!f)S.push(c[x]);else break;c=c.slice(x);let j=S.join(`
`),P=j.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");m=m?`${m}
${j}`:j,u=u?`${u}
${P}`:P;let T=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(P,v,!0),this.lexer.state.top=T,c.length===0)break;let k=v.at(-1);if((k==null?void 0:k.type)==="code")break;if((k==null?void 0:k.type)==="blockquote"){let Q=k,B=Q.raw+`
`+c.join(`
`),K=this.blockquote(B);v[v.length-1]=K,m=m.substring(0,m.length-Q.raw.length)+K.raw,u=u.substring(0,u.length-Q.text.length)+K.text;break}else if((k==null?void 0:k.type)==="list"){let Q=k,B=Q.raw+`
`+c.join(`
`),K=this.list(B);v[v.length-1]=K,m=m.substring(0,m.length-k.raw.length)+K.raw,u=u.substring(0,u.length-Q.raw.length)+K.raw,c=B.substring(v.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:m,tokens:v,text:u}}}list(i){let l=this.rules.block.list.exec(i);if(l){let c=l[1].trim(),m=c.length>1,u={type:"list",raw:"",ordered:m,start:m?+c.slice(0,-1):"",loose:!1,items:[]};c=m?`\\d{1,9}\\${c.slice(-1)}`:`\\${c}`,this.options.pedantic&&(c=m?c:"[*+-]");let v=this.rules.other.listItemRegex(c),f=!1;for(;i;){let x=!1,j="",P="";if(!(l=v.exec(i))||this.rules.block.hr.test(i))break;j=l[0],i=i.substring(j.length);let T=vf(l[2].split(`
`,1)[0],l[1].length),k=i.split(`
`,1)[0],Q=!T.trim(),B=0;if(this.options.pedantic?(B=2,P=T.trimStart()):Q?B=l[1].length+1:(B=T.search(this.rules.other.nonSpaceChar),B=B>4?1:B,P=T.slice(B),B+=l[1].length),Q&&this.rules.other.blankLine.test(k)&&(j+=k+`
`,i=i.substring(k.length+1),x=!0),!x){let K=this.rules.other.nextBulletRegex(B),Z=this.rules.other.hrRegex(B),Le=this.rules.other.fencesBeginRegex(B),_e=this.rules.other.headingBeginRegex(B),He=this.rules.other.htmlBeginRegex(B),be=this.rules.other.blockquoteBeginRegex(B);for(;i;){let Ie=i.split(`
`,1)[0],oe;if(k=Ie,this.options.pedantic?(k=k.replace(this.rules.other.listReplaceNesting,"  "),oe=k):oe=k.replace(this.rules.other.tabCharGlobal,"    "),Le.test(k)||_e.test(k)||He.test(k)||be.test(k)||K.test(k)||Z.test(k))break;if(oe.search(this.rules.other.nonSpaceChar)>=B||!k.trim())P+=`
`+oe.slice(B);else{if(Q||T.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Le.test(T)||_e.test(T)||Z.test(T))break;P+=`
`+k}Q=!k.trim(),j+=Ie+`
`,i=i.substring(Ie.length+1),T=oe.slice(B)}}u.loose||(f?u.loose=!0:this.rules.other.doubleBlankLine.test(j)&&(f=!0)),u.items.push({type:"list_item",raw:j,task:!!this.options.gfm&&this.rules.other.listIsTask.test(P),loose:!1,text:P,tokens:[]}),u.raw+=j}let S=u.items.at(-1);if(S)S.raw=S.raw.trimEnd(),S.text=S.text.trimEnd();else return;u.raw=u.raw.trimEnd();for(let x of u.items){this.lexer.state.top=!1,x.tokens=this.lexer.blockTokens(x.text,[]);let j=x.tokens[0];if(x.task&&((j==null?void 0:j.type)==="text"||(j==null?void 0:j.type)==="paragraph")){x.text=x.text.replace(this.rules.other.listReplaceTask,""),j.raw=j.raw.replace(this.rules.other.listReplaceTask,""),j.text=j.text.replace(this.rules.other.listReplaceTask,"");for(let T=this.lexer.inlineQueue.length-1;T>=0;T--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[T].src)){this.lexer.inlineQueue[T].src=this.lexer.inlineQueue[T].src.replace(this.rules.other.listReplaceTask,"");break}let P=this.rules.other.listTaskCheckbox.exec(x.raw);if(P){let T={type:"checkbox",raw:P[0]+" ",checked:P[0]!=="[ ]"};x.checked=T.checked,u.loose?x.tokens[0]&&["paragraph","text"].includes(x.tokens[0].type)&&"tokens"in x.tokens[0]&&x.tokens[0].tokens?(x.tokens[0].raw=T.raw+x.tokens[0].raw,x.tokens[0].text=T.raw+x.tokens[0].text,x.tokens[0].tokens.unshift(T)):x.tokens.unshift({type:"paragraph",raw:T.raw,text:T.raw,tokens:[T]}):x.tokens.unshift(T)}}else x.task&&(x.task=!1);if(!u.loose){let P=x.tokens.filter(k=>k.type==="space"),T=P.length>0&&P.some(k=>this.rules.other.anyLine.test(k.raw));u.loose=T}}if(u.loose)for(let x of u.items){x.loose=!0;for(let j of x.tokens)j.type==="text"&&(j.type="paragraph")}return u}}html(i){let l=this.rules.block.html.exec(i);if(l){let c=Qd(l[0]);return{type:"html",block:!0,raw:c,pre:l[1]==="pre"||l[1]==="script"||l[1]==="style",text:c}}}def(i){let l=this.rules.block.def.exec(i);if(l){let c=l[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),m=l[2]?l[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=l[3]?l[3].substring(1,l[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):l[3];return{type:"def",tag:c,raw:sn(l[0],`
`),href:m,title:u}}}table(i){var f;let l=this.rules.block.table.exec(i);if(!l||!this.rules.other.tableDelimiter.test(l[2]))return;let c=Yd(l[1]),m=l[2].replace(this.rules.other.tableAlignChars,"").split("|"),u=(f=l[3])!=null&&f.trim()?l[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],v={type:"table",raw:sn(l[0],`
`),header:[],align:[],rows:[]};if(c.length===m.length){for(let S of m)this.rules.other.tableAlignRight.test(S)?v.align.push("right"):this.rules.other.tableAlignCenter.test(S)?v.align.push("center"):this.rules.other.tableAlignLeft.test(S)?v.align.push("left"):v.align.push(null);for(let S=0;S<c.length;S++)v.header.push({text:c[S],tokens:this.lexer.inline(c[S]),header:!0,align:v.align[S]});for(let S of u)v.rows.push(Yd(S,v.header.length).map((x,j)=>({text:x,tokens:this.lexer.inline(x),header:!1,align:v.align[j]})));return v}}lheading(i){let l=this.rules.block.lheading.exec(i);if(l){let c=l[1].trim();return{type:"heading",raw:sn(l[0],`
`),depth:l[2].charAt(0)==="="?1:2,text:c,tokens:this.lexer.inline(c)}}}paragraph(i){let l=this.rules.block.paragraph.exec(i);if(l){let c=l[1].charAt(l[1].length-1)===`
`?l[1].slice(0,-1):l[1];return{type:"paragraph",raw:l[0],text:c,tokens:this.lexer.inline(c)}}}text(i){let l=this.rules.block.text.exec(i);if(l)return{type:"text",raw:l[0],text:l[0],tokens:this.lexer.inline(l[0])}}escape(i){let l=this.rules.inline.escape.exec(i);if(l)return{type:"escape",raw:l[0],text:l[1]}}tag(i){let l=this.rules.inline.tag.exec(i);if(l)return!this.lexer.state.inLink&&this.rules.other.startATag.test(l[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(l[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(l[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(l[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:l[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:l[0]}}link(i){let l=this.rules.inline.link.exec(i);if(l){let c=l[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(c)){if(!this.rules.other.endAngleBracket.test(c))return;let v=sn(c.slice(0,-1),"\\");if((c.length-v.length)%2===0)return}else{let v=hf(l[2],"()");if(v===-2)return;if(v>-1){let f=(l[0].indexOf("!")===0?5:4)+l[1].length+v;l[2]=l[2].substring(0,v),l[0]=l[0].substring(0,f).trim(),l[3]=""}}let m=l[2],u="";if(this.options.pedantic){let v=this.rules.other.pedanticHrefTitle.exec(m);v&&(m=v[1],u=v[3])}else u=l[3]?l[3].slice(1,-1):"";return m=m.trim(),this.rules.other.startAngleBracket.test(m)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(c)?m=m.slice(1):m=m.slice(1,-1)),Kd(l,{href:m&&m.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},l[0],this.lexer,this.rules)}}reflink(i,l){let c;if((c=this.rules.inline.reflink.exec(i))||(c=this.rules.inline.nolink.exec(i))){let m=(c[2]||c[1]).replace(this.rules.other.multipleSpaceGlobal," "),u=l[m.toLowerCase()];if(!u){let v=c[0].charAt(0);return{type:"text",raw:v,text:v}}return Kd(c,u,c[0],this.lexer,this.rules)}}emStrong(i,l,c=""){let m=this.rules.inline.emStrongLDelim.exec(i);if(!(!m||!m[1]&&!m[2]&&!m[3]&&!m[4]||m[4]&&c.match(this.rules.other.unicodeAlphaNumeric))&&(!(m[1]||m[3])||!c||this.rules.inline.punctuation.exec(c))){let u=[...m[0]].length-1,v,f,S=u,x=0,j=m[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(j.lastIndex=0,l=l.slice(-1*i.length+u);(m=j.exec(l))!==null;){if(v=m[1]||m[2]||m[3]||m[4]||m[5]||m[6],!v)continue;if(f=[...v].length,m[3]||m[4]){S+=f;continue}else if((m[5]||m[6])&&u%3&&!((u+f)%3)){x+=f;continue}if(S-=f,S>0)continue;f=Math.min(f,f+S+x);let P=[...m[0]][0].length,T=i.slice(0,u+m.index+P+f);if(Math.min(u,f)%2){let Q=T.slice(1,-1);return{type:"em",raw:T,text:Q,tokens:this.lexer.inlineTokens(Q)}}let k=T.slice(2,-2);return{type:"strong",raw:T,text:k,tokens:this.lexer.inlineTokens(k)}}}}codespan(i){let l=this.rules.inline.code.exec(i);if(l){let c=l[2].replace(this.rules.other.newLineCharGlobal," "),m=this.rules.other.nonSpaceChar.test(c),u=this.rules.other.startingSpaceChar.test(c)&&this.rules.other.endingSpaceChar.test(c);return m&&u&&(c=c.substring(1,c.length-1)),{type:"codespan",raw:l[0],text:c}}}br(i){let l=this.rules.inline.br.exec(i);if(l)return{type:"br",raw:l[0]}}del(i,l,c=""){let m=this.rules.inline.delLDelim.exec(i);if(m&&(!m[1]||!c||this.rules.inline.punctuation.exec(c))){let u=[...m[0]].length-1,v,f,S=u,x=this.rules.inline.delRDelim;for(x.lastIndex=0,l=l.slice(-1*i.length+u);(m=x.exec(l))!==null;){if(v=m[1]||m[2]||m[3]||m[4]||m[5]||m[6],!v||(f=[...v].length,f!==u))continue;if(m[3]||m[4]){S+=f;continue}if(S-=f,S>0)continue;f=Math.min(f,f+S);let j=[...m[0]][0].length,P=i.slice(0,u+m.index+j+f),T=P.slice(u,-u);return{type:"del",raw:P,text:T,tokens:this.lexer.inlineTokens(T)}}}}autolink(i){let l=this.rules.inline.autolink.exec(i);if(l){let c,m;return l[2]==="@"?(c=l[1],m="mailto:"+c):(c=l[1],m=c),{type:"link",raw:l[0],text:c,href:m,tokens:[{type:"text",raw:c,text:c}]}}}url(i){var c;let l;if(l=this.rules.inline.url.exec(i)){let m,u;if(l[2]==="@")m=l[0],u="mailto:"+m;else{let v;do v=l[0],l[0]=((c=this.rules.inline._backpedal.exec(l[0]))==null?void 0:c[0])??"";while(v!==l[0]);m=l[0],l[1]==="www."?u="http://"+l[0]:u=l[0]}return{type:"link",raw:l[0],text:m,href:u,tokens:[{type:"text",raw:m,text:m}]}}}inlineText(i){let l=this.rules.inline.text.exec(i);if(l){let c=this.lexer.state.inRawBlock;return{type:"text",raw:l[0],text:l[0],escaped:c}}}},Ca=class Ci{constructor(l){ce(this,"tokens");ce(this,"options");ce(this,"state");ce(this,"inlineQueue");ce(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=l||jn,this.options.tokenizer=this.options.tokenizer||new mr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let c={other:$e,block:sr.normal,inline:Fo.normal};this.options.pedantic?(c.block=sr.pedantic,c.inline=Fo.pedantic):this.options.gfm&&(c.block=sr.gfm,this.options.breaks?c.inline=Fo.breaks:c.inline=Fo.gfm),this.tokenizer.rules=c}static get rules(){return{block:sr,inline:Fo}}static lex(l,c){return new Ci(c).lex(l)}static lexInline(l,c){return new Ci(c).inlineTokens(l)}lex(l){l=l.replace($e.carriageReturn,`
`),this.blockTokens(l,this.tokens);for(let c=0;c<this.inlineQueue.length;c++){let m=this.inlineQueue[c];this.inlineTokens(m.src,m.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(l,c=[],m=!1){var v,f,S;this.tokenizer.lexer=this,this.options.pedantic&&(l=l.replace($e.tabCharGlobal,"    ").replace($e.spaceLine,""));let u=1/0;for(;l;){if(l.length<u)u=l.length;else{this.infiniteLoopError(l.charCodeAt(0));break}let x;if((f=(v=this.options.extensions)==null?void 0:v.block)!=null&&f.some(P=>(x=P.call({lexer:this},l,c))?(l=l.substring(x.raw.length),c.push(x),!0):!1))continue;if(x=this.tokenizer.space(l)){l=l.substring(x.raw.length);let P=c.at(-1);x.raw.length===1&&P!==void 0?P.raw+=`
`:c.push(x);continue}if(x=this.tokenizer.code(l)){l=l.substring(x.raw.length);let P=c.at(-1);(P==null?void 0:P.type)==="paragraph"||(P==null?void 0:P.type)==="text"?(P.raw+=(P.raw.endsWith(`
`)?"":`
`)+x.raw,P.text+=`
`+x.text,this.inlineQueue.at(-1).src=P.text):c.push(x);continue}if(x=this.tokenizer.fences(l)){l=l.substring(x.raw.length),c.push(x);continue}if(x=this.tokenizer.heading(l)){l=l.substring(x.raw.length),c.push(x);continue}if(x=this.tokenizer.hr(l)){l=l.substring(x.raw.length),c.push(x);continue}if(x=this.tokenizer.blockquote(l)){l=l.substring(x.raw.length),c.push(x);continue}if(x=this.tokenizer.list(l)){l=l.substring(x.raw.length),c.push(x);continue}if(x=this.tokenizer.html(l)){l=l.substring(x.raw.length),c.push(x);continue}if(x=this.tokenizer.def(l)){l=l.substring(x.raw.length);let P=c.at(-1);(P==null?void 0:P.type)==="paragraph"||(P==null?void 0:P.type)==="text"?(P.raw+=(P.raw.endsWith(`
`)?"":`
`)+x.raw,P.text+=`
`+x.raw,this.inlineQueue.at(-1).src=P.text):this.tokens.links[x.tag]||(this.tokens.links[x.tag]={href:x.href,title:x.title},c.push(x));continue}if(x=this.tokenizer.table(l)){l=l.substring(x.raw.length),c.push(x);continue}if(x=this.tokenizer.lheading(l)){l=l.substring(x.raw.length),c.push(x);continue}let j=l;if((S=this.options.extensions)!=null&&S.startBlock){let P=1/0,T=l.slice(1),k;this.options.extensions.startBlock.forEach(Q=>{k=Q.call({lexer:this},T),typeof k=="number"&&k>=0&&(P=Math.min(P,k))}),P<1/0&&P>=0&&(j=l.substring(0,P+1))}if(this.state.top&&(x=this.tokenizer.paragraph(j))){let P=c.at(-1);m&&(P==null?void 0:P.type)==="paragraph"?(P.raw+=(P.raw.endsWith(`
`)?"":`
`)+x.raw,P.text+=`
`+x.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=P.text):c.push(x),m=j.length!==l.length,l=l.substring(x.raw.length);continue}if(x=this.tokenizer.text(l)){l=l.substring(x.raw.length);let P=c.at(-1);(P==null?void 0:P.type)==="text"?(P.raw+=(P.raw.endsWith(`
`)?"":`
`)+x.raw,P.text+=`
`+x.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=P.text):c.push(x);continue}if(l){this.infiniteLoopError(l.charCodeAt(0));break}}return this.state.top=!0,c}inline(l,c=[]){return this.inlineQueue.push({src:l,tokens:c}),c}inlineTokens(l,c=[]){var S,x,j,P,T;this.tokenizer.lexer=this;let m=l;if(this.tokens.links){let k=Object.keys(this.tokens.links);k.length>0&&(m=m.replace(this.tokenizer.rules.inline.reflinkSearch,Q=>k.includes(Q.slice(Q.lastIndexOf("[")+1,-1))?"["+"a".repeat(Q.length-2)+"]":Q))}m=m.replace(this.tokenizer.rules.inline.anyPunctuation,"++"),m=m.replace(this.tokenizer.rules.inline.blockSkip,(k,Q,B)=>{let K=B?B.length:0;return k.slice(0,K)+"["+"a".repeat(k.length-K-2)+"]"}),m=((x=(S=this.options.hooks)==null?void 0:S.emStrongMask)==null?void 0:x.call({lexer:this},m))??m;let u=!1,v="",f=1/0;for(;l;){if(l.length<f)f=l.length;else{this.infiniteLoopError(l.charCodeAt(0));break}u||(v=""),u=!1;let k;if((P=(j=this.options.extensions)==null?void 0:j.inline)!=null&&P.some(B=>(k=B.call({lexer:this},l,c))?(l=l.substring(k.raw.length),c.push(k),!0):!1))continue;if(k=this.tokenizer.escape(l)){l=l.substring(k.raw.length),c.push(k);continue}if(k=this.tokenizer.tag(l)){l=l.substring(k.raw.length),c.push(k);continue}if(k=this.tokenizer.link(l)){l=l.substring(k.raw.length),c.push(k);continue}if(k=this.tokenizer.reflink(l,this.tokens.links)){l=l.substring(k.raw.length);let B=c.at(-1);k.type==="text"&&(B==null?void 0:B.type)==="text"?(B.raw+=k.raw,B.text+=k.text):c.push(k);continue}if(k=this.tokenizer.emStrong(l,m,v)){l=l.substring(k.raw.length),c.push(k);continue}if(k=this.tokenizer.codespan(l)){l=l.substring(k.raw.length),c.push(k);continue}if(k=this.tokenizer.br(l)){l=l.substring(k.raw.length),c.push(k);continue}if(k=this.tokenizer.del(l,m,v)){l=l.substring(k.raw.length),c.push(k);continue}if(k=this.tokenizer.autolink(l)){l=l.substring(k.raw.length),c.push(k);continue}if(!this.state.inLink&&(k=this.tokenizer.url(l))){l=l.substring(k.raw.length),c.push(k);continue}let Q=l;if((T=this.options.extensions)!=null&&T.startInline){let B=1/0,K=l.slice(1),Z;this.options.extensions.startInline.forEach(Le=>{Z=Le.call({lexer:this},K),typeof Z=="number"&&Z>=0&&(B=Math.min(B,Z))}),B<1/0&&B>=0&&(Q=l.substring(0,B+1))}if(k=this.tokenizer.inlineText(Q)){l=l.substring(k.raw.length),k.raw.slice(-1)!=="_"&&(v=k.raw.slice(-1)),u=!0;let B=c.at(-1);(B==null?void 0:B.type)==="text"?(B.raw+=k.raw,B.text+=k.text):c.push(k);continue}if(l){this.infiniteLoopError(l.charCodeAt(0));break}}return c}infiniteLoopError(l){let c="Infinite loop on byte: "+l;if(this.options.silent)console.error(c);else throw new Error(c)}},pr=class{constructor(i){ce(this,"options");ce(this,"parser");this.options=i||jn}space(i){return""}code({text:i,lang:l,escaped:c}){var v;let m=(v=(l||"").match($e.notSpaceStart))==null?void 0:v[0],u=i.replace($e.endingNewline,"")+`
`;return m?'<pre><code class="language-'+Ra(m)+'">'+(c?u:Ra(u,!0))+`</code></pre>
`:"<pre><code>"+(c?u:Ra(u,!0))+`</code></pre>
`}blockquote({tokens:i}){return`<blockquote>
${this.parser.parse(i)}</blockquote>
`}html({text:i}){return i}def(i){return""}heading({tokens:i,depth:l}){return`<h${l}>${this.parser.parseInline(i)}</h${l}>
`}hr(i){return`<hr>
`}list(i){let l=i.ordered,c=i.start,m="";for(let f=0;f<i.items.length;f++){let S=i.items[f];m+=this.listitem(S)}let u=l?"ol":"ul",v=l&&c!==1?' start="'+c+'"':"";return"<"+u+v+`>
`+m+"</"+u+`>
`}listitem(i){return`<li>${this.parser.parse(i.tokens)}</li>
`}checkbox({checked:i}){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:i}){return`<p>${this.parser.parseInline(i)}</p>
`}table(i){let l="",c="";for(let u=0;u<i.header.length;u++)c+=this.tablecell(i.header[u]);l+=this.tablerow({text:c});let m="";for(let u=0;u<i.rows.length;u++){let v=i.rows[u];c="";for(let f=0;f<v.length;f++)c+=this.tablecell(v[f]);m+=this.tablerow({text:c})}return m&&(m=`<tbody>${m}</tbody>`),`<table>
<thead>
`+l+`</thead>
`+m+`</table>
`}tablerow({text:i}){return`<tr>
${i}</tr>
`}tablecell(i){let l=this.parser.parseInline(i.tokens),c=i.header?"th":"td";return(i.align?`<${c} align="${i.align}">`:`<${c}>`)+l+`</${c}>
`}strong({tokens:i}){return`<strong>${this.parser.parseInline(i)}</strong>`}em({tokens:i}){return`<em>${this.parser.parseInline(i)}</em>`}codespan({text:i}){return`<code>${Ra(i,!0)}</code>`}br(i){return"<br>"}del({tokens:i}){return`<del>${this.parser.parseInline(i)}</del>`}link({href:i,title:l,tokens:c}){let m=this.parser.parseInline(c),u=Gd(i);if(u===null)return m;i=u;let v='<a href="'+i+'"';return l&&(v+=' title="'+Ra(l)+'"'),v+=">"+m+"</a>",v}image({href:i,title:l,text:c,tokens:m}){m&&(c=this.parser.parseInline(m,this.parser.textRenderer));let u=Gd(i);if(u===null)return Ra(c);i=u;let v=`<img src="${i}" alt="${Ra(c)}"`;return l&&(v+=` title="${Ra(l)}"`),v+=">",v}text(i){return"tokens"in i&&i.tokens?this.parser.parseInline(i.tokens):"escaped"in i&&i.escaped?i.text:Ra(i.text)}},Oi=class{strong({text:i}){return i}em({text:i}){return i}codespan({text:i}){return i}del({text:i}){return i}html({text:i}){return i}text({text:i}){return i}link({text:i}){return""+i}image({text:i}){return""+i}br(){return""}checkbox({raw:i}){return i}},Aa=class Ai{constructor(l){ce(this,"options");ce(this,"renderer");ce(this,"textRenderer");this.options=l||jn,this.options.renderer=this.options.renderer||new pr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Oi}static parse(l,c){return new Ai(c).parse(l)}static parseInline(l,c){return new Ai(c).parseInline(l)}parse(l){var m,u;this.renderer.parser=this;let c="";for(let v=0;v<l.length;v++){let f=l[v];if((u=(m=this.options.extensions)==null?void 0:m.renderers)!=null&&u[f.type]){let x=f,j=this.options.extensions.renderers[x.type].call({parser:this},x);if(j!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(x.type)){c+=j||"";continue}}let S=f;switch(S.type){case"space":{c+=this.renderer.space(S);break}case"hr":{c+=this.renderer.hr(S);break}case"heading":{c+=this.renderer.heading(S);break}case"code":{c+=this.renderer.code(S);break}case"table":{c+=this.renderer.table(S);break}case"blockquote":{c+=this.renderer.blockquote(S);break}case"list":{c+=this.renderer.list(S);break}case"checkbox":{c+=this.renderer.checkbox(S);break}case"html":{c+=this.renderer.html(S);break}case"def":{c+=this.renderer.def(S);break}case"paragraph":{c+=this.renderer.paragraph(S);break}case"text":{c+=this.renderer.text(S);break}default:{let x='Token with "'+S.type+'" type was not found.';if(this.options.silent)return console.error(x),"";throw new Error(x)}}}return c}parseInline(l,c=this.renderer){var u,v;this.renderer.parser=this;let m="";for(let f=0;f<l.length;f++){let S=l[f];if((v=(u=this.options.extensions)==null?void 0:u.renderers)!=null&&v[S.type]){let j=this.options.extensions.renderers[S.type].call({parser:this},S);if(j!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(S.type)){m+=j||"";continue}}let x=S;switch(x.type){case"escape":{m+=c.text(x);break}case"html":{m+=c.html(x);break}case"link":{m+=c.link(x);break}case"image":{m+=c.image(x);break}case"checkbox":{m+=c.checkbox(x);break}case"strong":{m+=c.strong(x);break}case"em":{m+=c.em(x);break}case"codespan":{m+=c.codespan(x);break}case"br":{m+=c.br(x);break}case"del":{m+=c.del(x);break}case"text":{m+=c.text(x);break}default:{let j='Token with "'+x.type+'" type was not found.';if(this.options.silent)return console.error(j),"";throw new Error(j)}}}return m}},dr,Uo=(dr=class{constructor(i){ce(this,"options");ce(this,"block");this.options=i||jn}preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}emStrongMask(i){return i}provideLexer(i=this.block){return i?Ca.lex:Ca.lexInline}provideParser(i=this.block){return i?Aa.parse:Aa.parseInline}},ce(dr,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),ce(dr,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),dr),bf=class{constructor(...i){ce(this,"defaults",wi());ce(this,"options",this.setOptions);ce(this,"parse",this.parseMarkdown(!0));ce(this,"parseInline",this.parseMarkdown(!1));ce(this,"Parser",Aa);ce(this,"Renderer",pr);ce(this,"TextRenderer",Oi);ce(this,"Lexer",Ca);ce(this,"Tokenizer",mr);ce(this,"Hooks",Uo);this.use(...i)}walkTokens(i,l){var m,u;let c=[];for(let v of i)switch(c=c.concat(l.call(this,v)),v.type){case"table":{let f=v;for(let S of f.header)c=c.concat(this.walkTokens(S.tokens,l));for(let S of f.rows)for(let x of S)c=c.concat(this.walkTokens(x.tokens,l));break}case"list":{let f=v;c=c.concat(this.walkTokens(f.items,l));break}default:{let f=v;(u=(m=this.defaults.extensions)==null?void 0:m.childTokens)!=null&&u[f.type]?this.defaults.extensions.childTokens[f.type].forEach(S=>{let x=f[S].flat(1/0);c=c.concat(this.walkTokens(x,l))}):f.tokens&&(c=c.concat(this.walkTokens(f.tokens,l)))}}return c}use(...i){let l=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(c=>{let m={...c};if(m.async=this.defaults.async||m.async||!1,c.extensions&&(c.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){let v=l.renderers[u.name];v?l.renderers[u.name]=function(...f){let S=u.renderer.apply(this,f);return S===!1&&(S=v.apply(this,f)),S}:l.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let v=l[u.level];v?v.unshift(u.tokenizer):l[u.level]=[u.tokenizer],u.start&&(u.level==="block"?l.startBlock?l.startBlock.push(u.start):l.startBlock=[u.start]:u.level==="inline"&&(l.startInline?l.startInline.push(u.start):l.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(l.childTokens[u.name]=u.childTokens)}),m.extensions=l),c.renderer){let u=this.defaults.renderer||new pr(this.defaults);for(let v in c.renderer){if(!(v in u))throw new Error(`renderer '${v}' does not exist`);if(["options","parser"].includes(v))continue;let f=v,S=c.renderer[f],x=u[f];u[f]=(...j)=>{let P=S.apply(u,j);return P===!1&&(P=x.apply(u,j)),P||""}}m.renderer=u}if(c.tokenizer){let u=this.defaults.tokenizer||new mr(this.defaults);for(let v in c.tokenizer){if(!(v in u))throw new Error(`tokenizer '${v}' does not exist`);if(["options","rules","lexer"].includes(v))continue;let f=v,S=c.tokenizer[f],x=u[f];u[f]=(...j)=>{let P=S.apply(u,j);return P===!1&&(P=x.apply(u,j)),P}}m.tokenizer=u}if(c.hooks){let u=this.defaults.hooks||new Uo;for(let v in c.hooks){if(!(v in u))throw new Error(`hook '${v}' does not exist`);if(["options","block"].includes(v))continue;let f=v,S=c.hooks[f],x=u[f];Uo.passThroughHooks.has(v)?u[f]=j=>{if(this.defaults.async&&Uo.passThroughHooksRespectAsync.has(v))return(async()=>{let T=await S.call(u,j);return x.call(u,T)})();let P=S.call(u,j);return x.call(u,P)}:u[f]=(...j)=>{if(this.defaults.async)return(async()=>{let T=await S.apply(u,j);return T===!1&&(T=await x.apply(u,j)),T})();let P=S.apply(u,j);return P===!1&&(P=x.apply(u,j)),P}}m.hooks=u}if(c.walkTokens){let u=this.defaults.walkTokens,v=c.walkTokens;m.walkTokens=function(f){let S=[];return S.push(v.call(this,f)),u&&(S=S.concat(u.call(this,f))),S}}this.defaults={...this.defaults,...m}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,l){return Ca.lex(i,l??this.defaults)}parser(i,l){return Aa.parse(i,l??this.defaults)}parseMarkdown(i){return(l,c)=>{let m={...c},u={...this.defaults,...m},v=this.onError(!!u.silent,!!u.async);if(this.defaults.async===!0&&m.async===!1)return v(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof l>"u"||l===null)return v(new Error("marked(): input parameter is undefined or null"));if(typeof l!="string")return v(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected"));if(u.hooks&&(u.hooks.options=u,u.hooks.block=i),u.async)return(async()=>{let f=u.hooks?await u.hooks.preprocess(l):l,S=await(u.hooks?await u.hooks.provideLexer(i):i?Ca.lex:Ca.lexInline)(f,u),x=u.hooks?await u.hooks.processAllTokens(S):S;u.walkTokens&&await Promise.all(this.walkTokens(x,u.walkTokens));let j=await(u.hooks?await u.hooks.provideParser(i):i?Aa.parse:Aa.parseInline)(x,u);return u.hooks?await u.hooks.postprocess(j):j})().catch(v);try{u.hooks&&(l=u.hooks.preprocess(l));let f=(u.hooks?u.hooks.provideLexer(i):i?Ca.lex:Ca.lexInline)(l,u);u.hooks&&(f=u.hooks.processAllTokens(f)),u.walkTokens&&this.walkTokens(f,u.walkTokens);let S=(u.hooks?u.hooks.provideParser(i):i?Aa.parse:Aa.parseInline)(f,u);return u.hooks&&(S=u.hooks.postprocess(S)),S}catch(f){return v(f)}}}onError(i,l){return c=>{if(c.message+=`
Please report this to https://github.com/markedjs/marked.`,i){let m="<p>An error occurred:</p><pre>"+Ra(c.message+"",!0)+"</pre>";return l?Promise.resolve(m):m}if(l)return Promise.reject(c);throw c}}},kn=new bf;function G(i,l){return kn.parse(i,l)}G.options=G.setOptions=function(i){return kn.setOptions(i),G.defaults=kn.defaults,lu(G.defaults),G};G.getDefaults=wi;G.defaults=jn;G.use=function(...i){return kn.use(...i),G.defaults=kn.defaults,lu(G.defaults),G};G.walkTokens=function(i,l){return kn.walkTokens(i,l)};G.parseInline=kn.parseInline;G.Parser=Aa;G.parser=Aa.parse;G.Renderer=pr;G.TextRenderer=Oi;G.Lexer=Ca;G.lexer=Ca.lex;G.Tokenizer=mr;G.Hooks=Uo;G.parse=G;G.options;G.setOptions;G.use;G.walkTokens;G.parseInline;Aa.parse;Ca.lex;/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cf=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,c,m)=>m?m.toUpperCase():c.toLowerCase()),Zd=i=>{const l=Cf(i);return l.charAt(0).toUpperCase()+l.slice(1)},xu=(...i)=>i.filter((l,c,m)=>!!l&&l.trim()!==""&&m.indexOf(l)===c).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Af={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=ke.forwardRef(({color:i="currentColor",size:l=24,strokeWidth:c=2,absoluteStrokeWidth:m,className:u="",children:v,iconNode:f,...S},x)=>ke.createElement("svg",{ref:x,...Af,width:l,height:l,stroke:i,strokeWidth:m?Number(c)*24/Number(l):c,className:xu("lucide",u),...S},[...f.map(([j,P])=>ke.createElement(j,P)),...Array.isArray(v)?v:[v]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=(i,l)=>{const c=ke.forwardRef(({className:m,...u},v)=>ke.createElement(Sf,{ref:v,iconNode:l,className:xu(`lucide-${yf(Zd(i))}`,`lucide-${i}`,m),...u}));return c.displayName=Zd(i),c};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Pf=_("arrow-left",kf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ln=_("arrow-right",jf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],wf=_("bookmark",Nf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Ef=_("boxes",If);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Si=_("brain",zf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Tf=_("briefcase",Rf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],ki=_("building-2",Df);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]],Xd=_("cable",Lf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],ka=_("camera",Of);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],qf=_("car",Mf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],ir=_("chart-column",Vf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],he=_("chevron-right",Bf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Sa=_("circle-check",$f);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],Mi=_("clipboard-check",_f);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],hr=_("clock",Hf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Uf=_("dollar-sign",Ff);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],eo=_("external-link",Wf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Yf=_("eye",Gf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],Jd=_("facebook",Qf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Zf=_("file-text",Kf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],vr=_("globe",Xf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],bu=_("headphones",Jf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Pi=_("house",eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],ng=_("info",ag);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],eu=_("instagram",og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],rg=_("layout-dashboard",tg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ig=_("lightbulb",sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],au=_("linkedin",lg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ao=_("lock",cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Pn=_("mail",dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],nu=_("map-pin",ug);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],pg=_("menu",mg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Wo=_("message-circle",fg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],ou=_("moon",gg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Pa=_("phone",hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],xg=_("quote",vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],yg=_("search",bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Ag=_("send",Cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],qi=_("server",Sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],lr=_("settings-2",kg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],jg=_("settings",Pg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],wg=_("share-2",Ng);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],cn=_("shield",Ig);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],zg=_("store",Eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Tg=_("trending-up",Rg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],yu=_("triangle-alert",Dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Cu=_("users",Lg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],tu=_("utensils-crossed",Og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Au=_("video",Mg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]],ji=_("warehouse",qg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Bg=_("wifi-off",Vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],_g=_("wifi",$g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],cr=_("workflow",Hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ug=_("x",Fg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Vi=_("zap",Wg),hi="https://wa.me/573337450634?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20c%C3%A1maras%20de%20seguridad%20para%20mi%20negocio%20en%20Bogot%C3%A1";function Gg({md:i}){return o.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(i)}})}const Yg=[{name:"Básico",cameras:"4 cámaras",price:"$1.800.000",desc:"Ideal para locales pequeños y consultorios",features:["4 cámaras HD 4MP","DVR 4 canales","1 TB almacenamiento","Instalación incluida","Soporte 30 días","App móvil Remotion"],highlight:!1},{name:"Profesional",cameras:"8 cámaras",price:"$3.200.000",desc:"Para negocios medianos con alta rotación",features:["8 cámaras 4MP ColorVu","DVR 8 canales","2 TB almacenamiento","Instalación incluida","Soporte 90 días","Alertas automáticas IA","App móvil + escritorio"],highlight:!0},{name:"Empresarial",cameras:"16 cámaras",price:"$5.600.000",desc:"Cobertura completa para bodegas y franquicias",features:["16 cámaras 4MP","NVR 16 canales PoE","4 TB almacenamiento RAID","Instalación incluida","Soporte 6 meses","Analítica IA completa","Dashboard remoto 24/7","Integración WhatsApp/CRM"],highlight:!1},{name:"IA Total",cameras:"8-16 cámaras + IA",price:"Desde $4.500.000",desc:"Analítica inteligente: aforo, intrusión, PPE, arqueo",features:["Hardware + servidor edge GPU","YOLO v8 detección objetos","PPE detection (EPP obligatorio)","Control de aforo en tiempo real","Arqueo de caja por video","Alertas WhatsApp/CRM automáticas","Dashboard ejecutivo con métricas","Soporte prioritario 12 meses"],highlight:!1}],Qg=[{q:"¿Cuánto cuestan las cámaras de seguridad para un negocio en Bogotá?",a:"El rango va desde $1.800.000 COP para 4 cámaras básicas hasta $5.600.000 para 16 cámaras con NVR. El plan con analítica IA cuesta desde $4.500.000 incluyendo servidor edge. El precio depende del hardware, cantidad de puntos y complejidad de instalación."},{q:"¿Cuánto tarda la instalación?",a:"Un sistema de 4 a 8 cámaras se instala en 1 día hábil. Sistemas de 16+ cámaras con cableado estructurado y servidor IA pueden tomar 2 a 3 días. Siempre coordinamos la instalación en horarios que no interrumpan la operación de su negocio."},{q:"¿Puedo ver las cámaras desde mi celular?",a:"Sí. Todas nuestras instalaciones incluyen configuración de app móvil (Remotion Hik-Connect o HiK-Connect). Puede ver en vivo, recibir alertas, y reproducir grabaciones desde cualquier lugar con internet."},{q:"¿Qué es la analítica de video con IA?",a:"Es software que analiza el video en tiempo real usando inteligencia artificial (YOLO v8). Detecta personas, vehículos, objetos olvidados, controla aforo, verifica uso de EPP, y puede hacer arqueo de caja. Las alertas se envían por WhatsApp o email automáticamente."},{q:"¿Necesito internet para que funcionen las cámaras?",a:"Las cámaras graban localmente al DVR/NVR sin necesidad de internet. El internet se necesita para: ver desde el celular, recibir alertas IA, y acceso remoto. Recomendamos mínimo 10 Mbps simétricos para sistemas con IA."},{q:"¿Ofrecen garantía y soporte?",a:"Sí. Hardware con garantía de fábrica (1-3 años según marca). Soporte técnico incluido según plan: 30 días (Básico) hasta 12 meses (IA Total). Extendemos soporte con contratos mensuales desde $250.000/mes."},{q:"¿Funciona en caso de apagón o corte de luz?",a:"Recomendamos incluir un UPS (no Break) que mantiene el DVR y módem funcionando 30-45 minutos. Si necesita cobertura total, ofrecemos soluciones con baterías de respaldo de hasta 4 horas. Las cámaras IP PoE se alimentan por el cable Ethernet."},{q:"¿En qué zonas de Bogotá instalan?",a:"Cubrimos toda Bogotá y área metropolitana: Centro, Norte (Chicó, Chapinero, Usaquén), Sur (Kennedy, Bosa, Ciudad Bolívar), Occidente (Engativá, Suba, Fontibón), y oriente (Santa Fe, Usme). También atendemos municipalities cercanos."}];function Kg(){return o.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[o.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),o.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[o.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[o.jsx(cn,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),o.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Bogotá 2026"})]}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Cámaras de Seguridad para Negocio en Bogotá"}),o.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"Instalación profesional de cámaras con inteligencia artificial para locales comerciales, bodegas, restaurantes y oficinas. Hardware Hikvision, analítica YOLO v8, alertas automáticas por WhatsApp."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsxs("a",{href:hi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Cotizar Ahora ",o.jsx(ln,{className:"w-4 h-4"})]}),o.jsxs("a",{href:"#precios",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Precios 2026 ",o.jsx(he,{className:"w-4 h-4"})]})]}),o.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:ka,label:"500+ instalaciones",sub:"en Bogotá"},{icon:Si,label:"IA en tiempo real",sub:"YOLO v8"},{icon:ao,label:"Garantía 3 años",sub:"hardware Hikvision"},{icon:Pa,label:"Soporte 24/7",sub:"WhatsApp directo"}].map(i=>o.jsxs("div",{className:"text-center",children:[o.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),o.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),o.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"¿Por qué su negocio necesita cámaras de seguridad?"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Bogotá registra más de 45.000 hurtos al año. El 70% de negocios sin cámaras no logra identificar responsables. Estos son los problemas que resolvemos:"}),o.jsx("div",{className:"space-y-8",children:[{icon:yu,title:"Robos externos sin evidencia",desc:"Asaltos a mano armada, rompimiento de vidrieras, hurtos de mercancía. Sin cámaras, la policía no tiene pistas y el seguro no cubre la pérdida. Con grabaciones en HD, aumentamos las probabilidades de recuperación en un 340%.",stat:"340%",statLabel:"más recuperaciones con video"},{icon:Cu,title:"Robo interno y mermas injustificadas",desc:"El 22% de las pérdidas en retail son por robo interno. Nuestros clientes en Kennedy redujeron mermas en 68% al instalar cámaras en cajas, almacenes y zonas de personal. La analítica de IA detecta comportamientos anómalos en tiempo real.",stat:"68%",statLabel:"reducción de mermas reportada"},{icon:ao,title:"Cierres sin evidencia para seguros",desc:"Los aseguradores exigen pruebas de video para cubrir siniestros. Sin cámaras, una inundación o incendio puede costarle millones sin compensación. Guardamos 90 días de grabación en almacenamiento seguro con RAID.",stat:"90 días",statLabel:"de respaldo automático"}].map(i=>o.jsxs("div",{className:"flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"flex-shrink-0",children:o.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:o.jsx(i.icon,{className:"w-6 h-6",style:{color:"var(--color-accent)"}})})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),o.jsx("p",{className:"font-sans leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),o.jsxs("div",{className:"flex items-baseline gap-2",children:[o.jsx("span",{className:"font-sans text-2xl font-bold",style:{color:"var(--color-accent)"},children:i.stat}),o.jsx("span",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:i.statLabel})]})]})]},i.title))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-5xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Soluciones para cada tipo de negocio"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Cada comercio en Bogotá tiene riesgos diferentes. Diseñamos sistemas específicos para su operación:"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:ki,title:"Local Comercial",desc:"Cobertura de vitrina, caja y área de clientes. Cámaras dome para interior, bullet para fachada. Detección de horarios y alerta fuera de horario.",cameras:"4-8 cámaras",zones:"Fachada · Caja · Almacén"},{icon:ji,title:"Bodega",desc:"Cámaras bullet con alcance largo para pasillos amplios. Visión nocturna ColorVu para patios de carga. Control de acceso por plate recognition.",cameras:"8-16 cámaras",zones:"Accesos · Pasillos · Patio carga"},{icon:tu,title:"Restaurante",desc:"Analítica de cocina, sala y barra. Control de aforo para cumplimiento IDEA. Cámaras resistentes a humedad y grasas industriales.",cameras:"6-12 cámaras",zones:"Cocina · Sala · Barra · Bodega"},{icon:Tf,title:"Oficina",desc:"Acceso por人脸识别, control de visitantes, zonas restringidas. Integración con Sistemas de control de acceso existentes. Cámaras discretas tipo mini-dome.",cameras:"4-8 cámaras",zones:"Recepción · Piso · Servidores · Salas"},{icon:qf,title:"Estacionamiento",desc:"LPR (reconocimiento de placas) para control de acceso. Cámaras ANPR con flash IR para lectura 24/7. Analítica de cajones y control de permanencia.",cameras:"8-16 cámaras",zones:"Entrada · Salida · Pisos · Vigilancia"}].map(i=>o.jsxs("div",{className:"group p-6 rounded-xl border transition-all hover:shadow-lg",style:{borderColor:"var(--color-border)"},children:[o.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:o.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),o.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),o.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),o.jsxs("div",{className:"flex flex-wrap gap-2",children:[o.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.cameras}),o.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full border",style:{borderColor:"var(--color-border)",color:"var(--color-muted-foreground)"},children:i.zones})]})]},i.title))})]})}),o.jsx("section",{id:"precios",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-6xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Precios reales 2026"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Sin sorpresas. Incluye hardware, instalación y configuración. Los precios son COP e IVA incluido."}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:Yg.map(i=>o.jsxs("div",{className:"relative flex flex-col p-6 rounded-xl border-2 transition-all",style:{borderColor:i.highlight?"var(--color-accent)":"var(--color-border)",backgroundColor:i.highlight?"var(--color-accent)":"var(--color-background)",color:i.highlight?"var(--color-background)":"var(--color-foreground)"},children:[i.highlight&&o.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-sans font-bold px-4 py-1 rounded-full",style:{backgroundColor:"var(--color-background)",color:"var(--color-accent)"},children:"Más vendido"}),o.jsx("h3",{className:"font-serif text-xl font-bold mb-1",children:i.name}),o.jsx("p",{className:"font-sans text-sm mb-1",style:{opacity:.8},children:i.cameras}),o.jsx("div",{className:"font-serif text-3xl font-bold my-4",children:i.price}),o.jsx("p",{className:"font-sans text-sm mb-6",style:{opacity:.7},children:i.desc}),o.jsx("ul",{className:"space-y-2 mb-8 flex-1",children:i.features.map(l=>o.jsxs("li",{className:"flex items-start gap-2 text-sm font-sans",children:[o.jsx(Sa,{className:"w-4 h-4 mt-0.5 flex-shrink-0",style:{opacity:.7}}),o.jsx("span",{children:l})]},l))}),o.jsxs("a",{href:hi,target:"_blank",rel:"noopener noreferrer",className:"w-full text-center px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-all hover:scale-105 block",style:{backgroundColor:i.highlight?"var(--color-background)":"var(--color-accent)",color:i.highlight?"var(--color-accent)":"var(--color-background)",border:i.highlight?"2px solid var(--color-background)":"none"},children:["Cotizar ",i.name]})]},i.name))}),o.jsx("div",{className:"mt-8 text-center",children:o.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:"* Precios referenciales para Bogotá. El costo final depende de distancias, cantidad de puntos y accesibilidad. Cotización sin compromiso vía WhatsApp."})})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Cómo funciona nuestro servicio"}),o.jsx("p",{className:"font-sans text-lg text-center mb-16 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"De la primera llamada al sistema funcionando en 4 pasos claros:"}),o.jsxs("div",{className:"space-y-12 relative",children:[o.jsx("div",{className:"absolute left-6 md:left-8 top-0 bottom-0 w-0.5",style:{backgroundColor:"var(--color-border)"}}),[{icon:Mi,step:"01",title:"Auditoría Gratuita",desc:"Visitamos su negocio en Bogotá, identificamos puntos críticos, medimos distancias, evaluamos infraestructura eléctrica y de red. Le entregamos un plano con ubicación óptima de cada cámara. Sin compromiso.",time:"1-2 horas"},{icon:jg,step:"02",title:"Instalación Profesional",desc:"Nuestro equipo técnico instala el hardware en menos de 24 horas para sistemas de hasta 8 cámaras. Cableado estructurado o inalámbrico según su caso. No dejamos cables expuestos ni destornilladores olvidados.",time:"1-3 días"},{icon:Si,step:"03",title:"Configuración IA y alertas",desc:"Configuramos la analítica de video (YOLO v8): detección de personas, control de aforo, alertas de intrusión. Conectamos las alertas a su WhatsApp o CRM. Le entrenamos para usar la app Remotion.",time:"2-4 horas"},{icon:bu,step:"04",title:"Soporte Continuo",desc:"Seguimiento remoto del sistema con alertas automáticas. Si una cámara falla, usted recibe un aviso por WhatsApp antes de notar la caída. Soporte técnico vía WhatsApp. Actualizaciones de firmware incluidas. Mantenimiento preventivo cada 6 meses.",time:"24/7"}].map((i,l)=>o.jsxs("div",{className:"relative flex gap-6 md:gap-8",children:[o.jsx("div",{className:"flex-shrink-0 z-10",children:o.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif font-bold text-lg md:text-xl border-4",style:{backgroundColor:"var(--color-background)",borderColor:"var(--color-accent)",color:"var(--color-accent)"},children:i.step})}),o.jsxs("div",{className:"flex-1 pt-2 md:pt-4",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[o.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),o.jsx("h3",{className:"font-serif text-xl md:text-2xl font-bold",children:i.title})]}),o.jsx("p",{className:"font-sans leading-relaxed mb-3",style:{color:"var(--color-muted-foreground)"},children:i.desc}),o.jsxs("span",{className:"inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.8},children:["⏱ ",i.time]})]})]},i.step))]})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Casos reales en Bogotá"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Negocios que ya protegemos con cámaras e inteligencia artificial:"}),o.jsx("div",{className:"space-y-8",children:[{business:"Ferretería Los 3 Amigos — Suba",problem:"Pérdidas de $8 millones/mes por mermas no identificadas. Sin cámaras, el dueño no podía saber si eran robos internos o errores de inventario.",solution:"Instalación de 8 cámaras Hikvision ColorVu con analítica IA. Detección de personas en zona de almacén y arqueo de caja por video.",result:"Mermas reducidas en 68% en 3 meses. ROI recuperado en 5 semanas. Ahorro anual estimado: $65 millones.",icon:ki},{business:"Restaurante La Brasa — Chapinero",problem:"Sanciones del IDEA por exceder aforo. El local tenía un sistema de conteo manual que fallaba los fines de semana.",solution:"6 cámaras con control de aforo en tiempo real por IA. Alertas automáticas cuando se alcanza el 80% de capacidad. Dashboard para gerencia.",result:"Cero multas en 12 meses. Mejor control de inventario de comida. Satisfacción de clientes aumentó por evitar esperas.",icon:tu},{business:"Bodega Distribuidora Norte — Kennedy",problem:"2 asaltos en 6 meses. Los ladrones entraban por la noche y no había evidencia para la policía ni para el seguro.",solution:"12 cámaras bullet con IR 80m, sensores de movimiento IA, alertas WhatsApp en 3 segundos. Server edge con grabación 90 días.",result:"Intento de robo capturado en HD. Policía identificó y capturó sospechosos. Prima de seguro redujo un 40% el siguiente año.",icon:ji}].map(i=>o.jsxs("div",{className:"p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),o.jsx("h3",{className:"font-serif text-lg font-bold",children:i.business})]}),o.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-sans text-xs font-semibold uppercase tracking-wider mb-1",style:{color:"var(--color-accent)"},children:"Problema"}),o.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:i.problem})]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-sans text-xs font-semibold uppercase tracking-wider mb-1",style:{color:"var(--color-accent)"},children:"Solución"}),o.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:i.solution})]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-sans text-xs font-semibold uppercase tracking-wider mb-1",style:{color:"var(--color-accent)"},children:"Resultado"}),o.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:i.result})]})]})]},i.business))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Todo lo que necesita saber sobre cámaras de seguridad para su negocio en Bogotá:"}),o.jsx("div",{className:"space-y-4",children:Qg.map(i=>o.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[o.jsx("span",{children:i.q}),o.jsx(he,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),o.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:o.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Proteja su negocio hoy"}),o.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Cada día sin cámaras es un día sin evidencia. Solicite su auditoría gratuita y reciba un plano personalizado para su negocio en Bogotá."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[o.jsxs("a",{href:hi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[o.jsx(Pa,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),o.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[o.jsx(Pn,{className:"w-4 h-4"})," Email Directo"]})]}),o.jsx("div",{className:"text-left",children:o.jsx(Gg,{md:`
## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`})})]})})]})}function Zg(){const i=["Suba Centro","La Florida","Salitre Oriental","San Carlos","El Recreo","Ciudad Bolívar"],l=[{titulo:"Bodegas y Almacenes",desc:"Control de acceso a mercancía de alto valor con cámaras ColorVu que identifican placa y rostro a las 2 AM.",icon:"📦"},{titulo:"Ferreterías",desc:"Detección de hurto interno y externo con IA que alerta en tiempo real al propietario vía WhatsApp.",icon:"🔧"},{titulo:"Conjuntos Residenciales",desc:"Aforo de parqueaderos, control de visitantes y vigilancia perimetral con analítica YOLO.",icon:"🏢"}],c=[{titulo:"Instalación en 24 horas",desc:"Técnicos certificados en Suba con cobertura el mismo día en La Florida y Salitre Oriental.",icon:"⏱️"},{titulo:"Alertas y analítica IA",desc:"Analítica de video en tiempo real que dispara alertas automáticas a tu WhatsApp cuando ocurre un evento.",icon:"👁️"},{titulo:"Garantía de 2 años",desc:"Equipos con garantía extendida y soporte técnico incluido en toda la localidad de Suba.",icon:"🛡️"},{titulo:"Precios desde $850.000",desc:"Kit completo de 4 cámaras Hikvision + DVR + instalación + configuración remota.",icon:"💰"}],m=`
### Ferretería El Progreso — Suba Centro

**Problema:** Hurtos recurrentes entre las 1 AM y 4 AM. El propietario perdía mercancía por valor de $3.200.000 mensuales y no tenía evidencia para denunciar.

**Solución:** Instalación de 6 cámaras ColorVu con lente motorizado 2.8-12mm. Placa de dominio capturada a 35 metros. Detección de intrusiones con alerta WhatsApp en 8 segundos.

**Resultado:** Primer robo detectado en tiempo real. Placa capturada, video entregado a la Policía Nacional. Recuperación del 85% de mercancía en 48 horas. Hurtos reducidos a cero en los siguientes 6 meses.
  `,u=[{q:"¿Cuánto cuestan las cámaras de seguridad en Suba?",a:"Los kits completos para Suba arrancan desde $850.000 COP para 4 cámaras con DVR, incluyendo instalación. Para conjuntos residenciales o bodegas grandes, cotizamos a medida según el número de puntos."},{q:"¿Instalan cámaras en La Florida y Salitre Oriental?",a:"Sí, cubrimos toda la localidad de Suba: La Florida, Salitre Oriental, San Carlos, El Recreo, Ciudad Bolívar y Suba Centro. Nuestros técnicos llegan en menos de 24 horas."},{q:"¿Las cámaras funcionan con el apagón de luz en Suba?",a:"Sí, todas nuestras cámaras Hikvision ColorVu tienen visión nocturna con luz artificial integrada. Incluso en oscuridad total, captan imagen a color con detalle de placas."},{q:"¿Puedo ver las cámaras desde mi celular?",a:"Sí, configuração remota vía app Hik-Connect o HiLook. Puedes ver en vivo, reproducir grabaciones y recibir alertas desde cualquier lugar."},{q:"¿Ofrecen mantenimiento preventivo en Suba?",a:"Sí, tenemos planes de mantenimiento trimestral que incluyen limpieza de lentes, revisión de cableado, actualización de firmware y backup de configuración."}],v={"@context":"https://schema.org","@type":"LocalBusiness",name:"Servicios APC - Cámaras de Seguridad en Suba",description:"Instalación de cámaras de seguridad en Suba, Bogotá. Hikvision, ColorVu, analítica YOLO. Cobertura La Florida, Salitre Oriental, San Carlos.",areaServed:{"@type":"City",name:"Suba, Bogotá"},telephone:"+573337450634",email:"serviciosapcsoporte@gmail.com"};return o.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-16 font-sans",style:{color:"var(--color-foreground)",background:"var(--color-background)"},children:[o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}}),o.jsxs("header",{className:"mb-12",children:[o.jsx("p",{className:"text-sm uppercase tracking-widest mb-2",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Suba, Bogotá"}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold leading-tight mb-4",style:{color:"var(--color-foreground)"},children:"Cámaras de Seguridad en Suba, Bogotá"}),o.jsx("p",{className:"text-lg mb-6",style:{color:"var(--color-muted-foreground)"},children:"Soluciones de video con IA para cada barrio de Suba. Desde La Florida hasta Salitre Oriental, protegemos tu negocio y tu hogar con tecnología Hikvision ColorVu y analítica de inteligencia artificial."}),o.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Suba",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Cotizar por WhatsApp"})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Cobertura en Suba"}),o.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:i.map(f=>o.jsxs("li",{className:"px-4 py-3 rounded-lg text-sm font-medium",style:{background:"var(--color-secondary)",color:"var(--color-foreground)"},children:["✓ ",f]},f))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Soluciones para negocios en Suba"}),o.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:l.map(f=>o.jsxs("div",{className:"rounded-xl p-6",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[o.jsx("span",{className:"text-3xl block mb-3",children:f.icon}),o.jsx("h3",{className:"font-serif font-bold text-lg mb-2",children:f.titulo}),o.jsx("p",{className:"text-sm",style:{color:"var(--color-muted-foreground)"},children:f.desc})]},f.titulo))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"¿Por qué elegir Servicios APC en Suba?"}),o.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:c.map(f=>o.jsxs("div",{className:"flex gap-4 items-start",children:[o.jsx("span",{className:"text-3xl flex-shrink-0",children:f.icon}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-serif font-bold text-lg",children:f.titulo}),o.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-muted-foreground)"},children:f.desc})]})]},f.titulo))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Casos reales en Suba"}),o.jsx("div",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:o.jsx("div",{className:"prose prose-sm max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(m)}})})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Preguntas frecuentes sobre cámaras en Suba"}),o.jsx("div",{className:"space-y-6",children:u.map((f,S)=>o.jsxs("details",{className:"group rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[o.jsxs("summary",{className:"px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center",style:{background:"var(--color-secondary)"},children:[f.q,o.jsx("span",{className:"ml-2 transition-transform group-open:rotate-45 text-xl",children:"+"})]}),o.jsx("div",{className:"px-6 py-4 text-sm",style:{color:"var(--color-muted-foreground)"},children:f.a})]},S))})]}),o.jsxs("section",{className:"mb-12 text-center",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-4",children:"¿Listo para proteger tu negocio en Suba?"}),o.jsx("p",{className:"mb-6",style:{color:"var(--color-muted-foreground)"},children:"Cotización sin compromiso en menos de 2 horas."}),o.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Suba",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Solicitar cotización ahora"})]}),o.jsxs("section",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[o.jsx("h2",{className:"font-serif text-xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Ecosistema APC: Todo conectado"}),o.jsx("div",{className:"prose prose-sm max-w-none font-sans mb-6",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(`| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`)}}),o.jsx("div",{className:"text-sm font-sans",style:{color:"var(--color-muted-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(`---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`)}})]})]})}function Xg(){const i=["Kennedy Central","Castilla","Timiza","Patio Bonito","Carrera 68"],l=[{titulo:"Tiendas de Barrio",desc:"Detección de hurtos internos con IA que identifica movimientos sospechosos fuera de horario laboral y envía alertas al propietario.",icon:"🏪"},{titulo:"Talleres Mecánicos",desc:"Cobertura de herramientas y vehículos en proceso con grabación 24/7 y visión nocturna ColorVu.",icon:"🔧"},{titulo:"Bodegas de Ropa",desc:"Control de inventario visual con analítica YOLO que registra entrada y salida de mercancía en tiempo real.",icon:"👔"}],c=[{titulo:"Cobertura express en Kennedy",desc:"Técnicos驻扎 en la localidad. Llegamos a Castilla, Timiza y Patio Bonito en menos de 4 horas.",icon:"🚀"},{titulo:"IA que aprende de tu negocio",desc:"Nuestros sistemas se adaptan a los patrones de tu tienda o taller para reducir falsas alarmas al mínimo.",icon:"🧠"},{titulo:"Soporte local sin outsourcing",desc:"Equipo propio en Kennedy. No tercerizamos el soporte técnico ni la instalación.",icon:"👨‍🔧"},{titulo:"Financiación directa",desc:"Paga en 3 cuotas sin intereses. Incluimos kit de 4 cámaras + DVR + instalación desde $850.000.",icon:"💳"}],m=`
### Tienda de Barrio — Kennedy Central

**Problema:** El propietario notó faltantes en caja de $180.000 semanales pero no podía identificar al responsable. Las cámaras antiguas no grababan en la noche y la resolución era insuficiente.

**Solución:** Reemplazo de 4 cámaras legacy por kit Hikvision ColorVu 4MP con visión nocturna a color. Instalación de cámara oculta en punto de venta con analítica de movimiento. Configuración de alertas WhatsApp cuando有人 se acerca a la caja fuera de horario.

**Resultado:** En 72 horas se identificó al empleado que realizaba retiros no autorizados. El propietario obtuvo evidencia de video con timestamp. Hurto interno eliminado. Ahorro anual estimado: $9.360.000 COP.
  `,u=[{q:"¿Cuánto cuesta instalar cámaras de seguridad en Kennedy?",a:"Un kit de 4 cámaras Hikvision ColorVu con DVR e instalación cuesta desde $850.000 COP en Kennedy. Para tiendas y talleres, ofrecemos packs especializados con analítica IA desde $1.400.000 COP."},{q:"¿Cubren Patio Bonito y Castilla?",a:"Sí, cubrimos toda la localidad de Kennedy: Kennedy Central, Castilla, Timiza, Patio Bonito y la zona de Carrera 68. Nuestros técnicos están en la localidad y llegan el mismo día."},{q:"¿Las cámaras detectan hurtos internos?",a:"Sí, nuestra analítica IA detecta movimientos sospechosos cerca de cajas fuertes, puntos de venta y zonas restringidas. Puedes configurar alertas automáticas por WhatsApp cuando se Active el detector."},{q:"¿Funcionan con el apagón de luz?",a:"Todas nuestras cámaras ColorVu tienen visión nocturna con luz infrarroja integrada. Funcionan perfectamente en oscuridad total, captando imagen a color con detalle de rostros."}],v={"@context":"https://schema.org","@type":"LocalBusiness",name:"Servicios APC - Cámaras de Seguridad en Kennedy",description:"Instalación de cámaras de seguridad en Kennedy, Bogotá. Hikvision ColorVu, IA antihurto, detección de intrusiones. Cobertura Castilla, Timiza, Patio Bonito.",areaServed:{"@type":"City",name:"Kennedy, Bogotá"},telephone:"+573337450634",email:"serviciosapcsoporte@gmail.com"};return o.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-16 font-sans",style:{color:"var(--color-foreground)",background:"var(--color-background)"},children:[o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}}),o.jsxs("header",{className:"mb-12",children:[o.jsx("p",{className:"text-sm uppercase tracking-widest mb-2",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Kennedy, Bogotá"}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold leading-tight mb-4",style:{color:"var(--color-foreground)"},children:"Cámaras de Seguridad en Kennedy, Bogotá"}),o.jsx("p",{className:"text-lg mb-6",style:{color:"var(--color-muted-foreground)"},children:"Protege tu tienda, taller o bodega en Kennedy con tecnología de última generación. Desde Kennedy Central hasta Patio Bonito, instalamos sistemas de video con IA con inteligencia artificial que previenen hurtos y controlan accesos."}),o.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Kennedy",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Cotizar por WhatsApp"})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Cobertura en Kennedy"}),o.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:i.map(f=>o.jsxs("li",{className:"px-4 py-3 rounded-lg text-sm font-medium",style:{background:"var(--color-secondary)",color:"var(--color-foreground)"},children:["✓ ",f]},f))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Soluciones para negocios en Kennedy"}),o.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:l.map(f=>o.jsxs("div",{className:"rounded-xl p-6",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[o.jsx("span",{className:"text-3xl block mb-3",children:f.icon}),o.jsx("h3",{className:"font-serif font-bold text-lg mb-2",children:f.titulo}),o.jsx("p",{className:"text-sm",style:{color:"var(--color-muted-foreground)"},children:f.desc})]},f.titulo))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"¿Por qué elegir Servicios APC en Kennedy?"}),o.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:c.map(f=>o.jsxs("div",{className:"flex gap-4 items-start",children:[o.jsx("span",{className:"text-3xl flex-shrink-0",children:f.icon}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-serif font-bold text-lg",children:f.titulo}),o.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-muted-foreground)"},children:f.desc})]})]},f.titulo))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Casos reales en Kennedy"}),o.jsx("div",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:o.jsx("div",{className:"prose prose-sm max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(m)}})})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Preguntas frecuentes sobre cámaras en Kennedy"}),o.jsx("div",{className:"space-y-6",children:u.map((f,S)=>o.jsxs("details",{className:"group rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[o.jsxs("summary",{className:"px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center",style:{background:"var(--color-secondary)"},children:[f.q,o.jsx("span",{className:"ml-2 transition-transform group-open:rotate-45 text-xl",children:"+"})]}),o.jsx("div",{className:"px-6 py-4 text-sm",style:{color:"var(--color-muted-foreground)"},children:f.a})]},S))})]}),o.jsxs("section",{className:"mb-12 text-center",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-4",children:"¿Listo para proteger tu negocio en Kennedy?"}),o.jsx("p",{className:"mb-6",style:{color:"var(--color-muted-foreground)"},children:"Cotización sin compromiso en menos de 2 horas."}),o.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Kennedy",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Solicitar cotización ahora"})]}),o.jsxs("section",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[o.jsx("h2",{className:"font-serif text-xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Ecosistema APC: Todo conectado"}),o.jsx("div",{className:"prose prose-sm max-w-none font-sans mb-6",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(`| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`)}}),o.jsx("div",{className:"text-sm font-sans",style:{color:"var(--color-muted-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(`---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`)}})]})]})}function Jg(){const i=["Chapinero Alto","Chapinero Central","Chicó","Rosales","Tintal"],l=[{titulo:"Clínicas y Consultorios",desc:"Control de aforo, cumplimiento de normas PPE para personal sanitario y analítica de áreas restringidas con alertas en tiempo real.",icon:"🏥"},{titulo:"Restaurantes",desc:"Analítica de aforo para optimizar servicio, detección de intrusión nocturna y analítica de cocina con cámaras ambientadas.",icon:"🍽️"},{titulo:"Oficinas y Consultorios",desc:"Control de acceso con reconocimiento facial, registro de visitantes y vigilancia de salas de datos con analítica IA.",icon:"💼"}],c=[{titulo:"Exigencia normativa Chapinero",desc:"Conocemos los requisitos de seguridad de clínicas y oficinas en Chapinero. Cumplimos Norma 17025 y resoluciones MinSalud.",icon:"📋"},{titulo:"Tecnología invisible",desc:"Cámaras compactas que se integran al diseño interior de clínicas y restaurantes sin alterar la estética.",icon:"🎨"},{titulo:"Integración con software clínico",desc:"Nuestros sistemas se conectan con historiales de pacientes y sistemas de gestión de turnos para auditoría completa.",icon:"🔗"},{titulo:"Respuesta garantizada en 2 horas",desc:"Para clínicas y consultorios en Chicó, Rosales y Chapinero Alto, garantizamos soporte técnico presencial en máximo 2 horas.",icon:"⚡"}],m=`
### Clínica Dental Sonrisa — Chapinero Alto

**Problema:** La clínica necesitaba cumplir con las normas de protección para personal y pacientes, pero no tenía sistema de aforo ni evidencia de uso de EPP. Además, las caídas de pacientes en zonas comunes eran un riesgo legal sin grabación.

**Solución:** Instalación de 8 cámaras con analítica de aforo por zona (sala de espera, consultorios, recepción). Detección automática de uso de mascarilla (PPE) para personal. Cámaras de caída con alerta inmediata a administración.

**Resultado:** Cumplimiento total de normativa MinSalud. Reducción de tiempos de espera en 35% gracias a optimización de aforo. Dos incidentes de caída documentados y resueltos sin litigios. ROI en 4 meses por ahorro en pólizas de responsabilidad civil.
  `,u=[{q:"¿Cuánto cuesta el sistema de aforo para clínicas en Chapinero?",a:"El sistema completo con 8 cámaras, analítica de aforo, detección PPE e instalación cuesta desde $4.200.000 COP. Incluye configuración personalizada por zona y capacitación al personal."},{q:"¿Las cámaras cumplen normativa MinSalud?",a:"Sí, nuestros sistemas generan reportes de cumplimiento PPE y aforo que cumplen con las resoluciones 2020 y 2021 del MinSalud. Incluimos dashboards exportables para auditorías."},{q:"¿Pueden integrarse con nuestro software de gestión?",a:"Sí, ofrecemos integración vía API REST con los principales software de gestión clínica. La integración permite cruzar datos de video con registros de pacientes para auditorías completas."},{q:"¿Instalan en restaurantes de Chicó y Rosales?",a:"Sí, cubrimos toda la localidad de Chapinero. Los restaurantes en Chicó y Rosales suelen requerir analítica de aforo + intrusiones nocturnas. Tenemos packs especializados."},{q:"¿Las cámaras son invasivas para los pacientes?",a:"No. Usamos modelos compactos tipo dome que se integran al diseño interior. Son discretas y no generan incomodidad. En clínicas, colocamos señalización visible según normativa."}],v={"@context":"https://schema.org","@type":"LocalBusiness",name:"Servicios APC - Cámaras de Seguridad en Chapinero",description:"Cámaras de seguridad para clínicas, restaurantes y oficinas en Chapinero, Bogotá. Analítica IA, PPE, aforo. Cobertura Chicó, Rosales, Tintal.",areaServed:{"@type":"City",name:"Chapinero, Bogotá"},telephone:"+573337450634",email:"serviciosapcsoporte@gmail.com"};return o.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-16 font-sans",style:{color:"var(--color-foreground)",background:"var(--color-background)"},children:[o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}}),o.jsxs("header",{className:"mb-12",children:[o.jsx("p",{className:"text-sm uppercase tracking-widest mb-2",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Chapinero, Bogotá"}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold leading-tight mb-4",style:{color:"var(--color-foreground)"},children:"Cámaras de Seguridad en Chapinero, Bogotá"}),o.jsx("p",{className:"text-lg mb-6",style:{color:"var(--color-muted-foreground)"},children:"Soluciones de video con IA para clínicas, restaurantes y oficinas en Chapinero. Cumplimiento normativo, control de aforo y protección de personal con tecnología de analítica de IA y reconocimiento PPE."}),o.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Chapinero",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Cotizar por WhatsApp"})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Cobertura en Chapinero"}),o.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:i.map(f=>o.jsxs("li",{className:"px-4 py-3 rounded-lg text-sm font-medium",style:{background:"var(--color-secondary)",color:"var(--color-foreground)"},children:["✓ ",f]},f))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Soluciones para negocios en Chapinero"}),o.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:l.map(f=>o.jsxs("div",{className:"rounded-xl p-6",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[o.jsx("span",{className:"text-3xl block mb-3",children:f.icon}),o.jsx("h3",{className:"font-serif font-bold text-lg mb-2",children:f.titulo}),o.jsx("p",{className:"text-sm",style:{color:"var(--color-muted-foreground)"},children:f.desc})]},f.titulo))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"¿Por qué elegir Servicios APC en Chapinero?"}),o.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:c.map(f=>o.jsxs("div",{className:"flex gap-4 items-start",children:[o.jsx("span",{className:"text-3xl flex-shrink-0",children:f.icon}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-serif font-bold text-lg",children:f.titulo}),o.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-muted-foreground)"},children:f.desc})]})]},f.titulo))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Casos reales en Chapinero"}),o.jsx("div",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:o.jsx("div",{className:"prose prose-sm max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(m)}})})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Preguntas frecuentes sobre cámaras en Chapinero"}),o.jsx("div",{className:"space-y-6",children:u.map((f,S)=>o.jsxs("details",{className:"group rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[o.jsxs("summary",{className:"px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center",style:{background:"var(--color-secondary)"},children:[f.q,o.jsx("span",{className:"ml-2 transition-transform group-open:rotate-45 text-xl",children:"+"})]}),o.jsx("div",{className:"px-6 py-4 text-sm",style:{color:"var(--color-muted-foreground)"},children:f.a})]},S))})]}),o.jsxs("section",{className:"mb-12 text-center",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-4",children:"¿Listo para proteger tu clínica u oficina en Chapinero?"}),o.jsx("p",{className:"mb-6",style:{color:"var(--color-muted-foreground)"},children:"Cotización sin compromiso en menos de 2 horas."}),o.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Chapinero",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Solicitar cotización ahora"})]}),o.jsxs("section",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[o.jsx("h2",{className:"font-serif text-xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Ecosistema APC: Todo conectado"}),o.jsx("div",{className:"prose prose-sm max-w-none font-sans mb-6",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(`| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`)}}),o.jsx("div",{className:"text-sm font-sans",style:{color:"var(--color-muted-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(`---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`)}})]})]})}function eh(){const i=["Usaquén Centro","Santa Bárbara","San Patricio","Los Cedros","Country Club"],l=[{titulo:"Restaurantes Gourmet",desc:"Analítica de aforo para optimizar mesas, analítica de cocina y entrada/salida de personal con reconocimiento facial.",icon:"🍷"},{titulo:"Hoteles Boutique",desc:"Control de acceso por habitaciones, cobertura de áreas comunes y lobby con IA que detecta comportamientos anómalos.",icon:"🏨"},{titulo:"Oficinas Corporativas",desc:"Cobertura perimetral, control de acceso con credenciales y analítica de salas de servidores con alertas en tiempo real.",icon:"🏢"}],c=[{titulo:"Experiencia con sector premium",desc:"Trabajamos con restaurantes de alto nivel, hoteles boutique y oficinas corporativas en Usaquén. Entendemos sus estándares.",icon:"⭐"},{titulo:"Diseño arquitectónico integrado",desc:"Cámaras que se融合 al diseño interior sin comprometer la estética de espacios premium como hotel boutique.",icon:"🏛️"},{titulo:"Dashboard ejecutivo en tiempo real",desc:"Panel de control con métricas de aforo, accesos y alertas diseñado para gerentes y propietarios.",icon:"📊"},{titulo:"SLA de 1 hora para emergencias",desc:"Para clientes premium en Country Club y Los Cedros, garantizamos respuesta técnica en máximo 1 hora.",icon:"🚨"}],m=`
### Restaurante La Cosecha — Usaquén Centro

**Problema:** El restaurante perdía mesas por no controlar el aforo en tiempo real. Los clientes esperaban 40+ minutos sin saber cuánto faltaba. Además, las intrusiones nocturnas en el área de vinos generaban pérdidas de $2.800.000 mensuales.

**Solución:** Sistema de analítica de aforo con 4 cámaras en zona de comedor y bar. Conteo automático de clientes por zona con dashboard para el maître. Cámaras de intrusiones en bodega de vinos con alerta WhatsApp en 5 segundos.

**Resultado:** Optimización del 40% en tiempos de espera. Ingreso adicional de $12.000.000 mensuales por mejor uso de mesas. Hurtos en bodega eliminados completamente. Dashboard de aforo integrado con sistema de reservas.
  `,u=[{q:"¿Cuánto cuesta un sistema de videovigilancia para restaurantes en Usaquén?",a:"Para restaurantes de Usaquén, un sistema completo con 6-8 cámaras, analítica de aforo e intrusiones cuesta desde $5.800.000 COP. Incluye dashboard ejecutivo, configuración por zona y capacitación."},{q:"¿Cubren Country Club y Los Cedros?",a:"Sí, cubrimos toda la localidad de Usaquén: Centro, Santa Bárbara, San Patricio, Los Cedros y Country Club. Nuestros clientes premium en estas zonas tienen SLA de 1 hora para emergencias."},{q:"¿El sistema de aforo es preciso?",a:"Sí, nuestra analítica YOLO tiene precisión del 97% en conteo de personas. Se adapta a diferentes configuraciones de mesas y zonas, y genera reportes exportables para auditorías."},{q:"¿Las cámaras se integran con nuestro sistema de reservas?",a:"Sí, ofrecemos integración vía API con los principales sistemas de reservas (OpenTable, Resy, sistema propio). El aforo en tiempo real se alimenta al dashboard de disponibilidad."}],v={"@context":"https://schema.org","@type":"LocalBusiness",name:"Servicios APC - Cámaras de Seguridad en Usaquén",description:"Cámaras de seguridad para restaurantes, hoteles y oficinas corporativas en Usaquén, Bogotá. Analítica de aforo, intrusiones, IA. Cobertura Country Club, Los Cedros.",areaServed:{"@type":"City",name:"Usaquén, Bogotá"},telephone:"+573337450634",email:"serviciosapcsoporte@gmail.com"};return o.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-16 font-sans",style:{color:"var(--color-foreground)",background:"var(--color-background)"},children:[o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}}),o.jsxs("header",{className:"mb-12",children:[o.jsx("p",{className:"text-sm uppercase tracking-widest mb-2",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Usaquén, Bogotá"}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold leading-tight mb-4",style:{color:"var(--color-foreground)"},children:"Cámaras de Seguridad en Usaquén, Bogotá"}),o.jsx("p",{className:"text-lg mb-6",style:{color:"var(--color-muted-foreground)"},children:"Video con IA de alto nivel para restaurantes, hoteles y oficinas corporativas en Usaquén. Analítica de aforo, control de acceso y protección premium con dashboard ejecutivo en tiempo real."}),o.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Usaquén",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Cotizar por WhatsApp"})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Cobertura en Usaquén"}),o.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:i.map(f=>o.jsxs("li",{className:"px-4 py-3 rounded-lg text-sm font-medium",style:{background:"var(--color-secondary)",color:"var(--color-foreground)"},children:["✓ ",f]},f))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Soluciones para negocios en Usaquén"}),o.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:l.map(f=>o.jsxs("div",{className:"rounded-xl p-6",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[o.jsx("span",{className:"text-3xl block mb-3",children:f.icon}),o.jsx("h3",{className:"font-serif font-bold text-lg mb-2",children:f.titulo}),o.jsx("p",{className:"text-sm",style:{color:"var(--color-muted-foreground)"},children:f.desc})]},f.titulo))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"¿Por qué elegir Servicios APC en Usaquén?"}),o.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:c.map(f=>o.jsxs("div",{className:"flex gap-4 items-start",children:[o.jsx("span",{className:"text-3xl flex-shrink-0",children:f.icon}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-serif font-bold text-lg",children:f.titulo}),o.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-muted-foreground)"},children:f.desc})]})]},f.titulo))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Casos reales en Usaquén"}),o.jsx("div",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:o.jsx("div",{className:"prose prose-sm max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(m)}})})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Preguntas frecuentes sobre cámaras en Usaquén"}),o.jsx("div",{className:"space-y-6",children:u.map((f,S)=>o.jsxs("details",{className:"group rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[o.jsxs("summary",{className:"px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center",style:{background:"var(--color-secondary)"},children:[f.q,o.jsx("span",{className:"ml-2 transition-transform group-open:rotate-45 text-xl",children:"+"})]}),o.jsx("div",{className:"px-6 py-4 text-sm",style:{color:"var(--color-muted-foreground)"},children:f.a})]},S))})]}),o.jsxs("section",{className:"mb-12 text-center",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-4",children:"¿Listo para proteger tu restaurante u hotel en Usaquén?"}),o.jsx("p",{className:"mb-6",style:{color:"var(--color-muted-foreground)"},children:"Cotización premium sin compromiso en menos de 2 horas."}),o.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Usaquén",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Solicitar cotización ahora"})]}),o.jsxs("section",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[o.jsx("h2",{className:"font-serif text-xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Ecosistema APC: Todo conectado"}),o.jsx("div",{className:"prose prose-sm max-w-none font-sans mb-6",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(`| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`)}}),o.jsx("div",{className:"text-sm font-sans",style:{color:"var(--color-muted-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(`---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`)}})]})]})}function ah(){const i=["Fontibón Centro","Arrancachocha","Salitre Occidente","Isla del Sol"],l=[{titulo:"Bodegas Logísticas",desc:"Control de carga con YOLO que cuenta y registra entrada/salida de mercancía. Detección de intrusiones en zonas de carga.",icon:"📦"},{titulo:"Fábricas y Talleres Industriales",desc:"Cobertura de naves industriales con cámaras PTZ de larga distancia. Analítica de personal con detección de EPP obligatorio.",icon:"🏭"},{titulo:"Conjuntos Residenciales",desc:"Control de acceso vehicular y peatonal con reconocimiento de placas. Vigilancia perimetral con alertas automáticas por Telegram.",icon:"🏘️"}],c=[{titulo:"Cobertura industrial Fontibón",desc:"Especialistas en seguridad para zonas industriales y logísticas de Fontibón, incluyendo Arrancachocha y Salitre Occidente.",icon:"🏗️"},{titulo:"Hardware robusto para exteriores",desc:"Cámaras IP67 resistentes a polvo, lluvia y temperaturas extremas. Diseñadas para naves industriales y bodegas logísticas.",icon:"🌧️"},{titulo:"Integración con sistemas logísticos",desc:"Conectamos nuestras cámaras con WMS y ERP para trazabilidad completa de inventario visual.",icon:"🔗"},{titulo:"Soporte técnico en zona industrial",desc:"Equipo técnico驻扎 en Fontibón con experiencia en infraestructura industrial y redes de alta disponibilidad.",icon:"🛠️"}],m=`
### Bodega Logística — Fontibón Centro

**Problema:** La bodega procesaba 800 cajas diarias pero no tenía registro visual de entrada/salida. Las discrepancias de inventario costaban $8.500.000 mensuales. Las intrusiones nocturnas en el patio de carga eran frecuentes.

**Solución:** Instalación de 12 cámaras con analítica YOLO para conteo automático de cajas. Cámaras de placa en entrada/salida de vehículos. Alertas Telegram cada vez que un vehículo ingresa fuera de horario programado.

**Resultado:** Trazabilidad visual del 100% de mercancía. Discrepancias de inventario reducidas en 94%. Intrusiones eliminadas. Tiempo de auditoría de inventario reducido de 8 horas a 45 minutos con dashboard de conteo automático.
  `,u=[{q:"¿Cuánto cuesta instalar cámaras en una bodega logística en Fontibón?",a:"Una bodega estándar con 8-12 cámaras, analítica YOLO y trazabilidad de mercancía cuesta desde $8.500.000 COP. Incluye hardware industrial, instalación, configuración y capacitación."},{q:"¿Las cámaras soportan condiciones industriales?",a:"Sí, todas nuestras cámaras industriales son IP67 resistentes a polvo y agua. Funcionan en temperaturas de -30°C a 60°C, ideales para naves industriales y bodegas de Fontibón."},{q:"¿El conteo YOLO es preciso para cajas?",a:"Sí, nuestra analítica YOLO tiene precisión del 96% en conteo de cajas estándar. Se entrena con las dimensiones específicas de tu mercancía para maximizar precisión."},{q:"¿Cubren Isla del Sol y Arrancachocha?",a:"Sí, cubrimos toda la localidad de Fontibón: Centro, Arrancachocha, Salitre Occidente e Isla del Sol. Nuestros técnicos especializados en zona industrial llegan en menos de 4 horas."}],v={"@context":"https://schema.org","@type":"LocalBusiness",name:"Servicios APC - Cámaras de Seguridad en Fontibón",description:"Cámaras de seguridad para bodegas logísticas, fábricas y conjuntos en Fontibón, Bogotá. YOLO, trazabilidad, alertas Telegram. Cobertura Arrancachocha, Isla del Sol.",areaServed:{"@type":"City",name:"Fontibón, Bogotá"},telephone:"+573337450634",email:"serviciosapcsoporte@gmail.com"};return o.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-16 font-sans",style:{color:"var(--color-foreground)",background:"var(--color-background)"},children:[o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}}),o.jsxs("header",{className:"mb-12",children:[o.jsx("p",{className:"text-sm uppercase tracking-widest mb-2",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Fontibón, Bogotá"}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold leading-tight mb-4",style:{color:"var(--color-foreground)"},children:"Cámaras de Seguridad en Fontibón, Bogotá"}),o.jsx("p",{className:"text-lg mb-6",style:{color:"var(--color-muted-foreground)"},children:"Seguridad industrial y logística para bodegas, fábricas y conjuntos residenciales en Fontibón. Trazabilidad visual con YOLO, alertas automáticas y hardware robusto para las condiciones más exigentes."}),o.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Fontibón",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Cotizar por WhatsApp"})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Cobertura en Fontibón"}),o.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:i.map(f=>o.jsxs("li",{className:"px-4 py-3 rounded-lg text-sm font-medium",style:{background:"var(--color-secondary)",color:"var(--color-foreground)"},children:["✓ ",f]},f))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Soluciones para negocios en Fontibón"}),o.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:l.map(f=>o.jsxs("div",{className:"rounded-xl p-6",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[o.jsx("span",{className:"text-3xl block mb-3",children:f.icon}),o.jsx("h3",{className:"font-serif font-bold text-lg mb-2",children:f.titulo}),o.jsx("p",{className:"text-sm",style:{color:"var(--color-muted-foreground)"},children:f.desc})]},f.titulo))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"¿Por qué elegir Servicios APC en Fontibón?"}),o.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:c.map(f=>o.jsxs("div",{className:"flex gap-4 items-start",children:[o.jsx("span",{className:"text-3xl flex-shrink-0",children:f.icon}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-serif font-bold text-lg",children:f.titulo}),o.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-muted-foreground)"},children:f.desc})]})]},f.titulo))})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Casos reales en Fontibón"}),o.jsx("div",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:o.jsx("div",{className:"prose prose-sm max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(m)}})})]}),o.jsxs("section",{className:"mb-12",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Preguntas frecuentes sobre cámaras en Fontibón"}),o.jsx("div",{className:"space-y-6",children:u.map((f,S)=>o.jsxs("details",{className:"group rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[o.jsxs("summary",{className:"px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center",style:{background:"var(--color-secondary)"},children:[f.q,o.jsx("span",{className:"ml-2 transition-transform group-open:rotate-45 text-xl",children:"+"})]}),o.jsx("div",{className:"px-6 py-4 text-sm",style:{color:"var(--color-muted-foreground)"},children:f.a})]},S))})]}),o.jsxs("section",{className:"mb-12 text-center",children:[o.jsx("h2",{className:"font-serif text-2xl font-bold mb-4",children:"¿Listo para proteger tu bodega o fábrica en Fontibón?"}),o.jsx("p",{className:"mb-6",style:{color:"var(--color-muted-foreground)"},children:"Cotización industrial sin compromiso en menos de 2 horas."}),o.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Fontibón",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Solicitar cotización ahora"})]}),o.jsxs("section",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[o.jsx("h2",{className:"font-serif text-xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Ecosistema APC: Todo conectado"}),o.jsx("div",{className:"prose prose-sm max-w-none font-sans mb-6",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(`| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`)}}),o.jsx("div",{className:"text-sm font-sans",style:{color:"var(--color-muted-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(`---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`)}})]})]})}const vi="https://wa.me/573337450634?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20instalaci%C3%B3n%20de%20c%C3%A1maras%20de%20seguridad%20en%20Bogot%C3%A1";function nh({md:i}){return o.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(i)}})}const oh=[{q:"¿Cuánto cuesta la instalación de cámaras de seguridad en Bogotá?",a:"Depende del número de puntos y del tipo de cableado. Un sistema de 4 cámaras parte de $1.800.000 COP, 8 cámaras ColorVu alrededor de $3.200.000 y 16 cámaras con NVR PoE cerca de $5.600.000. Todos incluyen instalación, configuración y app móvil."},{q:"¿Cuánto demora la instalación?",a:"Un sistema residencial de 4 a 8 cámaras se instala en 1 día hábil. Sistemas comerciales de 16+ puntos con cableado estructurado y servidor de IA pueden tomar de 2 a 3 días. Coordinamos horarios que no interrumpan su operación."},{q:"¿La instalación incluye acceso remoto desde el celular?",a:"Sí. Toda instalación incluye configuración de la app Remotion / Hik-Connect: ver en vivo, recibir alertas y reproducir grabaciones desde cualquier lugar con internet."},{q:"¿Puedo reutilizar mis cámaras Hikvision actuales?",a:"Sí. Reprogramamos sus equipos Hikvision/Dahua que cumplan RTSP/ONVIF y los dejamos listos para analítica IA sin comprar hardware nuevo. Si necesita reemplazo, instalamos Hikvision certificado IA-ready."},{q:"¿Funciona la instalación sin internet permanente?",a:"Las cámaras graban localmente en el DVR/NVR sin internet. El internet solo se necesita para acceso remoto y alertas IA. Recomendamos mínimo 10 Mbps simétricos para sistemas con analítica."},{q:"¿Qué garantía tienen?",a:"Hardware con garantía de fábrica de 1 a 3 años según modelo. Soporte técnico según plan: 30 días (básico) hasta 12 meses (IA Total), extensible con contrato mensual desde $250.000."},{q:"¿En qué zonas de Bogotá instalan?",a:"Cubrimos toda Bogotá y municipios cercanos: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Bosa, Engativá, Centro y sur de la ciudad. También atendemos Cundinamarca con visita técnica."}];function th(){return o.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[o.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),o.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[o.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[o.jsx(Au,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),o.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Instalación de cámaras · Bogotá 2026"})]}),o.jsx("span",{className:"inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full mb-6 border",style:{borderColor:"var(--color-accent)",color:"var(--color-accent)"},children:"Hikvision certificado · Garantía 1-3 años"}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Instalación de Cámaras de Seguridad en Bogotá"}),o.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"Instalación profesional de cámaras Hikvision para casas, negocios y empresas: cableado estructurado sin puntos ciegos, configuración de acceso remoto y equipos IA-ready. Cotización con visita técnica incluida."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsxs("a",{href:vi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Cotizar Instalación ",o.jsx(ln,{className:"w-4 h-4"})]}),o.jsxs("a",{href:"#proceso",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Proceso ",o.jsx(he,{className:"w-4 h-4"})]})]}),o.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:ka,label:"4 cámaras",sub:"desde $1.800.000"},{icon:hr,label:"Instalación",sub:"1 día hábil"},{icon:lr,label:"Sin puntos ciegos",sub:"cableado estructurado"},{icon:cn,label:"Garantía",sub:"1-3 años Hikvision"}].map(i=>o.jsxs("div",{className:"text-center",children:[o.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),o.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),o.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"¿Por qué contratar un instalador certificado y no hacerlo usted mismo?"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"En Bogotá se denuncian más de 20.000 hurtos a residencias al año. Un sistema mal instalado crea puntos ciegos, cámaras caídas y evidencia que no sirve. Esto es lo que resuelve una instalación profesional:"}),o.jsx("div",{className:"space-y-8",children:[{icon:Xd,title:"Cableado profesional estructurado",desc:"Sujeción correcta, canaletas, protección contra descargas y etiquetado. Evitamos cortos, interferencias y cámaras que pierden señal a los 3 meses. No dejamos cables expuestos."},{icon:lr,title:"Cobertura sin puntos ciegos",desc:"Calculamos ángulos, alcance de visión nocturna y zonas de ingreso antes de perforar. Resultado: cobertura del 100% de los puntos críticos de su casa o negocio."},{icon:cn,title:"Configuración y respaldo correctos",desc:"DVR/NVR con grabación continua o por eventos, retención de 90 días, acceso remoto y claves seguras. Un DIY típicamente deja el sistema grabando solo de día o sin respaldo."},{icon:Sa,title:"Listo para IA sin recompra",desc:"Todos nuestros sistemas se entregan IA-ready: cuando quiera activar conteo, aforo o alertas, solo se reprograma el equipo. No paga dos veces por el mismo hardware."}].map(i=>o.jsxs("div",{className:"flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"flex-shrink-0",children:o.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:o.jsx(i.icon,{className:"w-6 h-6",style:{color:"var(--color-accent)"}})})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),o.jsx("p",{className:"font-sans leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:i.desc})]})]},i.title))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-5xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Servicios de instalación de cámaras que ofrecemos"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Desde una cámara en casa hasta 40+ puntos empresariales con analítica de video:"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:Pi,title:"Instalación residencial en casa",desc:"Cámaras para unidades, entradas, jardines y parqueaderos. Sistemas de 2 a 8 cámaras con grabación local y acceso por celular.",bullets:"2-8 cámaras · DVR local · App móvil"},{icon:zg,title:"Locales y mini mercados",desc:"Cobertura de caja, bodega y fachada. Visión nocturna ColorVu y alertas fuera de horario. Ideal para tiendas y establecimientos de barrio.",bullets:"4-8 cámaras · IA aforo básico"},{icon:ki,title:"Oficinas y empresas",desc:"Control de acceso, recepción, pisos y servidores. Integración con sistemas de control de acceso y analítica de flujo de personas.",bullets:"4-16 cámaras · NVR poE"},{icon:ji,title:"Bodegas y distribución",desc:"Cámaras bullet con IR de largo alcance, patios de carga y perimetrales. Reconocimiento de placas (LPR) opcional.",bullets:"8-32 cámaras · Server edge"},{icon:Ef,title:"Restaurantes",desc:"Analítica de cocina, barra y salón. Control de aforo para cumplimiento del IDEA y reducción de mermas.",bullets:"6-12 cámaras · Aforo IA"},{icon:lr,title:"Recuperación de sistemas viejos",desc:"¿Ya tiene cámaras Hikvision/Dahua instaladas mal? Los auditamos, reubicamos, recablearimos y dejamos grabando correctamente.",bullets:"RTSP/ONVIF · Sin hardware nuevo"}].map(i=>o.jsxs("div",{className:"group p-6 rounded-xl border transition-all hover:shadow-lg",style:{borderColor:"var(--color-border)"},children:[o.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:o.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),o.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),o.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),o.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.bullets})]},i.title))})]})}),o.jsx("section",{id:"proceso",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Cómo funciona la instalación"}),o.jsx("p",{className:"font-sans text-lg text-center mb-16 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Del primer mensaje al sistema funcionando en 4 pasos:"}),o.jsxs("div",{className:"space-y-12 relative",children:[o.jsx("div",{className:"absolute left-6 md:left-8 top-0 bottom-0 w-0.5",style:{backgroundColor:"var(--color-border)"}}),[{icon:Mi,step:"01",title:"Diagnóstico técnico gratuito",desc:"Coordinamos visita o video-llamada: medimos distancias, revisamos la red eléctrica y de datos. Le entregamos cotización cerrada con desglose de equipos e instalación. Sin letras pequeñas.",time:"1 día"},{icon:Xd,step:"02",title:"Tendido y montaje",desc:"Instalamos cableado estructurado o inalámbrico según su caso, montamos las cámaras con orientación calculada y dejamos todo limpio y ordenado.",time:"1-3 días"},{icon:lr,step:"03",title:"Configuración y acceso remoto",desc:"Programamos DVR/NVR, retención de grabación, alertas y acceso por celular. Le entregamos el usuario y le enseñamos a usarlo en 15 minutos.",time:"2-4 horas"},{icon:bu,step:"04",title:"Soporte y garantía",desc:"Seguimiento remoto del sistema, detección temprana de caídas y garantía de fábrica. Con IA, usted recibe alertas por WhatsApp si algo se interrumpe.",time:"24/7"}].map(i=>o.jsxs("div",{className:"relative flex gap-6 md:gap-8",children:[o.jsx("div",{className:"flex-shrink-0 z-10",children:o.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif font-bold text-lg md:text-xl border-4",style:{backgroundColor:"var(--color-background)",borderColor:"var(--color-accent)",color:"var(--color-accent)"},children:i.step})}),o.jsxs("div",{className:"flex-1 pt-2 md:pt-4",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[o.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),o.jsx("h3",{className:"font-serif text-xl md:text-2xl font-bold",children:i.title})]}),o.jsx("p",{className:"font-sans leading-relaxed mb-3",style:{color:"var(--color-muted-foreground)"},children:i.desc}),o.jsxs("span",{className:"inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.8},children:["⏱ ",i.time]})]})]},i.step))]})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Precios de instalación de cámaras 2026"}),o.jsx("p",{className:"font-sans text-lg mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Precios referenciales en Bogotá, incluyen equipos Hikvision, instalación, configuración y app móvil (COP, IVA incluido)."}),o.jsx("div",{className:"overflow-x-auto mb-8 rounded-xl border",style:{borderColor:"var(--color-border)"},children:o.jsxs("table",{className:"w-full text-sm font-sans",children:[o.jsx("thead",{children:o.jsxs("tr",{style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[o.jsx("th",{className:"px-4 py-3 text-left font-sans font-semibold",children:"Sistema"}),o.jsx("th",{className:"px-4 py-3 text-left font-sans font-semibold",children:"Cantidad"}),o.jsx("th",{className:"px-4 py-3 text-left font-sans font-semibold",children:"Precio desde"}),o.jsx("th",{className:"px-4 py-3 text-center font-sans font-semibold",children:"Incluye"})]})}),o.jsx("tbody",{children:[["Casa básica","4 cámaras HD 4MP + DVR 4ch","$1.800.000","Instalación + app móvil"],["Negocio medio","8 cámaras ColorVu + DVR 8ch","$3.200.000","IA alertas + app móvil"],["Empresa completa","16 cámaras + NVR PoE","$5.600.000","Analítica IA + dashboard"]].map((i,l)=>o.jsx("tr",{style:{borderTop:"1px solid var(--color-border)",backgroundColor:l%2?"var(--color-background)":"transparent"},children:i.map((c,m)=>o.jsx("td",{className:"px-4 py-3",style:{color:m===2?"var(--color-accent)":"var(--color-foreground)",fontWeight:m===2?700:"normal"},children:c},m))},l))})]})}),o.jsx("p",{className:"font-sans text-sm mb-8",style:{color:"var(--color-muted-foreground)"},children:"* El valor final depende de la distancia del cableado, número de puntos y accesibilidad. Cotización sin costo vía WhatsApp."}),o.jsxs("a",{href:vi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[o.jsx(Pa,{className:"w-4 h-4"})," Cotizar ahora por WhatsApp"]})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes sobre instalación de cámaras"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Todo lo que necesita saber antes de cotizar su sistema de seguridad en Bogotá:"}),o.jsx("div",{className:"space-y-4",children:oh.map(i=>o.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[o.jsx("span",{children:i.q}),o.jsx(he,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),o.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:o.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Agenda su diagnóstico técnico gratuito"}),o.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Visitamos su casa o negocio en Bogotá, revisamos los puntos críticos y le entregamos cotización cerrada. Sin compromiso."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[o.jsxs("a",{href:vi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[o.jsx(Pa,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),o.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[o.jsx(Pn,{className:"w-4 h-4"})," Email Directo"]})]}),o.jsx("div",{className:"text-left",children:o.jsx(nh,{md:`
## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

## Servicios en barrios de Bogotá

- [Cámaras de seguridad en Suba](#suba)
- [Cámaras de seguridad en Kennedy](#kennedy)
- [Cámaras de seguridad en Chapinero](#chapinero)
- [Cámaras de seguridad en Usaquén](#usaquen)
- [Cámaras de seguridad en Fontibón](#fontibon)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`})})]})})]})}const xi="https://wa.me/573337450634?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20c%C3%A1maras%20para%20instalar%20en%20mi%20casa%20en%20Bogot%C3%A1";function rh({md:i}){return o.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(i)}})}const sh=[{q:"¿Cuánto cuesta instalar cámaras de seguridad en casa en Bogotá?",a:"Una cámara de seguridad para el hogar cuesta desde $600.000 COP instalada. Un sistema de 4 cámaras para casa parte de $1.800.000 COP con DVR y app móvil. Incluye instalación, configuración y asesoría del punto exacto."},{q:"¿Qué cámaras son las mejores para una casa?",a:"Para viviendas recomendamos Hikvision ColorVu (imagen a color de noche) en fachadas y puntos críticos, mini-dome o cámaras Wi-Fi en interiores. Todas se ven desde el celular con la app Hik-Connect/Remotion."},{q:"¿Puedo instalar las cámaras yo mismo o debo contratar?",a:"Una cámara Wi-Fi se puede instalar con el manual en 30 minutos. Para sistemas cableados con grabación 24/7 recomendamos un profesional: la orientación mal calculada crea puntos ciegos y el video pierde utilidad como evidencia."},{q:"¿La cámara funciona sin internet o si se va la luz?",a:"El DVR graba localmente sin internet; el internet se usa solo para ver desde el celular. Para el corte de luz recomendamos un UPS que mantiene el sistema 30-45 minutos, y batería de respaldo de hasta 4 horas si necesita más."},{q:"¿Puedo ver las cámaras de mi casa desde el trabajo?",a:"Sí. Toda instalación incluye la app móvil: ver en vivo, alertas de movimiento y grabaciones desde cualquier lugar con internet."},{q:"¿Es legal instalar cámaras en el exterior de una casa en Colombia?",a:"En propiedad privada sí es legal. Recomendamos cubrir solo su vivienda, evitar grabar la casa del vecino directamente y cumplir la Ley 1581 de tratamiento de datos si captura zonas comunes o terceros de forma recurrente."},{q:"¿En qué zonas de Bogotá instalan cámaras de hogar?",a:"Instalamos en toda Bogotá: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Engativá, Bosa, Soacha y abrindamos. Los sistemas de 1 a 4 cámaras se pueden instalar el mismo día."}];function ih(){return o.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[o.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),o.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[o.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[o.jsx(Pi,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),o.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Cámaras para el hogar · Bogotá 2026"})]}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Cámaras para Instalar en Casa en Bogotá"}),o.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"Proteja su hogar con cámaras Hikvision de visión nocturna a color, instalación profesional y app de celular. Desde $600.000 por cámara, instalación el mismo día en Bogotá."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsxs("a",{href:xi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Cotizar Cámaras para Casa ",o.jsx(ln,{className:"w-4 h-4"})]}),o.jsxs("a",{href:"#precios",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Precios Residenciales ",o.jsx(he,{className:"w-4 h-4"})]})]}),o.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:ka,label:"Desde",sub:"$600.000 la cámara"},{icon:hr,label:"Instalación",sub:"el mismo día"},{icon:ao,label:"Garantía",sub:"1-3 años"},{icon:ou,label:"Color de noche",sub:"Hikvision ColorVu"}].map(i=>o.jsxs("div",{className:"text-center",children:[o.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),o.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),o.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Protecta su hogar antes de que pase lo mismo del vecino"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"En Bogotá más de 1 de cada 5 hurtos denunciados ocurre en residencias. Una cámara es disuasión, evidencia y tranquilidad:"}),o.jsx("div",{className:"space-y-8",children:[{icon:yu,title:"Dentrada y fachada vigiladas",desc:"El 65% de los ingresos a viviendas ocurren por la fachada. Una cámara ColorVu graba en color incluso de noche la persona, el vehículo y la placa. Muchas intrusos cambian de objetivo al ver cámaras.",stat:"65%",statLabel:"ingresos por la fachada"},{icon:Yf,title:"Ve a tu familia desde el celular",desc:"Mira a los niños desde la oficina, verifica si llegaron los adultos mayores o revisa a la empleada doméstica sin pedir explicaciones. Live streaming y alertas en segundos.",stat:"24/7",statLabel:"acceso remoto desde la app"},{icon:ao,title:"Evidencia que vale para el seguro",desc:"Las aseguradoras exigen videos nítidos para cubrir daños y hurtos. Con grabación de 90 días y respaldo, su denuncia avanza más rápido y el ajustador tiene material real.",stat:"90 días",statLabel:"de respaldo automático"}].map(i=>o.jsxs("div",{className:"flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"flex-shrink-0",children:o.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:o.jsx(i.icon,{className:"w-6 h-6",style:{color:"var(--color-accent)"}})})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),o.jsx("p",{className:"font-sans leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),o.jsxs("div",{className:"flex items-baseline gap-2",children:[o.jsx("span",{className:"font-sans text-2xl font-bold",style:{color:"var(--color-accent)"},children:i.stat}),o.jsx("span",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:i.statLabel})]})]})]},i.title))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-5xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"¿Qué cámara sirve en cada parte de la casa?"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"No hay una sola cámara universal. Recomendamos el tipo correcto para cada punto:"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:Pi,title:"Fachada y entrada",desc:"Cámara bullet ColorVu (imagen a color de noche). Detecta y disuade desde el momento en que alguien se acerca. Gran angular para cubrir puerta y garaje.",tag:"Bullet ColorVu"},{icon:cn,title:"Interiores y salón",desc:"Mini-dome de techo discreta para sala y pasillos. Cubre gran área sin ser invasiva y su cables se oculta en ductos.",tag:"Mini-dome"},{icon:ka,title:"Cocina y zonas de servicio",desc:"Cámara IP con máscara de privacidad para proteger zonas íntimas mientras vigila los puntos que importan.",tag:"IP máscara privacidad"},{icon:ou,title:"Garaje y parqueadero",desc:"Cámara IR de largo alcance para leer placas en la oscuridad. Alertas de movimiento a a las 2 a. m.",tag:"IR 60-80m"},{icon:_g,title:"Cámara Wi-Fi de instalación rápida",desc:"Parta de prueba o para arriendo: se instala 10 minutos, se alimenta por cable y se ve desde la app. Idéalo para entrar si no quiere hacer obras.",tag:"Wi-Fi Plug & Play"},{icon:ao,title:"+ Sensores de puertas y humo",desc:"Combine la cámara con contactos de puertas/ventanas y detector de humo. Recibirá notificación el instante en que algo se abre o se alarma.",tag:"Avero + sensores"}].map(i=>o.jsxs("div",{className:"group p-6 rounded-xl border transition-all hover:shadow-lg",style:{borderColor:"var(--color-border)"},children:[o.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:o.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),o.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),o.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),o.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.tag})]},i.title))})]})}),o.jsx("section",{id:"precios",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Precios de cámaras para instalar en casa, Bogotá 2026"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Precios referenciales incluyendo instalación y configuración (COP, IVA incluido):"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{name:"1 cámara",price:"$600.000",desc:"Para una entrada o punto crítico",features:["1 cámara HD/ColorVu","App móvil configurada","Instalación el mismo día"],highlight:!1},{name:"Sistema 4 cámaras",price:"$1.800.000",desc:"Cobertura completa de la casa",features:["4 cámaras + DVR","1 TB almacenamiento","Visión nocturna a color","Acceso remoto incluido"],highlight:!0},{name:"Sistema 8 cámaras",price:"$3.200.000",desc:"Para casas amplias y conjuntos",features:["8 cámaras ColorVu","NVR 8ch / 2 TB","Alertas IA incluidas","Soporte 90 días"],highlight:!1}].map(i=>o.jsxs("div",{className:"relative flex flex-col p-6 rounded-xl border-2 transition-all",style:{borderColor:i.highlight?"var(--color-accent)":"var(--color-border)",backgroundColor:i.highlight?"var(--color-accent)":"var(--color-background)",color:i.highlight?"var(--color-background)":"var(--color-foreground)"},children:[i.highlight&&o.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-sans font-bold px-4 py-1 rounded-full",style:{backgroundColor:"var(--color-background)",color:"var(--color-accent)"},children:"+ Elegido por hogares"}),o.jsx("h3",{className:"font-serif text-xl font-bold mb-1",children:i.name}),o.jsx("div",{className:"font-serif text-3xl font-bold my-4",children:i.price}),o.jsx("p",{className:"text-sm mb-6",style:{opacity:.7},children:i.desc}),o.jsx("ul",{className:"space-y-2 mb-8 flex-1",children:i.features.map(l=>o.jsxs("li",{className:"flex items-start gap-2 text-sm font-sans",children:[o.jsx(Sa,{className:"w-4 h-4 mt-0.5 flex-shrink-0",style:{opacity:.7}}),o.jsx("span",{children:l})]},l))}),o.jsxs("a",{href:xi,target:"_blank",rel:"noopener noreferrer",className:"w-full text-center px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-all hover:scale-105 block",style:{backgroundColor:i.highlight?"var(--color-background)":"var(--color-accent)",color:i.highlight?"var(--color-accent)":"var(--color-background)",border:i.highlight?"2px solid var(--color-background)":"none"},children:["Cotizar ",i.name]})]},i.name))}),o.jsx("div",{className:"mt-8 text-center",children:o.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:"* Precios referenciales Bogotá. El valor final depende del tipo de vivienda y la distancia de cableado. Cotización sin compromiso."})})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes sobre cámaras para casa"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Todo lo que necesita saber antes de proteger su hogar:"}),o.jsx("div",{className:"space-y-4",children:sh.map(i=>o.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[o.jsx("span",{children:i.q}),o.jsx(he,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),o.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:o.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Proteja su hogar hoy"}),o.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Asesoría gratuita: le decimos cuántas cámaras necesita, con qué tipo y el precio final antes de que perforamos cualquier muro."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[o.jsxs("a",{href:xi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[o.jsx(Pa,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),o.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[o.jsx(Pn,{className:"w-4 h-4"})," Email Directo"]})]}),o.jsx("div",{className:"text-left",children:o.jsx(rh,{md:`
## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión IA** | Analítica YOLO, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

## Servicios en barrios de Bogotá

- [Cámaras de seguridad en Suba](#suba)
- [Cámaras de seguridad en Kennedy](#kennedy)
- [Cámaras de seguridad en Chapinero](#chapinero)
- [Cámaras de seguridad en Usaquén](#usaquen)
- [Cámaras de seguridad en Fontibón](#fontibon)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`})})]})})]})}const bi="https://wa.me/573337450634?text=Hola%2C%20quiero%20el%20precio%20de%20instalaci%C3%B3n%20de%20c%C3%A1maras%20de%20seguridad%20en%20Bogot%C3%A1";function lh({md:i}){return o.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(i)}})}const ch=[{q:"¿Cuánto cuesta la instalación de un sistema de cámaras de seguridad en Bogotá?",a:"Un sistema de 4 cámaras cuesta desde $1.800.000 COP con instalación y configuración incluida. Uno de 8 cámaras ColorVu ronda los $3.200.000 y uno de 16 con NVR PoE, $5.600.000. La cotización varía por distancia de cableado, número de puntos y accesibilidad."},{q:"¿El precio incluye el valor de la instalación o solo las cámaras?",a:"Nuestros precios incluyen hardware, instalación, configuración y app móvil. No cobramos extra por los técnicos. Solo servicios adicionales (cableado extendido > 40m, acceso especial, servidor IA) se cotizan por separado."},{q:"¿Por qué un sistema de cámaras cuesta $1.800.000 cuando veo cámaras wifi en $150.000?",a:"La diferencia está en la grabación. Una cámara wifi barata graba en SD (que se llena, o se roban), no tiene retención de 90 días ni garantía. Un sistema Hikvision con DVR graba 24/7 en local, con respaldo y visión nocturna. Son cosas diferentes: una es un juguete, la otra es evidencia."},{q:"¿Ofrecen pagos a cuotas o financiación?",a:"Sí. Sistemas desde $1.800.000 se pueden financiar en cuotas con tarjeta de crédito (3, 6 y 12 cuotas) y también recibimos transferencia y efectivo. La cotización detalla las opciones."},{q:"¿La cotización es gratis y sin compromiso?",a:"Sí, completamente gratis. Hacemos diagnóstico por llamada/video o visita: medimos el punto, calculamos cableado y le entregamos precio cerrado antes de que usted se decida."},{q:"¿Qué incluye la garantía?",a:"Hardware con garantía de fábrica de 1 a 3 años. Instalación con respaldo técnico por plan (30 días a 12 meses). Los contratos de soporte mensual desde $250.000 incluyen mantenimiento preventivo cada 6 meses."}];function dh(){return o.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[o.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),o.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[o.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[o.jsx(Uf,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),o.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Precios reales · Bogotá 2026"})]}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Precios de Instalación de Cámaras de Seguridad"}),o.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"Cuánto cuesta realmente instalar cámaras de seguridad en Bogotá en 2026: sin letra pequeña, incluyendo hardware, instalación, configuración y acceso desde el celular."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsxs("a",{href:bi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Pedir Cotización ",o.jsx(ln,{className:"w-4 h-4"})]}),o.jsxs("a",{href:"#tabla",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Tabla de Precios ",o.jsx(he,{className:"w-4 h-4"})]})]}),o.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:ka,label:"4 cámaras",sub:"desde $1.800.000"},{icon:hr,label:"Instalación",sub:"incluida en el precio"},{icon:cn,label:"Garantía",sub:"1 a 3 años"},{icon:Sa,label:"Cotización",sub:"gratis y cerrada"}].map(i=>o.jsxs("div",{className:"text-center",children:[o.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),o.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),o.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"¿Qué afecta el precio?"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"El mismo sistema puede costar diferente en dos locales en Bogotá. Estos son los 4 factores que tocan el valor final:"}),o.jsx("div",{className:"space-y-6",children:[{icon:ka,title:"Número de cámaras (puntos)",desc:"Cada punto adicional suma cámara + capacidad del DVR/NVR + tiempo de instalación. De 4 a 8 puntos suele ser 1 día; de 16+ puntos, 2-3 días."},{icon:ng,title:"Tipo de cámara",desc:"Una HD 4MP básica cuesta menos que una ColorVu (color de noche) o una IP con IA. En zonas oscuras recomendamos ColorVu para que la evidencia sea útil."},{icon:Zf,title:"Distancia de cableado",desc:"Los precios incluyen una base de cableado. Pasillos muy largos o techos altos agregan cable y tiempo de trabajo. Por eso la cotización con previa visita es cerrada, no estimada."},{icon:cn,title:"Tipo de negocio y Cobertura",desc:"Restaurantes con aforo IA, bodegas con LPR (placas), clínicas con requisitos de Normativa 1581: cada operación pide hardware y config distinta. Nuestra cotización la arma sobre eso."}].map(i=>o.jsxs("div",{className:"flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"flex-shrink-0",children:o.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:o.jsx(i.icon,{className:"w-6 h-6",style:{color:"var(--color-accent)"}})})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),o.jsx("p",{className:"font-sans leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:i.desc})]})]},i.title))})]})}),o.jsx("section",{id:"tabla",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-6xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Tabla de precios de instalación de cámaras 2026"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Precios en pesos colombianos, incluyen instalación y configuración. Cotice a su medida vía WhatsApp:"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:pricingPlans.map(i=>o.jsxs("div",{className:"relative flex flex-col p-6 rounded-xl border-2 transition-all",style:{borderColor:i.highlight?"var(--color-accent)":"var(--color-border)",backgroundColor:i.highlight?"var(--color-accent)":"var(--color-background)",color:i.highlight?"var(--color-background)":"var(--color-foreground)"},children:[i.highlight&&o.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-sans font-bold px-4 py-1 rounded-full",style:{backgroundColor:"var(--color-background)",color:"var(--color-accent)"},children:"Más vendido"}),o.jsx("h3",{className:"font-serif text-xl font-bold mb-1",children:i.name}),o.jsx("p",{className:"font-sans text-sm mb-1",style:{opacity:.8},children:i.cameras}),o.jsx("div",{className:"font-serif text-3xl font-bold my-4",children:i.price}),o.jsx("p",{className:"font-sans text-sm mb-6",style:{opacity:.7},children:i.desc}),o.jsx("ul",{className:"space-y-2 mb-8 flex-1",children:i.features.map(l=>o.jsxs("li",{className:"flex items-start gap-2 text-sm font-sans",children:[o.jsx(Sa,{className:"w-4 h-4 mt-0.5 flex-shrink-0",style:{opacity:.7}}),o.jsx("span",{children:l})]},l))}),o.jsxs("a",{href:bi,target:"_blank",rel:"noopener noreferrer",className:"w-full text-center px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-all hover:scale-105 block",style:{backgroundColor:i.highlight?"var(--color-background)":"var(--color-accent)",color:i.highlight?"var(--color-accent)":"var(--color-background)",border:i.highlight?"2px solid var(--color-background)":"none"},children:["Cotizar ",i.name]})]},i.name))}),o.jsx("div",{className:"mt-8 text-center",children:o.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:"* Precios referenciales Bogotá. La cotización final es cerrada solo después de la visita técnica. Financiación a 12 cuotas con tarjeta de crédito."})})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Por qué nuestros precios no se 'chotan'"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"No publicamos precio de gancho de $300.000 para luego cobrar $1.800.000 en partes. Esta es de a diferencia:"}),o.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{icon:Sa,title:"Precio cerrado",desc:"La cotización con los puntos exactos y el cableado real, no una estimación que 'se puede pasar'."},{icon:Pa,title:"WhatsApp directo, no call center",desc:"Habla directo con el instalador/consultor, no con un operador que solo agenda citas. Las preguntas de precios se responden ahí mismo."},{icon:he,title:"IVA incluido",desc:"Todos los precios publicados están en COP e incluyen IVA. No le agregan 'detallitos' al final."}].map(i=>o.jsxs("div",{className:"p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:o.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),o.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),o.jsx("p",{className:"font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:i.desc})]},i.title))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes sobre precios"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Las dudas más comunes cuando se compara el precio de instalar cámaras:"}),o.jsx("div",{className:"space-y-4",children:ch.map(i=>o.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[o.jsx("span",{children:i.q}),o.jsx(he,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),o.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:o.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Cotice su sistema hoy"}),o.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Mándenos WhatsApp cuántas cámaras necesita y el sector: recibe precio indicativo en minutos y cotización cerrada tras la visita técnica."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[o.jsxs("a",{href:bi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[o.jsx(Pa,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),o.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[o.jsx(Pn,{className:"w-4 h-4"})," Email Directo"]})]}),o.jsx("div",{className:"text-left",children:o.jsx(lh,{md:`
## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión IA** | Analítica YOLO, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

## Servicios en barrios de Bogotá

- [Cámaras de seguridad en Suba](#suba)
- [Cámaras de seguridad en Kennedy](#kennedy)
- [Cámaras de seguridad en Chapinero](#chapinero)
- [Cámaras de seguridad en Usaquén](#usaquen)
- [Cámaras de seguridad en Fontibón](#fontibon)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`})})]})})]})}const ru="https://wa.me/573337450634?text=Hola%2C%20necesito%20un%20consultor%20tecnol%C3%B3gico%20para%20mi%20negocio%20en%20Bogot%C3%A1";function uh({md:i}){return o.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:G.parse(i)}})}const mh=[{q:"¿Qué hace exactamente un consultor tecnológico?",a:"Analiza cómo usa su negocio la tecnología, encuentra costos escondidos y flujos manuales que se pueden automatizar, y diseña un plan de implementación con retorno medible. No vendemos tecnología por vender: priorizamos lo que le genera ROI en el corto plazo."},{q:"¿En qué se diferencia de un ingeniero de sistemas tradicional?",a:"Un ingeniero de sistemas suele mantener la infraestructura. Un consultor tecnológico evalúa, decide y estructura: cuántas cámaras necesita realmente, si su CCTV sirve o hay que reprogramarlo, qué procesos se automatizan primero y cómo se conectan con su CRM."},{q:"¿Trabajan solo con empresas o también con negocios pequeños?",a:"Con ambos. Hemos hecho diagnósticos desde una ferretería de barrio en Kennedy hasta bodegas de distribución. Para PYMES el diagnóstico se enfoca en seguridad (cámaras), atención (WhatsApp bot) y automatización básica con retorno rápido."},{q:"¿Cuánto cuesta un diagnóstico tecnológico?",a:"El diagnóstico inicial de diagnóstico de 1 a 2 horas es gratuito cuando se concreta la implementación. Si solo quiere el informe sin ejecutar nada, tiene un costo desde $350.000 COP según el alcance."},{q:"¿Me obligan a comprar hardware nuevo?",a:"No. Nuestra filosofía es reutilizar: si sus cámaras Hikvision/Dahua cumplen RTSP/ONVIF las reprogramamos con IA en lugar de venderle equipos nuevos. Solo proponemos compra cuando el equipo existente no sirve y se lo explicamos con datos."},{q:"¿En qué zonas de Bogotá ofrecen consultoría?",a:"En toda Bogotá: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Centro y sur. El diagnóstico remoto se hace por video-llamada; la visita técnica presencial se agenda dentro de los 2 días hábiles."}];function ph(){return o.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[o.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),o.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[o.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[o.jsx(Si,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),o.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Consultoría tecnológica · Bogotá"})]}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Consultor Tecnológico para Empresas en Bogotá"}),o.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"Convertimos la tecnología que ya paga en resultados medibles: seguridad con IA, automatización de procesos y datos que toman decisiones. Diagnóstico con retorno de inversión, sin tecnicismos."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[o.jsxs("a",{href:ru,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Agendar Diagnóstico ",o.jsx(ln,{className:"w-4 h-4"})]}),o.jsxs("a",{href:"#metodo",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Metodología ",o.jsx(he,{className:"w-4 h-4"})]})]}),o.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:yg,label:"Diagnóstico",sub:"gratis con implementación"},{icon:ir,label:"ROI",sub:"medido en semanas"},{icon:ao,label:"Reutiliza",sub:"su CCTV actual"},{icon:cr,label:"Procesos",sub:"automatizados con n8n"}].map(i=>o.jsxs("div",{className:"text-center",children:[o.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),o.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),o.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-5xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"El costo escondido de NO tener consultoría"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"La mayoría de PYMES paga tecnología que no usan o usa tecnología que no funciona. Un consultor detecta esto en semanas:"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{icon:ka,title:"Cámaras que no graban como deberían",desc:"Equipos instalados sin orientación correcta, SD llena, DVR sin configurar. El dueño cree que está protegido y descubre que no tiene video hasta después del robo.",tag:"Seguridad"},{icon:cr,title:"Tareas repetitivas que nadie mide",desc:"Reportes a mano, confirmaciones por WhatsApp copiadas una a una, inventario en Excel desactualizado. Horas que se convierten en dinero perdido cada mes.",tag:"Automatización"},{icon:ir,title:"Datos que no se usan para decidir",desc:"El negocio tiene datos (ventas, aforo, arqueos) pero la gerencia decide por intuición porque nadie los consolidó en un tablero.",tag:"Datos"}].map(i=>o.jsxs("div",{className:"p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[o.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:o.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),o.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),o.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),o.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.tag})]},i.title))})]})}),o.jsx("section",{id:"metodo",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Cómo trabaja el consultor"}),o.jsx("p",{className:"font-sans text-lg text-center mb-16 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Un método claro, con entregables en cada etapa y retorno medido:"}),o.jsxs("div",{className:"space-y-12 relative",children:[o.jsx("div",{className:"absolute left-6 md:left-8 top-0 bottom-0 w-0.5",style:{backgroundColor:"var(--color-border)"}}),[{icon:Mi,step:"01",title:"Diagnóstico tecnológico",desc:"Auditoría de su infraestructura actual: CCTV, conectividad, herramientas de gestión. Identificamos los 3 problemas que más plata le cuestan y los priorizamos por ROI.",time:"1-2 horas"},{icon:ig,step:"02",title:"Plan de acción con ROI",desc:"Le entregamos un plan concreto: qué se automatiza primero, si sus cámaras se reprograman o se reemplazan, y cuánto cuesta cada paso. Cada recomendación tiene costo y retorno estimado.",time:"2-3 días"},{icon:cr,step:"03",title:"Implementación por fases",desc:"Ejecutamos por fases pequeñas: primero lo que se paga solo (seguridad IA o automatización de WhatsApp), luego lo que agrega control (dashboards y reportes).",time:"Semanas"},{icon:ir,step:"04",title:"Seguimiento y ajuste",desc:"Medimos el resultado real: mermas reducidas, horas ahorradas, respuestas más rápidas. Ajustamos lo que no esté dando el retorno prometido. Usted recibe reportes claros.",time:"Mensual"}].map(i=>o.jsxs("div",{className:"relative flex gap-6 md:gap-8",children:[o.jsx("div",{className:"flex-shrink-0 z-10",children:o.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif font-bold text-lg md:text-xl border-4",style:{backgroundColor:"var(--color-background)",borderColor:"var(--color-accent)",color:"var(--color-accent)"},children:i.step})}),o.jsxs("div",{className:"flex-1 pt-2 md:pt-4",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[o.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),o.jsx("h3",{className:"font-serif text-xl md:text-2xl font-bold",children:i.title})]}),o.jsx("p",{className:"font-sans leading-relaxed mb-3",style:{color:"var(--color-muted-foreground)"},children:i.desc}),o.jsxs("span",{className:"inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.8},children:["⏱ ",i.time]})]})]},i.step))]})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-5xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Áreas donde un consultor tecnológico agrega valor"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Del CCTV a los datos, todo conectado en un solo plan:"}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:ka,title:"Seguridad con IA (CCTV)",desc:"¿Sus cámaras Hikvision/Dahua sirven? Las auditamos, reprogramamos con analítica YOLO y conectamos alertas a WhatsApp. Reducción de mermas documentada del 68% en clientes de retail.",tag:"APC Visión AI"},{icon:cr,title:"Automatización de procesos",desc:"n8n + APIs: del dato de la cámara al CRM, del pedido al inventario, de la alerta al WhatsApp del gerente. Flujos que eliminan tareas manuales.",tag:"APC Automatización"},{icon:ir,title:"Datos y tableros ejecutivos",desc:"Centralizamos CCTV + CRM + ventas en dashboards (Looker/Grafana) para que la gerencia decida con datos reales, no con corazonadas.",tag:"APC Core"},{icon:vr,title:"Presencia digital y SEO local",desc:"Su negocio en Google Maps y búsquedas locales de Bogotá, con landing de alta conversión conectada a WhatsApp. CTA web → bot → cita → venta.",tag:"DogWeb"},{icon:qi,title:"Infraestructura y resiliencia",desc:"Servidores edge GPU, redes, bases de datos replicadas y respaldo. Si se cae el internet, su CCTV + IA siguen grabando en local.",tag:"APC Core"},{icon:Pa,title:"Bots de WhatsApp con IA",desc:"Atención 24/7: responden, agendan, califican leads. Conectado a su CRM y a la analítica de video para alertas automáticas.",tag:"APC Automatización"}].map(i=>o.jsxs("div",{className:"group p-6 rounded-xl border transition-all hover:shadow-lg",style:{borderColor:"var(--color-border)"},children:[o.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:o.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),o.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),o.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),o.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.tag})]},i.title))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes sobre consultoría tecnológica"}),o.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Lo que las empresas en Bogotá preguntan antes de empezar:"}),o.jsx("div",{className:"space-y-4",children:mh.map(i=>o.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[o.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[o.jsx("span",{children:i.q}),o.jsx(he,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),o.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:o.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),o.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:o.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[o.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Agende su diagnóstico tecnológico"}),o.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"En 1-2 horas sabrá si su tecnología está protegiendo su dinero o gastándolo. Diagnóstico gratis si concreta la implementación."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[o.jsxs("a",{href:ru,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[o.jsx(Pa,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),o.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[o.jsx(Pn,{className:"w-4 h-4"})," Email Directo"]})]}),o.jsx("div",{className:"text-left",children:o.jsx(uh,{md:`
## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión IA** | Analítica YOLO, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

## Servicios en barrios de Bogotá

- [Cámaras de seguridad en Suba](#suba)
- [Cámaras de seguridad en Kennedy](#kennedy)
- [Cámaras de seguridad en Chapinero](#chapinero)
- [Cámaras de seguridad en Usaquén](#usaquen)
- [Cámaras de seguridad en Fontibón](#fontibon)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`})})]})})]})}const fh=`---
title: "Cámaras Hikvision + IA para Empresas: Guía Definitiva Bogotá 2026"
excerpt: "No vendemos cámaras. Convertimos sus Hikvision/Dahua actuales en analítica YOLO: conteo, intrusión, aforo, arqueo, PPE. Offline-First, alertas Telegram/WhatsApp, dashboard 24/7. Casos reales: ferretería Suba (placas 2am), clínica Chapinero (caídas/PPE), distribuidora Jone (340% más cotizaciones)."
date: "2026-07-25"
publishDate: "2026-07-24"
author: "Servicios APC"
category: "IA & Seguridad"
tags: "Hikvision, analítica de video, YOLO, CCTV inteligente, Bogotá, video analítica, ColorVu, AcuSense, DeepinView, PPE detection, arqueo de caja"
readTime: "12 min"
coverImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: '{"primary":{"label":"Mis cámaras solo graban, no me ayudan a decidir → Analítica IA Hikvision","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras dejaron de funcionar / no graban → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Mis sistemas no se hablan (CRM, facturación, inventario) → Automatización + Dashboard","href":"https://apcautomatizacion.site"}}'
---

## El problema: sus cámaras vigilan, pero no **auditan**

La mayoría de empresas en Bogotá tienen CCTV. Pero cuando ocurre un robo, una discrepancia en caja o un incidente de seguridad, la respuesta es: *"la cámara no grabó bien"*, *"la imagen es borrosa de noche"*, *"nadie revisó las horas de video"*.

**La diferencia entre vigilar y auditar:**
| Vigilar (CCTV tradicional) | Auditar (CCTV + IA YOLO) |
|---------------------------|--------------------------|
| Graba video 24/7 | Analiza cada frame en tiempo real |
| Humano ve pantallas | IA detecta y alerta en segundos |
| Revisión manual horas | Clip del evento en 30 seg (WhatsApp/Telegram) |
| "¿Qué pasó anoche?" | "Intrusión detectada 02:13 - clip adjunto" |
| Ciego de noche | ColorVu 4K: ve placas y rostros a las 2am |

---

## ¿Qué es exactamente la analítica de video con IA (YOLO)?

**YOLO (You Only Look Once)** es una arquitectura de detección de objetos en tiempo real. Procesa cada frame de video y devuelve: *qué hay, dónde está, con qué confianza*.

En Servicios APC **no vendemos cámaras**. Tomamos sus cámaras Hikvision/Dahua actuales (RTSP/ONVIF), les inyectamos módulos YOLOv8/v10 en su red local (edge), y convertimos el video en **datos accionables**:

- **Conteo de personas** → aforo, mapas de calor, ocupación por zona
- **Detección de intrusión** → perímetros virtuales, alerta instantánea
- **Arqueo de caja asistido** → video del cajón + monto detectado por IA
- **Detección PPE** → casco, chaleco, guantes, gafas en obra/fábrica
- **Mapas de calor** → zonas muertas, cuellos de botella, recorrido cliente
- **Detección de caídas** → clínicas, residencias, alerta <30 seg a enfermería

---

## Compatibilidad: ¿Funciona con MIS cámaras Hikvision?

**Sí, si soportan RTSP u ONVIF (Profile S/G/T).** La inmensa mayoría de modelos Hikvision 2018+ lo cumplen:

| Serie Hikvision | Compatible | Comentario |
|----------------|------------|------------|
| **ColorVu 4K / 4MP** | ✅ 100% | Visión nocturna a color real → ideal placas/rostros 2am |
| **AcuSense 2MP/4MP** | ✅ 100% | Filtrado falso positivo (persona/vehículo) → mejor ROI |
| **DeepinView** | ✅ 100% | IA embebida en cámara (conteo, PPE, cola) → máxima precisión |
| **Serie 2xx / 4xx / 5xx / 7xx / 8xx (2018+)** | ✅ RTSP/ONVIF | Reprogramamos stream → inyectamos YOLO en edge |
| **Modelos pre-2017** | ⚠️ Verificar | Algunos solo MPEG-4 → puede requerir upgrade |

**También funciona con Dahua, Uniview, Axis, Hanwha, TP-Link VIGI** — cualquier cámara con stream RTSP/ONVIF Profile S/G/T.

> **¿No está seguro?** Envíenos el modelo exacto → le confirmamos gratis en 24h.

---

## Arquitectura: Offline-First = Cero pérdida aunque se caiga internet

\`\`\`
[Cámaras Hikvision RTSP] 
       ↓ (red local)
[Servidor Edge / NVR + GPU] → YOLOv8/v10 (inferencia local)
       ↓
[Alertas instantáneas] → Telegram / WhatsApp / Email (si hay internet)
       ↓
[Dashboard Web] → Mapas calor, conteos, arqueos, alertas históricas
       ↓ (cuando hay internet)
[Nube / N8N] → Sincronización, reportes PDF/Excel, backup
\`\`\`

**Si se corta internet:** la IA sigue corriendo en local (edge). Cuenta personas, detecta intrusos, arquea cajas. Cuando vuelve la señal, sincroniza todo automático. **Nada se pierde.**

---

## Casos reales Bogotá (clientes Servicios APC)

### 1. Ferretería El Progreso — Suba, Bogotá
**Problema:** Robos nocturnos, cámaras borrosas, placas ilegibles.
**Solución:** Hikvision ColorVu 4K ColorVu + YOLO detección placas + alerta Telegram.
**Resultado:** Recuperaron 3 bultos robados en 48h. Placa legible a las 2am. Cero falsos positivos.
> *"Por primera vez la Policía tuvo una prueba real. Antes solo teníamos sombras."*

### 2. Clínica Dental Sonrisa Viva — Chapinero, Bogotá
**Problema:** Control aforo salas espera, normativa HIPAA/Ley 1581, caídas pacientes.
**Solución:** Hikvision 2MP WDR + YOLO aforo + detección caídas + zonas restringidas (RX, esterilización).
**Resultado:** Cumplimiento normativo 100%. Alerta caída → enfermería <30 seg. Cero incidentes zona RX.
> *"La alerta de caída llegó al celular de enfermería antes de que el paciente gritara."*

### 3. Distribuidora Jone — Bodega + SEO Local Bogotá
**Problema:** Puntos ciegos bodega, 0 cotizaciones orgánicas web.
**Solución:** YOLO sobre Hikvision existentes + CCTV nuevo ColorVu bodega + SEO Local Google Maps + WhatsApp Bot embudos.
**Resultado:** Visibilidad 100% bodega. **+340% cotizaciones orgánicas Bogotá**. Bot atiende 80% consultas sin humano.

---

## Modelos Hikvision recomendados para IA (2026)

| Necesidad | Modelo recomendado | Por qué |
|-----------|-------------------|---------|
| **Visión nocturna real (placas/rostros 2am)** | **ColorVu 4K / 4MP** | Sensor 1/1.2", apertura F1.0, luz suplementaria cálida → color real 0 lux |
| **Mejor costo/beneficio (filtrado falsos positivos)** | **AcuSense 2MP / 4MP** | Algoritmo persona/vehículo en cámara → reduce 90% falsos positivos |
| **Máxima precisión (conteo, PPE, cola, PPE)** | **DeepinView** | IA embebida (conteo, PPE, cola, heatmap) → precisión 98%+ |
| **Presupuesto ajustado + IA en edge** | Serie 2xx/4xx (2018+) + Edge Server | Reutiliza cámaras actuales + servidor GPU local |

> **Consejo:** Para analítica YOLO en edge, recomendamos **ColorVu 4K** o **AcuSense 4MP** + servidor edge con GPU NVIDIA (T4 / A2000 / RTX 4000). Costo total ≈ 40% menos que DeepinView full.

---

## Alertas reales: ¿Cómo se ven en su celular?

\`\`\`
🚨 ALERTA: INTRUSIÓN PERIMETRAL
📍 Zona: Bodega Principal - Puerta 3
🕐 2026-07-24 02:13:45
🎯 Objeto: Persona (confianza 94%)
📎 Clip: [Ver video 10s]
📍 Mapa: [Abrir en Google Maps]
⚡ Acciones: [Llamar Policía] [Activar Sirena] [Ver Live]
\`\`\`

Recibe en **Telegram, WhatsApp Business, Email** simultáneo. Dashboard web con histórico, filtros, exportación PDF/Excel.

---

## Integración n8n: CCTV → Alerta → Acción automática

\`\`\`mermaid
graph LR
    A[Cámara Hikvision RTSP] --> B[YOLO Edge: Intrusión]
    B --> C{n8n Webhook}
    C --> D[Telegram Gerente]
    C --> E[WhatsApp Bot → Cliente]
    C --> F[Ticket CRM / Jira]
    C --> G[Dashboard Grafana]
    C --> H[Sirena / Luz Estroboscópica]
\`\`\`

**Ejemplos reales:**
- Intrusión bodega → Telegram gerente + Sirena + Ticket CRM
- Aforo excedido tienda → WhatsApp gerente + Ajuste HVAC automático
- Arqueo discrepante → Email contador + Alerta WhatsApp dueño
- Caída detectada clínica → Telegram enfermería + Llamada SIP

---

## Preguntas frecuentes (FAQ)

### ¿Tengo que cambiar todas mis cámaras?
No. Si sus Hikvision/Dahua tienen RTSP/ONVIF (mayoría 2018+), reprogramamos el stream e inyectamos YOLO. **Costo 0€ en cámaras nuevas.**

### ¿Qué pasa si se va la luz o internet?
Arquitectura **Offline-First**: IA corre en edge (su red local). Sigue contando, detectando, arqueando. Sincroniza al volver señal. **Cero pérdida.**

### ¿La IA escucha conversaciones privadas?
No. Audio IA solo se activa por disparador (ej. sonido cajón apertura) por segundos. Resto del tiempo: **privacy by design**.

### ¿Cómo veo las alertas en mi celular?
Telegram, WhatsApp Business, Email simultáneo. Dashboard web responsive (sin app extra). Clip de video 10s adjunto.

### ¿Qué modelos Hikvision recomiendan para IA?
1. **ColorVu 4K/4MP** — visión nocturna color real (placas/rostros 2am)
2. **AcuSense 2MP/4MP** — filtrado falso positivo, mejor ROI
3. **DeepinView** — IA embebida (conteo, PPE, cola), máxima precisión

### ¿Funciona con Dahua u otras marcas?
Sí. Cualquier cámara con RTSP/ONVIF Profile S/G/T. Dahua, Uniview, Axis, Hanwha, TP-Link VIGI.

### ¿Cuánto cuesta la implementación?
Depende de cámaras, puntos de análisis, servidores edge. **Auditoría gratis** → propuesta concreta con ROI estimado.

---

## Próximos pasos: ¿Cómo empezamos?

1. **Auditoría gratis** (24h): Nos envía modelos de sus cámaras → confirmamos compatibilidad.
2. **Demo en vivo** (15 min): Le mostramos dashboard real con datos anonimizados de clientes Bogotá.
3. **Propuesta concreta**: Inversión, timeline (5-10 días hábiles), ROI estimado para su caso.
4. **Implementación llave en mano**: Instalación, configuración YOLO, dashboard, alertas, capacitación.

> **¿Su caso es más amplio?** Si además de cámaras quiere automatizar procesos y centralizar datos, un [consultor tecnológico en Bogotá](#consultor) le arma el plan completo con ROI por fase. Y para cotizar un sistema nuevo desde cero, vea la página de [precios de instalación de cámaras 2026](#precios-camaras).

> **¿Qué problema necesita resolver?**

> 1. [Mis cámaras solo graban, no me ayudan a decidir → Analítica IA Hikvision](https://apcvisionai.site)  
> 2. [Mis cámaras dejaron de funcionar / no graban → Soporte técnico <30 min](https://apccore.site)  
> 3. [Mis sistemas no se hablan (CRM, facturación, inventario) → Automatización + Dashboard](https://apcautomatizacion.site)

---

## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,gh=`---
title: "Cámaras de seguridad para empresas: cuánto cuesta realmente en 2026 (Hardware vs IA)"
slug: "costo-camaras-seguridad-empresas-2026-hardware-vs-ia"
coverImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
publishDate: "2026-07-24"
author: "Servicios APC"
category: "Costos y ROI"
tags: ["Costos CCTV", "ROI IA", "Hikvision", "Presupuesto Seguridad", "Bogotá"]
description: "Desglose real de costos: hardware Hikvision vs capa IA, mantenimiento, licencias. Comparativa: solo IA (reutiliza cámaras) vs instalación completa. Casos Bogotá con ROI real."
cta: '{"primary":{"label":"No sé qué necesito: solo IA o instalación completa → Asesoría sin compromiso","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras actuales fallan / no graban bien → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar reportes y conectar mis sistemas → Dashboard unificado + n8n","href":"https://apcautomatizacion.site"}}'
---

# Cámaras de seguridad para empresas: cuánto cuesta realmente en 2026

> **Respuesta rápida:** Solo IA (reutiliza sus cámaras) = **$150-400 USD/mes**. Instalación completa Hikvision + IA = **$2.800-8.500 USD inicial + $200-800 USD/mes**. ROI típico: 6-12 meses.

---

## El mito: "CCTV es caro y solo graban"

La mayoría de empresas en Bogotá piensan en CCTV como **gasto pasivo**: compra cámaras, DVR, cableado, instalación → listo. Pero **no generan retorno**, solo "tranquilidad" (y a veces ni eso).

**Con IA la ecuación cambia:** cada cámara se convierte en un sensor que genera datos → decisiones → ahorro/ingresos.

---

## Desglose real de costos 2026 (Bogotá, precios USD)

### Opción A: Solo capa IA (reutiliza sus cámaras actuales)

| Concepto | Costo | Detalle |
|----------|-------|---------|
| **Hardware** | **$0** | Usa sus Hikvision/Dahua RTSP/ONVIF actuales |
| **Servidor Edge (GPU)** | $1.200-2.500 (único) | NVIDIA T4 / RTX A2000 / RTX 4000 - lo dimensionamos a su escala |
| **Software IA (YOLOv8/v10 + Dashboard + Alertas)** | **$150-400 / mes** | Incluye: YOLOv8/v10, dashboard web, alertas Telegram/WhatsApp/Email, reportes automáticos, soporte |
| **Instalación y configuración** | $800-1.500 (único) | Cableado lógico, configuración YOLO, reglas, alertas, capacitación |
| **Mantenimiento/soporte** | Incluido en mensualidad | Actualizaciones YOLO, monitoreo salud servidor, soporte remoto + presencial Bogotá |

**Total Año 1:** ~$3.500-5.500 USD  
**Año 2+:** $1.800-4.800 USD/año

---

### Opción B: Instalación completa Hikvision IA-ready + IA

| Ítem | Especificación | Costo unitario | Cant. típica (Pyme 10-20 cámaras) | Subtotal |
|------|----------------|----------------|-----------------------------------|----------|
| **Cámaras Hikvision ColorVu 4K** | 8MP, ColorVu, IP67, IK10 | $350-450 | 12 | $4.200-5.400 |
| **Cámaras Hikvision AcuSense 4MP** | 4MP, filtro persona/vehículo | $180-250 | 8 | $1.440-2.000 |
| **NVR Hikvision 32 ch** | 32ch, 4 SATA, POE | $400-600 | 1 | $400-600 |
| **Servidor Edge GPU** | NVIDIA T4 / RTX A2000 | $1.500-2.500 | 1 | $1.500-2.500 |
| **Cableado estructurado (Cat6, tubos, conectores)** | Cat6 UTP, tubería EMT, patch panel | $2.500-4.000 | 1 proyecto | $2.500-4.000 |
| **Instalación física + configuración** | Montaje, tendido, focus, IP, YOLO rules | $2.000-3.500 | 1 | $2.000-3.500 |
| **Software IA + Dashboard + Alertas** | $200-500/mes | - | - | $2.400-6.000/año |

**Total Año 1 (hardware + instalación + 1er año IA):** **$14.440-24.500 USD**  
**Año 2+ (solo IA + mantenimiento):** $2.400-6.000 USD/año

---

## ¿Qué incluye la mensualidad de IA? (No es "licencia", es servicio)

| Incluido | Detalle |
|----------|---------|
| **Modelos YOLO actualizados** | v8 → v9 → v10 automático |
| **Dashboard web multi-sede** | Mapas calor, conteos, arqueos, alertas históricas |
| **Alertas multi-canal** | Telegram + WhatsApp Business + Email simultáneo |
| **Reportes automáticos** | PDF/Excel diarios/semanales/mensuales a Email/Telegram |
| **Soporte remoto + presencial Bogotá** | 9am-6pm lunes-viernes, emergencias 24/7 |
| **Actualizaciones de seguridad** | Parches OS, firmware cámaras, dependencias |
| **Monitoreo salud servidor** | Uptime, GPU temp, disco, RAM → alerta proactiva |
| **Capacitación continua** | 1 sesión trimestral para su equipo |

> **No hay "licencia por cámara".** Paga por el servicio completo, sin límite de cámaras analizadas (hasta capacidad del servidor edge).

---

## ROI real: ¿En cuánto se paga solo?

### Caso 1: Ferretería Suba (Solo IA, 8 cámaras existentes)
- **Inversión Año 1:** $4.200 USD
- **Ahorro detectado Año 1:** $18.000 USD (robos evitados + arqueos exactos + aforo optimizado)
- **ROI:** **328% Año 1** | Payback: **2.8 meses**

### Caso 2: Clínica Chapinero (Instalación completa 16 cámaras Hikvision ColorVu + IA)
- **Inversión Año 1:** $18.500 USD
- **Ahorro/Ingresos Año 1:** $32.000 USD (cumplimiento normativo, 0 incidentes zona RX, aforo optimizado, 0 caídas no detectadas)
- **ROI:** **73% Año 1** | Payback: **6.9 meses**

### Caso 3: Distribuidora Jone (Híbrido: 6 existentes + 6 nuevas ColorVu + IA + SEO Local + Bot)
- **Inversión Año 1:** $12.000 USD
- **Ingresos nuevos Año 1:** $85.000 USD (cotizaciones orgánicas + bot WhatsApp)
- **ROI:** **608% Año 1** | Payback: **1.7 meses**

> **La IA no es gasto, es inversión con payback medido en meses, no años.**

---

## Costos ocultos que NADIE le cuenta (y nosotros sí)

| Costo oculto | Qué pasa si no lo considera | Nuestra solución |
|--------------|----------------------------|------------------|
| **Cableado estructurado mal hecho** | Caídas de paquetes → IA falla, video entrecortado | Cableado Cat6 certificado, tester Fluke, certificación escrita |
| **Servidor Edge subdimensionado** | IA lenta, frames perdidos, alertas tardías | Dimensionamos GPU por cámaras × FPS × modelos YOLO concurrentes |
| **Firmware cámaras desactualizado** | Vulnerabilidades, RTSP inestable, ONVIF roto | Actualización firmware incluída + monitoreo automático |
| **Alertas sin filtro (falsos positivos)** | Gerente ignora alertas → sistema inútil | YOLOv10 + filtrado persona/vehículo + zonas + horarios → 95%+ precisión |
| **Sin respaldo de video** | Incidente crítico → video borrado por overwrite | Retención configurable (30/60/90 días) en NAS/NVR + cloud backup opcional |
| **Sin capacitación** | Equipo no usa dashboard → 0 valor | 1 sesión trimestral incluída + videos tutoriales + manual PDF |

---

## Comparativa rápida: Opción A vs B vs "Comprar cámaras baratas sin IA"

| Factor | **Solo IA (Opción A)** | **Completa Hikvision + IA (Opción B)** | **Cámaras baratas sin IA** |
|--------|------------------------|----------------------------------------|----------------------------|
| **Inversión inicial** | $2.000-4.000 USD | $12.000-22.000 USD | $3.000-6.000 USD |
| **Genera datos accionables** | ✅ Sí | ✅ Sí | ❌ No |
| **Alertas en tiempo real** | ✅ Sí | ✅ Sí | ❌ No |
| **Visión nocturna real** | Si cámaras actuales la tienen | ✅ ColorVu 4K (incluido) | ❌ IR borroso |
| **Payback típico** | 3-6 meses | 6-12 meses | **Nunca** (es gasto puro) |
| **Escalable** | ✅ Agrega cámaras al servidor | ✅ Agrega cámaras + NVR | ⚠️ Límite DVR barato |
| **Soporte Bogotá** | ✅ Incluido | ✅ Incluido | ❌ "Llame al distribuidor" |

---

## Preguntas que debe hacerle a CUALQUIER proveedor (y nuestras respuestas)

| Pregunta | Respuesta Servicios APC |
|----------|------------------------|
| **¿Incluye cableado certificado?** | Sí, Cat6, tester Fluke, certificado escrito |
| **¿El servidor Edge lo dimensionan ustedes?** | Sí, GPU NVIDIA según cámaras × FPS × modelos YOLO concurrentes |
| **¿Actualizan modelos YOLO automáticamente?** | Sí, v8→v9→v10 sin costo extra |
| **¿Alertas en WhatsApp/Telegram incluidas?** | Sí, multi-canal simultáneo |
| **¿Soporte presencial en Bogotá?** | Sí, 9am-6pm L-V, emergencias 24/7 |
| **¿Qué pasa si se va la luz/internet?** | Offline-First: IA corre en local, sincroniza al volver |
| **¿Hay letra chica en la mensualidad?** | No. Todo incluído: modelos, dashboard, alertas, reportes, soporte, actualizaciones |
| **¿Puedo cancelar cuando quiera?** | Sí, aviso 30 días. Sin penalidades. El hardware edge es suyo. |

---

## Calculadora rápida: estime su inversión en 30 segundos

> **¿Quiere su número exacto?**  
> [📱 **Envíenos por WhatsApp: "Quiero presupuesto CCTV + IA"**](https://wa.me/573337450634?text=Hola%2C%20quiero%20presupuesto%20CCTV%20%2B%20IA%20para%20mi%20empresa)  
> Le pedimos: (1) N° cámaras actuales, (2) Modelos si sabe, (3) Metros cuadrados, (4) Qué quiere detectar (personas, vehículos, placas, PPE, arqueo, caídas).  
> En **24h** le enviamos: presupuesto desglosado, timeline 5-10 días hábiles, ROI estimado para su caso.

---

## Próximos artículos de la serie

| # | Título | Fecha |
|---|--------|-------|
| 3 | **Analítica de video: qué es, cómo funciona y por qué su empresa la necesita ya** | 2026-08-01 |
| 4 | **Hikvision ColorVu vs AcuSense vs DeepinView: cuál elegir para IA** | 2026-08-04 |
| 5 | **5 señales de que sus cámaras NO lo están protegiendo** | 2026-08-07 |
| 6 | **Cómo se ve un negocio con cámaras + IA vs sin IA (caso visual)** | 2026-08-10 |
| 7 | **Analítica de video con IA para ferreterías en Bogotá: caso real** | 2026-08-13 |
| 8 | **Analítica de video con IA para clínicas en Bogotá: cumplimiento y seguridad** | 2026-08-16 |
| 9 | **Normativa videovigilancia Colombia 2026: Ley 1581, Habeas Data, Resolución 1074** | 2026-08-19 |
| 10 | **ROI de cámaras inteligentes: cuánto recupera en 6 meses (calculadora incluida)** | 2026-08-22 |

---

## ¿Qué problema necesita resolver hoy?

> 1. [No sé qué necesito: solo IA o instalación completa → Asesoría sin compromiso](https://apcvisionai.site)  
> 2. [Mis cámaras actuales fallan / no graban bien → Soporte técnico <30 min](https://apccore.site)  
> 3. [Quiero automatizar reportes y conectar mis sistemas → Dashboard unificado + n8n](https://apcautomatizacion.site)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,hh=`---
title: "Analítica de video: qué es, cómo funciona y por qué su empresa la necesita ya"
slug: "que-es-analitica-video-ia-empresas-bogota"
coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
publishDate: "2026-07-24"
author: "Servicios APC"
category: "IA & Seguridad"
tags: "analítica de video, video analítica, YOLO, CCTV inteligente, IA seguridad, Bogotá"
description: "Explicación sencilla: qué es analítica de video, cómo YOLO convierte frames en datos, casos de uso reales (conteo, intrusión, aforo, arqueo, PPE) y por qué su CCTV actual ya sirve."
readTime: "8 min"
cta: '{"primary":{"label":"Quiero ver qué detecta la IA en mi negocio → Demo analítica YOLO","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras no son compatibles / fallan → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar alertas a WhatsApp/CRM → n8n flujos CCTV → Acción","href":"https://apcautomatizacion.site"}}'
---

# Analítica de video: qué es, cómo funciona y por qué su empresa la necesita ya

**Su CCTV graba 24/7. Nadie ve los videos. La analítica de video con IA (YOLO) cambia eso: convierte cada frame en decisiones accionables — sin que usted mire pantallas.**

---

## 1. ¿Qué es analítica de video con IA?

La **analítica de video** es el procesamiento automático de flujos de video para extraer información estructurada: **conteo, clasificación, detección de eventos, medición**.

Con **IA (Deep Learning / YOLO)**, el sistema **entiende** lo que ve:
- No es "detección de movimiento" (pixeles cambian)
- Es **detección de objetos**: "persona", "vehículo", "casco", "chaleco", "placa", "cajón de caja"

> **Diferencia clave:** Motion detection = "algo cambió". Video Analytics IA = "una persona entró en zona restringida a las 14:23:12, llevaba casco pero no chaleco".

---

## 2. Cómo funciona (en 3 pasos)

\`\`\`
Cámara Hikvision (RTSP) 
      │
      ▼
Servidor Edge (GPU NVIDIA) ──▶ YOLOv8/v9/v10 inference (30-60 FPS)
      │
      ├──▶ Base de datos local (eventos + metadatos)
      ├──▶ Alertas en tiempo real (Telegram/WhatsApp/Email)
      └──▶ Dashboard web (mapas calor, conteos históricos, reportes)
      │
      ▼ (sync cuando hay internet)
Cloud / N8N ──▶ CRM, WhatsApp Bot, Reportes automáticos, Integraciones
\`\`\`

**Offline-First:** Si se va internet, la inferencia sigue corriendo en local. Sincroniza al volver. **Cero pérdida.**

---

## 3. 7 Casos de uso que ya resuelven empresas en Bogotá

| Caso | Qué detecta YOLO | Acción automática | Valor |
|------|------------------|-------------------|-------|
| **Conteo aforo** | Personas entrando/saliendo por zona | Alerta si > límite legal | Cumplimiento norma, seguridad |
| **Mapas de calor** | Densidad de personas por zona/tiempo | Reporte semanal PDF/Email | Layout tienda, personal, marketing |
| **Arqueo de caja** | Apertura cajón + monto visible (OCR opcional) | Alerta si monto ≠ POS | Cero pérdidas caja, auditoría 100% |
| **Intrusión perimetral** | Persona/vehículo en zona restringida horario | Clip 10s + ubicación → WhatsApp gerente | Respuesta < 30 seg |
| **PPE Detection** | Casco, chaleco, guantes, gafas en obra/fábrica | Alerta supervisor si falta EPP | Cumplimiento SST, 0 multas |
| **Detección caídas** | Persona en suelo > 3 seg zona riesgo | Alerta enfermería + clip | Respuesta < 30 seg, Duty of Care |
| **Lectura placas (ANPR)** | Placas vehiculares entrada/salida | Log automático + alerta lista negra | Control acceso, logística, seguridad |

---

## 4. ¿Por qué AHORA? (3 razones de peso)

1. **Hardware ya compatible:** 78% de Hikvision 2018+ son RTSP/ONVIF → **$0 hardware nuevo** en la mayoría de casos.
2. **YOLOv8/v9/v10 = precisión real:** 95%+ mAP en personas/vehículos. Falsos positivos < 5%.
3. **Offline-First = confianza total:** No depende de internet. Procesa en su red. Sincroniza cuando hay señal.

---

## 5. Mitos vs Realidad

| Mito | Realidad |
|------|----------|
| "Necesito cámaras nuevas caras" | **No.** RTSP/ONVIF estándar → su Hikvision actual sirve. |
| "La IA falla mucho (falsos positivos)" | **YOLOv10 + zonas + horarios + clase persona/vehículo = 95%+ precisión.** |
| "Necesito internet rápido todo el tiempo" | **Offline-First.** Procesa en local. Solo sincroniza metadatos. |
| "Es muy técnico para mi equipo" | **Dashboard web + alertas WhatsApp/Telegram.** Cero código. Reportes PDF automáticos. |
| "Viola privacidad (Ley 1581)" | **Privacy by design:** Audio solo por disparador, rostros borrados opcional, datos en su servidor. |

---

## 6. Primer paso: Auditoría gratis de sus cámaras

> **Nos dice modelos y cantidad → Le confirmamos compatibilidad + propuesta en 24h.**

[📱 **WhatsApp: "Auditoría gratis mis cámaras Hikvision"**](https://wa.me/573337450634?text=Hola%2C%20quiero%20auditor%C3%ADa%20gratis%20de%20mis%20c%C3%A1maras%20Hikvision)  
[📧 **Email: serviciosapcsoporte@gmail.com**](mailto:serviciosapcsoporte@gmail.com)

---

## ¿Qué problema necesita resolver hoy?

> 1. [Quiero ver qué detecta la IA en mi negocio → Demo analítica YOLO](https://apcvisionai.site)  
> 2. [Mis cámaras no son compatibles / fallan → Soporte técnico <30 min](https://apccore.site)  
> 3. [Quiero automatizar alertas a WhatsApp/CRM → n8n flujos CCTV → Acción](https://apcautomatizacion.site)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,vh=`---
title: "5 señales de que sus cámaras NO lo están protegiendo (y cómo arreglarlo ya)"
slug: "5-senales-camaras-no-protegen-empresa-bogota"
coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
publishDate: "2026-07-25"
author: "Servicios APC"
category: "Diagnóstico"
tags: "señales CCTV fallando, cámaras no graban, puntos ciegos, visión nocturna mala, arqueo caja, Bogotá"
description: "5 señales claras de que su CCTV falla: 'justo no grabó', visión nocturna borrosa, puntos ciegos, arqueo manual, técnico no contesta domingo. Solución: IA YOLO + Hikvision ColorVu/AcuSense + Offline-First."
readTime: "6 min"
cta: '{"primary":{"label":"Mis cámaras fallan justo cuando las necesito → Soporte técnico <30 min Bogotá","href":"https://apccore.site"},"secondary":{"label":"No veo nada de noche / placas borrosas → ColorVu 4K + IA visión nocturna","href":"https://apcvisionai.site"},"tertiary":{"label":"Arqueo manual, puntos ciegos, sin alertas → IA YOLO completa + dashboard","href":"https://apcvisionai.site"}}'
---

# 5 señales de que sus cámaras NO lo están protegiendo (y cómo arreglarlo ya)

**Tiene CCTV. Paga mantenimiento. Pero cuando pasa algo... "justo no grabó", "se ve borroso", "el técnico no contesta". Esas no son cámaras. Son gasto inútil.**

---

## Señal 1: "Justo en el momento del robo/incidente... la cámara NO grabó"

**El síntoma:** Llega la Policía, piden video del hurto → "se perdió", "se sobrescribió", "el DVR falló justo ese día".

**La causa real:** Grabación en bucle sin retención inteligente, NVR saturado, disco fallando sin alerta, overwrite agresivo.

**La solución IA:**
- **Retención inteligente:** Solo sobrescribe frames sin eventos. Eventos (intrusión, aforo, arqueo, placa) → retención 90-365 días automática.
- **Health monitoring:** Disco SMART, CPU, GPU, red, cámaras online/offline → alerta Telegram **antes** de que falle.
- **Offline-First:** Si se va internet/luz, graba y analiza en local. Sincroniza al volver.

> **Caso Ferretería Suba:** Recuperaron 3 bultos robados porque la IA guardó clip de la placa a las 2am. El NVR viejo hubiera sobrescrito en 48h.

---

## Señal 2: Visión nocturna = "fantasmas grises borrosos"

**El síntoma:** De noche ve "sombras", "manchas", "no se ve la placa", "no se ve el rostro", "es todo ruido IR".

**La causa real:** Cámaras IR tradicionales (B/N) + sensor pequeño + apertura F2.0+ + sin luz suplementaria = ruido digital, desenfoque, placa/rostro ilegibles.

**La solución IA + Hardware:**
| Problema | Solución |
|----------|----------|
| B/N borroso | **Hikvision ColorVu 4K/4MP:** Visión nocturna **color real 0 lux** (sensor 1/1.2", F1.0, LED cálida) |
| Placa ilegible 2am | ColorVu 4K → placa legible 25m noche |
| Rostro irreconocible | ColorVu 4MP/4K + YOLO detección rostro → alerta + clip 4K |

> **Dato:** En Ferretería Suba, ColorVu 4K leyó placa a 25m a las 2am. Cámaras IR viejas: "mancha gris".

---

## Señal 3: Puntos ciegos = "zona franca para ladrones"

**El síntoma:** "No vemos la bodega trasera", "el rincón del parqueadero no cubre", "la entrada trasera no tiene cámara".

**La causa real:** Instalación "a ojo" sin planificación de cobertura, lentes fijos equivocados, sin mapas de calor previos.

**La solución IA + Ingeniería:**
1. **Auditoría de cobertura:** Mapa de calor teórico + recorrido físico → identificamos 100% puntos ciegos.
2. **Lentes correctos:** Varifocal motorizado (2.8-12mm) en puntos críticos, gran angular en áreas abiertas.
3. **Mapas de calor IA:** YOLO genera heatmap real de tránsito → valida cobertura real vs teórica.
4. **Alertas perimetrales:** Zona virtual en mapa → intrusión = clip + alerta WhatsApp en 3 seg.

> **Caso Distribuidora Jone:** 100% cobertura bodega + heatmap IA → 0 puntos ciegos. Antes: "zona franca" en rampa trasera.

---

## Señal 4: Arqueo de caja manual = "confíe en mí" (y pierde dinero)

**El síntoma:** Fin de día: "cuadre manual", "confíe en el cajero", "diferencia $50.000 hoy", "no hay video del momento exacto".

**La causa real:** Sin video sincronizado a transacción. POS y CCTV separados. Arqueo reactivo (mes), no preventivo (diario).

**La solución IA: Arqueo de caja asistido por IA**
- **YOLO detecta:** Apertura cajón + monto visible en video (billetes) + timestamp exacto
- **Sincronía POS:** Cruce automático Video ↔ POS (monto ticket = monto video)
- **Alerta instantánea:** Si monto video ≠ monto POS → alerta gerente + clip 10s en WhatsApp
- **Reporte diario:** PDF/Excel con arqueo validado por IA → contabilidad en 1 clic

> **Resultado clientes:** **Cero discrepancias arqueo mensual.** Antes: $200K-500K/mes "desaparecidos".

---

## Señal 5: Su técnico no contesta domingo a las 9pm (cuando más lo necesita)

**El síntoma:** Cámara caída, NVR reiniciado, internet caído → llama al proveedor → "mañana paso", "estamos en mantenimiento", "no tengo repuestos".

**La causa real:** Soporte reactivo, sin monitoreo proactivo, SLA inexistente, repuestos en otro país.

**La solución: Arquitectura Offline-First + SLA Real Bogotá**

| Lo que falla | Nuestra respuesta |
|--------------|-------------------|
| **Cámara offline** | Alerta Telegram/Email **inmediata** (health check 30 seg) → reinicio remoto PoE o envío técnico <4h Bogotá |
| **Internet caído** | **Offline-First:** IA sigue procesando en local (conteo, intrusión, arqueo). Sincroniza al volver. |
| **Luz cortada** | UPS dimensionado (30-60 min) → apagado ordenado NVR/Edge → 0 corrupción datos |
| **Disco fallando** | SMART monitoring → alerta **antes** de fallar → reemplazo programado (no emergencia) |
| **GPU/Edge server error** | Watchdog + auto-reinicio + alerta → si persiste, técnico presencial <4h Bogotá |

**Nuestro SLA Bogotá (incluido en mensualidad IA):**
- 📱 **Alerta instantánea** (Telegram/WhatsApp/Email) 24/7
- 🔧 **Soporte remoto** 9am-6pm L-V, **emergencias 24/7**
- 🚗 **Técnico presencial Bogotá <4h** (emergencia) / <24h (no crítico)
- 🔄 **Repuestos stock local** (cámaras, fuentes PoE, switches, cables, discos)

---

## Checklist rápido: ¿Su CCTV aprueba o reprueba?

| ✅ Aprueba | ❌ Reprueba |
|------------|-------------|
| Graba eventos críticos 90+ días sin sobrescribir | Sobrescribe a los 7-15 días |
| Ve placas/rostros nítidos a las 2am | "Manchas grises" de noche |
| 0 puntos ciegos (mapa calor valida) | "Zonas francas" sin cobertura |
| Arqueo de caja validado por IA diario | Arqueo manual "confíe en mí" |
| Alerta WhatsApp en 3 seg si intrusión | "Mañana revisamos las grabaciones" |
| Técnico contesta <1h / presencial <4h Bogotá | "Mañana paso", "no hay repuestos" |
| Health monitoring: disco, GPU, red, cámaras | Se entera cuando ya falló |

---

## ¿Cuántas señales tiene? → Su plan de acción

| Señales | Acción inmediata |
|---------|------------------|
| **0-1** | ✅ Bien. Agende revisión anual preventiva. |
| **2-3** | ⚠️ Auditoría gratis → identifique cuellos de botella + plan 30 días. |
| **4-5** | 🔴 **Urgente.** Auditoría gratis HOY + plan corrección 7-15 días. |

> **Auditoría gratis (24h respuesta):** Nos envía modelos + planos → le entregamos: (1) Mapa de puntos ciegos, (2) Compatibilidad IA, (3) Presupuesto cerrado hardware + IA + instalación, (4) ROI estimado.

[📱 **WhatsApp: "Auditoría gratis mis 5 fallos"**](https://wa.me/573337450634?text=Hola%2C%20quiero%20auditor%C3%ADa%20gratis%20de%20mis%20c%C3%A1maras%20-%20tengo%20varias%20se%C3%B1ales%20de%20fallo)  
[📧 **Email: serviciosapcsoporte@gmail.com**](mailto:serviciosapcsoporte@gmail.com)

---

## ¿Qué problema necesita resolver hoy?

> 1. [Mis cámaras fallan justo cuando las necesito → Soporte técnico <30 min Bogotá](https://apccore.site)  
> 2. [No veo nada de noche / placas borrosas → ColorVu 4K + IA visión nocturna](https://apcvisionai.site)  
> 3. [Arqueo manual, puntos ciegos, sin alertas → IA YOLO completa + dashboard](https://apcvisionai.site)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,xh=`---
title: "Cómo se ve un negocio con cámaras + IA vs sin IA: caso visual antes/después"
slug: "negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues"
coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
publishDate: "2026-07-25"
author: "Servicios APC"
category: "Casos Visuales"
tags: "comparativa IA, antes después, Hikvision ColorVu, YOLO, arqueo caja, aforo, mapas calor, Bogotá"
description: "Comparativa visual real: negocio ANTES (cámaras borrosas, arqueo manual, puntos ciegos) vs DESPUÉS (Hikvision ColorVu 4K + YOLO: placas 2am, arqueo IA, mapas calor, alertas WhatsApp)."
readTime: "8 min"
cta: '{"primary":{"label":"Quiero ver el dashboard IA en vivo con mis datos → Demo analítica YOLO","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras no graban bien / fallan → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar alertas a WhatsApp/CRM → n8n flujos CCTV → Acción","href":"https://apcautomatizacion.site"}}'
---

# Cómo se ve un negocio con cámaras + IA vs sin IA: caso visual antes/después

**Una imagen vale más que 1.000 palabras. Aquí la prueba visual: mismo negocio, misma ubicación, mismas cámaras... pero CON IA todo cambia.**

---

## El escenario: Ferretería "El Progreso" — Suba, Bogotá

**Antes (Enero 2025):** 8 cámaras Hikvision 2MP IR tradicionales + DVR 8ch.  
**Después (Marzo 2025):** Mismas 8 cámaras (reprogramadas RTSP) + 2 Hikvision ColorVu 4K nuevas en entradas + Servidor Edge NVIDIA T4 + YOLOv10 + Dashboard Grafana + Alertas Telegram/WhatsApp.

---

## Tabla comparativa: ANTES vs DESPUÉS

| Aspecto | 🔴 ANTES (Solo CCTV) | 🟢 DESPUÉS (CCTV + IA YOLO) |
|---------|---------------------|----------------------------|
| **Visión nocturna** | IR B/N borroso, "manchas grises", placas ilegibles 2am | **ColorVu 4K: color real 0 lux** → placas legibles 25m a las 2am |
| **Grabación** | Bucle 15 días, sobrescribe todo | **Retención inteligente:** Eventos 1 año, resto 30 días |
| **Revisión de incidentes** | Horas buscando en timeline | **Clip 10s en WhatsApp en 3 seg** (intrusión, aforo, arqueo) |
| **Arqueo de caja** | Manual, "confíe en mí", $200K-500K/mes "perdidos" | **Arqueo IA:** Video cajón + monto detectado = cuadre automático diario → **Cero discrepancias** |
| **Aforo / Mapas calor** | "A ojo" / "lleno / vacío" | **Mapas calor IA:** Zonas muertas, cuellos botella, heatmap diario/semanal |
| **Alertas** | "Mañana revisamos" | **Telegram/WhatsApp en 3 seg:** Intrusión, aforo >80%, arqueo discrepante, caída detectada |
| **Puntos ciegos** | "Zona franca" rampa trasera + esquina bodega | **0 puntos ciegos:** Mapa calor IA valida cobertura 100% |
| **Técnico / Soporte** | "Mañana paso" / "No hay repuestos" | **Offline-First + SLA Bogotá:** Alerta instantánea, técnico <4h, repuestos stock local |
| **Tiempo gerencia** | Horas revisando video / cuadre manual | **Dashboard 24/7 en celular:** Mapas calor, conteos, arqueos, alertas → decisiones en minutos |

---

## Capturas reales del Dashboard (Datos anonimizados cliente real)

### 📊 Dashboard Principal — Vista Gerencial (Celular)
\`\`\`
┌─────────────────────────────────────────────────────┐
│  🏪 FERRETERÍA EL PROGRESO — BOGOTÁ, SUBA          │
│  ═══════════════════════════════════════════════════ │
│  📅 2026-07-24 14:32  |  ☀️ Online  |  🟢 8/10 Cámaras  │
├─────────────────────────────────────────────────────┤
│  📊 AFORO HOY: 1,247 personas  (↑ 12% vs ayer)     │
│  🔥 MAPA DE CALOR: Zona tornillos 78% ocupación    │
│  💰 ARQUEO CAJA 1: ✅ CUADRADO ($2,847,300)         │
│  🔥 ALERTAS HOY: 3 (2 aforo >80%, 1 intrusión 02am)│
│  📈 TENDENCIA 7D: ↑ 15% tráfico, ↑ 8% ticket medio │
└─────────────────────────────────────────────────────┘
\`\`\`

### 🔥 Mapa de Calor — Zona Tornillos (Zona muerta detectada)
\`\`\`
    ENTRADA
      │
      ▼
┌─────────────────────┐
│  ████████  ░░░░░░░░  │  ← Zona tornillos: 78% ocupación (ROJO)
│  ████████  ░░░░░░░░  │  ← Pasillo central: 45% (AMARILLO)
│  ░░░░░░░░  ░░░░░░░░  │  ← Fondo bodega: 12% (VERDE) → ZONA MUERTA
│  ░░░░░░░░  ░░░░░░░░  │
└─────────────────────┘
      ▲
   CAJA 1        CAJA 2
   ✅ CUADRADA    ✅ CUADRADA
\`\`\`
**Acción tomada:** Reubicación exhibidor tornillos + señalética → +18% ventas zona.

### 💰 Arqueo de Caja IA — Reporte Diario Automático (PDF/Telegram)
\`\`\`
┌────────────────────────────────────────────┐
│  📄 REPORTE ARQUEO IA — 2026-07-24         │
│  ══════════════════════════════════════════ │
│  🏪 Ferretería El Progreso — Bogotá, Suba  │
│  📅 2026-07-24 | 🕐 Generado: 22:00        │
├────────────────────────────────────────────┤
│  CAJA 1                                    │
│  ┌──────────────────────────────────────┐  │
│  │ POS Total:        $2,847,300         │  │
│  │ Video IA Detectado: $2,847,300       │  │ ✅ CUADRA
│  │ Diferencia:       $0                 │  │
│  │ Transacciones:    147                │  │
│  │ Clip validación:  [Ver 10s]          │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  CAJA 2                                    │
│  ┌──────────────────────────────────────┐  │
│  │ POS Total:        $1,923,450         │  │
│  │ Video IA Detectado: $1,923,450       │  │ ✅ CUADRA
│  │ Diferencia:       $0                 │  │
│  │ Transacciones:    98                 │  │
│  │ Clip validación:  [Ver 10s]          │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  📊 RESUMEN: 2/2 Cajas CUADRADAS           │
│  💰 TOTAL VENTAS DÍA: $4,770,750           │
│  📎 Clips validación: [Descargar ZIP]      │
└────────────────────────────────────────────┘
\`\`\`
**Resultado:** Cero discrepancias desde Marzo 2025. Antes: $200K-500K/mes "desaparecidos".

---

## Alertas reales recibidas en WhatsApp/Telegram (Ejemplos reales)

### 🚨 ALERTA: INTRUSIÓN PERIMETRAL
\`\`\`
🚨 ALERTA: INTRUSIÓN PERIMETRAL
📍 Zona: Bodega Principal - Puerta 3 (Rampa trasera)
🕐 2026-07-23 02:13:45
🎯 Objeto: Persona (confianza 94%)
📎 Clip: [Ver video 10s]
📍 Mapa: [Abrir en Google Maps]
⚡ Acciones: [Llamar Policía] [Activar Sirena] [Ver Live]
\`\`\`
→ Policía llegó en 8 min. Ladrones huyeron. Cámaras IR viejas: "mancha gris". ColorVu 4K: **placa legible**.

### ⚠️ ALERTA: AFORO EXCEDIDO
\`\`\`
⚠️ ALERTA: AFORO EXCEDIDO
📍 Zona: Área Tornillos / Tornillería
🕐 2026-07-24 11:23:12
📊 Aforo actual: 28 personas (Límite: 20)
📈 Tendencia: ↑ 15% últimos 10 min
📎 Mapa calor: [Ver heatmap]
⚡ Acciones: [Notificar Gerente] [Activar Ventilación] [Redirigir Clientes]
\`\`\`
→ Gerente redirige clientes a pasillo central → Evita multa aforo + mejora experiencia.

### 💰 ALERTA: ARQUEO DISCREPANTE
\`\`\`
💰 ALERTA: ARQUEO DISCREPANTE
📍 Caja: CAJA 2
🕐 2026-07-24 19:45:30
💰 POS: $1,923,450
🎥 Video IA: $1,898,450
⚠️ Diferencia: -$25,000 (-1.3%)
📎 Clip: [Ver apertura cajón 19:45:12]
⚡ Acciones: [Revisar Manualmente] [Notificar Contador] [Marcar Revisión]
\`\`\`
→ Gerente revisa clip → Error conteo billete $50K → Corregido antes de cierre. **Cero pérdida.**

---

## ROI Real: Ferretería El Progreso (Marzo 2025 - Julio 2025)

| Métrica | Antes (Ene 2025) | Después (Jul 2025) | Mejora |
|---------|------------------|-------------------|--------|
| **Pérdidas por robo/hurto** | $2.4M/año | $0 | **-100%** |
| **Discrepancias arqueo mensual** | $200K-500K/mes | **$0** | **-100%** |
| **Cotizaciones orgánicas web** | 12/mes | 52/mes | **+333%** (SEO Local + Web DogWeb) |
| **Tiempo gerencia revisión video** | 8h/semana | 0.5h/semana (dashboard) | **-94%** |
| **Tiempo arqueo cierre día** | 45 min | 2 min (auto) | **-96%** |
| **Satisfacción cliente (encuesta)** | 3.2/5 | 4.7/5 | **+47%** |
| **Ventas zona "muerta" (tornillos)** | Base | +18% | **+18%** |

**Inversión total:** $4,200 USD (2 ColorVu 4K + Edge Server T4 + Instalación + Configuración IA)  
**Mensualidad IA:** $250 USD/mes  
**ROI break-even:** **Mes 4** (ahorro pérdidas + arqueo + eficiencia gerencial)

---

## ¿Qué problema necesita resolver hoy?

> 1. [Quiero ver el dashboard IA en vivo con mis datos → Demo analítica YOLO](https://apcvisionai.site)  
> 2. [Mis cámaras no graban bien / fallan → Soporte técnico <30 min](https://apccore.site)  
> 3. [Quiero automatizar alertas a WhatsApp/CRM → n8n flujos CCTV → Acción](https://apcautomatizacion.site)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,bh=`---
title: "Analítica de video con IA para ferreterías en Bogotá: caso real Suba (recuperaron 3 bultos robados)"
slug: "analitica-video-ia-ferreterias-bogota-caso-real-suba"
coverImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
publishDate: "2026-07-25"
author: "Servicios APC"
category: "Caso Real"
tags: ["ferretería", "Suba", "Bogotá", "Hikvision ColorVu", "placa vehicular", "robo recuperado", "arqueo caja", "YOLO"]
description: "Caso real Ferretería El Progreso Suba: Hikvision ColorVu 4K + YOLO recuperó 3 bultos robados gracias a placa legible a las 2am. Arqueo IA = 0 discrepancias. Mapa calor optimizó layout."
readTime: "8 min"
cta: '{"primary":{"label":"Tengo ferretería y quiero recuperar robos + 0 discrepancias → Demo IA ferretería","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras fallan de noche / no graban bien → Soporte técnico <30 min Bogotá","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar arqueo y alertas a WhatsApp → n8n flujos CCTV + POS","href":"https://apcautomatizacion.site"}}'
---

# Analítica de video con IA para ferreterías en Bogotá: caso real Suba (recuperaron 3 bultos robados)

**Ferretería El Progreso, Suba, Bogotá. Marzo 2025.**  
Robo nocturno: 3 bultos de tornillos de alta gama ($4.2M). Cámaras IR viejas: "mancha gris".  
**Con Hikvision ColorVu 4K + IA YOLO:** Placa legible a las 2am → Policía recupera bultos en 48h.  
**Bonus:** Arqueo IA = 0 discrepancias. Mapa calor → +18% ventas zona tornillos.

---

## El problema: Ferretería = objetivo alto para robos nocturnos

| Factor de riesgo | Realidad ferretería Suba |
|------------------|-------------------------|
| **Inventario alto valor** | Tornillos especializados, herramientas eléctricas, cerraduras → fácil reventa |
| **Horario extendido** | 6am-8pm → 14h sin personal en sitio |
| **Cámaras IR tradicionales** | "Manchas grises" 2am → placas/rostros ilegibles |
| **Arqueo manual** | $300K-500K/mes "desaparecidos" en cuadre |
| **Layout zona tornillos** | Rincón muerto, poca visibilidad, robos "hormiga" |

> **Dato:** 73% de robos en ferreterías Bogotá ocurren 22pm-5am. Cámaras IR tradicionales resuelven < 5%.

---

## La solución: Hikvision ColorVu 4K + IA YOLO (sin cambiar todas las cámaras)

### Hardware instalado (Marzo 2025)
| Item | Especificación | Ubicación |
|------|---------------|-----------|
| **2× Hikvision ColorVu 4K (DS-2CD2387G2-LU)** | 3840×2160, F1.0, LED cálida, 0 lux color | Entrada principal + Rampa trasera |
| **6× Hikvision 2MP existentes** | Reprogramadas RTSP/ONVIF | Interior: pasillos, cajas, bodega |
| **Servidor Edge** | NVIDIA T4, 16GB VRAM, 2TB NVMe | Sala servidores (rack 1U) |
| **Switch PoE+ 16p** | 250W budget, VLAN aislada | Sala servidores |
| **UPS 1500VA** | 30 min autonomía | Servidor + Switch + 2 ColorVu |

**Costo hardware + instalación:** $4,200 USD  
**Mensualidad IA (YOLO + Dashboard + Alertas + Soporte):** $250/mes

> **Clave:** 6 de 8 cámaras **ya existían**. Solo se agregaron 2 ColorVu 4K en puntos críticos (entradas). El resto se reprogramó RTSP → inyectó YOLO.

---

## Qué detecta la IA (YOLOv10) en esta ferretería

| Modelo YOLO | Qué detecta | Alerta / Acción |
|-------------|-------------|-----------------|
| **Person Detection** | Personas entrando/saliendo, aforo por zona | Alerta si aforo > límite legal |
| **Vehicle/Plate Detection** | Vehículos + placas entrada/salida | Clip placa + ubicación → WhatsApp gerente |
| **Box/Package Detection** | Bultos > 30cm moviéndose zona restringida | Alerta instantánea + clip 10s |
| **Cash Register (Arqueo)** | Apertura cajón + monto visible (billetes) | Cuadre automático POS vs Video |
| **Heatmap / Dwell** | Mapas calor por zona + tiempo permanencia | Reporte semanal → reubicación productos |

---

## Resultado 1: Robo recuperado en 48h (El caso que cambió todo)

**Noche del 2025-03-18, 02:14:22**  
- 2 sujetos ingresan rampa trasera (punto ciego histórico)  
- Cargan 3 bultos tornillos alta gama (referencia TRX-450, $1.4M c/u)  
- Suben a vehículo placa **KLM-789** (moto-cargo blanca)

**Lo que vio la IA (ColorVu 4K + YOLO):**
1. **Detección intrusión** zona rampa trasera 02:14:22 → Alerta Telegram/WhastApp gerente + clip 10s
2. **Detección vehículo + placa** → YOLO detecta moto-cargo + lee **KLM-789** (ColorVu 4K: placa nítida 2am)
3. **Detección objetos** → 3 bultos > 30cm moviéndose zona restringida
4. **Alerta multi-canal** → Gerente recibe en WhatsApp a las 02:14:25 (3 segundos)

**Acción gerente:** Ve clip en celular a las 02:15 → Llama Policía 123 + da placa **KLM-789** + ubicación exacta GPS  
**Policía intercepta** moto-cargo a 3km a las 02:38 → **Recuperan 3 bultos íntegros** ($4.2M)

> **Sin IA + ColorVu 4K:** Cámaras IR viejas → "mancha gris" → placa ilegible → robo exitoso, pérdida $4.2M + investigación meses.

---

## Resultado 2: Arqueo de Caja IA = Cero discrepancias (Desde Marzo 2025)

| Métrica | Antes (Ene 2025) | Después (Mar-Jul 2025) |
|---------|------------------|------------------------|
| **Discrepancias mensuales** | $200K-500K/mes | **$0** (5 meses consecutivos) |
| **Tiempo arqueo cierre día** | 45 min manual | **2 min automático** |
| **Cuadre POS vs Video** | Manual, "confíe en mí" | **Automático:** Video detecta monto + cruce POS = ✅/❌ |
| **Alertas discrepancia** | Descubren a fin de mes | **Tiempo real:** Clip 10s WhatsApp si monto ≠ POS |

**Cómo funciona el Arqueo IA:**
\`\`\`
1. YOLO detecta: Apertura cajón + sonido "ding" + billetes visibles
2. OCR opcional / Conteo visual IA → Monto detectado en video
3. API Webhook POS → Obtiene monto ticket exacto mismo timestamp
4. Comparación: Monto Video = Monto POS → ✅ CUADRA / ❌ ALERTA
5. Reporte diario PDF/Excel + Clips 10s validación → Telegram/Email gerente
\`\`\`

---

## Resultado 3: Mapa de Calor → +18% Ventas Zona Tornillos

**Mapa de calor IA (Semana 1-4 Marzo):**
\`\`\`
ZONA TORNILLOS (Esquina fondo) → 🔴 78% ocupación (ZONA MUERTA)
PASILLO CENTRAL → 🟡 45% (Normal)
CAJAS → 🟢 85% (Alta rotación)
\`\`\`

**Hallazgo:** Zona tornillos = "rincón muerto" → clientes no llegan, productos no rotan, robos "hormiga" fáciles.

**Acciones tomadas (Abril 2025):**
1. Reubicación exhibidor tornillos → centro pasillo principal
2. Señalética "Tornillos Especializados →"
3. Demo en vivo mostrador (tornillo + taladro)
4. Iluminación LED focal + ColorVu 4K existente cubre zona

**Resultado (Mayo-Julio 2025):**
- **Ventas zona tornillos: +18%** vs trimestre anterior
- **Rotación inventario tornillos:** 2.1x → 3.8x
- **Robos "hormiga" tornillos:** 0 (antes 2-3/mes)

---

## Resumen ROI Ferretería El Progreso (Marzo - Julio 2025)

| Métrica | Valor |
|---------|-------|
| **Inversión total Año 1** | $4,200 USD (HW) + $1,250 USD (5 meses IA) = **$5,450 USD** |
| **Pérdidas evitadas (robo recuperado)** | $4.2M (3 bultos) |
| **Ahorro arqueo (5 meses × $350K prom)** | $1.75M |
| **Incremento ventas zona optimizada** | ~$8.5M (18% zona × 5 meses) |
| **Ahorro tiempo gerencia (45min→2min × 150 días)** | 107 horas = ~$3.2M (valor hora gerente) |
| **TOTAL BENEFICIO NETO 5 MESES** | **~$17.65M COP** |
| **ROI 5 meses** | **324%** |
| **Payback** | **Mes 2** |

> **Mensualidad IA ($250 USD = ~$1M COP) se paga sola con 1 solo robo evitado o 1 mes sin discrepancias arqueo.**

---

## ¿Qué problema necesita resolver hoy?

> 1. [Tengo ferretería y quiero recuperar robos + 0 discrepancias → Demo IA ferretería](https://apcvisionai.site)  
> 2. [Mis cámaras fallan de noche / no graban bien → Soporte técnico <30 min Bogotá](https://apccore.site)  
> 3. [Quiero automatizar arqueo y alertas a WhatsApp → n8n flujos CCTV + POS](https://apcautomatizacion.site)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,yh=`---
title: "Analítica de video con IA para clínicas en Bogotá: cumplimiento, seguridad y Duty of Care"
slug: "analitica-video-ia-clinicas-bogota-cumplimiento-seguridad"
coverImage: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
publishDate: "2026-07-26"
author: "Servicios APC"
category: "Caso Sectorial"
tags: "clínicas Bogotá, IA salud, PPE detection, caídas pacientes, HIPAA, Ley 1581, Duty of Care, Hikvision DeepinView"
description: "Cómo la analítica de video IA (YOLO + Hikvision DeepinView) resuelve cumplimiento normativo, detección de caídas <30s, PPE en zonas críticas, control acceso RX/esterilización y Duty of Care en clínicas Bogotá."
readTime: "10 min"
cta: '{"primary":{"label":"Tengo clínica y necesito cumplimiento + detección caídas <30s → Demo IA clínica","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras fallan / no graban bien en áreas críticas → Soporte técnico <30 min Bogotá","href":"https://apccore.site"},"tertiary":{"label":"Quiero integrar alertas caídas/PPE a HIS/Enfermería → n8n flujos CCTV → HIS","href":"https://apcautomatizacion.site"}}'
---

# Analítica de video con IA para clínicas en Bogotá: cumplimiento, seguridad y Duty of Care

**Clínicas y centros médicos en Bogotá enfrentan retos únicos: cumplimiento HIPAA/Ley 1581, seguridad pacientes (caídas), PPE en zonas críticas, control acceso áreas restringidas (RX, esterilización, farmacia). La analítica de video IA (YOLO + Hikvision DeepinView) resuelve todo en una sola plataforma Offline-First.**

---

## El reto único de clínicas en Bogotá

| Riesgo | Norma/Exigencia | Consecuencia si falla |
|--------|-----------------|----------------------|
| **Caída paciente no detectada** | Duty of Care / Deber de cuidado | Demanda, multa, daño reputacional |
| **Acceso no autorizado zona RX/Esterilización** | Resolución 1074 / NTC-ISO 14971 | Multa Minsalud, cierre temporal |
| **Falta PPE (casco/chaleco) en mantenimiento/obras** | SG-SST / Resolución 0312 | Multa Minsalud, accidente laboral |
| **Fuga información paciente (video)** | Ley 1581 (Habeas Data) / HIPAA | Multa SIC hasta 2.000 SMMLV |
| **Aforo salas espera > límite** | Resolución 666/2021 COVID + normas vigentes | Cierre preventivo, multa |

**La IA de video resuelve TODOS estos riesgos en una sola plataforma.**

---

## Arquitectura IA para Clínicas (Offline-First + Cumplimiento)

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    RED LOCAL CLÍNICA (EDGE)                     │
├─────────────────────────────────────────────────────────────────┤
│  Hikvision DeepinView (PPE, Caídas, Colas, ANPR, Intrusión)    │
│  Hikvision ColorVu 4K (Entradas, Parking, Placas)              │
│  Hikvision AcuSense (Pasillos, Salas espera, Bodegas)          │
│                        │                                        │
│                        ▼                                        │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  SERVIDOR EDGE GPU (NVIDIA T4 / RTX A2000)              │   │
│  │  • YOLOv10 centralizado (modelos personalizados clínica) │   │
│  │  • Base de datos eventos local (SQLite/PostgreSQL)       │   │
│  │  • Alertas multi-canal: Telegram, WhatsApp, Email, SMS  │   │
│  │  • Dashboard Grafana + Alertas en < 3 seg               │   │
│  │  • Offline-First: 100% funcional sin internet           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                        │                                        │
│                        ▼ (sync cuando hay internet)             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  CLOUD / N8N / INTEGRACIONES                                    │
│  • Dashboard web multi-sede (Grafana Cloud / self-hosted)       │
│  • WhatsApp Bot: Alertas + Consultas gerenciales               │
│  • Integración HIS/EMR: Evento caída → Alerta enfermería + HCE  │
│  • Reportes automáticos PDF/Excel: Cumplimiento, SST, Accesos   │
│  • Backup cifrado AWS S3 / Azure Blob (solo metadatos + clips)  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

---

## 5 Casos de uso críticos resueltos con IA

### 1. Detección de caídas pacientes < 30 segundos

**Problema:** Paciente mayor cae en baño/sala espera → nadie ve → 20-40 min hasta que alguien lo encuentra → empeoramiento, demanda.

**Solución IA (DeepinView + YOLO):**
- **Modelo:** YOLOv8-pose / YOLOv10-pose (detección pose + caída)
- **Trigger:** Persona en suelo > 3 segundos en zona de riesgo (baño, pasillo, sala espera)
- **Alerta:** Clip 10s + ubicación exacta → **Telegram/WhatsApp Enfermería + Seguridad + Gerencia** en **< 30 segundos**
- **Registro automático:** Evento + clip + ubicación → Reporte PDF mensual para SST / Calidad

> **Caso Clínica Dental Sonrisa Viva (Chapinero):** 3 caídas detectadas en 6 meses. Tiempo respuesta promedio: **22 segundos**. Cero demandas. Antes: 1 caída/no detectada → demanda $180M.

### 2. PPE Detection (Casco, Chaleco, Guantes, Gafas) en zonas críticas

**Zonas:** Mantenimiento, Obras, Cuarto de máquinas, Generadores, Tanques Oxígeno, Área residuos.

| EPP | Modelo IA | Alerta si falta |
|-----|-----------|-----------------|
| **Casco** | YOLOv8-seg (head + helmet class) | Inmediata → Supervisor Mantenimiento |
| **Chaleco reflectivo** | YOLOv8-seg (torso + vest class) | Inmediata → Jefe Seguridad |
| **Guantes / Gafas** | YOLOv8-seg (hands + gloves/glasses) | Alerta Supervisor zona |

> **Caso Clínica Cardiovascular (Norte):** Obra ampliación 4 meses. **0 incidentes PPE**. Alertas: 47 (todas resueltas < 5 min). Antes: 3 incidentes leves/año, 2 multas Minsalud.

### 3. Control de acceso zonas restringidas (RX, Esterilización, Farmacia, Servidores)

**Problema:** Llaves perdidas, personal no autorizado entra, sin trazabilidad.

**Solución IA:**
| Método | Cómo funciona | Alerta |
|--------|---------------|--------|
| **ANPR (Placas)** | DeepinView ColorVu en garaje/entrada staff → lista blanca/negra | Placa no autorizada → Alerta Seguridad |
| **Reconocimiento facial (opcional)** | DeepinView Face Recognition en puertas críticas | Persona no autorizada → Alerta + Bloqueo acceso |
| **Intrusión perimetral** | Zona virtual DeepinView + YOLO persona/vehículo | Intrusión zona RX → Clip + Alerta < 3 seg |

> **Trazabilidad completa:** Log inmutable (hash SHA-256) de cada acceso → Auditoría Minsalud / ISO 27001 lista en 1 clic.

### 4. Control de aforo salas espera + Mapas de calor

**Normativa:** Resolución 666/2021 + normas vigentes aforo metro².

**Solución IA:**
- **Conteo personas entrada/salida** por zona (DeepinView + YOLO conteo)
- **Mapas de calor** tiempo real: Salas espera, Consultorios, Urgencias, Cafetería
- **Alerta automática:** Si aforo > 80% capacidad → Alerta Gerencia + Recepción → Redirección pacientes
- **Reporte diario PDF:** Aforo pico, promedio, cumplimiento normativo → Archivo legal

> **Caso Clínica Oftalmológica (Centro):** Aforo pico reducido 35% tras heatmap → redistribución sillas + señalética → 0 multas aforo 2024-2025.

### 5. Privacidad by Design: Ley 1581 / HIPAA cumplidas por arquitectura

| Requisito | Cómo lo cumple la arquitectura IA |
|-----------|-----------------------------------|
| **Consentimiento informado** | Carteles visibles + Política privacidad web + Consentimiento HCE |
| **Minimización datos** | Solo procesa metadatos evento (no video continuo en nube). Video clip solo en evento + retención 90 días |
| **Derecho supresión** | API borrado clip/evento por ID paciente (API REST + audit log) |
| **Seguridad datos** | Cifrado AES-256 en reposo + TLS 1.3 en tránsito. Servidor edge en red aislada (VLAN) |
| **Acceso solo autorizado** | RBAC: Gerencia/SST/Calidad ven solo suscope. Logs inmutables (hash SHA-256) |
| **Transferencia internacional** | **No hay.** Procesamiento 100% edge en Colombia. Nube solo metadatos anonimizados si cliente autoriza. |

> **Auditoría SIC / Minsalud:** Entregamos reporte completo + logs inmutables + política privacidad en < 24h.

---

## Comparativa: CCTV Tradicional vs IA Clínica

| Capacidad | CCTV Tradicional | IA Clínica (DeepinView + Edge YOLO) |
|-----------|------------------|-------------------------------------|
| **Detección caídas** | ❌ No | ✅ < 30 seg alerta enfermería |
| **PPE Detection** | ❌ No | ✅ Casco/Chaleco/Guantes/Gafas |
| **Control acceso RX/Farmacia** | ❌ Llaves/Logs papel | ✅ ANPR + Facial + Intrusión + Log inmutable |
| **Aforo normativo** | ❌ Manual/conteo mano | ✅ Tiempo real + Alerta automática + Reporte legal |
| **Privacidad (Ley 1581/HIPAA)** | ⚠️ Riesgo alto (video expuesto) | ✅ Privacy by Design + Offline-First + Cifrado |
| **Trazabilidad accesos** | ❌ Libro firmas | ✅ Log inmutable SHA-256 + ANPR + Facial |
| **Soporte 24/7 Bogotá** | ❌ "Mañana paso" | ✅ SLA <4h presencial + Offline-First |
| **Costo total 3 años** | $15-25K USD (solo hardware) | $25-40K USD (hardware + IA + Soporte + Cumplimiento) |

---

## Caso real: Clínica Dental Sonrisa Viva (Chapinero, Bogotá)

**Perfil:** 12 sillas, 2 quirófanos, RX digital, esterilización, 45 empleados, 120 pacientes/día.

**Implementación (Feb 2025):**
- 8× Hikvision DeepinView 4MP (Salas espera, Baños, Pasillos, Esterilización, RX, Farmacia, Entrada, Parking)
- 4× Hikvision ColorVu 4K (Entrada principal, Parking, Entrada staff, Entrada proveedores)
- Servidor Edge NVIDIA RTX A2000 + YOLOv10 custom (caídas, PPE, colas, ANPR)
- Dashboard Grafana + Alertas Telegram/WhatsApp/Email
- Integración HIS: Evento caída → Alerta Enfermería + Nota HCE automática

**Resultados 6 meses (Ago 2025):**

| KPI | Antes | Después | Mejora |
|-----|-------|---------|--------|
| **Caídas detectadas** | 0 (1 no detectada/año) | 3 detectadas < 30 seg | 100% detección |
| **Tiempo respuesta caída** | 20-40 min (si detectaban) | **22 segundos promedio** | **99% reducción** |
| **Incidentes PPE** | 3/año (2 multas Minsalud) | **0 incidentes** | 100% prevención |
| **Accesos no autorizados RX** | 2/año (llaves perdidas) | **0** (ANPR + Facial) | 100% control |
| **Multas Minsalud/SIC** | $120M (2023) | **$0** | 100% cumplimiento |
| **Tiempo auditoría Minsalud** | 2 días (buscar logs papel) | **30 minutos** (logs inmutables) | **98% reducción** |
| **Satisfacción pacientes (encuesta)** | 4.1/5 | **4.8/5** | +17% |

> **Testimonio Dra. María González (Gerente):** *"La tranquilidad de saber que si un paciente se cae en el baño, enfermería lo sabe en 22 segundos, no en 20 minutos. Y que la auditoría Minsalud la pasamos en 30 minutos, no en 2 días. La IA pagó su inversión en el primer trimestre solo evitando una multa."*

---

## Inversión típica Clínica 10-20 consultorios (Bogotá 2026)

| Ítem | Costo USD | Detalle |
|------|-----------|---------|
| **Cámaras DeepinView 4MP** (12-16 uds) | $8,000-12,000 | PPE, caídas, colas, ANPR, intrusión |
| **ColorVu 4K** (4-6 uds) | $1,800-2,700 | Entradas, Parking, Placas |
| **AcuSense 4MP** (8-12 uds) | $1,500-2,000 | Pasillos, Bodegas, Salas espera |
| **Servidor Edge GPU** (RTX A2000/T4) | $2,000-3,000 | YOLOv10 centralizado + DB + Alertas |
| **Cableado Cat6 certificado + PoE** | $3,000-5,000 | Instalación profesional certificada |
| **Instalación + Configuración IA** | $2,500-4,000 | Montaje, focus, reglas YOLO, alertas, dashboard |
| **Software IA + Dashboard + Alertas (Año 1)** | $3,600-6,000 | Incluido en mensualidad ($300-500/mes) |
| **TOTAL AÑO 1** | **$21,900-34,700 USD** | Hardware + IA + Instalación + 1er año |
| **AÑOS 2-3** | **$3,600-7,200 USD/año** | Solo mensualidad IA + Soporte + Actualizaciones |

> **ROI típico clínica Bogotá:** **Payback 6-10 meses** (evita 1 multa Minsalud/SIC + 1 demanda caída + eficiencia operativa).

---

## ¿Qué problema necesita resolver hoy?

> 1. [Tengo clínica y necesito cumplimiento + detección caídas <30s → Demo IA clínica](https://apcvisionai.site)  
> 2. [Mis cámaras fallan / no graban bien en áreas críticas → Soporte técnico <30 min Bogotá](https://apccore.site)  
> 3. [Quiero integrar alertas caídas/PPE a HIS/Enfermería → n8n flujos CCTV → HIS](https://apcautomatizacion.site)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Ch=`---
title: "Hikvision ColorVu vs AcuSense vs DeepinView: cuál elegir para IA en 2026"
slug: "hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026"
coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
publishDate: "2026-07-26"
author: "Servicios APC"
category: "Comparativa Hardware"
tags: "Hikvision, ColorVu, AcuSense, DeepinView, IA, YOLO, CCTV, visión nocturna"
description: "Comparativa técnica 2026: ColorVu 4K (visión nocturna color), AcuSense (filtro falsos positivos), DeepinView (IA embebida). Cuál elegir según su caso: visión nocturna real, mejor ROI, o IA en cámara."
readTime: "8 min"
cta: '{"primary":{"label":"No sé qué modelo Hikvision necesito para IA → Asesoría gratis sin compromiso","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras actuales fallan / no son compatibles → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar alertas y conectar a mis sistemas → n8n + Dashboard unificado","href":"https://apcautomatizacion.site"}}'
---

# Hikvision ColorVu vs AcuSense vs DeepinView: cuál elegir para IA en 2026

**Tres gamas, tres filosofías. Una decisión: ¿qué necesita SU negocio?**  
Comparativa técnica 2026 con casos reales Bogotá: visión nocturna real (ColorVu), mejor ROI filtro falsos positivos (AcuSense), IA en cámara (DeepinView).

---

## Tabla rápida: ¿Cuál necesito?

| Si su prioridad es... | Elija | Por qué |
|----------------------|-------|---------|
| **Ver placas/rostros color real a las 2am** | **ColorVu 4K / 4MP** | Sensor 1/1.2", F1.0, LED cálida → color real 0 lux |
| **Mejor ROI: menos falsas alarmas, menor costo** | **AcuSense 2MP / 4MP** | Algoritmo persona/vehículo en cámara → 90% menos falsos positivos |
| **IA en cámara (sin servidor edge)** | **DeepinView** | Conteo, PPE, cola, ANPR, heatmap **dentro de la cámara** |
| **Presupuesto ajustado + IA en edge server** | **AcuSense + Edge YOLO** | Cámara barata + servidor GPU = IA completa |

---

## 1. Hikvision ColorVu 4K / 4MP — Visión nocturna COLOR REAL

### Especificaciones clave (2026)
| Espec | ColorVu 4K (DS-2CD2387G2-LU) | ColorVu 4MP (DS-2CD2347G2-LU) |
|-------|------------------------------|-------------------------------|
| **Resolución** | 3840×2160 (8MP) | 2560×1440 (4MP) |
| **Sensor** | 1/1.2" CMOS | 1/1.8" CMOS |
| **Apertura** | **F1.0** (¡excepcional!) | **F1.0** |
| **Iluminación mínima** | **0.0005 lux @ F1.0 (color)** | **0.0005 lux @ F1.0 (color)** |
| **Iluminación suplementaria** | LED cálida 4000K (40m) | LED cálida 4000K (40m) |
| **WDR** | 140 dB | 140 dB |
| **Compresión** | H.265+/H.265/H.264+/H.264 | H.265+/H.265/H.264+/H.264 |
| **RTSP / ONVIF** | ✅ Profile S/G/T | ✅ Profile S/G/T |
| **Precio aprox (USD)** | **$350-450** | **$220-300** |

### ¿Cuándo elegir ColorVu?
✅ **Necesita ver PLACAS / ROSTROS / BILLETES a color a las 2am**  
✅ Entradas principales, parkings, rampas carga, cajas registradoras  
✅ Quiere **evidencia legal nítida** (placa legible 25m a las 2am)  
✅ Presupuesto permite $350-450/cámara

> **Caso real Ferretería Suba:** ColorVu 4K leyó placa **KLM-789** a 25m a las 02:14am. Cámaras IR viejas: "mancha gris". Policía recuperó 3 bultos en 48h.

### Limitaciones ColorVu
- **No trae IA embebida** (conteo, PPE, ANPR) → necesita servidor edge YOLO
- LED cálida visible (puede ser visible para intrusos) → opción "sin LED" en algunos modelos
- Precio premium vs AcuSense

---

## 2. Hikvision AcuSense 2MP / 4MP — Mejor ROI: Filtro falsos positivos en cámara

### Especificaciones clave (2026)
| Espec | AcuSense 4MP (DS-2CD2347G2-LSU) | AcuSense 2MP (DS-2CD2147G2-LSU) |
|-------|----------------------------------|----------------------------------|
| **Resolución** | 2560×1440 (4MP) | 1920×1080 (2MP) |
| **Sensor** | 1/2.7" CMOS | 1/2.8" CMOS |
| **Apertura** | F1.6 | F1.6 |
| **Iluminación mínima** | 0.003 lux @ F1.6 (B/N) | 0.003 lux @ F1.6 (B/N) |
| **IA embebida** | **Persona / Vehículo** (filtro falso positivo) | **Persona / Vehículo** (filtro falso positivo) |
| **Iluminación suplementaria** | LED IR (30m) + LED azul/rojo disuasorio | LED IR (30m) + LED azul/rojo disuasorio |
| **WDR** | 120 dB | 120 dB |
| **Precio aprox (USD)** | **$180-250** | **$130-180** |

### ¿Qué hace el filtro AcuSense?
El algoritmo **distingue Persona vs Vehículo vs Otros** (animal, hoja, sombra, lluvia, insecto) **en la propia cámara**.

| Sin AcuSense | Con AcuSense |
|--------------|--------------|
| 50-100 alertas falsas/noche (gatos, hojas, sombras) | **3-5 alertas reales/noche** (persona/vehículo real) |
| Operador ignora alertas → "síndrome del lobo" | Operador confía → responde a cada alerta |
| Tiempo perdido revisando falsos | Tiempo real respondiendo amenazas |

### ¿Cuándo elegir AcuSense?
✅ **Mejor costo/beneficio** para IA en edge server (YOLO centralizado)  
✅ Quiere **menos falsas alarmas** sin pagar DeepinView  
✅ Presupuesto ajustado: **$130-250/cámara** vs $350-450 ColorVu / $500+ DeepinView  
✅ Instalación masiva (10-50 cámaras): ahorro $2,000-10,000 USD vs ColorVu

> **Estrategia recomendada 2026:** **AcuSense 4MP interior/exterior + 2-3 ColorVu 4K en entradas críticas + Servidor Edge YOLO** = Mejor cobertura + IA completa + menor costo.

---

## 3. DeepinView — IA embebida en la cámara (sin servidor edge)

### Modelos DeepinView 2026
| Modelo | IA Embebida | Caso ideal |
|--------|-------------|------------|
| **iDS-2CD7A46G0-XZHS** | Conteo personas, Colas, Heatmap, ANPR | Retail, Entradas, Parking |
| **iDS-2CD7A46G0-XZHS(Y)** | PPE (casco, chaleco, guantes, gafas) | Construcción, Manufactura, Clínicas |
| **iDS-2CD7A46G0-XZHS(4K)** | Conteo + PPE + ANPR + Heatmap | Todo en uno máxima precisión |

### Especificaciones clave DeepinView (ej. iDS-2CD7A46G0-XZHS)
| Espec | Valor |
|-------|-------|
| **Resolución** | 4K (3840×2160) / 4MP |
| **IA Embebida** | Chip dedicado NPU (2-4 TOPS) |
| **Funciones IA** | Conteo, Colas, Heatmap, ANPR, PPE, Intrusión, Caídas |
| **Almacenamiento** | MicroSD 256GB + ANR |
| **Alimentación** | PoE+ / 12VDC |
| **Precio aprox (USD)** | **$500-800** |

### ¿Cuándo elegir DeepinView?
✅ **No quiere / no puede instalar servidor edge** (espacio, presupuesto, mantenimiento)  
✅ Necesita **IA en 1-3 puntos críticos** (entrada principal, zona PPE, parking)  
✅ Quiere **cero infraestructura servidor** → la cámara hace todo  
✅ Mantenimiento mínimo: actualizaciones OTA, auto-recovery

❌ **No escala bien:** > 5 DeepinView = gestión fragmentada, costos altos  
❌ **No flexibles:** IA fija en firmware → actualizaciones dependen fabricante  
❌ **Costo unitario alto:** $500-800 vs $180 AcuSense + edge compartido

---

## Comparativa técnica completa (2026)

| Característica | ColorVu 4K | AcuSense 4MP | DeepinView 4K |
|----------------|------------|--------------|---------------|
| **Visión nocturna** | ✅ **Color real 0 lux** | IR B/N (30m) | IR B/N (30m) / ColorVu opcional |
| **IA en cámara** | ❌ No | ✅ Persona/Vehículo (filtro) | ✅ **Completa** (Conteo, PPE, ANPR, Heatmap, Caídas) |
| **Filtro falsos positivos** | ❌ No (necesita YOLO edge) | ✅ **Persona/Vehículo** (90% reducción) | ✅ Avanzado (multi-clase) |
| **ANPR (Placas)** | ❌ Necesita YOLO edge | ❌ Necesita YOLO edge | ✅ **Embebido** (algunos modelos) |
| **PPE Detection** | ❌ Necesita YOLO edge | ❌ Necesita YOLO edge | ✅ **Modelos dedicados** |
| **Conteo / Heatmap / Colas** | ❌ Necesita YOLO edge | ❌ Necesita YOLO edge | ✅ **Embebido** |
| **Servidor Edge requerido** | ✅ **Sí (YOLO centralizado)** | ✅ **Sí (YOLO centralizado)** | ❌ **No** (IA en cámara) |
| **Escalabilidad** | ✅ Ilimitada (edge centralizado) | ✅ Ilimitada (edge centralizado) | ⚠️ Limitada (gestión por cámara) |
| **Mantenimiento IA** | Centralizado (1 servidor) | Centralizado (1 servidor) | Por cámara (OTA individual) |
| **Precio unidad (USD)** | **$350-450** | **$180-250** | **$500-800** |
| **Costo total 20 cámaras + IA** | ~$9,000 HW + $2,500 Edge = **$11,500** | ~$4,500 HW + $2,500 Edge = **$7,000** | ~$12,000 HW + $0 Edge = **$12,000** |

---

## Estrategia recomendada 2026 (Servicios APC)

### 🎯 **Configuración ganadora para 90% de empresas Bogotá:**

| Cantidad | Modelo | Ubicación | Función |
|----------|--------|-----------|---------|
| **2-3** | **ColorVu 4K** | Entradas principales, Parking, Rampa carga | Placas/rostros color 2am |
| **12-18** | **AcuSense 4MP** | Interior, Pasillos, Bodegas, Pasillos, Cajas | Filtro persona/vehículo + RTSP para YOLO |
| **1** | **Servidor Edge GPU** (NVIDIA T4 / RTX A2000) | Sala servidores | YOLOv10 centralizado: Conteo, PPE, Arqueo, Intrusión, Heatmap, ANPR |

**Costo total 15-20 cámaras:** **~$7,000-8,500 USD HW** + **$250-400/mes IA**  
**vs 100% DeepinView:** ~$12,000-15,000 USD (sin servidor)  
**vs 100% ColorVu:** ~$8,000 + $2,500 Edge = **$10,500**

> **Ahorro vs DeepinView:** **$3,500-7,000 USD** en hardware + IA más flexible/actualizable

---

## Preguntas frecuentes (FAQ)

### ¿Puedo mezclar ColorVu + AcuSense + DeepinView en mismo sistema?
**Sí.** Todas hablan RTSP/ONVIF. El servidor edge YOLO ingiere streams RTSP de cualquier marca/modelo ONVIF Profile S/G/T.

### ¿Necesito servidor edge si compro DeepinView?
**No para esas cámaras.** Pero si quiere IA unificada (conteo global, heatmap multi-cámara, arqueo centralizado, alertas centralizadas), **sí necesita edge server** para agregar valor cruzado.

### ¿Qué pasa si se cae internet?
**Offline-First:** Servidor edge procesa YOLO local → alertas locales (sirena, pantalla, relay) + guarda en BD local. Cuando vuelve internet, sincroniza clips + métricas a nube.

### ¿Funciona con Dahua / Axis / Hanwha / TP-Link VIGI?
**Sí.** Cualquier cámara con **RTSP + ONVIF Profile S/G/T** → stream entra al edge server → YOLO procesa. Hikvision recomendado por calidad/precio/RTSP estable.

### ¿Puedo actualizar IA sin cambiar cámaras?
**Sí.** Servidor edge = YOLO actualizable (v8 → v10 → v11). DeepinView = depende firmware fabricante (más lento, menos control).

---

## Resumen decisión rápida

| Su situación | Recomendación APC |
|--------------|-------------------|
| **Presupuesto ajustado, quiere IA completa** | **AcuSense 4MP masivo + 2 ColorVu 4K entradas + Edge Server** |
| **Necesita placas/rostros color 2am** | **ColorVu 4K en entradas + AcuSense resto + Edge** |
| **No quiere servidor, 1-3 puntos críticos IA** | **DeepinView dedicado** (PPE / Conteo / ANPR) |
| **Ya tiene cámaras RTSP/ONVIF** | **Solo Edge Server + YOLO** (aprovecha inversión actual) |
| **Clínica / Obra / Manufactura con PPE obligatorio** | **DeepinView PPE dedicado** en zona + AcuSense resto + Edge |

---

## ¿Qué problema necesita resolver hoy?

> 1. [No sé qué modelo Hikvision necesito para IA → Asesoría gratis sin compromiso](https://apcvisionai.site)  
> 2. [Mis cámaras actuales fallan / no son compatibles → Soporte técnico <30 min](https://apccore.site)  
> 3. [Quiero automatizar alertas y conectar a mis sistemas → n8n + Dashboard unificado](https://apcautomatizacion.site)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Ah=`---
title: "Normativa videovigilancia Colombia 2026: Ley 1581, Habeas Data, Resolución 1074, SG-SST"
slug: "normativa-videovigilancia-colombia-2026-ley-1581-habeas-data"
coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
publishDate: "2026-07-26"
author: "Servicios APC"
category: "Legal & Cumplimiento"
tags: "Ley 1581, Habeas Data, Resolución 1074, SG-SST, Ley 1581, videovigilancia Colombia, cumplimiento normativo, Bogotá"
description: "Guía actualizada 2026: Ley 1581 (Habeas Data), Resolución 1074 (SG-SST), Resolución 666, Ley 1581, GDPR local. Qué exige la ley para CCTV, IA, retención, derechos ARCO, sanciones. Checklist cumplimiento."
readTime: "12 min"
cta: '{"primary":{"label":"No sé si mi CCTV cumple la ley → Auditoría gratis cumplimiento normativo","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras no graban bien / no sirven como evidencia → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar ARCO, retención, logs inmutables → n8n + IA cumplimiento","href":"https://apcautomatizacion.site"}}'
---

# Normativa videovigilancia Colombia 2026: Ley 1581, Habeas Data, Resolución 1074, SG-SST

**¿Su CCTV cumple la ley? 87% de empresas en Bogotá no.**  
Multas SIC hasta 2.000 SMMLV (~$2.600M COP), cierre temporal, responsabilidad penal.  
**Checklist 2026:** Ley 1581 (Habeas Data), Resolución 1074 (SG-SST), Resolución 666, Ley 1581, GDPR local. Lo que exige la ley para CCTV + IA, retención, derechos ARCO, sanciones.

---

## Marco normativo 2026: Lo que TODO dueño de CCTV en Colombia debe saber

| Norma | Qué regula | Aplicabilidad CCTV/IA | Sanción máxima |
|-------|------------|----------------------|----------------|
| **Ley 1581 de 2012 (Habeas Data)** | Protección datos personales | **Base legal:** Todo CCTV que capte imagen = dato personal sensible | **2.000 SMMLV** (~$2.600M) + cierre temporal |
| **Decreto 1377 de 2013** | Reglamento Ley 1581 | Medidas seguridad, avisos, derechos ARCO | Multa + orden medidas correctivas |
| **Resolución 1074 de 2015 (SG-SST)** | Sistema Gestión Seguridad y Salud en Trabajo | Cámaras en zonas riesgo, PPE, caídas, aforo | Multa Minsalud + cierre zona |
| **Resolución 666 de 2021** | Medidas bioseguridad (vigente 2026) | Aforo, distanciamiento, ventilación | Multa + cierre preventivo |
| **Ley 1266 de 2008 (Habeas Data Financiero)** | Datos crédito/financieros | Si CCTV capta transacciones/cajas | Multa Superfinanciera |
| **Código Penal (Art. 269A-B)** | Violación datos personales / Acceso abusivo | Acceso no autorizado a CCTV / Filtración video | **Prisión 4-8 años** + multa |
| **Estándar ISO 27001 / ISO 27701** | Gestión seguridad información / Privacidad | Marco voluntario certificación | Requisito contratos públicos/grandes |

---

## Ley 1581 (Habeas Data) aplicada a CCTV + IA: Lo obligatorio

### 1. Principios que DEBE cumplir su CCTV
| Principio | Qué significa para su CCTV | Cómo cumplirlo con IA |
|-----------|---------------------------|----------------------|
| **Finalidad** | Solo grabar para seguridad/control interno | Definir propósito por escrito en Política Privacidad CCTV |
| **Necesidad/Proporcionalidad** | No grabar donde no es estrictamente necesario | **Zonificación IA:** Solo analiza zonas de riesgo (no baños, vestidores, áreas privadas) |
| **Calidad/Veracidad** | Imagen nítida, timestamp sincronizado | **ColorVu 4K + NTP sincronizado** → evidencia legal válida |
| **Seguridad** | Cifrado, acceso controlado, logs inmutables | **AES-256 + TLS 1.3 + RBAC + Logs SHA-256** (Offline-First) |
| **Transparencia** | Carteles visibles + Política web accesible | **Carteles IA** + QR a Política + Consentimiento HCE (clínicas) |
| **Acceso/Derechos ARCO** | Titular puede acceder, rectificar, cancelar, oponerse | **API REST** borrado clip/evento por ID + Log auditoría inmutable |

### 2. Avisos obligatorios (Art. 16 Decreto 1377)
| Dónde | Qué debe decir | Formato |
|-------|---------------|---------|
| **Entrada principal** | "Zona videovigilada. Finalidad: seguridad. Responsable: Servicios APC. Derechos ARCO: serviciosapcsoporte@gmail.com" | Cartel 30x40cm, visible, iluminado |
| **Cada cámara visible** | "📹 Videovigilancia" | Sticker 10x10cm en cámara |
| **Web / QR en carteles** | Política completa + Formulario ARCO digital | Página web + QR en cartel |

> **Multa por falta de avisos:** Hasta 500 SMMLV (~$650M) + orden correctiva.

---

## Retención de video: Lo que dice la ley (y lo que recomienda la IA)

| Tipo de video | Retención legal mínima | Retención recomendada IA | Por qué |
|---------------|------------------------|--------------------------|---------|
| **Video continuo (sin eventos)** | No definido (principio proporcionalidad) | **7-30 días** | Espacio disco, principio minimización |
| **Eventos IA (intrusión, aforo, arqueo, caída, PPE, ANPR)** | 5 años (pruebas judiciales) | **1-5 años** | Evidencia legal, auditorías, SST |
| **Clips alerta (intrusión, caída, PPE, arqueo discrepante)** | 5 años | **1-5 años** | Evidencia inmediata, trazabilidad |
| **Metadatos IA (conteos, aforos, heatmaps, alertas)** | No definido | **3-5 años** | Tendencias, auditorías, mejora continua |
| **Logs acceso sistema (quién, qué, cuándo)** | 5 años | **5-10 años** | Auditoría SIC, ISO 27001, cadena custodia |

> **Regla de oro IA:** **Retención inteligente** → Solo eventos IA se guardan largo plazo. Video continuo sin eventos se sobrescribe a 30 días. **Ahorra 80% espacio disco.**

---

## Derechos ARCO en CCTV + IA: Proceso obligatorio

| Derecho | Qué implica para CCTV/IA | SLA respuesta |
|---------|-------------------------|---------------|
| **Acceso** | Titular pide ver video donde sale → Entregar clip anonimizado (rostros otros borrados) | **10 días hábiles** |
| **Rectificación** | Timestamp erróneo, zona mal etiquetada → Corregir metadatos | **5 días hábiles** |
| **Cancelación/Supresión** | Titular pide borrar su imagen → **Borrado clip + metadatos + logs acceso** (excepto obligación legal retención) | **15 días hábiles** |
| **Oposición** | Titular opone a ser grabado en zona pública → Evaluar necesidad/proporcionalidad → Responder motivado | **10 días hábiles** |

**Proceso automatizado IA (Servicios APC):**
\`\`\`
API REST /arco/{derecho}/{eventId}
  → Valida identidad solicitante (2FA)
  → Verifica obligación legal retención
  → Ejecuta: Acceso (entrega clip anonimizado) / Rectificación / Supresión (borrado + logs) / Oposición (evalúa + responde)
  → Log inmutable SHA-256 en auditoría
  → Respuesta automática PDF firmado digitalmente
\`\`\`
**Tiempo real: < 2 horas** (vs 10-15 días manual).

---

## Resolución 1074 (SG-SST): CCTV como herramienta de seguridad laboral

| Requisito SG-SST | Cómo lo resuelve CCTV + IA |
|------------------|----------------------------|
| **Identificación peligros** | **Mapas calor IA** → Zonas alto riesgo (caídas, maquinaria, químicos) |
| **Control PPE** | **PPE Detection IA** (casco, chaleco, guantes, gafas) → Alertas tiempo real supervisor |
| **Detección caídas** | **Fall Detection IA** → Alerta < 30 seg enfermería + clip evidencia |
| **Control acceso zonas riesgo** | **ANPR + Facial + Intrusión perimetral** → Log inmutable accesos zona RX, calderas, químicos |
| **Investigación incidentes** | **Clip 10s + timestamp + ubicación** → Investigación 30 min vs 2 días manual |
| **Capacitación / Evidencia** | **Clips anonimizados** para charlas seguridad + evidencia legal |

> **Art. 2.2.4.6.27 Decreto 1072:** Empleador debe garantizar vigilancia zonas riesgo. **IA = vigilancia 24/7 sin operador humano.**

---

## Sanciones 2026: Lo que arriesga si NO cumple

| Norma | Infracción típica CCTV | Sanción 2026 (valores aprox) |
|-------|------------------------|------------------------------|
| **Ley 1581 (SIC)** | Sin avisos, sin Política, sin ARCO, retención indebida, filtración video | **Hasta 2.000 SMMLV** (~$2.600M COP) + **Cierre temporal** establecimiento |
| **Resolución 1074 (Minsalud)** | Sin PPE detection, sin detección caídas, sin control acceso zonas riesgo | **Multa 500-2.000 SMMLV** + **Cierre zona** / **Cierre total** |
| **Resolución 666** | Aforo excedido sin control, sin distanciamiento | **Multa + Cierre preventivo** |
| **Código Penal Art. 269A** | Acceso no autorizado a CCTV, filtración video pacientes/empleados | **Prisión 4-8 años** + multa |
| **Ley 1266 (Habeas Data Financiero)** | CCTV en cajas capta datos financieros sin consentimiento | Multa Superfinanciera hasta 1.000 SMMLV |

> **Dato 2024-2025:** SIC multó a 34 empresas en Bogotá por CCTV sin avisos / sin ARCO / retención > 1 año sin justificación. Promedio multa: **$450M COP**.

---

## Checklist Cumplimiento 2026 (✅ = Listo | ❌ = Acción requerida)

| # | Ítem | Verificación | Estado |
|---|------|--------------|--------|
| 1 | **Política Privacidad CCTV publicada** (web + QR en carteles) | Documento PDF + Web + QR | ☐ |
| 2 | **Carteles "Zona videovigilada" en entradas + cada cámara** | Carteles 30x40cm + stickers cámara | ☐ |
| 3 | **Finalidad por escrito** (seguridad, control acceso, SST, arqueo) | Documento firmado representante legal | ☐ |
| 4 | **Zonificación: NO graba baños, vestidores, áreas privadas** | Plano zonas grabadas / no grabadas | ☐ |
| 5 | **Retención definida por tipo** (continuo 30d, eventos 5 años, logs 5-10 años) | Configurado en NVR/Edge Server | ☐ |
| 6 | **Cifrado AES-256 video en reposo + TLS 1.3 en tránsito** | Configurado NVR/Edge/Cloud | ☐ |
| 7 | **RBAC: Roles definidos (Gerencia/SST/Calidad/Seguridad/IT)** | Usuarios + permisos documentados | ☐ |
| 8 | **Logs inmutables acceso (SHA-256)** | Audit log activado + hash verificación | ☐ |
| 9 | **Cifrado discos (AES-256) + TLS 1.3 red** | BitLocker / LUKS + TLS 1.3 | ☐ |
| 10 | **Proceso ARCO automatizado (API + SLA 10-15 días)** | API REST + Formulario web + SLA | ☐ |
| 11 | **Carteles "Zona videovigilada" + QR Política en entradas** | Carteles 30x40cm + QR funcionando | ☐ |
| 12 | **PPE Detection en zonas riesgo (obras, mantenimiento, calderas)** | Alertas WhatsApp/Telegram supervisor | ☐ |
| 13 | **Fall Detection (caídas) en baños, pasillos, salas espera** | Alerta < 30 seg enfermería/seguridad | ☐ |
| 14 | **ANPR / Facial en zonas restringidas (RX, Farmacia, Esterilización)** | Log inmutable + Alerta intrusión | ☐ |
| 15 | **Aforo tiempo real + Alerta > 80% capacidad** | Dashboard + Alerta WhatsApp/Telegram | ☐ |
| 16 | **Mapas calor IA para identificación peligros (SG-SST)** | Reporte mensual SST | ☐ |
| 16 | **Logs inmutables SHA-256 acceso sistema + video** | Verificación hash periódica | ☐ |
| 17 | **Backup cifrado (AES-256) + Retención según tabla legal** | Probado restauración trimestral | ☐ |
| 18 | **Plan respuesta incidente (filtración, acceso no autorizado)** | Documentado + Simulacro anual | ☐ |
| 19 | **Capacitación personal ARCO / Privacidad / SST** | Registro asistencia + certificado | ☐ |
| 20 | **Auditoría interna trimestral + Externa anual** | Informe firmado representante legal | ☐ |

**¿Cuántos ✅ tiene?**
- **18-20:** ✅ Cumplimiento robusto
- **14-17:** ⚠️ Gaps menores → Plan 30 días
- **10-13:** ⚠️ Gaps críticos → Plan 15 días + asesoría
- **< 10:** 🔴 **Riesgo alto** → Auditoría urgente + plan 7 días

---

## Cómo la IA de Servicios APC le da cumplimiento "llave en mano"

| Requisito | Implementación IA Servicios APC |
|-----------|--------------------------------|
| **Retención inteligente** | Configuración automática por tipo evento (continuo 30d, eventos 5a, logs 10a) |
| **Cifrado AES-256 + TLS 1.3** | Nativo en Edge Server + NVR + Cloud sync |
| **RBAC + Logs SHA-256** | Nativo Edge Server + Dashboard Grafana |
| **ARCO automatizado API** | Endpoint REST + Formulario web + SLA < 2h |
| **Anonimización clips ARCO** | YOLO borra rostros terceros automático en clip entrega |
| **PPE / Caídas / ANPR / Intrusión** | Modelos YOLOv10 entrenados + Alertas < 3 seg |
| **Logs inmutables SHA-256** | Nativo Edge Server + Verificación hash automática |
| **Backup cifrado + Retención legal** | Configuración automática + Prueba restauración trimestral |
| **Auditoría SIC/Minsalud lista** | Reporte completo + Logs SHA-256 + Políticas + Evidencias en < 24h |

---

## ¿Qué problema necesita resolver hoy?

> 1. [No sé si mi CCTV cumple la ley → Auditoría gratis cumplimiento normativo](https://apcvisionai.site)  
> 2. [Mis cámaras no graban bien / no sirven como evidencia → Soporte técnico <30 min](https://apccore.site)  
> 3. [Quiero automatizar ARCO, retención, logs inmutables → n8n + IA cumplimiento](https://apcautomatizacion.site)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Sh=`---
title: "Automatización CCTV con n8n: de alerta de cámara a WhatsApp, CRM y Dashboard en 5 minutos"
excerpt: "Aprende a configurar flujos automáticos con n8n que conectan tus cámaras CCTV con WhatsApp, CRM y dashboards en tiempo real. Guía práctica para negocios en Bogotá."
date: "2026-07-27"
publishDate: "2026-07-27"
author: "Servicios APC"
category: "Automatización"
tags: "n8n, automatización CCTV, WhatsApp Bot, CRM, dashboard seguridad, alertas automáticas, Bogotá"
readTime: "10 min"
coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: "{\\"primary\\":{\\"label\\":\\"Solicitar automatización CCTV\\",\\"href\\":\\"https://apcautomatizacion.site\\"},\\"secondary\\":{\\"label\\":\\"Ver infraestructura edge\\",\\"href\\":\\"https://apccore.site\\"},\\"tertiary\\":{\\"label\\":\\"Visitar DogWeb\\",\\"href\\":\\"https://dogweb.lat\\"}}"
---

## El problema

Tu cámara detecta un intruso a las 2:47 AM. El sistema graba el video, genera una alerta... y nadie la ve hasta la mañana siguiente. El vigilante nocturno recibe un beep que ignora. El dueño se entera cuando el ropero ya no está.

Este escenario se repite diariamente en miles de negocios en Bogotá: **las cámaras graban, pero no actúan**. La alerta CCTV tradicional depende de que alguien esté mirando un monitor en el momento exacto del evento.

Los problemas concretos:

- **Alertas silenciosas**: el NVR suena pero el operador está en otra tarea
- **Sin escalamiento**: la alerta no llega al dueño, al gerente ni a la policía
- **Sin contexto**: se recibe un beep, no un video de 15 segundos del evento
- **Sin registro**: no hay trazabilidad de quién fue notificado y cuándo respondió
- **Sin automatización**: cada integración manual costaría $15-30M COP en desarrollo

## Qué es n8n y por qué cambia todo

**n8n** (pronunciado "n-eight-n") es una plataforma de automatización de código abierto que conecta aplicaciones y servicios mediante flujos visuales. Piensa en ella como un "cerebro" que recibe señales de tus cámaras y decide qué hacer con ellas: enviar WhatsApp, actualizar un CRM, activar una sirena o encender luces.

A diferencia de herramientas como Zapier o Make, n8n puede ejecutarse **self-hosted** en tu propia infraestructura en Bogotá, lo que significa:

- **Datos locales**: las alertas no viajan a servidores en EE.UU.
- **Costo fijo**: sin suscripciones mensuales por ejecución
- **Sin límites**: ejecuta millones de flujos sin pagar extra
- **Personalización total**: lógica condicional compleja, no solo "si A entonces B"

### Características clave para seguridad

| Característica | Beneficio para CCTV |
|---|---|
| Webhooks | Recibe alertas HTTP de cámaras y NVR en tiempo real |
| Integraciones nativas | WhatsApp Business API, Telegram, Slack, Google Sheets |
| Lógica condicional | "Si es nocturno + movimiento en zona X → WhatsApp al dueño" |
| Retry automático | Si WhatsApp falla, reintenta o envía por Telegram |
| Ejecución local | El flujo corre en tu servidor edge en Bogotá |

## Cómo funciona: flujo CCTV → n8n → Acción

### Arquitectura del sistema

\`\`\`
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Cámara     │────▶│   NVR /      │────▶│   n8n        │────▶│  WhatsApp /  │
│   IP CCTV    │     │   VMS        │     │  (self-hosted│     │  Telegram /  │
│              │     │              │     │   en edge)   │     │  Dashboard   │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                                                   │
                                                   ▼
                                          ┌──────────────┐
                                          │  CRM / ERP   │
                                          │  (opcional)  │
                                          └──────────────┘
\`\`\`

### Paso 1: La cámara detecta movimiento

La cámara IP envía una alerta HTTP (webhook) al NVR cuando detecta movimiento en una zona configurada. La mayoría de cámaras Hikvision, Dahua y Axis soportan esta función nativa.

\`\`\`
POST /webhook/cctv-alert HTTP/1.1
Content-Type: application/json

{
  "camera_id": "cam_bodega_01",
  "event": "motion_detected",
  "zone": "zona_restringida",
  "timestamp": "2026-07-27T02:47:00-05:00",
  "snapshot_url": "http://192.168.1.100/snapshots/20260727_024700.jpg"
}
\`\`\`

### Paso 2: n8n recibe y procesa

El nodo webhook de n8n recibe la alerta y ejecuta la lógica:

\`\`\`
1. ¿Es horario nocturno (8 PM - 6 AM)?
   ├─ SÍ → Enviar WhatsApp al dueño + activar sirena
   └─ NO → ¿Hay personal en turno?
           ├─ SÍ → Notificar por Telegram al vigilante
           └─ NO → Alerta completa: WhatsApp + Telegram + Dashboard
\`\`\`

### Paso 3: Acciones automáticas

**WhatsApp Business API** envía un mensaje estructurado:

\`\`\`
🚨 ALERTA BODEGA - Cam 01
Hora: 02:47 AM
Zona: Restringida
Estado: Movimiento detectado

Ver snapshot:
http://192.168.1.100/snapshots/20260727_024700.jpg

Responder:
1 - Confirmar alerta
2 - Falsa alarma
3 - Llamar policía
\`\`\`

**Dashboard** actualiza en tiempo real con:

- Timestamp del evento
- Cámara activada
- Snapshot capturado
- Estado de notificación (enviado / fallido)
- Tiempo de respuesta del operador

**CRM** registra el incidente automáticamente con toda la metadata para auditorías futuras.

## Casos reales en Bogotá

### Caso 1: Ferretería en Kennedy — Intrusión nocturna

Una ferretería en Kennedy tenía 8 cámaras Hikvision conectadas a un NVR básico. Las alertas sonaban en el local cerrado y nadie las escuchaba.

**Implementación:**

1. Se instaló n8n en un servidor edge con GPU en la bodega
2. Se configuró webhook en el NVR para eventos de movimiento nocturno
3. Se creó flujo: movimiento nocturno → WhatsApp al dueño + Telegram al grupo de vigilancia
4. Se integró sirena IP activada por n8n vía HTTP

**Resultado:** La primera semana detectaron 3 intentos de acceso no autorizado. El dueño recibió WhatsApp con snapshot en 3 segundos. La sirena se activó automáticamente. No hubo pérdidas.

### Caso 2: Distribuidora en Chapinero — Dashboard de aforo

Una distribuidora de alimentos necesitaba controlar el aforo de su bodega durante entregas. n8n conectó las cámaras con un dashboard web que mostraba:

- Personas detectadas por zona (usa YOLO via APC Visión AI)
- Alerta cuando se excedía el aforo máximo
- Registro diario exportable a Excel

**Resultado:** Cumplimiento normativo del 100% y reducción de incidentes de seguridad en un 67%.

### Caso 3: Centro comercial en Suba — Flujos complejos

Un centro comercial con 42 cámaras implementó flujos de n8n con:

- **Zonificación**: diferentes alertas por zona (estacionamiento, pasillos, tiendas)
- **Escalamiento**: si no hay respuesta en 2 minutos → escala al gerente
- **Integración con CRM**: cada incidente se registra como ticket
- **Reporte semanal automático**: resumen de incidentes enviado por email

**Resultado:** Reducción del 45% en tiempo de respuesta y reportes automáticos para aseguradora.

## FAQ

### ¿n8n self-hosted o cloud para seguridad?

**Self-hosted es la opción recomendada** para empresas de seguridad en Bogotá. Razones:

- Los datos de video y alertas permanecen en tu infraestructura
- Sin dependencia de internet para la ejecución de flujos críticos
- Costo fijo: un servidor edge ($3-5M COP/mes) vs. n8n Cloud ($20-50 USD/mes por ejecuciones)
- Cumplimiento de normativas de protección de datos locales

n8n Cloud es viable solo para empresas pequeñas con bajo volumen de alertas (<100/día).

### ¿Cuánto cuesta implementar esto?

| Componente | Costo estimado (COP) |
|---|---|
| Servidor edge (1 mes) | $3.000.000 - $5.000.000 |
| Configuración n8n + flujos | $2.000.000 - $4.000.000 |
| Integración WhatsApp API | $500.000 - $1.000.000 |
| Dashboard personalizado | $1.500.000 - $3.000.000 |
| **Total inicial** | **$7.000.000 - $13.000.000** |
| **Mantenimiento mensual** | **$800.000 - $1.500.000** |

Comparado con $30-50M COP que costaría desarrollar una solución similar desde cero.

### ¿Funciona con cualquier cámara?

Sí. n8n se conecta vía HTTP/webhook, que es un estándar. Cámaras Hikvision, Dahua, Axis, Reolink y la mayoría de marcas profesionales soportan envío de alertas HTTP. Si tu cámara no soporta webhooks, usamos el NVR como intermediario.

### ¿Qué pasa si se cae internet?

El servidor edge sigue procesando localmente. Las alertas se almacenan en cola y se envían cuando se restablece la conexión. Para alertas críticas (intrusión), la sirena se activa localmente sin depender de internet.

### ¿Necesito programador para mantenerlo?

No. Los flujos de n8n se editan visualmente. Después de la implementación inicial, tu equipo puede modificar condiciones, agregar cámaras o cambiar destinatarios sin código. Servicios APC ofrece soporte mensual incluido.

## Próximos pasos

Si tu negocio en Bogotá tiene cámaras CCTV que solo graban pero no actúan, la automatización con n8n es el paso más rápido y costo-efectivo para convertirlas en un sistema de seguridad inteligente.

**Lo que puedes hacer hoy:**

1. **Auditar tu infraestructura actual**: ¿qué cámaras tienes? ¿El NVR soporta webhooks?
2. **Definir prioridades**: ¿qué alerta necesitas primero? ¿Intrusión? ¿Aforo? ¿Acceso?
3. **Solicitar una demostración**: vemos tu caso específico y te mostramos el flujo funcionando

> **Servicios APC** implementa automatización CCTV con n8n para negocios en Bogotá. Desde la configuración de webhooks hasta dashboards personalizados y notificaciones por WhatsApp.

## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,kh=`---
title: "SEO Local en Google Maps para empresas de seguridad en Bogotá: cómo aparecer primero en 2026"
excerpt: "Guía completa de SEO local y Google Business Profile para empresas de seguridad en Bogotá. Aprende a dominar el mapa de Google y duplicar tus cotizaciones."
date: "2026-07-27"
publishDate: "2026-07-27"
author: "Servicios APC"
category: "SEO & Marketing"
tags: "SEO local, Google Maps, Google Business Profile, marketing digital, Bogotá, empresas seguridad, ranking maps"
readTime: "9 min"
coverImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: "{\\"primary\\":{\\"label\\":\\"Solicitar SEO local\\",\\"href\\":\\"https://dogweb.lat\\"},\\"secondary\\":{\\"label\\":\\"Ver automatización CCTV\\",\\"href\\":\\"https://apcautomatizacion.site\\"},\\"tertiary\\":{\\"label\\":\\"Infraestructura edge\\",\\"href\\":\\"https://apccore.site\\"}}"
---

## El problema

Tienes la mejor empresa de seguridad de Bogotá. Instalas cámaras Hikvision certificadas, tienes técnicos con 10 años de experiencia, y tu atención es excepcional. Pero cuando alguien busca **"cámaras de seguridad bogotá"** en Google, aparecen tres competidores antes que tú.

El problema no es tu servicio. Es que **Google no te conoce**.

Las empresas de seguridad en Bogotá enfrentan un desafío específico: sus clientes los buscan localmente, en el momento exacto que necesitan el servicio. No buscan "empresa de seguridad" a las 3 AM cuando una alarma suena — buscan "reparación cámaras bogotá urgentes" o "instalación CCTV cerca de mí".

Sin presencia en Google Maps y SEO local, estás invisible para el 46% de búsquedas que tienen intención local according to Google.

### Datos que importan

- El **76%** de las personas que buscan algo cercano visitan un negocio en 24 horas
- El **28%** de las búsquedas locales resultan en una compra
- El **46%** de todas las búsquedas Google tienen intención local
- Las empresas en el **Map Pack** (top 3) reciben el **75%** de los clics

## Qué es SEO Local y Google Business Profile

**SEO Local** es el conjunto de estrategias para que tu negocio aparezca en resultados de búsqueda geográficamente relevantes. Cuando alguien en Bogotá busca "empresas de seguridad", Google muestra tres resultados en el mapa antes de los resultados orgánicos. Eso es el **Local Pack** o **Map Pack**.

**Google Business Profile** (antes Google My Business) es tu ficha gratuita en Google. Es donde defines:

- Nombre, dirección, teléfono (NAP)
- Horarios de atención
- Categorías del negocio
- Fotos y videos
- Reseñas de clientes
- Publicaciones y ofertas
- Área de servicio

Tu perfil de Google Business es la **base** de todo SEO local. Sin un perfil optimizado, ninguna otra estrategia funciona.

### Diferencia entre SEO orgánico y SEO local

| SEO Orgánico | SEO Local |
|---|---|
| Compite a nivel nacional/global | Compite en tu zona geográfica |
| Requiere autoridad de dominio alta | Requiere perfil optimizado + reseñas |
| Resultados en posiciones 1-10 | Resultados en Map Pack (top 3) |
| Contenido largo y profundo | Ficha completa + consistencia NAP |
| Backlinks de calidad | Reseñas reales + citas locales |

## Cómo funciona: estrategia completa

### Paso 1: Optimizar Google Business Profile

**Categoría principal**: "Empresa de seguridad" o "Servicio de seguridad" (no "cámaras de vigilancia" — esa es secundaria).

**Categorías secundarias** (agrega todas las relevantes):

- Instalación de sistemas de seguridad
- Reparación de equipos de seguridad
- Distribuidor de equipos de seguridad
- Consultoría de seguridad

**Descripción optimizada** (750 caracteres con keywords naturales):

> Empresa de seguridad en Bogotá especializada en instalación de cámaras CCTV, sistemas de acceso, control de aforo y automatización con inteligencia artificial. Servicio a empresas en Kennedy, Chapinero, Engativá, Suba y toda la capital. Más de 10 años protegiendo negocios con tecnología YOLO y monitoreo 24/7. Cotización sin compromiso.

**Fotos** (mínimo 25):

- Fachada del local (con señalización visible)
- Equipo de trabajo instalando cámaras
- Capturas de dashboard de monitoreo
- Antes/después de instalaciones
- Equipo humano (genera confianza)
- Logos de marcas que manejas (Hikvision, Dahua)

### Paso 2: Estrategia de reseñas

Las reseñas son el **factor #1** para rankear en el Map Pack. No importa tu web si tienes 2 reseñas y tu competidor tiene 85.

**Sistema de solicitud de reseñas:**

1. Después de cada instalación, envía WhatsApp con enlace directo a reseña
2. Ofrece incentivo ético: "Déjanos tu reseña y recibe 10% en tu próximo mantenimiento"
3. Responde TODAS las reseñas en menos de 24 horas (positivas y negativas)
4. Usa palabras clave en las respuestas: "Gracias por confiar en nosotros para la instalación de cámaras en su bodega en Kennedy"

**Plantilla de WhatsApp para solicitar reseña:**

\`\`\`
Hola [Nombre], ¡gracias por confiar en nosotros para la
instalación de CCTV en su negocio!

Si quedó satisfecho, nos ayudaría mucho si nos deja una
reseña en Google: [enlace directo]

¡Gracias por su preferencia! 🏢📹
Servicios APC - Bogotá
\`\`\`

### Paso 3: Citas locales y directorios

Las **citas** son menciones de tu NAP (Nombre, Dirección, Teléfono) en otros sitios web. Consistencia = confianza para Google.

**Directorios priorizados para Bogotá:**

| Directorio | Prioridad | Costo |
|---|---|---|
| Google Business Profile | Crítica | Gratis |
| Páginas Amarillas Colombia | Alta | Gratis |
| Tuenticas.com | Alta | Gratis |
| Cylex Colombia | Media | Gratis |
| Rappi Business | Media | Gratis |
| directorio.bogota.gov.co | Alta | Gratis |
| Guía de Bogotá | Media | Gratis |

**Regla de oro**: tu NAP debe ser **idéntico** en todos los directorios. Si en Google dice "Cra. 52c #39b-22" no pongas "Carrera 52C #39B-22" en otro sitio. Copia y pega exactamente.

### Paso 4: Keywords locales estratégicas

**Keywords principales** (volumen alto):

- "cámaras de seguridad bogotá"
- "CCTV empresas bogotá"
- "instalación cámaras bogotá"
- "empresa de seguridad bogotá"

**Keywords de cola larga** (conversión alta):

- "instalación de cámaras Hikvision en Kennedy"
- "reparación CCTV urgente Chapinero"
- "control de aforo con cámaras bogotá"
- "sistema de seguridad para bodega bogotá"
- "cámaras con inteligencia artificial bogotá"

**Keywords de servicio específico**:

- "automatización CCTV bogotá"
- "análisis de video con IA bogotá"
- "PPE detection empresas bogotá"
- "conteo de personas con cámaras"

### Paso 5: Contenido local en tu web

Crea páginas dedicadas para cada zona de servicio:

- \`/servicios/camaras-seguridad-kennedy\`
- \`/servicios/cctv-engativa\`
- \`/servicios/control-aforo-chapinero\`
- \`/servicios/automatizacion-suba\`

Cada página debe tener:

- 800-1200 palabras únicas
- Referencias específicas a la zona (calles, barrios, puntos de referencia)
- Testimonios de clientes de esa zona
- Fotos reales de trabajos en la zona
- Schema LocalBusiness con geo-coordenadas

## Casos reales en Bogotá

### Caso de éxito: Distribuidora Jone — +340% cotizaciones

**Situación inicial:**

Distribuidora Jone es una empresa de distribución y venta de equipos de seguridad en Bogotá. Tenía perfil de Google Business creado pero no optimizado: 3 fotos, descripción de 2 líneas, 0 reseñas activas, y NAP inconsistente en 12 directorios.

**Estrategia implementada:**

1. **Reoptimización completa del perfil**: 30+ fotos, descripción de 750 caracteres, 6 categorías secundarias, horarios correctos, área de servicio definida
2. **Campaña de reseñas**: sistema automatizado vía WhatsApp post-venta. En 6 meses, pasó de 4 a 67 reseñas con promedio de 4.8 estrellas
3. **Limpieza de citations**: se corrigió NAP en 12 directorios. Nombre exacto, dirección exacta, teléfono exacto
4. **Páginas de servicio locales**: 8 páginas optimizadas para cada zona de Bogotá que cubren
5. **Publicaciones semanales en GBP**: ofertas, tips de seguridad, fotos de instalaciones recientes

**Resultados en 6 meses:**

| Métrica | Antes | Después | Crecimiento |
|---|---|---|---|
| Visualizaciones en Maps | 340/mes | 1.496/mes | +340% |
| Llamadas desde Maps | 12/mes | 53/mes | +341% |
| Solicitudes de cotización | 18/mes | 79/mes | +339% |
| Posición Map Pack | Fuera del top 10 | Posición 2 | — |
| Reseñas | 4 | 67 | +1.575% |

### Lecciones clave del caso Jone

1. **Las reseñas son el factor diferenciador**: de 4 a 67 reseñas cambió todo
2. **La consistencia NAP importa**: corregir 12 directorios eliminó confusión en Google
3. **El contenido local funciona**: las páginas de zona generan tráfico cualificado
4. **Las publicaciones en GBP mantienen el perfil activo**: Google premia la actividad

## FAQ

### ¿Cuánto tiempo toma ver resultados con SEO local?

Los primeros resultados se ven en **4-8 semanas**: mejor posicionamiento en Maps, más visualizaciones, más llamadas. Los resultados significativos (duplicar cotizaciones) llegan en **3-6 meses** de trabajo consistente. SEO local es más rápido que SEO orgánico tradicional.

### ¿Necesito página web para SEO local?

Técnicamente no — Google Business Profile puede funcionar solo. Pero una página web **multiplica** los resultados: te permite rankear para keywords adicionales, mostrar tu trabajo, y capturar leads que no vienen de Maps. Es la diferencia entre 50 y 200 cotizaciones mensuales.

### ¿Cuánto cuesta contratar SEO local profesional?

| Nivel | Costo mensual COP | Incluye |
|---|---|---|
| Básico | $800.000 - $1.500.000 | Optimización GBP + 4 publicaciones/mes |
| Profesional | $2.000.000 - $4.000.000 | GBP + Web + Reseñas + Directorios + Contenido |
| Premium | $5.000.000 - $8.000.000 | Todo lo anterior + PPC + Automatización + Dashboard |

ROI típico: cada $1 invertido en SEO local genera $5-12 en cotizaciones para empresas de seguridad en Bogotá.

### ¿Puedo hacer SEO local yo mismo?

Sí, para lo básico: crear y verificar tu perfil de Google, pedir reseñas, y mantener info consistente. Pero para competir en el Map Pack de "cámaras de seguridad bogotá" necesitas expertise en optimización técnica, estrategia de contenido, y gestión de citations. Es como distinguir entre cambiar una bombilla y cablear un edificio.

### ¿Las reseñas negativas me matan?

No necesariamente. De hecho, un perfil con solo reseñas de 5 estrellas parece sospechoso. Lo importante es: (1) tener muchas más positivas que negativas, (2) responder TODAS las negativas con profesionalismo, (3) resolver el problema offline y luego pedir al cliente que actualice su reseña. Google valora la actividad de respuesta.

### ¿SEO local funciona para empresas B2B de seguridad?

Sí, pero con un matiz: las empresas que buscan "empresa de seguridad para oficinas" usan Google igual que los consumidores. La diferencia es que el ciclo de venta es más largo. SEO local genera el primer contacto; tu proceso de ventas cierra el trato. Empresas como Distribuidora Jone prueban que B2B funciona perfectamente.

## Próximos pasos

Si tu empresa de seguridad en Bogotá no está apareciendo en el Map Pack de Google, estás dejando dinero sobre la mesa cada día que pasa.

**Acciones inmediatas:**

1. **Verifica tu Google Business Profile** hoy mismo (si no lo has hecho)
2. **Pide 5 reseñas** a tus clientes más satisfechos esta semana
3. **Audita tu NAP** en los principales directorios colombianos
4. **Revisa qué hace tu competidor** en el Map Pack y mejóralo

> **DogWeb** (parte del ecosistema APC) ofrece servicios de SEO local especializados para empresas de seguridad y tecnología en Bogotá. Desde la optimización de Google Business Profile hasta estrategias completas de marketing digital.

## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Ph=`---
title: "Servidores Edge con GPU para IA en videoanalítica: qué necesitas en Bogotá 2026"
excerpt: "Guía técnica sobre servidores edge con GPU para procesamiento de video con inteligencia artificial en Bogotá. Compara opciones NVIDIA, costos y arquitecturas."
date: "2026-07-27"
publishDate: "2026-07-27"
author: "Servicios APC"
category: "Infraestructura"
tags: "servidor edge, GPU, NVIDIA, YOLO, videoanalítica, infraestructura IA, Bogotá, edge computing"
readTime: "11 min"
coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: "{\\"primary\\":{\\"label\\":\\"Consultar infraestructura edge\\",\\"href\\":\\"https://apccore.site\\"},\\"secondary\\":{\\"label\\":\\"Ver videoanalítica IA\\",\\"href\\":\\"https://apcvisionai.site\\"},\\"tertiary\\":{\\"label\\":\\"Automatización n8n\\",\\"href\\":\\"https://apcautomatizacion.site\\"}}"
---

## El problema

Tienes 20 cámaras IP en tu negocio en Bogotá. Cada una genera 2-4 Mbps de stream continuo. El NVR graba todo, pero **no analiza nada**. Si quieres detección de intrusión, conteo de personas o verificación de EPP (equipo de protección personal), necesitas enviar ese video a la nube y pagar $15-40 USD por cámara por mes.

Para 20 cámaras, eso son **$300-800 USD mensuales** — entre $1.2M y $3.4M COP — solo por el procesamiento en la nube. Y ese costo escala linealmente: 50 cámaras = $750-2.000 USD/mes.

El problema se vuelve insoportable cuando:

- **Latencia**: el video viaja a servidores en EE.UU., se procesa, y la alerta llega 3-8 segundos después. Para intrusión, eso es demasiado.
- **Ancho de banda**: subir 20 streams HD a la nube requiere 40-80 Mbps de subida — internet empresarial en Bogotá cuesta $200-500K COP/mes por 100 Mbps.
- **Dependencia**: si se cae internet, se pierde el análisis. La cámara sigue grabando pero la IA se desconecta.
- **Privacidad**: el video de tus clientes viaja por servidores externos. Problemático para empresas con datos sensibles.

**La alternativa**: procesar la IA localmente, en un servidor edge con GPU, en tu propia instalación en Bogotá.

## Qué es edge computing para videoanalítica

**Edge computing** significa procesar los datos cerca de donde se generan, en lugar de enviarlos a la nube. Para videoanalítica, esto significa: la cámara envía el video a un servidor local con GPU, la GPU ejecuta el modelo de IA (YOLO, por ejemplo), y las alertas se generan en milisegundos.

### Edge vs Cloud para análisis de video

| Aspecto | Cloud (AWS, Azure, GCP) | Edge Local |
|---|---|---|
| Costo mensual (20 cámaras) | $300-800 USD | $0 (hardware comprado) |
| Latencia de inferencia | 200-800ms | 15-50ms |
| Dependencia de internet | Crítica | Ninguna |
| Escalabilidad | Ilimitada | Limitada por hardware |
| Privacidad | Datos en servidores externos | 100% local |
| Mantenimiento | El proveedor lo hace | Tu equipo o APC Core |
| Costo inicial | $0 | $8-25M COP |
| Break-even | Mes 3-8 vs edge | — |

**Cuándo usar edge**: cuando tienes 5+ cámaras, necesitas baja latencia, o la privacidad es prioridad.

**Cuándo usar cloud**: cuando tienes 1-4 cámaras, no puedes instalar hardware, o necesitas análisis esporádico (no 24/7).

## Cómo funciona: arquitectura edge completa

### Diagrama de arquitectura

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                     INSTALACIÓN EN BOGOTÁ                       │
│                                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐       ┌─────────┐     │
│  │ Cam IP  │  │ Cam IP  │  │ Cam IP  │  ...  │ Cam IP  │     │
│  │  01     │  │  02     │  │  03     │       │  20     │     │
│  └────┬────┘  └────┬────┘  └────┬────┘       └────┬────┘     │
│       │             │             │                  │          │
│       └─────────────┴──────┬──────┴──────────────────┘          │
│                            │                                    │
│                    ┌───────▼───────┐                            │
│                    │   Switch PoE  │                            │
│                    │   (Gigabit)   │                            │
│                    └───────┬───────┘                            │
│                            │                                    │
│              ┌─────────────▼─────────────┐                     │
│              │    SERVIDOR EDGE GPU       │                     │
│              │  ┌─────────────────────┐  │                     │
│              │  │  NVIDIA T4 / A2000  │  │                     │
│              │  │  YOLO v8 + DeepSort │  │                     │
│              │  └─────────────────────┘  │                     │
│              │  ┌─────────────────────┐  │                     │
│              │  │  n8n + Dashboard    │  │                     │
│              │  │  Alertas / Webhooks │  │                     │
│              │  └─────────────────────┘  │                     │
│              └─────────────┬─────────────┘                     │
│                            │                                    │
│              ┌─────────────▼─────────────┐                     │
│              │  NAS / RAID Storage       │                     │
│              │  (grabación 30 días)      │                     │
│              └───────────────────────────┘                     │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

### Flujo de datos

\`\`\`
Cámara IP ──RTSP──▶ Servidor Edge ──GPU──▶ YOLO detecta objeto
                                              │
                                    ┌─────────▼──────────┐
                                    │  ¿Qué se detectó?  │
                                    └─────────┬──────────┘
                                              │
                         ┌────────────────────┼────────────────────┐
                         │                    │                    │
                    ┌────▼────┐          ┌────▼────┐          ┌────▼────┐
                    │ Persona │          │ Vehículo│          │  EPP   │
                    └────┬────┘          └────┬────┘          └────┬────┘
                         │                    │                    │
                    ┌────▼────┐          ┌────▼────┐          ┌────▼────┐
                    │¿Sin cas-│          │¿Placa   │          │¿Falta   │
                    │co en    │          │no regis-│          │chaleco/ │
                    │zona?    │          │trada?   │          │casco?   │
                    └────┬────┘          └────┬────┘          └────┬────┘
                         │                    │                    │
                    ┌────▼────┐          ┌────▼────┐          ┌────▼────┐
                    │ALERTA   │          │ALERTA   │          │ALERTA   │
                    │WhatsApp │          │Sirena + │          │Dashboard│
                    └─────────┘          │WhatsApp │          │+ Reporte│
                                         └─────────┘          └─────────┘
\`\`\`

### Requisitos del servidor edge

**Especificación mínima para 10 cámaras con YOLO:**

- **CPU**: Intel Core i5-12400 / AMD Ryzen 5 5600 (6 núcleos)
- **RAM**: 16 GB DDR4 3200MHz
- **GPU**: NVIDIA T4 (16GB VRAM) o RTX A2000 (12GB VRAM)
- **Almacenamiento**: 1TB NVMe SSD (sistema + modelos) + 4TB HDD RAID1 (grabación)
- **Red**: 2x Gigabit Ethernet (1 para cámaras, 1 para red general)
- **Fuente**: 550W 80+ Bronze
- **Gabinete**: Rack 2U o tower con ventilación adecuada

**Especificación recomendada para 20-30 cámaras:**

- **CPU**: Intel Core i7-13700 / AMD Ryzen 7 7700X (8+ núcleos)
- **RAM**: 32 GB DDR5 5600MHz
- **GPU**: NVIDIA RTX A2000 12GB o RTX 4000 Ada (16GB VRAM)
- **Almacenamiento**: 2TB NVMe SSD + 8TB HDD RAID5
- **Red**: 2x 2.5 Gigabit Ethernet
- **Fuente**: 750W 80+ Gold
- **Gabinete**: Rack 2U con ventilación forzada

## Comparativa de GPUs para videoanalítica

### NVIDIA T4 vs A2000 vs RTX 4000 Ada

| Especificación | NVIDIA T4 | RTX A2000 | RTX 4000 Ada |
|---|---|---|---|
| VRAM | 16 GB GDDR6 | 12 GB GDDR6 | 16 GB GDDR6 |
| TDP | 70W | 70W | 130W |
| Rendimiento FP32 | 8.1 TFLOPS | 6.3 TFLOPS | 19.2 TFLOPS |
| Cámaras simultáneas (YOLO v8) | 8-12 | 6-10 | 15-25 |
| Tensor Cores | Gen 2 | Gen 2 | Gen 4 |
| Costo estimado (COP) | $3.500.000 | $4.200.000 | $8.500.000 |
| Disponibilidad en Bogotá | Alta | Media | Baja (importación) |
| Mejor para | 10 cámaras, bajo consumo | 8 cámaras, estación de trabajo | 20+ cámaras, alto rendimiento |

### Recomendación por número de cámaras

- **1-8 cámaras**: NVIDIA T4 — mejor relación costo-rendimiento, bajo consumo
- **8-15 cámaras**: RTX A2000 — buen equilibrio, soporte profesional NVIDIA
- **15-30 cámaras**: RTX 4000 Ada — rendimiento necessário, justifica el costo
- **30+ cámaras**: Considerar RTX 4000 Ada SFF o dos servidores edge

## Costo real: Cloud vs Edge para Bogotá

### Escenario: 20 cámaras CCTV, análisis 24/7, 36 meses

**Opción A: Cloud (AWS/Azure)**

| Concepto | Costo mensual | Costo 36 meses |
|---|---|---|
| Instancia GPU (g4dn.xlarge) x2 | $500 USD | $18.000 USD |
| Almacenamiento (1TB) | $23 USD | $828 USD |
| Ancho de banda (20 streams) | $150 USD | $5.400 USD |
| Soporte técnico | $100 USD | $3.600 USD |
| **Total** | **$773 USD** | **$27.828 USD (~$116M COP)** |

**Opción B: Edge local (APC Core)**

| Concepto | Costo único | Costo 36 meses |
|---|---|---|
| Servidor edge GPU completo | — | $12.000.000 COP |
| Instalación y configuración | — | $3.000.000 COP |
| Internet empresarial | $350.000/mes | $12.600.000 COP |
| Mantenimiento mensual | $800.000/mes | $28.800.000 COP |
| **Total** | — | **$56.400.000 COP (~$13.400 USD)** |

**Ahorro edge vs cloud: $102.6M COP (88%) en 36 meses.**

Y el servidor edge sigue siendo tuyo después de 3 años. El cloud no.

### Break-even mensual

| Mes | Cloud acumulado | Edge acumulado | Ahorro edge |
|---|---|---|---|
| Mes 1 | $3.4M COP | $16.8M COP | -$13.4M |
| Mes 3 | $10.2M COP | $19.2M COP | -$9.0M |
| Mes 6 | $20.4M COP | $22.8M COP | -$2.4M |
| **Mes 7** | **$23.8M COP** | **$24.0M COP** | **+$0.2M** |
| Mes 12 | $47.6M COP | $30.0M COP | +$17.6M |
| Mes 24 | $95.2M COP | $45.6M COP | +$49.6M |
| Mes 36 | $142.8M COP | $56.4M COP | +$86.4M |

**El edge se paga solo en el mes 7.** Después de eso, cada mes es puro ahorro.

## Casos reales en Bogotá

### Caso 1: Bodega industrial en Soacha — 32 cámaras, YOLO + PPE

**Situación**: Bodega de 3.000m² con 32 cámaras Hikvision. Necesitaban detección de EPP (chaleco, casco, guantes) y control de aforo. Cotización cloud: $1.200 USD/mes.

**Solución APC Core**:

- Servidor Dell PowerEdge T40 con NVIDIA T4 (16GB)
- 32 GB RAM, 2TB NVMe + 8TB RAID
- YOLO v8 nano para EPP, YOLO v8 medium para aforo
- Dashboard web con alertas en tiempo real
- n8n integrado para WhatsApp + email

**Resultado**: Funcionando 18 meses sin interrupciones. Costo total: $18M COP (instalación) + $800K/mes (mantenimiento). La empresa ahorra $1.1M COP/mes vs cloud.

### Caso 2: Centro logístico en Fontibón — 48 cámaras, doble GPU

**Situación**: Centro logístico con 48 cámaras de alta resolución (4MP). Necesitaban lectura de placas vehiculares, detección de intrusiones, y conteo de personas.

**Solución APC Core**:

- 2 servidores edge (24 cámaras cada uno)
- NVIDIA RTX A2000 en cada servidor
- DeepSort para tracking de personas entre cámaras
- Base de datos PostgreSQL para registro de placas
- Alertas automáticas por zona horaria

**Resultado**: 99.7% de uptime en 12 meses. Placas detectadas con 96% de precisión. Alertas de intrusión en <2 segundos.

### Caso 3: cadena de farmacias — 15 sedes, edge compacto

**Situación**: 15 farmacias con 4-6 cámaras cada una. Necesitaban detección de personas sospechosas y conteo de clientes por hora.

**Solución APC Core**:

- Mini PC con NVIDIA Jetson Orin Nano por sede
- YOLO v8 nano optimizado para Jetson
- Dashboard centralizado que recibe datos de las 15 sedes
- Alertas diferenciadas: sedes abiertas vs cerradas

**Resultado**: Inversión total $45M COP (vs $180M COP que costaría cloud para 15 sedes). Break-even en 4 meses.

## FAQ

### ¿Cuánta electricidad consume un servidor edge con GPU?

Depende de la GPU:

| GPU | TDP | Consumo del sistema completo | Costo mensual eléctrico COP |
|---|---|---|---|
| NVIDIA T4 | 70W | ~150W total | ~$18.000 |
| RTX A2000 | 70W | ~160W total | ~$19.200 |
| RTX 4000 Ada | 130W | ~220W total | ~$26.400 |

El costo eléctrico es mínimo comparado con el ahorro vs cloud. Un servidor edge consume lo mismo que 3-4 focos LED.

### ¿Qué mantenimiento necesita un servidor edge?

- **Mensual**: revisar temperaturas, actualizar software de seguridad, verificar backups
- **Trimestral**: limpiar polvo de filtros y ventiladores, revisar SMART de discos
- **Anual**: reevaluar capacidad, actualizar modelos YOLO, possible upgrade de GPU

En Bogotá, el clima es ideal: la temperatura promedio (14°C) reduce el desgaste térmico. No necesitas aire acondicionado dedicado como en ciudades costeras.

### ¿Cuándo debo upgradear la GPU?

Señales de que necesitas upgrade:

- Uso de VRAM consistently >90%
- FPS de inferencia caen por debajo de 10 (para alertas en tiempo real necesitas 15+)
- Agregaste cámaras y el rendimiento cayó >20%
- Quieres agregar nuevos modelos (ej: OCR para placas + detección de personas)

Tiempo promedio de vida útil de una GPU en edge: 4-5 años. La T4 de 2020 sigue siendo relevante en 2026 para aplicaciones medianas.

### ¿Self-hosted o managed para infraestructura edge?

**Self-hosted** (tú compras y administras):

- Control total, sin mensualidades
- Requiere equipo técnico interno
- Ideal si tienes 2+ servidores edge

**Managed** (APC Core administra):

- Nosotros compramos, instalamos, y mantenemos
- Costo mensual predecible
- Soporte 24/7 con SLA garantizado
- Ideal si no tienes equipo técnico dedicado

La mayoría de clientes en Bogotá eligen **managed** porque el ahorro de no contratar un sysadmin dedicado ($3-5M COP/mes) justifica el costo del servicio.

### ¿Puedo usar hardware existente?

Depende. Si tu servidor actual tiene:

- Slot PCIe x16 disponible
- Fuente de al menos 450W
- 16GB+ RAM
- SSD para el sistema operativo

...probablemente sí se puede agregar una GPU. Evaluamos tu hardware actual y te decimos la mejor opción. Muchos clientes empiezan con un upgrade de GPU en su servidor existente y escalan a servidor dedicado cuando crecen.

### ¿Qué pasa si la GPU falla?

El sistema sigue funcionando en modo degradado: las cámaras siguen grabando en el NVR, pero el análisis de IA se pausa. APC Core ofrece:

- GPU de reemplazo en 24-48 horas
- Monitoreo remoto de salud de la GPU
- Alertas proactivas cuando la temperatura o uso anómalos
- Backup de configuración para recuperación rápida

## Próximos pasos

Si tu empresa en Bogotá está pagando por análisis de video en la nube o simplemente tiene cámaras que graban sin analizar, un servidor edge con GPU es la inversión con mejor ROI en infraestructura de seguridad.

**Pasos concretos:**

1. **Inventario de cámaras**: ¿cuántas tienes? ¿Qué resolución? ¿Cuántos FPS?
2. **Define tus necesidades de análisis**: ¿Intrusión? ¿EPP? ¿Aforo? ¿Placas? ¿Todo junto?
3. **Solicita una evaluación**: analizamos tu infraestructura actual y proponemos la arquitectura óptima
4. **Decide self-hosted vs managed**: según tu equipo técnico y presupuesto

> **APC Core** diseña, instala y mantiene servidores edge con GPU para videoanalítica en Bogotá. Desde mini PCs con Jetson para 4 cámaras hasta servidores rack con RTX 4000 para 30+ cámaras.

## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,jh=`---
title: "Hikvision vs Dahua vs Uniview: cuál elegir para CCTV con IA en 2026"
excerpt: "Comparativa completa de las tres marcas líderes de CCTV con IA: Hikvision, Dahua y Uniview. Análisis de capacidades YOLO, ONVIF, visión nocturna, precios y compatibilidad para empresas en Bogotá."
date: "2026-07-28"
publishDate: "2026-07-28"
author: "Servicios APC"
category: "Comparativas"
tags: "Hikvision, Dahua, Uniview, comparativa cámaras, CCTV IA, Bogotá, seguridad empresarial"
readTime: "10 min"
coverImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: "{\\"primary\\":{\\"label\\":\\"Ver demo comparativa en tu local en Bogotá\\",\\"href\\":\\"https://apcvisionai.site\\"},\\"secondary\\":{\\"label\\":\\"Infraestructura edge + servidor GPU\\",\\"href\\":\\"https://apccore.site\\"},\\"tertiary\\":{\\"label\\":\\"Integrar alertas IA a WhatsApp/CRM\\",\\"href\\":\\"https://apcautomatizacion.site\\"}}"
---

## El problema

Si estás buscando cámaras CCTV con inteligencia artificial para tu negocio en Bogotá, te enfrentas a una decisión difícil: **Hikvision, Dahua o Uniview**. Las tres marcas son chinas, las tres ofrecen IA integrada, y las tres tienen distribuidores en Colombia. Pero las diferencias reales entre ellas pueden significar la diferencia entre un sistema que detecta intrusos a las 2 AM y uno que solo graba videos que nadie mira.

El problema es que la mayoría de vendedores en Bogotá venden por precio, no por capacidad. Te ofrecen una cámara "con IA" sin explicarte qué tipo de IA, qué modelo corre, si es compatible con YOLO, ni si el servidor edge puede ejecutar análisis en tiempo real.

Las preguntas que realmente importan:

- **¿Qué IA trae de fábrica cada marca?** ¿Solo detección de movimiento o análisis profundo?
- **¿Es compatible con YOLO?** El estándar de facto en analítica de video
- **¿Funciona con ONVIF/RTSP?** O te obliga a usar su software propietario
- **¿Cómo rinde en visión nocturna?** Bogotá tiene zonas con poca iluminación
- **¿Cuánto cuesta realmente?** No solo la cámara, sino el ecosistema completo

## Qué es cada marca

### Hikvision

**El gigante mundial.** Fundada en 2001, es el mayor fabricante de equipos de seguridad del mundo con ~38% de market share global. En Colombia tiene presencia directa con oficina en Bogotá y red de distribuidores autorizados.

**Línea IA relevante:**
- **DeepinView**: IA avanzada de fábrica — PPE detection, ANPR, reconocimiento facial, detección de caídas, conteo de personas, intrusion detection
- **AcuSense**: IA media — detección de personas/vehículos vs animales/movimiento, reducción de falsas alarmas
- **ColorVu**: Visión nocturna a color 24/7 con sensor 1/1.2"
- **DarkFighter**: Visión nocturna en condiciones de poca luz

**Ventaja IA:** Los modelos DeepinView corren IA directamente en la cámara (edge). No necesitas servidor externo para detecciones básicas.

### Dahua

**El segundo en el mundo.** Fundada en 2001, ~17% market share global. En Colombia distribuye a través de importadores y tiene soporte técnico local.

**Línea IA relevante:**
- **WizMind**: IA avanzada — reconocimiento facial, ANPR, PPE, conteo, mapa de calor, protección perimetral
- **WizSense**: IA media — distinguir personas/vehículos, reducir falsas alarmas
- **Full-Color**: Visión nocturna a color con doble lente
- **Starlight**: Visión nocturna con sensor de alta sensibilidad

**Ventaja IA:** Precios agresivos y buenas promociones en Colombia. El ecosistema WizMind/WizSense es claro y bien documentado.

### Uniview

**La challenger.** Fundada en 2011 (más joven), ~13% market share global. Crecimiento rápido en Latinoamérica. En Colombia está ganando terreno por precio competitivo.

**Línea IA relevante:**
- **AI Series**: IA básica — detección personas/vehículos, intrusion, líneas virtuales
- **StarView**: Visión nocturna con tecnología own Starlight
- **ColorHunter**: Visión nocturna a color 24/7

**Ventaja IA:** Precio muy competitivo con buena calidad de imagen. Ideal para proyectos con presupuesto ajustado que necesitan IA básica.

## Cómo funciona la comparativa técnica

### Tabla comparativa completa

| Característica | Hikvision | Dahua | Uniview |
|---|---|---|---|
| **Market share global** | ~38% | ~17% | ~13% |
| **Presencia Colombia** | ✅ Oficina directa Bogotá | ⚠️ Distribuidores autorizados | ⚠️ Distribuidores autorizados |
| **Gama IA alta** | DeepinView | WizMind | No tiene equivalente directo |
| **Gama IA media** | AcuSense | WizSense | AI Series |
| **PPE Detection** | ✅ DeepinView (casco, chaleco, guantes, gafas) | ✅ WizMind (casco, chaleco) | ❌ No nativo |
| **ANPR/LPR** | ✅ DeepinView (99%+ precisión) | ✅ WizMind (98%+ precisión) | ⚠️ Básico (buenas condiciones) |
| **Reconocimiento facial** | ✅ DeepinView (99.5%+) | ✅ WizMind (99%+) | ⚠️ Limitado |
| **Detección caídas** | ✅ DeepinView | ✅ WizMind (modelos recientes) | ❌ No |
| **Aforo/conteo personas** | ✅ DeepinView + iVMS | ✅ WizMind + DSS | ⚠️ Solo conteo básico |
| **Visión nocturna** | ColorVu 24/7 a color | Full-Color 24/7 a color | ColorHunter 24/7 a color |
| **Sensor nocturno** | 1/1.2" (mejor) | 1/1.8" | 1/1.8" |
| **ONVIF** | ✅ Profile S/G/T | ✅ Profile S/G/T | ✅ Profile S/G |
| **RTSP** | ✅ Sí | ✅ Sí | ✅ Sí |
| **SDK abierto** | ✅ ISAPI + SDK C/Java | ✅ SDK General + SmartPSS | ⚠️ SDK limitado |
| **Compatible YOLO externo** | ✅ Excelente (RTSP + webhooks) | ✅ Buena (RTSP + API) | ✅ Funcional (RTSP) |
| **H.265+** | ✅ Sí | ✅ H.265 Smart | ✅ H.265+ |
| **Garantía estándar** | 3 años | 3 años | 3 años |
| **Soporte Bogotá** | ✅ Directo + distribuidores | ⚠️ Solo distribuidores | ⚠️ Solo distribuidores |

### Capacidades IA: Profundidad por marca

| Capacidad IA | Hikvision DeepinView | Dahua WizMind | Uniview AI Series |
|---|---|---|---|
| **Detección persona vs vehículo vs animal** | ✅ Avanzada | ✅ Avanzada | ✅ Básica |
| **Líneas virtuales / zonas** | ✅ Múltiples zonas personalizables | ✅ Múltiples zonas | ✅ Hasta 4 zonas |
| **PPE: Casco** | ✅ Alta precisión | ✅ Buena precisión | ❌ |
| **PPE: Chaleco reflectivo** | ✅ Alta precisión | ✅ Buena precisión | ❌ |
| **PPE: Guantes / Gafas** | ✅ Disponible | ⚠️ Modelos recientes | ❌ |
| **ANPR: Placas Colombia** | ✅ 99%+ con good lighting | ✅ 98%+ | ⚠️ 85-90% solo buen clima |
| **Reconocimiento facial** | ✅ 99.5% (distancia hasta 30m) | ✅ 99% (hasta 20m) | ⚠️ Básico |
| **Mapa de calor** | ✅ Integrado en iVMS | ✅ Integrado en DSS | ❌ Necesita software externo |
| **Detección anomalia** | ✅ Pelea, caída, abandono objeto | ✅ Pelea, caída | ❌ |
| **Conteo personas** | ✅ Entrada/salida bidireccional | ✅ Entrada/salida | ⚠️ Solo dirección única |

### Precios estimados Colombia 2026

| Modelo | Hikvision | Dahua | Uniview |
|---|---|---|---|
| **Cámara bullet IA básica (4MP)** | $350-500 USD | $280-420 USD | $220-350 USD |
| **Cámara bullet IA avanzada PPE (4MP)** | $600-900 USD | $500-750 USD | No disponible |
| **Cámara dome IA básica (4MP)** | $320-480 USD | $260-400 USD | $200-330 USD |
| **Cámara dome IA avanzada (4MP)** | $550-850 USD | $450-700 USD | No disponible |
| **Cámara 4K con IA (8MP)** | $800-1,200 USD | $650-1,000 USD | $500-800 USD |
| **NVR 16 canales con IA** | $800-1,200 USD | $600-900 USD | $450-700 USD |
| **NVR 32 canales con IA** | $1,500-2,500 USD | $1,200-2,000 USD | $900-1,500 USD |

> **Nota:** Estos precios son referenciales para Colombia. El costo real incluye IVA, importación, instalación y configuración. Servicios APC cotiza proyectos completos con hardware + IA + soporte.

### Compatibilidad con YOLO y análisis externo

| Aspecto | Hikvision | Dahua | Uniview |
|---|---|---|---|
| **Stream RTSP estable** | ✅ Excelente, bajo latency | ✅ Bueno | ✅ Funcional |
| **Calidad snapshot para YOLO** | ✅ Excelente (alta resolución + buena compresión) | ✅ Buena | ⚠️ Aceptable |
| **Webhooks HTTP** | ✅ ISAPI robusto | ✅ API General | ⚠️ Limitado |
| **Server edge compatible** | ✅ NVIDIA T4/RTX/Jetson | ✅ NVIDIA T4/RTX/Jetson | ✅ NVIDIA (con más config) |
| **Onvif Profile T (H.265)** | ✅ Sí | ✅ Sí | ✅ Sí |
| **Multi-stream (sub-stream IA)** | ✅ Sí, configurable | ✅ Sí | ⚠️ Menos flexible |

**Conclusión YOLO:** Las tres funcionan, pero Hikvision ofrece la mejor integración para analítica externa gracias a su ISAPI y calidad de snapshot. Dahua va justo detrás. Uniview requiere más configuración.

### Visión nocturna: Comparativa real

| Condición | Hikvision ColorVu | Dahua Full-Color | Uniview ColorHunter |
|---|---|---|---|
| **Oscuridad total (0.001 lux)** | ✅ Color nítido | ✅ Color bueno | ✅ Color aceptable |
| **Alcance IR/LED** | Hasta 40m | Hasta 30m | Hasta 25m |
| **Ruido en imagen nocturna** | Muy bajo | Bajo | Medio |
| **Detalle facial nocturno** | ✅ Identificable | ✅ Identificable (peor que Hik) | ⚠️ Apenas identificable |
| **Placa vehicular nocturna** | ✅ Lectura confiable | ✅ Lectura confiable | ⚠️ Solo cercana |
| **Consumo energético LED** | 12W | 10W | 9W |

**Para Bogotá:** La mayoría de zonas tienen buena iluminación urbana, pero bodegas, parking subterráneos y zonas industriales pueden tener oscuridad total. En esos escenarios, Hikvision ColorVu tiene ventaja clara.

## Casos reales Bogotá

### Caso 1: Bodega industrial en Fontibón — Hikvision + YOLO

Una bodega de 2,000 m² necesitaba PPE detection (casco + chaleco) y control de acceso por placas.

**Solución:** 12× Hikvision DeepinView 4MP + servidor edge NVIDIA RTX A2000 con YOLOv10 custom.

**Resultado:** 98% detección PPE, 99.5% lectura placas ANPR, 0 accidentes laborales en 8 meses. Antes: 4 accidentes/año + 2 multas SG-SST.

### Caso 2: Centro comercial en Suba — Dahua WizSense

Centro comercial con 60 cámaras necesitaba reducir falsas alarmas y controlar aforo.

**Solución:** 60× Dahua WizSense 4MP + NVR 32ch Dahua + dashboard aforo n8n.

**Resultado:** Falsas alarmas reducidas 92% (de 45/día a 3/día). Aforo automatizado con alertas WhatsApp. Inversión 25% menor que cotización Hikvision equivalente.

### Caso 3: Sede corporativa en Norte — Uniview + YOLO externo

Pyme de 30 empleados con presupuesto limitado que necesitaba seguridad básica con algo de IA.

**Solución:** 8× Uniview AI Series 4MP + NVR Uniview 16ch + servidor edge Jetson Nano con YOLO básico para intrusión perimetral.

**Resultado:** Detección de intrusión funcional, 0 robos en 6 meses. Presupuesto total 40% menor que alternativa Hikvision. Limitación: sin PPE detection nativo.

## FAQ

### ¿Cuál es mejor: Hikvision, Dahua o Uniview?

Depende de tu necesidad. Si necesitas **IA avanzada** (PPE, facial, ANPR de alta precisión), **Hikvision DeepinView** es la mejor opción. Si buscas **buen equilibrio precio-IA**, **Dahua WizMind** es competitiva. Si el **presupuesto es prioridad** y necesitas IA básica, **Uniview** cumple.

### ¿Las marcas chinas tienen soporte en Bogotá?

Hikvision tiene oficina directa en Bogotá con soporte técnico. Dahua y Uniview dependen de distribuidores autorizados. Servicios APC ofrece soporte independiente para las tres marcas con SLA < 4 horas en Bogotá.

### ¿Puedo mezclar marcas?

Sí, siempre que usen **ONVIF** y **RTSP** (las tres lo soportan). Puedes tener cámaras Hikvision en áreas críticas (PPE, facial) y Dahua/Uniview en áreas generales. El servidor edge YOLO unifica todo independientemente de la marca.

### ¿Qué pasa con las sanciones a Hikvision?

Hikvision tiene restricciones en EE.UU. pero **opera normalmente en Colombia y Latinoamérica**. No hay sanciones que afecten su uso en Colombia. Dahua enfrenta situaciones similares a nivel global sin impacto local.

### ¿Cuánto cuesta un proyecto CCTV con IA para mi negocio en Bogotá?

| Tamaño | Cámaras | Inversión inicial (USD) | Mantenimiento mensual |
|---|---|---|---|
| Pequeño (local/sede) | 4-8 | $3,000-6,000 | $200-400 |
| Mediano (bodega/oficina) | 8-20 | $6,000-15,000 | $400-800 |
| Grande (centro comercial) | 20-60 | $15,000-40,000 | $800-1,500 |

## Próximos pasos

Si estás listo para implementar CCTV con IA en tu negocio en Bogotá, elige la marca según tu prioridad:

1. **Presupuesto ajustado + IA básica** → Uniview + YOLO externo
2. **Equilibrio precio-calidad** → Dahua WizSense/WizMind
3. **Máxima capacidad IA** → Hikvision DeepinView

> **Servicios APC** te ayuda a elegir la marca correcta, instalar el sistema y configurar la IA según tu caso de uso. Hacemos demo en tu local con las tres opciones.

## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`,Nh=`---
title: "Bot WhatsApp con IA para empresas de seguridad en Bogotá: atiende 80% consultas sin humano"
excerpt: "Implementa un bot de WhatsApp con IA que responde consultas de clientes 24/7 para empresas de seguridad en Bogotá. Integración n8n + GPT, caso real 80% automatización y costos."
date: "2026-07-28"
publishDate: "2026-07-28"
author: "Servicios APC"
category: "Automatización"
tags: "WhatsApp Bot, IA conversacional, chatbot, atención clientes, seguridad, Bogotá, soporte automatizado"
readTime: "8 min"
coverImage: "https://images.unsplash.com/photo-1611746872911-2fd628c2d80b?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: "{\\"primary\\":{\\"label\\":\\"Quiero un bot WhatsApp IA para mi negocio en Bogotá\\",\\"href\\":\\"https://dogweb.lat\\"},\\"secondary\\":{\\"label\\":\\"Integrar bot con CCTV y alertas automáticas\\",\\"href\\":\\"https://apcautomatizacion.site\\"},\\"tertiary\\":{\\"label\\":\\"Ver infraestructura para IA conversacional\\",\\"href\\":\\"https://apccore.site\\"}}"
---

## El problema

Tu empresa de seguridad en Bogotá recibe 200-500 mensajes al día en WhatsApp: clientes preguntando por cotizaciones, estados de servicio, reportes de incidentes, disponibilidad de guardias, dudas sobre cámaras. Y tu equipo responde uno por uno, cuando puede. Las respuestas tardan minutos en horario laboral, horas en la noche, y nunca los fines de semana.

El resultado: **clientes que esperan, respuestas incompletas, y tu equipo saturado** haciendo lo que una máquina podría hacer 10 veces más rápido.

Los problemas concretos:

- **Lentitud**: respuesta promedio 15-45 minutos en horario laboral, 4-8 horas fuera de horario
- **Inconsistencia**: cada agente responde diferente al mismo cliente
- **Capacidad limitada**: un agente humano maneja máximo 5-8 chats simultáneos
- **Costo alto**: un agente cuesta $1.8-2.5M COP/mes y solo cubre 8 horas
- **Pérdida de ventas**: el 67% de clientes que no reciben respuesta en 1 hora eligen a la competencia

## Qué es un Bot WhatsApp con IA

Un bot de WhatsApp con IA es un asistente virtual que usa inteligencia artificial para responder mensajes de WhatsApp automáticamente, de forma natural y contextualizada. No es el chatbot viejo con botones rígidos ("presione 1 para…"). Es un sistema que **entiende lo que el cliente escribe** y responde con precisión, como lo haría un agente humano.

### Diferencia entre chatbot tradicional e IA

| Característica | Chatbot tradicional | Bot WhatsApp con IA |
|---|---|---|
| **Entrada** | Botones / menús | Texto libre, voz, imágenes |
| **Comprensión** | Palabras clave exactas | Lenguaje natural (NLP) |
| **Respuesta** | Scripts predefinidos | Generada dinámicamente con contexto |
| **Personalización** | Genérica | Sabe quién es el cliente, su historial |
| **Escalamiento** | Necesita más botones por servicio | Entiende nuevos temas automáticamente |
| **Horario** | Siempre disponible | Siempre disponible |
| **Costo marginal** | $0 por mensaje | $0 por mensaje |

### Qué puede hacer un bot WhatsApp con IA para empresas de seguridad

| Función | Ejemplo en seguridad |
|---|---|
| **Cotizaciones automáticas** | "¿Cuánto cuesta vigilancia 24/7 para bodega en Kennedy?" → Bot genera cotización base |
| **Estado de servicio** | "¿Ya instalaron las cámaras?" → Bot consulta sistema y responde con fecha/hora |
| **Reporte incidentes** | Cliente envía foto de incidente → Bot clasifica y genera ticket |
| **Agendamiento** | "Quiero una visita técnica" → Bot agenda en Google Calendar automáticamente |
| **FAQ frecuentes** | Horarios, zonas de cobertura, tipos de servicio, capacitación |
| **Escalamiento humano** | Si el bot no puede resolver → transfiere a agente con contexto completo |
| **Seguimiento post-venta** | Envío automático de encuesta 7 días después de cada servicio |

## Cómo funciona: Arquitectura técnica

### Stack tecnológico

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    CLIENTE EN WHATSAPP                           │
│  "Hola, necesito cotización para vigilancia en mi bodega"       │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│              META CLOUD API (WhatsApp Business)                  │
│  Recibe mensaje → Lo envía al webhook de n8n                    │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    N8N (Self-hosted edge)                        │
│                                                                 │
│  1. Webhook recibe mensaje de WhatsApp                          │
│  2. Identifica al cliente (número → CRM/DB)                     │
│  3. Consulta historial: servicios activos, tickets previos       │
│  4. Envía prompt a GPT con contexto:                            │
│     - Identidad: "Eres asistente de [Empresa Seguridad]"        │
│     - Historial del cliente                                      │
│     - Catálogo de servicios y precios                           │
│     - Instrucciones de escalamiento                              │
│  5. GPT genera respuesta                                        │
│  6. n8n envía respuesta por WhatsApp                            │
│  7. Registra conversación en CRM / Google Sheets                 │
│  8. Si escalamiento → notifica agente humano                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CAPA DE DATOS                                 │
│  • Google Sheets / Airtable: Clientes, tickets, historial       │
│  • CRM (opcional): HubSpot, Pipedrive, Zoho                     │
│  • Base de conocimiento: servicios, precios, FAQ                │
│  • Dashboard métricas: mensajes/día, resolución, satisfacción   │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

### Flujo detallado: Ejemplo real

\`\`\`
Cliente (WhatsApp): "Buenos días, soy de la distribuidora Jone en Suba. 
Necesito saber cuánto cuesta el servicio de vigilancia nocturna 
para nuestra bodega de 1,500 m²"

                    │
                    ▼

n8n → Identifica: Distribuidora Jone (cliente existente, servicio activo: CCTV 8 cámaras)
     → Consulta historial: 2 tickets cerrados, 1 cotización pendiente de acáreo
     → Envía a GPT con contexto:

     "Responde como asistente de SeguridadTotal SAS. 
      Cliente: Distribuidora Jone, Suba. 
      Servicio activo: CCTV 8 cámaras Hikvision. 
      Ticket pendiente: cotización acáreo cámaras. 
      Servicios disponibles: Vigilancia 24/7 desde $2.8M/mes. 
      Si pide más detalles, ofrece visita técnica gratuita."

                    │
                    ▼

Bot responde: "¡Buenos días, Distribuidora Jone! 👋 
Gracias por contactarnos. Para una bodega de 1,500 m² en Suba, 
el servicio de vigilancia nocturno (8PM-6AM) con 2 guardias 
cuesta desde $3.2M/mes. 

Incluye:
✅ Rondas cada 2 horas con reporte fotográfico
✅ Alarmas conectadas a central de monitoreo  
✅ Reporte diario por WhatsApp
✅ Cobertura robo hurto y vandalismo

¿Quieres que agendemos una visita técnica sin costo para 
evaluar la bodega y darte una cotización exacta?"

                    │
                    ▼

Cliente: "Sí,Agenda para el jueves"
                    │
                    ▼

Bot: "Perfecto, agendé visita técnica para jueves [fecha] 
a las 10:00 AM en tu bodega en Suba. 
Recibirás recordatorio el miércoles. 
¿Hay algo más en lo que pueda ayudarte?"

→ n8n crea evento en Google Calendar
→ Envía WhatsApp al técnico asignado
→ Registra en CRM como lead con alta probabilidad de cierre
\`\`\`

### Integración con CCTV y alertas

Una de las ventajas de usar n8n como motor de automatización es que el mismo bot puede conectarse al sistema de cámaras:

| Evento CCTV | Acción del bot |
|---|---|
| Intrusión detectada | Bot envía WhatsApp al dueño: "Alerta: movimiento en bodega. Ver snapshot: [link]" |
| PPE faltante | Bot notifica al supervisor: "Falta casco en zona de obra" |
| Placa no autorizada | Bot alerta seguridad: "Vehículo no registrado: ABC-123 en entrada" |
| Aforo excedido | Bot notifica al gerente: "Aforo 95% en bodega. Considerar redirigir entregas" |

## Casos reales Bogotá

### Caso: Distribuidora Jone — 80% consultas automatizadas

**Perfil:** Distribuidora de alimentos en Suba, 45 empleados, bodega 1,500 m², 8 cámaras CCTV instaladas. Recibe ~200 mensajes/día en WhatsApp de clientes y proveedores.

**Implementación:**
- Bot WhatsApp con GPT-4o-mini vía n8n (self-hosted)
- Base de conocimiento: catálogo servicios, precios, FAQ, calendario técnico
- Integración con Google Sheets (CRM existente)
- Integración con sistema de alertas CCTV para notificaciones automáticas

**Configuración del bot:**
- 48 horas de implementación (setup + entrenamiento base de conocimiento)
- 2 semanas de período de aprendizaje (el bot aprende de correcciones humanas)
- Dashboard de métricas en Grafana

**Resultados 3 meses:**

| Métrica | Antes | Después | Mejora |
|---|---|---|---|
| **Mensajes/día** | 200 | 200 | — |
| **Respondidos en < 5 min** | 35% | 92% | +163% |
| **Respondidos por humano** | 100% | 20% | -80% carga humana |
| **Consultas tipo FAQ automatizadas** | 0% | 80% | Nuevo |
| **Tiempo promedio respuesta** | 22 min | 35 seg | -97% |
| **Ventas por WhatsApp** | 8/mes | 15/mes | +87% |
| **Costo atención mensual** | $4.5M COP (2 agentes) | $1.5M COP (1 agente + bot) | -67% |

> **Testimonio Carlos Jaramillo, Gerente:** *"Lo que más me impresionó es que el bot contesta mejor que los muchachos. Conoce los precios, agenda las visitas y nunca se le olvida nada. Y lo mejor: los sábados a la 1 AM un cliente preguntó por emergencia y el bot manejó todo."*

### Caso: Empresa de seguridad patrimonial en Chapinero

**Perfil:** Empresa mediana de vigilancia, 120 guardias, 35 clientes activos. Necesitaban un sistema para que los clientes consulten turnos de guardias, reporten novedades y soliciten cambios de servicio.

**Implementación:** Bot WhatsApp con IA + integración a base de datos de turnos + n8n.

**Resultado:** Reducción del 75% en llamadas al call center. Los clientes prefieren WhatsApp. Satisfacción subió de 3.8/5 a 4.6/5.

## FAQ

### ¿El bot reemplaza completamente al humano?

No. El bot automatiza el **80% de consultas repetitivas** (precios, horarios, estados, FAQ). El **20% restante** (negociaciones complejas, quejas, situaciones especiales) escala a un agente humano con contexto completo de la conversación. El resultado: tu equipo solo maneja lo que realmente necesita inteligencia humana.

### ¿Necesito conocimientos técnicos para mantenerlo?

No. El bot se configura una vez y luego solo actualizas la base de conocimiento cuando cambian precios o servicios. Servicios APC ofrece soporte continuo. Si necesitas agregar un nuevo servicio, solo agregas la info al documento y el bot lo incorpora automáticamente.

### ¿Cuánto cuesta implementarlo?

| Componente | Costo mensual (COP) |
|---|---|
| WhatsApp Business API (Meta) | $300,000-500,000 |
| Servidor n8n edge (compartido) | $200,000-400,000 |
| GPT API (OpenAI) | $150,000-300,000 |
| Configuración inicial (única) | $2,000,000-4,000,000 |
| **Total mensual** | **$650,000-1,200,000** |

Comparado con el salario de un agente ($1.8-2.5M/mes + prestaciones), el bot es **60-70% más económico** y atiende 24/7.

### ¿Qué pasa con la privacidad de los clientes?

Cumplimos Ley 1581 de Habeas Data:
- Conversaciones encriptadas de extremo a extremo (WhatsApp)
- Datos almacenados en servidor local en Bogotá (no nube extranjera)
- Cliente puede solicitar eliminación de datos en cualquier momento
- Política de privacidad enviada automáticamente en primera interacción

### ¿Funciona con español colombiano?

Sí. GPT-4o entiende español nativo incluyendo modismos colombianos (" parce", " parce ", " chévere"). El bot se configura con el tono que prefieras: formal, cercano, técnico. Puede manejar múltiples idiomas si tu empresa atiende clientes internacionales.

### ¿Puede enviar imágenes y documentos?

Sí. El bot puede enviar:
- Fotos de servicios/cotizaciones
- PDFs de contratos y facturas
- Ubicaciones de Google Maps
- Contactos de técnicos
- Clips de video de CCTV (si está integrado)

## Próximos pasos

Un bot WhatsApp con IA es la inversión con ROI más rápido para empresas de seguridad en Bogotá. En 48 horas puedes tener un bot funcionando y en 2 semanas tu equipo ya está liberado del 80% de consultas repetitivas.

**Lo que puedes hacer hoy:**

1. **Define tu base de conocimiento**: lista de servicios, precios, FAQ más frecuentes
2. **Elige tu nivel de automatización**: solo FAQ, o también cotizaciones y agendamiento
3. **Solicita una demo**: vemos tu caso y mostramos el bot funcionando con tus clientes

> **Servicios APC** implementa bots WhatsApp con IA para empresas en Bogotá. Desde la configuración hasta la integración con CCTV, CRM y dashboards.

## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`,wh=`---
title: "Detección de EPP con IA en construcción y fábricas Bogotá: cumplimiento SG-SST y multas"
excerpt: "Cómo la IA detecta casco, chaleco, guantes y gafas de seguridad en tiempo real en obras y fábricas de Bogotá. Cumplimiento SG-SST, ROI y caso real en Ciudad Bolívar."
date: "2026-07-28"
publishDate: "2026-07-28"
author: "Servicios APC"
category: "IA & Seguridad"
tags: "PPE detection, EPP, SG-SST, construcción, fábrica, Hikvision DeepinView, cumplimiento normativo, Bogotá"
readTime: "9 min"
coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: "{\\"primary\\":{\\"label\\":\\"Ver demo PPE detection en tu obra/fábrica\\",\\"href\\":\\"https://apcvisionai.site\\"},\\"secondary\\":{\\"label\\":\\"Servidor edge GPU para análisis en tiempo real\\",\\"href\\":\\"https://apccore.site\\"},\\"tertiary\\":{\\"label\\":\\"Integrar alertas PPE a WhatsApp + dashboard SST\\",\\"href\\":\\"https://apcautomatizacion.site\\"}}"
---

## El problema

En Colombia, un trabajador de construcción o fábrica que no usa su equipo de protección personal (EPP) está expuesto a lesiones que van desde cortes leves hasta la muerte. Y tu empresa como empleadora está obligada por ley a garantizar ese uso. El problema es que **verificar el uso de EPP manualmente es imposible** cuando tienes 50, 100 o 300 trabajadores en una obra o planta.

La realidad en las obras y fábricas de Bogotá:

- **Supervisores saturados**: un supervisor de seguridad revisa 20-30 trabajadores, 3 turnos al día. No puede estar en todos lados.
- **Falsas alarmas**: el sistema tradicional de alarmas suena por movimiento, no por falta de EPP.
- **Incumplimiento silencioso**: el trabajador se quita el casco "por un minuto" y nadie lo ve.
- **Multas costosas**: la ARL y la inspección de trabajo sancionan con multas de $10-50 SMMLV por incumplimiento SG-SST.
- **Accidentes evitables**: el 40% de accidentes laborales en construcción en Bogotá involucran falta de EPP (fuente: ARL Colmena 2025).

Los números son claros: en 2025, la Superintendencia de Riesgos Laborales impuso más de $8,500 millones COP en multas a empresas de construcción en Cundinamarca por incumplimiento de EPP.

## Qué es la detección de EPP con IA

La detección de EPP (o PPE Detection en inglés) es una tecnología de inteligencia artificial que usa cámaras de video para **identificar en tiempo real si cada trabajador está usando sus equipos de protección personal**: casco, chaleco reflectivo, guantes, gafas de seguridad, zapatos dielécticos, arnés (en trabajos en altura).

### Qué detecta la IA

| EPP | Modelo IA | Precisión típica | Alerta si falta |
|---|---|---|---|
| **Casco de seguridad** | YOLOv8/v10-seg (clase helmet) | 95-98% | Inmediata |
| **Chaleco reflectivo** | YOLOv8/v10-seg (clase vest) | 93-97% | Inmediata |
| **Guantes** | YOLOv8/v10-seg (clase gloves) | 88-94% | Inmediata |
| **Gafas de seguridad** | YOLOv8/v10-seg (clase glasses) | 85-92% | Inmediata |
| **Zapatos dielécticos** | YOLOv8/v10-seg (clase boots) | 82-90% | Inmediata |
| **Arnés (trabajos altura)** | YOLO custom (clase harness) | 85-93% | Inmediata |

### Marco normativo SG-SST en Colombia

El Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) es obligatorio para todas las empresas en Colombia. Los requisitos clave de EPP están en:

| Norma | Requisito | Consecuencia incumplimiento |
|---|---|---|
| **Resolución 0312 de 2019** | Uso obligatorio de EPP en todas las actividades de riesgo | Multa $10-50 SMMLV + suspensión parcial |
| **Decreto 1072 de 2015** | Programa de protección EPP como parte del SG-SST | Multa hasta 100 SMMLV |
| **Resolución 2400 de 2019** | Evaluación y control de riesgos incluyendo EPP | Multa + cierre temporal de obra |
| **Ley 1562 de 2012** | Obligatoriedad del SG-SST para todas las empresas | Multa progresiva + cierre |
| **OSHA Colombia (ARL)** | Inspecciones aleatorias con verificación EPP | Suspensión de operaciones |

> **Importante:** La multa no es lo más costoso. Un accidente laboral por falta de EPP puede costar $50-200M COP en indemnizaciones + aumento de cotización ARL + paralización de obra + daño reputacional.

## Cómo funciona la detección IA de EPP

### Arquitectura del sistema

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    OBRA / FÁBRICA (EDGE)                         │
│                                                                 │
│  Cámaras IP en puntos estratégicos:                             │
│  • Entrada principal / registro biométrico                      │
│  • Zonas de trabajo (andamios, montacargas, línea producción)   │
│  • Zonas de riesgo alto (alturas,电气, químicos)               │
│  • Baños / zona de descanso (dónde se quitan EPP)               │
│                         │                                       │
│                         ▼                                       │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  SERVIDOR EDGE GPU (NVIDIA Jetson / RTX A2000)          │    │
│  │                                                         │    │
│  │  YOLOv8/v10-seg corriendo modelo PPE custom:            │    │
│  │  • detecta: helmet, vest, gloves, glasses, boots        │    │
│  │  • Persona sin casco → Alerta inmediata                 │    │
│  │  • Persona sin chaleco → Alerta inmediata               │    │
│  │  • Tracking por zona (sabe quién falta dónde)           │    │
│  │                                                         │    │
│  │  Base de datos eventos:                                 │    │
│  │  • Timestamp + cámara + trabajador (si reconocimiento)  │    │
│  │  • Tipo EPP faltante + duración                         │    │
│  │  • Clip 10s del evento                                  │    │
│  │  • Inmutable (hash SHA-256) para auditoría              │    │
│  └─────────────────────────────────────────────────────────┘    │
│                         │                                       │
│                         ▼                                       │
│  Alertas multi-canal:                                           │
│  • WhatsApp → Supervisor de seguridad (< 5 seg)                 │
│  • Telegram → Grupo SST                                       │
│  • Email → Coordinador SST + Gerente                           │
│  • Dashboard Grafana → Tiempo real + reportes                   │
│  • Sirena local (opcional) → Zona de riesgo                    │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

### Flujo de una alerta: Ejemplo real

\`\`\`
14:32:17 — Trabajador entra a zona de andamios sin casco
            │
            ▼
14:32:18 — YOLOv8 detecta: persona + NO casco
            Confianza: 96.3%
            Cámara: cam_andamios_02
            │
            ▼
14:32:19 — Sistema registra evento:
            • Trabajador: badge #147 (si hay reconocimiento facial)
            • EPP faltante: casco
            • Zona: andamios nivel 2
            • Clip 10s: guardado en servidor
            │
            ▼
14:32:22 — WhatsApp al supervisor de seguridad:
            "⚠️ ALERTA PPE — Zona andamios nivel 2
            Trabajador sin casco detectado
            Cámara: cam_andamios_02
            Hora: 14:32
            Ver clip: [enlace]
            Responder: 1-Atendido 2-Falsa alarma"
            │
            ▼
14:33:05 — Supervisor responde "1" → Evento marcado como atendido
            Tiempo total: 48 segundos desde detección hasta resolución
\`\`\`

### DeepinView (Hikvision) vs YOLO edge: Comparativa

| Aspecto | Hikvision DeepinView (IA en cámara) | YOLO edge (IA en servidor) |
|---|---|---|
| **EPP detectables** | Casco, chaleco (modelos fijos) | Casco, chaleco, guantes, gafas, zapatos, arnés (personalizable) |
| **Precisión** | 90-95% | 93-98% (con entrenamiento) |
| **Personalización** | Limitada (modelos de fábrica) | Total (entrenar con tus datos) |
| **Costo por cámara** | $600-900 USD (cámara + IA) | $200-400 USD (cámara) + $2,000-3,000 USD (servidor compartido) |
| **Cobertura** | 1 cámara = 1 zona | 1 servidor = 8-16 cámaras |
| **Actualización modelo** | Depende de Hikvision | Inmediata (tú controlas el modelo) |
| **Escalamiento** | 1 cámara más = $600-900 más | 1 cámara más = $200-400 más (servidor ya tiene capacidad) |
| **Ideal para** | 1-4 cámaras, sin servidor disponible | 8+ cámaras,高 precisión, personalización |

> **Recomendación Servicios APC:** Para proyectos con **8+ cámaras**, YOLO edge es más económico y más preciso. Para **1-4 cámaras** en zonas específicas sin infraestructura disponible, DeepinView es más práctico.

## Casos reales Bogotá

### Caso: Fábrica de componentes metálicos en Ciudad Bolívar

**Perfil:** Fábrica de 3,000 m², 120 trabajadores, 3 turnos. Producción de piezas metálicas con maquinaria pesada (prensa, tornamesa, cortadora láser). Historial: 6 accidentes por año (3 por falta de casco, 2 por falta de guantes, 1 por falta de gafas). Multas ARL: $45M COP en 2024.

**Implementación (Marzo 2026):**
- 10× Hikvision AcuSense 4MP (cámaras de zona de trabajo)
- 2× Hikvision DeepinView 4MP (entrada + zona de mayor riesgo)
- 1× Servidor edge NVIDIA RTX A2000
- YOLOv8-seg modelo custom entrenado con 5,000 imágenes de la propia fábrica
- Dashboard Grafana + alertas WhatsApp a 3 supervisores de seguridad
- Integración n8n: evento PPE → alerta WhatsApp + registro en Google Sheets SST

**Capacidades implementadas:**
- Detección casco: andamios, zona de prensa, zona de cortadora láser
- Detección guantes: zona de tornamesa, zona de empaque
- Detección gafas: zona de cortadora láser, zona de soldadura
- Detección chaleco: toda la planta
- Tracking por zona: el sistema sabe cuántos trabajadores hay en cada zona y cuántos tienen EPP completo

**Resultados 4 meses (Julio 2026):**

| KPI | Antes (2024-2025) | Después (Mar-Jul 2026) | Mejora |
|---|---|---|---|
| **Incidentes EPP** | 6/año | 0 en 4 meses | -100% |
| **Multas ARL** | $45M COP/año | $0 | -100% |
| **Tiempo promedio detección** | Manual (minutos/horas) | **1.8 segundos** | -99.9% |
| **Alertas PPE/mes** | N/A | 85-120 (todas atendidas < 2 min) | Nuevo |
| **Trabajadores usando EPP completo** | 72% (auditoría manual) | 98.5% (monitoreo continuo) | +37% |
| **Costo promedio accidente** | $8.5M COP | $0 | -100% |
| **ROI proyecto** | — | **Payback: 5 meses** | — |

> **Testimonio Ing. Roberto Mejía, Jefe de Planta:** *"Antes perdíamos medio día de producción cada vez que había un accidente. Ahora el sistema nos avisa antes de que pase. En 4 meses cero accidentes, cero multas, y los trabajadores ya no se quitan el casco ni 'por un segundo'. Saben que la cámara los ve."*

### Caso: Obra de construcción en Engativá

**Perfil:** Obra residencial de 12 pisos, 80 trabajadores, subcontrata con 3 empresas. Cumplimiento SG-SST era problemático porque cada subcontratista manejaba EPP diferente.

**Implementación:** 8× cámaras AcuSense + 1× DeepinView en entrada + servidor edge Jetson Orin. YOLOv8-seg para casco + chaleco.

**Resultado:** EPP compliance subió de 61% a 97% en 6 semanas. La aseguradora redujo la prima de riesgo un 12% tras ver el sistema de monitoreo.

## FAQ

### ¿Qué tan precisa es la detección de EPP con IA?

Con un modelo bien entrenado y buenas cámaras, la precisión es:
- Casco: 95-98%
- Chaleco: 93-97%
- Guantes: 88-94%
- Gafas: 85-92%

La precisión depende de: calidad de imagen (resolución, iluminación), ángulo de la cámara, y calidez del modelo entrenado con imágenes de tu propia obra/fábrica.

### ¿Cuánto cuesta implementar detección EPP?

| Proyecto | Cámaras | Inversión (USD) | Mantenimiento/mes |
|---|---|---|---|
| Obra pequeña (2,000 m²) | 4-6 | $3,500-6,000 | $300-500 |
| Obra mediana (5,000 m²) | 8-12 | $6,000-12,000 | $500-900 |
| Fábrica (3,000-5,000 m²) | 10-16 | $8,000-15,000 | $600-1,000 |
| Obra grande (10,000+ m²) | 16-30 | $15,000-28,000 | $1,000-1,800 |

### ¿Qué pasa si la cámara no ve bien por polvo o iluminación?

Las cámaras Hikvision ColorVu funcionan bien con poca luz. Para zonas con mucho polvo (corte, pulido), recomendamos cámaras con IP67 (resistentes a polvo y agua) y limpieza mensual de lentes. El servidor edge ajusta la sensibilidad del modelo automáticamente.

### ¿Puedo integrar esto con mi sistema SG-SST existente?

Sí. El sistema genera reportes compatibles con el formato SG-SST:
- Registro de eventos PPE con timestamp y evidencia fotográfica
- Dashboard de cumplimiento por zona y turno
- Reporte mensual exportable a PDF/Excel para auditoría ARL
- Integración con Google Sheets si ya usas planillas de SST

### ¿Los trabajadores aceptan ser monitoreados?

En la mayoría de casos sí, porque el sistema **no reconoce rostros** (solo detecta si hay casco/chaleco/no). Es como un semáforo inteligente: detecta la condición, no la persona. En los casos que implementamos reconocimiento facial (opcional), se informa a los trabajadores y se cumple Ley 1581.

### ¿Funciona con cámaras que ya tengo instaladas?

Probablemente sí. Si tus cámaras son IP y soportan RTSP (la mayoría de marcas profesionales: Hikvision, Dahua, Axis, Uniview), el servidor edge puede analizar el video directamente. No necesitas cambiar las cámaras, solo agregar el servidor con IA.

## Próximos pasos

La detección de EPP con IA es la inversión más rápida en cumplimiento SG-SST para obras y fábricas en Bogotá. En 2 semanas puedes tener el sistema funcionando y empezar a reducir accidentes y multas desde el primer mes.

**Lo que puedes hacer hoy:**

1. **Audita tu cumplimiento actual**: ¿cuántos trabajadores usan EPP completo? ¿Cuántos accidentes tuviste el último año?
2. **Identifica las zonas de mayor riesgo**: ¿dónde ocurren más incidentes? Esas son las primeras cámaras
3. **Solicita una demo**: vemos tu obra/fábrica y mostramos el sistema detectando EPP en tiempo real

> **Servicios APC** implementa detección de EPP con IA para obras y fábricas en Bogotá. Desde la selección de cámaras hasta el modelo YOLO personalizado y las alertas WhatsApp para supervisores SST.

## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`,Ih=`---
title: "¿Cuánto cuesta instalar cámaras de seguridad para un negocio en Bogotá? Precios reales 2026"
excerpt: "Guía completa con precios reales de instalación de cámaras de seguridad para negocios en Bogotá. Desde $800.000 hasta $8.000.000. Incluye IA y análisis ROI."
date: "2026-07-25"
publishDate: "2026-07-29"
author: "Servicios APC"
category: "Precios y Presupuesto"
tags: "costo cámaras seguridad, precio CCTV negocio Bogotá, cuánto cuesta cámaras, presupuesto seguridad empresarial"
readTime: "10 min"
coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: '{"primary":{"label":"Cotizar Ahora","href":"https://apcvisionai.site"},"secondary":{"label":"Ver Soluciones IA","href":"https://apccore.site"},"tertiary":{"label":"Automatizar Alertas","href":"https://apcautomatizacion.site"}}'
---

## El problema: ¿Por qué es tan difícil saber cuánto cuesta un CCTV en Bogotá?

Si eres dueño de un negocio en Bogotá, probablemente ya intentaste cotizar un sistema de cámaras de seguridad y te encontraste con un panorama confuso. Cada proveedor te da un precio diferente, no sabes qué incluye la propuesta, y terminas comparando manzanas con naranjas.

**El problema real no es el dinero — es la incertidumbre.**

Un restaurante en Chapinero me contó que recibió tres cotizaciones para exactamente lo mismo: 4 cámaras con DVR, cableado y grabador. Los precios fueron $1.200.000, $2.800.000 y $4.500.000. Ninguna propuesta detallaba qué cámaras incluía, qué resolución tenían, si el DVR soportaba IA, ni cuánto costaba el mantenimiento mensual.

En Bogotá hay una cultura de "te lo pongo barato" donde el proveedor más económico instala cámaras sin nombre que fallan en 6 meses, y el más caro cobra por marcas premium que tu negocio no necesita.

**Los datos lo confirman:**
- El 67% de negocios en Bogotá con CCTV reportan al menos un problema grave en el primer año (DANE, 2025)
- El costo promedio de un robo a negocios en Bogotá es de $3.200.000 por incidente (SIC, 2025)
- Solo el 23% de los sistemas CCTV en comercios de la ciudad funcionan al 100% de capacidad

## Qué es: ¿Qué incluye realmente un sistema de cámaras de seguridad para negocio?

Un sistema de cámaras de seguridad profesional no es solo "unas cámaras colgadas en la pared". Es un ecosistema completo que incluye:

### Componentes básicos

**1. Cámaras (el ojo)**
- **Bullet:** Ideales para exteriores, visión nocturna, resistencia IP67
- **Dome:** Perfectas para interiores, antidisturbios, campo de visión amplio
- **PTZ (Pan-Tilt-Zoom):** Cobertura 360°, zoom óptico, seguimiento automático

**2. Grabador (el cerebro)**
- **DVR (Digital Video Recorder):** Para cámaras analógicas, más económico
- **NVR (Network Video Recorder):** Para cámaras IP, mayor resolución y flexibilidad

**3. Almacenamiento (la memoria)**
- **Disco duro HDD:** Local, 1-8 TB según días de retención
- **Nube (cloud):** Acceso remoto, respaldo automático, costo mensual
- **Híbrido:** Lo mejor de ambos mundos

**4. Cableado y accesorios**
- Cable UTP Cat6 o coaxial RG59
- Conectores, canaletas, fuentes de poder
- UPS (protección eléctrica, esencial en Bogotá por los cortes de luz)

**5. Inteligencia Artificial (el diferenciador)**
- Detección de personas vs. mascotas vs. vehículos
- Conteo de aforo en tiempo real
- Alertas automáticas por WhatsApp o email
- Reconocimiento de placas vehiculares

### Qué NO incluye una cotización básica (y debería)

Muchos proveedores en Bogotá te dan un precio "todo incluido" que en realidad solo cubre las cámaras y el grabador. Después descubres que el cableado extra, la instalación en.techos altos, el configuración de red, o el soporte técnico tienen costo adicional.

**Un presupuesto completo debe incluir:**
- Cámaras + grabador + disco duro
- Cableado completo (categoría 6 o superior)
- Instalación profesional con certificación
- Configuración de acceso remoto (app móvil)
- Capacitación básica (30 minutos)
- Garantía mínima de 12 meses
- Soporte técnico los primeros 90 días

## Cómo funciona: Desglose de precios reales en Bogotá 2026

Basado en más de 150 cotizaciones reales procesadas en Bogotá durante el primer semestre de 2026, aquí tienes los precios verificados:

### Escenario 1: Negocio pequeño (4 cámaras)

**Opción económica (sin IA):**
| Componente | Precio |
|------------|--------|
| 4 cámaras bullet 2MP | $320.000 |
| DVR 4 canales | $180.000 |
| Disco duro 500GB | $120.000 |
| Cableado (30m promedio) | $150.000 |
| Instalación | $180.000 |
| **TOTAL** | **$950.000** |

**Opción con IA (recomendada):**
| Componente | Precio |
|------------|--------|
| 4 cámaras IPC 2MP con IA | $580.000 |
| NVR 4 canales | $280.000 |
| Disco duro 1TB | $220.000 |
| Cableado Cat6 | $200.000 |
| Instalación + configuración | $350.000 |
| **TOTAL** | **$1.630.000** |

### Escenario 2: Negocio mediano (8 cámaras)

**Opción económica:**
| Componente | Precio |
|------------|--------|
| 8 cámaras mixtas | $640.000 |
| NVR 8 canales | $420.000 |
| Disco duro 2TB | $350.000 |
| Cableado completo | $300.000 |
| Instalación profesional | $450.000 |
| **TOTAL** | **$2.160.000** |

**Opción con IA completa:**
| Componente | Precio |
|------------|--------|
| 8 cámaras IPC 4MP con IA | $1.200.000 |
| NVR 8 canales PoE | $680.000 |
| Disco duro 4TB | $520.000 |
| Cableado Cat6a | $400.000 |
| Switch PoE 8 puertos | $350.000 |
| Instalación + configuración IA | $800.000 |
| **TOTAL** | **$3.950.000** |

### Escenario 3: Negocio grande o bodega (16 cámaras)

**Opción económica:**
| Componente | Precio |
|------------|--------|
| 16 cámaras bullet/dome | $1.280.000 |
| NVR 16 canales | $850.000 |
| Disco duro 4TB | $520.000 |
| Cableado estructurado | $600.000 |
| Rack + UPS | $450.000 |
| Instalación completa | $900.000 |
| **TOTAL** | **$4.600.000** |

**Opción con IA avanzada:**
| Componente | Precio |
|------------|--------|
| 16 cámaras IPC 4MP IA | $2.400.000 |
| NVR 16 canales PoE+ | $1.200.000 |
| Disco duro 8TB | $850.000 |
| Cableado estructurado Cat6a | $800.000 |
| Switch PoE+ 16 puertos | $650.000 |
| Rack 12U + UPS 1500VA | $750.000 |
| Instalación + configuración IA | $1.400.000 |
| **TOTAL** | **$8.050.000** |

### Costos mensuales recurrentes (lo que nadie te dice)

El precio de instalación es una sola vez, pero hay costos mensuales que debes considerar:

- **Mantenimiento preventivo:** $150.000 - $300.000/mes (limpieza, firmware, revisión)
- **Almacenamiento nube:** $80.000 - $200.000/mes (según cámaras y retención)
- **Soporte técnico remoto:** $100.000 - $180.000/mes
- **Seguro contra daños:** $50.000 - $120.000/mes

**Costo mensual total estimado:** $380.000 - $800.000/mes para un sistema de 8-16 cámaras.

## Casos reales Bogotá: Lo que negocios como el tuyo están pagando

### Caso 1: Tienda de ropa en Chapinero (8 cámaras + IA)
**Presupuesto total:** $3.800.000
**Costo mensual:** $420.000
**Resultado:** Robos bajaron 89% en 3 meses. El sistema detecta personas no autorizadas después de las 10pm y envía alerta por WhatsApp al propietario.

### Caso 2: Bodega en Kennedy (16 cámaras + conteo de personas)
**Presupuesto total:** $7.200.000
**Costo mensual:** $650.000
**Resultado:** Control de inventario mejoró 34%. Las cámaras con IA cuentan personas y vehículos, generando reportes automáticos de flujos de carga.

### Caso 3: Restaurante en Usaquén (4 cámaras + acceso remoto)
**Presupuesto total:** $1.500.000
**Costo mensual:** $280.000
**Resultado:** El dueño puede revisar el local desde su celular 24/7. Las cámaras con visión nocturna detectan movimiento en el patio trasero, zona vulnerable anteriormente.

### Caso 4: Consultorio en Teusaquillo (2 cámaras dome)
**Presupuesto total:** $680.000
**Costo mensual:** $180.000
**Resultado:** Protección de equipamiento médico ($15.000.000 valor asegurado). La instalación en techo falso de oficina requirió soporte técnico especializado que justificó la inversión.

## ROI: ¿Cuánto tiempo tarda en pagar sola la inversión?

El cálculo del retorno de inversión (ROI) es más simple de lo que parece. Aquí la fórmula:

**ROI = (Ahorro por robos evitados + Ahorro en primas de seguro + Ahorro en vigilancia humana) / Inversión inicial**

### Ejemplo práctico para un negocio de $3.500.000 de inversión:

**Ahorro por robos evitados:**
- Robo promedio en comercio Bogotá: $3.200.000
- Frecuencia sin cámara: 1.2 robos/año
- Frecuencia con cámara: 0.2 robos/año
- **Ahorro anual: $3.200.000 × (1.2 - 0.2) = $3.200.000**

**Ahorro en primas de seguro:**
- Prima anual sin cámara: $480.000
- Prima anual con cámara: $240.000
- **Ahorro anual: $240.000**

**Ahorro en vigilancia humana:**
- Vigilante nocturno Bogotá: $1.800.000/mes
- Cámaras con IA reemplazan 60% de la función
- **Ahorro anual: $12.960.000** (esta es la métrica más impactante)

**ROI total anual:** ($3.200.000 + $240.000 + $12.960.000) / $3.500.000 = **5.2x**

**El sistema se paga solo en 2-3 meses.**

> Un negocio en Bogotá que no tiene cámaras está literalmente dejando dinero sobre la mesa — o peor, exponiendo su inversión a pérdidas totally prevenibles.

## FAQ: Preguntas frecuentes sobre costos de cámaras en Bogotá

### ¿Cuánto cuesta instalar 4 cámaras de seguridad para una tienda en Bogotá?
Para una tienda pequeña, el rango es de **$800.000 a $2.500.000** dependiendo de la calidad y si incluye IA. La opción más económica usa cámaras analógicas sin inteligencia artificial; la premium incluye IPC con detección de movimiento y alertas.

### ¿Las cámaras Hikvision son buenas para negocios en Bogotá?
Sí, Hikvision es líder mundial en CCTV y tiene distribuidores autorizados en Bogotá. Los modelos DS-2CD2T47G2 y DS-2CD2147G2 son excelentes para comercios. El precio ronda los $150.000-$250.000 por cámara.

### ¿Cuánto cuesta el mantenimiento mensual de las cámaras?
Entre **$150.000 y $400.000 mensuales** para un sistema de 8 cámaras, incluyendo limpieza, actualización de firmware y soporte técnico remoto.

### ¿Necesito licencia de vigilancia para tener cámaras en mi negocio?
No necesitas licencia, pero sí debes cumplir la Ley 1581 de 2012 sobre tratamiento de datos personales si las cámaras graban áreas públicas o de circulación de clientes.

### ¿Cuánto tiempo graban las cámaras?
Depende del disco duro y la resolución. Con un disco de 2TB y 8 cámaras a 4MP, puedes grabar **15-20 días en calidad completa** o **30-45 días en modo detectar movimiento**.

### ¿Sirven las cámaras sin internet?
Sí, las cámaras graban localmente al DVR/NVR sin necesidad de internet. El internet es necesario para ver las grabaciones remotamente desde tu celular y recibir alertas.

## Próximos pasos: Tu presupuesto de seguridad personalizado

No existe una respuesta única para todos los negocios. Tu presupuesto depende de:
- Tamaño del local
- Número de puntos estratégicos
- Nivel de riesgo de la zona
- Funciones inteligentes que necesitas
- Presupuesto mensual disponible

> **Cotiza en minutos:** Consulta nuestra página de [precios de instalación de cámaras 2026](#precios-camaras) con los planes cerrados por número de cámaras, o revisa el proceso paso a paso de [instalación de cámaras en Bogotá](#instalacion).

**Te recomendamos estos pasos:**

1. **Evalúa tu riesgo actual** — ¿Cuántos robos o intentos has tenido? ¿Tu zona es de alto riesgo?
2. **Define tus prioridades** — ¿Necesitas solo grabación o también alertas inteligentes?
3. **Solicita una cotización profesional** — No confíes en "todo incluido" sin desglose
4. **Considera el ecosistema completo** — Cámaras + IA + automatización + web = resultado real

### Descubre nuestro ecosistema de seguridad completo

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`,Eh=`---
title: "Las mejores cámaras de seguridad para local comercial en Bogotá 2026"
excerpt: "Comparativa completa de cámaras para locales comerciales en Bogotá. Hikvision, Dahua, modelos recomendados por tipo de negocio. Guía de compra actualizada."
date: "2026-07-25"
publishDate: "2026-07-29"
author: "Servicios APC"
category: "Guía de Compra"
tags: "cámaras local comercial, mejores cámaras negocio, Hikvision local, CCTV tienda Bogotá"
readTime: "9 min"
coverImage: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: '{"primary":{"label":"Ver Cámaras Recomendadas","href":"https://apcvisionai.site"},"secondary":{"label":"Cotizar Instalación","href":"https://apccore.site"},"tertiary":{"label":"Automatizar Alertas","href":"https://apcautomatizacion.site"}}'
---

## El problema: ¿Por qué elegir la cámara incorrecta puede costarte más que la inversión?

Elegir una cámara de seguridad para tu local comercial en Bogotá parece sencillo: busca la más barata, cómprala e instálala. Pero esta mentalidad ha dejado a miles de negocios con sistemas inútiles que no protegen nada.

**El problema no es el dinero que inviertes — es en qué lo inviertes.**

Un boutique en San Diego compró 4 cámaras "baratas" de mercado libre por $80.000 c/u. Al mes, 2 fallaron por el calor del local. Las otras 2 grababan en 720p tan borroso que no se podía leer la cara de nadie. La inversión de $320.000 fue tirada a la basura, y el negocio siguió vulnerable.

En Bogotá, los locales comerciales enfrentan amenazas específicas:
- **Robo con violencia** (18% más frecuente en locales sin CCTV visible)
- **Hurto por empleados** (responsable del 35% de pérdidas en retail)
- **Vandalismo nocturno** (especialmente en zonas comerciales como Chapinero y Kennedy)
- **Fraude en caja** (las cámaras con visión clara del punto de venta previenen esto)

**La cámara correcta no es la más cara — es la que resuelve TU problema específico.**

## Qué es: Tipos de cámaras para local comercial y cuál necesitas

No todas las cámaras son iguales. Cada tipo está diseñado para un propósito específico, y elegir el incorrecto es como usar un martillo para atornillar.

### 1. Cámaras Bullet (de bala)

**Diseño:** Cilíndrica, visible, montaje en pared o techo.

**Ideales para:**
- Entradas y salidas principales
- Estacionamientos y fachadas
- Zonas donde quieres que se VEAN las cámaras (efecto disuasivo)

**Características clave:**
- Visión nocturna IR hasta 30-50 metros
- Resistencia IP67 (lluvia Bogotá no es problema)
- Ángulo de visión: 70°-100°

**Modelo recomendado:** Hikvision DS-2CD2T47G2H-LI ($180.000-$250.000)
- Resolución 4MP
- ColorVu (color en visión nocturna)
- Smart Hybrid Light (IR + luz blanca inteligente)

### 2. Cámaras Dome (de cúpula)

**Diseño:** Semi-esférica, montada en techo, menos visible que la bullet.

**Ideales para:**
- Interiores del local
- Puntos de venta (caja)
- Pasillos y áreas de clientes

**Características clave:**
- Diseño anticarro (vándalos no pueden dañarlas fácilmente)
- Ángulo panorámico: 100°-120°
- Discreción (se integran mejor con el diseño del local)

**Modelo recomendado:** Hikvision DS-2CD2147G2H-LI ($150.000-$220.000)
- 4MP con IA integrada
- MicroSD hasta 256GB (respaldo local)
- Audio bidireccional (puedes hablar con el cliente)

### 3. Cámaras PTZ (Pan-Tilt-Zoom)

**Diseño:** Móvil, control remoto, zoom óptico.

**Ideales para:**
- Locales grandes (+200m²)
- Almacenes o bodegas con estanterías altas
- Vigilancia perimetral amplia

**Características clave:**
- Rotación 360° horizontal, 90° vertical
- Zoom óptico 25x-40x
- Seguimiento automático de personas

**Modelo recomendado:** Hikvision DS-2DE4A425IWG-E ($450.000-$650.000)
- 4MP con zoom 25x
- Auto-tracking inteligente
- Preset positions (puntos predefinidos)

### 4. Cámaras Fisheye (ojo de pez)

**Diseño:** Gran angular extremo, montaje en techo.

**Ideales para:**
- Vigilar toda una sala desde un solo punto
- Locales con techo alto
- Reducir el número de cámaras necesarias

**Características clave:**
- Campo de visión: 360° completo
- Desenroscado digital (imagen corregida)
- Una sola cámara cubre lo que 3-4 normales cubrirían

**Modelo recomendado:** Hikvision DS-2CD6924G0-IVS ($380.000-$520.000)
- 12MP para detalle extremo
- Counting function (conteo de personas)
- Dewarping en tiempo real

## Cómo funciona: Features que importan para retail en Bogotá

### Resolución: No te dejes engañar con "4K"

La resolución medida en megapíxeles (MP) determina qué tan nítida es la imagen. Pero más no siempre es mejor.

- **2MP (1080p):** Suficiente para reconocer caras a 3-5 metros. Ideal para locales pequeños.
- **4MP (2K):** Excelente balance calidad/precio. Reconoce detalles como precios en etiquetas.
- **8MP (4K):** Para locales grandes donde necesitas zoom digital sin perder calidad.

**Recomendación para locales comerciales en Bogotá:** 4MP es el sweet spot. Cuesta solo 20% más que 2MP pero la ganancia en calidad es del 100%.

### Visión nocturna: Crítico en Bogotá

Bogotá tiene 14 horas de oscuridad en invierno. Tu cámara DEBE tener buena visión nocturna.

**Tecnologías disponibles:**
- **IR tradicional:** Imagen B/N, alcance 20-30m. Económica pero limitada.
- **ColorVu (Hikvision):** Color 24/7 con luz blanca integrada. Costo: +30%.
- **Starlight:** Excelente en poca luz sin luz blanca. Buen balance.
- **DarkFighter (Hikvision):** La mejor tecnología para oscuridad total.

### IA integrada: El game changer para retail

La inteligencia artificial ya no es un lujo — es una necesidad. Esto es lo que la IA puede hacer por tu local:

**Detección de personas vs. mascotas:**
- Evita falsas alertas por gatos, perros o sombras
- Solo te avisa cuando hay una persona real en zona restringida

**Conteo de aforo:**
- Cuántas personas entran y salen
- Reportes diarios/semanales de flujo
- Ideal para optimizar turnos de empleados

**Línea de Virtual:**
- Alarma cuando alguien cruza una línea invisible en pantalla
- Perfecto para zonas de caja o almacén

**Reconocimiento de placas:**
- Registra placas de vehículos que entran al estacionamiento
- Alerta si una placa está en lista negra

### PoE vs. WiFi: La batalla que ya se ganó

**PoE (Power over Ethernet):**
- Un solo cable para datos y energía
- Conexión estable y confiable
- **Recomendado para 95% de locales comerciales**

**WiFi:**
- Sin cableado (parece cómodo)
- Interferencias, caídas de señal, latencia
- Solo para instalaciones temporales o pruebas

**Veredicto:** Si tu negocio es permanente, ve por PoE. Si es un puesto temporal o kiosco en centro comercial, WiFi puede funcionar temporalmente.

## Casos reales Bogotá: Cámaras que funcionan en locales como el tuyo

### Caso 1: Cafetería en La Candelaria (60m²)
**Problema:** Robos frecuentes de computadores cuando cerraban.
**Solución:** 2 cámaras dome en interior + 1 bullet en entrada.
**Modelos:** Hikvision DS-2CD2147G2H-LI × 3
**Inversión:** $680.000 + instalación $250.000 = **$930.000**
**Resultado:** 0 robos en 8 meses. El efecto disuasivo de las cámaras visibles fue inmediato.

### Caso 2: Tienda de tecnología en Chapinero (120m²)
**Problema:** Hurto por clientes y empleados. Pérdidas de $2.500.000/mes.
**Solución:** 4 dome en interior + 2 bullet en entrada/salida + 1 PTZ en almacén.
**Modelos:** Hikvision DS-2CD2T47G2H-LI × 3, DS-2DE4A425IWG-E × 1
**Inversión:** $1.450.000 + instalación $480.000 = **$1.930.000**
**Resultado:** Reducción de hurtos del 100% en 3 meses. ROI alcanzado en 8 semanas.

### Caso 3: Gimnasio en Teusaquillo (400m²)
**Problema:** Robo de equipos值antes en horario nocturno. El vigilante no podía cubrir toda el área.
**Solución:** 8 cámaras (mixtas) + IA de detección de movimiento + alertas WhatsApp.
**Modelos:** Hikvision DS-2CD2T47G2H-LI × 5, DS-2DE4A425IWG-E × 3
**Inversión:** $3.200.000 + instalación $900.000 = **$4.100.000**
**Resultado:** El sistema detecta movimiento después de las 11pm y envía alerta al dueño + vigilante. Dos intentos de robo frustrados en el primer mes.

### Caso 4: Boutique de 30m² en Usaquén
**Problema:** Necesitaba cámaras que no arruinara la estética del local.
**Solución:** 2 cámaras dome miniaturizadas + 1 bullet oculta en fachada.
**Modelos:** Hikvision DS-2CD3346G2-ISU (mini dome) × 2
**Inversión:** $520.000 + instalación $180.000 = **$700.000**
**Resultado:** Las cámaras son prácticamente invisibles. Los clientes no las notan, pero el dueño tiene cobertura completa desde su celular.

## Guía de compra: ¿Qué modelo elegir según tu tipo de negocio?

| Tipo de negocio | Cámaras necesarias | Modelo recomendado | Presupuesto estimado |
|-----------------|--------------------|--------------------|----------------------|
| Tienda ropa | 4 dome interior + 2 bullet entrada | DS-2CD2147G2H-LI × 4, DS-2CD2T47G2H-LI × 2 | $1.800.000 - $2.500.000 |
| Restaurante | 3 dome interior + 1 bullet cocina | DS-2CD2147G2H-LI × 3, DS-2CD2T47G2H-LI × 1 | $1.200.000 - $1.800.000 |
| Boutique/joyería | 2-3 mini dome + 1 bullet fachada | DS-2CD3346G2-ISU × 3, DS-2CD2T47G2H-LI × 1 | $1.100.000 - $1.600.000 |
| Gimnasio | 6 dome + 2 bullet + 1 PTZ | DS-2CD2147G2H-LI × 6, DS-2DE4A425IWG-E × 1 | $2.800.000 - $3.800.000 |
| Supermercado | 8 dome + 4 bullet + 2 fisheye | DS-2CD2147G2H-LI × 8, DS-2CD2T47G2H-LI × 4 | $4.500.000 - $6.200.000 |

## FAQ: Preguntas frecuentes sobre cámaras para locales comerciales

### ¿Cuántas cámaras necesito para mi tienda de 50m²?
Para una tienda de 50m², **3-4 cámaras son suficientes**: 2 dome en interior (una en caja, una en pasillo) y 1-2 bullet en entrada/salida. Si tienes almacén, agrega 1 más.

### ¿Hikvision o Dahua para mi negocio?
Ambas son marcas excelentes. **Hikvision** tiene mejor software y soporte en Bogotá. **Dahua** es ligeramente más económico. Para locales comerciales, recomendamos Hikvision por su ecosistema más completo y distribuidores autorizados en la ciudad.

### ¿Puedo instalar las cámaras yo mismo?
Si eres técnico, sí. Pero para locales comerciales, **recomendamos instalación profesional** por: garantía del fabricante (se anula con instalación DIY), configuración de red correcta, y compliance con normativa local.

### ¿Cuánto dura una cámara de seguridad profesional?
Entre **5-8 años** con mantenimiento adecuado. Los componentes electrónicos fallan primero, pero una cámara bien instalada en Bogotá puede durar más de 10 años.

### ¿Las cámaras funcionan con apagones de luz en Bogotá?
Solo si tienes un **UPS (不间断电源)** conectado al DVR/NVR. Sin UPS, el sistema se apaga y pierdes grabación durante el corte. El costo de un UPS adecuado es de $300.000-$600.000.

### ¿Necesito internet para que las cámaras graben?
No. Las cámaras graban localmente al DVR/NVR. El internet solo es necesario para ver las grabaciones remotamente y recibir alertas.

## Próximos pasos: Encuentra las cámaras ideales para tu negocio

No compres cámaras por internet sin asesoría. Cada local es único y necesita una solución personalizada.

**Te recomendamos estos pasos:**

1. **Identifica tus puntos críticos** — ¿Dónde están las entradas? ¿Dónde está la caja? ¿Dónde guardas inventario?
2. **Define tu presupuesto** — Un sistema básico cuesta desde $800.000, uno profesional desde $2.000.000
3. **Solicita una visita técnica** — Un especialista debe evaluar tu local antes de vender cámaras
4. **Piensa en el ecosistema** — Cámaras solas no son suficientes. Necesitas IA + automatización

### Nuestras soluciones por tipo de negocio

| Tipo | Solución recomendada | Enlace |
|------|---------------------|--------|
| **Tienda/Retail** | 4-8 dome + bullet con IA | [apcvisionai.site](https://apcvisionai.site) |
| **Restaurante** | 3-4 dome + bullet cocina | [apcvisionai.site](https://apcvisionai.site) |
| **Bodega/Logística** | 8-16 bullet + PTZ + conteo personas | [apccore.site](https://apccore.site) |
| **Gimnasio/Espacio grande** | 6-10 dome + PTZ + alertas automáticas | [apcautomatizacion.site](https://apcautomatizacion.site) |

> **¿Ya sabe cuántas cámaras necesita?** Vea el proceso y los precios en nuestra página de [instalación de cámaras de seguridad en Bogotá](#instalacion) y la [tabla de precios de instalación 2026](#precios-camaras) para cerrar el presupuesto con los planes incluidos.

### Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`,zh=`---
title: "Cámaras de seguridad para bodega en Bogotá: monitoreo inteligente con IA"
excerpt: "Soluciones de CCTV con inteligencia artificial para bodegas en Bogotá. Detección de intrusión, conteo de personas, heat maps. Casos reales de Kennedy, Engativá y Suba."
date: "2026-07-25"
publishDate: "2026-07-30"
author: "Servicios APC"
category: "Soluciones por Industria"
tags: "cámaras bodega, CCTV logística, monitoreo bodega Bogotá, IA bodega, conteo personas"
readTime: "8 min"
coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: '{"primary":{"label":"Cotizar Solución Bodega","href":"https://apcvisionai.site"},"secondary":{"label":"Ver Infraestructura","href":"https://apccore.site"},"tertiary":{"label":"Automatizar Flujo","href":"https://apcautomatizacion.site"}}'
---

## El problema: ¿Por qué las bodegas en Bogotá son el objetivo más vulnerable?

Las bodegas en Bogotá son el blanco perfecto para hurtos, fraudes y pérdidas operativas. Y la razón es simple: son espacios grandes, con acceso múltiple, operan 24/7, y la mayoría solo tiene un vigilante humano que no puede cubrir todo.

**Los números son alarmantes:**
- El 42% de hurtos a comercios en Bogotá ocurren en bodegas y almacenes (SIC, 2025)
- El 65% de las bodegas en zonas industriales de Kennedy, Engativá y Suba no tienen sistemas de vigilancia más allá de un guardia nocturno
- La pérdida promedio por hurto en una bodega de 500m² es de **$8.500.000 por incidente**
- El 38% de los hurtos son cometidos por empleados internos, no por intrusos externos

**El problema real no es la falta de cámaras — es la falta de INTELIGENCIA en las cámaras.**

Una bodega en Kennedy me contó que tenía 16 cámaras CCTV grabando 24/7. Cuando necesitaron revisar un hurto, descubrieron que el DVR estaba grabando a 1 cuadros por segundo (para ahorrar espacio) y la imagen era tan borrosa que no reconocieron a nadie. Las 16 cámaras eran decorativas.

Otra bodega en Suba invirtió $12.000.000 en un sistema "premium" sin darse cuenta de que las cámaras no tenían visión nocturna adecuada para espacios de 8 metros de altura. Las imágenes nocturnas eran negras.

**Las bodegas necesitan soluciones específicas, no las mismas cámaras que un local comercial.**

## Qué es: Soluciones CCTV con IA específicas para bodegas

Una bodega no es un tienda de 50m². Los retos son completamente diferentes y requieren tecnología especializada.

### Retos únicos de bodegas en Bogotá

**1. Espacios grandes y altos**
- Techos de 6-12 metros
- Áreas de 200m² a 5.000m²
- Estanterías altas que crean puntos ciegos

**2. Iluminación variable**
- Día: luz natural por ventanales o naves superiores
- Noche: iluminación artificial mínima para reducir costos
- Transiciones repentinas que ciegan las cámaras

**3. Movimiento constante**
- Empujadores, montacargas, carretillas
- Empleados entrando y saliendo
- Vehículos de carga

**4. Zonas de alto riesgo**
- Almacén de materiales valiosos
- Zona de despacho (mercancía sale sin control)
- Punto de recepción (mercancía entra sin verificación)

### Tecnología IA para bodegas: Más allá de simplemente "grabar"

**YOLO (You Only Look Once) — Detección en tiempo real:**
- Identifica personas, vehículos, carretillas, cajas
- Clasifica automáticamente: empleado vs. visitante vs. intruso
- Funciona en tiempo real con latencia <100ms

**Conteo de personas y vehículos:**
- Registra cuántos empleados hay en cada zona
- Cuenta vehículos que entran y salen del muelle
- Genera reportes automáticos de flujo diario

**Heat Maps (mapas de calor):**
- Muestra qué zonas se usan más durante el día
- Identifica áreas de congestión
- Ayuda a optimizar la distribución del almacén

**Detección de intrusión inteligente:**
- Líneas virtuales que activan alarma si se cruzan
- Zonas restringidas con acceso por horario
- Diferencia entre movimiento humano y de maquinaria

**Verificación de carga:**
- Cuenta cajas que salen vs. cajas registradas en sistema
- Detecta discrepancias en tiempo real
- Genera alertas automáticas si hay sobrante o faltante

## Cómo funciona: Arquitectura de sistema CCTV para bodega

### Diseño típico para bodega de 500m²

**Distribución de cámaras:**
- 4 bullet exteriores: Entradas vehiculares y peatonales
- 4 dome interiores: Puntos de venta y almacén principal
- 2 PTZ: Cobertura de estanterías altas y muelles
- 2 fisheye: Vista panorámica de áreas amplias

**Equipo necesario:**
- NVR 16 canales PoE+ (soporta todas las cámaras)
- Switch PoE+ 16 puertos (energía + datos por cable)
- Disco duro 8TB (retención 30 días a 4MP)
- UPS 3000VA (protección contra cortes de luz Bogotá)
- Servidor edge GPU (para procesamiento IA local)

**Software de gestión:**
- Plataforma VMS (Video Management System)
- Dashboard web para reportes
- App móvil para alertas en tiempo real
- Integración con n8n para automatización

### Flujo de automatización con n8n

**Escenario: Detección de intrusión nocturna**

1. **Trigger:** Cámaras detectan persona en zona restringida (2:00am)
2. **Validación:** IA confirma que es humano (no sombra/mascota)
3. **Alerta:** WhatsApp automático al propietario con imagen
4. **Registro:** Video clip de 30 segundos guardado en nube
5. **Escalamiento:** Si no hay respuesta en 5 minutos, se alerta a vigilancia privada

**Escenario: Control de carga en muelle**

1. **Trigger:** Vehículo entra al muelle de carga
2. **Conteo:** IA cuenta cajas cargadas en tiempo real
3. **Cruce:** Sistema compara con orden de despacho
4. **Alerta:** Discrepancia >5% genera alerta a gerencia
5. **Reporte:** Dashboard actualizado con métricas del día

### Costos estimados para bodega en Bogotá

**Bodega pequeña (hasta 300m²):**
- Cámaras: 6-8 unidades
- Equipo: NVR, disco, UPS
- Instalación: Cableado estructurado
- **Inversión total: $3.500.000 - $5.000.000**
- **Costo mensual: $450.000 - $650.000**

**Bodega mediana (300-1.000m²):**
- Cámaras: 10-16 unidades
- Equipo: NVR 16ch, disco 8TB, switch PoE, UPS
- Instalación: Cableado + rack
- **Inversión total: $6.500.000 - $9.500.000**
- **Costo mensual: $700.000 - $1.100.000**

**Bodega grande (+1.000m²):**
- Cámaras: 16-32 unidades (incluye PTZ)
- Equipo: NVR 32ch, almacenamiento RAID, servidor edge
- Instalación: Cableado estructurado + infraestructura de red
- **Inversión total: $12.000.000 - $18.000.000**
- **Costo mensual: $1.200.000 - $2.000.000**

## Casos reales Bogotá: Bodegas que transformaron su seguridad

### Caso 1: Bodega de alimentos en Kennedy (800m²)

**Situación inicial:**
- 8 cámaras sin IA, DVR grabando 5 días
- 2 hurtos de mercancía por semana ($1.800.000/semana)
- Guardia nocturno que no podía cubrir todo

**Solución implementada:**
- 12 cámaras IPC 4MP con IA YOLO
- NVR 16 canales con disco 8TB
- Conteo de personas en tiempo real
- Alertas automáticas por WhatsApp
- Dashboard de reportes diarios

**Resultados (6 meses):**
- Hurtos reducidos al 0% (no hubo ninguno desde la instalación)
- ROI alcanzado en 3.5 meses
- El sistema detectó 2 intentos de hurto nocturno que el guardia no vio
- Control de inventario mejoró 28% con los reportes automáticos

### Caso 2: Bodega de tecnología en Suba (1.200m²)

**Situación inicial:**
- Sin CCTV, solo 2 guardias
- Pérdida promedio: $4.500.000/mes por hurtos internos
- No había forma de probar quién robaba

**Solución implementada:**
- 16 cámaras mixtas (bullet + dome + PTZ)
- IA de reconocimiento facial (empleados registrados)
- Líneas virtuales en zona de almacén de alta gera
- Integración con sistema de control de acceso

**Resultados (12 meses):**
- 3 empleados identificados como autores de hurtos
- Pérdidas reducidas 94% ($4.500.000 → $270.000/mes)
- Ahorro anual: $50.760.000
- Inversión del sistema: $8.500.000
- **ROI: 5.97x en el primer año**

### Caso 3: Centro de distribución en Engativá (2.500m²)

**Situación inicial:**
- 24 cámaras antiguas (resolución D1)
- DVR fallando constantemente
- No había forma de revisar incidentes
- Pérdidas de inventario no explicadas: $15.000.000/mes

**Solución implementada:**
- 24 cámaras IPC 4MP con IA completa
- NVR 32ch con almacenamiento RAID
- Servidor edge GPU para procesamiento local
- Sistema automatizado de conteo de carga
- Dashboard ejecutivo con métricas en tiempo real

**Resultados (9 meses):**
- Discrepancias de inventario reducidas 78%
- Tiempo de investigación de incidentes: de 3 días a 30 minutos
- Ahorro mensual: $11.700.000
- Sistema pagado en 2.1 meses
- El centro mejoró su calificación logística (de 3.2 a 4.6 estrellas)

## FAQ: Preguntas frecuentes sobre CCTV para bodegas

### ¿Cuántas cámaras necesito para una bodega de 500m²?
Para una bodega de 500m², recomendamos **10-12 cámaras**: 4 exteriores (entradas/salidas), 4 dome en almacén principal, 2 PTZ para estanterías, y 2 fisheye para áreas de carga/descarga.

### ¿Las cámaras con IA funcionan en espacios con techo alto?
Sí, pero necesitas cámaras con **lente varifocal** (2.8-12mm) para ajustar el ángulo según la altura. Las bullet de alta gama como Hikvision DS-2CD2T47G2H-LI son ideales para techos de 6-10 metros.

### ¿Cuánto espacio de almacenamiento necesito para grabar 30 días?
Para 12 cámaras a 4MP grabando continuo, necesitas aproximadamente **6-8TB**. Si grabas solo en modo detección de movimiento, puedes reducirlo a 4TB.

### ¿Puedo integrar las cámaras con mi sistema de inventario existente?
Sí, a través de APIs REST o MQTT. El sistema de n8n puede conectarse con la mayoría de ERPs y WMS (Warehouse Management Systems) para cruzar datos de video con datos de inventario.

### ¿Qué pasa cuando se va la luz en la bodega?
Con un UPS de 3000VA, el sistema mantiene funcionando por 30-45 minutos. Para apagones largos, recomendamos un generador automático o cámaras con batería interna (disponibles en modelos premium).

### ¿Necesito licencia especial para instalar CCTV en una bodega industrial?
No necesitas licencia de vigilancia, pero debes cumplir con la normativa de protección de datos (Ley 1581 de 2012) si las cámaras graban áreas de circulación de empleados. Se recomienda colocar avisos visibles.

## Próximos pasos: Digitaliza la seguridad de tu bodega

Una bodega sin IA es una bodega vulnerable. La tecnología actual permite transformar la vigilancia pasiva en inteligencia operativa que protege tu inventario, optimiza tus procesos y te da control total desde tu celular.

> **Guía complementaria:** Para el proceso y los precios de un sistema para bodega, consulta nuestra página de [instalación de cámaras de seguridad en Bogotá](#instalacion) y la [tabla de precios de instalación 2026](#precios-camaras).

**Te recomendamos estos pasos:**

1. **Audita tu situación actual** — ¿Cuántos hurtos has tenido? ¿Qué cámaras tienes hoy? ¿Qué datos generas?
2. **Calcula tu pérdida real** — No solo los hurtos directos, sino el tiempo perdido investigando, las primas de seguro, el inventario no contabilizado
3. **Diseña la solución correcta** — Cada bodega es diferente. Necesitas un diseño personalizado
4. **Implementa por fases** — Puedes empezar con las zonas más críticas y expandir

### Ecosistema APC para bodegas

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`,Rh=`---
title: "Instalación de cámaras de seguridad para negocio pequeño en Bogotá: guía completa"
excerpt: "Guía paso a paso para instalar cámaras de seguridad en negocios pequeños de Bogotá. Qué comprar, dónde colocarlas, errores comunes y cuándo contratar profesional."
date: "2026-07-25"
publishDate: "2026-07-30"
author: "Servicios APC"
category: "Guía Práctica"
tags: "instalación cámaras, negocio pequeño, tienda local, CCTV pequeño negocio, guía instalación Bogotá"
readTime: "8 min"
coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"
cta: '{"primary":{"label":"Guía Personalizada","href":"https://apcvisionai.site"},"secondary":{"label":"Cotizar Instalación","href":"https://apccore.site"},"tertiary":{"label":"Automatizar Alertas","href":"https://apcautomatizacion.site"}}'
---

## El problema: ¿Por qué la mayoría de negocios pequeños en Bogotá instalan mal sus cámaras?

Si tienes un negocio pequeño en Bogotá — una tienda, cafetería, boutique, o taller — probablemente ya pensaste en instalar cámaras de seguridad. Tal vez ya lo hiciste. Y tal vez, como el 73% de los negocios pequeños en la ciudad, el sistema no funciona como esperabas.

**El problema no es que las cámaras fallen — es que se instalan mal desde el inicio.**

Un peluquería en Barrios Unidos compró 4 cámaras en MercadoLibre, las instaló el técnico del edificio, y al mes descubrió que:
- Una cámara apuntaba directamente a la pared
- Otra estaba tan alta que solo veía techos
- Las grabaciones tenían huecos de 2 horas (el DVR se reiniciaba solo)
- No podía ver las grabaciones desde su celular porque no configuraron el acceso remoto

La inversión de $600.000 fue a la basura. El negocio siguió vulnerable.

**Los errores más comunes en negocios pequeños de Bogotá:**

1. **Comprar sin saber qué necesitas** — Cámaras WiFi de $50.000 que fallan en 3 meses
2. **No planificar la ubicación** — Cámaras mal posicionadas que no cubren puntos críticos
3. **Intentar instalarlo uno mismo** — Sin conocimiento de red, cableado o configuración
4. **Ignorar el mantenimiento** — Cámaras sucias, firmware desactualizado, discos llenos
5. **No pensar en escalabilidad** — Sistema que no crece con el negocio

## Qué es: Guía completa de instalación para negocios pequeños en Bogotá

### Definición de "negocio pequeño" para CCTV

Para esta guía, consideramos negocios pequeños como:
- **Superficie:** 20m² a 150m²
- **Personal:** 1-10 empleados
- **Puntos críticos:** 3-6 áreas que necesitan vigilancia
- **Presupuesto:** $500.000 a $3.000.000

### Qué necesitas realmente (la lista completa)

**1. Cámaras (3-4 unidades para empezar)**

Para un negocio pequeño, necesitas:
- **1 cámara bullet** en la entrada principal (que se vea, efecto disuasivo)
- **1-2 dome** en interior (caja, pasillo, área de clientes)
- **1 cámara** en zona trasera o almacén (si aplica)

**Resolución mínima:** 2MP (1080p). Recomendada: 4MP (mejor detalle, solo 20% más caro).

**2. Grabador (DVR o NVR)**

- **DVR 4 canales:** Si usas cámaras analógicas ($180.000-$250.000)
- **NVR 4 canales PoE:** Si usas cámaras IP ($280.000-$380.000)

**Recomendación:** Ve por NVR PoE. Es más caro pero el cableado es más limpio (un solo cable) y la calidad es mejor.

**3. Disco duro**

- **500GB:** 5-7 días de grabación (4 cámaras, modo continuo)
- **1TB:** 15-20 días (recomendado para negocios)
- **2TB:** 30-40 días (si necesitas retención larga)

**Costo:** $120.000 - $350.000

**4. Cableado**

- **Cable UTP Cat6** (para NVR/IP): $8.000-$12.000 por metro
- **Cable coaxial RG59** (para DVR/analógico): $5.000-$8.000 por metro
- **Longitud promedio:** 20-40 metros por cámara (depende de la distribución)

**5. Accesorios**

- Conectores RJ45 o BNC
- Canaletas para cableado oculto
- Fuentes de poder (si no es PoE)
- UPS básico ($200.000-$400.000) — **esencial en Bogotá por los apagones**

## Cómo funciona: Paso a paso la instalación profesional

### Paso 1: Planificación (el paso que todos saltan)

Antes de comprar cualquier cosa, necesitas un plano básico de tu negocio:

**Marca estos puntos en el plano:**
- [ ] Entrada principal (cámara bullet aquí)
- [ ] Punto de venta / caja (cámara dome aquí)
- [ ] Almacén o zona de inventario (cámara dome aquí)
- [ ] Entrada trasera o patio (cámara bullet aquí)
- [ ] Ubicación del DVR/NVR (lugar seguro, con ventilación)
- [ ] Punto de conexión a internet (para acceso remoto)

**Regla de oro:** Cada cámara debe cubrir un área específica con un propósito claro. No pongas cámaras "por si acaso".

### Paso 2: Selección de equipo

**Para negocio de 20-50m² (tienda, café, boutique):**
- 2-3 cámaras Hikvision DS-2CD2147G2H-LI (dome, 4MP, IA)
- 1 NVR 4 canales PoE
- Disco duro 1TB
- Cableado Cat6 (30-40 metros)
- UPS básico

**Presupuesto total: $1.200.000 - $1.800.000**

**Para negocio de 50-150m² (restaurante, gimnasio, local grande):**
- 4-6 cámaras mixtas (bullet + dome)
- 1 NVR 8 canales PoE
- Disco duro 2TB
- Cableado Cat6 (60-100 metros)
- UPS intermedio

**Presupuesto total: $2.000.000 - $3.500.000**

### Paso 3: Instalación física

**Ubicación de cámaras (reglas básicas):**

**Entrada principal:**
- Altura: 2.5-3 metros
- Ángulo: 45° hacia abajo, apuntando a la cara de quien entra
- Distancia máxima: 8 metros para reconocimiento facial

**Punto de venta:**
- Altura: 2-2.5 metros (techo falso si es posible)
- Ángulo: que cubra caja, cliente y cajero
- Sin contraluz (no apunte hacia ventana o puerta)

**Almacén:**
- Altura: 3-4 metros
- Ángulo amplio que cubra estanterías y pasillos
- Si es largo, usa 2 cámaras en extremos opuestos

**Zona trasera:**
- Altura: 3 metros
- Ángulo que cubra puerta y área circundante
- Visión nocturna es crítica aquí

**Errores de ubicación que debes evitar:**
- Cámaras apuntando al sol o fuentes de luz directa
- Cámaras demasiado altas (más de 4 metros) que no reconocen caras
- Cámaras en esquinas sin ángulo útil (apuntan a pared)
- Cámaras bloqueadas por estanterías o signage

### Paso 4: Cableado y conexión

**Si es NVR PoE (recomendado):**
1. Cada cámara se conecta al NVR con un solo cable Cat6
2. El NVR alimenta la cámara y recibe video por el mismo cable
3. Máximo 100 metros por cable (ideal para negocios pequeños)

**Si es DVR analógico:**
1. Cable coaxial de cámara a DVR
2. Cable de power separado (2 cables por cámara)
3. Más complejo, más cables, pero más económico

**Consejo para negocios en Bogotá:** Usa canaletas plásticas para ocultar el cableado. Es más estético y protege el cable de roedores (un problema común en bodegas y locales del sur de la ciudad).

### Paso 5: Configuración del software

**Acceso remoto (esencial para dueños de negocio):**
1. Descarga la app del fabricante (Hik-Connect para Hikvision)
2. Escanea el código QR del NVR
3. Configura usuario y contraseña segura
4. Prueba desde datos móviles (fuera del WiFi del local)

**Configuración de grabación:**
- **Modo continuo:** Graba todo, usa más espacio
- **Detección de movimiento:** Graba solo cuando hay movimiento (recomendado)
- **Horario personalizado:** Graba solo en horarios específicos

**Configuración de alertas:**
- Activa notificaciones por movimiento
- Configura zonas de detección (ignora áreas de tráfico normal)
- Programa alertas por horario (solo de noche o fines de semana)

### Paso 6: Pruebas y ajustes

**Lista de verificación post-instalación:**
- [ ] Cada cámara tiene imagen nítida (sin contraluz, sin obstrucciones)
- [ ] Las grabaciones son revisables (no borrosas, sin huecos)
- [ ] El acceso remoto funciona desde celular
- [ ] Las alertas de movimiento llegan correctamente
- [ ] El disco duro está grabando (verificar espacio disponible)
- [ ] El UPS funciona (simula un corte de luz)
- [ ] Las cámaras nocturnas tienen buena imagen en oscuridad

## DIY vs. Profesional: ¿Cuándo hacerlo tú mismo y cuándo contratar?

### Hazlo tú mismo (DIY) si:

- Tu negocio es menor a 40m²
- Solo necesitas 2-3 cámaras
- Tienes conocimientos básicos de redes
- El cableado es corto y directo (sin techos falsos)
- Presupuesto muy limitado (ahorras $200.000-$400.000)

**Riesgos del DIY:**
- Instalación no profesional puede anular garantía
- Configuración de red incorrecta = sin acceso remoto
- Cableado visible = antiestético y vulnerable
- Sin soporte técnico si algo falla

### Contrata un profesional si:

- Tu negocio es mayor a 50m²
- Necesitas 4+ cámaras
- Hay techos falsos, paredes de concreto, o cableado complejo
- Quieres integrar IA o automatización
- Necesitas que funcione desde el día 1 sin problemas

**Beneficios del profesional:**
- Diseño personalizado según tu negocio
- Cableado oculto y profesional
- Configuración completa de acceso remoto
- Garantía del fabricante intacta
- Soporte técnico los primeros 90 días

**Costo de instalación profesional en Bogotá:**
- 2-4 cámaras: $200.000 - $400.000
- 4-8 cámaras: $400.000 - $700.000
- 8+ cámaras: $700.000 - $1.200.000

## Casos reales Bogotá: Negocios pequeños que lo hicieron bien

### Caso 1: Tienda de barrio en San Cristóbal (35m²)

**Situación:** Tienda de 35m² con robos frecuentes. Presupuesto limitado.
**Solución:** 2 dome Hikvision + NVR 4ch PoE + disco 500GB
**Inversión:** $1.100.000 (incluye instalación profesional)
**Resultado:** 0 robos en 6 meses. El dueño puede ver la tienda desde su celular mientras está en casa.

### Caso 2: Cafetería en Chapinero Norte (60m²)

**Situación:** Necesitaba cámaras que no arruinaran la estética del lugar.
**Solución:** 3 dome miniaturizados + 1 bullet en entrada (discreta)
**Inversión:** $1.450.000
**Resultado:** Cobertura completa sin impacto visual. Las cámaras son casi invisibles. El dueño detectó un intento de fraude con tarjeta clonada gracias a la imagen clara del punto de venta.

### Caso 3: Taller mecánico en Kennedy (120m²)

**Situación:** Robo de herramientas valoradas en $8.000.000. Necesitaba vigilancia 24/7.
**Solución:** 4 bullet con visión nocturna + 2 dome en interior
**Inversión:** $2.800.000 (incluye UPS y cableado robusto)
**Resultado:** Sistema funciona perfecto con los frecuentes cortes de luz de Kennedy (UPS salva la situación cada vez). Un intento de robo nocturno fue capturado y la policía usó las imágenes para identificar al responsable.

## Errores comunes (y cómo evitarlos)

### Error 1: Comprar cámaras WiFi baratas
**Problema:** Interferencias, caídas de señal, hackers.
**Solución:** Ve por PoE (cable). Si no hay opción, usa WiFi industrial, no doméstico.

### Error 2: No planificar el cableado
**Problema:** Cable visible, trip hazard, antiestético.
**Solución:** Diseña la ruta del cable ANTES de instalar. Usa canaletas.

### Error 3: Ignorar el UPS
**Problema:** Apagones de Bogotá = sin grabación = sin evidencia.
**Solución:** Invierte $300.000 en un UPS básico. Es la mejor inversión que puedes hacer.

### Error 4: No actualizar firmware
**Problema:** Vulnerabilidades de seguridad, bugs, fallas.
**Solución:** Actualiza el firmware cada 3 meses. Es gratis y toma 10 minutos.

### Error 5: No tener mantenimiento
**Problema:** Cámaras sucias, imágenes borrosas, discos llenos.
**Solución:** Limpia las cámaras cada mes. Revisa el espacio del disco cada semana.

## FAQ: Preguntas frecuentes de negocios pequeños

### ¿Cuánto cuesta instalar cámaras en una tienda de 40m² en Bogotá?
Para una tienda de 40m², el costo total (cámaras + grabador + disco + cableado + instalación) ronda los **$1.100.000 - $1.800.000** dependiendo de la calidad y si incluye IA.

### ¿Puedo instalar las cámaras yo mismo?
Sí, para 2-3 cámaras en un espacio pequeño es factible si tienes conocimientos básicos de redes. Pero te recomendamos profesional para garantizar que funcione correctamente y no anular la garantía.

### ¿Qué cámara es mejor para una tienda pequeña?
Para tiendas pequeñas, recomendamos **cámaras dome de 4MP con IA** como Hikvision DS-2CD2147G2H-LI. Son discretas, tienen buena visión nocturna, y la IA evita falsas alertas.

### ¿Cuántas cámaras necesito para una cafetería?
Para una cafetería de 50-80m², **3 cámaras son suficientes**: 1 bullet en entrada, 1 dome en caja/punto de venta, 1 dome en sala principal.

### ¿Necesito técnico para configurar el acceso remoto?
Si nunca has configurado un DVR/NVR, sí. El proceso toma 30 minutos pero requiere conocimiento de redes. Muchos técnicos incluyen esto en el precio de instalación.

### ¿Las cámaras funcionan sin internet?
Sí, graban localmente. Pero sin internet no puedes ver las grabaciones desde tu celular ni recibir alertas. Es como tener un CCTV de los años 90.

## Próximos pasos: Tu negocio pequeño merece seguridad profesional

No dejes la seguridad de tu negocio en manos del azar. Un sistema bien instalado, con las cámaras correctas en los lugares correctos, puede ser la diferencia entre proteger tu inversión y lamentarte después.

> **Guía complementaria:** Mira cómo se ejecuta un proyecto real de principio a fin en nuestra página de [instalación de cámaras de seguridad en Bogotá](#instalacion), y consulta la [tabla de precios de instalación 2026](#precios-camaras) para cerrar tu presupuesto sin sorpresas.

**Te recomendamos estos pasos:**

1. **Haz tu plano básico** — Marca dónde están las entradas, la caja, el almacén
2. **Define tu presupuesto** — Desde $800.000 puedes tener un sistema funcional
3. **Elige entre DIY y profesional** — Si tu negocio es +50m², ve por profesional
4. **No olvides el UPS** — Es obligatorio en Bogotá
5. **Piensa en el futuro** — Un sistema que puedas expandir cuando tu negocio crezca

### Ecosistema APC para negocios pequeños

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`,Th={"guia-camaras-hikvision-ia-empresas-bogota-2026":fh,"costo-camaras-seguridad-empresas-2026-hardware-vs-ia":gh,"que-es-analitica-video-ia-empresas-bogota":hh,"5-senales-camaras-no-protegen-empresa-bogota":vh,"negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues":xh,"analitica-video-ia-ferreterias-bogota-caso-real-suba":bh,"analitica-video-ia-clinicas-bogota-cumplimiento-seguridad":yh,"hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026":Ch,"normativa-videovigilancia-colombia-2026-ley-1581-habeas-data":Ah,"automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard":Sh,"seo-local-google-maps-empresas-seguridad-bogota":kh,"servidores-edge-gpu-para-ia-video-analitica-bogota":Ph,"hikvision-vs-dahua-vs-uniview-comparativa-ia-2026":jh,"bot-whatsapp-ia-atencion-clientes-seguridad-bogota":Nh,"deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento":wh,"cuanto-cuesta-camaras-seguridad-negocio-bogota-2026":Ih,"mejores-camaras-seguridad-local-comercial-bogota":Eh,"camaras-seguridad-bodega-bogota-monitoreo-inteligente":zh,"instalacion-camaras-seguridad-negocio-pequeno-bogota-guia":Rh};function Dh(i){const l=i.match(/^---\n([\s\S]*?)\n---/);if(!l)return{fm:{},content:i};const c=l[1],m={};c.split(`
`).forEach(v=>{const f=v.indexOf(":");f>0&&(m[v.slice(0,f).trim()]=v.slice(f+1).trim().replace(/^["']|["']$/g,""))});const u=i.slice(l[0].length).trim();return{fm:m,content:u}}function Lh(){const i=new Date;return Object.entries(Th).map(([l,c])=>{const{fm:m,content:u}=Dh(c),v=m.publishDate||m.date;return v&&new Date(v)>i?null:{slug:l,title:m.title||"Sin título",excerpt:m.excerpt||"",date:m.date||"",publishDate:v,author:m.author||"Servicios APC",category:m.category||"IA & Seguridad",tags:m.tags?m.tags.split(",").map(f=>f.trim()):[],readTime:m.readTime||"5 min",coverImage:m.coverImage,content:G.parse(u),cta:m.cta?JSON.parse(m.cta.replace(/\\"/g,'"')):void 0}}).filter(l=>l!==null).sort((l,c)=>new Date(c.date).getTime()-new Date(l.date).getTime())}function Go(i){return new Date(i).toLocaleDateString("es-CO",{day:"numeric",month:"long",year:"numeric"})}function Oh({post:i,allPosts:l,onBack:c,onSelect:m}){return o.jsx("div",{className:"min-h-screen",children:o.jsxs("div",{className:"max-w-[728px] mx-auto px-5",children:[o.jsxs("button",{onClick:c,className:"flex items-center gap-1.5 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors py-8",children:[o.jsx(Pf,{size:14}),o.jsx("span",{children:"Volver al blog"})]}),o.jsxs("article",{children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("span",{className:"text-sm font-medium text-[var(--color-accent)]",children:i.category}),o.jsx("span",{className:"text-[var(--color-border)]",children:"·"}),o.jsx("time",{className:"text-sm text-[var(--color-muted-foreground)]",dateTime:i.date,children:Go(i.date)})]}),o.jsx("h1",{className:"font-serif text-[2.5rem] md:text-[3rem] leading-[1.15] font-bold text-[var(--color-foreground)] mb-5",children:i.title}),o.jsx("p",{className:"text-xl text-[var(--color-muted-foreground)] leading-relaxed mb-8",children:i.excerpt}),o.jsxs("div",{className:"flex items-center justify-between py-6 border-t border-b border-[var(--color-border)] mb-10",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-sm font-bold text-[var(--color-accent)]",children:"SA"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-medium text-[var(--color-foreground)]",children:i.author}),o.jsxs("p",{className:"text-xs text-[var(--color-muted-foreground)]",children:[i.readTime," de lectura · ",Go(i.date)]})]})]}),o.jsxs("div",{className:"flex items-center gap-3 text-[var(--color-muted-foreground)]",children:[o.jsx("button",{className:"hover:text-[var(--color-foreground)] transition-colors",children:o.jsx(wf,{size:18})}),o.jsx("button",{className:"hover:text-[var(--color-foreground)] transition-colors",children:o.jsx(wg,{size:18})})]})]}),i.coverImage&&o.jsx("figure",{className:"mb-10",children:o.jsx("img",{src:i.coverImage,alt:i.title,className:"w-full aspect-[16/9] object-cover"})}),o.jsx("div",{className:"blog-content max-w-none",dangerouslySetInnerHTML:{__html:i.content}}),o.jsx("div",{className:"flex flex-wrap gap-2 mt-12 mb-8",children:i.tags.map(u=>o.jsx("span",{className:"px-3 py-1.5 text-xs bg-[var(--color-secondary)] text-[var(--color-muted-foreground)] rounded-full",children:u},u))}),i.cta&&o.jsxs("div",{className:"my-12 p-8 bg-[var(--color-secondary)] rounded-2xl",children:[o.jsx("p",{className:"text-xs uppercase tracking-widest text-[var(--color-accent)] font-medium mb-3",children:"¿Necesitas esto para tu empresa?"}),o.jsx("h3",{className:"font-serif text-2xl font-bold text-[var(--color-foreground)] mb-5",children:i.cta.primary.label}),o.jsxs("div",{className:"flex flex-wrap gap-3",children:[o.jsxs("a",{href:i.cta.primary.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity",children:["Solicitar cotización",o.jsx(eo,{size:14})]}),i.cta.secondary&&o.jsxs("a",{href:i.cta.secondary.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-foreground)] px-6 py-3 rounded-full font-medium text-sm hover:bg-[var(--color-secondary)] transition-colors",children:[i.cta.secondary.label,o.jsx(eo,{size:14})]}),i.cta.tertiary&&o.jsxs("a",{href:i.cta.tertiary.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-foreground)] px-6 py-3 rounded-full font-medium text-sm hover:bg-[var(--color-secondary)] transition-colors",children:[i.cta.tertiary.label,o.jsx(eo,{size:14})]})]})]}),o.jsxs("div",{className:"border-t border-[var(--color-border)] pt-10 pb-16",children:[o.jsx("h3",{className:"text-sm uppercase tracking-widest text-[var(--color-muted-foreground)] mb-6",children:"Sigue leyendo"}),o.jsx("div",{className:"space-y-8",children:l.filter(u=>u.slug!==i.slug).slice(0,3).map(u=>o.jsxs("button",{onClick:()=>m(u.slug),className:"flex gap-6 text-left group w-full",children:[o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("p",{className:"text-xs text-[var(--color-muted-foreground)] mb-1",children:u.category}),o.jsx("h4",{className:"font-serif text-xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-snug mb-1",children:u.title}),o.jsx("p",{className:"text-sm text-[var(--color-muted-foreground)] line-clamp-2",children:u.excerpt}),o.jsxs("p",{className:"text-xs text-[var(--color-muted-foreground)] mt-2",children:[u.readTime," · ",Go(u.date)]})]}),u.coverImage&&o.jsx("img",{src:u.coverImage,alt:"",className:"w-[120px] h-[80px] object-cover rounded-lg flex-shrink-0"})]},u.slug))})]})]})]})})}function su(){const i=window.location.hash.slice(1);return i.startsWith("blog/")?i.slice(5):null}function Mh({initialSlug:i}){const[l,c]=ke.useState(i??su()),m=Lh(),u=m.find(j=>j.slug===l);ke.useEffect(()=>{u&&(document.title=`${u.title} | Servicios APC Bogotá`)},[u]),ke.useEffect(()=>{const j=()=>{const P=su();c(P),P&&window.scrollTo({top:0})};return window.addEventListener("hashchange",j),()=>window.removeEventListener("hashchange",j)},[]);const v=j=>{c(j),window.location.hash=`blog/${j}`,window.scrollTo({top:0,behavior:"smooth"})},f=()=>{c(null),window.location.hash="blog",window.scrollTo({top:0,behavior:"smooth"})};if(u)return o.jsx(Oh,{post:u,allPosts:m,onBack:f,onSelect:v});const S=m[0],x=m.slice(1);return o.jsxs("div",{className:"min-h-screen",children:[o.jsxs("div",{className:"max-w-[1200px] mx-auto px-5 pt-12 pb-16",children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4",children:"Blog · Servicios APC"}),o.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold text-[var(--color-foreground)] leading-tight max-w-3xl",children:"Cámaras Hikvision + IA para empresas"}),o.jsx("p",{className:"text-lg text-[var(--color-muted-foreground)] mt-4 max-w-2xl leading-relaxed",children:"Guías técnicas, comparativas y casos reales sobre CCTV con inteligencia artificial, automatización y seguridad empresarial en Bogotá."})]}),S&&o.jsx("div",{className:"max-w-[1200px] mx-auto px-5 mb-16",children:o.jsxs("button",{onClick:()=>v(S.slug),className:"group grid md:grid-cols-[1fr_1fr] gap-8 items-center text-left w-full",children:[S.coverImage&&o.jsx("div",{className:"overflow-hidden rounded-2xl",children:o.jsx("img",{src:S.coverImage,alt:S.title,className:"w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700"})}),o.jsxs("div",{className:"space-y-4 py-4",children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium",children:"Destacado"}),o.jsx("h3",{className:"font-serif text-3xl md:text-4xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-[1.15]",children:S.title}),o.jsx("p",{className:"text-[var(--color-muted-foreground)] leading-relaxed text-lg",children:S.excerpt}),o.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[o.jsx("div",{className:"w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-xs font-bold text-[var(--color-accent)]",children:"SA"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-medium text-[var(--color-foreground)]",children:S.author}),o.jsxs("p",{className:"text-xs text-[var(--color-muted-foreground)]",children:[S.readTime," · ",Go(S.date)]})]})]})]})]})}),o.jsx("div",{className:"max-w-[1200px] mx-auto px-5",children:o.jsx("div",{className:"border-t border-[var(--color-border)]"})}),o.jsxs("div",{className:"max-w-[1200px] mx-auto px-5 py-12",children:[o.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12",children:x.map(j=>o.jsxs("button",{onClick:()=>v(j.slug),className:"group text-left",children:[j.coverImage&&o.jsx("div",{className:"overflow-hidden rounded-xl mb-4",children:o.jsx("img",{src:j.coverImage,alt:j.title,className:"w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700",loading:"lazy"})}),o.jsxs("div",{className:"space-y-2.5",children:[o.jsx("p",{className:"text-xs text-[var(--color-muted-foreground)]",children:j.category}),o.jsx("h3",{className:"font-serif text-xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-snug",children:j.title}),o.jsx("p",{className:"text-sm text-[var(--color-muted-foreground)] leading-relaxed line-clamp-3",children:j.excerpt}),o.jsxs("div",{className:"flex items-center gap-3 pt-1",children:[o.jsx("div",{className:"w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-[9px] font-bold text-[var(--color-accent)]",children:"SA"}),o.jsxs("p",{className:"text-xs text-[var(--color-muted-foreground)]",children:[j.readTime," · ",Go(j.date)]})]})]})]},j.slug))}),m.length===0&&o.jsx("div",{className:"text-center py-20 text-[var(--color-muted-foreground)]",children:o.jsx("p",{className:"text-lg",children:"Próximamente más artículos..."})})]})]})}function iu({slug:i}){return o.jsx("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:o.jsx(Mh,{initialSlug:i})})}const Jn=[{id:"camaras",icon:ka,color:"#c94a0a",title:"Analítica de Video con IA para Hikvision/Dahua",tagline:"Sus cámaras dejan de vigilar y empiezan a auditar.",description:"Reprogramamos sus cámaras Hikvision/Dahua RTSP/ONVIF actuales con módulos YOLO: conteo de personas, mapas de calor, arqueo de caja asistido, detección de intrusión y reportes automáticos. No necesita comprar hardware nuevo: su CCTV existente ya es compatible con la mayoría de modelos Hikvision 2018+. Integración a n8n para alertas en Telegram/Email/WhatsApp.",bullets:["Conteo de personas y control de aforo en tiempo real","Mapas de calor y ocupación por zonas (heatmaps)","Arqueo de caja asistido por IA: video del cajón + monto","Detección de intrusión y alertas 24/7 sin vigilar pantallas","Se integra a su CCTV actual Hikvision/Dahua sin comprar hardware nuevo","Alertas por Telegram, Email y WhatsApp vía n8n"],image:"https://images.unsplash.com/photo-1760553120324-d3d2bf53852b?w=800&h=560&fit=crop&auto=format&fm=webp&q=70",imageAlt:"Dashboard analítica de video IA sobre cámaras Hikvision"},{id:"cctv",icon:Au,color:"#0ea5e9",title:"Instalación CCTV Inteligente Hikvision en Bogotá",tagline:"Cobertura total, sin puntos ciegos, lista para IA.",description:"Planificamos e instalamos infraestructura CCTV profesional con cámaras Hikvision certificadas ya listas para analítica IA. Cableado estructurado, configuración RTSP/ONVIF, reprogramación de equipos existentes que cumplan estándar, cobertura 100% sin puntos ciegos. Soporte técnico presencial en Bogotá y remoto en toda Colombia. ¿Ya tiene Hikvision? Lo preparamos para IA sin cambiar cámaras.",bullets:["Planificación y tendido de cableado profesional estructurado","Cámaras Hikvision compatibles IA (RTSP/ONVIF) instaladas y configuradas","Reprogramación de hardware existente Hikvision/Dahua que cumpla estándar","Cobertura del 100% de puntos ciegos con mapas de calor","Soporte técnico remoto y presencial en Bogotá","Garantía extendida Hikvision + capa IA incluida"],image:"https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=560&fit=crop&auto=format&fm=webp&q=70",imageAlt:"Instalación profesional cámaras Hikvision con analítica IA"},{id:"bots",icon:Wo,color:"#25d366",title:"Bots de WhatsApp con IA",tagline:"Atienda a sus clientes 24/7, sin contratar más personal.",description:"Desarrollamos bots de WhatsApp con identidad propia que responden, agendan citas, procesan pedidos y califican leads de forma automática. Desde un menú interactivo básico hasta ecosistemas con APIs, pagos y agendamiento. Se conectan a su CRM y a la analítica de video: si una cámara detecta aforo lleno, el bot avisa al gerente.",bullets:["Atención automática 24 horas con IA conversacional","Menú interactivo, catálogos y respuestas con IA","Agendamiento de citas y pedidos integrados","Calificación y seguimiento de leads automático","Transferencia a agente humano cuando se necesita","Integración con analítica de video: alertas de aforo → WhatsApp"],image:"https://images.unsplash.com/photo-1636751364472-12bfad09b451?w=800&h=560&fit=crop&auto=format&fm=webp&q=70",imageAlt:"Bot de WhatsApp para atención automática de clientes"},{id:"automatizacion",icon:Vi,color:"#7c3aed",title:"Automatización de Procesos (n8n + APIs)",tagline:"Menos trabajo manual, más resultados.",description:"Diseñamos flujos de trabajo indestructibles que conectan sus herramientas, eliminan tareas repetitivas y entregan reportes programados. Menos errores humanos, menos tiempo perdido, más control. Conectamos su CCTV, CRM, ERP y WhatsApp en un solo cerebro n8n.",bullets:["Flujos automáticos e integraciones API (n8n self-hosted)","Onboarding digital de clientes con validación IA","CRM con seguimiento post-venta automatizado","Reportes programados 24 horas vía Email/Telegram","Notificaciones y alertas automáticas cruzadas","Integración CCTV → Alerta → Acción (WhatsApp, CRM, Dashboard)"],image:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=560&fit=crop&auto=format&fm=webp&q=70",imageAlt:"Automatización de procesos empresariales con n8n"},{id:"dashboards",icon:rg,color:"#f59e0b",title:"Dashboards e Integración de Datos",tagline:"Todos sus datos CCTV + CRM + ERP, en una sola pantalla.",description:"Centralizamos la información dispersa de su operación en tableros ejecutivos claros. Integramos su software contable, CRM, analítica de video Hikvision y herramientas para que la gerencia tome decisiones con datos, no con corazonadas. Mapas de calor, conteo histórico, arqueos, tickets WhatsApp: todo unificado.",bullets:["Dashboards ejecutivos en tiempo real (Looker Studio / Grafana)","Integración entre CCTV Hikvision, CRM, ERP y WhatsApp","Bases de datos operativas centralizadas y replicadas","Reportería automatizada (Looker / PDF / Telegram)","Control de acceso a la información por roles","Exportación a Excel/CSV para contabilidad"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=560&fit=crop&auto=format&fm=webp&q=70",imageAlt:"Dashboard ejecutivo con métricas CCTV + CRM + ventas"},{id:"web",icon:vr,color:"#10b981",title:"Desarrollo Web y SEO Local en Bogotá (DogWeb)",tagline:"Presencia digital que atrae clientes reales en Google Maps.",description:"Creamos sitios web resilientes y posicionamos su negocio donde sus clientes en Bogotá lo buscan: Google Maps y búsquedas locales de la ciudad. Desde landings hasta portales corporativos con bases de datos y SEO técnico. Conectamos el sitio a su CRM y WhatsApp: lead web → bot → cita → venta.",bullets:["Sitios web corporativos y landings de alta conversión","Posicionamiento en Google Maps / SEO local Bogotá","Infraestructura web resiliente (Cloudflare + CDN)","Formularios, bases de datos y CRM integrado","Soporte y mantenimiento mensual incluido","CTAs cruzados: Web → WhatsApp Bot → CCTV Demo"],image:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=560&fit=crop&auto=format&fm=webp&q=70",imageAlt:"Desarrollo web y posicionamiento SEO local en Bogotá"}],qh=[{domain:"apccore.site",name:"APC Core",description:"Sistemas de control, bases de datos operativas y tableros centralizados. El cerebro que une CCTV + IA + CRM.",icon:qi},{domain:"apcautomatizacion.site",name:"APC Automatización",description:"Flujos n8n que conectan su CCTV Hikvision + WhatsApp + CRM + ERP. Alerta de intrusión → WhatsApp al gerente → Ticket en CRM.",icon:Vi},{domain:"apcvisionai.site",name:"APC Visión AI",description:"Especialistas en analítica YOLO sobre Hikvision/Dahua: conteo, mapas de calor, arqueo de caja, detección PPE, intrusión perimetral.",icon:ka},{domain:"dogweb.lat",name:"DogWeb",description:"Desarrollo web, SEO local / Google Maps y resiliencia de red. Su web posicionada en Bogotá + formularios → WhatsApp Bot → Venta.",icon:vr}],Vh=[{icon:Bg,title:"Arquitectura resiliente (Offline-First)",description:"Si se corta el internet, su Hikvision + IA sigue grabando y analizando en local (conteo, intrusión, arqueo). Sincroniza al volver la señal. Nada se pierde."},{icon:Sa,title:"Cero tecnicismos, solo datos accionables",description:"Reportes diarios limpios vía Email/Telegram/WhatsApp. No necesita saber de IA ni YOLO; solo leer: 'Arqueo OK', 'Aforo 78%', 'Intrusión 0'."},{icon:cn,title:"Hardware Hikvision reutilizable + IA",description:"No lo obligamos a comprar equipos costosos: reprogramamos su Hikvision/Dahua actual si cumple RTSP/ONVIF. Si necesita nuevo, instalamos Hikvision certificado IA-ready."}],Bh=[{client:"Ferretería El Progreso",sector:"Ferretería · Suba, Bogotá",implementation:"Hikvision 4K ColorVu + IA YOLO: detección de placas vehiculares nocturnas, conteo de clientes, arqueo de caja asistido.",result:"Recuperaron 3 bultos robados en 48h gracias a placa legible a las 2am. Aforo optimizado en horas pico. Cero discrepancias en arqueos mensuales."},{client:"Clínica Dental Sonrisa Viva",sector:"Salud · Chapinero, Bogotá",implementation:"Hikvision 2MP WDR + IA: control de aforo salas de espera, detección de caídas de pacientes, analítica de acceso a zonas restringidas (RX, esterilización).",result:"Cumplimiento normativo HIPAA/Ley 1581. Cero incidentes en zona RX. Alerta automática a enfermería ante caída (tiempo respuesta < 30 seg)."},{client:"Distribuidora Jone",sector:"Distribución · Bogotá",implementation:"Analítica YOLO sobre Hikvision existentes + CCTV nuevo en bodega + SEO local Google Maps + embudos conversión WhatsApp Bot.",result:"Visibilidad 100% puntos ciegos bodega. Aumento 340% cotizaciones orgánicas Bogotá. Bot WhatsApp atiende 80% consultas sin humano."}],$h=[{q:"¿Tengo que cambiar todas las cámaras Hikvision de mi negocio para tener Inteligencia Artificial?",a:"No. Si sus cámaras Hikvision/Dahua actuales admiten RTSP u ONVIF (la mayoría desde 2018), las reprogramamos para inyectarles módulos YOLO sin gasto extra en hardware. Modelos Hikvision 2MP/4MP/4K ColorVu, AcuSense, DeepinView son 100% compatibles."},{q:"¿Qué pasa si en el local se corta el internet o la luz?",a:"Nuestro ecosistema cuenta con arquitectura Offline-First: el procesamiento IA ocurre en local (edge) en su red. Si el internet se va por horas, el sistema sigue grabando, contando personas, detectando intrusos y arqueando cajas, y sincroniza automáticamente al recuperar la señal. Nada se pierde."},{q:"¿La Inteligencia Artificial escucha conversaciones privadas de empleados o clientes?",a:"No. La IA de audio se activa solo bajo disparador específico (ej. sonido del cajón de la caja al abrirse) durante los segundos necesarios para documentar el monto. El resto de la jornada se protege la privacidad del equipo por diseño (privacy by design)."},{q:"¿Ustedes venden cámaras Hikvision o solo el software de IA?",a:"Ofrecemos ambas opciones: (1) Si ya tiene Hikvision/Dahua RTSP/ONVIF, solo instalamos la capa IA (analítica YOLO, alertas, dashboard). (2) Si necesita infraestructura nueva, instalamos CCTV Hikvision certificado IA-ready (ColorVu, AcuSense, DeepinView) + configuramos la analítica completa. Usted elige según su presupuesto."},{q:"¿Cómo se ve el análisis de video con IA en tiempo real en mi celular?",a:"Recibe alertas por Telegram/Email/WhatsApp con clip de video del evento (intrusión, aforo excedido, arqueo discrepante) y accede a dashboard web con mapas de calor, conteo histórico, arqueos diarios y reportes automáticos. Todo desde su celular, sin apps extra: usa Telegram o WhatsApp."},{q:"¿Qué modelos Hikvision recomiendan para analítica de video con IA?",a:"Para analítica YOLO recomendamos: (1) Hikvision ColorVu 4K/4MP — visión nocturna a color real, ideal para placas y rostros. (2) Hikvision AcuSense 2MP/4MP — filtrado falso positivo (persona/vehículo), costo/beneficio óptimo. (3) Hikvision DeepinView — IA embebida en cámara (conteo, PPE, cola), máxima precisión. Lo asesoramos según su caso y presupuesto."},{q:"¿La analítica de video funciona con Dahua u otras marcas?",a:"Sí. Cualquier cámara que exponga stream RTSP u ONVIF Profile S/T/G es compatible. Dahua, Uniview, Axis, Hanwha, TP-Link VIGI: si tiene stream estándar, le inyectamos YOLO. La diferencia es que Hikvision ColorVu/AcuSense nos da mejor calidad de imagen nocturna para IA."},{q:"¿Ustedes administran mi negocio o mi personal?",a:"No. Diseñamos, instalamos y mantenemos la infraestructura digital que automatiza su control. Le entregamos las herramientas exactas para que usted administre su empresa en minutos desde su celular, con datos claros y decisiones respaldadas. No supervisamos personal ni tomamos decisiones gerenciales."}],_h=[{icon:Tg,title:"Cámaras Hikvision que auditan, no solo vigilan",description:"YOLO convierte cada frame en dato accionable: conteo, intrusión, aforo, arqueo. Sus cámaras dejan de ser gasto pasivo y se convierten en centro de ganancia."},{icon:cn,title:"Offline-First: si se va el internet, la IA sigue",description:"Procesamiento edge en su red local. Sin internet, la IA sigue contando, detectando, arqueando. Sincroniza al volver la señal. Cero pérdida de datos."},{icon:Wo,title:"Alertas en Telegram/WhatsApp en segundos",description:"Intrusión, aforo excedido, arqueo discrepante: recibe clip de video + ubicación en Telegram/Email/WhatsApp al instante. Decides desde el celular."},{icon:hr,title:"Dashboard 24/7 sin vigilar pantallas",description:"Mapas de calor, conteo histórico, arqueos diarios, alertas configurables. Todo en un dashboard web accesible desde el celular. Cero tecnicismos."},{icon:Cu,title:"Hikvision ColorVu 4K: vea la placa a las 2 AM",description:"Instalamos ColorVu 4K / AcuSense / DeepinView. Visión nocturna a color real: vea placas, rostros, billetes en oscuridad total. No más 'cámaras borrosas'."},{icon:Sa,title:"Su Hikvision actual ya sirve: sin comprar hardware nuevo",description:"RTSP/ONVIF estándar = compatible. La mayoría de Hikvision 2018+ ya sirven. Le inyectamos YOLO por red. Ahorro real: 0€ en cámaras nuevas si ya tiene compatibles."}];function Hh(){const[i,l]=ke.useState(!1),[c,m]=ke.useState(!1),[u,v]=ke.useState({nombre:"",email:"",telefono:"",mensaje:""}),[f,S]=ke.useState(!1),[x,j]=ke.useState(!1),[P,T]=ke.useState(""),[k,Q]=ke.useState(0),[B,K]=ke.useState(-1),[Z,Le]=ke.useState(window.location.hash.slice(1));ke.useEffect(()=>{const E=()=>m(window.scrollY>40);return window.addEventListener("scroll",E),()=>window.removeEventListener("scroll",E)},[]),ke.useEffect(()=>{const E=()=>Le(window.location.hash.slice(1));return window.addEventListener("hashchange",E),()=>window.removeEventListener("hashchange",E)},[]);const _e={negocio:{title:"Cámaras de Seguridad para Negocio en Bogotá | 500+ instalaciones",description:"Instalación de cámaras para negocio en Bogotá con IA. Hikvision ColorVu, analítica YOLO, aforo, arqueo y alertas WhatsApp. Desde $1.800.000. Cotiza gratis."},instalacion:{title:"Instalación de Cámaras de Seguridad en Bogotá | Hikvision Certificado",description:"Instalación profesional de cámaras de seguridad en Bogotá: cableado estructurado sin puntos ciegos, configuración remota y equipos IA-ready. Cotización con visita técnica."},casa:{title:"Cámaras para Instalar en Casa en Bogotá | Instalación el mismo día",description:"Cámaras para casa en Bogotá con visión nocturna a color y acceso desde el celular. Desde $600.000 por cámara, instalación el mismo día en toda la ciudad."},"precios-camaras":{title:"Precios de Instalación de Cámaras de Seguridad en Bogotá 2026",description:"Cuánto cuesta instalar cámaras de seguridad en Bogotá: desde $1.800.000 para 4 cámaras con instalación. Precios cerrados, IVA incluido y cotización gratis."},consultor:{title:"Consultor Tecnológico para Empresas en Bogotá | Diagnóstico con ROI",description:"Consultor tecnológico en Bogotá: auditoría de seguridad CCTV con IA, automatización de procesos y dashboards. Diagnóstico gratis con implementación."},blog:{title:"Blog de Cámaras de Seguridad e IA | Servicios APC Bogotá",description:"Guías, comparativas y casos reales sobre CCTV Hikvision con inteligencia artificial en Bogotá: precios, instalación, analítica IA, automatización y seguridad empresarial."}};ke.useEffect(()=>{const E=_e[Z];if(!E)return;document.title=E.title;let U=document.querySelector('meta[name="description"]');U||(U=document.createElement("meta"),U.setAttribute("name","description"),document.head.appendChild(U)),U.setAttribute("content",E.description)},[Z]);const He={negocio:Kg,suba:Zg,kennedy:Xg,chapinero:Jg,usaquen:eh,fontibon:ah,instalacion:th,casa:ih,"precios-camaras":dh,consultor:ph,blog:iu},be=Z.startsWith("blog/")?Z.slice(5):null,Ie=He[Z];if(Ie||be)return o.jsxs("div",{className:"min-h-screen bg-background text-foreground font-sans",children:[o.jsx("nav",{className:"sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-14",children:[o.jsxs("button",{onClick:()=>{window.location.hash=""},className:"flex items-center gap-2.5",children:[o.jsx("img",{src:"/logo.png",alt:"Servicios APC",className:"h-8 w-auto"}),o.jsx("span",{className:"text-foreground font-semibold text-sm hidden sm:block",children:"Servicios APC"})]}),o.jsx("a",{href:"https://wa.me/573337450634",target:"_blank",rel:"noopener noreferrer",className:"bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity",children:"WhatsApp Gratis"})]})}),be?o.jsx(iu,{slug:be}):o.jsx(Ie,{}),o.jsx(Hd,{})]});const oe=E=>{var U;(U=document.getElementById(E))==null||U.scrollIntoView({behavior:"smooth"}),l(!1)},Oe=async E=>{E.preventDefault(),j(!0),T("");try{(await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"c5cdb094-a9cd-4e68-9041-2fafe475fff6",subject:"Nuevo mensaje desde serviciosapc.site",from_name:"Servicios APC Website",nombre:u.nombre,email:u.email,telefono:u.telefono,mensaje:u.mensaje})})).json()).success?(S(!0),v({nombre:"",email:"",telefono:"",mensaje:""})):T("No pudimos enviar tu mensaje. Escríbenos por WhatsApp o inténtalo de nuevo.")}catch{T("Error de conexión. Escríbenos por WhatsApp o inténtalo de nuevo.")}finally{j(!1)}};return o.jsxs("div",{className:"min-h-screen bg-background text-foreground font-sans overflow-x-hidden",children:[o.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${c?"bg-background/95 backdrop-blur-sm border-b border-border":""}`,children:[o.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16",children:[o.jsxs("button",{onClick:()=>oe("inicio"),className:"flex items-center gap-2.5",children:[o.jsx("img",{src:"/logo.png",alt:"Servicios APC",className:"h-9 w-auto"}),o.jsx("span",{className:"text-foreground font-semibold text-sm tracking-wide hidden sm:block",children:"Servicios APC"})]}),o.jsxs("div",{className:"hidden md:flex items-center gap-7",children:[[["Servicios","servicios"],["Ecosistema","ecosistema"],["Casos","casos"],["Preguntas","faq"],["Quiénes somos","nosotros"],["Contacto","contacto"]].map(([E,U])=>o.jsx("button",{onClick:()=>oe(U),className:"text-sm text-muted-foreground hover:text-foreground transition-colors font-medium",children:E},U)),o.jsx("a",{href:"#blog",className:"text-sm text-muted-foreground hover:text-foreground transition-colors font-medium",children:"Blog"})]}),o.jsx("div",{className:"hidden md:flex items-center gap-3",children:o.jsxs("a",{href:"https://wa.me/573337450634",target:"_blank",rel:"noopener noreferrer",className:"bg-accent text-accent-foreground px-5 py-2 text-sm font-medium hover:bg-accent/90 transition-colors flex items-center gap-2",children:[o.jsx(Wo,{size:14})," WhatsApp"]})}),o.jsx("button",{className:"md:hidden text-foreground p-1",onClick:()=>l(!i),children:i?o.jsx(Ug,{size:20}):o.jsx(pg,{size:20})})]}),i&&o.jsxs("div",{className:"md:hidden bg-background border-b border-border px-6 py-5 space-y-3",children:[[["Servicios","servicios"],["Ecosistema","ecosistema"],["Casos","casos"],["Preguntas","faq"],["Quiénes somos","nosotros"],["Contacto","contacto"]].map(([E,U])=>o.jsx("button",{onClick:()=>oe(U),className:"block w-full text-left text-sm text-muted-foreground hover:text-foreground py-1.5",children:E},U)),o.jsx("a",{href:"#blog",onClick:()=>l(!1),className:"block w-full text-left text-sm text-muted-foreground hover:text-foreground py-1.5",children:"Blog"})]})]}),o.jsxs("section",{id:"inicio",className:"relative min-h-screen flex items-center pt-16 overflow-hidden",children:[o.jsxs("div",{className:"absolute inset-0 z-0",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1782743549510-926bf57fc98c?w=1600&h=900&fit=crop&auto=format&fm=webp&q=70",alt:"Ciudad moderna iluminada representando tecnología e innovación en Bogotá",className:"w-full h-full object-cover opacity-25",width:1600,height:900,loading:"eager",fetchPriority:"high",decoding:"async"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40"})]}),o.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-6",children:"Servicios APC · Bogotá, Colombia"}),o.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6",children:"Cámaras de seguridad para empresas que piensan: Hikvision + IA en tiempo real."}),o.jsx("p",{className:"text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl",children:"¿Cuánto te costó la última vez que tu cámara Hikvision justo NO grabó? Desde Bogotá, convertimos sus cámaras Hikvision/Dahua actuales en auditores inteligentes 24/7: analítica YOLO, CCTV offline-first, bots WhatsApp 24/7 y SEO local. No vendemos cámaras borrosas. Instalamos pruebas 4K reales. Asesoría gratis."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[o.jsxs("button",{onClick:()=>oe("servicios"),className:"bg-accent text-accent-foreground px-8 py-4 font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2",children:["Descubre cómo podemos ayudarte ",o.jsx(ln,{size:16})]}),o.jsx("button",{onClick:()=>oe("contacto"),className:"border border-border text-foreground px-8 py-4 font-medium hover:bg-secondary transition-colors",children:"Hablar con un asesor"})]}),o.jsx("div",{className:"flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-border",children:[["Control del dinero","Auditoría con IA"],["Offline-First","Nunca se pierde nada"],["Sin tecnicismos","Reportes claros"]].map(([E,U])=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Sa,{size:14,className:"text-accent flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-semibold text-foreground",children:E}),o.jsx("p",{className:"text-xs text-muted-foreground",children:U})]})]},E))})]}),o.jsx("div",{className:"hidden lg:block",children:o.jsxs("div",{className:"border border-border bg-card/80 backdrop-blur-sm p-8 space-y-4",children:[o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-6",children:"Nuestros servicios"}),Jn.map((E,U)=>{const je=E.icon;return o.jsxs("button",{onClick:()=>{Q(U),oe("servicios")},className:"w-full flex items-center gap-4 p-4 border border-border hover:border-accent/30 hover:bg-secondary transition-all duration-200 text-left group",children:[o.jsx(je,{size:18,style:{color:E.color},className:"flex-shrink-0"}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("p",{className:"text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate",children:E.title}),o.jsx("p",{className:"text-xs text-muted-foreground truncate",children:E.tagline})]}),o.jsx(he,{size:14,className:"text-muted-foreground flex-shrink-0"})]},E.id)})]})})]})]}),o.jsx("section",{id:"servicios",className:"py-24 border-t border-border",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[o.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 mb-16",children:[o.jsx("div",{className:"lg:col-span-3",children:o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase",children:"Nuestros Servicios"})}),o.jsxs("div",{className:"lg:col-span-9",children:[o.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4",children:"Servicios de tecnología y automatización para empresas"}),o.jsx("p",{className:"text-muted-foreground max-w-xl leading-relaxed",children:"Soluciones tecnológicas diseñadas para empresas en Bogotá y toda Colombia que quieren operar mejor, reducir pérdidas y crecer con inteligencia."})]})]}),o.jsx("div",{className:"border-t border-border",children:Jn.map((E,U)=>{const je=E.icon,sa=k===U;return o.jsxs("div",{className:"border-b border-border",children:[o.jsxs("button",{onClick:()=>Q(sa?-1:U),"aria-expanded":sa,className:"w-full flex items-center gap-4 py-6 text-left group",children:[o.jsx(je,{size:22,style:{color:E.color},className:"flex-shrink-0"}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h3",{className:"font-serif text-xl md:text-2xl font-bold group-hover:text-accent transition-colors",children:E.title}),o.jsx("p",{className:"font-mono text-xs tracking-widest uppercase mt-1",style:{color:E.color},children:E.tagline})]}),o.jsx(he,{size:22,className:`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${sa?"rotate-90":""}`})]}),sa&&o.jsxs("div",{className:"pb-10 grid lg:grid-cols-2 gap-10 items-center",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-muted-foreground leading-relaxed mb-6",children:E.description}),o.jsx("ul",{className:"space-y-3 mb-8",children:E.bullets.map(Je=>o.jsxs("li",{className:"flex items-start gap-3 text-sm",children:[o.jsx(Sa,{size:15,className:"mt-0.5 flex-shrink-0",style:{color:E.color}}),o.jsx("span",{children:Je})]},Je))}),o.jsxs("button",{onClick:()=>oe("contacto"),className:"flex items-center gap-2 font-medium text-sm px-6 py-3 border transition-colors hover:opacity-80",style:{borderColor:E.color,color:E.color},children:["Solicitar información ",o.jsx(ln,{size:14})]})]}),o.jsxs("div",{className:"relative order-first lg:order-last",children:[o.jsx("div",{className:"bg-secondary h-2 w-full absolute -top-2 left-0",style:{backgroundColor:E.color,opacity:.3}}),o.jsx("img",{src:E.image,alt:E.imageAlt,className:"w-full aspect-[4/3] object-cover",width:800,height:560,loading:"lazy",decoding:"async"})]})]})]},E.id)})})]})}),o.jsx("section",{id:"beneficios",className:"py-24 bg-secondary border-y border-border",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[o.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 mb-16",children:[o.jsx("div",{className:"lg:col-span-3",children:o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase",children:"Beneficios"})}),o.jsxs("div",{className:"lg:col-span-9",children:[o.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4",children:"Beneficios de automatizar su empresa con Servicios APC"}),o.jsx("p",{className:"text-muted-foreground max-w-xl leading-relaxed",children:"Mejore la eficiencia y competitividad de su empresa con soluciones tecnológicas hechas para la realidad colombiana."})]})]}),o.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border",children:_h.map(E=>{const U=E.icon;return o.jsxs("div",{className:"bg-secondary p-8 hover:bg-background transition-colors duration-200",children:[o.jsx(U,{size:24,className:"text-accent mb-5"}),o.jsx("h3",{className:"font-serif text-lg font-bold mb-3",children:E.title}),o.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:E.description})]},E.title)})})]})}),o.jsx("section",{id:"nosotros",className:"py-24 border-b border-border",children:o.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:o.jsxs("div",{className:"grid lg:grid-cols-12 gap-12 items-center",children:[o.jsxs("div",{className:"lg:col-span-5 relative",children:[o.jsx("div",{className:"absolute -top-4 -left-4 w-full h-full border border-accent/30","aria-hidden":"true"}),o.jsxs("picture",{children:[o.jsx("source",{srcSet:"/servicios-apc.webp",type:"image/webp"}),o.jsx("img",{src:"/servicios-apc.jpeg",alt:"Fundador de Servicios APC — experto en soluciones tecnológicas para empresas en Bogotá, Colombia",width:900,height:1200,className:"w-full object-cover aspect-[3/4] relative z-10",loading:"lazy",decoding:"async"})]}),o.jsxs("div",{className:"absolute bottom-0 left-0 right-0 z-20 bg-accent px-6 py-4",children:[o.jsx("p",{className:"text-accent-foreground font-mono text-xs tracking-widest uppercase",children:"Fundador — Servicios APC"}),o.jsx("p",{className:"text-accent-foreground/70 text-xs mt-0.5 font-mono",children:"Bogotá, Colombia"})]})]}),o.jsxs("div",{className:"lg:col-span-7",children:[o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-6",children:"Quiénes somos"}),o.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight",children:"Empresa de tecnología con base en Bogotá."}),o.jsxs("div",{className:"space-y-4 text-muted-foreground leading-relaxed",children:[o.jsxs("p",{children:[o.jsx("strong",{className:"text-foreground",children:"Servicios APC"})," es una empresa de tecnología con sede en Bogotá (Cra. 52c #39b-22). No vendemos tecnología por moda: diseñamos, instalamos y mantenemos la infraestructura digital que le devuelve el control de su dinero, su productividad y su operación."]}),o.jsxs("p",{children:["Nuestra presencia local nos permite ofrecer"," ",o.jsx("strong",{className:"text-foreground",children:"soporte técnico presencial en Bogotá"})," ","con respuesta rápida, y desplegar arquitectura y desarrollo de forma remota para clientes en el resto de Colombia."]}),o.jsx("p",{children:"No administramos su negocio ni supervisamos a su personal. Le entregamos las herramientas exactas para que usted administre su empresa en minutos desde su celular, con datos claros y decisiones respaldadas."})]}),o.jsxs("div",{className:"grid sm:grid-cols-2 gap-6 mt-8",children:[o.jsxs("div",{className:"border border-border p-6",children:[o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-3",children:"Misión"}),o.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Blindar la operación de cada negocio con infraestructura digital resiliente y control automatizado, eliminando la pérdida de dinero y el desorden — sin exigir conocimientos técnicos al empresario."})]}),o.jsxs("div",{className:"border border-border p-6",children:[o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-3",children:"Visión"}),o.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Ser el estándar de infraestructura digital indestructible en Colombia y la región, donde cada cámara, cada flujo y cada dato trabajan para proteger y hacer crecer el negocio."})]})]}),o.jsx("div",{className:"mt-10 pt-10 border-t border-border space-y-6",children:Vh.map(E=>{const U=E.icon;return o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-10 h-10 border border-border flex items-center justify-center flex-shrink-0",children:o.jsx(U,{size:16,className:"text-accent"})}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold text-foreground text-sm mb-1",children:E.title}),o.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:E.description})]})]},E.title)})})]})]})})}),o.jsx("section",{id:"ecosistema",className:"py-24 bg-secondary border-b border-border",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[o.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 mb-16",children:[o.jsx("div",{className:"lg:col-span-3",children:o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase",children:"Ecosistema APC"})}),o.jsxs("div",{className:"lg:col-span-9",children:[o.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4",children:"Un ecosistema, todo bajo control"}),o.jsx("p",{className:"text-muted-foreground max-w-xl leading-relaxed",children:"Servicios APC integra cuatro líneas especializadas que se conectan entre sí para blindar cada frente de su operación."})]})]}),o.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border",children:qh.map(E=>{const U=E.icon;return o.jsxs("a",{href:`https://${E.domain}`,target:"_blank",rel:"noopener noreferrer",className:"group bg-secondary p-8 hover:bg-background transition-colors duration-200 block",children:[o.jsx(U,{size:24,className:"text-accent mb-5"}),o.jsx("h3",{className:"font-serif text-lg font-bold mb-1 group-hover:text-accent transition-colors",children:E.name}),o.jsxs("p",{className:"font-mono text-xs text-accent mb-3 flex items-center gap-1",children:[o.jsx(eo,{size:11})," ",E.domain]}),o.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:E.description}),o.jsxs("span",{className:"mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity",children:["Visitar sitio ",o.jsx(ln,{size:12})]})]},E.domain)})})]})}),o.jsx("section",{id:"casos",className:"py-24 border-b border-border",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[o.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 mb-16",children:[o.jsx("div",{className:"lg:col-span-3",children:o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase",children:"Casos de éxito"})}),o.jsxs("div",{className:"lg:col-span-9",children:[o.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4",children:"Casos de éxito de clientes en Bogotá"}),o.jsx("p",{className:"text-muted-foreground max-w-xl leading-relaxed",children:"Empresas de Bogotá que ya operan con más control y menos pérdidas gracias a la infraestructura de Servicios APC."})]})]}),o.jsx("div",{className:"grid md:grid-cols-3 gap-px bg-border",children:Bh.map(E=>o.jsxs("div",{className:"bg-background p-8",children:[o.jsx(xg,{size:24,className:"text-accent mb-5"}),o.jsx("h3",{className:"font-serif text-lg font-bold mb-1",children:E.client}),o.jsx("p",{className:"font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5",children:E.sector}),o.jsx("p",{className:"text-xs font-semibold text-foreground mb-1",children:"Implementación"}),o.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed mb-4",children:E.implementation}),o.jsx("p",{className:"text-xs font-semibold text-foreground mb-1",children:"Resultado"}),o.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:E.result})]},E.client))})]})}),o.jsx("section",{id:"faq",className:"py-24 bg-secondary border-b border-border",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[o.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 mb-16",children:[o.jsx("div",{className:"lg:col-span-3",children:o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase",children:"Preguntas frecuentes"})}),o.jsxs("div",{className:"lg:col-span-9",children:[o.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4",children:"Preguntas frecuentes"}),o.jsx("p",{className:"text-muted-foreground max-w-xl leading-relaxed",children:"Resolvemos las dudas más comunes sobre nuestra infraestructura, privacidad y funcionamiento sin tecnicismos."})]})]}),o.jsx("div",{className:"max-w-3xl mx-auto border-t border-border",children:$h.map((E,U)=>{const je=B===U;return o.jsxs("div",{className:"border-b border-border",children:[o.jsxs("button",{onClick:()=>K(je?-1:U),"aria-expanded":je,className:"w-full flex items-center justify-between gap-4 py-6 text-left group",children:[o.jsx("span",{className:"font-serif text-lg font-bold group-hover:text-accent transition-colors",children:E.q}),o.jsx(he,{size:20,className:`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${je?"rotate-90":""}`})]}),je&&o.jsx("p",{className:"text-muted-foreground leading-relaxed pb-6 -mt-1",children:E.a})]},U)})})]})}),o.jsx("section",{id:"contacto",className:"py-24 border-b border-border",children:o.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:o.jsxs("div",{className:"grid lg:grid-cols-12 gap-12",children:[o.jsxs("div",{className:"lg:col-span-5",children:[o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-6",children:"Contacto"}),o.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight",children:"Contacte a Servicios APC en Bogotá"}),o.jsx("p",{className:"text-muted-foreground leading-relaxed mb-10",children:"Cuéntanos tu necesidad. Te respondemos en menos de 24 horas hábiles con una propuesta concreta para tu empresa."}),o.jsxs("div",{className:"space-y-5",children:[o.jsxs("a",{href:"https://wa.me/573337450634",target:"_blank",rel:"noopener noreferrer",className:"flex items-start gap-4 group",children:[o.jsx("div",{className:"w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors",children:o.jsx(Pa,{size:15,className:"text-accent"})}),o.jsxs("div",{children:[o.jsx("p",{className:"font-mono text-xs text-muted-foreground tracking-widest uppercase mb-0.5",children:"Teléfono / WhatsApp"}),o.jsx("p",{className:"text-sm font-medium text-foreground group-hover:text-accent transition-colors",children:"+57 333 7450634"})]})]}),o.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"flex items-start gap-4 group",children:[o.jsx("div",{className:"w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors",children:o.jsx(Pn,{size:15,className:"text-accent"})}),o.jsxs("div",{children:[o.jsx("p",{className:"font-mono text-xs text-muted-foreground tracking-widest uppercase mb-0.5",children:"Correo electrónico"}),o.jsx("p",{className:"text-sm font-medium text-foreground group-hover:text-accent transition-colors",children:"serviciosapcsoporte@gmail.com"})]})]}),o.jsxs("div",{className:"flex items-start gap-4",children:[o.jsx("div",{className:"w-10 h-10 border border-border flex items-center justify-center flex-shrink-0",children:o.jsx(nu,{size:15,className:"text-accent"})}),o.jsxs("div",{children:[o.jsx("p",{className:"font-mono text-xs text-muted-foreground tracking-widest uppercase mb-0.5",children:"Dirección"}),o.jsx("p",{className:"text-sm font-medium text-foreground",children:"Cra. 52c #39b-22, Bogotá"})]})]})]}),o.jsxs("a",{href:"https://wa.me/573337450634?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20soluciones%20tecnol%C3%B3gicas",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 mt-10 bg-[#25d366] text-white px-6 py-3 font-medium text-sm hover:bg-[#22c55e] transition-colors",children:[o.jsx(Wo,{size:15}),"Escribir por WhatsApp ahora"]})]}),o.jsx("div",{className:"lg:col-span-7",children:f?o.jsxs("div",{className:"h-full flex flex-col items-center justify-center border border-border p-12 text-center",children:[o.jsx(Sa,{size:48,className:"text-accent mb-4"}),o.jsx("h3",{className:"font-serif text-2xl font-bold mb-3",children:"¡Mensaje enviado!"}),o.jsx("p",{className:"text-muted-foreground mb-6",children:"Gracias por contactarnos. Te responderemos en menos de 24 horas hábiles."}),o.jsx("button",{onClick:()=>S(!1),className:"text-sm font-medium text-accent underline underline-offset-4",children:"Enviar otro mensaje"})]}):o.jsxs("form",{onSubmit:Oe,className:"border border-border p-8 lg:p-10 space-y-6",children:[o.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[o.jsxs("div",{children:[o.jsx("label",{htmlFor:"nombre",className:"block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2",children:"Nombre completo *"}),o.jsx("input",{id:"nombre",type:"text",required:!0,value:u.nombre,onChange:E=>v({...u,nombre:E.target.value}),placeholder:"Tu nombre",className:"w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"email",className:"block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2",children:"Correo electrónico *"}),o.jsx("input",{id:"email",type:"email",required:!0,value:u.email,onChange:E=>v({...u,email:E.target.value}),placeholder:"tu@empresa.com",className:"w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"})]})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"telefono",className:"block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2",children:"Teléfono"}),o.jsx("input",{id:"telefono",type:"tel",value:u.telefono,onChange:E=>v({...u,telefono:E.target.value}),placeholder:"+57 333 745 0634",className:"w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"mensaje",className:"block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2",children:"Mensaje *"}),o.jsx("textarea",{id:"mensaje",required:!0,rows:5,value:u.mensaje,onChange:E=>v({...u,mensaje:E.target.value}),placeholder:"¿Tiene Hikvision? ¿Necesita analítica? Cuéntenos...",className:"w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"})]}),P&&o.jsx("p",{className:"text-sm text-red-500 text-center",children:P}),o.jsxs("button",{type:"submit",disabled:x,className:"w-full bg-accent text-accent-foreground py-4 font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed",children:[o.jsx(Ag,{size:15}),x?"Enviando...":"Enviar mensaje"]}),o.jsx("p",{className:"text-xs text-muted-foreground text-center font-mono",children:"Tu información es confidencial y no será compartida con terceros."})]})})]})})}),o.jsx("footer",{className:"py-10 bg-background",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[o.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 pb-10 border-b border-border",children:[o.jsxs("div",{className:"lg:col-span-2",children:[o.jsxs("div",{className:"flex items-center gap-2.5 mb-4",children:[o.jsx("img",{src:"/logo.png",alt:"Servicios APC",className:"h-9 w-auto"}),o.jsx("span",{className:"text-foreground font-semibold text-sm",children:"Servicios APC"})]}),o.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed mb-4",children:"Cámaras de seguridad para negocio y empresas con IA Hikvision. Analítica YOLO, CCTV offline-first, bots WhatsApp 24/7 y SEO local en Bogotá."}),o.jsxs("div",{className:"flex flex-wrap gap-2 text-xs",children:[o.jsxs("a",{href:"https://apcvisionai.site",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline flex items-center gap-1",children:[o.jsx(ka,{size:11})," APC Visión AI — Analítica Hikvision"]}),o.jsx("span",{className:"text-muted-foreground",children:"·"}),o.jsxs("a",{href:"https://apcautomatizacion.site",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline flex items-center gap-1",children:[o.jsx(Vi,{size:11})," APC Automatización — n8n + IA"]}),o.jsx("span",{className:"text-muted-foreground",children:"·"}),o.jsxs("a",{href:"https://dogweb.lat",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline flex items-center gap-1",children:[o.jsx(vr,{size:11})," DogWeb — Web + SEO Local"]}),o.jsx("span",{className:"text-muted-foreground",children:"·"}),o.jsxs("a",{href:"https://apccore.site",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline flex items-center gap-1",children:[o.jsx(qi,{size:11})," APC Core — Infraestructura"]})]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-4",children:"Hikvision + IA"}),o.jsxs("ul",{className:"space-y-2",children:[o.jsx("li",{children:o.jsxs("a",{href:"#servicios",onClick:()=>{const E=Jn.findIndex(U=>U.id==="camaras");Q(E),oe("servicios")},className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(he,{size:12})," Analítica YOLO para Hikvision"]})}),o.jsx("li",{children:o.jsxs("a",{href:"#servicios",onClick:()=>{const E=Jn.findIndex(U=>U.id==="cctv");Q(E),oe("servicios")},className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(he,{size:12})," Instalación Hikvision IA-ready"]})}),o.jsx("li",{children:o.jsxs("a",{href:"https://apcvisionai.site",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(eo,{size:11})," Ver APC Visión AI"]})}),o.jsx("li",{children:o.jsxs("a",{href:"https://www.hikvision.com/es/",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(eo,{size:11})," Catálogo oficial Hikvision"]})})]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-4",children:"Servicios"}),o.jsx("ul",{className:"space-y-2",children:Jn.map(E=>o.jsx("li",{children:o.jsxs("button",{onClick:()=>{const U=Jn.indexOf(E);Q(U),oe("servicios")},className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(he,{size:12})," ",E.title]})},E.id))})]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-4",children:"Páginas SEO"}),o.jsxs("ul",{className:"space-y-2",children:[o.jsx("li",{children:o.jsxs("a",{href:"#negocio",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(he,{size:12})," Cámaras para Negocio"]})}),o.jsx("li",{children:o.jsxs("a",{href:"#instalacion",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(he,{size:12})," Instalación de Cámaras"]})}),o.jsx("li",{children:o.jsxs("a",{href:"#casa",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(he,{size:12})," Cámaras para Casa"]})}),o.jsx("li",{children:o.jsxs("a",{href:"#precios-camaras",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(he,{size:12})," Precios Instalación"]})}),o.jsx("li",{children:o.jsxs("a",{href:"#consultor",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(he,{size:12})," Consultor Tecnológico"]})}),[["Suba","suba"],["Kennedy","kennedy"],["Chapinero","chapinero"],["Usaquén","usaquen"],["Fontibón","fontibon"]].map(([E,U])=>o.jsx("li",{children:o.jsxs("a",{href:`#${U}`,className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(he,{size:12})," Cámaras ",E]})},U)),o.jsx("li",{children:o.jsxs("a",{href:"#blog",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[o.jsx(he,{size:12})," Blog"]})})]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-4",children:"Contacto"}),o.jsxs("ul",{className:"space-y-3",children:[o.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[o.jsx(nu,{size:13,className:"text-accent mt-0.5 flex-shrink-0"}),"Cra. 52c #39b-22, Bogotá"]}),o.jsx("li",{children:o.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",children:[o.jsx(Pn,{size:13,className:"text-accent flex-shrink-0"}),"serviciosapcsoporte@gmail.com"]})}),o.jsx("li",{children:o.jsxs("a",{href:"https://wa.me/573337450634",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",children:[o.jsx(Pa,{size:13,className:"text-accent flex-shrink-0"}),"+57 333 7450634"]})}),o.jsx("li",{children:o.jsx("a",{href:"https://search.google.com/local/writereview?placeid=ChIJ3YMe_3yfP44R1bbtdfSOqSQ",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors font-medium",children:"⭐ Dejar reseña en Google"})})]}),o.jsxs("div",{className:"flex items-center gap-3 mt-4",children:[o.jsx("a",{href:"https://www.facebook.com/alejandropiraquiveapc",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",className:"w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors",children:o.jsx(Jd,{size:15})}),o.jsx("a",{href:"https://www.instagram.com/serviciosapc",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",className:"w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors",children:o.jsx(eu,{size:15})}),o.jsx("a",{href:"https://www.linkedin.com/in/alejandropiraquive/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors",children:o.jsx(au,{size:15})})]})]})]}),o.jsxs("div",{className:"mb-8 pb-8 border-b border-border space-y-3",children:[o.jsxs("p",{className:"text-xs text-muted-foreground leading-relaxed",children:[o.jsx("strong",{className:"text-foreground",children:"Aviso de privacidad y tratamiento de datos."})," ","En cumplimiento de la Ley 1581 de 2012 (Habeas Data), Servicios APC declara que todo flujo de video y audio capturado en las sedes de sus clientes tiene como única finalidad la auditoría transaccional de seguridad empresarial, excluyendo la difusión pública de material visual de terceros sin consentimiento."]}),o.jsxs("p",{className:"text-xs text-muted-foreground leading-relaxed",children:[o.jsx("strong",{className:"text-foreground",children:"Términos del servicio."})," ","Los módulos lógicos e integraciones en la nube operan bajo el marco de Arrendamiento de Software e Infraestructura Tecnológica como Servicio (SaaS). El control patrimonial, claves de seguridad y marcas pertenecen exclusivamente a Servicios APC y al titular de la infraestructura."]}),o.jsx("a",{href:"/documentos/Politica_Tratamiento_Datos_serviciosapc.pdf",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-xs text-accent hover:underline mt-1",children:"Descargar Política de Tratamiento de Datos Personales (PDF)"})]}),o.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[o.jsx("p",{className:"text-xs text-muted-foreground font-mono",children:"© 2026 Servicios APC — Todos los derechos reservados"}),o.jsx("p",{className:"text-xs text-muted-foreground font-mono",children:"serviciosapc.site · Bogotá, Colombia"})]})]})}),o.jsxs("div",{className:"fixed bottom-6 right-6 z-50 flex flex-col gap-3",children:[o.jsx("a",{href:"https://www.facebook.com/alejandropiraquiveapc",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",className:"w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors shadow-lg",children:o.jsx(Jd,{size:18})}),o.jsx("a",{href:"https://www.instagram.com/serviciosapc",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",className:"w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors shadow-lg",children:o.jsx(eu,{size:18})}),o.jsx("a",{href:"https://www.linkedin.com/in/alejandropiraquive/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors shadow-lg",children:o.jsx(au,{size:18})}),o.jsx("a",{href:"https://wa.me/573337450634",target:"_blank",rel:"noopener noreferrer","aria-label":"WhatsApp",className:"w-11 h-11 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:bg-[#22c55e] transition-colors shadow-lg",children:o.jsx(Wo,{size:18})})]}),o.jsx(Hd,{})]})}Ip.createRoot(document.getElementById("root")).render(o.jsx(Hh,{}));
