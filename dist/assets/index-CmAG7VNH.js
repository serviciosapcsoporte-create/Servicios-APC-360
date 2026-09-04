var pi={exports:{}},_n={},fi={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Cp(){if(qd)return Q;qd=1;var i=Symbol.for("react.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),g=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),z=Symbol.iterator;function V(b){return b===null||typeof b!="object"?null:(b=z&&b[z]||b["@@iterator"],typeof b=="function"?b:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,X={};function J(b,P,Y){this.props=b,this.context=P,this.refs=X,this.updater=Y||ae}J.prototype.isReactComponent={},J.prototype.setState=function(b,P){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,P,"setState")},J.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function Fe(){}Fe.prototype=J.prototype;function Be(b,P,Y){this.props=b,this.context=P,this.refs=X,this.updater=Y||ae}var $e=Be.prototype=new Fe;$e.constructor=Be,K($e,J.prototype),$e.isPureReactComponent=!0;var xe=Array.isArray,we=Object.prototype.hasOwnProperty,ne={current:null},De={key:!0,ref:!0,__self:!0,__source:!0};function w(b,P,Y){var Z,oe={},te=null,ce=null;if(P!=null)for(Z in P.ref!==void 0&&(ce=P.ref),P.key!==void 0&&(te=""+P.key),P)we.call(P,Z)&&!De.hasOwnProperty(Z)&&(oe[Z]=P[Z]);var ie=arguments.length-2;if(ie===1)oe.children=Y;else if(1<ie){for(var fe=Array(ie),ea=0;ea<ie;ea++)fe[ea]=arguments[ea+2];oe.children=fe}if(b&&b.defaultProps)for(Z in ie=b.defaultProps,ie)oe[Z]===void 0&&(oe[Z]=ie[Z]);return{$$typeof:i,type:b,key:te,ref:ce,props:oe,_owner:ne.current}}function W(b,P){return{$$typeof:i,type:b.type,key:P,ref:b.ref,props:b.props,_owner:b._owner}}function je(b){return typeof b=="object"&&b!==null&&b.$$typeof===i}function sa(b){var P={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Y){return P[Y]})}var Xe=/\/+/g;function Je(b,P){return typeof b=="object"&&b!==null&&b.key!=null?sa(""+b.key):P.toString(36)}function ga(b,P,Y,Z,oe){var te=typeof b;(te==="undefined"||te==="boolean")&&(b=null);var ce=!1;if(b===null)ce=!0;else switch(te){case"string":case"number":ce=!0;break;case"object":switch(b.$$typeof){case i:case l:ce=!0}}if(ce)return ce=b,oe=oe(ce),b=Z===""?"."+Je(ce,0):Z,xe(oe)?(Y="",b!=null&&(Y=b.replace(Xe,"$&/")+"/"),ga(oe,P,Y,"",function(ea){return ea})):oe!=null&&(je(oe)&&(oe=W(oe,Y+(!oe.key||ce&&ce.key===oe.key?"":(""+oe.key).replace(Xe,"$&/")+"/")+b)),P.push(oe)),1;if(ce=0,Z=Z===""?".":Z+":",xe(b))for(var ie=0;ie<b.length;ie++){te=b[ie];var fe=Z+Je(te,ie);ce+=ga(te,P,Y,fe,oe)}else if(fe=V(b),typeof fe=="function")for(b=fe.call(b),ie=0;!(te=b.next()).done;)te=te.value,fe=Z+Je(te,ie++),ce+=ga(te,P,Y,fe,oe);else if(te==="object")throw P=String(b),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return ce}function ja(b,P,Y){if(b==null)return b;var Z=[],oe=0;return ga(b,Z,"","",function(te){return P.call(Y,te,oe++)}),Z}function Ue(b){if(b._status===-1){var P=b._result;P=P(),P.then(function(Y){(b._status===0||b._status===-1)&&(b._status=1,b._result=Y)},function(Y){(b._status===0||b._status===-1)&&(b._status=2,b._result=Y)}),b._status===-1&&(b._status=0,b._result=P)}if(b._status===1)return b._result.default;throw b._result}var be={current:null},R={transition:null},U={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:R,ReactCurrentOwner:ne};function O(){throw Error("act(...) is not supported in production builds of React.")}return Q.Children={map:ja,forEach:function(b,P,Y){ja(b,function(){P.apply(this,arguments)},Y)},count:function(b){var P=0;return ja(b,function(){P++}),P},toArray:function(b){return ja(b,function(P){return P})||[]},only:function(b){if(!je(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Q.Component=J,Q.Fragment=c,Q.Profiler=u,Q.PureComponent=Be,Q.StrictMode=m,Q.Suspense=k,Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,Q.act=O,Q.cloneElement=function(b,P,Y){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Z=K({},b.props),oe=b.key,te=b.ref,ce=b._owner;if(P!=null){if(P.ref!==void 0&&(te=P.ref,ce=ne.current),P.key!==void 0&&(oe=""+P.key),b.type&&b.type.defaultProps)var ie=b.type.defaultProps;for(fe in P)we.call(P,fe)&&!De.hasOwnProperty(fe)&&(Z[fe]=P[fe]===void 0&&ie!==void 0?ie[fe]:P[fe])}var fe=arguments.length-2;if(fe===1)Z.children=Y;else if(1<fe){ie=Array(fe);for(var ea=0;ea<fe;ea++)ie[ea]=arguments[ea+2];Z.children=ie}return{$$typeof:i,type:b.type,key:oe,ref:te,props:Z,_owner:ce}},Q.createContext=function(b){return b={$$typeof:g,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:f,_context:b},b.Consumer=b},Q.createElement=w,Q.createFactory=function(b){var P=w.bind(null,b);return P.type=b,P},Q.createRef=function(){return{current:null}},Q.forwardRef=function(b){return{$$typeof:v,render:b}},Q.isValidElement=je,Q.lazy=function(b){return{$$typeof:D,_payload:{_status:-1,_result:b},_init:Ue}},Q.memo=function(b,P){return{$$typeof:S,type:b,compare:P===void 0?null:P}},Q.startTransition=function(b){var P=R.transition;R.transition={};try{b()}finally{R.transition=P}},Q.unstable_act=O,Q.useCallback=function(b,P){return be.current.useCallback(b,P)},Q.useContext=function(b){return be.current.useContext(b)},Q.useDebugValue=function(){},Q.useDeferredValue=function(b){return be.current.useDeferredValue(b)},Q.useEffect=function(b,P){return be.current.useEffect(b,P)},Q.useId=function(){return be.current.useId()},Q.useImperativeHandle=function(b,P,Y){return be.current.useImperativeHandle(b,P,Y)},Q.useInsertionEffect=function(b,P){return be.current.useInsertionEffect(b,P)},Q.useLayoutEffect=function(b,P){return be.current.useLayoutEffect(b,P)},Q.useMemo=function(b,P){return be.current.useMemo(b,P)},Q.useReducer=function(b,P,Y){return be.current.useReducer(b,P,Y)},Q.useRef=function(b){return be.current.useRef(b)},Q.useState=function(b){return be.current.useState(b)},Q.useSyncExternalStore=function(b,P,Y){return be.current.useSyncExternalStore(b,P,Y)},Q.useTransition=function(){return be.current.useTransition()},Q.version="18.3.1",Q}var Vd;function zi(){return Vd||(Vd=1,fi.exports=Cp()),fi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function Ap(){if(Bd)return _n;Bd=1;var i=zi(),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function g(v,k,S){var D,z={},V=null,ae=null;S!==void 0&&(V=""+S),k.key!==void 0&&(V=""+k.key),k.ref!==void 0&&(ae=k.ref);for(D in k)m.call(k,D)&&!f.hasOwnProperty(D)&&(z[D]=k[D]);if(v&&v.defaultProps)for(D in k=v.defaultProps,k)z[D]===void 0&&(z[D]=k[D]);return{$$typeof:l,type:v,key:V,ref:ae,props:z,_owner:u.current}}return _n.Fragment=c,_n.jsx=g,_n.jsxs=g,_n}var $d;function Sp(){return $d||($d=1,pi.exports=Ap()),pi.exports}var n=Sp(),it={},gi={exports:{}},Ze={},hi={exports:{}},vi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function kp(){return _d||(_d=1,(function(i){function l(R,U){var O=R.length;R.push(U);e:for(;0<O;){var b=O-1>>>1,P=R[b];if(0<u(P,U))R[b]=U,R[O]=P,O=b;else break e}}function c(R){return R.length===0?null:R[0]}function m(R){if(R.length===0)return null;var U=R[0],O=R.pop();if(O!==U){R[0]=O;e:for(var b=0,P=R.length,Y=P>>>1;b<Y;){var Z=2*(b+1)-1,oe=R[Z],te=Z+1,ce=R[te];if(0>u(oe,O))te<P&&0>u(ce,oe)?(R[b]=ce,R[te]=O,b=te):(R[b]=oe,R[Z]=O,b=Z);else if(te<P&&0>u(ce,O))R[b]=ce,R[te]=O,b=te;else break e}}return U}function u(R,U){var O=R.sortIndex-U.sortIndex;return O!==0?O:R.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var g=Date,v=g.now();i.unstable_now=function(){return g.now()-v}}var k=[],S=[],D=1,z=null,V=3,ae=!1,K=!1,X=!1,J=typeof setTimeout=="function"?setTimeout:null,Fe=typeof clearTimeout=="function"?clearTimeout:null,Be=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $e(R){for(var U=c(S);U!==null;){if(U.callback===null)m(S);else if(U.startTime<=R)m(S),U.sortIndex=U.expirationTime,l(k,U);else break;U=c(S)}}function xe(R){if(X=!1,$e(R),!K)if(c(k)!==null)K=!0,Ue(we);else{var U=c(S);U!==null&&be(xe,U.startTime-R)}}function we(R,U){K=!1,X&&(X=!1,Fe(w),w=-1),ae=!0;var O=V;try{for($e(U),z=c(k);z!==null&&(!(z.expirationTime>U)||R&&!sa());){var b=z.callback;if(typeof b=="function"){z.callback=null,V=z.priorityLevel;var P=b(z.expirationTime<=U);U=i.unstable_now(),typeof P=="function"?z.callback=P:z===c(k)&&m(k),$e(U)}else m(k);z=c(k)}if(z!==null)var Y=!0;else{var Z=c(S);Z!==null&&be(xe,Z.startTime-U),Y=!1}return Y}finally{z=null,V=O,ae=!1}}var ne=!1,De=null,w=-1,W=5,je=-1;function sa(){return!(i.unstable_now()-je<W)}function Xe(){if(De!==null){var R=i.unstable_now();je=R;var U=!0;try{U=De(!0,R)}finally{U?Je():(ne=!1,De=null)}}else ne=!1}var Je;if(typeof Be=="function")Je=function(){Be(Xe)};else if(typeof MessageChannel<"u"){var ga=new MessageChannel,ja=ga.port2;ga.port1.onmessage=Xe,Je=function(){ja.postMessage(null)}}else Je=function(){J(Xe,0)};function Ue(R){De=R,ne||(ne=!0,Je())}function be(R,U){w=J(function(){R(i.unstable_now())},U)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_continueExecution=function(){K||ae||(K=!0,Ue(we))},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return V},i.unstable_getFirstCallbackNode=function(){return c(k)},i.unstable_next=function(R){switch(V){case 1:case 2:case 3:var U=3;break;default:U=V}var O=V;V=U;try{return R()}finally{V=O}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(R,U){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var O=V;V=R;try{return U()}finally{V=O}},i.unstable_scheduleCallback=function(R,U,O){var b=i.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?b+O:b):O=b,R){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=O+P,R={id:D++,callback:U,priorityLevel:R,startTime:O,expirationTime:P,sortIndex:-1},O>b?(R.sortIndex=O,l(S,R),c(k)===null&&R===c(S)&&(X?(Fe(w),w=-1):X=!0,be(xe,O-b))):(R.sortIndex=P,l(k,R),K||ae||(K=!0,Ue(we))),R},i.unstable_shouldYield=sa,i.unstable_wrapCallback=function(R){var U=V;return function(){var O=V;V=U;try{return R.apply(this,arguments)}finally{V=O}}}})(vi)),vi}var Hd;function jp(){return Hd||(Hd=1,hi.exports=kp()),hi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd;function Pp(){if(Fd)return Ze;Fd=1;var i=zi(),l=jp();function c(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,u={};function f(e,a){g(e,a),g(e+"Capture",a)}function g(e,a){for(u[e]=a,e=0;e<a.length;e++)m.add(a[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D={},z={};function V(e){return k.call(z,e)?!0:k.call(D,e)?!1:S.test(e)?z[e]=!0:(D[e]=!0,!1)}function ae(e,a,r,o){if(r!==null&&r.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,a,r,o){if(a===null||typeof a>"u"||ae(e,a,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function X(e,a,r,o,t,s,d){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=o,this.attributeNamespace=t,this.mustUseProperty=r,this.propertyName=e,this.type=a,this.sanitizeURL=s,this.removeEmptyString=d}var J={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){J[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];J[a]=new X(a,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){J[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){J[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){J[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){J[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){J[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){J[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){J[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fe=/[\-:]([a-z])/g;function Be(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(Fe,Be);J[a]=new X(a,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(Fe,Be);J[a]=new X(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(Fe,Be);J[a]=new X(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){J[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),J.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){J[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function $e(e,a,r,o){var t=J.hasOwnProperty(a)?J[a]:null;(t!==null?t.type!==0:o||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(K(a,r,t,o)&&(r=null),o||t===null?V(a)&&(r===null?e.removeAttribute(a):e.setAttribute(a,""+r)):t.mustUseProperty?e[t.propertyName]=r===null?t.type===3?!1:"":r:(a=t.attributeName,o=t.attributeNamespace,r===null?e.removeAttribute(a):(t=t.type,r=t===3||t===4&&r===!0?"":""+r,o?e.setAttributeNS(o,a,r):e.setAttribute(a,r))))}var xe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),ne=Symbol.for("react.portal"),De=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),je=Symbol.for("react.provider"),sa=Symbol.for("react.context"),Xe=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),ga=Symbol.for("react.suspense_list"),ja=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),R=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,b;function P(e){if(b===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);b=a&&a[1]||""}return`
`+b+e}var Y=!1;function Z(e,a){if(!e||Y)return"";Y=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(A){var o=A}Reflect.construct(e,[],a)}else{try{a.call()}catch(A){o=A}e.call(a.prototype)}else{try{throw Error()}catch(A){o=A}e()}}catch(A){if(A&&o&&typeof A.stack=="string"){for(var t=A.stack.split(`
`),s=o.stack.split(`
`),d=t.length-1,p=s.length-1;1<=d&&0<=p&&t[d]!==s[p];)p--;for(;1<=d&&0<=p;d--,p--)if(t[d]!==s[p]){if(d!==1||p!==1)do if(d--,p--,0>p||t[d]!==s[p]){var h=`
`+t[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=p);break}}}finally{Y=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?P(e):""}function oe(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case De:return"Fragment";case ne:return"Portal";case W:return"Profiler";case w:return"StrictMode";case Je:return"Suspense";case ga:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sa:return(e.displayName||"Context")+".Consumer";case je:return(e._context.displayName||"Context")+".Provider";case Xe:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ja:return a=e.displayName||null,a!==null?a:te(e.type)||"Memo";case Ue:a=e._payload,e=e._init;try{return te(e(a))}catch{}}return null}function ce(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(a);case 8:return a===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ea(e){var a=fe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),o=""+e[a];if(!e.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var t=r.get,s=r.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return t.call(this)},set:function(d){o=""+d,s.call(this,d)}}),Object.defineProperty(e,a,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Kn(e){e._valueTracker||(e._valueTracker=ea(e))}function Fi(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),o="";return e&&(o=fe(e)?e.checked?"true":"false":e.value),e=o,e!==r?(a.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yt(e,a){var r=a.checked;return O({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ui(e,a){var r=a.defaultValue==null?"":a.defaultValue,o=a.checked!=null?a.checked:a.defaultChecked;r=ie(a.value!=null?a.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Wi(e,a){a=a.checked,a!=null&&$e(e,"checked",a,!1)}function Ct(e,a){Wi(e,a);var r=ie(a.value),o=a.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?At(e,a.type,r):a.hasOwnProperty("defaultValue")&&At(e,a.type,ie(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function Gi(e,a,r){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var o=a.type;if(!(o!=="submit"&&o!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,r||a===e.value||(e.value=a),e.defaultValue=a}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function At(e,a,r){(a!=="number"||Zn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var rn=Array.isArray;function Pr(e,a,r,o){if(e=e.options,a){a={};for(var t=0;t<r.length;t++)a["$"+r[t]]=!0;for(r=0;r<e.length;r++)t=a.hasOwnProperty("$"+e[r].value),e[r].selected!==t&&(e[r].selected=t),t&&o&&(e[r].defaultSelected=!0)}else{for(r=""+ie(r),a=null,t=0;t<e.length;t++){if(e[t].value===r){e[t].selected=!0,o&&(e[t].defaultSelected=!0);return}a!==null||e[t].disabled||(a=e[t])}a!==null&&(a.selected=!0)}}function St(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(c(91));return O({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yi(e,a){var r=a.value;if(r==null){if(r=a.children,a=a.defaultValue,r!=null){if(a!=null)throw Error(c(92));if(rn(r)){if(1<r.length)throw Error(c(93));r=r[0]}a=r}a==null&&(a=""),r=a}e._wrapperState={initialValue:ie(r)}}function Qi(e,a){var r=ie(a.value),o=ie(a.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),a.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function Ki(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function Zi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kt(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?Zi(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xn,Xi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,r,o,t){MSApp.execUnsafeLocalFunction(function(){return e(a,r,o,t)})}:e})(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(Xn=Xn||document.createElement("div"),Xn.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Xn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function nn(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var on={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ju=["Webkit","ms","Moz","O"];Object.keys(on).forEach(function(e){ju.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),on[a]=on[e]})});function Ji(e,a,r){return a==null||typeof a=="boolean"||a===""?"":r||typeof a!="number"||a===0||on.hasOwnProperty(e)&&on[e]?(""+a).trim():a+"px"}function el(e,a){e=e.style;for(var r in a)if(a.hasOwnProperty(r)){var o=r.indexOf("--")===0,t=Ji(r,a[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,t):e[r]=t}}var Pu=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jt(e,a){if(a){if(Pu[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(c(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(c(61))}if(a.style!=null&&typeof a.style!="object")throw Error(c(62))}}function Pt(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function wt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var It=null,Nr=null,wr=null;function al(e){if(e=Nn(e)){if(typeof It!="function")throw Error(c(280));var a=e.stateNode;a&&(a=Ao(a),It(e.stateNode,e.type,a))}}function rl(e){Nr?wr?wr.push(e):wr=[e]:Nr=e}function nl(){if(Nr){var e=Nr,a=wr;if(wr=Nr=null,al(e),a)for(e=0;e<a.length;e++)al(a[e])}}function ol(e,a){return e(a)}function tl(){}var Et=!1;function sl(e,a,r){if(Et)return e(a,r);Et=!0;try{return ol(e,a,r)}finally{Et=!1,(Nr!==null||wr!==null)&&(tl(),nl())}}function tn(e,a){var r=e.stateNode;if(r===null)return null;var o=Ao(r);if(o===null)return null;r=o[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(c(231,a,typeof r));return r}var zt=!1;if(v)try{var sn={};Object.defineProperty(sn,"passive",{get:function(){zt=!0}}),window.addEventListener("test",sn,sn),window.removeEventListener("test",sn,sn)}catch{zt=!1}function Nu(e,a,r,o,t,s,d,p,h){var A=Array.prototype.slice.call(arguments,3);try{a.apply(r,A)}catch(N){this.onError(N)}}var ln=!1,Jn=null,eo=!1,Rt=null,wu={onError:function(e){ln=!0,Jn=e}};function Iu(e,a,r,o,t,s,d,p,h){ln=!1,Jn=null,Nu.apply(wu,arguments)}function Eu(e,a,r,o,t,s,d,p,h){if(Iu.apply(this,arguments),ln){if(ln){var A=Jn;ln=!1,Jn=null}else throw Error(c(198));eo||(eo=!0,Rt=A)}}function cr(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function il(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function ll(e){if(cr(e)!==e)throw Error(c(188))}function zu(e){var a=e.alternate;if(!a){if(a=cr(e),a===null)throw Error(c(188));return a!==e?null:e}for(var r=e,o=a;;){var t=r.return;if(t===null)break;var s=t.alternate;if(s===null){if(o=t.return,o!==null){r=o;continue}break}if(t.child===s.child){for(s=t.child;s;){if(s===r)return ll(t),e;if(s===o)return ll(t),a;s=s.sibling}throw Error(c(188))}if(r.return!==o.return)r=t,o=s;else{for(var d=!1,p=t.child;p;){if(p===r){d=!0,r=t,o=s;break}if(p===o){d=!0,o=t,r=s;break}p=p.sibling}if(!d){for(p=s.child;p;){if(p===r){d=!0,r=s,o=t;break}if(p===o){d=!0,o=s,r=t;break}p=p.sibling}if(!d)throw Error(c(189))}}if(r.alternate!==o)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?e:a}function cl(e){return e=zu(e),e!==null?dl(e):null}function dl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=dl(e);if(a!==null)return a;e=e.sibling}return null}var ul=l.unstable_scheduleCallback,ml=l.unstable_cancelCallback,Ru=l.unstable_shouldYield,Tu=l.unstable_requestPaint,Ce=l.unstable_now,Du=l.unstable_getCurrentPriorityLevel,Tt=l.unstable_ImmediatePriority,pl=l.unstable_UserBlockingPriority,ao=l.unstable_NormalPriority,Lu=l.unstable_LowPriority,fl=l.unstable_IdlePriority,ro=null,Pa=null;function Ou(e){if(Pa&&typeof Pa.onCommitFiberRoot=="function")try{Pa.onCommitFiberRoot(ro,e,void 0,(e.current.flags&128)===128)}catch{}}var ha=Math.clz32?Math.clz32:Vu,Mu=Math.log,qu=Math.LN2;function Vu(e){return e>>>=0,e===0?32:31-(Mu(e)/qu|0)|0}var no=64,oo=4194304;function cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function to(e,a){var r=e.pendingLanes;if(r===0)return 0;var o=0,t=e.suspendedLanes,s=e.pingedLanes,d=r&268435455;if(d!==0){var p=d&~t;p!==0?o=cn(p):(s&=d,s!==0&&(o=cn(s)))}else d=r&~t,d!==0?o=cn(d):s!==0&&(o=cn(s));if(o===0)return 0;if(a!==0&&a!==o&&(a&t)===0&&(t=o&-o,s=a&-a,t>=s||t===16&&(s&4194240)!==0))return a;if((o&4)!==0&&(o|=r&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=o;0<a;)r=31-ha(a),t=1<<r,o|=e[r],a&=~t;return o}function Bu(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $u(e,a){for(var r=e.suspendedLanes,o=e.pingedLanes,t=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-ha(s),p=1<<d,h=t[d];h===-1?((p&r)===0||(p&o)!==0)&&(t[d]=Bu(p,a)):h<=a&&(e.expiredLanes|=p),s&=~p}}function Dt(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gl(){var e=no;return no<<=1,(no&4194240)===0&&(no=64),e}function Lt(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function dn(e,a,r){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-ha(a),e[a]=r}function _u(e,a){var r=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var t=31-ha(r),s=1<<t;a[t]=0,o[t]=-1,e[t]=-1,r&=~s}}function Ot(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var o=31-ha(r),t=1<<o;t&a|e[o]&a&&(e[o]|=a),r&=~t}}var le=0;function hl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var vl,Mt,xl,bl,yl,qt=!1,so=[],$a=null,_a=null,Ha=null,un=new Map,mn=new Map,Fa=[],Hu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cl(e,a){switch(e){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":un.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(a.pointerId)}}function pn(e,a,r,o,t,s){return e===null||e.nativeEvent!==s?(e={blockedOn:a,domEventName:r,eventSystemFlags:o,nativeEvent:s,targetContainers:[t]},a!==null&&(a=Nn(a),a!==null&&Mt(a)),e):(e.eventSystemFlags|=o,a=e.targetContainers,t!==null&&a.indexOf(t)===-1&&a.push(t),e)}function Fu(e,a,r,o,t){switch(a){case"focusin":return $a=pn($a,e,a,r,o,t),!0;case"dragenter":return _a=pn(_a,e,a,r,o,t),!0;case"mouseover":return Ha=pn(Ha,e,a,r,o,t),!0;case"pointerover":var s=t.pointerId;return un.set(s,pn(un.get(s)||null,e,a,r,o,t)),!0;case"gotpointercapture":return s=t.pointerId,mn.set(s,pn(mn.get(s)||null,e,a,r,o,t)),!0}return!1}function Al(e){var a=dr(e.target);if(a!==null){var r=cr(a);if(r!==null){if(a=r.tag,a===13){if(a=il(r),a!==null){e.blockedOn=a,yl(e.priority,function(){xl(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Bt(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Nt=o,r.target.dispatchEvent(o),Nt=null}else return a=Nn(r),a!==null&&Mt(a),e.blockedOn=r,!1;a.shift()}return!0}function Sl(e,a,r){io(e)&&r.delete(a)}function Uu(){qt=!1,$a!==null&&io($a)&&($a=null),_a!==null&&io(_a)&&(_a=null),Ha!==null&&io(Ha)&&(Ha=null),un.forEach(Sl),mn.forEach(Sl)}function fn(e,a){e.blockedOn===a&&(e.blockedOn=null,qt||(qt=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Uu)))}function gn(e){function a(t){return fn(t,e)}if(0<so.length){fn(so[0],e);for(var r=1;r<so.length;r++){var o=so[r];o.blockedOn===e&&(o.blockedOn=null)}}for($a!==null&&fn($a,e),_a!==null&&fn(_a,e),Ha!==null&&fn(Ha,e),un.forEach(a),mn.forEach(a),r=0;r<Fa.length;r++)o=Fa[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<Fa.length&&(r=Fa[0],r.blockedOn===null);)Al(r),r.blockedOn===null&&Fa.shift()}var Ir=xe.ReactCurrentBatchConfig,lo=!0;function Wu(e,a,r,o){var t=le,s=Ir.transition;Ir.transition=null;try{le=1,Vt(e,a,r,o)}finally{le=t,Ir.transition=s}}function Gu(e,a,r,o){var t=le,s=Ir.transition;Ir.transition=null;try{le=4,Vt(e,a,r,o)}finally{le=t,Ir.transition=s}}function Vt(e,a,r,o){if(lo){var t=Bt(e,a,r,o);if(t===null)ns(e,a,o,co,r),Cl(e,o);else if(Fu(t,e,a,r,o))o.stopPropagation();else if(Cl(e,o),a&4&&-1<Hu.indexOf(e)){for(;t!==null;){var s=Nn(t);if(s!==null&&vl(s),s=Bt(e,a,r,o),s===null&&ns(e,a,o,co,r),s===t)break;t=s}t!==null&&o.stopPropagation()}else ns(e,a,o,null,r)}}var co=null;function Bt(e,a,r,o){if(co=null,e=wt(o),e=dr(e),e!==null)if(a=cr(e),a===null)e=null;else if(r=a.tag,r===13){if(e=il(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return co=e,null}function kl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Du()){case Tt:return 1;case pl:return 4;case ao:case Lu:return 16;case fl:return 536870912;default:return 16}default:return 16}}var Ua=null,$t=null,uo=null;function jl(){if(uo)return uo;var e,a=$t,r=a.length,o,t="value"in Ua?Ua.value:Ua.textContent,s=t.length;for(e=0;e<r&&a[e]===t[e];e++);var d=r-e;for(o=1;o<=d&&a[r-o]===t[s-o];o++);return uo=t.slice(e,1<o?1-o:void 0)}function mo(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Pl(){return!1}function aa(e){function a(r,o,t,s,d){this._reactName=r,this._targetInst=t,this.type=o,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:Pl,this.isPropagationStopped=Pl,this}return O(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),a}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_t=aa(Er),hn=O({},Er,{view:0,detail:0}),Yu=aa(hn),Ht,Ft,vn,fo=O({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wt,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Ht=e.screenX-vn.screenX,Ft=e.screenY-vn.screenY):Ft=Ht=0,vn=e),Ht)},movementY:function(e){return"movementY"in e?e.movementY:Ft}}),Nl=aa(fo),Qu=O({},fo,{dataTransfer:0}),Ku=aa(Qu),Zu=O({},hn,{relatedTarget:0}),Ut=aa(Zu),Xu=O({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),Ju=aa(Xu),em=O({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),am=aa(em),rm=O({},Er,{data:0}),wl=aa(rm),nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=tm[e])?!!a[e]:!1}function Wt(){return sm}var im=O({},hn,{key:function(e){if(e.key){var a=nm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?om[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wt,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=aa(im),cm=O({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Il=aa(cm),dm=O({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wt}),um=aa(dm),mm=O({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=aa(mm),fm=O({},fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gm=aa(fm),hm=[9,13,27,32],Gt=v&&"CompositionEvent"in window,xn=null;v&&"documentMode"in document&&(xn=document.documentMode);var vm=v&&"TextEvent"in window&&!xn,El=v&&(!Gt||xn&&8<xn&&11>=xn),zl=" ",Rl=!1;function Tl(e,a){switch(e){case"keyup":return hm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function xm(e,a){switch(e){case"compositionend":return Dl(a);case"keypress":return a.which!==32?null:(Rl=!0,zl);case"textInput":return e=a.data,e===zl&&Rl?null:e;default:return null}}function bm(e,a){if(zr)return e==="compositionend"||!Gt&&Tl(e,a)?(e=jl(),uo=$t=Ua=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return El&&a.locale!=="ko"?null:a.data;default:return null}}var ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ll(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!ym[e.type]:a==="textarea"}function Ol(e,a,r,o){rl(o),a=bo(a,"onChange"),0<a.length&&(r=new _t("onChange","change",null,r,o),e.push({event:r,listeners:a}))}var bn=null,yn=null;function Cm(e){ec(e,0)}function go(e){var a=Or(e);if(Fi(a))return e}function Am(e,a){if(e==="change")return a}var Ml=!1;if(v){var Yt;if(v){var Qt="oninput"in document;if(!Qt){var ql=document.createElement("div");ql.setAttribute("oninput","return;"),Qt=typeof ql.oninput=="function"}Yt=Qt}else Yt=!1;Ml=Yt&&(!document.documentMode||9<document.documentMode)}function Vl(){bn&&(bn.detachEvent("onpropertychange",Bl),yn=bn=null)}function Bl(e){if(e.propertyName==="value"&&go(yn)){var a=[];Ol(a,yn,e,wt(e)),sl(Cm,a)}}function Sm(e,a,r){e==="focusin"?(Vl(),bn=a,yn=r,bn.attachEvent("onpropertychange",Bl)):e==="focusout"&&Vl()}function km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return go(yn)}function jm(e,a){if(e==="click")return go(a)}function Pm(e,a){if(e==="input"||e==="change")return go(a)}function Nm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var va=typeof Object.is=="function"?Object.is:Nm;function Cn(e,a){if(va(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),o=Object.keys(a);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var t=r[o];if(!k.call(a,t)||!va(e[t],a[t]))return!1}return!0}function $l(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _l(e,a){var r=$l(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=a&&o>=a)return{node:r,offset:a-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$l(r)}}function Hl(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Hl(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Fl(){for(var e=window,a=Zn();a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=Zn(e.document)}return a}function Kt(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function wm(e){var a=Fl(),r=e.focusedElem,o=e.selectionRange;if(a!==r&&r&&r.ownerDocument&&Hl(r.ownerDocument.documentElement,r)){if(o!==null&&Kt(r)){if(a=o.start,e=o.end,e===void 0&&(e=a),"selectionStart"in r)r.selectionStart=a,r.selectionEnd=Math.min(e,r.value.length);else if(e=(a=r.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var t=r.textContent.length,s=Math.min(o.start,t);o=o.end===void 0?s:Math.min(o.end,t),!e.extend&&s>o&&(t=o,o=s,s=t),t=_l(r,s);var d=_l(r,o);t&&d&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(a=a.createRange(),a.setStart(t.node,t.offset),e.removeAllRanges(),s>o?(e.addRange(a),e.extend(d.node,d.offset)):(a.setEnd(d.node,d.offset),e.addRange(a)))}}for(a=[],e=r;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<a.length;r++)e=a[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Im=v&&"documentMode"in document&&11>=document.documentMode,Rr=null,Zt=null,An=null,Xt=!1;function Ul(e,a,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xt||Rr==null||Rr!==Zn(o)||(o=Rr,"selectionStart"in o&&Kt(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),An&&Cn(An,o)||(An=o,o=bo(Zt,"onSelect"),0<o.length&&(a=new _t("onSelect","select",null,a,r),e.push({event:a,listeners:o}),a.target=Rr)))}function ho(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var Tr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Jt={},Wl={};v&&(Wl=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function vo(e){if(Jt[e])return Jt[e];if(!Tr[e])return e;var a=Tr[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in Wl)return Jt[e]=a[r];return e}var Gl=vo("animationend"),Yl=vo("animationiteration"),Ql=vo("animationstart"),Kl=vo("transitionend"),Zl=new Map,Xl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wa(e,a){Zl.set(e,a),f(a,[e])}for(var es=0;es<Xl.length;es++){var as=Xl[es],Em=as.toLowerCase(),zm=as[0].toUpperCase()+as.slice(1);Wa(Em,"on"+zm)}Wa(Gl,"onAnimationEnd"),Wa(Yl,"onAnimationIteration"),Wa(Ql,"onAnimationStart"),Wa("dblclick","onDoubleClick"),Wa("focusin","onFocus"),Wa("focusout","onBlur"),Wa(Kl,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function Jl(e,a,r){var o=e.type||"unknown-event";e.currentTarget=r,Eu(o,a,void 0,e),e.currentTarget=null}function ec(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],t=o.event;o=o.listeners;e:{var s=void 0;if(a)for(var d=o.length-1;0<=d;d--){var p=o[d],h=p.instance,A=p.currentTarget;if(p=p.listener,h!==s&&t.isPropagationStopped())break e;Jl(t,p,A),s=h}else for(d=0;d<o.length;d++){if(p=o[d],h=p.instance,A=p.currentTarget,p=p.listener,h!==s&&t.isPropagationStopped())break e;Jl(t,p,A),s=h}}}if(eo)throw e=Rt,eo=!1,Rt=null,e}function me(e,a){var r=a[cs];r===void 0&&(r=a[cs]=new Set);var o=e+"__bubble";r.has(o)||(ac(a,e,2,!1),r.add(o))}function rs(e,a,r){var o=0;a&&(o|=4),ac(r,e,o,a)}var xo="_reactListening"+Math.random().toString(36).slice(2);function kn(e){if(!e[xo]){e[xo]=!0,m.forEach(function(r){r!=="selectionchange"&&(Rm.has(r)||rs(r,!1,e),rs(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[xo]||(a[xo]=!0,rs("selectionchange",!1,a))}}function ac(e,a,r,o){switch(kl(a)){case 1:var t=Wu;break;case 4:t=Gu;break;default:t=Vt}r=t.bind(null,a,r,e),t=void 0,!zt||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(t=!0),o?t!==void 0?e.addEventListener(a,r,{capture:!0,passive:t}):e.addEventListener(a,r,!0):t!==void 0?e.addEventListener(a,r,{passive:t}):e.addEventListener(a,r,!1)}function ns(e,a,r,o,t){var s=o;if((a&1)===0&&(a&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===t||p.nodeType===8&&p.parentNode===t)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===t||h.nodeType===8&&h.parentNode===t))return;d=d.return}for(;p!==null;){if(d=dr(p),d===null)return;if(h=d.tag,h===5||h===6){o=s=d;continue e}p=p.parentNode}}o=o.return}sl(function(){var A=s,N=wt(r),I=[];e:{var j=Zl.get(e);if(j!==void 0){var T=_t,M=e;switch(e){case"keypress":if(mo(r)===0)break e;case"keydown":case"keyup":T=lm;break;case"focusin":M="focus",T=Ut;break;case"focusout":M="blur",T=Ut;break;case"beforeblur":case"afterblur":T=Ut;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Ku;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=um;break;case Gl:case Yl:case Ql:T=Ju;break;case Kl:T=pm;break;case"scroll":T=Yu;break;case"wheel":T=gm;break;case"copy":case"cut":case"paste":T=am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Il}var q=(a&4)!==0,Ae=!q&&e==="scroll",y=q?j!==null?j+"Capture":null:j;q=[];for(var x=A,C;x!==null;){C=x;var E=C.stateNode;if(C.tag===5&&E!==null&&(C=E,y!==null&&(E=tn(x,y),E!=null&&q.push(jn(x,E,C)))),Ae)break;x=x.return}0<q.length&&(j=new T(j,M,null,r,N),I.push({event:j,listeners:q}))}}if((a&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",j&&r!==Nt&&(M=r.relatedTarget||r.fromElement)&&(dr(M)||M[Ra]))break e;if((T||j)&&(j=N.window===N?N:(j=N.ownerDocument)?j.defaultView||j.parentWindow:window,T?(M=r.relatedTarget||r.toElement,T=A,M=M?dr(M):null,M!==null&&(Ae=cr(M),M!==Ae||M.tag!==5&&M.tag!==6)&&(M=null)):(T=null,M=A),T!==M)){if(q=Nl,E="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(q=Il,E="onPointerLeave",y="onPointerEnter",x="pointer"),Ae=T==null?j:Or(T),C=M==null?j:Or(M),j=new q(E,x+"leave",T,r,N),j.target=Ae,j.relatedTarget=C,E=null,dr(N)===A&&(q=new q(y,x+"enter",M,r,N),q.target=C,q.relatedTarget=Ae,E=q),Ae=E,T&&M)a:{for(q=T,y=M,x=0,C=q;C;C=Dr(C))x++;for(C=0,E=y;E;E=Dr(E))C++;for(;0<x-C;)q=Dr(q),x--;for(;0<C-x;)y=Dr(y),C--;for(;x--;){if(q===y||y!==null&&q===y.alternate)break a;q=Dr(q),y=Dr(y)}q=null}else q=null;T!==null&&rc(I,j,T,q,!1),M!==null&&Ae!==null&&rc(I,Ae,M,q,!0)}}e:{if(j=A?Or(A):window,T=j.nodeName&&j.nodeName.toLowerCase(),T==="select"||T==="input"&&j.type==="file")var B=Am;else if(Ll(j))if(Ml)B=Pm;else{B=km;var _=Sm}else(T=j.nodeName)&&T.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(B=jm);if(B&&(B=B(e,A))){Ol(I,B,r,N);break e}_&&_(e,j,A),e==="focusout"&&(_=j._wrapperState)&&_.controlled&&j.type==="number"&&At(j,"number",j.value)}switch(_=A?Or(A):window,e){case"focusin":(Ll(_)||_.contentEditable==="true")&&(Rr=_,Zt=A,An=null);break;case"focusout":An=Zt=Rr=null;break;case"mousedown":Xt=!0;break;case"contextmenu":case"mouseup":case"dragend":Xt=!1,Ul(I,r,N);break;case"selectionchange":if(Im)break;case"keydown":case"keyup":Ul(I,r,N)}var H;if(Gt)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else zr?Tl(e,r)&&(G="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(G="onCompositionStart");G&&(El&&r.locale!=="ko"&&(zr||G!=="onCompositionStart"?G==="onCompositionEnd"&&zr&&(H=jl()):(Ua=N,$t="value"in Ua?Ua.value:Ua.textContent,zr=!0)),_=bo(A,G),0<_.length&&(G=new wl(G,e,null,r,N),I.push({event:G,listeners:_}),H?G.data=H:(H=Dl(r),H!==null&&(G.data=H)))),(H=vm?xm(e,r):bm(e,r))&&(A=bo(A,"onBeforeInput"),0<A.length&&(N=new wl("onBeforeInput","beforeinput",null,r,N),I.push({event:N,listeners:A}),N.data=H))}ec(I,a)})}function jn(e,a,r){return{instance:e,listener:a,currentTarget:r}}function bo(e,a){for(var r=a+"Capture",o=[];e!==null;){var t=e,s=t.stateNode;t.tag===5&&s!==null&&(t=s,s=tn(e,r),s!=null&&o.unshift(jn(e,s,t)),s=tn(e,a),s!=null&&o.push(jn(e,s,t))),e=e.return}return o}function Dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rc(e,a,r,o,t){for(var s=a._reactName,d=[];r!==null&&r!==o;){var p=r,h=p.alternate,A=p.stateNode;if(h!==null&&h===o)break;p.tag===5&&A!==null&&(p=A,t?(h=tn(r,s),h!=null&&d.unshift(jn(r,h,p))):t||(h=tn(r,s),h!=null&&d.push(jn(r,h,p)))),r=r.return}d.length!==0&&e.push({event:a,listeners:d})}var Tm=/\r\n?/g,Dm=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(Tm,`
`).replace(Dm,"")}function yo(e,a,r){if(a=nc(a),nc(e)!==a&&r)throw Error(c(425))}function Co(){}var os=null,ts=null;function ss(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var is=typeof setTimeout=="function"?setTimeout:void 0,Lm=typeof clearTimeout=="function"?clearTimeout:void 0,oc=typeof Promise=="function"?Promise:void 0,Om=typeof queueMicrotask=="function"?queueMicrotask:typeof oc<"u"?function(e){return oc.resolve(null).then(e).catch(Mm)}:is;function Mm(e){setTimeout(function(){throw e})}function ls(e,a){var r=a,o=0;do{var t=r.nextSibling;if(e.removeChild(r),t&&t.nodeType===8)if(r=t.data,r==="/$"){if(o===0){e.removeChild(t),gn(a);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=t}while(r);gn(a)}function Ga(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return e;a--}else r==="/$"&&a++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),Na="__reactFiber$"+Lr,Pn="__reactProps$"+Lr,Ra="__reactContainer$"+Lr,cs="__reactEvents$"+Lr,qm="__reactListeners$"+Lr,Vm="__reactHandles$"+Lr;function dr(e){var a=e[Na];if(a)return a;for(var r=e.parentNode;r;){if(a=r[Ra]||r[Na]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=tc(e);e!==null;){if(r=e[Na])return r;e=tc(e)}return a}e=r,r=e.parentNode}return null}function Nn(e){return e=e[Na]||e[Ra],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Ao(e){return e[Pn]||null}var ds=[],Mr=-1;function Ya(e){return{current:e}}function pe(e){0>Mr||(e.current=ds[Mr],ds[Mr]=null,Mr--)}function de(e,a){Mr++,ds[Mr]=e.current,e.current=a}var Qa={},Le=Ya(Qa),We=Ya(!1),ur=Qa;function qr(e,a){var r=e.type.contextTypes;if(!r)return Qa;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===a)return o.__reactInternalMemoizedMaskedChildContext;var t={},s;for(s in r)t[s]=a[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=t),t}function Ge(e){return e=e.childContextTypes,e!=null}function So(){pe(We),pe(Le)}function sc(e,a,r){if(Le.current!==Qa)throw Error(c(168));de(Le,a),de(We,r)}function ic(e,a,r){var o=e.stateNode;if(a=a.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var t in o)if(!(t in a))throw Error(c(108,ce(e)||"Unknown",t));return O({},r,o)}function ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qa,ur=Le.current,de(Le,e),de(We,We.current),!0}function lc(e,a,r){var o=e.stateNode;if(!o)throw Error(c(169));r?(e=ic(e,a,ur),o.__reactInternalMemoizedMergedChildContext=e,pe(We),pe(Le),de(Le,e)):pe(We),de(We,r)}var Ta=null,jo=!1,us=!1;function cc(e){Ta===null?Ta=[e]:Ta.push(e)}function Bm(e){jo=!0,cc(e)}function Ka(){if(!us&&Ta!==null){us=!0;var e=0,a=le;try{var r=Ta;for(le=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Ta=null,jo=!1}catch(t){throw Ta!==null&&(Ta=Ta.slice(e+1)),ul(Tt,Ka),t}finally{le=a,us=!1}}return null}var Vr=[],Br=0,Po=null,No=0,ia=[],la=0,mr=null,Da=1,La="";function pr(e,a){Vr[Br++]=No,Vr[Br++]=Po,Po=e,No=a}function dc(e,a,r){ia[la++]=Da,ia[la++]=La,ia[la++]=mr,mr=e;var o=Da;e=La;var t=32-ha(o)-1;o&=~(1<<t),r+=1;var s=32-ha(a)+t;if(30<s){var d=t-t%5;s=(o&(1<<d)-1).toString(32),o>>=d,t-=d,Da=1<<32-ha(a)+t|r<<t|o,La=s+e}else Da=1<<s|r<<t|o,La=e}function ms(e){e.return!==null&&(pr(e,1),dc(e,1,0))}function ps(e){for(;e===Po;)Po=Vr[--Br],Vr[Br]=null,No=Vr[--Br],Vr[Br]=null;for(;e===mr;)mr=ia[--la],ia[la]=null,La=ia[--la],ia[la]=null,Da=ia[--la],ia[la]=null}var ra=null,na=null,ge=!1,xa=null;function uc(e,a){var r=ma(5,null,null,0);r.elementType="DELETED",r.stateNode=a,r.return=e,a=e.deletions,a===null?(e.deletions=[r],e.flags|=16):a.push(r)}function mc(e,a){switch(e.tag){case 5:var r=e.type;return a=a.nodeType!==1||r.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,ra=e,na=Ga(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,ra=e,na=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(r=mr!==null?{id:Da,overflow:La}:null,e.memoizedState={dehydrated:a,treeContext:r,retryLane:1073741824},r=ma(18,null,null,0),r.stateNode=a,r.return=e,e.child=r,ra=e,na=null,!0):!1;default:return!1}}function fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gs(e){if(ge){var a=na;if(a){var r=a;if(!mc(e,a)){if(fs(e))throw Error(c(418));a=Ga(r.nextSibling);var o=ra;a&&mc(e,a)?uc(o,r):(e.flags=e.flags&-4097|2,ge=!1,ra=e)}}else{if(fs(e))throw Error(c(418));e.flags=e.flags&-4097|2,ge=!1,ra=e}}}function pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ra=e}function wo(e){if(e!==ra)return!1;if(!ge)return pc(e),ge=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!ss(e.type,e.memoizedProps)),a&&(a=na)){if(fs(e))throw fc(),Error(c(418));for(;a;)uc(e,a),a=Ga(a.nextSibling)}if(pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(a===0){na=Ga(e.nextSibling);break e}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++}e=e.nextSibling}na=null}}else na=ra?Ga(e.stateNode.nextSibling):null;return!0}function fc(){for(var e=na;e;)e=Ga(e.nextSibling)}function $r(){na=ra=null,ge=!1}function hs(e){xa===null?xa=[e]:xa.push(e)}var $m=xe.ReactCurrentBatchConfig;function wn(e,a,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(c(309));var o=r.stateNode}if(!o)throw Error(c(147,e));var t=o,s=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===s?a.ref:(a=function(d){var p=t.refs;d===null?delete p[s]:p[s]=d},a._stringRef=s,a)}if(typeof e!="string")throw Error(c(284));if(!r._owner)throw Error(c(290,e))}return e}function Io(e,a){throw e=Object.prototype.toString.call(a),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function gc(e){var a=e._init;return a(e._payload)}function hc(e){function a(y,x){if(e){var C=y.deletions;C===null?(y.deletions=[x],y.flags|=16):C.push(x)}}function r(y,x){if(!e)return null;for(;x!==null;)a(y,x),x=x.sibling;return null}function o(y,x){for(y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function t(y,x){return y=or(y,x),y.index=0,y.sibling=null,y}function s(y,x,C){return y.index=C,e?(C=y.alternate,C!==null?(C=C.index,C<x?(y.flags|=2,x):C):(y.flags|=2,x)):(y.flags|=1048576,x)}function d(y){return e&&y.alternate===null&&(y.flags|=2),y}function p(y,x,C,E){return x===null||x.tag!==6?(x=ii(C,y.mode,E),x.return=y,x):(x=t(x,C),x.return=y,x)}function h(y,x,C,E){var B=C.type;return B===De?N(y,x,C.props.children,E,C.key):x!==null&&(x.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ue&&gc(B)===x.type)?(E=t(x,C.props),E.ref=wn(y,x,C),E.return=y,E):(E=Jo(C.type,C.key,C.props,null,y.mode,E),E.ref=wn(y,x,C),E.return=y,E)}function A(y,x,C,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==C.containerInfo||x.stateNode.implementation!==C.implementation?(x=li(C,y.mode,E),x.return=y,x):(x=t(x,C.children||[]),x.return=y,x)}function N(y,x,C,E,B){return x===null||x.tag!==7?(x=Cr(C,y.mode,E,B),x.return=y,x):(x=t(x,C),x.return=y,x)}function I(y,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return x=ii(""+x,y.mode,C),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case we:return C=Jo(x.type,x.key,x.props,null,y.mode,C),C.ref=wn(y,null,x),C.return=y,C;case ne:return x=li(x,y.mode,C),x.return=y,x;case Ue:var E=x._init;return I(y,E(x._payload),C)}if(rn(x)||U(x))return x=Cr(x,y.mode,C,null),x.return=y,x;Io(y,x)}return null}function j(y,x,C,E){var B=x!==null?x.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return B!==null?null:p(y,x,""+C,E);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case we:return C.key===B?h(y,x,C,E):null;case ne:return C.key===B?A(y,x,C,E):null;case Ue:return B=C._init,j(y,x,B(C._payload),E)}if(rn(C)||U(C))return B!==null?null:N(y,x,C,E,null);Io(y,C)}return null}function T(y,x,C,E,B){if(typeof E=="string"&&E!==""||typeof E=="number")return y=y.get(C)||null,p(x,y,""+E,B);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case we:return y=y.get(E.key===null?C:E.key)||null,h(x,y,E,B);case ne:return y=y.get(E.key===null?C:E.key)||null,A(x,y,E,B);case Ue:var _=E._init;return T(y,x,C,_(E._payload),B)}if(rn(E)||U(E))return y=y.get(C)||null,N(x,y,E,B,null);Io(x,E)}return null}function M(y,x,C,E){for(var B=null,_=null,H=x,G=x=0,ze=null;H!==null&&G<C.length;G++){H.index>G?(ze=H,H=null):ze=H.sibling;var se=j(y,H,C[G],E);if(se===null){H===null&&(H=ze);break}e&&H&&se.alternate===null&&a(y,H),x=s(se,x,G),_===null?B=se:_.sibling=se,_=se,H=ze}if(G===C.length)return r(y,H),ge&&pr(y,G),B;if(H===null){for(;G<C.length;G++)H=I(y,C[G],E),H!==null&&(x=s(H,x,G),_===null?B=H:_.sibling=H,_=H);return ge&&pr(y,G),B}for(H=o(y,H);G<C.length;G++)ze=T(H,y,G,C[G],E),ze!==null&&(e&&ze.alternate!==null&&H.delete(ze.key===null?G:ze.key),x=s(ze,x,G),_===null?B=ze:_.sibling=ze,_=ze);return e&&H.forEach(function(tr){return a(y,tr)}),ge&&pr(y,G),B}function q(y,x,C,E){var B=U(C);if(typeof B!="function")throw Error(c(150));if(C=B.call(C),C==null)throw Error(c(151));for(var _=B=null,H=x,G=x=0,ze=null,se=C.next();H!==null&&!se.done;G++,se=C.next()){H.index>G?(ze=H,H=null):ze=H.sibling;var tr=j(y,H,se.value,E);if(tr===null){H===null&&(H=ze);break}e&&H&&tr.alternate===null&&a(y,H),x=s(tr,x,G),_===null?B=tr:_.sibling=tr,_=tr,H=ze}if(se.done)return r(y,H),ge&&pr(y,G),B;if(H===null){for(;!se.done;G++,se=C.next())se=I(y,se.value,E),se!==null&&(x=s(se,x,G),_===null?B=se:_.sibling=se,_=se);return ge&&pr(y,G),B}for(H=o(y,H);!se.done;G++,se=C.next())se=T(H,y,G,se.value,E),se!==null&&(e&&se.alternate!==null&&H.delete(se.key===null?G:se.key),x=s(se,x,G),_===null?B=se:_.sibling=se,_=se);return e&&H.forEach(function(yp){return a(y,yp)}),ge&&pr(y,G),B}function Ae(y,x,C,E){if(typeof C=="object"&&C!==null&&C.type===De&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case we:e:{for(var B=C.key,_=x;_!==null;){if(_.key===B){if(B=C.type,B===De){if(_.tag===7){r(y,_.sibling),x=t(_,C.props.children),x.return=y,y=x;break e}}else if(_.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ue&&gc(B)===_.type){r(y,_.sibling),x=t(_,C.props),x.ref=wn(y,_,C),x.return=y,y=x;break e}r(y,_);break}else a(y,_);_=_.sibling}C.type===De?(x=Cr(C.props.children,y.mode,E,C.key),x.return=y,y=x):(E=Jo(C.type,C.key,C.props,null,y.mode,E),E.ref=wn(y,x,C),E.return=y,y=E)}return d(y);case ne:e:{for(_=C.key;x!==null;){if(x.key===_)if(x.tag===4&&x.stateNode.containerInfo===C.containerInfo&&x.stateNode.implementation===C.implementation){r(y,x.sibling),x=t(x,C.children||[]),x.return=y,y=x;break e}else{r(y,x);break}else a(y,x);x=x.sibling}x=li(C,y.mode,E),x.return=y,y=x}return d(y);case Ue:return _=C._init,Ae(y,x,_(C._payload),E)}if(rn(C))return M(y,x,C,E);if(U(C))return q(y,x,C,E);Io(y,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,x!==null&&x.tag===6?(r(y,x.sibling),x=t(x,C),x.return=y,y=x):(r(y,x),x=ii(C,y.mode,E),x.return=y,y=x),d(y)):r(y,x)}return Ae}var _r=hc(!0),vc=hc(!1),Eo=Ya(null),zo=null,Hr=null,vs=null;function xs(){vs=Hr=zo=null}function bs(e){var a=Eo.current;pe(Eo),e._currentValue=a}function ys(e,a,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,o!==null&&(o.childLanes|=a)):o!==null&&(o.childLanes&a)!==a&&(o.childLanes|=a),e===r)break;e=e.return}}function Fr(e,a){zo=e,vs=Hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&a)!==0&&(Ye=!0),e.firstContext=null)}function ca(e){var a=e._currentValue;if(vs!==e)if(e={context:e,memoizedValue:a,next:null},Hr===null){if(zo===null)throw Error(c(308));Hr=e,zo.dependencies={lanes:0,firstContext:e}}else Hr=Hr.next=e;return a}var fr=null;function Cs(e){fr===null?fr=[e]:fr.push(e)}function xc(e,a,r,o){var t=a.interleaved;return t===null?(r.next=r,Cs(a)):(r.next=t.next,t.next=r),a.interleaved=r,Oa(e,o)}function Oa(e,a){e.lanes|=a;var r=e.alternate;for(r!==null&&(r.lanes|=a),r=e,e=e.return;e!==null;)e.childLanes|=a,r=e.alternate,r!==null&&(r.childLanes|=a),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Za=!1;function As(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ma(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function Xa(e,a,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(re&2)!==0){var t=o.pending;return t===null?a.next=a:(a.next=t.next,t.next=a),o.pending=a,Oa(e,r)}return t=o.interleaved,t===null?(a.next=a,Cs(o)):(a.next=t.next,t.next=a),o.interleaved=a,Oa(e,r)}function Ro(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194240)!==0)){var o=a.lanes;o&=e.pendingLanes,r|=o,a.lanes=r,Ot(e,r)}}function yc(e,a){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var t=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?t=s=d:s=s.next=d,r=r.next}while(r!==null);s===null?t=s=a:s=s.next=a}else t=s=a;r={baseState:o.baseState,firstBaseUpdate:t,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}function To(e,a,r,o){var t=e.updateQueue;Za=!1;var s=t.firstBaseUpdate,d=t.lastBaseUpdate,p=t.shared.pending;if(p!==null){t.shared.pending=null;var h=p,A=h.next;h.next=null,d===null?s=A:d.next=A,d=h;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==d&&(p===null?N.firstBaseUpdate=A:p.next=A,N.lastBaseUpdate=h))}if(s!==null){var I=t.baseState;d=0,N=A=h=null,p=s;do{var j=p.lane,T=p.eventTime;if((o&j)===j){N!==null&&(N=N.next={eventTime:T,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var M=e,q=p;switch(j=a,T=r,q.tag){case 1:if(M=q.payload,typeof M=="function"){I=M.call(T,I,j);break e}I=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=q.payload,j=typeof M=="function"?M.call(T,I,j):M,j==null)break e;I=O({},I,j);break e;case 2:Za=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,j=t.effects,j===null?t.effects=[p]:j.push(p))}else T={eventTime:T,lane:j,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(A=N=T,h=I):N=N.next=T,d|=j;if(p=p.next,p===null){if(p=t.shared.pending,p===null)break;j=p,p=j.next,j.next=null,t.lastBaseUpdate=j,t.shared.pending=null}}while(!0);if(N===null&&(h=I),t.baseState=h,t.firstBaseUpdate=A,t.lastBaseUpdate=N,a=t.shared.interleaved,a!==null){t=a;do d|=t.lane,t=t.next;while(t!==a)}else s===null&&(t.shared.lanes=0);vr|=d,e.lanes=d,e.memoizedState=I}}function Cc(e,a,r){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var o=e[a],t=o.callback;if(t!==null){if(o.callback=null,o=r,typeof t!="function")throw Error(c(191,t));t.call(o)}}}var In={},wa=Ya(In),En=Ya(In),zn=Ya(In);function gr(e){if(e===In)throw Error(c(174));return e}function Ss(e,a){switch(de(zn,a),de(En,e),de(wa,In),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:kt(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=kt(a,e)}pe(wa),de(wa,a)}function Ur(){pe(wa),pe(En),pe(zn)}function Ac(e){gr(zn.current);var a=gr(wa.current),r=kt(a,e.type);a!==r&&(de(En,e),de(wa,r))}function ks(e){En.current===e&&(pe(wa),pe(En))}var he=Ya(0);function Do(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var js=[];function Ps(){for(var e=0;e<js.length;e++)js[e]._workInProgressVersionPrimary=null;js.length=0}var Lo=xe.ReactCurrentDispatcher,Ns=xe.ReactCurrentBatchConfig,hr=0,ve=null,Pe=null,Ie=null,Oo=!1,Rn=!1,Tn=0,_m=0;function Oe(){throw Error(c(321))}function ws(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!va(e[r],a[r]))return!1;return!0}function Is(e,a,r,o,t,s){if(hr=s,ve=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Lo.current=e===null||e.memoizedState===null?Wm:Gm,e=r(o,t),Rn){s=0;do{if(Rn=!1,Tn=0,25<=s)throw Error(c(301));s+=1,Ie=Pe=null,a.updateQueue=null,Lo.current=Ym,e=r(o,t)}while(Rn)}if(Lo.current=Vo,a=Pe!==null&&Pe.next!==null,hr=0,Ie=Pe=ve=null,Oo=!1,a)throw Error(c(300));return e}function Es(){var e=Tn!==0;return Tn=0,e}function Ia(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ve.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function da(){if(Pe===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var a=Ie===null?ve.memoizedState:Ie.next;if(a!==null)Ie=a,Pe=e;else{if(e===null)throw Error(c(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ie===null?ve.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Dn(e,a){return typeof a=="function"?a(e):a}function zs(e){var a=da(),r=a.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var o=Pe,t=o.baseQueue,s=r.pending;if(s!==null){if(t!==null){var d=t.next;t.next=s.next,s.next=d}o.baseQueue=t=s,r.pending=null}if(t!==null){s=t.next,o=o.baseState;var p=d=null,h=null,A=s;do{var N=A.lane;if((hr&N)===N)h!==null&&(h=h.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),o=A.hasEagerState?A.eagerState:e(o,A.action);else{var I={lane:N,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};h===null?(p=h=I,d=o):h=h.next=I,ve.lanes|=N,vr|=N}A=A.next}while(A!==null&&A!==s);h===null?d=o:h.next=p,va(o,a.memoizedState)||(Ye=!0),a.memoizedState=o,a.baseState=d,a.baseQueue=h,r.lastRenderedState=o}if(e=r.interleaved,e!==null){t=e;do s=t.lane,ve.lanes|=s,vr|=s,t=t.next;while(t!==e)}else t===null&&(r.lanes=0);return[a.memoizedState,r.dispatch]}function Rs(e){var a=da(),r=a.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=e;var o=r.dispatch,t=r.pending,s=a.memoizedState;if(t!==null){r.pending=null;var d=t=t.next;do s=e(s,d.action),d=d.next;while(d!==t);va(s,a.memoizedState)||(Ye=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),r.lastRenderedState=s}return[s,o]}function Sc(){}function kc(e,a){var r=ve,o=da(),t=a(),s=!va(o.memoizedState,t);if(s&&(o.memoizedState=t,Ye=!0),o=o.queue,Ts(Nc.bind(null,r,o,e),[e]),o.getSnapshot!==a||s||Ie!==null&&Ie.memoizedState.tag&1){if(r.flags|=2048,Ln(9,Pc.bind(null,r,o,t,a),void 0,null),Ee===null)throw Error(c(349));(hr&30)!==0||jc(r,a,t)}return t}function jc(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=ve.updateQueue,a===null?(a={lastEffect:null,stores:null},ve.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function Pc(e,a,r,o){a.value=r,a.getSnapshot=o,wc(a)&&Ic(e)}function Nc(e,a,r){return r(function(){wc(a)&&Ic(e)})}function wc(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!va(e,r)}catch{return!0}}function Ic(e){var a=Oa(e,1);a!==null&&Aa(a,e,1,-1)}function Ec(e){var a=Ia();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:e},a.queue=e,e=e.dispatch=Um.bind(null,ve,e),[a.memoizedState,e]}function Ln(e,a,r,o){return e={tag:e,create:a,destroy:r,deps:o,next:null},a=ve.updateQueue,a===null?(a={lastEffect:null,stores:null},ve.updateQueue=a,a.lastEffect=e.next=e):(r=a.lastEffect,r===null?a.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,a.lastEffect=e)),e}function zc(){return da().memoizedState}function Mo(e,a,r,o){var t=Ia();ve.flags|=e,t.memoizedState=Ln(1|a,r,void 0,o===void 0?null:o)}function qo(e,a,r,o){var t=da();o=o===void 0?null:o;var s=void 0;if(Pe!==null){var d=Pe.memoizedState;if(s=d.destroy,o!==null&&ws(o,d.deps)){t.memoizedState=Ln(a,r,s,o);return}}ve.flags|=e,t.memoizedState=Ln(1|a,r,s,o)}function Rc(e,a){return Mo(8390656,8,e,a)}function Ts(e,a){return qo(2048,8,e,a)}function Tc(e,a){return qo(4,2,e,a)}function Dc(e,a){return qo(4,4,e,a)}function Lc(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Oc(e,a,r){return r=r!=null?r.concat([e]):null,qo(4,4,Lc.bind(null,a,e),r)}function Ds(){}function Mc(e,a){var r=da();a=a===void 0?null:a;var o=r.memoizedState;return o!==null&&a!==null&&ws(a,o[1])?o[0]:(r.memoizedState=[e,a],e)}function qc(e,a){var r=da();a=a===void 0?null:a;var o=r.memoizedState;return o!==null&&a!==null&&ws(a,o[1])?o[0]:(e=e(),r.memoizedState=[e,a],e)}function Vc(e,a,r){return(hr&21)===0?(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=r):(va(r,a)||(r=gl(),ve.lanes|=r,vr|=r,e.baseState=!0),a)}function Hm(e,a){var r=le;le=r!==0&&4>r?r:4,e(!0);var o=Ns.transition;Ns.transition={};try{e(!1),a()}finally{le=r,Ns.transition=o}}function Bc(){return da().memoizedState}function Fm(e,a,r){var o=rr(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},$c(e))_c(a,r);else if(r=xc(e,a,r,o),r!==null){var t=He();Aa(r,e,o,t),Hc(r,a,o)}}function Um(e,a,r){var o=rr(e),t={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if($c(e))_c(a,t);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var d=a.lastRenderedState,p=s(d,r);if(t.hasEagerState=!0,t.eagerState=p,va(p,d)){var h=a.interleaved;h===null?(t.next=t,Cs(a)):(t.next=h.next,h.next=t),a.interleaved=t;return}}catch{}finally{}r=xc(e,a,t,o),r!==null&&(t=He(),Aa(r,e,o,t),Hc(r,a,o))}}function $c(e){var a=e.alternate;return e===ve||a!==null&&a===ve}function _c(e,a){Rn=Oo=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function Hc(e,a,r){if((r&4194240)!==0){var o=a.lanes;o&=e.pendingLanes,r|=o,a.lanes=r,Ot(e,r)}}var Vo={readContext:ca,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Wm={readContext:ca,useCallback:function(e,a){return Ia().memoizedState=[e,a===void 0?null:a],e},useContext:ca,useEffect:Rc,useImperativeHandle:function(e,a,r){return r=r!=null?r.concat([e]):null,Mo(4194308,4,Lc.bind(null,a,e),r)},useLayoutEffect:function(e,a){return Mo(4194308,4,e,a)},useInsertionEffect:function(e,a){return Mo(4,2,e,a)},useMemo:function(e,a){var r=Ia();return a=a===void 0?null:a,e=e(),r.memoizedState=[e,a],e},useReducer:function(e,a,r){var o=Ia();return a=r!==void 0?r(a):a,o.memoizedState=o.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},o.queue=e,e=e.dispatch=Fm.bind(null,ve,e),[o.memoizedState,e]},useRef:function(e){var a=Ia();return e={current:e},a.memoizedState=e},useState:Ec,useDebugValue:Ds,useDeferredValue:function(e){return Ia().memoizedState=e},useTransition:function(){var e=Ec(!1),a=e[0];return e=Hm.bind(null,e[1]),Ia().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,r){var o=ve,t=Ia();if(ge){if(r===void 0)throw Error(c(407));r=r()}else{if(r=a(),Ee===null)throw Error(c(349));(hr&30)!==0||jc(o,a,r)}t.memoizedState=r;var s={value:r,getSnapshot:a};return t.queue=s,Rc(Nc.bind(null,o,s,e),[e]),o.flags|=2048,Ln(9,Pc.bind(null,o,s,r,a),void 0,null),r},useId:function(){var e=Ia(),a=Ee.identifierPrefix;if(ge){var r=La,o=Da;r=(o&~(1<<32-ha(o)-1)).toString(32)+r,a=":"+a+"R"+r,r=Tn++,0<r&&(a+="H"+r.toString(32)),a+=":"}else r=_m++,a=":"+a+"r"+r.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},Gm={readContext:ca,useCallback:Mc,useContext:ca,useEffect:Ts,useImperativeHandle:Oc,useInsertionEffect:Tc,useLayoutEffect:Dc,useMemo:qc,useReducer:zs,useRef:zc,useState:function(){return zs(Dn)},useDebugValue:Ds,useDeferredValue:function(e){var a=da();return Vc(a,Pe.memoizedState,e)},useTransition:function(){var e=zs(Dn)[0],a=da().memoizedState;return[e,a]},useMutableSource:Sc,useSyncExternalStore:kc,useId:Bc,unstable_isNewReconciler:!1},Ym={readContext:ca,useCallback:Mc,useContext:ca,useEffect:Ts,useImperativeHandle:Oc,useInsertionEffect:Tc,useLayoutEffect:Dc,useMemo:qc,useReducer:Rs,useRef:zc,useState:function(){return Rs(Dn)},useDebugValue:Ds,useDeferredValue:function(e){var a=da();return Pe===null?a.memoizedState=e:Vc(a,Pe.memoizedState,e)},useTransition:function(){var e=Rs(Dn)[0],a=da().memoizedState;return[e,a]},useMutableSource:Sc,useSyncExternalStore:kc,useId:Bc,unstable_isNewReconciler:!1};function ba(e,a){if(e&&e.defaultProps){a=O({},a),e=e.defaultProps;for(var r in e)a[r]===void 0&&(a[r]=e[r]);return a}return a}function Ls(e,a,r,o){a=e.memoizedState,r=r(o,a),r=r==null?a:O({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Bo={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,a,r){e=e._reactInternals;var o=He(),t=rr(e),s=Ma(o,t);s.payload=a,r!=null&&(s.callback=r),a=Xa(e,s,t),a!==null&&(Aa(a,e,t,o),Ro(a,e,t))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var o=He(),t=rr(e),s=Ma(o,t);s.tag=1,s.payload=a,r!=null&&(s.callback=r),a=Xa(e,s,t),a!==null&&(Aa(a,e,t,o),Ro(a,e,t))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=He(),o=rr(e),t=Ma(r,o);t.tag=2,a!=null&&(t.callback=a),a=Xa(e,t,o),a!==null&&(Aa(a,e,o,r),Ro(a,e,o))}};function Fc(e,a,r,o,t,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,d):a.prototype&&a.prototype.isPureReactComponent?!Cn(r,o)||!Cn(t,s):!0}function Uc(e,a,r){var o=!1,t=Qa,s=a.contextType;return typeof s=="object"&&s!==null?s=ca(s):(t=Ge(a)?ur:Le.current,o=a.contextTypes,s=(o=o!=null)?qr(e,t):Qa),a=new a(r,s),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Bo,e.stateNode=a,a._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),a}function Wc(e,a,r,o){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,o),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,o),a.state!==e&&Bo.enqueueReplaceState(a,a.state,null)}function Os(e,a,r,o){var t=e.stateNode;t.props=r,t.state=e.memoizedState,t.refs={},As(e);var s=a.contextType;typeof s=="object"&&s!==null?t.context=ca(s):(s=Ge(a)?ur:Le.current,t.context=qr(e,s)),t.state=e.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Ls(e,a,s,r),t.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(a=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),a!==t.state&&Bo.enqueueReplaceState(t,t.state,null),To(e,r,t,o),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,a){try{var r="",o=a;do r+=oe(o),o=o.return;while(o);var t=r}catch(s){t=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:a,stack:t,digest:null}}function Ms(e,a,r){return{value:e,source:null,stack:r??null,digest:a??null}}function qs(e,a){try{console.error(a.value)}catch(r){setTimeout(function(){throw r})}}var Qm=typeof WeakMap=="function"?WeakMap:Map;function Gc(e,a,r){r=Ma(-1,r),r.tag=3,r.payload={element:null};var o=a.value;return r.callback=function(){Go||(Go=!0,Js=o),qs(e,a)},r}function Yc(e,a,r){r=Ma(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var t=a.value;r.payload=function(){return o(t)},r.callback=function(){qs(e,a)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){qs(e,a),typeof o!="function"&&(er===null?er=new Set([this]):er.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})}),r}function Qc(e,a,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Qm;var t=new Set;o.set(a,t)}else t=o.get(a),t===void 0&&(t=new Set,o.set(a,t));t.has(r)||(t.add(r),e=cp.bind(null,e,a,r),a.then(e,e))}function Kc(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Zc(e,a,r,o,t){return(e.mode&1)===0?(e===a?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(a=Ma(-1,1),a.tag=2,Xa(r,a,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=t,e)}var Km=xe.ReactCurrentOwner,Ye=!1;function _e(e,a,r,o){a.child=e===null?vc(a,null,r,o):_r(a,e.child,r,o)}function Xc(e,a,r,o,t){r=r.render;var s=a.ref;return Fr(a,t),o=Is(e,a,r,o,s,t),r=Es(),e!==null&&!Ye?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t,qa(e,a,t)):(ge&&r&&ms(a),a.flags|=1,_e(e,a,o,t),a.child)}function Jc(e,a,r,o,t){if(e===null){var s=r.type;return typeof s=="function"&&!si(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(a.tag=15,a.type=s,ed(e,a,s,o,t)):(e=Jo(r.type,null,o,a,a.mode,t),e.ref=a.ref,e.return=a,a.child=e)}if(s=e.child,(e.lanes&t)===0){var d=s.memoizedProps;if(r=r.compare,r=r!==null?r:Cn,r(d,o)&&e.ref===a.ref)return qa(e,a,t)}return a.flags|=1,e=or(s,o),e.ref=a.ref,e.return=a,a.child=e}function ed(e,a,r,o,t){if(e!==null){var s=e.memoizedProps;if(Cn(s,o)&&e.ref===a.ref)if(Ye=!1,a.pendingProps=o=s,(e.lanes&t)!==0)(e.flags&131072)!==0&&(Ye=!0);else return a.lanes=e.lanes,qa(e,a,t)}return Vs(e,a,r,o,t)}function ad(e,a,r){var o=a.pendingProps,t=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Yr,oa),oa|=r;else{if((r&1073741824)===0)return e=s!==null?s.baseLanes|r:r,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,de(Yr,oa),oa|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:r,de(Yr,oa),oa|=o}else s!==null?(o=s.baseLanes|r,a.memoizedState=null):o=r,de(Yr,oa),oa|=o;return _e(e,a,t,r),a.child}function rd(e,a){var r=a.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(a.flags|=512,a.flags|=2097152)}function Vs(e,a,r,o,t){var s=Ge(r)?ur:Le.current;return s=qr(a,s),Fr(a,t),r=Is(e,a,r,o,s,t),o=Es(),e!==null&&!Ye?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t,qa(e,a,t)):(ge&&o&&ms(a),a.flags|=1,_e(e,a,r,t),a.child)}function nd(e,a,r,o,t){if(Ge(r)){var s=!0;ko(a)}else s=!1;if(Fr(a,t),a.stateNode===null)_o(e,a),Uc(a,r,o),Os(a,r,o,t),o=!0;else if(e===null){var d=a.stateNode,p=a.memoizedProps;d.props=p;var h=d.context,A=r.contextType;typeof A=="object"&&A!==null?A=ca(A):(A=Ge(r)?ur:Le.current,A=qr(a,A));var N=r.getDerivedStateFromProps,I=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function";I||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||h!==A)&&Wc(a,d,o,A),Za=!1;var j=a.memoizedState;d.state=j,To(a,o,d,t),h=a.memoizedState,p!==o||j!==h||We.current||Za?(typeof N=="function"&&(Ls(a,r,N,o),h=a.memoizedState),(p=Za||Fc(a,r,p,o,j,h,A))?(I||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=o,a.memoizedState=h),d.props=o,d.state=h,d.context=A,o=p):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),o=!1)}else{d=a.stateNode,bc(e,a),p=a.memoizedProps,A=a.type===a.elementType?p:ba(a.type,p),d.props=A,I=a.pendingProps,j=d.context,h=r.contextType,typeof h=="object"&&h!==null?h=ca(h):(h=Ge(r)?ur:Le.current,h=qr(a,h));var T=r.getDerivedStateFromProps;(N=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==I||j!==h)&&Wc(a,d,o,h),Za=!1,j=a.memoizedState,d.state=j,To(a,o,d,t);var M=a.memoizedState;p!==I||j!==M||We.current||Za?(typeof T=="function"&&(Ls(a,r,T,o),M=a.memoizedState),(A=Za||Fc(a,r,A,o,j,M,h)||!1)?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,M,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,M,h)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(a.flags|=1024),a.memoizedProps=o,a.memoizedState=M),d.props=o,d.state=M,d.context=h,o=A):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(a.flags|=1024),o=!1)}return Bs(e,a,r,o,s,t)}function Bs(e,a,r,o,t,s){rd(e,a);var d=(a.flags&128)!==0;if(!o&&!d)return t&&lc(a,r,!1),qa(e,a,s);o=a.stateNode,Km.current=a;var p=d&&typeof r.getDerivedStateFromError!="function"?null:o.render();return a.flags|=1,e!==null&&d?(a.child=_r(a,e.child,null,s),a.child=_r(a,null,p,s)):_e(e,a,p,s),a.memoizedState=o.state,t&&lc(a,r,!0),a.child}function od(e){var a=e.stateNode;a.pendingContext?sc(e,a.pendingContext,a.pendingContext!==a.context):a.context&&sc(e,a.context,!1),Ss(e,a.containerInfo)}function td(e,a,r,o,t){return $r(),hs(t),a.flags|=256,_e(e,a,r,o),a.child}var $s={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function sd(e,a,r){var o=a.pendingProps,t=he.current,s=!1,d=(a.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(t&2)!==0),p?(s=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),de(he,t&1),e===null)return gs(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((a.mode&1)===0?a.lanes=1:e.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(d=o.children,e=o.fallback,s?(o=a.mode,s=a.child,d={mode:"hidden",children:d},(o&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=et(d,o,0,null),e=Cr(e,o,r,null),s.return=a,e.return=a,s.sibling=e,a.child=s,a.child.memoizedState=_s(r),a.memoizedState=$s,e):Hs(a,d));if(t=e.memoizedState,t!==null&&(p=t.dehydrated,p!==null))return Zm(e,a,d,o,p,t,r);if(s){s=o.fallback,d=a.mode,t=e.child,p=t.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&a.child!==t?(o=a.child,o.childLanes=0,o.pendingProps=h,a.deletions=null):(o=or(t,h),o.subtreeFlags=t.subtreeFlags&14680064),p!==null?s=or(p,s):(s=Cr(s,d,r,null),s.flags|=2),s.return=a,o.return=a,o.sibling=s,a.child=o,o=s,s=a.child,d=e.child.memoizedState,d=d===null?_s(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~r,a.memoizedState=$s,o}return s=e.child,e=s.sibling,o=or(s,{mode:"visible",children:o.children}),(a.mode&1)===0&&(o.lanes=r),o.return=a,o.sibling=null,e!==null&&(r=a.deletions,r===null?(a.deletions=[e],a.flags|=16):r.push(e)),a.child=o,a.memoizedState=null,o}function Hs(e,a){return a=et({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function $o(e,a,r,o){return o!==null&&hs(o),_r(a,e.child,null,r),e=Hs(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Zm(e,a,r,o,t,s,d){if(r)return a.flags&256?(a.flags&=-257,o=Ms(Error(c(422))),$o(e,a,d,o)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(s=o.fallback,t=a.mode,o=et({mode:"visible",children:o.children},t,0,null),s=Cr(s,t,d,null),s.flags|=2,o.return=a,s.return=a,o.sibling=s,a.child=o,(a.mode&1)!==0&&_r(a,e.child,null,d),a.child.memoizedState=_s(d),a.memoizedState=$s,s);if((a.mode&1)===0)return $o(e,a,d,null);if(t.data==="$!"){if(o=t.nextSibling&&t.nextSibling.dataset,o)var p=o.dgst;return o=p,s=Error(c(419)),o=Ms(s,o,void 0),$o(e,a,d,o)}if(p=(d&e.childLanes)!==0,Ye||p){if(o=Ee,o!==null){switch(d&-d){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=(t&(o.suspendedLanes|d))!==0?0:t,t!==0&&t!==s.retryLane&&(s.retryLane=t,Oa(e,t),Aa(o,e,t,-1))}return ti(),o=Ms(Error(c(421))),$o(e,a,d,o)}return t.data==="$?"?(a.flags|=128,a.child=e.child,a=dp.bind(null,e),t._reactRetry=a,null):(e=s.treeContext,na=Ga(t.nextSibling),ra=a,ge=!0,xa=null,e!==null&&(ia[la++]=Da,ia[la++]=La,ia[la++]=mr,Da=e.id,La=e.overflow,mr=a),a=Hs(a,o.children),a.flags|=4096,a)}function id(e,a,r){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a),ys(e.return,a,r)}function Fs(e,a,r,o,t){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:t}:(s.isBackwards=a,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=r,s.tailMode=t)}function ld(e,a,r){var o=a.pendingProps,t=o.revealOrder,s=o.tail;if(_e(e,a,o.children,r),o=he.current,(o&2)!==0)o=o&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,r,a);else if(e.tag===19)id(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(de(he,o),(a.mode&1)===0)a.memoizedState=null;else switch(t){case"forwards":for(r=a.child,t=null;r!==null;)e=r.alternate,e!==null&&Do(e)===null&&(t=r),r=r.sibling;r=t,r===null?(t=a.child,a.child=null):(t=r.sibling,r.sibling=null),Fs(a,!1,t,r,s);break;case"backwards":for(r=null,t=a.child,a.child=null;t!==null;){if(e=t.alternate,e!==null&&Do(e)===null){a.child=t;break}e=t.sibling,t.sibling=r,r=t,t=e}Fs(a,!0,r,null,s);break;case"together":Fs(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function _o(e,a){(a.mode&1)===0&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function qa(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),vr|=a.lanes,(r&a.childLanes)===0)return null;if(e!==null&&a.child!==e.child)throw Error(c(153));if(a.child!==null){for(e=a.child,r=or(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=or(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function Xm(e,a,r){switch(a.tag){case 3:od(a),$r();break;case 5:Ac(a);break;case 1:Ge(a.type)&&ko(a);break;case 4:Ss(a,a.stateNode.containerInfo);break;case 10:var o=a.type._context,t=a.memoizedProps.value;de(Eo,o._currentValue),o._currentValue=t;break;case 13:if(o=a.memoizedState,o!==null)return o.dehydrated!==null?(de(he,he.current&1),a.flags|=128,null):(r&a.child.childLanes)!==0?sd(e,a,r):(de(he,he.current&1),e=qa(e,a,r),e!==null?e.sibling:null);de(he,he.current&1);break;case 19:if(o=(r&a.childLanes)!==0,(e.flags&128)!==0){if(o)return ld(e,a,r);a.flags|=128}if(t=a.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),de(he,he.current),o)break;return null;case 22:case 23:return a.lanes=0,ad(e,a,r)}return qa(e,a,r)}var cd,Us,dd,ud;cd=function(e,a){for(var r=a.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break;for(;r.sibling===null;){if(r.return===null||r.return===a)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Us=function(){},dd=function(e,a,r,o){var t=e.memoizedProps;if(t!==o){e=a.stateNode,gr(wa.current);var s=null;switch(r){case"input":t=yt(e,t),o=yt(e,o),s=[];break;case"select":t=O({},t,{value:void 0}),o=O({},o,{value:void 0}),s=[];break;case"textarea":t=St(e,t),o=St(e,o),s=[];break;default:typeof t.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Co)}jt(r,o);var d;r=null;for(A in t)if(!o.hasOwnProperty(A)&&t.hasOwnProperty(A)&&t[A]!=null)if(A==="style"){var p=t[A];for(d in p)p.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(u.hasOwnProperty(A)?s||(s=[]):(s=s||[]).push(A,null));for(A in o){var h=o[A];if(p=t?.[A],o.hasOwnProperty(A)&&h!==p&&(h!=null||p!=null))if(A==="style")if(p){for(d in p)!p.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in h)h.hasOwnProperty(d)&&p[d]!==h[d]&&(r||(r={}),r[d]=h[d])}else r||(s||(s=[]),s.push(A,r)),r=h;else A==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,p=p?p.__html:void 0,h!=null&&p!==h&&(s=s||[]).push(A,h)):A==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(A,""+h):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(u.hasOwnProperty(A)?(h!=null&&A==="onScroll"&&me("scroll",e),s||p===h||(s=[])):(s=s||[]).push(A,h))}r&&(s=s||[]).push("style",r);var A=s;(a.updateQueue=A)&&(a.flags|=4)}},ud=function(e,a,r,o){r!==o&&(a.flags|=4)};function On(e,a){if(!ge)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Me(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(a)for(var t=e.child;t!==null;)r|=t.lanes|t.childLanes,o|=t.subtreeFlags&14680064,o|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)r|=t.lanes|t.childLanes,o|=t.subtreeFlags,o|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=o,e.childLanes=r,a}function Jm(e,a,r){var o=a.pendingProps;switch(ps(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(a),null;case 1:return Ge(a.type)&&So(),Me(a),null;case 3:return o=a.stateNode,Ur(),pe(We),pe(Le),Ps(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(wo(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xa!==null&&(ri(xa),xa=null))),Us(e,a),Me(a),null;case 5:ks(a);var t=gr(zn.current);if(r=a.type,e!==null&&a.stateNode!=null)dd(e,a,r,o,t),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!o){if(a.stateNode===null)throw Error(c(166));return Me(a),null}if(e=gr(wa.current),wo(a)){o=a.stateNode,r=a.type;var s=a.memoizedProps;switch(o[Na]=a,o[Pn]=s,e=(a.mode&1)!==0,r){case"dialog":me("cancel",o),me("close",o);break;case"iframe":case"object":case"embed":me("load",o);break;case"video":case"audio":for(t=0;t<Sn.length;t++)me(Sn[t],o);break;case"source":me("error",o);break;case"img":case"image":case"link":me("error",o),me("load",o);break;case"details":me("toggle",o);break;case"input":Ui(o,s),me("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},me("invalid",o);break;case"textarea":Yi(o,s),me("invalid",o)}jt(r,s),t=null;for(var d in s)if(s.hasOwnProperty(d)){var p=s[d];d==="children"?typeof p=="string"?o.textContent!==p&&(s.suppressHydrationWarning!==!0&&yo(o.textContent,p,e),t=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&yo(o.textContent,p,e),t=["children",""+p]):u.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&me("scroll",o)}switch(r){case"input":Kn(o),Gi(o,s,!0);break;case"textarea":Kn(o),Ki(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Co)}o=t,a.updateQueue=o,o!==null&&(a.flags|=4)}else{d=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zi(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(r,{is:o.is}):(e=d.createElement(r),r==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,r),e[Na]=a,e[Pn]=o,cd(e,a,!1,!1),a.stateNode=e;e:{switch(d=Pt(r,o),r){case"dialog":me("cancel",e),me("close",e),t=o;break;case"iframe":case"object":case"embed":me("load",e),t=o;break;case"video":case"audio":for(t=0;t<Sn.length;t++)me(Sn[t],e);t=o;break;case"source":me("error",e),t=o;break;case"img":case"image":case"link":me("error",e),me("load",e),t=o;break;case"details":me("toggle",e),t=o;break;case"input":Ui(e,o),t=yt(e,o),me("invalid",e);break;case"option":t=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},t=O({},o,{value:void 0}),me("invalid",e);break;case"textarea":Yi(e,o),t=St(e,o),me("invalid",e);break;default:t=o}jt(r,t),p=t;for(s in p)if(p.hasOwnProperty(s)){var h=p[s];s==="style"?el(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Xi(e,h)):s==="children"?typeof h=="string"?(r!=="textarea"||h!=="")&&nn(e,h):typeof h=="number"&&nn(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(u.hasOwnProperty(s)?h!=null&&s==="onScroll"&&me("scroll",e):h!=null&&$e(e,s,h,d))}switch(r){case"input":Kn(e),Gi(e,o,!1);break;case"textarea":Kn(e),Ki(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ie(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Pr(e,!!o.multiple,s,!1):o.defaultValue!=null&&Pr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=Co)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Me(a),null;case 6:if(e&&a.stateNode!=null)ud(e,a,e.memoizedProps,o);else{if(typeof o!="string"&&a.stateNode===null)throw Error(c(166));if(r=gr(zn.current),gr(wa.current),wo(a)){if(o=a.stateNode,r=a.memoizedProps,o[Na]=a,(s=o.nodeValue!==r)&&(e=ra,e!==null))switch(e.tag){case 3:yo(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(o.nodeValue,r,(e.mode&1)!==0)}s&&(a.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Na]=a,a.stateNode=o}return Me(a),null;case 13:if(pe(he),o=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&na!==null&&(a.mode&1)!==0&&(a.flags&128)===0)fc(),$r(),a.flags|=98560,s=!1;else if(s=wo(a),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=a.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[Na]=a}else $r(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Me(a),s=!1}else xa!==null&&(ri(xa),xa=null),s=!0;if(!s)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=r,a):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(a.child.flags|=8192,(a.mode&1)!==0&&(e===null||(he.current&1)!==0?Ne===0&&(Ne=3):ti())),a.updateQueue!==null&&(a.flags|=4),Me(a),null);case 4:return Ur(),Us(e,a),e===null&&kn(a.stateNode.containerInfo),Me(a),null;case 10:return bs(a.type._context),Me(a),null;case 17:return Ge(a.type)&&So(),Me(a),null;case 19:if(pe(he),s=a.memoizedState,s===null)return Me(a),null;if(o=(a.flags&128)!==0,d=s.rendering,d===null)if(o)On(s,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=Do(e),d!==null){for(a.flags|=128,On(s,!1),o=d.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),a.subtreeFlags=0,o=r,r=a.child;r!==null;)s=r,e=o,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(he,he.current&1|2),a.child}e=e.sibling}s.tail!==null&&Ce()>Qr&&(a.flags|=128,o=!0,On(s,!1),a.lanes=4194304)}else{if(!o)if(e=Do(d),e!==null){if(a.flags|=128,o=!0,r=e.updateQueue,r!==null&&(a.updateQueue=r,a.flags|=4),On(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!ge)return Me(a),null}else 2*Ce()-s.renderingStartTime>Qr&&r!==1073741824&&(a.flags|=128,o=!0,On(s,!1),a.lanes=4194304);s.isBackwards?(d.sibling=a.child,a.child=d):(r=s.last,r!==null?r.sibling=d:a.child=d,s.last=d)}return s.tail!==null?(a=s.tail,s.rendering=a,s.tail=a.sibling,s.renderingStartTime=Ce(),a.sibling=null,r=he.current,de(he,o?r&1|2:r&1),a):(Me(a),null);case 22:case 23:return oi(),o=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(a.flags|=8192),o&&(a.mode&1)!==0?(oa&1073741824)!==0&&(Me(a),a.subtreeFlags&6&&(a.flags|=8192)):Me(a),null;case 24:return null;case 25:return null}throw Error(c(156,a.tag))}function ep(e,a){switch(ps(a),a.tag){case 1:return Ge(a.type)&&So(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ur(),pe(We),pe(Le),Ps(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 5:return ks(a),null;case 13:if(pe(he),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(c(340));$r()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return pe(he),null;case 4:return Ur(),null;case 10:return bs(a.type._context),null;case 22:case 23:return oi(),null;case 24:return null;default:return null}}var Ho=!1,qe=!1,ap=typeof WeakSet=="function"?WeakSet:Set,L=null;function Gr(e,a){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){ye(e,a,o)}else r.current=null}function Ws(e,a,r){try{r()}catch(o){ye(e,a,o)}}var md=!1;function rp(e,a){if(os=lo,e=Fl(),Kt(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var t=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var d=0,p=-1,h=-1,A=0,N=0,I=e,j=null;a:for(;;){for(var T;I!==r||t!==0&&I.nodeType!==3||(p=d+t),I!==s||o!==0&&I.nodeType!==3||(h=d+o),I.nodeType===3&&(d+=I.nodeValue.length),(T=I.firstChild)!==null;)j=I,I=T;for(;;){if(I===e)break a;if(j===r&&++A===t&&(p=d),j===s&&++N===o&&(h=d),(T=I.nextSibling)!==null)break;I=j,j=I.parentNode}I=T}r=p===-1||h===-1?null:{start:p,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(ts={focusedElem:e,selectionRange:r},lo=!1,L=a;L!==null;)if(a=L,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,L=e;else for(;L!==null;){a=L;try{var M=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var q=M.memoizedProps,Ae=M.memoizedState,y=a.stateNode,x=y.getSnapshotBeforeUpdate(a.elementType===a.type?q:ba(a.type,q),Ae);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var C=a.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(E){ye(a,a.return,E)}if(e=a.sibling,e!==null){e.return=a.return,L=e;break}L=a.return}return M=md,md=!1,M}function Mn(e,a,r){var o=a.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var t=o=o.next;do{if((t.tag&e)===e){var s=t.destroy;t.destroy=void 0,s!==void 0&&Ws(a,r,s)}t=t.next}while(t!==o)}}function Fo(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==a)}}function Gs(e){var a=e.ref;if(a!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof a=="function"?a(e):a.current=e}}function pd(e){var a=e.alternate;a!==null&&(e.alternate=null,pd(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[Na],delete a[Pn],delete a[cs],delete a[qm],delete a[Vm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fd(e){return e.tag===5||e.tag===3||e.tag===4}function gd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ys(e,a,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,a?r.nodeType===8?r.parentNode.insertBefore(e,a):r.insertBefore(e,a):(r.nodeType===8?(a=r.parentNode,a.insertBefore(e,r)):(a=r,a.appendChild(e)),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Co));else if(o!==4&&(e=e.child,e!==null))for(Ys(e,a,r),e=e.sibling;e!==null;)Ys(e,a,r),e=e.sibling}function Qs(e,a,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Qs(e,a,r),e=e.sibling;e!==null;)Qs(e,a,r),e=e.sibling}var Re=null,ya=!1;function Ja(e,a,r){for(r=r.child;r!==null;)hd(e,a,r),r=r.sibling}function hd(e,a,r){if(Pa&&typeof Pa.onCommitFiberUnmount=="function")try{Pa.onCommitFiberUnmount(ro,r)}catch{}switch(r.tag){case 5:qe||Gr(r,a);case 6:var o=Re,t=ya;Re=null,Ja(e,a,r),Re=o,ya=t,Re!==null&&(ya?(e=Re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Re.removeChild(r.stateNode));break;case 18:Re!==null&&(ya?(e=Re,r=r.stateNode,e.nodeType===8?ls(e.parentNode,r):e.nodeType===1&&ls(e,r),gn(e)):ls(Re,r.stateNode));break;case 4:o=Re,t=ya,Re=r.stateNode.containerInfo,ya=!0,Ja(e,a,r),Re=o,ya=t;break;case 0:case 11:case 14:case 15:if(!qe&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){t=o=o.next;do{var s=t,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&Ws(r,a,d),t=t.next}while(t!==o)}Ja(e,a,r);break;case 1:if(!qe&&(Gr(r,a),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(p){ye(r,a,p)}Ja(e,a,r);break;case 21:Ja(e,a,r);break;case 22:r.mode&1?(qe=(o=qe)||r.memoizedState!==null,Ja(e,a,r),qe=o):Ja(e,a,r);break;default:Ja(e,a,r)}}function vd(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new ap),a.forEach(function(o){var t=up.bind(null,e,o);r.has(o)||(r.add(o),o.then(t,t))})}}function Ca(e,a){var r=a.deletions;if(r!==null)for(var o=0;o<r.length;o++){var t=r[o];try{var s=e,d=a,p=d;e:for(;p!==null;){switch(p.tag){case 5:Re=p.stateNode,ya=!1;break e;case 3:Re=p.stateNode.containerInfo,ya=!0;break e;case 4:Re=p.stateNode.containerInfo,ya=!0;break e}p=p.return}if(Re===null)throw Error(c(160));hd(s,d,t),Re=null,ya=!1;var h=t.alternate;h!==null&&(h.return=null),t.return=null}catch(A){ye(t,a,A)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)xd(a,e),a=a.sibling}function xd(e,a){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ca(a,e),Ea(e),o&4){try{Mn(3,e,e.return),Fo(3,e)}catch(q){ye(e,e.return,q)}try{Mn(5,e,e.return)}catch(q){ye(e,e.return,q)}}break;case 1:Ca(a,e),Ea(e),o&512&&r!==null&&Gr(r,r.return);break;case 5:if(Ca(a,e),Ea(e),o&512&&r!==null&&Gr(r,r.return),e.flags&32){var t=e.stateNode;try{nn(t,"")}catch(q){ye(e,e.return,q)}}if(o&4&&(t=e.stateNode,t!=null)){var s=e.memoizedProps,d=r!==null?r.memoizedProps:s,p=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&Wi(t,s),Pt(p,d);var A=Pt(p,s);for(d=0;d<h.length;d+=2){var N=h[d],I=h[d+1];N==="style"?el(t,I):N==="dangerouslySetInnerHTML"?Xi(t,I):N==="children"?nn(t,I):$e(t,N,I,A)}switch(p){case"input":Ct(t,s);break;case"textarea":Qi(t,s);break;case"select":var j=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Pr(t,!!s.multiple,T,!1):j!==!!s.multiple&&(s.defaultValue!=null?Pr(t,!!s.multiple,s.defaultValue,!0):Pr(t,!!s.multiple,s.multiple?[]:"",!1))}t[Pn]=s}catch(q){ye(e,e.return,q)}}break;case 6:if(Ca(a,e),Ea(e),o&4){if(e.stateNode===null)throw Error(c(162));t=e.stateNode,s=e.memoizedProps;try{t.nodeValue=s}catch(q){ye(e,e.return,q)}}break;case 3:if(Ca(a,e),Ea(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{gn(a.containerInfo)}catch(q){ye(e,e.return,q)}break;case 4:Ca(a,e),Ea(e);break;case 13:Ca(a,e),Ea(e),t=e.child,t.flags&8192&&(s=t.memoizedState!==null,t.stateNode.isHidden=s,!s||t.alternate!==null&&t.alternate.memoizedState!==null||(Xs=Ce())),o&4&&vd(e);break;case 22:if(N=r!==null&&r.memoizedState!==null,e.mode&1?(qe=(A=qe)||N,Ca(a,e),qe=A):Ca(a,e),Ea(e),o&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!N&&(e.mode&1)!==0)for(L=e,N=e.child;N!==null;){for(I=L=N;L!==null;){switch(j=L,T=j.child,j.tag){case 0:case 11:case 14:case 15:Mn(4,j,j.return);break;case 1:Gr(j,j.return);var M=j.stateNode;if(typeof M.componentWillUnmount=="function"){o=j,r=j.return;try{a=o,M.props=a.memoizedProps,M.state=a.memoizedState,M.componentWillUnmount()}catch(q){ye(o,r,q)}}break;case 5:Gr(j,j.return);break;case 22:if(j.memoizedState!==null){Cd(I);continue}}T!==null?(T.return=j,L=T):Cd(I)}N=N.sibling}e:for(N=null,I=e;;){if(I.tag===5){if(N===null){N=I;try{t=I.stateNode,A?(s=t.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=I.stateNode,h=I.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,p.style.display=Ji("display",d))}catch(q){ye(e,e.return,q)}}}else if(I.tag===6){if(N===null)try{I.stateNode.nodeValue=A?"":I.memoizedProps}catch(q){ye(e,e.return,q)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===e)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===e)break e;for(;I.sibling===null;){if(I.return===null||I.return===e)break e;N===I&&(N=null),I=I.return}N===I&&(N=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:Ca(a,e),Ea(e),o&4&&vd(e);break;case 21:break;default:Ca(a,e),Ea(e)}}function Ea(e){var a=e.flags;if(a&2){try{e:{for(var r=e.return;r!==null;){if(fd(r)){var o=r;break e}r=r.return}throw Error(c(160))}switch(o.tag){case 5:var t=o.stateNode;o.flags&32&&(nn(t,""),o.flags&=-33);var s=gd(e);Qs(e,s,t);break;case 3:case 4:var d=o.stateNode.containerInfo,p=gd(e);Ys(e,p,d);break;default:throw Error(c(161))}}catch(h){ye(e,e.return,h)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function np(e,a,r){L=e,bd(e)}function bd(e,a,r){for(var o=(e.mode&1)!==0;L!==null;){var t=L,s=t.child;if(t.tag===22&&o){var d=t.memoizedState!==null||Ho;if(!d){var p=t.alternate,h=p!==null&&p.memoizedState!==null||qe;p=Ho;var A=qe;if(Ho=d,(qe=h)&&!A)for(L=t;L!==null;)d=L,h=d.child,d.tag===22&&d.memoizedState!==null?Ad(t):h!==null?(h.return=d,L=h):Ad(t);for(;s!==null;)L=s,bd(s),s=s.sibling;L=t,Ho=p,qe=A}yd(e)}else(t.subtreeFlags&8772)!==0&&s!==null?(s.return=t,L=s):yd(e)}}function yd(e){for(;L!==null;){var a=L;if((a.flags&8772)!==0){var r=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:qe||Fo(5,a);break;case 1:var o=a.stateNode;if(a.flags&4&&!qe)if(r===null)o.componentDidMount();else{var t=a.elementType===a.type?r.memoizedProps:ba(a.type,r.memoizedProps);o.componentDidUpdate(t,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=a.updateQueue;s!==null&&Cc(a,s,o);break;case 3:var d=a.updateQueue;if(d!==null){if(r=null,a.child!==null)switch(a.child.tag){case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}Cc(a,d,r)}break;case 5:var p=a.stateNode;if(r===null&&a.flags&4){r=p;var h=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&r.focus();break;case"img":h.src&&(r.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var A=a.alternate;if(A!==null){var N=A.memoizedState;if(N!==null){var I=N.dehydrated;I!==null&&gn(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}qe||a.flags&512&&Gs(a)}catch(j){ye(a,a.return,j)}}if(a===e){L=null;break}if(r=a.sibling,r!==null){r.return=a.return,L=r;break}L=a.return}}function Cd(e){for(;L!==null;){var a=L;if(a===e){L=null;break}var r=a.sibling;if(r!==null){r.return=a.return,L=r;break}L=a.return}}function Ad(e){for(;L!==null;){var a=L;try{switch(a.tag){case 0:case 11:case 15:var r=a.return;try{Fo(4,a)}catch(h){ye(a,r,h)}break;case 1:var o=a.stateNode;if(typeof o.componentDidMount=="function"){var t=a.return;try{o.componentDidMount()}catch(h){ye(a,t,h)}}var s=a.return;try{Gs(a)}catch(h){ye(a,s,h)}break;case 5:var d=a.return;try{Gs(a)}catch(h){ye(a,d,h)}}}catch(h){ye(a,a.return,h)}if(a===e){L=null;break}var p=a.sibling;if(p!==null){p.return=a.return,L=p;break}L=a.return}}var op=Math.ceil,Uo=xe.ReactCurrentDispatcher,Ks=xe.ReactCurrentOwner,ua=xe.ReactCurrentBatchConfig,re=0,Ee=null,ke=null,Te=0,oa=0,Yr=Ya(0),Ne=0,qn=null,vr=0,Wo=0,Zs=0,Vn=null,Qe=null,Xs=0,Qr=1/0,Va=null,Go=!1,Js=null,er=null,Yo=!1,ar=null,Qo=0,Bn=0,ei=null,Ko=-1,Zo=0;function He(){return(re&6)!==0?Ce():Ko!==-1?Ko:Ko=Ce()}function rr(e){return(e.mode&1)===0?1:(re&2)!==0&&Te!==0?Te&-Te:$m.transition!==null?(Zo===0&&(Zo=gl()),Zo):(e=le,e!==0||(e=window.event,e=e===void 0?16:kl(e.type)),e)}function Aa(e,a,r,o){if(50<Bn)throw Bn=0,ei=null,Error(c(185));dn(e,r,o),((re&2)===0||e!==Ee)&&(e===Ee&&((re&2)===0&&(Wo|=r),Ne===4&&nr(e,Te)),Ke(e,o),r===1&&re===0&&(a.mode&1)===0&&(Qr=Ce()+500,jo&&Ka()))}function Ke(e,a){var r=e.callbackNode;$u(e,a);var o=to(e,e===Ee?Te:0);if(o===0)r!==null&&ml(r),e.callbackNode=null,e.callbackPriority=0;else if(a=o&-o,e.callbackPriority!==a){if(r!=null&&ml(r),a===1)e.tag===0?Bm(kd.bind(null,e)):cc(kd.bind(null,e)),Om(function(){(re&6)===0&&Ka()}),r=null;else{switch(hl(o)){case 1:r=Tt;break;case 4:r=pl;break;case 16:r=ao;break;case 536870912:r=fl;break;default:r=ao}r=Rd(r,Sd.bind(null,e))}e.callbackPriority=a,e.callbackNode=r}}function Sd(e,a){if(Ko=-1,Zo=0,(re&6)!==0)throw Error(c(327));var r=e.callbackNode;if(Kr()&&e.callbackNode!==r)return null;var o=to(e,e===Ee?Te:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||a)a=Xo(e,o);else{a=o;var t=re;re|=2;var s=Pd();(Ee!==e||Te!==a)&&(Va=null,Qr=Ce()+500,br(e,a));do try{ip();break}catch(p){jd(e,p)}while(!0);xs(),Uo.current=s,re=t,ke!==null?a=0:(Ee=null,Te=0,a=Ne)}if(a!==0){if(a===2&&(t=Dt(e),t!==0&&(o=t,a=ai(e,t))),a===1)throw r=qn,br(e,0),nr(e,o),Ke(e,Ce()),r;if(a===6)nr(e,o);else{if(t=e.current.alternate,(o&30)===0&&!tp(t)&&(a=Xo(e,o),a===2&&(s=Dt(e),s!==0&&(o=s,a=ai(e,s))),a===1))throw r=qn,br(e,0),nr(e,o),Ke(e,Ce()),r;switch(e.finishedWork=t,e.finishedLanes=o,a){case 0:case 1:throw Error(c(345));case 2:yr(e,Qe,Va);break;case 3:if(nr(e,o),(o&130023424)===o&&(a=Xs+500-Ce(),10<a)){if(to(e,0)!==0)break;if(t=e.suspendedLanes,(t&o)!==o){He(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=is(yr.bind(null,e,Qe,Va),a);break}yr(e,Qe,Va);break;case 4:if(nr(e,o),(o&4194240)===o)break;for(a=e.eventTimes,t=-1;0<o;){var d=31-ha(o);s=1<<d,d=a[d],d>t&&(t=d),o&=~s}if(o=t,o=Ce()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*op(o/1960))-o,10<o){e.timeoutHandle=is(yr.bind(null,e,Qe,Va),o);break}yr(e,Qe,Va);break;case 5:yr(e,Qe,Va);break;default:throw Error(c(329))}}}return Ke(e,Ce()),e.callbackNode===r?Sd.bind(null,e):null}function ai(e,a){var r=Vn;return e.current.memoizedState.isDehydrated&&(br(e,a).flags|=256),e=Xo(e,a),e!==2&&(a=Qe,Qe=r,a!==null&&ri(a)),e}function ri(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function tp(e){for(var a=e;;){if(a.flags&16384){var r=a.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var t=r[o],s=t.getSnapshot;t=t.value;try{if(!va(s(),t))return!1}catch{return!1}}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function nr(e,a){for(a&=~Zs,a&=~Wo,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var r=31-ha(a),o=1<<r;e[r]=-1,a&=~o}}function kd(e){if((re&6)!==0)throw Error(c(327));Kr();var a=to(e,0);if((a&1)===0)return Ke(e,Ce()),null;var r=Xo(e,a);if(e.tag!==0&&r===2){var o=Dt(e);o!==0&&(a=o,r=ai(e,o))}if(r===1)throw r=qn,br(e,0),nr(e,a),Ke(e,Ce()),r;if(r===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,yr(e,Qe,Va),Ke(e,Ce()),null}function ni(e,a){var r=re;re|=1;try{return e(a)}finally{re=r,re===0&&(Qr=Ce()+500,jo&&Ka())}}function xr(e){ar!==null&&ar.tag===0&&(re&6)===0&&Kr();var a=re;re|=1;var r=ua.transition,o=le;try{if(ua.transition=null,le=1,e)return e()}finally{le=o,ua.transition=r,re=a,(re&6)===0&&Ka()}}function oi(){oa=Yr.current,pe(Yr)}function br(e,a){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Lm(r)),ke!==null)for(r=ke.return;r!==null;){var o=r;switch(ps(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&So();break;case 3:Ur(),pe(We),pe(Le),Ps();break;case 5:ks(o);break;case 4:Ur();break;case 13:pe(he);break;case 19:pe(he);break;case 10:bs(o.type._context);break;case 22:case 23:oi()}r=r.return}if(Ee=e,ke=e=or(e.current,null),Te=oa=a,Ne=0,qn=null,Zs=Wo=vr=0,Qe=Vn=null,fr!==null){for(a=0;a<fr.length;a++)if(r=fr[a],o=r.interleaved,o!==null){r.interleaved=null;var t=o.next,s=r.pending;if(s!==null){var d=s.next;s.next=t,o.next=d}r.pending=o}fr=null}return e}function jd(e,a){do{var r=ke;try{if(xs(),Lo.current=Vo,Oo){for(var o=ve.memoizedState;o!==null;){var t=o.queue;t!==null&&(t.pending=null),o=o.next}Oo=!1}if(hr=0,Ie=Pe=ve=null,Rn=!1,Tn=0,Ks.current=null,r===null||r.return===null){Ne=1,qn=a,ke=null;break}e:{var s=e,d=r.return,p=r,h=a;if(a=Te,p.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var A=h,N=p,I=N.tag;if((N.mode&1)===0&&(I===0||I===11||I===15)){var j=N.alternate;j?(N.updateQueue=j.updateQueue,N.memoizedState=j.memoizedState,N.lanes=j.lanes):(N.updateQueue=null,N.memoizedState=null)}var T=Kc(d);if(T!==null){T.flags&=-257,Zc(T,d,p,s,a),T.mode&1&&Qc(s,A,a),a=T,h=A;var M=a.updateQueue;if(M===null){var q=new Set;q.add(h),a.updateQueue=q}else M.add(h);break e}else{if((a&1)===0){Qc(s,A,a),ti();break e}h=Error(c(426))}}else if(ge&&p.mode&1){var Ae=Kc(d);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),Zc(Ae,d,p,s,a),hs(Wr(h,p));break e}}s=h=Wr(h,p),Ne!==4&&(Ne=2),Vn===null?Vn=[s]:Vn.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,a&=-a,s.lanes|=a;var y=Gc(s,h,a);yc(s,y);break e;case 1:p=h;var x=s.type,C=s.stateNode;if((s.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(er===null||!er.has(C)))){s.flags|=65536,a&=-a,s.lanes|=a;var E=Yc(s,p,a);yc(s,E);break e}}s=s.return}while(s!==null)}wd(r)}catch(B){a=B,ke===r&&r!==null&&(ke=r=r.return);continue}break}while(!0)}function Pd(){var e=Uo.current;return Uo.current=Vo,e===null?Vo:e}function ti(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ee===null||(vr&268435455)===0&&(Wo&268435455)===0||nr(Ee,Te)}function Xo(e,a){var r=re;re|=2;var o=Pd();(Ee!==e||Te!==a)&&(Va=null,br(e,a));do try{sp();break}catch(t){jd(e,t)}while(!0);if(xs(),re=r,Uo.current=o,ke!==null)throw Error(c(261));return Ee=null,Te=0,Ne}function sp(){for(;ke!==null;)Nd(ke)}function ip(){for(;ke!==null&&!Ru();)Nd(ke)}function Nd(e){var a=zd(e.alternate,e,oa);e.memoizedProps=e.pendingProps,a===null?wd(e):ke=a,Ks.current=null}function wd(e){var a=e;do{var r=a.alternate;if(e=a.return,(a.flags&32768)===0){if(r=Jm(r,a,oa),r!==null){ke=r;return}}else{if(r=ep(r,a),r!==null){r.flags&=32767,ke=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,ke=null;return}}if(a=a.sibling,a!==null){ke=a;return}ke=a=e}while(a!==null);Ne===0&&(Ne=5)}function yr(e,a,r){var o=le,t=ua.transition;try{ua.transition=null,le=1,lp(e,a,r,o)}finally{ua.transition=t,le=o}return null}function lp(e,a,r,o){do Kr();while(ar!==null);if((re&6)!==0)throw Error(c(327));r=e.finishedWork;var t=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(_u(e,s),e===Ee&&(ke=Ee=null,Te=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Yo||(Yo=!0,Rd(ao,function(){return Kr(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=ua.transition,ua.transition=null;var d=le;le=1;var p=re;re|=4,Ks.current=null,rp(e,r),xd(r,e),wm(ts),lo=!!os,ts=os=null,e.current=r,np(r),Tu(),re=p,le=d,ua.transition=s}else e.current=r;if(Yo&&(Yo=!1,ar=e,Qo=t),s=e.pendingLanes,s===0&&(er=null),Ou(r.stateNode),Ke(e,Ce()),a!==null)for(o=e.onRecoverableError,r=0;r<a.length;r++)t=a[r],o(t.value,{componentStack:t.stack,digest:t.digest});if(Go)throw Go=!1,e=Js,Js=null,e;return(Qo&1)!==0&&e.tag!==0&&Kr(),s=e.pendingLanes,(s&1)!==0?e===ei?Bn++:(Bn=0,ei=e):Bn=0,Ka(),null}function Kr(){if(ar!==null){var e=hl(Qo),a=ua.transition,r=le;try{if(ua.transition=null,le=16>e?16:e,ar===null)var o=!1;else{if(e=ar,ar=null,Qo=0,(re&6)!==0)throw Error(c(331));var t=re;for(re|=4,L=e.current;L!==null;){var s=L,d=s.child;if((L.flags&16)!==0){var p=s.deletions;if(p!==null){for(var h=0;h<p.length;h++){var A=p[h];for(L=A;L!==null;){var N=L;switch(N.tag){case 0:case 11:case 15:Mn(8,N,s)}var I=N.child;if(I!==null)I.return=N,L=I;else for(;L!==null;){N=L;var j=N.sibling,T=N.return;if(pd(N),N===A){L=null;break}if(j!==null){j.return=T,L=j;break}L=T}}}var M=s.alternate;if(M!==null){var q=M.child;if(q!==null){M.child=null;do{var Ae=q.sibling;q.sibling=null,q=Ae}while(q!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,L=d;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Mn(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,L=y;break e}L=s.return}}var x=e.current;for(L=x;L!==null;){d=L;var C=d.child;if((d.subtreeFlags&2064)!==0&&C!==null)C.return=d,L=C;else e:for(d=x;L!==null;){if(p=L,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Fo(9,p)}}catch(B){ye(p,p.return,B)}if(p===d){L=null;break e}var E=p.sibling;if(E!==null){E.return=p.return,L=E;break e}L=p.return}}if(re=t,Ka(),Pa&&typeof Pa.onPostCommitFiberRoot=="function")try{Pa.onPostCommitFiberRoot(ro,e)}catch{}o=!0}return o}finally{le=r,ua.transition=a}}return!1}function Id(e,a,r){a=Wr(r,a),a=Gc(e,a,1),e=Xa(e,a,1),a=He(),e!==null&&(dn(e,1,a),Ke(e,a))}function ye(e,a,r){if(e.tag===3)Id(e,e,r);else for(;a!==null;){if(a.tag===3){Id(a,e,r);break}else if(a.tag===1){var o=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(er===null||!er.has(o))){e=Wr(r,e),e=Yc(a,e,1),a=Xa(a,e,1),e=He(),a!==null&&(dn(a,1,e),Ke(a,e));break}}a=a.return}}function cp(e,a,r){var o=e.pingCache;o!==null&&o.delete(a),a=He(),e.pingedLanes|=e.suspendedLanes&r,Ee===e&&(Te&r)===r&&(Ne===4||Ne===3&&(Te&130023424)===Te&&500>Ce()-Xs?br(e,0):Zs|=r),Ke(e,a)}function Ed(e,a){a===0&&((e.mode&1)===0?a=1:(a=oo,oo<<=1,(oo&130023424)===0&&(oo=4194304)));var r=He();e=Oa(e,a),e!==null&&(dn(e,a,r),Ke(e,r))}function dp(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),Ed(e,r)}function up(e,a){var r=0;switch(e.tag){case 13:var o=e.stateNode,t=e.memoizedState;t!==null&&(r=t.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(c(314))}o!==null&&o.delete(a),Ed(e,r)}var zd;zd=function(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps||We.current)Ye=!0;else{if((e.lanes&r)===0&&(a.flags&128)===0)return Ye=!1,Xm(e,a,r);Ye=(e.flags&131072)!==0}else Ye=!1,ge&&(a.flags&1048576)!==0&&dc(a,No,a.index);switch(a.lanes=0,a.tag){case 2:var o=a.type;_o(e,a),e=a.pendingProps;var t=qr(a,Le.current);Fr(a,r),t=Is(null,a,o,e,t,r);var s=Es();return a.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Ge(o)?(s=!0,ko(a)):s=!1,a.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,As(a),t.updater=Bo,a.stateNode=t,t._reactInternals=a,Os(a,o,e,r),a=Bs(null,a,o,!0,s,r)):(a.tag=0,ge&&s&&ms(a),_e(null,a,t,r),a=a.child),a;case 16:o=a.elementType;e:{switch(_o(e,a),e=a.pendingProps,t=o._init,o=t(o._payload),a.type=o,t=a.tag=pp(o),e=ba(o,e),t){case 0:a=Vs(null,a,o,e,r);break e;case 1:a=nd(null,a,o,e,r);break e;case 11:a=Xc(null,a,o,e,r);break e;case 14:a=Jc(null,a,o,ba(o.type,e),r);break e}throw Error(c(306,o,""))}return a;case 0:return o=a.type,t=a.pendingProps,t=a.elementType===o?t:ba(o,t),Vs(e,a,o,t,r);case 1:return o=a.type,t=a.pendingProps,t=a.elementType===o?t:ba(o,t),nd(e,a,o,t,r);case 3:e:{if(od(a),e===null)throw Error(c(387));o=a.pendingProps,s=a.memoizedState,t=s.element,bc(e,a),To(a,o,null,r);var d=a.memoizedState;if(o=d.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){t=Wr(Error(c(423)),a),a=td(e,a,o,r,t);break e}else if(o!==t){t=Wr(Error(c(424)),a),a=td(e,a,o,r,t);break e}else for(na=Ga(a.stateNode.containerInfo.firstChild),ra=a,ge=!0,xa=null,r=vc(a,null,o,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if($r(),o===t){a=qa(e,a,r);break e}_e(e,a,o,r)}a=a.child}return a;case 5:return Ac(a),e===null&&gs(a),o=a.type,t=a.pendingProps,s=e!==null?e.memoizedProps:null,d=t.children,ss(o,t)?d=null:s!==null&&ss(o,s)&&(a.flags|=32),rd(e,a),_e(e,a,d,r),a.child;case 6:return e===null&&gs(a),null;case 13:return sd(e,a,r);case 4:return Ss(a,a.stateNode.containerInfo),o=a.pendingProps,e===null?a.child=_r(a,null,o,r):_e(e,a,o,r),a.child;case 11:return o=a.type,t=a.pendingProps,t=a.elementType===o?t:ba(o,t),Xc(e,a,o,t,r);case 7:return _e(e,a,a.pendingProps,r),a.child;case 8:return _e(e,a,a.pendingProps.children,r),a.child;case 12:return _e(e,a,a.pendingProps.children,r),a.child;case 10:e:{if(o=a.type._context,t=a.pendingProps,s=a.memoizedProps,d=t.value,de(Eo,o._currentValue),o._currentValue=d,s!==null)if(va(s.value,d)){if(s.children===t.children&&!We.current){a=qa(e,a,r);break e}}else for(s=a.child,s!==null&&(s.return=a);s!==null;){var p=s.dependencies;if(p!==null){d=s.child;for(var h=p.firstContext;h!==null;){if(h.context===o){if(s.tag===1){h=Ma(-1,r&-r),h.tag=2;var A=s.updateQueue;if(A!==null){A=A.shared;var N=A.pending;N===null?h.next=h:(h.next=N.next,N.next=h),A.pending=h}}s.lanes|=r,h=s.alternate,h!==null&&(h.lanes|=r),ys(s.return,r,a),p.lanes|=r;break}h=h.next}}else if(s.tag===10)d=s.type===a.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(c(341));d.lanes|=r,p=d.alternate,p!==null&&(p.lanes|=r),ys(d,r,a),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===a){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}_e(e,a,t.children,r),a=a.child}return a;case 9:return t=a.type,o=a.pendingProps.children,Fr(a,r),t=ca(t),o=o(t),a.flags|=1,_e(e,a,o,r),a.child;case 14:return o=a.type,t=ba(o,a.pendingProps),t=ba(o.type,t),Jc(e,a,o,t,r);case 15:return ed(e,a,a.type,a.pendingProps,r);case 17:return o=a.type,t=a.pendingProps,t=a.elementType===o?t:ba(o,t),_o(e,a),a.tag=1,Ge(o)?(e=!0,ko(a)):e=!1,Fr(a,r),Uc(a,o,t),Os(a,o,t,r),Bs(null,a,o,!0,e,r);case 19:return ld(e,a,r);case 22:return ad(e,a,r)}throw Error(c(156,a.tag))};function Rd(e,a){return ul(e,a)}function mp(e,a,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ma(e,a,r,o){return new mp(e,a,r,o)}function si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pp(e){if(typeof e=="function")return si(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xe)return 11;if(e===ja)return 14}return 2}function or(e,a){var r=e.alternate;return r===null?(r=ma(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Jo(e,a,r,o,t,s){var d=2;if(o=e,typeof e=="function")si(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case De:return Cr(r.children,t,s,a);case w:d=8,t|=8;break;case W:return e=ma(12,r,a,t|2),e.elementType=W,e.lanes=s,e;case Je:return e=ma(13,r,a,t),e.elementType=Je,e.lanes=s,e;case ga:return e=ma(19,r,a,t),e.elementType=ga,e.lanes=s,e;case be:return et(r,t,s,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:d=10;break e;case sa:d=9;break e;case Xe:d=11;break e;case ja:d=14;break e;case Ue:d=16,o=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return a=ma(d,r,a,t),a.elementType=e,a.type=o,a.lanes=s,a}function Cr(e,a,r,o){return e=ma(7,e,o,a),e.lanes=r,e}function et(e,a,r,o){return e=ma(22,e,o,a),e.elementType=be,e.lanes=r,e.stateNode={isHidden:!1},e}function ii(e,a,r){return e=ma(6,e,null,a),e.lanes=r,e}function li(e,a,r){return a=ma(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function fp(e,a,r,o,t){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lt(0),this.expirationTimes=Lt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.identifierPrefix=o,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function ci(e,a,r,o,t,s,d,p,h){return e=new fp(e,a,r,p,h),a===1?(a=1,s===!0&&(a|=8)):a=0,s=ma(3,null,null,a),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},As(s),e}function gp(e,a,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:o==null?null:""+o,children:e,containerInfo:a,implementation:r}}function Td(e){if(!e)return Qa;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(c(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Ge(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(c(171))}if(e.tag===1){var r=e.type;if(Ge(r))return ic(e,r,a)}return a}function Dd(e,a,r,o,t,s,d,p,h){return e=ci(r,o,!0,e,t,s,d,p,h),e.context=Td(null),r=e.current,o=He(),t=rr(r),s=Ma(o,t),s.callback=a??null,Xa(r,s,t),e.current.lanes=t,dn(e,t,o),Ke(e,o),e}function at(e,a,r,o){var t=a.current,s=He(),d=rr(t);return r=Td(r),a.context===null?a.context=r:a.pendingContext=r,a=Ma(s,d),a.payload={element:e},o=o===void 0?null:o,o!==null&&(a.callback=o),e=Xa(t,a,d),e!==null&&(Aa(e,t,d,s),Ro(e,t,d)),d}function rt(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ld(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function di(e,a){Ld(e,a),(e=e.alternate)&&Ld(e,a)}function hp(){return null}var Od=typeof reportError=="function"?reportError:function(e){console.error(e)};function ui(e){this._internalRoot=e}nt.prototype.render=ui.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(c(409));at(e,a,null,null)},nt.prototype.unmount=ui.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;xr(function(){at(null,e,null,null)}),a[Ra]=null}};function nt(e){this._internalRoot=e}nt.prototype.unstable_scheduleHydration=function(e){if(e){var a=bl();e={blockedOn:null,target:e,priority:a};for(var r=0;r<Fa.length&&a!==0&&a<Fa[r].priority;r++);Fa.splice(r,0,e),r===0&&Al(e)}};function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ot(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function vp(e,a,r,o,t){if(t){if(typeof o=="function"){var s=o;o=function(){var A=rt(d);s.call(A)}}var d=Dd(a,o,e,0,null,!1,!1,"",Md);return e._reactRootContainer=d,e[Ra]=d.current,kn(e.nodeType===8?e.parentNode:e),xr(),d}for(;t=e.lastChild;)e.removeChild(t);if(typeof o=="function"){var p=o;o=function(){var A=rt(h);p.call(A)}}var h=ci(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=h,e[Ra]=h.current,kn(e.nodeType===8?e.parentNode:e),xr(function(){at(a,h,r,o)}),h}function tt(e,a,r,o,t){var s=r._reactRootContainer;if(s){var d=s;if(typeof t=="function"){var p=t;t=function(){var h=rt(d);p.call(h)}}at(a,d,e,t)}else d=vp(r,a,e,t,o);return rt(d)}vl=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var r=cn(a.pendingLanes);r!==0&&(Ot(a,r|1),Ke(a,Ce()),(re&6)===0&&(Qr=Ce()+500,Ka()))}break;case 13:xr(function(){var o=Oa(e,1);if(o!==null){var t=He();Aa(o,e,1,t)}}),di(e,1)}},Mt=function(e){if(e.tag===13){var a=Oa(e,134217728);if(a!==null){var r=He();Aa(a,e,134217728,r)}di(e,134217728)}},xl=function(e){if(e.tag===13){var a=rr(e),r=Oa(e,a);if(r!==null){var o=He();Aa(r,e,a,o)}di(e,a)}},bl=function(){return le},yl=function(e,a){var r=le;try{return le=e,a()}finally{le=r}},It=function(e,a,r){switch(a){case"input":if(Ct(e,r),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<r.length;a++){var o=r[a];if(o!==e&&o.form===e.form){var t=Ao(o);if(!t)throw Error(c(90));Fi(o),Ct(o,t)}}}break;case"textarea":Qi(e,r);break;case"select":a=r.value,a!=null&&Pr(e,!!r.multiple,a,!1)}},ol=ni,tl=xr;var xp={usingClientEntryPoint:!1,Events:[Nn,Or,Ao,rl,nl,ni]},$n={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bp={bundleType:$n.bundleType,version:$n.version,rendererPackageName:$n.rendererPackageName,rendererConfig:$n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cl(e),e===null?null:e.stateNode},findFiberByHostInstance:$n.findFiberByHostInstance||hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var st=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!st.isDisabled&&st.supportsFiber)try{ro=st.inject(bp),Pa=st}catch{}}return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xp,Ze.createPortal=function(e,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mi(a))throw Error(c(200));return gp(e,a,null,r)},Ze.createRoot=function(e,a){if(!mi(e))throw Error(c(299));var r=!1,o="",t=Od;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onRecoverableError!==void 0&&(t=a.onRecoverableError)),a=ci(e,1,!1,null,null,r,!1,o,t),e[Ra]=a.current,kn(e.nodeType===8?e.parentNode:e),new ui(a)},Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=cl(a),e=e===null?null:e.stateNode,e},Ze.flushSync=function(e){return xr(e)},Ze.hydrate=function(e,a,r){if(!ot(a))throw Error(c(200));return tt(null,e,a,!0,r)},Ze.hydrateRoot=function(e,a,r){if(!mi(e))throw Error(c(405));var o=r!=null&&r.hydratedSources||null,t=!1,s="",d=Od;if(r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),a=Dd(a,null,e,1,r??null,t,!1,s,d),e[Ra]=a.current,kn(e),o)for(e=0;e<o.length;e++)r=o[e],t=r._getVersion,t=t(r._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[r,t]:a.mutableSourceEagerHydrationData.push(r,t);return new nt(a)},Ze.render=function(e,a,r){if(!ot(a))throw Error(c(200));return tt(null,e,a,!1,r)},Ze.unmountComponentAtNode=function(e){if(!ot(e))throw Error(c(40));return e._reactRootContainer?(xr(function(){tt(null,null,e,!1,function(){e._reactRootContainer=null,e[Ra]=null})}),!0):!1},Ze.unstable_batchedUpdates=ni,Ze.unstable_renderSubtreeIntoContainer=function(e,a,r,o){if(!ot(r))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return tt(e,a,r,!1,o)},Ze.version="18.3.1-next-f1338f8080-20240426",Ze}var Ud;function Np(){if(Ud)return gi.exports;Ud=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),gi.exports=Pp(),gi.exports}var Wd;function wp(){if(Wd)return it;Wd=1;var i=Np();return it.createRoot=i.createRoot,it.hydrateRoot=i.hydrateRoot,it}var Ip=wp(),Se=zi();function Gd(){return Se.useEffect(()=>{if(!document.getElementById("cristal-css")){const l=document.createElement("link");l.id="cristal-css",l.rel="stylesheet",l.href="/chat/cristal.css",document.head.appendChild(l)}const i=document.createElement("script");return i.src="/chat/cristal-config.js",i.onload=()=>{const l=document.createElement("script");l.src="/chat/cristal.js",document.body.appendChild(l)},document.body.appendChild(i),()=>{const l=document.getElementById("cristal-mount");l&&l.remove()}},[]),null}function Ri(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var jr=Ri();function uu(i){jr=i}var Ar={exec:()=>null};function Zr(i){let l=[];return c=>{let m=Math.max(0,Math.min(3,c-1)),u=l[m];return u||(u=i(m),l[m]=u),u}}function ee(i,l=""){let c=typeof i=="string"?i:i.source,m={replace:(u,f)=>{let g=typeof f=="string"?f:f.source;return g=g.replace(Ve.caret,"$1"),c=c.replace(u,g),m},getRegex:()=>new RegExp(c,l)};return m}var Ep=((i="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+i)}catch{return!1}})(),Ve={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Zr(i=>new RegExp(`^ {0,${i}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Zr(i=>new RegExp(`^ {0,${i}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Zr(i=>new RegExp(`^ {0,${i}}(?:\`\`\`|~~~)`)),headingBeginRegex:Zr(i=>new RegExp(`^ {0,${i}}#`)),htmlBeginRegex:Zr(i=>new RegExp(`^ {0,${i}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Zr(i=>new RegExp(`^ {0,${i}}>`))},zp=/^(?:[ \t]*(?:\n|$))+/,Rp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Tp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Yn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Dp=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ti=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,mu=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,pu=ee(mu).replace(/bull/g,Ti).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Lp=ee(mu).replace(/bull/g,Ti).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Di=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Op=/^[^\n]+/,Li=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Mp=ee(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Li).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),qp=ee(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Ti).getRegex(),ht="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Oi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Vp=ee("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Oi).replace("tag",ht).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),fu=i=>ee(Di).replace("hr",Yn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list",i).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ht).getRegex(),Bp=fu(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),$p=fu(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),_p=ee(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",$p).getRegex(),Mi={blockquote:_p,code:Rp,def:Mp,fences:Tp,heading:Dp,hr:Yn,html:Vp,lheading:pu,list:qp,newline:zp,paragraph:Bp,table:Ar,text:Op},Yd=ee("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Yn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ht).getRegex(),Hp={...Mi,lheading:Lp,table:Yd,paragraph:ee(Di).replace("hr",Yn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Yd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ht).getRegex()},Fp={...Mi,html:ee(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Oi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ar,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ee(Di).replace("hr",Yn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",pu).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Up=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Wp=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,gu=/^( {2,}|\\)\n(?!\s*$)/,Gp=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,an=/[\p{P}\p{S}]/u,vt=/[\s\p{P}\p{S}]/u,qi=/[^\s\p{P}\p{S}]/u,Yp=ee(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,vt).getRegex(),hu=/(?!~)[\p{P}\p{S}]/u,Qp=/(?!~)[\s\p{P}\p{S}]/u,Kp=/(?:[^\s\p{P}\p{S}]|~)/u,Zp=ee(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Ep?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),vu=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Xp=ee(vu,"u").replace(/punct/g,an).getRegex(),Jp=ee(vu,"u").replace(/punct/g,hu).getRegex(),xu="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ef=ee(xu,"gu").replace(/notPunctSpace/g,qi).replace(/punctSpace/g,vt).replace(/punct/g,an).getRegex(),af=ee(xu,"gu").replace(/notPunctSpace/g,Kp).replace(/punctSpace/g,Qp).replace(/punct/g,hu).getRegex(),rf=ee("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,qi).replace(/punctSpace/g,vt).replace(/punct/g,an).getRegex(),nf=ee(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,an).getRegex(),of="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",tf=ee(of,"gu").replace(/notPunctSpace/g,qi).replace(/punctSpace/g,vt).replace(/punct/g,an).getRegex(),sf=ee(/\\(punct)/,"gu").replace(/punct/g,an).getRegex(),lf=ee(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),cf=ee(Oi).replace("(?:-->|$)","-->").getRegex(),df=ee("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",cf).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ut=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,uf=ee(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ut).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),bu=ee(/^!?\[(label)\]\[(ref)\]/).replace("label",ut).replace("ref",Li).getRegex(),yu=ee(/^!?\[(ref)\](?:\[\])?/).replace("ref",Li).getRegex(),mf=ee("reflink|nolink(?!\\()","g").replace("reflink",bu).replace("nolink",yu).getRegex(),Qd=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Vi={_backpedal:Ar,anyPunctuation:sf,autolink:lf,blockSkip:Zp,br:gu,code:Wp,del:Ar,delLDelim:Ar,delRDelim:Ar,emStrongLDelim:Xp,emStrongRDelimAst:ef,emStrongRDelimUnd:rf,escape:Up,link:uf,nolink:yu,punctuation:Yp,reflink:bu,reflinkSearch:mf,tag:df,text:Gp,url:Ar},pf={...Vi,link:ee(/^!?\[(label)\]\((.*?)\)/).replace("label",ut).getRegex(),reflink:ee(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ut).getRegex()},ji={...Vi,emStrongRDelimAst:af,emStrongLDelim:Jp,delLDelim:nf,delRDelim:tf,url:ee(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Qd).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:ee(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Qd).getRegex()},ff={...ji,br:ee(gu).replace("{2,}","*").getRegex(),text:ee(ji.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},lt={normal:Mi,gfm:Hp,pedantic:Fp},Hn={normal:Vi,gfm:ji,breaks:ff,pedantic:pf},gf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Kd=i=>gf[i];function za(i,l){if(l){if(Ve.escapeTest.test(i))return i.replace(Ve.escapeReplace,Kd)}else if(Ve.escapeTestNoEncode.test(i))return i.replace(Ve.escapeReplaceNoEncode,Kd);return i}function Zd(i){try{i=encodeURI(i).replace(Ve.percentDecode,"%")}catch{return null}return i}function Xd(i,l){let c=i.replace(Ve.findPipe,(f,g,v)=>{let k=!1,S=g;for(;--S>=0&&v[S]==="\\";)k=!k;return k?"|":" |"}),m=c.split(Ve.splitPipe),u=0;if(m[0].trim()||m.shift(),m.length>0&&!m.at(-1)?.trim()&&m.pop(),l)if(m.length>l)m.splice(l);else for(;m.length<l;)m.push("");for(;u<m.length;u++)m[u]=m[u].trim().replace(Ve.slashPipe,"|");return m}function sr(i,l,c){let m=i.length;if(m===0)return"";let u=0;for(;u<m&&i.charAt(m-u-1)===l;)u++;return i.slice(0,m-u)}function Jd(i){let l=i.split(`
`),c=l.length-1;for(;c>=0&&Ve.blankLine.test(l[c]);)c--;return l.length-c<=2?i:l.slice(0,c+1).join(`
`)}function hf(i,l){if(i.indexOf(l[1])===-1)return-1;let c=0;for(let m=0;m<i.length;m++)if(i[m]==="\\")m++;else if(i[m]===l[0])c++;else if(i[m]===l[1]&&(c--,c<0))return m;return c>0?-2:-1}function vf(i,l=0){let c=l,m="";for(let u of i)if(u==="	"){let f=4-c%4;m+=" ".repeat(f),c+=f}else m+=u,c++;return m}function eu(i,l,c,m,u){let f=l.href,g=l.title||null,v=i[1].replace(u.other.outputLinkReplace,"$1");m.state.inLink=!0;let k={type:i[0].charAt(0)==="!"?"image":"link",raw:c,href:f,title:g,text:v,tokens:m.inlineTokens(v)};return m.state.inLink=!1,k}function xf(i,l,c){let m=i.match(c.other.indentCodeCompensation);if(m===null)return l;let u=m[1];return l.split(`
`).map(f=>{let g=f.match(c.other.beginningSpace);if(g===null)return f;let[v]=g;return v.length>=u.length?f.slice(u.length):f}).join(`
`)}var mt=class{options;rules;lexer;constructor(i){this.options=i||jr}space(i){let l=this.rules.block.newline.exec(i);if(l&&l[0].length>0)return{type:"space",raw:l[0]}}code(i){let l=this.rules.block.code.exec(i);if(l){let c=this.options.pedantic?l[0]:Jd(l[0]),m=c.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:c,codeBlockStyle:"indented",text:m}}}fences(i){let l=this.rules.block.fences.exec(i);if(l){let c=l[0],m=xf(c,l[3]||"",this.rules);return{type:"code",raw:c,lang:l[2]?l[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):l[2],text:m}}}heading(i){let l=this.rules.block.heading.exec(i);if(l){let c=l[2].trim();if(this.rules.other.endingHash.test(c)){let m=sr(c,"#");(this.options.pedantic||!m||this.rules.other.endingSpaceChar.test(m))&&(c=m.trim())}return{type:"heading",raw:sr(l[0],`
`),depth:l[1].length,text:c,tokens:this.lexer.inline(c)}}}hr(i){let l=this.rules.block.hr.exec(i);if(l)return{type:"hr",raw:sr(l[0],`
`)}}blockquote(i){let l=this.rules.block.blockquote.exec(i);if(l){let c=sr(l[0],`
`).split(`
`),m="",u="",f=[];for(;c.length>0;){let g=!1,v=[],k;for(k=0;k<c.length;k++)if(this.rules.other.blockquoteStart.test(c[k]))v.push(c[k]),g=!0;else if(!g)v.push(c[k]);else break;c=c.slice(k);let S=v.join(`
`),D=S.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");m=m?`${m}
${S}`:S,u=u?`${u}
${D}`:D;let z=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(D,f,!0),this.lexer.state.top=z,c.length===0)break;let V=f.at(-1);if(V?.type==="code")break;if(V?.type==="blockquote"){let ae=V,K=ae.raw+`
`+c.join(`
`),X=this.blockquote(K);f[f.length-1]=X,m=m.substring(0,m.length-ae.raw.length)+X.raw,u=u.substring(0,u.length-ae.text.length)+X.text;break}else if(V?.type==="list"){let ae=V,K=ae.raw+`
`+c.join(`
`),X=this.list(K);f[f.length-1]=X,m=m.substring(0,m.length-V.raw.length)+X.raw,u=u.substring(0,u.length-ae.raw.length)+X.raw,c=K.substring(f.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:m,tokens:f,text:u}}}list(i){let l=this.rules.block.list.exec(i);if(l){let c=l[1].trim(),m=c.length>1,u={type:"list",raw:"",ordered:m,start:m?+c.slice(0,-1):"",loose:!1,items:[]};c=m?`\\d{1,9}\\${c.slice(-1)}`:`\\${c}`,this.options.pedantic&&(c=m?c:"[*+-]");let f=this.rules.other.listItemRegex(c),g=!1;for(;i;){let k=!1,S="",D="";if(!(l=f.exec(i))||this.rules.block.hr.test(i))break;S=l[0],i=i.substring(S.length);let z=vf(l[2].split(`
`,1)[0],l[1].length),V=i.split(`
`,1)[0],ae=!z.trim(),K=0;if(this.options.pedantic?(K=2,D=z.trimStart()):ae?K=l[1].length+1:(K=z.search(this.rules.other.nonSpaceChar),K=K>4?1:K,D=z.slice(K),K+=l[1].length),ae&&this.rules.other.blankLine.test(V)&&(S+=V+`
`,i=i.substring(V.length+1),k=!0),!k){let X=this.rules.other.nextBulletRegex(K),J=this.rules.other.hrRegex(K),Fe=this.rules.other.fencesBeginRegex(K),Be=this.rules.other.headingBeginRegex(K),$e=this.rules.other.htmlBeginRegex(K),xe=this.rules.other.blockquoteBeginRegex(K);for(;i;){let we=i.split(`
`,1)[0],ne;if(V=we,this.options.pedantic?(V=V.replace(this.rules.other.listReplaceNesting,"  "),ne=V):ne=V.replace(this.rules.other.tabCharGlobal,"    "),Fe.test(V)||Be.test(V)||$e.test(V)||xe.test(V)||X.test(V)||J.test(V))break;if(ne.search(this.rules.other.nonSpaceChar)>=K||!V.trim())D+=`
`+ne.slice(K);else{if(ae||z.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Fe.test(z)||Be.test(z)||J.test(z))break;D+=`
`+V}ae=!V.trim(),S+=we+`
`,i=i.substring(we.length+1),z=ne.slice(K)}}u.loose||(g?u.loose=!0:this.rules.other.doubleBlankLine.test(S)&&(g=!0)),u.items.push({type:"list_item",raw:S,task:!!this.options.gfm&&this.rules.other.listIsTask.test(D),loose:!1,text:D,tokens:[]}),u.raw+=S}let v=u.items.at(-1);if(v)v.raw=v.raw.trimEnd(),v.text=v.text.trimEnd();else return;u.raw=u.raw.trimEnd();for(let k of u.items){this.lexer.state.top=!1,k.tokens=this.lexer.blockTokens(k.text,[]);let S=k.tokens[0];if(k.task&&(S?.type==="text"||S?.type==="paragraph")){k.text=k.text.replace(this.rules.other.listReplaceTask,""),S.raw=S.raw.replace(this.rules.other.listReplaceTask,""),S.text=S.text.replace(this.rules.other.listReplaceTask,"");for(let z=this.lexer.inlineQueue.length-1;z>=0;z--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[z].src)){this.lexer.inlineQueue[z].src=this.lexer.inlineQueue[z].src.replace(this.rules.other.listReplaceTask,"");break}let D=this.rules.other.listTaskCheckbox.exec(k.raw);if(D){let z={type:"checkbox",raw:D[0]+" ",checked:D[0]!=="[ ]"};k.checked=z.checked,u.loose?k.tokens[0]&&["paragraph","text"].includes(k.tokens[0].type)&&"tokens"in k.tokens[0]&&k.tokens[0].tokens?(k.tokens[0].raw=z.raw+k.tokens[0].raw,k.tokens[0].text=z.raw+k.tokens[0].text,k.tokens[0].tokens.unshift(z)):k.tokens.unshift({type:"paragraph",raw:z.raw,text:z.raw,tokens:[z]}):k.tokens.unshift(z)}}else k.task&&(k.task=!1);if(!u.loose){let D=k.tokens.filter(V=>V.type==="space"),z=D.length>0&&D.some(V=>this.rules.other.anyLine.test(V.raw));u.loose=z}}if(u.loose)for(let k of u.items){k.loose=!0;for(let S of k.tokens)S.type==="text"&&(S.type="paragraph")}return u}}html(i){let l=this.rules.block.html.exec(i);if(l){let c=Jd(l[0]);return{type:"html",block:!0,raw:c,pre:l[1]==="pre"||l[1]==="script"||l[1]==="style",text:c}}}def(i){let l=this.rules.block.def.exec(i);if(l){let c=l[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),m=l[2]?l[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=l[3]?l[3].substring(1,l[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):l[3];return{type:"def",tag:c,raw:sr(l[0],`
`),href:m,title:u}}}table(i){let l=this.rules.block.table.exec(i);if(!l||!this.rules.other.tableDelimiter.test(l[2]))return;let c=Xd(l[1]),m=l[2].replace(this.rules.other.tableAlignChars,"").split("|"),u=l[3]?.trim()?l[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],f={type:"table",raw:sr(l[0],`
`),header:[],align:[],rows:[]};if(c.length===m.length){for(let g of m)this.rules.other.tableAlignRight.test(g)?f.align.push("right"):this.rules.other.tableAlignCenter.test(g)?f.align.push("center"):this.rules.other.tableAlignLeft.test(g)?f.align.push("left"):f.align.push(null);for(let g=0;g<c.length;g++)f.header.push({text:c[g],tokens:this.lexer.inline(c[g]),header:!0,align:f.align[g]});for(let g of u)f.rows.push(Xd(g,f.header.length).map((v,k)=>({text:v,tokens:this.lexer.inline(v),header:!1,align:f.align[k]})));return f}}lheading(i){let l=this.rules.block.lheading.exec(i);if(l){let c=l[1].trim();return{type:"heading",raw:sr(l[0],`
`),depth:l[2].charAt(0)==="="?1:2,text:c,tokens:this.lexer.inline(c)}}}paragraph(i){let l=this.rules.block.paragraph.exec(i);if(l){let c=l[1].charAt(l[1].length-1)===`
`?l[1].slice(0,-1):l[1];return{type:"paragraph",raw:l[0],text:c,tokens:this.lexer.inline(c)}}}text(i){let l=this.rules.block.text.exec(i);if(l)return{type:"text",raw:l[0],text:l[0],tokens:this.lexer.inline(l[0])}}escape(i){let l=this.rules.inline.escape.exec(i);if(l)return{type:"escape",raw:l[0],text:l[1]}}tag(i){let l=this.rules.inline.tag.exec(i);if(l)return!this.lexer.state.inLink&&this.rules.other.startATag.test(l[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(l[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(l[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(l[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:l[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:l[0]}}link(i){let l=this.rules.inline.link.exec(i);if(l){let c=l[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(c)){if(!this.rules.other.endAngleBracket.test(c))return;let f=sr(c.slice(0,-1),"\\");if((c.length-f.length)%2===0)return}else{let f=hf(l[2],"()");if(f===-2)return;if(f>-1){let g=(l[0].indexOf("!")===0?5:4)+l[1].length+f;l[2]=l[2].substring(0,f),l[0]=l[0].substring(0,g).trim(),l[3]=""}}let m=l[2],u="";if(this.options.pedantic){let f=this.rules.other.pedanticHrefTitle.exec(m);f&&(m=f[1],u=f[3])}else u=l[3]?l[3].slice(1,-1):"";return m=m.trim(),this.rules.other.startAngleBracket.test(m)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(c)?m=m.slice(1):m=m.slice(1,-1)),eu(l,{href:m&&m.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},l[0],this.lexer,this.rules)}}reflink(i,l){let c;if((c=this.rules.inline.reflink.exec(i))||(c=this.rules.inline.nolink.exec(i))){let m=(c[2]||c[1]).replace(this.rules.other.multipleSpaceGlobal," "),u=l[m.toLowerCase()];if(!u){let f=c[0].charAt(0);return{type:"text",raw:f,text:f}}return eu(c,u,c[0],this.lexer,this.rules)}}emStrong(i,l,c=""){let m=this.rules.inline.emStrongLDelim.exec(i);if(!(!m||!m[1]&&!m[2]&&!m[3]&&!m[4]||m[4]&&c.match(this.rules.other.unicodeAlphaNumeric))&&(!(m[1]||m[3])||!c||this.rules.inline.punctuation.exec(c))){let u=[...m[0]].length-1,f,g,v=u,k=0,S=m[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(S.lastIndex=0,l=l.slice(-1*i.length+u);(m=S.exec(l))!==null;){if(f=m[1]||m[2]||m[3]||m[4]||m[5]||m[6],!f)continue;if(g=[...f].length,m[3]||m[4]){v+=g;continue}else if((m[5]||m[6])&&u%3&&!((u+g)%3)){k+=g;continue}if(v-=g,v>0)continue;g=Math.min(g,g+v+k);let D=[...m[0]][0].length,z=i.slice(0,u+m.index+D+g);if(Math.min(u,g)%2){let ae=z.slice(1,-1);return{type:"em",raw:z,text:ae,tokens:this.lexer.inlineTokens(ae)}}let V=z.slice(2,-2);return{type:"strong",raw:z,text:V,tokens:this.lexer.inlineTokens(V)}}}}codespan(i){let l=this.rules.inline.code.exec(i);if(l){let c=l[2].replace(this.rules.other.newLineCharGlobal," "),m=this.rules.other.nonSpaceChar.test(c),u=this.rules.other.startingSpaceChar.test(c)&&this.rules.other.endingSpaceChar.test(c);return m&&u&&(c=c.substring(1,c.length-1)),{type:"codespan",raw:l[0],text:c}}}br(i){let l=this.rules.inline.br.exec(i);if(l)return{type:"br",raw:l[0]}}del(i,l,c=""){let m=this.rules.inline.delLDelim.exec(i);if(m&&(!m[1]||!c||this.rules.inline.punctuation.exec(c))){let u=[...m[0]].length-1,f,g,v=u,k=this.rules.inline.delRDelim;for(k.lastIndex=0,l=l.slice(-1*i.length+u);(m=k.exec(l))!==null;){if(f=m[1]||m[2]||m[3]||m[4]||m[5]||m[6],!f||(g=[...f].length,g!==u))continue;if(m[3]||m[4]){v+=g;continue}if(v-=g,v>0)continue;g=Math.min(g,g+v);let S=[...m[0]][0].length,D=i.slice(0,u+m.index+S+g),z=D.slice(u,-u);return{type:"del",raw:D,text:z,tokens:this.lexer.inlineTokens(z)}}}}autolink(i){let l=this.rules.inline.autolink.exec(i);if(l){let c,m;return l[2]==="@"?(c=l[1],m="mailto:"+c):(c=l[1],m=c),{type:"link",raw:l[0],text:c,href:m,tokens:[{type:"text",raw:c,text:c}]}}}url(i){let l;if(l=this.rules.inline.url.exec(i)){let c,m;if(l[2]==="@")c=l[0],m="mailto:"+c;else{let u;do u=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])?.[0]??"";while(u!==l[0]);c=l[0],l[1]==="www."?m="http://"+l[0]:m=l[0]}return{type:"link",raw:l[0],text:c,href:m,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(i){let l=this.rules.inline.text.exec(i);if(l){let c=this.lexer.state.inRawBlock;return{type:"text",raw:l[0],text:l[0],escaped:c}}}},Sa=class Pi{tokens;options;state;inlineQueue;tokenizer;constructor(l){this.tokens=[],this.tokens.links=Object.create(null),this.options=l||jr,this.options.tokenizer=this.options.tokenizer||new mt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let c={other:Ve,block:lt.normal,inline:Hn.normal};this.options.pedantic?(c.block=lt.pedantic,c.inline=Hn.pedantic):this.options.gfm&&(c.block=lt.gfm,this.options.breaks?c.inline=Hn.breaks:c.inline=Hn.gfm),this.tokenizer.rules=c}static get rules(){return{block:lt,inline:Hn}}static lex(l,c){return new Pi(c).lex(l)}static lexInline(l,c){return new Pi(c).inlineTokens(l)}lex(l){l=l.replace(Ve.carriageReturn,`
`),this.blockTokens(l,this.tokens);for(let c=0;c<this.inlineQueue.length;c++){let m=this.inlineQueue[c];this.inlineTokens(m.src,m.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(l,c=[],m=!1){this.tokenizer.lexer=this,this.options.pedantic&&(l=l.replace(Ve.tabCharGlobal,"    ").replace(Ve.spaceLine,""));let u=1/0;for(;l;){if(l.length<u)u=l.length;else{this.infiniteLoopError(l.charCodeAt(0));break}let f;if(this.options.extensions?.block?.some(v=>(f=v.call({lexer:this},l,c))?(l=l.substring(f.raw.length),c.push(f),!0):!1))continue;if(f=this.tokenizer.space(l)){l=l.substring(f.raw.length);let v=c.at(-1);f.raw.length===1&&v!==void 0?v.raw+=`
`:c.push(f);continue}if(f=this.tokenizer.code(l)){l=l.substring(f.raw.length);let v=c.at(-1);v?.type==="paragraph"||v?.type==="text"?(v.raw+=(v.raw.endsWith(`
`)?"":`
`)+f.raw,v.text+=`
`+f.text,this.inlineQueue.at(-1).src=v.text):c.push(f);continue}if(f=this.tokenizer.fences(l)){l=l.substring(f.raw.length),c.push(f);continue}if(f=this.tokenizer.heading(l)){l=l.substring(f.raw.length),c.push(f);continue}if(f=this.tokenizer.hr(l)){l=l.substring(f.raw.length),c.push(f);continue}if(f=this.tokenizer.blockquote(l)){l=l.substring(f.raw.length),c.push(f);continue}if(f=this.tokenizer.list(l)){l=l.substring(f.raw.length),c.push(f);continue}if(f=this.tokenizer.html(l)){l=l.substring(f.raw.length),c.push(f);continue}if(f=this.tokenizer.def(l)){l=l.substring(f.raw.length);let v=c.at(-1);v?.type==="paragraph"||v?.type==="text"?(v.raw+=(v.raw.endsWith(`
`)?"":`
`)+f.raw,v.text+=`
`+f.raw,this.inlineQueue.at(-1).src=v.text):this.tokens.links[f.tag]||(this.tokens.links[f.tag]={href:f.href,title:f.title},c.push(f));continue}if(f=this.tokenizer.table(l)){l=l.substring(f.raw.length),c.push(f);continue}if(f=this.tokenizer.lheading(l)){l=l.substring(f.raw.length),c.push(f);continue}let g=l;if(this.options.extensions?.startBlock){let v=1/0,k=l.slice(1),S;this.options.extensions.startBlock.forEach(D=>{S=D.call({lexer:this},k),typeof S=="number"&&S>=0&&(v=Math.min(v,S))}),v<1/0&&v>=0&&(g=l.substring(0,v+1))}if(this.state.top&&(f=this.tokenizer.paragraph(g))){let v=c.at(-1);m&&v?.type==="paragraph"?(v.raw+=(v.raw.endsWith(`
`)?"":`
`)+f.raw,v.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=v.text):c.push(f),m=g.length!==l.length,l=l.substring(f.raw.length);continue}if(f=this.tokenizer.text(l)){l=l.substring(f.raw.length);let v=c.at(-1);v?.type==="text"?(v.raw+=(v.raw.endsWith(`
`)?"":`
`)+f.raw,v.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=v.text):c.push(f);continue}if(l){this.infiniteLoopError(l.charCodeAt(0));break}}return this.state.top=!0,c}inline(l,c=[]){return this.inlineQueue.push({src:l,tokens:c}),c}inlineTokens(l,c=[]){this.tokenizer.lexer=this;let m=l;if(this.tokens.links){let v=Object.keys(this.tokens.links);v.length>0&&(m=m.replace(this.tokenizer.rules.inline.reflinkSearch,k=>v.includes(k.slice(k.lastIndexOf("[")+1,-1))?"["+"a".repeat(k.length-2)+"]":k))}m=m.replace(this.tokenizer.rules.inline.anyPunctuation,"++"),m=m.replace(this.tokenizer.rules.inline.blockSkip,(v,k,S)=>{let D=S?S.length:0;return v.slice(0,D)+"["+"a".repeat(v.length-D-2)+"]"}),m=this.options.hooks?.emStrongMask?.call({lexer:this},m)??m;let u=!1,f="",g=1/0;for(;l;){if(l.length<g)g=l.length;else{this.infiniteLoopError(l.charCodeAt(0));break}u||(f=""),u=!1;let v;if(this.options.extensions?.inline?.some(S=>(v=S.call({lexer:this},l,c))?(l=l.substring(v.raw.length),c.push(v),!0):!1))continue;if(v=this.tokenizer.escape(l)){l=l.substring(v.raw.length),c.push(v);continue}if(v=this.tokenizer.tag(l)){l=l.substring(v.raw.length),c.push(v);continue}if(v=this.tokenizer.link(l)){l=l.substring(v.raw.length),c.push(v);continue}if(v=this.tokenizer.reflink(l,this.tokens.links)){l=l.substring(v.raw.length);let S=c.at(-1);v.type==="text"&&S?.type==="text"?(S.raw+=v.raw,S.text+=v.text):c.push(v);continue}if(v=this.tokenizer.emStrong(l,m,f)){l=l.substring(v.raw.length),c.push(v);continue}if(v=this.tokenizer.codespan(l)){l=l.substring(v.raw.length),c.push(v);continue}if(v=this.tokenizer.br(l)){l=l.substring(v.raw.length),c.push(v);continue}if(v=this.tokenizer.del(l,m,f)){l=l.substring(v.raw.length),c.push(v);continue}if(v=this.tokenizer.autolink(l)){l=l.substring(v.raw.length),c.push(v);continue}if(!this.state.inLink&&(v=this.tokenizer.url(l))){l=l.substring(v.raw.length),c.push(v);continue}let k=l;if(this.options.extensions?.startInline){let S=1/0,D=l.slice(1),z;this.options.extensions.startInline.forEach(V=>{z=V.call({lexer:this},D),typeof z=="number"&&z>=0&&(S=Math.min(S,z))}),S<1/0&&S>=0&&(k=l.substring(0,S+1))}if(v=this.tokenizer.inlineText(k)){l=l.substring(v.raw.length),v.raw.slice(-1)!=="_"&&(f=v.raw.slice(-1)),u=!0;let S=c.at(-1);S?.type==="text"?(S.raw+=v.raw,S.text+=v.text):c.push(v);continue}if(l){this.infiniteLoopError(l.charCodeAt(0));break}}return c}infiniteLoopError(l){let c="Infinite loop on byte: "+l;if(this.options.silent)console.error(c);else throw new Error(c)}},pt=class{options;parser;constructor(i){this.options=i||jr}space(i){return""}code({text:i,lang:l,escaped:c}){let m=(l||"").match(Ve.notSpaceStart)?.[0],u=i.replace(Ve.endingNewline,"")+`
`;return m?'<pre><code class="language-'+za(m)+'">'+(c?u:za(u,!0))+`</code></pre>
`:"<pre><code>"+(c?u:za(u,!0))+`</code></pre>
`}blockquote({tokens:i}){return`<blockquote>
${this.parser.parse(i)}</blockquote>
`}html({text:i}){return i}def(i){return""}heading({tokens:i,depth:l}){return`<h${l}>${this.parser.parseInline(i)}</h${l}>
`}hr(i){return`<hr>
`}list(i){let l=i.ordered,c=i.start,m="";for(let g=0;g<i.items.length;g++){let v=i.items[g];m+=this.listitem(v)}let u=l?"ol":"ul",f=l&&c!==1?' start="'+c+'"':"";return"<"+u+f+`>
`+m+"</"+u+`>
`}listitem(i){return`<li>${this.parser.parse(i.tokens)}</li>
`}checkbox({checked:i}){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:i}){return`<p>${this.parser.parseInline(i)}</p>
`}table(i){let l="",c="";for(let u=0;u<i.header.length;u++)c+=this.tablecell(i.header[u]);l+=this.tablerow({text:c});let m="";for(let u=0;u<i.rows.length;u++){let f=i.rows[u];c="";for(let g=0;g<f.length;g++)c+=this.tablecell(f[g]);m+=this.tablerow({text:c})}return m&&(m=`<tbody>${m}</tbody>`),`<table>
<thead>
`+l+`</thead>
`+m+`</table>
`}tablerow({text:i}){return`<tr>
${i}</tr>
`}tablecell(i){let l=this.parser.parseInline(i.tokens),c=i.header?"th":"td";return(i.align?`<${c} align="${i.align}">`:`<${c}>`)+l+`</${c}>
`}strong({tokens:i}){return`<strong>${this.parser.parseInline(i)}</strong>`}em({tokens:i}){return`<em>${this.parser.parseInline(i)}</em>`}codespan({text:i}){return`<code>${za(i,!0)}</code>`}br(i){return"<br>"}del({tokens:i}){return`<del>${this.parser.parseInline(i)}</del>`}link({href:i,title:l,tokens:c}){let m=this.parser.parseInline(c),u=Zd(i);if(u===null)return m;i=u;let f='<a href="'+i+'"';return l&&(f+=' title="'+za(l)+'"'),f+=">"+m+"</a>",f}image({href:i,title:l,text:c,tokens:m}){m&&(c=this.parser.parseInline(m,this.parser.textRenderer));let u=Zd(i);if(u===null)return za(c);i=u;let f=`<img src="${i}" alt="${za(c)}"`;return l&&(f+=` title="${za(l)}"`),f+=">",f}text(i){return"tokens"in i&&i.tokens?this.parser.parseInline(i.tokens):"escaped"in i&&i.escaped?i.text:za(i.text)}},Bi=class{strong({text:i}){return i}em({text:i}){return i}codespan({text:i}){return i}del({text:i}){return i}html({text:i}){return i}text({text:i}){return i}link({text:i}){return""+i}image({text:i}){return""+i}br(){return""}checkbox({raw:i}){return i}},ka=class Ni{options;renderer;textRenderer;constructor(l){this.options=l||jr,this.options.renderer=this.options.renderer||new pt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Bi}static parse(l,c){return new Ni(c).parse(l)}static parseInline(l,c){return new Ni(c).parseInline(l)}parse(l){this.renderer.parser=this;let c="";for(let m=0;m<l.length;m++){let u=l[m];if(this.options.extensions?.renderers?.[u.type]){let g=u,v=this.options.extensions.renderers[g.type].call({parser:this},g);if(v!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(g.type)){c+=v||"";continue}}let f=u;switch(f.type){case"space":{c+=this.renderer.space(f);break}case"hr":{c+=this.renderer.hr(f);break}case"heading":{c+=this.renderer.heading(f);break}case"code":{c+=this.renderer.code(f);break}case"table":{c+=this.renderer.table(f);break}case"blockquote":{c+=this.renderer.blockquote(f);break}case"list":{c+=this.renderer.list(f);break}case"checkbox":{c+=this.renderer.checkbox(f);break}case"html":{c+=this.renderer.html(f);break}case"def":{c+=this.renderer.def(f);break}case"paragraph":{c+=this.renderer.paragraph(f);break}case"text":{c+=this.renderer.text(f);break}default:{let g='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(g),"";throw new Error(g)}}}return c}parseInline(l,c=this.renderer){this.renderer.parser=this;let m="";for(let u=0;u<l.length;u++){let f=l[u];if(this.options.extensions?.renderers?.[f.type]){let v=this.options.extensions.renderers[f.type].call({parser:this},f);if(v!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(f.type)){m+=v||"";continue}}let g=f;switch(g.type){case"escape":{m+=c.text(g);break}case"html":{m+=c.html(g);break}case"link":{m+=c.link(g);break}case"image":{m+=c.image(g);break}case"checkbox":{m+=c.checkbox(g);break}case"strong":{m+=c.strong(g);break}case"em":{m+=c.em(g);break}case"codespan":{m+=c.codespan(g);break}case"br":{m+=c.br(g);break}case"del":{m+=c.del(g);break}case"text":{m+=c.text(g);break}default:{let v='Token with "'+g.type+'" type was not found.';if(this.options.silent)return console.error(v),"";throw new Error(v)}}}return m}},Fn=class{options;block;constructor(i){this.options=i||jr}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}emStrongMask(i){return i}provideLexer(i=this.block){return i?Sa.lex:Sa.lexInline}provideParser(i=this.block){return i?ka.parse:ka.parseInline}},bf=class{defaults=Ri();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ka;Renderer=pt;TextRenderer=Bi;Lexer=Sa;Tokenizer=mt;Hooks=Fn;constructor(...i){this.use(...i)}walkTokens(i,l){let c=[];for(let m of i)switch(c=c.concat(l.call(this,m)),m.type){case"table":{let u=m;for(let f of u.header)c=c.concat(this.walkTokens(f.tokens,l));for(let f of u.rows)for(let g of f)c=c.concat(this.walkTokens(g.tokens,l));break}case"list":{let u=m;c=c.concat(this.walkTokens(u.items,l));break}default:{let u=m;this.defaults.extensions?.childTokens?.[u.type]?this.defaults.extensions.childTokens[u.type].forEach(f=>{let g=u[f].flat(1/0);c=c.concat(this.walkTokens(g,l))}):u.tokens&&(c=c.concat(this.walkTokens(u.tokens,l)))}}return c}use(...i){let l=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(c=>{let m={...c};if(m.async=this.defaults.async||m.async||!1,c.extensions&&(c.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){let f=l.renderers[u.name];f?l.renderers[u.name]=function(...g){let v=u.renderer.apply(this,g);return v===!1&&(v=f.apply(this,g)),v}:l.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let f=l[u.level];f?f.unshift(u.tokenizer):l[u.level]=[u.tokenizer],u.start&&(u.level==="block"?l.startBlock?l.startBlock.push(u.start):l.startBlock=[u.start]:u.level==="inline"&&(l.startInline?l.startInline.push(u.start):l.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(l.childTokens[u.name]=u.childTokens)}),m.extensions=l),c.renderer){let u=this.defaults.renderer||new pt(this.defaults);for(let f in c.renderer){if(!(f in u))throw new Error(`renderer '${f}' does not exist`);if(["options","parser"].includes(f))continue;let g=f,v=c.renderer[g],k=u[g];u[g]=(...S)=>{let D=v.apply(u,S);return D===!1&&(D=k.apply(u,S)),D||""}}m.renderer=u}if(c.tokenizer){let u=this.defaults.tokenizer||new mt(this.defaults);for(let f in c.tokenizer){if(!(f in u))throw new Error(`tokenizer '${f}' does not exist`);if(["options","rules","lexer"].includes(f))continue;let g=f,v=c.tokenizer[g],k=u[g];u[g]=(...S)=>{let D=v.apply(u,S);return D===!1&&(D=k.apply(u,S)),D}}m.tokenizer=u}if(c.hooks){let u=this.defaults.hooks||new Fn;for(let f in c.hooks){if(!(f in u))throw new Error(`hook '${f}' does not exist`);if(["options","block"].includes(f))continue;let g=f,v=c.hooks[g],k=u[g];Fn.passThroughHooks.has(f)?u[g]=S=>{if(this.defaults.async&&Fn.passThroughHooksRespectAsync.has(f))return(async()=>{let z=await v.call(u,S);return k.call(u,z)})();let D=v.call(u,S);return k.call(u,D)}:u[g]=(...S)=>{if(this.defaults.async)return(async()=>{let z=await v.apply(u,S);return z===!1&&(z=await k.apply(u,S)),z})();let D=v.apply(u,S);return D===!1&&(D=k.apply(u,S)),D}}m.hooks=u}if(c.walkTokens){let u=this.defaults.walkTokens,f=c.walkTokens;m.walkTokens=function(g){let v=[];return v.push(f.call(this,g)),u&&(v=v.concat(u.call(this,g))),v}}this.defaults={...this.defaults,...m}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,l){return Sa.lex(i,l??this.defaults)}parser(i,l){return ka.parse(i,l??this.defaults)}parseMarkdown(i){return(l,c)=>{let m={...c},u={...this.defaults,...m},f=this.onError(!!u.silent,!!u.async);if(this.defaults.async===!0&&m.async===!1)return f(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof l>"u"||l===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof l!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected"));if(u.hooks&&(u.hooks.options=u,u.hooks.block=i),u.async)return(async()=>{let g=u.hooks?await u.hooks.preprocess(l):l,v=await(u.hooks?await u.hooks.provideLexer(i):i?Sa.lex:Sa.lexInline)(g,u),k=u.hooks?await u.hooks.processAllTokens(v):v;u.walkTokens&&await Promise.all(this.walkTokens(k,u.walkTokens));let S=await(u.hooks?await u.hooks.provideParser(i):i?ka.parse:ka.parseInline)(k,u);return u.hooks?await u.hooks.postprocess(S):S})().catch(f);try{u.hooks&&(l=u.hooks.preprocess(l));let g=(u.hooks?u.hooks.provideLexer(i):i?Sa.lex:Sa.lexInline)(l,u);u.hooks&&(g=u.hooks.processAllTokens(g)),u.walkTokens&&this.walkTokens(g,u.walkTokens);let v=(u.hooks?u.hooks.provideParser(i):i?ka.parse:ka.parseInline)(g,u);return u.hooks&&(v=u.hooks.postprocess(v)),v}catch(g){return f(g)}}}onError(i,l){return c=>{if(c.message+=`
Please report this to https://github.com/markedjs/marked.`,i){let m="<p>An error occurred:</p><pre>"+za(c.message+"",!0)+"</pre>";return l?Promise.resolve(m):m}if(l)return Promise.reject(c);throw c}}},kr=new bf;function F(i,l){return kr.parse(i,l)}F.options=F.setOptions=function(i){return kr.setOptions(i),F.defaults=kr.defaults,uu(F.defaults),F};F.getDefaults=Ri;F.defaults=jr;F.use=function(...i){return kr.use(...i),F.defaults=kr.defaults,uu(F.defaults),F};F.walkTokens=function(i,l){return kr.walkTokens(i,l)};F.parseInline=kr.parseInline;F.Parser=ka;F.parser=ka.parse;F.Renderer=pt;F.TextRenderer=Bi;F.Lexer=Sa;F.lexer=Sa.lex;F.Tokenizer=mt;F.Hooks=Fn;F.parse=F;F.options;F.setOptions;F.use;F.walkTokens;F.parseInline;ka.parse;Sa.lex;/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cf=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,c,m)=>m?m.toUpperCase():c.toLowerCase()),au=i=>{const l=Cf(i);return l.charAt(0).toUpperCase()+l.slice(1)},Cu=(...i)=>i.filter((l,c,m)=>!!l&&l.trim()!==""&&m.indexOf(l)===c).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Af={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=Se.forwardRef(({color:i="currentColor",size:l=24,strokeWidth:c=2,absoluteStrokeWidth:m,className:u="",children:f,iconNode:g,...v},k)=>Se.createElement("svg",{ref:k,...Af,width:l,height:l,stroke:i,strokeWidth:m?Number(c)*24/Number(l):c,className:Cu("lucide",u),...v},[...g.map(([S,D])=>Se.createElement(S,D)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(i,l)=>{const c=Se.forwardRef(({className:m,...u},f)=>Se.createElement(Sf,{ref:f,iconNode:l,className:Cu(`lucide-${yf(au(i))}`,`lucide-${i}`,m),...u}));return c.displayName=au(i),c};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],jf=$("arrow-left",kf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Ba=$("arrow-right",Pf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],wf=$("bookmark",Nf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Ef=$("boxes",If);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],wi=$("brain",zf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Tf=$("briefcase",Rf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Gn=$("building-2",Df);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]],Ii=$("cable",Lf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],fa=$("camera",Of);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],qf=$("car",Mf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],ct=$("chart-column",Vf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ue=$("chevron-right",Bf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],pa=$("circle-check",$f);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],xt=$("clipboard-check",_f);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Qn=$("clock",Hf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Uf=$("dollar-sign",Ff);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Jr=$("external-link",Wf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Yf=$("eye",Gf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],ru=$("facebook",Qf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Zf=$("file-text",Kf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],bt=$("globe",Xf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]],eg=$("hard-drive-download",Jf);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],ft=$("headphones",ag);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Ei=$("house",rg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],og=$("info",ng);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],nu=$("instagram",tg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],ig=$("layout-dashboard",sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],cg=$("lightbulb",lg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],ou=$("linkedin",dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],en=$("lock",ug);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],ir=$("mail",mg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],tu=$("map-pin",pg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],gg=$("menu",fg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Un=$("message-circle",hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],su=$("moon",vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],ta=$("phone",xg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],yg=$("quote",bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],xi=$("scan-line",Cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Sg=$("search",Ag);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],jg=$("send",kg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],$i=$("server",Pg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Sr=$("settings-2",Ng);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ig=$("settings",wg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],zg=$("share-2",Eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Tg=$("shield-check",Rg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],lr=$("shield",Dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],Au=$("store",Lg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Mg=$("trending-up",Og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Su=$("triangle-alert",qg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],ku=$("users",Vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],iu=$("utensils-crossed",Bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],_i=$("video",$g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]],gt=$("warehouse",_g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Fg=$("wifi-off",Hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Wg=$("wifi",Ug);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],dt=$("workflow",Gg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],bi=$("wrench",Yg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Kg=$("x",Qg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Hi=$("zap",Zg),yi="https://wa.me/573337450634?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20c%C3%A1maras%20de%20seguridad%20para%20mi%20negocio%20en%20Bogot%C3%A1";function Xg({md:i}){return n.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(i)}})}const Jg=[{name:"Básico",cameras:"4 cámaras",price:"$1.800.000",desc:"Ideal para locales pequeños y consultorios",features:["4 cámaras HD 4MP","DVR 4 canales","1 TB almacenamiento","Instalación incluida","Soporte 30 días","App móvil Remotion"],highlight:!1},{name:"Profesional",cameras:"8 cámaras",price:"$3.200.000",desc:"Para negocios medianos con alta rotación",features:["8 cámaras 4MP ColorVu","DVR 8 canales","2 TB almacenamiento","Instalación incluida","Soporte 90 días","Alertas automáticas IA","App móvil + escritorio"],highlight:!0},{name:"Empresarial",cameras:"16 cámaras",price:"$5.600.000",desc:"Cobertura completa para bodegas y franquicias",features:["16 cámaras 4MP","NVR 16 canales PoE","4 TB almacenamiento RAID","Instalación incluida","Soporte 6 meses","Analítica IA completa","Dashboard remoto 24/7","Integración WhatsApp/CRM"],highlight:!1},{name:"IA Total",cameras:"8-16 cámaras + IA",price:"Desde $4.500.000",desc:"Analítica inteligente: aforo, intrusión, PPE, arqueo",features:["Hardware + servidor edge GPU","YOLO v8 detección objetos","PPE detection (EPP obligatorio)","Control de aforo en tiempo real","Arqueo de caja por video","Alertas WhatsApp/CRM automáticas","Dashboard ejecutivo con métricas","Soporte prioritario 12 meses"],highlight:!1}],eh=[{q:"¿Cuánto cuestan las cámaras de seguridad para un negocio en Bogotá?",a:"El rango va desde $1.800.000 COP para 4 cámaras básicas hasta $5.600.000 para 16 cámaras con NVR. El plan con analítica IA cuesta desde $4.500.000 incluyendo servidor edge. El precio depende del hardware, cantidad de puntos y complejidad de instalación."},{q:"¿Cuánto tarda la instalación?",a:"Un sistema de 4 a 8 cámaras se instala en 1 día hábil. Sistemas de 16+ cámaras con cableado estructurado y servidor IA pueden tomar 2 a 3 días. Siempre coordinamos la instalación en horarios que no interrumpan la operación de su negocio."},{q:"¿Puedo ver las cámaras desde mi celular?",a:"Sí. Todas nuestras instalaciones incluyen configuración de app móvil (Remotion Hik-Connect o HiK-Connect). Puede ver en vivo, recibir alertas, y reproducir grabaciones desde cualquier lugar con internet."},{q:"¿Qué es la analítica de video con IA?",a:"Es software que analiza el video en tiempo real usando inteligencia artificial (YOLO v8). Detecta personas, vehículos, objetos olvidados, controla aforo, verifica uso de EPP, y puede hacer arqueo de caja. Las alertas se envían por WhatsApp o email automáticamente."},{q:"¿Necesito internet para que funcionen las cámaras?",a:"Las cámaras graban localmente al DVR/NVR sin necesidad de internet. El internet se necesita para: ver desde el celular, recibir alertas IA, y acceso remoto. Recomendamos mínimo 10 Mbps simétricos para sistemas con IA."},{q:"¿Ofrecen garantía y soporte?",a:"Sí. Hardware con garantía de fábrica (1-3 años según marca). Soporte técnico incluido según plan: 30 días (Básico) hasta 12 meses (IA Total). Extendemos soporte con contratos mensuales desde $250.000/mes."},{q:"¿Funciona en caso de apagón o corte de luz?",a:"Recomendamos incluir un UPS (no Break) que mantiene el DVR y módem funcionando 30-45 minutos. Si necesita cobertura total, ofrecemos soluciones con baterías de respaldo de hasta 4 horas. Las cámaras IP PoE se alimentan por el cable Ethernet."},{q:"¿En qué zonas de Bogotá instalan?",a:"Cubrimos toda Bogotá y área metropolitana: Centro, Norte (Chicó, Chapinero, Usaquén), Sur (Kennedy, Bosa, Ciudad Bolívar), Occidente (Engativá, Suba, Fontibón), y oriente (Santa Fe, Usme). También atendemos municipalities cercanos."}];function ah(){return n.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[n.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),n.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[n.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[n.jsx(lr,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Bogotá 2026"})]}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Cámaras de Seguridad para Negocio en Bogotá"}),n.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"Instalación profesional de cámaras con inteligencia artificial para locales comerciales, bodegas, restaurantes y oficinas. Hardware Hikvision, analítica YOLO v8, alertas automáticas por WhatsApp."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[n.jsxs("a",{href:yi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Cotizar Ahora ",n.jsx(Ba,{className:"w-4 h-4"})]}),n.jsxs("a",{href:"#precios",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Precios 2026 ",n.jsx(ue,{className:"w-4 h-4"})]})]}),n.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:fa,label:"500+ instalaciones",sub:"en Bogotá"},{icon:wi,label:"IA en tiempo real",sub:"YOLO v8"},{icon:en,label:"Garantía 3 años",sub:"hardware Hikvision"},{icon:ta,label:"Soporte 24/7",sub:"WhatsApp directo"}].map(i=>n.jsxs("div",{className:"text-center",children:[n.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),n.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),n.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"¿Por qué su negocio necesita cámaras de seguridad?"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Bogotá registra más de 45.000 hurtos al año. El 70% de negocios sin cámaras no logra identificar responsables. Estos son los problemas que resolvemos:"}),n.jsx("div",{className:"space-y-8",children:[{icon:Su,title:"Robos externos sin evidencia",desc:"Asaltos a mano armada, rompimiento de vidrieras, hurtos de mercancía. Sin cámaras, la policía no tiene pistas y el seguro no cubre la pérdida. Con grabaciones en HD, aumentamos las probabilidades de recuperación en un 340%.",stat:"340%",statLabel:"más recuperaciones con video"},{icon:ku,title:"Robo interno y mermas injustificadas",desc:"El 22% de las pérdidas en retail son por robo interno. Nuestros clientes en Kennedy redujeron mermas en 68% al instalar cámaras en cajas, almacenes y zonas de personal. La analítica de IA detecta comportamientos anómalos en tiempo real.",stat:"68%",statLabel:"reducción de mermas reportada"},{icon:en,title:"Cierres sin evidencia para seguros",desc:"Los aseguradores exigen pruebas de video para cubrir siniestros. Sin cámaras, una inundación o incendio puede costarle millones sin compensación. Guardamos 90 días de grabación en almacenamiento seguro con RAID.",stat:"90 días",statLabel:"de respaldo automático"}].map(i=>n.jsxs("div",{className:"flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"flex-shrink-0",children:n.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-6 h-6",style:{color:"var(--color-accent)"}})})}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsxs("div",{className:"flex items-baseline gap-2",children:[n.jsx("span",{className:"font-sans text-2xl font-bold",style:{color:"var(--color-accent)"},children:i.stat}),n.jsx("span",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:i.statLabel})]})]})]},i.title))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Soluciones para cada tipo de negocio"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Cada comercio en Bogotá tiene riesgos diferentes. Diseñamos sistemas específicos para su operación:"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:Gn,title:"Local Comercial",desc:"Cobertura de vitrina, caja y área de clientes. Cámaras dome para interior, bullet para fachada. Detección de horarios y alerta fuera de horario.",cameras:"4-8 cámaras",zones:"Fachada · Caja · Almacén"},{icon:gt,title:"Bodega",desc:"Cámaras bullet con alcance largo para pasillos amplios. Visión nocturna ColorVu para patios de carga. Control de acceso por plate recognition.",cameras:"8-16 cámaras",zones:"Accesos · Pasillos · Patio carga"},{icon:iu,title:"Restaurante",desc:"Analítica de cocina, sala y barra. Control de aforo para cumplimiento IDEA. Cámaras resistentes a humedad y grasas industriales.",cameras:"6-12 cámaras",zones:"Cocina · Sala · Barra · Bodega"},{icon:Tf,title:"Oficina",desc:"Acceso por人脸识别, control de visitantes, zonas restringidas. Integración con Sistemas de control de acceso existentes. Cámaras discretas tipo mini-dome.",cameras:"4-8 cámaras",zones:"Recepción · Piso · Servidores · Salas"},{icon:qf,title:"Estacionamiento",desc:"LPR (reconocimiento de placas) para control de acceso. Cámaras ANPR con flash IR para lectura 24/7. Analítica de cajones y control de permanencia.",cameras:"8-16 cámaras",zones:"Entrada · Salida · Pisos · Vigilancia"}].map(i=>n.jsxs("div",{className:"group p-6 rounded-xl border transition-all hover:shadow-lg",style:{borderColor:"var(--color-border)"},children:[n.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsxs("div",{className:"flex flex-wrap gap-2",children:[n.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.cameras}),n.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full border",style:{borderColor:"var(--color-border)",color:"var(--color-muted-foreground)"},children:i.zones})]})]},i.title))})]})}),n.jsx("section",{id:"precios",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-6xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Precios reales 2026"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Sin sorpresas. Incluye hardware, instalación y configuración. Los precios son COP e IVA incluido."}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:Jg.map(i=>n.jsxs("div",{className:"relative flex flex-col p-6 rounded-xl border-2 transition-all",style:{borderColor:i.highlight?"var(--color-accent)":"var(--color-border)",backgroundColor:i.highlight?"var(--color-accent)":"var(--color-background)",color:i.highlight?"var(--color-background)":"var(--color-foreground)"},children:[i.highlight&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-sans font-bold px-4 py-1 rounded-full",style:{backgroundColor:"var(--color-background)",color:"var(--color-accent)"},children:"Más vendido"}),n.jsx("h3",{className:"font-serif text-xl font-bold mb-1",children:i.name}),n.jsx("p",{className:"font-sans text-sm mb-1",style:{opacity:.8},children:i.cameras}),n.jsx("div",{className:"font-serif text-3xl font-bold my-4",children:i.price}),n.jsx("p",{className:"font-sans text-sm mb-6",style:{opacity:.7},children:i.desc}),n.jsx("ul",{className:"space-y-2 mb-8 flex-1",children:i.features.map(l=>n.jsxs("li",{className:"flex items-start gap-2 text-sm font-sans",children:[n.jsx(pa,{className:"w-4 h-4 mt-0.5 flex-shrink-0",style:{opacity:.7}}),n.jsx("span",{children:l})]},l))}),n.jsxs("a",{href:yi,target:"_blank",rel:"noopener noreferrer",className:"w-full text-center px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-all hover:scale-105 block",style:{backgroundColor:i.highlight?"var(--color-background)":"var(--color-accent)",color:i.highlight?"var(--color-accent)":"var(--color-background)",border:i.highlight?"2px solid var(--color-background)":"none"},children:["Cotizar ",i.name]})]},i.name))}),n.jsx("div",{className:"mt-8 text-center",children:n.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:"* Precios referenciales para Bogotá. El costo final depende de distancias, cantidad de puntos y accesibilidad. Cotización sin compromiso vía WhatsApp."})})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Cómo funciona nuestro servicio"}),n.jsx("p",{className:"font-sans text-lg text-center mb-16 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"De la primera llamada al sistema funcionando en 4 pasos claros:"}),n.jsxs("div",{className:"space-y-12 relative",children:[n.jsx("div",{className:"absolute left-6 md:left-8 top-0 bottom-0 w-0.5",style:{backgroundColor:"var(--color-border)"}}),[{icon:xt,step:"01",title:"Auditoría Gratuita",desc:"Visitamos su negocio en Bogotá, identificamos puntos críticos, medimos distancias, evaluamos infraestructura eléctrica y de red. Le entregamos un plano con ubicación óptima de cada cámara. Sin compromiso.",time:"1-2 horas"},{icon:Ig,step:"02",title:"Instalación Profesional",desc:"Nuestro equipo técnico instala el hardware en menos de 24 horas para sistemas de hasta 8 cámaras. Cableado estructurado o inalámbrico según su caso. No dejamos cables expuestos ni destornilladores olvidados.",time:"1-3 días"},{icon:wi,step:"03",title:"Configuración IA y alertas",desc:"Configuramos la analítica de video (YOLO v8): detección de personas, control de aforo, alertas de intrusión. Conectamos las alertas a su WhatsApp o CRM. Le entrenamos para usar la app Remotion.",time:"2-4 horas"},{icon:ft,step:"04",title:"Soporte Continuo",desc:"Seguimiento remoto del sistema con alertas automáticas. Si una cámara falla, usted recibe un aviso por WhatsApp antes de notar la caída. Soporte técnico vía WhatsApp. Actualizaciones de firmware incluidas. Mantenimiento preventivo cada 6 meses.",time:"24/7"}].map((i,l)=>n.jsxs("div",{className:"relative flex gap-6 md:gap-8",children:[n.jsx("div",{className:"flex-shrink-0 z-10",children:n.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif font-bold text-lg md:text-xl border-4",style:{backgroundColor:"var(--color-background)",borderColor:"var(--color-accent)",color:"var(--color-accent)"},children:i.step})}),n.jsxs("div",{className:"flex-1 pt-2 md:pt-4",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("h3",{className:"font-serif text-xl md:text-2xl font-bold",children:i.title})]}),n.jsx("p",{className:"font-sans leading-relaxed mb-3",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsxs("span",{className:"inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.8},children:["⏱ ",i.time]})]})]},i.step))]})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Casos reales en Bogotá"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Negocios que ya protegemos con cámaras e inteligencia artificial:"}),n.jsx("div",{className:"space-y-8",children:[{business:"Ferretería Los 3 Amigos — Suba",problem:"Pérdidas de $8 millones/mes por mermas no identificadas. Sin cámaras, el dueño no podía saber si eran robos internos o errores de inventario.",solution:"Instalación de 8 cámaras Hikvision ColorVu con analítica IA. Detección de personas en zona de almacén y arqueo de caja por video.",result:"Mermas reducidas en 68% en 3 meses. ROI recuperado en 5 semanas. Ahorro anual estimado: $65 millones.",icon:Gn},{business:"Restaurante La Brasa — Chapinero",problem:"Sanciones del IDEA por exceder aforo. El local tenía un sistema de conteo manual que fallaba los fines de semana.",solution:"6 cámaras con control de aforo en tiempo real por IA. Alertas automáticas cuando se alcanza el 80% de capacidad. Dashboard para gerencia.",result:"Cero multas en 12 meses. Mejor control de inventario de comida. Satisfacción de clientes aumentó por evitar esperas.",icon:iu},{business:"Bodega Distribuidora Norte — Kennedy",problem:"2 asaltos en 6 meses. Los ladrones entraban por la noche y no había evidencia para la policía ni para el seguro.",solution:"12 cámaras bullet con IR 80m, sensores de movimiento IA, alertas WhatsApp en 3 segundos. Server edge con grabación 90 días.",result:"Intento de robo capturado en HD. Policía identificó y capturó sospechosos. Prima de seguro redujo un 40% el siguiente año.",icon:gt}].map(i=>n.jsxs("div",{className:"p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[n.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("h3",{className:"font-serif text-lg font-bold",children:i.business})]}),n.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[n.jsxs("div",{children:[n.jsx("p",{className:"font-sans text-xs font-semibold uppercase tracking-wider mb-1",style:{color:"var(--color-accent)"},children:"Problema"}),n.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:i.problem})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-sans text-xs font-semibold uppercase tracking-wider mb-1",style:{color:"var(--color-accent)"},children:"Solución"}),n.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:i.solution})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-sans text-xs font-semibold uppercase tracking-wider mb-1",style:{color:"var(--color-accent)"},children:"Resultado"}),n.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:i.result})]})]})]},i.business))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Todo lo que necesita saber sobre cámaras de seguridad para su negocio en Bogotá:"}),n.jsx("div",{className:"space-y-4",children:eh.map(i=>n.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[n.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[n.jsx("span",{children:i.q}),n.jsx(ue,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),n.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:n.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Proteja su negocio hoy"}),n.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Cada día sin cámaras es un día sin evidencia. Solicite su auditoría gratuita y reciba un plano personalizado para su negocio en Bogotá."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[n.jsxs("a",{href:yi,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[n.jsx(ta,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),n.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[n.jsx(ir,{className:"w-4 h-4"})," Email Directo"]})]}),n.jsx("div",{className:"text-left",children:n.jsx(Xg,{md:`
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
`})})]})})]})}function rh(){const i=["Suba Centro","La Florida","Salitre Oriental","San Carlos","El Recreo","Ciudad Bolívar"],l=[{titulo:"Bodegas y Almacenes",desc:"Control de acceso a mercancía de alto valor con cámaras ColorVu que identifican placa y rostro a las 2 AM.",icon:"📦"},{titulo:"Ferreterías",desc:"Detección de hurto interno y externo con IA que alerta en tiempo real al propietario vía WhatsApp.",icon:"🔧"},{titulo:"Conjuntos Residenciales",desc:"Aforo de parqueaderos, control de visitantes y vigilancia perimetral con analítica YOLO.",icon:"🏢"}],c=[{titulo:"Instalación en 24 horas",desc:"Técnicos certificados en Suba con cobertura el mismo día en La Florida y Salitre Oriental.",icon:"⏱️"},{titulo:"Alertas y analítica IA",desc:"Analítica de video en tiempo real que dispara alertas automáticas a tu WhatsApp cuando ocurre un evento.",icon:"👁️"},{titulo:"Garantía de 2 años",desc:"Equipos con garantía extendida y soporte técnico incluido en toda la localidad de Suba.",icon:"🛡️"},{titulo:"Precios desde $850.000",desc:"Kit completo de 4 cámaras Hikvision + DVR + instalación + configuración remota.",icon:"💰"}],m=`
### Ferretería El Progreso — Suba Centro

**Problema:** Hurtos recurrentes entre las 1 AM y 4 AM. El propietario perdía mercancía por valor de $3.200.000 mensuales y no tenía evidencia para denunciar.

**Solución:** Instalación de 6 cámaras ColorVu con lente motorizado 2.8-12mm. Placa de dominio capturada a 35 metros. Detección de intrusiones con alerta WhatsApp en 8 segundos.

**Resultado:** Primer robo detectado en tiempo real. Placa capturada, video entregado a la Policía Nacional. Recuperación del 85% de mercancía en 48 horas. Hurtos reducidos a cero en los siguientes 6 meses.
  `,u=[{q:"¿Cuánto cuestan las cámaras de seguridad en Suba?",a:"Los kits completos para Suba arrancan desde $850.000 COP para 4 cámaras con DVR, incluyendo instalación. Para conjuntos residenciales o bodegas grandes, cotizamos a medida según el número de puntos."},{q:"¿Instalan cámaras en La Florida y Salitre Oriental?",a:"Sí, cubrimos toda la localidad de Suba: La Florida, Salitre Oriental, San Carlos, El Recreo, Ciudad Bolívar y Suba Centro. Nuestros técnicos llegan en menos de 24 horas."},{q:"¿Las cámaras funcionan con el apagón de luz en Suba?",a:"Sí, todas nuestras cámaras Hikvision ColorVu tienen visión nocturna con luz artificial integrada. Incluso en oscuridad total, captan imagen a color con detalle de placas."},{q:"¿Puedo ver las cámaras desde mi celular?",a:"Sí, configuração remota vía app Hik-Connect o HiLook. Puedes ver en vivo, reproducir grabaciones y recibir alertas desde cualquier lugar."},{q:"¿Ofrecen mantenimiento preventivo en Suba?",a:"Sí, tenemos planes de mantenimiento trimestral que incluyen limpieza de lentes, revisión de cableado, actualización de firmware y backup de configuración."}],f={"@context":"https://schema.org","@type":"LocalBusiness",name:"Servicios APC - Cámaras de Seguridad en Suba",description:"Instalación de cámaras de seguridad en Suba, Bogotá. Hikvision, ColorVu, analítica YOLO. Cobertura La Florida, Salitre Oriental, San Carlos.",areaServed:{"@type":"City",name:"Suba, Bogotá"},telephone:"+573337450634",email:"serviciosapcsoporte@gmail.com"};return n.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-16 font-sans",style:{color:"var(--color-foreground)",background:"var(--color-background)"},children:[n.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f)}}),n.jsxs("header",{className:"mb-12",children:[n.jsx("p",{className:"text-sm uppercase tracking-widest mb-2",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Suba, Bogotá"}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold leading-tight mb-4",style:{color:"var(--color-foreground)"},children:"Cámaras de Seguridad en Suba, Bogotá"}),n.jsx("p",{className:"text-lg mb-6",style:{color:"var(--color-muted-foreground)"},children:"Soluciones de video con IA para cada barrio de Suba. Desde La Florida hasta Salitre Oriental, protegemos tu negocio y tu hogar con tecnología Hikvision ColorVu y analítica de inteligencia artificial."}),n.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Suba",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Cotizar por WhatsApp"})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Cobertura en Suba"}),n.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:i.map(g=>n.jsxs("li",{className:"px-4 py-3 rounded-lg text-sm font-medium",style:{background:"var(--color-secondary)",color:"var(--color-foreground)"},children:["✓ ",g]},g))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Soluciones para negocios en Suba"}),n.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:l.map(g=>n.jsxs("div",{className:"rounded-xl p-6",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[n.jsx("span",{className:"text-3xl block mb-3",children:g.icon}),n.jsx("h3",{className:"font-serif font-bold text-lg mb-2",children:g.titulo}),n.jsx("p",{className:"text-sm",style:{color:"var(--color-muted-foreground)"},children:g.desc})]},g.titulo))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"¿Por qué elegir Servicios APC en Suba?"}),n.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:c.map(g=>n.jsxs("div",{className:"flex gap-4 items-start",children:[n.jsx("span",{className:"text-3xl flex-shrink-0",children:g.icon}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-serif font-bold text-lg",children:g.titulo}),n.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-muted-foreground)"},children:g.desc})]})]},g.titulo))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Casos reales en Suba"}),n.jsx("div",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:n.jsx("div",{className:"prose prose-sm max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(m)}})})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Preguntas frecuentes sobre cámaras en Suba"}),n.jsx("div",{className:"space-y-6",children:u.map((g,v)=>n.jsxs("details",{className:"group rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[n.jsxs("summary",{className:"px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center",style:{background:"var(--color-secondary)"},children:[g.q,n.jsx("span",{className:"ml-2 transition-transform group-open:rotate-45 text-xl",children:"+"})]}),n.jsx("div",{className:"px-6 py-4 text-sm",style:{color:"var(--color-muted-foreground)"},children:g.a})]},v))})]}),n.jsxs("section",{className:"mb-12 text-center",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-4",children:"¿Listo para proteger tu negocio en Suba?"}),n.jsx("p",{className:"mb-6",style:{color:"var(--color-muted-foreground)"},children:"Cotización sin compromiso en menos de 2 horas."}),n.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Suba",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Solicitar cotización ahora"})]}),n.jsxs("section",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[n.jsx("h2",{className:"font-serif text-xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Ecosistema APC: Todo conectado"}),n.jsx("div",{className:"prose prose-sm max-w-none font-sans mb-6",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(`| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`)}}),n.jsx("div",{className:"text-sm font-sans",style:{color:"var(--color-muted-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(`---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`)}})]})]})}function nh(){const i=["Kennedy Central","Castilla","Timiza","Patio Bonito","Carrera 68"],l=[{titulo:"Tiendas de Barrio",desc:"Detección de hurtos internos con IA que identifica movimientos sospechosos fuera de horario laboral y envía alertas al propietario.",icon:"🏪"},{titulo:"Talleres Mecánicos",desc:"Cobertura de herramientas y vehículos en proceso con grabación 24/7 y visión nocturna ColorVu.",icon:"🔧"},{titulo:"Bodegas de Ropa",desc:"Control de inventario visual con analítica YOLO que registra entrada y salida de mercancía en tiempo real.",icon:"👔"}],c=[{titulo:"Cobertura express en Kennedy",desc:"Técnicos驻扎 en la localidad. Llegamos a Castilla, Timiza y Patio Bonito en menos de 4 horas.",icon:"🚀"},{titulo:"IA que aprende de tu negocio",desc:"Nuestros sistemas se adaptan a los patrones de tu tienda o taller para reducir falsas alarmas al mínimo.",icon:"🧠"},{titulo:"Soporte local sin outsourcing",desc:"Equipo propio en Kennedy. No tercerizamos el soporte técnico ni la instalación.",icon:"👨‍🔧"},{titulo:"Financiación directa",desc:"Paga en 3 cuotas sin intereses. Incluimos kit de 4 cámaras + DVR + instalación desde $850.000.",icon:"💳"}],m=`
### Tienda de Barrio — Kennedy Central

**Problema:** El propietario notó faltantes en caja de $180.000 semanales pero no podía identificar al responsable. Las cámaras antiguas no grababan en la noche y la resolución era insuficiente.

**Solución:** Reemplazo de 4 cámaras legacy por kit Hikvision ColorVu 4MP con visión nocturna a color. Instalación de cámara oculta en punto de venta con analítica de movimiento. Configuración de alertas WhatsApp cuando有人 se acerca a la caja fuera de horario.

**Resultado:** En 72 horas se identificó al empleado que realizaba retiros no autorizados. El propietario obtuvo evidencia de video con timestamp. Hurto interno eliminado. Ahorro anual estimado: $9.360.000 COP.
  `,u=[{q:"¿Cuánto cuesta instalar cámaras de seguridad en Kennedy?",a:"Un kit de 4 cámaras Hikvision ColorVu con DVR e instalación cuesta desde $850.000 COP en Kennedy. Para tiendas y talleres, ofrecemos packs especializados con analítica IA desde $1.400.000 COP."},{q:"¿Cubren Patio Bonito y Castilla?",a:"Sí, cubrimos toda la localidad de Kennedy: Kennedy Central, Castilla, Timiza, Patio Bonito y la zona de Carrera 68. Nuestros técnicos están en la localidad y llegan el mismo día."},{q:"¿Las cámaras detectan hurtos internos?",a:"Sí, nuestra analítica IA detecta movimientos sospechosos cerca de cajas fuertes, puntos de venta y zonas restringidas. Puedes configurar alertas automáticas por WhatsApp cuando se Active el detector."},{q:"¿Funcionan con el apagón de luz?",a:"Todas nuestras cámaras ColorVu tienen visión nocturna con luz infrarroja integrada. Funcionan perfectamente en oscuridad total, captando imagen a color con detalle de rostros."}],f={"@context":"https://schema.org","@type":"LocalBusiness",name:"Servicios APC - Cámaras de Seguridad en Kennedy",description:"Instalación de cámaras de seguridad en Kennedy, Bogotá. Hikvision ColorVu, IA antihurto, detección de intrusiones. Cobertura Castilla, Timiza, Patio Bonito.",areaServed:{"@type":"City",name:"Kennedy, Bogotá"},telephone:"+573337450634",email:"serviciosapcsoporte@gmail.com"};return n.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-16 font-sans",style:{color:"var(--color-foreground)",background:"var(--color-background)"},children:[n.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f)}}),n.jsxs("header",{className:"mb-12",children:[n.jsx("p",{className:"text-sm uppercase tracking-widest mb-2",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Kennedy, Bogotá"}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold leading-tight mb-4",style:{color:"var(--color-foreground)"},children:"Cámaras de Seguridad en Kennedy, Bogotá"}),n.jsx("p",{className:"text-lg mb-6",style:{color:"var(--color-muted-foreground)"},children:"Protege tu tienda, taller o bodega en Kennedy con tecnología de última generación. Desde Kennedy Central hasta Patio Bonito, instalamos sistemas de video con IA con inteligencia artificial que previenen hurtos y controlan accesos."}),n.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Kennedy",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Cotizar por WhatsApp"})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Cobertura en Kennedy"}),n.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:i.map(g=>n.jsxs("li",{className:"px-4 py-3 rounded-lg text-sm font-medium",style:{background:"var(--color-secondary)",color:"var(--color-foreground)"},children:["✓ ",g]},g))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Soluciones para negocios en Kennedy"}),n.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:l.map(g=>n.jsxs("div",{className:"rounded-xl p-6",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[n.jsx("span",{className:"text-3xl block mb-3",children:g.icon}),n.jsx("h3",{className:"font-serif font-bold text-lg mb-2",children:g.titulo}),n.jsx("p",{className:"text-sm",style:{color:"var(--color-muted-foreground)"},children:g.desc})]},g.titulo))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"¿Por qué elegir Servicios APC en Kennedy?"}),n.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:c.map(g=>n.jsxs("div",{className:"flex gap-4 items-start",children:[n.jsx("span",{className:"text-3xl flex-shrink-0",children:g.icon}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-serif font-bold text-lg",children:g.titulo}),n.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-muted-foreground)"},children:g.desc})]})]},g.titulo))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Casos reales en Kennedy"}),n.jsx("div",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:n.jsx("div",{className:"prose prose-sm max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(m)}})})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Preguntas frecuentes sobre cámaras en Kennedy"}),n.jsx("div",{className:"space-y-6",children:u.map((g,v)=>n.jsxs("details",{className:"group rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[n.jsxs("summary",{className:"px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center",style:{background:"var(--color-secondary)"},children:[g.q,n.jsx("span",{className:"ml-2 transition-transform group-open:rotate-45 text-xl",children:"+"})]}),n.jsx("div",{className:"px-6 py-4 text-sm",style:{color:"var(--color-muted-foreground)"},children:g.a})]},v))})]}),n.jsxs("section",{className:"mb-12 text-center",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-4",children:"¿Listo para proteger tu negocio en Kennedy?"}),n.jsx("p",{className:"mb-6",style:{color:"var(--color-muted-foreground)"},children:"Cotización sin compromiso en menos de 2 horas."}),n.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Kennedy",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Solicitar cotización ahora"})]}),n.jsxs("section",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[n.jsx("h2",{className:"font-serif text-xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Ecosistema APC: Todo conectado"}),n.jsx("div",{className:"prose prose-sm max-w-none font-sans mb-6",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(`| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`)}}),n.jsx("div",{className:"text-sm font-sans",style:{color:"var(--color-muted-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(`---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`)}})]})]})}function oh(){const i=["Chapinero Alto","Chapinero Central","Chicó","Rosales","Tintal"],l=[{titulo:"Clínicas y Consultorios",desc:"Control de aforo, cumplimiento de normas PPE para personal sanitario y analítica de áreas restringidas con alertas en tiempo real.",icon:"🏥"},{titulo:"Restaurantes",desc:"Analítica de aforo para optimizar servicio, detección de intrusión nocturna y analítica de cocina con cámaras ambientadas.",icon:"🍽️"},{titulo:"Oficinas y Consultorios",desc:"Control de acceso con reconocimiento facial, registro de visitantes y vigilancia de salas de datos con analítica IA.",icon:"💼"}],c=[{titulo:"Exigencia normativa Chapinero",desc:"Conocemos los requisitos de seguridad de clínicas y oficinas en Chapinero. Cumplimos Norma 17025 y resoluciones MinSalud.",icon:"📋"},{titulo:"Tecnología invisible",desc:"Cámaras compactas que se integran al diseño interior de clínicas y restaurantes sin alterar la estética.",icon:"🎨"},{titulo:"Integración con software clínico",desc:"Nuestros sistemas se conectan con historiales de pacientes y sistemas de gestión de turnos para auditoría completa.",icon:"🔗"},{titulo:"Respuesta garantizada en 2 horas",desc:"Para clínicas y consultorios en Chicó, Rosales y Chapinero Alto, garantizamos soporte técnico presencial en máximo 2 horas.",icon:"⚡"}],m=`
### Clínica Dental Sonrisa — Chapinero Alto

**Problema:** La clínica necesitaba cumplir con las normas de protección para personal y pacientes, pero no tenía sistema de aforo ni evidencia de uso de EPP. Además, las caídas de pacientes en zonas comunes eran un riesgo legal sin grabación.

**Solución:** Instalación de 8 cámaras con analítica de aforo por zona (sala de espera, consultorios, recepción). Detección automática de uso de mascarilla (PPE) para personal. Cámaras de caída con alerta inmediata a administración.

**Resultado:** Cumplimiento total de normativa MinSalud. Reducción de tiempos de espera en 35% gracias a optimización de aforo. Dos incidentes de caída documentados y resueltos sin litigios. ROI en 4 meses por ahorro en pólizas de responsabilidad civil.
  `,u=[{q:"¿Cuánto cuesta el sistema de aforo para clínicas en Chapinero?",a:"El sistema completo con 8 cámaras, analítica de aforo, detección PPE e instalación cuesta desde $4.200.000 COP. Incluye configuración personalizada por zona y capacitación al personal."},{q:"¿Las cámaras cumplen normativa MinSalud?",a:"Sí, nuestros sistemas generan reportes de cumplimiento PPE y aforo que cumplen con las resoluciones 2020 y 2021 del MinSalud. Incluimos dashboards exportables para auditorías."},{q:"¿Pueden integrarse con nuestro software de gestión?",a:"Sí, ofrecemos integración vía API REST con los principales software de gestión clínica. La integración permite cruzar datos de video con registros de pacientes para auditorías completas."},{q:"¿Instalan en restaurantes de Chicó y Rosales?",a:"Sí, cubrimos toda la localidad de Chapinero. Los restaurantes en Chicó y Rosales suelen requerir analítica de aforo + intrusiones nocturnas. Tenemos packs especializados."},{q:"¿Las cámaras son invasivas para los pacientes?",a:"No. Usamos modelos compactos tipo dome que se integran al diseño interior. Son discretas y no generan incomodidad. En clínicas, colocamos señalización visible según normativa."}],f={"@context":"https://schema.org","@type":"LocalBusiness",name:"Servicios APC - Cámaras de Seguridad en Chapinero",description:"Cámaras de seguridad para clínicas, restaurantes y oficinas en Chapinero, Bogotá. Analítica IA, PPE, aforo. Cobertura Chicó, Rosales, Tintal.",areaServed:{"@type":"City",name:"Chapinero, Bogotá"},telephone:"+573337450634",email:"serviciosapcsoporte@gmail.com"};return n.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-16 font-sans",style:{color:"var(--color-foreground)",background:"var(--color-background)"},children:[n.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f)}}),n.jsxs("header",{className:"mb-12",children:[n.jsx("p",{className:"text-sm uppercase tracking-widest mb-2",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Chapinero, Bogotá"}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold leading-tight mb-4",style:{color:"var(--color-foreground)"},children:"Cámaras de Seguridad en Chapinero, Bogotá"}),n.jsx("p",{className:"text-lg mb-6",style:{color:"var(--color-muted-foreground)"},children:"Soluciones de video con IA para clínicas, restaurantes y oficinas en Chapinero. Cumplimiento normativo, control de aforo y protección de personal con tecnología de analítica de IA y reconocimiento PPE."}),n.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Chapinero",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Cotizar por WhatsApp"})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Cobertura en Chapinero"}),n.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:i.map(g=>n.jsxs("li",{className:"px-4 py-3 rounded-lg text-sm font-medium",style:{background:"var(--color-secondary)",color:"var(--color-foreground)"},children:["✓ ",g]},g))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Soluciones para negocios en Chapinero"}),n.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:l.map(g=>n.jsxs("div",{className:"rounded-xl p-6",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[n.jsx("span",{className:"text-3xl block mb-3",children:g.icon}),n.jsx("h3",{className:"font-serif font-bold text-lg mb-2",children:g.titulo}),n.jsx("p",{className:"text-sm",style:{color:"var(--color-muted-foreground)"},children:g.desc})]},g.titulo))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"¿Por qué elegir Servicios APC en Chapinero?"}),n.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:c.map(g=>n.jsxs("div",{className:"flex gap-4 items-start",children:[n.jsx("span",{className:"text-3xl flex-shrink-0",children:g.icon}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-serif font-bold text-lg",children:g.titulo}),n.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-muted-foreground)"},children:g.desc})]})]},g.titulo))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Casos reales en Chapinero"}),n.jsx("div",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:n.jsx("div",{className:"prose prose-sm max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(m)}})})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Preguntas frecuentes sobre cámaras en Chapinero"}),n.jsx("div",{className:"space-y-6",children:u.map((g,v)=>n.jsxs("details",{className:"group rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[n.jsxs("summary",{className:"px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center",style:{background:"var(--color-secondary)"},children:[g.q,n.jsx("span",{className:"ml-2 transition-transform group-open:rotate-45 text-xl",children:"+"})]}),n.jsx("div",{className:"px-6 py-4 text-sm",style:{color:"var(--color-muted-foreground)"},children:g.a})]},v))})]}),n.jsxs("section",{className:"mb-12 text-center",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-4",children:"¿Listo para proteger tu clínica u oficina en Chapinero?"}),n.jsx("p",{className:"mb-6",style:{color:"var(--color-muted-foreground)"},children:"Cotización sin compromiso en menos de 2 horas."}),n.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Chapinero",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Solicitar cotización ahora"})]}),n.jsxs("section",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[n.jsx("h2",{className:"font-serif text-xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Ecosistema APC: Todo conectado"}),n.jsx("div",{className:"prose prose-sm max-w-none font-sans mb-6",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(`| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`)}}),n.jsx("div",{className:"text-sm font-sans",style:{color:"var(--color-muted-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(`---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`)}})]})]})}function th(){const i=["Usaquén Centro","Santa Bárbara","San Patricio","Los Cedros","Country Club"],l=[{titulo:"Restaurantes Gourmet",desc:"Analítica de aforo para optimizar mesas, analítica de cocina y entrada/salida de personal con reconocimiento facial.",icon:"🍷"},{titulo:"Hoteles Boutique",desc:"Control de acceso por habitaciones, cobertura de áreas comunes y lobby con IA que detecta comportamientos anómalos.",icon:"🏨"},{titulo:"Oficinas Corporativas",desc:"Cobertura perimetral, control de acceso con credenciales y analítica de salas de servidores con alertas en tiempo real.",icon:"🏢"}],c=[{titulo:"Experiencia con sector premium",desc:"Trabajamos con restaurantes de alto nivel, hoteles boutique y oficinas corporativas en Usaquén. Entendemos sus estándares.",icon:"⭐"},{titulo:"Diseño arquitectónico integrado",desc:"Cámaras que se融合 al diseño interior sin comprometer la estética de espacios premium como hotel boutique.",icon:"🏛️"},{titulo:"Dashboard ejecutivo en tiempo real",desc:"Panel de control con métricas de aforo, accesos y alertas diseñado para gerentes y propietarios.",icon:"📊"},{titulo:"SLA de 1 hora para emergencias",desc:"Para clientes premium en Country Club y Los Cedros, garantizamos respuesta técnica en máximo 1 hora.",icon:"🚨"}],m=`
### Restaurante La Cosecha — Usaquén Centro

**Problema:** El restaurante perdía mesas por no controlar el aforo en tiempo real. Los clientes esperaban 40+ minutos sin saber cuánto faltaba. Además, las intrusiones nocturnas en el área de vinos generaban pérdidas de $2.800.000 mensuales.

**Solución:** Sistema de analítica de aforo con 4 cámaras en zona de comedor y bar. Conteo automático de clientes por zona con dashboard para el maître. Cámaras de intrusiones en bodega de vinos con alerta WhatsApp en 5 segundos.

**Resultado:** Optimización del 40% en tiempos de espera. Ingreso adicional de $12.000.000 mensuales por mejor uso de mesas. Hurtos en bodega eliminados completamente. Dashboard de aforo integrado con sistema de reservas.
  `,u=[{q:"¿Cuánto cuesta un sistema de videovigilancia para restaurantes en Usaquén?",a:"Para restaurantes de Usaquén, un sistema completo con 6-8 cámaras, analítica de aforo e intrusiones cuesta desde $5.800.000 COP. Incluye dashboard ejecutivo, configuración por zona y capacitación."},{q:"¿Cubren Country Club y Los Cedros?",a:"Sí, cubrimos toda la localidad de Usaquén: Centro, Santa Bárbara, San Patricio, Los Cedros y Country Club. Nuestros clientes premium en estas zonas tienen SLA de 1 hora para emergencias."},{q:"¿El sistema de aforo es preciso?",a:"Sí, nuestra analítica YOLO tiene precisión del 97% en conteo de personas. Se adapta a diferentes configuraciones de mesas y zonas, y genera reportes exportables para auditorías."},{q:"¿Las cámaras se integran con nuestro sistema de reservas?",a:"Sí, ofrecemos integración vía API con los principales sistemas de reservas (OpenTable, Resy, sistema propio). El aforo en tiempo real se alimenta al dashboard de disponibilidad."}],f={"@context":"https://schema.org","@type":"LocalBusiness",name:"Servicios APC - Cámaras de Seguridad en Usaquén",description:"Cámaras de seguridad para restaurantes, hoteles y oficinas corporativas en Usaquén, Bogotá. Analítica de aforo, intrusiones, IA. Cobertura Country Club, Los Cedros.",areaServed:{"@type":"City",name:"Usaquén, Bogotá"},telephone:"+573337450634",email:"serviciosapcsoporte@gmail.com"};return n.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-16 font-sans",style:{color:"var(--color-foreground)",background:"var(--color-background)"},children:[n.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f)}}),n.jsxs("header",{className:"mb-12",children:[n.jsx("p",{className:"text-sm uppercase tracking-widest mb-2",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Usaquén, Bogotá"}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold leading-tight mb-4",style:{color:"var(--color-foreground)"},children:"Cámaras de Seguridad en Usaquén, Bogotá"}),n.jsx("p",{className:"text-lg mb-6",style:{color:"var(--color-muted-foreground)"},children:"Video con IA de alto nivel para restaurantes, hoteles y oficinas corporativas en Usaquén. Analítica de aforo, control de acceso y protección premium con dashboard ejecutivo en tiempo real."}),n.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Usaquén",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Cotizar por WhatsApp"})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Cobertura en Usaquén"}),n.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:i.map(g=>n.jsxs("li",{className:"px-4 py-3 rounded-lg text-sm font-medium",style:{background:"var(--color-secondary)",color:"var(--color-foreground)"},children:["✓ ",g]},g))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Soluciones para negocios en Usaquén"}),n.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:l.map(g=>n.jsxs("div",{className:"rounded-xl p-6",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[n.jsx("span",{className:"text-3xl block mb-3",children:g.icon}),n.jsx("h3",{className:"font-serif font-bold text-lg mb-2",children:g.titulo}),n.jsx("p",{className:"text-sm",style:{color:"var(--color-muted-foreground)"},children:g.desc})]},g.titulo))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"¿Por qué elegir Servicios APC en Usaquén?"}),n.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:c.map(g=>n.jsxs("div",{className:"flex gap-4 items-start",children:[n.jsx("span",{className:"text-3xl flex-shrink-0",children:g.icon}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-serif font-bold text-lg",children:g.titulo}),n.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-muted-foreground)"},children:g.desc})]})]},g.titulo))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Casos reales en Usaquén"}),n.jsx("div",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:n.jsx("div",{className:"prose prose-sm max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(m)}})})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Preguntas frecuentes sobre cámaras en Usaquén"}),n.jsx("div",{className:"space-y-6",children:u.map((g,v)=>n.jsxs("details",{className:"group rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[n.jsxs("summary",{className:"px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center",style:{background:"var(--color-secondary)"},children:[g.q,n.jsx("span",{className:"ml-2 transition-transform group-open:rotate-45 text-xl",children:"+"})]}),n.jsx("div",{className:"px-6 py-4 text-sm",style:{color:"var(--color-muted-foreground)"},children:g.a})]},v))})]}),n.jsxs("section",{className:"mb-12 text-center",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-4",children:"¿Listo para proteger tu restaurante u hotel en Usaquén?"}),n.jsx("p",{className:"mb-6",style:{color:"var(--color-muted-foreground)"},children:"Cotización premium sin compromiso en menos de 2 horas."}),n.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Usaquén",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Solicitar cotización ahora"})]}),n.jsxs("section",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[n.jsx("h2",{className:"font-serif text-xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Ecosistema APC: Todo conectado"}),n.jsx("div",{className:"prose prose-sm max-w-none font-sans mb-6",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(`| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`)}}),n.jsx("div",{className:"text-sm font-sans",style:{color:"var(--color-muted-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(`---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`)}})]})]})}function sh(){const i=["Fontibón Centro","Arrancachocha","Salitre Occidente","Isla del Sol"],l=[{titulo:"Bodegas Logísticas",desc:"Control de carga con YOLO que cuenta y registra entrada/salida de mercancía. Detección de intrusiones en zonas de carga.",icon:"📦"},{titulo:"Fábricas y Talleres Industriales",desc:"Cobertura de naves industriales con cámaras PTZ de larga distancia. Analítica de personal con detección de EPP obligatorio.",icon:"🏭"},{titulo:"Conjuntos Residenciales",desc:"Control de acceso vehicular y peatonal con reconocimiento de placas. Vigilancia perimetral con alertas automáticas por Telegram.",icon:"🏘️"}],c=[{titulo:"Cobertura industrial Fontibón",desc:"Especialistas en seguridad para zonas industriales y logísticas de Fontibón, incluyendo Arrancachocha y Salitre Occidente.",icon:"🏗️"},{titulo:"Hardware robusto para exteriores",desc:"Cámaras IP67 resistentes a polvo, lluvia y temperaturas extremas. Diseñadas para naves industriales y bodegas logísticas.",icon:"🌧️"},{titulo:"Integración con sistemas logísticos",desc:"Conectamos nuestras cámaras con WMS y ERP para trazabilidad completa de inventario visual.",icon:"🔗"},{titulo:"Soporte técnico en zona industrial",desc:"Equipo técnico驻扎 en Fontibón con experiencia en infraestructura industrial y redes de alta disponibilidad.",icon:"🛠️"}],m=`
### Bodega Logística — Fontibón Centro

**Problema:** La bodega procesaba 800 cajas diarias pero no tenía registro visual de entrada/salida. Las discrepancias de inventario costaban $8.500.000 mensuales. Las intrusiones nocturnas en el patio de carga eran frecuentes.

**Solución:** Instalación de 12 cámaras con analítica YOLO para conteo automático de cajas. Cámaras de placa en entrada/salida de vehículos. Alertas Telegram cada vez que un vehículo ingresa fuera de horario programado.

**Resultado:** Trazabilidad visual del 100% de mercancía. Discrepancias de inventario reducidas en 94%. Intrusiones eliminadas. Tiempo de auditoría de inventario reducido de 8 horas a 45 minutos con dashboard de conteo automático.
  `,u=[{q:"¿Cuánto cuesta instalar cámaras en una bodega logística en Fontibón?",a:"Una bodega estándar con 8-12 cámaras, analítica YOLO y trazabilidad de mercancía cuesta desde $8.500.000 COP. Incluye hardware industrial, instalación, configuración y capacitación."},{q:"¿Las cámaras soportan condiciones industriales?",a:"Sí, todas nuestras cámaras industriales son IP67 resistentes a polvo y agua. Funcionan en temperaturas de -30°C a 60°C, ideales para naves industriales y bodegas de Fontibón."},{q:"¿El conteo YOLO es preciso para cajas?",a:"Sí, nuestra analítica YOLO tiene precisión del 96% en conteo de cajas estándar. Se entrena con las dimensiones específicas de tu mercancía para maximizar precisión."},{q:"¿Cubren Isla del Sol y Arrancachocha?",a:"Sí, cubrimos toda la localidad de Fontibón: Centro, Arrancachocha, Salitre Occidente e Isla del Sol. Nuestros técnicos especializados en zona industrial llegan en menos de 4 horas."}],f={"@context":"https://schema.org","@type":"LocalBusiness",name:"Servicios APC - Cámaras de Seguridad en Fontibón",description:"Cámaras de seguridad para bodegas logísticas, fábricas y conjuntos en Fontibón, Bogotá. YOLO, trazabilidad, alertas Telegram. Cobertura Arrancachocha, Isla del Sol.",areaServed:{"@type":"City",name:"Fontibón, Bogotá"},telephone:"+573337450634",email:"serviciosapcsoporte@gmail.com"};return n.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-16 font-sans",style:{color:"var(--color-foreground)",background:"var(--color-background)"},children:[n.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f)}}),n.jsxs("header",{className:"mb-12",children:[n.jsx("p",{className:"text-sm uppercase tracking-widest mb-2",style:{color:"var(--color-muted-foreground)"},children:"Servicios APC · Fontibón, Bogotá"}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl font-bold leading-tight mb-4",style:{color:"var(--color-foreground)"},children:"Cámaras de Seguridad en Fontibón, Bogotá"}),n.jsx("p",{className:"text-lg mb-6",style:{color:"var(--color-muted-foreground)"},children:"Seguridad industrial y logística para bodegas, fábricas y conjuntos residenciales en Fontibón. Trazabilidad visual con YOLO, alertas automáticas y hardware robusto para las condiciones más exigentes."}),n.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Fontibón",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Cotizar por WhatsApp"})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Cobertura en Fontibón"}),n.jsx("ul",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:i.map(g=>n.jsxs("li",{className:"px-4 py-3 rounded-lg text-sm font-medium",style:{background:"var(--color-secondary)",color:"var(--color-foreground)"},children:["✓ ",g]},g))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Soluciones para negocios en Fontibón"}),n.jsx("div",{className:"grid gap-6 md:grid-cols-3",children:l.map(g=>n.jsxs("div",{className:"rounded-xl p-6",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[n.jsx("span",{className:"text-3xl block mb-3",children:g.icon}),n.jsx("h3",{className:"font-serif font-bold text-lg mb-2",children:g.titulo}),n.jsx("p",{className:"text-sm",style:{color:"var(--color-muted-foreground)"},children:g.desc})]},g.titulo))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"¿Por qué elegir Servicios APC en Fontibón?"}),n.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:c.map(g=>n.jsxs("div",{className:"flex gap-4 items-start",children:[n.jsx("span",{className:"text-3xl flex-shrink-0",children:g.icon}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-serif font-bold text-lg",children:g.titulo}),n.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-muted-foreground)"},children:g.desc})]})]},g.titulo))})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Casos reales en Fontibón"}),n.jsx("div",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:n.jsx("div",{className:"prose prose-sm max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(m)}})})]}),n.jsxs("section",{className:"mb-12",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-6 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Preguntas frecuentes sobre cámaras en Fontibón"}),n.jsx("div",{className:"space-y-6",children:u.map((g,v)=>n.jsxs("details",{className:"group rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[n.jsxs("summary",{className:"px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center",style:{background:"var(--color-secondary)"},children:[g.q,n.jsx("span",{className:"ml-2 transition-transform group-open:rotate-45 text-xl",children:"+"})]}),n.jsx("div",{className:"px-6 py-4 text-sm",style:{color:"var(--color-muted-foreground)"},children:g.a})]},v))})]}),n.jsxs("section",{className:"mb-12 text-center",children:[n.jsx("h2",{className:"font-serif text-2xl font-bold mb-4",children:"¿Listo para proteger tu bodega o fábrica en Fontibón?"}),n.jsx("p",{className:"mb-6",style:{color:"var(--color-muted-foreground)"},children:"Cotización industrial sin compromiso en menos de 2 horas."}),n.jsx("a",{href:"https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Fontibón",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90",style:{background:"var(--color-accent)"},children:"Solicitar cotización ahora"})]}),n.jsxs("section",{className:"rounded-xl p-6 md:p-8",style:{background:"var(--color-secondary)",border:"1px solid var(--color-border)"},children:[n.jsx("h2",{className:"font-serif text-xl font-bold mb-4 pb-2",style:{borderBottom:"2px solid var(--color-border)"},children:"Ecosistema APC: Todo conectado"}),n.jsx("div",{className:"prose prose-sm max-w-none font-sans mb-6",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(`| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`)}}),n.jsx("div",{className:"text-sm font-sans",style:{color:"var(--color-muted-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(`---

**Servicios APC** — Bogotá, Cra. 52c #39b-22  
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`)}})]})]})}const Ci="https://wa.me/573337450634?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20instalaci%C3%B3n%20de%20c%C3%A1maras%20de%20seguridad%20en%20Bogot%C3%A1";function ih({md:i}){return n.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(i)}})}const lh=[{q:"¿Cuánto cuesta la instalación de cámaras de seguridad en Bogotá?",a:"Depende del número de puntos y del tipo de cableado. Un sistema de 4 cámaras parte de $1.800.000 COP, 8 cámaras ColorVu alrededor de $3.200.000 y 16 cámaras con NVR PoE cerca de $5.600.000. Todos incluyen instalación, configuración y app móvil."},{q:"¿Cuánto demora la instalación?",a:"Un sistema residencial de 4 a 8 cámaras se instala en 1 día hábil. Sistemas comerciales de 16+ puntos con cableado estructurado y servidor de IA pueden tomar de 2 a 3 días. Coordinamos horarios que no interrumpan su operación."},{q:"¿La instalación incluye acceso remoto desde el celular?",a:"Sí. Toda instalación incluye configuración de la app Remotion / Hik-Connect: ver en vivo, recibir alertas y reproducir grabaciones desde cualquier lugar con internet."},{q:"¿Puedo reutilizar mis cámaras Hikvision actuales?",a:"Sí. Reprogramamos sus equipos Hikvision/Dahua que cumplan RTSP/ONVIF y los dejamos listos para analítica IA sin comprar hardware nuevo. Si necesita reemplazo, instalamos Hikvision certificado IA-ready."},{q:"¿Funciona la instalación sin internet permanente?",a:"Las cámaras graban localmente en el DVR/NVR sin internet. El internet solo se necesita para acceso remoto y alertas IA. Recomendamos mínimo 10 Mbps simétricos para sistemas con analítica."},{q:"¿Qué garantía tienen?",a:"Hardware con garantía de fábrica de 1 a 3 años según modelo. Soporte técnico según plan: 30 días (básico) hasta 12 meses (IA Total), extensible con contrato mensual desde $250.000."},{q:"¿En qué zonas de Bogotá instalan?",a:"Cubrimos toda Bogotá y municipios cercanos: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Bosa, Engativá, Centro y sur de la ciudad. También atendemos Cundinamarca con visita técnica."}];function ch(){return n.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[n.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),n.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[n.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[n.jsx(_i,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Instalación de cámaras · Bogotá 2026"})]}),n.jsx("span",{className:"inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full mb-6 border",style:{borderColor:"var(--color-accent)",color:"var(--color-accent)"},children:"Hikvision certificado · Garantía 1-3 años"}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Instalación de Cámaras de Seguridad en Bogotá"}),n.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"Instalación profesional de cámaras Hikvision para casas, negocios y empresas: cableado estructurado sin puntos ciegos, configuración de acceso remoto y equipos IA-ready. Cotización con visita técnica incluida."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[n.jsxs("a",{href:Ci,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Cotizar Instalación ",n.jsx(Ba,{className:"w-4 h-4"})]}),n.jsxs("a",{href:"#proceso",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Proceso ",n.jsx(ue,{className:"w-4 h-4"})]})]}),n.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:fa,label:"4 cámaras",sub:"desde $1.800.000"},{icon:Qn,label:"Instalación",sub:"1 día hábil"},{icon:Sr,label:"Sin puntos ciegos",sub:"cableado estructurado"},{icon:lr,label:"Garantía",sub:"1-3 años Hikvision"}].map(i=>n.jsxs("div",{className:"text-center",children:[n.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),n.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),n.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"¿Por qué contratar un instalador certificado y no hacerlo usted mismo?"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"En Bogotá se denuncian más de 20.000 hurtos a residencias al año. Un sistema mal instalado crea puntos ciegos, cámaras caídas y evidencia que no sirve. Esto es lo que resuelve una instalación profesional:"}),n.jsx("div",{className:"space-y-8",children:[{icon:Ii,title:"Cableado profesional estructurado",desc:"Sujeción correcta, canaletas, protección contra descargas y etiquetado. Evitamos cortos, interferencias y cámaras que pierden señal a los 3 meses. No dejamos cables expuestos."},{icon:Sr,title:"Cobertura sin puntos ciegos",desc:"Calculamos ángulos, alcance de visión nocturna y zonas de ingreso antes de perforar. Resultado: cobertura del 100% de los puntos críticos de su casa o negocio."},{icon:lr,title:"Configuración y respaldo correctos",desc:"DVR/NVR con grabación continua o por eventos, retención de 90 días, acceso remoto y claves seguras. Un DIY típicamente deja el sistema grabando solo de día o sin respaldo."},{icon:pa,title:"Listo para IA sin recompra",desc:"Todos nuestros sistemas se entregan IA-ready: cuando quiera activar conteo, aforo o alertas, solo se reprograma el equipo. No paga dos veces por el mismo hardware."}].map(i=>n.jsxs("div",{className:"flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"flex-shrink-0",children:n.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-6 h-6",style:{color:"var(--color-accent)"}})})}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:i.desc})]})]},i.title))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Servicios de instalación de cámaras que ofrecemos"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Desde una cámara en casa hasta 40+ puntos empresariales con analítica de video:"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:Ei,title:"Instalación residencial en casa",desc:"Cámaras para unidades, entradas, jardines y parqueaderos. Sistemas de 2 a 8 cámaras con grabación local y acceso por celular.",bullets:"2-8 cámaras · DVR local · App móvil"},{icon:Au,title:"Locales y mini mercados",desc:"Cobertura de caja, bodega y fachada. Visión nocturna ColorVu y alertas fuera de horario. Ideal para tiendas y establecimientos de barrio.",bullets:"4-8 cámaras · IA aforo básico"},{icon:Gn,title:"Oficinas y empresas",desc:"Control de acceso, recepción, pisos y servidores. Integración con sistemas de control de acceso y analítica de flujo de personas.",bullets:"4-16 cámaras · NVR poE"},{icon:gt,title:"Bodegas y distribución",desc:"Cámaras bullet con IR de largo alcance, patios de carga y perimetrales. Reconocimiento de placas (LPR) opcional.",bullets:"8-32 cámaras · Server edge"},{icon:Ef,title:"Restaurantes",desc:"Analítica de cocina, barra y salón. Control de aforo para cumplimiento del IDEA y reducción de mermas.",bullets:"6-12 cámaras · Aforo IA"},{icon:Sr,title:"Recuperación de sistemas viejos",desc:"¿Ya tiene cámaras Hikvision/Dahua instaladas mal? Los auditamos, reubicamos, recablearimos y dejamos grabando correctamente.",bullets:"RTSP/ONVIF · Sin hardware nuevo"}].map(i=>n.jsxs("div",{className:"group p-6 rounded-xl border transition-all hover:shadow-lg",style:{borderColor:"var(--color-border)"},children:[n.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.bullets})]},i.title))})]})}),n.jsx("section",{id:"proceso",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Cómo funciona la instalación"}),n.jsx("p",{className:"font-sans text-lg text-center mb-16 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Del primer mensaje al sistema funcionando en 4 pasos:"}),n.jsxs("div",{className:"space-y-12 relative",children:[n.jsx("div",{className:"absolute left-6 md:left-8 top-0 bottom-0 w-0.5",style:{backgroundColor:"var(--color-border)"}}),[{icon:xt,step:"01",title:"Diagnóstico técnico gratuito",desc:"Coordinamos visita o video-llamada: medimos distancias, revisamos la red eléctrica y de datos. Le entregamos cotización cerrada con desglose de equipos e instalación. Sin letras pequeñas.",time:"1 día"},{icon:Ii,step:"02",title:"Tendido y montaje",desc:"Instalamos cableado estructurado o inalámbrico según su caso, montamos las cámaras con orientación calculada y dejamos todo limpio y ordenado.",time:"1-3 días"},{icon:Sr,step:"03",title:"Configuración y acceso remoto",desc:"Programamos DVR/NVR, retención de grabación, alertas y acceso por celular. Le entregamos el usuario y le enseñamos a usarlo en 15 minutos.",time:"2-4 horas"},{icon:ft,step:"04",title:"Soporte y garantía",desc:"Seguimiento remoto del sistema, detección temprana de caídas y garantía de fábrica. Con IA, usted recibe alertas por WhatsApp si algo se interrumpe.",time:"24/7"}].map(i=>n.jsxs("div",{className:"relative flex gap-6 md:gap-8",children:[n.jsx("div",{className:"flex-shrink-0 z-10",children:n.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif font-bold text-lg md:text-xl border-4",style:{backgroundColor:"var(--color-background)",borderColor:"var(--color-accent)",color:"var(--color-accent)"},children:i.step})}),n.jsxs("div",{className:"flex-1 pt-2 md:pt-4",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("h3",{className:"font-serif text-xl md:text-2xl font-bold",children:i.title})]}),n.jsx("p",{className:"font-sans leading-relaxed mb-3",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsxs("span",{className:"inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.8},children:["⏱ ",i.time]})]})]},i.step))]})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Precios de instalación de cámaras 2026"}),n.jsx("p",{className:"font-sans text-lg mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Precios referenciales en Bogotá, incluyen equipos Hikvision, instalación, configuración y app móvil (COP, IVA incluido)."}),n.jsx("div",{className:"overflow-x-auto mb-8 rounded-xl border",style:{borderColor:"var(--color-border)"},children:n.jsxs("table",{className:"w-full text-sm font-sans",children:[n.jsx("thead",{children:n.jsxs("tr",{style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[n.jsx("th",{className:"px-4 py-3 text-left font-sans font-semibold",children:"Sistema"}),n.jsx("th",{className:"px-4 py-3 text-left font-sans font-semibold",children:"Cantidad"}),n.jsx("th",{className:"px-4 py-3 text-left font-sans font-semibold",children:"Precio desde"}),n.jsx("th",{className:"px-4 py-3 text-center font-sans font-semibold",children:"Incluye"})]})}),n.jsx("tbody",{children:[["Casa básica","4 cámaras HD 4MP + DVR 4ch","$1.800.000","Instalación + app móvil"],["Negocio medio","8 cámaras ColorVu + DVR 8ch","$3.200.000","IA alertas + app móvil"],["Empresa completa","16 cámaras + NVR PoE","$5.600.000","Analítica IA + dashboard"]].map((i,l)=>n.jsx("tr",{style:{borderTop:"1px solid var(--color-border)",backgroundColor:l%2?"var(--color-background)":"transparent"},children:i.map((c,m)=>n.jsx("td",{className:"px-4 py-3",style:{color:m===2?"var(--color-accent)":"var(--color-foreground)",fontWeight:m===2?700:"normal"},children:c},m))},l))})]})}),n.jsx("p",{className:"font-sans text-sm mb-8",style:{color:"var(--color-muted-foreground)"},children:"* El valor final depende de la distancia del cableado, número de puntos y accesibilidad. Cotización sin costo vía WhatsApp."}),n.jsxs("a",{href:Ci,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[n.jsx(ta,{className:"w-4 h-4"})," Cotizar ahora por WhatsApp"]})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes sobre instalación de cámaras"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Todo lo que necesita saber antes de cotizar su sistema de seguridad en Bogotá:"}),n.jsx("div",{className:"space-y-4",children:lh.map(i=>n.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[n.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[n.jsx("span",{children:i.q}),n.jsx(ue,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),n.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:n.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Agenda su diagnóstico técnico gratuito"}),n.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Visitamos su casa o negocio en Bogotá, revisamos los puntos críticos y le entregamos cotización cerrada. Sin compromiso."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[n.jsxs("a",{href:Ci,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[n.jsx(ta,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),n.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[n.jsx(ir,{className:"w-4 h-4"})," Email Directo"]})]}),n.jsx("div",{className:"text-left",children:n.jsx(ih,{md:`
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
`})})]})})]})}const Ai="https://wa.me/573337450634?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20c%C3%A1maras%20para%20instalar%20en%20mi%20casa%20en%20Bogot%C3%A1";function dh({md:i}){return n.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(i)}})}const uh=[{q:"¿Cuánto cuesta instalar cámaras de seguridad en casa en Bogotá?",a:"Una cámara de seguridad para el hogar cuesta desde $600.000 COP instalada. Un sistema de 4 cámaras para casa parte de $1.800.000 COP con DVR y app móvil. Incluye instalación, configuración y asesoría del punto exacto."},{q:"¿Qué cámaras son las mejores para una casa?",a:"Para viviendas recomendamos Hikvision ColorVu (imagen a color de noche) en fachadas y puntos críticos, mini-dome o cámaras Wi-Fi en interiores. Todas se ven desde el celular con la app Hik-Connect/Remotion."},{q:"¿Puedo instalar las cámaras yo mismo o debo contratar?",a:"Una cámara Wi-Fi se puede instalar con el manual en 30 minutos. Para sistemas cableados con grabación 24/7 recomendamos un profesional: la orientación mal calculada crea puntos ciegos y el video pierde utilidad como evidencia."},{q:"¿La cámara funciona sin internet o si se va la luz?",a:"El DVR graba localmente sin internet; el internet se usa solo para ver desde el celular. Para el corte de luz recomendamos un UPS que mantiene el sistema 30-45 minutos, y batería de respaldo de hasta 4 horas si necesita más."},{q:"¿Puedo ver las cámaras de mi casa desde el trabajo?",a:"Sí. Toda instalación incluye la app móvil: ver en vivo, alertas de movimiento y grabaciones desde cualquier lugar con internet."},{q:"¿Es legal instalar cámaras en el exterior de una casa en Colombia?",a:"En propiedad privada sí es legal. Recomendamos cubrir solo su vivienda, evitar grabar la casa del vecino directamente y cumplir la Ley 1581 de tratamiento de datos si captura zonas comunes o terceros de forma recurrente."},{q:"¿En qué zonas de Bogotá instalan cámaras de hogar?",a:"Instalamos en toda Bogotá: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Engativá, Bosa, Soacha y abrindamos. Los sistemas de 1 a 4 cámaras se pueden instalar el mismo día."}];function mh(){return n.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[n.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),n.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[n.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[n.jsx(Ei,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Cámaras para el hogar · Bogotá 2026"})]}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Cámaras para Instalar en Casa en Bogotá"}),n.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"Proteja su hogar con cámaras Hikvision de visión nocturna a color, instalación profesional y app de celular. Desde $600.000 por cámara, instalación el mismo día en Bogotá."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[n.jsxs("a",{href:Ai,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Cotizar Cámaras para Casa ",n.jsx(Ba,{className:"w-4 h-4"})]}),n.jsxs("a",{href:"#precios",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Precios Residenciales ",n.jsx(ue,{className:"w-4 h-4"})]})]}),n.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:fa,label:"Desde",sub:"$600.000 la cámara"},{icon:Qn,label:"Instalación",sub:"el mismo día"},{icon:en,label:"Garantía",sub:"1-3 años"},{icon:su,label:"Color de noche",sub:"Hikvision ColorVu"}].map(i=>n.jsxs("div",{className:"text-center",children:[n.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),n.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),n.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Protecta su hogar antes de que pase lo mismo del vecino"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"En Bogotá más de 1 de cada 5 hurtos denunciados ocurre en residencias. Una cámara es disuasión, evidencia y tranquilidad:"}),n.jsx("div",{className:"space-y-8",children:[{icon:Su,title:"Dentrada y fachada vigiladas",desc:"El 65% de los ingresos a viviendas ocurren por la fachada. Una cámara ColorVu graba en color incluso de noche la persona, el vehículo y la placa. Muchas intrusos cambian de objetivo al ver cámaras.",stat:"65%",statLabel:"ingresos por la fachada"},{icon:Yf,title:"Ve a tu familia desde el celular",desc:"Mira a los niños desde la oficina, verifica si llegaron los adultos mayores o revisa a la empleada doméstica sin pedir explicaciones. Live streaming y alertas en segundos.",stat:"24/7",statLabel:"acceso remoto desde la app"},{icon:en,title:"Evidencia que vale para el seguro",desc:"Las aseguradoras exigen videos nítidos para cubrir daños y hurtos. Con grabación de 90 días y respaldo, su denuncia avanza más rápido y el ajustador tiene material real.",stat:"90 días",statLabel:"de respaldo automático"}].map(i=>n.jsxs("div",{className:"flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"flex-shrink-0",children:n.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-6 h-6",style:{color:"var(--color-accent)"}})})}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsxs("div",{className:"flex items-baseline gap-2",children:[n.jsx("span",{className:"font-sans text-2xl font-bold",style:{color:"var(--color-accent)"},children:i.stat}),n.jsx("span",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:i.statLabel})]})]})]},i.title))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"¿Qué cámara sirve en cada parte de la casa?"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"No hay una sola cámara universal. Recomendamos el tipo correcto para cada punto:"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:Ei,title:"Fachada y entrada",desc:"Cámara bullet ColorVu (imagen a color de noche). Detecta y disuade desde el momento en que alguien se acerca. Gran angular para cubrir puerta y garaje.",tag:"Bullet ColorVu"},{icon:lr,title:"Interiores y salón",desc:"Mini-dome de techo discreta para sala y pasillos. Cubre gran área sin ser invasiva y su cables se oculta en ductos.",tag:"Mini-dome"},{icon:fa,title:"Cocina y zonas de servicio",desc:"Cámara IP con máscara de privacidad para proteger zonas íntimas mientras vigila los puntos que importan.",tag:"IP máscara privacidad"},{icon:su,title:"Garaje y parqueadero",desc:"Cámara IR de largo alcance para leer placas en la oscuridad. Alertas de movimiento a a las 2 a. m.",tag:"IR 60-80m"},{icon:Wg,title:"Cámara Wi-Fi de instalación rápida",desc:"Parta de prueba o para arriendo: se instala 10 minutos, se alimenta por cable y se ve desde la app. Idéalo para entrar si no quiere hacer obras.",tag:"Wi-Fi Plug & Play"},{icon:en,title:"+ Sensores de puertas y humo",desc:"Combine la cámara con contactos de puertas/ventanas y detector de humo. Recibirá notificación el instante en que algo se abre o se alarma.",tag:"Avero + sensores"}].map(i=>n.jsxs("div",{className:"group p-6 rounded-xl border transition-all hover:shadow-lg",style:{borderColor:"var(--color-border)"},children:[n.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.tag})]},i.title))})]})}),n.jsx("section",{id:"precios",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Precios de cámaras para instalar en casa, Bogotá 2026"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Precios referenciales incluyendo instalación y configuración (COP, IVA incluido):"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{name:"1 cámara",price:"$600.000",desc:"Para una entrada o punto crítico",features:["1 cámara HD/ColorVu","App móvil configurada","Instalación el mismo día"],highlight:!1},{name:"Sistema 4 cámaras",price:"$1.800.000",desc:"Cobertura completa de la casa",features:["4 cámaras + DVR","1 TB almacenamiento","Visión nocturna a color","Acceso remoto incluido"],highlight:!0},{name:"Sistema 8 cámaras",price:"$3.200.000",desc:"Para casas amplias y conjuntos",features:["8 cámaras ColorVu","NVR 8ch / 2 TB","Alertas IA incluidas","Soporte 90 días"],highlight:!1}].map(i=>n.jsxs("div",{className:"relative flex flex-col p-6 rounded-xl border-2 transition-all",style:{borderColor:i.highlight?"var(--color-accent)":"var(--color-border)",backgroundColor:i.highlight?"var(--color-accent)":"var(--color-background)",color:i.highlight?"var(--color-background)":"var(--color-foreground)"},children:[i.highlight&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-sans font-bold px-4 py-1 rounded-full",style:{backgroundColor:"var(--color-background)",color:"var(--color-accent)"},children:"+ Elegido por hogares"}),n.jsx("h3",{className:"font-serif text-xl font-bold mb-1",children:i.name}),n.jsx("div",{className:"font-serif text-3xl font-bold my-4",children:i.price}),n.jsx("p",{className:"text-sm mb-6",style:{opacity:.7},children:i.desc}),n.jsx("ul",{className:"space-y-2 mb-8 flex-1",children:i.features.map(l=>n.jsxs("li",{className:"flex items-start gap-2 text-sm font-sans",children:[n.jsx(pa,{className:"w-4 h-4 mt-0.5 flex-shrink-0",style:{opacity:.7}}),n.jsx("span",{children:l})]},l))}),n.jsxs("a",{href:Ai,target:"_blank",rel:"noopener noreferrer",className:"w-full text-center px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-all hover:scale-105 block",style:{backgroundColor:i.highlight?"var(--color-background)":"var(--color-accent)",color:i.highlight?"var(--color-accent)":"var(--color-background)",border:i.highlight?"2px solid var(--color-background)":"none"},children:["Cotizar ",i.name]})]},i.name))}),n.jsx("div",{className:"mt-8 text-center",children:n.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:"* Precios referenciales Bogotá. El valor final depende del tipo de vivienda y la distancia de cableado. Cotización sin compromiso."})})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes sobre cámaras para casa"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Todo lo que necesita saber antes de proteger su hogar:"}),n.jsx("div",{className:"space-y-4",children:uh.map(i=>n.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[n.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[n.jsx("span",{children:i.q}),n.jsx(ue,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),n.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:n.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Proteja su hogar hoy"}),n.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Asesoría gratuita: le decimos cuántas cámaras necesita, con qué tipo y el precio final antes de que perforamos cualquier muro."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[n.jsxs("a",{href:Ai,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[n.jsx(ta,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),n.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[n.jsx(ir,{className:"w-4 h-4"})," Email Directo"]})]}),n.jsx("div",{className:"text-left",children:n.jsx(dh,{md:`
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
`})})]})})]})}const Si="https://wa.me/573337450634?text=Hola%2C%20quiero%20el%20precio%20de%20instalaci%C3%B3n%20de%20c%C3%A1maras%20de%20seguridad%20en%20Bogot%C3%A1";function ph({md:i}){return n.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(i)}})}const fh=[{q:"¿Cuánto cuesta la instalación de un sistema de cámaras de seguridad en Bogotá?",a:"Un sistema de 4 cámaras cuesta desde $1.800.000 COP con instalación y configuración incluida. Uno de 8 cámaras ColorVu ronda los $3.200.000 y uno de 16 con NVR PoE, $5.600.000. La cotización varía por distancia de cableado, número de puntos y accesibilidad."},{q:"¿El precio incluye el valor de la instalación o solo las cámaras?",a:"Nuestros precios incluyen hardware, instalación, configuración y app móvil. No cobramos extra por los técnicos. Solo servicios adicionales (cableado extendido > 40m, acceso especial, servidor IA) se cotizan por separado."},{q:"¿Por qué un sistema de cámaras cuesta $1.800.000 cuando veo cámaras wifi en $150.000?",a:"La diferencia está en la grabación. Una cámara wifi barata graba en SD (que se llena, o se roban), no tiene retención de 90 días ni garantía. Un sistema Hikvision con DVR graba 24/7 en local, con respaldo y visión nocturna. Son cosas diferentes: una es un juguete, la otra es evidencia."},{q:"¿Ofrecen pagos a cuotas o financiación?",a:"Sí. Sistemas desde $1.800.000 se pueden financiar en cuotas con tarjeta de crédito (3, 6 y 12 cuotas) y también recibimos transferencia y efectivo. La cotización detalla las opciones."},{q:"¿La cotización es gratis y sin compromiso?",a:"Sí, completamente gratis. Hacemos diagnóstico por llamada/video o visita: medimos el punto, calculamos cableado y le entregamos precio cerrado antes de que usted se decida."},{q:"¿Qué incluye la garantía?",a:"Hardware con garantía de fábrica de 1 a 3 años. Instalación con respaldo técnico por plan (30 días a 12 meses). Los contratos de soporte mensual desde $250.000 incluyen mantenimiento preventivo cada 6 meses."}];function gh(){return n.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[n.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),n.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[n.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[n.jsx(Uf,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Precios reales · Bogotá 2026"})]}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Precios de Instalación de Cámaras de Seguridad"}),n.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"Cuánto cuesta realmente instalar cámaras de seguridad en Bogotá en 2026: sin letra pequeña, incluyendo hardware, instalación, configuración y acceso desde el celular."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[n.jsxs("a",{href:Si,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Pedir Cotización ",n.jsx(Ba,{className:"w-4 h-4"})]}),n.jsxs("a",{href:"#tabla",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Tabla de Precios ",n.jsx(ue,{className:"w-4 h-4"})]})]}),n.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:fa,label:"4 cámaras",sub:"desde $1.800.000"},{icon:Qn,label:"Instalación",sub:"incluida en el precio"},{icon:lr,label:"Garantía",sub:"1 a 3 años"},{icon:pa,label:"Cotización",sub:"gratis y cerrada"}].map(i=>n.jsxs("div",{className:"text-center",children:[n.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),n.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),n.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"¿Qué afecta el precio?"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"El mismo sistema puede costar diferente en dos locales en Bogotá. Estos son los 4 factores que tocan el valor final:"}),n.jsx("div",{className:"space-y-6",children:[{icon:fa,title:"Número de cámaras (puntos)",desc:"Cada punto adicional suma cámara + capacidad del DVR/NVR + tiempo de instalación. De 4 a 8 puntos suele ser 1 día; de 16+ puntos, 2-3 días."},{icon:og,title:"Tipo de cámara",desc:"Una HD 4MP básica cuesta menos que una ColorVu (color de noche) o una IP con IA. En zonas oscuras recomendamos ColorVu para que la evidencia sea útil."},{icon:Zf,title:"Distancia de cableado",desc:"Los precios incluyen una base de cableado. Pasillos muy largos o techos altos agregan cable y tiempo de trabajo. Por eso la cotización con previa visita es cerrada, no estimada."},{icon:lr,title:"Tipo de negocio y Cobertura",desc:"Restaurantes con aforo IA, bodegas con LPR (placas), clínicas con requisitos de Normativa 1581: cada operación pide hardware y config distinta. Nuestra cotización la arma sobre eso."}].map(i=>n.jsxs("div",{className:"flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"flex-shrink-0",children:n.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-6 h-6",style:{color:"var(--color-accent)"}})})}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:i.desc})]})]},i.title))})]})}),n.jsx("section",{id:"tabla",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-6xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Tabla de precios de instalación de cámaras 2026"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Precios en pesos colombianos, incluyen instalación y configuración. Cotice a su medida vía WhatsApp:"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:pricingPlans.map(i=>n.jsxs("div",{className:"relative flex flex-col p-6 rounded-xl border-2 transition-all",style:{borderColor:i.highlight?"var(--color-accent)":"var(--color-border)",backgroundColor:i.highlight?"var(--color-accent)":"var(--color-background)",color:i.highlight?"var(--color-background)":"var(--color-foreground)"},children:[i.highlight&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-sans font-bold px-4 py-1 rounded-full",style:{backgroundColor:"var(--color-background)",color:"var(--color-accent)"},children:"Más vendido"}),n.jsx("h3",{className:"font-serif text-xl font-bold mb-1",children:i.name}),n.jsx("p",{className:"font-sans text-sm mb-1",style:{opacity:.8},children:i.cameras}),n.jsx("div",{className:"font-serif text-3xl font-bold my-4",children:i.price}),n.jsx("p",{className:"font-sans text-sm mb-6",style:{opacity:.7},children:i.desc}),n.jsx("ul",{className:"space-y-2 mb-8 flex-1",children:i.features.map(l=>n.jsxs("li",{className:"flex items-start gap-2 text-sm font-sans",children:[n.jsx(pa,{className:"w-4 h-4 mt-0.5 flex-shrink-0",style:{opacity:.7}}),n.jsx("span",{children:l})]},l))}),n.jsxs("a",{href:Si,target:"_blank",rel:"noopener noreferrer",className:"w-full text-center px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-all hover:scale-105 block",style:{backgroundColor:i.highlight?"var(--color-background)":"var(--color-accent)",color:i.highlight?"var(--color-accent)":"var(--color-background)",border:i.highlight?"2px solid var(--color-background)":"none"},children:["Cotizar ",i.name]})]},i.name))}),n.jsx("div",{className:"mt-8 text-center",children:n.jsx("p",{className:"font-sans text-sm",style:{color:"var(--color-muted-foreground)"},children:"* Precios referenciales Bogotá. La cotización final es cerrada solo después de la visita técnica. Financiación a 12 cuotas con tarjeta de crédito."})})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Por qué nuestros precios no se 'chotan'"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"No publicamos precio de gancho de $300.000 para luego cobrar $1.800.000 en partes. Esta es de a diferencia:"}),n.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{icon:pa,title:"Precio cerrado",desc:"La cotización con los puntos exactos y el cableado real, no una estimación que 'se puede pasar'."},{icon:ta,title:"WhatsApp directo, no call center",desc:"Habla directo con el instalador/consultor, no con un operador que solo agenda citas. Las preguntas de precios se responden ahí mismo."},{icon:ue,title:"IVA incluido",desc:"Todos los precios publicados están en COP e incluyen IVA. No le agregan 'detallitos' al final."}].map(i=>n.jsxs("div",{className:"p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:i.desc})]},i.title))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes sobre precios"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Las dudas más comunes cuando se compara el precio de instalar cámaras:"}),n.jsx("div",{className:"space-y-4",children:fh.map(i=>n.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[n.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[n.jsx("span",{children:i.q}),n.jsx(ue,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),n.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:n.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Cotice su sistema hoy"}),n.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Mándenos WhatsApp cuántas cámaras necesita y el sector: recibe precio indicativo en minutos y cotización cerrada tras la visita técnica."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[n.jsxs("a",{href:Si,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[n.jsx(ta,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),n.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[n.jsx(ir,{className:"w-4 h-4"})," Email Directo"]})]}),n.jsx("div",{className:"text-left",children:n.jsx(ph,{md:`
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
`})})]})})]})}const ki="https://wa.me/573337450634?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20el%20mantenimiento%20de%20c%C3%A1maras%20de%20seguridad%20en%20Bogot%C3%A1";function hh({md:i}){return n.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(i)}})}const vh=[{q:"¿En qué consiste el mantenimiento de cámaras de seguridad?",a:"Es un servicio periódico (preventivo) y de reparación (correctivo) que garantiza que sus cámaras graben siempre con calidad. Incluye limpieza de lentes, revisión de cableado y conexiones, actualización de firmware, verificación de almacenamiento (DVR/NVR) y revisión de configuración de grabación continua por eventos. En Servicios APC añadimos una capa extra: alineamos el sistema para que esté listo para analítica IA y alertas por WhatsApp."},{q:"¿Cada cuánto debo hacer mantenimiento preventivo de cámaras?",a:"Recomendamos una revisión preventiva cada 6 meses. En Bogotá, el polvo, la humedad y las lluvias (cámaras exteriores) degradan lentes y conectores. Un mantenimiento semestral evita que una cámara grabando 'a negro' pase semanas sin notarse. Si su negocio es crítico (caja, bodega), puede optar por supervisión remota mensual de caídas."},{q:"¿Cuánto cuesta el mantenimiento de cámaras en Bogotá?",a:"El mantenimiento preventivo por visita parte de $180.000 COP e incluye la revisión de hasta 4 cámaras (limpieza, firmware, cableado y configuración). Cada cámara adicional suma un costo menor. El mantenimiento correctivo (reemplazo de equipo o reparación) se cotiza según la falla. Ofrecemos planes de supervisión remota mensual desde $250.000 COP."},{q:"¿Revisan y reparaman cámaras de cualquier marca?",a:"Sí. Trabajamos principalmente con Hikvision y Dahua, pero revisamos y optimizamos cámaras de cualquier marca que exponga RTSP/ONVIF: Uniview, Axis, Hanwha, TP-Link VIGI, entre otras. Si su sistema está en mal estado, lo ponemos a grabar correctamente y, si aplica, lo dejamos listo para IA sin comprar hardware nuevo."},{q:"¿Pueden diagnosticar una cámara que no graba o se ve borrosa?",a:"Sí. Ese es uno de los servicios más solicitados. Detectamos si el problema es el lente (sucio o velado), el cableado, la fuente de alimentación, la red o la configuración del DVR. Le entregamos diagnóstico con causa exacta y cotización antes de intervenir. Solo damos solución cuando usted lo aprueba."},{q:"¿El mantenimiento incluye revisión de la grabación y el respaldo?",a:"Sí. Revisamos que el DVR/NVR esté grabando de forma continua o por eventos, que la retención de video sea la correcta (recomendamos 90 días) y que el almacenamiento no esté saturado. Le dejamos configurado el respaldo y las alertas de fallo para que un problema de grabación no pase desapercibido."},{q:"¿En qué zonas de Bogotá realizan mantenimiento de cámaras?",a:"Cubrimos toda Bogotá: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Bosa, Engativá, Centro y sur de la ciudad. También atendemos municipios cercanos de Cundinamarca con visita técnica. También ofrecemos supervisión remota y diagnóstico por video-llamada para el resto de Colombia."}];function xh(){return n.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[n.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),n.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[n.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[n.jsx(bi,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Mantenimiento de cámaras · Bogotá 2026"})]}),n.jsx("span",{className:"inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full mb-6 border",style:{borderColor:"var(--color-accent)",color:"var(--color-accent)"},children:"Hikvision / Dahua · Preventivo y correctivo · Visita el mismo día"}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Mantenimiento de Cámaras de Seguridad en Bogotá"}),n.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"¿Su cámara graba a negro, se ve borrosa o dejó de grabar? Servicio de mantenimiento preventivo y correctivo para sistemas CCTV Hikvision / Dahua en Bogotá: limpieza, firmware, cableado y configuración. Diagnóstico con causa exacta y cotización antes de intervenir."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[n.jsxs("a",{href:ki,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Agendar Revisión ",n.jsx(Ba,{className:"w-4 h-4"})]}),n.jsxs("a",{href:"#proceso",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Proceso ",n.jsx(ue,{className:"w-4 h-4"})]})]}),n.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:fa,label:"Preventivo",sub:"desde $180.000 / visita"},{icon:Qn,label:"Respuesta",sub:"< 24 horas"},{icon:xi,label:"Diagnóstico",sub:"causa exacta"},{icon:Tg,label:"Reparación",sub:"todas las marcas"}].map(i=>n.jsxs("div",{className:"text-center",children:[n.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),n.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),n.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"¿Por qué mantener sus cámaras y no esperar a que fallen?"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"La cámara que no graba es un gasto, no un activo. Casi nunca falla 'de golpe': se degrada poco a poco —lente velado, señal intermitente, almacenamiento lleno— hasta que un día necesita justo el video que no tiene. Esto es lo que un mantenimiento profesional previene:"}),n.jsx("div",{className:"space-y-8",children:[{icon:xi,title:"Cámaras que graban con calidad real",desc:"Limpieza de lentes, ajuste de enfoque y balance de color. Sin cámaras que 'se ven grises' o veladas. En exteriores de Bogotá, polvo y lluvia degradan rápido la imagen nocturna."},{icon:eg,title:"Nunca más 'no estaba grabando'",desc:"Verificamos almacenamiento (DVR/NVR), retención de 90 días, grabación continua o por eventos y respaldo. Detectamos discos saturados o zonas que dejaron de grabar sin avisar."},{icon:Ii,title:"Cableado sano y conexiones estables",desc:"Revisamos sujeción, conectores, fuentes de alimentación y signos de corto o interferencia. Un cable flojo en un canal es la causa #1 de cámaras que 'caen' intermitentemente."},{icon:Sr,title:"Firmware y seguridad actualizados",desc:"Actualizamos el firmware de su DVR/NVR y cámaras. Sistemas desactualizados son vulnerables y pierden compatibilidad. Correcta configuración de contraseñas y acceso remoto seguro."},{icon:pa,title:"Dejamos el sistema listo para IA",desc:"Alinear su CCTV para que esté listo para analítica (conteo, aforo, arqueo, alertas por WhatsApp) sin comprar hardware nuevo. Mantenimiento hoy, analítica cuando la necesite."}].map(i=>n.jsxs("div",{className:"flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"flex-shrink-0",children:n.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-6 h-6",style:{color:"var(--color-accent)"}})})}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:i.desc})]})]},i.title))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Servicios de mantenimiento de cámaras que ofrecemos"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Desde una revisión puntual hasta contratos de soporte continuo para su negocio:"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:bi,title:"Mantenimiento preventivo",desc:"Revisión programada: limpieza, firmware, cableado y configuración. El mejor costo/beneficio para que su sistema nunca lo deje a ciegas.",bullets:"Visita semestral · desde $180.000"},{icon:Sr,title:"Mantenimiento correctivo",desc:"Reparación de cámaras, DVR/NVR, fuentes y cableado. Reemplazo de equipos defectuosos con diagnóstico y cotización aprobada.",bullets:"Respuesta < 24h · todas las marcas"},{icon:xi,title:"Diagnóstico técnico",desc:"¿Cámara a negro, borrosa, que se cae? Detectamos la causa exacta del fallo (lente, cable, red, configuración) y le entregamos plan de solución.",bullets:"Visita o video-llamada · gratis al contratar"},{icon:ft,title:"Supervisión remota mensual",desc:"Monitoreo de caídas de cámaras, estado de grabación y alertas por WhatsApp/Email. Detectamos problemas antes de que usted los note.",bullets:"Desde $250.000 / mes"},{icon:Gn,title:"Mantenimiento empresarial",desc:"Contrato de soporte para oficinas, clínicas, colegios y empresas: visitas periódicas, SLA de respuesta y reporte técnico mensual del estado de su sistema.",bullets:"Multi-site · SLA garantizado"},{icon:_i,title:"Puesta en marcha de IA",desc:"Sobre su CCTV ya mantenido: activamos conteo de personas, control de aforo, arqueo asistido y alertas automáticas. Su cámara pasa de vigilar a auditar.",bullets:"Hikvision/Dahua RTSP/ONVIF"}].map(i=>n.jsxs("div",{className:"group p-6 rounded-xl border transition-all hover:shadow-lg",style:{borderColor:"var(--color-border)"},children:[n.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.bullets})]},i.title))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Negocios de Bogotá que más necesitan mantenimiento de cámaras"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Si depende de sus cámaras para auditar caja, mercancía o el flujo de clientes, un sistema descuidado es un riesgo silencioso:"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[{icon:Au,title:"Tiendas y minimercados",desc:"Arqueo de caja, fachada y bodega. Si la cámara de caja no graba bien, pierde la evidencia de las discrepancias de dinero."},{icon:Restaurant,title:"Restaurantes y cafés",desc:"Control de salón, cocina y barra. Aforo y cumplimiento de normas con analítica opcional."},{icon:Gn,title:"Oficinas y servicios",desc:"Accesos, recepción y zonas restringidas. Control de ingreso y respaldo de incidentes."},{icon:gt,title:"Bodegas y talleres",desc:"Patios de carga, perimetrales y zonas de almacenamiento. Cámaras tecnologizadas que graban día y noche."}].map(i=>n.jsxs("div",{className:"p-6 rounded-xl border",style:{borderColor:"var(--color-border)"},children:[n.jsx(i.icon,{className:"w-6 h-6 mb-4",style:{color:"var(--color-accent)"}}),n.jsx("h3",{className:"font-serif text-lg font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:i.desc})]},i.title))})]})}),n.jsx("section",{id:"proceso",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Cómo funciona el servicio de mantenimiento"}),n.jsx("p",{className:"font-sans text-lg text-center mb-16 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Del primer mensaje al sistema grabando correctamente en 4 pasos:"}),n.jsxs("div",{className:"space-y-12 relative",children:[n.jsx("div",{className:"absolute left-6 md:left-8 top-0 bottom-0 w-0.5",style:{backgroundColor:"var(--color-border)"}}),[{icon:xt,step:"01",title:"Diagnóstico técnico",desc:"Coordinamos visita o video-llamada. Reportamos el estado de sus cámaras, la causa de cualquier falla y le entregamos cotización cerrada. Sin intervenir hasta que usted apruebe.",time:"mismo día"},{icon:bi,step:"02",title:"Mantenimiento preventivo / correctivo",desc:"Limpiamos lentes, revisamos cableado y fuentes, actualizamos firmware, verificamos almacenamiento y reparamos lo aprobado. Dejamos todo limpio y ordenado.",time:"2-4 horas"},{icon:Sr,step:"03",title:"Configuración y reporte",desc:"Dejamos grabación continua correcta, retención de 90 días y acceso remoto. Le entregamos un reporte claro del estado de cada cámara: qué se corrigió y qué se recomienda.",time:"entrega del día"},{icon:ft,step:"04",title:"Seguimiento y soporte",desc:"Según el plan, activamos supervisión remota y alertas por WhatsApp/Email ante caídas. Un problema se detecta en minutos, no en semanas.",time:"24/7 opcional"}].map(i=>n.jsxs("div",{className:"relative flex gap-6 md:gap-8",children:[n.jsx("div",{className:"flex-shrink-0 z-10",children:n.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif font-bold text-lg md:text-xl border-4",style:{backgroundColor:"var(--color-background)",borderColor:"var(--color-accent)",color:"var(--color-accent)"},children:i.step})}),n.jsxs("div",{className:"flex-1 pt-2 md:pt-4",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("h3",{className:"font-serif text-xl md:text-2xl font-bold",children:i.title})]}),n.jsx("p",{className:"font-sans leading-relaxed mb-3",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsxs("span",{className:"inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.8},children:["⏱ ",i.time]})]})]},i.step))]})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Precios de mantenimiento de cámaras 2026"}),n.jsx("p",{className:"font-sans text-lg mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Tarifas referenciales en Bogotá para mantenimiento preventivo y correctivo (COP, IVA incluido). Cotización cerrada según su sistema."}),n.jsx("div",{className:"overflow-x-auto mb-8 rounded-xl border",style:{borderColor:"var(--color-border)"},children:n.jsxs("table",{className:"w-full text-sm font-sans",children:[n.jsx("thead",{children:n.jsxs("tr",{style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[n.jsx("th",{className:"px-4 py-3 text-left font-sans font-semibold",children:"Servicio"}),n.jsx("th",{className:"px-4 py-3 text-left font-sans font-semibold",children:"Alcance"}),n.jsx("th",{className:"px-4 py-3 text-left font-sans font-semibold",children:"Precio desde"})]})}),n.jsx("tbody",{children:[["Mantenimiento preventivo","Hasta 4 cámaras: limpieza, firmware, cableado","$180.000 / visita"],["Cámara adicional","Cada punto extra de revisión","$35.000 / cámara"],["Diagnóstico correctivo","Causa exacta + cotización de reparación","Gratis al contratar"],["Supervisión remota mensual","Monitoreo de caídas + alertas WhatsApp","$250.000 / mes"],["Correctivo (equipo/reparación)","Según falla aprobada","Cotizado por caso"]].map((i,l)=>n.jsx("tr",{style:{borderTop:"1px solid var(--color-border)",backgroundColor:l%2?"var(--color-background)":"transparent"},children:i.map((c,m)=>n.jsx("td",{className:"px-4 py-3",style:{color:m===2?"var(--color-accent)":"var(--color-foreground)",fontWeight:m===2?700:"normal"},children:c},m))},l))})]})}),n.jsx("p",{className:"font-sans text-sm mb-8",style:{color:"var(--color-muted-foreground)"},children:"* El valor final depende del número de puntos, distancia de cableado y el estado del sistema. Diagnóstico y cotización sin costo."}),n.jsxs("a",{href:ki,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[n.jsx(ta,{className:"w-4 h-4"})," Cotizar ahora por WhatsApp"]})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes sobre mantenimiento de cámaras"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Todo lo que necesita saber antes de agendar su revisión en Bogotá:"}),n.jsx("div",{className:"space-y-4",children:vh.map(i=>n.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[n.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[n.jsx("span",{children:i.q}),n.jsx(ue,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),n.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:n.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Agende su revisión de cámaras gratis"}),n.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Visitamos su negocio o casa en Bogotá, revisamos el estado de sus cámaras y le entregamos diagnóstico y cotización. Sin compromiso."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[n.jsxs("a",{href:ki,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[n.jsx(ta,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),n.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[n.jsx(ir,{className:"w-4 h-4"})," Email Directo"]})]}),n.jsx("div",{className:"text-left",children:n.jsx(hh,{md:`
## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

## Más servicios de cámaras en Bogotá

- [Instalación de cámaras de seguridad](#instalacion)
- [Cámaras de seguridad para negocio](#negocio)
- [Precios de instalación de cámaras](#precios-camaras)
- [Cámaras de seguridad en Suba](#suba)
- [Cámaras de seguridad en Kennedy](#kennedy)
- [Cámaras de seguridad en Chapinero](#chapinero)
- [Cámaras de seguridad en Usaquén](#usaquen)
- [Cámaras de seguridad en Fontibón](#fontibon)

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`})})]})})]})}const lu="https://wa.me/573337450634?text=Hola%2C%20necesito%20un%20consultor%20tecnol%C3%B3gico%20para%20mi%20negocio%20en%20Bogot%C3%A1";function bh({md:i}){return n.jsx("div",{className:"prose prose-lg max-w-none font-sans",style:{color:"var(--color-foreground)"},dangerouslySetInnerHTML:{__html:F.parse(i)}})}const yh=[{q:"¿Qué hace exactamente un consultor tecnológico?",a:"Analiza cómo usa su negocio la tecnología, encuentra costos escondidos y flujos manuales que se pueden automatizar, y diseña un plan de implementación con retorno medible. No vendemos tecnología por vender: priorizamos lo que le genera ROI en el corto plazo."},{q:"¿En qué se diferencia de un ingeniero de sistemas tradicional?",a:"Un ingeniero de sistemas suele mantener la infraestructura. Un consultor tecnológico evalúa, decide y estructura: cuántas cámaras necesita realmente, si su CCTV sirve o hay que reprogramarlo, qué procesos se automatizan primero y cómo se conectan con su CRM."},{q:"¿Trabajan solo con empresas o también con negocios pequeños?",a:"Con ambos. Hemos hecho diagnósticos desde una ferretería de barrio en Kennedy hasta bodegas de distribución. Para PYMES el diagnóstico se enfoca en seguridad (cámaras), atención (WhatsApp bot) y automatización básica con retorno rápido."},{q:"¿Cuánto cuesta un diagnóstico tecnológico?",a:"El diagnóstico inicial de diagnóstico de 1 a 2 horas es gratuito cuando se concreta la implementación. Si solo quiere el informe sin ejecutar nada, tiene un costo desde $350.000 COP según el alcance."},{q:"¿Me obligan a comprar hardware nuevo?",a:"No. Nuestra filosofía es reutilizar: si sus cámaras Hikvision/Dahua cumplen RTSP/ONVIF las reprogramamos con IA en lugar de venderle equipos nuevos. Solo proponemos compra cuando el equipo existente no sirve y se lo explicamos con datos."},{q:"¿En qué zonas de Bogotá ofrecen consultoría?",a:"En toda Bogotá: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Centro y sur. El diagnóstico remoto se hace por video-llamada; la visita técnica presencial se agenda dentro de los 2 días hábiles."}];function Ch(){return n.jsxs("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:[n.jsxs("section",{className:"relative overflow-hidden py-20 md:py-28 px-6",style:{backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",backgroundSize:"32px 32px"}}),n.jsxs("div",{className:"max-w-4xl mx-auto text-center relative z-10",children:[n.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[n.jsx(wi,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("span",{className:"text-sm font-sans uppercase tracking-widest",style:{color:"var(--color-muted-foreground)"},children:"Consultoría tecnológica · Bogotá"})]}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",children:"Consultor Tecnológico para Empresas en Bogotá"}),n.jsx("p",{className:"font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed",style:{color:"var(--color-muted-foreground)"},children:"Convertimos la tecnología que ya paga en resultados medibles: seguridad con IA, automatización de procesos y datos que toman decisiones. Diagnóstico con retorno de inversión, sin tecnicismos."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[n.jsxs("a",{href:lu,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:["Agendar Diagnóstico ",n.jsx(Ba,{className:"w-4 h-4"})]}),n.jsxs("a",{href:"#metodo",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:["Ver Metodología ",n.jsx(ue,{className:"w-4 h-4"})]})]}),n.jsx("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto",children:[{icon:Sg,label:"Diagnóstico",sub:"gratis con implementación"},{icon:ct,label:"ROI",sub:"medido en semanas"},{icon:en,label:"Reutiliza",sub:"su CCTV actual"},{icon:dt,label:"Procesos",sub:"automatizados con n8n"}].map(i=>n.jsxs("div",{className:"text-center",children:[n.jsx(i.icon,{className:"w-6 h-6 mx-auto mb-2",style:{color:"var(--color-accent)"}}),n.jsx("p",{className:"font-sans font-semibold text-sm",children:i.label}),n.jsx("p",{className:"font-sans text-xs",style:{color:"var(--color-muted-foreground)"},children:i.sub})]},i.label))})]})]}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"El costo escondido de NO tener consultoría"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"La mayoría de PYMES paga tecnología que no usan o usa tecnología que no funciona. Un consultor detecta esto en semanas:"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[{icon:fa,title:"Cámaras que no graban como deberían",desc:"Equipos instalados sin orientación correcta, SD llena, DVR sin configurar. El dueño cree que está protegido y descubre que no tiene video hasta después del robo.",tag:"Seguridad"},{icon:dt,title:"Tareas repetitivas que nadie mide",desc:"Reportes a mano, confirmaciones por WhatsApp copiadas una a una, inventario en Excel desactualizado. Horas que se convierten en dinero perdido cada mes.",tag:"Automatización"},{icon:ct,title:"Datos que no se usan para decidir",desc:"El negocio tiene datos (ventas, aforo, arqueos) pero la gerencia decide por intuición porque nadie los consolidó en un tablero.",tag:"Datos"}].map(i=>n.jsxs("div",{className:"p-6 md:p-8 rounded-xl border",style:{borderColor:"var(--color-border)",backgroundColor:"var(--color-background)"},children:[n.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.tag})]},i.title))})]})}),n.jsx("section",{id:"metodo",className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-4xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Cómo trabaja el consultor"}),n.jsx("p",{className:"font-sans text-lg text-center mb-16 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Un método claro, con entregables en cada etapa y retorno medido:"}),n.jsxs("div",{className:"space-y-12 relative",children:[n.jsx("div",{className:"absolute left-6 md:left-8 top-0 bottom-0 w-0.5",style:{backgroundColor:"var(--color-border)"}}),[{icon:xt,step:"01",title:"Diagnóstico tecnológico",desc:"Auditoría de su infraestructura actual: CCTV, conectividad, herramientas de gestión. Identificamos los 3 problemas que más plata le cuestan y los priorizamos por ROI.",time:"1-2 horas"},{icon:cg,step:"02",title:"Plan de acción con ROI",desc:"Le entregamos un plan concreto: qué se automatiza primero, si sus cámaras se reprograman o se reemplazan, y cuánto cuesta cada paso. Cada recomendación tiene costo y retorno estimado.",time:"2-3 días"},{icon:dt,step:"03",title:"Implementación por fases",desc:"Ejecutamos por fases pequeñas: primero lo que se paga solo (seguridad IA o automatización de WhatsApp), luego lo que agrega control (dashboards y reportes).",time:"Semanas"},{icon:ct,step:"04",title:"Seguimiento y ajuste",desc:"Medimos el resultado real: mermas reducidas, horas ahorradas, respuestas más rápidas. Ajustamos lo que no esté dando el retorno prometido. Usted recibe reportes claros.",time:"Mensual"}].map(i=>n.jsxs("div",{className:"relative flex gap-6 md:gap-8",children:[n.jsx("div",{className:"flex-shrink-0 z-10",children:n.jsx("div",{className:"w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif font-bold text-lg md:text-xl border-4",style:{backgroundColor:"var(--color-background)",borderColor:"var(--color-accent)",color:"var(--color-accent)"},children:i.step})}),n.jsxs("div",{className:"flex-1 pt-2 md:pt-4",children:[n.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}}),n.jsx("h3",{className:"font-serif text-xl md:text-2xl font-bold",children:i.title})]}),n.jsx("p",{className:"font-sans leading-relaxed mb-3",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsxs("span",{className:"inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.8},children:["⏱ ",i.time]})]})]},i.step))]})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Áreas donde un consultor tecnológico agrega valor"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12 max-w-2xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"Del CCTV a los datos, todo conectado en un solo plan:"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{icon:fa,title:"Seguridad con IA (CCTV)",desc:"¿Sus cámaras Hikvision/Dahua sirven? Las auditamos, reprogramamos con analítica YOLO y conectamos alertas a WhatsApp. Reducción de mermas documentada del 68% en clientes de retail.",tag:"APC Visión AI"},{icon:dt,title:"Automatización de procesos",desc:"n8n + APIs: del dato de la cámara al CRM, del pedido al inventario, de la alerta al WhatsApp del gerente. Flujos que eliminan tareas manuales.",tag:"APC Automatización"},{icon:ct,title:"Datos y tableros ejecutivos",desc:"Centralizamos CCTV + CRM + ventas en dashboards (Looker/Grafana) para que la gerencia decida con datos reales, no con corazonadas.",tag:"APC Core"},{icon:bt,title:"Presencia digital y SEO local",desc:"Su negocio en Google Maps y búsquedas locales de Bogotá, con landing de alta conversión conectada a WhatsApp. CTA web → bot → cita → venta.",tag:"DogWeb"},{icon:$i,title:"Infraestructura y resiliencia",desc:"Servidores edge GPU, redes, bases de datos replicadas y respaldo. Si se cae el internet, su CCTV + IA siguen grabando en local.",tag:"APC Core"},{icon:ta,title:"Bots de WhatsApp con IA",desc:"Atención 24/7: responden, agendan, califican leads. Conectado a su CRM y a la analítica de video para alertas automáticas.",tag:"APC Automatización"}].map(i=>n.jsxs("div",{className:"group p-6 rounded-xl border transition-all hover:shadow-lg",style:{borderColor:"var(--color-border)"},children:[n.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center mb-4",style:{backgroundColor:"var(--color-accent)",opacity:.1},children:n.jsx(i.icon,{className:"w-5 h-5",style:{color:"var(--color-accent)"}})}),n.jsx("h3",{className:"font-serif text-xl font-bold mb-2",children:i.title}),n.jsx("p",{className:"font-sans text-sm leading-relaxed mb-4",style:{color:"var(--color-muted-foreground)"},children:i.desc}),n.jsx("span",{className:"text-xs font-sans px-3 py-1 rounded-full",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)",opacity:.9},children:i.tag})]},i.title))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4 text-center",children:"Preguntas frecuentes sobre consultoría tecnológica"}),n.jsx("p",{className:"font-sans text-lg text-center mb-12",style:{color:"var(--color-muted-foreground)"},children:"Lo que las empresas en Bogotá preguntan antes de empezar:"}),n.jsx("div",{className:"space-y-4",children:yh.map(i=>n.jsxs("details",{className:"group border rounded-xl overflow-hidden",style:{borderColor:"var(--color-border)"},children:[n.jsxs("summary",{className:"flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none",children:[n.jsx("span",{children:i.q}),n.jsx(ue,{className:"w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90",style:{color:"var(--color-accent)"}})]}),n.jsx("div",{className:"px-5 pb-5 font-sans text-sm leading-relaxed",style:{color:"var(--color-muted-foreground)",borderTop:"1px solid var(--color-border)"},children:n.jsx("p",{className:"pt-4",children:i.a})})]},i.q))})]})}),n.jsx("section",{className:"py-16 md:py-24 px-6",style:{borderTop:"1px solid var(--color-border)"},children:n.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl font-bold mb-4",children:"Agende su diagnóstico tecnológico"}),n.jsx("p",{className:"font-sans text-lg mb-8 max-w-xl mx-auto",style:{color:"var(--color-muted-foreground)"},children:"En 1-2 horas sabrá si su tecnología está protegiendo su dinero o gastándolo. Diagnóstico gratis si concreta la implementación."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 mb-12",children:[n.jsxs("a",{href:lu,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105",style:{backgroundColor:"var(--color-accent)",color:"var(--color-background)"},children:[n.jsx(ta,{className:"w-4 h-4"})," WhatsApp: 333 745 0634"]}),n.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105",style:{borderColor:"var(--color-border)",color:"var(--color-foreground)"},children:[n.jsx(ir,{className:"w-4 h-4"})," Email Directo"]})]}),n.jsx("div",{className:"text-left",children:n.jsx(bh,{md:`
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
`})})]})})]})}const Ah=`---\r
title: "Cámaras Hikvision + IA para Empresas: Guía Definitiva Bogotá 2026"\r
excerpt: "No vendemos cámaras. Convertimos sus Hikvision/Dahua actuales en analítica YOLO: conteo, intrusión, aforo, arqueo, PPE. Offline-First, alertas Telegram/WhatsApp, dashboard 24/7. Casos reales: ferretería Suba (placas 2am), clínica Chapinero (caídas/PPE), distribuidora Jone (340% más cotizaciones)."\r
date: "2026-07-25"\r
publishDate: "2026-07-24"\r
author: "Servicios APC"\r
category: "IA & Seguridad"\r
tags: "Hikvision, analítica de video, YOLO, CCTV inteligente, Bogotá, video analítica, ColorVu, AcuSense, DeepinView, PPE detection, arqueo de caja"\r
readTime: "12 min"\r
coverImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: '{"primary":{"label":"Mis cámaras solo graban, no me ayudan a decidir → Analítica IA Hikvision","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras dejaron de funcionar / no graban → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Mis sistemas no se hablan (CRM, facturación, inventario) → Automatización + Dashboard","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
## El problema: sus cámaras vigilan, pero no **auditan**\r
\r
La mayoría de empresas en Bogotá tienen CCTV. Pero cuando ocurre un robo, una discrepancia en caja o un incidente de seguridad, la respuesta es: *"la cámara no grabó bien"*, *"la imagen es borrosa de noche"*, *"nadie revisó las horas de video"*.\r
\r
**La diferencia entre vigilar y auditar:**\r
| Vigilar (CCTV tradicional) | Auditar (CCTV + IA YOLO) |\r
|---------------------------|--------------------------|\r
| Graba video 24/7 | Analiza cada frame en tiempo real |\r
| Humano ve pantallas | IA detecta y alerta en segundos |\r
| Revisión manual horas | Clip del evento en 30 seg (WhatsApp/Telegram) |\r
| "¿Qué pasó anoche?" | "Intrusión detectada 02:13 - clip adjunto" |\r
| Ciego de noche | ColorVu 4K: ve placas y rostros a las 2am |\r
\r
---\r
\r
## ¿Qué es exactamente la analítica de video con IA (YOLO)?\r
\r
**YOLO (You Only Look Once)** es una arquitectura de detección de objetos en tiempo real. Procesa cada frame de video y devuelve: *qué hay, dónde está, con qué confianza*.\r
\r
En Servicios APC **no vendemos cámaras**. Tomamos sus cámaras Hikvision/Dahua actuales (RTSP/ONVIF), les inyectamos módulos YOLOv8/v10 en su red local (edge), y convertimos el video en **datos accionables**:\r
\r
- **Conteo de personas** → aforo, mapas de calor, ocupación por zona\r
- **Detección de intrusión** → perímetros virtuales, alerta instantánea\r
- **Arqueo de caja asistido** → video del cajón + monto detectado por IA\r
- **Detección PPE** → casco, chaleco, guantes, gafas en obra/fábrica\r
- **Mapas de calor** → zonas muertas, cuellos de botella, recorrido cliente\r
- **Detección de caídas** → clínicas, residencias, alerta <30 seg a enfermería\r
\r
---\r
\r
## Compatibilidad: ¿Funciona con MIS cámaras Hikvision?\r
\r
**Sí, si soportan RTSP u ONVIF (Profile S/G/T).** La inmensa mayoría de modelos Hikvision 2018+ lo cumplen:\r
\r
| Serie Hikvision | Compatible | Comentario |\r
|----------------|------------|------------|\r
| **ColorVu 4K / 4MP** | ✅ 100% | Visión nocturna a color real → ideal placas/rostros 2am |\r
| **AcuSense 2MP/4MP** | ✅ 100% | Filtrado falso positivo (persona/vehículo) → mejor ROI |\r
| **DeepinView** | ✅ 100% | IA embebida en cámara (conteo, PPE, cola) → máxima precisión |\r
| **Serie 2xx / 4xx / 5xx / 7xx / 8xx (2018+)** | ✅ RTSP/ONVIF | Reprogramamos stream → inyectamos YOLO en edge |\r
| **Modelos pre-2017** | ⚠️ Verificar | Algunos solo MPEG-4 → puede requerir upgrade |\r
\r
**También funciona con Dahua, Uniview, Axis, Hanwha, TP-Link VIGI** — cualquier cámara con stream RTSP/ONVIF Profile S/G/T.\r
\r
> **¿No está seguro?** Envíenos el modelo exacto → le confirmamos gratis en 24h.\r
\r
---\r
\r
## Arquitectura: Offline-First = Cero pérdida aunque se caiga internet\r
\r
\`\`\`\r
[Cámaras Hikvision RTSP] \r
       ↓ (red local)\r
[Servidor Edge / NVR + GPU] → YOLOv8/v10 (inferencia local)\r
       ↓\r
[Alertas instantáneas] → Telegram / WhatsApp / Email (si hay internet)\r
       ↓\r
[Dashboard Web] → Mapas calor, conteos, arqueos, alertas históricas\r
       ↓ (cuando hay internet)\r
[Nube / N8N] → Sincronización, reportes PDF/Excel, backup\r
\`\`\`\r
\r
**Si se corta internet:** la IA sigue corriendo en local (edge). Cuenta personas, detecta intrusos, arquea cajas. Cuando vuelve la señal, sincroniza todo automático. **Nada se pierde.**\r
\r
---\r
\r
## Casos reales Bogotá (clientes Servicios APC)\r
\r
### 1. Ferretería El Progreso — Suba, Bogotá\r
**Problema:** Robos nocturnos, cámaras borrosas, placas ilegibles.\r
**Solución:** Hikvision ColorVu 4K ColorVu + YOLO detección placas + alerta Telegram.\r
**Resultado:** Recuperaron 3 bultos robados en 48h. Placa legible a las 2am. Cero falsos positivos.\r
> *"Por primera vez la Policía tuvo una prueba real. Antes solo teníamos sombras."*\r
\r
### 2. Clínica Dental Sonrisa Viva — Chapinero, Bogotá\r
**Problema:** Control aforo salas espera, normativa HIPAA/Ley 1581, caídas pacientes.\r
**Solución:** Hikvision 2MP WDR + YOLO aforo + detección caídas + zonas restringidas (RX, esterilización).\r
**Resultado:** Cumplimiento normativo 100%. Alerta caída → enfermería <30 seg. Cero incidentes zona RX.\r
> *"La alerta de caída llegó al celular de enfermería antes de que el paciente gritara."*\r
\r
### 3. Distribuidora Jone — Bodega + SEO Local Bogotá\r
**Problema:** Puntos ciegos bodega, 0 cotizaciones orgánicas web.\r
**Solución:** YOLO sobre Hikvision existentes + CCTV nuevo ColorVu bodega + SEO Local Google Maps + WhatsApp Bot embudos.\r
**Resultado:** Visibilidad 100% bodega. **+340% cotizaciones orgánicas Bogotá**. Bot atiende 80% consultas sin humano.\r
\r
---\r
\r
## Modelos Hikvision recomendados para IA (2026)\r
\r
| Necesidad | Modelo recomendado | Por qué |\r
|-----------|-------------------|---------|\r
| **Visión nocturna real (placas/rostros 2am)** | **ColorVu 4K / 4MP** | Sensor 1/1.2", apertura F1.0, luz suplementaria cálida → color real 0 lux |\r
| **Mejor costo/beneficio (filtrado falsos positivos)** | **AcuSense 2MP / 4MP** | Algoritmo persona/vehículo en cámara → reduce 90% falsos positivos |\r
| **Máxima precisión (conteo, PPE, cola, PPE)** | **DeepinView** | IA embebida (conteo, PPE, cola, heatmap) → precisión 98%+ |\r
| **Presupuesto ajustado + IA en edge** | Serie 2xx/4xx (2018+) + Edge Server | Reutiliza cámaras actuales + servidor GPU local |\r
\r
> **Consejo:** Para analítica YOLO en edge, recomendamos **ColorVu 4K** o **AcuSense 4MP** + servidor edge con GPU NVIDIA (T4 / A2000 / RTX 4000). Costo total ≈ 40% menos que DeepinView full.\r
\r
---\r
\r
## Alertas reales: ¿Cómo se ven en su celular?\r
\r
\`\`\`\r
🚨 ALERTA: INTRUSIÓN PERIMETRAL\r
📍 Zona: Bodega Principal - Puerta 3\r
🕐 2026-07-24 02:13:45\r
🎯 Objeto: Persona (confianza 94%)\r
📎 Clip: [Ver video 10s]\r
📍 Mapa: [Abrir en Google Maps]\r
⚡ Acciones: [Llamar Policía] [Activar Sirena] [Ver Live]\r
\`\`\`\r
\r
Recibe en **Telegram, WhatsApp Business, Email** simultáneo. Dashboard web con histórico, filtros, exportación PDF/Excel.\r
\r
---\r
\r
## Integración n8n: CCTV → Alerta → Acción automática\r
\r
\`\`\`mermaid\r
graph LR\r
    A[Cámara Hikvision RTSP] --> B[YOLO Edge: Intrusión]\r
    B --> C{n8n Webhook}\r
    C --> D[Telegram Gerente]\r
    C --> E[WhatsApp Bot → Cliente]\r
    C --> F[Ticket CRM / Jira]\r
    C --> G[Dashboard Grafana]\r
    C --> H[Sirena / Luz Estroboscópica]\r
\`\`\`\r
\r
**Ejemplos reales:**\r
- Intrusión bodega → Telegram gerente + Sirena + Ticket CRM\r
- Aforo excedido tienda → WhatsApp gerente + Ajuste HVAC automático\r
- Arqueo discrepante → Email contador + Alerta WhatsApp dueño\r
- Caída detectada clínica → Telegram enfermería + Llamada SIP\r
\r
---\r
\r
## Preguntas frecuentes (FAQ)\r
\r
### ¿Tengo que cambiar todas mis cámaras?\r
No. Si sus Hikvision/Dahua tienen RTSP/ONVIF (mayoría 2018+), reprogramamos el stream e inyectamos YOLO. **Costo 0€ en cámaras nuevas.**\r
\r
### ¿Qué pasa si se va la luz o internet?\r
Arquitectura **Offline-First**: IA corre en edge (su red local). Sigue contando, detectando, arqueando. Sincroniza al volver señal. **Cero pérdida.**\r
\r
### ¿La IA escucha conversaciones privadas?\r
No. Audio IA solo se activa por disparador (ej. sonido cajón apertura) por segundos. Resto del tiempo: **privacy by design**.\r
\r
### ¿Cómo veo las alertas en mi celular?\r
Telegram, WhatsApp Business, Email simultáneo. Dashboard web responsive (sin app extra). Clip de video 10s adjunto.\r
\r
### ¿Qué modelos Hikvision recomiendan para IA?\r
1. **ColorVu 4K/4MP** — visión nocturna color real (placas/rostros 2am)\r
2. **AcuSense 2MP/4MP** — filtrado falso positivo, mejor ROI\r
3. **DeepinView** — IA embebida (conteo, PPE, cola), máxima precisión\r
\r
### ¿Funciona con Dahua u otras marcas?\r
Sí. Cualquier cámara con RTSP/ONVIF Profile S/G/T. Dahua, Uniview, Axis, Hanwha, TP-Link VIGI.\r
\r
### ¿Cuánto cuesta la implementación?\r
Depende de cámaras, puntos de análisis, servidores edge. **Auditoría gratis** → propuesta concreta con ROI estimado.\r
\r
---\r
\r
## Próximos pasos: ¿Cómo empezamos?\r
\r
1. **Auditoría gratis** (24h): Nos envía modelos de sus cámaras → confirmamos compatibilidad.\r
2. **Demo en vivo** (15 min): Le mostramos dashboard real con datos anonimizados de clientes Bogotá.\r
3. **Propuesta concreta**: Inversión, timeline (5-10 días hábiles), ROI estimado para su caso.\r
4. **Implementación llave en mano**: Instalación, configuración YOLO, dashboard, alertas, capacitación.\r
\r
> **¿Su caso es más amplio?** Si además de cámaras quiere automatizar procesos y centralizar datos, un [consultor tecnológico en Bogotá](#consultor) le arma el plan completo con ROI por fase. Y para cotizar un sistema nuevo desde cero, vea la página de [precios de instalación de cámaras 2026](#precios-camaras).\r
\r
> **¿Qué problema necesita resolver?**\r
\r
> 1. [Mis cámaras solo graban, no me ayudan a decidir → Analítica IA Hikvision](https://apcvisionai.site)  \r
> 2. [Mis cámaras dejaron de funcionar / no graban → Soporte técnico <30 min](https://apccore.site)  \r
> 3. [Mis sistemas no se hablan (CRM, facturación, inventario) → Automatización + Dashboard](https://apcautomatizacion.site)\r
\r
---\r
\r
## Ecosistema APC: Todo conectado\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Sh=`---\r
title: "Cámaras de seguridad para empresas: cuánto cuesta realmente en 2026 (Hardware vs IA)"\r
slug: "costo-camaras-seguridad-empresas-2026-hardware-vs-ia"\r
coverImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
publishDate: "2026-07-24"\r
author: "Servicios APC"\r
category: "Costos y ROI"\r
tags: ["Costos CCTV", "ROI IA", "Hikvision", "Presupuesto Seguridad", "Bogotá"]\r
description: "Desglose real de costos: hardware Hikvision vs capa IA, mantenimiento, licencias. Comparativa: solo IA (reutiliza cámaras) vs instalación completa. Casos Bogotá con ROI real."\r
cta: '{"primary":{"label":"No sé qué necesito: solo IA o instalación completa → Asesoría sin compromiso","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras actuales fallan / no graban bien → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar reportes y conectar mis sistemas → Dashboard unificado + n8n","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
# Cámaras de seguridad para empresas: cuánto cuesta realmente en 2026\r
\r
> **Respuesta rápida:** Solo IA (reutiliza sus cámaras) = **$150-400 USD/mes**. Instalación completa Hikvision + IA = **$2.800-8.500 USD inicial + $200-800 USD/mes**. ROI típico: 6-12 meses.\r
\r
---\r
\r
## El mito: "CCTV es caro y solo graban"\r
\r
La mayoría de empresas en Bogotá piensan en CCTV como **gasto pasivo**: compra cámaras, DVR, cableado, instalación → listo. Pero **no generan retorno**, solo "tranquilidad" (y a veces ni eso).\r
\r
**Con IA la ecuación cambia:** cada cámara se convierte en un sensor que genera datos → decisiones → ahorro/ingresos.\r
\r
---\r
\r
## Desglose real de costos 2026 (Bogotá, precios USD)\r
\r
### Opción A: Solo capa IA (reutiliza sus cámaras actuales)\r
\r
| Concepto | Costo | Detalle |\r
|----------|-------|---------|\r
| **Hardware** | **$0** | Usa sus Hikvision/Dahua RTSP/ONVIF actuales |\r
| **Servidor Edge (GPU)** | $1.200-2.500 (único) | NVIDIA T4 / RTX A2000 / RTX 4000 - lo dimensionamos a su escala |\r
| **Software IA (YOLOv8/v10 + Dashboard + Alertas)** | **$150-400 / mes** | Incluye: YOLOv8/v10, dashboard web, alertas Telegram/WhatsApp/Email, reportes automáticos, soporte |\r
| **Instalación y configuración** | $800-1.500 (único) | Cableado lógico, configuración YOLO, reglas, alertas, capacitación |\r
| **Mantenimiento/soporte** | Incluido en mensualidad | Actualizaciones YOLO, monitoreo salud servidor, soporte remoto + presencial Bogotá |\r
\r
**Total Año 1:** ~$3.500-5.500 USD  \r
**Año 2+:** $1.800-4.800 USD/año\r
\r
---\r
\r
### Opción B: Instalación completa Hikvision IA-ready + IA\r
\r
| Ítem | Especificación | Costo unitario | Cant. típica (Pyme 10-20 cámaras) | Subtotal |\r
|------|----------------|----------------|-----------------------------------|----------|\r
| **Cámaras Hikvision ColorVu 4K** | 8MP, ColorVu, IP67, IK10 | $350-450 | 12 | $4.200-5.400 |\r
| **Cámaras Hikvision AcuSense 4MP** | 4MP, filtro persona/vehículo | $180-250 | 8 | $1.440-2.000 |\r
| **NVR Hikvision 32 ch** | 32ch, 4 SATA, POE | $400-600 | 1 | $400-600 |\r
| **Servidor Edge GPU** | NVIDIA T4 / RTX A2000 | $1.500-2.500 | 1 | $1.500-2.500 |\r
| **Cableado estructurado (Cat6, tubos, conectores)** | Cat6 UTP, tubería EMT, patch panel | $2.500-4.000 | 1 proyecto | $2.500-4.000 |\r
| **Instalación física + configuración** | Montaje, tendido, focus, IP, YOLO rules | $2.000-3.500 | 1 | $2.000-3.500 |\r
| **Software IA + Dashboard + Alertas** | $200-500/mes | - | - | $2.400-6.000/año |\r
\r
**Total Año 1 (hardware + instalación + 1er año IA):** **$14.440-24.500 USD**  \r
**Año 2+ (solo IA + mantenimiento):** $2.400-6.000 USD/año\r
\r
---\r
\r
## ¿Qué incluye la mensualidad de IA? (No es "licencia", es servicio)\r
\r
| Incluido | Detalle |\r
|----------|---------|\r
| **Modelos YOLO actualizados** | v8 → v9 → v10 automático |\r
| **Dashboard web multi-sede** | Mapas calor, conteos, arqueos, alertas históricas |\r
| **Alertas multi-canal** | Telegram + WhatsApp Business + Email simultáneo |\r
| **Reportes automáticos** | PDF/Excel diarios/semanales/mensuales a Email/Telegram |\r
| **Soporte remoto + presencial Bogotá** | 9am-6pm lunes-viernes, emergencias 24/7 |\r
| **Actualizaciones de seguridad** | Parches OS, firmware cámaras, dependencias |\r
| **Monitoreo salud servidor** | Uptime, GPU temp, disco, RAM → alerta proactiva |\r
| **Capacitación continua** | 1 sesión trimestral para su equipo |\r
\r
> **No hay "licencia por cámara".** Paga por el servicio completo, sin límite de cámaras analizadas (hasta capacidad del servidor edge).\r
\r
---\r
\r
## ROI real: ¿En cuánto se paga solo?\r
\r
### Caso 1: Ferretería Suba (Solo IA, 8 cámaras existentes)\r
- **Inversión Año 1:** $4.200 USD\r
- **Ahorro detectado Año 1:** $18.000 USD (robos evitados + arqueos exactos + aforo optimizado)\r
- **ROI:** **328% Año 1** | Payback: **2.8 meses**\r
\r
### Caso 2: Clínica Chapinero (Instalación completa 16 cámaras Hikvision ColorVu + IA)\r
- **Inversión Año 1:** $18.500 USD\r
- **Ahorro/Ingresos Año 1:** $32.000 USD (cumplimiento normativo, 0 incidentes zona RX, aforo optimizado, 0 caídas no detectadas)\r
- **ROI:** **73% Año 1** | Payback: **6.9 meses**\r
\r
### Caso 3: Distribuidora Jone (Híbrido: 6 existentes + 6 nuevas ColorVu + IA + SEO Local + Bot)\r
- **Inversión Año 1:** $12.000 USD\r
- **Ingresos nuevos Año 1:** $85.000 USD (cotizaciones orgánicas + bot WhatsApp)\r
- **ROI:** **608% Año 1** | Payback: **1.7 meses**\r
\r
> **La IA no es gasto, es inversión con payback medido en meses, no años.**\r
\r
---\r
\r
## Costos ocultos que NADIE le cuenta (y nosotros sí)\r
\r
| Costo oculto | Qué pasa si no lo considera | Nuestra solución |\r
|--------------|----------------------------|------------------|\r
| **Cableado estructurado mal hecho** | Caídas de paquetes → IA falla, video entrecortado | Cableado Cat6 certificado, tester Fluke, certificación escrita |\r
| **Servidor Edge subdimensionado** | IA lenta, frames perdidos, alertas tardías | Dimensionamos GPU por cámaras × FPS × modelos YOLO concurrentes |\r
| **Firmware cámaras desactualizado** | Vulnerabilidades, RTSP inestable, ONVIF roto | Actualización firmware incluída + monitoreo automático |\r
| **Alertas sin filtro (falsos positivos)** | Gerente ignora alertas → sistema inútil | YOLOv10 + filtrado persona/vehículo + zonas + horarios → 95%+ precisión |\r
| **Sin respaldo de video** | Incidente crítico → video borrado por overwrite | Retención configurable (30/60/90 días) en NAS/NVR + cloud backup opcional |\r
| **Sin capacitación** | Equipo no usa dashboard → 0 valor | 1 sesión trimestral incluída + videos tutoriales + manual PDF |\r
\r
---\r
\r
## Comparativa rápida: Opción A vs B vs "Comprar cámaras baratas sin IA"\r
\r
| Factor | **Solo IA (Opción A)** | **Completa Hikvision + IA (Opción B)** | **Cámaras baratas sin IA** |\r
|--------|------------------------|----------------------------------------|----------------------------|\r
| **Inversión inicial** | $2.000-4.000 USD | $12.000-22.000 USD | $3.000-6.000 USD |\r
| **Genera datos accionables** | ✅ Sí | ✅ Sí | ❌ No |\r
| **Alertas en tiempo real** | ✅ Sí | ✅ Sí | ❌ No |\r
| **Visión nocturna real** | Si cámaras actuales la tienen | ✅ ColorVu 4K (incluido) | ❌ IR borroso |\r
| **Payback típico** | 3-6 meses | 6-12 meses | **Nunca** (es gasto puro) |\r
| **Escalable** | ✅ Agrega cámaras al servidor | ✅ Agrega cámaras + NVR | ⚠️ Límite DVR barato |\r
| **Soporte Bogotá** | ✅ Incluido | ✅ Incluido | ❌ "Llame al distribuidor" |\r
\r
---\r
\r
## Preguntas que debe hacerle a CUALQUIER proveedor (y nuestras respuestas)\r
\r
| Pregunta | Respuesta Servicios APC |\r
|----------|------------------------|\r
| **¿Incluye cableado certificado?** | Sí, Cat6, tester Fluke, certificado escrito |\r
| **¿El servidor Edge lo dimensionan ustedes?** | Sí, GPU NVIDIA según cámaras × FPS × modelos YOLO concurrentes |\r
| **¿Actualizan modelos YOLO automáticamente?** | Sí, v8→v9→v10 sin costo extra |\r
| **¿Alertas en WhatsApp/Telegram incluidas?** | Sí, multi-canal simultáneo |\r
| **¿Soporte presencial en Bogotá?** | Sí, 9am-6pm L-V, emergencias 24/7 |\r
| **¿Qué pasa si se va la luz/internet?** | Offline-First: IA corre en local, sincroniza al volver |\r
| **¿Hay letra chica en la mensualidad?** | No. Todo incluído: modelos, dashboard, alertas, reportes, soporte, actualizaciones |\r
| **¿Puedo cancelar cuando quiera?** | Sí, aviso 30 días. Sin penalidades. El hardware edge es suyo. |\r
\r
---\r
\r
## Calculadora rápida: estime su inversión en 30 segundos\r
\r
> **¿Quiere su número exacto?**  \r
> [📱 **Envíenos por WhatsApp: "Quiero presupuesto CCTV + IA"**](https://wa.me/573337450634?text=Hola%2C%20quiero%20presupuesto%20CCTV%20%2B%20IA%20para%20mi%20empresa)  \r
> Le pedimos: (1) N° cámaras actuales, (2) Modelos si sabe, (3) Metros cuadrados, (4) Qué quiere detectar (personas, vehículos, placas, PPE, arqueo, caídas).  \r
> En **24h** le enviamos: presupuesto desglosado, timeline 5-10 días hábiles, ROI estimado para su caso.\r
\r
---\r
\r
## Próximos artículos de la serie\r
\r
| # | Título | Fecha |\r
|---|--------|-------|\r
| 3 | **Analítica de video: qué es, cómo funciona y por qué su empresa la necesita ya** | 2026-08-01 |\r
| 4 | **Hikvision ColorVu vs AcuSense vs DeepinView: cuál elegir para IA** | 2026-08-04 |\r
| 5 | **5 señales de que sus cámaras NO lo están protegiendo** | 2026-08-07 |\r
| 6 | **Cómo se ve un negocio con cámaras + IA vs sin IA (caso visual)** | 2026-08-10 |\r
| 7 | **Analítica de video con IA para ferreterías en Bogotá: caso real** | 2026-08-13 |\r
| 8 | **Analítica de video con IA para clínicas en Bogotá: cumplimiento y seguridad** | 2026-08-16 |\r
| 9 | **Normativa videovigilancia Colombia 2026: Ley 1581, Habeas Data, Resolución 1074** | 2026-08-19 |\r
| 10 | **ROI de cámaras inteligentes: cuánto recupera en 6 meses (calculadora incluida)** | 2026-08-22 |\r
\r
---\r
\r
## ¿Qué problema necesita resolver hoy?\r
\r
> 1. [No sé qué necesito: solo IA o instalación completa → Asesoría sin compromiso](https://apcvisionai.site)  \r
> 2. [Mis cámaras actuales fallan / no graban bien → Soporte técnico <30 min](https://apccore.site)  \r
> 3. [Quiero automatizar reportes y conectar mis sistemas → Dashboard unificado + n8n](https://apcautomatizacion.site)\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,kh=`---\r
title: "Analítica de video: qué es, cómo funciona y por qué su empresa la necesita ya"\r
slug: "que-es-analitica-video-ia-empresas-bogota"\r
coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
publishDate: "2026-07-24"\r
author: "Servicios APC"\r
category: "IA & Seguridad"\r
tags: "analítica de video, video analítica, YOLO, CCTV inteligente, IA seguridad, Bogotá"\r
description: "Explicación sencilla: qué es analítica de video, cómo YOLO convierte frames en datos, casos de uso reales (conteo, intrusión, aforo, arqueo, PPE) y por qué su CCTV actual ya sirve."\r
readTime: "8 min"\r
cta: '{"primary":{"label":"Quiero ver qué detecta la IA en mi negocio → Demo analítica YOLO","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras no son compatibles / fallan → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar alertas a WhatsApp/CRM → n8n flujos CCTV → Acción","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
# Analítica de video: qué es, cómo funciona y por qué su empresa la necesita ya\r
\r
**Su CCTV graba 24/7. Nadie ve los videos. La analítica de video con IA (YOLO) cambia eso: convierte cada frame en decisiones accionables — sin que usted mire pantallas.**\r
\r
---\r
\r
## 1. ¿Qué es analítica de video con IA?\r
\r
La **analítica de video** es el procesamiento automático de flujos de video para extraer información estructurada: **conteo, clasificación, detección de eventos, medición**.\r
\r
Con **IA (Deep Learning / YOLO)**, el sistema **entiende** lo que ve:\r
- No es "detección de movimiento" (pixeles cambian)\r
- Es **detección de objetos**: "persona", "vehículo", "casco", "chaleco", "placa", "cajón de caja"\r
\r
> **Diferencia clave:** Motion detection = "algo cambió". Video Analytics IA = "una persona entró en zona restringida a las 14:23:12, llevaba casco pero no chaleco".\r
\r
---\r
\r
## 2. Cómo funciona (en 3 pasos)\r
\r
\`\`\`\r
Cámara Hikvision (RTSP) \r
      │\r
      ▼\r
Servidor Edge (GPU NVIDIA) ──▶ YOLOv8/v9/v10 inference (30-60 FPS)\r
      │\r
      ├──▶ Base de datos local (eventos + metadatos)\r
      ├──▶ Alertas en tiempo real (Telegram/WhatsApp/Email)\r
      └──▶ Dashboard web (mapas calor, conteos históricos, reportes)\r
      │\r
      ▼ (sync cuando hay internet)\r
Cloud / N8N ──▶ CRM, WhatsApp Bot, Reportes automáticos, Integraciones\r
\`\`\`\r
\r
**Offline-First:** Si se va internet, la inferencia sigue corriendo en local. Sincroniza al volver. **Cero pérdida.**\r
\r
---\r
\r
## 3. 7 Casos de uso que ya resuelven empresas en Bogotá\r
\r
| Caso | Qué detecta YOLO | Acción automática | Valor |\r
|------|------------------|-------------------|-------|\r
| **Conteo aforo** | Personas entrando/saliendo por zona | Alerta si > límite legal | Cumplimiento norma, seguridad |\r
| **Mapas de calor** | Densidad de personas por zona/tiempo | Reporte semanal PDF/Email | Layout tienda, personal, marketing |\r
| **Arqueo de caja** | Apertura cajón + monto visible (OCR opcional) | Alerta si monto ≠ POS | Cero pérdidas caja, auditoría 100% |\r
| **Intrusión perimetral** | Persona/vehículo en zona restringida horario | Clip 10s + ubicación → WhatsApp gerente | Respuesta < 30 seg |\r
| **PPE Detection** | Casco, chaleco, guantes, gafas en obra/fábrica | Alerta supervisor si falta EPP | Cumplimiento SST, 0 multas |\r
| **Detección caídas** | Persona en suelo > 3 seg zona riesgo | Alerta enfermería + clip | Respuesta < 30 seg, Duty of Care |\r
| **Lectura placas (ANPR)** | Placas vehiculares entrada/salida | Log automático + alerta lista negra | Control acceso, logística, seguridad |\r
\r
---\r
\r
## 4. ¿Por qué AHORA? (3 razones de peso)\r
\r
1. **Hardware ya compatible:** 78% de Hikvision 2018+ son RTSP/ONVIF → **$0 hardware nuevo** en la mayoría de casos.\r
2. **YOLOv8/v9/v10 = precisión real:** 95%+ mAP en personas/vehículos. Falsos positivos < 5%.\r
3. **Offline-First = confianza total:** No depende de internet. Procesa en su red. Sincroniza cuando hay señal.\r
\r
---\r
\r
## 5. Mitos vs Realidad\r
\r
| Mito | Realidad |\r
|------|----------|\r
| "Necesito cámaras nuevas caras" | **No.** RTSP/ONVIF estándar → su Hikvision actual sirve. |\r
| "La IA falla mucho (falsos positivos)" | **YOLOv10 + zonas + horarios + clase persona/vehículo = 95%+ precisión.** |\r
| "Necesito internet rápido todo el tiempo" | **Offline-First.** Procesa en local. Solo sincroniza metadatos. |\r
| "Es muy técnico para mi equipo" | **Dashboard web + alertas WhatsApp/Telegram.** Cero código. Reportes PDF automáticos. |\r
| "Viola privacidad (Ley 1581)" | **Privacy by design:** Audio solo por disparador, rostros borrados opcional, datos en su servidor. |\r
\r
---\r
\r
## 6. Primer paso: Auditoría gratis de sus cámaras\r
\r
> **Nos dice modelos y cantidad → Le confirmamos compatibilidad + propuesta en 24h.**\r
\r
[📱 **WhatsApp: "Auditoría gratis mis cámaras Hikvision"**](https://wa.me/573337450634?text=Hola%2C%20quiero%20auditor%C3%ADa%20gratis%20de%20mis%20c%C3%A1maras%20Hikvision)  \r
[📧 **Email: serviciosapcsoporte@gmail.com**](mailto:serviciosapcsoporte@gmail.com)\r
\r
---\r
\r
## ¿Qué problema necesita resolver hoy?\r
\r
> 1. [Quiero ver qué detecta la IA en mi negocio → Demo analítica YOLO](https://apcvisionai.site)  \r
> 2. [Mis cámaras no son compatibles / fallan → Soporte técnico <30 min](https://apccore.site)  \r
> 3. [Quiero automatizar alertas a WhatsApp/CRM → n8n flujos CCTV → Acción](https://apcautomatizacion.site)\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,jh=`---\r
title: "5 señales de que sus cámaras NO lo están protegiendo (y cómo arreglarlo ya)"\r
slug: "5-senales-camaras-no-protegen-empresa-bogota"\r
coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
publishDate: "2026-07-25"\r
author: "Servicios APC"\r
category: "Diagnóstico"\r
tags: "señales CCTV fallando, cámaras no graban, puntos ciegos, visión nocturna mala, arqueo caja, Bogotá"\r
description: "5 señales claras de que su CCTV falla: 'justo no grabó', visión nocturna borrosa, puntos ciegos, arqueo manual, técnico no contesta domingo. Solución: IA YOLO + Hikvision ColorVu/AcuSense + Offline-First."\r
readTime: "6 min"\r
cta: '{"primary":{"label":"Mis cámaras fallan justo cuando las necesito → Soporte técnico <30 min Bogotá","href":"https://apccore.site"},"secondary":{"label":"No veo nada de noche / placas borrosas → ColorVu 4K + IA visión nocturna","href":"https://apcvisionai.site"},"tertiary":{"label":"Arqueo manual, puntos ciegos, sin alertas → IA YOLO completa + dashboard","href":"https://apcvisionai.site"}}'\r
---\r
\r
# 5 señales de que sus cámaras NO lo están protegiendo (y cómo arreglarlo ya)\r
\r
**Tiene CCTV. Paga mantenimiento. Pero cuando pasa algo... "justo no grabó", "se ve borroso", "el técnico no contesta". Esas no son cámaras. Son gasto inútil.**\r
\r
---\r
\r
## Señal 1: "Justo en el momento del robo/incidente... la cámara NO grabó"\r
\r
**El síntoma:** Llega la Policía, piden video del hurto → "se perdió", "se sobrescribió", "el DVR falló justo ese día".\r
\r
**La causa real:** Grabación en bucle sin retención inteligente, NVR saturado, disco fallando sin alerta, overwrite agresivo.\r
\r
**La solución IA:**\r
- **Retención inteligente:** Solo sobrescribe frames sin eventos. Eventos (intrusión, aforo, arqueo, placa) → retención 90-365 días automática.\r
- **Health monitoring:** Disco SMART, CPU, GPU, red, cámaras online/offline → alerta Telegram **antes** de que falle.\r
- **Offline-First:** Si se va internet/luz, graba y analiza en local. Sincroniza al volver.\r
\r
> **Caso Ferretería Suba:** Recuperaron 3 bultos robados porque la IA guardó clip de la placa a las 2am. El NVR viejo hubiera sobrescrito en 48h.\r
\r
---\r
\r
## Señal 2: Visión nocturna = "fantasmas grises borrosos"\r
\r
**El síntoma:** De noche ve "sombras", "manchas", "no se ve la placa", "no se ve el rostro", "es todo ruido IR".\r
\r
**La causa real:** Cámaras IR tradicionales (B/N) + sensor pequeño + apertura F2.0+ + sin luz suplementaria = ruido digital, desenfoque, placa/rostro ilegibles.\r
\r
**La solución IA + Hardware:**\r
| Problema | Solución |\r
|----------|----------|\r
| B/N borroso | **Hikvision ColorVu 4K/4MP:** Visión nocturna **color real 0 lux** (sensor 1/1.2", F1.0, LED cálida) |\r
| Placa ilegible 2am | ColorVu 4K → placa legible 25m noche |\r
| Rostro irreconocible | ColorVu 4MP/4K + YOLO detección rostro → alerta + clip 4K |\r
\r
> **Dato:** En Ferretería Suba, ColorVu 4K leyó placa a 25m a las 2am. Cámaras IR viejas: "mancha gris".\r
\r
---\r
\r
## Señal 3: Puntos ciegos = "zona franca para ladrones"\r
\r
**El síntoma:** "No vemos la bodega trasera", "el rincón del parqueadero no cubre", "la entrada trasera no tiene cámara".\r
\r
**La causa real:** Instalación "a ojo" sin planificación de cobertura, lentes fijos equivocados, sin mapas de calor previos.\r
\r
**La solución IA + Ingeniería:**\r
1. **Auditoría de cobertura:** Mapa de calor teórico + recorrido físico → identificamos 100% puntos ciegos.\r
2. **Lentes correctos:** Varifocal motorizado (2.8-12mm) en puntos críticos, gran angular en áreas abiertas.\r
3. **Mapas de calor IA:** YOLO genera heatmap real de tránsito → valida cobertura real vs teórica.\r
4. **Alertas perimetrales:** Zona virtual en mapa → intrusión = clip + alerta WhatsApp en 3 seg.\r
\r
> **Caso Distribuidora Jone:** 100% cobertura bodega + heatmap IA → 0 puntos ciegos. Antes: "zona franca" en rampa trasera.\r
\r
---\r
\r
## Señal 4: Arqueo de caja manual = "confíe en mí" (y pierde dinero)\r
\r
**El síntoma:** Fin de día: "cuadre manual", "confíe en el cajero", "diferencia $50.000 hoy", "no hay video del momento exacto".\r
\r
**La causa real:** Sin video sincronizado a transacción. POS y CCTV separados. Arqueo reactivo (mes), no preventivo (diario).\r
\r
**La solución IA: Arqueo de caja asistido por IA**\r
- **YOLO detecta:** Apertura cajón + monto visible en video (billetes) + timestamp exacto\r
- **Sincronía POS:** Cruce automático Video ↔ POS (monto ticket = monto video)\r
- **Alerta instantánea:** Si monto video ≠ monto POS → alerta gerente + clip 10s en WhatsApp\r
- **Reporte diario:** PDF/Excel con arqueo validado por IA → contabilidad en 1 clic\r
\r
> **Resultado clientes:** **Cero discrepancias arqueo mensual.** Antes: $200K-500K/mes "desaparecidos".\r
\r
---\r
\r
## Señal 5: Su técnico no contesta domingo a las 9pm (cuando más lo necesita)\r
\r
**El síntoma:** Cámara caída, NVR reiniciado, internet caído → llama al proveedor → "mañana paso", "estamos en mantenimiento", "no tengo repuestos".\r
\r
**La causa real:** Soporte reactivo, sin monitoreo proactivo, SLA inexistente, repuestos en otro país.\r
\r
**La solución: Arquitectura Offline-First + SLA Real Bogotá**\r
\r
| Lo que falla | Nuestra respuesta |\r
|--------------|-------------------|\r
| **Cámara offline** | Alerta Telegram/Email **inmediata** (health check 30 seg) → reinicio remoto PoE o envío técnico <4h Bogotá |\r
| **Internet caído** | **Offline-First:** IA sigue procesando en local (conteo, intrusión, arqueo). Sincroniza al volver. |\r
| **Luz cortada** | UPS dimensionado (30-60 min) → apagado ordenado NVR/Edge → 0 corrupción datos |\r
| **Disco fallando** | SMART monitoring → alerta **antes** de fallar → reemplazo programado (no emergencia) |\r
| **GPU/Edge server error** | Watchdog + auto-reinicio + alerta → si persiste, técnico presencial <4h Bogotá |\r
\r
**Nuestro SLA Bogotá (incluido en mensualidad IA):**\r
- 📱 **Alerta instantánea** (Telegram/WhatsApp/Email) 24/7\r
- 🔧 **Soporte remoto** 9am-6pm L-V, **emergencias 24/7**\r
- 🚗 **Técnico presencial Bogotá <4h** (emergencia) / <24h (no crítico)\r
- 🔄 **Repuestos stock local** (cámaras, fuentes PoE, switches, cables, discos)\r
\r
---\r
\r
## Checklist rápido: ¿Su CCTV aprueba o reprueba?\r
\r
| ✅ Aprueba | ❌ Reprueba |\r
|------------|-------------|\r
| Graba eventos críticos 90+ días sin sobrescribir | Sobrescribe a los 7-15 días |\r
| Ve placas/rostros nítidos a las 2am | "Manchas grises" de noche |\r
| 0 puntos ciegos (mapa calor valida) | "Zonas francas" sin cobertura |\r
| Arqueo de caja validado por IA diario | Arqueo manual "confíe en mí" |\r
| Alerta WhatsApp en 3 seg si intrusión | "Mañana revisamos las grabaciones" |\r
| Técnico contesta <1h / presencial <4h Bogotá | "Mañana paso", "no hay repuestos" |\r
| Health monitoring: disco, GPU, red, cámaras | Se entera cuando ya falló |\r
\r
---\r
\r
## ¿Cuántas señales tiene? → Su plan de acción\r
\r
| Señales | Acción inmediata |\r
|---------|------------------|\r
| **0-1** | ✅ Bien. Agende revisión anual preventiva. |\r
| **2-3** | ⚠️ Auditoría gratis → identifique cuellos de botella + plan 30 días. |\r
| **4-5** | 🔴 **Urgente.** Auditoría gratis HOY + plan corrección 7-15 días. |\r
\r
> **Auditoría gratis (24h respuesta):** Nos envía modelos + planos → le entregamos: (1) Mapa de puntos ciegos, (2) Compatibilidad IA, (3) Presupuesto cerrado hardware + IA + instalación, (4) ROI estimado.\r
\r
[📱 **WhatsApp: "Auditoría gratis mis 5 fallos"**](https://wa.me/573337450634?text=Hola%2C%20quiero%20auditor%C3%ADa%20gratis%20de%20mis%20c%C3%A1maras%20-%20tengo%20varias%20se%C3%B1ales%20de%20fallo)  \r
[📧 **Email: serviciosapcsoporte@gmail.com**](mailto:serviciosapcsoporte@gmail.com)\r
\r
---\r
\r
## ¿Qué problema necesita resolver hoy?\r
\r
> 1. [Mis cámaras fallan justo cuando las necesito → Soporte técnico <30 min Bogotá](https://apccore.site)  \r
> 2. [No veo nada de noche / placas borrosas → ColorVu 4K + IA visión nocturna](https://apcvisionai.site)  \r
> 3. [Arqueo manual, puntos ciegos, sin alertas → IA YOLO completa + dashboard](https://apcvisionai.site)\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Ph=`---\r
title: "Cómo se ve un negocio con cámaras + IA vs sin IA: caso visual antes/después"\r
slug: "negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues"\r
coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
publishDate: "2026-07-25"\r
author: "Servicios APC"\r
category: "Casos Visuales"\r
tags: "comparativa IA, antes después, Hikvision ColorVu, YOLO, arqueo caja, aforo, mapas calor, Bogotá"\r
description: "Comparativa visual real: negocio ANTES (cámaras borrosas, arqueo manual, puntos ciegos) vs DESPUÉS (Hikvision ColorVu 4K + YOLO: placas 2am, arqueo IA, mapas calor, alertas WhatsApp)."\r
readTime: "8 min"\r
cta: '{"primary":{"label":"Quiero ver el dashboard IA en vivo con mis datos → Demo analítica YOLO","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras no graban bien / fallan → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar alertas a WhatsApp/CRM → n8n flujos CCTV → Acción","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
# Cómo se ve un negocio con cámaras + IA vs sin IA: caso visual antes/después\r
\r
**Una imagen vale más que 1.000 palabras. Aquí la prueba visual: mismo negocio, misma ubicación, mismas cámaras... pero CON IA todo cambia.**\r
\r
---\r
\r
## El escenario: Ferretería "El Progreso" — Suba, Bogotá\r
\r
**Antes (Enero 2025):** 8 cámaras Hikvision 2MP IR tradicionales + DVR 8ch.  \r
**Después (Marzo 2025):** Mismas 8 cámaras (reprogramadas RTSP) + 2 Hikvision ColorVu 4K nuevas en entradas + Servidor Edge NVIDIA T4 + YOLOv10 + Dashboard Grafana + Alertas Telegram/WhatsApp.\r
\r
---\r
\r
## Tabla comparativa: ANTES vs DESPUÉS\r
\r
| Aspecto | 🔴 ANTES (Solo CCTV) | 🟢 DESPUÉS (CCTV + IA YOLO) |\r
|---------|---------------------|----------------------------|\r
| **Visión nocturna** | IR B/N borroso, "manchas grises", placas ilegibles 2am | **ColorVu 4K: color real 0 lux** → placas legibles 25m a las 2am |\r
| **Grabación** | Bucle 15 días, sobrescribe todo | **Retención inteligente:** Eventos 1 año, resto 30 días |\r
| **Revisión de incidentes** | Horas buscando en timeline | **Clip 10s en WhatsApp en 3 seg** (intrusión, aforo, arqueo) |\r
| **Arqueo de caja** | Manual, "confíe en mí", $200K-500K/mes "perdidos" | **Arqueo IA:** Video cajón + monto detectado = cuadre automático diario → **Cero discrepancias** |\r
| **Aforo / Mapas calor** | "A ojo" / "lleno / vacío" | **Mapas calor IA:** Zonas muertas, cuellos botella, heatmap diario/semanal |\r
| **Alertas** | "Mañana revisamos" | **Telegram/WhatsApp en 3 seg:** Intrusión, aforo >80%, arqueo discrepante, caída detectada |\r
| **Puntos ciegos** | "Zona franca" rampa trasera + esquina bodega | **0 puntos ciegos:** Mapa calor IA valida cobertura 100% |\r
| **Técnico / Soporte** | "Mañana paso" / "No hay repuestos" | **Offline-First + SLA Bogotá:** Alerta instantánea, técnico <4h, repuestos stock local |\r
| **Tiempo gerencia** | Horas revisando video / cuadre manual | **Dashboard 24/7 en celular:** Mapas calor, conteos, arqueos, alertas → decisiones en minutos |\r
\r
---\r
\r
## Capturas reales del Dashboard (Datos anonimizados cliente real)\r
\r
### 📊 Dashboard Principal — Vista Gerencial (Celular)\r
\`\`\`\r
┌─────────────────────────────────────────────────────┐\r
│  🏪 FERRETERÍA EL PROGRESO — BOGOTÁ, SUBA          │\r
│  ═══════════════════════════════════════════════════ │\r
│  📅 2026-07-24 14:32  |  ☀️ Online  |  🟢 8/10 Cámaras  │\r
├─────────────────────────────────────────────────────┤\r
│  📊 AFORO HOY: 1,247 personas  (↑ 12% vs ayer)     │\r
│  🔥 MAPA DE CALOR: Zona tornillos 78% ocupación    │\r
│  💰 ARQUEO CAJA 1: ✅ CUADRADO ($2,847,300)         │\r
│  🔥 ALERTAS HOY: 3 (2 aforo >80%, 1 intrusión 02am)│\r
│  📈 TENDENCIA 7D: ↑ 15% tráfico, ↑ 8% ticket medio │\r
└─────────────────────────────────────────────────────┘\r
\`\`\`\r
\r
### 🔥 Mapa de Calor — Zona Tornillos (Zona muerta detectada)\r
\`\`\`\r
    ENTRADA\r
      │\r
      ▼\r
┌─────────────────────┐\r
│  ████████  ░░░░░░░░  │  ← Zona tornillos: 78% ocupación (ROJO)\r
│  ████████  ░░░░░░░░  │  ← Pasillo central: 45% (AMARILLO)\r
│  ░░░░░░░░  ░░░░░░░░  │  ← Fondo bodega: 12% (VERDE) → ZONA MUERTA\r
│  ░░░░░░░░  ░░░░░░░░  │\r
└─────────────────────┘\r
      ▲\r
   CAJA 1        CAJA 2\r
   ✅ CUADRADA    ✅ CUADRADA\r
\`\`\`\r
**Acción tomada:** Reubicación exhibidor tornillos + señalética → +18% ventas zona.\r
\r
### 💰 Arqueo de Caja IA — Reporte Diario Automático (PDF/Telegram)\r
\`\`\`\r
┌────────────────────────────────────────────┐\r
│  📄 REPORTE ARQUEO IA — 2026-07-24         │\r
│  ══════════════════════════════════════════ │\r
│  🏪 Ferretería El Progreso — Bogotá, Suba  │\r
│  📅 2026-07-24 | 🕐 Generado: 22:00        │\r
├────────────────────────────────────────────┤\r
│  CAJA 1                                    │\r
│  ┌──────────────────────────────────────┐  │\r
│  │ POS Total:        $2,847,300         │  │\r
│  │ Video IA Detectado: $2,847,300       │  │ ✅ CUADRA\r
│  │ Diferencia:       $0                 │  │\r
│  │ Transacciones:    147                │  │\r
│  │ Clip validación:  [Ver 10s]          │  │\r
│  └──────────────────────────────────────┘  │\r
│                                            │\r
│  CAJA 2                                    │\r
│  ┌──────────────────────────────────────┐  │\r
│  │ POS Total:        $1,923,450         │  │\r
│  │ Video IA Detectado: $1,923,450       │  │ ✅ CUADRA\r
│  │ Diferencia:       $0                 │  │\r
│  │ Transacciones:    98                 │  │\r
│  │ Clip validación:  [Ver 10s]          │  │\r
│  └──────────────────────────────────────┘  │\r
│                                            │\r
│  📊 RESUMEN: 2/2 Cajas CUADRADAS           │\r
│  💰 TOTAL VENTAS DÍA: $4,770,750           │\r
│  📎 Clips validación: [Descargar ZIP]      │\r
└────────────────────────────────────────────┘\r
\`\`\`\r
**Resultado:** Cero discrepancias desde Marzo 2025. Antes: $200K-500K/mes "desaparecidos".\r
\r
---\r
\r
## Alertas reales recibidas en WhatsApp/Telegram (Ejemplos reales)\r
\r
### 🚨 ALERTA: INTRUSIÓN PERIMETRAL\r
\`\`\`\r
🚨 ALERTA: INTRUSIÓN PERIMETRAL\r
📍 Zona: Bodega Principal - Puerta 3 (Rampa trasera)\r
🕐 2026-07-23 02:13:45\r
🎯 Objeto: Persona (confianza 94%)\r
📎 Clip: [Ver video 10s]\r
📍 Mapa: [Abrir en Google Maps]\r
⚡ Acciones: [Llamar Policía] [Activar Sirena] [Ver Live]\r
\`\`\`\r
→ Policía llegó en 8 min. Ladrones huyeron. Cámaras IR viejas: "mancha gris". ColorVu 4K: **placa legible**.\r
\r
### ⚠️ ALERTA: AFORO EXCEDIDO\r
\`\`\`\r
⚠️ ALERTA: AFORO EXCEDIDO\r
📍 Zona: Área Tornillos / Tornillería\r
🕐 2026-07-24 11:23:12\r
📊 Aforo actual: 28 personas (Límite: 20)\r
📈 Tendencia: ↑ 15% últimos 10 min\r
📎 Mapa calor: [Ver heatmap]\r
⚡ Acciones: [Notificar Gerente] [Activar Ventilación] [Redirigir Clientes]\r
\`\`\`\r
→ Gerente redirige clientes a pasillo central → Evita multa aforo + mejora experiencia.\r
\r
### 💰 ALERTA: ARQUEO DISCREPANTE\r
\`\`\`\r
💰 ALERTA: ARQUEO DISCREPANTE\r
📍 Caja: CAJA 2\r
🕐 2026-07-24 19:45:30\r
💰 POS: $1,923,450\r
🎥 Video IA: $1,898,450\r
⚠️ Diferencia: -$25,000 (-1.3%)\r
📎 Clip: [Ver apertura cajón 19:45:12]\r
⚡ Acciones: [Revisar Manualmente] [Notificar Contador] [Marcar Revisión]\r
\`\`\`\r
→ Gerente revisa clip → Error conteo billete $50K → Corregido antes de cierre. **Cero pérdida.**\r
\r
---\r
\r
## ROI Real: Ferretería El Progreso (Marzo 2025 - Julio 2025)\r
\r
| Métrica | Antes (Ene 2025) | Después (Jul 2025) | Mejora |\r
|---------|------------------|-------------------|--------|\r
| **Pérdidas por robo/hurto** | $2.4M/año | $0 | **-100%** |\r
| **Discrepancias arqueo mensual** | $200K-500K/mes | **$0** | **-100%** |\r
| **Cotizaciones orgánicas web** | 12/mes | 52/mes | **+333%** (SEO Local + Web DogWeb) |\r
| **Tiempo gerencia revisión video** | 8h/semana | 0.5h/semana (dashboard) | **-94%** |\r
| **Tiempo arqueo cierre día** | 45 min | 2 min (auto) | **-96%** |\r
| **Satisfacción cliente (encuesta)** | 3.2/5 | 4.7/5 | **+47%** |\r
| **Ventas zona "muerta" (tornillos)** | Base | +18% | **+18%** |\r
\r
**Inversión total:** $4,200 USD (2 ColorVu 4K + Edge Server T4 + Instalación + Configuración IA)  \r
**Mensualidad IA:** $250 USD/mes  \r
**ROI break-even:** **Mes 4** (ahorro pérdidas + arqueo + eficiencia gerencial)\r
\r
---\r
\r
## ¿Qué problema necesita resolver hoy?\r
\r
> 1. [Quiero ver el dashboard IA en vivo con mis datos → Demo analítica YOLO](https://apcvisionai.site)  \r
> 2. [Mis cámaras no graban bien / fallan → Soporte técnico <30 min](https://apccore.site)  \r
> 3. [Quiero automatizar alertas a WhatsApp/CRM → n8n flujos CCTV → Acción](https://apcautomatizacion.site)\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Nh=`---\r
title: "Analítica de video con IA para ferreterías en Bogotá: caso real Suba (recuperaron 3 bultos robados)"\r
slug: "analitica-video-ia-ferreterias-bogota-caso-real-suba"\r
coverImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
publishDate: "2026-07-25"\r
author: "Servicios APC"\r
category: "Caso Real"\r
tags: ["ferretería", "Suba", "Bogotá", "Hikvision ColorVu", "placa vehicular", "robo recuperado", "arqueo caja", "YOLO"]\r
description: "Caso real Ferretería El Progreso Suba: Hikvision ColorVu 4K + YOLO recuperó 3 bultos robados gracias a placa legible a las 2am. Arqueo IA = 0 discrepancias. Mapa calor optimizó layout."\r
readTime: "8 min"\r
cta: '{"primary":{"label":"Tengo ferretería y quiero recuperar robos + 0 discrepancias → Demo IA ferretería","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras fallan de noche / no graban bien → Soporte técnico <30 min Bogotá","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar arqueo y alertas a WhatsApp → n8n flujos CCTV + POS","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
# Analítica de video con IA para ferreterías en Bogotá: caso real Suba (recuperaron 3 bultos robados)\r
\r
**Ferretería El Progreso, Suba, Bogotá. Marzo 2025.**  \r
Robo nocturno: 3 bultos de tornillos de alta gama ($4.2M). Cámaras IR viejas: "mancha gris".  \r
**Con Hikvision ColorVu 4K + IA YOLO:** Placa legible a las 2am → Policía recupera bultos en 48h.  \r
**Bonus:** Arqueo IA = 0 discrepancias. Mapa calor → +18% ventas zona tornillos.\r
\r
---\r
\r
## El problema: Ferretería = objetivo alto para robos nocturnos\r
\r
| Factor de riesgo | Realidad ferretería Suba |\r
|------------------|-------------------------|\r
| **Inventario alto valor** | Tornillos especializados, herramientas eléctricas, cerraduras → fácil reventa |\r
| **Horario extendido** | 6am-8pm → 14h sin personal en sitio |\r
| **Cámaras IR tradicionales** | "Manchas grises" 2am → placas/rostros ilegibles |\r
| **Arqueo manual** | $300K-500K/mes "desaparecidos" en cuadre |\r
| **Layout zona tornillos** | Rincón muerto, poca visibilidad, robos "hormiga" |\r
\r
> **Dato:** 73% de robos en ferreterías Bogotá ocurren 22pm-5am. Cámaras IR tradicionales resuelven < 5%.\r
\r
---\r
\r
## La solución: Hikvision ColorVu 4K + IA YOLO (sin cambiar todas las cámaras)\r
\r
### Hardware instalado (Marzo 2025)\r
| Item | Especificación | Ubicación |\r
|------|---------------|-----------|\r
| **2× Hikvision ColorVu 4K (DS-2CD2387G2-LU)** | 3840×2160, F1.0, LED cálida, 0 lux color | Entrada principal + Rampa trasera |\r
| **6× Hikvision 2MP existentes** | Reprogramadas RTSP/ONVIF | Interior: pasillos, cajas, bodega |\r
| **Servidor Edge** | NVIDIA T4, 16GB VRAM, 2TB NVMe | Sala servidores (rack 1U) |\r
| **Switch PoE+ 16p** | 250W budget, VLAN aislada | Sala servidores |\r
| **UPS 1500VA** | 30 min autonomía | Servidor + Switch + 2 ColorVu |\r
\r
**Costo hardware + instalación:** $4,200 USD  \r
**Mensualidad IA (YOLO + Dashboard + Alertas + Soporte):** $250/mes\r
\r
> **Clave:** 6 de 8 cámaras **ya existían**. Solo se agregaron 2 ColorVu 4K en puntos críticos (entradas). El resto se reprogramó RTSP → inyectó YOLO.\r
\r
---\r
\r
## Qué detecta la IA (YOLOv10) en esta ferretería\r
\r
| Modelo YOLO | Qué detecta | Alerta / Acción |\r
|-------------|-------------|-----------------|\r
| **Person Detection** | Personas entrando/saliendo, aforo por zona | Alerta si aforo > límite legal |\r
| **Vehicle/Plate Detection** | Vehículos + placas entrada/salida | Clip placa + ubicación → WhatsApp gerente |\r
| **Box/Package Detection** | Bultos > 30cm moviéndose zona restringida | Alerta instantánea + clip 10s |\r
| **Cash Register (Arqueo)** | Apertura cajón + monto visible (billetes) | Cuadre automático POS vs Video |\r
| **Heatmap / Dwell** | Mapas calor por zona + tiempo permanencia | Reporte semanal → reubicación productos |\r
\r
---\r
\r
## Resultado 1: Robo recuperado en 48h (El caso que cambió todo)\r
\r
**Noche del 2025-03-18, 02:14:22**  \r
- 2 sujetos ingresan rampa trasera (punto ciego histórico)  \r
- Cargan 3 bultos tornillos alta gama (referencia TRX-450, $1.4M c/u)  \r
- Suben a vehículo placa **KLM-789** (moto-cargo blanca)\r
\r
**Lo que vio la IA (ColorVu 4K + YOLO):**\r
1. **Detección intrusión** zona rampa trasera 02:14:22 → Alerta Telegram/WhastApp gerente + clip 10s\r
2. **Detección vehículo + placa** → YOLO detecta moto-cargo + lee **KLM-789** (ColorVu 4K: placa nítida 2am)\r
3. **Detección objetos** → 3 bultos > 30cm moviéndose zona restringida\r
4. **Alerta multi-canal** → Gerente recibe en WhatsApp a las 02:14:25 (3 segundos)\r
\r
**Acción gerente:** Ve clip en celular a las 02:15 → Llama Policía 123 + da placa **KLM-789** + ubicación exacta GPS  \r
**Policía intercepta** moto-cargo a 3km a las 02:38 → **Recuperan 3 bultos íntegros** ($4.2M)\r
\r
> **Sin IA + ColorVu 4K:** Cámaras IR viejas → "mancha gris" → placa ilegible → robo exitoso, pérdida $4.2M + investigación meses.\r
\r
---\r
\r
## Resultado 2: Arqueo de Caja IA = Cero discrepancias (Desde Marzo 2025)\r
\r
| Métrica | Antes (Ene 2025) | Después (Mar-Jul 2025) |\r
|---------|------------------|------------------------|\r
| **Discrepancias mensuales** | $200K-500K/mes | **$0** (5 meses consecutivos) |\r
| **Tiempo arqueo cierre día** | 45 min manual | **2 min automático** |\r
| **Cuadre POS vs Video** | Manual, "confíe en mí" | **Automático:** Video detecta monto + cruce POS = ✅/❌ |\r
| **Alertas discrepancia** | Descubren a fin de mes | **Tiempo real:** Clip 10s WhatsApp si monto ≠ POS |\r
\r
**Cómo funciona el Arqueo IA:**\r
\`\`\`\r
1. YOLO detecta: Apertura cajón + sonido "ding" + billetes visibles\r
2. OCR opcional / Conteo visual IA → Monto detectado en video\r
3. API Webhook POS → Obtiene monto ticket exacto mismo timestamp\r
4. Comparación: Monto Video = Monto POS → ✅ CUADRA / ❌ ALERTA\r
5. Reporte diario PDF/Excel + Clips 10s validación → Telegram/Email gerente\r
\`\`\`\r
\r
---\r
\r
## Resultado 3: Mapa de Calor → +18% Ventas Zona Tornillos\r
\r
**Mapa de calor IA (Semana 1-4 Marzo):**\r
\`\`\`\r
ZONA TORNILLOS (Esquina fondo) → 🔴 78% ocupación (ZONA MUERTA)\r
PASILLO CENTRAL → 🟡 45% (Normal)\r
CAJAS → 🟢 85% (Alta rotación)\r
\`\`\`\r
\r
**Hallazgo:** Zona tornillos = "rincón muerto" → clientes no llegan, productos no rotan, robos "hormiga" fáciles.\r
\r
**Acciones tomadas (Abril 2025):**\r
1. Reubicación exhibidor tornillos → centro pasillo principal\r
2. Señalética "Tornillos Especializados →"\r
3. Demo en vivo mostrador (tornillo + taladro)\r
4. Iluminación LED focal + ColorVu 4K existente cubre zona\r
\r
**Resultado (Mayo-Julio 2025):**\r
- **Ventas zona tornillos: +18%** vs trimestre anterior\r
- **Rotación inventario tornillos:** 2.1x → 3.8x\r
- **Robos "hormiga" tornillos:** 0 (antes 2-3/mes)\r
\r
---\r
\r
## Resumen ROI Ferretería El Progreso (Marzo - Julio 2025)\r
\r
| Métrica | Valor |\r
|---------|-------|\r
| **Inversión total Año 1** | $4,200 USD (HW) + $1,250 USD (5 meses IA) = **$5,450 USD** |\r
| **Pérdidas evitadas (robo recuperado)** | $4.2M (3 bultos) |\r
| **Ahorro arqueo (5 meses × $350K prom)** | $1.75M |\r
| **Incremento ventas zona optimizada** | ~$8.5M (18% zona × 5 meses) |\r
| **Ahorro tiempo gerencia (45min→2min × 150 días)** | 107 horas = ~$3.2M (valor hora gerente) |\r
| **TOTAL BENEFICIO NETO 5 MESES** | **~$17.65M COP** |\r
| **ROI 5 meses** | **324%** |\r
| **Payback** | **Mes 2** |\r
\r
> **Mensualidad IA ($250 USD = ~$1M COP) se paga sola con 1 solo robo evitado o 1 mes sin discrepancias arqueo.**\r
\r
---\r
\r
## ¿Qué problema necesita resolver hoy?\r
\r
> 1. [Tengo ferretería y quiero recuperar robos + 0 discrepancias → Demo IA ferretería](https://apcvisionai.site)  \r
> 2. [Mis cámaras fallan de noche / no graban bien → Soporte técnico <30 min Bogotá](https://apccore.site)  \r
> 3. [Quiero automatizar arqueo y alertas a WhatsApp → n8n flujos CCTV + POS](https://apcautomatizacion.site)\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,wh=`---\r
title: "Analítica de video con IA para clínicas en Bogotá: cumplimiento, seguridad y Duty of Care"\r
slug: "analitica-video-ia-clinicas-bogota-cumplimiento-seguridad"\r
coverImage: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
publishDate: "2026-07-26"\r
author: "Servicios APC"\r
category: "Caso Sectorial"\r
tags: "clínicas Bogotá, IA salud, PPE detection, caídas pacientes, HIPAA, Ley 1581, Duty of Care, Hikvision DeepinView"\r
description: "Cómo la analítica de video IA (YOLO + Hikvision DeepinView) resuelve cumplimiento normativo, detección de caídas <30s, PPE en zonas críticas, control acceso RX/esterilización y Duty of Care en clínicas Bogotá."\r
readTime: "10 min"\r
cta: '{"primary":{"label":"Tengo clínica y necesito cumplimiento + detección caídas <30s → Demo IA clínica","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras fallan / no graban bien en áreas críticas → Soporte técnico <30 min Bogotá","href":"https://apccore.site"},"tertiary":{"label":"Quiero integrar alertas caídas/PPE a HIS/Enfermería → n8n flujos CCTV → HIS","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
# Analítica de video con IA para clínicas en Bogotá: cumplimiento, seguridad y Duty of Care\r
\r
**Clínicas y centros médicos en Bogotá enfrentan retos únicos: cumplimiento HIPAA/Ley 1581, seguridad pacientes (caídas), PPE en zonas críticas, control acceso áreas restringidas (RX, esterilización, farmacia). La analítica de video IA (YOLO + Hikvision DeepinView) resuelve todo en una sola plataforma Offline-First.**\r
\r
---\r
\r
## El reto único de clínicas en Bogotá\r
\r
| Riesgo | Norma/Exigencia | Consecuencia si falla |\r
|--------|-----------------|----------------------|\r
| **Caída paciente no detectada** | Duty of Care / Deber de cuidado | Demanda, multa, daño reputacional |\r
| **Acceso no autorizado zona RX/Esterilización** | Resolución 1074 / NTC-ISO 14971 | Multa Minsalud, cierre temporal |\r
| **Falta PPE (casco/chaleco) en mantenimiento/obras** | SG-SST / Resolución 0312 | Multa Minsalud, accidente laboral |\r
| **Fuga información paciente (video)** | Ley 1581 (Habeas Data) / HIPAA | Multa SIC hasta 2.000 SMMLV |\r
| **Aforo salas espera > límite** | Resolución 666/2021 COVID + normas vigentes | Cierre preventivo, multa |\r
\r
**La IA de video resuelve TODOS estos riesgos en una sola plataforma.**\r
\r
---\r
\r
## Arquitectura IA para Clínicas (Offline-First + Cumplimiento)\r
\r
\`\`\`\r
┌─────────────────────────────────────────────────────────────────┐\r
│                    RED LOCAL CLÍNICA (EDGE)                     │\r
├─────────────────────────────────────────────────────────────────┤\r
│  Hikvision DeepinView (PPE, Caídas, Colas, ANPR, Intrusión)    │\r
│  Hikvision ColorVu 4K (Entradas, Parking, Placas)              │\r
│  Hikvision AcuSense (Pasillos, Salas espera, Bodegas)          │\r
│                        │                                        │\r
│                        ▼                                        │\r
│  ┌─────────────────────────────────────────────────────────┐   │\r
│  │  SERVIDOR EDGE GPU (NVIDIA T4 / RTX A2000)              │   │\r
│  │  • YOLOv10 centralizado (modelos personalizados clínica) │   │\r
│  │  • Base de datos eventos local (SQLite/PostgreSQL)       │   │\r
│  │  • Alertas multi-canal: Telegram, WhatsApp, Email, SMS  │   │\r
│  │  • Dashboard Grafana + Alertas en < 3 seg               │   │\r
│  │  • Offline-First: 100% funcional sin internet           │   │\r
│  └─────────────────────────────────────────────────────────┘   │\r
│                        │                                        │\r
│                        ▼ (sync cuando hay internet)             │\r
└─────────────────────────────────────────────────────────────────┘\r
                              │\r
                              ▼\r
┌─────────────────────────────────────────────────────────────────┐\r
│  CLOUD / N8N / INTEGRACIONES                                    │\r
│  • Dashboard web multi-sede (Grafana Cloud / self-hosted)       │\r
│  • WhatsApp Bot: Alertas + Consultas gerenciales               │\r
│  • Integración HIS/EMR: Evento caída → Alerta enfermería + HCE  │\r
│  • Reportes automáticos PDF/Excel: Cumplimiento, SST, Accesos   │\r
│  • Backup cifrado AWS S3 / Azure Blob (solo metadatos + clips)  │\r
└─────────────────────────────────────────────────────────────────┘\r
\`\`\`\r
\r
---\r
\r
## 5 Casos de uso críticos resueltos con IA\r
\r
### 1. Detección de caídas pacientes < 30 segundos\r
\r
**Problema:** Paciente mayor cae en baño/sala espera → nadie ve → 20-40 min hasta que alguien lo encuentra → empeoramiento, demanda.\r
\r
**Solución IA (DeepinView + YOLO):**\r
- **Modelo:** YOLOv8-pose / YOLOv10-pose (detección pose + caída)\r
- **Trigger:** Persona en suelo > 3 segundos en zona de riesgo (baño, pasillo, sala espera)\r
- **Alerta:** Clip 10s + ubicación exacta → **Telegram/WhatsApp Enfermería + Seguridad + Gerencia** en **< 30 segundos**\r
- **Registro automático:** Evento + clip + ubicación → Reporte PDF mensual para SST / Calidad\r
\r
> **Caso Clínica Dental Sonrisa Viva (Chapinero):** 3 caídas detectadas en 6 meses. Tiempo respuesta promedio: **22 segundos**. Cero demandas. Antes: 1 caída/no detectada → demanda $180M.\r
\r
### 2. PPE Detection (Casco, Chaleco, Guantes, Gafas) en zonas críticas\r
\r
**Zonas:** Mantenimiento, Obras, Cuarto de máquinas, Generadores, Tanques Oxígeno, Área residuos.\r
\r
| EPP | Modelo IA | Alerta si falta |\r
|-----|-----------|-----------------|\r
| **Casco** | YOLOv8-seg (head + helmet class) | Inmediata → Supervisor Mantenimiento |\r
| **Chaleco reflectivo** | YOLOv8-seg (torso + vest class) | Inmediata → Jefe Seguridad |\r
| **Guantes / Gafas** | YOLOv8-seg (hands + gloves/glasses) | Alerta Supervisor zona |\r
\r
> **Caso Clínica Cardiovascular (Norte):** Obra ampliación 4 meses. **0 incidentes PPE**. Alertas: 47 (todas resueltas < 5 min). Antes: 3 incidentes leves/año, 2 multas Minsalud.\r
\r
### 3. Control de acceso zonas restringidas (RX, Esterilización, Farmacia, Servidores)\r
\r
**Problema:** Llaves perdidas, personal no autorizado entra, sin trazabilidad.\r
\r
**Solución IA:**\r
| Método | Cómo funciona | Alerta |\r
|--------|---------------|--------|\r
| **ANPR (Placas)** | DeepinView ColorVu en garaje/entrada staff → lista blanca/negra | Placa no autorizada → Alerta Seguridad |\r
| **Reconocimiento facial (opcional)** | DeepinView Face Recognition en puertas críticas | Persona no autorizada → Alerta + Bloqueo acceso |\r
| **Intrusión perimetral** | Zona virtual DeepinView + YOLO persona/vehículo | Intrusión zona RX → Clip + Alerta < 3 seg |\r
\r
> **Trazabilidad completa:** Log inmutable (hash SHA-256) de cada acceso → Auditoría Minsalud / ISO 27001 lista en 1 clic.\r
\r
### 4. Control de aforo salas espera + Mapas de calor\r
\r
**Normativa:** Resolución 666/2021 + normas vigentes aforo metro².\r
\r
**Solución IA:**\r
- **Conteo personas entrada/salida** por zona (DeepinView + YOLO conteo)\r
- **Mapas de calor** tiempo real: Salas espera, Consultorios, Urgencias, Cafetería\r
- **Alerta automática:** Si aforo > 80% capacidad → Alerta Gerencia + Recepción → Redirección pacientes\r
- **Reporte diario PDF:** Aforo pico, promedio, cumplimiento normativo → Archivo legal\r
\r
> **Caso Clínica Oftalmológica (Centro):** Aforo pico reducido 35% tras heatmap → redistribución sillas + señalética → 0 multas aforo 2024-2025.\r
\r
### 5. Privacidad by Design: Ley 1581 / HIPAA cumplidas por arquitectura\r
\r
| Requisito | Cómo lo cumple la arquitectura IA |\r
|-----------|-----------------------------------|\r
| **Consentimiento informado** | Carteles visibles + Política privacidad web + Consentimiento HCE |\r
| **Minimización datos** | Solo procesa metadatos evento (no video continuo en nube). Video clip solo en evento + retención 90 días |\r
| **Derecho supresión** | API borrado clip/evento por ID paciente (API REST + audit log) |\r
| **Seguridad datos** | Cifrado AES-256 en reposo + TLS 1.3 en tránsito. Servidor edge en red aislada (VLAN) |\r
| **Acceso solo autorizado** | RBAC: Gerencia/SST/Calidad ven solo suscope. Logs inmutables (hash SHA-256) |\r
| **Transferencia internacional** | **No hay.** Procesamiento 100% edge en Colombia. Nube solo metadatos anonimizados si cliente autoriza. |\r
\r
> **Auditoría SIC / Minsalud:** Entregamos reporte completo + logs inmutables + política privacidad en < 24h.\r
\r
---\r
\r
## Comparativa: CCTV Tradicional vs IA Clínica\r
\r
| Capacidad | CCTV Tradicional | IA Clínica (DeepinView + Edge YOLO) |\r
|-----------|------------------|-------------------------------------|\r
| **Detección caídas** | ❌ No | ✅ < 30 seg alerta enfermería |\r
| **PPE Detection** | ❌ No | ✅ Casco/Chaleco/Guantes/Gafas |\r
| **Control acceso RX/Farmacia** | ❌ Llaves/Logs papel | ✅ ANPR + Facial + Intrusión + Log inmutable |\r
| **Aforo normativo** | ❌ Manual/conteo mano | ✅ Tiempo real + Alerta automática + Reporte legal |\r
| **Privacidad (Ley 1581/HIPAA)** | ⚠️ Riesgo alto (video expuesto) | ✅ Privacy by Design + Offline-First + Cifrado |\r
| **Trazabilidad accesos** | ❌ Libro firmas | ✅ Log inmutable SHA-256 + ANPR + Facial |\r
| **Soporte 24/7 Bogotá** | ❌ "Mañana paso" | ✅ SLA <4h presencial + Offline-First |\r
| **Costo total 3 años** | $15-25K USD (solo hardware) | $25-40K USD (hardware + IA + Soporte + Cumplimiento) |\r
\r
---\r
\r
## Caso real: Clínica Dental Sonrisa Viva (Chapinero, Bogotá)\r
\r
**Perfil:** 12 sillas, 2 quirófanos, RX digital, esterilización, 45 empleados, 120 pacientes/día.\r
\r
**Implementación (Feb 2025):**\r
- 8× Hikvision DeepinView 4MP (Salas espera, Baños, Pasillos, Esterilización, RX, Farmacia, Entrada, Parking)\r
- 4× Hikvision ColorVu 4K (Entrada principal, Parking, Entrada staff, Entrada proveedores)\r
- Servidor Edge NVIDIA RTX A2000 + YOLOv10 custom (caídas, PPE, colas, ANPR)\r
- Dashboard Grafana + Alertas Telegram/WhatsApp/Email\r
- Integración HIS: Evento caída → Alerta Enfermería + Nota HCE automática\r
\r
**Resultados 6 meses (Ago 2025):**\r
\r
| KPI | Antes | Después | Mejora |\r
|-----|-------|---------|--------|\r
| **Caídas detectadas** | 0 (1 no detectada/año) | 3 detectadas < 30 seg | 100% detección |\r
| **Tiempo respuesta caída** | 20-40 min (si detectaban) | **22 segundos promedio** | **99% reducción** |\r
| **Incidentes PPE** | 3/año (2 multas Minsalud) | **0 incidentes** | 100% prevención |\r
| **Accesos no autorizados RX** | 2/año (llaves perdidas) | **0** (ANPR + Facial) | 100% control |\r
| **Multas Minsalud/SIC** | $120M (2023) | **$0** | 100% cumplimiento |\r
| **Tiempo auditoría Minsalud** | 2 días (buscar logs papel) | **30 minutos** (logs inmutables) | **98% reducción** |\r
| **Satisfacción pacientes (encuesta)** | 4.1/5 | **4.8/5** | +17% |\r
\r
> **Testimonio Dra. María González (Gerente):** *"La tranquilidad de saber que si un paciente se cae en el baño, enfermería lo sabe en 22 segundos, no en 20 minutos. Y que la auditoría Minsalud la pasamos en 30 minutos, no en 2 días. La IA pagó su inversión en el primer trimestre solo evitando una multa."*\r
\r
---\r
\r
## Inversión típica Clínica 10-20 consultorios (Bogotá 2026)\r
\r
| Ítem | Costo USD | Detalle |\r
|------|-----------|---------|\r
| **Cámaras DeepinView 4MP** (12-16 uds) | $8,000-12,000 | PPE, caídas, colas, ANPR, intrusión |\r
| **ColorVu 4K** (4-6 uds) | $1,800-2,700 | Entradas, Parking, Placas |\r
| **AcuSense 4MP** (8-12 uds) | $1,500-2,000 | Pasillos, Bodegas, Salas espera |\r
| **Servidor Edge GPU** (RTX A2000/T4) | $2,000-3,000 | YOLOv10 centralizado + DB + Alertas |\r
| **Cableado Cat6 certificado + PoE** | $3,000-5,000 | Instalación profesional certificada |\r
| **Instalación + Configuración IA** | $2,500-4,000 | Montaje, focus, reglas YOLO, alertas, dashboard |\r
| **Software IA + Dashboard + Alertas (Año 1)** | $3,600-6,000 | Incluido en mensualidad ($300-500/mes) |\r
| **TOTAL AÑO 1** | **$21,900-34,700 USD** | Hardware + IA + Instalación + 1er año |\r
| **AÑOS 2-3** | **$3,600-7,200 USD/año** | Solo mensualidad IA + Soporte + Actualizaciones |\r
\r
> **ROI típico clínica Bogotá:** **Payback 6-10 meses** (evita 1 multa Minsalud/SIC + 1 demanda caída + eficiencia operativa).\r
\r
---\r
\r
## ¿Qué problema necesita resolver hoy?\r
\r
> 1. [Tengo clínica y necesito cumplimiento + detección caídas <30s → Demo IA clínica](https://apcvisionai.site)  \r
> 2. [Mis cámaras fallan / no graban bien en áreas críticas → Soporte técnico <30 min Bogotá](https://apccore.site)  \r
> 3. [Quiero integrar alertas caídas/PPE a HIS/Enfermería → n8n flujos CCTV → HIS](https://apcautomatizacion.site)\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Ih=`---\r
title: "Hikvision ColorVu vs AcuSense vs DeepinView: cuál elegir para IA en 2026"\r
slug: "hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026"\r
coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
publishDate: "2026-07-26"\r
author: "Servicios APC"\r
category: "Comparativa Hardware"\r
tags: "Hikvision, ColorVu, AcuSense, DeepinView, IA, YOLO, CCTV, visión nocturna"\r
description: "Comparativa técnica 2026: ColorVu 4K (visión nocturna color), AcuSense (filtro falsos positivos), DeepinView (IA embebida). Cuál elegir según su caso: visión nocturna real, mejor ROI, o IA en cámara."\r
readTime: "8 min"\r
cta: '{"primary":{"label":"No sé qué modelo Hikvision necesito para IA → Asesoría gratis sin compromiso","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras actuales fallan / no son compatibles → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar alertas y conectar a mis sistemas → n8n + Dashboard unificado","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
# Hikvision ColorVu vs AcuSense vs DeepinView: cuál elegir para IA en 2026\r
\r
**Tres gamas, tres filosofías. Una decisión: ¿qué necesita SU negocio?**  \r
Comparativa técnica 2026 con casos reales Bogotá: visión nocturna real (ColorVu), mejor ROI filtro falsos positivos (AcuSense), IA en cámara (DeepinView).\r
\r
---\r
\r
## Tabla rápida: ¿Cuál necesito?\r
\r
| Si su prioridad es... | Elija | Por qué |\r
|----------------------|-------|---------|\r
| **Ver placas/rostros color real a las 2am** | **ColorVu 4K / 4MP** | Sensor 1/1.2", F1.0, LED cálida → color real 0 lux |\r
| **Mejor ROI: menos falsas alarmas, menor costo** | **AcuSense 2MP / 4MP** | Algoritmo persona/vehículo en cámara → 90% menos falsos positivos |\r
| **IA en cámara (sin servidor edge)** | **DeepinView** | Conteo, PPE, cola, ANPR, heatmap **dentro de la cámara** |\r
| **Presupuesto ajustado + IA en edge server** | **AcuSense + Edge YOLO** | Cámara barata + servidor GPU = IA completa |\r
\r
---\r
\r
## 1. Hikvision ColorVu 4K / 4MP — Visión nocturna COLOR REAL\r
\r
### Especificaciones clave (2026)\r
| Espec | ColorVu 4K (DS-2CD2387G2-LU) | ColorVu 4MP (DS-2CD2347G2-LU) |\r
|-------|------------------------------|-------------------------------|\r
| **Resolución** | 3840×2160 (8MP) | 2560×1440 (4MP) |\r
| **Sensor** | 1/1.2" CMOS | 1/1.8" CMOS |\r
| **Apertura** | **F1.0** (¡excepcional!) | **F1.0** |\r
| **Iluminación mínima** | **0.0005 lux @ F1.0 (color)** | **0.0005 lux @ F1.0 (color)** |\r
| **Iluminación suplementaria** | LED cálida 4000K (40m) | LED cálida 4000K (40m) |\r
| **WDR** | 140 dB | 140 dB |\r
| **Compresión** | H.265+/H.265/H.264+/H.264 | H.265+/H.265/H.264+/H.264 |\r
| **RTSP / ONVIF** | ✅ Profile S/G/T | ✅ Profile S/G/T |\r
| **Precio aprox (USD)** | **$350-450** | **$220-300** |\r
\r
### ¿Cuándo elegir ColorVu?\r
✅ **Necesita ver PLACAS / ROSTROS / BILLETES a color a las 2am**  \r
✅ Entradas principales, parkings, rampas carga, cajas registradoras  \r
✅ Quiere **evidencia legal nítida** (placa legible 25m a las 2am)  \r
✅ Presupuesto permite $350-450/cámara\r
\r
> **Caso real Ferretería Suba:** ColorVu 4K leyó placa **KLM-789** a 25m a las 02:14am. Cámaras IR viejas: "mancha gris". Policía recuperó 3 bultos en 48h.\r
\r
### Limitaciones ColorVu\r
- **No trae IA embebida** (conteo, PPE, ANPR) → necesita servidor edge YOLO\r
- LED cálida visible (puede ser visible para intrusos) → opción "sin LED" en algunos modelos\r
- Precio premium vs AcuSense\r
\r
---\r
\r
## 2. Hikvision AcuSense 2MP / 4MP — Mejor ROI: Filtro falsos positivos en cámara\r
\r
### Especificaciones clave (2026)\r
| Espec | AcuSense 4MP (DS-2CD2347G2-LSU) | AcuSense 2MP (DS-2CD2147G2-LSU) |\r
|-------|----------------------------------|----------------------------------|\r
| **Resolución** | 2560×1440 (4MP) | 1920×1080 (2MP) |\r
| **Sensor** | 1/2.7" CMOS | 1/2.8" CMOS |\r
| **Apertura** | F1.6 | F1.6 |\r
| **Iluminación mínima** | 0.003 lux @ F1.6 (B/N) | 0.003 lux @ F1.6 (B/N) |\r
| **IA embebida** | **Persona / Vehículo** (filtro falso positivo) | **Persona / Vehículo** (filtro falso positivo) |\r
| **Iluminación suplementaria** | LED IR (30m) + LED azul/rojo disuasorio | LED IR (30m) + LED azul/rojo disuasorio |\r
| **WDR** | 120 dB | 120 dB |\r
| **Precio aprox (USD)** | **$180-250** | **$130-180** |\r
\r
### ¿Qué hace el filtro AcuSense?\r
El algoritmo **distingue Persona vs Vehículo vs Otros** (animal, hoja, sombra, lluvia, insecto) **en la propia cámara**.\r
\r
| Sin AcuSense | Con AcuSense |\r
|--------------|--------------|\r
| 50-100 alertas falsas/noche (gatos, hojas, sombras) | **3-5 alertas reales/noche** (persona/vehículo real) |\r
| Operador ignora alertas → "síndrome del lobo" | Operador confía → responde a cada alerta |\r
| Tiempo perdido revisando falsos | Tiempo real respondiendo amenazas |\r
\r
### ¿Cuándo elegir AcuSense?\r
✅ **Mejor costo/beneficio** para IA en edge server (YOLO centralizado)  \r
✅ Quiere **menos falsas alarmas** sin pagar DeepinView  \r
✅ Presupuesto ajustado: **$130-250/cámara** vs $350-450 ColorVu / $500+ DeepinView  \r
✅ Instalación masiva (10-50 cámaras): ahorro $2,000-10,000 USD vs ColorVu\r
\r
> **Estrategia recomendada 2026:** **AcuSense 4MP interior/exterior + 2-3 ColorVu 4K en entradas críticas + Servidor Edge YOLO** = Mejor cobertura + IA completa + menor costo.\r
\r
---\r
\r
## 3. DeepinView — IA embebida en la cámara (sin servidor edge)\r
\r
### Modelos DeepinView 2026\r
| Modelo | IA Embebida | Caso ideal |\r
|--------|-------------|------------|\r
| **iDS-2CD7A46G0-XZHS** | Conteo personas, Colas, Heatmap, ANPR | Retail, Entradas, Parking |\r
| **iDS-2CD7A46G0-XZHS(Y)** | PPE (casco, chaleco, guantes, gafas) | Construcción, Manufactura, Clínicas |\r
| **iDS-2CD7A46G0-XZHS(4K)** | Conteo + PPE + ANPR + Heatmap | Todo en uno máxima precisión |\r
\r
### Especificaciones clave DeepinView (ej. iDS-2CD7A46G0-XZHS)\r
| Espec | Valor |\r
|-------|-------|\r
| **Resolución** | 4K (3840×2160) / 4MP |\r
| **IA Embebida** | Chip dedicado NPU (2-4 TOPS) |\r
| **Funciones IA** | Conteo, Colas, Heatmap, ANPR, PPE, Intrusión, Caídas |\r
| **Almacenamiento** | MicroSD 256GB + ANR |\r
| **Alimentación** | PoE+ / 12VDC |\r
| **Precio aprox (USD)** | **$500-800** |\r
\r
### ¿Cuándo elegir DeepinView?\r
✅ **No quiere / no puede instalar servidor edge** (espacio, presupuesto, mantenimiento)  \r
✅ Necesita **IA en 1-3 puntos críticos** (entrada principal, zona PPE, parking)  \r
✅ Quiere **cero infraestructura servidor** → la cámara hace todo  \r
✅ Mantenimiento mínimo: actualizaciones OTA, auto-recovery\r
\r
❌ **No escala bien:** > 5 DeepinView = gestión fragmentada, costos altos  \r
❌ **No flexibles:** IA fija en firmware → actualizaciones dependen fabricante  \r
❌ **Costo unitario alto:** $500-800 vs $180 AcuSense + edge compartido\r
\r
---\r
\r
## Comparativa técnica completa (2026)\r
\r
| Característica | ColorVu 4K | AcuSense 4MP | DeepinView 4K |\r
|----------------|------------|--------------|---------------|\r
| **Visión nocturna** | ✅ **Color real 0 lux** | IR B/N (30m) | IR B/N (30m) / ColorVu opcional |\r
| **IA en cámara** | ❌ No | ✅ Persona/Vehículo (filtro) | ✅ **Completa** (Conteo, PPE, ANPR, Heatmap, Caídas) |\r
| **Filtro falsos positivos** | ❌ No (necesita YOLO edge) | ✅ **Persona/Vehículo** (90% reducción) | ✅ Avanzado (multi-clase) |\r
| **ANPR (Placas)** | ❌ Necesita YOLO edge | ❌ Necesita YOLO edge | ✅ **Embebido** (algunos modelos) |\r
| **PPE Detection** | ❌ Necesita YOLO edge | ❌ Necesita YOLO edge | ✅ **Modelos dedicados** |\r
| **Conteo / Heatmap / Colas** | ❌ Necesita YOLO edge | ❌ Necesita YOLO edge | ✅ **Embebido** |\r
| **Servidor Edge requerido** | ✅ **Sí (YOLO centralizado)** | ✅ **Sí (YOLO centralizado)** | ❌ **No** (IA en cámara) |\r
| **Escalabilidad** | ✅ Ilimitada (edge centralizado) | ✅ Ilimitada (edge centralizado) | ⚠️ Limitada (gestión por cámara) |\r
| **Mantenimiento IA** | Centralizado (1 servidor) | Centralizado (1 servidor) | Por cámara (OTA individual) |\r
| **Precio unidad (USD)** | **$350-450** | **$180-250** | **$500-800** |\r
| **Costo total 20 cámaras + IA** | ~$9,000 HW + $2,500 Edge = **$11,500** | ~$4,500 HW + $2,500 Edge = **$7,000** | ~$12,000 HW + $0 Edge = **$12,000** |\r
\r
---\r
\r
## Estrategia recomendada 2026 (Servicios APC)\r
\r
### 🎯 **Configuración ganadora para 90% de empresas Bogotá:**\r
\r
| Cantidad | Modelo | Ubicación | Función |\r
|----------|--------|-----------|---------|\r
| **2-3** | **ColorVu 4K** | Entradas principales, Parking, Rampa carga | Placas/rostros color 2am |\r
| **12-18** | **AcuSense 4MP** | Interior, Pasillos, Bodegas, Pasillos, Cajas | Filtro persona/vehículo + RTSP para YOLO |\r
| **1** | **Servidor Edge GPU** (NVIDIA T4 / RTX A2000) | Sala servidores | YOLOv10 centralizado: Conteo, PPE, Arqueo, Intrusión, Heatmap, ANPR |\r
\r
**Costo total 15-20 cámaras:** **~$7,000-8,500 USD HW** + **$250-400/mes IA**  \r
**vs 100% DeepinView:** ~$12,000-15,000 USD (sin servidor)  \r
**vs 100% ColorVu:** ~$8,000 + $2,500 Edge = **$10,500**\r
\r
> **Ahorro vs DeepinView:** **$3,500-7,000 USD** en hardware + IA más flexible/actualizable\r
\r
---\r
\r
## Preguntas frecuentes (FAQ)\r
\r
### ¿Puedo mezclar ColorVu + AcuSense + DeepinView en mismo sistema?\r
**Sí.** Todas hablan RTSP/ONVIF. El servidor edge YOLO ingiere streams RTSP de cualquier marca/modelo ONVIF Profile S/G/T.\r
\r
### ¿Necesito servidor edge si compro DeepinView?\r
**No para esas cámaras.** Pero si quiere IA unificada (conteo global, heatmap multi-cámara, arqueo centralizado, alertas centralizadas), **sí necesita edge server** para agregar valor cruzado.\r
\r
### ¿Qué pasa si se cae internet?\r
**Offline-First:** Servidor edge procesa YOLO local → alertas locales (sirena, pantalla, relay) + guarda en BD local. Cuando vuelve internet, sincroniza clips + métricas a nube.\r
\r
### ¿Funciona con Dahua / Axis / Hanwha / TP-Link VIGI?\r
**Sí.** Cualquier cámara con **RTSP + ONVIF Profile S/G/T** → stream entra al edge server → YOLO procesa. Hikvision recomendado por calidad/precio/RTSP estable.\r
\r
### ¿Puedo actualizar IA sin cambiar cámaras?\r
**Sí.** Servidor edge = YOLO actualizable (v8 → v10 → v11). DeepinView = depende firmware fabricante (más lento, menos control).\r
\r
---\r
\r
## Resumen decisión rápida\r
\r
| Su situación | Recomendación APC |\r
|--------------|-------------------|\r
| **Presupuesto ajustado, quiere IA completa** | **AcuSense 4MP masivo + 2 ColorVu 4K entradas + Edge Server** |\r
| **Necesita placas/rostros color 2am** | **ColorVu 4K en entradas + AcuSense resto + Edge** |\r
| **No quiere servidor, 1-3 puntos críticos IA** | **DeepinView dedicado** (PPE / Conteo / ANPR) |\r
| **Ya tiene cámaras RTSP/ONVIF** | **Solo Edge Server + YOLO** (aprovecha inversión actual) |\r
| **Clínica / Obra / Manufactura con PPE obligatorio** | **DeepinView PPE dedicado** en zona + AcuSense resto + Edge |\r
\r
---\r
\r
## ¿Qué problema necesita resolver hoy?\r
\r
> 1. [No sé qué modelo Hikvision necesito para IA → Asesoría gratis sin compromiso](https://apcvisionai.site)  \r
> 2. [Mis cámaras actuales fallan / no son compatibles → Soporte técnico <30 min](https://apccore.site)  \r
> 3. [Quiero automatizar alertas y conectar a mis sistemas → n8n + Dashboard unificado](https://apcautomatizacion.site)\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Eh=`---\r
title: "Normativa videovigilancia Colombia 2026: Ley 1581, Habeas Data, Resolución 1074, SG-SST"\r
slug: "normativa-videovigilancia-colombia-2026-ley-1581-habeas-data"\r
coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
publishDate: "2026-07-26"\r
author: "Servicios APC"\r
category: "Legal & Cumplimiento"\r
tags: "Ley 1581, Habeas Data, Resolución 1074, SG-SST, Ley 1581, videovigilancia Colombia, cumplimiento normativo, Bogotá"\r
description: "Guía actualizada 2026: Ley 1581 (Habeas Data), Resolución 1074 (SG-SST), Resolución 666, Ley 1581, GDPR local. Qué exige la ley para CCTV, IA, retención, derechos ARCO, sanciones. Checklist cumplimiento."\r
readTime: "12 min"\r
cta: '{"primary":{"label":"No sé si mi CCTV cumple la ley → Auditoría gratis cumplimiento normativo","href":"https://apcvisionai.site"},"secondary":{"label":"Mis cámaras no graban bien / no sirven como evidencia → Soporte técnico <30 min","href":"https://apccore.site"},"tertiary":{"label":"Quiero automatizar ARCO, retención, logs inmutables → n8n + IA cumplimiento","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
# Normativa videovigilancia Colombia 2026: Ley 1581, Habeas Data, Resolución 1074, SG-SST\r
\r
**¿Su CCTV cumple la ley? 87% de empresas en Bogotá no.**  \r
Multas SIC hasta 2.000 SMMLV (~$2.600M COP), cierre temporal, responsabilidad penal.  \r
**Checklist 2026:** Ley 1581 (Habeas Data), Resolución 1074 (SG-SST), Resolución 666, Ley 1581, GDPR local. Lo que exige la ley para CCTV + IA, retención, derechos ARCO, sanciones.\r
\r
---\r
\r
## Marco normativo 2026: Lo que TODO dueño de CCTV en Colombia debe saber\r
\r
| Norma | Qué regula | Aplicabilidad CCTV/IA | Sanción máxima |\r
|-------|------------|----------------------|----------------|\r
| **Ley 1581 de 2012 (Habeas Data)** | Protección datos personales | **Base legal:** Todo CCTV que capte imagen = dato personal sensible | **2.000 SMMLV** (~$2.600M) + cierre temporal |\r
| **Decreto 1377 de 2013** | Reglamento Ley 1581 | Medidas seguridad, avisos, derechos ARCO | Multa + orden medidas correctivas |\r
| **Resolución 1074 de 2015 (SG-SST)** | Sistema Gestión Seguridad y Salud en Trabajo | Cámaras en zonas riesgo, PPE, caídas, aforo | Multa Minsalud + cierre zona |\r
| **Resolución 666 de 2021** | Medidas bioseguridad (vigente 2026) | Aforo, distanciamiento, ventilación | Multa + cierre preventivo |\r
| **Ley 1266 de 2008 (Habeas Data Financiero)** | Datos crédito/financieros | Si CCTV capta transacciones/cajas | Multa Superfinanciera |\r
| **Código Penal (Art. 269A-B)** | Violación datos personales / Acceso abusivo | Acceso no autorizado a CCTV / Filtración video | **Prisión 4-8 años** + multa |\r
| **Estándar ISO 27001 / ISO 27701** | Gestión seguridad información / Privacidad | Marco voluntario certificación | Requisito contratos públicos/grandes |\r
\r
---\r
\r
## Ley 1581 (Habeas Data) aplicada a CCTV + IA: Lo obligatorio\r
\r
### 1. Principios que DEBE cumplir su CCTV\r
| Principio | Qué significa para su CCTV | Cómo cumplirlo con IA |\r
|-----------|---------------------------|----------------------|\r
| **Finalidad** | Solo grabar para seguridad/control interno | Definir propósito por escrito en Política Privacidad CCTV |\r
| **Necesidad/Proporcionalidad** | No grabar donde no es estrictamente necesario | **Zonificación IA:** Solo analiza zonas de riesgo (no baños, vestidores, áreas privadas) |\r
| **Calidad/Veracidad** | Imagen nítida, timestamp sincronizado | **ColorVu 4K + NTP sincronizado** → evidencia legal válida |\r
| **Seguridad** | Cifrado, acceso controlado, logs inmutables | **AES-256 + TLS 1.3 + RBAC + Logs SHA-256** (Offline-First) |\r
| **Transparencia** | Carteles visibles + Política web accesible | **Carteles IA** + QR a Política + Consentimiento HCE (clínicas) |\r
| **Acceso/Derechos ARCO** | Titular puede acceder, rectificar, cancelar, oponerse | **API REST** borrado clip/evento por ID + Log auditoría inmutable |\r
\r
### 2. Avisos obligatorios (Art. 16 Decreto 1377)\r
| Dónde | Qué debe decir | Formato |\r
|-------|---------------|---------|\r
| **Entrada principal** | "Zona videovigilada. Finalidad: seguridad. Responsable: Servicios APC. Derechos ARCO: serviciosapcsoporte@gmail.com" | Cartel 30x40cm, visible, iluminado |\r
| **Cada cámara visible** | "📹 Videovigilancia" | Sticker 10x10cm en cámara |\r
| **Web / QR en carteles** | Política completa + Formulario ARCO digital | Página web + QR en cartel |\r
\r
> **Multa por falta de avisos:** Hasta 500 SMMLV (~$650M) + orden correctiva.\r
\r
---\r
\r
## Retención de video: Lo que dice la ley (y lo que recomienda la IA)\r
\r
| Tipo de video | Retención legal mínima | Retención recomendada IA | Por qué |\r
|---------------|------------------------|--------------------------|---------|\r
| **Video continuo (sin eventos)** | No definido (principio proporcionalidad) | **7-30 días** | Espacio disco, principio minimización |\r
| **Eventos IA (intrusión, aforo, arqueo, caída, PPE, ANPR)** | 5 años (pruebas judiciales) | **1-5 años** | Evidencia legal, auditorías, SST |\r
| **Clips alerta (intrusión, caída, PPE, arqueo discrepante)** | 5 años | **1-5 años** | Evidencia inmediata, trazabilidad |\r
| **Metadatos IA (conteos, aforos, heatmaps, alertas)** | No definido | **3-5 años** | Tendencias, auditorías, mejora continua |\r
| **Logs acceso sistema (quién, qué, cuándo)** | 5 años | **5-10 años** | Auditoría SIC, ISO 27001, cadena custodia |\r
\r
> **Regla de oro IA:** **Retención inteligente** → Solo eventos IA se guardan largo plazo. Video continuo sin eventos se sobrescribe a 30 días. **Ahorra 80% espacio disco.**\r
\r
---\r
\r
## Derechos ARCO en CCTV + IA: Proceso obligatorio\r
\r
| Derecho | Qué implica para CCTV/IA | SLA respuesta |\r
|---------|-------------------------|---------------|\r
| **Acceso** | Titular pide ver video donde sale → Entregar clip anonimizado (rostros otros borrados) | **10 días hábiles** |\r
| **Rectificación** | Timestamp erróneo, zona mal etiquetada → Corregir metadatos | **5 días hábiles** |\r
| **Cancelación/Supresión** | Titular pide borrar su imagen → **Borrado clip + metadatos + logs acceso** (excepto obligación legal retención) | **15 días hábiles** |\r
| **Oposición** | Titular opone a ser grabado en zona pública → Evaluar necesidad/proporcionalidad → Responder motivado | **10 días hábiles** |\r
\r
**Proceso automatizado IA (Servicios APC):**\r
\`\`\`\r
API REST /arco/{derecho}/{eventId}\r
  → Valida identidad solicitante (2FA)\r
  → Verifica obligación legal retención\r
  → Ejecuta: Acceso (entrega clip anonimizado) / Rectificación / Supresión (borrado + logs) / Oposición (evalúa + responde)\r
  → Log inmutable SHA-256 en auditoría\r
  → Respuesta automática PDF firmado digitalmente\r
\`\`\`\r
**Tiempo real: < 2 horas** (vs 10-15 días manual).\r
\r
---\r
\r
## Resolución 1074 (SG-SST): CCTV como herramienta de seguridad laboral\r
\r
| Requisito SG-SST | Cómo lo resuelve CCTV + IA |\r
|------------------|----------------------------|\r
| **Identificación peligros** | **Mapas calor IA** → Zonas alto riesgo (caídas, maquinaria, químicos) |\r
| **Control PPE** | **PPE Detection IA** (casco, chaleco, guantes, gafas) → Alertas tiempo real supervisor |\r
| **Detección caídas** | **Fall Detection IA** → Alerta < 30 seg enfermería + clip evidencia |\r
| **Control acceso zonas riesgo** | **ANPR + Facial + Intrusión perimetral** → Log inmutable accesos zona RX, calderas, químicos |\r
| **Investigación incidentes** | **Clip 10s + timestamp + ubicación** → Investigación 30 min vs 2 días manual |\r
| **Capacitación / Evidencia** | **Clips anonimizados** para charlas seguridad + evidencia legal |\r
\r
> **Art. 2.2.4.6.27 Decreto 1072:** Empleador debe garantizar vigilancia zonas riesgo. **IA = vigilancia 24/7 sin operador humano.**\r
\r
---\r
\r
## Sanciones 2026: Lo que arriesga si NO cumple\r
\r
| Norma | Infracción típica CCTV | Sanción 2026 (valores aprox) |\r
|-------|------------------------|------------------------------|\r
| **Ley 1581 (SIC)** | Sin avisos, sin Política, sin ARCO, retención indebida, filtración video | **Hasta 2.000 SMMLV** (~$2.600M COP) + **Cierre temporal** establecimiento |\r
| **Resolución 1074 (Minsalud)** | Sin PPE detection, sin detección caídas, sin control acceso zonas riesgo | **Multa 500-2.000 SMMLV** + **Cierre zona** / **Cierre total** |\r
| **Resolución 666** | Aforo excedido sin control, sin distanciamiento | **Multa + Cierre preventivo** |\r
| **Código Penal Art. 269A** | Acceso no autorizado a CCTV, filtración video pacientes/empleados | **Prisión 4-8 años** + multa |\r
| **Ley 1266 (Habeas Data Financiero)** | CCTV en cajas capta datos financieros sin consentimiento | Multa Superfinanciera hasta 1.000 SMMLV |\r
\r
> **Dato 2024-2025:** SIC multó a 34 empresas en Bogotá por CCTV sin avisos / sin ARCO / retención > 1 año sin justificación. Promedio multa: **$450M COP**.\r
\r
---\r
\r
## Checklist Cumplimiento 2026 (✅ = Listo | ❌ = Acción requerida)\r
\r
| # | Ítem | Verificación | Estado |\r
|---|------|--------------|--------|\r
| 1 | **Política Privacidad CCTV publicada** (web + QR en carteles) | Documento PDF + Web + QR | ☐ |\r
| 2 | **Carteles "Zona videovigilada" en entradas + cada cámara** | Carteles 30x40cm + stickers cámara | ☐ |\r
| 3 | **Finalidad por escrito** (seguridad, control acceso, SST, arqueo) | Documento firmado representante legal | ☐ |\r
| 4 | **Zonificación: NO graba baños, vestidores, áreas privadas** | Plano zonas grabadas / no grabadas | ☐ |\r
| 5 | **Retención definida por tipo** (continuo 30d, eventos 5 años, logs 5-10 años) | Configurado en NVR/Edge Server | ☐ |\r
| 6 | **Cifrado AES-256 video en reposo + TLS 1.3 en tránsito** | Configurado NVR/Edge/Cloud | ☐ |\r
| 7 | **RBAC: Roles definidos (Gerencia/SST/Calidad/Seguridad/IT)** | Usuarios + permisos documentados | ☐ |\r
| 8 | **Logs inmutables acceso (SHA-256)** | Audit log activado + hash verificación | ☐ |\r
| 9 | **Cifrado discos (AES-256) + TLS 1.3 red** | BitLocker / LUKS + TLS 1.3 | ☐ |\r
| 10 | **Proceso ARCO automatizado (API + SLA 10-15 días)** | API REST + Formulario web + SLA | ☐ |\r
| 11 | **Carteles "Zona videovigilada" + QR Política en entradas** | Carteles 30x40cm + QR funcionando | ☐ |\r
| 12 | **PPE Detection en zonas riesgo (obras, mantenimiento, calderas)** | Alertas WhatsApp/Telegram supervisor | ☐ |\r
| 13 | **Fall Detection (caídas) en baños, pasillos, salas espera** | Alerta < 30 seg enfermería/seguridad | ☐ |\r
| 14 | **ANPR / Facial en zonas restringidas (RX, Farmacia, Esterilización)** | Log inmutable + Alerta intrusión | ☐ |\r
| 15 | **Aforo tiempo real + Alerta > 80% capacidad** | Dashboard + Alerta WhatsApp/Telegram | ☐ |\r
| 16 | **Mapas calor IA para identificación peligros (SG-SST)** | Reporte mensual SST | ☐ |\r
| 16 | **Logs inmutables SHA-256 acceso sistema + video** | Verificación hash periódica | ☐ |\r
| 17 | **Backup cifrado (AES-256) + Retención según tabla legal** | Probado restauración trimestral | ☐ |\r
| 18 | **Plan respuesta incidente (filtración, acceso no autorizado)** | Documentado + Simulacro anual | ☐ |\r
| 19 | **Capacitación personal ARCO / Privacidad / SST** | Registro asistencia + certificado | ☐ |\r
| 20 | **Auditoría interna trimestral + Externa anual** | Informe firmado representante legal | ☐ |\r
\r
**¿Cuántos ✅ tiene?**\r
- **18-20:** ✅ Cumplimiento robusto\r
- **14-17:** ⚠️ Gaps menores → Plan 30 días\r
- **10-13:** ⚠️ Gaps críticos → Plan 15 días + asesoría\r
- **< 10:** 🔴 **Riesgo alto** → Auditoría urgente + plan 7 días\r
\r
---\r
\r
## Cómo la IA de Servicios APC le da cumplimiento "llave en mano"\r
\r
| Requisito | Implementación IA Servicios APC |\r
|-----------|--------------------------------|\r
| **Retención inteligente** | Configuración automática por tipo evento (continuo 30d, eventos 5a, logs 10a) |\r
| **Cifrado AES-256 + TLS 1.3** | Nativo en Edge Server + NVR + Cloud sync |\r
| **RBAC + Logs SHA-256** | Nativo Edge Server + Dashboard Grafana |\r
| **ARCO automatizado API** | Endpoint REST + Formulario web + SLA < 2h |\r
| **Anonimización clips ARCO** | YOLO borra rostros terceros automático en clip entrega |\r
| **PPE / Caídas / ANPR / Intrusión** | Modelos YOLOv10 entrenados + Alertas < 3 seg |\r
| **Logs inmutables SHA-256** | Nativo Edge Server + Verificación hash automática |\r
| **Backup cifrado + Retención legal** | Configuración automática + Prueba restauración trimestral |\r
| **Auditoría SIC/Minsalud lista** | Reporte completo + Logs SHA-256 + Políticas + Evidencias en < 24h |\r
\r
---\r
\r
## ¿Qué problema necesita resolver hoy?\r
\r
> 1. [No sé si mi CCTV cumple la ley → Auditoría gratis cumplimiento normativo](https://apcvisionai.site)  \r
> 2. [Mis cámaras no graban bien / no sirven como evidencia → Soporte técnico <30 min](https://apccore.site)  \r
> 3. [Quiero automatizar ARCO, retención, logs inmutables → n8n + IA cumplimiento](https://apcautomatizacion.site)\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,zh=`---\r
title: "Automatización CCTV con n8n: de alerta de cámara a WhatsApp, CRM y Dashboard en 5 minutos"\r
excerpt: "Aprende a configurar flujos automáticos con n8n que conectan tus cámaras CCTV con WhatsApp, CRM y dashboards en tiempo real. Guía práctica para negocios en Bogotá."\r
date: "2026-07-27"\r
publishDate: "2026-07-27"\r
author: "Servicios APC"\r
category: "Automatización"\r
tags: "n8n, automatización CCTV, WhatsApp Bot, CRM, dashboard seguridad, alertas automáticas, Bogotá"\r
readTime: "10 min"\r
coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: "{\\"primary\\":{\\"label\\":\\"Solicitar automatización CCTV\\",\\"href\\":\\"https://apcautomatizacion.site\\"},\\"secondary\\":{\\"label\\":\\"Ver infraestructura edge\\",\\"href\\":\\"https://apccore.site\\"},\\"tertiary\\":{\\"label\\":\\"Visitar DogWeb\\",\\"href\\":\\"https://dogweb.lat\\"}}"\r
---\r
\r
## El problema\r
\r
Tu cámara detecta un intruso a las 2:47 AM. El sistema graba el video, genera una alerta... y nadie la ve hasta la mañana siguiente. El vigilante nocturno recibe un beep que ignora. El dueño se entera cuando el ropero ya no está.\r
\r
Este escenario se repite diariamente en miles de negocios en Bogotá: **las cámaras graban, pero no actúan**. La alerta CCTV tradicional depende de que alguien esté mirando un monitor en el momento exacto del evento.\r
\r
Los problemas concretos:\r
\r
- **Alertas silenciosas**: el NVR suena pero el operador está en otra tarea\r
- **Sin escalamiento**: la alerta no llega al dueño, al gerente ni a la policía\r
- **Sin contexto**: se recibe un beep, no un video de 15 segundos del evento\r
- **Sin registro**: no hay trazabilidad de quién fue notificado y cuándo respondió\r
- **Sin automatización**: cada integración manual costaría $15-30M COP en desarrollo\r
\r
## Qué es n8n y por qué cambia todo\r
\r
**n8n** (pronunciado "n-eight-n") es una plataforma de automatización de código abierto que conecta aplicaciones y servicios mediante flujos visuales. Piensa en ella como un "cerebro" que recibe señales de tus cámaras y decide qué hacer con ellas: enviar WhatsApp, actualizar un CRM, activar una sirena o encender luces.\r
\r
A diferencia de herramientas como Zapier o Make, n8n puede ejecutarse **self-hosted** en tu propia infraestructura en Bogotá, lo que significa:\r
\r
- **Datos locales**: las alertas no viajan a servidores en EE.UU.\r
- **Costo fijo**: sin suscripciones mensuales por ejecución\r
- **Sin límites**: ejecuta millones de flujos sin pagar extra\r
- **Personalización total**: lógica condicional compleja, no solo "si A entonces B"\r
\r
### Características clave para seguridad\r
\r
| Característica | Beneficio para CCTV |\r
|---|---|\r
| Webhooks | Recibe alertas HTTP de cámaras y NVR en tiempo real |\r
| Integraciones nativas | WhatsApp Business API, Telegram, Slack, Google Sheets |\r
| Lógica condicional | "Si es nocturno + movimiento en zona X → WhatsApp al dueño" |\r
| Retry automático | Si WhatsApp falla, reintenta o envía por Telegram |\r
| Ejecución local | El flujo corre en tu servidor edge en Bogotá |\r
\r
## Cómo funciona: flujo CCTV → n8n → Acción\r
\r
### Arquitectura del sistema\r
\r
\`\`\`\r
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐\r
│   Cámara     │────▶│   NVR /      │────▶│   n8n        │────▶│  WhatsApp /  │\r
│   IP CCTV    │     │   VMS        │     │  (self-hosted│     │  Telegram /  │\r
│              │     │              │     │   en edge)   │     │  Dashboard   │\r
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘\r
                                                   │\r
                                                   ▼\r
                                          ┌──────────────┐\r
                                          │  CRM / ERP   │\r
                                          │  (opcional)  │\r
                                          └──────────────┘\r
\`\`\`\r
\r
### Paso 1: La cámara detecta movimiento\r
\r
La cámara IP envía una alerta HTTP (webhook) al NVR cuando detecta movimiento en una zona configurada. La mayoría de cámaras Hikvision, Dahua y Axis soportan esta función nativa.\r
\r
\`\`\`\r
POST /webhook/cctv-alert HTTP/1.1\r
Content-Type: application/json\r
\r
{\r
  "camera_id": "cam_bodega_01",\r
  "event": "motion_detected",\r
  "zone": "zona_restringida",\r
  "timestamp": "2026-07-27T02:47:00-05:00",\r
  "snapshot_url": "http://192.168.1.100/snapshots/20260727_024700.jpg"\r
}\r
\`\`\`\r
\r
### Paso 2: n8n recibe y procesa\r
\r
El nodo webhook de n8n recibe la alerta y ejecuta la lógica:\r
\r
\`\`\`\r
1. ¿Es horario nocturno (8 PM - 6 AM)?\r
   ├─ SÍ → Enviar WhatsApp al dueño + activar sirena\r
   └─ NO → ¿Hay personal en turno?\r
           ├─ SÍ → Notificar por Telegram al vigilante\r
           └─ NO → Alerta completa: WhatsApp + Telegram + Dashboard\r
\`\`\`\r
\r
### Paso 3: Acciones automáticas\r
\r
**WhatsApp Business API** envía un mensaje estructurado:\r
\r
\`\`\`\r
🚨 ALERTA BODEGA - Cam 01\r
Hora: 02:47 AM\r
Zona: Restringida\r
Estado: Movimiento detectado\r
\r
Ver snapshot:\r
http://192.168.1.100/snapshots/20260727_024700.jpg\r
\r
Responder:\r
1 - Confirmar alerta\r
2 - Falsa alarma\r
3 - Llamar policía\r
\`\`\`\r
\r
**Dashboard** actualiza en tiempo real con:\r
\r
- Timestamp del evento\r
- Cámara activada\r
- Snapshot capturado\r
- Estado de notificación (enviado / fallido)\r
- Tiempo de respuesta del operador\r
\r
**CRM** registra el incidente automáticamente con toda la metadata para auditorías futuras.\r
\r
## Casos reales en Bogotá\r
\r
### Caso 1: Ferretería en Kennedy — Intrusión nocturna\r
\r
Una ferretería en Kennedy tenía 8 cámaras Hikvision conectadas a un NVR básico. Las alertas sonaban en el local cerrado y nadie las escuchaba.\r
\r
**Implementación:**\r
\r
1. Se instaló n8n en un servidor edge con GPU en la bodega\r
2. Se configuró webhook en el NVR para eventos de movimiento nocturno\r
3. Se creó flujo: movimiento nocturno → WhatsApp al dueño + Telegram al grupo de vigilancia\r
4. Se integró sirena IP activada por n8n vía HTTP\r
\r
**Resultado:** La primera semana detectaron 3 intentos de acceso no autorizado. El dueño recibió WhatsApp con snapshot en 3 segundos. La sirena se activó automáticamente. No hubo pérdidas.\r
\r
### Caso 2: Distribuidora en Chapinero — Dashboard de aforo\r
\r
Una distribuidora de alimentos necesitaba controlar el aforo de su bodega durante entregas. n8n conectó las cámaras con un dashboard web que mostraba:\r
\r
- Personas detectadas por zona (usa YOLO via APC Visión AI)\r
- Alerta cuando se excedía el aforo máximo\r
- Registro diario exportable a Excel\r
\r
**Resultado:** Cumplimiento normativo del 100% y reducción de incidentes de seguridad en un 67%.\r
\r
### Caso 3: Centro comercial en Suba — Flujos complejos\r
\r
Un centro comercial con 42 cámaras implementó flujos de n8n con:\r
\r
- **Zonificación**: diferentes alertas por zona (estacionamiento, pasillos, tiendas)\r
- **Escalamiento**: si no hay respuesta en 2 minutos → escala al gerente\r
- **Integración con CRM**: cada incidente se registra como ticket\r
- **Reporte semanal automático**: resumen de incidentes enviado por email\r
\r
**Resultado:** Reducción del 45% en tiempo de respuesta y reportes automáticos para aseguradora.\r
\r
## FAQ\r
\r
### ¿n8n self-hosted o cloud para seguridad?\r
\r
**Self-hosted es la opción recomendada** para empresas de seguridad en Bogotá. Razones:\r
\r
- Los datos de video y alertas permanecen en tu infraestructura\r
- Sin dependencia de internet para la ejecución de flujos críticos\r
- Costo fijo: un servidor edge ($3-5M COP/mes) vs. n8n Cloud ($20-50 USD/mes por ejecuciones)\r
- Cumplimiento de normativas de protección de datos locales\r
\r
n8n Cloud es viable solo para empresas pequeñas con bajo volumen de alertas (<100/día).\r
\r
### ¿Cuánto cuesta implementar esto?\r
\r
| Componente | Costo estimado (COP) |\r
|---|---|\r
| Servidor edge (1 mes) | $3.000.000 - $5.000.000 |\r
| Configuración n8n + flujos | $2.000.000 - $4.000.000 |\r
| Integración WhatsApp API | $500.000 - $1.000.000 |\r
| Dashboard personalizado | $1.500.000 - $3.000.000 |\r
| **Total inicial** | **$7.000.000 - $13.000.000** |\r
| **Mantenimiento mensual** | **$800.000 - $1.500.000** |\r
\r
Comparado con $30-50M COP que costaría desarrollar una solución similar desde cero.\r
\r
### ¿Funciona con cualquier cámara?\r
\r
Sí. n8n se conecta vía HTTP/webhook, que es un estándar. Cámaras Hikvision, Dahua, Axis, Reolink y la mayoría de marcas profesionales soportan envío de alertas HTTP. Si tu cámara no soporta webhooks, usamos el NVR como intermediario.\r
\r
### ¿Qué pasa si se cae internet?\r
\r
El servidor edge sigue procesando localmente. Las alertas se almacenan en cola y se envían cuando se restablece la conexión. Para alertas críticas (intrusión), la sirena se activa localmente sin depender de internet.\r
\r
### ¿Necesito programador para mantenerlo?\r
\r
No. Los flujos de n8n se editan visualmente. Después de la implementación inicial, tu equipo puede modificar condiciones, agregar cámaras o cambiar destinatarios sin código. Servicios APC ofrece soporte mensual incluido.\r
\r
## Próximos pasos\r
\r
Si tu negocio en Bogotá tiene cámaras CCTV que solo graban pero no actúan, la automatización con n8n es el paso más rápido y costo-efectivo para convertirlas en un sistema de seguridad inteligente.\r
\r
**Lo que puedes hacer hoy:**\r
\r
1. **Auditar tu infraestructura actual**: ¿qué cámaras tienes? ¿El NVR soporta webhooks?\r
2. **Definir prioridades**: ¿qué alerta necesitas primero? ¿Intrusión? ¿Aforo? ¿Acceso?\r
3. **Solicitar una demostración**: vemos tu caso específico y te mostramos el flujo funcionando\r
\r
> **Servicios APC** implementa automatización CCTV con n8n para negocios en Bogotá. Desde la configuración de webhooks hasta dashboards personalizados y notificaciones por WhatsApp.\r
\r
## Ecosistema APC: Todo conectado\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22\r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com\r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Rh=`---\r
title: "SEO Local en Google Maps para empresas de seguridad en Bogotá: cómo aparecer primero en 2026"\r
excerpt: "Guía completa de SEO local y Google Business Profile para empresas de seguridad en Bogotá. Aprende a dominar el mapa de Google y duplicar tus cotizaciones."\r
date: "2026-07-27"\r
publishDate: "2026-07-27"\r
author: "Servicios APC"\r
category: "SEO & Marketing"\r
tags: "SEO local, Google Maps, Google Business Profile, marketing digital, Bogotá, empresas seguridad, ranking maps"\r
readTime: "9 min"\r
coverImage: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: "{\\"primary\\":{\\"label\\":\\"Solicitar SEO local\\",\\"href\\":\\"https://dogweb.lat\\"},\\"secondary\\":{\\"label\\":\\"Ver automatización CCTV\\",\\"href\\":\\"https://apcautomatizacion.site\\"},\\"tertiary\\":{\\"label\\":\\"Infraestructura edge\\",\\"href\\":\\"https://apccore.site\\"}}"\r
---\r
\r
## El problema\r
\r
Tienes la mejor empresa de seguridad de Bogotá. Instalas cámaras Hikvision certificadas, tienes técnicos con 10 años de experiencia, y tu atención es excepcional. Pero cuando alguien busca **"cámaras de seguridad bogotá"** en Google, aparecen tres competidores antes que tú.\r
\r
El problema no es tu servicio. Es que **Google no te conoce**.\r
\r
Las empresas de seguridad en Bogotá enfrentan un desafío específico: sus clientes los buscan localmente, en el momento exacto que necesitan el servicio. No buscan "empresa de seguridad" a las 3 AM cuando una alarma suena — buscan "reparación cámaras bogotá urgentes" o "instalación CCTV cerca de mí".\r
\r
Sin presencia en Google Maps y SEO local, estás invisible para el 46% de búsquedas que tienen intención local according to Google.\r
\r
### Datos que importan\r
\r
- El **76%** de las personas que buscan algo cercano visitan un negocio en 24 horas\r
- El **28%** de las búsquedas locales resultan en una compra\r
- El **46%** de todas las búsquedas Google tienen intención local\r
- Las empresas en el **Map Pack** (top 3) reciben el **75%** de los clics\r
\r
## Qué es SEO Local y Google Business Profile\r
\r
**SEO Local** es el conjunto de estrategias para que tu negocio aparezca en resultados de búsqueda geográficamente relevantes. Cuando alguien en Bogotá busca "empresas de seguridad", Google muestra tres resultados en el mapa antes de los resultados orgánicos. Eso es el **Local Pack** o **Map Pack**.\r
\r
**Google Business Profile** (antes Google My Business) es tu ficha gratuita en Google. Es donde defines:\r
\r
- Nombre, dirección, teléfono (NAP)\r
- Horarios de atención\r
- Categorías del negocio\r
- Fotos y videos\r
- Reseñas de clientes\r
- Publicaciones y ofertas\r
- Área de servicio\r
\r
Tu perfil de Google Business es la **base** de todo SEO local. Sin un perfil optimizado, ninguna otra estrategia funciona.\r
\r
### Diferencia entre SEO orgánico y SEO local\r
\r
| SEO Orgánico | SEO Local |\r
|---|---|\r
| Compite a nivel nacional/global | Compite en tu zona geográfica |\r
| Requiere autoridad de dominio alta | Requiere perfil optimizado + reseñas |\r
| Resultados en posiciones 1-10 | Resultados en Map Pack (top 3) |\r
| Contenido largo y profundo | Ficha completa + consistencia NAP |\r
| Backlinks de calidad | Reseñas reales + citas locales |\r
\r
## Cómo funciona: estrategia completa\r
\r
### Paso 1: Optimizar Google Business Profile\r
\r
**Categoría principal**: "Empresa de seguridad" o "Servicio de seguridad" (no "cámaras de vigilancia" — esa es secundaria).\r
\r
**Categorías secundarias** (agrega todas las relevantes):\r
\r
- Instalación de sistemas de seguridad\r
- Reparación de equipos de seguridad\r
- Distribuidor de equipos de seguridad\r
- Consultoría de seguridad\r
\r
**Descripción optimizada** (750 caracteres con keywords naturales):\r
\r
> Empresa de seguridad en Bogotá especializada en instalación de cámaras CCTV, sistemas de acceso, control de aforo y automatización con inteligencia artificial. Servicio a empresas en Kennedy, Chapinero, Engativá, Suba y toda la capital. Más de 10 años protegiendo negocios con tecnología YOLO y monitoreo 24/7. Cotización sin compromiso.\r
\r
**Fotos** (mínimo 25):\r
\r
- Fachada del local (con señalización visible)\r
- Equipo de trabajo instalando cámaras\r
- Capturas de dashboard de monitoreo\r
- Antes/después de instalaciones\r
- Equipo humano (genera confianza)\r
- Logos de marcas que manejas (Hikvision, Dahua)\r
\r
### Paso 2: Estrategia de reseñas\r
\r
Las reseñas son el **factor #1** para rankear en el Map Pack. No importa tu web si tienes 2 reseñas y tu competidor tiene 85.\r
\r
**Sistema de solicitud de reseñas:**\r
\r
1. Después de cada instalación, envía WhatsApp con enlace directo a reseña\r
2. Ofrece incentivo ético: "Déjanos tu reseña y recibe 10% en tu próximo mantenimiento"\r
3. Responde TODAS las reseñas en menos de 24 horas (positivas y negativas)\r
4. Usa palabras clave en las respuestas: "Gracias por confiar en nosotros para la instalación de cámaras en su bodega en Kennedy"\r
\r
**Plantilla de WhatsApp para solicitar reseña:**\r
\r
\`\`\`\r
Hola [Nombre], ¡gracias por confiar en nosotros para la\r
instalación de CCTV en su negocio!\r
\r
Si quedó satisfecho, nos ayudaría mucho si nos deja una\r
reseña en Google: [enlace directo]\r
\r
¡Gracias por su preferencia! 🏢📹\r
Servicios APC - Bogotá\r
\`\`\`\r
\r
### Paso 3: Citas locales y directorios\r
\r
Las **citas** son menciones de tu NAP (Nombre, Dirección, Teléfono) en otros sitios web. Consistencia = confianza para Google.\r
\r
**Directorios priorizados para Bogotá:**\r
\r
| Directorio | Prioridad | Costo |\r
|---|---|---|\r
| Google Business Profile | Crítica | Gratis |\r
| Páginas Amarillas Colombia | Alta | Gratis |\r
| Tuenticas.com | Alta | Gratis |\r
| Cylex Colombia | Media | Gratis |\r
| Rappi Business | Media | Gratis |\r
| directorio.bogota.gov.co | Alta | Gratis |\r
| Guía de Bogotá | Media | Gratis |\r
\r
**Regla de oro**: tu NAP debe ser **idéntico** en todos los directorios. Si en Google dice "Cra. 52c #39b-22" no pongas "Carrera 52C #39B-22" en otro sitio. Copia y pega exactamente.\r
\r
### Paso 4: Keywords locales estratégicas\r
\r
**Keywords principales** (volumen alto):\r
\r
- "cámaras de seguridad bogotá"\r
- "CCTV empresas bogotá"\r
- "instalación cámaras bogotá"\r
- "empresa de seguridad bogotá"\r
\r
**Keywords de cola larga** (conversión alta):\r
\r
- "instalación de cámaras Hikvision en Kennedy"\r
- "reparación CCTV urgente Chapinero"\r
- "control de aforo con cámaras bogotá"\r
- "sistema de seguridad para bodega bogotá"\r
- "cámaras con inteligencia artificial bogotá"\r
\r
**Keywords de servicio específico**:\r
\r
- "automatización CCTV bogotá"\r
- "análisis de video con IA bogotá"\r
- "PPE detection empresas bogotá"\r
- "conteo de personas con cámaras"\r
\r
### Paso 5: Contenido local en tu web\r
\r
Crea páginas dedicadas para cada zona de servicio:\r
\r
- \`/servicios/camaras-seguridad-kennedy\`\r
- \`/servicios/cctv-engativa\`\r
- \`/servicios/control-aforo-chapinero\`\r
- \`/servicios/automatizacion-suba\`\r
\r
Cada página debe tener:\r
\r
- 800-1200 palabras únicas\r
- Referencias específicas a la zona (calles, barrios, puntos de referencia)\r
- Testimonios de clientes de esa zona\r
- Fotos reales de trabajos en la zona\r
- Schema LocalBusiness con geo-coordenadas\r
\r
## Casos reales en Bogotá\r
\r
### Caso de éxito: Distribuidora Jone — +340% cotizaciones\r
\r
**Situación inicial:**\r
\r
Distribuidora Jone es una empresa de distribución y venta de equipos de seguridad en Bogotá. Tenía perfil de Google Business creado pero no optimizado: 3 fotos, descripción de 2 líneas, 0 reseñas activas, y NAP inconsistente en 12 directorios.\r
\r
**Estrategia implementada:**\r
\r
1. **Reoptimización completa del perfil**: 30+ fotos, descripción de 750 caracteres, 6 categorías secundarias, horarios correctos, área de servicio definida\r
2. **Campaña de reseñas**: sistema automatizado vía WhatsApp post-venta. En 6 meses, pasó de 4 a 67 reseñas con promedio de 4.8 estrellas\r
3. **Limpieza de citations**: se corrigió NAP en 12 directorios. Nombre exacto, dirección exacta, teléfono exacto\r
4. **Páginas de servicio locales**: 8 páginas optimizadas para cada zona de Bogotá que cubren\r
5. **Publicaciones semanales en GBP**: ofertas, tips de seguridad, fotos de instalaciones recientes\r
\r
**Resultados en 6 meses:**\r
\r
| Métrica | Antes | Después | Crecimiento |\r
|---|---|---|---|\r
| Visualizaciones en Maps | 340/mes | 1.496/mes | +340% |\r
| Llamadas desde Maps | 12/mes | 53/mes | +341% |\r
| Solicitudes de cotización | 18/mes | 79/mes | +339% |\r
| Posición Map Pack | Fuera del top 10 | Posición 2 | — |\r
| Reseñas | 4 | 67 | +1.575% |\r
\r
### Lecciones clave del caso Jone\r
\r
1. **Las reseñas son el factor diferenciador**: de 4 a 67 reseñas cambió todo\r
2. **La consistencia NAP importa**: corregir 12 directorios eliminó confusión en Google\r
3. **El contenido local funciona**: las páginas de zona generan tráfico cualificado\r
4. **Las publicaciones en GBP mantienen el perfil activo**: Google premia la actividad\r
\r
## FAQ\r
\r
### ¿Cuánto tiempo toma ver resultados con SEO local?\r
\r
Los primeros resultados se ven en **4-8 semanas**: mejor posicionamiento en Maps, más visualizaciones, más llamadas. Los resultados significativos (duplicar cotizaciones) llegan en **3-6 meses** de trabajo consistente. SEO local es más rápido que SEO orgánico tradicional.\r
\r
### ¿Necesito página web para SEO local?\r
\r
Técnicamente no — Google Business Profile puede funcionar solo. Pero una página web **multiplica** los resultados: te permite rankear para keywords adicionales, mostrar tu trabajo, y capturar leads que no vienen de Maps. Es la diferencia entre 50 y 200 cotizaciones mensuales.\r
\r
### ¿Cuánto cuesta contratar SEO local profesional?\r
\r
| Nivel | Costo mensual COP | Incluye |\r
|---|---|---|\r
| Básico | $800.000 - $1.500.000 | Optimización GBP + 4 publicaciones/mes |\r
| Profesional | $2.000.000 - $4.000.000 | GBP + Web + Reseñas + Directorios + Contenido |\r
| Premium | $5.000.000 - $8.000.000 | Todo lo anterior + PPC + Automatización + Dashboard |\r
\r
ROI típico: cada $1 invertido en SEO local genera $5-12 en cotizaciones para empresas de seguridad en Bogotá.\r
\r
### ¿Puedo hacer SEO local yo mismo?\r
\r
Sí, para lo básico: crear y verificar tu perfil de Google, pedir reseñas, y mantener info consistente. Pero para competir en el Map Pack de "cámaras de seguridad bogotá" necesitas expertise en optimización técnica, estrategia de contenido, y gestión de citations. Es como distinguir entre cambiar una bombilla y cablear un edificio.\r
\r
### ¿Las reseñas negativas me matan?\r
\r
No necesariamente. De hecho, un perfil con solo reseñas de 5 estrellas parece sospechoso. Lo importante es: (1) tener muchas más positivas que negativas, (2) responder TODAS las negativas con profesionalismo, (3) resolver el problema offline y luego pedir al cliente que actualice su reseña. Google valora la actividad de respuesta.\r
\r
### ¿SEO local funciona para empresas B2B de seguridad?\r
\r
Sí, pero con un matiz: las empresas que buscan "empresa de seguridad para oficinas" usan Google igual que los consumidores. La diferencia es que el ciclo de venta es más largo. SEO local genera el primer contacto; tu proceso de ventas cierra el trato. Empresas como Distribuidora Jone prueban que B2B funciona perfectamente.\r
\r
## Próximos pasos\r
\r
Si tu empresa de seguridad en Bogotá no está apareciendo en el Map Pack de Google, estás dejando dinero sobre la mesa cada día que pasa.\r
\r
**Acciones inmediatas:**\r
\r
1. **Verifica tu Google Business Profile** hoy mismo (si no lo has hecho)\r
2. **Pide 5 reseñas** a tus clientes más satisfechos esta semana\r
3. **Audita tu NAP** en los principales directorios colombianos\r
4. **Revisa qué hace tu competidor** en el Map Pack y mejóralo\r
\r
> **DogWeb** (parte del ecosistema APC) ofrece servicios de SEO local especializados para empresas de seguridad y tecnología en Bogotá. Desde la optimización de Google Business Profile hasta estrategias completas de marketing digital.\r
\r
## Ecosistema APC: Todo conectado\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22\r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com\r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Th=`---\r
title: "Servidores Edge con GPU para IA en videoanalítica: qué necesitas en Bogotá 2026"\r
excerpt: "Guía técnica sobre servidores edge con GPU para procesamiento de video con inteligencia artificial en Bogotá. Compara opciones NVIDIA, costos y arquitecturas."\r
date: "2026-07-27"\r
publishDate: "2026-07-27"\r
author: "Servicios APC"\r
category: "Infraestructura"\r
tags: "servidor edge, GPU, NVIDIA, YOLO, videoanalítica, infraestructura IA, Bogotá, edge computing"\r
readTime: "11 min"\r
coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: "{\\"primary\\":{\\"label\\":\\"Consultar infraestructura edge\\",\\"href\\":\\"https://apccore.site\\"},\\"secondary\\":{\\"label\\":\\"Ver videoanalítica IA\\",\\"href\\":\\"https://apcvisionai.site\\"},\\"tertiary\\":{\\"label\\":\\"Automatización n8n\\",\\"href\\":\\"https://apcautomatizacion.site\\"}}"\r
---\r
\r
## El problema\r
\r
Tienes 20 cámaras IP en tu negocio en Bogotá. Cada una genera 2-4 Mbps de stream continuo. El NVR graba todo, pero **no analiza nada**. Si quieres detección de intrusión, conteo de personas o verificación de EPP (equipo de protección personal), necesitas enviar ese video a la nube y pagar $15-40 USD por cámara por mes.\r
\r
Para 20 cámaras, eso son **$300-800 USD mensuales** — entre $1.2M y $3.4M COP — solo por el procesamiento en la nube. Y ese costo escala linealmente: 50 cámaras = $750-2.000 USD/mes.\r
\r
El problema se vuelve insoportable cuando:\r
\r
- **Latencia**: el video viaja a servidores en EE.UU., se procesa, y la alerta llega 3-8 segundos después. Para intrusión, eso es demasiado.\r
- **Ancho de banda**: subir 20 streams HD a la nube requiere 40-80 Mbps de subida — internet empresarial en Bogotá cuesta $200-500K COP/mes por 100 Mbps.\r
- **Dependencia**: si se cae internet, se pierde el análisis. La cámara sigue grabando pero la IA se desconecta.\r
- **Privacidad**: el video de tus clientes viaja por servidores externos. Problemático para empresas con datos sensibles.\r
\r
**La alternativa**: procesar la IA localmente, en un servidor edge con GPU, en tu propia instalación en Bogotá.\r
\r
## Qué es edge computing para videoanalítica\r
\r
**Edge computing** significa procesar los datos cerca de donde se generan, en lugar de enviarlos a la nube. Para videoanalítica, esto significa: la cámara envía el video a un servidor local con GPU, la GPU ejecuta el modelo de IA (YOLO, por ejemplo), y las alertas se generan en milisegundos.\r
\r
### Edge vs Cloud para análisis de video\r
\r
| Aspecto | Cloud (AWS, Azure, GCP) | Edge Local |\r
|---|---|---|\r
| Costo mensual (20 cámaras) | $300-800 USD | $0 (hardware comprado) |\r
| Latencia de inferencia | 200-800ms | 15-50ms |\r
| Dependencia de internet | Crítica | Ninguna |\r
| Escalabilidad | Ilimitada | Limitada por hardware |\r
| Privacidad | Datos en servidores externos | 100% local |\r
| Mantenimiento | El proveedor lo hace | Tu equipo o APC Core |\r
| Costo inicial | $0 | $8-25M COP |\r
| Break-even | Mes 3-8 vs edge | — |\r
\r
**Cuándo usar edge**: cuando tienes 5+ cámaras, necesitas baja latencia, o la privacidad es prioridad.\r
\r
**Cuándo usar cloud**: cuando tienes 1-4 cámaras, no puedes instalar hardware, o necesitas análisis esporádico (no 24/7).\r
\r
## Cómo funciona: arquitectura edge completa\r
\r
### Diagrama de arquitectura\r
\r
\`\`\`\r
┌─────────────────────────────────────────────────────────────────┐\r
│                     INSTALACIÓN EN BOGOTÁ                       │\r
│                                                                 │\r
│  ┌─────────┐  ┌─────────┐  ┌─────────┐       ┌─────────┐     │\r
│  │ Cam IP  │  │ Cam IP  │  │ Cam IP  │  ...  │ Cam IP  │     │\r
│  │  01     │  │  02     │  │  03     │       │  20     │     │\r
│  └────┬────┘  └────┬────┘  └────┬────┘       └────┬────┘     │\r
│       │             │             │                  │          │\r
│       └─────────────┴──────┬──────┴──────────────────┘          │\r
│                            │                                    │\r
│                    ┌───────▼───────┐                            │\r
│                    │   Switch PoE  │                            │\r
│                    │   (Gigabit)   │                            │\r
│                    └───────┬───────┘                            │\r
│                            │                                    │\r
│              ┌─────────────▼─────────────┐                     │\r
│              │    SERVIDOR EDGE GPU       │                     │\r
│              │  ┌─────────────────────┐  │                     │\r
│              │  │  NVIDIA T4 / A2000  │  │                     │\r
│              │  │  YOLO v8 + DeepSort │  │                     │\r
│              │  └─────────────────────┘  │                     │\r
│              │  ┌─────────────────────┐  │                     │\r
│              │  │  n8n + Dashboard    │  │                     │\r
│              │  │  Alertas / Webhooks │  │                     │\r
│              │  └─────────────────────┘  │                     │\r
│              └─────────────┬─────────────┘                     │\r
│                            │                                    │\r
│              ┌─────────────▼─────────────┐                     │\r
│              │  NAS / RAID Storage       │                     │\r
│              │  (grabación 30 días)      │                     │\r
│              └───────────────────────────┘                     │\r
└─────────────────────────────────────────────────────────────────┘\r
\`\`\`\r
\r
### Flujo de datos\r
\r
\`\`\`\r
Cámara IP ──RTSP──▶ Servidor Edge ──GPU──▶ YOLO detecta objeto\r
                                              │\r
                                    ┌─────────▼──────────┐\r
                                    │  ¿Qué se detectó?  │\r
                                    └─────────┬──────────┘\r
                                              │\r
                         ┌────────────────────┼────────────────────┐\r
                         │                    │                    │\r
                    ┌────▼────┐          ┌────▼────┐          ┌────▼────┐\r
                    │ Persona │          │ Vehículo│          │  EPP   │\r
                    └────┬────┘          └────┬────┘          └────┬────┘\r
                         │                    │                    │\r
                    ┌────▼────┐          ┌────▼────┐          ┌────▼────┐\r
                    │¿Sin cas-│          │¿Placa   │          │¿Falta   │\r
                    │co en    │          │no regis-│          │chaleco/ │\r
                    │zona?    │          │trada?   │          │casco?   │\r
                    └────┬────┘          └────┬────┘          └────┬────┘\r
                         │                    │                    │\r
                    ┌────▼────┐          ┌────▼────┐          ┌────▼────┐\r
                    │ALERTA   │          │ALERTA   │          │ALERTA   │\r
                    │WhatsApp │          │Sirena + │          │Dashboard│\r
                    └─────────┘          │WhatsApp │          │+ Reporte│\r
                                         └─────────┘          └─────────┘\r
\`\`\`\r
\r
### Requisitos del servidor edge\r
\r
**Especificación mínima para 10 cámaras con YOLO:**\r
\r
- **CPU**: Intel Core i5-12400 / AMD Ryzen 5 5600 (6 núcleos)\r
- **RAM**: 16 GB DDR4 3200MHz\r
- **GPU**: NVIDIA T4 (16GB VRAM) o RTX A2000 (12GB VRAM)\r
- **Almacenamiento**: 1TB NVMe SSD (sistema + modelos) + 4TB HDD RAID1 (grabación)\r
- **Red**: 2x Gigabit Ethernet (1 para cámaras, 1 para red general)\r
- **Fuente**: 550W 80+ Bronze\r
- **Gabinete**: Rack 2U o tower con ventilación adecuada\r
\r
**Especificación recomendada para 20-30 cámaras:**\r
\r
- **CPU**: Intel Core i7-13700 / AMD Ryzen 7 7700X (8+ núcleos)\r
- **RAM**: 32 GB DDR5 5600MHz\r
- **GPU**: NVIDIA RTX A2000 12GB o RTX 4000 Ada (16GB VRAM)\r
- **Almacenamiento**: 2TB NVMe SSD + 8TB HDD RAID5\r
- **Red**: 2x 2.5 Gigabit Ethernet\r
- **Fuente**: 750W 80+ Gold\r
- **Gabinete**: Rack 2U con ventilación forzada\r
\r
## Comparativa de GPUs para videoanalítica\r
\r
### NVIDIA T4 vs A2000 vs RTX 4000 Ada\r
\r
| Especificación | NVIDIA T4 | RTX A2000 | RTX 4000 Ada |\r
|---|---|---|---|\r
| VRAM | 16 GB GDDR6 | 12 GB GDDR6 | 16 GB GDDR6 |\r
| TDP | 70W | 70W | 130W |\r
| Rendimiento FP32 | 8.1 TFLOPS | 6.3 TFLOPS | 19.2 TFLOPS |\r
| Cámaras simultáneas (YOLO v8) | 8-12 | 6-10 | 15-25 |\r
| Tensor Cores | Gen 2 | Gen 2 | Gen 4 |\r
| Costo estimado (COP) | $3.500.000 | $4.200.000 | $8.500.000 |\r
| Disponibilidad en Bogotá | Alta | Media | Baja (importación) |\r
| Mejor para | 10 cámaras, bajo consumo | 8 cámaras, estación de trabajo | 20+ cámaras, alto rendimiento |\r
\r
### Recomendación por número de cámaras\r
\r
- **1-8 cámaras**: NVIDIA T4 — mejor relación costo-rendimiento, bajo consumo\r
- **8-15 cámaras**: RTX A2000 — buen equilibrio, soporte profesional NVIDIA\r
- **15-30 cámaras**: RTX 4000 Ada — rendimiento necessário, justifica el costo\r
- **30+ cámaras**: Considerar RTX 4000 Ada SFF o dos servidores edge\r
\r
## Costo real: Cloud vs Edge para Bogotá\r
\r
### Escenario: 20 cámaras CCTV, análisis 24/7, 36 meses\r
\r
**Opción A: Cloud (AWS/Azure)**\r
\r
| Concepto | Costo mensual | Costo 36 meses |\r
|---|---|---|\r
| Instancia GPU (g4dn.xlarge) x2 | $500 USD | $18.000 USD |\r
| Almacenamiento (1TB) | $23 USD | $828 USD |\r
| Ancho de banda (20 streams) | $150 USD | $5.400 USD |\r
| Soporte técnico | $100 USD | $3.600 USD |\r
| **Total** | **$773 USD** | **$27.828 USD (~$116M COP)** |\r
\r
**Opción B: Edge local (APC Core)**\r
\r
| Concepto | Costo único | Costo 36 meses |\r
|---|---|---|\r
| Servidor edge GPU completo | — | $12.000.000 COP |\r
| Instalación y configuración | — | $3.000.000 COP |\r
| Internet empresarial | $350.000/mes | $12.600.000 COP |\r
| Mantenimiento mensual | $800.000/mes | $28.800.000 COP |\r
| **Total** | — | **$56.400.000 COP (~$13.400 USD)** |\r
\r
**Ahorro edge vs cloud: $102.6M COP (88%) en 36 meses.**\r
\r
Y el servidor edge sigue siendo tuyo después de 3 años. El cloud no.\r
\r
### Break-even mensual\r
\r
| Mes | Cloud acumulado | Edge acumulado | Ahorro edge |\r
|---|---|---|---|\r
| Mes 1 | $3.4M COP | $16.8M COP | -$13.4M |\r
| Mes 3 | $10.2M COP | $19.2M COP | -$9.0M |\r
| Mes 6 | $20.4M COP | $22.8M COP | -$2.4M |\r
| **Mes 7** | **$23.8M COP** | **$24.0M COP** | **+$0.2M** |\r
| Mes 12 | $47.6M COP | $30.0M COP | +$17.6M |\r
| Mes 24 | $95.2M COP | $45.6M COP | +$49.6M |\r
| Mes 36 | $142.8M COP | $56.4M COP | +$86.4M |\r
\r
**El edge se paga solo en el mes 7.** Después de eso, cada mes es puro ahorro.\r
\r
## Casos reales en Bogotá\r
\r
### Caso 1: Bodega industrial en Soacha — 32 cámaras, YOLO + PPE\r
\r
**Situación**: Bodega de 3.000m² con 32 cámaras Hikvision. Necesitaban detección de EPP (chaleco, casco, guantes) y control de aforo. Cotización cloud: $1.200 USD/mes.\r
\r
**Solución APC Core**:\r
\r
- Servidor Dell PowerEdge T40 con NVIDIA T4 (16GB)\r
- 32 GB RAM, 2TB NVMe + 8TB RAID\r
- YOLO v8 nano para EPP, YOLO v8 medium para aforo\r
- Dashboard web con alertas en tiempo real\r
- n8n integrado para WhatsApp + email\r
\r
**Resultado**: Funcionando 18 meses sin interrupciones. Costo total: $18M COP (instalación) + $800K/mes (mantenimiento). La empresa ahorra $1.1M COP/mes vs cloud.\r
\r
### Caso 2: Centro logístico en Fontibón — 48 cámaras, doble GPU\r
\r
**Situación**: Centro logístico con 48 cámaras de alta resolución (4MP). Necesitaban lectura de placas vehiculares, detección de intrusiones, y conteo de personas.\r
\r
**Solución APC Core**:\r
\r
- 2 servidores edge (24 cámaras cada uno)\r
- NVIDIA RTX A2000 en cada servidor\r
- DeepSort para tracking de personas entre cámaras\r
- Base de datos PostgreSQL para registro de placas\r
- Alertas automáticas por zona horaria\r
\r
**Resultado**: 99.7% de uptime en 12 meses. Placas detectadas con 96% de precisión. Alertas de intrusión en <2 segundos.\r
\r
### Caso 3: cadena de farmacias — 15 sedes, edge compacto\r
\r
**Situación**: 15 farmacias con 4-6 cámaras cada una. Necesitaban detección de personas sospechosas y conteo de clientes por hora.\r
\r
**Solución APC Core**:\r
\r
- Mini PC con NVIDIA Jetson Orin Nano por sede\r
- YOLO v8 nano optimizado para Jetson\r
- Dashboard centralizado que recibe datos de las 15 sedes\r
- Alertas diferenciadas: sedes abiertas vs cerradas\r
\r
**Resultado**: Inversión total $45M COP (vs $180M COP que costaría cloud para 15 sedes). Break-even en 4 meses.\r
\r
## FAQ\r
\r
### ¿Cuánta electricidad consume un servidor edge con GPU?\r
\r
Depende de la GPU:\r
\r
| GPU | TDP | Consumo del sistema completo | Costo mensual eléctrico COP |\r
|---|---|---|---|\r
| NVIDIA T4 | 70W | ~150W total | ~$18.000 |\r
| RTX A2000 | 70W | ~160W total | ~$19.200 |\r
| RTX 4000 Ada | 130W | ~220W total | ~$26.400 |\r
\r
El costo eléctrico es mínimo comparado con el ahorro vs cloud. Un servidor edge consume lo mismo que 3-4 focos LED.\r
\r
### ¿Qué mantenimiento necesita un servidor edge?\r
\r
- **Mensual**: revisar temperaturas, actualizar software de seguridad, verificar backups\r
- **Trimestral**: limpiar polvo de filtros y ventiladores, revisar SMART de discos\r
- **Anual**: reevaluar capacidad, actualizar modelos YOLO, possible upgrade de GPU\r
\r
En Bogotá, el clima es ideal: la temperatura promedio (14°C) reduce el desgaste térmico. No necesitas aire acondicionado dedicado como en ciudades costeras.\r
\r
### ¿Cuándo debo upgradear la GPU?\r
\r
Señales de que necesitas upgrade:\r
\r
- Uso de VRAM consistently >90%\r
- FPS de inferencia caen por debajo de 10 (para alertas en tiempo real necesitas 15+)\r
- Agregaste cámaras y el rendimiento cayó >20%\r
- Quieres agregar nuevos modelos (ej: OCR para placas + detección de personas)\r
\r
Tiempo promedio de vida útil de una GPU en edge: 4-5 años. La T4 de 2020 sigue siendo relevante en 2026 para aplicaciones medianas.\r
\r
### ¿Self-hosted o managed para infraestructura edge?\r
\r
**Self-hosted** (tú compras y administras):\r
\r
- Control total, sin mensualidades\r
- Requiere equipo técnico interno\r
- Ideal si tienes 2+ servidores edge\r
\r
**Managed** (APC Core administra):\r
\r
- Nosotros compramos, instalamos, y mantenemos\r
- Costo mensual predecible\r
- Soporte 24/7 con SLA garantizado\r
- Ideal si no tienes equipo técnico dedicado\r
\r
La mayoría de clientes en Bogotá eligen **managed** porque el ahorro de no contratar un sysadmin dedicado ($3-5M COP/mes) justifica el costo del servicio.\r
\r
### ¿Puedo usar hardware existente?\r
\r
Depende. Si tu servidor actual tiene:\r
\r
- Slot PCIe x16 disponible\r
- Fuente de al menos 450W\r
- 16GB+ RAM\r
- SSD para el sistema operativo\r
\r
...probablemente sí se puede agregar una GPU. Evaluamos tu hardware actual y te decimos la mejor opción. Muchos clientes empiezan con un upgrade de GPU en su servidor existente y escalan a servidor dedicado cuando crecen.\r
\r
### ¿Qué pasa si la GPU falla?\r
\r
El sistema sigue funcionando en modo degradado: las cámaras siguen grabando en el NVR, pero el análisis de IA se pausa. APC Core ofrece:\r
\r
- GPU de reemplazo en 24-48 horas\r
- Monitoreo remoto de salud de la GPU\r
- Alertas proactivas cuando la temperatura o uso anómalos\r
- Backup de configuración para recuperación rápida\r
\r
## Próximos pasos\r
\r
Si tu empresa en Bogotá está pagando por análisis de video en la nube o simplemente tiene cámaras que graban sin analizar, un servidor edge con GPU es la inversión con mejor ROI en infraestructura de seguridad.\r
\r
**Pasos concretos:**\r
\r
1. **Inventario de cámaras**: ¿cuántas tienes? ¿Qué resolución? ¿Cuántos FPS?\r
2. **Define tus necesidades de análisis**: ¿Intrusión? ¿EPP? ¿Aforo? ¿Placas? ¿Todo junto?\r
3. **Solicita una evaluación**: analizamos tu infraestructura actual y proponemos la arquitectura óptima\r
4. **Decide self-hosted vs managed**: según tu equipo técnico y presupuesto\r
\r
> **APC Core** diseña, instala y mantiene servidores edge con GPU para videoanalítica en Bogotá. Desde mini PCs con Jetson para 4 cámaras hasta servidores rack con RTX 4000 para 30+ cámaras.\r
\r
## Ecosistema APC: Todo conectado\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22\r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com\r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`,Dh=`---\r
title: "Hikvision vs Dahua vs Uniview: cuál elegir para CCTV con IA en 2026"\r
excerpt: "Comparativa completa de las tres marcas líderes de CCTV con IA: Hikvision, Dahua y Uniview. Análisis de capacidades YOLO, ONVIF, visión nocturna, precios y compatibilidad para empresas en Bogotá."\r
date: "2026-07-28"\r
publishDate: "2026-07-28"\r
author: "Servicios APC"\r
category: "Comparativas"\r
tags: "Hikvision, Dahua, Uniview, comparativa cámaras, CCTV IA, Bogotá, seguridad empresarial"\r
readTime: "10 min"\r
coverImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: "{\\"primary\\":{\\"label\\":\\"Ver demo comparativa en tu local en Bogotá\\",\\"href\\":\\"https://apcvisionai.site\\"},\\"secondary\\":{\\"label\\":\\"Infraestructura edge + servidor GPU\\",\\"href\\":\\"https://apccore.site\\"},\\"tertiary\\":{\\"label\\":\\"Integrar alertas IA a WhatsApp/CRM\\",\\"href\\":\\"https://apcautomatizacion.site\\"}}"\r
---\r
\r
## El problema\r
\r
Si estás buscando cámaras CCTV con inteligencia artificial para tu negocio en Bogotá, te enfrentas a una decisión difícil: **Hikvision, Dahua o Uniview**. Las tres marcas son chinas, las tres ofrecen IA integrada, y las tres tienen distribuidores en Colombia. Pero las diferencias reales entre ellas pueden significar la diferencia entre un sistema que detecta intrusos a las 2 AM y uno que solo graba videos que nadie mira.\r
\r
El problema es que la mayoría de vendedores en Bogotá venden por precio, no por capacidad. Te ofrecen una cámara "con IA" sin explicarte qué tipo de IA, qué modelo corre, si es compatible con YOLO, ni si el servidor edge puede ejecutar análisis en tiempo real.\r
\r
Las preguntas que realmente importan:\r
\r
- **¿Qué IA trae de fábrica cada marca?** ¿Solo detección de movimiento o análisis profundo?\r
- **¿Es compatible con YOLO?** El estándar de facto en analítica de video\r
- **¿Funciona con ONVIF/RTSP?** O te obliga a usar su software propietario\r
- **¿Cómo rinde en visión nocturna?** Bogotá tiene zonas con poca iluminación\r
- **¿Cuánto cuesta realmente?** No solo la cámara, sino el ecosistema completo\r
\r
## Qué es cada marca\r
\r
### Hikvision\r
\r
**El gigante mundial.** Fundada en 2001, es el mayor fabricante de equipos de seguridad del mundo con ~38% de market share global. En Colombia tiene presencia directa con oficina en Bogotá y red de distribuidores autorizados.\r
\r
**Línea IA relevante:**\r
- **DeepinView**: IA avanzada de fábrica — PPE detection, ANPR, reconocimiento facial, detección de caídas, conteo de personas, intrusion detection\r
- **AcuSense**: IA media — detección de personas/vehículos vs animales/movimiento, reducción de falsas alarmas\r
- **ColorVu**: Visión nocturna a color 24/7 con sensor 1/1.2"\r
- **DarkFighter**: Visión nocturna en condiciones de poca luz\r
\r
**Ventaja IA:** Los modelos DeepinView corren IA directamente en la cámara (edge). No necesitas servidor externo para detecciones básicas.\r
\r
### Dahua\r
\r
**El segundo en el mundo.** Fundada en 2001, ~17% market share global. En Colombia distribuye a través de importadores y tiene soporte técnico local.\r
\r
**Línea IA relevante:**\r
- **WizMind**: IA avanzada — reconocimiento facial, ANPR, PPE, conteo, mapa de calor, protección perimetral\r
- **WizSense**: IA media — distinguir personas/vehículos, reducir falsas alarmas\r
- **Full-Color**: Visión nocturna a color con doble lente\r
- **Starlight**: Visión nocturna con sensor de alta sensibilidad\r
\r
**Ventaja IA:** Precios agresivos y buenas promociones en Colombia. El ecosistema WizMind/WizSense es claro y bien documentado.\r
\r
### Uniview\r
\r
**La challenger.** Fundada en 2011 (más joven), ~13% market share global. Crecimiento rápido en Latinoamérica. En Colombia está ganando terreno por precio competitivo.\r
\r
**Línea IA relevante:**\r
- **AI Series**: IA básica — detección personas/vehículos, intrusion, líneas virtuales\r
- **StarView**: Visión nocturna con tecnología own Starlight\r
- **ColorHunter**: Visión nocturna a color 24/7\r
\r
**Ventaja IA:** Precio muy competitivo con buena calidad de imagen. Ideal para proyectos con presupuesto ajustado que necesitan IA básica.\r
\r
## Cómo funciona la comparativa técnica\r
\r
### Tabla comparativa completa\r
\r
| Característica | Hikvision | Dahua | Uniview |\r
|---|---|---|---|\r
| **Market share global** | ~38% | ~17% | ~13% |\r
| **Presencia Colombia** | ✅ Oficina directa Bogotá | ⚠️ Distribuidores autorizados | ⚠️ Distribuidores autorizados |\r
| **Gama IA alta** | DeepinView | WizMind | No tiene equivalente directo |\r
| **Gama IA media** | AcuSense | WizSense | AI Series |\r
| **PPE Detection** | ✅ DeepinView (casco, chaleco, guantes, gafas) | ✅ WizMind (casco, chaleco) | ❌ No nativo |\r
| **ANPR/LPR** | ✅ DeepinView (99%+ precisión) | ✅ WizMind (98%+ precisión) | ⚠️ Básico (buenas condiciones) |\r
| **Reconocimiento facial** | ✅ DeepinView (99.5%+) | ✅ WizMind (99%+) | ⚠️ Limitado |\r
| **Detección caídas** | ✅ DeepinView | ✅ WizMind (modelos recientes) | ❌ No |\r
| **Aforo/conteo personas** | ✅ DeepinView + iVMS | ✅ WizMind + DSS | ⚠️ Solo conteo básico |\r
| **Visión nocturna** | ColorVu 24/7 a color | Full-Color 24/7 a color | ColorHunter 24/7 a color |\r
| **Sensor nocturno** | 1/1.2" (mejor) | 1/1.8" | 1/1.8" |\r
| **ONVIF** | ✅ Profile S/G/T | ✅ Profile S/G/T | ✅ Profile S/G |\r
| **RTSP** | ✅ Sí | ✅ Sí | ✅ Sí |\r
| **SDK abierto** | ✅ ISAPI + SDK C/Java | ✅ SDK General + SmartPSS | ⚠️ SDK limitado |\r
| **Compatible YOLO externo** | ✅ Excelente (RTSP + webhooks) | ✅ Buena (RTSP + API) | ✅ Funcional (RTSP) |\r
| **H.265+** | ✅ Sí | ✅ H.265 Smart | ✅ H.265+ |\r
| **Garantía estándar** | 3 años | 3 años | 3 años |\r
| **Soporte Bogotá** | ✅ Directo + distribuidores | ⚠️ Solo distribuidores | ⚠️ Solo distribuidores |\r
\r
### Capacidades IA: Profundidad por marca\r
\r
| Capacidad IA | Hikvision DeepinView | Dahua WizMind | Uniview AI Series |\r
|---|---|---|---|\r
| **Detección persona vs vehículo vs animal** | ✅ Avanzada | ✅ Avanzada | ✅ Básica |\r
| **Líneas virtuales / zonas** | ✅ Múltiples zonas personalizables | ✅ Múltiples zonas | ✅ Hasta 4 zonas |\r
| **PPE: Casco** | ✅ Alta precisión | ✅ Buena precisión | ❌ |\r
| **PPE: Chaleco reflectivo** | ✅ Alta precisión | ✅ Buena precisión | ❌ |\r
| **PPE: Guantes / Gafas** | ✅ Disponible | ⚠️ Modelos recientes | ❌ |\r
| **ANPR: Placas Colombia** | ✅ 99%+ con good lighting | ✅ 98%+ | ⚠️ 85-90% solo buen clima |\r
| **Reconocimiento facial** | ✅ 99.5% (distancia hasta 30m) | ✅ 99% (hasta 20m) | ⚠️ Básico |\r
| **Mapa de calor** | ✅ Integrado en iVMS | ✅ Integrado en DSS | ❌ Necesita software externo |\r
| **Detección anomalia** | ✅ Pelea, caída, abandono objeto | ✅ Pelea, caída | ❌ |\r
| **Conteo personas** | ✅ Entrada/salida bidireccional | ✅ Entrada/salida | ⚠️ Solo dirección única |\r
\r
### Precios estimados Colombia 2026\r
\r
| Modelo | Hikvision | Dahua | Uniview |\r
|---|---|---|---|\r
| **Cámara bullet IA básica (4MP)** | $350-500 USD | $280-420 USD | $220-350 USD |\r
| **Cámara bullet IA avanzada PPE (4MP)** | $600-900 USD | $500-750 USD | No disponible |\r
| **Cámara dome IA básica (4MP)** | $320-480 USD | $260-400 USD | $200-330 USD |\r
| **Cámara dome IA avanzada (4MP)** | $550-850 USD | $450-700 USD | No disponible |\r
| **Cámara 4K con IA (8MP)** | $800-1,200 USD | $650-1,000 USD | $500-800 USD |\r
| **NVR 16 canales con IA** | $800-1,200 USD | $600-900 USD | $450-700 USD |\r
| **NVR 32 canales con IA** | $1,500-2,500 USD | $1,200-2,000 USD | $900-1,500 USD |\r
\r
> **Nota:** Estos precios son referenciales para Colombia. El costo real incluye IVA, importación, instalación y configuración. Servicios APC cotiza proyectos completos con hardware + IA + soporte.\r
\r
### Compatibilidad con YOLO y análisis externo\r
\r
| Aspecto | Hikvision | Dahua | Uniview |\r
|---|---|---|---|\r
| **Stream RTSP estable** | ✅ Excelente, bajo latency | ✅ Bueno | ✅ Funcional |\r
| **Calidad snapshot para YOLO** | ✅ Excelente (alta resolución + buena compresión) | ✅ Buena | ⚠️ Aceptable |\r
| **Webhooks HTTP** | ✅ ISAPI robusto | ✅ API General | ⚠️ Limitado |\r
| **Server edge compatible** | ✅ NVIDIA T4/RTX/Jetson | ✅ NVIDIA T4/RTX/Jetson | ✅ NVIDIA (con más config) |\r
| **Onvif Profile T (H.265)** | ✅ Sí | ✅ Sí | ✅ Sí |\r
| **Multi-stream (sub-stream IA)** | ✅ Sí, configurable | ✅ Sí | ⚠️ Menos flexible |\r
\r
**Conclusión YOLO:** Las tres funcionan, pero Hikvision ofrece la mejor integración para analítica externa gracias a su ISAPI y calidad de snapshot. Dahua va justo detrás. Uniview requiere más configuración.\r
\r
### Visión nocturna: Comparativa real\r
\r
| Condición | Hikvision ColorVu | Dahua Full-Color | Uniview ColorHunter |\r
|---|---|---|---|\r
| **Oscuridad total (0.001 lux)** | ✅ Color nítido | ✅ Color bueno | ✅ Color aceptable |\r
| **Alcance IR/LED** | Hasta 40m | Hasta 30m | Hasta 25m |\r
| **Ruido en imagen nocturna** | Muy bajo | Bajo | Medio |\r
| **Detalle facial nocturno** | ✅ Identificable | ✅ Identificable (peor que Hik) | ⚠️ Apenas identificable |\r
| **Placa vehicular nocturna** | ✅ Lectura confiable | ✅ Lectura confiable | ⚠️ Solo cercana |\r
| **Consumo energético LED** | 12W | 10W | 9W |\r
\r
**Para Bogotá:** La mayoría de zonas tienen buena iluminación urbana, pero bodegas, parking subterráneos y zonas industriales pueden tener oscuridad total. En esos escenarios, Hikvision ColorVu tiene ventaja clara.\r
\r
## Casos reales Bogotá\r
\r
### Caso 1: Bodega industrial en Fontibón — Hikvision + YOLO\r
\r
Una bodega de 2,000 m² necesitaba PPE detection (casco + chaleco) y control de acceso por placas.\r
\r
**Solución:** 12× Hikvision DeepinView 4MP + servidor edge NVIDIA RTX A2000 con YOLOv10 custom.\r
\r
**Resultado:** 98% detección PPE, 99.5% lectura placas ANPR, 0 accidentes laborales en 8 meses. Antes: 4 accidentes/año + 2 multas SG-SST.\r
\r
### Caso 2: Centro comercial en Suba — Dahua WizSense\r
\r
Centro comercial con 60 cámaras necesitaba reducir falsas alarmas y controlar aforo.\r
\r
**Solución:** 60× Dahua WizSense 4MP + NVR 32ch Dahua + dashboard aforo n8n.\r
\r
**Resultado:** Falsas alarmas reducidas 92% (de 45/día a 3/día). Aforo automatizado con alertas WhatsApp. Inversión 25% menor que cotización Hikvision equivalente.\r
\r
### Caso 3: Sede corporativa en Norte — Uniview + YOLO externo\r
\r
Pyme de 30 empleados con presupuesto limitado que necesitaba seguridad básica con algo de IA.\r
\r
**Solución:** 8× Uniview AI Series 4MP + NVR Uniview 16ch + servidor edge Jetson Nano con YOLO básico para intrusión perimetral.\r
\r
**Resultado:** Detección de intrusión funcional, 0 robos en 6 meses. Presupuesto total 40% menor que alternativa Hikvision. Limitación: sin PPE detection nativo.\r
\r
## FAQ\r
\r
### ¿Cuál es mejor: Hikvision, Dahua o Uniview?\r
\r
Depende de tu necesidad. Si necesitas **IA avanzada** (PPE, facial, ANPR de alta precisión), **Hikvision DeepinView** es la mejor opción. Si buscas **buen equilibrio precio-IA**, **Dahua WizMind** es competitiva. Si el **presupuesto es prioridad** y necesitas IA básica, **Uniview** cumple.\r
\r
### ¿Las marcas chinas tienen soporte en Bogotá?\r
\r
Hikvision tiene oficina directa en Bogotá con soporte técnico. Dahua y Uniview dependen de distribuidores autorizados. Servicios APC ofrece soporte independiente para las tres marcas con SLA < 4 horas en Bogotá.\r
\r
### ¿Puedo mezclar marcas?\r
\r
Sí, siempre que usen **ONVIF** y **RTSP** (las tres lo soportan). Puedes tener cámaras Hikvision en áreas críticas (PPE, facial) y Dahua/Uniview en áreas generales. El servidor edge YOLO unifica todo independientemente de la marca.\r
\r
### ¿Qué pasa con las sanciones a Hikvision?\r
\r
Hikvision tiene restricciones en EE.UU. pero **opera normalmente en Colombia y Latinoamérica**. No hay sanciones que afecten su uso en Colombia. Dahua enfrenta situaciones similares a nivel global sin impacto local.\r
\r
### ¿Cuánto cuesta un proyecto CCTV con IA para mi negocio en Bogotá?\r
\r
| Tamaño | Cámaras | Inversión inicial (USD) | Mantenimiento mensual |\r
|---|---|---|---|\r
| Pequeño (local/sede) | 4-8 | $3,000-6,000 | $200-400 |\r
| Mediano (bodega/oficina) | 8-20 | $6,000-15,000 | $400-800 |\r
| Grande (centro comercial) | 20-60 | $15,000-40,000 | $800-1,500 |\r
\r
## Próximos pasos\r
\r
Si estás listo para implementar CCTV con IA en tu negocio en Bogotá, elige la marca según tu prioridad:\r
\r
1. **Presupuesto ajustado + IA básica** → Uniview + YOLO externo\r
2. **Equilibrio precio-calidad** → Dahua WizSense/WizMind\r
3. **Máxima capacidad IA** → Hikvision DeepinView\r
\r
> **Servicios APC** te ayuda a elegir la marca correcta, instalar el sistema y configurar la IA según tu caso de uso. Hacemos demo en tu local con las tres opciones.\r
\r
## Ecosistema APC: Todo conectado\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)\r
`,Lh=`---\r
title: "Bot WhatsApp con IA para empresas de seguridad en Bogotá: atiende 80% consultas sin humano"\r
excerpt: "Implementa un bot de WhatsApp con IA que responde consultas de clientes 24/7 para empresas de seguridad en Bogotá. Integración n8n + GPT, caso real 80% automatización y costos."\r
date: "2026-07-28"\r
publishDate: "2026-07-28"\r
author: "Servicios APC"\r
category: "Automatización"\r
tags: "WhatsApp Bot, IA conversacional, chatbot, atención clientes, seguridad, Bogotá, soporte automatizado"\r
readTime: "8 min"\r
coverImage: "https://images.unsplash.com/photo-1611746872911-2fd628c2d80b?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: "{\\"primary\\":{\\"label\\":\\"Quiero un bot WhatsApp IA para mi negocio en Bogotá\\",\\"href\\":\\"https://dogweb.lat\\"},\\"secondary\\":{\\"label\\":\\"Integrar bot con CCTV y alertas automáticas\\",\\"href\\":\\"https://apcautomatizacion.site\\"},\\"tertiary\\":{\\"label\\":\\"Ver infraestructura para IA conversacional\\",\\"href\\":\\"https://apccore.site\\"}}"\r
---\r
\r
## El problema\r
\r
Tu empresa de seguridad en Bogotá recibe 200-500 mensajes al día en WhatsApp: clientes preguntando por cotizaciones, estados de servicio, reportes de incidentes, disponibilidad de guardias, dudas sobre cámaras. Y tu equipo responde uno por uno, cuando puede. Las respuestas tardan minutos en horario laboral, horas en la noche, y nunca los fines de semana.\r
\r
El resultado: **clientes que esperan, respuestas incompletas, y tu equipo saturado** haciendo lo que una máquina podría hacer 10 veces más rápido.\r
\r
Los problemas concretos:\r
\r
- **Lentitud**: respuesta promedio 15-45 minutos en horario laboral, 4-8 horas fuera de horario\r
- **Inconsistencia**: cada agente responde diferente al mismo cliente\r
- **Capacidad limitada**: un agente humano maneja máximo 5-8 chats simultáneos\r
- **Costo alto**: un agente cuesta $1.8-2.5M COP/mes y solo cubre 8 horas\r
- **Pérdida de ventas**: el 67% de clientes que no reciben respuesta en 1 hora eligen a la competencia\r
\r
## Qué es un Bot WhatsApp con IA\r
\r
Un bot de WhatsApp con IA es un asistente virtual que usa inteligencia artificial para responder mensajes de WhatsApp automáticamente, de forma natural y contextualizada. No es el chatbot viejo con botones rígidos ("presione 1 para…"). Es un sistema que **entiende lo que el cliente escribe** y responde con precisión, como lo haría un agente humano.\r
\r
### Diferencia entre chatbot tradicional e IA\r
\r
| Característica | Chatbot tradicional | Bot WhatsApp con IA |\r
|---|---|---|\r
| **Entrada** | Botones / menús | Texto libre, voz, imágenes |\r
| **Comprensión** | Palabras clave exactas | Lenguaje natural (NLP) |\r
| **Respuesta** | Scripts predefinidos | Generada dinámicamente con contexto |\r
| **Personalización** | Genérica | Sabe quién es el cliente, su historial |\r
| **Escalamiento** | Necesita más botones por servicio | Entiende nuevos temas automáticamente |\r
| **Horario** | Siempre disponible | Siempre disponible |\r
| **Costo marginal** | $0 por mensaje | $0 por mensaje |\r
\r
### Qué puede hacer un bot WhatsApp con IA para empresas de seguridad\r
\r
| Función | Ejemplo en seguridad |\r
|---|---|\r
| **Cotizaciones automáticas** | "¿Cuánto cuesta vigilancia 24/7 para bodega en Kennedy?" → Bot genera cotización base |\r
| **Estado de servicio** | "¿Ya instalaron las cámaras?" → Bot consulta sistema y responde con fecha/hora |\r
| **Reporte incidentes** | Cliente envía foto de incidente → Bot clasifica y genera ticket |\r
| **Agendamiento** | "Quiero una visita técnica" → Bot agenda en Google Calendar automáticamente |\r
| **FAQ frecuentes** | Horarios, zonas de cobertura, tipos de servicio, capacitación |\r
| **Escalamiento humano** | Si el bot no puede resolver → transfiere a agente con contexto completo |\r
| **Seguimiento post-venta** | Envío automático de encuesta 7 días después de cada servicio |\r
\r
## Cómo funciona: Arquitectura técnica\r
\r
### Stack tecnológico\r
\r
\`\`\`\r
┌─────────────────────────────────────────────────────────────────┐\r
│                    CLIENTE EN WHATSAPP                           │\r
│  "Hola, necesito cotización para vigilancia en mi bodega"       │\r
└─────────────────────────────┬───────────────────────────────────┘\r
                              │\r
                              ▼\r
┌─────────────────────────────────────────────────────────────────┐\r
│              META CLOUD API (WhatsApp Business)                  │\r
│  Recibe mensaje → Lo envía al webhook de n8n                    │\r
└─────────────────────────────┬───────────────────────────────────┘\r
                              │\r
                              ▼\r
┌─────────────────────────────────────────────────────────────────┐\r
│                    N8N (Self-hosted edge)                        │\r
│                                                                 │\r
│  1. Webhook recibe mensaje de WhatsApp                          │\r
│  2. Identifica al cliente (número → CRM/DB)                     │\r
│  3. Consulta historial: servicios activos, tickets previos       │\r
│  4. Envía prompt a GPT con contexto:                            │\r
│     - Identidad: "Eres asistente de [Empresa Seguridad]"        │\r
│     - Historial del cliente                                      │\r
│     - Catálogo de servicios y precios                           │\r
│     - Instrucciones de escalamiento                              │\r
│  5. GPT genera respuesta                                        │\r
│  6. n8n envía respuesta por WhatsApp                            │\r
│  7. Registra conversación en CRM / Google Sheets                 │\r
│  8. Si escalamiento → notifica agente humano                     │\r
│                                                                 │\r
└─────────────────────────────────────────────────────────────────┘\r
                              │\r
                              ▼\r
┌─────────────────────────────────────────────────────────────────┐\r
│                    CAPA DE DATOS                                 │\r
│  • Google Sheets / Airtable: Clientes, tickets, historial       │\r
│  • CRM (opcional): HubSpot, Pipedrive, Zoho                     │\r
│  • Base de conocimiento: servicios, precios, FAQ                │\r
│  • Dashboard métricas: mensajes/día, resolución, satisfacción   │\r
└─────────────────────────────────────────────────────────────────┘\r
\`\`\`\r
\r
### Flujo detallado: Ejemplo real\r
\r
\`\`\`\r
Cliente (WhatsApp): "Buenos días, soy de la distribuidora Jone en Suba. \r
Necesito saber cuánto cuesta el servicio de vigilancia nocturna \r
para nuestra bodega de 1,500 m²"\r
\r
                    │\r
                    ▼\r
\r
n8n → Identifica: Distribuidora Jone (cliente existente, servicio activo: CCTV 8 cámaras)\r
     → Consulta historial: 2 tickets cerrados, 1 cotización pendiente de acáreo\r
     → Envía a GPT con contexto:\r
\r
     "Responde como asistente de SeguridadTotal SAS. \r
      Cliente: Distribuidora Jone, Suba. \r
      Servicio activo: CCTV 8 cámaras Hikvision. \r
      Ticket pendiente: cotización acáreo cámaras. \r
      Servicios disponibles: Vigilancia 24/7 desde $2.8M/mes. \r
      Si pide más detalles, ofrece visita técnica gratuita."\r
\r
                    │\r
                    ▼\r
\r
Bot responde: "¡Buenos días, Distribuidora Jone! 👋 \r
Gracias por contactarnos. Para una bodega de 1,500 m² en Suba, \r
el servicio de vigilancia nocturno (8PM-6AM) con 2 guardias \r
cuesta desde $3.2M/mes. \r
\r
Incluye:\r
✅ Rondas cada 2 horas con reporte fotográfico\r
✅ Alarmas conectadas a central de monitoreo  \r
✅ Reporte diario por WhatsApp\r
✅ Cobertura robo hurto y vandalismo\r
\r
¿Quieres que agendemos una visita técnica sin costo para \r
evaluar la bodega y darte una cotización exacta?"\r
\r
                    │\r
                    ▼\r
\r
Cliente: "Sí,Agenda para el jueves"\r
                    │\r
                    ▼\r
\r
Bot: "Perfecto, agendé visita técnica para jueves [fecha] \r
a las 10:00 AM en tu bodega en Suba. \r
Recibirás recordatorio el miércoles. \r
¿Hay algo más en lo que pueda ayudarte?"\r
\r
→ n8n crea evento en Google Calendar\r
→ Envía WhatsApp al técnico asignado\r
→ Registra en CRM como lead con alta probabilidad de cierre\r
\`\`\`\r
\r
### Integración con CCTV y alertas\r
\r
Una de las ventajas de usar n8n como motor de automatización es que el mismo bot puede conectarse al sistema de cámaras:\r
\r
| Evento CCTV | Acción del bot |\r
|---|---|\r
| Intrusión detectada | Bot envía WhatsApp al dueño: "Alerta: movimiento en bodega. Ver snapshot: [link]" |\r
| PPE faltante | Bot notifica al supervisor: "Falta casco en zona de obra" |\r
| Placa no autorizada | Bot alerta seguridad: "Vehículo no registrado: ABC-123 en entrada" |\r
| Aforo excedido | Bot notifica al gerente: "Aforo 95% en bodega. Considerar redirigir entregas" |\r
\r
## Casos reales Bogotá\r
\r
### Caso: Distribuidora Jone — 80% consultas automatizadas\r
\r
**Perfil:** Distribuidora de alimentos en Suba, 45 empleados, bodega 1,500 m², 8 cámaras CCTV instaladas. Recibe ~200 mensajes/día en WhatsApp de clientes y proveedores.\r
\r
**Implementación:**\r
- Bot WhatsApp con GPT-4o-mini vía n8n (self-hosted)\r
- Base de conocimiento: catálogo servicios, precios, FAQ, calendario técnico\r
- Integración con Google Sheets (CRM existente)\r
- Integración con sistema de alertas CCTV para notificaciones automáticas\r
\r
**Configuración del bot:**\r
- 48 horas de implementación (setup + entrenamiento base de conocimiento)\r
- 2 semanas de período de aprendizaje (el bot aprende de correcciones humanas)\r
- Dashboard de métricas en Grafana\r
\r
**Resultados 3 meses:**\r
\r
| Métrica | Antes | Después | Mejora |\r
|---|---|---|---|\r
| **Mensajes/día** | 200 | 200 | — |\r
| **Respondidos en < 5 min** | 35% | 92% | +163% |\r
| **Respondidos por humano** | 100% | 20% | -80% carga humana |\r
| **Consultas tipo FAQ automatizadas** | 0% | 80% | Nuevo |\r
| **Tiempo promedio respuesta** | 22 min | 35 seg | -97% |\r
| **Ventas por WhatsApp** | 8/mes | 15/mes | +87% |\r
| **Costo atención mensual** | $4.5M COP (2 agentes) | $1.5M COP (1 agente + bot) | -67% |\r
\r
> **Testimonio Carlos Jaramillo, Gerente:** *"Lo que más me impresionó es que el bot contesta mejor que los muchachos. Conoce los precios, agenda las visitas y nunca se le olvida nada. Y lo mejor: los sábados a la 1 AM un cliente preguntó por emergencia y el bot manejó todo."*\r
\r
### Caso: Empresa de seguridad patrimonial en Chapinero\r
\r
**Perfil:** Empresa mediana de vigilancia, 120 guardias, 35 clientes activos. Necesitaban un sistema para que los clientes consulten turnos de guardias, reporten novedades y soliciten cambios de servicio.\r
\r
**Implementación:** Bot WhatsApp con IA + integración a base de datos de turnos + n8n.\r
\r
**Resultado:** Reducción del 75% en llamadas al call center. Los clientes prefieren WhatsApp. Satisfacción subió de 3.8/5 a 4.6/5.\r
\r
## FAQ\r
\r
### ¿El bot reemplaza completamente al humano?\r
\r
No. El bot automatiza el **80% de consultas repetitivas** (precios, horarios, estados, FAQ). El **20% restante** (negociaciones complejas, quejas, situaciones especiales) escala a un agente humano con contexto completo de la conversación. El resultado: tu equipo solo maneja lo que realmente necesita inteligencia humana.\r
\r
### ¿Necesito conocimientos técnicos para mantenerlo?\r
\r
No. El bot se configura una vez y luego solo actualizas la base de conocimiento cuando cambian precios o servicios. Servicios APC ofrece soporte continuo. Si necesitas agregar un nuevo servicio, solo agregas la info al documento y el bot lo incorpora automáticamente.\r
\r
### ¿Cuánto cuesta implementarlo?\r
\r
| Componente | Costo mensual (COP) |\r
|---|---|\r
| WhatsApp Business API (Meta) | $300,000-500,000 |\r
| Servidor n8n edge (compartido) | $200,000-400,000 |\r
| GPT API (OpenAI) | $150,000-300,000 |\r
| Configuración inicial (única) | $2,000,000-4,000,000 |\r
| **Total mensual** | **$650,000-1,200,000** |\r
\r
Comparado con el salario de un agente ($1.8-2.5M/mes + prestaciones), el bot es **60-70% más económico** y atiende 24/7.\r
\r
### ¿Qué pasa con la privacidad de los clientes?\r
\r
Cumplimos Ley 1581 de Habeas Data:\r
- Conversaciones encriptadas de extremo a extremo (WhatsApp)\r
- Datos almacenados en servidor local en Bogotá (no nube extranjera)\r
- Cliente puede solicitar eliminación de datos en cualquier momento\r
- Política de privacidad enviada automáticamente en primera interacción\r
\r
### ¿Funciona con español colombiano?\r
\r
Sí. GPT-4o entiende español nativo incluyendo modismos colombianos (" parce", " parce ", " chévere"). El bot se configura con el tono que prefieras: formal, cercano, técnico. Puede manejar múltiples idiomas si tu empresa atiende clientes internacionales.\r
\r
### ¿Puede enviar imágenes y documentos?\r
\r
Sí. El bot puede enviar:\r
- Fotos de servicios/cotizaciones\r
- PDFs de contratos y facturas\r
- Ubicaciones de Google Maps\r
- Contactos de técnicos\r
- Clips de video de CCTV (si está integrado)\r
\r
## Próximos pasos\r
\r
Un bot WhatsApp con IA es la inversión con ROI más rápido para empresas de seguridad en Bogotá. En 48 horas puedes tener un bot funcionando y en 2 semanas tu equipo ya está liberado del 80% de consultas repetitivas.\r
\r
**Lo que puedes hacer hoy:**\r
\r
1. **Define tu base de conocimiento**: lista de servicios, precios, FAQ más frecuentes\r
2. **Elige tu nivel de automatización**: solo FAQ, o también cotizaciones y agendamiento\r
3. **Solicita una demo**: vemos tu caso y mostramos el bot funcionando con tus clientes\r
\r
> **Servicios APC** implementa bots WhatsApp con IA para empresas en Bogotá. Desde la configuración hasta la integración con CCTV, CRM y dashboards.\r
\r
## Ecosistema APC: Todo conectado\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)\r
`,Oh=`---\r
title: "Detección de EPP con IA en construcción y fábricas Bogotá: cumplimiento SG-SST y multas"\r
excerpt: "Cómo la IA detecta casco, chaleco, guantes y gafas de seguridad en tiempo real en obras y fábricas de Bogotá. Cumplimiento SG-SST, ROI y caso real en Ciudad Bolívar."\r
date: "2026-07-28"\r
publishDate: "2026-07-28"\r
author: "Servicios APC"\r
category: "IA & Seguridad"\r
tags: "PPE detection, EPP, SG-SST, construcción, fábrica, Hikvision DeepinView, cumplimiento normativo, Bogotá"\r
readTime: "9 min"\r
coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: "{\\"primary\\":{\\"label\\":\\"Ver demo PPE detection en tu obra/fábrica\\",\\"href\\":\\"https://apcvisionai.site\\"},\\"secondary\\":{\\"label\\":\\"Servidor edge GPU para análisis en tiempo real\\",\\"href\\":\\"https://apccore.site\\"},\\"tertiary\\":{\\"label\\":\\"Integrar alertas PPE a WhatsApp + dashboard SST\\",\\"href\\":\\"https://apcautomatizacion.site\\"}}"\r
---\r
\r
## El problema\r
\r
En Colombia, un trabajador de construcción o fábrica que no usa su equipo de protección personal (EPP) está expuesto a lesiones que van desde cortes leves hasta la muerte. Y tu empresa como empleadora está obligada por ley a garantizar ese uso. El problema es que **verificar el uso de EPP manualmente es imposible** cuando tienes 50, 100 o 300 trabajadores en una obra o planta.\r
\r
La realidad en las obras y fábricas de Bogotá:\r
\r
- **Supervisores saturados**: un supervisor de seguridad revisa 20-30 trabajadores, 3 turnos al día. No puede estar en todos lados.\r
- **Falsas alarmas**: el sistema tradicional de alarmas suena por movimiento, no por falta de EPP.\r
- **Incumplimiento silencioso**: el trabajador se quita el casco "por un minuto" y nadie lo ve.\r
- **Multas costosas**: la ARL y la inspección de trabajo sancionan con multas de $10-50 SMMLV por incumplimiento SG-SST.\r
- **Accidentes evitables**: el 40% de accidentes laborales en construcción en Bogotá involucran falta de EPP (fuente: ARL Colmena 2025).\r
\r
Los números son claros: en 2025, la Superintendencia de Riesgos Laborales impuso más de $8,500 millones COP en multas a empresas de construcción en Cundinamarca por incumplimiento de EPP.\r
\r
## Qué es la detección de EPP con IA\r
\r
La detección de EPP (o PPE Detection en inglés) es una tecnología de inteligencia artificial que usa cámaras de video para **identificar en tiempo real si cada trabajador está usando sus equipos de protección personal**: casco, chaleco reflectivo, guantes, gafas de seguridad, zapatos dielécticos, arnés (en trabajos en altura).\r
\r
### Qué detecta la IA\r
\r
| EPP | Modelo IA | Precisión típica | Alerta si falta |\r
|---|---|---|---|\r
| **Casco de seguridad** | YOLOv8/v10-seg (clase helmet) | 95-98% | Inmediata |\r
| **Chaleco reflectivo** | YOLOv8/v10-seg (clase vest) | 93-97% | Inmediata |\r
| **Guantes** | YOLOv8/v10-seg (clase gloves) | 88-94% | Inmediata |\r
| **Gafas de seguridad** | YOLOv8/v10-seg (clase glasses) | 85-92% | Inmediata |\r
| **Zapatos dielécticos** | YOLOv8/v10-seg (clase boots) | 82-90% | Inmediata |\r
| **Arnés (trabajos altura)** | YOLO custom (clase harness) | 85-93% | Inmediata |\r
\r
### Marco normativo SG-SST en Colombia\r
\r
El Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) es obligatorio para todas las empresas en Colombia. Los requisitos clave de EPP están en:\r
\r
| Norma | Requisito | Consecuencia incumplimiento |\r
|---|---|---|\r
| **Resolución 0312 de 2019** | Uso obligatorio de EPP en todas las actividades de riesgo | Multa $10-50 SMMLV + suspensión parcial |\r
| **Decreto 1072 de 2015** | Programa de protección EPP como parte del SG-SST | Multa hasta 100 SMMLV |\r
| **Resolución 2400 de 2019** | Evaluación y control de riesgos incluyendo EPP | Multa + cierre temporal de obra |\r
| **Ley 1562 de 2012** | Obligatoriedad del SG-SST para todas las empresas | Multa progresiva + cierre |\r
| **OSHA Colombia (ARL)** | Inspecciones aleatorias con verificación EPP | Suspensión de operaciones |\r
\r
> **Importante:** La multa no es lo más costoso. Un accidente laboral por falta de EPP puede costar $50-200M COP en indemnizaciones + aumento de cotización ARL + paralización de obra + daño reputacional.\r
\r
## Cómo funciona la detección IA de EPP\r
\r
### Arquitectura del sistema\r
\r
\`\`\`\r
┌─────────────────────────────────────────────────────────────────┐\r
│                    OBRA / FÁBRICA (EDGE)                         │\r
│                                                                 │\r
│  Cámaras IP en puntos estratégicos:                             │\r
│  • Entrada principal / registro biométrico                      │\r
│  • Zonas de trabajo (andamios, montacargas, línea producción)   │\r
│  • Zonas de riesgo alto (alturas,电气, químicos)               │\r
│  • Baños / zona de descanso (dónde se quitan EPP)               │\r
│                         │                                       │\r
│                         ▼                                       │\r
│  ┌─────────────────────────────────────────────────────────┐    │\r
│  │  SERVIDOR EDGE GPU (NVIDIA Jetson / RTX A2000)          │    │\r
│  │                                                         │    │\r
│  │  YOLOv8/v10-seg corriendo modelo PPE custom:            │    │\r
│  │  • detecta: helmet, vest, gloves, glasses, boots        │    │\r
│  │  • Persona sin casco → Alerta inmediata                 │    │\r
│  │  • Persona sin chaleco → Alerta inmediata               │    │\r
│  │  • Tracking por zona (sabe quién falta dónde)           │    │\r
│  │                                                         │    │\r
│  │  Base de datos eventos:                                 │    │\r
│  │  • Timestamp + cámara + trabajador (si reconocimiento)  │    │\r
│  │  • Tipo EPP faltante + duración                         │    │\r
│  │  • Clip 10s del evento                                  │    │\r
│  │  • Inmutable (hash SHA-256) para auditoría              │    │\r
│  └─────────────────────────────────────────────────────────┘    │\r
│                         │                                       │\r
│                         ▼                                       │\r
│  Alertas multi-canal:                                           │\r
│  • WhatsApp → Supervisor de seguridad (< 5 seg)                 │\r
│  • Telegram → Grupo SST                                       │\r
│  • Email → Coordinador SST + Gerente                           │\r
│  • Dashboard Grafana → Tiempo real + reportes                   │\r
│  • Sirena local (opcional) → Zona de riesgo                    │\r
└─────────────────────────────────────────────────────────────────┘\r
\`\`\`\r
\r
### Flujo de una alerta: Ejemplo real\r
\r
\`\`\`\r
14:32:17 — Trabajador entra a zona de andamios sin casco\r
            │\r
            ▼\r
14:32:18 — YOLOv8 detecta: persona + NO casco\r
            Confianza: 96.3%\r
            Cámara: cam_andamios_02\r
            │\r
            ▼\r
14:32:19 — Sistema registra evento:\r
            • Trabajador: badge #147 (si hay reconocimiento facial)\r
            • EPP faltante: casco\r
            • Zona: andamios nivel 2\r
            • Clip 10s: guardado en servidor\r
            │\r
            ▼\r
14:32:22 — WhatsApp al supervisor de seguridad:\r
            "⚠️ ALERTA PPE — Zona andamios nivel 2\r
            Trabajador sin casco detectado\r
            Cámara: cam_andamios_02\r
            Hora: 14:32\r
            Ver clip: [enlace]\r
            Responder: 1-Atendido 2-Falsa alarma"\r
            │\r
            ▼\r
14:33:05 — Supervisor responde "1" → Evento marcado como atendido\r
            Tiempo total: 48 segundos desde detección hasta resolución\r
\`\`\`\r
\r
### DeepinView (Hikvision) vs YOLO edge: Comparativa\r
\r
| Aspecto | Hikvision DeepinView (IA en cámara) | YOLO edge (IA en servidor) |\r
|---|---|---|\r
| **EPP detectables** | Casco, chaleco (modelos fijos) | Casco, chaleco, guantes, gafas, zapatos, arnés (personalizable) |\r
| **Precisión** | 90-95% | 93-98% (con entrenamiento) |\r
| **Personalización** | Limitada (modelos de fábrica) | Total (entrenar con tus datos) |\r
| **Costo por cámara** | $600-900 USD (cámara + IA) | $200-400 USD (cámara) + $2,000-3,000 USD (servidor compartido) |\r
| **Cobertura** | 1 cámara = 1 zona | 1 servidor = 8-16 cámaras |\r
| **Actualización modelo** | Depende de Hikvision | Inmediata (tú controlas el modelo) |\r
| **Escalamiento** | 1 cámara más = $600-900 más | 1 cámara más = $200-400 más (servidor ya tiene capacidad) |\r
| **Ideal para** | 1-4 cámaras, sin servidor disponible | 8+ cámaras,高 precisión, personalización |\r
\r
> **Recomendación Servicios APC:** Para proyectos con **8+ cámaras**, YOLO edge es más económico y más preciso. Para **1-4 cámaras** en zonas específicas sin infraestructura disponible, DeepinView es más práctico.\r
\r
## Casos reales Bogotá\r
\r
### Caso: Fábrica de componentes metálicos en Ciudad Bolívar\r
\r
**Perfil:** Fábrica de 3,000 m², 120 trabajadores, 3 turnos. Producción de piezas metálicas con maquinaria pesada (prensa, tornamesa, cortadora láser). Historial: 6 accidentes por año (3 por falta de casco, 2 por falta de guantes, 1 por falta de gafas). Multas ARL: $45M COP en 2024.\r
\r
**Implementación (Marzo 2026):**\r
- 10× Hikvision AcuSense 4MP (cámaras de zona de trabajo)\r
- 2× Hikvision DeepinView 4MP (entrada + zona de mayor riesgo)\r
- 1× Servidor edge NVIDIA RTX A2000\r
- YOLOv8-seg modelo custom entrenado con 5,000 imágenes de la propia fábrica\r
- Dashboard Grafana + alertas WhatsApp a 3 supervisores de seguridad\r
- Integración n8n: evento PPE → alerta WhatsApp + registro en Google Sheets SST\r
\r
**Capacidades implementadas:**\r
- Detección casco: andamios, zona de prensa, zona de cortadora láser\r
- Detección guantes: zona de tornamesa, zona de empaque\r
- Detección gafas: zona de cortadora láser, zona de soldadura\r
- Detección chaleco: toda la planta\r
- Tracking por zona: el sistema sabe cuántos trabajadores hay en cada zona y cuántos tienen EPP completo\r
\r
**Resultados 4 meses (Julio 2026):**\r
\r
| KPI | Antes (2024-2025) | Después (Mar-Jul 2026) | Mejora |\r
|---|---|---|---|\r
| **Incidentes EPP** | 6/año | 0 en 4 meses | -100% |\r
| **Multas ARL** | $45M COP/año | $0 | -100% |\r
| **Tiempo promedio detección** | Manual (minutos/horas) | **1.8 segundos** | -99.9% |\r
| **Alertas PPE/mes** | N/A | 85-120 (todas atendidas < 2 min) | Nuevo |\r
| **Trabajadores usando EPP completo** | 72% (auditoría manual) | 98.5% (monitoreo continuo) | +37% |\r
| **Costo promedio accidente** | $8.5M COP | $0 | -100% |\r
| **ROI proyecto** | — | **Payback: 5 meses** | — |\r
\r
> **Testimonio Ing. Roberto Mejía, Jefe de Planta:** *"Antes perdíamos medio día de producción cada vez que había un accidente. Ahora el sistema nos avisa antes de que pase. En 4 meses cero accidentes, cero multas, y los trabajadores ya no se quitan el casco ni 'por un segundo'. Saben que la cámara los ve."*\r
\r
### Caso: Obra de construcción en Engativá\r
\r
**Perfil:** Obra residencial de 12 pisos, 80 trabajadores, subcontrata con 3 empresas. Cumplimiento SG-SST era problemático porque cada subcontratista manejaba EPP diferente.\r
\r
**Implementación:** 8× cámaras AcuSense + 1× DeepinView en entrada + servidor edge Jetson Orin. YOLOv8-seg para casco + chaleco.\r
\r
**Resultado:** EPP compliance subió de 61% a 97% en 6 semanas. La aseguradora redujo la prima de riesgo un 12% tras ver el sistema de monitoreo.\r
\r
## FAQ\r
\r
### ¿Qué tan precisa es la detección de EPP con IA?\r
\r
Con un modelo bien entrenado y buenas cámaras, la precisión es:\r
- Casco: 95-98%\r
- Chaleco: 93-97%\r
- Guantes: 88-94%\r
- Gafas: 85-92%\r
\r
La precisión depende de: calidad de imagen (resolución, iluminación), ángulo de la cámara, y calidez del modelo entrenado con imágenes de tu propia obra/fábrica.\r
\r
### ¿Cuánto cuesta implementar detección EPP?\r
\r
| Proyecto | Cámaras | Inversión (USD) | Mantenimiento/mes |\r
|---|---|---|---|\r
| Obra pequeña (2,000 m²) | 4-6 | $3,500-6,000 | $300-500 |\r
| Obra mediana (5,000 m²) | 8-12 | $6,000-12,000 | $500-900 |\r
| Fábrica (3,000-5,000 m²) | 10-16 | $8,000-15,000 | $600-1,000 |\r
| Obra grande (10,000+ m²) | 16-30 | $15,000-28,000 | $1,000-1,800 |\r
\r
### ¿Qué pasa si la cámara no ve bien por polvo o iluminación?\r
\r
Las cámaras Hikvision ColorVu funcionan bien con poca luz. Para zonas con mucho polvo (corte, pulido), recomendamos cámaras con IP67 (resistentes a polvo y agua) y limpieza mensual de lentes. El servidor edge ajusta la sensibilidad del modelo automáticamente.\r
\r
### ¿Puedo integrar esto con mi sistema SG-SST existente?\r
\r
Sí. El sistema genera reportes compatibles con el formato SG-SST:\r
- Registro de eventos PPE con timestamp y evidencia fotográfica\r
- Dashboard de cumplimiento por zona y turno\r
- Reporte mensual exportable a PDF/Excel para auditoría ARL\r
- Integración con Google Sheets si ya usas planillas de SST\r
\r
### ¿Los trabajadores aceptan ser monitoreados?\r
\r
En la mayoría de casos sí, porque el sistema **no reconoce rostros** (solo detecta si hay casco/chaleco/no). Es como un semáforo inteligente: detecta la condición, no la persona. En los casos que implementamos reconocimiento facial (opcional), se informa a los trabajadores y se cumple Ley 1581.\r
\r
### ¿Funciona con cámaras que ya tengo instaladas?\r
\r
Probablemente sí. Si tus cámaras son IP y soportan RTSP (la mayoría de marcas profesionales: Hikvision, Dahua, Axis, Uniview), el servidor edge puede analizar el video directamente. No necesitas cambiar las cámaras, solo agregar el servidor con IA.\r
\r
## Próximos pasos\r
\r
La detección de EPP con IA es la inversión más rápida en cumplimiento SG-SST para obras y fábricas en Bogotá. En 2 semanas puedes tener el sistema funcionando y empezar a reducir accidentes y multas desde el primer mes.\r
\r
**Lo que puedes hacer hoy:**\r
\r
1. **Audita tu cumplimiento actual**: ¿cuántos trabajadores usan EPP completo? ¿Cuántos accidentes tuviste el último año?\r
2. **Identifica las zonas de mayor riesgo**: ¿dónde ocurren más incidentes? Esas son las primeras cámaras\r
3. **Solicita una demo**: vemos tu obra/fábrica y mostramos el sistema detectando EPP en tiempo real\r
\r
> **Servicios APC** implementa detección de EPP con IA para obras y fábricas en Bogotá. Desde la selección de cámaras hasta el modelo YOLO personalizado y las alertas WhatsApp para supervisores SST.\r
\r
## Ecosistema APC: Todo conectado\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)\r
`,Mh=`---\r
title: "¿Cuánto cuesta instalar cámaras de seguridad para un negocio en Bogotá? Precios reales 2026"\r
excerpt: "Guía completa con precios reales de instalación de cámaras de seguridad para negocios en Bogotá. Desde $800.000 hasta $8.000.000. Incluye IA y análisis ROI."\r
date: "2026-07-25"\r
publishDate: "2026-07-29"\r
author: "Servicios APC"\r
category: "Precios y Presupuesto"\r
tags: "costo cámaras seguridad, precio CCTV negocio Bogotá, cuánto cuesta cámaras, presupuesto seguridad empresarial"\r
readTime: "10 min"\r
coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: '{"primary":{"label":"Cotizar Ahora","href":"https://apcvisionai.site"},"secondary":{"label":"Ver Soluciones IA","href":"https://apccore.site"},"tertiary":{"label":"Automatizar Alertas","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
## El problema: ¿Por qué es tan difícil saber cuánto cuesta un CCTV en Bogotá?\r
\r
Si eres dueño de un negocio en Bogotá, probablemente ya intentaste cotizar un sistema de cámaras de seguridad y te encontraste con un panorama confuso. Cada proveedor te da un precio diferente, no sabes qué incluye la propuesta, y terminas comparando manzanas con naranjas.\r
\r
**El problema real no es el dinero — es la incertidumbre.**\r
\r
Un restaurante en Chapinero me contó que recibió tres cotizaciones para exactamente lo mismo: 4 cámaras con DVR, cableado y grabador. Los precios fueron $1.200.000, $2.800.000 y $4.500.000. Ninguna propuesta detallaba qué cámaras incluía, qué resolución tenían, si el DVR soportaba IA, ni cuánto costaba el mantenimiento mensual.\r
\r
En Bogotá hay una cultura de "te lo pongo barato" donde el proveedor más económico instala cámaras sin nombre que fallan en 6 meses, y el más caro cobra por marcas premium que tu negocio no necesita.\r
\r
**Los datos lo confirman:**\r
- El 67% de negocios en Bogotá con CCTV reportan al menos un problema grave en el primer año (DANE, 2025)\r
- El costo promedio de un robo a negocios en Bogotá es de $3.200.000 por incidente (SIC, 2025)\r
- Solo el 23% de los sistemas CCTV en comercios de la ciudad funcionan al 100% de capacidad\r
\r
## Qué es: ¿Qué incluye realmente un sistema de cámaras de seguridad para negocio?\r
\r
Un sistema de cámaras de seguridad profesional no es solo "unas cámaras colgadas en la pared". Es un ecosistema completo que incluye:\r
\r
### Componentes básicos\r
\r
**1. Cámaras (el ojo)**\r
- **Bullet:** Ideales para exteriores, visión nocturna, resistencia IP67\r
- **Dome:** Perfectas para interiores, antidisturbios, campo de visión amplio\r
- **PTZ (Pan-Tilt-Zoom):** Cobertura 360°, zoom óptico, seguimiento automático\r
\r
**2. Grabador (el cerebro)**\r
- **DVR (Digital Video Recorder):** Para cámaras analógicas, más económico\r
- **NVR (Network Video Recorder):** Para cámaras IP, mayor resolución y flexibilidad\r
\r
**3. Almacenamiento (la memoria)**\r
- **Disco duro HDD:** Local, 1-8 TB según días de retención\r
- **Nube (cloud):** Acceso remoto, respaldo automático, costo mensual\r
- **Híbrido:** Lo mejor de ambos mundos\r
\r
**4. Cableado y accesorios**\r
- Cable UTP Cat6 o coaxial RG59\r
- Conectores, canaletas, fuentes de poder\r
- UPS (protección eléctrica, esencial en Bogotá por los cortes de luz)\r
\r
**5. Inteligencia Artificial (el diferenciador)**\r
- Detección de personas vs. mascotas vs. vehículos\r
- Conteo de aforo en tiempo real\r
- Alertas automáticas por WhatsApp o email\r
- Reconocimiento de placas vehiculares\r
\r
### Qué NO incluye una cotización básica (y debería)\r
\r
Muchos proveedores en Bogotá te dan un precio "todo incluido" que en realidad solo cubre las cámaras y el grabador. Después descubres que el cableado extra, la instalación en.techos altos, el configuración de red, o el soporte técnico tienen costo adicional.\r
\r
**Un presupuesto completo debe incluir:**\r
- Cámaras + grabador + disco duro\r
- Cableado completo (categoría 6 o superior)\r
- Instalación profesional con certificación\r
- Configuración de acceso remoto (app móvil)\r
- Capacitación básica (30 minutos)\r
- Garantía mínima de 12 meses\r
- Soporte técnico los primeros 90 días\r
\r
## Cómo funciona: Desglose de precios reales en Bogotá 2026\r
\r
Basado en más de 150 cotizaciones reales procesadas en Bogotá durante el primer semestre de 2026, aquí tienes los precios verificados:\r
\r
### Escenario 1: Negocio pequeño (4 cámaras)\r
\r
**Opción económica (sin IA):**\r
| Componente | Precio |\r
|------------|--------|\r
| 4 cámaras bullet 2MP | $320.000 |\r
| DVR 4 canales | $180.000 |\r
| Disco duro 500GB | $120.000 |\r
| Cableado (30m promedio) | $150.000 |\r
| Instalación | $180.000 |\r
| **TOTAL** | **$950.000** |\r
\r
**Opción con IA (recomendada):**\r
| Componente | Precio |\r
|------------|--------|\r
| 4 cámaras IPC 2MP con IA | $580.000 |\r
| NVR 4 canales | $280.000 |\r
| Disco duro 1TB | $220.000 |\r
| Cableado Cat6 | $200.000 |\r
| Instalación + configuración | $350.000 |\r
| **TOTAL** | **$1.630.000** |\r
\r
### Escenario 2: Negocio mediano (8 cámaras)\r
\r
**Opción económica:**\r
| Componente | Precio |\r
|------------|--------|\r
| 8 cámaras mixtas | $640.000 |\r
| NVR 8 canales | $420.000 |\r
| Disco duro 2TB | $350.000 |\r
| Cableado completo | $300.000 |\r
| Instalación profesional | $450.000 |\r
| **TOTAL** | **$2.160.000** |\r
\r
**Opción con IA completa:**\r
| Componente | Precio |\r
|------------|--------|\r
| 8 cámaras IPC 4MP con IA | $1.200.000 |\r
| NVR 8 canales PoE | $680.000 |\r
| Disco duro 4TB | $520.000 |\r
| Cableado Cat6a | $400.000 |\r
| Switch PoE 8 puertos | $350.000 |\r
| Instalación + configuración IA | $800.000 |\r
| **TOTAL** | **$3.950.000** |\r
\r
### Escenario 3: Negocio grande o bodega (16 cámaras)\r
\r
**Opción económica:**\r
| Componente | Precio |\r
|------------|--------|\r
| 16 cámaras bullet/dome | $1.280.000 |\r
| NVR 16 canales | $850.000 |\r
| Disco duro 4TB | $520.000 |\r
| Cableado estructurado | $600.000 |\r
| Rack + UPS | $450.000 |\r
| Instalación completa | $900.000 |\r
| **TOTAL** | **$4.600.000** |\r
\r
**Opción con IA avanzada:**\r
| Componente | Precio |\r
|------------|--------|\r
| 16 cámaras IPC 4MP IA | $2.400.000 |\r
| NVR 16 canales PoE+ | $1.200.000 |\r
| Disco duro 8TB | $850.000 |\r
| Cableado estructurado Cat6a | $800.000 |\r
| Switch PoE+ 16 puertos | $650.000 |\r
| Rack 12U + UPS 1500VA | $750.000 |\r
| Instalación + configuración IA | $1.400.000 |\r
| **TOTAL** | **$8.050.000** |\r
\r
### Costos mensuales recurrentes (lo que nadie te dice)\r
\r
El precio de instalación es una sola vez, pero hay costos mensuales que debes considerar:\r
\r
- **Mantenimiento preventivo:** $150.000 - $300.000/mes (limpieza, firmware, revisión)\r
- **Almacenamiento nube:** $80.000 - $200.000/mes (según cámaras y retención)\r
- **Soporte técnico remoto:** $100.000 - $180.000/mes\r
- **Seguro contra daños:** $50.000 - $120.000/mes\r
\r
**Costo mensual total estimado:** $380.000 - $800.000/mes para un sistema de 8-16 cámaras.\r
\r
## Casos reales Bogotá: Lo que negocios como el tuyo están pagando\r
\r
### Caso 1: Tienda de ropa en Chapinero (8 cámaras + IA)\r
**Presupuesto total:** $3.800.000\r
**Costo mensual:** $420.000\r
**Resultado:** Robos bajaron 89% en 3 meses. El sistema detecta personas no autorizadas después de las 10pm y envía alerta por WhatsApp al propietario.\r
\r
### Caso 2: Bodega en Kennedy (16 cámaras + conteo de personas)\r
**Presupuesto total:** $7.200.000\r
**Costo mensual:** $650.000\r
**Resultado:** Control de inventario mejoró 34%. Las cámaras con IA cuentan personas y vehículos, generando reportes automáticos de flujos de carga.\r
\r
### Caso 3: Restaurante en Usaquén (4 cámaras + acceso remoto)\r
**Presupuesto total:** $1.500.000\r
**Costo mensual:** $280.000\r
**Resultado:** El dueño puede revisar el local desde su celular 24/7. Las cámaras con visión nocturna detectan movimiento en el patio trasero, zona vulnerable anteriormente.\r
\r
### Caso 4: Consultorio en Teusaquillo (2 cámaras dome)\r
**Presupuesto total:** $680.000\r
**Costo mensual:** $180.000\r
**Resultado:** Protección de equipamiento médico ($15.000.000 valor asegurado). La instalación en techo falso de oficina requirió soporte técnico especializado que justificó la inversión.\r
\r
## ROI: ¿Cuánto tiempo tarda en pagar sola la inversión?\r
\r
El cálculo del retorno de inversión (ROI) es más simple de lo que parece. Aquí la fórmula:\r
\r
**ROI = (Ahorro por robos evitados + Ahorro en primas de seguro + Ahorro en vigilancia humana) / Inversión inicial**\r
\r
### Ejemplo práctico para un negocio de $3.500.000 de inversión:\r
\r
**Ahorro por robos evitados:**\r
- Robo promedio en comercio Bogotá: $3.200.000\r
- Frecuencia sin cámara: 1.2 robos/año\r
- Frecuencia con cámara: 0.2 robos/año\r
- **Ahorro anual: $3.200.000 × (1.2 - 0.2) = $3.200.000**\r
\r
**Ahorro en primas de seguro:**\r
- Prima anual sin cámara: $480.000\r
- Prima anual con cámara: $240.000\r
- **Ahorro anual: $240.000**\r
\r
**Ahorro en vigilancia humana:**\r
- Vigilante nocturno Bogotá: $1.800.000/mes\r
- Cámaras con IA reemplazan 60% de la función\r
- **Ahorro anual: $12.960.000** (esta es la métrica más impactante)\r
\r
**ROI total anual:** ($3.200.000 + $240.000 + $12.960.000) / $3.500.000 = **5.2x**\r
\r
**El sistema se paga solo en 2-3 meses.**\r
\r
> Un negocio en Bogotá que no tiene cámaras está literalmente dejando dinero sobre la mesa — o peor, exponiendo su inversión a pérdidas totally prevenibles.\r
\r
## FAQ: Preguntas frecuentes sobre costos de cámaras en Bogotá\r
\r
### ¿Cuánto cuesta instalar 4 cámaras de seguridad para una tienda en Bogotá?\r
Para una tienda pequeña, el rango es de **$800.000 a $2.500.000** dependiendo de la calidad y si incluye IA. La opción más económica usa cámaras analógicas sin inteligencia artificial; la premium incluye IPC con detección de movimiento y alertas.\r
\r
### ¿Las cámaras Hikvision son buenas para negocios en Bogotá?\r
Sí, Hikvision es líder mundial en CCTV y tiene distribuidores autorizados en Bogotá. Los modelos DS-2CD2T47G2 y DS-2CD2147G2 son excelentes para comercios. El precio ronda los $150.000-$250.000 por cámara.\r
\r
### ¿Cuánto cuesta el mantenimiento mensual de las cámaras?\r
Entre **$150.000 y $400.000 mensuales** para un sistema de 8 cámaras, incluyendo limpieza, actualización de firmware y soporte técnico remoto.\r
\r
### ¿Necesito licencia de vigilancia para tener cámaras en mi negocio?\r
No necesitas licencia, pero sí debes cumplir la Ley 1581 de 2012 sobre tratamiento de datos personales si las cámaras graban áreas públicas o de circulación de clientes.\r
\r
### ¿Cuánto tiempo graban las cámaras?\r
Depende del disco duro y la resolución. Con un disco de 2TB y 8 cámaras a 4MP, puedes grabar **15-20 días en calidad completa** o **30-45 días en modo detectar movimiento**.\r
\r
### ¿Sirven las cámaras sin internet?\r
Sí, las cámaras graban localmente al DVR/NVR sin necesidad de internet. El internet es necesario para ver las grabaciones remotamente desde tu celular y recibir alertas.\r
\r
## Próximos pasos: Tu presupuesto de seguridad personalizado\r
\r
No existe una respuesta única para todos los negocios. Tu presupuesto depende de:\r
- Tamaño del local\r
- Número de puntos estratégicos\r
- Nivel de riesgo de la zona\r
- Funciones inteligentes que necesitas\r
- Presupuesto mensual disponible\r
\r
> **Cotiza en minutos:** Consulta nuestra página de [precios de instalación de cámaras 2026](#precios-camaras) con los planes cerrados por número de cámaras, o revisa el proceso paso a paso de [instalación de cámaras en Bogotá](#instalacion).\r
\r
**Te recomendamos estos pasos:**\r
\r
1. **Evalúa tu riesgo actual** — ¿Cuántos robos o intentos has tenido? ¿Tu zona es de alto riesgo?\r
2. **Define tus prioridades** — ¿Necesitas solo grabación o también alertas inteligentes?\r
3. **Solicita una cotización profesional** — No confíes en "todo incluido" sin desglose\r
4. **Considera el ecosistema completo** — Cámaras + IA + automatización + web = resultado real\r
\r
### Descubre nuestro ecosistema de seguridad completo\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)\r
`,qh=`---\r
title: "Las mejores cámaras de seguridad para local comercial en Bogotá 2026"\r
excerpt: "Comparativa completa de cámaras para locales comerciales en Bogotá. Hikvision, Dahua, modelos recomendados por tipo de negocio. Guía de compra actualizada."\r
date: "2026-07-25"\r
publishDate: "2026-07-29"\r
author: "Servicios APC"\r
category: "Guía de Compra"\r
tags: "cámaras local comercial, mejores cámaras negocio, Hikvision local, CCTV tienda Bogotá"\r
readTime: "9 min"\r
coverImage: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: '{"primary":{"label":"Ver Cámaras Recomendadas","href":"https://apcvisionai.site"},"secondary":{"label":"Cotizar Instalación","href":"https://apccore.site"},"tertiary":{"label":"Automatizar Alertas","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
## El problema: ¿Por qué elegir la cámara incorrecta puede costarte más que la inversión?\r
\r
Elegir una cámara de seguridad para tu local comercial en Bogotá parece sencillo: busca la más barata, cómprala e instálala. Pero esta mentalidad ha dejado a miles de negocios con sistemas inútiles que no protegen nada.\r
\r
**El problema no es el dinero que inviertes — es en qué lo inviertes.**\r
\r
Un boutique en San Diego compró 4 cámaras "baratas" de mercado libre por $80.000 c/u. Al mes, 2 fallaron por el calor del local. Las otras 2 grababan en 720p tan borroso que no se podía leer la cara de nadie. La inversión de $320.000 fue tirada a la basura, y el negocio siguió vulnerable.\r
\r
En Bogotá, los locales comerciales enfrentan amenazas específicas:\r
- **Robo con violencia** (18% más frecuente en locales sin CCTV visible)\r
- **Hurto por empleados** (responsable del 35% de pérdidas en retail)\r
- **Vandalismo nocturno** (especialmente en zonas comerciales como Chapinero y Kennedy)\r
- **Fraude en caja** (las cámaras con visión clara del punto de venta previenen esto)\r
\r
**La cámara correcta no es la más cara — es la que resuelve TU problema específico.**\r
\r
## Qué es: Tipos de cámaras para local comercial y cuál necesitas\r
\r
No todas las cámaras son iguales. Cada tipo está diseñado para un propósito específico, y elegir el incorrecto es como usar un martillo para atornillar.\r
\r
### 1. Cámaras Bullet (de bala)\r
\r
**Diseño:** Cilíndrica, visible, montaje en pared o techo.\r
\r
**Ideales para:**\r
- Entradas y salidas principales\r
- Estacionamientos y fachadas\r
- Zonas donde quieres que se VEAN las cámaras (efecto disuasivo)\r
\r
**Características clave:**\r
- Visión nocturna IR hasta 30-50 metros\r
- Resistencia IP67 (lluvia Bogotá no es problema)\r
- Ángulo de visión: 70°-100°\r
\r
**Modelo recomendado:** Hikvision DS-2CD2T47G2H-LI ($180.000-$250.000)\r
- Resolución 4MP\r
- ColorVu (color en visión nocturna)\r
- Smart Hybrid Light (IR + luz blanca inteligente)\r
\r
### 2. Cámaras Dome (de cúpula)\r
\r
**Diseño:** Semi-esférica, montada en techo, menos visible que la bullet.\r
\r
**Ideales para:**\r
- Interiores del local\r
- Puntos de venta (caja)\r
- Pasillos y áreas de clientes\r
\r
**Características clave:**\r
- Diseño anticarro (vándalos no pueden dañarlas fácilmente)\r
- Ángulo panorámico: 100°-120°\r
- Discreción (se integran mejor con el diseño del local)\r
\r
**Modelo recomendado:** Hikvision DS-2CD2147G2H-LI ($150.000-$220.000)\r
- 4MP con IA integrada\r
- MicroSD hasta 256GB (respaldo local)\r
- Audio bidireccional (puedes hablar con el cliente)\r
\r
### 3. Cámaras PTZ (Pan-Tilt-Zoom)\r
\r
**Diseño:** Móvil, control remoto, zoom óptico.\r
\r
**Ideales para:**\r
- Locales grandes (+200m²)\r
- Almacenes o bodegas con estanterías altas\r
- Vigilancia perimetral amplia\r
\r
**Características clave:**\r
- Rotación 360° horizontal, 90° vertical\r
- Zoom óptico 25x-40x\r
- Seguimiento automático de personas\r
\r
**Modelo recomendado:** Hikvision DS-2DE4A425IWG-E ($450.000-$650.000)\r
- 4MP con zoom 25x\r
- Auto-tracking inteligente\r
- Preset positions (puntos predefinidos)\r
\r
### 4. Cámaras Fisheye (ojo de pez)\r
\r
**Diseño:** Gran angular extremo, montaje en techo.\r
\r
**Ideales para:**\r
- Vigilar toda una sala desde un solo punto\r
- Locales con techo alto\r
- Reducir el número de cámaras necesarias\r
\r
**Características clave:**\r
- Campo de visión: 360° completo\r
- Desenroscado digital (imagen corregida)\r
- Una sola cámara cubre lo que 3-4 normales cubrirían\r
\r
**Modelo recomendado:** Hikvision DS-2CD6924G0-IVS ($380.000-$520.000)\r
- 12MP para detalle extremo\r
- Counting function (conteo de personas)\r
- Dewarping en tiempo real\r
\r
## Cómo funciona: Features que importan para retail en Bogotá\r
\r
### Resolución: No te dejes engañar con "4K"\r
\r
La resolución medida en megapíxeles (MP) determina qué tan nítida es la imagen. Pero más no siempre es mejor.\r
\r
- **2MP (1080p):** Suficiente para reconocer caras a 3-5 metros. Ideal para locales pequeños.\r
- **4MP (2K):** Excelente balance calidad/precio. Reconoce detalles como precios en etiquetas.\r
- **8MP (4K):** Para locales grandes donde necesitas zoom digital sin perder calidad.\r
\r
**Recomendación para locales comerciales en Bogotá:** 4MP es el sweet spot. Cuesta solo 20% más que 2MP pero la ganancia en calidad es del 100%.\r
\r
### Visión nocturna: Crítico en Bogotá\r
\r
Bogotá tiene 14 horas de oscuridad en invierno. Tu cámara DEBE tener buena visión nocturna.\r
\r
**Tecnologías disponibles:**\r
- **IR tradicional:** Imagen B/N, alcance 20-30m. Económica pero limitada.\r
- **ColorVu (Hikvision):** Color 24/7 con luz blanca integrada. Costo: +30%.\r
- **Starlight:** Excelente en poca luz sin luz blanca. Buen balance.\r
- **DarkFighter (Hikvision):** La mejor tecnología para oscuridad total.\r
\r
### IA integrada: El game changer para retail\r
\r
La inteligencia artificial ya no es un lujo — es una necesidad. Esto es lo que la IA puede hacer por tu local:\r
\r
**Detección de personas vs. mascotas:**\r
- Evita falsas alertas por gatos, perros o sombras\r
- Solo te avisa cuando hay una persona real en zona restringida\r
\r
**Conteo de aforo:**\r
- Cuántas personas entran y salen\r
- Reportes diarios/semanales de flujo\r
- Ideal para optimizar turnos de empleados\r
\r
**Línea de Virtual:**\r
- Alarma cuando alguien cruza una línea invisible en pantalla\r
- Perfecto para zonas de caja o almacén\r
\r
**Reconocimiento de placas:**\r
- Registra placas de vehículos que entran al estacionamiento\r
- Alerta si una placa está en lista negra\r
\r
### PoE vs. WiFi: La batalla que ya se ganó\r
\r
**PoE (Power over Ethernet):**\r
- Un solo cable para datos y energía\r
- Conexión estable y confiable\r
- **Recomendado para 95% de locales comerciales**\r
\r
**WiFi:**\r
- Sin cableado (parece cómodo)\r
- Interferencias, caídas de señal, latencia\r
- Solo para instalaciones temporales o pruebas\r
\r
**Veredicto:** Si tu negocio es permanente, ve por PoE. Si es un puesto temporal o kiosco en centro comercial, WiFi puede funcionar temporalmente.\r
\r
## Casos reales Bogotá: Cámaras que funcionan en locales como el tuyo\r
\r
### Caso 1: Cafetería en La Candelaria (60m²)\r
**Problema:** Robos frecuentes de computadores cuando cerraban.\r
**Solución:** 2 cámaras dome en interior + 1 bullet en entrada.\r
**Modelos:** Hikvision DS-2CD2147G2H-LI × 3\r
**Inversión:** $680.000 + instalación $250.000 = **$930.000**\r
**Resultado:** 0 robos en 8 meses. El efecto disuasivo de las cámaras visibles fue inmediato.\r
\r
### Caso 2: Tienda de tecnología en Chapinero (120m²)\r
**Problema:** Hurto por clientes y empleados. Pérdidas de $2.500.000/mes.\r
**Solución:** 4 dome en interior + 2 bullet en entrada/salida + 1 PTZ en almacén.\r
**Modelos:** Hikvision DS-2CD2T47G2H-LI × 3, DS-2DE4A425IWG-E × 1\r
**Inversión:** $1.450.000 + instalación $480.000 = **$1.930.000**\r
**Resultado:** Reducción de hurtos del 100% en 3 meses. ROI alcanzado en 8 semanas.\r
\r
### Caso 3: Gimnasio en Teusaquillo (400m²)\r
**Problema:** Robo de equipos值antes en horario nocturno. El vigilante no podía cubrir toda el área.\r
**Solución:** 8 cámaras (mixtas) + IA de detección de movimiento + alertas WhatsApp.\r
**Modelos:** Hikvision DS-2CD2T47G2H-LI × 5, DS-2DE4A425IWG-E × 3\r
**Inversión:** $3.200.000 + instalación $900.000 = **$4.100.000**\r
**Resultado:** El sistema detecta movimiento después de las 11pm y envía alerta al dueño + vigilante. Dos intentos de robo frustrados en el primer mes.\r
\r
### Caso 4: Boutique de 30m² en Usaquén\r
**Problema:** Necesitaba cámaras que no arruinara la estética del local.\r
**Solución:** 2 cámaras dome miniaturizadas + 1 bullet oculta en fachada.\r
**Modelos:** Hikvision DS-2CD3346G2-ISU (mini dome) × 2\r
**Inversión:** $520.000 + instalación $180.000 = **$700.000**\r
**Resultado:** Las cámaras son prácticamente invisibles. Los clientes no las notan, pero el dueño tiene cobertura completa desde su celular.\r
\r
## Guía de compra: ¿Qué modelo elegir según tu tipo de negocio?\r
\r
| Tipo de negocio | Cámaras necesarias | Modelo recomendado | Presupuesto estimado |\r
|-----------------|--------------------|--------------------|----------------------|\r
| Tienda ropa | 4 dome interior + 2 bullet entrada | DS-2CD2147G2H-LI × 4, DS-2CD2T47G2H-LI × 2 | $1.800.000 - $2.500.000 |\r
| Restaurante | 3 dome interior + 1 bullet cocina | DS-2CD2147G2H-LI × 3, DS-2CD2T47G2H-LI × 1 | $1.200.000 - $1.800.000 |\r
| Boutique/joyería | 2-3 mini dome + 1 bullet fachada | DS-2CD3346G2-ISU × 3, DS-2CD2T47G2H-LI × 1 | $1.100.000 - $1.600.000 |\r
| Gimnasio | 6 dome + 2 bullet + 1 PTZ | DS-2CD2147G2H-LI × 6, DS-2DE4A425IWG-E × 1 | $2.800.000 - $3.800.000 |\r
| Supermercado | 8 dome + 4 bullet + 2 fisheye | DS-2CD2147G2H-LI × 8, DS-2CD2T47G2H-LI × 4 | $4.500.000 - $6.200.000 |\r
\r
## FAQ: Preguntas frecuentes sobre cámaras para locales comerciales\r
\r
### ¿Cuántas cámaras necesito para mi tienda de 50m²?\r
Para una tienda de 50m², **3-4 cámaras son suficientes**: 2 dome en interior (una en caja, una en pasillo) y 1-2 bullet en entrada/salida. Si tienes almacén, agrega 1 más.\r
\r
### ¿Hikvision o Dahua para mi negocio?\r
Ambas son marcas excelentes. **Hikvision** tiene mejor software y soporte en Bogotá. **Dahua** es ligeramente más económico. Para locales comerciales, recomendamos Hikvision por su ecosistema más completo y distribuidores autorizados en la ciudad.\r
\r
### ¿Puedo instalar las cámaras yo mismo?\r
Si eres técnico, sí. Pero para locales comerciales, **recomendamos instalación profesional** por: garantía del fabricante (se anula con instalación DIY), configuración de red correcta, y compliance con normativa local.\r
\r
### ¿Cuánto dura una cámara de seguridad profesional?\r
Entre **5-8 años** con mantenimiento adecuado. Los componentes electrónicos fallan primero, pero una cámara bien instalada en Bogotá puede durar más de 10 años.\r
\r
### ¿Las cámaras funcionan con apagones de luz en Bogotá?\r
Solo si tienes un **UPS (不间断电源)** conectado al DVR/NVR. Sin UPS, el sistema se apaga y pierdes grabación durante el corte. El costo de un UPS adecuado es de $300.000-$600.000.\r
\r
### ¿Necesito internet para que las cámaras graben?\r
No. Las cámaras graban localmente al DVR/NVR. El internet solo es necesario para ver las grabaciones remotamente y recibir alertas.\r
\r
## Próximos pasos: Encuentra las cámaras ideales para tu negocio\r
\r
No compres cámaras por internet sin asesoría. Cada local es único y necesita una solución personalizada.\r
\r
**Te recomendamos estos pasos:**\r
\r
1. **Identifica tus puntos críticos** — ¿Dónde están las entradas? ¿Dónde está la caja? ¿Dónde guardas inventario?\r
2. **Define tu presupuesto** — Un sistema básico cuesta desde $800.000, uno profesional desde $2.000.000\r
3. **Solicita una visita técnica** — Un especialista debe evaluar tu local antes de vender cámaras\r
4. **Piensa en el ecosistema** — Cámaras solas no son suficientes. Necesitas IA + automatización\r
\r
### Nuestras soluciones por tipo de negocio\r
\r
| Tipo | Solución recomendada | Enlace |\r
|------|---------------------|--------|\r
| **Tienda/Retail** | 4-8 dome + bullet con IA | [apcvisionai.site](https://apcvisionai.site) |\r
| **Restaurante** | 3-4 dome + bullet cocina | [apcvisionai.site](https://apcvisionai.site) |\r
| **Bodega/Logística** | 8-16 bullet + PTZ + conteo personas | [apccore.site](https://apccore.site) |\r
| **Gimnasio/Espacio grande** | 6-10 dome + PTZ + alertas automáticas | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
\r
> **¿Ya sabe cuántas cámaras necesita?** Vea el proceso y los precios en nuestra página de [instalación de cámaras de seguridad en Bogotá](#instalacion) y la [tabla de precios de instalación 2026](#precios-camaras) para cerrar el presupuesto con los planes incluidos.\r
\r
### Ecosistema APC: Todo conectado\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)\r
`,Vh=`---\r
title: "Cámaras de seguridad para bodega en Bogotá: monitoreo inteligente con IA"\r
excerpt: "Soluciones de CCTV con inteligencia artificial para bodegas en Bogotá. Detección de intrusión, conteo de personas, heat maps. Casos reales de Kennedy, Engativá y Suba."\r
date: "2026-07-25"\r
publishDate: "2026-07-30"\r
author: "Servicios APC"\r
category: "Soluciones por Industria"\r
tags: "cámaras bodega, CCTV logística, monitoreo bodega Bogotá, IA bodega, conteo personas"\r
readTime: "8 min"\r
coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: '{"primary":{"label":"Cotizar Solución Bodega","href":"https://apcvisionai.site"},"secondary":{"label":"Ver Infraestructura","href":"https://apccore.site"},"tertiary":{"label":"Automatizar Flujo","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
## El problema: ¿Por qué las bodegas en Bogotá son el objetivo más vulnerable?\r
\r
Las bodegas en Bogotá son el blanco perfecto para hurtos, fraudes y pérdidas operativas. Y la razón es simple: son espacios grandes, con acceso múltiple, operan 24/7, y la mayoría solo tiene un vigilante humano que no puede cubrir todo.\r
\r
**Los números son alarmantes:**\r
- El 42% de hurtos a comercios en Bogotá ocurren en bodegas y almacenes (SIC, 2025)\r
- El 65% de las bodegas en zonas industriales de Kennedy, Engativá y Suba no tienen sistemas de vigilancia más allá de un guardia nocturno\r
- La pérdida promedio por hurto en una bodega de 500m² es de **$8.500.000 por incidente**\r
- El 38% de los hurtos son cometidos por empleados internos, no por intrusos externos\r
\r
**El problema real no es la falta de cámaras — es la falta de INTELIGENCIA en las cámaras.**\r
\r
Una bodega en Kennedy me contó que tenía 16 cámaras CCTV grabando 24/7. Cuando necesitaron revisar un hurto, descubrieron que el DVR estaba grabando a 1 cuadros por segundo (para ahorrar espacio) y la imagen era tan borrosa que no reconocieron a nadie. Las 16 cámaras eran decorativas.\r
\r
Otra bodega en Suba invirtió $12.000.000 en un sistema "premium" sin darse cuenta de que las cámaras no tenían visión nocturna adecuada para espacios de 8 metros de altura. Las imágenes nocturnas eran negras.\r
\r
**Las bodegas necesitan soluciones específicas, no las mismas cámaras que un local comercial.**\r
\r
## Qué es: Soluciones CCTV con IA específicas para bodegas\r
\r
Una bodega no es un tienda de 50m². Los retos son completamente diferentes y requieren tecnología especializada.\r
\r
### Retos únicos de bodegas en Bogotá\r
\r
**1. Espacios grandes y altos**\r
- Techos de 6-12 metros\r
- Áreas de 200m² a 5.000m²\r
- Estanterías altas que crean puntos ciegos\r
\r
**2. Iluminación variable**\r
- Día: luz natural por ventanales o naves superiores\r
- Noche: iluminación artificial mínima para reducir costos\r
- Transiciones repentinas que ciegan las cámaras\r
\r
**3. Movimiento constante**\r
- Empujadores, montacargas, carretillas\r
- Empleados entrando y saliendo\r
- Vehículos de carga\r
\r
**4. Zonas de alto riesgo**\r
- Almacén de materiales valiosos\r
- Zona de despacho (mercancía sale sin control)\r
- Punto de recepción (mercancía entra sin verificación)\r
\r
### Tecnología IA para bodegas: Más allá de simplemente "grabar"\r
\r
**YOLO (You Only Look Once) — Detección en tiempo real:**\r
- Identifica personas, vehículos, carretillas, cajas\r
- Clasifica automáticamente: empleado vs. visitante vs. intruso\r
- Funciona en tiempo real con latencia <100ms\r
\r
**Conteo de personas y vehículos:**\r
- Registra cuántos empleados hay en cada zona\r
- Cuenta vehículos que entran y salen del muelle\r
- Genera reportes automáticos de flujo diario\r
\r
**Heat Maps (mapas de calor):**\r
- Muestra qué zonas se usan más durante el día\r
- Identifica áreas de congestión\r
- Ayuda a optimizar la distribución del almacén\r
\r
**Detección de intrusión inteligente:**\r
- Líneas virtuales que activan alarma si se cruzan\r
- Zonas restringidas con acceso por horario\r
- Diferencia entre movimiento humano y de maquinaria\r
\r
**Verificación de carga:**\r
- Cuenta cajas que salen vs. cajas registradas en sistema\r
- Detecta discrepancias en tiempo real\r
- Genera alertas automáticas si hay sobrante o faltante\r
\r
## Cómo funciona: Arquitectura de sistema CCTV para bodega\r
\r
### Diseño típico para bodega de 500m²\r
\r
**Distribución de cámaras:**\r
- 4 bullet exteriores: Entradas vehiculares y peatonales\r
- 4 dome interiores: Puntos de venta y almacén principal\r
- 2 PTZ: Cobertura de estanterías altas y muelles\r
- 2 fisheye: Vista panorámica de áreas amplias\r
\r
**Equipo necesario:**\r
- NVR 16 canales PoE+ (soporta todas las cámaras)\r
- Switch PoE+ 16 puertos (energía + datos por cable)\r
- Disco duro 8TB (retención 30 días a 4MP)\r
- UPS 3000VA (protección contra cortes de luz Bogotá)\r
- Servidor edge GPU (para procesamiento IA local)\r
\r
**Software de gestión:**\r
- Plataforma VMS (Video Management System)\r
- Dashboard web para reportes\r
- App móvil para alertas en tiempo real\r
- Integración con n8n para automatización\r
\r
### Flujo de automatización con n8n\r
\r
**Escenario: Detección de intrusión nocturna**\r
\r
1. **Trigger:** Cámaras detectan persona en zona restringida (2:00am)\r
2. **Validación:** IA confirma que es humano (no sombra/mascota)\r
3. **Alerta:** WhatsApp automático al propietario con imagen\r
4. **Registro:** Video clip de 30 segundos guardado en nube\r
5. **Escalamiento:** Si no hay respuesta en 5 minutos, se alerta a vigilancia privada\r
\r
**Escenario: Control de carga en muelle**\r
\r
1. **Trigger:** Vehículo entra al muelle de carga\r
2. **Conteo:** IA cuenta cajas cargadas en tiempo real\r
3. **Cruce:** Sistema compara con orden de despacho\r
4. **Alerta:** Discrepancia >5% genera alerta a gerencia\r
5. **Reporte:** Dashboard actualizado con métricas del día\r
\r
### Costos estimados para bodega en Bogotá\r
\r
**Bodega pequeña (hasta 300m²):**\r
- Cámaras: 6-8 unidades\r
- Equipo: NVR, disco, UPS\r
- Instalación: Cableado estructurado\r
- **Inversión total: $3.500.000 - $5.000.000**\r
- **Costo mensual: $450.000 - $650.000**\r
\r
**Bodega mediana (300-1.000m²):**\r
- Cámaras: 10-16 unidades\r
- Equipo: NVR 16ch, disco 8TB, switch PoE, UPS\r
- Instalación: Cableado + rack\r
- **Inversión total: $6.500.000 - $9.500.000**\r
- **Costo mensual: $700.000 - $1.100.000**\r
\r
**Bodega grande (+1.000m²):**\r
- Cámaras: 16-32 unidades (incluye PTZ)\r
- Equipo: NVR 32ch, almacenamiento RAID, servidor edge\r
- Instalación: Cableado estructurado + infraestructura de red\r
- **Inversión total: $12.000.000 - $18.000.000**\r
- **Costo mensual: $1.200.000 - $2.000.000**\r
\r
## Casos reales Bogotá: Bodegas que transformaron su seguridad\r
\r
### Caso 1: Bodega de alimentos en Kennedy (800m²)\r
\r
**Situación inicial:**\r
- 8 cámaras sin IA, DVR grabando 5 días\r
- 2 hurtos de mercancía por semana ($1.800.000/semana)\r
- Guardia nocturno que no podía cubrir todo\r
\r
**Solución implementada:**\r
- 12 cámaras IPC 4MP con IA YOLO\r
- NVR 16 canales con disco 8TB\r
- Conteo de personas en tiempo real\r
- Alertas automáticas por WhatsApp\r
- Dashboard de reportes diarios\r
\r
**Resultados (6 meses):**\r
- Hurtos reducidos al 0% (no hubo ninguno desde la instalación)\r
- ROI alcanzado en 3.5 meses\r
- El sistema detectó 2 intentos de hurto nocturno que el guardia no vio\r
- Control de inventario mejoró 28% con los reportes automáticos\r
\r
### Caso 2: Bodega de tecnología en Suba (1.200m²)\r
\r
**Situación inicial:**\r
- Sin CCTV, solo 2 guardias\r
- Pérdida promedio: $4.500.000/mes por hurtos internos\r
- No había forma de probar quién robaba\r
\r
**Solución implementada:**\r
- 16 cámaras mixtas (bullet + dome + PTZ)\r
- IA de reconocimiento facial (empleados registrados)\r
- Líneas virtuales en zona de almacén de alta gera\r
- Integración con sistema de control de acceso\r
\r
**Resultados (12 meses):**\r
- 3 empleados identificados como autores de hurtos\r
- Pérdidas reducidas 94% ($4.500.000 → $270.000/mes)\r
- Ahorro anual: $50.760.000\r
- Inversión del sistema: $8.500.000\r
- **ROI: 5.97x en el primer año**\r
\r
### Caso 3: Centro de distribución en Engativá (2.500m²)\r
\r
**Situación inicial:**\r
- 24 cámaras antiguas (resolución D1)\r
- DVR fallando constantemente\r
- No había forma de revisar incidentes\r
- Pérdidas de inventario no explicadas: $15.000.000/mes\r
\r
**Solución implementada:**\r
- 24 cámaras IPC 4MP con IA completa\r
- NVR 32ch con almacenamiento RAID\r
- Servidor edge GPU para procesamiento local\r
- Sistema automatizado de conteo de carga\r
- Dashboard ejecutivo con métricas en tiempo real\r
\r
**Resultados (9 meses):**\r
- Discrepancias de inventario reducidas 78%\r
- Tiempo de investigación de incidentes: de 3 días a 30 minutos\r
- Ahorro mensual: $11.700.000\r
- Sistema pagado en 2.1 meses\r
- El centro mejoró su calificación logística (de 3.2 a 4.6 estrellas)\r
\r
## FAQ: Preguntas frecuentes sobre CCTV para bodegas\r
\r
### ¿Cuántas cámaras necesito para una bodega de 500m²?\r
Para una bodega de 500m², recomendamos **10-12 cámaras**: 4 exteriores (entradas/salidas), 4 dome en almacén principal, 2 PTZ para estanterías, y 2 fisheye para áreas de carga/descarga.\r
\r
### ¿Las cámaras con IA funcionan en espacios con techo alto?\r
Sí, pero necesitas cámaras con **lente varifocal** (2.8-12mm) para ajustar el ángulo según la altura. Las bullet de alta gama como Hikvision DS-2CD2T47G2H-LI son ideales para techos de 6-10 metros.\r
\r
### ¿Cuánto espacio de almacenamiento necesito para grabar 30 días?\r
Para 12 cámaras a 4MP grabando continuo, necesitas aproximadamente **6-8TB**. Si grabas solo en modo detección de movimiento, puedes reducirlo a 4TB.\r
\r
### ¿Puedo integrar las cámaras con mi sistema de inventario existente?\r
Sí, a través de APIs REST o MQTT. El sistema de n8n puede conectarse con la mayoría de ERPs y WMS (Warehouse Management Systems) para cruzar datos de video con datos de inventario.\r
\r
### ¿Qué pasa cuando se va la luz en la bodega?\r
Con un UPS de 3000VA, el sistema mantiene funcionando por 30-45 minutos. Para apagones largos, recomendamos un generador automático o cámaras con batería interna (disponibles en modelos premium).\r
\r
### ¿Necesito licencia especial para instalar CCTV en una bodega industrial?\r
No necesitas licencia de vigilancia, pero debes cumplir con la normativa de protección de datos (Ley 1581 de 2012) si las cámaras graban áreas de circulación de empleados. Se recomienda colocar avisos visibles.\r
\r
## Próximos pasos: Digitaliza la seguridad de tu bodega\r
\r
Una bodega sin IA es una bodega vulnerable. La tecnología actual permite transformar la vigilancia pasiva en inteligencia operativa que protege tu inventario, optimiza tus procesos y te da control total desde tu celular.\r
\r
> **Guía complementaria:** Para el proceso y los precios de un sistema para bodega, consulta nuestra página de [instalación de cámaras de seguridad en Bogotá](#instalacion) y la [tabla de precios de instalación 2026](#precios-camaras).\r
\r
**Te recomendamos estos pasos:**\r
\r
1. **Audita tu situación actual** — ¿Cuántos hurtos has tenido? ¿Qué cámaras tienes hoy? ¿Qué datos generas?\r
2. **Calcula tu pérdida real** — No solo los hurtos directos, sino el tiempo perdido investigando, las primas de seguro, el inventario no contabilizado\r
3. **Diseña la solución correcta** — Cada bodega es diferente. Necesitas un diseño personalizado\r
4. **Implementa por fases** — Puedes empezar con las zonas más críticas y expandir\r
\r
### Ecosistema APC para bodegas\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)\r
`,Bh=`---\r
title: "Instalación de cámaras de seguridad para negocio pequeño en Bogotá: guía completa"\r
excerpt: "Guía paso a paso para instalar cámaras de seguridad en negocios pequeños de Bogotá. Qué comprar, dónde colocarlas, errores comunes y cuándo contratar profesional."\r
date: "2026-07-25"\r
publishDate: "2026-07-30"\r
author: "Servicios APC"\r
category: "Guía Práctica"\r
tags: "instalación cámaras, negocio pequeño, tienda local, CCTV pequeño negocio, guía instalación Bogotá"\r
readTime: "8 min"\r
coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop&auto=format&fm=webp&q=70"\r
cta: '{"primary":{"label":"Guía Personalizada","href":"https://apcvisionai.site"},"secondary":{"label":"Cotizar Instalación","href":"https://apccore.site"},"tertiary":{"label":"Automatizar Alertas","href":"https://apcautomatizacion.site"}}'\r
---\r
\r
## El problema: ¿Por qué la mayoría de negocios pequeños en Bogotá instalan mal sus cámaras?\r
\r
Si tienes un negocio pequeño en Bogotá — una tienda, cafetería, boutique, o taller — probablemente ya pensaste en instalar cámaras de seguridad. Tal vez ya lo hiciste. Y tal vez, como el 73% de los negocios pequeños en la ciudad, el sistema no funciona como esperabas.\r
\r
**El problema no es que las cámaras fallen — es que se instalan mal desde el inicio.**\r
\r
Un peluquería en Barrios Unidos compró 4 cámaras en MercadoLibre, las instaló el técnico del edificio, y al mes descubrió que:\r
- Una cámara apuntaba directamente a la pared\r
- Otra estaba tan alta que solo veía techos\r
- Las grabaciones tenían huecos de 2 horas (el DVR se reiniciaba solo)\r
- No podía ver las grabaciones desde su celular porque no configuraron el acceso remoto\r
\r
La inversión de $600.000 fue a la basura. El negocio siguió vulnerable.\r
\r
**Los errores más comunes en negocios pequeños de Bogotá:**\r
\r
1. **Comprar sin saber qué necesitas** — Cámaras WiFi de $50.000 que fallan en 3 meses\r
2. **No planificar la ubicación** — Cámaras mal posicionadas que no cubren puntos críticos\r
3. **Intentar instalarlo uno mismo** — Sin conocimiento de red, cableado o configuración\r
4. **Ignorar el mantenimiento** — Cámaras sucias, firmware desactualizado, discos llenos\r
5. **No pensar en escalabilidad** — Sistema que no crece con el negocio\r
\r
## Qué es: Guía completa de instalación para negocios pequeños en Bogotá\r
\r
### Definición de "negocio pequeño" para CCTV\r
\r
Para esta guía, consideramos negocios pequeños como:\r
- **Superficie:** 20m² a 150m²\r
- **Personal:** 1-10 empleados\r
- **Puntos críticos:** 3-6 áreas que necesitan vigilancia\r
- **Presupuesto:** $500.000 a $3.000.000\r
\r
### Qué necesitas realmente (la lista completa)\r
\r
**1. Cámaras (3-4 unidades para empezar)**\r
\r
Para un negocio pequeño, necesitas:\r
- **1 cámara bullet** en la entrada principal (que se vea, efecto disuasivo)\r
- **1-2 dome** en interior (caja, pasillo, área de clientes)\r
- **1 cámara** en zona trasera o almacén (si aplica)\r
\r
**Resolución mínima:** 2MP (1080p). Recomendada: 4MP (mejor detalle, solo 20% más caro).\r
\r
**2. Grabador (DVR o NVR)**\r
\r
- **DVR 4 canales:** Si usas cámaras analógicas ($180.000-$250.000)\r
- **NVR 4 canales PoE:** Si usas cámaras IP ($280.000-$380.000)\r
\r
**Recomendación:** Ve por NVR PoE. Es más caro pero el cableado es más limpio (un solo cable) y la calidad es mejor.\r
\r
**3. Disco duro**\r
\r
- **500GB:** 5-7 días de grabación (4 cámaras, modo continuo)\r
- **1TB:** 15-20 días (recomendado para negocios)\r
- **2TB:** 30-40 días (si necesitas retención larga)\r
\r
**Costo:** $120.000 - $350.000\r
\r
**4. Cableado**\r
\r
- **Cable UTP Cat6** (para NVR/IP): $8.000-$12.000 por metro\r
- **Cable coaxial RG59** (para DVR/analógico): $5.000-$8.000 por metro\r
- **Longitud promedio:** 20-40 metros por cámara (depende de la distribución)\r
\r
**5. Accesorios**\r
\r
- Conectores RJ45 o BNC\r
- Canaletas para cableado oculto\r
- Fuentes de poder (si no es PoE)\r
- UPS básico ($200.000-$400.000) — **esencial en Bogotá por los apagones**\r
\r
## Cómo funciona: Paso a paso la instalación profesional\r
\r
### Paso 1: Planificación (el paso que todos saltan)\r
\r
Antes de comprar cualquier cosa, necesitas un plano básico de tu negocio:\r
\r
**Marca estos puntos en el plano:**\r
- [ ] Entrada principal (cámara bullet aquí)\r
- [ ] Punto de venta / caja (cámara dome aquí)\r
- [ ] Almacén o zona de inventario (cámara dome aquí)\r
- [ ] Entrada trasera o patio (cámara bullet aquí)\r
- [ ] Ubicación del DVR/NVR (lugar seguro, con ventilación)\r
- [ ] Punto de conexión a internet (para acceso remoto)\r
\r
**Regla de oro:** Cada cámara debe cubrir un área específica con un propósito claro. No pongas cámaras "por si acaso".\r
\r
### Paso 2: Selección de equipo\r
\r
**Para negocio de 20-50m² (tienda, café, boutique):**\r
- 2-3 cámaras Hikvision DS-2CD2147G2H-LI (dome, 4MP, IA)\r
- 1 NVR 4 canales PoE\r
- Disco duro 1TB\r
- Cableado Cat6 (30-40 metros)\r
- UPS básico\r
\r
**Presupuesto total: $1.200.000 - $1.800.000**\r
\r
**Para negocio de 50-150m² (restaurante, gimnasio, local grande):**\r
- 4-6 cámaras mixtas (bullet + dome)\r
- 1 NVR 8 canales PoE\r
- Disco duro 2TB\r
- Cableado Cat6 (60-100 metros)\r
- UPS intermedio\r
\r
**Presupuesto total: $2.000.000 - $3.500.000**\r
\r
### Paso 3: Instalación física\r
\r
**Ubicación de cámaras (reglas básicas):**\r
\r
**Entrada principal:**\r
- Altura: 2.5-3 metros\r
- Ángulo: 45° hacia abajo, apuntando a la cara de quien entra\r
- Distancia máxima: 8 metros para reconocimiento facial\r
\r
**Punto de venta:**\r
- Altura: 2-2.5 metros (techo falso si es posible)\r
- Ángulo: que cubra caja, cliente y cajero\r
- Sin contraluz (no apunte hacia ventana o puerta)\r
\r
**Almacén:**\r
- Altura: 3-4 metros\r
- Ángulo amplio que cubra estanterías y pasillos\r
- Si es largo, usa 2 cámaras en extremos opuestos\r
\r
**Zona trasera:**\r
- Altura: 3 metros\r
- Ángulo que cubra puerta y área circundante\r
- Visión nocturna es crítica aquí\r
\r
**Errores de ubicación que debes evitar:**\r
- Cámaras apuntando al sol o fuentes de luz directa\r
- Cámaras demasiado altas (más de 4 metros) que no reconocen caras\r
- Cámaras en esquinas sin ángulo útil (apuntan a pared)\r
- Cámaras bloqueadas por estanterías o signage\r
\r
### Paso 4: Cableado y conexión\r
\r
**Si es NVR PoE (recomendado):**\r
1. Cada cámara se conecta al NVR con un solo cable Cat6\r
2. El NVR alimenta la cámara y recibe video por el mismo cable\r
3. Máximo 100 metros por cable (ideal para negocios pequeños)\r
\r
**Si es DVR analógico:**\r
1. Cable coaxial de cámara a DVR\r
2. Cable de power separado (2 cables por cámara)\r
3. Más complejo, más cables, pero más económico\r
\r
**Consejo para negocios en Bogotá:** Usa canaletas plásticas para ocultar el cableado. Es más estético y protege el cable de roedores (un problema común en bodegas y locales del sur de la ciudad).\r
\r
### Paso 5: Configuración del software\r
\r
**Acceso remoto (esencial para dueños de negocio):**\r
1. Descarga la app del fabricante (Hik-Connect para Hikvision)\r
2. Escanea el código QR del NVR\r
3. Configura usuario y contraseña segura\r
4. Prueba desde datos móviles (fuera del WiFi del local)\r
\r
**Configuración de grabación:**\r
- **Modo continuo:** Graba todo, usa más espacio\r
- **Detección de movimiento:** Graba solo cuando hay movimiento (recomendado)\r
- **Horario personalizado:** Graba solo en horarios específicos\r
\r
**Configuración de alertas:**\r
- Activa notificaciones por movimiento\r
- Configura zonas de detección (ignora áreas de tráfico normal)\r
- Programa alertas por horario (solo de noche o fines de semana)\r
\r
### Paso 6: Pruebas y ajustes\r
\r
**Lista de verificación post-instalación:**\r
- [ ] Cada cámara tiene imagen nítida (sin contraluz, sin obstrucciones)\r
- [ ] Las grabaciones son revisables (no borrosas, sin huecos)\r
- [ ] El acceso remoto funciona desde celular\r
- [ ] Las alertas de movimiento llegan correctamente\r
- [ ] El disco duro está grabando (verificar espacio disponible)\r
- [ ] El UPS funciona (simula un corte de luz)\r
- [ ] Las cámaras nocturnas tienen buena imagen en oscuridad\r
\r
## DIY vs. Profesional: ¿Cuándo hacerlo tú mismo y cuándo contratar?\r
\r
### Hazlo tú mismo (DIY) si:\r
\r
- Tu negocio es menor a 40m²\r
- Solo necesitas 2-3 cámaras\r
- Tienes conocimientos básicos de redes\r
- El cableado es corto y directo (sin techos falsos)\r
- Presupuesto muy limitado (ahorras $200.000-$400.000)\r
\r
**Riesgos del DIY:**\r
- Instalación no profesional puede anular garantía\r
- Configuración de red incorrecta = sin acceso remoto\r
- Cableado visible = antiestético y vulnerable\r
- Sin soporte técnico si algo falla\r
\r
### Contrata un profesional si:\r
\r
- Tu negocio es mayor a 50m²\r
- Necesitas 4+ cámaras\r
- Hay techos falsos, paredes de concreto, o cableado complejo\r
- Quieres integrar IA o automatización\r
- Necesitas que funcione desde el día 1 sin problemas\r
\r
**Beneficios del profesional:**\r
- Diseño personalizado según tu negocio\r
- Cableado oculto y profesional\r
- Configuración completa de acceso remoto\r
- Garantía del fabricante intacta\r
- Soporte técnico los primeros 90 días\r
\r
**Costo de instalación profesional en Bogotá:**\r
- 2-4 cámaras: $200.000 - $400.000\r
- 4-8 cámaras: $400.000 - $700.000\r
- 8+ cámaras: $700.000 - $1.200.000\r
\r
## Casos reales Bogotá: Negocios pequeños que lo hicieron bien\r
\r
### Caso 1: Tienda de barrio en San Cristóbal (35m²)\r
\r
**Situación:** Tienda de 35m² con robos frecuentes. Presupuesto limitado.\r
**Solución:** 2 dome Hikvision + NVR 4ch PoE + disco 500GB\r
**Inversión:** $1.100.000 (incluye instalación profesional)\r
**Resultado:** 0 robos en 6 meses. El dueño puede ver la tienda desde su celular mientras está en casa.\r
\r
### Caso 2: Cafetería en Chapinero Norte (60m²)\r
\r
**Situación:** Necesitaba cámaras que no arruinaran la estética del lugar.\r
**Solución:** 3 dome miniaturizados + 1 bullet en entrada (discreta)\r
**Inversión:** $1.450.000\r
**Resultado:** Cobertura completa sin impacto visual. Las cámaras son casi invisibles. El dueño detectó un intento de fraude con tarjeta clonada gracias a la imagen clara del punto de venta.\r
\r
### Caso 3: Taller mecánico en Kennedy (120m²)\r
\r
**Situación:** Robo de herramientas valoradas en $8.000.000. Necesitaba vigilancia 24/7.\r
**Solución:** 4 bullet con visión nocturna + 2 dome en interior\r
**Inversión:** $2.800.000 (incluye UPS y cableado robusto)\r
**Resultado:** Sistema funciona perfecto con los frecuentes cortes de luz de Kennedy (UPS salva la situación cada vez). Un intento de robo nocturno fue capturado y la policía usó las imágenes para identificar al responsable.\r
\r
## Errores comunes (y cómo evitarlos)\r
\r
### Error 1: Comprar cámaras WiFi baratas\r
**Problema:** Interferencias, caídas de señal, hackers.\r
**Solución:** Ve por PoE (cable). Si no hay opción, usa WiFi industrial, no doméstico.\r
\r
### Error 2: No planificar el cableado\r
**Problema:** Cable visible, trip hazard, antiestético.\r
**Solución:** Diseña la ruta del cable ANTES de instalar. Usa canaletas.\r
\r
### Error 3: Ignorar el UPS\r
**Problema:** Apagones de Bogotá = sin grabación = sin evidencia.\r
**Solución:** Invierte $300.000 en un UPS básico. Es la mejor inversión que puedes hacer.\r
\r
### Error 4: No actualizar firmware\r
**Problema:** Vulnerabilidades de seguridad, bugs, fallas.\r
**Solución:** Actualiza el firmware cada 3 meses. Es gratis y toma 10 minutos.\r
\r
### Error 5: No tener mantenimiento\r
**Problema:** Cámaras sucias, imágenes borrosas, discos llenos.\r
**Solución:** Limpia las cámaras cada mes. Revisa el espacio del disco cada semana.\r
\r
## FAQ: Preguntas frecuentes de negocios pequeños\r
\r
### ¿Cuánto cuesta instalar cámaras en una tienda de 40m² en Bogotá?\r
Para una tienda de 40m², el costo total (cámaras + grabador + disco + cableado + instalación) ronda los **$1.100.000 - $1.800.000** dependiendo de la calidad y si incluye IA.\r
\r
### ¿Puedo instalar las cámaras yo mismo?\r
Sí, para 2-3 cámaras en un espacio pequeño es factible si tienes conocimientos básicos de redes. Pero te recomendamos profesional para garantizar que funcione correctamente y no anular la garantía.\r
\r
### ¿Qué cámara es mejor para una tienda pequeña?\r
Para tiendas pequeñas, recomendamos **cámaras dome de 4MP con IA** como Hikvision DS-2CD2147G2H-LI. Son discretas, tienen buena visión nocturna, y la IA evita falsas alertas.\r
\r
### ¿Cuántas cámaras necesito para una cafetería?\r
Para una cafetería de 50-80m², **3 cámaras son suficientes**: 1 bullet en entrada, 1 dome en caja/punto de venta, 1 dome en sala principal.\r
\r
### ¿Necesito técnico para configurar el acceso remoto?\r
Si nunca has configurado un DVR/NVR, sí. El proceso toma 30 minutos pero requiere conocimiento de redes. Muchos técnicos incluyen esto en el precio de instalación.\r
\r
### ¿Las cámaras funcionan sin internet?\r
Sí, graban localmente. Pero sin internet no puedes ver las grabaciones desde tu celular ni recibir alertas. Es como tener un CCTV de los años 90.\r
\r
## Próximos pasos: Tu negocio pequeño merece seguridad profesional\r
\r
No dejes la seguridad de tu negocio en manos del azar. Un sistema bien instalado, con las cámaras correctas en los lugares correctos, puede ser la diferencia entre proteger tu inversión y lamentarte después.\r
\r
> **Guía complementaria:** Mira cómo se ejecuta un proyecto real de principio a fin en nuestra página de [instalación de cámaras de seguridad en Bogotá](#instalacion), y consulta la [tabla de precios de instalación 2026](#precios-camaras) para cerrar tu presupuesto sin sorpresas.\r
\r
**Te recomendamos estos pasos:**\r
\r
1. **Haz tu plano básico** — Marca dónde están las entradas, la caja, el almacén\r
2. **Define tu presupuesto** — Desde $800.000 puedes tener un sistema funcional\r
3. **Elige entre DIY y profesional** — Si tu negocio es +50m², ve por profesional\r
4. **No olvides el UPS** — Es obligatorio en Bogotá\r
5. **Piensa en el futuro** — Un sistema que puedas expandir cuando tu negocio crezca\r
\r
### Ecosistema APC para negocios pequeños\r
\r
| Línea | Qué hace | Enlace |\r
|-------|----------|--------|\r
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\r
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\r
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\r
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |\r
\r
---\r
\r
**Servicios APC** — Bogotá, Cra. 52c #39b-22  \r
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \r
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)\r
`,$h={"guia-camaras-hikvision-ia-empresas-bogota-2026":Ah,"costo-camaras-seguridad-empresas-2026-hardware-vs-ia":Sh,"que-es-analitica-video-ia-empresas-bogota":kh,"5-senales-camaras-no-protegen-empresa-bogota":jh,"negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues":Ph,"analitica-video-ia-ferreterias-bogota-caso-real-suba":Nh,"analitica-video-ia-clinicas-bogota-cumplimiento-seguridad":wh,"hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026":Ih,"normativa-videovigilancia-colombia-2026-ley-1581-habeas-data":Eh,"automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard":zh,"seo-local-google-maps-empresas-seguridad-bogota":Rh,"servidores-edge-gpu-para-ia-video-analitica-bogota":Th,"hikvision-vs-dahua-vs-uniview-comparativa-ia-2026":Dh,"bot-whatsapp-ia-atencion-clientes-seguridad-bogota":Lh,"deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento":Oh,"cuanto-cuesta-camaras-seguridad-negocio-bogota-2026":Mh,"mejores-camaras-seguridad-local-comercial-bogota":qh,"camaras-seguridad-bodega-bogota-monitoreo-inteligente":Vh,"instalacion-camaras-seguridad-negocio-pequeno-bogota-guia":Bh};function _h(i){const l=i.match(/^---\n([\s\S]*?)\n---/);if(!l)return{fm:{},content:i};const c=l[1],m={};c.split(`
`).forEach(f=>{const g=f.indexOf(":");g>0&&(m[f.slice(0,g).trim()]=f.slice(g+1).trim().replace(/^["']|["']$/g,""))});const u=i.slice(l[0].length).trim();return{fm:m,content:u}}function Hh(){const i=new Date;return Object.entries($h).map(([l,c])=>{const{fm:m,content:u}=_h(c),f=m.publishDate||m.date;return f&&new Date(f)>i?null:{slug:l,title:m.title||"Sin título",excerpt:m.excerpt||"",date:m.date||"",publishDate:f,author:m.author||"Servicios APC",category:m.category||"IA & Seguridad",tags:m.tags?m.tags.split(",").map(g=>g.trim()):[],readTime:m.readTime||"5 min",coverImage:m.coverImage,content:F.parse(u),cta:m.cta?JSON.parse(m.cta.replace(/\\"/g,'"')):void 0}}).filter(l=>l!==null).sort((l,c)=>new Date(c.date).getTime()-new Date(l.date).getTime())}function Wn(i){return new Date(i).toLocaleDateString("es-CO",{day:"numeric",month:"long",year:"numeric"})}function Fh({post:i,allPosts:l,onBack:c,onSelect:m}){return n.jsx("div",{className:"min-h-screen",children:n.jsxs("div",{className:"max-w-[728px] mx-auto px-5",children:[n.jsxs("button",{onClick:c,className:"flex items-center gap-1.5 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors py-8",children:[n.jsx(jf,{size:14}),n.jsx("span",{children:"Volver al blog"})]}),n.jsxs("article",{children:[n.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[n.jsx("span",{className:"text-sm font-medium text-[var(--color-accent)]",children:i.category}),n.jsx("span",{className:"text-[var(--color-border)]",children:"·"}),n.jsx("time",{className:"text-sm text-[var(--color-muted-foreground)]",dateTime:i.date,children:Wn(i.date)})]}),n.jsx("h1",{className:"font-serif text-[2.5rem] md:text-[3rem] leading-[1.15] font-bold text-[var(--color-foreground)] mb-5",children:i.title}),n.jsx("p",{className:"text-xl text-[var(--color-muted-foreground)] leading-relaxed mb-8",children:i.excerpt}),n.jsxs("div",{className:"flex items-center justify-between py-6 border-t border-b border-[var(--color-border)] mb-10",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-sm font-bold text-[var(--color-accent)]",children:"SA"}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-medium text-[var(--color-foreground)]",children:i.author}),n.jsxs("p",{className:"text-xs text-[var(--color-muted-foreground)]",children:[i.readTime," de lectura · ",Wn(i.date)]})]})]}),n.jsxs("div",{className:"flex items-center gap-3 text-[var(--color-muted-foreground)]",children:[n.jsx("button",{className:"hover:text-[var(--color-foreground)] transition-colors",children:n.jsx(wf,{size:18})}),n.jsx("button",{className:"hover:text-[var(--color-foreground)] transition-colors",children:n.jsx(zg,{size:18})})]})]}),i.coverImage&&n.jsx("figure",{className:"mb-10",children:n.jsx("img",{src:i.coverImage,alt:i.title,className:"w-full aspect-[16/9] object-cover"})}),n.jsx("div",{className:"blog-content max-w-none",dangerouslySetInnerHTML:{__html:i.content}}),n.jsx("div",{className:"flex flex-wrap gap-2 mt-12 mb-8",children:i.tags.map(u=>n.jsx("span",{className:"px-3 py-1.5 text-xs bg-[var(--color-secondary)] text-[var(--color-muted-foreground)] rounded-full",children:u},u))}),i.cta&&n.jsxs("div",{className:"my-12 p-8 bg-[var(--color-secondary)] rounded-2xl",children:[n.jsx("p",{className:"text-xs uppercase tracking-widest text-[var(--color-accent)] font-medium mb-3",children:"¿Necesitas esto para tu empresa?"}),n.jsx("h3",{className:"font-serif text-2xl font-bold text-[var(--color-foreground)] mb-5",children:i.cta.primary.label}),n.jsxs("div",{className:"flex flex-wrap gap-3",children:[n.jsxs("a",{href:i.cta.primary.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity",children:["Solicitar cotización",n.jsx(Jr,{size:14})]}),i.cta.secondary&&n.jsxs("a",{href:i.cta.secondary.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-foreground)] px-6 py-3 rounded-full font-medium text-sm hover:bg-[var(--color-secondary)] transition-colors",children:[i.cta.secondary.label,n.jsx(Jr,{size:14})]}),i.cta.tertiary&&n.jsxs("a",{href:i.cta.tertiary.href,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-foreground)] px-6 py-3 rounded-full font-medium text-sm hover:bg-[var(--color-secondary)] transition-colors",children:[i.cta.tertiary.label,n.jsx(Jr,{size:14})]})]})]}),n.jsxs("div",{className:"border-t border-[var(--color-border)] pt-10 pb-16",children:[n.jsx("h3",{className:"text-sm uppercase tracking-widest text-[var(--color-muted-foreground)] mb-6",children:"Sigue leyendo"}),n.jsx("div",{className:"space-y-8",children:l.filter(u=>u.slug!==i.slug).slice(0,3).map(u=>n.jsxs("button",{onClick:()=>m(u.slug),className:"flex gap-6 text-left group w-full",children:[n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsx("p",{className:"text-xs text-[var(--color-muted-foreground)] mb-1",children:u.category}),n.jsx("h4",{className:"font-serif text-xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-snug mb-1",children:u.title}),n.jsx("p",{className:"text-sm text-[var(--color-muted-foreground)] line-clamp-2",children:u.excerpt}),n.jsxs("p",{className:"text-xs text-[var(--color-muted-foreground)] mt-2",children:[u.readTime," · ",Wn(u.date)]})]}),u.coverImage&&n.jsx("img",{src:u.coverImage,alt:"",className:"w-[120px] h-[80px] object-cover rounded-lg flex-shrink-0"})]},u.slug))})]})]})]})})}function cu(){const i=window.location.hash.slice(1);return i.startsWith("blog/")?i.slice(5):null}function Uh({initialSlug:i}){const[l,c]=Se.useState(i??cu()),m=Hh(),u=m.find(S=>S.slug===l);Se.useEffect(()=>{u&&(document.title=`${u.title} | Servicios APC Bogotá`)},[u]),Se.useEffect(()=>{const S=()=>{const D=cu();c(D),D&&window.scrollTo({top:0})};return window.addEventListener("hashchange",S),()=>window.removeEventListener("hashchange",S)},[]);const f=S=>{c(S),window.location.hash=`blog/${S}`,window.scrollTo({top:0,behavior:"smooth"})},g=()=>{c(null),window.location.hash="blog",window.scrollTo({top:0,behavior:"smooth"})};if(u)return n.jsx(Fh,{post:u,allPosts:m,onBack:g,onSelect:f});const v=m[0],k=m.slice(1);return n.jsxs("div",{className:"min-h-screen",children:[n.jsxs("div",{className:"max-w-[1200px] mx-auto px-5 pt-12 pb-16",children:[n.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4",children:"Blog · Servicios APC"}),n.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold text-[var(--color-foreground)] leading-tight max-w-3xl",children:"Cámaras Hikvision + IA para empresas"}),n.jsx("p",{className:"text-lg text-[var(--color-muted-foreground)] mt-4 max-w-2xl leading-relaxed",children:"Guías técnicas, comparativas y casos reales sobre CCTV con inteligencia artificial, automatización y seguridad empresarial en Bogotá."})]}),v&&n.jsx("div",{className:"max-w-[1200px] mx-auto px-5 mb-16",children:n.jsxs("button",{onClick:()=>f(v.slug),className:"group grid md:grid-cols-[1fr_1fr] gap-8 items-center text-left w-full",children:[v.coverImage&&n.jsx("div",{className:"overflow-hidden rounded-2xl",children:n.jsx("img",{src:v.coverImage,alt:v.title,className:"w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700"})}),n.jsxs("div",{className:"space-y-4 py-4",children:[n.jsx("p",{className:"text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium",children:"Destacado"}),n.jsx("h3",{className:"font-serif text-3xl md:text-4xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-[1.15]",children:v.title}),n.jsx("p",{className:"text-[var(--color-muted-foreground)] leading-relaxed text-lg",children:v.excerpt}),n.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-xs font-bold text-[var(--color-accent)]",children:"SA"}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-medium text-[var(--color-foreground)]",children:v.author}),n.jsxs("p",{className:"text-xs text-[var(--color-muted-foreground)]",children:[v.readTime," · ",Wn(v.date)]})]})]})]})]})}),n.jsx("div",{className:"max-w-[1200px] mx-auto px-5",children:n.jsx("div",{className:"border-t border-[var(--color-border)]"})}),n.jsxs("div",{className:"max-w-[1200px] mx-auto px-5 py-12",children:[n.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12",children:k.map(S=>n.jsxs("button",{onClick:()=>f(S.slug),className:"group text-left",children:[S.coverImage&&n.jsx("div",{className:"overflow-hidden rounded-xl mb-4",children:n.jsx("img",{src:S.coverImage,alt:S.title,className:"w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700",loading:"lazy"})}),n.jsxs("div",{className:"space-y-2.5",children:[n.jsx("p",{className:"text-xs text-[var(--color-muted-foreground)]",children:S.category}),n.jsx("h3",{className:"font-serif text-xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-snug",children:S.title}),n.jsx("p",{className:"text-sm text-[var(--color-muted-foreground)] leading-relaxed line-clamp-3",children:S.excerpt}),n.jsxs("div",{className:"flex items-center gap-3 pt-1",children:[n.jsx("div",{className:"w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-[9px] font-bold text-[var(--color-accent)]",children:"SA"}),n.jsxs("p",{className:"text-xs text-[var(--color-muted-foreground)]",children:[S.readTime," · ",Wn(S.date)]})]})]})]},S.slug))}),m.length===0&&n.jsx("div",{className:"text-center py-20 text-[var(--color-muted-foreground)]",children:n.jsx("p",{className:"text-lg",children:"Próximamente más artículos..."})})]})]})}function du({slug:i}){return n.jsx("div",{className:"min-h-screen",style:{color:"var(--color-foreground)"},children:n.jsx(Uh,{initialSlug:i})})}const Xr=[{id:"camaras",icon:fa,color:"#c94a0a",title:"Analítica de Video con IA para Hikvision/Dahua",tagline:"Sus cámaras dejan de vigilar y empiezan a auditar.",description:"Reprogramamos sus cámaras Hikvision/Dahua RTSP/ONVIF actuales con módulos YOLO: conteo de personas, mapas de calor, arqueo de caja asistido, detección de intrusión y reportes automáticos. No necesita comprar hardware nuevo: su CCTV existente ya es compatible con la mayoría de modelos Hikvision 2018+. Integración a n8n para alertas en Telegram/Email/WhatsApp.",bullets:["Conteo de personas y control de aforo en tiempo real","Mapas de calor y ocupación por zonas (heatmaps)","Arqueo de caja asistido por IA: video del cajón + monto","Detección de intrusión y alertas 24/7 sin vigilar pantallas","Se integra a su CCTV actual Hikvision/Dahua sin comprar hardware nuevo","Alertas por Telegram, Email y WhatsApp vía n8n"],image:"https://images.unsplash.com/photo-1760553120324-d3d2bf53852b?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",imageAlt:"Dashboard analítica de video IA sobre cámaras Hikvision"},{id:"cctv",icon:_i,color:"#0ea5e9",title:"Instalación CCTV Inteligente Hikvision en Bogotá",tagline:"Cobertura total, sin puntos ciegos, lista para IA.",description:"Planificamos e instalamos infraestructura CCTV profesional con cámaras Hikvision certificadas ya listas para analítica IA. Cableado estructurado, configuración RTSP/ONVIF, reprogramación de equipos existentes que cumplan estándar, cobertura 100% sin puntos ciegos. Soporte técnico presencial en Bogotá y remoto en toda Colombia. ¿Ya tiene Hikvision? Lo preparamos para IA sin cambiar cámaras.",bullets:["Planificación y tendido de cableado profesional estructurado","Cámaras Hikvision compatibles IA (RTSP/ONVIF) instaladas y configuradas","Reprogramación de hardware existente Hikvision/Dahua que cumpla estándar","Cobertura del 100% de puntos ciegos con mapas de calor","Soporte técnico remoto y presencial en Bogotá","Garantía extendida Hikvision + capa IA incluida"],image:"https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",imageAlt:"Instalación profesional cámaras Hikvision con analítica IA"},{id:"bots",icon:Un,color:"#25d366",title:"Bots de WhatsApp con IA",tagline:"Atienda a sus clientes 24/7, sin contratar más personal.",description:"Desarrollamos bots de WhatsApp con identidad propia que responden, agendan citas, procesan pedidos y califican leads de forma automática. Desde un menú interactivo básico hasta ecosistemas con APIs, pagos y agendamiento. Se conectan a su CRM y a la analítica de video: si una cámara detecta aforo lleno, el bot avisa al gerente.",bullets:["Atención automática 24 horas con IA conversacional","Menú interactivo, catálogos y respuestas con IA","Agendamiento de citas y pedidos integrados","Calificación y seguimiento de leads automático","Transferencia a agente humano cuando se necesita","Integración con analítica de video: alertas de aforo → WhatsApp"],image:"https://images.unsplash.com/photo-1636751364472-12bfad09b451?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",imageAlt:"Bot de WhatsApp para atención automática de clientes"},{id:"automatizacion",icon:Hi,color:"#7c3aed",title:"Automatización de Procesos (n8n + APIs)",tagline:"Menos trabajo manual, más resultados.",description:"Diseñamos flujos de trabajo indestructibles que conectan sus herramientas, eliminan tareas repetitivas y entregan reportes programados. Menos errores humanos, menos tiempo perdido, más control. Conectamos su CCTV, CRM, ERP y WhatsApp en un solo cerebro n8n.",bullets:["Flujos automáticos e integraciones API (n8n self-hosted)","Onboarding digital de clientes con validación IA","CRM con seguimiento post-venta automatizado","Reportes programados 24 horas vía Email/Telegram","Notificaciones y alertas automáticas cruzadas","Integración CCTV → Alerta → Acción (WhatsApp, CRM, Dashboard)"],image:"https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",imageAlt:"Automatización de procesos empresariales con n8n"},{id:"dashboards",icon:ig,color:"#f59e0b",title:"Dashboards e Integración de Datos",tagline:"Todos sus datos CCTV + CRM + ERP, en una sola pantalla.",description:"Centralizamos la información dispersa de su operación en tableros ejecutivos claros. Integramos su software contable, CRM, analítica de video Hikvision y herramientas para que la gerencia tome decisiones con datos, no con corazonadas. Mapas de calor, conteo histórico, arqueos, tickets WhatsApp: todo unificado.",bullets:["Dashboards ejecutivos en tiempo real (Looker Studio / Grafana)","Integración entre CCTV Hikvision, CRM, ERP y WhatsApp","Bases de datos operativas centralizadas y replicadas","Reportería automatizada (Looker / PDF / Telegram)","Control de acceso a la información por roles","Exportación a Excel/CSV para contabilidad"],image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",imageAlt:"Dashboard ejecutivo con métricas CCTV + CRM + ventas"},{id:"web",icon:bt,color:"#10b981",title:"Desarrollo Web y SEO Local en Bogotá (DogWeb)",tagline:"Presencia digital que atrae clientes reales en Google Maps.",description:"Creamos sitios web resilientes y posicionamos su negocio donde sus clientes en Bogotá lo buscan: Google Maps y búsquedas locales de la ciudad. Desde landings hasta portales corporativos con bases de datos y SEO técnico. Conectamos el sitio a su CRM y WhatsApp: lead web → bot → cita → venta.",bullets:["Sitios web corporativos y landings de alta conversión","Posicionamiento en Google Maps / SEO local Bogotá","Infraestructura web resiliente (Cloudflare + CDN)","Formularios, bases de datos y CRM integrado","Soporte y mantenimiento mensual incluido","CTAs cruzados: Web → WhatsApp Bot → CCTV Demo"],image:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",imageAlt:"Desarrollo web y posicionamiento SEO local en Bogotá"}],Wh=[{domain:"apccore.site",name:"APC Core",description:"Sistemas de control, bases de datos operativas y tableros centralizados. El cerebro que une CCTV + IA + CRM.",icon:$i},{domain:"apcautomatizacion.site",name:"APC Automatización",description:"Flujos n8n que conectan su CCTV Hikvision + WhatsApp + CRM + ERP. Alerta de intrusión → WhatsApp al gerente → Ticket en CRM.",icon:Hi},{domain:"apcvisionai.site",name:"APC Visión AI",description:"Especialistas en analítica YOLO sobre Hikvision/Dahua: conteo, mapas de calor, arqueo de caja, detección PPE, intrusión perimetral.",icon:fa},{domain:"dogweb.lat",name:"DogWeb",description:"Desarrollo web, SEO local / Google Maps y resiliencia de red. Su web posicionada en Bogotá + formularios → WhatsApp Bot → Venta.",icon:bt}],Gh=[{icon:Fg,title:"Arquitectura resiliente (Offline-First)",description:"Si se corta el internet, su Hikvision + IA sigue grabando y analizando en local (conteo, intrusión, arqueo). Sincroniza al volver la señal. Nada se pierde."},{icon:pa,title:"Cero tecnicismos, solo datos accionables",description:"Reportes diarios limpios vía Email/Telegram/WhatsApp. No necesita saber de IA ni YOLO; solo leer: 'Arqueo OK', 'Aforo 78%', 'Intrusión 0'."},{icon:lr,title:"Hardware Hikvision reutilizable + IA",description:"No lo obligamos a comprar equipos costosos: reprogramamos su Hikvision/Dahua actual si cumple RTSP/ONVIF. Si necesita nuevo, instalamos Hikvision certificado IA-ready."}],Yh=[{client:"Ferretería El Progreso",sector:"Ferretería · Suba, Bogotá",implementation:"Hikvision 4K ColorVu + IA YOLO: detección de placas vehiculares nocturnas, conteo de clientes, arqueo de caja asistido.",result:"Recuperaron 3 bultos robados en 48h gracias a placa legible a las 2am. Aforo optimizado en horas pico. Cero discrepancias en arqueos mensuales."},{client:"Clínica Dental Sonrisa Viva",sector:"Salud · Chapinero, Bogotá",implementation:"Hikvision 2MP WDR + IA: control de aforo salas de espera, detección de caídas de pacientes, analítica de acceso a zonas restringidas (RX, esterilización).",result:"Cumplimiento normativo HIPAA/Ley 1581. Cero incidentes en zona RX. Alerta automática a enfermería ante caída (tiempo respuesta < 30 seg)."},{client:"Distribuidora Jone",sector:"Distribución · Bogotá",implementation:"Analítica YOLO sobre Hikvision existentes + CCTV nuevo en bodega + SEO local Google Maps + embudos conversión WhatsApp Bot.",result:"Visibilidad 100% puntos ciegos bodega. Aumento 340% cotizaciones orgánicas Bogotá. Bot WhatsApp atiende 80% consultas sin humano."}],Qh=[{q:"¿Tengo que cambiar todas las cámaras Hikvision de mi negocio para tener Inteligencia Artificial?",a:"No. Si sus cámaras Hikvision/Dahua actuales admiten RTSP u ONVIF (la mayoría desde 2018), las reprogramamos para inyectarles módulos YOLO sin gasto extra en hardware. Modelos Hikvision 2MP/4MP/4K ColorVu, AcuSense, DeepinView son 100% compatibles."},{q:"¿Qué pasa si en el local se corta el internet o la luz?",a:"Nuestro ecosistema cuenta con arquitectura Offline-First: el procesamiento IA ocurre en local (edge) en su red. Si el internet se va por horas, el sistema sigue grabando, contando personas, detectando intrusos y arqueando cajas, y sincroniza automáticamente al recuperar la señal. Nada se pierde."},{q:"¿La Inteligencia Artificial escucha conversaciones privadas de empleados o clientes?",a:"No. La IA de audio se activa solo bajo disparador específico (ej. sonido del cajón de la caja al abrirse) durante los segundos necesarios para documentar el monto. El resto de la jornada se protege la privacidad del equipo por diseño (privacy by design)."},{q:"¿Ustedes venden cámaras Hikvision o solo el software de IA?",a:"Ofrecemos ambas opciones: (1) Si ya tiene Hikvision/Dahua RTSP/ONVIF, solo instalamos la capa IA (analítica YOLO, alertas, dashboard). (2) Si necesita infraestructura nueva, instalamos CCTV Hikvision certificado IA-ready (ColorVu, AcuSense, DeepinView) + configuramos la analítica completa. Usted elige según su presupuesto."},{q:"¿Cómo se ve el análisis de video con IA en tiempo real en mi celular?",a:"Recibe alertas por Telegram/Email/WhatsApp con clip de video del evento (intrusión, aforo excedido, arqueo discrepante) y accede a dashboard web con mapas de calor, conteo histórico, arqueos diarios y reportes automáticos. Todo desde su celular, sin apps extra: usa Telegram o WhatsApp."},{q:"¿Qué modelos Hikvision recomiendan para analítica de video con IA?",a:"Para analítica YOLO recomendamos: (1) Hikvision ColorVu 4K/4MP — visión nocturna a color real, ideal para placas y rostros. (2) Hikvision AcuSense 2MP/4MP — filtrado falso positivo (persona/vehículo), costo/beneficio óptimo. (3) Hikvision DeepinView — IA embebida en cámara (conteo, PPE, cola), máxima precisión. Lo asesoramos según su caso y presupuesto."},{q:"¿La analítica de video funciona con Dahua u otras marcas?",a:"Sí. Cualquier cámara que exponga stream RTSP u ONVIF Profile S/T/G es compatible. Dahua, Uniview, Axis, Hanwha, TP-Link VIGI: si tiene stream estándar, le inyectamos YOLO. La diferencia es que Hikvision ColorVu/AcuSense nos da mejor calidad de imagen nocturna para IA."},{q:"¿Ustedes administran mi negocio o mi personal?",a:"No. Diseñamos, instalamos y mantenemos la infraestructura digital que automatiza su control. Le entregamos las herramientas exactas para que usted administre su empresa en minutos desde su celular, con datos claros y decisiones respaldadas. No supervisamos personal ni tomamos decisiones gerenciales."}],Kh=[{icon:Mg,title:"Cámaras Hikvision que auditan, no solo vigilan",description:"YOLO convierte cada frame en dato accionable: conteo, intrusión, aforo, arqueo. Sus cámaras dejan de ser gasto pasivo y se convierten en centro de ganancia."},{icon:lr,title:"Offline-First: si se va el internet, la IA sigue",description:"Procesamiento edge en su red local. Sin internet, la IA sigue contando, detectando, arqueando. Sincroniza al volver la señal. Cero pérdida de datos."},{icon:Un,title:"Alertas en Telegram/WhatsApp en segundos",description:"Intrusión, aforo excedido, arqueo discrepante: recibe clip de video + ubicación en Telegram/Email/WhatsApp al instante. Decides desde el celular."},{icon:Qn,title:"Dashboard 24/7 sin vigilar pantallas",description:"Mapas de calor, conteo histórico, arqueos diarios, alertas configurables. Todo en un dashboard web accesible desde el celular. Cero tecnicismos."},{icon:ku,title:"Hikvision ColorVu 4K: vea la placa a las 2 AM",description:"Instalamos ColorVu 4K / AcuSense / DeepinView. Visión nocturna a color real: vea placas, rostros, billetes en oscuridad total. No más 'cámaras borrosas'."},{icon:pa,title:"Su Hikvision actual ya sirve: sin comprar hardware nuevo",description:"RTSP/ONVIF estándar = compatible. La mayoría de Hikvision 2018+ ya sirven. Le inyectamos YOLO por red. Ahorro real: 0€ en cámaras nuevas si ya tiene compatibles."}];function Zh(){const[i,l]=Se.useState(!1),[c,m]=Se.useState(!1),[u,f]=Se.useState({nombre:"",email:"",telefono:"",mensaje:""}),[g,v]=Se.useState(!1),[k,S]=Se.useState(!1),[D,z]=Se.useState(""),[V,ae]=Se.useState(0),[K,X]=Se.useState(-1),[J,Fe]=Se.useState(window.location.hash.slice(1));Se.useEffect(()=>{const w=()=>m(window.scrollY>40);return window.addEventListener("scroll",w),()=>window.removeEventListener("scroll",w)},[]),Se.useEffect(()=>{const w=()=>Fe(window.location.hash.slice(1));return window.addEventListener("hashchange",w),()=>window.removeEventListener("hashchange",w)},[]);const Be={negocio:{title:"Cámaras de Seguridad para Negocio en Bogotá | 500+ instalaciones",description:"Instalación de cámaras para negocio en Bogotá con IA. Hikvision ColorVu, analítica YOLO, aforo, arqueo y alertas WhatsApp. Desde $1.800.000. Cotiza gratis."},instalacion:{title:"Instalación de Cámaras de Seguridad en Bogotá | Hikvision Certificado",description:"Instalación profesional de cámaras de seguridad en Bogotá: cableado estructurado sin puntos ciegos, configuración remota y equipos IA-ready. Cotización con visita técnica."},casa:{title:"Cámaras para Instalar en Casa en Bogotá | Instalación el mismo día",description:"Cámaras para casa en Bogotá con visión nocturna a color y acceso desde el celular. Desde $600.000 por cámara, instalación el mismo día en toda la ciudad."},"precios-camaras":{title:"Precios de Instalación de Cámaras de Seguridad en Bogotá 2026",description:"Cuánto cuesta instalar cámaras de seguridad en Bogotá: desde $1.800.000 para 4 cámaras con instalación. Precios cerrados, IVA incluido y cotización gratis."},"mantenimiento-camaras":{title:"Mantenimiento de Cámaras de Seguridad en Bogotá | Preventivo y Correctivo",description:"Mantenimiento de cámaras de seguridad en Bogotá: preventivo, correctivo y supervisión remota para Hikvision/Dahua. Limpieza, firmware, cableado y configuración. Desde $180.000. Diagnóstico gratis."},consultor:{title:"Consultor Tecnológico para Empresas en Bogotá | Diagnóstico con ROI",description:"Consultor tecnológico en Bogotá: auditoría de seguridad CCTV con IA, automatización de procesos y dashboards. Diagnóstico gratis con implementación."},blog:{title:"Blog de Cámaras de Seguridad e IA | Servicios APC Bogotá",description:"Guías, comparativas y casos reales sobre CCTV Hikvision con inteligencia artificial en Bogotá: precios, instalación, analítica IA, automatización y seguridad empresarial."}};Se.useEffect(()=>{const w=Be[J];if(!w)return;document.title=w.title;let W=document.querySelector('meta[name="description"]');W||(W=document.createElement("meta"),W.setAttribute("name","description"),document.head.appendChild(W)),W.setAttribute("content",w.description)},[J]);const $e={negocio:ah,suba:rh,kennedy:nh,chapinero:oh,usaquen:th,fontibon:sh,instalacion:ch,casa:mh,"precios-camaras":gh,"mantenimiento-camaras":xh,consultor:Ch,blog:du},xe=J.startsWith("blog/")?J.slice(5):null,we=$e[J];if(we||xe)return n.jsxs("div",{className:"min-h-screen bg-background text-foreground font-sans",children:[n.jsx("nav",{className:"sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-14",children:[n.jsxs("button",{onClick:()=>{window.location.hash=""},className:"flex items-center gap-2.5",children:[n.jsx("img",{src:"/logo.webp",alt:"Servicios APC",className:"h-8 w-auto"}),n.jsx("span",{className:"text-foreground font-semibold text-sm hidden sm:block",children:"Servicios APC"})]}),n.jsx("a",{href:"https://wa.me/573337450634",target:"_blank",rel:"noopener noreferrer",className:"bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity",children:"WhatsApp Gratis"})]})}),xe?n.jsx(du,{slug:xe}):n.jsx(we,{}),n.jsx(Gd,{})]});const ne=w=>{document.getElementById(w)?.scrollIntoView({behavior:"smooth"}),l(!1)},De=async w=>{w.preventDefault(),S(!0),z("");try{(await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"c5cdb094-a9cd-4e68-9041-2fafe475fff6",subject:"Nuevo mensaje desde serviciosapc.site",from_name:"Servicios APC Website",nombre:u.nombre,email:u.email,telefono:u.telefono,mensaje:u.mensaje})})).json()).success?(v(!0),f({nombre:"",email:"",telefono:"",mensaje:""})):z("No pudimos enviar tu mensaje. Escríbenos por WhatsApp o inténtalo de nuevo.")}catch{z("Error de conexión. Escríbenos por WhatsApp o inténtalo de nuevo.")}finally{S(!1)}};return n.jsxs("div",{className:"min-h-screen bg-background text-foreground font-sans overflow-x-hidden",children:[n.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${c?"bg-background/95 backdrop-blur-sm border-b border-border":""}`,children:[n.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16",children:[n.jsxs("button",{onClick:()=>ne("inicio"),className:"flex items-center gap-2.5",children:[n.jsx("img",{src:"/logo.webp",alt:"Servicios APC",className:"h-9 w-auto"}),n.jsx("span",{className:"text-foreground font-semibold text-sm tracking-wide hidden sm:block",children:"Servicios APC"})]}),n.jsxs("div",{className:"hidden md:flex items-center gap-7",children:[[["Servicios","servicios"],["Ecosistema","ecosistema"],["Casos","casos"],["Preguntas","faq"],["Quiénes somos","nosotros"],["Contacto","contacto"]].map(([w,W])=>n.jsx("button",{onClick:()=>ne(W),className:"text-sm text-muted-foreground hover:text-foreground transition-colors font-medium",children:w},W)),n.jsx("a",{href:"#blog",className:"text-sm text-muted-foreground hover:text-foreground transition-colors font-medium",children:"Blog"})]}),n.jsx("div",{className:"hidden md:flex items-center gap-3",children:n.jsxs("a",{href:"https://wa.me/573337450634",target:"_blank",rel:"noopener noreferrer",className:"bg-accent text-accent-foreground px-5 py-2 text-sm font-medium hover:bg-accent/90 transition-colors flex items-center gap-2",children:[n.jsx(Un,{size:14})," WhatsApp"]})}),n.jsx("button",{className:"md:hidden text-foreground p-1",onClick:()=>l(!i),children:i?n.jsx(Kg,{size:20}):n.jsx(gg,{size:20})})]}),i&&n.jsxs("div",{className:"md:hidden bg-background border-b border-border px-6 py-5 space-y-3",children:[[["Servicios","servicios"],["Ecosistema","ecosistema"],["Casos","casos"],["Preguntas","faq"],["Quiénes somos","nosotros"],["Contacto","contacto"]].map(([w,W])=>n.jsx("button",{onClick:()=>ne(W),className:"block w-full text-left text-sm text-muted-foreground hover:text-foreground py-1.5",children:w},W)),n.jsx("a",{href:"#blog",onClick:()=>l(!1),className:"block w-full text-left text-sm text-muted-foreground hover:text-foreground py-1.5",children:"Blog"})]})]}),n.jsxs("section",{id:"inicio",className:"relative min-h-screen flex items-center pt-16 overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 z-0",children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1782743549510-926bf57fc98c?w=1200&h=675&fit=crop&auto=format&fm=webp&q=40",alt:"Ciudad moderna iluminada representando tecnología e innovación en Bogotá",className:"w-full h-full object-cover opacity-25",width:1600,height:900,loading:"eager",fetchPriority:"high",decoding:"async"}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40"})]}),n.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center",children:[n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-6",children:"Servicios APC · Bogotá, Colombia"}),n.jsx("h1",{className:"font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6",children:"Cámaras de seguridad para empresas que piensan: Hikvision + IA en tiempo real."}),n.jsx("p",{className:"text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl",children:"¿Cuánto te costó la última vez que tu cámara Hikvision justo NO grabó? Desde Bogotá, convertimos sus cámaras Hikvision/Dahua actuales en auditores inteligentes 24/7: analítica YOLO, CCTV offline-first, bots WhatsApp 24/7 y SEO local. No vendemos cámaras borrosas. Instalamos pruebas 4K reales. Asesoría gratis."}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[n.jsxs("button",{onClick:()=>ne("servicios"),className:"bg-accent text-accent-foreground px-8 py-4 font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2",children:["Descubre cómo podemos ayudarte ",n.jsx(Ba,{size:16})]}),n.jsx("button",{onClick:()=>ne("contacto"),className:"border border-border text-foreground px-8 py-4 font-medium hover:bg-secondary transition-colors",children:"Hablar con un asesor"})]}),n.jsx("div",{className:"flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-border",children:[["Control del dinero","Auditoría con IA"],["Offline-First","Nunca se pierde nada"],["Sin tecnicismos","Reportes claros"]].map(([w,W])=>n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(pa,{size:14,className:"text-accent flex-shrink-0"}),n.jsxs("div",{children:[n.jsx("p",{className:"text-xs font-semibold text-foreground",children:w}),n.jsx("p",{className:"text-xs text-muted-foreground",children:W})]})]},w))})]}),n.jsx("div",{className:"hidden lg:block",children:n.jsxs("div",{className:"border border-border bg-card/80 backdrop-blur-sm p-8 space-y-4",children:[n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-6",children:"Nuestros servicios"}),Xr.map((w,W)=>{const je=w.icon;return n.jsxs("button",{onClick:()=>{ae(W),ne("servicios")},className:"w-full flex items-center gap-4 p-4 border border-border hover:border-accent/30 hover:bg-secondary transition-all duration-200 text-left group",children:[n.jsx(je,{size:18,style:{color:w.color},className:"flex-shrink-0"}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsx("p",{className:"text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate",children:w.title}),n.jsx("p",{className:"text-xs text-muted-foreground truncate",children:w.tagline})]}),n.jsx(ue,{size:14,className:"text-muted-foreground flex-shrink-0"})]},w.id)})]})})]})]}),n.jsx("section",{id:"servicios",className:"py-24 border-t border-border",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[n.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 mb-16",children:[n.jsx("div",{className:"lg:col-span-3",children:n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase",children:"Nuestros Servicios"})}),n.jsxs("div",{className:"lg:col-span-9",children:[n.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4",children:"Servicios de tecnología y automatización para empresas"}),n.jsx("p",{className:"text-muted-foreground max-w-xl leading-relaxed",children:"Soluciones tecnológicas diseñadas para empresas en Bogotá y toda Colombia que quieren operar mejor, reducir pérdidas y crecer con inteligencia."})]})]}),n.jsx("div",{className:"border-t border-border",children:Xr.map((w,W)=>{const je=w.icon,sa=V===W;return n.jsxs("div",{className:"border-b border-border",children:[n.jsxs("button",{onClick:()=>ae(sa?-1:W),"aria-expanded":sa,className:"w-full flex items-center gap-4 py-6 text-left group",children:[n.jsx(je,{size:22,style:{color:w.color},className:"flex-shrink-0"}),n.jsxs("div",{className:"flex-1 min-w-0",children:[n.jsx("h3",{className:"font-serif text-xl md:text-2xl font-bold group-hover:text-accent transition-colors",children:w.title}),n.jsx("p",{className:"font-mono text-xs tracking-widest uppercase mt-1",style:{color:w.color},children:w.tagline})]}),n.jsx(ue,{size:22,className:`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${sa?"rotate-90":""}`})]}),sa&&n.jsxs("div",{className:"pb-10 grid lg:grid-cols-2 gap-10 items-center",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-muted-foreground leading-relaxed mb-6",children:w.description}),n.jsx("ul",{className:"space-y-3 mb-8",children:w.bullets.map(Xe=>n.jsxs("li",{className:"flex items-start gap-3 text-sm",children:[n.jsx(pa,{size:15,className:"mt-0.5 flex-shrink-0",style:{color:w.color}}),n.jsx("span",{children:Xe})]},Xe))}),n.jsxs("button",{onClick:()=>ne("contacto"),className:"flex items-center gap-2 font-medium text-sm px-6 py-3 border transition-colors hover:opacity-80",style:{borderColor:w.color,color:w.color},children:["Solicitar información ",n.jsx(Ba,{size:14})]})]}),n.jsxs("div",{className:"relative order-first lg:order-last",children:[n.jsx("div",{className:"bg-secondary h-2 w-full absolute -top-2 left-0",style:{backgroundColor:w.color,opacity:.3}}),n.jsx("img",{src:w.image,alt:w.imageAlt,className:"w-full aspect-[4/3] object-cover",width:800,height:560,loading:"lazy",decoding:"async"})]})]})]},w.id)})})]})}),n.jsx("section",{id:"beneficios",className:"py-24 bg-secondary border-y border-border",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[n.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 mb-16",children:[n.jsx("div",{className:"lg:col-span-3",children:n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase",children:"Beneficios"})}),n.jsxs("div",{className:"lg:col-span-9",children:[n.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4",children:"Beneficios de automatizar su empresa con Servicios APC"}),n.jsx("p",{className:"text-muted-foreground max-w-xl leading-relaxed",children:"Mejore la eficiencia y competitividad de su empresa con soluciones tecnológicas hechas para la realidad colombiana."})]})]}),n.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border",children:Kh.map(w=>{const W=w.icon;return n.jsxs("div",{className:"bg-secondary p-8 hover:bg-background transition-colors duration-200",children:[n.jsx(W,{size:24,className:"text-accent mb-5"}),n.jsx("h3",{className:"font-serif text-lg font-bold mb-3",children:w.title}),n.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:w.description})]},w.title)})})]})}),n.jsx("section",{id:"nosotros",className:"py-24 border-b border-border",children:n.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:n.jsxs("div",{className:"grid lg:grid-cols-12 gap-12 items-center",children:[n.jsxs("div",{className:"lg:col-span-5 relative",children:[n.jsx("div",{className:"absolute -top-4 -left-4 w-full h-full border border-accent/30","aria-hidden":"true"}),n.jsxs("picture",{children:[n.jsx("source",{srcSet:"/servicios-apc.webp",type:"image/webp"}),n.jsx("img",{src:"/servicios-apc.jpeg",alt:"Fundador de Servicios APC — experto en soluciones tecnológicas para empresas en Bogotá, Colombia",width:900,height:1200,className:"w-full object-cover aspect-[3/4] relative z-10",loading:"lazy",decoding:"async"})]}),n.jsxs("div",{className:"absolute bottom-0 left-0 right-0 z-20 bg-accent px-6 py-4",children:[n.jsx("p",{className:"text-accent-foreground font-mono text-xs tracking-widest uppercase",children:"Fundador — Servicios APC"}),n.jsx("p",{className:"text-accent-foreground/70 text-xs mt-0.5 font-mono",children:"Bogotá, Colombia"})]})]}),n.jsxs("div",{className:"lg:col-span-7",children:[n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-6",children:"Quiénes somos"}),n.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight",children:"Empresa de tecnología con base en Bogotá."}),n.jsxs("div",{className:"space-y-4 text-muted-foreground leading-relaxed",children:[n.jsxs("p",{children:[n.jsx("strong",{className:"text-foreground",children:"Servicios APC"})," es una empresa de tecnología con sede en Bogotá (Cra. 52c #39b-22). No vendemos tecnología por moda: diseñamos, instalamos y mantenemos la infraestructura digital que le devuelve el control de su dinero, su productividad y su operación."]}),n.jsxs("p",{children:["Nuestra presencia local nos permite ofrecer"," ",n.jsx("strong",{className:"text-foreground",children:"soporte técnico presencial en Bogotá"})," ","con respuesta rápida, y desplegar arquitectura y desarrollo de forma remota para clientes en el resto de Colombia."]}),n.jsx("p",{children:"No administramos su negocio ni supervisamos a su personal. Le entregamos las herramientas exactas para que usted administre su empresa en minutos desde su celular, con datos claros y decisiones respaldadas."})]}),n.jsxs("div",{className:"grid sm:grid-cols-2 gap-6 mt-8",children:[n.jsxs("div",{className:"border border-border p-6",children:[n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-3",children:"Misión"}),n.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Blindar la operación de cada negocio con infraestructura digital resiliente y control automatizado, eliminando la pérdida de dinero y el desorden — sin exigir conocimientos técnicos al empresario."})]}),n.jsxs("div",{className:"border border-border p-6",children:[n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-3",children:"Visión"}),n.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:"Ser el estándar de infraestructura digital indestructible en Colombia y la región, donde cada cámara, cada flujo y cada dato trabajan para proteger y hacer crecer el negocio."})]})]}),n.jsx("div",{className:"mt-10 pt-10 border-t border-border space-y-6",children:Gh.map(w=>{const W=w.icon;return n.jsxs("div",{className:"flex items-start gap-4",children:[n.jsx("div",{className:"w-10 h-10 border border-border flex items-center justify-center flex-shrink-0",children:n.jsx(W,{size:16,className:"text-accent"})}),n.jsxs("div",{children:[n.jsx("p",{className:"font-semibold text-foreground text-sm mb-1",children:w.title}),n.jsx("p",{className:"text-xs text-muted-foreground leading-relaxed",children:w.description})]})]},w.title)})})]})]})})}),n.jsx("section",{id:"ecosistema",className:"py-24 bg-secondary border-b border-border",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[n.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 mb-16",children:[n.jsx("div",{className:"lg:col-span-3",children:n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase",children:"Ecosistema APC"})}),n.jsxs("div",{className:"lg:col-span-9",children:[n.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4",children:"Un ecosistema, todo bajo control"}),n.jsx("p",{className:"text-muted-foreground max-w-xl leading-relaxed",children:"Servicios APC integra cuatro líneas especializadas que se conectan entre sí para blindar cada frente de su operación."})]})]}),n.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border",children:Wh.map(w=>{const W=w.icon;return n.jsxs("a",{href:`https://${w.domain}`,target:"_blank",rel:"noopener noreferrer",className:"group bg-secondary p-8 hover:bg-background transition-colors duration-200 block",children:[n.jsx(W,{size:24,className:"text-accent mb-5"}),n.jsx("h3",{className:"font-serif text-lg font-bold mb-1 group-hover:text-accent transition-colors",children:w.name}),n.jsxs("p",{className:"font-mono text-xs text-accent mb-3 flex items-center gap-1",children:[n.jsx(Jr,{size:11})," ",w.domain]}),n.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:w.description}),n.jsxs("span",{className:"mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity",children:["Visitar sitio ",n.jsx(Ba,{size:12})]})]},w.domain)})})]})}),n.jsx("section",{id:"casos",className:"py-24 border-b border-border",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[n.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 mb-16",children:[n.jsx("div",{className:"lg:col-span-3",children:n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase",children:"Casos de éxito"})}),n.jsxs("div",{className:"lg:col-span-9",children:[n.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4",children:"Casos de éxito de clientes en Bogotá"}),n.jsx("p",{className:"text-muted-foreground max-w-xl leading-relaxed",children:"Empresas de Bogotá que ya operan con más control y menos pérdidas gracias a la infraestructura de Servicios APC."})]})]}),n.jsx("div",{className:"grid md:grid-cols-3 gap-px bg-border",children:Yh.map(w=>n.jsxs("div",{className:"bg-background p-8",children:[n.jsx(yg,{size:24,className:"text-accent mb-5"}),n.jsx("h3",{className:"font-serif text-lg font-bold mb-1",children:w.client}),n.jsx("p",{className:"font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5",children:w.sector}),n.jsx("p",{className:"text-xs font-semibold text-foreground mb-1",children:"Implementación"}),n.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed mb-4",children:w.implementation}),n.jsx("p",{className:"text-xs font-semibold text-foreground mb-1",children:"Resultado"}),n.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:w.result})]},w.client))})]})}),n.jsx("section",{id:"faq",className:"py-24 bg-secondary border-b border-border",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[n.jsxs("div",{className:"grid lg:grid-cols-12 gap-8 mb-16",children:[n.jsx("div",{className:"lg:col-span-3",children:n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase",children:"Preguntas frecuentes"})}),n.jsxs("div",{className:"lg:col-span-9",children:[n.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4",children:"Preguntas frecuentes"}),n.jsx("p",{className:"text-muted-foreground max-w-xl leading-relaxed",children:"Resolvemos las dudas más comunes sobre nuestra infraestructura, privacidad y funcionamiento sin tecnicismos."})]})]}),n.jsx("div",{className:"max-w-3xl mx-auto border-t border-border",children:Qh.map((w,W)=>{const je=K===W;return n.jsxs("div",{className:"border-b border-border",children:[n.jsxs("button",{onClick:()=>X(je?-1:W),"aria-expanded":je,className:"w-full flex items-center justify-between gap-4 py-6 text-left group",children:[n.jsx("span",{className:"font-serif text-lg font-bold group-hover:text-accent transition-colors",children:w.q}),n.jsx(ue,{size:20,className:`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${je?"rotate-90":""}`})]}),je&&n.jsx("p",{className:"text-muted-foreground leading-relaxed pb-6 -mt-1",children:w.a})]},W)})})]})}),n.jsx("section",{id:"contacto",className:"py-24 border-b border-border",children:n.jsx("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:n.jsxs("div",{className:"grid lg:grid-cols-12 gap-12",children:[n.jsxs("div",{className:"lg:col-span-5",children:[n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-6",children:"Contacto"}),n.jsx("h2",{className:"font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight",children:"Contacte a Servicios APC en Bogotá"}),n.jsx("p",{className:"text-muted-foreground leading-relaxed mb-10",children:"Cuéntanos tu necesidad. Te respondemos en menos de 24 horas hábiles con una propuesta concreta para tu empresa."}),n.jsxs("div",{className:"space-y-5",children:[n.jsxs("a",{href:"https://wa.me/573337450634",target:"_blank",rel:"noopener noreferrer",className:"flex items-start gap-4 group",children:[n.jsx("div",{className:"w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors",children:n.jsx(ta,{size:15,className:"text-accent"})}),n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-xs text-muted-foreground tracking-widest uppercase mb-0.5",children:"Teléfono / WhatsApp"}),n.jsx("p",{className:"text-sm font-medium text-foreground group-hover:text-accent transition-colors",children:"+57 333 7450634"})]})]}),n.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"flex items-start gap-4 group",children:[n.jsx("div",{className:"w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors",children:n.jsx(ir,{size:15,className:"text-accent"})}),n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-xs text-muted-foreground tracking-widest uppercase mb-0.5",children:"Correo electrónico"}),n.jsx("p",{className:"text-sm font-medium text-foreground group-hover:text-accent transition-colors",children:"serviciosapcsoporte@gmail.com"})]})]}),n.jsxs("div",{className:"flex items-start gap-4",children:[n.jsx("div",{className:"w-10 h-10 border border-border flex items-center justify-center flex-shrink-0",children:n.jsx(tu,{size:15,className:"text-accent"})}),n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-xs text-muted-foreground tracking-widest uppercase mb-0.5",children:"Dirección"}),n.jsx("p",{className:"text-sm font-medium text-foreground",children:"Cra. 52c #39b-22, Bogotá"})]})]})]}),n.jsxs("a",{href:"https://wa.me/573337450634?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20soluciones%20tecnol%C3%B3gicas",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 mt-10 bg-[#25d366] text-white px-6 py-3 font-medium text-sm hover:bg-[#22c55e] transition-colors",children:[n.jsx(Un,{size:15}),"Escribir por WhatsApp ahora"]})]}),n.jsx("div",{className:"lg:col-span-7",children:g?n.jsxs("div",{className:"h-full flex flex-col items-center justify-center border border-border p-12 text-center",children:[n.jsx(pa,{size:48,className:"text-accent mb-4"}),n.jsx("h3",{className:"font-serif text-2xl font-bold mb-3",children:"¡Mensaje enviado!"}),n.jsx("p",{className:"text-muted-foreground mb-6",children:"Gracias por contactarnos. Te responderemos en menos de 24 horas hábiles."}),n.jsx("button",{onClick:()=>v(!1),className:"text-sm font-medium text-accent underline underline-offset-4",children:"Enviar otro mensaje"})]}):n.jsxs("form",{onSubmit:De,className:"border border-border p-8 lg:p-10 space-y-6",children:[n.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[n.jsxs("div",{children:[n.jsx("label",{htmlFor:"nombre",className:"block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2",children:"Nombre completo *"}),n.jsx("input",{id:"nombre",type:"text",required:!0,value:u.nombre,onChange:w=>f({...u,nombre:w.target.value}),placeholder:"Tu nombre",className:"w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"email",className:"block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2",children:"Correo electrónico *"}),n.jsx("input",{id:"email",type:"email",required:!0,value:u.email,onChange:w=>f({...u,email:w.target.value}),placeholder:"tu@empresa.com",className:"w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"})]})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"telefono",className:"block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2",children:"Teléfono"}),n.jsx("input",{id:"telefono",type:"tel",value:u.telefono,onChange:w=>f({...u,telefono:w.target.value}),placeholder:"+57 333 745 0634",className:"w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"mensaje",className:"block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2",children:"Mensaje *"}),n.jsx("textarea",{id:"mensaje",required:!0,rows:5,value:u.mensaje,onChange:w=>f({...u,mensaje:w.target.value}),placeholder:"¿Tiene Hikvision? ¿Necesita analítica? Cuéntenos...",className:"w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"})]}),D&&n.jsx("p",{className:"text-sm text-red-500 text-center",children:D}),n.jsxs("button",{type:"submit",disabled:k,className:"w-full bg-accent text-accent-foreground py-4 font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed",children:[n.jsx(jg,{size:15}),k?"Enviando...":"Enviar mensaje"]}),n.jsx("p",{className:"text-xs text-muted-foreground text-center font-mono",children:"Tu información es confidencial y no será compartida con terceros."})]})})]})})}),n.jsx("footer",{className:"py-10 bg-background",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-6 lg:px-12",children:[n.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 pb-10 border-b border-border",children:[n.jsxs("div",{className:"lg:col-span-2",children:[n.jsxs("div",{className:"flex items-center gap-2.5 mb-4",children:[n.jsx("img",{src:"/logo.webp",alt:"Servicios APC",className:"h-9 w-auto"}),n.jsx("span",{className:"text-foreground font-semibold text-sm",children:"Servicios APC"})]}),n.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed mb-4",children:"Cámaras de seguridad para negocio y empresas con IA Hikvision. Analítica YOLO, CCTV offline-first, bots WhatsApp 24/7 y SEO local en Bogotá."}),n.jsxs("div",{className:"flex flex-wrap gap-2 text-xs",children:[n.jsxs("a",{href:"https://apcvisionai.site",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline flex items-center gap-1",children:[n.jsx(fa,{size:11})," APC Visión AI — Analítica Hikvision"]}),n.jsx("span",{className:"text-muted-foreground",children:"·"}),n.jsxs("a",{href:"https://apcautomatizacion.site",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline flex items-center gap-1",children:[n.jsx(Hi,{size:11})," APC Automatización — n8n + IA"]}),n.jsx("span",{className:"text-muted-foreground",children:"·"}),n.jsxs("a",{href:"https://dogweb.lat",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline flex items-center gap-1",children:[n.jsx(bt,{size:11})," DogWeb — Web + SEO Local"]}),n.jsx("span",{className:"text-muted-foreground",children:"·"}),n.jsxs("a",{href:"https://apccore.site",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline flex items-center gap-1",children:[n.jsx($i,{size:11})," APC Core — Infraestructura"]})]})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-4",children:"Hikvision + IA"}),n.jsxs("ul",{className:"space-y-2",children:[n.jsx("li",{children:n.jsxs("a",{href:"#servicios",onClick:()=>{const w=Xr.findIndex(W=>W.id==="camaras");ae(w),ne("servicios")},className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(ue,{size:12})," Analítica YOLO para Hikvision"]})}),n.jsx("li",{children:n.jsxs("a",{href:"#servicios",onClick:()=>{const w=Xr.findIndex(W=>W.id==="cctv");ae(w),ne("servicios")},className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(ue,{size:12})," Instalación Hikvision IA-ready"]})}),n.jsx("li",{children:n.jsxs("a",{href:"https://apcvisionai.site",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(Jr,{size:11})," Ver APC Visión AI"]})}),n.jsx("li",{children:n.jsxs("a",{href:"https://www.hikvision.com/es/",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(Jr,{size:11})," Catálogo oficial Hikvision"]})})]})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-4",children:"Servicios"}),n.jsx("ul",{className:"space-y-2",children:Xr.map(w=>n.jsx("li",{children:n.jsxs("button",{onClick:()=>{const W=Xr.indexOf(w);ae(W),ne("servicios")},className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(ue,{size:12})," ",w.title]})},w.id))})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-4",children:"Páginas SEO"}),n.jsxs("ul",{className:"space-y-2",children:[n.jsx("li",{children:n.jsxs("a",{href:"#negocio",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(ue,{size:12})," Cámaras para Negocio"]})}),n.jsx("li",{children:n.jsxs("a",{href:"#instalacion",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(ue,{size:12})," Instalación de Cámaras"]})}),n.jsx("li",{children:n.jsxs("a",{href:"#casa",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(ue,{size:12})," Cámaras para Casa"]})}),n.jsx("li",{children:n.jsxs("a",{href:"#precios-camaras",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(ue,{size:12})," Precios Instalación"]})}),n.jsx("li",{children:n.jsxs("a",{href:"#consultor",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(ue,{size:12})," Consultor Tecnológico"]})}),[["Suba","suba"],["Kennedy","kennedy"],["Chapinero","chapinero"],["Usaquén","usaquen"],["Fontibón","fontibon"]].map(([w,W])=>n.jsx("li",{children:n.jsxs("a",{href:`#${W}`,className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(ue,{size:12})," Cámaras ",w]})},W)),n.jsx("li",{children:n.jsxs("a",{href:"#blog",className:"text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5",children:[n.jsx(ue,{size:12})," Blog"]})})]})]}),n.jsxs("div",{children:[n.jsx("p",{className:"font-mono text-xs text-accent tracking-widest uppercase mb-4",children:"Contacto"}),n.jsxs("ul",{className:"space-y-3",children:[n.jsxs("li",{className:"flex items-start gap-2 text-sm text-muted-foreground",children:[n.jsx(tu,{size:13,className:"text-accent mt-0.5 flex-shrink-0"}),"Cra. 52c #39b-22, Bogotá"]}),n.jsx("li",{children:n.jsxs("a",{href:"mailto:serviciosapcsoporte@gmail.com",className:"flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",children:[n.jsx(ir,{size:13,className:"text-accent flex-shrink-0"}),"serviciosapcsoporte@gmail.com"]})}),n.jsx("li",{children:n.jsxs("a",{href:"https://wa.me/573337450634",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",children:[n.jsx(ta,{size:13,className:"text-accent flex-shrink-0"}),"+57 333 7450634"]})}),n.jsx("li",{children:n.jsx("a",{href:"https://search.google.com/local/writereview?placeid=ChIJ3YMe_3yfP44R1bbtdfSOqSQ",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors font-medium",children:"⭐ Dejar reseña en Google"})})]}),n.jsxs("div",{className:"flex items-center gap-3 mt-4",children:[n.jsx("a",{href:"https://www.facebook.com/alejandropiraquiveapc",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",className:"w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors",children:n.jsx(ru,{size:15})}),n.jsx("a",{href:"https://www.instagram.com/serviciosapc",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",className:"w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors",children:n.jsx(nu,{size:15})}),n.jsx("a",{href:"https://www.linkedin.com/in/alejandropiraquive/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors",children:n.jsx(ou,{size:15})})]})]})]}),n.jsxs("div",{className:"mb-8 pb-8 border-b border-border space-y-3",children:[n.jsxs("p",{className:"text-xs text-muted-foreground leading-relaxed",children:[n.jsx("strong",{className:"text-foreground",children:"Aviso de privacidad y tratamiento de datos."})," ","En cumplimiento de la Ley 1581 de 2012 (Habeas Data), Servicios APC declara que todo flujo de video y audio capturado en las sedes de sus clientes tiene como única finalidad la auditoría transaccional de seguridad empresarial, excluyendo la difusión pública de material visual de terceros sin consentimiento."]}),n.jsxs("p",{className:"text-xs text-muted-foreground leading-relaxed",children:[n.jsx("strong",{className:"text-foreground",children:"Términos del servicio."})," ","Los módulos lógicos e integraciones en la nube operan bajo el marco de Arrendamiento de Software e Infraestructura Tecnológica como Servicio (SaaS). El control patrimonial, claves de seguridad y marcas pertenecen exclusivamente a Servicios APC y al titular de la infraestructura."]}),n.jsx("a",{href:"/documentos/Politica_Tratamiento_Datos_serviciosapc.pdf",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-xs text-accent hover:underline mt-1",children:"Descargar Política de Tratamiento de Datos Personales (PDF)"})]}),n.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[n.jsx("p",{className:"text-xs text-muted-foreground font-mono",children:"© 2026 Servicios APC — Todos los derechos reservados"}),n.jsx("p",{className:"text-xs text-muted-foreground font-mono",children:"serviciosapc.site · Bogotá, Colombia"})]})]})}),n.jsxs("div",{className:"fixed bottom-6 right-6 z-50 flex flex-col gap-3",children:[n.jsx("a",{href:"https://www.facebook.com/alejandropiraquiveapc",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",className:"w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors shadow-lg",children:n.jsx(ru,{size:18})}),n.jsx("a",{href:"https://www.instagram.com/serviciosapc",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",className:"w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors shadow-lg",children:n.jsx(nu,{size:18})}),n.jsx("a",{href:"https://www.linkedin.com/in/alejandropiraquive/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors shadow-lg",children:n.jsx(ou,{size:18})}),n.jsx("a",{href:"https://wa.me/573337450634",target:"_blank",rel:"noopener noreferrer","aria-label":"WhatsApp",className:"w-11 h-11 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:bg-[#22c55e] transition-colors shadow-lg",children:n.jsx(Un,{size:18})})]}),n.jsx(Gd,{})]})}Ip.createRoot(document.getElementById("root")).render(n.jsx(Zh,{}));
