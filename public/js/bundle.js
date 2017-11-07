/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(28)('wks');
var uid = __webpack_require__(29);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.2 (2017-10-20)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(S,N){"object"===typeof module&&module.exports?module.exports=S.document?N(S):N:S.Highcharts=N(S)})("undefined"!==typeof window?window:this,function(S){var N=function(){var a=S.document,E=S.navigator&&S.navigator.userAgent||"",C=a&&a.createElementNS&&!!a.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,G=/(edge|msie|trident)/i.test(E)&&!S.opera,q=/Firefox/.test(E),f=q&&4>parseInt(E.split("Firefox/")[1],10);return S.Highcharts?S.Highcharts.error(16,!0):{product:"Highcharts",
version:"6.0.2",deg2rad:2*Math.PI/360,doc:a,hasBidiBug:f,hasTouch:a&&void 0!==a.documentElement.ontouchstart,isMS:G,isWebKit:/AppleWebKit/.test(E),isFirefox:q,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(E),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:C,win:S,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){a.timers=[];var E=a.charts,C=a.doc,G=a.win;a.error=function(q,f){q=a.isNumber(q)?"Highcharts error #"+
q+": www.highcharts.com/errors/"+q:q;if(f)throw Error(q);G.console&&console.log(q)};a.Fx=function(a,f,k){this.options=f;this.elem=a;this.prop=k};a.Fx.prototype={dSetter:function(){var a=this.paths[0],f=this.paths[1],k=[],t=this.now,m=a.length,v;if(1===t)k=this.toD;else if(m===f.length&&1>t)for(;m--;)v=parseFloat(a[m]),k[m]=isNaN(v)?a[m]:t*parseFloat(f[m]-v)+v;else k=f;this.elem.attr("d",k,null,!0)},update:function(){var a=this.elem,f=this.prop,k=this.now,t=this.options.step;if(this[f+"Setter"])this[f+
"Setter"]();else a.attr?a.element&&a.attr(f,k,null,!0):a.style[f]=k+this.unit;t&&t.call(a,k,this)},run:function(q,f,k){var t=this,m=t.options,v=function(a){return v.stopped?!1:t.step(a)},u=G.requestAnimationFrame||function(a){setTimeout(a,13)},d=function(){a.timers=a.grep(a.timers,function(a){return a()});a.timers.length&&u(d)};q===f?(delete m.curAnim[this.prop],m.complete&&0===a.keys(m.curAnim).length&&m.complete()):(this.startTime=+new Date,this.start=q,this.end=f,this.unit=k,this.now=this.start,
this.pos=0,v.elem=this.elem,v.prop=this.prop,v()&&1===a.timers.push(v)&&u(d))},step:function(q){var f=+new Date,k,t=this.options,m=this.elem,v=t.complete,u=t.duration,d=t.curAnim;m.attr&&!m.element?q=!1:q||f>=u+this.startTime?(this.now=this.end,this.pos=1,this.update(),k=d[this.prop]=!0,a.objectEach(d,function(a){!0!==a&&(k=!1)}),k&&v&&v.call(m),q=!1):(this.pos=t.easing((f-this.startTime)/u),this.now=this.start+(this.end-this.start)*this.pos,this.update(),q=!0);return q},initPath:function(q,f,k){function t(a){var c,
e;for(b=a.length;b--;)c="M"===a[b]||"L"===a[b],e=/[a-zA-Z]/.test(a[b+3]),c&&e&&a.splice(b+1,0,a[b+1],a[b+2],a[b+1],a[b+2])}function m(a,d){for(;a.length<e;){a[0]=d[e-a.length];var l=a.slice(0,c);[].splice.apply(a,[0,0].concat(l));z&&(l=a.slice(a.length-c),[].splice.apply(a,[a.length,0].concat(l)),b--)}a[0]="M"}function v(a,b){for(var d=(e-a.length)/c;0<d&&d--;)l=a.slice().splice(a.length/A-c,c*A),l[0]=b[e-c-d*c],n&&(l[c-6]=l[c-2],l[c-5]=l[c-1]),[].splice.apply(a,[a.length/A,0].concat(l)),z&&d--}f=
f||"";var u,d=q.startX,g=q.endX,n=-1<f.indexOf("C"),c=n?7:3,e,l,b;f=f.split(" ");k=k.slice();var z=q.isArea,A=z?2:1,I;n&&(t(f),t(k));if(d&&g){for(b=0;b<d.length;b++)if(d[b]===g[0]){u=b;break}else if(d[0]===g[g.length-d.length+b]){u=b;I=!0;break}void 0===u&&(f=[])}f.length&&a.isNumber(u)&&(e=k.length+u*A*c,I?(m(f,k),v(k,f)):(m(k,f),v(f,k)));return[f,k]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),
null,!0)};a.extend=function(a,f){var k;a||(a={});for(k in f)a[k]=f[k];return a};a.merge=function(){var q,f=arguments,k,t={},m=function(k,u){"object"!==typeof k&&(k={});a.objectEach(u,function(d,g){!a.isObject(d,!0)||a.isClass(d)||a.isDOMElement(d)?k[g]=u[g]:k[g]=m(k[g]||{},d)});return k};!0===f[0]&&(t=f[1],f=Array.prototype.slice.call(f,2));k=f.length;for(q=0;q<k;q++)t=m(t,f[q]);return t};a.pInt=function(a,f){return parseInt(a,f||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=
Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(q,f){return!!q&&"object"===typeof q&&(!f||!a.isArray(q))};a.isDOMElement=function(q){return a.isObject(q)&&"number"===typeof q.nodeType};a.isClass=function(q){var f=q&&q.constructor;return!(!a.isObject(q,!0)||a.isDOMElement(q)||!f||!f.name||"Object"===f.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=function(a,f){for(var k=a.length;k--;)if(a[k]===f){a.splice(k,
1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(q,f,k){var t;a.isString(f)?a.defined(k)?q.setAttribute(f,k):q&&q.getAttribute&&(t=q.getAttribute(f)):a.defined(f)&&a.isObject(f)&&a.objectEach(f,function(a,k){q.setAttribute(k,a)});return t};a.splat=function(q){return a.isArray(q)?q:[q]};a.syncTimeout=function(a,f,k){if(f)return setTimeout(a,f,k);a.call(0,k)};a.pick=function(){var a=arguments,f,k,t=a.length;for(f=0;f<t;f++)if(k=a[f],void 0!==k&&null!==k)return k};a.css=
function(q,f){a.isMS&&!a.svg&&f&&void 0!==f.opacity&&(f.filter="alpha(opacity\x3d"+100*f.opacity+")");a.extend(q.style,f)};a.createElement=function(q,f,k,t,m){q=C.createElement(q);var v=a.css;f&&a.extend(q,f);m&&v(q,{padding:0,border:"none",margin:0});k&&v(q,k);t&&t.appendChild(q);return q};a.extendClass=function(q,f){var k=function(){};k.prototype=new q;a.extend(k.prototype,f);return k};a.pad=function(a,f,k){return Array((f||2)+1-String(a).length).join(k||0)+a};a.relativeLength=function(a,f,k){return/%$/.test(a)?
f*parseFloat(a)/100+(k||0):parseFloat(a)};a.wrap=function(a,f,k){var q=a[f];a[f]=function(){var a=Array.prototype.slice.call(arguments),v=arguments,u=this;u.proceed=function(){q.apply(u,arguments.length?arguments:v)};a.unshift(q);a=k.apply(this,a);u.proceed=null;return a}};a.getTZOffset=function(q){var f=a.Date;return 6E4*(f.hcGetTimezoneOffset&&f.hcGetTimezoneOffset(q)||f.hcTimezoneOffset||0)};a.dateFormat=function(q,f,k){if(!a.defined(f)||isNaN(f))return a.defaultOptions.lang.invalidDate||"";q=
a.pick(q,"%Y-%m-%d %H:%M:%S");var t=a.Date,m=new t(f-a.getTZOffset(f)),v=m[t.hcGetHours](),u=m[t.hcGetDay](),d=m[t.hcGetDate](),g=m[t.hcGetMonth](),n=m[t.hcGetFullYear](),c=a.defaultOptions.lang,e=c.weekdays,l=c.shortWeekdays,b=a.pad,t=a.extend({a:l?l[u]:e[u].substr(0,3),A:e[u],d:b(d),e:b(d,2," "),w:u,b:c.shortMonths[g],B:c.months[g],m:b(g+1),y:n.toString().substr(2,2),Y:n,H:b(v),k:v,I:b(v%12||12),l:v%12||12,M:b(m[t.hcGetMinutes]()),p:12>v?"AM":"PM",P:12>v?"am":"pm",S:b(m.getSeconds()),L:b(Math.round(f%
1E3),3)},a.dateFormats);a.objectEach(t,function(a,b){for(;-1!==q.indexOf("%"+b);)q=q.replace("%"+b,"function"===typeof a?a(f):a)});return k?q.substr(0,1).toUpperCase()+q.substr(1):q};a.formatSingle=function(q,f){var k=/\.([0-9])/,t=a.defaultOptions.lang;/f$/.test(q)?(k=(k=q.match(k))?k[1]:-1,null!==f&&(f=a.numberFormat(f,k,t.decimalPoint,-1<q.indexOf(",")?t.thousandsSep:""))):f=a.dateFormat(q,f);return f};a.format=function(q,f){for(var k="{",t=!1,m,v,u,d,g=[],n;q;){k=q.indexOf(k);if(-1===k)break;
m=q.slice(0,k);if(t){m=m.split(":");v=m.shift().split(".");d=v.length;n=f;for(u=0;u<d;u++)n&&(n=n[v[u]]);m.length&&(n=a.formatSingle(m.join(":"),n));g.push(n)}else g.push(m);q=q.slice(k+1);k=(t=!t)?"}":"{"}g.push(q);return g.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(q,f,k,t,m){var v,u=q;k=a.pick(k,1);v=q/k;f||(f=m?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===k?f=a.grep(f,function(a){return 0===a%1}):.1>=
k&&(f=[1/k])));for(t=0;t<f.length&&!(u=f[t],m&&u*k>=q||!m&&v<=(f[t]+(f[t+1]||f[t]))/2);t++);return u=a.correctFloat(u*k,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,f){var k=a.length,q,m;for(m=0;m<k;m++)a[m].safeI=m;a.sort(function(a,m){q=f(a,m);return 0===q?a.safeI-m.safeI:q});for(m=0;m<k;m++)delete a[m].safeI};a.arrayMin=function(a){for(var f=a.length,k=a[0];f--;)a[f]<k&&(k=a[f]);return k};a.arrayMax=function(a){for(var f=a.length,k=a[0];f--;)a[f]>k&&(k=a[f]);return k};a.destroyObjectProperties=
function(q,f){a.objectEach(q,function(a,t){a&&a!==f&&a.destroy&&a.destroy();delete q[t]})};a.discardElement=function(q){var f=a.garbageBin;f||(f=a.createElement("div"));q&&f.appendChild(q);f.innerHTML=""};a.correctFloat=function(a,f){return parseFloat(a.toPrecision(f||14))};a.setAnimation=function(q,f){f.renderer.globalAnimation=a.pick(q,f.options.chart.animation,!0)};a.animObject=function(q){return a.isObject(q)?a.merge(q):{duration:q?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,
day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(q,f,k,t){q=+q||0;f=+f;var m=a.defaultOptions.lang,v=(q.toString().split(".")[1]||"").split("e")[0].length,u,d,g=q.toString().split("e");-1===f?f=Math.min(v,20):a.isNumber(f)||(f=2);d=(Math.abs(g[1]?g[0]:q)+Math.pow(10,-Math.max(f,v)-1)).toFixed(f);v=String(a.pInt(d));u=3<v.length?v.length%3:0;k=a.pick(k,m.decimalPoint);t=a.pick(t,m.thousandsSep);q=(0>q?"-":"")+(u?v.substr(0,u)+t:"");q+=v.substr(u).replace(/(\d{3})(?=\d)/g,
"$1"+t);f&&(q+=k+d.slice(-f));g[1]&&(q+="e"+g[1]);return q};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(q,f,k){if("width"===f)return Math.min(q.offsetWidth,q.scrollWidth)-a.getStyle(q,"padding-left")-a.getStyle(q,"padding-right");if("height"===f)return Math.min(q.offsetHeight,q.scrollHeight)-a.getStyle(q,"padding-top")-a.getStyle(q,"padding-bottom");G.getComputedStyle||a.error(27,!0);if(q=G.getComputedStyle(q,void 0))q=q.getPropertyValue(f),a.pick(k,"opacity"!==
f)&&(q=a.pInt(q));return q};a.inArray=function(q,f){return(a.indexOfPolyfill||Array.prototype.indexOf).call(f,q)};a.grep=function(q,f){return(a.filterPolyfill||Array.prototype.filter).call(q,f)};a.find=Array.prototype.find?function(a,f){return a.find(f)}:function(a,f){var k,t=a.length;for(k=0;k<t;k++)if(f(a[k],k))return a[k]};a.map=function(a,f){for(var k=[],t=0,m=a.length;t<m;t++)k[t]=f.call(a[t],a[t],t,a);return k};a.keys=function(q){return(a.keysPolyfill||Object.keys).call(void 0,q)};a.reduce=
function(q,f,k){return(a.reducePolyfill||Array.prototype.reduce).call(q,f,k)};a.offset=function(a){var f=C.documentElement;a=a.parentElement?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(G.pageYOffset||f.scrollTop)-(f.clientTop||0),left:a.left+(G.pageXOffset||f.scrollLeft)-(f.clientLeft||0)}};a.stop=function(q,f){for(var k=a.timers.length;k--;)a.timers[k].elem!==q||f&&f!==a.timers[k].prop||(a.timers[k].stopped=!0)};a.each=function(q,f,k){return(a.forEachPolyfill||Array.prototype.forEach).call(q,
f,k)};a.objectEach=function(a,f,k){for(var t in a)a.hasOwnProperty(t)&&f.call(k,a[t],t,a)};a.addEvent=function(q,f,k){var t=q.hcEvents=q.hcEvents||{},m=q.addEventListener||a.addEventListenerPolyfill;m&&m.call(q,f,k,!1);t[f]||(t[f]=[]);t[f].push(k);return function(){a.removeEvent(q,f,k)}};a.removeEvent=function(q,f,k){function t(d,n){var c=q.removeEventListener||a.removeEventListenerPolyfill;c&&c.call(q,d,n,!1)}function m(){var d,n;q.nodeName&&(f?(d={},d[f]=!0):d=u,a.objectEach(d,function(a,e){if(u[e])for(n=
u[e].length;n--;)t(e,u[e][n])}))}var v,u=q.hcEvents,d;u&&(f?(v=u[f]||[],k?(d=a.inArray(k,v),-1<d&&(v.splice(d,1),u[f]=v),t(f,k)):(m(),u[f]=[])):(m(),q.hcEvents={}))};a.fireEvent=function(q,f,k,t){var m;m=q.hcEvents;var v,u;k=k||{};if(C.createEvent&&(q.dispatchEvent||q.fireEvent))m=C.createEvent("Events"),m.initEvent(f,!0,!0),a.extend(m,k),q.dispatchEvent?q.dispatchEvent(m):q.fireEvent(f,m);else if(m)for(m=m[f]||[],v=m.length,k.target||a.extend(k,{preventDefault:function(){k.defaultPrevented=!0},target:q,
type:f}),f=0;f<v;f++)(u=m[f])&&!1===u.call(q,k)&&k.preventDefault();t&&!k.defaultPrevented&&t(k)};a.animate=function(q,f,k){var t,m="",v,u,d;a.isObject(k)||(d=arguments,k={duration:d[2],easing:d[3],complete:d[4]});a.isNumber(k.duration)||(k.duration=400);k.easing="function"===typeof k.easing?k.easing:Math[k.easing]||Math.easeInOutSine;k.curAnim=a.merge(f);a.objectEach(f,function(d,n){a.stop(q,n);u=new a.Fx(q,k,n);v=null;"d"===n?(u.paths=u.initPath(q,q.d,f.d),u.toD=f.d,t=0,v=1):q.attr?t=q.attr(n):
(t=parseFloat(a.getStyle(q,n))||0,"opacity"!==n&&(m="px"));v||(v=d);v&&v.match&&v.match("px")&&(v=v.replace(/px/g,""));u.run(t,v,m)})};a.seriesType=function(q,f,k,t,m){var v=a.getOptions(),u=a.seriesTypes;v.plotOptions[q]=a.merge(v.plotOptions[f],k);u[q]=a.extendClass(u[f]||function(){},t);u[q].prototype.type=q;m&&(u[q].prototype.pointClass=a.extendClass(a.Point,m));return u[q]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),f=0;return function(){return"highcharts-"+a+"-"+
f++}}();G.jQuery&&(G.jQuery.fn.highcharts=function(){var q=[].slice.call(arguments);if(this[0])return q[0]?(new (a[a.isString(q[0])?q.shift():"Chart"])(this[0],q[0],q[1]),this):E[a.attr(this[0],"data-highcharts-chart")]})})(N);(function(a){var E=a.each,C=a.isNumber,G=a.map,q=a.merge,f=a.pInt;a.Color=function(k){if(!(this instanceof a.Color))return new a.Color(k);this.init(k)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(k){var f,m,v,u;if((this.input=k=this.names[k&&k.toLowerCase?k.toLowerCase():""]||k)&&k.stops)this.stops=G(k.stops,function(d){return new a.Color(d[1])});else if(k&&k.charAt&&"#"===k.charAt()&&(f=k.length,k=parseInt(k.substr(1),
16),7===f?m=[(k&16711680)>>16,(k&65280)>>8,k&255,1]:4===f&&(m=[(k&3840)>>4|(k&3840)>>8,(k&240)>>4|k&240,(k&15)<<4|k&15,1])),!m)for(v=this.parsers.length;v--&&!m;)u=this.parsers[v],(f=u.regex.exec(k))&&(m=u.parse(f));this.rgba=m||[]},get:function(a){var k=this.input,m=this.rgba,f;this.stops?(f=q(k),f.stops=[].concat(f.stops),E(this.stops,function(m,d){f.stops[d]=[f.stops[d][0],m.get(a)]})):f=m&&C(m[0])?"rgb"===a||!a&&1===m[3]?"rgb("+m[0]+","+m[1]+","+m[2]+")":"a"===a?m[3]:"rgba("+m.join(",")+")":k;
return f},brighten:function(a){var k,m=this.rgba;if(this.stops)E(this.stops,function(m){m.brighten(a)});else if(C(a)&&0!==a)for(k=0;3>k;k++)m[k]+=f(255*a),0>m[k]&&(m[k]=0),255<m[k]&&(m[k]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,f){var m=this.rgba,k=a.rgba;k.length&&m&&m.length?(a=1!==k[3]||1!==m[3],f=(a?"rgba(":"rgb(")+Math.round(k[0]+(m[0]-k[0])*(1-f))+","+Math.round(k[1]+(m[1]-k[1])*(1-f))+","+Math.round(k[2]+(m[2]-k[2])*(1-f))+(a?","+(k[3]+(m[3]-
k[3])*(1-f)):"")+")"):f=a.input||"none";return f}};a.color=function(k){return new a.Color(k)}})(N);(function(a){var E,C,G=a.addEvent,q=a.animate,f=a.attr,k=a.charts,t=a.color,m=a.css,v=a.createElement,u=a.defined,d=a.deg2rad,g=a.destroyObjectProperties,n=a.doc,c=a.each,e=a.extend,l=a.erase,b=a.grep,z=a.hasTouch,A=a.inArray,I=a.isArray,r=a.isFirefox,J=a.isMS,w=a.isObject,D=a.isString,M=a.isWebKit,p=a.merge,B=a.noop,H=a.objectEach,F=a.pick,h=a.pInt,x=a.removeEvent,R=a.stop,K=a.svg,P=a.SVG_NS,L=a.symbolSizes,
Q=a.win;E=a.SVGElement=function(){return this};e(E.prototype,{opacity:1,SVG_NS:P,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,h){this.element="span"===h?v(h):n.createElementNS(this.SVG_NS,h);this.renderer=a},animate:function(y,h,x){h=a.animObject(F(h,this.renderer.globalAnimation,!0));0!==h.duration?(x&&(h.complete=x),q(this,y,h)):(this.attr(y,null,x),h.step&&h.step.call(this));return this},
colorGradient:function(y,h,x){var b=this.renderer,e,O,d,l,g,K,n,z,L,r,w=[],m;y.radialGradient?O="radialGradient":y.linearGradient&&(O="linearGradient");O&&(d=y[O],g=b.gradients,n=y.stops,r=x.radialReference,I(d)&&(y[O]=d={x1:d[0],y1:d[1],x2:d[2],y2:d[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===O&&r&&!u(d.gradientUnits)&&(l=d,d=p(d,b.getRadialAttr(r,l),{gradientUnits:"userSpaceOnUse"})),H(d,function(a,y){"id"!==y&&w.push(y,a)}),H(n,function(a){w.push(a)}),w=w.join(","),g[w]?r=g[w].attr("id"):
(d.id=r=a.uniqueKey(),g[w]=K=b.createElement(O).attr(d).add(b.defs),K.radAttr=l,K.stops=[],c(n,function(y){0===y[1].indexOf("rgba")?(e=a.color(y[1]),z=e.get("rgb"),L=e.get("a")):(z=y[1],L=1);y=b.createElement("stop").attr({offset:y[0],"stop-color":z,"stop-opacity":L}).add(K);K.stops.push(y)})),m="url("+b.url+"#"+r+")",x.setAttribute(h,m),x.gradient=w,y.toString=function(){return m})},applyTextOutline:function(y){var h=this.element,x,b,e,p,d;-1!==y.indexOf("contrast")&&(y=y.replace(/contrast/g,this.renderer.getContrast(h.style.fill)));
y=y.split(" ");b=y[y.length-1];if((e=y[0])&&"none"!==e&&a.svg){this.fakeTS=!0;y=[].slice.call(h.getElementsByTagName("tspan"));this.ySetter=this.xSetter;e=e.replace(/(^[\d\.]+)(.*?)$/g,function(a,y,h){return 2*y+h});for(d=y.length;d--;)x=y[d],"highcharts-text-outline"===x.getAttribute("class")&&l(y,h.removeChild(x));p=h.firstChild;c(y,function(a,y){0===y&&(a.setAttribute("x",h.getAttribute("x")),y=h.getAttribute("y"),a.setAttribute("y",y||0),null===y&&h.setAttribute("y",0));a=a.cloneNode(1);f(a,{"class":"highcharts-text-outline",
fill:b,stroke:b,"stroke-width":e,"stroke-linejoin":"round"});h.insertBefore(a,p)})}},attr:function(a,h,x,b){var y,e=this.element,c,O=this,p,d;"string"===typeof a&&void 0!==h&&(y=a,a={},a[y]=h);"string"===typeof a?O=(this[a+"Getter"]||this._defaultGetter).call(this,a,e):(H(a,function(y,h){p=!1;b||R(this,h);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(h)&&(c||(this.symbolAttr(a),c=!0),p=!0);!this.rotation||"x"!==h&&"y"!==h||(this.doTransform=!0);p||(d=this[h+"Setter"]||
this._defaultSetter,d.call(this,y,h,e),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(h)&&this.updateShadows(h,y,d))},this),this.afterSetters());x&&x();return O},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,h,x){for(var y=this.shadows,b=y.length;b--;)x.call(y[b],"height"===a?Math.max(h-(y[b].cutHeight||0),0):"d"===a?this.d:h,a,y[b])},addClass:function(a,h){var y=this.attr("class")||"";-1===y.indexOf(a)&&
(h||(a=(y+(y?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==A(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var y=this;c("x y r start end width height innerR anchorX anchorY".split(" "),function(h){y[h]=F(a[h],y[h])});y.attr({d:y.renderer.symbols[y.symbolName](y.x,y.y,y.width,y.height,y)})},clip:function(a){return this.attr("clip-path",a?"url("+
this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,h){var y=this,x={},b;h=h||a.strokeWidth||0;b=Math.round(h)%2/2;a.x=Math.floor(a.x||y.x||0)+b;a.y=Math.floor(a.y||y.y||0)+b;a.width=Math.floor((a.width||y.width||0)-2*b);a.height=Math.floor((a.height||y.height||0)-2*b);u(a.strokeWidth)&&(a.strokeWidth=h);H(a,function(a,h){y[h]!==a&&(y[h]=x[h]=a)});return x},css:function(a){var y=this.styles,b={},x=this.element,c,p="",d,l=!y,g=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);
y&&H(a,function(a,h){a!==y[h]&&(b[h]=a,l=!0)});l&&(y&&(a=e(y,b)),c=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===x.nodeName.toLowerCase()&&h(a.width),this.styles=a,c&&!K&&this.renderer.forExport&&delete a.width,J&&!K?m(this.element,a):(d=function(a,y){return"-"+y.toLowerCase()},H(a,function(a,y){-1===A(y,g)&&(p+=y.replace(/([A-Z])/g,d)+":"+a+";")}),p&&f(x,"style",p)),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));
return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,h){var y=this,b=y.element;z&&"click"===a?(b.ontouchstart=function(a){y.touchEventFired=Date.now();a.preventDefault();h.call(b,a)},b.onclick=function(a){(-1===Q.navigator.userAgent.indexOf("Android")||1100<Date.now()-(y.touchEventFired||0))&&h.call(b,a)}):b["on"+a]=h;return this},setRadialReference:function(a){var y=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;y&&y.radAttr&&y.animate(this.renderer.getRadialAttr(a,
y.radAttr));return this},translate:function(a,h){return this.attr({translateX:a,translateY:h})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,h=this.translateY||0,b=this.scaleX,x=this.scaleY,e=this.inverted,c=this.rotation,p=this.matrix,d=this.element;e&&(a+=this.width,h+=this.height);a=["translate("+a+","+h+")"];u(p)&&a.push("matrix("+p.join(",")+")");e?a.push("rotate(90) scale(-1,1)"):c&&a.push("rotate("+c+" "+F(this.rotationOriginX,
d.getAttribute("x"),0)+" "+F(this.rotationOriginY,d.getAttribute("y")||0)+")");(u(b)||u(x))&&a.push("scale("+F(b,1)+" "+F(x,1)+")");a.length&&d.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,h,b){var y,x,e,c,p={};x=this.renderer;e=x.alignedObjects;var d,O;if(a){if(this.alignOptions=a,this.alignByTranslate=h,!b||D(b))this.alignTo=y=b||"renderer",l(e,this),e.push(this),b=null}else a=this.alignOptions,h=this.alignByTranslate,
y=this.alignTo;b=F(b,x[y],x);y=a.align;x=a.verticalAlign;e=(b.x||0)+(a.x||0);c=(b.y||0)+(a.y||0);"right"===y?d=1:"center"===y&&(d=2);d&&(e+=(b.width-(a.width||0))/d);p[h?"translateX":"x"]=Math.round(e);"bottom"===x?O=1:"middle"===x&&(O=2);O&&(c+=(b.height-(a.height||0))/O);p[h?"translateY":"y"]=Math.round(c);this[this.placed?"animate":"attr"](p);this.placed=!0;this.alignAttr=p;return this},getBBox:function(a,h){var y,b=this.renderer,x,p=this.element,l=this.styles,O,g=this.textStr,K,n=b.cache,z=b.cacheKeys,
L;h=F(h,this.rotation);x=h*d;O=l&&l.fontSize;void 0!==g&&(L=g.toString(),-1===L.indexOf("\x3c")&&(L=L.replace(/[0-9]/g,"0")),L+=["",h||0,O,l&&l.width,l&&l.textOverflow].join());L&&!a&&(y=n[L]);if(!y){if(p.namespaceURI===this.SVG_NS||b.forExport){try{(K=this.fakeTS&&function(a){c(p.querySelectorAll(".highcharts-text-outline"),function(h){h.style.display=a})})&&K("none"),y=p.getBBox?e({},p.getBBox()):{width:p.offsetWidth,height:p.offsetHeight},K&&K("")}catch(W){}if(!y||0>y.width)y={width:0,height:0}}else y=
this.htmlGetBBox();b.isSVG&&(a=y.width,b=y.height,l&&"11px"===l.fontSize&&17===Math.round(b)&&(y.height=b=14),h&&(y.width=Math.abs(b*Math.sin(x))+Math.abs(a*Math.cos(x)),y.height=Math.abs(b*Math.cos(x))+Math.abs(a*Math.sin(x))));if(L&&0<y.height){for(;250<z.length;)delete n[z.shift()];n[L]||z.push(L);n[L]=y}}return y},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var h=this;h.animate({opacity:0},
{duration:a||150,complete:function(){h.attr({y:-9999})}})},add:function(a){var h=this.renderer,y=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&h.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:h.box).appendChild(y);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var h=a.parentNode;h&&h.removeChild(a)},destroy:function(){var a=this,h=a.element||{},b=a.renderer.isSVG&&"SPAN"===h.nodeName&&
a.parentGroup,x=h.ownerSVGElement;h.onclick=h.onmouseout=h.onmouseover=h.onmousemove=h.point=null;R(a);a.clipPath&&x&&(c(x.querySelectorAll("[clip-path],[CLIP-PATH]"),function(h){h.getAttribute("clip-path").match(RegExp('[("]#'+a.clipPath.element.id+'[)"]'))&&h.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(x=0;x<a.stops.length;x++)a.stops[x]=a.stops[x].destroy();a.stops=null}a.safeRemoveChild(h);for(a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)h=b.parentGroup,
a.safeRemoveChild(b.div),delete b.div,b=h;a.alignTo&&l(a.renderer.alignedObjects,a);H(a,function(h,y){delete a[y]});return null},shadow:function(a,h,b){var y=[],x,e,c=this.element,p,d,l,g;if(!a)this.destroyShadows();else if(!this.shadows){d=F(a.width,3);l=(a.opacity||.15)/d;g=this.parentInverted?"(-1,-1)":"("+F(a.offsetX,1)+", "+F(a.offsetY,1)+")";for(x=1;x<=d;x++)e=c.cloneNode(0),p=2*d+1-2*x,f(e,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":l*x,"stroke-width":p,transform:"translate"+
g,fill:"none"}),b&&(f(e,"height",Math.max(f(e,"height")-p,0)),e.cutHeight=p),h?h.element.appendChild(e):c.parentNode&&c.parentNode.insertBefore(e,c),y.push(e);this.shadows=y}return this},destroyShadows:function(){c(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=F(this[a],this.element?this.element.getAttribute(a):null,
0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,h,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[h]!==a&&(b.setAttribute(h,a),this[h]=a)},dashstyleSetter:function(a){var b,x=this["stroke-width"];"inherit"===x&&(x=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,
"").split(",");for(b=a.length;b--;)a[b]=h(a[b])*x;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,h,b){this[h]=a;b.setAttribute(h,a)},titleSetter:function(a){var h=this.element.getElementsByTagName("title")[0];h||(h=n.createElementNS(this.SVG_NS,"title"),this.element.appendChild(h));h.firstChild&&h.removeChild(h.firstChild);
h.appendChild(n.createTextNode(String(F(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,h,b){"string"===typeof a?b.setAttribute(h,a):a&&this.colorGradient(a,h,b)},visibilitySetter:function(a,h,b){"inherit"===a?b.removeAttribute(h):this[h]!==a&&b.setAttribute(h,a);this[h]=a},zIndexSetter:function(a,b){var x=this.renderer,y=this.parentGroup,e=(y||x).element||x.box,c,p=this.element,
d,l,x=e===x.box;c=this.added;var g;u(a)&&(p.zIndex=a,a=+a,this[b]===a&&(c=!1),this[b]=a);if(c){(a=this.zIndex)&&y&&(y.handleZ=!0);b=e.childNodes;for(g=b.length-1;0<=g&&!d;g--)if(y=b[g],c=y.zIndex,l=!u(c),y!==p)if(0>a&&l&&!x&&!g)e.insertBefore(p,b[g]),d=!0;else if(h(c)<=a||l&&(!u(a)||0<=a))e.insertBefore(p,b[g+1]||null),d=!0;d||(e.insertBefore(p,b[x?3:0]||null),d=!0)}return d},_defaultSetter:function(a,h,b){b.setAttribute(h,a)}});E.prototype.yGetter=E.prototype.xGetter;E.prototype.translateXSetter=
E.prototype.translateYSetter=E.prototype.rotationSetter=E.prototype.verticalAlignSetter=E.prototype.rotationOriginXSetter=E.prototype.rotationOriginYSetter=E.prototype.scaleXSetter=E.prototype.scaleYSetter=E.prototype.matrixSetter=function(a,h){this[h]=a;this.doTransform=!0};E.prototype["stroke-widthSetter"]=E.prototype.strokeSetter=function(a,h,b){this[h]=a;this.stroke&&this["stroke-width"]?(E.prototype.fillSetter.call(this,this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),
this.hasStroke=!0):"stroke-width"===h&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};C=a.SVGRenderer=function(){this.init.apply(this,arguments)};e(C.prototype,{Element:E,SVG_NS:P,init:function(a,h,b,x,e,c){var y;x=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(x));y=x.element;a.appendChild(y);-1===a.innerHTML.indexOf("xmlns")&&f(y,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=y;this.boxWrapper=x;this.alignedObjects=[];this.url=(r||
M)&&n.getElementsByTagName("base").length?Q.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(n.createTextNode("Created with Highcharts 6.0.2"));this.defs=this.createElement("defs").add();this.allowHTML=c;this.forExport=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(h,b,!1);var p;r&&a.getBoundingClientRect&&(h=function(){m(a,{left:0,top:0});p=a.getBoundingClientRect();
m(a,{left:Math.ceil(p.left)-p.left+"px",top:Math.ceil(p.top)-p.top+"px"})},h(),this.unSubPixelFix=G(Q,"resize",h))},getStyle:function(a){return this.style=e({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();g(this.gradients||{});this.gradients=
null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var h=new this.Element;h.init(this,a);return h},draw:B,getRadialAttr:function(a,h){return{cx:a[0]-a[2]/2+h.cx*a[2],cy:a[1]-a[2]/2+h.cy*a[2],r:h.r*a[2]}},getSpanWidth:function(a,h){var b=a.getBBox(!0).width;!K&&this.forExport&&(b=this.measureSpanWidth(h.firstChild.data,a.styles));return b},applyEllipsis:function(a,h,b,x){var e=a.rotation,c=b,y,p=0,d=b.length,l=function(a){h.removeChild(h.firstChild);
a&&h.appendChild(n.createTextNode(a))},g;a.rotation=0;c=this.getSpanWidth(a,h);if(g=c>x){for(;p<=d;)y=Math.ceil((p+d)/2),c=b.substring(0,y)+"\u2026",l(c),c=this.getSpanWidth(a,h),p===d?p=d+1:c>x?d=y-1:p=y;0===d&&l("")}a.rotation=e;return g},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot"},buildText:function(a){var x=a.element,e=this,p=e.forExport,y=F(a.textStr,"").toString(),d=-1!==y.indexOf("\x3c"),l=x.childNodes,g,z,L,r,w=f(x,"x"),B=a.styles,A=a.textWidth,
k=B&&B.lineHeight,u=B&&B.textOutline,D=B&&"ellipsis"===B.textOverflow,R=B&&"nowrap"===B.whiteSpace,I=B&&B.fontSize,J,Q,v=l.length,B=A&&!a.added&&this.box,q=function(a){var b;b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:I||e.style.fontSize||12;return k?h(k):e.fontMetrics(b,a.getAttribute("style")?a:x).h},t=function(a){H(e.escapes,function(h,b){a=a.replace(new RegExp(h,"g"),b)});return a};J=[y,D,R,k,u,I,A].join();if(J!==a.textCache){for(a.textCache=J;v--;)x.removeChild(l[v]);d||u||D||A||
-1!==y.indexOf(" ")?(g=/<.*class="([^"]+)".*>/,z=/<.*style="([^"]+)".*>/,L=/<.*href="([^"]+)".*>/,B&&B.appendChild(x),y=d?y.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[y],y=b(y,function(a){return""!==a}),c(y,function(h,b){var y,d=0;h=h.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");
y=h.split("|||");c(y,function(h){if(""!==h||1===y.length){var c={},l=n.createElementNS(e.SVG_NS,"tspan"),B,H;g.test(h)&&(B=h.match(g)[1],f(l,"class",B));z.test(h)&&(H=h.match(z)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),f(l,"style",H));L.test(h)&&!p&&(f(l,"onclick",'location.href\x3d"'+h.match(L)[1]+'"'),f(l,"class","highcharts-anchor"),m(l,{cursor:"pointer"}));h=t(h.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==h){l.appendChild(n.createTextNode(h));d?c.dx=0:b&&null!==w&&(c.x=w);f(l,c);x.appendChild(l);
!d&&Q&&(!K&&p&&m(l,{display:"block"}),f(l,"dy",q(l)));if(A){c=h.replace(/([^\^])-/g,"$1- ").split(" ");B=1<y.length||b||1<c.length&&!R;var O=[],k,u=q(l),I=a.rotation;for(D&&(r=e.applyEllipsis(a,l,h,A));!D&&B&&(c.length||O.length);)a.rotation=0,k=e.getSpanWidth(a,l),h=k>A,void 0===r&&(r=h),h&&1!==c.length?(l.removeChild(l.firstChild),O.unshift(c.pop())):(c=O,O=[],c.length&&!R&&(l=n.createElementNS(P,"tspan"),f(l,{dy:u,x:w}),H&&f(l,"style",H),x.appendChild(l)),k>A&&(A=k)),c.length&&l.appendChild(n.createTextNode(c.join(" ").replace(/- /g,
"-")));a.rotation=I}d++}}});Q=Q||x.childNodes.length}),r&&a.attr("title",a.textStr),B&&B.removeChild(x),u&&a.applyTextOutline&&a.applyTextOutline(u)):x.appendChild(n.createTextNode(t(y)))}},getContrast:function(a){a=t(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,h,b,x,c,d,l,g,K){var y=this.label(a,h,b,K,null,null,null,null,"button"),n=0;y.attr(p({padding:8,r:2},c));var z,L,r,B;c=p({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",
fontWeight:"normal"}},c);z=c.style;delete c.style;d=p(c,{fill:"#e6e6e6"},d);L=d.style;delete d.style;l=p(c,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},l);r=l.style;delete l.style;g=p(c,{style:{color:"#cccccc"}},g);B=g.style;delete g.style;G(y.element,J?"mouseover":"mouseenter",function(){3!==n&&y.setState(1)});G(y.element,J?"mouseout":"mouseleave",function(){3!==n&&y.setState(n)});y.setState=function(a){1!==a&&(y.state=n=a);y.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+
["normal","hover","pressed","disabled"][a||0]);y.attr([c,d,l,g][a||0]).css([z,L,r,B][a||0])};y.attr(c).css(e({cursor:"default"},z));return y.on("click",function(a){3!==n&&x.call(y,a)})},crispLine:function(a,h){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-h%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+h%2/2);return a},path:function(a){var h={fill:"none"};I(a)?h.d=a:w(a)&&e(h,a);return this.createElement("path").attr(h)},circle:function(a,h,b){a=w(a)?a:{x:a,y:h,r:b};h=this.createElement("circle");h.xSetter=
h.ySetter=function(a,h,b){b.setAttribute("c"+h,a)};return h.attr(a)},arc:function(a,h,b,x,c,e){w(a)?(x=a,h=x.y,b=x.r,a=x.x):x={innerR:x,start:c,end:e};a=this.symbol("arc",a,h,b,b,x);a.r=b;return a},rect:function(a,h,b,x,c,e){c=w(a)?a.r:c;var p=this.createElement("rect");a=w(a)?a:void 0===a?{}:{x:a,y:h,width:Math.max(b,0),height:Math.max(x,0)};void 0!==e&&(a.strokeWidth=e,a=p.crisp(a));a.fill="none";c&&(a.r=c);p.rSetter=function(a,h,b){f(b,{rx:a,ry:a})};return p.attr(a)},setSize:function(a,h,b){var x=
this.alignedObjects,c=x.length;this.width=a;this.height=h;for(this.boxWrapper.animate({width:a,height:h},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:F(b,!0)?void 0:0});c--;)x[c].align()},g:function(a){var h=this.createElement("g");return a?h.attr({"class":"highcharts-"+a}):h},image:function(a,h,b,x,c){var p={preserveAspectRatio:"none"};1<arguments.length&&e(p,{x:h,y:b,width:x,height:c});p=this.createElement("image").attr(p);p.element.setAttributeNS?
p.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):p.element.setAttribute("hc-svg-href",a);return p},symbol:function(a,h,b,x,p,d){var l=this,y,g=/^url\((.*?)\)$/,K=g.test(a),z=!K&&(this.symbols[a]?a:"circle"),r=z&&this.symbols[z],B=u(h)&&r&&r.call(this.symbols,Math.round(h),Math.round(b),x,p,d),w,H;r?(y=this.path(B),y.attr("fill","none"),e(y,{symbolName:z,x:h,y:b,width:x,height:p}),d&&e(y,d)):K&&(w=a.match(g)[1],y=this.image(w),y.imgwidth=F(L[w]&&L[w].width,d&&d.width),y.imgheight=
F(L[w]&&L[w].height,d&&d.height),H=function(){y.attr({width:y.width,height:y.height})},c(["width","height"],function(a){y[a+"Setter"]=function(a,h){var b={},x=this["img"+h],c="width"===h?"translateX":"translateY";this[h]=a;u(x)&&(this.element&&this.element.setAttribute(h,x),this.alignByTranslate||(b[c]=((this[h]||0)-x)/2,this.attr(b)))}}),u(h)&&y.attr({x:h,y:b}),y.isImg=!0,u(y.imgwidth)&&u(y.imgheight)?H():(y.attr({width:0,height:0}),v("img",{onload:function(){var a=k[l.chartIndex];0===this.width&&
(m(this,{position:"absolute",top:"-999em"}),n.body.appendChild(this));L[w]={width:this.width,height:this.height};y.imgwidth=this.width;y.imgheight=this.height;y.element&&H();this.parentNode&&this.parentNode.removeChild(this);l.imgCount--;if(!l.imgCount&&a&&a.onload)a.onload()},src:w}),this.imgCount++));return y},symbols:{circle:function(a,h,b,x){return this.arc(a+b/2,h+x/2,b/2,x/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,h,b,x){return["M",a,h,"L",a+b,h,a+b,h+x,a,h+x,"Z"]},triangle:function(a,
h,b,x){return["M",a+b/2,h,"L",a+b,h+x,a,h+x,"Z"]},"triangle-down":function(a,h,b,x){return["M",a,h,"L",a+b,h,a+b/2,h+x,"Z"]},diamond:function(a,h,b,x){return["M",a+b/2,h,"L",a+b,h+x/2,a+b/2,h+x,a,h+x/2,"Z"]},arc:function(a,h,b,x,c){var e=c.start,p=c.r||b,d=c.r||x||b,l=c.end-.001;b=c.innerR;x=F(c.open,.001>Math.abs(c.end-c.start-2*Math.PI));var y=Math.cos(e),g=Math.sin(e),K=Math.cos(l),l=Math.sin(l);c=.001>c.end-e-Math.PI?0:1;p=["M",a+p*y,h+d*g,"A",p,d,0,c,1,a+p*K,h+d*l];u(b)&&p.push(x?"M":"L",a+b*
K,h+b*l,"A",b,b,0,c,0,a+b*y,h+b*g);p.push(x?"":"Z");return p},callout:function(a,h,b,x,c){var e=Math.min(c&&c.r||0,b,x),p=e+6,d=c&&c.anchorX;c=c&&c.anchorY;var l;l=["M",a+e,h,"L",a+b-e,h,"C",a+b,h,a+b,h,a+b,h+e,"L",a+b,h+x-e,"C",a+b,h+x,a+b,h+x,a+b-e,h+x,"L",a+e,h+x,"C",a,h+x,a,h+x,a,h+x-e,"L",a,h+e,"C",a,h,a,h,a+e,h];d&&d>b?c>h+p&&c<h+x-p?l.splice(13,3,"L",a+b,c-6,a+b+6,c,a+b,c+6,a+b,h+x-e):l.splice(13,3,"L",a+b,x/2,d,c,a+b,x/2,a+b,h+x-e):d&&0>d?c>h+p&&c<h+x-p?l.splice(33,3,"L",a,c+6,a-6,c,a,c-6,
a,h+e):l.splice(33,3,"L",a,x/2,d,c,a,x/2,a,h+e):c&&c>x&&d>a+p&&d<a+b-p?l.splice(23,3,"L",d+6,h+x,d,h+x+6,d-6,h+x,a+e,h+x):c&&0>c&&d>a+p&&d<a+b-p&&l.splice(3,3,"L",d-6,h,d,h-6,d+6,h,b-e,h);return l}},clipRect:function(h,b,x,c){var e=a.uniqueKey(),p=this.createElement("clipPath").attr({id:e}).add(this.defs);h=this.rect(h,b,x,c,0).add(p);h.id=e;h.clipPath=p;h.count=0;return h},text:function(a,h,b,x){var c={};if(x&&(this.allowHTML||!this.forExport))return this.html(a,h,b);c.x=Math.round(h||0);b&&(c.y=
Math.round(b));if(a||0===a)c.text=a;a=this.createElement("text").attr(c);x||(a.xSetter=function(a,h,b){var x=b.getElementsByTagName("tspan"),c,e=b.getAttribute(h),p;for(p=0;p<x.length;p++)c=x[p],c.getAttribute(h)===e&&c.setAttribute(h,a);b.setAttribute(h,a)});return a},fontMetrics:function(a,b){a=a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?h(a):/em/.test(a)?parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*
b),f:a}},rotCorr:function(a,h,b){var x=a;h&&b&&(x=Math.max(x*Math.cos(h*d),4));return{x:-a/3*Math.sin(h*d),y:x}},label:function(h,b,d,l,g,K,n,z,L){var y=this,r=y.g("button"!==L&&"label"),w=r.text=y.text("",0,0,n).attr({zIndex:1}),B,H,m=0,A=3,k=0,f,D,I,R,J,Q={},F,v,P=/^url\((.*?)\)$/.test(l),q=P,t,O,M,T;L&&r.addClass("highcharts-"+L);q=P;t=function(){return(F||0)%2/2};O=function(){var a=w.element.style,h={};H=(void 0===f||void 0===D||J)&&u(w.textStr)&&w.getBBox();r.width=(f||H.width||0)+2*A+k;r.height=
(D||H.height||0)+2*A;v=A+y.fontMetrics(a&&a.fontSize,w).b;q&&(B||(r.box=B=y.symbols[l]||P?y.symbol(l):y.rect(),B.addClass(("button"===L?"":"highcharts-label-box")+(L?" highcharts-"+L+"-box":"")),B.add(r),a=t(),h.x=a,h.y=(z?-v:0)+a),h.width=Math.round(r.width),h.height=Math.round(r.height),B.attr(e(h,Q)),Q={})};M=function(){var a=k+A,h;h=z?0:v;u(f)&&H&&("center"===J||"right"===J)&&(a+={center:.5,right:1}[J]*(f-H.width));if(a!==w.x||h!==w.y)w.attr("x",a),void 0!==h&&w.attr("y",h);w.x=a;w.y=h};T=function(a,
h){B?B.attr(a,h):Q[a]=h};r.onAdd=function(){w.add(r);r.attr({text:h||0===h?h:"",x:b,y:d});B&&u(g)&&r.attr({anchorX:g,anchorY:K})};r.widthSetter=function(h){f=a.isNumber(h)?h:null};r.heightSetter=function(a){D=a};r["text-alignSetter"]=function(a){J=a};r.paddingSetter=function(a){u(a)&&a!==A&&(A=r.padding=a,M())};r.paddingLeftSetter=function(a){u(a)&&a!==k&&(k=a,M())};r.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==m&&(m=a,H&&r.attr({x:I}))};r.textSetter=function(a){void 0!==a&&w.textSetter(a);
O();M()};r["stroke-widthSetter"]=function(a,h){a&&(q=!0);F=this["stroke-width"]=a;T(h,a)};r.strokeSetter=r.fillSetter=r.rSetter=function(a,h){"r"!==h&&("fill"===h&&a&&(q=!0),r[h]=a);T(h,a)};r.anchorXSetter=function(a,h){g=r.anchorX=a;T(h,Math.round(a)-t()-I)};r.anchorYSetter=function(a,h){K=r.anchorY=a;T(h,a-R)};r.xSetter=function(a){r.x=a;m&&(a-=m*((f||H.width)+2*A));I=Math.round(a);r.attr("translateX",I)};r.ySetter=function(a){R=r.y=Math.round(a);r.attr("translateY",R)};var U=r.css;return e(r,{css:function(a){if(a){var h=
{};a=p(a);c(r.textProps,function(b){void 0!==a[b]&&(h[b]=a[b],delete a[b])});w.css(h)}return U.call(r,a)},getBBox:function(){return{width:H.width+2*A,height:H.height+2*A,x:H.x-A,y:H.y-A}},shadow:function(a){a&&(O(),B&&B.shadow(a));return r},destroy:function(){x(r.element,"mouseenter");x(r.element,"mouseleave");w&&(w=w.destroy());B&&(B=B.destroy());E.prototype.destroy.call(r);r=y=O=M=T=null}})}});a.Renderer=C})(N);(function(a){var E=a.attr,C=a.createElement,G=a.css,q=a.defined,f=a.each,k=a.extend,
t=a.isFirefox,m=a.isMS,v=a.isWebKit,u=a.pInt,d=a.SVGRenderer,g=a.win,n=a.wrap;k(a.SVGElement.prototype,{htmlCss:function(a){var c=this.element;if(c=a&&"SPAN"===c.tagName&&a.width)delete a.width,this.textWidth=c,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=k(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=
this.renderer,e=this.element,d=this.translateX||0,b=this.translateY||0,g=this.x||0,n=this.y||0,m=this.textAlign||"left",r={left:0,center:.5,right:1}[m],k=this.styles;G(e,{marginLeft:d,marginTop:b});this.shadows&&f(this.shadows,function(a){G(a,{marginLeft:d+1,marginTop:b+1})});this.inverted&&f(e.childNodes,function(b){a.invertChild(b,e)});if("SPAN"===e.tagName){var w=this.rotation,D=u(this.textWidth),t=k&&k.whiteSpace,p=[w,m,e.innerHTML,this.textWidth,this.textAlign].join();p!==this.cTT&&(k=a.fontMetrics(e.style.fontSize).b,
q(w)&&this.setSpanRotation(w,r,k),G(e,{width:"",whiteSpace:t||"nowrap"}),e.offsetWidth>D&&/[ \-]/.test(e.textContent||e.innerText)&&G(e,{width:D+"px",display:"block",whiteSpace:t||"normal"}),this.getSpanCorrection(e.offsetWidth,k,r,w,m));G(e,{left:g+(this.xCorr||0)+"px",top:n+(this.yCorr||0)+"px"});v&&(k=e.offsetHeight);this.cTT=p}}else this.alignOnAdd=!0},setSpanRotation:function(a,e,d){var b={},c=this.renderer.getTransformKey();b[c]=b.transform="rotate("+a+"deg)";b[c+(t?"Origin":"-origin")]=b.transformOrigin=
100*e+"% "+d+"px";G(this.element,b)},getSpanCorrection:function(a,e,d){this.xCorr=-a*d;this.yCorr=-e}});k(d.prototype,{getTransformKey:function(){return m&&!/Edge/.test(g.navigator.userAgent)?"-ms-transform":v?"-webkit-transform":t?"MozTransform":g.opera?"-o-transform":""},html:function(a,e,d){var b=this.createElement("span"),c=b.element,l=b.renderer,g=l.isSVG,r=function(a,b){f(["opacity","visibility"],function(c){n(a,c+"Setter",function(a,c,e,d){a.call(this,c,e,d);b[e]=c})})};b.textSetter=function(a){a!==
c.innerHTML&&delete this.bBox;c.innerHTML=this.textStr=a;b.htmlUpdateTransform()};g&&r(b,b.element.style);b.xSetter=b.ySetter=b.alignSetter=b.rotationSetter=function(a,c){"align"===c&&(c="textAlign");b[c]=a;b.htmlUpdateTransform()};b.attr({text:a,x:Math.round(e),y:Math.round(d)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});c.style.whiteSpace="nowrap";b.css=b.htmlCss;g&&(b.add=function(a){var e,d=l.box.parentNode,g=[];if(this.parentGroup=a){if(e=a.div,!e){for(;a;)g.push(a),
a=a.parentGroup;f(g.reverse(),function(a){function c(h,b){a[b]=h;m?p[l.getTransformKey()]="translate("+(a.x||a.translateX)+"px,"+(a.y||a.translateY)+"px)":"translateX"===b?p.left=h+"px":p.top=h+"px";a.doTransform=!0}var p,n=E(a.element,"class");n&&(n={className:n});e=a.div=a.div||C("div",n,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},e||d);p=e.style;k(a,{classSetter:function(a){this.element.setAttribute("class",
a);e.className=a},on:function(){g[0].div&&b.on.apply({element:g[0].div},arguments);return a},translateXSetter:c,translateYSetter:c});r(a,p)})}}else e=d;e.appendChild(c);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(N);(function(a){function E(){var m=a.defaultOptions.global,k=t.moment;if(m.timezone){if(k)return function(a){return-k.tz(a,m.timezone).utcOffset()};a.error(25)}return m.useUTC&&m.getTimezoneOffset}function C(){var m=a.defaultOptions.global,f,u=m.useUTC,d=u?"getUTC":
"get",g=u?"setUTC":"set",n="Minutes Hours Day Date Month FullYear".split(" "),c=n.concat(["Milliseconds","Seconds"]);a.Date=f=m.Date||t.Date;f.hcTimezoneOffset=u&&m.timezoneOffset;f.hcGetTimezoneOffset=E();f.hcMakeTime=function(a,c,b,d,g,n){var e;u?(e=f.UTC.apply(0,arguments),e+=q(e)):e=(new f(a,c,k(b,1),k(d,0),k(g,0),k(n,0))).getTime();return e};for(m=0;m<n.length;m++)f["hcGet"+n[m]]=d+n[m];for(m=0;m<c.length;m++)f["hcSet"+c[m]]=g+c[m]}var G=a.color,q=a.getTZOffset,f=a.merge,k=a.pick,t=a.win;a.defaultOptions=
{colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),
resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",
color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,
y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?
25:10,backgroundColor:G("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",
y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(m){a.defaultOptions=f(!0,a.defaultOptions,m);C();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;C()})(N);(function(a){var E=a.correctFloat,C=a.defined,G=a.destroyObjectProperties,q=a.isNumber,f=a.merge,k=a.pick,t=a.deg2rad;a.Tick=function(a,k,f,d){this.axis=a;this.pos=k;this.type=f||"";this.isNewLabel=this.isNew=!0;
f||d||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,v=a.options,u=a.chart,d=a.categories,g=a.names,n=this.pos,c=v.labels,e=a.tickPositions,l=n===e[0],b=n===e[e.length-1],g=d?k(d[n],g[n],n):n,d=this.label,e=e.info,z;a.isDatetimeAxis&&e&&(z=v.dateTimeLabelFormats[e.higherRanks[n]||e.unitName]);this.isFirst=l;this.isLast=b;v=a.labelFormatter.call({axis:a,chart:u,isFirst:l,isLast:b,dateTimeLabelFormat:z,value:a.isLog?E(a.lin2log(g)):g,pos:n});C(d)?d&&d.attr({text:v}):(this.labelLength=
(this.label=d=C(v)&&c.enabled?u.renderer.text(v,0,0,c.useHTML).css(f(c.style)).add(a.labelGroup):null)&&d.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var m=this.axis,f=a.x,d=m.chart.chartWidth,g=m.chart.spacing,n=k(m.labelLeft,Math.min(m.pos,g[3])),g=k(m.labelRight,Math.max(m.pos+m.len,d-g[1])),c=this.label,e=this.rotation,l={left:0,center:.5,right:1}[m.labelAlign],b=c.getBBox().width,
z=m.getSlotWidth(),A=z,I=1,r,J={};if(e)0>e&&f-l*b<n?r=Math.round(f/Math.cos(e*t)-n):0<e&&f+l*b>g&&(r=Math.round((d-f)/Math.cos(e*t)));else if(d=f+(1-l)*b,f-l*b<n?A=a.x+A*(1-l)-n:d>g&&(A=g-a.x+A*l,I=-1),A=Math.min(z,A),A<z&&"center"===m.labelAlign&&(a.x+=I*(z-A-l*(z-Math.min(b,A)))),b>A||m.autoRotation&&(c.styles||{}).width)r=A;r&&(J.width=r,(m.options.labels.style||{}).textOverflow||(J.textOverflow="ellipsis"),c.css(J))},getPosition:function(a,k,f,d){var g=this.axis,n=g.chart,c=d&&n.oldChartHeight||
n.chartHeight;return{x:a?g.translate(k+f,null,null,d)+g.transB:g.left+g.offset+(g.opposite?(d&&n.oldChartWidth||n.chartWidth)-g.right-g.left:0),y:a?c-g.bottom+g.offset-(g.opposite?g.height:0):c-g.translate(k+f,null,null,d)-g.transB}},getLabelPosition:function(a,k,f,d,g,n,c,e){var l=this.axis,b=l.transA,z=l.reversed,A=l.staggerLines,m=l.tickRotCorr||{x:0,y:0},r=g.y;C(r)||(r=0===l.side?f.rotation?-8:-f.getBBox().height:2===l.side?m.y+8:Math.cos(f.rotation*t)*(m.y-f.getBBox(!1,0).height/2));a=a+g.x+
m.x-(n&&d?n*b*(z?-1:1):0);k=k+r-(n&&!d?n*b*(z?1:-1):0);A&&(f=c/(e||1)%A,l.opposite&&(f=A-f-1),k+=l.labelOffset/A*f);return{x:a,y:Math.round(k)}},getMarkPath:function(a,k,f,d,g,n){return n.crispLine(["M",a,k,"L",a+(g?0:-f),k+(g?f:0)],d)},renderGridLine:function(a,k,f){var d=this.axis,g=d.options,n=this.gridLine,c={},e=this.pos,l=this.type,b=d.tickmarkOffset,z=d.chart.renderer,A=l?l+"Grid":"grid",m=g[A+"LineWidth"],r=g[A+"LineColor"],g=g[A+"LineDashStyle"];n||(c.stroke=r,c["stroke-width"]=m,g&&(c.dashstyle=
g),l||(c.zIndex=1),a&&(c.opacity=0),this.gridLine=n=z.path().attr(c).addClass("highcharts-"+(l?l+"-":"")+"grid-line").add(d.gridGroup));if(!a&&n&&(a=d.getPlotLinePath(e+b,n.strokeWidth()*f,a,!0)))n[this.isNew?"attr":"animate"]({d:a,opacity:k})},renderMark:function(a,f,u){var d=this.axis,g=d.options,n=d.chart.renderer,c=this.type,e=c?c+"Tick":"tick",l=d.tickSize(e),b=this.mark,z=!b,A=a.x;a=a.y;var m=k(g[e+"Width"],!c&&d.isXAxis?1:0),g=g[e+"Color"];l&&(d.opposite&&(l[0]=-l[0]),z&&(this.mark=b=n.path().addClass("highcharts-"+
(c?c+"-":"")+"tick").add(d.axisGroup),b.attr({stroke:g,"stroke-width":m})),b[z?"attr":"animate"]({d:this.getMarkPath(A,a,l[0],b.strokeWidth()*u,d.horiz,n),opacity:f}))},renderLabel:function(a,f,u,d){var g=this.axis,n=g.horiz,c=g.options,e=this.label,l=c.labels,b=l.step,z=g.tickmarkOffset,A=!0,m=a.x;a=a.y;e&&q(m)&&(e.xy=a=this.getLabelPosition(m,a,e,n,l,z,d,b),this.isFirst&&!this.isLast&&!k(c.showFirstLabel,1)||this.isLast&&!this.isFirst&&!k(c.showLastLabel,1)?A=!1:!n||g.isRadial||l.step||l.rotation||
f||0===u||this.handleOverflow(a),b&&d%b&&(A=!1),A&&q(a.y)?(a.opacity=u,e[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(e.attr("y",-9999),this.isNewLabel=!0))},render:function(a,f,u){var d=this.axis,g=d.horiz,n=this.getPosition(g,this.pos,d.tickmarkOffset,f),c=n.x,e=n.y,d=g&&c===d.pos+d.len||!g&&e===d.pos?-1:1;u=k(u,1);this.isActive=!0;this.renderGridLine(f,u,d);this.renderMark(n,u,d);this.renderLabel(n,f,u,a);this.isNew=!1},destroy:function(){G(this,this.axis)}}})(N);var V=function(a){var E=
a.addEvent,C=a.animObject,G=a.arrayMax,q=a.arrayMin,f=a.color,k=a.correctFloat,t=a.defaultOptions,m=a.defined,v=a.deg2rad,u=a.destroyObjectProperties,d=a.each,g=a.extend,n=a.fireEvent,c=a.format,e=a.getMagnitude,l=a.grep,b=a.inArray,z=a.isArray,A=a.isNumber,I=a.isString,r=a.merge,J=a.normalizeTickInterval,w=a.objectEach,D=a.pick,M=a.removeEvent,p=a.splat,B=a.syncTimeout,H=a.Tick,F=function(){this.init.apply(this,arguments)};a.extend(F.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",
second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",
lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},
defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,x){var h=x.isX,c=this;c.chart=a;c.horiz=a.inverted&&!c.isZAxis?!h:h;c.isXAxis=h;c.coll=c.coll||(h?"xAxis":"yAxis");c.opposite=x.opposite;c.side=x.side||(c.horiz?c.opposite?0:2:c.opposite?1:3);c.setOptions(x);var e=this.options,d=e.type;c.labelFormatter=e.labels.formatter||
c.defaultLabelFormatter;c.userOptions=x;c.minPixelPadding=0;c.reversed=e.reversed;c.visible=!1!==e.visible;c.zoomEnabled=!1!==e.zoomEnabled;c.hasNames="category"===d||!0===e.categories;c.categories=e.categories||c.hasNames;c.names=c.names||[];c.plotLinesAndBandsGroups={};c.isLog="logarithmic"===d;c.isDatetimeAxis="datetime"===d;c.positiveValuesOnly=c.isLog&&!c.allowNegativeLog;c.isLinked=m(e.linkedTo);c.ticks={};c.labelEdge=[];c.minorTicks={};c.plotLinesAndBands=[];c.alternateBands={};c.len=0;c.minRange=
c.userMinRange=e.minRange||e.maxZoom;c.range=e.range;c.offset=e.offset||0;c.stacks={};c.oldStacks={};c.stacksTouched=0;c.max=null;c.min=null;c.crosshair=D(e.crosshair,p(a.options.tooltip.crosshairs)[h?0:1],!1);x=c.options.events;-1===b(c,a.axes)&&(h?a.axes.splice(a.xAxis.length,0,c):a.axes.push(c),a[c.coll].push(c));c.series=c.series||[];a.inverted&&!c.isZAxis&&h&&void 0===c.reversed&&(c.reversed=!0);w(x,function(a,h){E(c,h,a)});c.lin2log=e.linearToLogConverter||c.lin2log;c.isLog&&(c.val2lin=c.log2lin,
c.lin2val=c.lin2log)},setOptions:function(a){this.options=r(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],r(t[this.coll],a))},defaultLabelFormatter:function(){var h=this.axis,b=this.value,e=h.categories,d=this.dateTimeLabelFormat,p=t.lang,l=p.numericSymbols,p=p.numericSymbolMagnitude||1E3,g=l&&l.length,n,r=h.options.labels.format,h=h.isLog?Math.abs(b):
h.tickInterval;if(r)n=c(r,this);else if(e)n=b;else if(d)n=a.dateFormat(d,b);else if(g&&1E3<=h)for(;g--&&void 0===n;)e=Math.pow(p,g+1),h>=e&&0===10*b%e&&null!==l[g]&&0!==b&&(n=a.numberFormat(b/e,-1)+l[g]);void 0===n&&(n=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return n},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();d(a.series,function(h){if(h.visible||
!b.options.chart.ignoreHiddenSeries){var c=h.options,x=c.threshold,e;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=x&&(x=null);if(a.isXAxis)c=h.xData,c.length&&(h=q(c),A(h)||h instanceof Date||(c=l(c,function(a){return A(a)}),h=q(c)),a.dataMin=Math.min(D(a.dataMin,c[0]),h),a.dataMax=Math.max(D(a.dataMax,c[0]),G(c)));else if(h.getExtremes(),e=h.dataMax,h=h.dataMin,m(h)&&m(e)&&(a.dataMin=Math.min(D(a.dataMin,h),h),a.dataMax=Math.max(D(a.dataMax,e),e)),m(x)&&(a.threshold=x),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=
!1}})},translate:function(a,b,c,e,d,p){var h=this.linkedParent||this,x=1,l=0,g=e?h.oldTransA:h.transA;e=e?h.oldMin:h.min;var n=h.minPixelPadding;d=(h.isOrdinal||h.isBroken||h.isLog&&d)&&h.lin2val;g||(g=h.transA);c&&(x*=-1,l=h.len);h.reversed&&(x*=-1,l-=x*(h.sector||h.len));b?(a=(a*x+l-n)/g+e,d&&(a=h.lin2val(a))):(d&&(a=h.val2lin(a)),a=A(e)?x*(a-e)*g+l+x*n+(A(p)?g*p:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-
(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,e,d){var h=this.chart,x=this.left,p=this.top,l,g,n=c&&h.oldChartHeight||h.chartHeight,r=c&&h.oldChartWidth||h.chartWidth,z;l=this.transB;var w=function(a,h,b){if(a<h||a>b)e?a=Math.min(Math.max(h,a),b):z=!0;return a};d=D(d,this.translate(a,null,null,c));a=c=Math.round(d+l);l=g=Math.round(n-d-l);A(d)?this.horiz?(l=p,g=n-this.bottom,a=c=w(a,x,x+this.width)):(a=x,c=r-this.right,l=g=w(l,p,p+this.height)):(z=!0,e=!1);return z&&!e?null:
h.renderer.crispLine(["M",a,l,"L",c,g],b||1)},getLinearTickPositions:function(a,b,c){var h,x=k(Math.floor(b/a)*a);c=k(Math.ceil(c/a)*a);var e=[];if(this.single)return[b];for(b=x;b<=c;){e.push(b);b=k(b+a);if(b===h)break;h=b}return e},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?D(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,c=a.tickPositions,e=a.minorTickInterval,p=[],l=a.pointRangePadding||
0,g=a.min-l,l=a.max+l,n=l-g;if(n&&n/e<a.len/3)if(a.isLog)d(this.paddedTicks,function(h,b,c){b&&p.push.apply(p,a.getLogTickPositions(e,c[b-1],c[b],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())p=p.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e),g,l,b.startOfWeek));else for(b=g+(c[0]-g)%e;b<=l&&b!==p[0];b+=e)p.push(b);0!==p.length&&a.trimTicks(p);return p},adjustForMinRange:function(){var a=this.options,b=this.min,c=this.max,e,p,l,g,n,r,z,w;this.isXAxis&&void 0===this.minRange&&
!this.isLog&&(m(a.min)||m(a.max)?this.minRange=null:(d(this.series,function(a){r=a.xData;for(g=z=a.xIncrement?1:r.length-1;0<g;g--)if(n=r[g]-r[g-1],void 0===l||n<l)l=n}),this.minRange=Math.min(5*l,this.dataMax-this.dataMin)));c-b<this.minRange&&(p=this.dataMax-this.dataMin>=this.minRange,w=this.minRange,e=(w-c+b)/2,e=[b-e,D(a.min,b-e)],p&&(e[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=G(e),c=[b+w,D(a.max,b+w)],p&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=q(c),c-b<w&&
(e[0]=c-w,e[1]=D(a.min,c-w),b=G(e)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:d(this.series,function(h){var b=h.closestPointRange,c=h.visible||!h.chart.options.chart.ignoreHiddenSeries;!h.noSharedTooltip&&m(b)&&c&&(a=m(a)?Math.min(a,b):b)});return a},nameToX:function(a){var h=z(this.categories),c=h?this.categories:this.names,e=a.options.x,d;a.series.requireSorting=!1;m(e)||(e=!1===this.options.uniqueNames?a.series.autoIncrement():b(a.name,c));-1===e?h||(d=c.length):d=
e;void 0!==d&&(this.names[d]=a.name);return d},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=this.userMinRange,d(this.series||[],function(h){h.xIncrement=null;if(!h.points||h.isDirtyData)h.processData(),h.generatePoints();d(h.points,function(b,c){var e;b.options&&(e=a.nameToX(b),void 0!==e&&e!==b.x&&(b.x=e,h.xData[c]=e))})}))},setAxisTranslation:function(a){var h=this,b=h.max-h.min,c=h.axisPointRange||0,e,p=0,l=0,g=h.linkedParent,n=!!h.categories,r=h.transA,
z=h.isXAxis;if(z||n||c)e=h.getClosest(),g?(p=g.minPointOffset,l=g.pointRangePadding):d(h.series,function(a){var b=n?1:z?D(a.options.pointRange,e,0):h.axisPointRange||0;a=a.options.pointPlacement;c=Math.max(c,b);h.single||(p=Math.max(p,I(a)?0:b/2),l=Math.max(l,"on"===a?0:b))}),g=h.ordinalSlope&&e?h.ordinalSlope/e:1,h.minPointOffset=p*=g,h.pointRangePadding=l*=g,h.pointRange=Math.min(c,b),z&&(h.closestPointRange=e);a&&(h.oldTransA=r);h.translationSlope=h.transA=r=h.options.staticScale||h.len/(b+l||
1);h.transB=h.horiz?h.left:h.bottom;h.minPixelPadding=r*p},minFromRange:function(){return this.max-this.range},setTickInterval:function(h){var b=this,c=b.chart,p=b.options,l=b.isLog,g=b.log2lin,r=b.isDatetimeAxis,z=b.isXAxis,w=b.isLinked,B=p.maxPadding,H=p.minPadding,f=p.tickInterval,u=p.tickPixelInterval,I=b.categories,F=b.threshold,q=b.softThreshold,t,v,M,C;r||I||w||this.getTickAmount();M=D(b.userMin,p.min);C=D(b.userMax,p.max);w?(b.linkedParent=c[b.coll][p.linkedTo],c=b.linkedParent.getExtremes(),
b.min=D(c.min,c.dataMin),b.max=D(c.max,c.dataMax),p.type!==b.linkedParent.options.type&&a.error(11,1)):(!q&&m(F)&&(b.dataMin>=F?(t=F,H=0):b.dataMax<=F&&(v=F,B=0)),b.min=D(M,t,b.dataMin),b.max=D(C,v,b.dataMax));l&&(b.positiveValuesOnly&&!h&&0>=Math.min(b.min,D(b.dataMin,b.min))&&a.error(10,1),b.min=k(g(b.min),15),b.max=k(g(b.max),15));b.range&&m(b.max)&&(b.userMin=b.min=M=Math.max(b.dataMin,b.minFromRange()),b.userMax=C=b.max,b.range=null);n(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();
!(I||b.axisPointRange||b.usePercentage||w)&&m(b.min)&&m(b.max)&&(g=b.max-b.min)&&(!m(M)&&H&&(b.min-=g*H),!m(C)&&B&&(b.max+=g*B));A(p.softMin)&&(b.min=Math.min(b.min,p.softMin));A(p.softMax)&&(b.max=Math.max(b.max,p.softMax));A(p.floor)&&(b.min=Math.max(b.min,p.floor));A(p.ceiling)&&(b.max=Math.min(b.max,p.ceiling));q&&m(b.dataMin)&&(F=F||0,!m(M)&&b.min<F&&b.dataMin>=F?b.min=F:!m(C)&&b.max>F&&b.dataMax<=F&&(b.max=F));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:w&&!f&&u===b.linkedParent.options.tickPixelInterval?
f=b.linkedParent.tickInterval:D(f,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,I?1:(b.max-b.min)*u/Math.max(b.len,u));z&&!h&&d(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!f&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));h=D(p.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);
!f&&b.tickInterval<h&&(b.tickInterval=h);r||l||f||(b.tickInterval=J(b.tickInterval,null,e(b.tickInterval),D(p.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions;b=this.getMinorTickInterval();var e=a.tickPositioner,p=a.startOnTick,d=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===
this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&m(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):
this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,e&&(e=e.apply(this,[this.min,this.max])))&&(this.tickPositions=b=e);this.paddedTicks=b.slice(0);this.trimTicks(b,p,d);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),c||e||this.adjustTickAmount())},trimTicks:function(a,b,c){var h=a[0],e=a[a.length-1],p=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==h)this.min=h;else for(;this.min-p>a[0];)a.shift();
if(c)this.max=e;else for(;this.max+p<a[a.length-1];)a.pop();0===a.length&&m(h)&&a.push((e+h)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||!1===c.alignTicks||this.isLog||d(this.chart[this.coll],function(h){var c=h.options,c=[h.horiz?c.left:c.top,c.width,c.height,c.pane].join();h.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!m(a.tickInterval)&&this.len<c&&!this.isRadial&&
!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,e=this.finalTickAmt,p=b&&b.length;if(p<c){for(;b.length<c;)b.push(k(b[b.length-1]+a));this.transA*=(p-1)/(c-1);this.max=b[b.length-1]}else p>c&&(this.tickInterval*=2,this.setTickPositions());if(m(e)){for(a=c=b.length;a--;)(3===e&&1===a%2||2>=e&&0<a&&a<c-1)&&b.splice(a,
1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;d(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=
this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,e,p){var h=this,l=h.chart;c=D(c,!0);d(h.series,function(a){delete a.kdTree});p=g(p,{min:a,max:b});n(h,"setExtremes",p,function(){h.userMin=a;h.userMax=b;h.eventArgs=p;c&&l.redraw(e)})},zoom:function(a,b){var h=this.dataMin,c=this.dataMax,e=this.options,p=Math.min(h,D(e.min,h)),e=Math.max(c,D(e.max,c));if(a!==this.min||
b!==this.max)this.allowZoomOutside||(m(h)&&(a<p&&(a=p),a>e&&(a=e)),m(c)&&(b<p&&(b=p),b>e&&(b=e))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,c=this.options,e=c.offsets||[0,0,0,0],p=this.horiz,d=this.width=Math.round(a.relativeLength(D(c.width,b.plotWidth-e[3]+e[1]),b.plotWidth)),l=this.height=Math.round(a.relativeLength(D(c.height,b.plotHeight-e[0]+e[2]),b.plotHeight)),g=this.top=Math.round(a.relativeLength(D(c.top,
b.plotTop+e[0]),b.plotHeight,b.plotTop)),c=this.left=Math.round(a.relativeLength(D(c.left,b.plotLeft+e[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-l-g;this.right=b.chartWidth-d-c;this.len=Math.max(p?d:l,0);this.pos=p?c:g},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?k(b(this.min)):this.min,max:a?k(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,h=this.lin2log,c=b?
h(this.min):this.min,b=b?h(this.max):this.max;null===a?a=c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(D(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,h=b[a+"Length"],c=D(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&h)return"inside"===b[a+"Position"]&&(h=-h),[h,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,e=c,p=this.len/(((this.categories?1:0)+this.max-this.min)/c),l,g=a.rotation,n=this.labelMetrics(),r,z=Number.MAX_VALUE,w,B=function(a){a/=p||1;a=1<a?Math.ceil(a):1;return a*c};b?(w=!a.staggerLines&&!a.step&&(m(g)?[g]:p<D(a.autoRotationLimit,80)&&a.autoRotation))&&d(w,function(a){var b;if(a===g||a&&-90<=a&&90>=a)r=B(Math.abs(n.h/Math.sin(v*a))),b=r+
Math.abs(a/360),b<z&&(z=b,l=a,e=r)}):a.step||(e=B(n.h));this.autoRotation=w;this.labelRotation=D(l,g);return e},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),p=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/e||!b&&(c.style&&parseInt(c.style.width,10)||p&&p-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,e=this.ticks,
p=this.options.labels,l=this.horiz,g=this.getSlotWidth(),n=Math.max(1,Math.round(g-2*(p.padding||5))),z={},w=this.labelMetrics(),B=p.style&&p.style.textOverflow,H,f=0,k,A;I(p.rotation)||(z.rotation=p.rotation||0);d(c,function(a){(a=e[a])&&a.labelLength>f&&(f=a.labelLength)});this.maxLabelLength=f;if(this.autoRotation)f>n&&f>w.h?z.rotation=this.labelRotation:this.labelRotation=0;else if(g&&(H={width:n+"px"},!B))for(H.textOverflow="clip",k=c.length;!l&&k--;)if(A=c[k],n=e[A].label)n.styles&&"ellipsis"===
n.styles.textOverflow?n.css({textOverflow:"clip"}):e[A].labelLength>g&&n.css({width:g+"px"}),n.getBBox().height>this.len/c.length-(w.h-w.f)&&(n.specCss={textOverflow:"ellipsis"});z.rotation&&(H={width:(f>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},B||(H.textOverflow="ellipsis"));if(this.labelAlign=p.align||this.autoLabelAlign(this.labelRotation))z.align=this.labelAlign;d(c,function(a){var b=(a=e[a])&&a.label;b&&(b.attr(z),H&&b.css(r(H,b.specCss)),delete b.specCss,a.rotation=z.rotation)});
this.tickRotCorr=b.rotCorr(w.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||m(this.min)&&m(this.max)&&!!this.tickPositions},addTitle:function(a){var b=this.chart.renderer,h=this.horiz,c=this.opposite,e=this.options.title,p;this.axisTitle||((p=e.textAlign)||(p=(h?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[e.align]),this.axisTitle=b.text(e.text,0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation||0,
align:p}).addClass("highcharts-axis-title").css(e.style).add(this.axisGroup),this.axisTitle.isNew=!0);e.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new H(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,e=a.options,p=a.tickPositions,l=a.ticks,g=a.horiz,n=a.side,r=b.inverted&&!a.isZAxis?[1,0,3,2][n]:n,z,B,H=0,f,k=0,A=e.title,u=e.labels,F=0,I=b.axisOffset,b=b.clipOffset,
J=[-1,1,1,-1][n],q=e.className,t=a.axisParent,v=this.tickSize("tick");z=a.hasData();a.showAxis=B=z||D(e.showEmpty,!0);a.staggerLines=a.horiz&&u.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:e.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(q||"")).add(t),a.axisGroup=c.g("axis").attr({zIndex:e.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(q||"")).add(t),a.labelGroup=c.g("axis-labels").attr({zIndex:u.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+
"-labels "+(q||"")).add(t));z||a.isLinked?(d(p,function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),!1===u.reserveSpace||0!==n&&2!==n&&{1:"left",3:"right"}[n]!==a.labelAlign&&"center"!==a.labelAlign||d(p,function(a){F=Math.max(l[a].getLabelSize(),F)}),a.staggerLines&&(F*=a.staggerLines,a.labelOffset=F*(a.opposite?-1:1))):w(l,function(a,b){a.destroy();delete l[b]});A&&A.text&&!1!==A.enabled&&(a.addTitle(B),B&&!1!==A.reserveSpace&&(a.titleOffset=H=a.axisTitle.getBBox()[g?"height":"width"],f=A.offset,
k=m(f)?0:D(A.margin,g?5:10)));a.renderLine();a.offset=J*D(e.offset,I[n]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===n?-a.labelMetrics().h:2===n?a.tickRotCorr.y:0;k=Math.abs(F)+k;F&&(k=k-c+J*(g?D(u.y,a.tickRotCorr.y+8*J):u.x));a.axisTitleMargin=D(f,k);I[n]=Math.max(I[n],a.axisTitleMargin+H+J*a.offset,k,z&&p.length&&v?v[0]+J*a.offset:0);e=e.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[r]=Math.max(b[r],e)},getLinePath:function(a){var b=this.chart,c=this.opposite,h=this.offset,e=this.horiz,p=
this.left+(c?this.width:0)+h,h=b.chartHeight-this.bottom-(c?this.height:0)+h;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:p,e?h:this.top,"L",e?b.chartWidth-this.right:p,e?h:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,
c=this.top,e=this.len,p=this.options.title,d=a?b:c,l=this.opposite,g=this.offset,n=p.x||0,r=p.y||0,z=this.axisTitle,w=this.chart.renderer.fontMetrics(p.style&&p.style.fontSize,z),z=Math.max(z.getBBox(null,0).height-w.h-1,0),e={low:d+(a?0:e),middle:d+e/2,high:d+(a?e:0)}[p.align],b=(a?c+this.height:b)+(a?1:-1)*(l?-1:1)*this.axisTitleMargin+[-z,z,w.f,-z][this.side];return{x:a?e+n:b+(l?this.width:0)+g+n,y:a?b+r-(l?this.height:0)+g:e+r}},renderMinorTick:function(a){var b=this.chart.hasRendered&&A(this.oldMin),
c=this.minorTicks;c[a]||(c[a]=new H(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,h=this.ticks,e=this.chart.hasRendered&&A(this.oldMin);if(!c||a>=this.min&&a<=this.max)h[a]||(h[a]=new H(this,a)),e&&h[a].isNew&&h[a].render(b,!0,.1),h[a].render(b)},render:function(){var b=this,c=b.chart,e=b.options,p=b.isLog,l=b.lin2log,g=b.isLinked,n=b.tickPositions,r=b.axisTitle,z=b.ticks,f=b.minorTicks,k=b.alternateBands,m=e.stackLabels,
D=e.alternateGridColor,u=b.tickmarkOffset,F=b.axisLine,I=b.showAxis,J=C(c.renderer.globalAnimation),q,t;b.labelEdge.length=0;b.overlap=!1;d([z,f,k],function(a){w(a,function(a){a.isActive=!1})});if(b.hasData()||g)b.minorTickInterval&&!b.categories&&d(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),n.length&&(d(n,function(a,c){b.renderTick(a,c)}),u&&(0===b.min||b.single)&&(z[-1]||(z[-1]=new H(b,-1,null,!0)),z[-1].render(-1))),D&&d(n,function(e,h){t=void 0!==n[h+1]?n[h+1]+u:b.max-u;0===
h%2&&e<b.max&&t<=b.max+(c.polar?-u:u)&&(k[e]||(k[e]=new a.PlotLineOrBand(b)),q=e+u,k[e].options={from:p?l(q):q,to:p?l(t):t,color:D},k[e].render(),k[e].isActive=!0)}),b._addedPlotLB||(d((e.plotLines||[]).concat(e.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);d([z,f,k],function(a){var b,e=[],h=J.duration;w(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,e.push(b))});B(function(){for(b=e.length;b--;)a[e[b]]&&!a[e[b]].isActive&&(a[e[b]].destroy(),delete a[e[b]])},
a!==k&&c.hasRendered&&h?h:0)});F&&(F[F.isPlaced?"animate":"attr"]({d:this.getLinePath(F.strokeWidth())}),F.isPlaced=!0,F[I?"show":"hide"](!0));r&&I&&(e=b.getTitlePosition(),A(e.y)?(r[r.isNew?"attr":"animate"](e),r.isNew=!1):(r.attr("y",-9999),r.isNew=!0));m&&m.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),d(this.plotLinesAndBands,function(a){a.render()}));d(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),
destroy:function(a){var c=this,e=c.stacks,h=c.plotLinesAndBands,p;a||M(c);w(e,function(a,b){u(a);e[b]=null});d([c.ticks,c.minorTicks,c.alternateBands],function(a){u(a)});if(h)for(a=h.length;a--;)h[a].destroy();d("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){c[a]&&(c[a]=c[a].destroy())});for(p in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[p]=c.plotLinesAndBandsGroups[p].destroy();w(c,function(a,e){-1===b(e,c.keepProps)&&delete c[e]})},drawCrosshair:function(a,
b){var c,e=this.crosshair,h=D(e.snap,!0),p,d=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(m(b)||!h)?(h?m(b)&&(p=this.isXAxis?b.plotX:this.len-b.plotY):p=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),m(p)&&(c=this.getPlotLinePath(b&&(this.isXAxis?b.x:D(b.stackY,b.y)),null,null,null,p)||null),m(c)?(b=this.categories&&!this.isRadial,d||(this.cross=d=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+e.className).attr({zIndex:D(e.zIndex,
2)}).add(),d.attr({stroke:e.color||(b?f("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":D(e.width,1)}).css({"pointer-events":"none"}),e.dashStyle&&d.attr({dashstyle:e.dashStyle})),d.show().attr({d:c}),b&&!e.width&&d.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=F}(N);(function(a){var E=a.Axis,C=a.Date,G=a.dateFormat,q=a.defaultOptions,f=a.defined,k=a.each,t=a.extend,
m=a.getMagnitude,v=a.getTZOffset,u=a.normalizeTickInterval,d=a.pick,g=a.timeUnits;E.prototype.getTimeTicks=function(a,c,e,l){var b=[],n={},A=q.global.useUTC,m,r=new C(c-Math.max(v(c),v(e))),u=C.hcMakeTime,w=a.unitRange,D=a.count,M,p;if(f(c)){r[C.hcSetMilliseconds](w>=g.second?0:D*Math.floor(r.getMilliseconds()/D));if(w>=g.second)r[C.hcSetSeconds](w>=g.minute?0:D*Math.floor(r.getSeconds()/D));if(w>=g.minute)r[C.hcSetMinutes](w>=g.hour?0:D*Math.floor(r[C.hcGetMinutes]()/D));if(w>=g.hour)r[C.hcSetHours](w>=
g.day?0:D*Math.floor(r[C.hcGetHours]()/D));if(w>=g.day)r[C.hcSetDate](w>=g.month?1:D*Math.floor(r[C.hcGetDate]()/D));w>=g.month&&(r[C.hcSetMonth](w>=g.year?0:D*Math.floor(r[C.hcGetMonth]()/D)),m=r[C.hcGetFullYear]());if(w>=g.year)r[C.hcSetFullYear](m-m%D);if(w===g.week)r[C.hcSetDate](r[C.hcGetDate]()-r[C.hcGetDay]()+d(l,1));m=r[C.hcGetFullYear]();l=r[C.hcGetMonth]();var B=r[C.hcGetDate](),H=r[C.hcGetHours]();if(C.hcTimezoneOffset||C.hcGetTimezoneOffset)p=(!A||!!C.hcGetTimezoneOffset)&&(e-c>4*g.month||
v(c)!==v(e)),r=r.getTime(),M=v(r),r=new C(r+M);A=r.getTime();for(c=1;A<e;)b.push(A),A=w===g.year?u(m+c*D,0):w===g.month?u(m,l+c*D):!p||w!==g.day&&w!==g.week?p&&w===g.hour?u(m,l,B,H+c*D,0,0,M)-M:A+w*D:u(m,l,B+c*D*(w===g.day?1:7)),c++;b.push(A);w<=g.hour&&1E4>b.length&&k(b,function(a){0===a%18E5&&"000000000"===G("%H%M%S%L",a)&&(n[a]="day")})}b.info=t(a,{higherRanks:n,totalRange:w*D});return b};E.prototype.normalizeTimeTickInterval=function(a,c){var e=c||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],
["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];c=e[e.length-1];var d=g[c[0]],b=c[1],n;for(n=0;n<e.length&&!(c=e[n],d=g[c[0]],b=c[1],e[n+1]&&a<=(d*b[b.length-1]+g[e[n+1][0]])/2);n++);d===g.year&&a<5*d&&(b=[1,2,5]);a=u(a/d,b,"year"===c[0]?Math.max(m(a/d),1):1);return{unitRange:d,count:a,unitName:c[0]}}})(N);(function(a){var E=a.Axis,C=a.getMagnitude,G=a.map,q=a.normalizeTickInterval,f=a.pick;E.prototype.getLogTickPositions=
function(a,t,m,v){var k=this.options,d=this.len,g=this.lin2log,n=this.log2lin,c=[];v||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),c=this.getLinearTickPositions(a,t,m);else if(.08<=a)for(var d=Math.floor(t),e,l,b,z,A,k=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];d<m+1&&!A;d++)for(l=k.length,e=0;e<l&&!A;e++)b=n(g(d)*k[e]),b>t&&(!v||z<=m)&&void 0!==z&&c.push(z),z>m&&(A=!0),z=b;else t=g(t),m=g(m),a=v?this.getMinorTickInterval():k.tickInterval,a=f("auto"===a?null:a,this._minorAutoInterval,
k.tickPixelInterval/(v?5:1)*(m-t)/((v?d/this.tickPositions.length:d)||1)),a=q(a,null,C(a)),c=G(this.getLinearTickPositions(a,t,m),n),v||(this._minorAutoInterval=a/5);v||(this.tickInterval=a);return c};E.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};E.prototype.lin2log=function(a){return Math.pow(10,a)}})(N);(function(a,E){var C=a.arrayMax,G=a.arrayMin,q=a.defined,f=a.destroyObjectProperties,k=a.each,t=a.erase,m=a.merge,v=a.pick;a.PlotLineOrBand=function(a,d){this.axis=a;d&&(this.options=
d,this.id=d.id)};a.PlotLineOrBand.prototype={render:function(){var f=this,d=f.axis,g=d.horiz,n=f.options,c=n.label,e=f.label,l=n.to,b=n.from,z=n.value,A=q(b)&&q(l),k=q(z),r=f.svgElem,J=!r,w=[],D=n.color,t=v(n.zIndex,0),p=n.events,w={"class":"highcharts-plot-"+(A?"band ":"line ")+(n.className||"")},B={},H=d.chart.renderer,F=A?"bands":"lines",h=d.log2lin;d.isLog&&(b=h(b),l=h(l),z=h(z));k?(w={stroke:D,"stroke-width":n.width},n.dashStyle&&(w.dashstyle=n.dashStyle)):A&&(D&&(w.fill=D),n.borderWidth&&(w.stroke=
n.borderColor,w["stroke-width"]=n.borderWidth));B.zIndex=t;F+="-"+t;(D=d.plotLinesAndBandsGroups[F])||(d.plotLinesAndBandsGroups[F]=D=H.g("plot-"+F).attr(B).add());J&&(f.svgElem=r=H.path().attr(w).add(D));if(k)w=d.getPlotLinePath(z,r.strokeWidth());else if(A)w=d.getPlotBandPath(b,l,n);else return;J&&w&&w.length?(r.attr({d:w}),p&&a.objectEach(p,function(a,b){r.on(b,function(a){p[b].apply(f,[a])})})):r&&(w?(r.show(),r.animate({d:w})):(r.hide(),e&&(f.label=e=e.destroy())));c&&q(c.text)&&w&&w.length&&
0<d.width&&0<d.height&&!w.flat?(c=m({align:g&&A&&"center",x:g?!A&&4:10,verticalAlign:!g&&A&&"middle",y:g?A?16:10:A?6:-4,rotation:g&&!A&&90},c),this.renderLabel(c,w,A,t)):e&&e.hide();return f},renderLabel:function(a,d,g,n){var c=this.label,e=this.axis.chart.renderer;c||(c={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(g?"band":"line")+"-label "+(a.className||"")},c.zIndex=n,this.label=c=e.text(a.text,0,0,a.useHTML).attr(c).add(),c.css(a.style));n=d.xBounds||[d[1],d[4],
g?d[6]:d[1]];d=d.yBounds||[d[2],d[5],g?d[7]:d[2]];g=G(n);e=G(d);c.align(a,!1,{x:g,y:e,width:C(n)-g,height:C(d)-e});c.show()},destroy:function(){t(this.axis.plotLinesAndBands,this);delete this.axis;f(this)}};a.extend(E.prototype,{getPlotBandPath:function(a,d){var g=this.getPlotLinePath(d,null,null,!0),n=this.getPlotLinePath(a,null,null,!0),c=[],e=this.horiz,l=1,b;a=a<this.min&&d<this.min||a>this.max&&d>this.max;if(n&&g)for(a&&(b=n.toString()===g.toString(),l=0),a=0;a<n.length;a+=6)e&&g[a+1]===n[a+
1]?(g[a+1]+=l,g[a+4]+=l):e||g[a+2]!==n[a+2]||(g[a+2]+=l,g[a+5]+=l),c.push("M",n[a+1],n[a+2],"L",n[a+4],n[a+5],g[a+4],g[a+5],g[a+1],g[a+2],"z"),c.flat=b;return c},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(f,d){var g=(new a.PlotLineOrBand(this,f)).render(),n=this.userOptions;g&&(d&&(n[d]=n[d]||[],n[d].push(f)),this.plotLinesAndBands.push(g));return g},removePlotBandOrLine:function(a){for(var d=
this.plotLinesAndBands,g=this.options,n=this.userOptions,c=d.length;c--;)d[c].id===a&&d[c].destroy();k([g.plotLines||[],n.plotLines||[],g.plotBands||[],n.plotBands||[]],function(e){for(c=e.length;c--;)e[c].id===a&&t(e,e[c])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(N,V);(function(a){var E=a.dateFormat,C=a.each,G=a.extend,q=a.format,f=a.isNumber,k=a.map,t=a.merge,m=a.pick,v=a.splat,u=a.syncTimeout,d=a.timeUnits;a.Tooltip=
function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,d){this.chart=a;this.options=d;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=d.split&&!a.inverted;this.shared=d.shared||this.split},cleanSplit:function(a){C(this.chart.series,function(d){var c=d&&d.tt;c&&(!c.isActive||a?d.tt=c.destroy():c.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,d=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,d.shape||
"callout",null,null,d.useHTML,null,"tooltip").attr({padding:d.padding,r:d.borderRadius}),this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).shadow(d.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();t(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,t(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());
clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,d,c,e){var l=this,b=l.now,g=!1!==l.options.animation&&!l.isHidden&&(1<Math.abs(a-b.x)||1<Math.abs(d-b.y)),n=l.followPointer||1<l.len;G(b,{x:g?(2*b.x+a)/3:a,y:g?(b.y+d)/2:d,anchorX:n?void 0:g?(2*b.anchorX+c)/3:c,anchorY:n?void 0:g?(b.anchorY+e)/2:e});l.getLabel().attr(b);g&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){l&&l.move(a,d,c,e)},32))},hide:function(a){var d=this;clearTimeout(this.hideTimer);
a=m(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){d.getLabel()[a?"fadeOut":"hide"]();d.isHidden=!0},a))},getAnchor:function(a,d){var c,e=this.chart,l=e.inverted,b=e.plotTop,g=e.plotLeft,n=0,f=0,r,m;a=v(a);c=a[0].tooltipPos;this.followPointer&&d&&(void 0===d.chartX&&(d=e.pointer.normalize(d)),c=[d.chartX-e.plotLeft,d.chartY-b]);c||(C(a,function(a){r=a.series.yAxis;m=a.series.xAxis;n+=a.plotX+(!l&&m?m.left-g:0);f+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!l&&r?r.top-
b:0)}),n/=a.length,f/=a.length,c=[l?e.plotWidth-f:n,this.shared&&!l&&1<a.length&&d?d.chartY-b:l?e.plotHeight-n:f]);return k(c,Math.round)},getPosition:function(a,d,c){var e=this.chart,l=this.distance,b={},g=e.inverted&&c.h||0,n,f=["y",e.chartHeight,d,c.plotY+e.plotTop,e.plotTop,e.plotTop+e.plotHeight],r=["x",e.chartWidth,a,c.plotX+e.plotLeft,e.plotLeft,e.plotLeft+e.plotWidth],k=!this.followPointer&&m(c.ttBelow,!e.inverted===!!c.negative),w=function(a,c,e,h,p,d){var n=e<h-l,r=h+l+e<c,z=h-l-e;h+=l;
if(k&&r)b[a]=h;else if(!k&&n)b[a]=z;else if(n)b[a]=Math.min(d-e,0>z-g?z:z-g);else if(r)b[a]=Math.max(p,h+g+e>c?h:h+g);else return!1},D=function(a,c,e,h){var p;h<l||h>c-l?p=!1:b[a]=h<e/2?1:h>c-e/2?c-e-2:h-e/2;return p},t=function(a){var b=f;f=r;r=b;n=a},p=function(){!1!==w.apply(0,f)?!1!==D.apply(0,r)||n||(t(!0),p()):n?b.x=b.y=0:(t(!0),p())};(e.inverted||1<this.len)&&t();p();return b},defaultFormatter:function(a){var d=this.points||v(this),c;c=[a.tooltipFooterHeaderFormatter(d[0])];c=c.concat(a.bodyFormatter(d));
c.push(a.tooltipFooterHeaderFormatter(d[0],!0));return c},refresh:function(a,d){var c,e=this.options,l,b=a,g,n={},f=[];c=e.formatter||this.defaultFormatter;var n=this.shared,r;e.enabled&&(clearTimeout(this.hideTimer),this.followPointer=v(b)[0].series.tooltipOptions.followPointer,g=this.getAnchor(b,d),d=g[0],l=g[1],!n||b.series&&b.series.noSharedTooltip?n=b.getLabelConfig():(C(b,function(a){a.setState("hover");f.push(a.getLabelConfig())}),n={x:b[0].category,y:b[0].y},n.points=f,b=b[0]),this.len=f.length,
n=c.call(n,this),r=b.series,this.distance=m(r.tooltipOptions.distance,16),!1===n?this.hide():(c=this.getLabel(),this.isHidden&&c.attr({opacity:1}).show(),this.split?this.renderSplit(n,v(a)):(e.style.width||c.css({width:this.chart.spacingBox.width}),c.attr({text:n&&n.join?n.join(""):n}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+m(b.colorIndex,r.colorIndex)),c.attr({stroke:e.borderColor||b.color||r.color||"#666666"}),this.updatePosition({plotX:d,plotY:l,negative:b.negative,
ttBelow:b.ttBelow,h:g[2]||0})),this.isHidden=!1))},renderSplit:function(d,n){var c=this,e=[],l=this.chart,b=l.renderer,g=!0,f=this.options,k=0,r=this.getLabel();a.isString(d)&&(d=[!1,d]);C(d.slice(0,n.length+1),function(a,d){if(!1!==a){d=n[d-1]||{isHeader:!0,plotX:n[0].plotX};var z=d.series||c,w=z.tt,p=d.series||{},B="highcharts-color-"+m(d.colorIndex,p.colorIndex,"none");w||(z.tt=w=b.label(null,null,null,"callout",null,null,f.useHTML).addClass("highcharts-tooltip-box "+B).attr({padding:f.padding,
r:f.borderRadius,fill:f.backgroundColor,stroke:f.borderColor||d.color||p.color||"#333333","stroke-width":f.borderWidth}).add(r));w.isActive=!0;w.attr({text:a});w.css(f.style).shadow(f.shadow);a=w.getBBox();p=a.width+w.strokeWidth();d.isHeader?(k=a.height,p=Math.max(0,Math.min(d.plotX+l.plotLeft-p/2,l.chartWidth-p))):p=d.plotX+l.plotLeft-m(f.distance,16)-p;0>p&&(g=!1);a=(d.series&&d.series.yAxis&&d.series.yAxis.pos)+(d.plotY||0);a-=l.plotTop;e.push({target:d.isHeader?l.plotHeight+k:a,rank:d.isHeader?
1:0,size:z.tt.getBBox().height+1,point:d,x:p,tt:w})}});this.cleanSplit();a.distribute(e,l.plotHeight+k);C(e,function(a){var b=a.point,c=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:g||b.isHeader?a.x:b.plotX+l.plotLeft+m(f.distance,16),y:a.pos+l.plotTop,anchorX:b.isHeader?b.plotX+l.plotLeft:b.plotX+c.xAxis.pos,anchorY:b.isHeader?a.pos+l.plotTop-15:b.plotY+c.yAxis.pos})})},updatePosition:function(a){var d=this.chart,c=this.getLabel(),c=(this.options.positioner||this.getPosition).call(this,
c.width,c.height,a);this.move(Math.round(c.x),Math.round(c.y||0),a.plotX+d.plotLeft,a.plotY+d.plotTop)},getDateFormat:function(a,n,c,e){var l=E("%m-%d %H:%M:%S.%L",n),b,g,f={millisecond:15,second:12,minute:9,hour:6,day:3},k="millisecond";for(g in d){if(a===d.week&&+E("%w",n)===c&&"00:00:00.000"===l.substr(6)){g="week";break}if(d[g]>a){g=k;break}if(f[g]&&l.substr(f[g])!=="01-01 00:00:00.000".substr(f[g]))break;"week"!==g&&(k=g)}g&&(b=e[g]);return b},getXDateFormat:function(a,d,c){d=d.dateTimeLabelFormats;
var e=c&&c.closestPointRange;return(e?this.getDateFormat(e,a.x,c.options.startOfWeek,d):d.day)||d.year},tooltipFooterHeaderFormatter:function(a,d){d=d?"footer":"header";var c=a.series,e=c.tooltipOptions,l=e.xDateFormat,b=c.xAxis,g=b&&"datetime"===b.options.type&&f(a.key),n=e[d+"Format"];g&&!l&&(l=this.getXDateFormat(a,e,b));g&&l&&C(a.point&&a.point.tooltipDateKeys||["key"],function(a){n=n.replace("{point."+a+"}","{point."+a+":"+l+"}")});return q(n,{point:a,series:c})},bodyFormatter:function(a){return k(a,
function(a){var c=a.series.tooltipOptions;return(c[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,c[(a.point.formatPrefix||"point")+"Format"])})}}})(N);(function(a){var E=a.addEvent,C=a.attr,G=a.charts,q=a.color,f=a.css,k=a.defined,t=a.each,m=a.extend,v=a.find,u=a.fireEvent,d=a.isObject,g=a.offset,n=a.pick,c=a.removeEvent,e=a.splat,l=a.Tooltip;a.Pointer=function(a,c){this.init(a,c)};a.Pointer.prototype={init:function(a,c){this.options=c;this.chart=a;this.runChartClick=
c.chart.events&&!!c.chart.events.click;this.pinchDown=[];this.lastValidTouch={};l&&(a.tooltip=new l(a,c.tooltip),this.followTouchMove=n(c.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,e=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(e=n(c.pinchType,e));this.zoomX=a=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=a&&!b||e&&b;this.zoomVert=e&&!b||a&&b;this.hasZoom=a||e},normalize:function(a,c){var b;b=a.touches?a.touches.length?a.touches.item(0):
a.changedTouches[0]:a;c||(this.chartPosition=c=g(this.chart.container));return m(a,{chartX:Math.round(b.pageX-c.left),chartY:Math.round(b.pageY-c.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};t(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,c,e){var b;t(a,function(a){var l=!(a.noSharedTooltip&&c)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(e,l);if((l=d(a,
!0))&&!(l=!d(b,!0)))var l=b.distX-a.distX,g=b.dist-a.dist,n=(a.series.group&&a.series.group.zIndex)-(b.series.group&&b.series.group.zIndex),l=0<(0!==l&&c?l:0!==g?g:0!==n?n:b.series.index>a.series.index?-1:1);l&&(b=a)});return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,c){var b=a.series,e=b.xAxis,b=b.yAxis;if(e&&b)return c?{chartX:e.len+e.pos-a.clientX,chartY:b.len+b.pos-a.plotY}:{chartX:a.clientX+e.pos,chartY:a.plotY+
b.pos}},getHoverData:function(b,c,e,l,g,f,w){var r,k=[],p=w&&w.isBoosting;l=!(!l||!b);w=c&&!c.stickyTracking?[c]:a.grep(e,function(a){return a.visible&&!(!g&&a.directTouch)&&n(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(r=l?b:this.findNearestKDPoint(w,g,f))&&r.series;r&&(g&&!c.noSharedTooltip?(w=a.grep(e,function(a){return a.visible&&!(!g&&a.directTouch)&&n(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),t(w,function(a){var b=v(a.points,function(a){return a.x===r.x&&!a.isNull});
d(b)&&(p&&(b=a.getPoint(b)),k.push(b))})):k.push(r));return{hoverPoint:r,hoverSeries:c,hoverPoints:k}},runPointActions:function(b,c){var e=this.chart,d=e.tooltip&&e.tooltip.options.enabled?e.tooltip:void 0,l=d?d.shared:!1,g=c||e.hoverPoint,f=g&&g.series||e.hoverSeries,f=this.getHoverData(g,f,e.series,!!c||f&&f.directTouch&&this.isDirectTouch,l,b,{isBoosting:e.isBoosting}),k,g=f.hoverPoint;k=f.hoverPoints;c=(f=f.hoverSeries)&&f.tooltipOptions.followPointer;l=l&&f&&!f.noSharedTooltip;if(g&&(g!==e.hoverPoint||
d&&d.isHidden)){t(e.hoverPoints||[],function(b){-1===a.inArray(b,k)&&b.setState()});t(k||[],function(a){a.setState("hover")});if(e.hoverSeries!==f)f.onMouseOver();e.hoverPoint&&e.hoverPoint.firePointEvent("mouseOut");if(!g.series)return;g.firePointEvent("mouseOver");e.hoverPoints=k;e.hoverPoint=g;d&&d.refresh(l?k:g,b)}else c&&d&&!d.isHidden&&(g=d.getAnchor([{}],b),d.updatePosition({plotX:g[0],plotY:g[1]}));this.unDocMouseMove||(this.unDocMouseMove=E(e.container.ownerDocument,"mousemove",function(b){var c=
G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));t(e.axes,function(c){var e=n(c.crosshair.snap,!0),d=e?a.find(k,function(a){return a.series[c.coll]===c}):void 0;d||!e?c.drawCrosshair(b,d):c.hideCrosshair()})},reset:function(a,c){var b=this.chart,d=b.hoverSeries,l=b.hoverPoint,g=b.hoverPoints,n=b.tooltip,f=n&&n.shared?g:l;a&&f&&t(e(f),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)n&&f&&(n.refresh(f),l&&(l.setState(l.state,!0),t(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,
l)})));else{if(l)l.onMouseOut();g&&t(g,function(a){a.setState()});if(d)d.onMouseOut();n&&n.hide(c);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,c){var b=this.chart,e;t(b.series,function(d){e=a||d.getPlotBox();d.xAxis&&d.xAxis.zoomEnabled&&d.group&&(d.group.attr(e),d.markerGroup&&(d.markerGroup.attr(e),d.markerGroup.clip(c?b.clipRect:null)),d.dataLabelsGroup&&d.dataLabelsGroup.attr(e))});
b.clipRect.attr(c||b.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,e=a.chartX,d=a.chartY,l=this.zoomHor,g=this.zoomVert,n=b.plotLeft,f=b.plotTop,p=b.plotWidth,k=b.plotHeight,H,m=this.selectionMarker,h=this.mouseDownX,x=this.mouseDownY,t=c.panKey&&a[c.panKey+"Key"];m&&m.touch||(e<n?e=n:e>n+p&&(e=n+p),d<f?d=f:d>f+k&&(d=f+k),this.hasDragged=
Math.sqrt(Math.pow(h-e,2)+Math.pow(x-d,2)),10<this.hasDragged&&(H=b.isInsidePlot(h-n,x-f),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&H&&!t&&!m&&(this.selectionMarker=m=b.renderer.rect(n,f,l?1:p,g?1:k,0).attr({fill:c.selectionMarkerFill||q("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),m&&l&&(e-=h,m.attr({width:Math.abs(e),x:(0<e?0:e)+h})),m&&g&&(e=d-x,m.attr({height:Math.abs(e),y:(0<e?0:e)+x})),H&&!m&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=
this,c=this.chart,e=this.hasPinched;if(this.selectionMarker){var d={originalEvent:a,xAxis:[],yAxis:[]},l=this.selectionMarker,g=l.attr?l.attr("x"):l.x,n=l.attr?l.attr("y"):l.y,q=l.attr?l.attr("width"):l.width,p=l.attr?l.attr("height"):l.height,B;if(this.hasDragged||e)t(c.axes,function(c){if(c.zoomEnabled&&k(c.min)&&(e||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var l=c.horiz,h="touchend"===a.type?c.minPixelPadding:0,f=c.toValue((l?g:n)+h),l=c.toValue((l?g+q:n+p)-h);d[c.coll].push({axis:c,min:Math.min(f,
l),max:Math.max(f,l)});B=!0}}),B&&u(c,"selection",d,function(a){c.zoom(m(a,e?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();e&&this.scaleGroups()}c&&(f(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},
onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;k(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=
c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,c){for(var b;a;){if(b=C(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||
!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,e=b.plotLeft,d=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",m(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(m(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-e,a.chartY-d)&&u(b,"click",a)))},setDOMEvents:function(){var b=
this,c=b.chart.container,e=c.ownerDocument;c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};E(c,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&E(e,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&E(e,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b=this,e=this.chart.container.ownerDocument;
b.unDocMouseMove&&b.unDocMouseMove();c(b.chart.container,"mouseleave",b.onContainerMouseLeave);a.chartCount||(c(e,"mouseup",b.onDocumentMouseUp),a.hasTouch&&c(e,"touchend",b.onDocumentTouchEnd));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(N);(function(a){var E=a.charts,C=a.each,G=a.extend,q=a.map,f=a.noop,k=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,f,k,q,d,g){this.zoomHor&&this.pinchTranslateDirection(!0,a,f,k,q,d,g);this.zoomVert&&this.pinchTranslateDirection(!1,
a,f,k,q,d,g)},pinchTranslateDirection:function(a,f,k,q,d,g,n,c){var e=this.chart,l=a?"x":"y",b=a?"X":"Y",m="chart"+b,t=a?"width":"height",u=e["plot"+(a?"Left":"Top")],r,v,w=c||1,D=e.inverted,M=e.bounds[a?"h":"v"],p=1===f.length,B=f[0][m],H=k[0][m],F=!p&&f[1][m],h=!p&&k[1][m],x;k=function(){!p&&20<Math.abs(B-F)&&(w=c||Math.abs(H-h)/Math.abs(B-F));v=(u-H)/w+B;r=e["plot"+(a?"Width":"Height")]/w};k();f=v;f<M.min?(f=M.min,x=!0):f+r>M.max&&(f=M.max-r,x=!0);x?(H-=.8*(H-n[l][0]),p||(h-=.8*(h-n[l][1])),k()):
n[l]=[H,h];D||(g[l]=v-u,g[t]=r);g=D?1/w:w;d[t]=r;d[l]=f;q[D?a?"scaleY":"scaleX":"scale"+b]=w;q["translate"+b]=g*u+(H-g*B)},pinch:function(a){var m=this,t=m.chart,u=m.pinchDown,d=a.touches,g=d.length,n=m.lastValidTouch,c=m.hasZoom,e=m.selectionMarker,l={},b=1===g&&(m.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||m.runChartClick),z={};1<g&&(m.initiated=!0);c&&m.initiated&&!b&&a.preventDefault();q(d,function(a){return m.normalize(a)});"touchstart"===a.type?(C(d,function(a,b){u[b]={chartX:a.chartX,
chartY:a.chartY}}),n.x=[u[0].chartX,u[1]&&u[1].chartX],n.y=[u[0].chartY,u[1]&&u[1].chartY],C(t.axes,function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,e=a.toPixels(k(a.options.min,a.dataMin)),d=a.toPixels(k(a.options.max,a.dataMax)),l=Math.max(e,d);b.min=Math.min(a.pos,Math.min(e,d)-c);b.max=Math.max(a.pos+a.len,l+c)}}),m.res=!0):m.followTouchMove&&1===g?this.runPointActions(m.normalize(a)):u.length&&(e||(m.selectionMarker=e=G({destroy:f,touch:!0},t.plotBox)),m.pinchTranslate(u,
d,l,e,z,n),m.hasPinched=c,m.scaleGroups(l,z),m.res&&(m.res=!1,this.reset(!1,0)))},touch:function(f,m){var q=this.chart,t,d;if(q.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=q.index;1===f.touches.length?(f=this.normalize(f),(d=q.isInsidePlot(f.chartX-q.plotLeft,f.chartY-q.plotTop))&&!q.openMenu?(m&&this.runPointActions(f),"touchmove"===f.type&&(m=this.pinchDown,t=m[0]?4<=Math.sqrt(Math.pow(m[0].chartX-f.chartX,2)+Math.pow(m[0].chartY-f.chartY,2)):!1),k(t,
!0)&&this.pinch(f)):m&&this.reset()):2===f.touches.length&&this.pinch(f)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(f){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(f)}})})(N);(function(a){var E=a.addEvent,C=a.charts,G=a.css,q=a.doc,f=a.extend,k=a.noop,t=a.Pointer,m=a.removeEvent,v=a.win,u=a.wrap;if(!a.hasTouch&&(v.PointerEvent||v.MSPointerEvent)){var d={},g=!!v.PointerEvent,n=function(){var c=
[];c.item=function(a){return this[a]};a.objectEach(d,function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},c=function(c,d,b,g){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!C[a.hoverChartIndex]||(g(c),g=C[a.hoverChartIndex].pointer,g[d]({type:b,target:c.currentTarget,preventDefault:k,touches:n()}))};f(t.prototype,{onContainerPointerDown:function(a){c(a,"onContainerTouchStart","touchstart",function(a){d[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},
onContainerPointerMove:function(a){c(a,"onContainerTouchMove","touchmove",function(a){d[a.pointerId]={pageX:a.pageX,pageY:a.pageY};d[a.pointerId].target||(d[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){c(a,"onDocumentTouchEnd","touchend",function(a){delete d[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,g?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,g?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(q,g?
"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});u(t.prototype,"init",function(a,c,b){a.call(this,c,b);this.hasZoom&&G(c.container,{"-ms-touch-action":"none","touch-action":"none"})});u(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});u(t.prototype,"destroy",function(a){this.batchMSEvents(m);a.call(this)})}})(N);(function(a){var E=a.addEvent,C=a.css,G=a.discardElement,q=a.defined,f=a.each,k=a.isFirefox,t=a.marginNames,m=a.merge,
v=a.pick,u=a.setAnimation,d=a.stableSort,g=a.win,n=a.wrap;a.Legend=function(a,e){this.init(a,e)};a.Legend.prototype={init:function(a,e){this.chart=a;this.setOptions(e);e.enabled&&(this.render(),E(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var c=v(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=m(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.itemHeight=
this.maxItemWidth=0;this.symbolWidth=v(a.symbolWidth,16);this.pages=[]},update:function(a,e){var c=this.chart;this.setOptions(m(!0,this.options,a));this.destroy();c.isDirtyLegend=c.isDirtyBox=!0;v(e,!0)&&c.redraw()},colorizeItem:function(a,e){a.legendGroup[e?"removeClass":"addClass"]("highcharts-legend-item-hidden");var c=this.options,b=a.legendItem,d=a.legendLine,g=a.legendSymbol,f=this.itemHiddenStyle.color,c=e?c.itemStyle.color:f,n=e?a.color||f:f,k=a.options&&a.options.marker,m={fill:n};b&&b.css({fill:c,
color:c});d&&d.attr({stroke:n});g&&(k&&g.isMarker&&(m=a.pointAttribs(),e||(m.stroke=m.fill=f)),g.attr(m))},positionItem:function(a){var c=this.options,d=c.symbolPadding,c=!c.rtl,b=a._legendItemPos,g=b[0],b=b[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(c?g:this.legendWidth-g-2*d-4,b);f&&(f.x=g,f.y=b)},destroyItem:function(a){var c=a.checkbox;f(["legendItem","legendLine","legendSymbol","legendGroup"],function(c){a[c]&&(a[c]=a[c].destroy())});c&&G(a.checkbox)},destroy:function(){function a(a){this[a]&&
(this[a]=this[a].destroy())}f(this.getAllItems(),function(c){f(["legendItem","legendGroup"],a,c)});f("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(a){var c=this.group&&this.group.alignAttr,d,b=this.clipHeight||this.legendHeight,g=this.titleHeight;c&&(d=c.translateY,f(this.allItems,function(e){var l=e.checkbox,f;l&&(f=d+g+l.y+(a||0)+3,C(l,{left:c.translateX+e.checkboxOffset+l.x-20+"px",top:f+"px",display:f>d-6&&f<d+b-6?"":"none"}))}))},
renderTitle:function(){var a=this.options,e=this.padding,d=a.title,b=0;d.text&&(this.title||(this.title=this.chart.renderer.label(d.text,e-3,e-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(d.style).add(this.group)),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(c){var e=this.options;c.legendItem.attr({text:e.labelFormat?a.format(e.labelFormat,c):e.labelFormatter.call(c)})},renderItem:function(a){var c=
this.chart,d=c.renderer,b=this.options,g="horizontal"===b.layout,f=this.symbolWidth,n=b.symbolPadding,r=this.itemStyle,k=this.itemHiddenStyle,w=this.padding,q=g?v(b.itemDistance,20):0,t=!b.rtl,p=b.width,B=b.itemMarginBottom||0,H=this.itemMarginTop,F=a.legendItem,h=!a.series,x=!h&&a.series.drawLegendSymbol?a.series:a,u=x.options,K=this.createCheckboxForItem&&u&&u.showCheckbox,u=f+n+q+(K?20:0),P=b.useHTML,L=a.options.className;F||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+x.type+"-series highcharts-color-"+
a.colorIndex+(L?" "+L:"")+(h?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=F=d.text("",t?f+n:-n,this.baseline||0,P).css(m(a.visible?r:k)).attr({align:t?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(f=r.fontSize,this.fontMetrics=d.fontMetrics(f,F),this.baseline=this.fontMetrics.f+3+H,F.attr("y",this.baseline)),this.symbolHeight=b.symbolHeight||this.fontMetrics.f,x.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,F,P),K&&this.createCheckboxForItem(a));
this.colorizeItem(a,a.visible);r.width||F.css({width:(b.itemWidth||b.width||c.spacingBox.width)-u});this.setText(a);d=F.getBBox();r=a.checkboxOffset=b.itemWidth||a.legendItemWidth||d.width+u;this.itemHeight=d=Math.round(a.legendItemHeight||d.height||this.symbolHeight);g&&this.itemX-w+r>(p||c.spacingBox.width-2*w-b.x)&&(this.itemX=w,this.itemY+=H+this.lastLineHeight+B,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,r);this.lastItemY=H+this.itemY+B;this.lastLineHeight=Math.max(d,
this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];g?this.itemX+=r:(this.itemY+=H+d+B,this.lastLineHeight=d);this.offsetWidth=p||Math.max((g?this.itemX-w-(a.checkbox?0:q):r)+w,this.offsetWidth)},getAllItems:function(){var a=[];f(this.chart.series,function(c){var e=c&&c.options;c&&v(e.showInLegend,q(e.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===e.legendType?c.data:c)))});return a},adjustMargins:function(a,e){var c=this.chart,b=this.options,d=b.align.charAt(0)+b.verticalAlign.charAt(0)+
b.layout.charAt(0);b.floating||f([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(g,l){g.test(d)&&!q(a[l])&&(c[t[l]]=Math.max(c[t[l]],c.legend[(l+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][l]*b[l%2?"x":"y"]+v(b.margin,12)+e[l]))})},render:function(){var a=this,e=a.chart,g=e.renderer,b=a.group,n,k,q,r,t=a.box,w=a.options,D=a.padding;a.itemX=D;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;b||(a.group=b=g.g("legend").attr({zIndex:7}).add(),a.contentGroup=g.g().attr({zIndex:1}).add(b),
a.scrollGroup=g.g().add(a.contentGroup));a.renderTitle();n=a.getAllItems();d(n,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});w.reversed&&n.reverse();a.allItems=n;a.display=k=!!n.length;a.lastLineHeight=0;f(n,function(b){a.renderItem(b)});q=(w.width||a.offsetWidth)+D;r=a.lastItemY+a.lastLineHeight+a.titleHeight;r=a.handleOverflow(r);r+=D;t||(a.box=t=g.rect().addClass("highcharts-legend-box").attr({r:w.borderRadius}).add(b),t.isNew=!0);t.attr({stroke:w.borderColor,
"stroke-width":w.borderWidth||0,fill:w.backgroundColor||"none"}).shadow(w.shadow);0<q&&0<r&&(t[t.isNew?"attr":"animate"](t.crisp.call({},{x:0,y:0,width:q,height:r},t.strokeWidth())),t.isNew=!1);t[k?"show":"hide"]();a.legendWidth=q;a.legendHeight=r;f(n,function(b){a.positionItem(b)});k&&b.align(m(w,{width:q,height:r}),!0,"spacingBox");e.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var c=this,d=this.chart,b=d.renderer,g=this.options,n=g.y,k=this.padding,d=d.spacingBox.height+("top"===
g.verticalAlign?-n:n)-k,n=g.maxHeight,r,m=this.clipRect,w=g.navigation,q=v(w.animation,!0),t=w.arrowSize||12,p=this.nav,B=this.pages,H,F=this.allItems,h=function(a){"number"===typeof a?m.attr({height:a}):m&&(c.clipRect=m.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+k+"px,9999px,"+(k+a)+"px,0)":"auto")};"horizontal"!==g.layout||"middle"===g.verticalAlign||g.floating||(d/=2);n&&(d=Math.min(d,n));B.length=0;a>d&&!1!==w.enabled?(this.clipHeight=r=Math.max(d-
20-this.titleHeight-k,0),this.currentPage=v(this.currentPage,1),this.fullHeight=a,f(F,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var e=B.length;if(!e||c-B[e-1]>r&&(H||c)!==B[e-1])B.push(H||c),e++;b===F.length-1&&c+a-B[e-1]>r&&B.push(c);c!==H&&(H=c)}),m||(m=c.clipRect=b.clipRect(0,k,9999,0),c.contentGroup.clip(m)),h(r),p||(this.nav=p=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,t,t).on("click",function(){c.scroll(-1,q)}).add(p),this.pager=
b.text("",15,10).addClass("highcharts-legend-navigation").css(w.style).add(p),this.down=b.symbol("triangle-down",0,0,t,t).on("click",function(){c.scroll(1,q)}).add(p)),c.scroll(0),a=d):p&&(h(),this.nav=p.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,e){var c=this.pages,b=c.length;a=this.currentPage+a;var d=this.clipHeight,g=this.options.navigation,n=this.pager,f=this.padding;a>b&&(a=b);0<a&&(void 0!==e&&u(e,this.chart),this.nav.attr({translateX:f,translateY:d+
this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),n.attr({text:a+"/"+b}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===b?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?g.inactiveColor:g.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===b?g.inactiveColor:g.activeColor}).css({cursor:a===b?"default":"pointer"}),e=-c[a-
1]+this.initialItemY,this.scrollGroup.animate({translateY:e}),this.currentPage=a,this.positionCheckboxes(e))}};a.LegendSymbolMixin={drawRectangle:function(a,e){var c=a.symbolHeight,b=a.options.squareSymbol;e.legendSymbol=this.chart.renderer.rect(b?(a.symbolWidth-c)/2:0,a.baseline-c+1,b?c:a.symbolWidth,c,v(a.options.symbolRadius,c/2)).addClass("highcharts-point").attr({zIndex:3}).add(e.legendGroup)},drawLineMarker:function(a){var c=this.options,d=c.marker,b=a.symbolWidth,g=a.symbolHeight,n=g/2,f=this.chart.renderer,
k=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var q;q={"stroke-width":c.lineWidth||0};c.dashStyle&&(q.dashstyle=c.dashStyle);this.legendLine=f.path(["M",0,a,"L",b,a]).addClass("highcharts-graph").attr(q).add(k);d&&!1!==d.enabled&&(c=Math.min(v(d.radius,n),n),0===this.symbol.indexOf("url")&&(d=m(d,{width:g,height:g}),c=0),this.legendSymbol=d=f.symbol(this.symbol,b/2-c,a-c,2*c,2*c,d).addClass("highcharts-point").add(k),d.isMarker=!0)}};(/Trident\/7\.0/.test(g.navigator.userAgent)||
k)&&n(a.Legend.prototype,"positionItem",function(a,e){var c=this,b=function(){e._legendItemPos&&a.call(c,e)};b();setTimeout(b)})})(N);(function(a){var E=a.addEvent,C=a.animate,G=a.animObject,q=a.attr,f=a.doc,k=a.Axis,t=a.createElement,m=a.defaultOptions,v=a.discardElement,u=a.charts,d=a.css,g=a.defined,n=a.each,c=a.extend,e=a.find,l=a.fireEvent,b=a.grep,z=a.isNumber,A=a.isObject,I=a.isString,r=a.Legend,J=a.marginNames,w=a.merge,D=a.objectEach,M=a.Pointer,p=a.pick,B=a.pInt,H=a.removeEvent,F=a.seriesTypes,
h=a.splat,x=a.svg,R=a.syncTimeout,K=a.win,P=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new P(a,b,c)};c(P.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(I(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var e,d,h=b.series,p=b.plotOptions||{};b.series=null;e=w(m,b);for(d in e.plotOptions)e.plotOptions[d].tooltip=p[d]&&w(p[d].tooltip)||void 0;e.tooltip.userOptions=b.chart&&b.chart.forExport&&
b.tooltip.userOptions||b.tooltip;e.series=b.series=h;this.userOptions=b;b=e.chart;d=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=e;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var g=this;g.index=u.length;u.push(g);a.chartCount++;d&&D(d,function(a,b){E(g,b,a)});g.xAxis=[];g.yAxis=[];g.pointCount=g.colorCounter=g.symbolCounter=0;g.firstRender()},initSeries:function(b){var c=this.options.chart;
(c=F[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var e=c?b:a;a=c?a:b;return 0<=e&&e<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var e=this.axes,d=this.series,h=this.pointer,p=this.legend,g=this.isDirtyLegend,f,k,r=this.hasCartesianSeries,B=this.isDirtyBox,m,H=this.renderer,x=
H.isHidden(),w=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);x&&this.temporaryDisplay();this.layOutTitles();for(b=d.length;b--;)if(m=d[b],m.options.stacking&&(f=!0,m.isDirty)){k=!0;break}if(k)for(b=d.length;b--;)m=d[b],m.options.stacking&&(m.isDirty=!0);n(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),g=!0);a.isDirtyData&&l(a,"updatedData")});g&&p.options.enabled&&(p.render(),this.isDirtyLegend=!1);f&&this.getStacks();r&&n(e,function(a){a.updateNames();
a.setScale()});this.getMargins();r&&(n(e,function(a){a.isDirty&&(B=!0)}),n(e,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,w.push(function(){l(a,"afterSetExtremes",c(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(B||f)&&a.redraw()}));B&&this.drawChartBox();l(this,"predraw");n(d,function(a){(B||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});h&&h.reset(!0);H.draw();l(this,"redraw");l(this,"render");x&&this.temporaryDisplay(!0);n(w,function(a){a.call()})},get:function(a){function b(b){return b.id===
a||b.options&&b.options.id===a}var c,d=this.series,h;c=e(this.axes,b)||e(this.series,b);for(h=0;!c&&h<d.length;h++)c=e(d[h].points||[],b);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=h(b.xAxis||{}),b=b.yAxis=h(b.yAxis||{});n(c,function(a,b){a.index=b;a.isX=!0});n(b,function(a,b){a.index=b});c=c.concat(b);n(c,function(b){new k(a,b)})},getSelectedPoints:function(){var a=[];n(this.series,function(c){a=a.concat(b(c.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return b(this.series,
function(a){return a.selected})},setTitle:function(a,b,c){var e=this,d=e.options,h;h=d.title=w({style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=w({style:{color:"#666666"}},d.subtitle,b);n([["title",a,h],["subtitle",b,d]],function(a,b){var c=a[0],d=e[c],h=a[1];a=a[2];d&&h&&(e[c]=d=d.destroy());a&&!d&&(e[c]=e.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),e[c].update=function(a){e.setTitle(!b&&a,b&&a)},e[c].css(a.style))});
e.layOutTitles(c)},layOutTitles:function(a){var b=0,e,d=this.renderer,h=this.spacingBox;n(["title","subtitle"],function(a){var e=this[a],p=this.options[a];a="title"===a?-3:p.verticalAlign?0:b+2;var g;e&&(g=p.style.fontSize,g=d.fontMetrics(g,e).b,e.css({width:(p.width||h.width+p.widthAdjust)+"px"}).align(c({y:a+g},p),!1,"spacingBox"),p.floating||p.verticalAlign||(b=Math.ceil(b+e.getBBox(p.useHTML).height)))},this);e=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&e&&(this.isDirtyBox=e,this.hasRendered&&
p(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,c=b.width,b=b.height,e=this.renderTo;g(c)||(this.containerWidth=a.getStyle(e,"width"));g(b)||(this.containerHeight=a.getStyle(e,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),
delete c.hcOrigStyle),c.hcOrigDetached&&(f.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){f.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,f.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;
if(c===f.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,e=this.options,d=e.chart,h,p;b=this.renderTo;var g=a.uniqueKey(),l;b||(this.renderTo=b=d.renderTo);I(b)&&(this.renderTo=b=f.getElementById(b));b||a.error(13,!0);h=B(q(b,"data-highcharts-chart"));z(h)&&u[h]&&u[h].hasRendered&&u[h].destroy();q(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();
h=this.chartWidth;p=this.chartHeight;l=c({position:"relative",overflow:"hidden",width:h+"px",height:p+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=t("div",{id:g},l,b);this._cursor=b.style.cursor;this.renderer=new (a[d.renderer]||a.Renderer)(b,h,p,null,d.forExport,e.exporting&&e.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=
this.spacing,c=this.margin,e=this.titleOffset;this.resetMargins();e&&!g(c[0])&&(this.plotTop=Math.max(this.plotTop,e+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.adjustPlotArea&&this.adjustPlotArea();a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&n(a.axes,function(a){a.visible&&
a.getOffset()});n(J,function(e,d){g(c[d])||(a[e]+=b[d])});a.setChartSize()},reflow:function(b){var c=this,e=c.options.chart,d=c.renderTo,h=g(e.width)&&g(e.height),p=e.width||a.getStyle(d,"width"),e=e.height||a.getStyle(d,"height"),d=b?b.target:K;if(!h&&!c.isPrinting&&p&&e&&(d===K||d===f)){if(p!==c.containerWidth||e!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=R(function(){c.container&&c.setSize(void 0,void 0,!1)},b?100:0);c.containerWidth=p;c.containerHeight=e}},initReflow:function(){var a=
this,b;b=E(K,"resize",function(b){a.reflow(b)});E(a,"destroy",b)},setSize:function(b,c,e){var h=this,p=h.renderer;h.isResizing+=1;a.setAnimation(e,h);h.oldChartHeight=h.chartHeight;h.oldChartWidth=h.chartWidth;void 0!==b&&(h.options.chart.width=b);void 0!==c&&(h.options.chart.height=c);h.getChartSize();b=p.globalAnimation;(b?C:d)(h.container,{width:h.chartWidth+"px",height:h.chartHeight+"px"},b);h.setChartSize(!0);p.setSize(h.chartWidth,h.chartHeight,e);n(h.axes,function(a){a.isDirty=!0;a.setScale()});
h.isDirtyLegend=!0;h.isDirtyBox=!0;h.layOutTitles();h.getMargins();h.redraw(e);h.oldChartHeight=null;l(h,"resize");R(function(){h&&l(h,"endResize",null,function(){--h.isResizing})},G(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,e=this.chartWidth,d=this.chartHeight,h=this.options.chart,p=this.spacing,g=this.clipOffset,l,f,k,r;this.plotLeft=l=Math.round(this.plotLeft);this.plotTop=f=Math.round(this.plotTop);this.plotWidth=k=Math.max(0,Math.round(e-l-this.marginRight));
this.plotHeight=r=Math.max(0,Math.round(d-f-this.marginBottom));this.plotSizeX=b?r:k;this.plotSizeY=b?k:r;this.plotBorderWidth=h.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:p[3],y:p[0],width:e-p[3]-p[1],height:d-p[0]-p[2]};this.plotBox=c.plotBox={x:l,y:f,width:k,height:r};e=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(e,g[3])/2);c=Math.ceil(Math.max(e,g[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(e,g[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-
Math.max(e,g[2])/2-c))};a||n(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;n(["margin","spacing"],function(c){var e=b[c],d=A(e)?e:[e,e,e,e];n(["Top","Right","Bottom","Left"],function(e,h){a[c][h]=p(b[c+e],d[h])})});n(J,function(b,c){a[b]=p(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,e=this.chartHeight,d=this.chartBackground,
h=this.plotBackground,p=this.plotBorder,g,l=this.plotBGImage,f=a.backgroundColor,n=a.plotBackgroundColor,k=a.plotBackgroundImage,r,m=this.plotLeft,B=this.plotTop,H=this.plotWidth,x=this.plotHeight,w=this.plotBox,q=this.clipRect,D=this.clipBox,F="animate";d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),F="attr");g=a.borderWidth||0;r=g+(a.shadow?8:0);f={fill:f||"none"};if(g||d["stroke-width"])f.stroke=a.borderColor,f["stroke-width"]=g;d.attr(f).shadow(a.shadow);d[F]({x:r/
2,y:r/2,width:c-r-g%2,height:e-r-g%2,r:a.borderRadius});F="animate";h||(F="attr",this.plotBackground=h=b.rect().addClass("highcharts-plot-background").add());h[F](w);h.attr({fill:n||"none"}).shadow(a.plotShadow);k&&(l?l.animate(w):this.plotBGImage=b.image(k,m,B,H,x).add());q?q.animate({width:D.width,height:D.height}):this.clipRect=b.clipRect(D);F="animate";p||(F="attr",this.plotBorder=p=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());p.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||
0,fill:"none"});p[F](p.crisp({x:m,y:B,width:H,height:x},-p.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,e=a.options.series,d,h;n(["inverted","angular","polar"],function(p){c=F[b.type||b.defaultSeriesType];h=b[p]||c&&c.prototype[p];for(d=e&&e.length;!h&&d--;)(c=F[e[d].type])&&c.prototype[p]&&(h=!0);a[p]=h})},linkSeries:function(){var a=this,b=a.series;n(b,function(a){a.linkedSeries.length=0});n(b,function(b){var c=b.options.linkedTo;I(c)&&(c=":previous"===
c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=p(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){n(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&n(b.items,function(e){var d=c(b.style,e.style),h=B(d.left)+a.plotLeft,p=B(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(e.html,h,p).attr({zIndex:2}).css(d).add()})},render:function(){var a=
this.axes,b=this.renderer,c=this.options,e,d,h;this.setTitle();this.legend=new r(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;e=this.plotHeight-=21;n(a,function(a){a.setScale()});this.getAxisMargins();d=1.1<c/this.plotWidth;h=1.05<e/this.plotHeight;if(d||h)n(a,function(a){(a.horiz&&d||!a.horiz&&h)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&n(a,function(a){a.visible&&a.render()});this.seriesGroup||
(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=w(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(K.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),
this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,e=b.series,d=b.container,h,p=d&&d.parentNode;l(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");H(b);for(h=c.length;h--;)c[h]=c[h].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(h=e.length;h--;)e[h]=e[h].destroy();n("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",H(d),p&&v(d));D(b,function(a,c){delete b[c]})},isReadyToRender:function(){var a=this;return x||K!=K.top||"complete"===f.readyState?!0:(f.attachEvent("onreadystatechange",function(){f.detachEvent("onreadystatechange",a.firstRender);"complete"===f.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();l(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();
a.getAxes();n(b.series||[],function(b){a.initSeries(b)});a.linkSeries();l(a,"beforeRender");M&&(a.pointer=new M(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){n([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);l(this,"load");l(this,"render");g(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(N);(function(a){var E,C=a.each,G=a.extend,q=a.erase,f=a.fireEvent,
k=a.format,t=a.isArray,m=a.isNumber,v=a.pick,u=a.removeEvent;a.Point=E=function(){};a.Point.prototype={init:function(a,g,f){this.series=a;this.color=a.color;this.applyOptions(g,f);a.options.colorByPoint?(g=a.options.colors||a.chart.options.colors,this.color=this.color||g[a.colorCounter],g=g.length,f=a.colorCounter,a.colorCounter++,a.colorCounter===g&&(a.colorCounter=0)):f=a.colorIndex;this.colorIndex=v(this.colorIndex,f);a.chart.pointCount++;return this},applyOptions:function(a,g){var d=this.series,
c=d.options.pointValKey||d.pointValKey;a=E.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;c&&(this.y=this[c]);this.isNull=v(this.isValid&&!this.isValid(),null===this.x||!m(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===g&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this));void 0===this.x&&d&&(this.x=void 0===g?d.autoIncrement(this):g);return this},optionsToObject:function(a){var d={},f=this.series,
c=f.options.keys,e=c||f.pointArrayMap||["y"],l=e.length,b=0,k=0;if(m(a)||null===a)d[e[0]]=a;else if(t(a))for(!c&&a.length>l&&(f=typeof a[0],"string"===f?d.name=a[0]:"number"===f&&(d.x=a[0]),b++);k<l;)c&&void 0===a[b]||(d[e[k]]=a[b]),b++,k++;else"object"===typeof a&&(d=a,a.dataLabels&&(f._hasPointLabels=!0),a.marker&&(f._hasPointMarkers=!0));return d},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?
" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,g=a.zones,a=a.zoneAxis||"y",f=0,c;for(c=g[f];this[a]>=c.value;)c=g[++f];c&&c.color&&!this.options.color&&(this.color=c.color);return c},destroy:function(){var a=this.series.chart,g=a.hoverPoints,f;a.pointCount--;g&&(this.setState(),
q(g,this),g.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(f in this)this[f]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],g,f=6;f--;)g=a[f],this[g]&&(this[g]=this[g].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,
series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var d=this.series,f=d.tooltipOptions,c=v(f.valueDecimals,""),e=f.valuePrefix||"",l=f.valueSuffix||"";C(d.pointArrayMap||["y"],function(b){b="{point."+b;if(e||l)a=a.replace(b+"}",e+b+"}"+l);a=a.replace(b+"}",b+":,."+c+"f}")});return k(a,{point:this,series:this.series})},firePointEvent:function(a,g,n){var c=this,e=this.series.options;(e.point.events[a]||c.options&&c.options.events&&
c.options.events[a])&&this.importEvents();"click"===a&&e.allowPointSelect&&(n=function(a){c.select&&c.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});f(this,a,g,n)},visible:!0}})(N);(function(a){var E=a.addEvent,C=a.animObject,G=a.arrayMax,q=a.arrayMin,f=a.correctFloat,k=a.Date,t=a.defaultOptions,m=a.defaultPlotOptions,v=a.defined,u=a.each,d=a.erase,g=a.extend,n=a.fireEvent,c=a.grep,e=a.isArray,l=a.isNumber,b=a.isString,z=a.merge,A=a.objectEach,I=a.pick,r=a.removeEvent,J=a.splat,w=a.SVGElement,D=
a.syncTimeout,M=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",
textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,e,d=a.series,p;c.chart=
a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();g(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});e=b.events;A(e,function(a,b){E(c,b,a)});if(e&&e.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();u(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);d.length&&(p=d[d.length-1]);c._i=I(p&&p._i,-1)+1;a.orderSeries(this.insert(d))},insert:function(a){var b=
this.options.index,c;if(l(b)){for(c=a.length;c--;)if(b>=I(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return I(c,a.length-1)},bindAxes:function(){var b=this,c=b.options,e=b.chart,d;u(b.axisTypes||[],function(h){u(e[h],function(a){d=a.options;if(c[h]===d.index||void 0!==c[h]&&c[h]===d.id||void 0===c[h]&&0===d.index)b.insert(a.series),b[h]=a,a.isDirty=!0});b[h]||b.optionalAxis===h||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=
a.series,e=arguments,d=l(b)?function(e){var d="y"===e&&c.toYData?c.toYData(a):a[e];c[e+"Data"][b]=d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(e,2))};u(c.parallelArrays,d)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,e=a.pointIntervalUnit,b=I(b,a.pointStart,0);this.pointInterval=c=I(this.pointInterval,a.pointInterval,1);e&&(a=new k(b),"day"===e?a=+a[k.hcSetDate](a[k.hcGetDate]()+c):"month"===e?a=+a[k.hcSetMonth](a[k.hcGetMonth]()+c):"year"===e&&
(a=+a[k.hcSetFullYear](a[k.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options,e=c.plotOptions,d=(b.userOptions||{}).plotOptions||{},p=e[this.type];this.userOptions=a;b=z(p,e.series,a);this.tooltipOptions=z(t.tooltip,t.plotOptions.series&&t.plotOptions.series.tooltip,t.plotOptions[this.type].tooltip,c.tooltip.userOptions,e.series&&e.series.tooltip,e[this.type].tooltip,a.tooltip);this.stickyTracking=I(a.stickyTracking,d[this.type]&&d[this.type].stickyTracking,
d.series&&d.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===p.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=(b.zones||[]).slice();!b.negativeColor&&!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&v(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getCyclic:function(a,
b,c){var e,d=this.chart,p=this.userOptions,g=a+"Index",f=a+"Counter",l=c?c.length:I(d.options.chart[a+"Count"],d[a+"Count"]);b||(e=I(p[g],p["_"+g]),v(e)||(d.series.length||(d[f]=0),p["_"+g]=e=d[f]%l,d[f]+=1),c&&(b=c[e]));void 0!==e&&(this[g]=e);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||m[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},
drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(c,d,g,f){var h=this,p=h.points,n=p&&p.length||0,k,r=h.options,m=h.chart,w=null,B=h.xAxis,q=r.turboThreshold,H=this.xData,D=this.yData,t=(k=h.pointArrayMap)&&k.length;c=c||[];k=c.length;d=I(d,!0);if(!1!==f&&k&&n===k&&!h.cropped&&!h.hasGroupedData&&h.visible)u(c,function(a,b){p[b].update&&a!==r.data[b]&&p[b].update(a,!1,null,!1)});else{h.xIncrement=null;h.colorCounter=0;u(this.parallelArrays,function(a){h[a+"Data"].length=0});if(q&&
k>q){for(g=0;null===w&&g<k;)w=c[g],g++;if(l(w))for(g=0;g<k;g++)H[g]=this.autoIncrement(),D[g]=c[g];else if(e(w))if(t)for(g=0;g<k;g++)w=c[g],H[g]=w[0],D[g]=w.slice(1,t+1);else for(g=0;g<k;g++)w=c[g],H[g]=w[0],D[g]=w[1];else a.error(12)}else for(g=0;g<k;g++)void 0!==c[g]&&(w={series:h},h.pointClass.prototype.applyOptions.apply(w,[c[g]]),h.updateParallelArrays(w,g));D&&b(D[0])&&a.error(14,!0);h.data=[];h.options.data=h.userOptions.data=c;for(g=n;g--;)p[g]&&p[g].destroy&&p[g].destroy();B&&(B.minRange=
B.userMinRange);h.isDirty=m.isDirtyBox=!0;h.isDirtyData=!!p;g=!1}"point"===r.legendType&&(this.processData(),this.generatePoints());d&&m.redraw(g)},processData:function(b){var c=this.xData,e=this.yData,d=c.length,h;h=0;var p,g,f=this.xAxis,l,n=this.options;l=n.cropThreshold;var k=this.getExtremesFromAll||n.getExtremesFromAll,r=this.isCartesian,n=f&&f.val2lin,m=f&&f.isLog,w,q;if(r&&!this.isDirty&&!f.isDirty&&!this.yAxis.isDirty&&!b)return!1;f&&(b=f.getExtremes(),w=b.min,q=b.max);if(r&&this.sorted&&
!k&&(!l||d>l||this.forceCrop))if(c[d-1]<w||c[0]>q)c=[],e=[];else if(c[0]<w||c[d-1]>q)h=this.cropData(this.xData,this.yData,w,q),c=h.xData,e=h.yData,h=h.start,p=!0;for(l=c.length||1;--l;)d=m?n(c[l])-n(c[l-1]):c[l]-c[l-1],0<d&&(void 0===g||d<g)?g=d:0>d&&this.requireSorting&&a.error(15);this.cropped=p;this.cropStart=h;this.processedXData=c;this.processedYData=e;this.closestPointRange=g},cropData:function(a,b,c,e){var d=a.length,p=0,g=d,f=I(this.cropShoulder,1),l;for(l=0;l<d;l++)if(a[l]>=c){p=Math.max(0,
l-f);break}for(c=l;c<d;c++)if(a[c]>e){g=c+f;break}return{xData:a.slice(p,g),yData:b.slice(p,g),start:p,end:g}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,e,d=this.processedXData,g=this.processedYData,f=this.pointClass,l=d.length,n=this.cropStart||0,k,r=this.hasGroupedData,a=a.keys,m,w=[],q;c||r||(c=[],c.length=b.length,c=this.data=c);a&&r&&(this.options.keys=!1);for(q=0;q<l;q++)k=n+q,r?(m=(new f).init(this,[d[q]].concat(J(g[q]))),m.dataGroup=this.groupMap[q]):(m=c[k])||void 0===
b[k]||(c[k]=m=(new f).init(this,b[k],d[q])),m&&(m.index=k,w[q]=m);this.options.keys=a;if(c&&(l!==(e=c.length)||r))for(q=0;q<e;q++)q!==n||r||(q+=l),c[q]&&(c[q].destroyElements(),c[q].plotX=void 0);this.data=c;this.points=w},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,h=[],g=0;d=this.xAxis.getExtremes();var p=d.min,f=d.max,n,k,r,m;a=a||this.stackedYData||this.processedYData||[];d=a.length;for(m=0;m<d;m++)if(k=c[m],r=a[m],n=(l(r,!0)||e(r))&&(!b.positiveValuesOnly||r.length||0<r),
k=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[m+1]||k)>=p&&(c[m-1]||k)<=f,n&&k)if(n=r.length)for(;n--;)null!==r[n]&&(h[g++]=r[n]);else h[g++]=r;this.dataMin=q(h);this.dataMax=G(h)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,e=c.categories,d=this.yAxis,g=this.points,n=g.length,k=!!this.modifyValue,r=a.pointPlacement,m="between"===r||l(r),w=a.threshold,q=a.startFromThreshold?w:0,D,t,z,
u,A=Number.MAX_VALUE;"between"===r&&(r=.5);l(r)&&(r*=I(a.pointRange||c.pointRange));for(a=0;a<n;a++){var J=g[a],M=J.x,C=J.y;t=J.low;var E=b&&d.stacks[(this.negStacks&&C<(q?0:w)?"-":"")+this.stackKey],G;d.positiveValuesOnly&&null!==C&&0>=C&&(J.isNull=!0);J.plotX=D=f(Math.min(Math.max(-1E5,c.translate(M,0,0,0,1,r,"flags"===this.type)),1E5));b&&this.visible&&!J.isNull&&E&&E[M]&&(u=this.getStackIndicator(u,M,this.index),G=E[M],C=G.points[u.key],t=C[0],C=C[1],t===q&&u.key===E[M].base&&(t=I(w,d.min)),d.positiveValuesOnly&&
0>=t&&(t=null),J.total=J.stackTotal=G.total,J.percentage=G.total&&J.y/G.total*100,J.stackY=C,G.setOffset(this.pointXOffset||0,this.barW||0));J.yBottom=v(t)?d.translate(t,0,1,0,1):null;k&&(C=this.modifyValue(C,J));J.plotY=t="number"===typeof C&&Infinity!==C?Math.min(Math.max(-1E5,d.translate(C,0,1,0,1)),1E5):void 0;J.isInside=void 0!==t&&0<=t&&t<=d.len&&0<=D&&D<=c.len;J.clientX=m?f(c.translate(M,0,0,0,1,r)):D;J.negative=J.y<(w||0);J.category=e&&void 0!==e[J.x]?e[J.x]:J.x;J.isNull||(void 0!==z&&(A=
Math.min(A,Math.abs(D-z))),z=D);J.zone=this.zones.length&&J.getZone()}this.closestPointRangePx=A},getValidPoints:function(a,b){var e=this.chart;return c(a||this.points||[],function(a){return b&&!e.isInsidePlot(a.plotX,a.plotY,e.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,e=b.renderer,d=b.inverted,g=this.clipBox,p=g||b.clipBox,f=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,p.height,c.xAxis,c.yAxis].join(),l=b[f],n=b[f+"m"];l||(a&&(p.width=0,d&&(p.x=
b.plotSizeX),b[f+"m"]=n=e.clipRect(d?b.plotSizeX+99:-99,d?-b.plotLeft:-b.plotTop,99,d?b.chartWidth:b.chartHeight)),b[f]=l=e.clipRect(p),l.count={length:0});a&&!l.count[this.index]&&(l.count[this.index]=!0,l.count.length+=1);!1!==c.clip&&(this.group.clip(a||g?l:b.clipRect),this.markerGroup.clip(n),this.sharedClipKey=f);a||(l.count[this.index]&&(delete l.count[this.index],--l.count.length),0===l.count.length&&f&&b[f]&&(g||(b[f]=b[f].destroy()),b[f+"m"]&&(b[f+"m"]=b[f+"m"].destroy())))},animate:function(a){var b=
this.chart,c=C(this.options.animation),e;a?this.setClip(c):(e=this.sharedClipKey,(a=b[e])&&a.animate({width:b.plotSizeX,x:0},c),b[e+"m"]&&b[e+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();n(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,e,d,g,f=this.options.marker,n,k,r,m,w=this[this.specialGroup]||this.markerGroup,q=I(f.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*f.radius);
if(!1!==f.enabled||this._hasPointMarkers)for(e=0;e<a.length;e++)d=a[e],c=d.plotY,g=d.graphic,n=d.marker||{},k=!!d.marker,r=q&&void 0===n.enabled||n.enabled,m=d.isInside,r&&l(c)&&null!==d.y?(c=I(n.symbol,this.symbol),d.hasImage=0===c.indexOf("url"),r=this.markerAttribs(d,d.selected&&"select"),g?g[m?"show":"hide"](!0).animate(r):m&&(0<r.width||d.hasImage)&&(d.graphic=g=b.renderer.symbol(c,r.x,r.y,r.width,r.height,k?n:f).add(w)),g&&g.attr(this.pointAttribs(d,d.selected&&"select")),g&&g.addClass(d.getClassName(),
!0)):g&&(d.graphic=g.destroy())},markerAttribs:function(a,b){var c=this.options.marker,e=a.marker||{},d=I(e.radius,c.radius);b&&(c=c.states[b],b=e.states&&e.states[b],d=I(b&&b.radius,c&&c.radius,d+(c&&c.radiusPlus||0)));a.hasImage&&(d=0);a={x:Math.floor(a.plotX)-d,y:a.plotY-d};d&&(a.width=a.height=2*d);return a},pointAttribs:function(a,b){var c=this.options.marker,e=a&&a.options,d=e&&e.marker||{},g=this.color,p=e&&e.color,f=a&&a.color,e=I(d.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;g=p||a||
f||g;a=d.fillColor||c.fillColor||g;g=d.lineColor||c.lineColor||g;b&&(c=c.states[b],b=d.states&&d.states[b]||{},e=I(b.lineWidth,c.lineWidth,e+I(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,g=b.lineColor||c.lineColor||g);return{stroke:g,"stroke-width":e,fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(M.navigator.userAgent),e,h,g=a.data||[],f,l;n(a,"destroy");r(a);u(a.axisTypes||[],function(b){(l=a[b])&&l.series&&(d(l.series,a),l.isDirty=l.forceRedraw=
!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(h=g.length;h--;)(f=g[h])&&f.destroy&&f.destroy();a.points=null;clearTimeout(a.animationTimeout);A(a,function(a,b){a instanceof w&&!a.survive&&(e=c&&"group"===b?"hide":"destroy",a[e]())});b.hoverSeries===a&&(b.hoverSeries=null);d(b.series,a);b.orderSeries();A(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var e=this,d=e.options,g=d.step,f,p=[],l=[],n;a=a||e.points;(f=a.reversed)&&a.reverse();(g={right:1,center:2}[g]||g&&3)&&f&&(g=4-
g);!d.connectNulls||b||c||(a=this.getValidPoints(a));u(a,function(h,f){var k=h.plotX,r=h.plotY,m=a[f-1];(h.leftCliff||m&&m.rightCliff)&&!c&&(n=!0);h.isNull&&!v(b)&&0<f?n=!d.connectNulls:h.isNull&&!b?n=!0:(0===f||n?f=["M",h.plotX,h.plotY]:e.getPointSpline?f=e.getPointSpline(a,h,f):g?(f=1===g?["L",m.plotX,r]:2===g?["L",(m.plotX+k)/2,m.plotY,"L",(m.plotX+k)/2,r]:["L",k,m.plotY],f.push("L",k,r)):f=["L",k,r],l.push(h.x),g&&l.push(h.x),p.push.apply(p,f),n=!1)});p.xMap=l;return e.graphPath=p},drawGraph:function(){var a=
this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),e=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];u(this.zones,function(c,d){e.push(["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});u(e,function(e,d){var h=e[0],g=a[h];g?(g.endX=c.xMap,g.animate({d:c})):c.length&&(a[h]=a.chart.renderer.path(c).addClass(e[1]).attr({zIndex:1}).add(a.group),g={stroke:e[2],"stroke-width":b.lineWidth,
fill:a.fillGraph&&a.color||"none"},e[3]?g.dashstyle=e[3]:"square"!==b.linecap&&(g["stroke-linecap"]=g["stroke-linejoin"]="round"),g=a[h].attr(g).shadow(2>d&&b.shadow));g&&(g.startX=c.xMap,g.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,e=this.zones,d,g,f=this.clips||[],l,n=this.graph,k=this.area,r=Math.max(b.chartWidth,b.chartHeight),m=this[(this.zoneAxis||"y")+"Axis"],w,q,D=b.inverted,t,z,v,J,A=!1;e.length&&(n||k)&&m&&void 0!==m.min&&(q=m.reversed,t=m.horiz,n&&n.hide(),
k&&k.hide(),w=m.getExtremes(),u(e,function(e,h){d=q?t?b.plotWidth:0:t?0:m.toPixels(w.min);d=Math.min(Math.max(I(g,d),0),r);g=Math.min(Math.max(Math.round(m.toPixels(I(e.value,w.max),!0)),0),r);A&&(d=g=m.toPixels(w.max));z=Math.abs(d-g);v=Math.min(d,g);J=Math.max(d,g);m.isXAxis?(l={x:D?J:v,y:0,width:z,height:r},t||(l.x=b.plotHeight-l.x)):(l={x:0,y:D?J:v,width:r,height:z},t&&(l.y=b.plotWidth-l.y));D&&c.isVML&&(l=m.isXAxis?{x:0,y:q?v:J,height:l.width,width:b.chartWidth}:{x:l.y-b.plotLeft-b.spacingBox.x,
y:0,width:l.height,height:b.chartHeight});f[h]?f[h].animate(l):(f[h]=c.clipRect(l),n&&a["zone-graph-"+h].clip(f[h]),k&&a["zone-area-"+h].clip(f[h]));A=e.value>w.max}),this.clips=f)},invertGroups:function(a){function b(){u(["group","markerGroup"],function(b){c[b]&&(e.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,e=c.chart,d;c.xAxis&&(d=E(e,"resize",b),E(c,"destroy",d),b(a),c.invertGroups=b)},plotGroup:function(a,
b,c,e,d){var h=this[a],g=!h;g&&(this[a]=h=this.chart.renderer.g().attr({zIndex:e||.1}).add(d));h.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(v(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(h.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);h.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return h},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,
c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,e=a.options,d=!!a.animate&&b.renderer.isSVG&&C(e.animation).duration,g=a.visible?"inherit":"hidden",f=e.zIndex,l=a.hasRendered,n=b.seriesGroup,k=b.inverted;c=a.plotGroup("group","series",g,f,n);a.markerGroup=a.plotGroup("markerGroup","markers",g,f,n);d&&a.animate(!0);c.inverted=a.isCartesian?k:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&
a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(k);!1===e.clip||a.sharedClipKey||l||c.clip(b.clipRect);d&&a.animate();l||(a.animationTimeout=D(function(){a.afterAnimate()},d));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,e=this.xAxis,d=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:I(e&&e.left,a.plotLeft),
translateY:I(d&&d.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,e=this.yAxis,d=this.chart.inverted;return this.searchKDTree({clientX:d?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:d?e.len-a.chartX+e.pos:a.chartY-e.pos},b)},buildKDTree:function(){function a(c,e,d){var h,g;if(g=c&&c.length)return h=b.kdAxisArray[e%d],c.sort(function(a,b){return a[h]-b[h]}),g=Math.floor(g/2),{point:c[g],left:a(c.slice(0,
g),e+1,d),right:a(c.slice(g+1),e+1,d)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;D(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,h,l){var n=b.point,p=e.kdAxisArray[h%l],k,r,m=n;r=v(a[d])&&v(n[d])?Math.pow(a[d]-n[d],2):null;k=v(a[g])&&v(n[g])?Math.pow(a[g]-n[g],2):null;k=(r||0)+(k||0);n.dist=v(k)?Math.sqrt(k):Number.MAX_VALUE;n.distX=v(r)?
Math.sqrt(r):Number.MAX_VALUE;p=a[p]-n[p];k=0>p?"left":"right";r=0>p?"right":"left";b[k]&&(k=c(a,b[k],h+1,l),m=k[f]<m[f]?k:n);b[r]&&Math.sqrt(p*p)<m[f]&&(a=c(a,b[r],h+1,l),m=a[f]<m[f]?a:m);return m}var e=this,d=this.kdAxisArray[0],g=this.kdAxisArray[1],f=b?"distX":"dist";b=-1<e.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(N);(function(a){var E=a.Axis,C=a.Chart,G=a.correctFloat,q=a.defined,f=a.destroyObjectProperties,
k=a.each,t=a.format,m=a.objectEach,v=a.pick,u=a.Series;a.StackItem=function(a,g,f,c,e){var d=a.chart.inverted;this.axis=a;this.isNegative=f;this.options=g;this.x=c;this.total=null;this.points={};this.stack=e;this.rightCliff=this.leftCliff=0;this.alignOptions={align:g.align||(d?f?"left":"right":"center"),verticalAlign:g.verticalAlign||(d?"middle":f?"bottom":"top"),y:v(g.y,d?4:f?14:-6),x:v(g.x,d?f?-6:6:0)};this.textAlign=g.textAlign||(d?f?"right":"left":"center")};a.StackItem.prototype={destroy:function(){f(this,
this.axis)},render:function(a){var d=this.options,f=d.format,f=f?t(f,this):d.formatter.call(this);this.label?this.label.attr({text:f,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(f,null,null,d.useHTML).css(d.style).attr({align:this.textAlign,rotation:d.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,g){var d=this.axis,c=d.chart,e=d.translate(d.usePercentage?100:this.total,0,0,0,1),d=d.translate(0),d=Math.abs(e-d);a=c.xAxis[0].translate(this.x)+a;e=this.getStackBox(c,this,
a,e,g,d);if(g=this.label)g.align(this.alignOptions,null,e),e=g.alignAttr,g[!1===this.options.crop||c.isInsidePlot(e.x,e.y)?"show":"hide"](!0)},getStackBox:function(a,g,f,c,e,l){var b=g.axis.reversed,d=a.inverted;a=a.plotHeight;g=g.isNegative&&!b||!g.isNegative&&b;return{x:d?g?c:c-l:f,y:d?a-f-e:g?a-c-l:a-c,width:d?l:e,height:d?e:l}}};C.prototype.getStacks=function(){var a=this;k(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});k(a.series,function(d){!d.options.stacking||!0!==
d.visible&&!1!==a.options.chart.ignoreHiddenSeries||(d.stackKey=d.type+v(d.options.stack,""))})};E.prototype.buildStacks=function(){var a=this.series,g=v(this.options.reversedStacks,!0),f=a.length,c;if(!this.isXAxis){this.usePercentage=!1;for(c=f;c--;)a[g?c:f-c-1].setStackedPoints();for(c=0;c<f;c++)a[c].modifyStacks()}};E.prototype.renderStackTotals=function(){var a=this.chart,g=a.renderer,f=this.stacks,c=this.stackTotalGroup;c||(this.stackTotalGroup=c=g.g("stack-labels").attr({visibility:"visible",
zIndex:6}).add());c.translate(a.plotLeft,a.plotTop);m(f,function(a){m(a,function(a){a.render(c)})})};E.prototype.resetStacks=function(){var a=this,g=a.stacks;a.isXAxis||m(g,function(d){m(d,function(c,e){c.touched<a.stacksTouched?(c.destroy(),delete d[e]):(c.total=null,c.cum=null)})})};E.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),m(a,function(a){m(a,function(a){a.cum=a.total})}))};u.prototype.setStackedPoints=function(){if(this.options.stacking&&
(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var d=this.processedXData,g=this.processedYData,f=[],c=g.length,e=this.options,l=e.threshold,b=e.startFromThreshold?l:0,k=e.stack,e=e.stacking,m=this.stackKey,t="-"+m,r=this.negStacks,u=this.yAxis,w=u.stacks,D=u.oldStacks,M,p,B,H,F,h,x;u.stacksTouched+=1;for(F=0;F<c;F++)h=d[F],x=g[F],M=this.getStackIndicator(M,h,this.index),H=M.key,B=(p=r&&x<(b?0:l))?t:m,w[B]||(w[B]={}),w[B][h]||(D[B]&&D[B][h]?(w[B][h]=D[B][h],w[B][h].total=null):
w[B][h]=new a.StackItem(u,u.options.stackLabels,p,h,k)),B=w[B][h],null!==x&&(B.points[H]=B.points[this.index]=[v(B.cum,b)],q(B.cum)||(B.base=H),B.touched=u.stacksTouched,0<M.index&&!1===this.singleStacks&&(B.points[H][0]=B.points[this.index+","+h+",0"][0])),"percent"===e?(p=p?m:t,r&&w[p]&&w[p][h]?(p=w[p][h],B.total=p.total=Math.max(p.total,B.total)+Math.abs(x)||0):B.total=G(B.total+(Math.abs(x)||0))):B.total=G(B.total+(x||0)),B.cum=v(B.cum,b)+(x||0),null!==x&&(B.points[H].push(B.cum),f[F]=B.cum);
"percent"===e&&(u.usePercentage=!0);this.stackedYData=f;u.oldStacks={}}};u.prototype.modifyStacks=function(){var a=this,g=a.stackKey,f=a.yAxis.stacks,c=a.processedXData,e,l=a.options.stacking;a[l+"Stacker"]&&k([g,"-"+g],function(b){for(var d=c.length,g,k;d--;)if(g=c[d],e=a.getStackIndicator(e,g,a.index,b),k=(g=f[b]&&f[b][g])&&g.points[e.key])a[l+"Stacker"](k,g,d)})};u.prototype.percentStacker=function(a,g,f){g=g.total?100/g.total:0;a[0]=G(a[0]*g);a[1]=G(a[1]*g);this.stackedYData[f]=a[1]};u.prototype.getStackIndicator=
function(a,g,f,c){!q(a)||a.x!==g||c&&a.key!==c?a={x:g,index:0,key:c}:a.index++;a.key=[f,g,a.index].join();return a}})(N);(function(a){var E=a.addEvent,C=a.animate,G=a.Axis,q=a.createElement,f=a.css,k=a.defined,t=a.each,m=a.erase,v=a.extend,u=a.fireEvent,d=a.inArray,g=a.isNumber,n=a.isObject,c=a.isArray,e=a.merge,l=a.objectEach,b=a.pick,z=a.Point,A=a.Series,I=a.seriesTypes,r=a.setAnimation,J=a.splat;v(a.Chart.prototype,{addSeries:function(a,c,e){var d,g=this;a&&(c=b(c,!0),u(g,"addSeries",{options:a},
function(){d=g.initSeries(a);g.isDirtyLegend=!0;g.linkSeries();c&&g.redraw(e)}));return d},addAxis:function(a,c,d,g){var f=c?"xAxis":"yAxis",l=this.options;a=e(a,{index:this[f].length,isX:c});c=new G(this,a);l[f]=J(l[f]||{});l[f].push(a);b(d,!0)&&this.redraw(g);return c},showLoading:function(a){var b=this,c=b.options,e=b.loadingDiv,d=c.loading,g=function(){e&&f(e,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};e||(b.loadingDiv=e=q("div",{className:"highcharts-loading highcharts-loading-hidden"},
null,b.container),b.loadingSpan=q("span",{className:"highcharts-loading-inner"},null,e),E(b,"redraw",g));e.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;f(e,v(d.style,{zIndex:10}));f(b.loadingSpan,d.labelStyle);b.loadingShown||(f(e,{opacity:0,display:""}),C(e,{opacity:d.style.opacity||.5},{duration:d.showDuration||0}));b.loadingShown=!0;g()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",C(b,{opacity:0},
{duration:a.loading.hideDuration||100,complete:function(){f(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
update:function(a,c,f){var p=this,n={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},r=a.chart,m,h,w=[];if(r){e(!0,p.options.chart,r);"className"in r&&p.setClassName(r.className);if("inverted"in r||"polar"in r)p.propFromSeries(),m=!0;"alignTicks"in r&&(m=!0);l(r,function(a,b){-1!==d("chart."+b,p.propsRequireUpdateSeries)&&(h=!0);-1!==d(b,p.propsRequireDirtyBox)&&(p.isDirtyBox=!0)});"style"in r&&p.renderer.setStyle(r.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&e(!0,
this.options.plotOptions,a.plotOptions);l(a,function(a,b){if(p[b]&&"function"===typeof p[b].update)p[b].update(a,!1);else if("function"===typeof p[n[b]])p[n[b]](a);"chart"!==b&&-1!==d(b,p.propsRequireUpdateSeries)&&(h=!0)});t("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(t(J(a[b]),function(a,c){(c=k(a.id)&&p.get(a.id)||p[b][c])&&c.coll===b&&(c.update(a,!1),f&&(c.touched=!0));if(!c&&f)if("series"===b)p.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)p.addAxis(a,
"xAxis"===b,!1).touched=!0}),f&&t(p[b],function(a){a.touched?delete a.touched:w.push(a)}))});t(w,function(a){a.remove(!1)});m&&t(p.axes,function(a){a.update({},!1)});h&&t(p.series,function(a){a.update({},!1)});a.loading&&e(!0,p.options.loading,a.loading);m=r&&r.width;r=r&&r.height;g(m)&&m!==p.chartWidth||g(r)&&r!==p.chartHeight?p.setSize(m,r):b(c,!0)&&p.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});v(z.prototype,{update:function(a,c,e,d){function g(){f.applyOptions(a);null===f.y&&h&&
(f.graphic=h.destroy());n(a,!0)&&(h&&h.element&&a&&a.marker&&void 0!==a.marker.symbol&&(f.graphic=h.destroy()),a&&a.dataLabels&&f.dataLabel&&(f.dataLabel=f.dataLabel.destroy()),f.connector&&(f.connector=f.connector.destroy()));p=f.index;l.updateParallelArrays(f,p);r.data[p]=n(r.data[p],!0)||n(a,!0)?f.options:a;l.isDirty=l.isDirtyData=!0;!l.fixedBox&&l.hasCartesianSeries&&(k.isDirtyBox=!0);"point"===r.legendType&&(k.isDirtyLegend=!0);c&&k.redraw(e)}var f=this,l=f.series,h=f.graphic,p,k=l.chart,r=l.options;
c=b(c,!0);!1===d?g():f.firePointEvent("update",{options:a},g)},remove:function(a,b){this.series.removePoint(d(this,this.series.data),a,b)}});v(A.prototype,{addPoint:function(a,c,e,d){var g=this.options,f=this.data,l=this.chart,h=this.xAxis,h=h&&h.hasNames&&h.names,p=g.data,k,r,n=this.xData,m,w;c=b(c,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,[a]);w=k.x;m=n.length;if(this.requireSorting&&w<n[m-1])for(r=!0;m&&n[m-1]>w;)m--;this.updateParallelArrays(k,"splice",m,0,0);this.updateParallelArrays(k,
m);h&&k.name&&(h[w]=k.name);p.splice(m,0,a);r&&(this.data.splice(m,0,null),this.processData());"point"===g.legendType&&this.generatePoints();e&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(k,"shift"),p.shift()));this.isDirtyData=this.isDirty=!0;c&&l.redraw(d)},removePoint:function(a,c,e){var d=this,g=d.data,f=g[a],l=d.points,h=d.chart,k=function(){l&&l.length===g.length&&l.splice(a,1);g.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(f||{series:d},"splice",
a,1);f&&f.destroy();d.isDirty=!0;d.isDirtyData=!0;c&&h.redraw()};r(e,h);c=b(c,!0);f?f.firePointEvent("remove",null,k):k()},remove:function(a,c,e){function d(){g.destroy();f.isDirtyLegend=f.isDirtyBox=!0;f.linkSeries();b(a,!0)&&f.redraw(c)}var g=this,f=g.chart;!1!==e?u(g,"remove",null,d):d()},update:function(a,c){var d=this,g=d.chart,f=d.userOptions,l=d.oldType||d.type,k=a.type||f.type||g.options.chart.type,h=I[l].prototype,r,n=["group","markerGroup","dataLabelsGroup"],m=["navigatorSeries","baseSeries"],
w=d.finishedAnimating&&{animation:!1};if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,c);if(k&&k!==l||void 0!==a.zIndex)n.length=0;d.options.isInternal&&(m.length=0);m=n.concat(m);t(m,function(a){m[a]=d[a];delete d[a]});a=e(f,w,{index:d.index,pointStart:d.xData[0]},{data:d.options.data},a);d.remove(!1,null,!1);for(r in h)d[r]=void 0;v(d,I[k||l].prototype);t(m,function(a){d[a]=m[a]});d.init(g,a);d.oldType=l;g.linkSeries();b(c,!0)&&g.redraw(!1)}});v(G.prototype,{update:function(a,
c){var d=this.chart;a=d.options[this.coll][this.options.index]=e(this.userOptions,a);this.destroy(!0);this.init(d,v(a,{events:void 0}));d.isDirtyBox=!0;b(c,!0)&&d.redraw()},remove:function(a){for(var e=this.chart,d=this.coll,g=this.series,f=g.length;f--;)g[f]&&g[f].remove(!1);m(e.axes,this);m(e[d],this);c(e.options[d])?e.options[d].splice(this.options.index,1):delete e.options[d];t(e[d],function(a,b){a.options.index=b});this.destroy();e.isDirtyBox=!0;b(a,!0)&&e.redraw()},setTitle:function(a,b){this.update({title:a},
b)},setCategories:function(a,b){this.update({categories:a},b)}})})(N);(function(a){var E=a.color,C=a.each,G=a.map,q=a.pick,f=a.Series,k=a.seriesType;k("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(f){var k=[],t=[],u=this.xAxis,d=this.yAxis,g=d.stacks[this.stackKey],n={},c=this.index,e=d.series,l=e.length,b,z=q(d.options.reversedStacks,!0)?1:-1,A;f=f||this.points;if(this.options.stacking){for(A=0;A<f.length;A++)n[f[A].x]=f[A];a.objectEach(g,function(a,b){null!==
a.total&&t.push(b)});t.sort(function(a,b){return a-b});b=G(e,function(){return this.visible});C(t,function(a,e){var f=0,r,m;if(n[a]&&!n[a].isNull)k.push(n[a]),C([-1,1],function(d){var f=1===d?"rightNull":"leftNull",k=0,w=g[t[e+d]];if(w)for(A=c;0<=A&&A<l;)r=w.points[A],r||(A===c?n[a][f]=!0:b[A]&&(m=g[a].points[A])&&(k-=m[1]-m[0])),A+=z;n[a][1===d?"rightCliff":"leftCliff"]=k});else{for(A=c;0<=A&&A<l;){if(r=g[a].points[A]){f=r[1];break}A+=z}f=d.translate(f,0,1,0,1);k.push({isNull:!0,plotX:u.translate(a,
0,0,0,1),x:a,plotY:f,yBottom:f})}})}return k},getGraphPath:function(a){var k=f.prototype.getGraphPath,t=this.options,u=t.stacking,d=this.yAxis,g,n,c=[],e=[],l=this.index,b,z=d.stacks[this.stackKey],A=t.threshold,I=d.getThreshold(t.threshold),r,t=t.connectNulls||"percent"===u,J=function(g,f,k){var r=a[g];g=u&&z[r.x].points[l];var n=r[k+"Null"]||0;k=r[k+"Cliff"]||0;var m,q,r=!0;k||n?(m=(n?g[0]:g[1])+k,q=g[0]+k,r=!!n):!u&&a[f]&&a[f].isNull&&(m=q=A);void 0!==m&&(e.push({plotX:b,plotY:null===m?I:d.getThreshold(m),
isNull:r,isCliff:!0}),c.push({plotX:b,plotY:null===q?I:d.getThreshold(q),doCurve:!1}))};a=a||this.points;u&&(a=this.getStackPoints(a));for(g=0;g<a.length;g++)if(n=a[g].isNull,b=q(a[g].rectPlotX,a[g].plotX),r=q(a[g].yBottom,I),!n||t)t||J(g,g-1,"left"),n&&!u&&t||(e.push(a[g]),c.push({x:g,plotX:b,plotY:r})),t||J(g,g+1,"right");g=k.call(this,e,!0,!0);c.reversed=!0;n=k.call(this,c,!0,!0);n.length&&(n[0]="L");n=g.concat(n);k=k.call(this,e,!1,t);n.xMap=g.xMap;this.areaPath=n;return k},drawGraph:function(){this.areaPath=
[];f.prototype.drawGraph.apply(this);var a=this,k=this.areaPath,v=this.options,u=[["area","highcharts-area",this.color,v.fillColor]];C(this.zones,function(d,g){u.push(["zone-area-"+g,"highcharts-area highcharts-zone-area-"+g+" "+d.className,d.color||a.color,d.fillColor||v.fillColor])});C(u,function(d){var g=d[0],f=a[g];f?(f.endX=k.xMap,f.animate({d:k})):(f=a[g]=a.chart.renderer.path(k).addClass(d[1]).attr({fill:q(d[3],E(d[2]).setOpacity(q(v.fillOpacity,.75)).get()),zIndex:0}).add(a.group),f.isArea=
!0);f.startX=k.xMap;f.shiftUnit=v.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(N);(function(a){var E=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,q){var f=G.plotX,k=G.plotY,t=a[q-1];q=a[q+1];var m,v,u,d;if(t&&!t.isNull&&!1!==t.doCurve&&!G.isCliff&&q&&!q.isNull&&!1!==q.doCurve&&!G.isCliff){a=t.plotY;u=q.plotX;q=q.plotY;var g=0;m=(1.5*f+t.plotX)/2.5;v=(1.5*k+a)/2.5;u=(1.5*f+u)/2.5;d=(1.5*k+q)/2.5;u!==m&&(g=(d-v)*(u-f)/(u-m)+k-d);v+=g;d+=g;v>a&&v>k?(v=
Math.max(a,k),d=2*k-v):v<a&&v<k&&(v=Math.min(a,k),d=2*k-v);d>q&&d>k?(d=Math.max(q,k),v=2*k-d):d<q&&d<k&&(d=Math.min(q,k),v=2*k-d);G.rightContX=u;G.rightContY=d}G=["C",E(t.rightContX,t.plotX),E(t.rightContY,t.plotY),E(m,f),E(v,k),f,k];t.rightContX=t.rightContY=null;return G}})})(N);(function(a){var E=a.seriesTypes.area.prototype,C=a.seriesType;C("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:E.getStackPoints,getGraphPath:E.getGraphPath,drawGraph:E.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(N);
(function(a){var E=a.animObject,C=a.color,G=a.each,q=a.extend,f=a.isNumber,k=a.merge,t=a.pick,m=a.Series,v=a.seriesType,u=a.svg;v("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,
borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){m.prototype.init.apply(this,arguments);var a=this,g=a.chart;g.hasRendered&&G(g.series,function(d){d.type===a.type&&(d.isDirty=!0)})},getColumnMetrics:function(){var a=this,g=a.options,f=a.xAxis,c=a.yAxis,e=f.reversed,l,b={},k=0;!1===g.grouping?k=1:G(a.chart.series,function(e){var d=e.options,g=e.yAxis,f;e.type!==a.type||!e.visible&&a.chart.options.chart.ignoreHiddenSeries||
c.len!==g.len||c.pos!==g.pos||(d.stacking?(l=e.stackKey,void 0===b[l]&&(b[l]=k++),f=b[l]):!1!==d.grouping&&(f=k++),e.columnIndex=f)});var m=Math.min(Math.abs(f.transA)*(f.ordinalSlope||g.pointRange||f.closestPointRange||f.tickInterval||1),f.len),q=m*g.groupPadding,r=(m-2*q)/(k||1),g=Math.min(g.maxPointWidth||f.len,t(g.pointWidth,r*(1-2*g.pointPadding)));a.columnMetrics={width:g,offset:(r-g)/2+(q+((a.columnIndex||0)+(e?1:0))*r-m/2)*(e?-1:1)};return a.columnMetrics},crispCol:function(a,g,f,c){var e=
this.chart,d=this.borderWidth,b=-(d%2?.5:0),d=d%2?.5:1;e.inverted&&e.renderer.isVML&&(d+=1);this.options.crisp&&(f=Math.round(a+f)+b,a=Math.round(a)+b,f-=a);c=Math.round(g+c)+d;b=.5>=Math.abs(g)&&.5<c;g=Math.round(g)+d;c-=g;b&&c&&(--g,c+=1);return{x:a,y:g,width:f,height:c}},translate:function(){var a=this,g=a.chart,f=a.options,c=a.dense=2>a.closestPointRange*a.xAxis.transA,c=a.borderWidth=t(f.borderWidth,c?0:1),e=a.yAxis,l=a.translatedThreshold=e.getThreshold(f.threshold),b=t(f.minPointLength,5),
k=a.getColumnMetrics(),q=k.width,u=a.barW=Math.max(q,1+2*c),r=a.pointXOffset=k.offset;g.inverted&&(l-=.5);f.pointPadding&&(u=Math.ceil(u));m.prototype.translate.apply(a);G(a.points,function(c){var d=t(c.yBottom,l),f=999+Math.abs(d),f=Math.min(Math.max(-f,c.plotY),e.len+f),k=c.plotX+r,p=u,n=Math.min(f,d),m,z=Math.max(f,d)-n;b&&Math.abs(z)<b&&(z=b,m=!e.reversed&&!c.negative||e.reversed&&c.negative,0===c.y&&0>=a.dataMax&&(m=!m),n=Math.abs(n-l)>b?d-b:l-(m?b:0));c.barX=k;c.pointWidth=q;c.tooltipPos=g.inverted?
[e.len+e.pos-g.plotLeft-f,a.xAxis.len-k-p/2,z]:[k+p/2,f+e.pos-g.plotTop,z];c.shapeType="rect";c.shapeArgs=a.crispCol.apply(a,c.isNull?[k,l,p,0]:[k,n,p,z])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,g){var d=this.options,c,e=this.pointAttrToOptions||{};c=e.stroke||"borderColor";var f=e["stroke-width"]||"borderWidth",b=a&&a.color||this.color,m=a&&a[c]||d[c]||
this.color||b,q=a&&a[f]||d[f]||this[f]||0,e=d.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||b&&b.color||this.color);g&&(a=k(d.states[g],a.options.states&&a.options.states[g]||{}),g=a.brightness,b=a.color||void 0!==g&&C(b).brighten(a.brightness).get()||b,m=a[c]||m,q=a[f]||q,e=a.dashStyle||e);c={fill:b,stroke:m,"stroke-width":q};e&&(c.dashstyle=e);return c},drawPoints:function(){var a=this,g=this.chart,m=a.options,c=g.renderer,e=m.animationLimit||250,l;G(a.points,function(b){var d=
b.graphic;if(f(b.plotY)&&null!==b.y){l=b.shapeArgs;if(d)d[g.pointCount<e?"animate":"attr"](k(l));else b.graphic=d=c[b.shapeType](l).add(b.group||a.group);m.borderRadius&&d.attr({r:m.borderRadius});d.attr(a.pointAttribs(b,b.selected&&"select")).shadow(m.shadow,null,m.stacking&&!m.borderRadius);d.addClass(b.getClassName(),!0)}else d&&(b.graphic=d.destroy())})},animate:function(a){var d=this,f=this.yAxis,c=d.options,e=this.chart.inverted,l={},b=e?"translateX":"translateY",k;u&&(a?(l.scaleY=.001,a=Math.min(f.pos+
f.len,Math.max(f.pos,f.toPixels(c.threshold))),e?l.translateX=a-f.len:l.translateY=a,d.group.attr(l)):(k=d.group.attr(b),d.group.animate({scaleY:1},q(E(d.options.animation),{step:function(a,c){l[b]=k+c.pos*(f.pos-k);d.group.attr(l)}})),d.animate=null))},remove:function(){var a=this,f=a.chart;f.hasRendered&&G(f.series,function(d){d.type===a.type&&(d.isDirty=!0)});m.prototype.remove.apply(a,arguments)}})})(N);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(N);(function(a){var E=a.Series;
a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&
E.prototype.drawGraph.call(this)}})})(N);(function(a){var E=a.deg2rad,C=a.isNumber,G=a.pick,q=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,k=this.chart,t=2*(a.slicedOffset||0),m=k.plotWidth-2*t,k=k.plotHeight-2*t,v=a.center,v=[G(v[0],"50%"),G(v[1],"50%"),a.size||"100%",a.innerSize||0],u=Math.min(m,k),d,g;for(d=0;4>d;++d)g=v[d],a=2>d||2===d&&/%$/.test(g),v[d]=q(g,[m,k,u,v[2]][d])+(a?t:0);v[3]>v[2]&&(v[3]=v[2]);return v},getStartAndEndRadians:function(a,k){a=C(a)?
a:0;k=C(k)&&k>a&&360>k-a?k:a+360;return{start:E*(a+-90),end:E*(k+-90)}}}})(N);(function(a){var E=a.addEvent,C=a.CenteredSeriesMixin,G=a.defined,q=a.each,f=a.extend,k=C.getStartAndEndRadians,t=a.inArray,m=a.noop,v=a.pick,u=a.Point,d=a.Series,g=a.seriesType,n=a.setAnimation;g("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,
showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var c=this,d=c.points,b=c.startAngleRad;a||(q(d,function(a){var e=a.graphic,d=a.shapeArgs;e&&(e.attr({r:a.startR||c.center[3]/2,start:b,end:b}),e.animate({r:d.r,
start:d.start,end:d.end},c.options.animation))}),c.animate=null)},updateTotals:function(){var a,e=0,d=this.points,b=d.length,f,g=this.options.ignoreHiddenPoint;for(a=0;a<b;a++)f=d[a],e+=g&&!f.visible?0:f.isNull?0:f.y;this.total=e;for(a=0;a<b;a++)f=d[a],f.percentage=0<e&&(f.visible||!g)?f.y/e*100:0,f.total=e},generatePoints:function(){d.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var c=0,d=this.options,b=d.slicedOffset,f=b+(d.borderWidth||0),
g,m,r,n=k(d.startAngle,d.endAngle),q=this.startAngleRad=n.start,n=(this.endAngleRad=n.end)-q,t=this.points,u,p=d.dataLabels.distance,d=d.ignoreHiddenPoint,B,H=t.length,F;a||(this.center=a=this.getCenter());this.getX=function(b,c,e){r=Math.asin(Math.min((b-a[1])/(a[2]/2+e.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(r)*(a[2]/2+e.labelDistance)};for(B=0;B<H;B++){F=t[B];F.labelDistance=v(F.options.dataLabels&&F.options.dataLabels.distance,p);this.maxLabelDistance=Math.max(this.maxLabelDistance||
0,F.labelDistance);g=q+c*n;if(!d||F.visible)c+=F.percentage/100;m=q+c*n;F.shapeType="arc";F.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*g)/1E3,end:Math.round(1E3*m)/1E3};r=(m+g)/2;r>1.5*Math.PI?r-=2*Math.PI:r<-Math.PI/2&&(r+=2*Math.PI);F.slicedTranslation={translateX:Math.round(Math.cos(r)*b),translateY:Math.round(Math.sin(r)*b)};m=Math.cos(r)*a[2]/2;u=Math.sin(r)*a[2]/2;F.tooltipPos=[a[0]+.7*m,a[1]+.7*u];F.half=r<-Math.PI/2||r>Math.PI/2?1:0;F.angle=r;g=Math.min(f,F.labelDistance/
5);F.labelPos=[a[0]+m+Math.cos(r)*F.labelDistance,a[1]+u+Math.sin(r)*F.labelDistance,a[0]+m+Math.cos(r)*g,a[1]+u+Math.sin(r)*g,a[0]+m,a[1]+u,0>F.labelDistance?"center":F.half?"right":"left",r]}},drawGraph:null,drawPoints:function(){var a=this,e=a.chart.renderer,d,b,g,k,m=a.options.shadow;m&&!a.shadowGroup&&(a.shadowGroup=e.g("shadow").add(a.group));q(a.points,function(c){b=c.graphic;if(c.isNull)b&&(c.graphic=b.destroy());else{k=c.shapeArgs;d=c.getTranslate();var l=c.shadowGroup;m&&!l&&(l=c.shadowGroup=
e.g("shadow").add(a.shadowGroup));l&&l.attr(d);g=a.pointAttribs(c,c.selected&&"select");b?b.setRadialReference(a.center).attr(g).animate(f(k,d)):(c.graphic=b=e[c.shapeType](k).setRadialReference(a.center).attr(d).add(a.group),c.visible||b.attr({visibility:"hidden"}),b.attr(g).attr({"stroke-linejoin":"round"}).shadow(m,l));b.addClass(c.getClassName())}})},searchPoint:m,sortByAngle:function(a,e){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*e})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,
getCenter:C.getCenter,getSymbol:m},{init:function(){u.prototype.init.apply(this,arguments);var a=this,e;a.name=v(a.name,"Slice");e=function(c){a.slice("select"===c.type)};E(a,"select",e);E(a,"unselect",e);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,e){var c=this,b=c.series,d=b.chart,f=b.options.ignoreHiddenPoint;e=v(e,f);a!==c.visible&&(c.visible=c.options.visible=a=void 0===a?!c.visible:a,b.options.data[t(c,b.data)]=c.options,q(["graphic","dataLabel",
"connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)}),c.legendItem&&d.legend.colorizeItem(c,a),a||"hover"!==c.state||c.setState(""),f&&(b.isDirty=!0),e&&d.redraw())},slice:function(a,e,d){var b=this.series;n(d,b.chart);v(e,!0);this.sliced=this.options.sliced=G(a)?a:!this.sliced;b.options.data[t(this,b.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:
{translateX:0,translateY:0}},haloPath:function(a){var c=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(c.x,c.y,c.r+a,c.r+a,{innerR:this.shapeArgs.r,start:c.start,end:c.end})}})})(N);(function(a){var E=a.addEvent,C=a.arrayMax,G=a.defined,q=a.each,f=a.extend,k=a.format,t=a.map,m=a.merge,v=a.noop,u=a.pick,d=a.relativeLength,g=a.Series,n=a.seriesTypes,c=a.stableSort;a.distribute=function(a,d){function b(a,b){return a.target-b.target}var e,f=!0,g=a,k=[],l;l=
0;for(e=a.length;e--;)l+=a[e].size;if(l>d){c(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(l=e=0;l<=d;)l+=a[e].size,e++;k=a.splice(e-1,a.length)}c(a,b);for(a=t(a,function(a){return{size:a.size,targets:[a.target]}});f;){for(e=a.length;e--;)f=a[e],l=(Math.min.apply(0,f.targets)+Math.max.apply(0,f.targets))/2,f.pos=Math.min(Math.max(0,l-f.size/2),d-f.size);e=a.length;for(f=!1;e--;)0<e&&a[e-1].pos+a[e-1].size>a[e].pos&&(a[e-1].size+=a[e].size,a[e-1].targets=a[e-1].targets.concat(a[e].targets),a[e-
1].pos+a[e-1].size>d&&(a[e-1].pos=d-a[e-1].size),a.splice(e,1),f=!0)}e=0;q(a,function(a){var b=0;q(a.targets,function(){g[e].pos=a.pos+b;b+=g[e].size;e++})});g.push.apply(g,k);c(g,b)};g.prototype.drawDataLabels=function(){var c=this,d=c.options,b=d.dataLabels,f=c.points,g,n,r=c.hasRendered||0,t,w,v=u(b.defer,!!d.animation),C=c.chart.renderer;if(b.enabled||c._hasPointLabels)c.dlProcessOptions&&c.dlProcessOptions(b),w=c.plotGroup("dataLabelsGroup","data-labels",v&&!r?"hidden":"visible",b.zIndex||6),
v&&(w.attr({opacity:+r}),r||E(c,"afterAnimate",function(){c.visible&&w.show(!0);w[d.animation?"animate":"attr"]({opacity:1},{duration:200})})),n=b,q(f,function(e){var f,l=e.dataLabel,r,h,p=e.connector,q=!l,v;g=e.dlOptions||e.options&&e.options.dataLabels;if(f=u(g&&g.enabled,n.enabled)&&!e.isNull)b=m(n,g),r=e.getLabelConfig(),v=b[e.formatPrefix+"Format"]||b.format,t=G(v)?k(v,r):(b[e.formatPrefix+"Formatter"]||b.formatter).call(r,b),v=b.style,r=b.rotation,v.color=u(b.color,v.color,c.color,"#000000"),
"contrast"===v.color&&(e.contrastColor=C.getContrast(e.color||c.color),v.color=b.inside||0>u(e.labelDistance,b.distance)||d.stacking?e.contrastColor:"#000000"),d.cursor&&(v.cursor=d.cursor),h={fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth,r:b.borderRadius||0,rotation:r,padding:b.padding,zIndex:1},a.objectEach(h,function(a,b){void 0===a&&delete h[b]});!l||f&&G(t)?f&&G(t)&&(l?h.text=t:(l=e.dataLabel=C[r?"text":"label"](t,0,-9999,b.shape,null,null,b.useHTML,null,"data-label"),
l.addClass("highcharts-data-label-color-"+e.colorIndex+" "+(b.className||"")+(b.useHTML?"highcharts-tracker":""))),l.attr(h),l.css(v).shadow(b.shadow),l.added||l.add(w),c.alignDataLabel(e,l,b,null,q)):(e.dataLabel=l=l.destroy(),p&&(e.connector=p.destroy()))})};g.prototype.alignDataLabel=function(a,c,b,d,g){var e=this.chart,k=e.inverted,l=u(a.plotX,-9999),m=u(a.plotY,-9999),n=c.getBBox(),q,p=b.rotation,t=b.align,v=this.visible&&(a.series.forceDL||e.isInsidePlot(l,Math.round(m),k)||d&&e.isInsidePlot(l,
k?d.x+1:d.y+d.height-1,k)),z="justify"===u(b.overflow,"justify");if(v&&(q=b.style.fontSize,q=e.renderer.fontMetrics(q,c).b,d=f({x:k?this.yAxis.len-m:l,y:Math.round(k?this.xAxis.len-l:m),width:0,height:0},d),f(b,{width:n.width,height:n.height}),p?(z=!1,l=e.renderer.rotCorr(q,p),l={x:d.x+b.x+d.width/2+l.x,y:d.y+b.y+{top:0,middle:.5,bottom:1}[b.verticalAlign]*d.height},c[g?"attr":"animate"](l).attr({align:t}),m=(p+720)%360,m=180<m&&360>m,"left"===t?l.y-=m?n.height:0:"center"===t?(l.x-=n.width/2,l.y-=
n.height/2):"right"===t&&(l.x-=n.width,l.y-=m?0:n.height)):(c.align(b,null,d),l=c.alignAttr),z?a.isLabelJustified=this.justifyDataLabel(c,b,l,n,d,g):u(b.crop,!0)&&(v=e.isInsidePlot(l.x,l.y)&&e.isInsidePlot(l.x+n.width,l.y+n.height)),b.shape&&!p))c[g?"attr":"animate"]({anchorX:k?e.plotWidth-a.plotY:a.plotX,anchorY:k?e.plotHeight-a.plotX:a.plotY});v||(c.attr({y:-9999}),c.placed=!1)};g.prototype.justifyDataLabel=function(a,c,b,d,f,g){var e=this.chart,k=c.align,l=c.verticalAlign,m,n,p=a.box?0:a.padding||
0;m=b.x+p;0>m&&("right"===k?c.align="left":c.x=-m,n=!0);m=b.x+d.width-p;m>e.plotWidth&&("left"===k?c.align="right":c.x=e.plotWidth-m,n=!0);m=b.y+p;0>m&&("bottom"===l?c.verticalAlign="top":c.y=-m,n=!0);m=b.y+d.height-p;m>e.plotHeight&&("top"===l?c.verticalAlign="bottom":c.y=e.plotHeight-m,n=!0);n&&(a.placed=!g,a.align(c,null,f));return n};n.pie&&(n.pie.prototype.drawDataLabels=function(){var c=this,d=c.data,b,f=c.chart,k=c.options.dataLabels,m=u(k.connectorPadding,10),r=u(k.connectorWidth,1),n=f.plotWidth,
w=f.plotHeight,t,v=c.center,p=v[2]/2,B=v[1],E,F,h,x,N=[[],[]],K,P,L,Q,y=[0,0,0,0];c.visible&&(k.enabled||c._hasPointLabels)&&(q(d,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),g.prototype.drawDataLabels.apply(c),q(d,function(a){a.dataLabel&&a.visible&&(N[a.half].push(a),a.dataLabel._pos=null)}),q(N,function(e,d){var g,l,r=e.length,t=[],D;if(r)for(c.sortByAngle(e,d-.5),0<c.maxLabelDistance&&
(g=Math.max(0,B-p-c.maxLabelDistance),l=Math.min(B+p+c.maxLabelDistance,f.plotHeight),q(e,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,B-p-a.labelDistance),a.bottom=Math.min(B+p+a.labelDistance,f.plotHeight),D=a.dataLabel.getBBox().height||21,a.positionsIndex=t.push({target:a.labelPos[1]-a.top+D/2,size:D,rank:a.y})-1)}),a.distribute(t,l+D-g)),Q=0;Q<r;Q++)b=e[Q],l=b.positionsIndex,h=b.labelPos,E=b.dataLabel,L=!1===b.visible?"hidden":"inherit",P=g=h[1],t&&G(t[l])&&(void 0===t[l].pos?
L="hidden":(x=t[l].size,P=b.top+t[l].pos)),delete b.positionIndex,K=k.justify?v[0]+(d?-1:1)*(p+b.labelDistance):c.getX(P<b.top+2||P>b.bottom-2?g:P,d,b),E._attr={visibility:L,align:h[6]},E._pos={x:K+k.x+({left:m,right:-m}[h[6]]||0),y:P+k.y-10},h.x=K,h.y=P,u(k.crop,!0)&&(F=E.getBBox().width,g=null,K-F<m?(g=Math.round(F-K+m),y[3]=Math.max(g,y[3])):K+F>n-m&&(g=Math.round(K+F-n+m),y[1]=Math.max(g,y[1])),0>P-x/2?y[0]=Math.max(Math.round(-P+x/2),y[0]):P+x/2>w&&(y[2]=Math.max(Math.round(P+x/2-w),y[2])),E.sideOverflow=
g)}),0===C(y)||this.verifyDataLabelOverflow(y))&&(this.placeDataLabels(),r&&q(this.points,function(a){var b;t=a.connector;if((E=a.dataLabel)&&E._pos&&a.visible&&0<a.labelDistance){L=E._attr.visibility;if(b=!t)a.connector=t=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex).add(c.dataLabelsGroup),t.attr({"stroke-width":r,stroke:k.connectorColor||a.color||"#666666"});t[b?"attr":"animate"]({d:c.connectorPath(a.labelPos)});t.attr("visibility",L)}else t&&(a.connector=
t.destroy())}))},n.pie.prototype.connectorPath=function(a){var c=a.x,b=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",c+("left"===a[6]?5:-5),b,"C",c,b,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",c+("left"===a[6]?5:-5),b,"L",a[2],a[3],"L",a[4],a[5]]},n.pie.prototype.placeDataLabels=function(){q(this.points,function(a){var c=a.dataLabel;c&&a.visible&&((a=c._pos)?(c.sideOverflow&&(c._attr.width=c.getBBox().width-c.sideOverflow,c.css({width:c._attr.width+"px",textOverflow:"ellipsis"}),
c.shortened=!0),c.attr(c._attr),c[c.moved?"animate":"attr"](a),c.moved=!0):c&&c.attr({y:-9999}))},this)},n.pie.prototype.alignDataLabel=v,n.pie.prototype.verifyDataLabelOverflow=function(a){var c=this.center,b=this.options,e=b.center,f=b.minSize||80,g,k=null!==b.size;k||(null!==e[0]?g=Math.max(c[2]-Math.max(a[1],a[3]),f):(g=Math.max(c[2]-a[1]-a[3],f),c[0]+=(a[3]-a[1])/2),null!==e[1]?g=Math.max(Math.min(g,c[2]-Math.max(a[0],a[2])),f):(g=Math.max(Math.min(g,c[2]-a[0]-a[2]),f),c[1]+=(a[0]-a[2])/2),g<
c[2]?(c[2]=g,c[3]=Math.min(d(b.innerSize||0,g),g),this.translate(c),this.drawDataLabels&&this.drawDataLabels()):k=!0);return k});n.column&&(n.column.prototype.alignDataLabel=function(a,c,b,d,f){var e=this.chart.inverted,k=a.series,l=a.dlBox||a.shapeArgs,n=u(a.below,a.plotY>u(this.translatedThreshold,k.yAxis.len)),q=u(b.inside,!!this.options.stacking);l&&(d=m(l),0>d.y&&(d.height+=d.y,d.y=0),l=d.y+d.height-k.yAxis.len,0<l&&(d.height-=l),e&&(d={x:k.yAxis.len-d.y-d.height,y:k.xAxis.len-d.x-d.width,width:d.height,
height:d.width}),q||(e?(d.x+=n?0:d.width,d.width=0):(d.y+=n?d.height:0,d.height=0)));b.align=u(b.align,!e||q?"center":n?"right":"left");b.verticalAlign=u(b.verticalAlign,e||q?"middle":n?"top":"bottom");g.prototype.alignDataLabel.call(this,a,c,b,d,f);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(N);(function(a){var E=a.Chart,C=a.each,G=a.objectEach,q=a.pick,f=a.addEvent;E.prototype.callbacks.push(function(a){f(a,"render",function(){var f=[];C(a.labelCollectors||
[],function(a){f=f.concat(a())});C(a.yAxis||[],function(a){a.options.stackLabels&&!a.options.stackLabels.allowOverlap&&G(a.stacks,function(a){G(a,function(a){f.push(a.label)})})});C(a.series||[],function(a){var k=a.options.dataLabels,m=a.dataLabelCollections||["dataLabel"];(k.enabled||a._hasPointLabels)&&!k.allowOverlap&&a.visible&&C(m,function(d){C(a.points,function(a){a[d]&&(a[d].labelrank=q(a.labelrank,a.shapeArgs&&a.shapeArgs.height),f.push(a[d]))})})});a.hideOverlappingLabels(f)})});E.prototype.hideOverlappingLabels=
function(a){var f=a.length,k,q,u,d,g,n,c,e,l,b=function(a,b,c,d,e,f,g,k){return!(e>a+c||e+g<a||f>b+d||f+k<b)};for(q=0;q<f;q++)if(k=a[q])k.oldOpacity=k.opacity,k.newOpacity=1,k.width||(u=k.getBBox(),k.width=u.width,k.height=u.height);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(q=0;q<f;q++)for(u=a[q],k=q+1;k<f;++k)if(d=a[k],u&&d&&u!==d&&u.placed&&d.placed&&0!==u.newOpacity&&0!==d.newOpacity&&(g=u.alignAttr,n=d.alignAttr,c=u.parentGroup,e=d.parentGroup,l=2*(u.box?0:u.padding||
0),g=b(g.x+c.translateX,g.y+c.translateY,u.width-l,u.height-l,n.x+e.translateX,n.y+e.translateY,d.width-l,d.height-l)))(u.labelrank<d.labelrank?u:d).newOpacity=0;C(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(N);(function(a){var E=a.addEvent,C=a.Chart,G=a.createElement,q=a.css,f=a.defaultOptions,k=a.defaultPlotOptions,t=a.each,m=a.extend,v=a.fireEvent,
u=a.hasTouch,d=a.inArray,g=a.isObject,n=a.Legend,c=a.merge,e=a.pick,l=a.Point,b=a.Series,z=a.seriesTypes,A=a.svg,I;I=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};t(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(t(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",
c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(q).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,k=f.renderer,l=f.options.tooltip.snap,h=a.tracker,m,n=function(){if(f.hoverSeries!==a)a.onMouseOver()},q="rgba(192,192,192,"+(A?.0001:.002)+")";if(e&&!c)for(m=e+1;m--;)"M"===d[m]&&d.splice(m+1,0,d[m+
1]-l,d[m+2],"L"),(m&&"M"===d[m]||m===e)&&d.splice(m,0,"L",d[m-2]+l,d[m-1]);h?h.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:q,fill:c?q:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),zIndex:2}).add(a.group),t([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){g.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",n)}))}};z.column&&
(z.column.prototype.drawTracker=I.drawTrackerPoint);z.pie&&(z.pie.prototype.drawTracker=I.drawTrackerPoint);z.scatter&&(z.scatter.prototype.drawTracker=I.drawTrackerPoint);m(n.prototype,{setItemEvents:function(a,b,d){var e=this,f=e.chart.renderer.boxWrapper,g="highcharts-legend-"+(a.series?"point":"series")+"-active";(d?b:a.legendGroup).on("mouseover",function(){a.setState("hover");f.addClass(g);b.css(e.options.itemHoverStyle)}).on("mouseout",function(){b.css(c(a.visible?e.itemStyle:e.itemHiddenStyle));
f.removeClass(g);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):v(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){v(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});
f.legend.itemStyle.cursor="pointer";m(C.prototype,{showResetZoom:function(){var a=this,b=f.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,g="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,g)},zoomOut:function(){var a=this;v(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,
c=this.pointer,d=!1,f;!a||a.resetSelection?(t(this.axes,function(a){b=a.zoom()}),c.initiated=!1):t(a.xAxis.concat(a.yAxis),function(a){var e=a.axis;c[e.isXAxis?"zoomX":"zoomY"]&&(b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0))});f=this.resetZoomButton;d&&!f?this.showResetZoom():!d&&g(f)&&(this.resetZoomButton=f.destroy());b&&this.redraw(e(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&t(d,function(a){a.setState()});t("xy"===b?[1,0]:
[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",g=c[d],h=(b.pointRange||0)/2,k=b.getExtremes(),l=b.toValue(g-f,!0)+h,h=b.toValue(g+b.len-f,!0)-h,m=h<l,g=m?h:l,l=m?l:h,h=Math.min(k.dataMin,b.toValue(b.toPixels(k.min)-b.minPixelPadding)),m=Math.max(k.dataMax,b.toValue(b.toPixels(k.max)+b.minPixelPadding)),n;n=h-g;0<n&&(l+=n,g=h);n=l-m;0<n&&(l=m,g-=n);b.series.length&&g!==k.min&&l!==k.max&&(b.setExtremes(g,l,!1,!1,{trigger:"pan"}),e=!0);
c[d]=f});e&&c.redraw(!1);q(c.container,{cursor:"move"})}});m(l.prototype,{select:function(a,b){var c=this,f=c.series,g=f.chart;a=e(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;f.options.data[d(c,f.data)]=c.options;c.setState(a&&"select");b||t(g.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,f.options.data[d(a,f.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=
this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");t(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,d=c(b.series.options.point,b.options).events;b.events=d;a.objectEach(d,function(a,c){E(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),
d=this.plotY,f=this.series,g=f.options.states[a]||{},l=k[f.type].marker&&f.options.marker,n=l&&!1===l.enabled,r=l&&l.states&&l.states[a]||{},h=!1===r.enabled,q=f.stateMarkerGraphic,t=this.marker||{},u=f.chart,v=f.halo,z,A=l&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===g.enabled||a&&(h||n&&!1===r.enabled)||a&&t.states&&t.states[a]&&!1===t.states[a].enabled)){A&&(z=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+
this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(f.pointAttribs(this,a),e(u.options.chart.animation,g.animation)),z&&this.graphic.animate(z,e(u.options.chart.animation,r.animation,l.animation)),q&&q.hide();else{if(a&&r){l=t.symbol||f.symbol;q&&q.currentSymbol!==l&&(q=q.destroy());if(q)q[b?"animate":"attr"]({x:z.x,y:z.y});else l&&(f.stateMarkerGraphic=q=u.renderer.symbol(l,z.x,z.y,z.width,z.height).add(f.markerGroup),q.currentSymbol=l);q&&q.attr(f.pointAttribs(this,
a))}q&&(q[a&&u.isInsidePlot(c,d,u.inverted)?"show":"hide"](),q.element.point=this)}(c=g.halo)&&c.size?(v||(f.halo=v=u.renderer.path().add((this.graphic||q).parentGroup)),v[b?"animate":"attr"]({d:this.haloPath(c.size)}),v.attr({"class":"highcharts-halo highcharts-color-"+e(this.colorIndex,f.colorIndex)}),v.point=this,v.attr(m({fill:this.color||f.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):v&&v.point&&v.point.haloPath&&v.animate({d:v.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});m(b.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&v(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&v(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,
c=b.options,d=b.graph,f=c.states,g=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(t([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!f[a]||!1!==f[a].enabled)&&(a&&(g=f[a].lineWidth||g+(f[a].lineWidthPlus||0)),d&&!d.dashstyle))for(g={"stroke-width":g},d.animate(g,e(b.chart.options.chart.animation,f[a]&&f[a].animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(g),c+=1},setVisible:function(a,
b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";t(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&t(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});t(c.linkedSeries,function(b){b.setVisible(a,
!1)});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();v(c,f,{redraw:b})},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);v(this,a?"select":"unselect")},drawTracker:I.drawTrackerGraph})})(N);(function(a){var E=a.Chart,C=a.each,G=a.inArray,q=a.isArray,f=a.isObject,k=a.pick,t=a.splat;E.prototype.setResponsive=function(f){var k=this.options.responsive,m=[],d=this.currentResponsive;
k&&k.rules&&C(k.rules,function(d){void 0===d._id&&(d._id=a.uniqueKey());this.matchResponsiveRule(d,m,f)},this);var g=a.merge.apply(0,a.map(m,function(d){return a.find(k.rules,function(a){return a._id===d}).chartOptions})),m=m.toString()||void 0;m!==(d&&d.ruleIds)&&(d&&this.update(d.undoOptions,f),m?(this.currentResponsive={ruleIds:m,mergedOptions:g,undoOptions:this.currentOptions(g)},this.update(g,f)):this.currentResponsive=void 0)};E.prototype.matchResponsiveRule=function(a,f){var m=a.condition;
(m.callback||function(){return this.chartWidth<=k(m.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=k(m.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=k(m.minWidth,0)&&this.chartHeight>=k(m.minHeight,0)}).call(this)&&f.push(a._id)};E.prototype.currentOptions=function(k){function m(d,g,k,c){var e;a.objectEach(d,function(a,b){if(!c&&-1<G(b,["series","xAxis","yAxis"]))for(d[b]=t(d[b]),k[b]=[],e=0;e<d[b].length;e++)g[b][e]&&(k[b][e]={},m(a[e],g[b][e],k[b][e],c+1));else f(a)?(k[b]=q(a)?[]:{},m(a,g[b]||{},
k[b],c+1)):k[b]=g[b]||null})}var u={};m(k,this.options,u,0);return u}})(N);return N});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.2 (2017-10-20)
 Exporting module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(f){var k=f.defaultOptions,z=f.doc,B=f.Chart,w=f.addEvent,I=f.removeEvent,F=f.fireEvent,p=f.createElement,C=f.discardElement,u=f.css,n=f.merge,D=f.pick,h=f.each,G=f.objectEach,r=f.extend,J=f.isTouchDevice,E=f.win,H=E.navigator.userAgent,K=f.Renderer.prototype.symbols;/Edge\/|Trident\/|MSIE /.test(H);/firefox/i.test(H);r(k.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",
downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});k.navigation={buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}};n(!0,k.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",background:"none",color:"#333333",fontSize:J?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",
color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{fill:"#ffffff",stroke:"none",padding:5}}});k.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:"printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{printChart:{textKey:"printChart",
onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}};f.post=function(a,b,e){var c=p("form",n({method:"post",action:a,enctype:"multipart/form-data"},
e),{display:"none"},z.body);G(b,function(a,b){p("input",{type:"hidden",name:b,value:a},null,c)});c.submit();C(c)};r(B.prototype,{sanitizeSVG:function(a,b){if(b&&b.exporting&&b.exporting.allowHTML){var e=a.match(/<\/svg>(.*?$)/);e&&e[1]&&(e='\x3cforeignObject x\x3d"0" y\x3d"0" width\x3d"'+b.chart.width+'" height\x3d"'+b.chart.height+'"\x3e\x3cbody xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e'+e[1]+"\x3c/body\x3e\x3c/foreignObject\x3e",a=a.replace("\x3c/svg\x3e",e+"\x3c/svg\x3e"))}a=a.replace(/zIndex="[^"]+"/g,
"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'\x3csvg xmlns:xlink\x3d"http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g," xlink:href\x3d").replace(/\n/," ").replace(/<\/svg>.*?$/,"\x3c/svg\x3e").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1\x3d"rgb($2)" $1-opacity\x3d"$3"').replace(/&nbsp;/g,
"\u00a0").replace(/&shy;/g,"\u00ad");this.ieSanitizeSVG&&(a=this.ieSanitizeSVG(a));return a},getChartHTML:function(){return this.container.innerHTML},getSVG:function(a){var b,e,c,v,m,g=n(this.options,a);e=p("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},z.body);c=this.renderTo.style.width;m=this.renderTo.style.height;c=g.exporting.sourceWidth||g.chart.width||/px$/.test(c)&&parseInt(c,10)||600;m=g.exporting.sourceHeight||g.chart.height||/px$/.test(m)&&
parseInt(m,10)||400;r(g.chart,{animation:!1,renderTo:e,forExport:!0,renderer:"SVGRenderer",width:c,height:m});g.exporting.enabled=!1;delete g.data;g.series=[];h(this.series,function(a){v=n(a.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});v.isInternal||g.series.push(v)});h(this.axes,function(a){a.userOptions.internalKey||(a.userOptions.internalKey=f.uniqueKey())});b=new f.Chart(g,this.callback);a&&h(["xAxis","yAxis","series"],function(c){var d={};a[c]&&(d[c]=a[c],
b.update(d))});h(this.axes,function(a){var c=f.find(b.axes,function(b){return b.options.internalKey===a.userOptions.internalKey}),d=a.getExtremes(),e=d.userMin,d=d.userMax;!c||void 0===e&&void 0===d||c.setExtremes(e,d,!0,!1)});c=b.getChartHTML();c=this.sanitizeSVG(c,g);g=null;b.destroy();C(e);return c},getSVGForExport:function(a,b){var e=this.options.exporting;return this.getSVG(n({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||
e.sourceHeight}}))},exportChart:function(a,b){b=this.getSVGForExport(a,b);a=n(this.options.exporting,a);f.post(a.url,{filename:a.filename||"chart",type:a.type,width:a.width||0,scale:a.scale,svg:b},a.formAttributes)},print:function(){var a=this,b=a.container,e=[],c=b.parentNode,f=z.body,m=f.childNodes,g=a.options.exporting.printMaxWidth,d,t;if(!a.isPrinting){a.isPrinting=!0;a.pointer.reset(null,0);F(a,"beforePrint");if(t=g&&a.chartWidth>g)d=[a.options.chart.width,void 0,!1],a.setSize(g,void 0,!1);
h(m,function(a,b){1===a.nodeType&&(e[b]=a.style.display,a.style.display="none")});f.appendChild(b);E.focus();E.print();setTimeout(function(){c.appendChild(b);h(m,function(a,b){1===a.nodeType&&(a.style.display=e[b])});a.isPrinting=!1;t&&a.setSize.apply(a,d);F(a,"afterPrint")},1E3)}},contextMenu:function(a,b,e,c,v,m,g){var d=this,t=d.options.navigation,k=d.chartWidth,q=d.chartHeight,n="cache-"+a,l=d[n],x=Math.max(v,m),y,A;l||(d[n]=l=p("div",{className:a},{position:"absolute",zIndex:1E3,padding:x+"px"},
d.container),y=p("div",{className:"highcharts-menu"},null,l),u(y,r({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},t.menuStyle)),A=function(){u(l,{display:"none"});g&&g.setState(0);d.openMenu=!1},d.exportEvents.push(w(l,"mouseleave",function(){l.hideTimer=setTimeout(A,500)}),w(l,"mouseenter",function(){clearTimeout(l.hideTimer)}),w(z,"mouseup",function(b){d.pointer.inClass(b.target,a)||A()})),h(b,function(a){"string"===typeof a&&(a=d.options.exporting.menuItemDefinitions[a]);
if(f.isObject(a,!0)){var b;a.separator?b=p("hr",null,null,y):(b=p("div",{className:"highcharts-menu-item",onclick:function(b){b&&b.stopPropagation();A();a.onclick&&a.onclick.apply(d,arguments)},innerHTML:a.text||d.options.lang[a.textKey]},null,y),b.onmouseover=function(){u(this,t.menuItemHoverStyle)},b.onmouseout=function(){u(this,t.menuItemStyle)},u(b,r({cursor:"pointer"},t.menuItemStyle)));d.exportDivElements.push(b)}}),d.exportDivElements.push(y,l),d.exportMenuWidth=l.offsetWidth,d.exportMenuHeight=
l.offsetHeight);b={display:"block"};e+d.exportMenuWidth>k?b.right=k-e-v-x+"px":b.left=e-x+"px";c+m+d.exportMenuHeight>q&&"top"!==g.alignOptions.verticalAlign?b.bottom=q-c-x+"px":b.top=c+m-x+"px";u(l,b);d.openMenu=!0},addButton:function(a){var b=this,e=b.renderer,c=n(b.options.navigation.buttonOptions,a),f=c.onclick,m=c.menuItems,g,d,k=c.symbolSize||12;b.btnCount||(b.btnCount=0);b.exportDivElements||(b.exportDivElements=[],b.exportSVGElements=[]);if(!1!==c.enabled){var h=c.theme,q=h.states,p=q&&q.hover,
q=q&&q.select,l;delete h.states;f?l=function(a){a.stopPropagation();f.call(b,a)}:m&&(l=function(){b.contextMenu(d.menuClassName,m,d.translateX,d.translateY,d.width,d.height,d);d.setState(2)});c.text&&c.symbol?h.paddingLeft=D(h.paddingLeft,25):c.text||r(h,{width:c.width,height:c.height,padding:0});d=e.button(c.text,0,0,l,h,p,q).addClass(a.className).attr({"stroke-linecap":"round",title:b.options.lang[c._titleKey],zIndex:3});d.menuClassName=a.menuClassName||"highcharts-menu-"+b.btnCount++;c.symbol&&
(g=e.symbol(c.symbol,c.symbolX-k/2,c.symbolY-k/2,k,k).addClass("highcharts-button-symbol").attr({zIndex:1}).add(d),g.attr({stroke:c.symbolStroke,fill:c.symbolFill,"stroke-width":c.symbolStrokeWidth||1}));d.add().align(r(c,{width:d.width,x:D(c.x,b.buttonOffset)}),!0,"spacingBox");b.buttonOffset+=(d.width+c.buttonSpacing)*("right"===c.align?-1:1);b.exportSVGElements.push(d,g)}},destroyExport:function(a){var b=a?a.target:this;a=b.exportSVGElements;var e=b.exportDivElements,c=b.exportEvents,f;a&&(h(a,
function(a,c){a&&(a.onclick=a.ontouchstart=null,f="cache-"+a.menuClassName,b[f]&&delete b[f],b.exportSVGElements[c]=a.destroy())}),a.length=0);e&&(h(e,function(a,c){clearTimeout(a.hideTimer);I(a,"mouseleave");b.exportDivElements[c]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=null;C(a)}),e.length=0);c&&(h(c,function(a){a()}),c.length=0)}});K.menu=function(a,b,e,c){return["M",a,b+2.5,"L",a+e,b+2.5,"M",a,b+c/2+.5,"L",a+e,b+c/2+.5,"M",a,b+c-1.5,"L",a+e,b+c-1.5]};B.prototype.renderExporting=function(){var a=
this,b=a.options.exporting,e=b.buttons,c=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0;a.isDirtyExporting&&a.destroyExport();c&&!1!==b.enabled&&(a.exportEvents=[],G(e,function(b){a.addButton(b)}),a.isDirtyExporting=!1);w(a,"destroy",a.destroyExport)};B.prototype.callbacks.push(function(a){a.renderExporting();w(a,"redraw",a.renderExporting);h(["exporting","navigation"],function(b){a[b]={update:function(e,c){a.isDirtyExporting=!0;n(!0,a.options[b],e);D(c,!0)&&a.redraw()}}})})})(k)});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(26);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(25)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(5);
var ctx = __webpack_require__(11);
var hide = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(12);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(50);
var toPrimitive = __webpack_require__(51);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(58);
var defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(29);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(12);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(52);
var hide = __webpack_require__(6);
var has = __webpack_require__(14);
var Iterators = __webpack_require__(9);
var $iterCreate = __webpack_require__(53);
var setToStringTag = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(61);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(16);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(12);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(11);
var invoke = __webpack_require__(73);
var html = __webpack_require__(31);
var cel = __webpack_require__(18);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(15)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(22);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.2 (2017-10-20)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(x){"object"===typeof module&&module.exports?module.exports=x:x(Highcharts)})(function(x){(function(a){var t=a.deg2rad,v=a.isNumber,w=a.pick,n=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,e=this.chart,k=2*(a.slicedOffset||0),b=e.plotWidth-2*k,e=e.plotHeight-2*k,c=a.center,c=[w(c[0],"50%"),w(c[1],"50%"),a.size||"100%",a.innerSize||0],l=Math.min(b,e),g,d;for(g=0;4>g;++g)d=c[g],a=2>g||2===g&&/%$/.test(d),c[g]=n(d,[b,e,l,c[2]][g])+(a?k:0);c[3]>c[2]&&(c[3]=c[2]);
return c},getStartAndEndRadians:function(a,e){a=v(a)?a:0;e=v(e)&&e>a&&360>e-a?e:a+360;return{start:t*(a+-90),end:t*(e+-90)}}}})(x);(function(a){function t(a,b){this.init(a,b)}var v=a.CenteredSeriesMixin,w=a.each,n=a.extend,m=a.merge,e=a.splat;n(t.prototype,{coll:"pane",init:function(a,b){this.chart=b;this.background=[];b.pane.push(this);this.setOptions(a)},setOptions:function(a){this.options=m(this.defaultOptions,this.chart.angular?{background:{}}:void 0,a)},render:function(){var a=this.options,b=
this.options.background,c=this.chart.renderer;this.group||(this.group=c.g("pane-group").attr({zIndex:a.zIndex||0}).add());this.updateCenter();if(b)for(b=e(b),a=Math.max(b.length,this.background.length||0),c=0;c<a;c++)b[c]&&this.axis?this.renderBackground(m(this.defaultBackgroundOptions,b[c]),c):this.background[c]&&(this.background[c]=this.background[c].destroy(),this.background.splice(c,1))},renderBackground:function(a,b){var c="animate";this.background[b]||(this.background[b]=this.chart.renderer.path().add(this.group),
c="attr");this.background[b][c]({d:this.axis.getPlotBandPath(a.from,a.to,a)}).attr({fill:a.backgroundColor,stroke:a.borderColor,"stroke-width":a.borderWidth,"class":"highcharts-pane "+(a.className||"")})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"#cccccc",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ffffff"],[1,"#e6e6e6"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"},
updateCenter:function(a){this.center=(a||this.axis||{}).center=v.getCenter.call(this)},update:function(a,b){m(!0,this.options,a);this.setOptions(this.options);this.render();w(this.chart.axes,function(c){c.pane===this&&(c.pane=null,c.update({},b))},this)}});a.Pane=t})(x);(function(a){var t=a.each,v=a.extend,w=a.map,n=a.merge,m=a.noop,e=a.pick,k=a.pInt,b=a.wrap,c,l,g=a.Axis.prototype;a=a.Tick.prototype;c={getOffset:m,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:m,setCategories:m,
setTitle:m};l={defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,
title:{x:4,text:null,rotation:90}},setOptions:function(b){b=this.options=n(this.defaultOptions,this.defaultRadialOptions,b);b.plotBands||(b.plotBands=[])},getOffset:function(){g.getOffset.call(this);this.chart.axisOffset[this.side]=0},getLinePath:function(b,c){b=this.center;var d=this.chart,f=e(c,b[2]/2-this.offset);this.isCircular||void 0!==c?(c=this.chart.renderer.symbols.arc(this.left+b[0],this.top+b[1],f,f,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0}),c.xBounds=[this.left+
b[0]],c.yBounds=[this.top+b[1]-f]):(c=this.postTranslate(this.angleRad,f),c=["M",b[0]+d.plotLeft,b[1]+d.plotTop,"L",c.x,c.y]);return c},setAxisTranslation:function(){g.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){if(this.autoConnect=this.isCircular&&void 0===e(this.userMax,
this.options.max)&&this.endAngleRad-this.startAngleRad===2*Math.PI)this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0},setAxisSize:function(){g.setAxisSize.call(this);this.isRadial&&(this.pane.updateCenter(this),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*e(this.sector,1)/2)},getPosition:function(b,c){return this.postTranslate(this.isCircular?this.translate(b):this.angleRad,e(this.isCircular?c:this.translate(b),
this.center[2]/2)-this.offset)},postTranslate:function(b,c){var d=this.chart,f=this.center;b=this.startAngleRad+b;return{x:d.plotLeft+f[0]+Math.cos(b)*c,y:d.plotTop+f[1]+Math.sin(b)*c}},getPlotBandPath:function(b,c,a){var d=this.center,f=this.startAngleRad,l=d[2]/2,h=[e(a.outerRadius,"100%"),a.innerRadius,e(a.thickness,10)],g=Math.min(this.offset,0),u=/%$/,m,n=this.isCircular;"polygon"===this.options.gridLineInterpolation?d=this.getPlotLinePath(b).concat(this.getPlotLinePath(c,!0)):(b=Math.max(b,
this.min),c=Math.min(c,this.max),n||(h[0]=this.translate(b),h[1]=this.translate(c)),h=w(h,function(b){u.test(b)&&(b=k(b,10)*l/100);return b}),"circle"!==a.shape&&n?(b=f+this.translate(b),c=f+this.translate(c)):(b=-Math.PI/2,c=1.5*Math.PI,m=!0),h[0]-=g,h[2]-=g,d=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],h[0],h[0],{start:Math.min(b,c),end:Math.max(b,c),innerR:e(h[1],h[0]-h[2]),open:m}));return d},getPlotLinePath:function(b,c){var d=this,f=d.center,a=d.chart,l=d.getPosition(b),g,e,
u;d.isCircular?u=["M",f[0]+a.plotLeft,f[1]+a.plotTop,"L",l.x,l.y]:"circle"===d.options.gridLineInterpolation?(b=d.translate(b))&&(u=d.getLinePath(0,b)):(t(a.xAxis,function(b){b.pane===d.pane&&(g=b)}),u=[],b=d.translate(b),f=g.tickPositions,g.autoConnect&&(f=f.concat([f[0]])),c&&(f=[].concat(f).reverse()),t(f,function(c,d){e=g.getPosition(c,b);u.push(d?"L":"M",e.x,e.y)}));return u},getTitlePosition:function(){var b=this.center,c=this.chart,a=this.options.title;return{x:c.plotLeft+b[0]+(a.x||0),y:c.plotTop+
b[1]-{high:.5,middle:.25,low:0}[a.align]*b[2]+(a.y||0)}}};b(g,"init",function(b,f,a){var d=f.angular,h=f.polar,g=a.isX,y=d&&g,m,u=f.options,k=a.pane||0,t=this.pane=f.pane&&f.pane[k],k=t&&t.options;if(d){if(v(this,y?c:l),m=!g)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else h&&(v(this,l),this.defaultRadialOptions=(m=g)?this.defaultRadialXOptions:n(this.defaultYAxisOptions,this.defaultRadialYOptions));d||h?(this.isRadial=!0,f.inverted=!1,u.chart.zoomType=null):this.isRadial=!1;t&&m&&(t.axis=
this);b.call(this,f,a);!y&&t&&(d||h)&&(b=this.options,this.angleRad=(b.angle||0)*Math.PI/180,this.startAngleRad=(k.startAngle-90)*Math.PI/180,this.endAngleRad=(e(k.endAngle,k.startAngle+360)-90)*Math.PI/180,this.offset=b.offset||0,this.isCircular=m)});b(g,"autoLabelAlign",function(b){if(!this.isRadial)return b.apply(this,[].slice.call(arguments,1))});b(a,"getPosition",function(b,c,a,l,g){var d=this.axis;return d.getPosition?d.getPosition(a):b.call(this,c,a,l,g)});b(a,"getLabelPosition",function(b,
c,a,l,g,r,y,m,u){var d=this.axis,f=r.y,h=20,p=r.align,q=(d.translate(this.pos)+d.startAngleRad+Math.PI/2)/Math.PI*180%360;d.isRadial?(b=d.getPosition(this.pos,d.center[2]/2+e(r.distance,-25)),"auto"===r.rotation?l.attr({rotation:q}):null===f&&(f=d.chart.renderer.fontMetrics(l.styles.fontSize).b-l.getBBox().height/2),null===p&&(d.isCircular?(this.label.getBBox().width>d.len*d.tickInterval/(d.max-d.min)&&(h=0),p=q>h&&q<180-h?"left":q>180+h&&q<360-h?"right":"center"):p="center",l.attr({align:p})),b.x+=
r.x,b.y+=f):b=b.call(this,c,a,l,g,r,y,m,u);return b});b(a,"getMarkPath",function(b,c,a,l,g,r,e){var d=this.axis;d.isRadial?(b=d.getPosition(this.pos,d.center[2]/2+l),c=["M",c,a,"L",b.x,b.y]):c=b.call(this,c,a,l,g,r,e);return c})})(x);(function(a){var t=a.each,v=a.pick,w=a.defined,n=a.seriesType,m=a.seriesTypes,e=a.Series.prototype,k=a.Point.prototype;n("arearange","area",{lineWidth:1,threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{series.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},
trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0}},{pointArrayMap:["low","high"],dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(b){return[b.low,b.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(b){var c=this.chart,a=this.xAxis.postTranslate(b.rectPlotX,this.yAxis.len-b.plotHigh);b.plotHighX=a.x-c.plotLeft;b.plotHigh=a.y-c.plotTop;b.plotLowX=b.plotX},translate:function(){var b=this,c=b.yAxis,a=!!b.modifyValue;m.area.prototype.translate.apply(b);
t(b.points,function(l){var d=l.low,f=l.high,h=l.plotY;null===f||null===d?(l.isNull=!0,l.plotY=null):(l.plotLow=h,l.plotHigh=c.translate(a?b.modifyValue(f,l):f,0,1,0,1),a&&(l.yBottom=l.plotHigh))});this.chart.polar&&t(this.points,function(c){b.highToXY(c);c.tooltipPos=[(c.plotHighX+c.plotLowX)/2,(c.plotHigh+c.plotLow)/2]})},getGraphPath:function(b){var c=[],a=[],g,d=m.area.prototype.getGraphPath,f,h,q;q=this.options;var p=this.chart.polar&&!1!==q.connectEnds,r=q.connectNulls,e=q.step;b=b||this.points;
for(g=b.length;g--;)f=b[g],f.isNull||p||r||b[g+1]&&!b[g+1].isNull||a.push({plotX:f.plotX,plotY:f.plotY,doCurve:!1}),h={polarPlotY:f.polarPlotY,rectPlotX:f.rectPlotX,yBottom:f.yBottom,plotX:v(f.plotHighX,f.plotX),plotY:f.plotHigh,isNull:f.isNull},a.push(h),c.push(h),f.isNull||p||r||b[g-1]&&!b[g-1].isNull||a.push({plotX:f.plotX,plotY:f.plotY,doCurve:!1});b=d.call(this,b);e&&(!0===e&&(e="left"),q.step={left:"right",center:"center",right:"left"}[e]);c=d.call(this,c);a=d.call(this,a);q.step=e;q=[].concat(b,
c);this.chart.polar||"M"!==a[0]||(a[0]="L");this.graphPath=q;this.areaPath=this.areaPath.concat(b,a);q.isArea=!0;q.xMap=b.xMap;this.areaPath.xMap=b.xMap;return q},drawDataLabels:function(){var b=this.data,c=b.length,a,g=[],d=this.options.dataLabels,f=d.align,h=d.verticalAlign,q=d.inside,p,r,y=this.chart.inverted;if(d.enabled||this._hasPointLabels){for(a=c;a--;)if(p=b[a])r=q?p.plotHigh<p.plotLow:p.plotHigh>p.plotLow,p.y=p.high,p._plotY=p.plotY,p.plotY=p.plotHigh,g[a]=p.dataLabel,p.dataLabel=p.dataLabelUpper,
p.below=r,y?f||(d.align=r?"right":"left"):h||(d.verticalAlign=r?"top":"bottom"),d.x=d.xHigh,d.y=d.yHigh;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments);for(a=c;a--;)if(p=b[a])r=q?p.plotHigh<p.plotLow:p.plotHigh>p.plotLow,p.dataLabelUpper=p.dataLabel,p.dataLabel=g[a],p.y=p.low,p.plotY=p._plotY,p.below=!r,y?f||(d.align=r?"left":"right"):h||(d.verticalAlign=r?"bottom":"top"),d.x=d.xLow,d.y=d.yLow;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments)}d.align=f;d.verticalAlign=h},alignDataLabel:function(){m.column.prototype.alignDataLabel.apply(this,
arguments)},drawPoints:function(){var b=this.points.length,c,a;e.drawPoints.apply(this,arguments);for(a=0;a<b;)c=this.points[a],c.lowerGraphic=c.graphic,c.graphic=c.upperGraphic,c._plotY=c.plotY,c._plotX=c.plotX,c.plotY=c.plotHigh,w(c.plotHighX)&&(c.plotX=c.plotHighX),a++;e.drawPoints.apply(this,arguments);for(a=0;a<b;)c=this.points[a],c.upperGraphic=c.graphic,c.graphic=c.lowerGraphic,c.plotY=c._plotY,c.plotX=c._plotX,a++},setStackedPoints:a.noop},{setState:function(){var b=this.state,c=this.series,
a=c.chart.polar;w(this.plotHigh)||(this.plotHigh=c.yAxis.toPixels(this.high,!0));w(this.plotLow)||(this.plotLow=this.plotY=c.yAxis.toPixels(this.low,!0));k.setState.apply(this,arguments);this.graphic=this.upperGraphic;this.plotY=this.plotHigh;a&&(this.plotX=this.plotHighX);this.state=b;c.stateMarkerGraphic&&(c.lowerStateMarkerGraphic=c.stateMarkerGraphic,c.stateMarkerGraphic=c.upperStateMarkerGraphic);k.setState.apply(this,arguments);this.plotY=this.plotLow;this.graphic=this.lowerGraphic;a&&(this.plotX=
this.plotLowX);c.stateMarkerGraphic&&(c.upperStateMarkerGraphic=c.stateMarkerGraphic,c.stateMarkerGraphic=c.lowerStateMarkerGraphic,c.lowerStateMarkerGraphic=void 0)},haloPath:function(){var b=this.series.chart.polar,c;this.plotY=this.plotLow;b&&(this.plotX=this.plotLowX);c=k.haloPath.apply(this,arguments);this.plotY=this.plotHigh;b&&(this.plotX=this.plotHighX);return c=c.concat(k.haloPath.apply(this,arguments))},destroy:function(){this.upperGraphic&&(this.upperGraphic=this.upperGraphic.destroy());
return k.destroy.apply(this,arguments)}})})(x);(function(a){var t=a.seriesType;t("areasplinerange","arearange",null,{getPointSpline:a.seriesTypes.spline.prototype.getPointSpline})})(x);(function(a){var t=a.defaultPlotOptions,v=a.each,w=a.merge,n=a.noop,m=a.pick,e=a.seriesType,k=a.seriesTypes.column.prototype;e("columnrange","arearange",w(t.column,t.arearange,{pointRange:null,marker:null,states:{hover:{halo:!1}}}),{translate:function(){var b=this,c=b.yAxis,a=b.xAxis,g=a.startAngleRad,d,f=b.chart,h=
b.xAxis.isRadial,q=Math.max(f.chartWidth,f.chartHeight)+999,p;k.translate.apply(b);v(b.points,function(l){var r=l.shapeArgs,e=b.options.minPointLength,u,k;l.plotHigh=p=Math.min(Math.max(-q,c.translate(l.high,0,1,0,1)),q);l.plotLow=Math.min(Math.max(-q,l.plotY),q);k=p;u=m(l.rectPlotY,l.plotY)-p;Math.abs(u)<e?(e-=u,u+=e,k-=e/2):0>u&&(u*=-1,k-=u);h?(d=l.barX+g,l.shapeType="path",l.shapeArgs={d:b.polarArc(k+u,k,d,d+l.pointWidth)}):(r.height=u,r.y=k,l.tooltipPos=f.inverted?[c.len+c.pos-f.plotLeft-k-u/
2,a.len+a.pos-f.plotTop-r.x-r.width/2,u]:[a.left-f.plotLeft+r.x+r.width/2,c.pos-f.plotTop+k+u/2,u])})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:n,getSymbol:n,crispCol:k.crispCol,drawPoints:k.drawPoints,drawTracker:k.drawTracker,getColumnMetrics:k.getColumnMetrics,pointAttribs:k.pointAttribs,animate:function(){return k.animate.apply(this,arguments)},polarArc:function(){return k.polarArc.apply(this,arguments)},translate3dPoints:function(){return k.translate3dPoints.apply(this,
arguments)},translate3dShapes:function(){return k.translate3dShapes.apply(this,arguments)}},{setState:k.pointClass.prototype.setState})})(x);(function(a){var t=a.each,v=a.isNumber,w=a.merge,n=a.pick,m=a.pInt,e=a.Series,k=a.seriesType,b=a.TrackerMixin;k("gauge","line",{dataLabels:{enabled:!0,defer:!1,y:15,borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2,borderWidth:1,borderColor:"#cccccc"},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1},{angular:!0,directTouch:!0,drawGraph:a.noop,fixedBox:!0,
forceDL:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var b=this.yAxis,a=this.options,g=b.center;this.generatePoints();t(this.points,function(c){var d=w(a.dial,c.dial),l=m(n(d.radius,80))*g[2]/200,q=m(n(d.baseLength,70))*l/100,p=m(n(d.rearLength,10))*l/100,r=d.baseWidth||3,e=d.topWidth||1,k=a.overshoot,u=b.startAngleRad+b.translate(c.y,null,null,null,!0);v(k)?(k=k/180*Math.PI,u=Math.max(b.startAngleRad-k,Math.min(b.endAngleRad+k,u))):!1===a.wrap&&(u=Math.max(b.startAngleRad,
Math.min(b.endAngleRad,u)));u=180*u/Math.PI;c.shapeType="path";c.shapeArgs={d:d.path||["M",-p,-r/2,"L",q,-r/2,l,-e/2,l,e/2,q,r/2,-p,r/2,"z"],translateX:g[0],translateY:g[1],rotation:u};c.plotX=g[0];c.plotY=g[1]})},drawPoints:function(){var b=this,a=b.yAxis.center,g=b.pivot,d=b.options,f=d.pivot,h=b.chart.renderer;t(b.points,function(c){var a=c.graphic,f=c.shapeArgs,l=f.d,g=w(d.dial,c.dial);a?(a.animate(f),f.d=l):(c.graphic=h[c.shapeType](f).attr({rotation:f.rotation,zIndex:1}).addClass("highcharts-dial").add(b.group),
c.graphic.attr({stroke:g.borderColor||"none","stroke-width":g.borderWidth||0,fill:g.backgroundColor||"#000000"}))});g?g.animate({translateX:a[0],translateY:a[1]}):(b.pivot=h.circle(0,0,n(f.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(a[0],a[1]).add(b.group),b.pivot.attr({"stroke-width":f.borderWidth||0,stroke:f.borderColor||"#cccccc",fill:f.backgroundColor||"#000000"}))},animate:function(b){var c=this;b||(t(c.points,function(b){var a=b.graphic;a&&(a.attr({rotation:180*c.yAxis.startAngleRad/
Math.PI}),a.animate({rotation:b.shapeArgs.rotation},c.options.animation))}),c.animate=null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);e.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(b,a){e.prototype.setData.call(this,b,!1);this.processData();this.generatePoints();n(a,!0)&&this.chart.redraw()},drawTracker:b&&b.drawTrackerPoint},{setState:function(b){this.state=b}})})(x);
(function(a){var t=a.each,v=a.noop,w=a.pick,n=a.seriesType,m=a.seriesTypes;n("boxplot","column",{threshold:null,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eMaximum: {point.high}\x3cbr/\x3eUpper quartile: {point.q3}\x3cbr/\x3eMedian: {point.median}\x3cbr/\x3eLower quartile: {point.q1}\x3cbr/\x3eMinimum: {point.low}\x3cbr/\x3e'},whiskerLength:"50%",fillColor:"#ffffff",lineWidth:1,medianWidth:2,states:{hover:{brightness:-.3}},
whiskerWidth:2},{pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttribs:function(a){var e=this.options,b=a&&a.color||this.color;return{fill:a.fillColor||e.fillColor||b,stroke:e.lineColor||b,"stroke-width":e.lineWidth||0}},drawDataLabels:v,translate:function(){var a=this.yAxis,k=this.pointArrayMap;m.column.prototype.translate.apply(this);t(this.points,function(b){t(k,function(c){null!==b[c]&&(b[c+"Plot"]=a.translate(b[c],
0,1,0,1))})})},drawPoints:function(){var a=this,k=a.options,b=a.chart.renderer,c,l,g,d,f,h,q=0,p,r,m,n,u=!1!==a.doQuartiles,v,A=a.options.whiskerLength;t(a.points,function(e){var y=e.graphic,t=y?"animate":"attr",J=e.shapeArgs,x={},C={},H={},I=e.color||a.color;void 0!==e.plotY&&(p=J.width,r=Math.floor(J.x),m=r+p,n=Math.round(p/2),c=Math.floor(u?e.q1Plot:e.lowPlot),l=Math.floor(u?e.q3Plot:e.lowPlot),g=Math.floor(e.highPlot),d=Math.floor(e.lowPlot),y||(e.graphic=y=b.g("point").add(a.group),e.stem=b.path().addClass("highcharts-boxplot-stem").add(y),
A&&(e.whiskers=b.path().addClass("highcharts-boxplot-whisker").add(y)),u&&(e.box=b.path(void 0).addClass("highcharts-boxplot-box").add(y)),e.medianShape=b.path(void 0).addClass("highcharts-boxplot-median").add(y)),x.stroke=e.stemColor||k.stemColor||I,x["stroke-width"]=w(e.stemWidth,k.stemWidth,k.lineWidth),x.dashstyle=e.stemDashStyle||k.stemDashStyle,e.stem.attr(x),A&&(C.stroke=e.whiskerColor||k.whiskerColor||I,C["stroke-width"]=w(e.whiskerWidth,k.whiskerWidth,k.lineWidth),e.whiskers.attr(C)),u&&
(y=a.pointAttribs(e),e.box.attr(y)),H.stroke=e.medianColor||k.medianColor||I,H["stroke-width"]=w(e.medianWidth,k.medianWidth,k.lineWidth),e.medianShape.attr(H),h=e.stem.strokeWidth()%2/2,q=r+n+h,e.stem[t]({d:["M",q,l,"L",q,g,"M",q,c,"L",q,d]}),u&&(h=e.box.strokeWidth()%2/2,c=Math.floor(c)+h,l=Math.floor(l)+h,r+=h,m+=h,e.box[t]({d:["M",r,l,"L",r,c,"L",m,c,"L",m,l,"L",r,l,"z"]})),A&&(h=e.whiskers.strokeWidth()%2/2,g+=h,d+=h,v=/%$/.test(A)?n*parseFloat(A)/100:A/2,e.whiskers[t]({d:["M",q-v,g,"L",q+v,
g,"M",q-v,d,"L",q+v,d]})),f=Math.round(e.medianPlot),h=e.medianShape.strokeWidth()%2/2,f+=h,e.medianShape[t]({d:["M",r,f,"L",m,f]}))})},setStackedPoints:v})})(x);(function(a){var t=a.each,v=a.noop,w=a.seriesType,n=a.seriesTypes;w("errorbar","boxplot",{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.low}\x3c/b\x3e - \x3cb\x3e{point.high}\x3c/b\x3e\x3cbr/\x3e'},whiskerWidth:null},{type:"errorbar",
pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:n.arearange?function(){var a=this.pointValKey;n.arearange.prototype.drawDataLabels.call(this);t(this.data,function(e){e.y=e[a]})}:v,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||n.column.prototype.getColumnMetrics.call(this)}})})(x);(function(a){var t=a.correctFloat,v=a.isNumber,w=a.pick,n=a.Point,m=a.Series,e=a.seriesType,k=a.seriesTypes;
e("waterfall","column",{dataLabels:{inside:!0},lineWidth:1,lineColor:"#333333",dashStyle:"dot",borderColor:"#333333",states:{hover:{lineWidthPlus:0}}},{pointValKey:"y",translate:function(){var b=this.options,c=this.yAxis,a,g,d,f,h,e,p,r,m,n,u=w(b.minPointLength,5),v=u/2,x=b.threshold,D=b.stacking,z;k.column.prototype.translate.apply(this);r=m=x;g=this.points;a=0;for(b=g.length;a<b;a++)d=g[a],p=this.processedYData[a],f=d.shapeArgs,h=D&&c.stacks[(this.negStacks&&p<x?"-":"")+this.stackKey],z=this.getStackIndicator(z,
d.x,this.index),n=h?h[d.x].points[z.key]:[0,p],d.isSum?d.y=t(p):d.isIntermediateSum&&(d.y=t(p-m)),e=Math.max(r,r+d.y)+n[0],f.y=c.translate(e,0,1,0,1),d.isSum?(f.y=c.translate(n[1],0,1,0,1),f.height=Math.min(c.translate(n[0],0,1,0,1),c.len)-f.y):d.isIntermediateSum?(f.y=c.translate(n[1],0,1,0,1),f.height=Math.min(c.translate(m,0,1,0,1),c.len)-f.y,m=n[1]):(f.height=0<p?c.translate(r,0,1,0,1)-f.y:c.translate(r,0,1,0,1)-c.translate(r-p,0,1,0,1),r+=h&&h[d.x]?h[d.x].total:p),0>f.height&&(f.y+=f.height,
f.height*=-1),d.plotY=f.y=Math.round(f.y)-this.borderWidth%2/2,f.height=Math.max(Math.round(f.height),.001),d.yBottom=f.y+f.height,f.height<=u&&!d.isNull?(f.height=u,f.y-=v,d.plotY=f.y,d.minPointLengthOffset=0>d.y?-v:v):d.minPointLengthOffset=0,f=d.plotY+(d.negative?f.height:0),this.chart.inverted?d.tooltipPos[0]=c.len-f:d.tooltipPos[1]=f},processData:function(b){var c=this.yData,a=this.options.data,e,d=c.length,f,h,q,p,r,k;h=f=q=p=this.options.threshold||0;for(k=0;k<d;k++)r=c[k],e=a&&a[k]?a[k]:{},
"sum"===r||e.isSum?c[k]=t(h):"intermediateSum"===r||e.isIntermediateSum?c[k]=t(f):(h+=r,f+=r),q=Math.min(h,q),p=Math.max(h,p);m.prototype.processData.call(this,b);this.options.stacking||(this.dataMin=q,this.dataMax=p)},toYData:function(b){return b.isSum?0===b.x?null:"sum":b.isIntermediateSum?0===b.x?null:"intermediateSum":b.y},pointAttribs:function(b,a){var c=this.options.upColor;c&&!b.options.color&&(b.color=0<b.y?c:null);b=k.column.prototype.pointAttribs.call(this,b,a);delete b.dashstyle;return b},
getGraphPath:function(){return["M",0,0]},getCrispPath:function(){var b=this.data,a=b.length,e=this.graph.strokeWidth()+this.borderWidth,e=Math.round(e)%2/2,g=this.yAxis.reversed,d=[],f,h,q;for(q=1;q<a;q++){h=b[q].shapeArgs;f=b[q-1].shapeArgs;h=["M",f.x+f.width,f.y+b[q-1].minPointLengthOffset+e,"L",h.x,f.y+b[q-1].minPointLengthOffset+e];if(0>b[q-1].y&&!g||0<b[q-1].y&&g)h[2]+=f.height,h[5]+=f.height;d=d.concat(h)}return d},drawGraph:function(){m.prototype.drawGraph.call(this);this.graph.attr({d:this.getCrispPath()})},
setStackedPoints:function(){var b=this.options,a,e;m.prototype.setStackedPoints.apply(this,arguments);a=this.stackedYData?this.stackedYData.length:0;for(e=1;e<a;e++)b.data[e].isSum||b.data[e].isIntermediateSum||(this.stackedYData[e]+=this.stackedYData[e-1])},getExtremes:function(){if(this.options.stacking)return m.prototype.getExtremes.apply(this,arguments)}},{getClassName:function(){var b=n.prototype.getClassName.call(this);this.isSum?b+=" highcharts-sum":this.isIntermediateSum&&(b+=" highcharts-intermediate-sum");
return b},isValid:function(){return v(this.y,!0)||this.isSum||this.isIntermediateSum}})})(x);(function(a){var t=a.Series,v=a.seriesType,w=a.seriesTypes;v("polygon","scatter",{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0},{type:"polygon",getGraphPath:function(){for(var a=t.prototype.getGraphPath.call(this),m=a.length+1;m--;)(m===a.length||"M"===a[m])&&0<m&&a.splice(m,0,"z");return this.areaPath=a},drawGraph:function(){this.options.fillColor=
this.color;w.area.prototype.drawGraph.call(this)},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawTracker:t.prototype.drawTracker,setStackedPoints:a.noop})})(x);(function(a){var t=a.arrayMax,v=a.arrayMin,w=a.Axis,n=a.color,m=a.each,e=a.isNumber,k=a.noop,b=a.pick,c=a.pInt,l=a.Point,g=a.Series,d=a.seriesType,f=a.seriesTypes;d("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1,radius:null,states:{hover:{radiusPlus:0}},
symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],specialGroup:"group",bubblePadding:!0,zoneAxis:"z",directTouch:!0,pointAttribs:function(a,c){var d=b(this.options.marker.fillOpacity,.5);a=g.prototype.pointAttribs.call(this,a,c);1!==d&&(a.fill=n(a.fill).setOpacity(d).get("rgba"));
return a},getRadii:function(b,a,c,d){var f,e,h,g=this.zData,l=[],p=this.options,r="width"!==p.sizeBy,q=p.zThreshold,k=a-b;e=0;for(f=g.length;e<f;e++)h=g[e],p.sizeByAbsoluteValue&&null!==h&&(h=Math.abs(h-q),a=Math.max(a-q,Math.abs(b-q)),b=0),null===h?h=null:h<b?h=c/2-1:(h=0<k?(h-b)/k:.5,r&&0<=h&&(h=Math.sqrt(h)),h=Math.ceil(c+h*(d-c))/2),l.push(h);this.radii=l},animate:function(b){var a=this.options.animation;b||(m(this.points,function(b){var c=b.graphic,d;c&&c.width&&(d={x:c.x,y:c.y,width:c.width,
height:c.height},c.attr({x:b.plotX,y:b.plotY,width:1,height:1}),c.animate(d,a))}),this.animate=null)},translate:function(){var b,c=this.data,d,g,l=this.radii;f.scatter.prototype.translate.call(this);for(b=c.length;b--;)d=c[b],g=l?l[b]:0,e(g)&&g>=this.minPxSize/2?(d.marker=a.extend(d.marker,{radius:g,width:2*g,height:2*g}),d.dlBox={x:d.plotX-g,y:d.plotY-g,width:2*g,height:2*g}):d.shapeArgs=d.plotY=d.dlBox=void 0},alignDataLabel:f.column.prototype.alignDataLabel,buildKDTree:k,applyZones:k},{haloPath:function(b){return l.prototype.haloPath.call(this,
0===b?0:(this.marker?this.marker.radius||0:0)+b)},ttBelow:!1});w.prototype.beforePadding=function(){var a=this,d=this.len,f=this.chart,g=0,l=d,k=this.isXAxis,n=k?"xData":"yData",w=this.min,x={},D=Math.min(f.plotWidth,f.plotHeight),z=Number.MAX_VALUE,E=-Number.MAX_VALUE,F=this.max-w,B=d/F,G=[];m(this.series,function(d){var e=d.options;!d.bubblePadding||!d.visible&&f.options.chart.ignoreHiddenSeries||(a.allowZoomOutside=!0,G.push(d),k&&(m(["minSize","maxSize"],function(b){var a=e[b],d=/%$/.test(a),
a=c(a);x[b]=d?D*a/100:a}),d.minPxSize=x.minSize,d.maxPxSize=Math.max(x.maxSize,x.minSize),d=d.zData,d.length&&(z=b(e.zMin,Math.min(z,Math.max(v(d),!1===e.displayNegative?e.zThreshold:-Number.MAX_VALUE))),E=b(e.zMax,Math.max(E,t(d))))))});m(G,function(b){var c=b[n],d=c.length,f;k&&b.getRadii(z,E,b.minPxSize,b.maxPxSize);if(0<F)for(;d--;)e(c[d])&&a.dataMin<=c[d]&&c[d]<=a.dataMax&&(f=b.radii[d],g=Math.min((c[d]-w)*B-f,g),l=Math.max((c[d]-w)*B+f,l))});G.length&&0<F&&!this.isLog&&(l-=d,B*=(d+g-l)/d,m([["min",
"userMin",g],["max","userMax",l]],function(c){void 0===b(a.options[c[0]],a[c[1]])&&(a[c[0]]+=c[2]/B)}))}})(x);(function(a){function t(b,a){var c=this.chart,e=this.options.animation,d=this.group,f=this.markerGroup,h=this.xAxis.center,k=c.plotLeft,p=c.plotTop;c.polar?c.renderer.isSVG&&(!0===e&&(e={}),a?(b={translateX:h[0]+k,translateY:h[1]+p,scaleX:.001,scaleY:.001},d.attr(b),f&&f.attr(b)):(b={translateX:k,translateY:p,scaleX:1,scaleY:1},d.animate(b,e),f&&f.animate(b,e),this.animate=null)):b.call(this,
a)}var v=a.each,w=a.pick,n=a.seriesTypes,m=a.wrap,e=a.Series.prototype,k=a.Pointer.prototype;e.searchPointByAngle=function(b){var a=this.chart,e=this.xAxis.pane.center;return this.searchKDTree({clientX:180+-180/Math.PI*Math.atan2(b.chartX-e[0]-a.plotLeft,b.chartY-e[1]-a.plotTop)})};e.getConnectors=function(b,a,e,g){var c,f,h,l,k,m,n,t;f=g?1:0;c=0<=a&&a<=b.length-1?a:0>a?b.length-1+a:0;a=0>c-1?b.length-(1+f):c-1;f=c+1>b.length-1?f:c+1;h=b[a];f=b[f];l=h.plotX;h=h.plotY;k=f.plotX;m=f.plotY;f=b[c].plotX;
c=b[c].plotY;l=(1.5*f+l)/2.5;h=(1.5*c+h)/2.5;k=(1.5*f+k)/2.5;n=(1.5*c+m)/2.5;m=Math.sqrt(Math.pow(l-f,2)+Math.pow(h-c,2));t=Math.sqrt(Math.pow(k-f,2)+Math.pow(n-c,2));l=Math.atan2(h-c,l-f);n=Math.PI/2+(l+Math.atan2(n-c,k-f))/2;Math.abs(l-n)>Math.PI/2&&(n-=Math.PI);l=f+Math.cos(n)*m;h=c+Math.sin(n)*m;k=f+Math.cos(Math.PI+n)*t;n=c+Math.sin(Math.PI+n)*t;f={rightContX:k,rightContY:n,leftContX:l,leftContY:h,plotX:f,plotY:c};e&&(f.prevPointCont=this.getConnectors(b,a,!1,g));return f};m(e,"buildKDTree",
function(b){this.chart.polar&&(this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.options.findNearestPointBy="xy");b.apply(this)});e.toXY=function(b){var a,e=this.chart,g=b.plotX;a=b.plotY;b.rectPlotX=g;b.rectPlotY=a;a=this.xAxis.postTranslate(b.plotX,this.yAxis.len-a);b.plotX=b.polarPlotX=a.x-e.plotLeft;b.plotY=b.polarPlotY=a.y-e.plotTop;this.kdByAngle?(e=(g/Math.PI*180+this.xAxis.pane.options.startAngle)%360,0>e&&(e+=360),b.clientX=e):b.clientX=b.plotX};n.spline&&(m(n.spline.prototype,
"getPointSpline",function(b,a,e,g){this.chart.polar?g?(b=this.getConnectors(a,g,!0,this.connectEnds),b=["C",b.prevPointCont.rightContX,b.prevPointCont.rightContY,b.leftContX,b.leftContY,b.plotX,b.plotY]):b=["M",e.plotX,e.plotY]:b=b.call(this,a,e,g);return b}),n.areasplinerange&&(n.areasplinerange.prototype.getPointSpline=n.spline.prototype.getPointSpline));m(e,"translate",function(b){var a=this.chart;b.call(this);if(a.polar&&(this.kdByAngle=a.tooltip&&a.tooltip.shared,!this.preventPostTranslate))for(b=
this.points,a=b.length;a--;)this.toXY(b[a])});m(e,"getGraphPath",function(b,a){var c=this,e,d,f;if(this.chart.polar){a=a||this.points;for(e=0;e<a.length;e++)if(!a[e].isNull){d=e;break}!1!==this.options.connectEnds&&void 0!==d&&(this.connectEnds=!0,a.splice(a.length,0,a[d]),f=!0);v(a,function(b){void 0===b.polarPlotY&&c.toXY(b)})}e=b.apply(this,[].slice.call(arguments,1));f&&a.pop();return e});m(e,"animate",t);n.column&&(n=n.column.prototype,n.polarArc=function(b,a,e,g){var c=this.xAxis.center,f=this.yAxis.len;
return this.chart.renderer.symbols.arc(c[0],c[1],f-a,null,{start:e,end:g,innerR:f-w(b,f)})},m(n,"animate",t),m(n,"translate",function(b){var a=this.xAxis,e=a.startAngleRad,g,d,f;this.preventPostTranslate=!0;b.call(this);if(a.isRadial)for(g=this.points,f=g.length;f--;)d=g[f],b=d.barX+e,d.shapeType="path",d.shapeArgs={d:this.polarArc(d.yBottom,d.plotY,b,b+d.pointWidth)},this.toXY(d),d.tooltipPos=[d.plotX,d.plotY],d.ttBelow=d.plotY>a.center[1]}),m(n,"alignDataLabel",function(a,c,l,g,d,f){this.chart.polar?
(a=c.rectPlotX/Math.PI*180,null===g.align&&(g.align=20<a&&160>a?"left":200<a&&340>a?"right":"center"),null===g.verticalAlign&&(g.verticalAlign=45>a||315<a?"bottom":135<a&&225>a?"top":"middle"),e.alignDataLabel.call(this,c,l,g,d,f)):a.call(this,c,l,g,d,f)}));m(k,"getCoordinates",function(a,c){var b=this.chart,e={xAxis:[],yAxis:[]};b.polar?v(b.axes,function(a){var d=a.isXAxis,g=a.center,k=c.chartX-g[0]-b.plotLeft,g=c.chartY-g[1]-b.plotTop;e[d?"xAxis":"yAxis"].push({axis:a,value:a.translate(d?Math.PI-
Math.atan2(k,g):Math.sqrt(Math.pow(k,2)+Math.pow(g,2)),!0)})}):e=a.call(this,c);return e});m(a.Chart.prototype,"getAxes",function(b){this.pane||(this.pane=[]);v(a.splat(this.options.pane),function(b){new a.Pane(b,this)},this);b.call(this)});m(a.Chart.prototype,"drawChartBox",function(a){a.call(this);v(this.pane,function(a){a.render()})});m(a.Chart.prototype,"get",function(b,c){return a.find(this.pane,function(a){return a.options.id===c})||b.call(this,c)})})(x)});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chart = __webpack_require__(40);

var _chart2 = _interopRequireDefault(_chart);

var _chart3 = __webpack_require__(80);

var _chart4 = _interopRequireDefault(_chart3);

var _chart5 = __webpack_require__(81);

var _chart6 = _interopRequireDefault(_chart5);

var _chart7 = __webpack_require__(82);

var _chart8 = _interopRequireDefault(_chart7);

var _chart9 = __webpack_require__(83);

var _chart10 = _interopRequireDefault(_chart9);

var _chart11 = __webpack_require__(84);

var _chart12 = _interopRequireDefault(_chart11);

var _chart13 = __webpack_require__(85);

var _chart14 = _interopRequireDefault(_chart13);

var _chart15 = __webpack_require__(87);

var _chart16 = _interopRequireDefault(_chart15);

var _chart17 = __webpack_require__(88);

var _chart18 = _interopRequireDefault(_chart17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  (0, _chart2.default)();
  (0, _chart4.default)();
  (0, _chart6.default)();
  (0, _chart8.default)();
  (0, _chart10.default)();
  (0, _chart12.default)();
  (0, _chart14.default)();
  (0, _chart16.default)();
  (0, _chart18.default)();
  document.getElementById('randomValues').addEventListener('click', _chart.randomValuesChart1);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(41);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(44);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var fetchRandom = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('../random-bar-chart.php');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            return _context.abrupt('return', _context.sent);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchRandom() {
    return _ref.apply(this, arguments);
  };
}();

var chart1 = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var data;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetchRandom();

          case 2:
            data = _context2.sent;

            Highcharts.chart('card-1', {
              chart: {
                type: 'bar'
              },
              title: {
                text: 'Fruit Consumption'
              },
              xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
              },
              yAxis: {
                title: {
                  text: 'Fruit eaten'
                }
              },
              series: [{
                name: 'Jane',
                data: data.jane
              }, {
                name: 'John',
                data: data.john
              }]
            });

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function chart1() {
    return _ref2.apply(this, arguments);
  };
}();

exports.randomValuesChart1 = randomValuesChart1;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Highcharts = __webpack_require__(2);
__webpack_require__(3)(Highcharts);

function randomValuesChart1() {
  chart1();
}

;

;

exports.default = chart1;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(43);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(45);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(63);
__webpack_require__(67);
__webpack_require__(78);
__webpack_require__(79);
module.exports = __webpack_require__(5).Promise;


/***/ }),
/* 47 */
/***/ (function(module, exports) {



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(49)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(23)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var defined = __webpack_require__(17);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(25)(function () {
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(54);
var descriptor = __webpack_require__(26);
var setToStringTag = __webpack_require__(21);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(55);
var enumBugKeys = __webpack_require__(30);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(18)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(31).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(56);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(57);
var enumBugKeys = __webpack_require__(30);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(14);
var toIObject = __webpack_require__(19);
var arrayIndexOf = __webpack_require__(59)(false);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(27);
var toAbsoluteIndex = __webpack_require__(60);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(14);
var toObject = __webpack_require__(62);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
var global = __webpack_require__(0);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(9);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(65);
var step = __webpack_require__(66);
var Iterators = __webpack_require__(9);
var toIObject = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(23)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var global = __webpack_require__(0);
var ctx = __webpack_require__(11);
var classof = __webpack_require__(32);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(7);
var aFunction = __webpack_require__(12);
var anInstance = __webpack_require__(68);
var forOf = __webpack_require__(69);
var speciesConstructor = __webpack_require__(33);
var task = __webpack_require__(34).set;
var microtask = __webpack_require__(74)();
var newPromiseCapabilityModule = __webpack_require__(22);
var perform = __webpack_require__(35);
var promiseResolve = __webpack_require__(36);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(75)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(21)($Promise, PROMISE);
__webpack_require__(76)(PROMISE);
Wrapper = __webpack_require__(5)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(77)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(11);
var call = __webpack_require__(70);
var isArrayIter = __webpack_require__(71);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(27);
var getIterFn = __webpack_require__(72);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(9);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(32);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(9);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(34).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(15)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(6);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(5);
var dP = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(5);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(33);
var promiseResolve = __webpack_require__(36);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(22);
var perform = __webpack_require__(35);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Highcharts = __webpack_require__(2);
__webpack_require__(3)(Highcharts);

function chart2() {
    Highcharts.chart('card-2', {

        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },

        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },

        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },

        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}

exports.default = chart2;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Highcharts = __webpack_require__(2);
__webpack_require__(3)(Highcharts);

function chart3() {
    var categories = ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100 + '];

    Highcharts.chart('card-3', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Population pyramid for Germany, 2015'
        },
        subtitle: {
            text: 'Source: <a href="http://populationpyramid.net/germany/2015/">Population Pyramids of the World from 1950 to 2100</a>'
        },
        xAxis: [{
            categories: categories,
            reversed: false,
            labels: {
                step: 1
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0,
            labels: {
                step: 1
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function formatter() {
                    return Math.abs(this.value) + '%';
                }
            }
        },

        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },

        tooltip: {
            formatter: function formatter() {
                return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' + 'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
            }
        },

        series: [{
            name: 'Male',
            data: [-2.2, -2.2, -2.3, -2.5, -2.7, -3.1, -3.2, -3.0, -3.2, -4.3, -4.4, -3.6, -3.1, -2.4, -2.5, -2.3, -1.2, -0.6, -0.2, -0.0, -0.0]
        }, {
            name: 'Female',
            data: [2.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9, 3.1, 4.1, 4.3, 3.6, 3.4, 2.6, 2.9, 2.9, 1.8, 1.2, 0.6, 0.1, 0.0]
        }]
    });
}

exports.default = chart3;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Highcharts = __webpack_require__(2);
__webpack_require__(3)(Highcharts);

function chart4() {
    Highcharts.chart('card-4', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: Highcharts.theme && Highcharts.theme.contrastTextColor || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'IE',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Other',
                y: 0.2
            }]
        }]
    });
}

exports.default = chart4;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Highcharts = __webpack_require__(2);
__webpack_require__(3)(Highcharts);

function chart5() {
    Highcharts.chart('card-5', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Height Versus Weight of 507 Individuals by Gender'
        },
        subtitle: {
            text: 'Source: Heinz  2003'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Height (cm)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Weight (kg)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: Highcharts.theme && Highcharts.theme.legendBackgroundColor || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cm, {point.y} kg'
                }
            }
        },
        series: [{
            name: 'Female',
            color: 'rgba(223, 83, 83, .5)',
            data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6], [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2], [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0], [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8], [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8], [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0], [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8], [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6], [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3], [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8], [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3], [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3], [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0], [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7], [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5], [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2], [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8], [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9], [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2], [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4], [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4], [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2], [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0], [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0], [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4], [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4], [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5], [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5], [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2], [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2], [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3], [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5], [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4], [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6], [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8], [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1], [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5], [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2], [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6], [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0], [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0], [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9], [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1], [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4], [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7], [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5], [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8], [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0], [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9], [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6], [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8], [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

        }, {
            name: 'Male',
            color: 'rgba(119, 152, 191, .5)',
            data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8], [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6], [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0], [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9], [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8], [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9], [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1], [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1], [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6], [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1], [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2], [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2], [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0], [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2], [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2], [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9], [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9], [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0], [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3], [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7], [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5], [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3], [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1], [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0], [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2], [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1], [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6], [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1], [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5], [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1], [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5], [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5], [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9], [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1], [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8], [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5], [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4], [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5], [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6], [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7], [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5], [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6], [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7], [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0], [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3], [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3], [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9], [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1], [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1], [180.3, 83.2], [180.3, 83.2]]
        }]
    });
}

exports.default = chart5;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Highcharts = __webpack_require__(2);
__webpack_require__(37)(Highcharts);
__webpack_require__(3)(Highcharts);

function chart6() {
    Highcharts.chart('card-6', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: 'Speedometer'
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [[0, '#FFF'], [1, '#333']]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [[0, '#333'], [1, '#FFF']]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }]
        },

        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]

    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);

                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }

                point.update(newVal);
            }, 3000);
        }
    });
}

exports.default = chart6;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Highcharts = __webpack_require__(2);
__webpack_require__(86)(Highcharts);
__webpack_require__(3)(Highcharts);

function chart7() {
    var data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3];

    Highcharts.chart('card-7', {

        title: {
            text: 'Bell curve'
        },

        xAxis: [{
            title: { text: 'Data' }
        }, {
            title: { text: 'Bell curve' },
            opposite: true
        }],

        yAxis: [{
            title: { text: 'Data' }
        }, {
            title: { text: 'Bell curve' },
            opposite: true
        }],

        series: [{
            name: 'Bell curve',
            type: 'bellcurve',
            xAxis: 1,
            yAxis: 1,
            baseSeries: 1,
            zIndex: -1
        }, {
            name: 'Data',
            type: 'scatter',
            data: data,
            marker: {
                radius: 1.5
            }
        }]
    });
}

exports.default = chart7;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

/*
  Highcharts JS v6.0.2 (2017-10-20)

 (c) 2010-2017 Highsoft AS
 Author: Sebastian Domas

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?module.exports=b:b(Highcharts)})(function(b){var t=function(a){var b=a.each,g=a.Series,k=a.addEvent,n=a.fireEvent,d=a.wrap,h={init:function(){g.prototype.init.apply(this,arguments);this.initialised=!1;this.baseSeries=null;this.eventRemovers=[];this.addEvents()},setDerivedData:a.noop,setBaseSeries:function(){var l=this.chart,a=this.options.baseSeries;this.baseSeries=a&&(l.series[a]||l.get(a))||null},addEvents:function(){var a=this,e;e=k(this.chart,
"seriesLinked",function(){a.setBaseSeries();a.baseSeries&&!a.initialised&&(a.setDerivedData(),a.addBaseSeriesEvents(),a.initialised=!0)});this.eventRemovers.push(e)},addBaseSeriesEvents:function(){var a=this,e,b;e=k(a.baseSeries,"updatedData",function(){a.setDerivedData()});b=k(a.baseSeries,"destroy",function(){a.baseSeries=null;a.initialised=!1});a.eventRemovers.push(e,b)},destroy:function(){b(this.eventRemovers,function(a){a()});g.prototype.destroy.apply(this,arguments)}};d(a.Chart.prototype,"linkSeries",
function(a){a.call(this);n(this,"seriesLinked")});return h}(b);(function(a,b){function g(a){return function(m){return Math.floor(m/a)*a}}var k=a.each,n=a.objectEach,d=a.seriesType,h=a.correctFloat,l=a.isNumber,e=a.arrayMax,p=a.arrayMin;a=a.merge;var c={"square-root":function(a){return Math.round(Math.sqrt(a.options.data.length))},sturges:function(a){return Math.ceil(Math.log(a.options.data.length)*Math.LOG2E)},rice:function(a){return Math.ceil(2*Math.pow(a.options.data.length,1/3))}};d("histogram",
"column",{binsNumber:"square-root",binWidth:void 0,pointPadding:0,groupPadding:0,grouping:!1,pointPlacement:"between",tooltip:{headerFormat:"",pointFormat:'\x3cspan style\x3d"font-size:10px"\x3e{point.x} - {point.x2}\x3c/span\x3e\x3cbr/\x3e\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name} \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e'}},a(b,{setDerivedData:function(){var a=this.derivedData(this.baseSeries.yData,this.binsNumber(),this.options.binWidth);this.setData(a,!1)},derivedData:function(a,
f,c){var m=e(a),b=p(a),q={},d=[],r;c=this.binWidth=l(c)?c:(m-b)/f;r=g(c);for(f=r(b);f<=m;f+=c)q[h(f)]=0;k(a,function(a){a=h(r(a));q[a]++});n(q,function(a,m){d.push({x:Number(m),y:a,x2:h(Number(m)+c)})});d.sort(function(a,c){return a.x-c.x});return d},binsNumber:function(){var a=this.options.binsNumber,f=c[a]||"function"===typeof a;return Math.ceil(f&&f(this.baseSeries)||(l(a)?a:c["square-root"](this.baseSeries)))}}))})(b,t);(function(a,b){function g(a){var c=a.length;a=p(a,function(a,c){return a+
c},0);return 0<c&&a/c}function k(a,b){var c=a.length;b=l(b)?b:g(a);a=p(a,function(a,c){c-=b;return a+c*c},0);return 1<c&&Math.sqrt(a/(c-1))}function n(a,b,f){a-=b;return Math.exp(-(a*a)/(2*f*f))/(f*Math.sqrt(2*Math.PI))}var d=a.seriesType,h=a.correctFloat,l=a.isNumber,e=a.merge,p=a.reduce;d("bellcurve","areaspline",{intervals:3,pointsInInterval:3,marker:{enabled:!1}},e(b,{setMean:function(){this.mean=h(g(this.baseSeries.yData))},setStandardDeviation:function(){this.standardDeviation=h(k(this.baseSeries.yData,
this.mean))},setDerivedData:function(){1<this.baseSeries.yData.length&&(this.setMean(),this.setStandardDeviation(),this.setData(this.derivedData(this.mean,this.standardDeviation),!1))},derivedData:function(a,b){var c=this.options.intervals,d=this.options.pointsInInterval,e=a-c*b,c=c*d*2+1,d=b/d,h=[],g;for(g=0;g<c;g++)h.push([e,n(e,a,b)]),e+=d;return h}}))})(b,t)});


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Highcharts = __webpack_require__(2);
__webpack_require__(3)(Highcharts);

function chart8() {
    Highcharts.chart('card-8', {

        chart: {
            type: 'columnrange',
            inverted: true
        },

        title: {
            text: 'Temperature variation by month'
        },

        subtitle: {
            text: 'Observed in Vik i Sogn, Norway'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            title: {
                text: 'Temperature ( °C )'
            }
        },

        tooltip: {
            valueSuffix: '°C'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function formatter() {
                        return this.y + '°C';
                    }
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Temperatures',
            data: [[-9.7, 9.4], [-8.7, 6.5], [-3.5, 9.4], [-1.4, 19.9], [0.0, 22.6], [2.9, 29.5], [9.2, 30.7], [7.3, 26.5], [4.4, 18.0], [-3.1, 11.4], [-5.2, 10.4], [-13.5, 9.8]]
        }]

    });
}

exports.default = chart8;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Highcharts = __webpack_require__(2);
__webpack_require__(37)(Highcharts);
__webpack_require__(89)(Highcharts);
__webpack_require__(3)(Highcharts);

function chart9() {
    var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: Highcharts.theme && Highcharts.theme.background2 || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [[0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The speed gauge
    var chartSpeed = Highcharts.chart('card-9', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 200,
            title: {
                text: 'Speed'
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Speed',
            data: [80],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' + (Highcharts.theme && Highcharts.theme.contrastTextColor || 'black') + '">{y}</span><br/>' + '<span style="font-size:12px;color:silver">km/h</span></div>'
            },
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]

    }));

    // Bring life to the dials
    setInterval(function () {
        // Speed
        var point, newVal, inc;

        if (chartSpeed) {
            point = chartSpeed.series[0].points[0];
            inc = Math.round((Math.random() - 0.5) * 100);
            newVal = point.y + inc;

            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }

            point.update(newVal);
        }
    }, 2000);
}

exports.default = chart9;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

/*
  Highcharts JS v6.0.2 (2017-10-20)
 Solid angular gauge module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(l){"object"===typeof module&&module.exports?module.exports=l:l(Highcharts)})(function(l){(function(e){var l=e.pInt,u=e.pick,m=e.each,r=e.isNumber,w=e.wrap,v;w(e.Renderer.prototype.symbols,"arc",function(a,f,d,c,e,b){a=a(f,d,c,e,b);b.rounded&&(c=((b.r||c)-b.innerR)/2,b=["A",c,c,0,1,1,a[12],a[13]],a.splice.apply(a,[a.length-1,0].concat(["A",c,c,0,1,1,a[1],a[2]])),a.splice.apply(a,[11,3].concat(b)));return a});v={initDataClasses:function(a){var f=this.chart,d,c=0,t=this.options;this.dataClasses=
d=[];m(a.dataClasses,function(b,h){b=e.merge(b);d.push(b);b.color||("category"===t.dataClassColor?(h=f.options.colors,b.color=h[c++],c===h.length&&(c=0)):b.color=e.color(t.minColor).tweenTo(e.color(t.maxColor),h/(a.dataClasses.length-1)))})},initStops:function(a){this.stops=a.stops||[[0,this.options.minColor],[1,this.options.maxColor]];m(this.stops,function(a){a.color=e.color(a[1])})},toColor:function(a,f){var d=this.stops,c,e,b=this.dataClasses,h,g;if(b)for(g=b.length;g--;){if(h=b[g],c=h.from,d=
h.to,(void 0===c||a>=c)&&(void 0===d||a<=d)){e=h.color;f&&(f.dataClass=g);break}}else{this.isLog&&(a=this.val2lin(a));a=1-(this.max-a)/(this.max-this.min);for(g=d.length;g--&&!(a>d[g][0]););c=d[g]||d[g+1];d=d[g+1]||c;a=1-(d[0]-a)/(d[0]-c[0]||1);e=c.color.tweenTo(d.color,a)}return e}};e.seriesType("solidgauge","gauge",{colorByPoint:!0},{translate:function(){var a=this.yAxis;e.extend(a,v);!a.dataClasses&&a.options.dataClasses&&a.initDataClasses(a.options);a.initStops(a.options);e.seriesTypes.gauge.prototype.translate.call(this)},
drawPoints:function(){var a=this,f=a.yAxis,d=f.center,c=a.options,t=a.chart.renderer,b=c.overshoot,h=r(b)?b/180*Math.PI:0,g;r(c.threshold)&&(g=f.startAngleRad+f.translate(c.threshold,null,null,null,!0));this.thresholdAngleRad=u(g,f.startAngleRad);m(a.points,function(b){var g=b.graphic,k=f.startAngleRad+f.translate(b.y,null,null,null,!0),m=l(u(b.options.radius,c.radius,100))*d[2]/200,n=l(u(b.options.innerRadius,c.innerRadius,60))*d[2]/200,p=f.toColor(b.y,b),q=Math.min(f.startAngleRad,f.endAngleRad),
r=Math.max(f.startAngleRad,f.endAngleRad);"none"===p&&(p=b.color||a.color||"none");"none"!==p&&(b.color=p);k=Math.max(q-h,Math.min(r+h,k));!1===c.wrap&&(k=Math.max(q,Math.min(r,k)));q=Math.min(k,a.thresholdAngleRad);k=Math.max(k,a.thresholdAngleRad);k-q>2*Math.PI&&(k=q+2*Math.PI);b.shapeArgs=n={x:d[0],y:d[1],r:m,innerR:n,start:q,end:k,rounded:c.rounded};b.startR=m;g?(b=n.d,g.animate(e.extend({fill:p},n)),b&&(n.d=b)):(b.graphic=t.arc(n).addClass(b.getClassName(),!0).attr({fill:p,"sweep-flag":0}).add(a.group),
"square"!==c.linecap&&b.graphic.attr({"stroke-linecap":"round","stroke-linejoin":"round"}),b.graphic.attr({stroke:c.borderColor||"none","stroke-width":c.borderWidth||0}))})},animate:function(a){a||(this.startAngleRad=this.thresholdAngleRad,e.seriesTypes.pie.prototype.animate.call(this,a))}})})(l)});


/***/ })
/******/ ]);