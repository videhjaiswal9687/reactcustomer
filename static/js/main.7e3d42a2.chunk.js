(this["webpackJsonpreact-rest"]=this["webpackJsonpreact-rest"]||[]).push([[0],{159:function(e,t,n){},160:function(e,t,n){},481:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),o=n(33),r=n.n(o),i=(n(159),n.p,n(160),n(161),n(5)),l=n(6),h=n(8),d=n(7),j=Object(c.jsx)("h1",{children:"shivi patil"});a.Component,a.Component;function u(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:["Course:",e.course.name]}),Object(c.jsxs)("h3",{children:["duration:",e.course.duration]})]})}var b=function(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("h4",{children:["Fee:",e.fee]})})};a.Component,a.Component;function p(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:["Street:",e.address.street]}),Object(c.jsxs)("h3",{children:["Suite:",e.address.suite]}),Object(c.jsxs)("h3",{children:["City:",e.address.city]}),Object(c.jsxs)("h3",{children:["Zipcode:",e.address.zipcode]})]})}function m(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:["Lat:",e.geo.lat]}),Object(c.jsxs)("h3",{children:["lng:",e.geo.lng]})]})}var O=n(14),x=(a.Component,a.Component,function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={productId:c.props.productId,qty:c.props.qty},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount called !!!!")}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.qty!==e.qty&&(console.log("shouldComponentUpdate!!!"),!0)}},{key:"componentWillUnmount",value:function(){return console.log("ComponentUnamount!!!"),!0}},{key:"render",value:function(){return console.log("render method called!!!"),Object(c.jsxs)("div",{children:["Carts Item:-",this.state.qty]})}}],[{key:"getDrivedStateFromProps",value:function(e,t){return e.qty!==t.qty?(console.log("getDerivedStateFromProps"),{qty:e.qty}):null}}]),n}(a.Component)),g=(a.Component,function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={productId:c.props.productId,qty:c.props.qty},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount called !!!!")}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.qty!==e.qty&&(console.log("shouldComponentUpdate!!!"),!0)}},{key:"componentWillUnmount",value:function(){return console.log("shouldComponentUpdate!!!"),!0}},{key:"render",value:function(){return console.log("render method called!!!"),Object(c.jsxs)("div",{children:["Cart Items:- ",this.state.qty]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.qty!==t.qty?(console.log("getDerivedStateFromProps"),{qty:e.qty}):null}}]),n}(a.Component)),v=n(32),y=(a.Component,a.Component,n(11)),C=n(12);var f=n(482),k=n(483),w=n(154),S=n(484),_=(a.Component,n(16)),I=n.n(_),D=n(67),q=(a.Component,a.Component,n(485)),L=(a.Component,a.Component,function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).update=function(e){c.setState((function(t){return{getId:e.id,name:e.name,gender:e.gender,account_no:e.account_no,balance:e.balance,accounttype:e.accounttype,email:e.email}}))},c.state={cusList:[],getId:"",name:"",gender:"",account_no:"",balance:"",accounttype:"",email:""},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getCusList()}},{key:"getCusList",value:function(){var e=this;I.a.get("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/").then((function(t){var n=t.data;e.setState({cusList:n}),console.log(e.state.cusList)}))}},{key:"onDeleteEmpRecord",value:function(e){var t=this;alert(e),I.a.delete("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/"+e+"/",{empId:e}).then((function(e){console.log("Data:",e),t.getCusList()})).catch((function(e){console.log("Error:",e)}))}},{key:"onUpdateData",value:function(e){alert(e)}},{key:"render",value:function(){var e=this;return""!==this.state.name&&""!==this.state.email?Object(c.jsx)(C.a,{to:{pathname:"/Update",state:{getId:this.state.getId,name:this.state.name,gender:this.state.gender,account_no:this.state.account_no,balance:this.state.balance,accounttype:this.state.accounttype,email:this.state.email}}}):Object(c.jsx)("div",{children:Object(c.jsxs)(D.a,{responsive:!0,border:"1px solid black",children:[Object(c.jsxs)("thead",{children:[Object(c.jsx)("tr",{children:Object(c.jsx)("th",{colSpan:"10 ",bgcolor:"navyblue",children:Object(c.jsx)("h1",{align:"center",style:{color:"white"},children:"Customer List"})})}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"id"}),Object(c.jsx)("th",{children:"name"}),Object(c.jsx)("th",{children:"account_no"}),Object(c.jsx)("th",{children:"balance"}),Object(c.jsx)("th",{children:"accounttype"}),Object(c.jsx)("th",{children:"pub_date"}),Object(c.jsx)("th",{children:"email"}),Object(c.jsx)("th",{children:"password"}),Object(c.jsx)("th",{colSpan:"2",children:" Action "})]})]}),Object(c.jsx)("tbody",{children:this.state.cusList.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.id}),Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.account_no}),Object(c.jsx)("td",{children:t.balance}),Object(c.jsx)("td",{children:t.accounttype}),Object(c.jsx)("td",{children:t.pub_date}),Object(c.jsx)("td",{children:t.email}),Object(c.jsx)("td",{children:t.password}),Object(c.jsx)("td",{children:Object(c.jsx)(q.a,{variant:"danger",onClick:function(){return e.onDeleteEmpRecord(t.id)},children:"Delete"})}),Object(c.jsxs)("td",{children:[" ",Object(c.jsx)(q.a,{variant:"info",onClick:function(){return e.update(t)},children:"Update"})]})]})}))})]})})}}]),n}(a.Component)),U=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;Object(i.a)(this,n),c=t.call(this,e);var a=!0;return null==localStorage.getItem("token")&&(a=!1),c.initialState={email:"",password:"",loggedIn:a},c.state=c.initialState,c.onhandleChange=c.onhandleChange.bind(Object(O.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(O.a)(c)),c}return Object(l.a)(n,[{key:"onhandleChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(v.a)({},t,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state,c=n.email,a=n.password;console.log(this.state);var s={email:this.state.email,password:this.state.password};I.a.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login",s).then((function(e){console.log(e),console.log(e.data.data);e.data.data;c===t.state.email&&a===t.state.password&&(localStorage.setItem("token","logincheck"),t.setState({loggedIn:!0}))}))}},{key:"render",value:function(){return this.state.loggedIn?Object(c.jsx)(C.a,{to:"/home"}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:Object(c.jsx)("marquee",{style:{color:"red"},children:"Customer Login"})}),Object(c.jsx)("form",{onSubmit:this.handleSubmit,children:Object(c.jsx)(D.a,{responsive:!0,children:Object(c.jsxs)("thead",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Email:"}),Object(c.jsx)("td",{children:Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:this.onhandleChange,placeholder:"Name"})})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Password:"}),Object(c.jsx)("td",{children:Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.onhandleChange,placeholder:"password"})})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{}),Object(c.jsx)("td",{children:Object(c.jsx)(q.a,{variant:"secondary",type:"Submit",children:"Login"})})]})]})})}),Object(c.jsx)(y.b,{to:"/register",children:"Register"})]})}}]),n}(a.Component),P=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(i.a)(this,n),c=t.call(this,e),localStorage.removeItem("token"),c.state={},c}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(y.b,{to:"/login",children:"Login Again"})})}}]),n}(a.Component),F=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;Object(i.a)(this,n),c=t.call(this,e);var a=!0;return null==localStorage.getItem("token")&&(a=!1),c.state={loggedIn:a},c}return Object(l.a)(n,[{key:"render",value:function(){return!1===this.state.loggedIn?Object(c.jsx)(C.a,{to:"/home"}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"this is a home page"}),Object(c.jsx)(y.b,{to:"/logout",style:{float:"right",marginRight:"40px"},children:Object(c.jsx)("h2",{children:"Logout "})}),Object(c.jsx)(y.b,{to:"/list",style:{textDecoration:"underline"},children:Object(c.jsx)("h2",{children:"Customer List"})})]})}}]),n}(a.Component),H=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).initialState={name:"",gender:"",balance:"",account_no:"",accounttype:"",email:"",password:""},c.state=c.initialState,c.handleChange=c.handleChange.bind(Object(O.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(O.a)(c)),c}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(v.a)({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state);var t={name:this.state.name,gender:this.state.gender,balance:this.state.balance,account_no:this.state.account_no,accounttype:this.state.accounttype,email:this.state.email,password:this.state.password};I.a.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/register",t).then((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{style:{color:"red"},children:"Customer Registration"}),Object(c.jsx)("form",{align:"center",onSubmit:this.handleSubmit,children:Object(c.jsx)(D.a,{responsive:!0,children:Object(c.jsxs)("thead",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Customer Name:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,placeholder:"Name"})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Customer gender:"}),Object(c.jsxs)("td",{children:[Object(c.jsx)("input",{type:"radio",name:"gender",value:"male",onChange:this.handleChange}),"male",Object(c.jsx)("input",{type:"radio",name:"gender",value:"female",onChange:this.handleChange}),"female"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Customer balance:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"number",name:"balance",value:this.state.balance,onChange:this.handleChange,placeholder:"balnce"})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Customer Account_no:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"number",name:"account_no",value:this.state.account_no,onChange:this.handleChange,placeholder:"Email"})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Customer Accounttype:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",name:"accounttype",value:this.state.accounttype,onChange:this.handleChange,placeholder:"Password"})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Customer Email:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Password"})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Customer Password:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{}),Object(c.jsx)("td",{children:Object(c.jsx)(q.a,{variant:"primary",type:"submit",children:"Register"})})]})]})})}),Object(c.jsx)(y.b,{to:"/login",children:"Login"})]})}}]),n}(a.Component),A=(n(150),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).update=function(){var e=c.state.id,t={name:c.state.name,gender:c.state.gender,balance:c.state.balance,account_no:c.state.account_no,accounttype:c.state.accounttype,email:c.state.email,password:c.state.password};I.a.put(" http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/"+e+"/",t).then((function(e){console.log(e)})).catch((function(e){alert("Not submite")}))},c.state={id:"",name:"",gender:"",balance:"",account_no:"",accounttype:"",email:""},c.onHandlechange=c.onHandlechange.bind(Object(O.a)(c)),c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({id:this.props.location.state.getId,name:this.props.location.state.name,gender:this.props.location.state.gender,balance:this.props.location.state.balance,account_no:this.props.location.state.account_no,accounttype:this.props.location.state.accounttype,email:this.props.location.state.email})}},{key:"onHandlechange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(v.a)({},t,n))}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(y.b,{to:"/List",style:{backgroundColor:"#ffc107",margin:"1rem",marginTop:"1rem",padding:"7px",borderRadius:"5px",fontSize:"1.5rem",color:"black"},children:"Back"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("h1",{style:{textAlign:"center"},children:"Update Customer"}),Object(c.jsx)(S.a,{children:Object(c.jsxs)(D.a,{style:{textAlign:"center",margin:"4rem"},children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"ID:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",disabled:!0,name:"id",onChange:this.onHandlechange,value:this.state.id})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",name:"name",onChange:this.onHandlechange,value:this.state.name})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Gender:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",name:"gender",onChange:this.onHandlechange,placeholder:"gender",value:this.state.gender})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"account_no:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",name:"account_no",onChange:this.onHandlechange,placeholder:"account_no",value:this.state.account_no})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Balance:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",name:"balance",onChange:this.onHandlechange,placeholder:"balance",value:this.state.balance})})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Account Type:"}),Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"text",name:"accounttype",onChange:this.onHandlechange,placeholder:"accounttype",value:this.state.accounttype})})]}),Object(c.jsx)("tr",{children:Object(c.jsxs)("td",{colSpan:"2",children:[" ",Object(c.jsx)(q.a,{type:"button",variant:"warning",onClick:function(){return e.update(e.state.id)},children:"Update"})]})})]})})]})}}]),n}(a.Component));var E=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(y.a,{children:[Object(c.jsx)("div",{children:Object(c.jsxs)(C.d,{children:[Object(c.jsx)(C.b,{exact:!0,path:"/home",component:F}),Object(c.jsx)(C.b,{exact:!0,path:"/logout",component:P}),Object(c.jsx)(C.b,{exact:!0,path:"/login",component:U}),Object(c.jsx)(C.b,{exact:!0,path:"/list",component:L}),Object(c.jsx)(C.b,{exact:!0,path:"/register",component:H}),Object(c.jsx)(C.b,{exact:!0,path:"/Update",component:A})]})}),Object(c.jsx)(U,{})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,486)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),M()}},[[481,1,2]]]);
//# sourceMappingURL=main.7e3d42a2.chunk.js.map