(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var r=n(151),c=n(0),i=n.n(c),o=n(34),a=n.n(o),s=n(43),d=n(154),u=n(152),j=n(2),l=function(e){var t=e.children;return Object(j.jsxs)(u.a,{status:"error",children:[Object(j.jsx)(u.b,{}),t]})},m=n(3),h=n(150),b=n(140),O=n(141),f=n(38),x=n.n(f),v=n(59),g=n(29),p=n(27),C=Object(p.b)("moviesData/fetchMoviesDataStatus",function(){var e=Object(v.a)(x.a.mark((function e(t,n){var r,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?limit=".concat(5,"&page=").concat(t));case 2:return r=e.sent,e.next=5,r.json();case 5:if("ok"===(c=e.sent).status){e.next=8;break}return e.abrupt("return",n.rejectWithValue(new Error("Error occured while movies was fetched.")));case 8:return e.abrupt("return",c.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),I=Object(p.c)({name:"moviesData",initialState:{movies:[],isLoading:"idle",totalCountOfMovies:0},reducers:{appendComment:function(e,t){var n,r=t.payload,c=r.movieId,i=r.content,o=e.movies.find((function(e){return e.id===c}));o&&(o.comments.push({id:((null===(n=o.comments[o.comments.length-1])||void 0===n?void 0:n.id)||0)+1,content:i}),localStorage.setItem(c.toString(),JSON.stringify(o.comments)))},deleteComment:function(e,t){var n=t.payload,r=n.movieId,c=n.commentId,i=e.movies.find((function(e){return e.id===r}));i&&(i.comments=i.comments.filter((function(e){return e.id!==c})),localStorage.setItem(r.toString(),JSON.stringify(i.comments)))}},extraReducers:function(e){e.addCase(C.fulfilled,(function(e,t){var n=t.payload;e.isLoading="idle",e.movies=n.movies.map((function(e){var t=JSON.parse(localStorage.getItem(e.id.toString())||"[]");return Object(g.a)(Object(g.a)({},e),{},{comments:t})})),e.totalCountOfMovies=n.movie_count})),e.addCase(C.rejected,(function(e,t){var n=t.payload;e.isLoading="idle",e.error=n})),e.addCase(C.pending,(function(e){e.isLoading="loading"}))}}),S=I.actions,w=S.appendComment,y=S.deleteComment,T=I.reducer,M=Object(p.c)({name:"moviesTable",initialState:{selectedMovieId:-1,commentInputText:""},reducers:{changeSelectedMovieId:function(e,t){e.selectedMovieId=t.payload},changeCommentInputText:function(e,t){e.commentInputText=t.payload}}}),k=M.actions,W=k.changeSelectedMovieId,P=k.changeCommentInputText,D=M.reducer,E=Object(p.c)({name:"pagination",initialState:{currentPage:1},reducers:{changeCurrentPage:function(e,t){e.currentPage=t.payload}}}),F=E.actions.changeCurrentPage,L=E.reducer,A=function(){return Object(s.b)()},R=s.c,J=function(){var e=A();return{movies:R((function(e){return e.moviesData.movies})),isLoading:R((function(e){return e.moviesData.isLoading})),totalCountOfMovies:R((function(e){return e.moviesData.totalCountOfMovies})),moviesFetchError:R((function(e){return e.moviesData.error})),addComment:function(t,n){e(w({movieId:t,content:n}))},removeComment:function(t,n){e(y({movieId:t,commentId:n}))}}},N=null,_=function(){var e=A();return{currentPage:R((function(e){return e.pagination.currentPage})),setCurrentPage:function(t){e(F(t))}}},H=function(){var e=A();return{selectedMovieId:R((function(e){return e.moviesTable.selectedMovieId})),commentInputText:R((function(e){return e.moviesTable.commentInputText})),setSelectedMovieId:function(t){e(W(t))},setCommentInputText:function(t){e(P(t))}}},z=n(137),B=n(146),G=n(149),V=function(e){var t=e.children;return Object(j.jsx)(G.b,{spacing:2,maxHeight:"60vh",overflowY:"scroll",className:"scroll-stack",children:t})},Y=n(138),q=n(136),K=function(e){var t=e.comment,n=e.onCommentRemove;return Object(j.jsxs)(q.a,{borderWidth:"1px",borderRadius:"lg",overflow:"hidden",padding:"1rem",width:"95%",justifyContent:"space-between",alignItems:"center",children:[Object(j.jsx)(z.a,{children:t.content}),Object(j.jsx)(Y.a,{cursor:"pointer",onClick:function(){return n(t.id)},focusable:!0})]})},Q=n(153),U=n(148),X=function(e){var t=e.onCommentAdd,n=H(),r=n.commentInputText,c=n.setCommentInputText;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(U.a,{placeholder:"Type your comment here...",marginRight:"1rem",value:r,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)(Q.a,{colorScheme:"teal",mr:3,onClick:t,isDisabled:""===r.trim(),children:"Send"})]})},Z=function(e){var t=e.selectedMovie,n=e.isOpen,r=e.onClose,c=e.onCommentAdd,i=e.onCommentRemove;return Object(j.jsxs)(B.a,{isOpen:n,onClose:r,isCentered:!0,children:[Object(j.jsx)(B.g,{}),Object(j.jsxs)(B.d,{children:[Object(j.jsx)(B.f,{children:"Comments"}),Object(j.jsx)(B.c,{}),Object(j.jsxs)(B.b,{children:[Object(j.jsx)(V,{children:null===t||void 0===t?void 0:t.comments.map((function(e){return Object(j.jsx)(K,{comment:e,onCommentRemove:i},e.id)}))}),0===(null===t||void 0===t?void 0:t.comments.length)&&Object(j.jsx)(z.a,{textAlign:"center",children:"Comment first!"})]}),Object(j.jsx)(B.e,{children:Object(j.jsx)(X,{onCommentAdd:c})})]})]})},$=n(155),ee=n(147),te=n(67),ne=["children"],re=function(e){var t=e.children,n=Object(te.a)(e,ne),r=Object(b.a)("(min-width: 920px)"),c=Object(m.a)(r,1)[0];return Object(j.jsx)(z.a,Object(g.a)(Object(g.a)({maxWidth:c?"100%":"70%"},n),{},{children:t}))},ce=["children"],ie=function(e){var t=e.children,n=Object(te.a)(e,ce),r=Object(b.a)("(min-width: 920px)"),c=Object(m.a)(r,1)[0];return Object(j.jsx)(O.c,Object(g.a)(Object(g.a)({d:c?"table-cell":"flex",justifyContent:"space-between"},n),{},{children:t}))},oe=function(e){var t=e.index,n=e.movie,r=e.onCommentShow,i=Object(b.a)("(min-width: 920px)"),o=Object(m.a)(i,1)[0],a=Object(c.useState)(!1),s=Object(m.a)(a,2),d=s[0],u=s[1];return Object(j.jsxs)(O.f,{borderTop:0!==t?"1px solid #7b7b7b":"none",children:[Object(j.jsxs)(ie,{maxHeight:"19rem",children:[!o&&Object(j.jsx)(z.a,{fontWeight:600,children:"Poster"}),Object(j.jsx)(ee.a,{width:"10rem",height:"16rem",isLoaded:d,children:Object(j.jsx)($.a,{src:n.medium_cover_image,alt:n.title,width:"11rem",onLoad:function(){return u(!0)}})})]}),Object(j.jsxs)(ie,{children:[!o&&Object(j.jsx)(z.a,{fontWeight:600,children:"Title"}),Object(j.jsx)(re,{children:n.title})]}),Object(j.jsxs)(ie,{children:[!o&&Object(j.jsx)(z.a,{fontWeight:600,children:"Genres"}),Object(j.jsx)(re,{children:n.genres.join(", ")})]}),Object(j.jsxs)(ie,{children:[!o&&Object(j.jsx)(z.a,{fontWeight:600,children:"Synopsis"}),Object(j.jsx)(re,{textAlign:"justify",children:n.synopsis})]}),Object(j.jsxs)(ie,{alignItems:"center",children:[!o&&Object(j.jsx)(z.a,{fontWeight:600,children:"Comments"}),Object(j.jsx)(Q.a,{onClick:function(){return r(n.id)},children:"Show"})]})]})},ae=function(){return Object(j.jsx)(O.e,{children:Object(j.jsxs)(O.f,{children:[Object(j.jsx)(O.d,{minWidth:"16rem",children:"Poster"}),Object(j.jsx)(O.d,{minWidth:"10rem",children:"Title"}),Object(j.jsx)(O.d,{children:"Genres"}),Object(j.jsx)(O.d,{minWidth:"13rem",children:"Synopsis"}),Object(j.jsx)(O.d,{children:"Comments"})]})})},se=(n(119),function(e){var t=e.movies,n=Object(h.a)(),r=n.isOpen,i=n.onOpen,o=n.onClose,a=Object(b.a)("(min-width: 920px)"),s=Object(m.a)(a,1)[0],d=J(),u=d.addComment,l=d.removeComment,f=H(),x=f.selectedMovieId,v=f.setSelectedMovieId,g=f.commentInputText,p=f.setCommentInputText,C=Object(c.useMemo)((function(){return t.find((function(e){return e.id===x}))}),[x,t]),I=function(e){v(e),i()};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(O.a,{variant:"simple",children:[s&&Object(j.jsx)(ae,{}),Object(j.jsx)(O.b,{children:t.map((function(e,t){return Object(j.jsx)(oe,{movie:e,index:t,onCommentShow:I},e.id)}))})]}),Object(j.jsx)(Z,{isOpen:r,onClose:o,selectedMovie:C,onCommentAdd:function(){""!==g.trim()&&(u(x,g),p(""))},onCommentRemove:function(e){l(x,e)}})]})}),de=n(142),ue=n(143),je=function(e){var t=e.totalCountOfMovies,n=_(),r=n.currentPage,c=n.setCurrentPage,i=Math.ceil(t/5),o=r-1,a=r+1;return Object(j.jsxs)(G.a,{spacing:2,margin:"0.5rem",maxWidth:"100vw",overflow:"hidden",children:[Object(j.jsx)(Q.a,{onClick:function(){return r>1&&c(o)},children:Object(j.jsx)(de.a,{})}),r>1&&Object(j.jsx)(Q.a,{onClick:function(){return c(1)},children:1}),r>2&&Object(j.jsx)(Q.a,{onClick:function(){return c(o)},children:o}),Object(j.jsx)(Q.a,{onClick:function(){return c(r)},colorScheme:"teal",children:r}),r<i-1&&Object(j.jsx)(Q.a,{onClick:function(){return c(a)},children:a}),r<i&&Object(j.jsx)(Q.a,{onClick:function(){return c(i)},children:i}),Object(j.jsx)(Q.a,{onClick:function(){return r<i-1&&c(a)},children:Object(j.jsx)(ue.a,{})})]})},le=n(62),me=n(63),he=n(94),be=n(93),Oe=n(144),fe=n(145),xe=function(e){Object(he.a)(n,e);var t=Object(be.a)(n);function n(e){var r;return Object(le.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(me.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(j.jsx)(Oe.a,{bgColor:"#EFEDFA",height:"100vh",children:Object(j.jsxs)(fe.a,{children:[Object(j.jsx)($.a,{src:"/error.png",alt:"Ice Cream",maxWidth:"25rem"}),Object(j.jsx)(z.a,{textAlign:"center",color:"#9b8875",fontWeight:600,fontSize:"1.5rem",children:"An unexpected error occurred. We'll fix it soon."})]})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),n}(i.a.Component),ve=function(e){var t=e.children;return Object(j.jsx)(G.b,{spacing:2,padding:"1rem",children:t})},ge=function(e){var t=e.children;return Object(j.jsx)(Oe.a,{width:"100%",minHeight:"100vh",className:"page-container",children:t})},pe=function(e){var t=e.children;return Object(j.jsx)(fe.a,{width:"100%",children:t})},Ce=function(){var e=_().currentPage,t=function(){var e=A();return N||(N=function(){var t=Object(v.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(C(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}(),n=J(),r=n.movies,i=n.moviesFetchError,o=n.isLoading,a=n.totalCountOfMovies;return Object(c.useEffect)((function(){t(e)}),[e,t]),i?Object(j.jsx)(ve,{children:Object(j.jsx)(l,{children:"There was an error fetching your movies. Try again later."})}):Object(j.jsx)(xe,{children:Object(j.jsx)(ge,{children:"idle"===o?Object(j.jsxs)(pe,{children:[Object(j.jsx)(se,{movies:r}),Object(j.jsx)(je,{totalCountOfMovies:a})]}):Object(j.jsx)(d.a,{size:"xl"})})})},Ie=(n(120),Object(p.a)({reducer:{moviesData:T,pagination:L,moviesTable:D}})),Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,156)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(s.a,{store:Ie,children:Object(j.jsx)(r.a,{children:Object(j.jsx)(Ce,{})})})}),document.getElementById("root")),Se()}},[[121,1,2]]]);
//# sourceMappingURL=main.5d0fc8a2.chunk.js.map