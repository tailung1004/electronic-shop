(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11],{119:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(18),c=n.n(a),o=(n(85),n(38)),s=n(73),i=n(74),u=n(10),d=n(25),l=n(63),p=n(33),f=n(8),j=n(12),h=Object(o.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.e:return Object(u.a)({loading:!0},e);case d.f:return{loading:!1,products:t.payload};case d.d:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.b:return{loading:!0,product:[]};case d.c:return{loading:!1,product:t.payload};case d.a:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],shippingAddress:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.a:var n=t.payload,r=e.cartItems.find((function(e){return e.product===n.product}));return r?Object(u.a)(Object(u.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?n:e}))}):Object(u.a)(Object(u.a)({},e),{},{cartItems:[].concat(Object(l.a)(e.cartItems),[n])});case p.b:return Object(u.a)(Object(u.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case p.d:return Object(u.a)(Object(u.a)({},e),{},{shippingAddress:t.payload});case p.c:return Object(u.a)(Object(u.a)({},e),{},{paymentMethod:t.payload});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.f:return{loading:!0};case f.g:return{loading:!0,userInfo:t.payload};case f.e:return{loading:!1,error:t.payload};case f.h:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.j:return{loading:!0};case f.k:return{loading:!1,userInfo:t.payload};case f.i:return{loading:!1,error:t.payload};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.b:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case f.d:return{loading:!1,user:t.payload};case f.a:return{loading:!1,error:t.payload};case f.c:return{user:{}};default:return e}},orderCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.f:return{loading:!0};case j.g:return{loading:!1,success:!0,order:t.payload};case j.e:return{loading:!1,error:t.payload};default:return Object(u.a)({},e)}},orderDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,orderItems:[],shippingAddress:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.i:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case j.j:return{loading:!1,order:t.payload};case j.h:return{loading:!1,error:t.payload};default:return e}},orderPay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.l:return{loading:!0};case j.n:return{loading:!1,success:!0};case j.k:return{loading:!1,error:t.payload};case j.m:return{};default:return e}},myOrders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.b:return{loading:!0};case j.d:return{loading:!1,orders:t.payload};case j.c:return{orders:[]};case j.a:return{loading:!1,error:t.payload};default:return e}}}),O=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],b=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,g={cart:{cartItems:O,shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{},paymentMethod:localStorage.getItem("paymentMethod")?JSON.parse(localStorage.getItem("paymentMethod")):null},userLogin:{userInfo:b}},S=[s.a],E=Object(o.createStore)(h,g,Object(i.composeWithDevTools)(o.applyMiddleware.apply(void 0,S))),y=n(28),m=n(129),R=n(126),_=n(130),I=n(128),v=n(49),x=n(31),T=n(62),C=n(4),A=function(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.userLogin})),n=(Object(y.c)((function(e){return e.userRegister})),t.userInfo);return Object(C.jsx)("header",{children:Object(C.jsx)(m.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(C.jsxs)(R.a,{children:[Object(C.jsx)(x.LinkContainer,{to:"/",children:Object(C.jsx)(m.a.Brand,{children:"JuicyShop"})}),Object(C.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(C.jsxs)(_.a,{className:"ms-auto",children:[Object(C.jsx)(x.LinkContainer,{to:"/cart",children:Object(C.jsxs)(_.a.Link,{children:[Object(C.jsx)(v.a,{}),"  Cart"]})}),n?Object(C.jsxs)(I.a,{title:n.name,id:"username",children:[Object(C.jsx)(x.LinkContainer,{to:"/profile",children:Object(C.jsx)(I.a.Item,{children:"Profile"})}),Object(C.jsx)(x.LinkContainer,{to:"/cart",children:Object(C.jsx)(I.a.Item,{onClick:function(t){t.preventDefault(),e(Object(T.c)())},children:"Logout"})})]}):Object(C.jsx)(x.LinkContainer,{to:"/login",children:Object(C.jsxs)(_.a.Link,{children:[Object(C.jsx)(v.f,{}),"Sign In"]})})]})})]})})})},D=n(127),L=n(121),U=function(){return Object(C.jsx)("footer",{children:Object(C.jsx)(R.a,{children:Object(C.jsx)(D.a,{children:Object(C.jsx)(L.a,{className:"text-center py-3",children:"Copyright \xa9 JuicyShop"})})})})},k=n(57),w=n(40),P=n(9),N=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,160))})),M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(18),n.e(7)]).then(n.bind(null,150))})),z=Object(r.lazy)((function(){return Promise.all([n.e(14),n.e(1)]).then(n.bind(null,151))})),J=Object(r.lazy)((function(){return Promise.all([n.e(16),n.e(3)]).then(n.bind(null,152))})),F=Object(r.lazy)((function(){return Promise.all([n.e(17),n.e(9)]).then(n.bind(null,153))})),Q=Object(r.lazy)((function(){return Promise.all([n.e(15),n.e(8)]).then(n.bind(null,154))})),Y=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,156))})),G=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,157))})),B=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,158))})),V=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,159))}));var H=function(){return Object(C.jsxs)(w.BrowserRouter,{children:[Object(C.jsx)(A,{}),Object(C.jsx)("main",{className:"py-3",children:Object(C.jsx)(R.a,{children:Object(C.jsxs)(r.Suspense,{fallback:Object(C.jsx)(k.a,{}),children:[Object(C.jsx)(P.d,{path:"/",component:N,exact:!0}),Object(C.jsx)(P.d,{path:"/product/:id",component:M}),Object(C.jsx)(P.d,{path:"/cart/:id?",component:z}),Object(C.jsx)(P.d,{path:"/login",component:J}),Object(C.jsx)(P.d,{path:"/register",component:F}),Object(C.jsx)(P.d,{path:"/profile",component:Q}),Object(C.jsx)(P.d,{path:"/shipping",component:Y}),Object(C.jsx)(P.d,{path:"/payment",component:G}),Object(C.jsx)(P.d,{path:"/placeorder",component:B}),Object(C.jsx)(P.d,{path:"/order/:id",component:V})]})})}),Object(C.jsx)(U,{})]})};c.a.render(Object(C.jsx)(y.a,{store:E,children:Object(C.jsx)(H,{})}),document.getElementById("root"))},12:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"i",(function(){return o})),n.d(t,"j",(function(){return s})),n.d(t,"h",(function(){return i})),n.d(t,"l",(function(){return u})),n.d(t,"n",(function(){return d})),n.d(t,"k",(function(){return l})),n.d(t,"m",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return O}));var r="ORDER_CREATE_REQUEST",a="ORDER_CREATE_SUCCESS",c="ORDER_CREATE_FAIL",o="ORDER_DETAILS_REQUEST",s="ORDER_DETAILS_SUCCESS",i="ORDER_DETAILS_FAIL",u="ORDER_PAY_REQUEST",d="ORDER_PAY_SUCCESS",l="ORDER_PAY_FAIL",p="ORDER_PAY_RESET",f="MY_ORDERS_REQUEST",j="MY_ORDERS_SUCCESS",h="MY_ORDERS_FAIL",O="MY_ORDERS_RESET"},25:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var r="PRODUCT_LIST_REQUEST",a="PRODUCT_LIST_SUCCESS",c="PRODUCT_LIST_FAIL",o="PRODUCT_DETAILS_REQUEST",s="PRODUCT_DETAILS_SUCCESS",i="PRODUCT_DETAILS_FAIL"},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return o}));var r="CART_ADD_ITEM",a="CART_REMOVE_ITEM",c="CART_SAVE_SHIPPING_ADDRESS",o="CART_SAVE_PAYMENT_METHOD"},57:function(e,t,n){"use strict";var r=n(120),a=n(4);t.a=function(){return Object(a.jsx)(r.a,{animation:"border",role:"status",style:{width:"30px",height:"30px",margin:"auto",display:"flex"},children:Object(a.jsx)("span",{className:"sr-only",children:"Loading"})})}},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return f}));var r=n(24),a=n.n(r),c=n(41),o=n(42),s=n.n(o),i=n(8),u=n(12),d=function(e){var t=e.email,n=e.password;return function(){var e=Object(c.a)(a.a.mark((function e(r){var c,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:i.f}),c={headers:{"Content-Type":"application/json"}},e.next=5,s.a.post("http://localhost:5000/api/users/login",{email:t,password:n},c);case 5:o=e.sent,u=o.data,r({type:i.g,payload:u}),localStorage.setItem("userInfo",JSON.stringify(u)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),r({type:i.e,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},l=function(){return function(e){localStorage.removeItem("userInfo"),e({type:i.h}),e({type:i.c}),e({type:u.c})}},p=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var o,u,d;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c({type:i.j}),o={headers:{"Content-Type":"application/json"}},r.next=5,s.a.post("http://localhost:5000/api/users",{name:e,email:t,password:n},o);case 5:u=r.sent,d=u.data,c({type:i.k,payload:d}),c({type:i.g,payload:d}),localStorage.setItem("userInfo",JSON.stringify(d)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),c({type:i.i,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,o,u,d,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:i.b}),c=r(),o=c.userLogin.userInfo,u={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},t.next=6,s.a.get("http://localhost:5000/api/users/".concat(e),u);case 6:d=t.sent,l=d.data,n({type:i.d,payload:l}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:i.a,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}},8:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"h",(function(){return o})),n.d(t,"j",(function(){return s})),n.d(t,"k",(function(){return i})),n.d(t,"i",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return f}));var r="USER_LOGIN REQUEST",a="USER_LOGIN_SUCCESS",c="USER_LOGIN_FAIL",o="USER_LOGOUT",s="USER_REGISTER_REQUEST",i="USER_REGISTER_SUCCESS",u="USER_REGISTER_FAIL",d="USER_DETAILS_REQUEST",l="USER_DETAILS_SUCCESS",p="USER_DETAILS_FAIL",f="USER_DETAILS_RESET"},85:function(e,t,n){}},[[119,12,13]]]);
//# sourceMappingURL=main.4c36f16e.chunk.js.map