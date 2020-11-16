(this["webpackJsonpmaterial-ui-to-do"]=this["webpackJsonpmaterial-ui-to-do"]||[]).push([[0],{67:function(t,e,n){},68:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var c=n(5),r=n(0),o=n.n(r),a=n(9),i=n.n(a),s=(n(67),n(68),n(118)),u=n(115),l=n(105),d=n(14),j=n(109),b=n(39),O=n(75),h=n(11),f=n(54),p=n(111),x=n(110),m=n(112),v=n(113),g=n(114),T=n(53),C=n.n(T),E=n(52),y=n.n(E),D=n(119);var k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=Object(r.useState)(t),n=Object(h.a)(e,2),c=n[0],o=n[1],a=function(t){o(t)},i=function(){o("")};return[c,a,i]},I=n(16),M=function(t,e){switch(e.type){case"ADD-ITEM":return[].concat(Object(I.a)(t),[e.item]);case"DELETE-ITEM":return t.filter((function(t){return t.id!==e.id}));case"TOGGLE-ITEM":return t.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{isCompleted:!t.isCompleted}):t}));case"UPDATE-ITEM":return t.map((function(t){return e.updateTodo.id===t.id?Object(d.a)(Object(d.a)({},t),{},{content:e.updateTodo.content}):t}));default:return t}},N=Object(r.createContext)(),S=Object(r.createContext)();function L(t){var e=function(t,e,n){var c=Object(r.useReducer)(n,e,(function(){var n;try{n=JSON.parse(localStorage.getItem(t)||String(e))}catch(c){n=e}return n})),o=Object(h.a)(c,2),a=o[0],i=o[1];return Object(r.useEffect)((function(){localStorage.setItem(t,JSON.stringify(a))}),[a,t]),[a,i]}("AnotherToDoApp",[],M),n=Object(h.a)(e,2),o=n[0],a=n[1];return Object(c.jsx)(S.Provider,{value:a,children:Object(c.jsx)(N.Provider,{value:o,children:t.children})})}var w=Object(l.a)((function(t){return{root:{}}}));function P(t){var e=t.todo,n=t.handleEsc,o=t.setToggleEdit,a=w(),i=Object(r.useContext)(S),s=k(e.content),u=Object(h.a)(s,2),l=u[0],j=u[1];return Object(c.jsx)("form",{className:a.root,noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault(),e=Object(d.a)(Object(d.a)({},e),{},{content:l}),i({type:"UPDATE-ITEM",updateTodo:e}),o()},children:Object(c.jsx)(D.a,{value:l,onChange:function(t){return j(t.target.value)},id:"outlined-basic",variant:"outlined",fullWidth:!0,onKeyDown:n})})}var A=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(r.useState)(t),n=Object(h.a)(e,2),c=n[0],o=n[1],a=function(){o((function(t){return!t}))};return[c,a]},G=Object(l.a)((function(t){return{root:{backgroundColor:t.palette.background.paper,paddingTop:"12px",paddingBottom:"12px",height:"4rem"},listItemText:{textDecoration:function(t){return t?"line-through":""}}}})),F=Object(f.a)({overrides:{MuiTypography:{body2:{fontSize:"1rem"}}}});function J(t){var e=t.content,n=t.id,o=t.isCompleted,a=G(o),i="checkbox-list-label-".concat(e),s=A(),u=Object(h.a)(s,2),l=u[0],d=u[1],j=Object(r.useContext)(S),b=l?Object(c.jsx)(x.a,{children:Object(c.jsx)(P,{todo:{content:e,id:n,isCompleted:o},handleEsc:function(t){27===t.keyCode&&d()},setToggleEdit:d})}):Object(c.jsx)(p.a,{theme:F,children:Object(c.jsx)(x.a,{id:i,className:a.listItemText,children:e})});return Object(c.jsxs)(m.a,{className:a.root,role:void 0,dense:!0,button:!l,onClick:l?function(){}:function(){return j({type:"TOGGLE-ITEM",id:n})},children:[b,!l&&Object(c.jsxs)(v.a,{children:[Object(c.jsx)(g.a,{edge:"start","aria-label":"edit",onClick:function(t){t.stopPropagation(),d()},children:Object(c.jsx)(y.a,{})}),Object(c.jsx)(g.a,{edge:"end","aria-label":"delete",onClick:function(){return j({type:"DELETE-ITEM",id:n})},children:Object(c.jsx)(C.a,{})})]})]},n)}var B=Object(r.memo)(J),U=Object(l.a)((function(t){return{root:{backgroundColor:t.palette.background.paper,marginTop:"10px"},emptyList:{padding:"10px"}}}));function V(){var t=U(),e=Object(r.useContext)(N);return Object(c.jsx)(O.a,{className:t.root,elevation:5,children:e.length?Object(c.jsx)(j.a,{children:e.map((function(t){return Object(r.createElement)(B,Object(d.a)(Object(d.a)({},t),{},{key:t.id}))}))}):Object(c.jsx)(b.a,{variant:"h6",className:t.emptyList,children:"List is Empty"})})}var W=n(120),z=Object(l.a)((function(t){return{root:{width:"100%"}}}));function K(){var t=z(),e=k(""),n=Object(h.a)(e,3),o=n[0],a=n[1],i=n[2],s=Object(r.useContext)(S);return Object(c.jsx)(O.a,{elevation:3,children:Object(c.jsx)("form",{className:t.root,noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault();var e={content:o,id:Object(W.a)(),isCompleted:!1};s({type:"ADD-ITEM",item:e}),i()},children:Object(c.jsx)(D.a,{value:o,onChange:function(t){return a(t.target.value)},id:"outlined-basic",label:"List of things to do",variant:"outlined",fullWidth:!0})})})}var R=Object(l.a)({root:{padding:"0",margin:"0",height:"100vh"},mainComponent:{marginTop:"64px"},todoTitle:{padding:"10px"}});function q(){var t=R();return Object(c.jsx)("div",{className:t.root,children:Object(c.jsx)(u.a,{container:!0,justify:"center",children:Object(c.jsx)(u.a,{item:!0,xs:11,sm:10,md:6,lg:4,className:t.mainComponent,children:Object(c.jsxs)(L,{children:[Object(c.jsx)(K,{}),Object(c.jsx)(V,{})]})})})})}function H(t){return Object(c.jsx)("div",{style:{height:"100vh",width:"100vw"},children:t.children})}var Q=Object(r.createContext)();function X(t){var e=A(!0),n=Object(h.a)(e,2),o=n[0],a=n[1],i=Object(r.useMemo)((function(){return Object(f.a)({palette:{type:o?"dark":"light"}})}),[o]);return Object(c.jsx)(Q.Provider,{value:{isDarkMode:o,toggleIsDarkMode:a},children:Object(c.jsx)(p.a,{theme:i,children:t.children})})}var Y=n(116),Z=n(117),$=n(121),_=Object(l.a)({root:{height:"64px",width:"100%",flexGrow:1},title:{flexGrow:1}});function tt(){var t=Object(r.useContext)(Q),e=t.isDarkMode,n=t.toggleIsDarkMode,o=_();return Object(c.jsx)(Y.a,{className:o.root,color:e?"default":"primary",position:"static",children:Object(c.jsxs)(Z.a,{children:[Object(c.jsx)(b.a,{className:o.title,color:"inherit",variant:"h4",children:"To Do List!"}),Object(c.jsx)($.a,{onClick:n})]})})}var et=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(X,{children:Object(c.jsxs)(H,{children:[Object(c.jsx)(s.a,{}),Object(c.jsx)(tt,{}),Object(c.jsx)(q,{})]})})})},nt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),o(t),a(t)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(et,{})}),document.getElementById("root")),nt()}},[[73,1,2]]]);
//# sourceMappingURL=main.fd25e494.chunk.js.map