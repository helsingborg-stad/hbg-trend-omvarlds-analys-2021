function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:"sv",autoDisplay:!1,gaTrack:HbgPrimeArgs.googleTranslate.gaTrack,gaId:HbgPrimeArgs.googleTranslate.gaUA},"google-translate-element")}function loadGoogleTranslate(){googleTranslateLoaded||$.getScript("//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",function(){$("a").each(function(){var t=$(this).attr("href");null!=t&&t.indexOf(location.origin)!==-1&&"#"!==t.substr(0,1)&&(t=updateQueryStringParameter(t,"translate","true"),$(this).attr("href",t))}),googleTranslateLoaded=!0})}function updateQueryStringParameter(t,e,n){var i=new RegExp("([?&])"+e+"=.*?(&|$)","i"),o=t.indexOf("?")!==-1?"&":"?";return t.match(i)?t.replace(i,"$1"+e+"="+n+"$2"):t+o+e+"="+n}var Muncipio={};jQuery(function(){if("undefined"!=typeof algoliasearch){var t=algoliasearch(algolia.application_id,algolia.search_api_key),e=[];jQuery.each(algolia.autocomplete.sources,function(n,i){var o=wp.template(i.tmpl_suggestion);e.push({source:algoliaAutocomplete.sources.hits(t.initIndex(i.index_name),{hitsPerPage:i.max_suggestions,attributesToSnippet:["content:10"],highlightPreTag:"__ais-highlight__",highlightPostTag:"__/ais-highlight__"}),templates:{header:function(){return wp.template("autocomplete-header")({label:_.escape(i.label)})},suggestion:function(t){for(var e in t._highlightResult)"string"==typeof t._highlightResult[e].value&&(t._highlightResult[e].value=_.escape(t._highlightResult[e].value),t._highlightResult[e].value=t._highlightResult[e].value.replace(/__ais-highlight__/g,"<em>").replace(/__\/ais-highlight__/g,"</em>"));for(var e in t._snippetResult)"string"==typeof t._snippetResult[e].value&&(t._snippetResult[e].value=_.escape(t._snippetResult[e].value),t._snippetResult[e].value=t._snippetResult[e].value.replace(/__ais-highlight__/g,"<em>").replace(/__\/ais-highlight__/g,"</em>"));return o(t)}}})}),jQuery("#site-header "+algolia.autocomplete.input_selector+", .hero "+algolia.autocomplete.input_selector).each(function(t){var n=jQuery(this),i={debug:algolia.debug,hint:!1,openOnFocus:!0,appendTo:"body",templates:{empty:wp.template("autocomplete-empty")}};algolia.powered_by_enabled&&(i.templates.footer=wp.template("autocomplete-footer"));var o=algoliaAutocomplete(n[0],i,e).on("autocomplete:selected",function(t,e){window.location.href=e.permalink});jQuery(window).scroll(function(){"block"===o.autocomplete.getWrapper().style.display&&(o.autocomplete.close(),o.autocomplete.open())})}),jQuery(document).on("click",".algolia-powered-by-link",function(t){t.preventDefault(),window.location="https://www.algolia.com/?utm_source=WordPress&utm_medium=extension&utm_content="+window.location.hostname+"&utm_campaign=poweredby"})}}),document.addEventListener("DOMContentLoaded",function(){if(document.getElementById("algolia-search-box")){var t=instantsearch({appId:algolia.application_id,apiKey:algolia.search_api_key,indexName:algolia.indices.searchable_posts.name,urlSync:{mapping:{q:"s"},trackedParameters:["query"]},searchParameters:{facetingAfterDistinct:!0,highlightPreTag:"__ais-highlight__",highlightPostTag:"__/ais-highlight__"}});t.addWidget(instantsearch.widgets.searchBox({container:"#algolia-search-box",placeholder:"Search for...",wrapInput:!1,poweredBy:!1,cssClasses:{input:["form-control","form-control-lg"]}})),t.addWidget(instantsearch.widgets.stats({container:"#algolia-stats",autoHideContainer:!1,templates:{body:wp.template("instantsearch-status")}})),t.addWidget(instantsearch.widgets.hits({container:"#algolia-hits",hitsPerPage:10,cssClasses:{root:["search-result-list"],item:["search-result-item"]},templates:{empty:wp.template("instantsearch-empty"),item:wp.template("instantsearch-hit")},transformData:{item:function(t){t.contentSnippet=t.content.length>300?t.content.substring(0,297)+"...":t.content;for(var e in t._highlightResult)"string"==typeof t._highlightResult[e].value&&(t._highlightResult[e].value=_.escape(t._highlightResult[e].value),t._highlightResult[e].value=t._highlightResult[e].value.replace(/__ais-highlight__/g,"<em>").replace(/__\/ais-highlight__/g,"</em>"));return t}}})),t.addWidget(instantsearch.widgets.pagination({container:"#algolia-pagination",cssClasses:{root:["pagination"],item:["page"],disabled:["hidden"]}})),t.start()}}),Muncipio=Muncipio||{},Muncipio.Post=Muncipio.Post||{},Muncipio.Post.Comments=function(t){function e(){t(function(){this.handleEvents()}.bind(this))}return e.prototype.handleEvents=function(){t(document).on("click","#edit-comment",function(t){t.preventDefault(),this.displayEditForm(t)}.bind(this)),t(document).on("submit","#commentupdate",function(t){t.preventDefault(),this.udpateComment(t)}.bind(this)),t(document).on("click","#delete-comment",function(t){t.preventDefault(),window.confirm(MunicipioLang.messages.deleteComment)&&this.deleteComment(t)}.bind(this)),t(document).on("click",".cancel-update-comment",function(t){t.preventDefault(),this.cleanUp()}.bind(this)),t(document).on("click",".comment-reply-link",function(t){this.cleanUp()}.bind(this))},e.prototype.udpateComment=function(e){var n=t(e.target).closest(".comment-body").find(".comment-content"),i=new FormData(e.target),o=n.html();i.append("action","update_comment"),t.ajax({url:ajaxurl,type:"post",context:this,processData:!1,contentType:!1,data:i,dataType:"json",beforeSend:function(){n.html(i.get("comment")),this.cleanUp()},success:function(t){t.success||(n.html(o),this.showError(n))},error:function(t,e){n.html(o),this.showError(n)}})},e.prototype.displayEditForm=function(e){var n=t(e.currentTarget).data("comment-id"),i=t(e.currentTarget).data("post-id"),o=t(".comment-body","#answer-"+n+", #comment-"+n).first();this.cleanUp(),t(".comment-content, .comment-footer",o).hide(),o.append('<div class="loading gutter gutter-top gutter-margin"><div></div><div></div><div></div><div></div></div>'),t.when(this.getCommentForm(n,i)).then(function(e){e.success?(o.append(e.data),t(".loading",o).remove(),t(".tinymce-editor").length&&(tinymce.EditorManager.execCommand("mceRemoveEditor",!0,"comment-edit"),tinymce.EditorManager.execCommand("mceAddEditor",!0,"comment-edit"))):(this.cleanUp(),this.showError(o))})},e.prototype.getCommentForm=function(e,n){return t.ajax({url:ajaxurl,type:"post",dataType:"json",context:this,data:{action:"get_comment_form",commentId:e,postId:n}})},e.prototype.deleteComment=function(e){var n=t(e.currentTarget),i=n.data("comment-id"),o=n.data("comment-nonce");t.ajax({url:ajaxurl,type:"post",context:this,dataType:"json",data:{action:"remove_comment",id:i,nonce:o},beforeSend:function(t){n.closest("li.answer, li.comment").fadeOut("fast")},success:function(t){t.success||this.showError(n)},error:function(t,e){this.showError(n)}})},e.prototype.cleanUp=function(e){t(".comment-update").remove(),t(".loading",".comment-body").remove(),t(".dropdown-menu").hide(),t(".comment-content, .comment-footer").fadeIn("fast")},e.prototype.showError=function(t){t.closest("li.answer, li.comment").fadeIn("fast").find(".comment-body:first").append('<small class="text-danger">'+MunicipioLang.messages.onError+"</small>").find(".text-danger").delay(4e3).fadeOut("fast")},new e}(jQuery),function(){function t(t,e,n){return t.call.apply(t.bind,arguments)}function e(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function n(i,o,a){return n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t:e,n.apply(null,arguments)}function i(t,e){this.a=t,this.m=e||t,this.c=this.m.document}function o(t,e,n,i){if(e=t.c.createElement(e),n)for(var o in n)n.hasOwnProperty(o)&&("style"==o?e.style.cssText=n[o]:e.setAttribute(o,n[o]));return i&&e.appendChild(t.c.createTextNode(i)),e}function a(t,e,n){t=t.c.getElementsByTagName(e)[0],t||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function r(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||i.push(e[o])}for(e=[],o=0;o<i.length;o+=1){for(a=!1,s=0;s<n.length;s+=1)if(i[o]===n[s]){a=!0;break}a||e.push(i[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function c(t,e){for(var n=t.className.split(/\s+/),i=0,o=n.length;i<o;i++)if(n[i]==e)return!0;return!1}function l(t){if("string"==typeof t.f)return t.f;var e=t.m.location.protocol;return"about:"==e&&(e=t.a.location.protocol),"https:"==e?"https:":"http:"}function u(t){return t.m.location.hostname||t.a.location.hostname}function h(t,e,n){function i(){l&&s&&r&&(l(c),l=null)}e=o(t,"link",{rel:"stylesheet",href:e,media:"all"});var s=!1,r=!0,c=null,l=n||null;it?(e.onload=function(){s=!0,i()},e.onerror=function(){s=!0,c=Error("Stylesheet failed to load"),i()}):setTimeout(function(){s=!0,i()},0),a(t,"head",e)}function f(t,e,n,i){var a=t.c.getElementsByTagName("head")[0];if(a){var s=o(t,"script",{src:e}),r=!1;return s.onload=s.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,n&&n(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&a.removeChild(s))},a.appendChild(s),setTimeout(function(){r||(r=!0,n&&n(Error("Script load timeout")))},i||5e3),s}return null}function p(){this.a=0,this.c=null}function d(t){return t.a++,function(){t.a--,m(t)}}function g(t,e){t.c=e,m(t)}function m(t){0==t.a&&t.c&&(t.c(),t.c=null)}function v(t){this.a=t||"-"}function y(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function w(t){return x(t)+" "+(t.f+"00")+" 300px "+_(t.c)}function _(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function b(t){return t.a+t.f}function x(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function j(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function k(t,e){this.c=t,this.f=t.m.document.documentElement,this.h=e,this.a=new v("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function T(t){t.g&&r(t.f,[t.a.c("wf","loading")]),M(t,"loading")}function C(t){if(t.g){var e=c(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),r(t.f,n,i)}M(t,"inactive")}function M(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,b(n)):t.h[e]())}function E(){this.c={}}function S(t,e,n){var i,o=[];for(i in e)if(e.hasOwnProperty(i)){var a=t.c[i];a&&o.push(a(e[i],n))}return o}function P(t,e){this.c=t,this.f=e,this.a=o(this.c,"span",{"aria-hidden":"true"},this.f)}function A(t){a(t.c,"body",t.a)}function R(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+_(t.c)+";"+("font-style:"+x(t)+";font-weight:"+(t.f+"00")+";")}function D(t,e,n,i,o,a){this.g=t,this.j=e,this.a=i,this.c=n,this.f=o||3e3,this.h=a||void 0}function I(t,e,n,i,o,a,s){this.v=t,this.B=e,this.c=n,this.a=i,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.o=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.o=new P(this.c,this.s),t=new y(this.a.c+",serif",b(this.a)),t=R(t),this.g.a.style.cssText=t,t=new y(this.a.c+",sans-serif",b(this.a)),t=R(t),this.h.a.style.cssText=t,t=new y("serif",b(this.a)),t=R(t),this.j.a.style.cssText=t,t=new y("sans-serif",b(this.a)),t=R(t),this.o.a.style.cssText=t,A(this.g),A(this.h),A(this.j),A(this.o)}function F(){if(null===at){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);at=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return at}function Q(t,e,n){for(var i in ot)if(ot.hasOwnProperty(i)&&e===t.f[ot[i]]&&n===t.f[ot[i]])return!0;return!1}function W(t){var e,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(e=n===t.f.serif&&i===t.f["sans-serif"])||(e=F()&&Q(t,n,i)),e?nt()-t.A>=t.w?F()&&Q(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?O(t,t.v):O(t,t.B):L(t):O(t,t.v)}function L(t){setTimeout(n(function(){W(this)},t),50)}function O(t,e){setTimeout(n(function(){s(this.g.a),s(this.h.a),s(this.j.a),s(this.o.a),e(this.a)},t),0)}function N(t,e,n){this.c=t,this.a=e,this.f=0,this.o=this.j=!1,this.s=n}function B(t){0==--t.f&&t.j&&(t.o?(t=t.a,t.g&&r(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),M(t,"active")):C(t.a))}function $(t){this.j=t,this.a=new E,this.h=0,this.f=this.g=!0}function H(t,e,i,o,a){var s=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=a||null,c=o||null||{};if(0===i.length&&s)C(e.a);else{e.f+=i.length,s&&(e.j=s);var l,u=[];for(l=0;l<i.length;l++){var h=i[l],f=c[h.c],p=e.a,d=h;p.g&&r(p.f,[p.a.c("wf",d.c,b(d).toString(),"loading")]),M(p,"fontloading",d),p=null,null===st&&(st=!!window.FontFace&&(!(d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))||42<parseInt(d[1],10))),p=st?new D(n(e.g,e),n(e.h,e),e.c,h,e.s,f):new I(n(e.g,e),n(e.h,e),e.c,h,e.s,t,f),u.push(p)}for(l=0;l<u.length;l++)u[l].start()}},0)}function U(t,e,n){var i=[],o=n.timeout;T(e);var i=S(t.a,n,t.c),a=new N(t.c,e,o);for(t.h=i.length,e=0,n=i.length;e<n;e++)i[e].load(function(e,n,i){H(t,a,e,n,i)})}function q(t,e){this.c=t,this.a=e}function G(t,e,n){var i=l(t.c);return t=(t.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""),i+"//"+t+"/"+e+".js"+(n?"?v="+n:"")}function K(t,e){this.c=t,this.a=e}function z(t,e,n){t?this.c=t:this.c=e+rt,this.a=[],this.f=[],this.g=n||""}function J(t,e){for(var n=e.length,i=0;i<n;i++){var o=e[i].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}function V(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;i<e;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}function X(t){this.f=t,this.a=[],this.c={}}function Y(t){for(var e=t.f.length,n=0;n<e;n++){var i=t.f[n].split(":"),o=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var s,r=i[1];if(s=[],r)for(var r=r.split(","),c=r.length,l=0;l<c;l++){var u;if(u=r[l],u.match(/^[\w-]+$/)){var h=ht.exec(u.toLowerCase());if(null==h)u="";else{if(u=h[2],u=null==u||""==u?"n":ut[u],h=h[1],null==h||""==h)h="4";else var f=lt[h],h=f?f:isNaN(h)?"4":h.substr(0,1);u=[u,h].join("")}}else u="";u&&s.push(u)}0<s.length&&(a=s),3==i.length&&(i=i[2],s=[],i=i?i.split(","):s,0<i.length&&(i=ct[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=ct[o])&&(t.c[o]=i),i=0;i<a.length;i+=1)t.a.push(new y(o,a[i]))}}function Z(t,e){this.c=t,this.a=e}function tt(t,e){this.c=t,this.a=e}function et(t,e){this.c=t,this.f=e,this.a=[]}var nt=Date.now||function(){return+new Date},it=!!window.FontFace;v.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},D.prototype.start=function(){var t=this.c.m.document,e=this,n=nt(),i=new Promise(function(i,o){function a(){nt()-n>=e.f?o():t.fonts.load(w(e.a),e.h).then(function(t){1<=t.length?i():setTimeout(a,25)},function(){o()})}a()}),o=new Promise(function(t,n){setTimeout(n,e.f)});Promise.race([o,i]).then(function(){e.g(e.a)},function(){e.j(e.a)})};var ot={D:"serif",C:"sans-serif"},at=null;I.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=nt(),W(this)};var st=null;N.prototype.g=function(t){var e=this.a;e.g&&r(e.f,[e.a.c("wf",t.c,b(t).toString(),"active")],[e.a.c("wf",t.c,b(t).toString(),"loading"),e.a.c("wf",t.c,b(t).toString(),"inactive")]),M(e,"fontactive",t),this.o=!0,B(this)},N.prototype.h=function(t){var e=this.a;if(e.g){var n=c(e.f,e.a.c("wf",t.c,b(t).toString(),"active")),i=[],o=[e.a.c("wf",t.c,b(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,b(t).toString(),"inactive")),r(e.f,i,o)}M(e,"fontinactive",t),B(this)},$.prototype.load=function(t){this.c=new i(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,U(this,new k(this.c,t),t)},q.prototype.load=function(t){function e(){if(a["__mti_fntLst"+i]){var n,o=a["__mti_fntLst"+i](),s=[];if(o)for(var r=0;r<o.length;r++){var c=o[r].fontfamily;void 0!=o[r].fontStyle&&void 0!=o[r].fontWeight?(n=o[r].fontStyle+o[r].fontWeight,s.push(new y(c,n))):s.push(new y(c))}t(s)}else setTimeout(function(){e()},50)}var n=this,i=n.a.projectId,o=n.a.version;if(i){var a=n.c.m;f(this.c,G(n,i,o),function(o){o?t([]):(a["__MonotypeConfiguration__"+i]=function(){return n.a},e())}).id="__MonotypeAPIScript__"+i}else t([])},K.prototype.load=function(t){var e,n,i=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new p;for(e=0,n=i.length;e<n;e++)h(this.c,i[e],d(s));var r=[];for(e=0,n=o.length;e<n;e++)if(i=o[e].split(":"),i[1])for(var c=i[1].split(","),l=0;l<c.length;l+=1)r.push(new y(i[0],c[l]));else r.push(new y(i[0]));g(s,function(){t(r,a)})};var rt="//fonts.googleapis.com/css",ct={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},lt={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ut={i:"i",italic:"i",n:"n",normal:"n"},ht=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,ft={Arimo:!0,Cousine:!0,Tinos:!0};Z.prototype.load=function(t){var e=new p,n=this.c,i=new z(this.a.api,l(n),this.a.text),o=this.a.families;J(i,o);var a=new X(o);Y(a),h(n,V(i),d(e)),g(e,function(){t(a.a,a.c,ft)})},tt.prototype.load=function(t){var e=this.a.id,n=this.c.m;e?f(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],o=0;o<e.length;o+=2)for(var a=e[o],s=e[o+1],r=0;r<s.length;r++)i.push(new y(a,s[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(c){}t(i)}},2e3):t([])},et.prototype.load=function(t){var e=this.f.id,n=this.c.m,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var o=0,a=n.fonts.length;o<a;++o){var s=n.fonts[o];i.a.push(new y(s.name,j("font-weight:"+s.weight+";font-style:"+s.style)))}t(i.a)},f(this.c,l(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+u(this.c)+"/"+e+".js",function(e){e&&t([])})):t([])};var pt=new $(window);pt.a.c.custom=function(t,e){return new K(e,t)},pt.a.c.fontdeck=function(t,e){return new et(e,t)},pt.a.c.monotype=function(t,e){return new q(e,t)},pt.a.c.typekit=function(t,e){return new tt(e,t)},pt.a.c.google=function(t,e){return new Z(e,t)};var dt={load:n(pt.load,pt)};"function"==typeof define&&define.amd?define(function(){return dt}):"undefined"!=typeof module&&module.exports?module.exports=dt:(window.WebFont=dt,window.WebFontConfig&&pt.load(window.WebFontConfig))}(),Muncipio=Muncipio||{};var googleTranslateLoaded=!1;location.href.indexOf("translate=true")>-1&&loadGoogleTranslate(),$('[href="#translate"]').on("click",function(t){loadGoogleTranslate()}),Municipio=Municipio||{},Municipio.Helper=Municipio.Helper||{},Municipio.Helper.MainContainer=function(t){function e(){this.removeMainContainer()}return e.prototype.removeMainContainer=function(){return""==t.trim(t("#main-content").html())&&(t("#main-content").remove(),!0)},new e}(jQuery),function(t){"undefined"!=typeof themeColorPalette&&(jQuery.wp.wpColorPicker.prototype.options={palettes:themeColorPalette.colors})}(jQuery);var Municipio={};jQuery(".index-php #screen-meta-links").append('    <div id="screen-options-show-lathund-wrap" class="hide-if-no-js screen-meta-toggle">        <a href="http://lathund.helsingborg.se" id="show-lathund" target="_blank" class="button show-settings">Lathund</a>    </div>'),jQuery(document).ready(function(){jQuery('.acf-field-url input[type="url"]').parents("form").attr("novalidate","novalidate")}),Muncipio=Muncipio||{},Muncipio.Ajax=Muncipio.Ajax||{},Muncipio.Ajax.LikeButton=function(t){function e(){this.init()}return e.prototype.init=function(){t("a.like-button").on("click",function(t){return this.ajaxCall(t.target),!1}.bind(this))},e.prototype.ajaxCall=function(e){var n=t(e).data("comment-id"),i=t("span#like-count",e),o=t(e);t.ajax({url:likeButtonData.ajax_url,type:"post",data:{action:"ajaxLikeMethod",comment_id:n,nonce:likeButtonData.nonce},beforeSend:function(){var t=i.html();o.hasClass("active")?(t--,o.toggleClass("active")):(t++,o.toggleClass("active")),i.html(t)},success:function(t){}})},new e}($),Muncipio=Muncipio||{},Muncipio.Ajax=Muncipio.Ajax||{},Muncipio.Ajax.ShareEmail=function(t){function e(){t(function(){this.handleEvents()}.bind(this))}return e.prototype.handleEvents=function(){t(document).on("submit",".social-share-email",function(t){t.preventDefault(),this.share(t)}.bind(this))},e.prototype.share=function(e){var n=t(e.target),i=new FormData(e.target);return i.append("action","share_email"),t.ajax({url:ajaxurl,type:"POST",data:i,dataType:"json",processData:!1,contentType:!1,beforeSend:function(){n.find(".modal-footer").prepend('<div class="loading"><div></div><div></div><div></div><div></div></div>'),n.find(".notice").hide()},success:function(e,i,o){e.success?(t(".modal-footer",n).prepend('<span class="notice success gutter gutter-margin gutter-vertical"><i class="pricon pricon-check"></i> '+e.data+"</span>"),setTimeout(function(){location.hash="",n.find(".notice").hide()},3e3)):t(".modal-footer",n).prepend('<span class="notice warning gutter gutter-margin gutter-vertical"><i class="pricon pricon-notice-warning"></i> '+e.data+"</span>")},complete:function(){n.find(".loading").hide()}}),!1},new e}(jQuery),Muncipio=Muncipio||{},Muncipio.Ajax=Muncipio.Ajax||{},Muncipio.Ajax.Suggestions=function(t){function e(){t("#filter-keyword").length&&null!=HbgPrimeArgs.api.postTypeRestUrl&&(t("#filter-keyword").attr("autocomplete","off"),this.handleEvents())}var n,i;return e.prototype.handleEvents=function(){t(document).on("keydown","#filter-keyword",function(e){var i=t(e.target),o=t(".selected","#search-suggestions");return o.siblings().length>0&&t("#search-suggestions li").removeClass("selected"),27==e.keyCode?void t("#search-suggestions").remove():void(13!=e.keyCode&&(38==e.keyCode?(0==o.prev().length?o.siblings().last().addClass("selected"):o.prev().addClass("selected"),i.val(t(".selected","#search-suggestions").text())):40==e.keyCode?(0==o.next().length?o.siblings().first().addClass("selected"):o.next().addClass("selected"),i.val(t(".selected","#search-suggestions").text())):(clearTimeout(n),n=setTimeout(function(){this.search(i.val())}.bind(this),100))))}.bind(this)),t(document).on("click",function(e){t(e.target).closest("#search-suggestions").length||t("#search-suggestions").remove()}.bind(this)),t(document).on("click","#search-suggestions li",function(e){t("#search-suggestions").remove(),t("#filter-keyword").val(t(e.target).text()).parents("form").submit()}.bind(this))},e.prototype.search=function(e){if(e===i)return!1;if(e.length<4)return t("#search-suggestions").remove(),!1;i=e;var n=HbgPrimeArgs.api.postTypeRestUrl+"?per_page=6&search="+e;t.get(n,function(n){return n.length?void this.output(n,e):void t("#search-suggestions").remove()}.bind(this),"JSON")},e.prototype.output=function(e,n){var i=t("#search-suggestions");i.length||(i=t('<div id="search-suggestions"><ul></ul></div>')),t("ul",i).empty(),t.each(e,function(e,n){t("ul",i).append("<li>"+n.title.rendered+"</li>")}),t("li",i).first().addClass("selected"),t("#filter-keyword").parent().append(i),i.slideDown(200)},new e}(jQuery);