(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11],{132:function(e,t,a){"use strict";var n=a(137),r=a(4),c=function(e){var t=e.variant,a=e.children;return Object(r.jsx)(n.a,{variant:t,children:a})};c.defaultProps={variant:"info"},t.a=c},133:function(e,t,a){"use strict";var n=a(79),r=a(4);t.a=function(e){var t=e.children,a=e.type,c=e.onClick,i=e.variant,s=e.className,u=e.size,l=e.href,j=e.disabled,d=e.as;return Object(r.jsx)(n.a,{type:a,variant:i,className:s,onClick:c,size:u,href:l,disabled:j,as:d,children:t})}},135:function(e,t,a){"use strict";var n=a(139),r=a(4);t.a=function(e){var t=e.type,a=e.placeholder,c=e.value,i=e.onChange,s=e.label,u=e.name,l=(e.required,e.controlId),j=e.children;return Object(r.jsxs)(n.a.Group,{controlId:l,children:[j,Object(r.jsx)(n.a.Control,{name:u,label:s,type:t,placeholder:a,value:c,onChange:i,required:!0})]})}},136:function(e,t,a){"use strict";var n=a(126),r=a(127),c=a(121),i=a(4);t.a=function(e){var t=e.children;return Object(i.jsx)(n.a,{children:Object(i.jsx)(r.a,{className:"justify-content-md-center",children:Object(i.jsx)(c.a,{xs:12,md:6,children:t})})})}},138:function(e,t,a){"use strict";var n=a(59),r=a(10),c=a(134),i=a(1);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(i.useState)(e),a=Object(c.a)(t,2),s=a[0],u=a[1],l=function(e){u(Object(r.a)(Object(r.a)({},s),{},Object(n.a)({},e.target.name,e.target.value)))};return{formData:s,setFormData:u,handleInputChange:l}}},161:function(e,t,a){"use strict";a.r(t);var n=a(134),r=a(1),c=a(42),i=a(139),s=a(136),u=a(58),l=a(31),j=a(132),d=a(57),o=a(135),b=a(133),h=a(138),m=a(4);t.default=function(e){var t=e.match,a=e.history,O=t.params.id,f=Object(h.a)({name:"",email:"",isAdmin:!1}),v=f.formData,p=(f.handleInputChange,Object(r.useState)("")),x=Object(n.a)(p,2),g=x[0],y=x[1],C=Object(r.useState)(""),k=Object(n.a)(C,2),E=k[0],S=k[1],A=Object(r.useState)(null),D=Object(n.a)(A,2),I=D[0],N=(D[1],Object(r.useState)(!1)),q=Object(n.a)(N,2),G=q[0],U=q[1],w=Object(l.b)(),z=Object(l.c)((function(e){return e.userDetails})),F=Object(l.c)((function(e){return e.userUpdate})),J=F.success,L=(F.loading,z.loading),_=z.error,B=z.user;Object(r.useEffect)((function(){J&&a.push("/admin/userlist"),B.name&&B._id===O?(S(B.email),y(B.name),U(B.isAdmin)):w(Object(u.b)(O))}),[B,O,v,a,J,w]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(c.Link,{to:"/admin/userList",className:"btn btn-light my-3",children:"Go Back"}),Object(m.jsxs)(s.a,{children:[Object(m.jsx)("h1",{children:"Edit User "}),I&&Object(m.jsx)(j.a,{variant:"danger",children:I}),_&&Object(m.jsx)(j.a,{variant:"danger",children:_}),L&&Object(m.jsx)(d.a,{}),Object(m.jsxs)(i.a,{onSubmit:function(e){e.preventDefault(),w(Object(u.g)({_id:O,name:g,email:E,isAdmin:G}))},children:[Object(m.jsx)(o.a,{type:"text",name:"name",placeholder:"Enter Name",value:g,onChange:function(e){return y(e.target.value)},required:!0}),Object(m.jsx)(o.a,{type:"email",name:"email",placeholder:"Enter Email",value:E,onChange:function(e){return S(e.target.value)},required:!0}),Object(m.jsx)(i.a.Group,{children:Object(m.jsx)(i.a.Check,{type:"checkbox",label:"Is Admin",name:"isAdmin",value:G,onChange:function(e){return U(e.target.checked)}})}),Object(m.jsx)(b.a,{type:"submit",variant:"primary",children:"Edit User"})]})]})]})}}}]);
//# sourceMappingURL=UserEditScreen.4a2b6b0d.chunk.js.map