(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-972af9d6"],{"0693":function(t,e,n){"use strict";n("cdf1")},"0cb2":function(t,e,n){var i=n("7b0b"),s=Math.floor,r="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,l,u){var f=n+t.length,d=c.length,h=o;return void 0!==l&&(l=i(l),h=a),r.call(u,h,(function(i,r){var a;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":a=l[r.slice(1,-1)];break;default:var o=+r;if(0===o)return i;if(o>d){var u=s(o/10);return 0===u?i:u<=d?void 0===c[u-1]?r.charAt(1):c[u-1]+r.charAt(1):i}a=c[o-1]}return void 0===a?"":a}))}},"0e99":function(t,e,n){"use strict";n("e547")},"107c":function(t,e,n){var i=n("d039");t.exports=i((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1148:function(t,e,n){"use strict";var i=n("a691"),s=n("1d80");t.exports=function(t){var e=String(s(this)),n="",r=i(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},"14c3":function(t,e,n){var i=n("c6b6"),s=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"14e1":function(t,e,n){},"159b":function(t,e,n){var i=n("da84"),s=n("fdbc"),r=n("17c2"),a=n("9112");for(var o in s){var c=i[o],l=c&&c.prototype;if(l&&l.forEach!==r)try{a(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,s=n("a640"),r=s("forEach");t.exports=r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"19a4":function(t,e,n){"use strict";n("4d86")},"219e":function(t,e,n){},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),s=n("825a"),r=n("d039"),a=n("ad6d"),o="toString",c=RegExp.prototype,l=c[o],u=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=o;(u||f)&&i(RegExp.prototype,o,(function(){var t=s(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"279a":function(t,e,n){"use strict";n("14e1")},"39fb":function(t,e,n){},"3db6":function(t,e,n){"use strict";n("c143")},4078:function(t,e,n){"use strict";n("82a5")},"408a":function(t,e,n){var i=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,n){var i=n("861d"),s=n("c6b6"),r=n("b622"),a=r("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==s(t))}},"4d63":function(t,e,n){var i=n("83ab"),s=n("da84"),r=n("94ca"),a=n("7156"),o=n("9112"),c=n("9bf2").f,l=n("241c").f,u=n("44e7"),f=n("ad6d"),d=n("9f7f"),h=n("6eeb"),v=n("d039"),p=n("5135"),m=n("69f3").enforce,g=n("2626"),b=n("b622"),A=n("fce3"),x=n("107c"),C=b("match"),I=s.RegExp,y=I.prototype,w=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,_=/a/g,E=/a/g,T=new I(_)!==_,O=d.UNSUPPORTED_Y,k=i&&(!T||O||A||x||v((function(){return E[C]=!1,I(_)!=_||I(E)==E||"/a/i"!=I(_,"i")}))),D=function(t){for(var e,n=t.length,i=0,s="",r=!1;i<=n;i++)e=t.charAt(i),"\\"!==e?r||"."!==e?("["===e?r=!0:"]"===e&&(r=!1),s+=e):s+="[\\s\\S]":s+=e+t.charAt(++i);return s},P=function(t){for(var e,n=t.length,i=0,s="",r=[],a={},o=!1,c=!1,l=0,u="";i<=n;i++){if(e=t.charAt(i),"\\"===e)e+=t.charAt(++i);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:w.test(t.slice(i+1))&&(i+=2,c=!0),s+=e,l++;continue;case">"===e&&c:if(""===u||p(a,u))throw new SyntaxError("Invalid capture group name");a[u]=!0,r.push([u,l]),c=!1,u="";continue}c?u+=e:s+=e}return[s,r]};if(r("RegExp",k)){for(var j=function(t,e){var n,i,s,r,c,l,d=this instanceof j,h=u(t),v=void 0===e,p=[],g=t;if(!d&&h&&v&&t.constructor===j)return t;if((h||t instanceof j)&&(t=t.source,v&&(e="flags"in g?g.flags:f.call(g))),t=void 0===t?"":String(t),e=void 0===e?"":String(e),g=t,A&&"dotAll"in _&&(i=!!e&&e.indexOf("s")>-1,i&&(e=e.replace(/s/g,""))),n=e,O&&"sticky"in _&&(s=!!e&&e.indexOf("y")>-1,s&&(e=e.replace(/y/g,""))),x&&(r=P(t),t=r[0],p=r[1]),c=a(I(t,e),d?this:y,j),(i||s||p.length)&&(l=m(c),i&&(l.dotAll=!0,l.raw=j(D(t),n)),s&&(l.sticky=!0),p.length&&(l.groups=p)),t!==g)try{o(c,"source",""===g?"(?:)":g)}catch(b){}return c},S=function(t){t in j||c(j,t,{configurable:!0,get:function(){return I[t]},set:function(e){I[t]=e}})},R=l(I),B=0;R.length>B;)S(R[B++]);y.constructor=j,j.prototype=y,h(s,"RegExp",j)}g("RegExp")},"4d86":function(t,e,n){},"4de4":function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").filter,r=n("1dde"),a=r("filter");i({target:"Array",proto:!0,forced:!a},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,n){"use strict";var i=n("d784"),s=n("d039"),r=n("825a"),a=n("50c4"),o=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("0cb2"),f=n("14c3"),d=n("b622"),h=d("replace"),v=Math.max,p=Math.min,m=function(t){return void 0===t?t:String(t)},g=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),A=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));i("replace",(function(t,e,n){var i=b?"$":"$0";return[function(t,n){var i=c(this),s=void 0==t?void 0:t[h];return void 0!==s?s.call(t,i,n):e.call(String(i),t,n)},function(t,s){if("string"===typeof s&&-1===s.indexOf(i)&&-1===s.indexOf("$<")){var c=n(e,this,t,s);if(c.done)return c.value}var d=r(this),h=String(t),g="function"===typeof s;g||(s=String(s));var b=d.global;if(b){var A=d.unicode;d.lastIndex=0}var x=[];while(1){var C=f(d,h);if(null===C)break;if(x.push(C),!b)break;var I=String(C[0]);""===I&&(d.lastIndex=l(h,a(d.lastIndex),A))}for(var y="",w=0,_=0;_<x.length;_++){C=x[_];for(var E=String(C[0]),T=v(p(o(C.index),h.length),0),O=[],k=1;k<C.length;k++)O.push(m(C[k]));var D=C.groups;if(g){var P=[E].concat(O,T,h);void 0!==D&&P.push(D);var j=String(s.apply(void 0,P))}else j=u(E,h,T,O,D,s);T>=w&&(y+=h.slice(w,T)+j,w=T+E.length)}return y+h.slice(w)}]}),!A||!g||b)},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");var i=n("ade3");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"684a":function(t,e){t.exports="data:image/png;base64,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"},"695f":function(t,e,n){"use strict";n("9a62")},"6d71":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"good-list"},t._l(t.goods,(function(t,e){return n("goods-list-item",{key:e,attrs:{"goods-item":t}})})),1)},s=[],r=n("9977"),a={components:{GoodsListItem:r["a"]},props:{goods:{type:Array,default:function(){return[]}}}},o=a,c=(n("8a4a"),n("2877")),l=Object(c["a"])(o,i,s,!1,null,null,null);e["a"]=l.exports},7686:function(t,e,n){},"7a74":function(t,e,n){t.exports=n.p+"img/back.26df9036.svg"},"81b4":function(t,e,n){"use strict";n("7686")},"82a5":function(t,e,n){},"8a4a":function(t,e,n){"use strict";n("adf1")},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),s=n("9f7f"),r=n("5692"),a=n("7c73"),o=n("69f3").get,c=n("fce3"),l=n("107c"),u=RegExp.prototype.exec,f=r("native-string-replace",String.prototype.replace),d=u,h=function(){var t=/a/,e=/b*/g;return u.call(t,"a"),u.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),v=s.UNSUPPORTED_Y||s.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],m=h||p||v||c||l;m&&(d=function(t){var e,n,s,r,c,l,m,g=this,b=o(g),A=b.raw;if(A)return A.lastIndex=g.lastIndex,e=d.call(A,t),g.lastIndex=A.lastIndex,e;var x=b.groups,C=v&&g.sticky,I=i.call(g),y=g.source,w=0,_=t;if(C&&(I=I.replace("y",""),-1===I.indexOf("g")&&(I+="g"),_=String(t).slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&"\n"!==t[g.lastIndex-1])&&(y="(?: "+y+")",_=" "+_,w++),n=new RegExp("^(?:"+y+")",I)),p&&(n=new RegExp("^"+y+"$(?!\\s)",I)),h&&(s=g.lastIndex),r=u.call(C?n:g,_),C?r?(r.input=r.input.slice(w),r[0]=r[0].slice(w),r.index=g.lastIndex,g.lastIndex+=r[0].length):g.lastIndex=0:h&&r&&(g.lastIndex=g.global?r.index+r[0].length:s),p&&r&&r.length>1&&f.call(r[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r&&x)for(r.groups=l=a(null),c=0;c<x.length;c++)m=x[c],l[m[0]]=r[m[1]];return r}),t.exports=d},"99ba":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"detail"}},[n("detail-nav-bar",{ref:"navBar",staticClass:"detail-navbar",on:{navBarClick:t.navBarClick}}),n("scroll",{ref:"scroll",staticClass:"datail-scroll",attrs:{probeType:3},on:{scroll:t.detailScroll}},[n("detail-swiper",{attrs:{"top-images":t.topImages}}),n("detail-base-info",{attrs:{goods:t.goods}}),n("detail-shop-info",{attrs:{shop:t.shop}}),n("detail-comment-info",{ref:"comment",attrs:{commentInfo:t.commentInfo}}),n("detail-goods-info",{attrs:{detailInfo:t.detailInfo},on:{imageLoad:t.imageLoad}}),n("detail-param-info",{ref:"param",attrs:{paramInfo:t.paramInfo}}),n("goods-list",{ref:"recommends",attrs:{goods:t.recommends}})],1),n("detail-bottom-bar",{on:{addToCart:t.addToCart}}),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backTop.apply(null,arguments)}}})],1)},s=[],r=n("5530"),a=(n("a9e3"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.leftClick},slot:"left"},[i("img",{attrs:{src:n("7a74"),alt:""}})]),i("div",{staticClass:"titles",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,n){return i("div",{key:e,staticClass:"titles-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.titlesClick(n)}}},[t._v(" "+t._s(e)+" ")])})),0)])],1)}),o=[],c=n("a7ac"),l={components:{NavBar:c["a"]},data:function(){return{titles:["商品","评价","参数","推荐"],currentIndex:0,isleftGo:!1}},methods:{titlesClick:function(t){this.currentIndex=t,this.$emit("navBarClick",t)},leftClick:function(){this.$router.back()}}},u=l,f=(n("81b4"),n("2877")),d=Object(f["a"])(u,a,o,!1,null,null,null),h=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{staticClass:"item-swiper"},t._l(t.topImages,(function(t){return n("swiper-item",{key:t},[n("img",{attrs:{src:t,alt:""}})])})),1)},p=[],m=n("dc2c"),g={components:{Swiper:m["a"],SwiperItem:m["b"]},props:{topImages:{type:Array,default:function(){return[]}}}},b=g,A=(n("e4b7"),Object(f["a"])(b,v,p,!1,null,null,null)),x=A.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!==Object.keys(t.goods).length?n("div",{staticClass:"base-info"},[n("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),n("div",{staticClass:"info-price"},[n("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),n("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),n("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))])]),n("div",{staticClass:"info-other"},[n("span",[t._v(t._s(t.goods.columns[0]))]),n("span",[t._v(t._s(t.goods.columns[1]))]),n("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),n("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return n("span",{key:e,staticClass:"info-service-item"},[n("img",{attrs:{src:t.goods.services[e-1].icon}}),n("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},I=[],y={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},w=y,_=(n("695f"),Object(f["a"])(w,C,I,!1,null,"6700df5b",null)),E=_.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop-info"},[n("div",{staticClass:"shop-top"},[n("img",{attrs:{src:t.shop.logo}}),n("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),n("div",{staticClass:"shop-middle"},[n("div",{staticClass:"shop-middle-item shop-middle-left"},[n("div",{staticClass:"info-sells"},[n("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),n("div",{staticClass:"sells-text"},[t._v("总销量")])]),n("div",{staticClass:"info-goods"},[n("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),n("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),n("div",{staticClass:"shop-middle-item shop-middle-right"},[n("table",t._l(t.shop.score,(function(e,i){return n("tr",{key:i},[n("td",[t._v(t._s(e.name))]),n("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),n("td",{staticClass:"better",class:{"better-more":e.isBetter}},[n("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop-bottom"},[n("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],k=(n("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),D=k,P=(n("3db6"),Object(f["a"])(D,T,O,!1,null,"0bf5c51a",null)),j=P.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[0!==Object.keys(t.commentInfo).length?n("div",{staticClass:"comment-info"},[t._m(0),n("div",{staticClass:"info-user"},[n("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),n("span",[t._v(t._s(t.commentInfo.user.uname))])]),n("div",{staticClass:"info-detail"},[n("p",[t._v(t._s(t.commentInfo.content))]),n("div",{staticClass:"info-other"},[n("span",{staticClass:"date"},[t._v(t._s(t.showDate))]),n("span",[t._v(t._s(t.commentInfo.style))])]),n("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return n("img",{key:e,attrs:{src:t}})})),0)])]):t._e()])},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-header"},[n("div",{staticClass:"header-title"},[t._v("用户评价")]),n("div",{staticClass:"header-more"},[t._v(" 更多 "),n("i",{staticClass:"arrow-right"})])])}];n("ac1f"),n("5319"),n("4d63"),n("25f0");function B(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in n)if(new RegExp("(".concat(i,")")).test(e)){var s=n[i]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?s:z(s))}return e}function z(t){return("00"+t).substr(t.length)}var W={name:"DetailCommentInfo",props:{commentInfo:{type:Object,default:function(){return{}}}},data:function(){return{dateValue:{}}},computed:{showDate:function(t){var e=new Date(1e3*t.dateValue);return B(e,"yyyy-MM-dd")}},watch:{commentInfo:function(){this.dateValue=this.commentInfo.created}}},N=W,H=(n("a843"),Object(f["a"])(N,S,R,!1,null,"838fdb52",null)),q=H.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?n("div",{staticClass:"goods-info"},[n("div",{staticClass:"info-desc clear-fix"},[n("div",{staticClass:"start"}),n("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),n("div",{staticClass:"end"})]),n("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),n("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,i){return n("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imageLoad}})})),0)]):t._e()},F=[],Y={name:"detailGoodsInfo",props:{detailInfo:{type:Object,default:function(){return{}}}},methods:{imageLoad:function(){this.$emit("imageLoad")}}},M=Y,U=(n("4078"),Object(f["a"])(M,L,F,!1,null,"868a6690",null)),$=U.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?n("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return n("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return n("tr",{key:i},t._l(e,(function(e,i){return n("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),n("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return n("tr",{key:i},[n("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),n("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?n("div",{staticClass:"info-img"},[n("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},G=[],V={name:"DetailParamInfo",props:{paramInfo:{type:Object}}},Z=V,J=(n("0e99"),Object(f["a"])(Z,X,G,!1,null,"1555e64e",null)),K=J.exports,Q=n("6d71"),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-bar"},[t._m(0),n("div",{staticClass:"bar-item bar-right"},[n("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),n("div",{staticClass:"buy"},[t._v("购买")])])])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bar-item bar-left"},[n("div",[n("i",{staticClass:"icon service"}),n("span",{staticClass:"text"},[t._v("客服")])]),n("div",[n("i",{staticClass:"icon shop"}),n("span",{staticClass:"text"},[t._v("店铺")])]),n("div",[n("i",{staticClass:"icon select"}),n("span",{staticClass:"text"},[t._v("收藏")])])])}],nt={name:"DetailBottomBar",methods:{addToCart:function(){this.$emit("addToCart")}}},it=nt,st=(n("a35b"),Object(f["a"])(it,tt,et,!1,null,"26fbe168",null)),rt=st.exports,at=n("fdd6");function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n("b0c0");var ct=n("1bab");function lt(t){return Object(ct["a"])({url:"/detail",params:{iid:t}})}function ut(){return Object(ct["a"])({url:"/recommend"})}var ft=function t(e,n,i){ot(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=n,this.services=i,this.nowPrice=e.lowNowPrice},dt=function t(e){ot(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},ht=function t(e,n){ot(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=n.tables},vt=n("9fb0"),pt=n("f7f6"),mt=n("eecb"),gt=n("2f62"),bt={name:"deTail",components:{detailNavBar:h,detailSwiper:x,detailBaseInfo:E,detailShopInfo:j,scroll:vt["a"],detailGoodsInfo:$,detailParamInfo:K,detailCommentInfo:q,GoodsList:Q["a"],BackTop:at["a"],detailBottomBar:rt},data:function(){return{id:null,topImages:[],goods:{},shop:{},detailInfo:{},refresh:null,paramInfo:{},commentInfo:{},recommends:[],isShowBackTop:!1,itemListener:null,titleTopYs:[],getTitleTopYs:null,currentIndex:0}},created:function(){var t=this;this.id=this.$route.params.id,lt(this.id).then((function(e){var n=e.data.result;t.topImages=n.itemInfo.topImages,t.goods=new ft(n.itemInfo,n.columns,n.shopInfo.services),t.shop=new dt(n.shopInfo),t.detailInfo=n.detailInfo,t.paramInfo=new ht(n.itemParams.info,n.itemParams.rule),0!==n.rate.cRate&&(t.commentInfo=n.rate.list[0])})),ut().then((function(e){t.recommends=e.data.data.list})),this.getTitleTopYs=Object(pt["a"])((function(){t.titleTopYs=[],t.titleTopYs.push(0),t.titleTopYs.push(t.$refs.comment.$el.offsetTop-49),t.titleTopYs.push(t.$refs.param.$el.offsetTop-49),t.titleTopYs.push(t.$refs.recommends.$el.offsetTop-49),t.titleTopYs.push(Number.MAX_VALUE)}),500)},mixins:[mt["a"]],methods:Object(r["a"])(Object(r["a"])({imageLoad:function(){this.refresh(),this.getTitleTopYs()},backTop:function(){this.$refs.scroll.scrollTo(0,0,300)},detailScroll:function(t){this.isShowBackTop=Math.abs(t.y)>500;for(var e=this.titleTopYs.length,n=0;n<e-1;n++)this.currentIndex!==n&&-t.y>=this.titleTopYs[n]&&-t.y<=this.titleTopYs[n+1]&&(this.currentIndex=n,this.$refs.navBar.currentIndex=this.currentIndex)},navBarClick:function(t){this.$refs.scroll.scrollTo(0,-this.titleTopYs[t],100)}},Object(gt["b"])(["addCart"])),{},{addToCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.nowPrice,e.id=this.id,this.$store.dispatch("addCart",e).then((function(e){t.$toast.show(e,1500)}))}}),mounted:function(){this.refresh=Object(pt["a"])(this.$refs.scroll.refresh,30),this.toTitle=Object(pt["a"])(this.then,500)},destroyed:function(){this.$bus.$off("itemImageLoad",this.itemListener)}},At=bt,xt=(n("279a"),Object(f["a"])(At,i,s,!1,null,null,null));e["default"]=xt.exports},"9a62":function(t,e,n){},"9f7f":function(t,e,n){var i=n("d039"),s=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=i((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a333:function(t,e,n){"use strict";n("b89e")},a35b:function(t,e,n){"use strict";n("39fb")},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},a843:function(t,e,n){"use strict";n("219e")},ab29:function(t,e,n){},ac1f:function(t,e,n){"use strict";var i=n("23e7"),s=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},adf1:function(t,e,n){},b0c0:function(t,e,n){var i=n("83ab"),s=n("9bf2").f,r=Function.prototype,a=r.toString,o=/^\s*function ([^ (]*)/,c="name";i&&!(c in r)&&s(r,c,{configurable:!0,get:function(){try{return a.call(this).match(o)[1]}catch(t){return""}}})},b64b:function(t,e,n){var i=n("23e7"),s=n("7b0b"),r=n("df75"),a=n("d039"),o=a((function(){r(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return r(s(t))}})},b680:function(t,e,n){"use strict";var i=n("23e7"),s=n("a691"),r=n("408a"),a=n("1148"),o=n("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,n){return 0===e?n:e%2===1?u(t,e-1,n*t):u(t*t,e/2,n)},f=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},d=function(t,e,n){var i=-1,s=n;while(++i<6)s+=e*t[i],t[i]=s%1e7,s=l(s/1e7)},h=function(t,e){var n=6,i=0;while(--n>=0)i+=t[n],t[n]=l(i/e),i=i%e*1e7},v=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var i=String(t[e]);n=""===n?i:n+a.call("0",7-i.length)+i}return n},p=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));i({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,n,i,o,c=r(this),l=s(t),p=[0,0,0,0,0,0],m="",g="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(m="-",c=-c),c>1e-21)if(e=f(c*u(2,69,1))-69,n=e<0?c*u(2,-e,1):c/u(2,e,1),n*=4503599627370496,e=52-e,e>0){d(p,0,n),i=l;while(i>=7)d(p,1e7,0),i-=7;d(p,u(10,i,1),0),i=e-1;while(i>=23)h(p,1<<23),i-=23;h(p,1<<i),d(p,1,1),h(p,2),g=v(p)}else d(p,0,n),d(p,1<<-e,0),g=v(p)+a.call("0",l);return l>0?(o=g.length,g=m+(o<=l?"0."+a.call("0",l-o)+g:g.slice(0,o-l)+"."+g.slice(o-l))):g=m+g,g}})},b89e:function(t,e,n){},c143:function(t,e,n){},cdf1:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),s=n("9263"),r=n("d039"),a=n("b622"),o=n("9112"),c=a("species"),l=RegExp.prototype;t.exports=function(t,e,n,u){var f=a(t),d=!r((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),h=d&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!d||!h||n){var v=/./[f],p=e(f,""[t],(function(t,e,n,i,r){var a=e.exec;return a===s||a===l.exec?d&&!r?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}));i(String.prototype,t,p[0]),i(l,f,p[1])}u&&o(l[f],"sham",!0)}},dbb4:function(t,e,n){var i=n("23e7"),s=n("83ab"),r=n("56ef"),a=n("fc6a"),o=n("06cf"),c=n("8418");i({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,n,i=a(t),s=o.f,l=r(i),u={},f=0;while(l.length>f)n=s(i,e=l[f++]),void 0!==n&&c(u,e,n);return u}})},dc2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",(function(){return t._l(t.slideCount,(function(e,i){return n("div",{key:e,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))})):t._e()],2)],2)},s=[],r=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){0==document.querySelector(".swiper").childElementCount?this.observeSwiper():(this.handleDom(),this.startTimer())},methods:{observeSwiper:function(){var t=this,e=document.querySelector(".swiper"),n={childList:!0},i=function(e,n){t.handleDom(),t.startTimer(),n.disconnect()},s=new MutationObserver(i);s.observe(e,n)},startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),a=r,o=(n("19a4"),n("2877")),c=Object(o["a"])(a,i,s,!1,null,"69c92c14",null),l=c.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},f=[],d={name:"Slide"},h=d,v=(n("0693"),Object(o["a"])(h,u,f,!1,null,"376fae32",null)),p=v.exports},e439:function(t,e,n){var i=n("23e7"),s=n("d039"),r=n("fc6a"),a=n("06cf").f,o=n("83ab"),c=s((function(){a(1)})),l=!o||c;i({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return a(r(t),e)}})},e4b7:function(t,e,n){"use strict";n("ab29")},e547:function(t,e,n){},fce3:function(t,e,n){var i=n("d039");t.exports=i((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdd6:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back-top"},[i("img",{attrs:{src:n("684a"),alt:""}})])}],r={},a=r,o=(n("a333"),n("2877")),c=Object(o["a"])(a,i,s,!1,null,"60216bbb",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-972af9d6.00a68193.js.map