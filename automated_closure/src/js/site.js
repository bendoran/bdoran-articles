var h=this;
function i(a){var c=typeof a;if(c=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if(b=="[object Window]")return"object";if(b=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(b=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if(c==
"function"&&typeof a.call=="undefined")return"object";return c}function j(a){var c=i(a);return c=="array"||c=="object"&&typeof a.length=="number"}function k(a){return typeof a=="string"}function l(a){a=i(a);return a=="object"||a=="array"||a=="function"};function m(a){if(!n.test(a))return a;a.indexOf("&")!=-1&&(a=a.replace(q,"&amp;"));a.indexOf("<")!=-1&&(a=a.replace(r,"&lt;"));a.indexOf(">")!=-1&&(a=a.replace(s,"&gt;"));a.indexOf('"')!=-1&&(a=a.replace(u,"&quot;"));return a}var q=/&/g,r=/</g,s=/>/g,u=/\"/g,n=/[&<>\"]/;
function v(a){for(var c=0,b=String(w).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(b.length,a.length),g=0;c==0&&g<f;g++){var d=b[g]||"",e=a[g]||"",t=RegExp("(\\d*)(\\D*)","g"),Z=RegExp("(\\d*)(\\D*)","g");do{var o=t.exec(d)||["","",""],p=Z.exec(e)||["","",""];if(o[0].length==0&&p[0].length==0)break;c=x(o[1].length==0?0:parseInt(o[1],10),p[1].length==0?0:parseInt(p[1],10))||x(o[2].length==0,p[2].length==0)||x(o[2],p[2])}while(c==
0)}return c}function x(a,c){if(a<c)return-1;else if(a>c)return 1;return 0};var y=Array.prototype,z=y.indexOf?function(a,c,b){return y.indexOf.call(a,c,b)}:function(a,c,b){b=b==null?0:b<0?Math.max(0,a.length+b):b;if(k(a))return!k(c)||c.length!=1?-1:a.indexOf(c,b);for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},aa=y.forEach?function(a,c,b){y.forEach.call(a,c,b)}:function(a,c,b){for(var f=a.length,g=k(a)?a.split(""):a,d=0;d<f;d++)d in g&&c.call(b,g[d],d,a)};function ba(a){return y.concat.apply(y,arguments)}
function ca(a){if(i(a)=="array")return ba(a);else{for(var c=[],b=0,f=a.length;b<f;b++)c[b]=a[b];return c}}function da(a,c,b){return arguments.length<=2?y.slice.call(a,c):y.slice.call(a,c,b)};function ea(a,c){var b;b=(b=a.className)&&typeof b.split=="function"?b.split(/\s+/):[];var f=da(arguments,1),g;g=b;for(var d=0,e=0;e<f.length;e++)z(g,f[e])>=0||(g.push(f[e]),d++);g=d==f.length;a.className=b.join(" ");return g};function fa(a,c){for(var b in a)c.call(void 0,a[b],b,a)}var A="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function ga(a,c){for(var b,f,g=1;g<arguments.length;g++){f=arguments[g];for(b in f)a[b]=f[b];for(var d=0;d<A.length;d++)b=A[d],Object.prototype.hasOwnProperty.call(f,b)&&(a[b]=f[b])}};var B,C,D,E;function F(){return h.navigator?h.navigator.userAgent:null}E=D=C=B=false;var G;if(G=F()){var ha=h.navigator;B=G.indexOf("Opera")==0;C=!B&&G.indexOf("MSIE")!=-1;D=!B&&G.indexOf("WebKit")!=-1;E=!B&&!D&&ha.product=="Gecko"}var H=C,I=E,ia=D,w;
a:{var J="",K;if(B&&h.opera)var L=h.opera.version,J=typeof L=="function"?L():L;else if(I?K=/rv\:([^\);]+)(\)|;)/:H?K=/MSIE\s+([^\);]+)(\)|;)/:ia&&(K=/WebKit\/(\S+)/),K)var M=K.exec(F()),J=M?M[1]:"";if(H){var N,O=h.document;N=O?O.documentMode:void 0;if(N>parseFloat(J)){w=String(N);break a}}w=J}var P={},Q={};function R(){return Q[9]||(Q[9]=H&&document.documentMode&&document.documentMode>=9)};var ja=!H||R();if(I||H)if(!H||!R())I&&(P["1.9.1"]||(P["1.9.1"]=v("1.9.1")>=0));H&&(P["9"]||(P["9"]=v("9")>=0));function ka(a,c){fa(c,function(b,c){c=="style"?a.style.cssText=b:c=="class"?a.className=b:c=="for"?a.htmlFor=b:c in S?a.setAttribute(S[c],b):c.lastIndexOf("aria-",0)==0?a.setAttribute(c,b):a[c]=b})}var S={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",maxlength:"maxLength",type:"type"};
function T(a,c,b){var f=arguments,g=document,d=f[0],e=f[1];if(!ja&&e&&(e.name||e.type)){d=["<",d];e.name&&d.push(' name="',m(e.name),'"');if(e.type){d.push(' type="',m(e.type),'"');var t={};ga(t,e);e=t;delete e.type}d.push(">");d=d.join("")}d=g.createElement(d);if(e)k(e)?d.className=e:i(e)=="array"?ea.apply(null,[d].concat(e)):ka(d,e);f.length>2&&la(g,d,f);return d}
function la(a,c,b){function f(b){b&&c.appendChild(k(b)?a.createTextNode(b):b)}for(var g=2;g<b.length;g++){var d=b[g];if(j(d)&&!(l(d)&&d.nodeType>0)){var e;a:{if(d&&typeof d.length=="number")if(l(d)){e=typeof d.item=="function"||typeof d.item=="string";break a}else if(i(d)=="function"){e=typeof d.item=="function";break a}e=false}aa(e?ca(d):d,f)}else f(d)}};function U(a){this.parent=a}U.prototype.a=function(){this.parent.appendChild(T("div",{style:"background:#FFFF00"},"This was created in the Bar class"))};function V(a){this.parent=a}V.prototype.a=function(){this.parent.appendChild(T("div",{style:"background:#FF00FF"},"This was created in the Foo class"))};function W(a,c){var b=T("div",{style:"background:#FF0000"},"Application "+a+" Starting");c.appendChild(b);(new V(c)).a();(new U(c)).a()}var X="automatedclosure.init".split("."),Y=h;!(X[0]in Y)&&Y.execScript&&Y.execScript("var "+X[0]);for(var $;X.length&&($=X.shift());)!X.length&&W!==void 0?Y[$]=W:Y=Y[$]?Y[$]:Y[$]={};
