"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[180],{48:function(n,e,t){t.d(e,{Bt:function(){return x},Hq:function(){return p},Mc:function(){return l},ms:function(){return u},y:function(){return d}});var r=t(861),a=t(757),i=t.n(a),c=t(243),o="https://api.themoviedb.org/3",s="5742f4de3a7b600a36c23a592b6dd172",u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/trending/movie/day?api_key=").concat(s),n.next=3,c.Z.get(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/movie/").concat(e,"?api_key=").concat(s),n.next=3,c.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),n.next=3,c.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s),n.next=3,c.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s),n.next=3,c.Z.get(t);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},180:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r,a,i,c,o,s,u,l,p,d,x,f,h,m,v,Z,g,j,b=t(861),w=t(439),y=t(757),k=t.n(y),P=t(689),_=t(87),U=t(791),z=t(48),O=t(373),S=t(983),C=t(168),I=t(444),M=I.ZP.main(r||(r=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n"]))),R=I.ZP.div(a||(a=(0,C.Z)(["\n  display: flex;\n  gap: 5px;\n  margin-bottom: 10px;\n"]))),q=((0,I.ZP)(_.rU)(i||(i=(0,C.Z)(["\n  margin-bottom: 10px;\n  color: #0070f3;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),I.ZP.img(c||(c=(0,C.Z)(["\n  width: 200px;\n  height: 300px;\n  object-fit: cover;\n  margin: 0 20px 0 0;\n"])))),G=I.ZP.div(o||(o=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),H=I.ZP.div(s||(s=(0,C.Z)(["\n  display: flex;\n"]))),L=I.ZP.h2(u||(u=(0,C.Z)(["\n  font-size: 20px;\n  margin-bottom: 10px;\n"]))),A=I.ZP.p(l||(l=(0,C.Z)(["\n  margin-bottom: 5px;\n  font-size: 20px;\n  font-weight: bold;\n"]))),B=I.ZP.p(p||(p=(0,C.Z)(["\n  margin-bottom: 20px;\n"]))),E=I.ZP.p(d||(d=(0,C.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n"]))),N=I.ZP.ul(x||(x=(0,C.Z)(["\n  margin-bottom: 10px;\n  list-style: none;\n"]))),T=I.ZP.span(f||(f=(0,C.Z)(["\n  font-weight: bold;\n  margin-bottom: 10px;\n"]))),Y=I.ZP.div(h||(h=(0,C.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),D=I.ZP.li(m||(m=(0,C.Z)(["\n  margin-bottom: 10px;\n"]))),F=I.ZP.div(v||(v=(0,C.Z)(["\n  margin: 20px 0 10px 0;\n"]))),J=I.ZP.ul(Z||(Z=(0,C.Z)(["\n  list-style: none;\n  display: flex;\n  margin: 10px 0 10px 0;\n"]))),K=I.ZP.li(g||(g=(0,C.Z)(["\n  margin-right: 10px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]))),Q=t(245),V=(0,I.ZP)(_.rU)(j||(j=(0,C.Z)(["\n  color: black;\n  text-decoration: none;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),W=t(184),X=function(n){var e=n.to,t=n.children;return(0,W.jsx)(V,{to:e,children:t})},$=function(){var n,e,t=(0,U.useState)({}),r=(0,w.Z)(t,2),a=r[0],i=r[1],c=(0,U.useRef)((0,P.UO)("movieId")).current.movieId,o=(0,P.TH)(),s=(0,U.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");(0,U.useEffect)((function(){var n=function(){var n=(0,b.Z)(k().mark((function n(){var e;return k().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,z.Mc)(c);case 3:e=n.sent,i(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[c]);var u=a.poster_path,l=a.original_title,p=a.title,d=a.release_date,x=a.vote_average,f=a.overview,h=a.genres;return(0,W.jsxs)(M,{children:[(0,W.jsx)(S.Pd.Provider,{value:{size:"25px"},children:(0,W.jsxs)(X,{to:s.current,children:[(0,W.jsx)(O.PjY,{}),"Go back"]})}),(0,W.jsxs)(H,{children:[(0,W.jsx)(q,{src:u?"https://image.tmdb.org/t/p/original".concat(u):"https://via.placeholder.com/200x300?text=No+Image",width:"200",height:"300",alt:l}),(0,W.jsxs)(G,{children:[(0,W.jsxs)(R,{children:[(0,W.jsx)(L,{children:p}),(0,W.jsx)(A,{children:d&&"(".concat(d.substring(0,4),")")})]}),(0,W.jsxs)(B,{children:["User Score: ",Math.round(10*x),"%"]}),(0,W.jsxs)(E,{children:[(0,W.jsx)(T,{children:"Overview"})," ",f]}),h&&(0,W.jsxs)(N,{children:[(0,W.jsx)(T,{children:"Genres:"}),(0,W.jsx)(Y,{children:h.map((function(n){return(0,W.jsx)(D,{children:n.name},n.id)}))})]})]})]}),(0,W.jsxs)(F,{children:[(0,W.jsx)("h3",{children:"Additional information"}),(0,W.jsxs)(J,{children:[(0,W.jsx)(K,{children:(0,W.jsx)(_.OL,{to:"/movies/".concat(c,"/cast"),children:"Cast"})}),(0,W.jsx)(K,{children:(0,W.jsx)(_.OL,{to:"/movies/".concat(c,"/reviews"),children:"Reviews"})})]}),(0,W.jsx)(U.Suspense,{fallback:(0,W.jsx)(Q.Z,{}),children:(0,W.jsx)(P.j3,{})})]})]})}}}]);
//# sourceMappingURL=180.cb4c3707.chunk.js.map