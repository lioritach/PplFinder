(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{130:function(e,n,t){"use strict";t.r(n);var i,c,a,o,r,l,s,d,u,j,b,f,x,O,v,p,h,m,g,y,S,z,w,k=t(0),C=t.n(k),N=t(17),J=t.n(N),E=t(39),I=t(12),L=t(132),M=t(7),D=t(8),V=D.a.div(i||(i=Object(M.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),T=t(2),F=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,c=e.bold;return Object(T.jsx)(L.a,{children:Object(T.jsx)(V,{size:t,bold:c,children:i})})},U=t(16),q=t(167),A=t(161),B=function(e){var n=e.size,t=e.color,i=e.thickness,c=e.variant;return Object(T.jsx)(A.a,{size:n,color:t,thickness:i,variant:c})},H=t(169),P=t(162),G=D.a.div(c||(c=Object(M.a)([""]))),K=t(56),Q=t.n(K),R=t(80),W=t(81),X=t.n(W),Y=t(27),Z=t(49),$=Object(Z.b)({name:"nat",initialState:{data:""},reducers:{getNat:function(e,n){e.data=n.payload}}}),_=$.actions.getNat,ee=function(e){return e.nat.data},ne=$.reducer,te=function(){var e=Object(k.useState)([]),n=Object(U.a)(e,2),t=n[0],i=n[1],c=Object(k.useState)([]),a=Object(U.a)(c,2),o=a[0],r=(a[1],Object(k.useState)(!1)),l=Object(U.a)(r,2),s=l[0],d=l[1];Object(Y.c)(ee);function u(){return j.apply(this,arguments)}function j(){return(j=Object(R.a)(Q.a.mark((function e(){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,X.a.get("https://randomuser.me/api/?results=100&page=1");case 3:return n=e.sent,d(!1),i(n.data.results),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(k.useEffect)((function(){u()}),[]),{users:t,isLoading:s,filteredUsers:o,fetchUsers:u}},ie=function(e){var n=e.isChecked,t=(e.onChange,e.label),i=e.value,c=te().users,a=Object(Y.b)();Object(k.useEffect)((function(){a(_({natData:""}))}),[i]);return Object(T.jsx)(G,{children:Object(T.jsx)(P.a,{control:Object(T.jsx)(H.a,{checked:n,onChange:function(){c.map((function(e){i===e.nat?a(_({natData:i})):console.log("nat not found")}))},color:"primary"}),label:t})})},ce=t(163),ae=t(38),oe=t.n(ae),re=D.a.div(a||(a=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),le=D.a.div(o||(o=Object(M.a)(["\n  margin: auto;\n  font-size: 15px;\n  border: 1px solid #fff;\n"]))),se=D.a.div(r||(r=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin: auto;\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),de=D.a.div(l||(l=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),ue=D.a.div(s||(s=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),je=D.a.img(d||(d=Object(M.a)(["\n  border-radius: 45%;\n"]))),be=D.a.div(u||(u=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]))),fe=D.a.div(j||(j=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),xe=D.a.div(b||(b=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 1px;\n  }\n"]))),Oe=function(e){var n=e.users,t=e.isLoading,i=Object(k.useState)(),c=Object(U.a)(i,2),a=c[0],o=c[1],r=Object(k.useState)([]),l=Object(U.a)(r,2),s=l[0],d=l[1],u=Object(k.useState)(!1),j=Object(U.a)(u,2),b=j[0],f=(j[1],Object(k.useState)(!1)),x=Object(U.a)(f,2),O=x[0],v=x[1],p=Object(k.useState)(JSON.parse(localStorage.getItem("fav"))||[]),h=Object(U.a)(p,2),m=h[0],g=h[1],y=Object(k.useState)(""),S=Object(U.a)(y,2),z=S[0],w=S[1],C=Object(Y.c)(ee),N=Array.from(new Set(n.map((function(e){return null===e||void 0===e?void 0:e.nat})))),J=m.map((function(e){return e.login.uuid}));Object(k.useEffect)((function(){M(n,C.natData)}),[C.natData]),Object(k.useEffect)((function(){localStorage.setItem("fav",JSON.stringify(m))}),[m]);var E=function(e){o(e)},I=function(){o()},L=function(e){if(v(!0),J.includes(e.login.uuid)){var n=m.filter((function(n){return n.login.uuid!==e.login.uuid}));g(n),w("The user has been removed from the favorites list!")}else g((function(n){return n.concat(e)})),w("The user has been added to the favorites list!"),localStorage.setItem("fav",JSON.stringify(m))},M=function(e,n){if(-1!==N.indexOf(n)){var t=e.filter((function(e){return e.nat===n}));d((function(e){return e.concat(t)}))}};return Object(T.jsxs)(re,{children:[Object(T.jsx)(xe,{children:N.map((function(e,n){return Object(T.jsx)(ie,{value:e,label:e},n)}))}),Object(T.jsx)(le,{children:Object(T.jsx)(q.a,{onClose:function(){return v(!1)},show:O,delay:3e3,autohide:!0,children:Object(T.jsx)(q.a.Body,{children:z})})}),Object(T.jsxs)(se,{children:[""==C.natData?n.map((function(e,n){return Object(T.jsxs)(de,{onMouseEnter:function(){return E(n)},onMouseLeave:I,children:[Object(T.jsx)(je,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(T.jsxs)(ue,{children:[Object(T.jsxs)(F,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(T.jsx)(F,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(T.jsx)(fe,{isVisible:n===a||J.includes(e.login.uuid),isClicked:b,children:Object(T.jsx)(ce.a,{onClick:function(){return L(e)},children:Object(T.jsx)(oe.a,{color:"error"})})})]},n)})):s.map((function(e,n){return Object(T.jsxs)(de,{onMouseEnter:function(){return E(n)},onMouseLeave:I,children:[e.nat,Object(T.jsx)(je,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(T.jsxs)(ue,{children:[Object(T.jsxs)(F,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(T.jsx)(F,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(T.jsx)(fe,{isVisible:n===a||J.includes(e.login.uuid),children:Object(T.jsx)(ce.a,{onClick:function(){return L(e)},children:Object(T.jsx)(oe.a,{color:"error"})})})]},n)})),t&&Object(T.jsx)(be,{children:Object(T.jsx)(B,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},ve=D.a.div(f||(f=Object(M.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),pe=D.a.div(x||(x=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),he=D.a.div(O||(O=Object(M.a)(["\n  display: flex;\n"]))),me=(D.a.div(v||(v=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=te(),n=e.users,t=e.isLoading;return Object(T.jsx)(ve,{children:Object(T.jsxs)(pe,{children:[Object(T.jsx)(he,{children:Object(T.jsx)(F,{size:"64px",bold:!0,children:"PplFinder"})}),Object(T.jsx)(Oe,{users:n,isLoading:t})]})})}),ge=t(87),ye=t(164),Se=t(165),ze=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=C.a.useMemo((function(){return Object(ge.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(T.jsxs)(ye.a,{theme:i,children:[Object(T.jsx)(Se.a,{}),n]})},we=t(170),ke=t(168),Ce=t(166),Ne=D.a.div(p||(p=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Je=D.a.div(h||(h=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 170px);\n  margin-block-start: 80px;\n  margin-left: 20px;\n  overflow-y: auto;\n"]))),Ee=D.a.div(m||(m=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),Ie=D.a.div(g||(g=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),Le=D.a.img(y||(y=Object(M.a)(["\n  border-radius: 45%;\n"]))),Me=(D.a.div(S||(S=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]))),D.a.div(z||(z=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0}))),De=(D.a.div(w||(w=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),function(){var e=Object(k.useState)([]),n=Object(U.a)(e,2),t=n[0],i=n[1],c=Object(k.useState)(JSON.parse(localStorage.getItem("fav"))||[]),a=Object(U.a)(c,2),o=a[0],r=a[1],l=o.map((function(e){return e.login.uuid}));Object(k.useEffect)((function(){s()}),[]);var s=function(){i((function(e){return e.concat(JSON.parse(localStorage.getItem("fav")))}))};console.log(o),Object(k.useEffect)((function(){localStorage.setItem("fav",JSON.stringify(o))}),[o]);return Object(T.jsx)(Ne,{children:Object(T.jsxs)(Je,{children:[Object(T.jsx)(F,{children:"Favorites"}),0===t.length?Object(T.jsx)(F,{children:"\u05d0\u05d9\u05df \u05e2\u05d3\u05d9\u05df \u05de\u05e9\u05ea\u05de\u05e9\u05d9\u05dd \u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd"}):null,t.map((function(e,n){return Object(T.jsxs)(Ee,{children:[Object(T.jsx)(Le,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(T.jsxs)(Ie,{children:[Object(T.jsxs)(F,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(T.jsx)(F,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(T.jsxs)(F,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(T.jsx)(Me,{isVisible:l.includes(e.login.uuid),children:Object(T.jsx)(ce.a,{onClick:function(){return function(e){if(l.includes(e.login.uuid)){var n=o.filter((function(n){return n.login.uuid!==e.login.uuid}));r(n)}else r((function(n){return n.concat(e)})),localStorage.setItem("fav",JSON.stringify(o))}(e)},children:Object(T.jsx)(oe.a,{color:"error"})})})]},n)}))]})})}),Ve=function(){var e=Object(k.useState)(0),n=Object(U.a)(e,2),t=n[0],i=n[1],c=["/","/favorites"];return Object(T.jsxs)(we.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:[Object(T.jsxs)(ke.a,{value:t,onChange:function(e,n){i(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(T.jsx)(Ce.a,{label:"Home",index:0,component:E.b,to:c[0]}),Object(T.jsx)(Ce.a,{label:"Favorites",index:1,component:E.b,to:c[1]})]}),Object(T.jsxs)(I.c,{children:[Object(T.jsx)(I.a,{path:c[1]}),Object(T.jsx)(I.a,{path:c[0]})]})]})},Te=function(){return Object(T.jsx)(ze,{children:Object(T.jsxs)(E.a,{children:[Object(T.jsx)(Ve,{}),Object(T.jsxs)(I.c,{children:[Object(T.jsx)(I.a,{exact:!0,path:"/",component:me}),Object(T.jsx)(I.a,{exact:!0,path:"/favorites",component:De})]})]})})},Fe=t(48),Ue=t(15),qe=t(37),Ae=t(85),Be=t.n(Ae),He=Object(Ue.b)({nat:ne}),Pe={key:"root1",storage:Be.a},Ge=Object(Fe.a)(Pe,He),Ke=Object(Z.a)({reducer:Ge,devTools:!1,middleware:[qe.a]}),Qe=t(86),Re=Object(Fe.b)(Ke);J.a.render(Object(T.jsx)(Y.a,{store:Ke,children:Object(T.jsx)(Qe.a,{loading:null,persistor:Re,children:Object(T.jsx)(Te,{})})}),document.querySelector("#root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.d2d683b9.chunk.js.map