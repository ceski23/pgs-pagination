(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,a,t){e.exports={app:"App_app__2_zX8",header:"App_header__3gd7p",logo:"App_logo__2y-fZ",status:"App_status__1abEx",navigation:"App_navigation__38wcU",footer:"App_footer__36HhQ"}},function(e,a,t){e.exports={search:"SearchSection_search__2SIL4",title:"SearchSection_title__cE2zl",searchBox:"SearchSection_searchBox__1Eba-",input:"SearchSection_input__3-i84",submit:"SearchSection_submit__1xW7Z",text:"SearchSection_text__3mjWQ"}},function(e,a,t){e.exports={song:"Song_song__13YL6",info:"Song_info__1kvDr",title:"Song_title__2OQSq",author:"Song_author__3N7nl",cover:"Song_cover__3weCE"}},function(e,a,t){e.exports={songCount:"SongsList_songCount__1rVvN",songs:"SongsList_songs__399Li"}},,,,,,function(e,a,t){e.exports=t.p+"static/media/pgslogo.9e495a61.png"},function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(7),c=t.n(r),s=(t(17),t(5)),l=t(8),i=t.n(l),m=t(9),u=t.n(m),p=t(1),_=t.n(p),g=t(10),h=t.n(g),E=t(2),d=t.n(E),f=function(e){var a=e.filter,t=e.setFilter,n=e.reSearch;return o.a.createElement("section",{className:d.a.search},o.a.createElement("h2",{className:d.a.title},"iTunes api example"),o.a.createElement("form",{className:d.a.searchBox,onSubmit:function(e){e.preventDefault(),n()}},o.a.createElement("input",{type:"text",className:d.a.input,value:a,onChange:function(e){t(e.target.value)},placeholder:"Search songs..."}),o.a.createElement("input",{type:"submit",className:d.a.submit,value:"search"})),o.a.createElement("p",{className:d.a.text},"Search by song title, author, song number, lyrics, catalog or copyright owner"))},S=t(4),v=t.n(S),N=t(3),b=t.n(N),w=function(e){var a=e.data,t=a.trackName,n=a.artistName,r=a.artworkUrl100;return o.a.createElement("div",{className:b.a.song},o.a.createElement("img",{src:r,alt:t,className:b.a.cover}),o.a.createElement("div",{className:b.a.info},o.a.createElement("h3",{className:b.a.title},t),o.a.createElement("p",{className:b.a.author},"By ",n)))},x=function(e){var a=e.songs,t=e.fullCount;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:v.a.songCount},"Found ",t," songs"),o.a.createElement("div",{className:v.a.songs},a.map(function(e,a){return o.a.createElement(w,{data:e,key:a})})))},y=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),l=Object(s.a)(c,2),m=l[0],p=l[1],g=u()({url:"https://itunes.apple.com/search",method:"GET",options:{adapter:i.a,params:{term:m,entity:"song",limit:200}}}),E=g.response,d=g.loading,S=g.reFetch,v=E?E.data.results:[];return o.a.createElement("div",{className:_.a.app},o.a.createElement("div",{className:_.a.header},o.a.createElement("img",{src:h.a,alt:"PGS Software logo",className:_.a.logo})),o.a.createElement(f,{setFilter:p,filter:m,reSearch:S}),v.length>0&&!d?o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{songs:v.slice(t,t+9),fullCount:v.length}),o.a.createElement("div",{className:_.a.navigation},o.a.createElement("button",{onClick:function(){var e=t-9;e>=0&&r(e)}},"<< prev"),o.a.createElement("button",{onClick:function(){var e=t+9;e<v.length&&r(e)}},"next >>"))):o.a.createElement("div",{className:_.a.status},d?o.a.createElement("p",null,"Loading data..."):E?o.a.createElement("p",null,"Sorry, no matches found"):null),o.a.createElement("div",{className:_.a.footer},o.a.createElement("p",null,"Powered by PGS")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.aa0b4603.chunk.js.map