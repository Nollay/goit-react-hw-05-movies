"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(885),c=t(689),a=t(791),u=t(690),i=t(184);n.default=function(){var e=(0,c.UO)().movieId,n=(0,a.useState)([]),t=(0,r.Z)(n,2),o=t[0],s=t[1];return(0,a.useEffect)((function(){(0,u.Jh)(e).then((function(e){s(e.data.results)})).catch((function(e){return console.log(e)}))}),[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:0===o.length?"There are no reviews":"Reviews"}),o.length>0&&(0,i.jsx)("ul",{children:o.map((function(e){var n=e.author,t=e.content,r=e.id,c=e.created_at;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:n}),(0,i.jsx)("p",{children:t}),(0,i.jsxs)("p",{children:[" Created: ",new Date(c).toLocaleDateString()]})]},r)}))})]})}},690:function(e,n,t){t.d(n,{IQ:function(){return p},Jh:function(){return h},cN:function(){return o},g4:function(){return s},yK:function(){return f}});var r=t(861),c=t(757),a=t.n(c),u=t(388),i="f530f3a1ba7a2ce8b8185ab97973a95f";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(o),e.next=3,u.Z.get("/trending/movie/day?api_key=".concat(i));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.d7a31206.chunk.js.map