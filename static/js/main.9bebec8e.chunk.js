(this["webpackJsonpreminder-app"]=this["webpackJsonpreminder-app"]||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(9),s=n.n(c),i=(n(51),n(35)),d=n(36),o=n(44),j=n(42),l=n(21),m="ADD_REMINDER",u="REMOVE_REMINDER",h="CLEAR_REMINDERS",b=n(38),O=n.n(b),x=(n(55),n(37)),p=n.n(x),f=(n(57),n(4)),v=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={text:"",date:new Date},e.render_reminder=function(){var t=e.props.reminders;return Object(f.jsx)("div",{className:"",children:t.map((function(t){return Object(f.jsxs)("div",{className:"my_reminders",children:[Object(f.jsx)("h2",{className:"mine_reminder",children:t.text}),Object(f.jsx)("h5",{className:"mine_date",children:p()(new Date(t.date)).fromNow()}),Object(f.jsx)("span",{className:"close",onClick:function(){return e.props.remove_reminder(t.id)},children:"X"})]},t.id)}))})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"main",children:[Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)("div",{className:"p1"}),Object(f.jsx)("div",{className:"p2"}),Object(f.jsx)("div",{className:"p3"}),Object(f.jsx)("div",{className:"p4"}),Object(f.jsx)("hr",{className:"hr0"}),Object(f.jsx)("hr",{className:"hr1"}),Object(f.jsx)("hr",{className:"hr2"}),Object(f.jsx)("hr",{className:"hr3"}),Object(f.jsx)("hr",{className:"hr4"})]}),Object(f.jsx)("h2",{className:"todo",children:"What Should U Do?"}),Object(f.jsxs)("div",{className:"reminders",children:[Object(f.jsx)("input",{type:"text",value:this.state.text,className:"reminder",placeholder:"What Should I Do?",onChange:function(t){return e.setState({text:t.target.value})}}),Object(f.jsx)("br",{}),Object(f.jsx)(O.a,{selected:this.state.date,onChange:function(t){e.setState({date:t})},showTimeSelect:!0,timeFormat:"HH:mm",dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time",value:this.state.date,className:"date"}),Object(f.jsxs)("div",{className:"controls",children:[Object(f.jsx)("button",{className:"add",onClick:function(){e.props.add_reminder(e.state.text,e.state.date),e.setState({text:"",date:new Date})},children:"Add Reminder"}),Object(f.jsx)("br",{}),this.render_reminder(),Object(f.jsx)("button",{className:"clear",onClick:function(){return e.props.clear_reminders()},children:"Clear Reminders"})]})]})]})}}]),n}(r.Component),N=Object(l.b)((function(e){return{reminders:e}}),{add_reminder:function(e,t){return{type:m,text:e,date:t}},remove_reminder:function(e){return{type:u,id:e}},clear_reminders:function(){return{type:h}}})(v);n(103);var _=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(N,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},g=n(41),k=n(16),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=[];switch(e=Object(k.read_cookie)("reminder"),t.type){case m:return n=[].concat(Object(g.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),Object(k.bake_cookie)("reminder",n),n;case u:return n=e.filter((function(e){return e.id!==t.id})),Object(k.bake_cookie)("reminder",n),n;case h:return n=[],Object(k.bake_cookie)("reminder",n),n;default:return e}},D=n(43),E=Object(D.a)(C);s.a.render(Object(f.jsx)(l.a,{store:E,children:Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(_,{})})}),document.getElementById("root")),y()},51:function(e,t,n){},57:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.9bebec8e.chunk.js.map