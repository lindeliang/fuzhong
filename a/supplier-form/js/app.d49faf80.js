(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("5c80")},1:function(t,e){},"1ee4":function(t,e,n){"use strict";var a=n("78da"),i=n.n(a);i.a},2290:function(t,e,n){"use strict";n("d3b7");var a=n("5c96");function i(t){function e(e){return new Promise((function(n,i){function o(t){t&&n(t)}function c(t){t&&(e.emitError&&t&&t.msg&&a["Message"].error(t.msg),i(t))}var s=e.success;e.success=function(t){s&&s(t),o(t)};var r=e.error;e.error=function(t){r&&r(t),c(t)},t(e)}))}return e}e["a"]=i},"56d7":function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var a=n("2b0e"),i=(n("f5df1"),n("0fae"),n("28dd")),o=n("94b4"),c=n.n(o),s=n("26b9"),r=n.n(s),u=n("5c96"),p=n("ed08"),l=(n("861f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("comp-header"),n("div",{staticClass:"container"},[n("router-view")],1),n("comp-sidebar"),n("comp-footer")],1)}),d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("main",[n("div",{staticClass:"page-title"},[t._m(0),n("nav",[t._l(t.navs,(function(e,a){return n("a",{key:a,class:{active:e.active},on:{click:function(n){return t.visit(e)}}},[t._v(t._s(e.title))])})),t._m(1),n("a",{attrs:{target:"__blank",href:"https://shop.mockuai.com/pages/login"}},[t._v("商家登录")])],2)])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("img",{attrs:{src:"/skin/images/fz_logo.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about",attrs:{href:"javascript:;"}},[n("span",[t._v("关于魔筷")]),n("div",{staticClass:"list"},[n("div",{staticClass:"list-content"},[n("div",{staticClass:"item"},[n("a",{attrs:{href:"/about"}},[t._v("公司介绍")])]),n("div",{staticClass:"item"},[n("a",{attrs:{href:"/recruit"}},[t._v("加入魔筷")])])])])])}],h=(n("7db0"),n("d81d"),n("53ca")),v={data:function(){return{navs:[{title:"首页",active:!1,url:"/"},{title:"网红开店",active:!1,url:"/celebrity"},{title:"商家入驻",active:!1,url:"/supplier"},{title:"渠道加盟",active:!1,url:"/agents"},{title:"直播基地",active:!1,url:"/live"},{title:"资讯中心",active:!1,url:"/article-list"}]}},watch:{$route:{immediate:!0,handler:function(){var t=this;this.$route&&this.$route.meta&&(this.navs.map((function(e){e.url!=="/".concat(t.$route.meta.highlight)||(e.active=!0)})),Object(p["a"])((function(){t.choice(document.location.pathname)})))}}},mounted:function(){var t=this;this.$route&&this.$route.meta||Object(p["a"])((function(){t.choice(document.location.pathname)}))},methods:{visit:function(t){this.choice(t),Object({NODE_ENV:"production",BASE_URL:"/",VAPPER_TARGET:"client",VAPPER_ENV:"production"}).VUE_APP_WB?location.href=t.url:this.$router.push(t.url)},choice:function(t){var e=null;"object"===Object(h["a"])(t)?e=t:"string"===typeof t&&(e=this.navs.find((function(e){return e.url===t||"".concat(e.url,"/")===t}))),e&&(this.navs.map((function(t){t.active=!1})),e.active=!0)}}},g=v,_=(n("cd7e"),n("2877")),b=Object(_["a"])(g,f,m,!1,null,"1c889d52",null),k=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("main",[t._m(0),n("div",{staticClass:"text"},[n("p",[t._v("©2015-2020 Mockuai.com 杭州魔筷科技有限公司")]),n("p",[n("a",{attrs:{target:"__blank",href:"https://www.mockuai.com/890.html"}},[t._v("隐私权政策")]),n("a",{attrs:{target:"__blank",href:"https://mktv-in-cdn.mockuai.com/16024961508525175.png"}},[t._v("信息系统安全等级保护（三级）")]),n("a",{attrs:{target:"__blank",href:"https://cdn.mockuai.com/tms/47307.pdf"}},[t._v("网络食品交易管理承诺书")]),n("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.open("https://pc-helper.mockuai.com/?app_type=30&channel_id=1&page_id=15&tag=2")}}},[t._v("SaaS规则中心")]),n("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.open("https://pc-helper.mockuai.com/?app_type=30&channel_id=1&page_id=14&tag=1")}}},[t._v("供应商规则中心")])]),n("p",[t._v(" 增值电信业务经营许可证：浙B2-20180636 - 浙ICP备15018042号-1 浙网食A3300100015 新出发浙备字第2020001号 （浙）网械平台备字【2020】第00014号 ")])])])])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-content"},[n("div",{staticClass:"left-line"},[n("div",{staticClass:"line"},[n("div",{staticClass:"title"},[t._v("关于魔筷：")]),n("div",{staticClass:"line-item"},[n("a",{attrs:{href:"/about"}},[t._v("公司介绍")])]),n("div",{staticClass:"line-item"},[n("a",{attrs:{href:"/recruit"}},[t._v("加入魔筷")])]),n("div",{staticClass:"line-item"},[n("a",{attrs:{href:"/article-list"}},[t._v("资讯中心")])])]),n("div",{staticClass:"line"},[n("div",{staticClass:"title"},[t._v("快手官方认证：")]),n("div",{staticClass:"line-item"},[t._v("快手燎原计划官方服务商")]),n("div",{staticClass:"line-item"},[t._v("快手优秀服务商")])]),n("div",{staticClass:"line"},[n("div",{staticClass:"title"},[t._v("联系我们：")]),n("div",{staticClass:"line-item"},[t._v("开店咨询：400-900-1231")]),n("div",{staticClass:"line-item"},[t._v("售后专线：0571-85225588")]),n("div",{staticClass:"line-item"},[t._v("官方合作：MKBusiness@mockuai.com")]),n("div",{staticClass:"line-item"},[t._v(" 总部地址：浙江省杭州市余杭区浙富西溪堂7号楼 ")])])]),n("div",{staticClass:"right-line"},[n("div",{staticClass:"line"},[n("div",{staticClass:"title center"},[t._v("微信公众号")]),n("div",{staticClass:"qrcode"},[n("img",{staticClass:"guanfang",attrs:{alt:""}})])]),n("div",{staticClass:"line"},[n("div",{staticClass:"title center"},[t._v("快手官方号")]),n("div",{staticClass:"qrcode"},[n("img",{staticClass:"gongzhong",attrs:{alt:""}})])])])])}],y={data:function(){return{}},methods:{open:function(t){window.open(t)}}},C=y,x=(n("1ee4"),Object(_["a"])(C,w,P,!1,null,"483be72d",null)),S=x.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.sidebar.ready&&t.sidebar.show?n("div",{staticClass:"right-follow"},[t.sidebar.contact?n("div",{staticClass:"box",on:{click:t.openContact}},[n("div",{staticClass:"icon icon-chat"}),t._v(" 客服咨询 ")]):t._e(),t._m(0),n("div",{staticClass:"box home",on:{click:function(e){return t.openView("/supplier-form")}}},[n("div",{staticClass:"icon icon-home"}),t._v(" 商家入驻 ")]),n("div",{staticClass:"box",on:{click:t.backTop}},[n("div",{staticClass:"icon icon-arrow"}),t._v(" 回到顶部 ")])]):t._e()},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box scan"},[n("div",{staticClass:"icon icon-shop"}),n("div",{staticClass:"qrcode-box"},[n("img",{attrs:{src:"https://mktv-in-cdn.mockuai.com/16022452489887587.png",alt:""}}),n("div",{staticClass:"qrcode-text"},[t._v("扫码开通店铺")])]),t._v(" 网红开店 ")])}],O={data:function(){return{sidebar:{show:!1,contact:!1,ready:!1}}},watch:{$route:{immediate:!0,handler:function(){this.$route&&this.$route.meta&&(this.sidebar.show=!this.$route.meta.hide_sidebar)}}},created:function(){var t=this;this.client((function(){Object(p["b"])("https://qiyukf.com/script/97a8bb5512338e5d873d15a1148509c1.js",(function(){t.sidebar.contact=!0,t.sidebar.ready=!0}))}))},methods:{backTop:function(){window.scrollTo({top:0})},openContact:function(){window.ysf.open()},openView:function(t){window.open(t)}}},R=O,A=(n("9857"),Object(_["a"])(R,T,E,!1,null,"2ebcdfd0",null)),L=A.exports,I={components:{CompHeader:k,CompFooter:S,CompSidebar:L}},U=I,j=(n("d259"),Object(_["a"])(U,l,d,!1,null,"7605fac8",null)),$=j.exports,q=(n("b0c0"),n("d3b7"),n("ac1f"),n("5319"),n("8c4f"));a["default"].use(q["a"]);var D=[{path:"/supplier",name:"Supplier",component:function(){return n.e("chunk-96c66180").then(n.bind(null,"b680"))},meta:{ssr:!0}},{path:"/supplier-form",name:"SupplierForm",component:function(){return n.e("chunk-d210de00").then(n.bind(null,"0cf9"))},meta:{hide_sidebar:!0,highlight:"supplier"}},{path:"/404",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],K=q["a"].prototype.push;q["a"].prototype.push=function(t,e,n){return e||n?K.call(this,t,e,n):K.call(this,t).catch((function(t){return t}))};var N=q["a"].prototype.replace;q["a"].prototype.replace=function(t,e,n){return e||n?N.call(this,t,e,n):N.call(this,t).catch((function(t){return t}))};var V=new q["a"]({mode:"history",base:"/",routes:D,scrollBehavior:function(){return{x:0,y:0}}});V.beforeEach((function(t,e,n){if(Object(p["a"])((function(){document.title=t.meta.title||"魔筷科技"})),!e.name&&!t.name)return n("404"),!1;t.name?n():location.href=t.path}));var W=V,F=n("2f62");a["default"].use(F["a"]);var Q=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}});function z(){var t={router:W,store:Q,head:{},render:function(t){return t($)}};return t}Object(p["a"])((function(){n("806d"),n("c5d8"),n("6f65")})),a["default"].use(u["Input"]),a["default"].use(u["Form"]),a["default"].use(u["FormItem"]),a["default"].use(u["Button"]),a["default"].use(u["Select"]),a["default"].use(u["Option"]),a["default"].use(u["Cascader"]),a["default"].config.productionTip=!1,a["default"].use(i["a"]),a["default"].use(r.a),a["default"].use(c.a),a["default"].use(c.a,{latencyThreshold:50,responseLatency:50}),a["default"].prototype.client=p["a"]},"5d78":function(t,e,n){},"6f65":function(t,e,n){n("99af"),n("c975"),n("a9e3"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276");var a=n("7037");(function(t,e){var n,i={prefix:"",setPrefix:function(t){this.prefix=t},_key:function(t){return this.prefix+t},get:function(t){return this.getItem(this._key(t))},set:function(t,e,n,a,i,o){var c=this;if(n=n||604800,a=a||"/",!i){var s=location.hostname;if(!s.match(/\d+\.\d+\.\d+\.\d+/)){var r=/.+\.([^\.]+\.[^\.]+)$/,u=s.match(r);u&&u[0]&&(i=u[0])}}return this.setItem(c._key(t),e,n,a,i,o)},rm:function(t,e,n){var a=this;if(e=e||"/",n)this.removeItem(a._key(t),e,n);else{var i=location.hostname;if(!i.match(/\d+\.\d+\.\d+\.\d+/)){var o=/.+\.([^\.]+\.[^\.]+)$/,c=i.match(o);c&&c[1]&&(this.removeItem(a._key(t),e),this.removeItem(a._key(t),e,c[0]),this.removeItem(a._key(t),e,c[1]))}}},getItem:function(t){if(!t)return null;for(var e="".concat(t,"="),n=document.cookie.split(";"),a=0;a<n.length;a++){var i=n[a],o="";while(" "==i.charAt(0))i=i.substring(1,i.length);if(0==i.indexOf(e)&&(o=i.substring(e.length,i.length)),o)return o}return null},setItem:function(t,e,n,a,i,o){if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t))return!1;var c="";if(n)switch(n.constructor){case Number:c=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age=".concat(n);break;case String:c="; expires=".concat(n);break;case Date:c="; expires=".concat(n.toUTCString());break}return document.cookie="".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e)).concat(c).concat(i?"; domain=".concat(i):"").concat(a?"; path=".concat(a):"").concat(o?"; secure":""),!0},removeItem:function(t,e,n){return!!this.hasItem(t)&&(document.cookie="".concat(encodeURIComponent(t),"=; expires=Thu, 01 Jan 1970 00:00:00 GMT").concat(n?"; domain=".concat(n):"").concat(e?"; path=".concat(e):""),!0)},hasItem:function(t){return!!t&&new RegExp("(?:^|;\\s*)".concat(encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&"),"\\s*\\=")).test(document.cookie)},keys:function(){for(var t=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),e=t.length,n=0;n<e;n++)t[n]=decodeURIComponent(t[n]);return t}},o=function(){var t={isLocalStorageOk:!1,prefix:"",data:{},init:function(){return this.checkLocalStorage(),this.setMethod(),this},checkLocalStorage:function(){if("localStorage"in window&&null!==window.localStorage)try{window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),this.isLocalStorageOk=!0}catch(t){console.log()}},setPrefix:function(t){this.prefix=t},setMethod:function(t){t=t||"",n=this.isLocalStorageOk?"cookie"==t?i:window.localStorage:i},set:function(t,e){this.data[t]=e,"object"===a(e)&&(e=JSON.stringify(e)),n.setItem(this.prefix+t,e)},get:function(t){var e=this.data[t];if("undefined"===typeof e){e=n.getItem(this.prefix+t);try{e=JSON.parse(e)}catch(a){}}return e},rm:function(t){t&&(t=this.prefix+t,delete this.data[t],n.removeItem(t))}};return t.init()}();e.storage=o,e.cookie=i})(window,window.lib||(window.lib={}))},"78da":function(t,e,n){},"806d":function(t,e,n){"use strict";n.r(e),function(t){n("99af"),n("caad"),n("c975"),n("fb6a"),n("ac1f"),n("2532"),n("5319");var e=n("6821"),a=n.n(e),i=n("2b0e"),o=n("2290");n("ace7");(function(e,n){var c=Object({NODE_ENV:"production",BASE_URL:"/",VAPPER_TARGET:"client",VAPPER_ENV:"production"}).VUE_APP_ENV,s={APP_KEY:"7ff47887933bece366de5259b1e20a25",APP_PWD:"f89b45f02bac39688e329595af411a99",API_URL:"https://api.mockuai.com/",H5_URL:"https://snapshot.m.wudizhanggui.com/"},r=s.APP_KEY,u=s.APP_PWD,p=s.API_URL,l=s.H5_URL,d={exceptionCodeList:[50001,50002,50003,50004,50005,50006],maxCount:10,intervalTime:2e3};function f(t){var e,n={},a=[];for(e in t)t.hasOwnProperty(e)&&a.push(e);for(a.sort(),e=0;e<a.length;e++)n[a[e]]=t[a[e]];return n}function m(t){var e=n.api.appPwd;t=f(t);var i=e;for(var o in t)i+="".concat(o,"=").concat(t[o],"&");i=i.slice(0,-1),i+=e;var c=a()(i);return c}function h(t){var e=n.api.appPwd;t=f(t);var i=e;for(var o in t)"file"!=o&&(i+="".concat(o,"=").concat(t[o],"&"));i=i.slice(0,-1),i+=e;var c=a()(i);return c}function v(e){var a={format:"json",app_key:n.api.appKey,timestamp:Math.floor(Date.now()/1e3)};t.getJSON("".concat(n.api.apiUrl,"wdzg/auth/session_token/get?format=json&app_key=").concat(a.app_key,"&timestamp=").concat(a.timestamp,"&api_sign=").concat(m(a)),(function(t){n.api.session_token=t.data.session_token,n.storage.set("session_token",n.api.session_token),e&&e()}))}function g(t,e){var a=(new Date).getTime();if(d.exceptionCodeList.includes(e.code)){var i=n.api.exceptionStartTime,o=n.api.currentExceptionCount;if(i||(i=a),o++,console.log("".concat(a-i," 毫秒内异常数量 ").concat(o)),a-i<d.intervalTime&&o>=d.maxCount)return n.api.isWaiting=!0,void(n.login&&n.login.goLogin());a-i>d.intervalTime&&(i=a,o=0),n.api.exceptionStartTime=i,n.api.currentExceptionCount=o}switch(e.code){case 1e4:t.success&&t.success(e);break;case 50001:case 50002:if(n.api.needSessionToken)return void n.api.requestQueue.push(t.fn);n.api.needSessionToken=!0,v((function(){t.fn.call(),n.api.needSessionToken=!1,n.api.callRequestQueue()}));break;case 50003:case 50004:case 50005:case 50006:case 50007:n.api.needSessionToken=!1,n.api.requestQueue=[],n.login.goLogin();break;default:t.error&&t.error(e)}}function _(e,a,o){if(!n.api.isWaiting&&!w(e,a)){var c=-1===e.api.indexOf("http")?n.api.apiUrl:"",s=t.extend(!0,{},e.data),r=n.storage.get("access_token");for(var u in s.format="json",s.app_key=n.api.appKey,s.timestamp="1523687615",s.session_token=n.storage.get("session_token"),r&&(s.access_token=r),s)void 0!==s[u]&&null!==s[u]&&""!==s[u]||delete s[u];if("POST"==a)for(var u in s)try{s[u]=s[u].replace(/\r\n/g,"\n").replace(/\n/g,"\r\n")}catch(d){}if(s.api_sign=m(s),"GET"==a)b(c,a,e.api,s),i["default"].http.get("".concat(c).concat(e.api),{params:s,responseType:"json",emulateJSON:!0}).then((function(t){g(e,t.body)}),(function(t){e.error&&e.error(null,t.status,t.statusText)})).then((function(t){e.complete&&e.complete(t)}));else if("POST"==a){b(c,a,e.api,s);var p=new FormData;for(var l in s)p.append(l,s[l]);i["default"].http.post("".concat(c).concat(e.api),p,{responseType:"json"}).then((function(t){g(e,t.body)}),(function(t){e.error&&e.error(t,t.status,t.statusText)})).then((function(t){e.complete&&e.complete(t)}))}}}function b(t,e,a,i){if("POST"===e||n.api.addOperationLogGetRequestList.includes(a)){var o={format:i.format,app_key:i.app_key,timestamp:i.timestamp,session_token:i.session_token,access_token:i.access_token},c=new FormData;for(var s in o.operation_content=a,o.api_sign=m(o),o)c.append(s,o[s])}}function k(e,a){var i=-1===e.api.indexOf("http")?n.api.apiUrl:"",o=t.extend(!0,{},e.data),c=n.storage.get("access_token");o.format="json",o.app_key=n.api.appKey,o.timestamp=Math.floor(Date.now()/1e3),o.session_token=n.storage.get("session_token"),c&&(o.access_token=c),o.api_sign=h(o);var s=new FormData;for(var r in o)s.append(r,o[r]);"function"===typeof e.progress?t.ajax({url:i+e.api,type:"POST",data:s,dataType:"json",processData:!1,contentType:!1,cache:!1,xhr:function(){var n=t.ajaxSettings.xhr();if(e.progress&&n.upload)return n.upload.addEventListener("progress",e.progress,!1),n},success:function(t){g(e,t)}}).done((function(t){console.log(t)})):t.ajax({url:i+e.api,type:"POST",data:s,dataType:"json",processData:!1,contentType:!1,cache:!1,success:function(t){g(e,t)},error:function(t,n,a){e.error&&e.error(t,n,a)},complete:function(t,n){e.complete&&e.complete(t,n)}})}function w(e,n){if(e.mock){var a=e.mock;return t.getJSON(a.path,(function(t){a.error?e.error&&e.error(t):e.success&&e.success(t),e.complete&&e.complete()})),!0}return!1}n.api={needSessionToken:!1,requestQueue:[],addOperationLogGetRequestList:["ec/m/celebrity/mobile/get","ec/m/star/mobile/get","ec/m/supplier/brand/user/mobile/get"],inited:!1,h5Url:l,appKey:r,appPwd:u,apiUrl:p,apiEnv:c,isWaiting:!1,exceptionStartTime:0,currentExceptionCount:0,reset:function(){this.needSessionToken=!1,this.requestQueue=[],this.inited=!1},init:function(){this.inited||(this.inited=!0,this.appKey=localStorage.getItem("app_key")||this.appKey,this.appPwd=localStorage.getItem("app_pwd")||this.appPwd)},get:function(t){this.init();var e="GET",n=function(){_(t,e)};t.fn=n,this.callRequest(t)},post:function(t){this.init();var e="POST",n=function(){_(t,e)};t.fn=n,this.callRequest(t)},file:function(t){this.init();var e="POST",n=function(){k(t,e)};t.fn=n,this.callRequest(t)},callRequest:function(t){if(n.api.session_token=n.storage.get("session_token"),n.api.session_token||n.api.needSessionToken){if(t.needLogin&&n.login.isLogin())return void n.login.goLogin();n.api.needSessionToken?this.requestQueue.push(t.fn):t.fn()}else n.api.needSessionToken=!0,v((function(){t.fn.call(),n.api.needSessionToken=!1,n.api.callRequestQueue()}))},callRequestQueue:function(){for(var t=this.requestQueue,e=0,n=t.length;e<n;e++)t[e].call();this.requestQueue=[]}},n.api.get=Object(o["a"])(n.api.get.bind(n.api)),n.api.post=Object(o["a"])(n.api.post.bind(n.api)),n.api.file=Object(o["a"])(n.api.file.bind(n.api))})(window,window.lib||(window.lib={}))}.call(this,n("1157"))},"861f":function(t,e,n){},9857:function(t,e,n){"use strict";var a=n("5d78"),i=n.n(a);i.a},"9a4b":function(t,e,n){},a0c3:function(t,e,n){},ace7:function(t,e){t.exports={dev:{APP_KEY:"554992ad80486d1c518b47b69bfd4f66",APP_PWD:"985a3c029ed29d5ead725f5803592c4c",API_URL:"http://apidev001.mockuai.com/",H5_URL:"http://waptest.snapshot.m.wudizhanggui.com/"},mock:{APP_KEY:"554992ad80486d1c518b47b69bfd4f66",APP_PWD:"985a3c029ed29d5ead725f5803592c4c",API_URL:"http://yapi.mockuai.com/mock/1987/",H5_URL:"http://waptest.snapshot.m.wudizhanggui.com/"},test:{APP_KEY:"554992ad80486d1c518b47b69bfd4f66",APP_PWD:"985a3c029ed29d5ead725f5803592c4c",API_URL:"https://apidaily.mockuai.com/",H5_URL:"http://waptest.snapshot.m.wudizhanggui.com/"},wapa:{APP_KEY:"554992ad80486d1c518b47b69bfd4f66",APP_PWD:"985a3c029ed29d5ead725f5803592c4c",API_URL:"https://apiwapa.mockuai.com/",H5_URL:"http://wapa.snapshot.m.wudizhanggui.com/"},beta:{APP_KEY:"7ff47887933bece366de5259b1e20a25",APP_PWD:"f89b45f02bac39688e329595af411a99",API_URL:"https://mop-beta.mockuai.com/",H5_URL:"https://snapshot.m.wudizhanggui.com/"},online:{APP_KEY:"7ff47887933bece366de5259b1e20a25",APP_PWD:"f89b45f02bac39688e329595af411a99",API_URL:"https://api.mockuai.com/",H5_URL:"https://snapshot.m.wudizhanggui.com/"}}},c5d8:function(t,e,n){n("c975"),n("ac1f"),n("5319"),n("1276"),function(t,e){var n={getParamsFromUrl:function(){var t={},e=location.href,n=e.indexOf("?")>-1&&e.split("?")[1]||null;if(!n)return{};for(var a=n.split("&"),i=0;i<a.length;i++){var o=a[i].split("=");if("undefined"===typeof t[o[0]])t[o[0]]=o[1];else if("string"===typeof t[o[0]]){var c=[t[o[0]],o[1]];t[o[0]]=c}else t[o[0]].push(o[1])}return t}};e.login={isLogin:function(){return!!e.storage.get("access_token")},goLogin:function(t,n){t=t||location.href,e.storage.set("access_token",""),console.log(t),e.api.isWaiting=!1},logout:function(t){t=t||"",e.storage.rm("access_token"),e.storage.rm("session_token"),e.storage.rm("refresh_token")},login:function(t,a){if(t&&t.access_token){if(!a){var i=n.getParamsFromUrl();i.redirectUrl?(a=decodeURIComponent(i.redirectUrl),a.indexOf("/manage/index")>-1&&(a="/")):a="/"}e.storage.set("access_token",t.access_token),e.storage.set("refresh_token",t.refresh_token),e.storage.set("user",t.data.admin),location.replace(a)}},setAppKeyAppPwd:function(t,n){localStorage.setItem("app_key",t),localStorage.setItem("app_pwd",n),e.api.app_key=t,e.api.app_pwd=n},getUserName:function(){return e.storage.get("userName")}}}(window,window.lib||(window.lib={}))},cd7e:function(t,e,n){"use strict";var a=n("a0c3"),i=n.n(a);i.a},d259:function(t,e,n){"use strict";var a=n("9a4b"),i=n.n(a);i.a},ed08:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=document.createElement("script"),a=e||function(){};n.type="text/javascript",n.onload=function(){a()},n.src=t,document.getElementsByTagName("head")[0].appendChild(n)},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};t()}}},[[0,"runtime~app","chunk-vendors"]]]);
//# sourceMappingURL=app.d49faf80.js.map