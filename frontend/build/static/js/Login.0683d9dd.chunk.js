(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[3],{132:function(e,a,t){"use strict";var n=t(138),r=t(4),c=function(e){var a=e.variant,t=e.children;return Object(r.jsx)(n.a,{variant:a,children:t})};c.defaultProps={variant:"info"},a.a=c},133:function(e,a,t){"use strict";var n=t(79),r=t(4);a.a=function(e){var a=e.children,t=e.type,c=e.onClick,i=e.variant,s=e.className,l=e.size,o=e.href,u=e.disabled,d=e.as;return Object(r.jsx)(n.a,{type:t,variant:i,className:s,onClick:c,size:l,href:o,disabled:u,as:d,children:a})}},135:function(e,a,t){"use strict";var n=t(137),r=t(4);a.a=function(e){var a=e.type,t=e.placeholder,c=e.value,i=e.onChange,s=e.label,l=e.name,o=(e.required,e.controlId),u=e.children;return Object(r.jsxs)(n.a.Group,{controlId:o,children:[u,Object(r.jsx)(n.a.Control,{name:l,label:s,type:a,placeholder:t,value:c,onChange:i,required:!0})]})}},136:function(e,a,t){"use strict";var n=t(126),r=t(127),c=t(121),i=t(4);a.a=function(e){var a=e.children;return Object(i.jsx)(n.a,{children:Object(i.jsx)(r.a,{className:"justify-content-md-center",children:Object(i.jsx)(c.a,{xs:12,md:6,children:a})})})}},140:function(e,a,t){"use strict";var n=t(61),r=t(10),c=t(134),i=t(1);a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(i.useState)(e),t=Object(c.a)(a,2),s=t[0],l=t[1],o=function(e){l(Object(r.a)(Object(r.a)({},s),{},Object(n.a)({},e.target.name,e.target.value)))};return{formData:s,handleInputChange:o}}},152:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(40),c=t(137),i=t(127),s=t(121),l=t(136),o=t(62),u=t(28),d=t(132),j=t(57),h=t(135),b=t(133),f=t(140),p=t(4);a.default=function(e){var a=e.location,t=e.history,O=Object(f.a)({email:"",password:""}),v=O.formData,m=O.handleInputChange,x=v.email,g=v.password,y=a.search?a.search.split("=")[1]:"/",C=Object(u.b)(),w=Object(u.c)((function(e){return e.userLogin})),I=w.loading,k=w.error,E=w.userInfo;return Object(n.useEffect)((function(){E&&t.push(y)}),[t,E,y]),Object(p.jsxs)(l.a,{children:[Object(p.jsx)("h1",{children:"Sign In"}),k&&Object(p.jsx)(d.a,{variant:"danger",children:k}),I&&Object(p.jsx)(j.a,{}),Object(p.jsxs)(c.a,{onSubmit:function(e){e.preventDefault(),""===x||""===g?alert("Please fill the required fields"):(console.log("Event fired"),C(Object(o.b)({email:x,password:g})))},children:[Object(p.jsx)(h.a,{type:"email",name:"email",placeholder:"Enter Email",value:x,onChange:m}),Object(p.jsx)(h.a,{type:"password",name:"password",placeholder:"Enter Password",value:g,onChange:m}),Object(p.jsx)(b.a,{type:"submit",variant:"primary",children:"Sign In"})]}),Object(p.jsx)(i.a,{className:"py-3",children:Object(p.jsxs)(s.a,{children:["New Customer ? ",Object(p.jsx)(r.Link,{to:y?"/register?redirect=".concat(y):"/register",children:"Register"})]})})]})}}}]);
//# sourceMappingURL=Login.0683d9dd.chunk.js.map