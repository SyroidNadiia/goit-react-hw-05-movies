"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[783],{48:function(n,e,t){t.d(e,{Bt:function(){return d},Hq:function(){return f},Mc:function(){return p},ms:function(){return s},y:function(){return l}});var r=t(861),a=t(757),c=t.n(a),u=t(243),o="https://api.themoviedb.org/3",i="5742f4de3a7b600a36c23a592b6dd172",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/trending/movie/day?api_key=").concat(i),n.next=3,u.Z.get(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/movie/").concat(e,"?api_key=").concat(i),n.next=3,u.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),n.next=3,u.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i),n.next=3,u.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i),n.next=3,u.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},783:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,c,u,o,i=t(861),s=t(439),p=t(757),f=t.n(p),l=t(791),d=t(87),v=t(48),m=t(168),x=t(444),h=x.ZP.main(r||(r=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]))),g=x.ZP.form(a||(a=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Z=x.ZP.input(c||(c=(0,m.Z)(["\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: 1px solid grey;\n  outline: none;\n  margin-right: 10px;\n"]))),b=x.ZP.button(u||(u=(0,m.Z)(["\n  padding: 10px 20px;\n  background-color: #2196f3;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n\n  &:hover {\n    background-color: #0c7cd5;\n  }\n"]))),y=t(184),k=function(n){var e=n.value,t=n.onChange,r=n.onSubmit;return(0,y.jsx)(h,{children:(0,y.jsxs)(g,{onSubmit:r,children:[(0,y.jsx)(Z,{value:e,onChange:t,type:"text",autoComplete:"off",autoFocus:!0}),(0,y.jsx)(b,{type:"submit",children:"Search"})]})})},w=t(689),j=function(n){var e=n.movies,t=(0,w.TH)();return console.log(t),(0,y.jsx)("main",{children:(0,y.jsx)("ul",{children:e.map((function(n){return(0,y.jsx)("li",{children:(0,y.jsx)(d.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})})},_=x.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),S=function(){var n=(0,d.lr)(),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(t.get("name")||""),c=(0,s.Z)(a,2),u=c[0],o=c[1],p=(0,l.useState)([]),m=(0,s.Z)(p,2),x=m[0],h=m[1],g=(0,l.useState)(!1),Z=(0,s.Z)(g,2),b=Z[0],w=Z[1];(0,l.useEffect)((function(){var n=function(){var n=(0,i.Z)(f().mark((function n(){var e,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.Hq)(u);case 3:e=n.sent,t=e.results,h(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();b&&(n(),w(!1))}),[u,b]);return(0,y.jsxs)(_,{children:[(0,y.jsx)(k,{value:u,onChange:function(n){var e=n.target.value.trim();o(e)},onSubmit:function(n){n.preventDefault(),w(!0),r(""!==u?{name:u}:{})}}),(0,y.jsx)(j,{movies:x})]})}}}]);
//# sourceMappingURL=783.93ab4864.chunk.js.map