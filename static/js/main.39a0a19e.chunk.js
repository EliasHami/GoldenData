(this.webpackJsonphami_elias=this.webpackJsonphami_elias||[]).push([[0],{29:function(e,n,t){e.exports=t(66)},34:function(e,n,t){},35:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){e.exports=t.p+"static/media/moi.7dba372e.jpg"},49:function(e,n,t){},50:function(e,n,t){},62:function(e,n,t){e.exports=t.p+"static/media/numero1.3a9dc53b.jpg"},64:function(e,n,t){},65:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(24),c=t.n(r),o=(t(34),t(6)),i=t(1),s=(t(35),t(11)),u=t(12);function m(){var e=Object(s.a)(["\nfont-size: 25px;\nbackground:#fff;\noverflow: hidden;\nposition: fixed;\ntop: 0;\nz-index: 999;\nmargin: 0;\nwidth : 100%;\nbox-shadow : 0 5px 20px -10px #000;\n\n& ul {\n      display : flex;\n      align-items : center;\n      list-style-type: none;\n}\n\n& a {\n      text-decoration: none;\n      color: #333;\n      cursor: pointer;\n      margin : 0 30px;\n}\n\n& a:hover {\n      color: #10828C;\n}\n\n"]);return m=function(){return e},e}var d=u.a.nav(m()),p=function(){return l.a.createElement(d,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/",className:"nav-brand"},"Accueil")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/blog",className:"nav-a"},"Blog"))))},E=(t(42),function(){return l.a.createElement("section",{className:"about",id:"about"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"column-image"},l.a.createElement("img",{src:t(43),alt:"",className:"image"})),l.a.createElement("div",{className:"column-desc"},l.a.createElement("h1",null,"D\xe9veloppeur Front-End Toulouse"),l.a.createElement("p",null,"Je me pr\xe9sente, je m'appelle Elias, j'ai 28 ans et je suis d\xe9veloppeur Web Front-End.",l.a.createElement("br",null),"Je suis passionn\xe9 d'informatique : D\xe9veloppement Web et de jeux vid\xe9os.",l.a.createElement("br",null),"Je donne \xe9galement des cours de web sur Superprof :)",l.a.createElement("br",null),"J'aime \xe9galement le sport et jouer aux jeux vid\xe9os.",l.a.createElement("br",null),"N\u2019h\xe9sitez pas \xe0 me contacter !"))))}),h=t(9);function v(){var e=Object(s.a)(["\ndisplay: flex;\njustify-content : space-between;\nalign-items : center;\nposition: absolute;\nbottom: 0;\nwidth: 100%;\nheight: 5rem; \nbackground: #fff;\nborder-top : 1px solid #e4e4e4;\n\n& > div {\n      display : flex;\n      gap : 5px;\n      align-items : center;\n}\n\n& a {\n      height : 10px;\n      width : 10px;\n}\n\n& small {\n      color : #545454;\n      padding-left : 50px;\n}\n"]);return v=function(){return e},e}var f=u.a.footer(v()),g=function(){return l.a.createElement(f,null,l.a.createElement("small",null,"\xa9 Hami Elias"),l.a.createElement("div",null,l.a.createElement(h.SocialIcon,{url:"https://www.linkedin.com/in/elias-hami-a0a066101/",style:{width:30,height:30}}),l.a.createElement(h.SocialIcon,{url:"https://github.com/EliasHami",style:{width:30,height:30}}),l.a.createElement(h.SocialIcon,{url:"https://twitter.com/Eliastomere",style:{width:30,height:30}}),l.a.createElement(h.SocialIcon,{url:"mailto:elias.hami@outlook.com",style:{width:30,height:30}})),l.a.createElement("div",null))},b=t(4),x=(t(49),t(50),t(13)),w=t.n(x),j=function(e){var n,a,r=e.post;return l.a.createElement(o.b,{to:"blog/posts/"+r.id,className:"card"},l.a.createElement("img",{src:t(62),alt:"Avatar",className:"card-img"}),l.a.createElement("h3",{className:"card-title"},null===r||void 0===r||null===(n=r.title)||void 0===n?void 0:n.rendered),l.a.createElement("p",{className:"card-fade"},w()(null===r||void 0===r||null===(a=r.excerpt)||void 0===a?void 0:a.rendered)))},N=t(19),O=t.n(N),y=t(28),k=function(e,n){var t=Object(a.useState)(n),l=Object(b.a)(t,2),r=l[0],c=l[1],o=Object(a.useState)(!1),i=Object(b.a)(o,2),s=i[0],u=i[1],m=Object(a.useState)(!1),d=Object(b.a)(m,2),p=d[0],E=d[1],h=Object(a.useState)(e),v=Object(b.a)(h,2),f=v[0],g=v[1];return Object(a.useEffect)((function(){(function(){var e=Object(y.a)(O.a.mark((function e(){var n,t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(!1),u(!0),e.prev=2,!f){e.next=11;break}return e.next=6,fetch(f);case 6:return n=e.sent,e.next=9,n.json();case 9:t=e.sent,c(t);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0),E(!0);case 17:u(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}})()()}),[f]),[{data:r,isLoading:s,isError:p},g]},S=function(){var e=k("https://dev.to/api/articles?username=eliashami",[]),n=Object(b.a)(e,1)[0],t=n.data,a=n.isLoading,r=n.isError;return l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",null,"Loading..."):l.a.createElement("ul",{className:"post-list"},r?l.a.createElement("div",null,"Something went wrong ..."):null===t||void 0===t?void 0:t.map((function(e){return l.a.createElement(j,{key:e.id,post:e})}))))},J=(t(64),function(){var e,n,t,r=Object(i.f)().id,c=k("http://eliashami.com/index.php/wp-json/wp/v2/posts/"+r,{}),o=Object(b.a)(c,2),s=o[0],u=s.data,m=s.isLoading,d=s.isError,p=o[1];Object(a.useEffect)((function(){p("posts/"+r)}),[r,p]);var E=(null===(e=u.content)||void 0===e?void 0:e.rendered)&&w()(u.content.rendered);return console.log({content0:null===(n=u.content)||void 0===n?void 0:n.rendered,content:E}),l.a.createElement(l.a.Fragment,null,m?l.a.createElement("div",null,"Loading..."):l.a.createElement("ul",{className:"post-list"},d?l.a.createElement("div",null,"Something went wrong ..."):u&&l.a.createElement("article",{className:"article"},l.a.createElement("h2",null,null===(t=u.title)||void 0===t?void 0:t.rendered),l.a.createElement("p",null,E))))}),L=(t(65),function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Erreur 404"),l.a.createElement("p",null,"La page que vous cherchez n'existe pas !"))});var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement("header",null,l.a.createElement(p,null)),l.a.createElement("main",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:E}),l.a.createElement(i.a,{exact:!0,path:"/blog",component:S}),l.a.createElement(i.a,{exact:!0,path:"/blog/posts/:id",component:J}),l.a.createElement(i.a,{component:L}))),l.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.39a0a19e.chunk.js.map