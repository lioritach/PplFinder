(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{130:function(e,n,t){"use strict";t.r(n);var i,c,a,o,r,l,s,d,u,j,b,f,x,O,v,p,h,m,g,y,S,z,w,k=t(0),C=t.n(k),N=t(17),J=t.n(N),I=t(39),E=t(12),V=t(132),L=t(7),M=t(8),D=M.a.div(i||(i=Object(L.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),T=t(2),F=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,c=e.bold;return Object(T.jsx)(V.a,{children:Object(T.jsx)(D,{size:t,bold:c,children:i})})},U=t(15),q=t(167),A=t(161),B=function(e){var n=e.size,t=e.color,i=e.thickness,c=e.variant;return Object(T.jsx)(A.a,{size:n,color:t,thickness:i,variant:c})},H=t(169),P=t(162),G=M.a.div(c||(c=Object(L.a)([""]))),K=t(56),Q=t.n(K),R=t(80),W=t(81),X=t.n(W),Y=t(27),Z=t(49),$=Object(Z.b)({name:"nat",initialState:{data:"initialValue"},reducers:{getNat:function(e,n){e.data=n.payload}}}),_=$.actions.getNat,ee=function(e){return e.nat.data},ne=$.reducer,te=function(){var e=Object(k.useState)([]),n=Object(U.a)(e,2),t=n[0],i=n[1],c=Object(k.useState)([]),a=Object(U.a)(c,2),o=a[0],r=(a[1],Object(k.useState)(!1)),l=Object(U.a)(r,2),s=l[0],d=l[1];Object(Y.c)(ee);function u(){return j.apply(this,arguments)}function j(){return(j=Object(R.a)(Q.a.mark((function e(){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,X.a.get("https://randomuser.me/api/?results=25&page=1");case 3:return n=e.sent,d(!1),i(n.data.results),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(k.useEffect)((function(){u()}),[]),{users:t,isLoading:s,filteredUsers:o,fetchUsers:u}},ie=function(e){var n=e.isChecked,t=(e.onChange,e.label),i=e.value,c=te().users,a=Object(Y.b)();Object(Y.c)(ee);Object(k.useEffect)((function(){a(_({natData:"initialValue"}))}),[i]);return Object(T.jsx)(G,{children:Object(T.jsx)(P.a,{control:Object(T.jsx)(H.a,{checked:n,onChange:function(){return localStorage.setItem("nat",JSON.stringify(i)),void c.map((function(e){i===e.nat?a(_({natData:i})):console.log("nat not found")}))},color:"primary"}),label:t})})},ce=t(163),ae=t(38),oe=t.n(ae),re=M.a.div(a||(a=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),le=M.a.div(o||(o=Object(L.a)(["\n  margin: auto;\n  font-size: 15px;\n  border: 1px solid #fff;\n"]))),se=M.a.div(r||(r=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin: auto;\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),de=M.a.div(l||(l=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),ue=M.a.div(s||(s=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),je=M.a.img(d||(d=Object(L.a)(["\n  border-radius: 45%;\n"]))),be=M.a.div(u||(u=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n"]))),fe=M.a.div(j||(j=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),xe=M.a.div(b||(b=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 1px;\n  }\n"]))),Oe=function(e){var n=e.users,t=e.isLoading,i=Object(k.useState)(),c=Object(U.a)(i,2),a=c[0],o=c[1],r=Object(k.useState)([]),l=Object(U.a)(r,2),s=l[0],d=l[1],u=Object(k.useState)(!1),j=Object(U.a)(u,2),b=j[0],f=(j[1],Object(k.useState)(!1)),x=Object(U.a)(f,2),O=x[0],v=x[1],p=Object(k.useState)(!1),h=Object(U.a)(p,2),m=(h[0],h[1]),g=Object(k.useState)(JSON.parse(localStorage.getItem("fav"))||[]),y=Object(U.a)(g,2),S=y[0],z=y[1],w=Object(k.useState)(""),C=Object(U.a)(w,2),N=C[0],J=C[1],I=Object(Y.c)(ee),E=localStorage.getItem("nat"),V=Array.from(new Set(n.map((function(e){return null===e||void 0===e?void 0:e.nat})))),L=S.map((function(e){return e.login.uuid}));Object(k.useEffect)((function(){H(n,I.natData)}),[E]),Object(k.useEffect)((function(){localStorage.setItem("fav",JSON.stringify(S))}),[S]);var M=function(e){o(e)},D=function(){o()},A=function(e){if(v(!0),L.includes(e.login.uuid)){var n=S.filter((function(n){return n.login.uuid!==e.login.uuid}));z(n),J("The user has been removed from the favorites list!")}else z((function(n){return n.concat(e)})),J("The user has been added to the favorites list!"),localStorage.setItem("fav",JSON.stringify(S))},H=function(e,n){if(m(!0),-1!==V.indexOf(n)){var t=e.filter((function(e){return e.nat===n}));d((function(e){return e.concat(t)}))}};return Object(T.jsxs)(re,{children:[Object(T.jsx)(xe,{children:V.map((function(e,n){return Object(T.jsx)(ie,{value:e,label:e},n)}))}),Object(T.jsx)(le,{children:Object(T.jsx)(q.a,{onClose:function(){return v(!1)},show:O,delay:3e3,autohide:!0,children:Object(T.jsx)(q.a.Body,{children:N})})}),Object(T.jsxs)(se,{children:["initialValue"===I.natData?n.map((function(e,n){return Object(T.jsxs)(de,{onMouseEnter:function(){return M(n)},onMouseLeave:D,children:[Object(T.jsx)(je,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(T.jsxs)(ue,{children:[Object(T.jsxs)(F,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(T.jsx)(F,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(T.jsx)(fe,{isVisible:n===a||L.includes(e.login.uuid),isClicked:b,children:Object(T.jsx)(ce.a,{onClick:function(){return A(e)},children:Object(T.jsx)(oe.a,{color:"error"})})})]},n)})):s.map((function(e,n){return Object(T.jsxs)(de,{onMouseEnter:function(){return M(n)},onMouseLeave:D,children:[e.nat,Object(T.jsx)(je,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(T.jsxs)(ue,{children:[Object(T.jsxs)(F,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(T.jsx)(F,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(T.jsx)(fe,{isVisible:n===a||L.includes(e.login.uuid),children:Object(T.jsx)(ce.a,{onClick:function(){return A(e)},children:Object(T.jsx)(oe.a,{color:"error"})})})]},n)})),t&&Object(T.jsx)(be,{children:Object(T.jsx)(B,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},ve=M.a.div(f||(f=Object(L.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),pe=M.a.div(x||(x=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),he=M.a.div(O||(O=Object(L.a)(["\n  display: flex;\n"]))),me=(M.a.div(v||(v=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=te(),n=e.users,t=e.isLoading;return Object(T.jsx)(ve,{children:Object(T.jsxs)(pe,{children:[Object(T.jsx)(he,{children:Object(T.jsx)(F,{size:"64px",bold:!0,children:"PplFinder"})}),Object(T.jsx)(Oe,{users:n,isLoading:t})]})})}),ge=t(87),ye=t(164),Se=t(165),ze=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=C.a.useMemo((function(){return Object(ge.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(T.jsxs)(ye.a,{theme:i,children:[Object(T.jsx)(Se.a,{}),n]})},we=t(170),ke=t(168),Ce=t(166),Ne=M.a.div(p||(p=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Je=M.a.div(h||(h=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 170px);\n  margin-block-start: 80px;\n  margin-left: 20px;\n  overflow-y: auto;\n"]))),Ie=M.a.div(m||(m=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),Ee=M.a.div(g||(g=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),Ve=M.a.img(y||(y=Object(L.a)(["\n  border-radius: 45%;\n"]))),Le=(M.a.div(S||(S=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n"]))),M.a.div(z||(z=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0}))),Me=(M.a.div(w||(w=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),function(){var e=Object(k.useState)([]),n=Object(U.a)(e,2),t=n[0],i=n[1],c=Object(k.useState)(JSON.parse(localStorage.getItem("fav"))||[]),a=Object(U.a)(c,2),o=a[0],r=a[1],l=o.map((function(e){return e.login.uuid}));Object(k.useEffect)((function(){s()}),[]);var s=function(){i((function(e){return e.concat(JSON.parse(localStorage.getItem("fav")))}))};console.log(o),Object(k.useEffect)((function(){localStorage.setItem("fav",JSON.stringify(o))}),[o]);return Object(T.jsx)(Ne,{children:Object(T.jsxs)(Je,{children:[Object(T.jsx)(F,{children:"Favorites"}),0===t.length?Object(T.jsx)(F,{children:"\u05d0\u05d9\u05df \u05e2\u05d3\u05d9\u05df \u05de\u05e9\u05ea\u05de\u05e9\u05d9\u05dd \u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd"}):null,t.map((function(e,n){return Object(T.jsxs)(Ie,{children:[Object(T.jsx)(Ve,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(T.jsxs)(Ee,{children:[Object(T.jsxs)(F,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(T.jsx)(F,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(T.jsx)(Le,{isVisible:l.includes(e.login.uuid),children:Object(T.jsx)(ce.a,{onClick:function(){return function(e){if(l.includes(e.login.uuid)){var n=o.filter((function(n){return n.login.uuid!==e.login.uuid}));r(n)}else r((function(n){return n.concat(e)})),localStorage.setItem("fav",JSON.stringify(o))}(e)},children:Object(T.jsx)(oe.a,{color:"error"})})})]},n)}))]})})}),De=function(){var e=Object(k.useState)(0),n=Object(U.a)(e,2),t=n[0],i=n[1],c=["/","/favorites"];return Object(T.jsxs)(we.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:[Object(T.jsxs)(ke.a,{value:t,onChange:function(e,n){i(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(T.jsx)(Ce.a,{label:"Home",index:0,component:I.b,to:c[0]}),Object(T.jsx)(Ce.a,{label:"Favorites",index:1,component:I.b,to:c[1]})]}),Object(T.jsxs)(E.c,{children:[Object(T.jsx)(E.a,{path:c[1]}),Object(T.jsx)(E.a,{path:c[0]})]})]})},Te=function(){return Object(T.jsx)(ze,{children:Object(T.jsxs)(I.a,{children:[Object(T.jsx)(De,{}),Object(T.jsxs)(E.c,{children:[Object(T.jsx)(E.a,{exact:!0,path:"/",component:me}),Object(T.jsx)(E.a,{exact:!0,path:"/favorites",component:Me})]})]})})},Fe=t(48),Ue=t(16),qe=t(37),Ae=t(85),Be=t.n(Ae),He=Object(Ue.b)({nat:ne}),Pe={key:"root1",storage:Be.a},Ge=Object(Fe.a)(Pe,He),Ke=Object(Z.a)({reducer:Ge,devTools:!1,middleware:[qe.a]}),Qe=t(86),Re=Object(Fe.b)(Ke);J.a.render(Object(T.jsx)(Y.a,{store:Ke,children:Object(T.jsx)(Qe.a,{loading:null,persistor:Re,children:Object(T.jsx)(Te,{})})}),document.querySelector("#root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.be853731.chunk.js.map