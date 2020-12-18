(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports={form:"Form_form__2E5x4"}},function(t,e,n){t.exports={input:"Filter_input__2nFeC"}},function(t,e,n){t.exports={contacts:"ContactList_contacts__N23QW"}},function(t,e,n){t.exports={container:"Layout_container__2QxOz"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n(9),r=n.n(o),s=(n(20),n(14)),i=n(2),l=n(3),u=n(6),b=n(5),h=n(23),d=n(4),j=n(8),m=n(10),f=n.n(m),p={name:"",number:""},O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state=Object(j.a)({},p),t.addToName=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.addToContacts(t.state),t.setState(Object(j.a)({},p))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:f.a.form,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{value:this.state.name,type:"text",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f",onChange:this.addToName})]}),Object(a.jsxs)("label",{children:["Phone",Object(a.jsx)("input",{value:this.state.number,type:"tel",name:"number",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043b\u0435\u0444\u043e\u043d",onChange:this.addToName})]}),Object(a.jsx)("button",{type:"submit",onClick:this.handleSubmit,children:"Add contact"})]})}}]),n}(c.Component),v=n(11),x=n.n(v);function C(t){var e=t.value,n=t.searchContact;return Object(a.jsxs)("label",{children:["Find contact by name",Object(a.jsx)("input",{className:x.a.input,type:"text",name:"filter",value:e,placeholder:"\u041f\u043e\u0448\u0443\u043a",onChange:function(t){return n(t.target.value)}})]})}function g(t){var e=t.id,n=t.name,c=t.number,o=t.onDelete;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:[n,": ",c]}),Object(a.jsx)("button",{type:"button",id:e,onClick:function(){return o(e)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})}var y=n(12),S=n.n(y);function _(t){var e=t.visibleContact,n=t.onDelete;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:S.a.contacts,children:e.map((function(t){return Object(a.jsx)(g,{name:t.name,number:t.number,id:t.id,onDelete:n},t.id)}))})})}var k=n(13),D=n.n(k),N=function(t){var e=t.children;return Object(a.jsx)("div",{className:D.a.container,children:e})},w=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.searchContact=function(e){t.setState({filter:e})},t.getVisibleContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.addToContacts=function(e){var n=e.name,a=e.number;""===n||""===a?alert("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0432\u0441\u0456 \u043f\u043e\u043b\u044f"):t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," \u0432\u0436\u0435 \u0454 \u0443 \u0441\u043f\u0438\u0441\u043a\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{name:n,id:Object(h.a)(),number:a}])}}))},t.onDelete=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){console.log("componentDidUpdate"),e.contacts!==this.state.contacts&&(console.log("\u043d\u0435 \u0440\u0430\u0432\u043d\u044b, \u0437\u0430\u043f\u0438\u0441\u0443\u0435\u043c \u0432 \u043b\u0441"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"componentDidMount",value:function(){console.log("componentDidMount");var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.getVisibleContact();return Object(a.jsxs)(N,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(O,{addToContacts:this.addToContacts}),Object(a.jsx)("h2",{children:"Contacts"}),n.length>0?Object(a.jsx)(C,{value:e,searchContact:this.searchContact}):Object(a.jsx)("h3",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 \u043f\u0443\u0441\u0442\u0438\u0439"}),n.length>0&&Object(a.jsx)(_,{visibleContact:c,onDelete:this.onDelete})]})}}]),n}(c.Component);r.a.render(Object(a.jsx)(w,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.5bad0882.chunk.js.map