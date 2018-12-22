/*! 337-197-RELEASE 2018-12-18 */

!function(t){t.TRC=t.TRC||{};var e=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")},n=function(){return!0},r=function(t,n,r,i){var o=t+"/"+encodeURIComponent(r||TRC.publisherId)+"/log/3"+"/"+n;return i&&(o+="?"+e(i)),o},i=function(e,r){var i,o=new(t.XDomainRequest||t.XMLHttpRequest);return o.open(e,r),o.onload=n,o.onerror=n,o.ontimeout=n,o.onprogress=n,o.withCredentials=!0,o};TRC.TRCLogger={post:function(t,n,o,a){var s=r(t,n,a),u=i("POST",s);u.setRequestHeader&&u.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u.send(e(o))},get:function(t,e,n,o){var a=r(t,e,o,n),s;i("GET",a).send()}}}(window),function(win,doc){win.TRC=win.TRC||{},TRC.useStorageDetection=TRC.useStorageDetection||!0,TRC.text=TRC.text||{},TRC.text.lsplit=TRC.text.lsplit||function(t,e,n){var r=t.split(e);return r.slice(0,n-1).concat(r.length>=n?r.slice(n-1).join(e):[])},TRC.util=TRC.util||{},TRC.util.jsonParseWithNative=TRC.util.jsonParseWithNative||function(t){try{return JSON.parse(t)}catch(e){return TRC.util.jsonParseWithEval(t)}},TRC.util.jsonParseWithEval=TRC.util.jsonParseWithEval||function(text){try{return eval("("+String(text)+")")}catch(t){throw new Error("JSON parse error - invalid input!")}},win.TRCImpl=win.TRCImpl||{},TRCImpl.global=TRCImpl.global||{},win.__trcError=win.__trcError||function t(){},win.__trcJSONify=win.__trcJSONify||function(t){if(window.JSON&&window.JSON.stringify&&window.TRCImpl&&window.TRCImpl.global["use-native-json-stringify"])return window.JSON.stringify(t);function e(t){return'"'+t.replace(/[\s\S]/g,function(t){switch(t){case'"':return'\\"';case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r"}return t})+'"'}function n(t){for(var e=[],n=0;n<t.length;n++)e[n]=__trcJSONify(t[n]);return e}function r(t){var n=[];for(var r in t)t.hasOwnProperty(r)&&n.push(e(r)+":"+__trcJSONify(t[r]));return n}return t instanceof Array?"["+n(t).join(",")+"]":t instanceof Object?"{"+r(t).join(",")+"}":null===t?"null":"string"==typeof t?e(t):void 0===t?"undefined":t.toString()}}(window,document),function(t,e){var n="taboola global",r="trctestcookie";function i(){for(var t="trc_cookie_storage",e=new Object,n=document.cookie.split(/;\s+/),r=0;r<n.length;r++){var i=TRC.text.lsplit(n[r],"=",2),o=unescape(i[0]),a=unescape(i[1]);if(o==t){for(var s=a.split("|"),u=0;u<s.length;u++){var i=s[u].split("=");e[unescape(i[0])]=unescape(i[1])}break}}function c(){var n=new Array,r,i;for(var o in e)e.hasOwnProperty(o)&&null!=e[o]&&(n[n.length]=escape(o)+"="+escape(e[o]));r=n.length>0?1:-1,i=new Date((new Date).getTime()+365*r*864e5),document.cookie=t+"="+escape(n.join("|"))+";path=/;expires="+i.toUTCString()}return this.getValue=function(t){return e.hasOwnProperty(t)?e[t]:null},this.setValue=function(t,n){e[t]=n,c()},this.removeKey=function(t){delete e[t],c()},this}function o(t){var e=t||{};return this.getValue=function(t){return e[t]?e[t]:null},this.setValue=function(t,n){e[t]=n},this.removeKey=function(t){delete e[t]},this.getData=function(){return e},this}function a(e){return this.getValue=function(n){return t[e+"Storage"].getItem(n)},this.setValue=function(n,r){try{t[e+"Storage"].setItem(n,r)}catch(t){}},this.removeKey=function(n){try{t[e+"Storage"].removeItem(n)}catch(t){}},this}function s(e){var n=t[e+"Storage"],r=(new Date).getTime()+"",i="_taboolaStorageDetection";try{if(n.setItem(i,r),n.getItem(i)==r)return n.removeItem(i),n}catch(t){}return null}function u(e){try{if(t.localStorage instanceof Storage&&TRC.useStorageDetection&&s(e))return new a(e)}catch(t){return null}}var c=function e(){return this.state={},this.getLocalStorageImplementation=function(e,n){if(null!=this.state.privateStorageImpl&&"strict-w3c-storage"!=e)return this.state.privateStorageImpl;var r=t.TRCImpl?t.TRCImpl.global:{};switch(e=e||(r["local-storage-usage"]?r["local-storage-usage"]:"prefer-w3c-storage")){case"strict-w3c-storage":return u("session"===n?"session":"local");case"prefer-w3c-storage":var a=u("local");if(a)return this.state.privateStorageImpl=a;case"prefer-cookies":try{if(this.canWriteCookies())return this.state.privateStorageImpl=new i}catch(t){}default:return this.state.privateStorageImpl=new o}},this.getFirstPartyCookie=function(){if(this.state.firstPartyCookie)return this.state.firstPartyCookie;var t=this.getLocalStorageImplementation();if(t instanceof i||t instanceof o)return this.state.firstPartyCookie=t;try{if(this.canWriteCookies())return this.state.firstPartyCookie=new i}catch(t){}return this.state.firstPartyCookie=new o},this.canWriteCookies=function(){var t;return document.cookie=r+"=ok",t=-1!==document.cookie.indexOf(r),document.cookie=r+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t},this.getDummyStorage=function(t){return new o(t)},this.getValue=function(t){return this.getPublisherValue(n,t)},this.storePublisherValue=function(t,e,n){var r;this.isNotAllowedToWriteValue(e,n)||(r=this.buildKeyWithPublisher(t,e),this.getLocalStorageImplementation().setValue(r,n),this.addKeyToStoredKeysList(r))},this.isNotAllowedToWriteValue=function(t,e){return null==e||void 0==e||TRC.doNotTrack&&!this.isAllowedKeyWhenDoNotTrack(t)},this.buildKeyWithPublisher=function(t,e){return t+":"+e},this.getPublisherValue=function(t,e){return TRC.doNotTrack&&!this.isAllowedKeyWhenDoNotTrack(e)?null:this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(t,e))},this.addKeyToStoredKeysList=function(t){var e=this.getStoredKeysList();-1===e.indexOf(t)&&(e.push(t),this.setStoredKeysList(e))},this.getStoredKeysList=function(){var t=this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(n,"local-storage-keys")),e;try{e=TRC.util.jsonParseWithNative(t)||[]}catch(t){e=[],__trcError("Could not parse local storage keys",t)}return e},this.setStoredKeysList=function(t){var e;try{e=__trcJSONify(t),this.getLocalStorageImplementation().setValue(this.buildKeyWithPublisher(n,"local-storage-keys"),e)}catch(t){return void __trcError("Could not stringify local storage keys",t)}},this.isAllowedKeyWhenDoNotTrack=function(e){var n,r=(t.TRCImpl&&t.TRCImpl.global||{})["dnt-allowed-keys"]||["session-id","trc_css-isolation"],i;return null!==e&&void 0!==e&&(i=e.split(":")[1]||e,-1!==r.indexOf(i))},this.storeUserId=function(t){this.isNotAllowedToWriteValue("user-id",t)||this.storePublisherValue(n,"user-id",t)},this.getUserIdFirstPartyCookie=function(){return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(n,"user-id"))},this.getSessionDataFirstPartyCookie=function(){var t=this.getStoredKeysList();for(key in t)if(t[key].includes("session-data"))return TRC.tfaPageManager.getLocalStorageImplementation().getValue(t[key])},this.initState=function(){void 0===this.state&&(this.state={}),this.state.privateStorageImpl=null},this.initState(),this};TRC.tfaPageManager=TRC.tfaPageManager||new c}(window,document),function(t,e){var n=TRC.pageManager||TRC.tfaPageManager;function r(t,e,n){var r,i;n&&e&&t&&(r=encodeURIComponent(t),i=encodeURIComponent(e),n.push(r+"="+i))}function i(t,e){t&&e&&(e[t]=!0)}function o(t,e,n){for(var r={},o=0;o<arguments.length;o++)i(arguments[o],r);return Object.keys(r).length>1}TRC.tfaUserId={initialized:!1,userId:null,getUserId:function(){return this.userId},sendUserIdsToTrc:function(t,e,n){var i,a=[];if(o(t,e,n))return r("uiref",t,a),r("uils",e,a),r("uifpc",n,a),(i=new Image).src="//trc.taboola.com/sg/taboola-tfa/1/um/?"+a.join("&"),i},readAndStoreUserId:function(){var t=this.extractUserIdFromReferrer(),e=n.getValue("user-id"),r=n.getUserIdFirstPartyCookie();t&&(this.sendUserIdsToTrc(t,e,r),n.storeUserId(t),r&&n.getFirstPartyCookie().setValue("taboola global:user-id",t)),this.userId=t||e||r},extractUserIdFromReferrer:function(){var t=this.getReferrer();if(t&&t.indexOf("taboola")>-1)return this.getParameterByName("ui",t)},getReferrer:function(){return e.referrer},getParameterByName:function(t,e){if(!e||!t)return null;t=t.replace(/[\[\]]/g,"\\$&");var n,r=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null},init:function(){this.initialized||(this.readAndStoreUserId(),this.initialized=!0)}},TRC.tfaUserId.init()}(window,document),function(){var t=TRC.pageManager||TRC.tfaPageManager,e={event:I,subscription:v},n=/(\S+)taboola(\S+|)\.com\/libtrc\/unip\/(\S+)\/tfa\.js(\S+|)/,r=["notify","id"],i={name:"en",url:"item-url"},o="_tfa",a="script[src$='tfa.js']",s=-1,u={defaultProtocol:"https:",host:"trc.taboola.com",httpMethod:"get",loggerEventName:"unip",logToConsole:!0},c={EMPTY_COMMAND:"EMPTY_COMMAND",MISSING_NOTIFY:"MISSING_NOTIFY",INVALID_NOTIFY:"INVALID_NOTIFY",MISSING_NAME:"MISSING_NAME",INVALID_ID:"INVALID_ID"};function l(){var t=C();t.initialized&&t.accountId&&setTimeout(function(){for(var t=C().asyncQueue;t.length;)w(t.shift())},0)}function f(){for(var t=document.querySelectorAll(a),e,r,i=0;i<t.length;i++)if((e=t[i]).src.indexOf("/unip/")>0&&(r=e.src.replace(n,"$3")))return/^\d+$/.test(r)?parseInt(r,10):(R("Value '"+r+"' is invalid for 'id' param in script source url '"+e.src+"'. Only numeric values are allowed."),s)}function d(){var t=new Date,e=t.getHours(),n=t.getMinutes(),r=t.getSeconds()+t.getMilliseconds()/1e3;return(e<10?"0":"")+e+":"+(n<10?"0":"")+n+":"+(r<10?"0":"")+r.toFixed(3)}function h(t){t["ce"]="subscr"}function g(e){var n=t.getSessionDataFirstPartyCookie();void 0!==n&&n&&(e["sd"]=n)}function p(t){try{TRC.tfaUserId.getUserId()&&(t["ui"]=TRC.tfaUserId.getUserId())}catch(e){R("Error while trying to add user-id param, params="+JSON.stringify(t),e)}}function m(t){var e={},n=!1,o;for(var a in t.tim=d(),t)t.hasOwnProperty(a)&&r.indexOf(a)<0&&(e[o=i.hasOwnProperty(a)?i[a]:a]=t[a],n=!0);return p(e),n&&e}function y(t,e){var n=(window.location.protocol||u.defaultProtocol)+"//"+u.host;try{TRC.TRCLogger[u.httpMethod](n,u.loggerEventName,e,t)}catch(n){R("Error while trying to send to server event with id '"+t+"' and params '"+JSON.stringify(e)+"'.",n)}}function I(t){var e=C(),n=t&&t.id||e.accountId;n?n!==s&&y(parseInt(n,10),m(t)):e.asyncQueue.push(t)}function v(t){var e=C(),n=t&&t.id||e.accountId;if(n){if(n!==s){var r=m(t);h(r),g(r),y(parseInt(n,10),r)}}else e.asyncQueue.push(t)}function T(t){return t?t.notify?e.hasOwnProperty(t.notify)?t.name?!(t.hasOwnProperty("id")&&!/^\d+$/.test(t.id))||(S(c.INVALID_ID,t,"Value '"+t.id+"' is invalid for 'id' field in command '"+JSON.stringify(t)+"'. Only numeric values are allowed."),!1):(S(c.MISSING_NAME,t,"Mandatory 'name' field is missing in command '"+JSON.stringify(t)+"'."),!1):(S(c.INVALID_NOTIFY,t,"Value '"+t.notify+"' is invalid for 'notify' field in command '"+JSON.stringify(t)+"'."),!1):(S(c.MISSING_NOTIFY,t,"Mandatory 'notify' field is missing in command '"+JSON.stringify(t)+"'."),!1):(S(c.EMPTY_COMMAND,t,"Command is '"+t+"'."),!1)}function w(t){if(T(t))try{e[t.notify](t)}catch(e){R("An error occurred while handling command '"+JSON.stringify(t)+"'.",e)}}function C(){return window&&window[o]&&window[o].TUP}function S(t,e,n){if("function"==typeof CustomEvent){var r=C()||{};document.dispatchEvent(new CustomEvent("tfa:validation-error",{detail:{accountId:r.accountId,errorCode:t,command:e}}))}R(n)}function R(t,e){u.logToConsole&&N(t,e)}function N(t,e){e?console.log("Taboola Pixel: "+t,e):console.log("Taboola Pixel: "+t)}function P(){var t=window[o]=window[o]||[],e=t.TUP=t.TUP||{};e.accountId=e.accountId||f(),window.TRC=window.TRC||{},e.initialized||(e.push=t.TUP.push||w,e.initialized=!0,e.asyncQueue=[]),l()}P()}(),function(t,e){var n="_tfa",r={orderid:"orderid",currency:"currency",revenue:"revenue",quantity:"quantity",name:"name",attributionGroup:"attributionGroup"},i={type:"marking-type"},o=(t.location.protocol.match(/http/)?t.location.protocol:"http:")+"//trc.taboola.com/{$publishreId}log/3/{$logType}?",a=/(\S+)taboola(\S+|)\.com\/libtrc\/(\S+)\/tfa\.js(\S+|)/,s="unip/",u=[],c=[],l="http:";function f(t){var e;switch(t.notify){case"action":e=u;break;case"mark":e=c;break;case"event":case"subscription":e=queue.TUP;break;default:return}e&&e.push(t)}function d(){return TRC&&TRC.tfaUserId&&TRC.tfaUserId.getUserId()?"&ui="+encodeURIComponent(TRC.tfaUserId.getUserId()):""}function h(){var t,e,n=w();if(n)for(t=0,e=u.length;t<e;t++)m(p(o,{$publishreId:n?n+"/":"",$logType:"action"})+"tim="+escape(I())+"&item-url="+escape(y())+C(r,u.shift())+v()+d())}function g(){var t,e,n=w();if(n)for(t=0,e=c.length;t<e;t++)m(p(o,{$publishreId:n?n+"/":"",$logType:"mark"})+"tim="+escape(I())+"&item-url="+escape(y())+C(i,c.shift())+v()+d())}function p(t,e){return t.replace(/\{([^{}]*)\}/g,function(t,n){var r=e[n];return"string"==typeof r||"number"==typeof r?r:t})}function m(t){var e;(new Image).src=t}function y(){return t.location.href}function I(){var t=new Date,e=t.getHours(),n=t.getMinutes(),r=t.getSeconds()+t.getMilliseconds()/1e3;return(e<10?"0":"")+e+":"+(n<10?"0":"")+n+":"+(r<10?"0":"")+r.toFixed(3)}function v(){var n=t.location.search,r=e.referrer.match(/(\?\S+)$/g),i="";return i=T(n.replace(/^\?/,"").split(/&/))+(r?T(r[0].replace(/^\?/,"").split(/&/)):"")}function T(t){var e="",n,r,i="trc_";for(n=0,r=t.length;n<r;n++)0==t[n].indexOf(i)&&(e=e+"&"+t[n]);return e}function w(){var t=document.getElementsByTagName("script"),e,n,r="",i;for(e=0,n=t.length;e<n;e++)if(r=(i=t[e].src).replace(a,"$3"),t[e].src&&r!==t[e].src&&r.indexOf(s)<0)return r;return r}function C(t,e){var n,r="";for(n in t)void 0!==e[n]&&(r+="&"+t[n]+"="+e[n]);return r}function S(t){for(var e=0;e<arguments.length;e++)(t=arguments[e])instanceof Object&&f(t);return R(),arguments.length}function R(){h(),g()}function N(){for(;queue.length;)S(queue.shift())}function P(){queue=t[n]=t[n]||[],queue.registered||(queue.push=S,queue.registered=!0,N())}P()}(window,document);