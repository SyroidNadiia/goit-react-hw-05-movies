"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[461],{48:function(n,t,e){e.d(t,{Bt:function(){return l},Hq:function(){return f},Mc:function(){return p},ms:function(){return s},y:function(){return d}});var r=e(861),a=e(757),c=e.n(a),o=e(243),u="https://api.themoviedb.org/3",i="5742f4de3a7b600a36c23a592b6dd172",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(u,"/trending/movie/day?api_key=").concat(i),n.next=3,o.Z.get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"?api_key=").concat(i),n.next=3,o.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),n.next=3,o.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i),n.next=3,o.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i),n.next=3,o.Z.get(e);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},461:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,a,c,o,u,i,s,p,f=e(861),d=e(439),l=e(757),v=e.n(l),x=e(791),m=e(87),h=e(48),Z=e(168),g=e(444),b=g.ZP.main(r||(r=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]))),y=g.ZP.form(a||(a=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),k=g.ZP.input(c||(c=(0,Z.Z)(["\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid grey;\n  outline: none;\n  margin-right: 10px;\n"]))),w=g.ZP.button(o||(o=(0,Z.Z)(["\n  padding: 10px 20px;\n  background-color: #2196f3;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n\n  &:hover {\n    background-color: #0c7cd5;\n  }\n"]))),j=e(184),_=function(n){var t=n.onSubmit,e=(0,x.useState)(""),r=(0,d.Z)(e,2),a=r[0],c=r[1];return(0,j.jsx)(b,{children:(0,j.jsxs)(y,{onSubmit:function(n){n.preventDefault(),t(a),c("")},children:[(0,j.jsx)(k,{value:a,onChange:function(n){return c(n.target.value)},type:"text",autoComplete:"off",autoFocus:!0}),(0,j.jsx)(w,{type:"submit",children:"Search"})]})})},P=e(689),S=g.ZP.ul(u||(u=(0,Z.Z)(["\n  margin-top: 20px;\n  padding: 0;\n  list-style: none;\n"]))),C=g.ZP.li(i||(i=(0,Z.Z)(["\n  margin-bottom: 10px;\n  \n"]))),q=(0,g.ZP)(m.rU)(s||(s=(0,Z.Z)(["\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),H=function(n){var t=n.movies,e=(0,P.TH)();return(0,j.jsx)("main",{children:(0,j.jsx)(S,{children:t.map((function(n){return(0,j.jsx)(C,{children:(0,j.jsx)(q,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})})},z=g.ZP.div(p||(p=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),U=function(){var n=(0,m.lr)(),t=(0,d.Z)(n,2),e=t[0],r=t[1],a=(0,x.useState)([]),c=(0,d.Z)(a,2),o=c[0],u=c[1],i=e.get("name");(0,x.useEffect)((function(){var n=function(){var n=(0,f.Z)(v().mark((function n(){var t,e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.Hq)(i);case 3:t=n.sent,e=t.results,u(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();i&&n(i)}),[i]);return(0,j.jsxs)(z,{children:[(0,j.jsx)(_,{onSubmit:function(n){var t=""!==n?{name:n.trim()}:{};r(t)}}),(0,j.jsx)(H,{movies:o})]})}}}]);
//# sourceMappingURL=461.1a91ee03.chunk.js.map