"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,c,a=e(982),u=e(885),i=e(791),o=e(690),s=e(689),p=e(168),f=e(444),h=f.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n"]))),d=f.ZP.li(c||(c=(0,p.Z)(["\n  width: 300px;\n  padding: 15px;\n"]))),l=e(184),v=function(){var n=(0,s.UO)().movieId,t=(0,i.useState)([]),e=(0,u.Z)(t,2),r=e[0],c=e[1];return(0,i.useEffect)((function(){(0,o.IQ)(n).then((function(n){c((0,a.Z)(n.data.cast))})).catch((function(n){return console.log(n)}))}),[n]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Cast"}),r.length>0&&(0,l.jsx)(h,{children:r.map((function(n){var t=n.name,e=n.character,r=n.profile_path,c=n.id;return(0,l.jsxs)(d,{children:[(0,l.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500"+r:"user-not-found",alt:t,width:300}),(0,l.jsx)("h3",{children:t}),(0,l.jsx)("p",{children:e})]},c)}))})]})}},690:function(n,t,e){e.d(t,{IQ:function(){return f},Jh:function(){return h},cN:function(){return o},g4:function(){return s},yK:function(){return p}});var r=e(861),c=e(757),a=e.n(c),u=e(388),i="f530f3a1ba7a2ce8b8185ab97973a95f";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(o),n.next=3,u.Z.get("/trending/movie/day?api_key=".concat(i));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.c24cec50.chunk.js.map