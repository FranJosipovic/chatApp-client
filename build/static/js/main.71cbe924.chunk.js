(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(68),i=n.n(s),o=(n(78),n(3)),r=n(4),l=n(25),d=(n(79),n(10)),j=n.n(d),u=n(38),h=n.n(u),b=n(0),p=function(){var e=Object(r.f)(),t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],s=n[1],i=Object(c.useContext)(C),l=(i.state,i.dispatch1),d=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(o.a)(i,2),l=r[0],d=r[1],u=Object(c.useState)(""),p=Object(o.a)(u,2),m=p[0],f=p[1],O=Object(c.useState)(""),g=Object(o.a)(O,2),x=g[0],v=g[1];return Object(b.jsxs)("div",{style:{backgroundColor:"white",marginTop:"20%",marginLeft:"20%",maxWidth:"500px",height:"500px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(b.jsx)("h2",{style:{textAlign:"center"},children:"Sign Up"}),Object(b.jsx)("input",{style:{marginTop:"15%",marginLeft:"20%",width:"300px"},type:"text",placeholder:"name",value:n,onChange:function(e){a(e.target.value)}}),Object(b.jsx)("input",{style:{marginLeft:"20%",width:"300px"},type:"text",placeholder:"email",value:l,onChange:function(e){d(e.target.value)}}),Object(b.jsx)("input",{style:{marginLeft:"20%",width:"300px"},type:"password",placeholder:"password",value:m,onChange:function(e){f(e.target.value)}}),Object(b.jsx)("input",{style:{marginBottom:"20%",marginLeft:"20%",width:"300px"},type:"password",placeholder:"confirm password",value:x,onChange:function(e){v(e.target.value)}}),Object(b.jsx)("button",{style:{marginBottom:"10%",width:"200px",marginLeft:"30%"},onClick:function(){!1!==h.a.isEmail(l)?m===x?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:l,password:m})}).then((function(e){return e.json()})).then((function(e){e.error?j.a.toast({html:e.error,classes:"red"}):(j.a.toast({html:e.message,classes:"green"}),s(!1))})).catch((function(e){console.log(e)})):j.a.toast({html:"passwords do not match",classes:"red"}):j.a.toast({html:"invalid email",classes:"red"})},children:"Sign Up"})]})},u=function(){var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(""),d=Object(o.a)(r,2),u=d[0],p=d[1];return Object(b.jsxs)("div",{style:{backgroundColor:"white",marginTop:"20%",marginLeft:"20%",maxWidth:"500px",height:"500px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(b.jsx)("h2",{style:{textAlign:"center"},children:"Sign in"}),Object(b.jsx)("input",{style:{marginTop:"15%",marginLeft:"20%",width:"300px"},type:"text",placeholder:"email",value:a,onChange:function(e){i(e.target.value)}}),Object(b.jsx)("input",{style:{marginBottom:"20%",marginLeft:"20%",width:"300px"},type:"password",placeholder:"password",value:u,onChange:function(e){p(e.target.value)}}),Object(b.jsx)("button",{style:{marginBottom:"10%",width:"200px",marginLeft:"30%"},onClick:function(){!1!==h.a.isEmail(a)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:u})}).then((function(e){return e.json()})).then((function(t){t.error?j.a.toast({html:t.error,classes:"red"}):t&&(localStorage.setItem("jwt",t.token),localStorage.setItem("user",JSON.stringify(t.user)),l({type:"USER",payload:t.user}),e.push("/mainpage"),j.a.toast({html:"successfully signed in",classes:"green"}))})):j.a.toast({html:"invalid email",classes:"red"})},children:"Sign In"}),Object(b.jsxs)("p",{style:{textAlign:"center"},children:["Don't have an account ",Object(b.jsx)("span",{style:{cursor:"pointer",color:"blue"},onClick:function(){s(!0)},children:"Sign Up"})]})]})};return Object(b.jsxs)("div",{style:{display:"flex",height:"100%"},children:[Object(b.jsx)("div",{style:{backgroundColor:"red",width:"100%",height:"837px"},children:Object(b.jsxs)("div",{style:{marginLeft:"40%",marginTop:"40%",display:"flex",flexDirection:"column"},children:[Object(b.jsx)("button",{style:{width:"150px",height:"100px",marginBottom:"8px"},onClick:function(){s(!0)},children:"Sign Up"}),Object(b.jsx)("button",{style:{width:"150px",height:"100px"},onClick:function(){s(!1)},children:"Sign In"})]})}),Object(b.jsx)("div",{style:{backgroundColor:"black",width:"100%"},children:a?Object(b.jsx)(d,{}):Object(b.jsx)(u,{})})]})},m=(n(163),n(73)),f=function(e){var t=e.text,n=e.own,c=e.time;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"messageWrapper",children:[Object(b.jsxs)("div",{className:n?"iconTextOwn":"iconText",children:[Object(b.jsx)("img",{className:n?"messageIconOwn":"messageIcon",src:"https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/1:1/w_741,h_741,c_limit/best-face-oil.png",alt:"icon"}),Object(b.jsx)("span",{className:n?"messageTextOwn":"messageText",children:t})]}),Object(b.jsx)("div",{className:n?"dateOwn":"date",children:Object(b.jsx)("span",{className:"sentDate",children:Object(m.a)(c)})})]})})},O=(n(164),function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),r=i[0],l=i[1],d=Object(c.useState)(!1),j=Object(o.a)(d,2),u=(j[0],j[1],Object(c.useContext)(C)),h=u.state,p=(u.dispatch1,Object(c.useContext)(C)),m=p.convId,O=(p.dispatch2,Object(c.useRef)(null));Object(c.useEffect)((function(){!function(){var e;null===(e=O.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[r]);Object(c.useEffect)((function(){m&&fetch("/message/".concat(m._id),{headers:{authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){l(e.message)})).catch((function(e){console.log(e)}))}),[m,r]);var g=(new Date).toLocaleDateString();return Object(b.jsx)(b.Fragment,{children:m?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"topBar",children:[Object(b.jsxs)("div",{className:"topBarWrap",children:[Object(b.jsx)("img",{src:m&&m.profilePic,alt:"img",className:"chatWithImg"}),Object(b.jsx)("span",{className:"chatWithName",children:m&&m.currentUser})]}),Object(b.jsx)("div",{className:"date",children:g})]}),Object(b.jsx)("div",{className:"messageSection",children:r&&r.map((function(e){return Object(b.jsx)("div",{ref:O,children:Object(b.jsx)(f,{text:e.text,own:e.sender!==h._id,time:e.createdAt})},e._id)}))}),Object(b.jsx)("div",{className:"inuptSection",children:Object(b.jsxs)("div",{className:"inputSectionWrapper",children:[Object(b.jsx)("textarea",{className:"pHolder",placeholder:"write a message...",value:n,onChange:function(e){a(e.target.value)}}),Object(b.jsx)("button",{className:"button",onClick:function(){fetch("/createMessage",{method:"post",headers:{"Content-Type":"application/json",authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({conversationId:m._id,text:n,senderId:h._id})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),a("")},children:"Send Message"})]})})]}):Object(b.jsx)("div",{style:{textAlign:"center"},children:Object(b.jsx)("h5",{style:{color:"grey",fontWeight:"800",fontSize:"100px"},children:"OPEN CONVERSATION TO START CHATTING"})})})}),g=n(19),x=n(71),v=(n(165),n(72)),y=function(e){Object(x.a)(e);var t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)([]),l=Object(o.a)(i,2),d=l[0],u=l[1],h=Object(c.useState)([]),p=Object(o.a)(h,2),m=p[0],f=p[1],O=Object(c.useState)([]),y=Object(o.a)(O,2),N=y[0],S=y[1],w=Object(c.useState)(""),I=Object(o.a)(w,2),T=I[0],k=I[1],E=Object(c.useState)(""),_=Object(o.a)(E,2),B=_[0],L=_[1],R=Object(c.useState)(!1),D=Object(o.a)(R,2),P=(D[0],D[1],Object(c.useContext)(C)),A=P.state,U=P.dispatch1,J=Object(c.useContext)(C),W=(J.convId,J.dispatch2),F=Object(r.f)(),z=Object(c.useRef)(null),M=Object(c.useRef)(null),V=Object(c.useRef)();Object(c.useEffect)((function(){V.current=Object(v.io)("ws://localhost:8900")}),[]),Object(c.useEffect)((function(){A&&V.current.emit("addUser",A._id),V.current.on("getUsers",(function(e){S(e)}))}),[A]),Object(c.useEffect)((function(){j.a.Modal.init(z.current),j.a.Modal.init(M.current),fetch("/myconversations",{headers:{authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){f(e.conversation)})).catch((function(e){console.log(e)}))}),[]),Object(c.useEffect)((function(){B&&fetch("/updateprofilepic",{method:"put",headers:{"Content-type":"application/json",authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({newPic:B})}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("user",JSON.stringify(Object(g.a)(Object(g.a)({},A),{},{pic:e.pic}))),U({type:"UPDATEPIC",payload:e.pic})})).catch((function(e){console.log(e)}))}),[B]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"search",children:[Object(b.jsxs)("div",{style:{display:"flex",alignContent:"baseline"},children:[A&&Object(b.jsx)("img",{src:A.pic,alt:"img",className:"chatWithImg modal-trigger","data-target":"modal2"}),Object(b.jsx)("h6",{style:{fontSize:"24px",marginLeft:"12px"},children:A&&A.name})]}),Object(b.jsx)("div",{children:Object(b.jsx)("i",{className:"material-icons modal-trigger","data-target":"modal1",children:"search"})})]}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(b.jsx)("div",{children:m&&m.map((function(e){var t=e.members.find((function(e){return e.name!==A.name}));console.log(t);var n=[];N.map((function(e){n.push(e.userId)}));var c=n.includes(t._id);return Object(b.jsxs)("div",{className:"conversationRoom",onClick:function(){W({type:"CONVERSATION",payload:{_id:e._id,currentUser:t.name,profilePic:t.pic}})},children:[Object(b.jsx)("img",{src:t.pic,alt:"img",className:"chatWithImg"}),Object(b.jsx)("span",{className:"convName",children:t?t.name:"loading..."}),Object(b.jsx)("div",{className:c?"online":"offline"})]},e._id)}))}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{style:{width:"100%",padding:"10px",backgroundColor:"red",color:"white",border:"none",borderRadius:"10px",cursor:"pointer",marginBottom:"0"},onClick:function(){localStorage.clear(),F.push("/")},children:"Log out"})})]}),Object(b.jsxs)("div",{id:"modal1",className:"modal",ref:z,style:{color:"black"},children:[Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)("input",{type:"text",placeholder:"search",value:a,onChange:function(e){return t=e.target.value,s(t),void fetch("/search-user",{method:"post",headers:{"Content-Type":"application/json",authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){u(e.user)}));var t}}),Object(b.jsx)("ul",{className:"collection",style:{display:"flex",color:"black",flexDirection:"column"},children:d.map((function(e){return""===a?null:Object(b.jsxs)("div",{className:"searchDiv",children:[Object(b.jsx)("li",{className:"collection-item",children:e.name},e._id),Object(b.jsx)("button",{style:{backgroundColor:"blue",color:"white",borderRadius:"10px",border:"0"},onClick:function(){var t;t=e._id,fetch("/create-conv",{method:"post",headers:{"Content-Type":"application/json",authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({memberId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},children:"Create conversation"})]})}))})]}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{href:"#!",className:"modal-close waves-effect waves-green btn-flat",onClick:function(){s("")},children:"Close"})})]}),Object(b.jsxs)("div",{id:"modal2",className:"modal",ref:M,style:{color:"black"},children:[Object(b.jsx)("div",{className:"modal-content",children:Object(b.jsxs)("div",{className:"file-field input-field",children:[Object(b.jsxs)("div",{className:"btn #42a5f5 blue lighten-1",children:[Object(b.jsx)("span",{children:"update profile pic"}),Object(b.jsx)("input",{type:"file",onChange:function(e){k(e.target.files[0])}})]}),Object(b.jsx)("div",{className:"file-path-wrapper",children:Object(b.jsx)("input",{className:"file-path validate",type:"text"})}),Object(b.jsx)("button",{className:"btn waves-effect waves-light #42a5f5 blue lighten-1 modal-close",style:{float:"right"},onClick:function(){!function(){var e=new FormData;e.append("file",T),e.append("upload_preset","chatApp"),e.append("cloud_name","fran123"),fetch("https://api.cloudinary.com/v1_1/fran123/image/upload",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){console.log(e.url),L(e.url)})).catch((function(e){return console.log(e)}))}()},children:"update pic"})]})}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsx)("button",{href:"#!",className:"modal-close waves-effect waves-green btn-flat",onClick:function(){s("")},children:"Close"})})]})]})},N=(n(196),function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"mainPage",children:[Object(b.jsx)("div",{className:"converstions",children:Object(b.jsx)(y,{})}),Object(b.jsx)("div",{className:"chatBox",children:Object(b.jsx)(O,{})})]})})}),S=function(e,t){return"USER"===t.type?t.payload:"UPDATEPIC"===t.type?Object(g.a)(Object(g.a)({},e),{},{pic:t.payload}):e},w=function(e,t){return"CONVERSATION"===t.type?t.payload:e},C=Object(c.createContext)(),I=function(){var e=Object(r.f)(),t=Object(c.useContext)(C),n=(t.state,t.dispatch1);return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?(n({type:"USER",payload:t}),e.push("/mainpage")):e.location.pathname.startsWith("/reset")||e.push("/")}),[]),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)(p,{})}),Object(b.jsx)(r.a,{path:"/mainPage",children:Object(b.jsx)(N,{})}),Object(b.jsx)(r.a,{path:"/mainpage/:convId",children:Object(b.jsx)(N,{})})]})};var T=function(){var e=Object(c.useReducer)(S,null),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useReducer)(w,null),i=Object(o.a)(s,2),r=i[0],d=i[1];return Object(b.jsx)(C.Provider,{value:{convId:r,state:n,dispatch1:a,dispatch2:d},children:Object(b.jsx)(l.a,{children:Object(b.jsx)(I,{})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,198)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),k()},78:function(e,t,n){},79:function(e,t,n){}},[[197,1,2]]]);
//# sourceMappingURL=main.71cbe924.chunk.js.map