(this["webpackJsonpeditor-frontend"]=this["webpackJsonpeditor-frontend"]||[]).push([[0],{240:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var s,a,r=n(3),c=n.n(r),o=n(56),i=n.n(o),l=n(2),u=n.n(l),d=n(4),m=n(57),h=n(58),p=n(104),f=n(105),j=n(30),v=n(29),b=n(18),g=n(107),x=n.n(g),C=(n(220),n(0)),y=function(e){return e.token?null:Object(C.jsxs)("div",{className:"LandingPage",children:[Object(C.jsx)("div",{className:"landingPageMessage",children:e.landingPageMessage}),Object(C.jsxs)("form",{children:[Object(C.jsx)("label",{children:"Email"}),Object(C.jsx)("input",{className:"email",type:"email",defaultValue:"joki20@student.bth.se"}),Object(C.jsx)("label",{children:"Password"}),Object(C.jsx)("input",{className:"password",defaultValue:"abc123"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("input",{type:"submit",className:"login",value:"Login",onClick:e.handleLogin}),Object(C.jsx)("input",{type:"submit",className:"register",value:"Register",onClick:e.handleRegister})]})]})]})},w=function(e){return Object(C.jsxs)("div",{className:"Toolbar",children:[Object(C.jsxs)("div",{className:"user",children:[Object(C.jsxs)("div",{children:[e.currentUser," is logged in"]}),Object(C.jsx)("button",{onClick:e.logout,children:"Log out"})]}),Object(C.jsx)("div",{className:"clickedStatus",children:e.messageStatus})]})},O=function(e){return Object(C.jsx)("button",{className:"SaveBtn hidden",onClick:e.saveContent,children:"SAVE DOC"})},S=function(e){return Object(C.jsxs)("div",{className:"ListDocs",children:[Object(C.jsx)("h2",{children:"Documents"}),Object(C.jsx)("ul",{children:e.listDocs.map((function(t){return Object(C.jsx)("li",{onClick:e.clickTitle,name:t.id,children:t.title},t.id)}))})]})},E=function(e){var t=0;return Object(C.jsxs)("div",{className:"ListUsers",children:[Object(C.jsx)("h2",{children:"Allowed users"}),Object(C.jsx)("ul",{children:e.allowedUsers.map((function(e){return Object(C.jsx)("li",{children:e},++t)}))})]})},k=function(e){var t=0;return Object(C.jsxs)("div",{className:"AddUsers",children:[Object(C.jsx)("h2",{children:"Add user"}),Object(C.jsx)("ul",{children:e.unallowedUsers.map((function(n){return Object(C.jsx)("li",{onClick:e.allowUser,children:n},++t)}))})]})},N=function(e){return Object(C.jsxs)("div",{className:"InviteUsers",children:[Object(C.jsx)("h2",{children:"Invite user"}),Object(C.jsx)("input",{className:"inputInvitation hidden"}),Object(C.jsx)("button",{className:"InviteBtn hidden",onClick:e.sendMail,children:"\u2709\ufe0f"})]})},B=function(e){return Object(C.jsx)("div",{className:"Title",children:Object(C.jsx)("input",{className:"titleInput","aria-label":"inputLable",value:e.currentTitle})})},U=n(6),L=n.n(U),D=(n(240),n(241),n(108)),I=n.n(D),q=function(e){return Object(C.jsx)("button",{className:"PdfBtn",onClick:e.savePDF,children:"Create PDF"})},T=n(109),P=n.n(T),M=function(e){return Object(C.jsxs)("div",{className:"Comments",children:[Object(C.jsx)("h2",{children:"Comments"}),Object(C.jsx)("textarea",{className:"hidden"}),Object(C.jsx)("button",{className:"CommentsBtn hidden",onClick:e.saveComment,children:"Save comment"})]})},A=(n(269),n(270),n(271),n(110)),_=function(e){return Object(C.jsx)("button",{className:"SwitchEditorBtn",onClick:e.switchEditor,children:"Switch editor"})},F=function(e){return Object(C.jsx)("button",{className:"ExecuteCodeBtn hidden",onClick:e.executeCode,children:"Execute code"})},R="https://jsramverk-editor-joki20.azurewebsites.net",V=I()(R);window.addEventListener("keydown",(function(e){if(13===e.keyCode&&!document.getElementsByClassName("Comments")[0].classList.contains("hidden")){s=Object(b.a)(document.getElementsByClassName("ql-editor")[0].children);var t,n=Object(v.a)(s.entries());try{for(n.s();!(t=n.n()).done;){var a=Object(j.a)(t.value,2),r=a[0],c=a[1];console.log(r),c.removeAttribute("style")}}catch(o){n.e(o)}finally{n.f()}document.querySelector(".Comments > textarea").classList.add("hidden"),document.querySelector(".Comments > button").classList.add("hidden")}})),window.addEventListener("click",(function(e){var t=e.target.parentElement;if(t.classList.contains("ql-editor")&&"p"===e.target.localName){a=Object(b.a)(e.target.parentElement.children).indexOf(e.target),s=Object(b.a)(e.target.parentElement.children),document.querySelector(".Comments > textarea").classList.remove("hidden"),document.querySelector(".Comments > button").classList.remove("hidden");var n,r=Object(v.a)(s.entries());try{for(r.s();!(n=r.n()).done;){var c=Object(j.a)(n.value,2),o=c[0],i=c[1];console.log(o),i.removeAttribute("style")}}catch(f){r.e(f)}finally{r.f()}e.target.setAttribute("style","background-color:lightyellow");var l=s[a].getAttribute("title");document.querySelector(".Comments > textarea").value=l}else if(!t.classList.contains("Comments")){document.querySelector(".Comments > textarea").classList.add("hidden"),document.querySelector(".Comments > button").classList.add("hidden"),s=Object(b.a)(document.getElementsByClassName("ql-editor")[0].children);var u,d=Object(v.a)(s.entries());try{for(d.s();!(u=d.n()).done;){var m=Object(j.a)(u.value,2),h=m[0],p=m[1];console.log(h),p.removeAttribute("style")}}catch(f){d.e(f)}finally{d.f()}}}));var H=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(m.a)(this,n),(r=t.call(this,e)).getDocs=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],t=[],n=[],e.next=5,L()({url:"".concat(R,"/graphql/"),method:"post",data:{query:"\n                {\n                    users {\n                        email\n                        docs {\n                            id\n                            title\n                            content\n                            type\n                            allowed_users {\n                                email\n                            }\n                        }\n                    }\n                }\n                "}}).then((function(e){e.data.data.users.forEach((function(e){t.push(e.email),e.docs.forEach((function(e){e.allowed_users.forEach((function(t){t.email===r.state.currentUser&&n.push(e)}))}))}))}));case 5:return e.next=7,r.setState({allowedDocs:n});case 7:return e.next=9,r.setState({allUsers:t});case 9:case"end":return e.stop()}}),e)}))),r.postDatabase=function(e){var t;"document"===r.state.type&&(t=r.state.currentContent),"code"===r.state.type&&(t=r.state.currentCode),L.a.post("".concat(R,"/create"),{email:r.state.currentUser,title:e,content:t,type:r.state.type}),r.getDocs()},r.updateDatabase=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({messageStatus:"Title content updated"}),e.next=3,L.a.post("".concat(R,"/update/"),{docOwner:r.state.clickedDocOwner,docId:r.state.clickedDocId,content:t,type:r.state.type}).then((function(e){console.log(e.status)})).catch((function(e){return console.warn(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.getCurrentInput=function(e){r.setState({currentContent:e});var t=document.getElementsByClassName("titleInput")[0].value,n=null;if(r.state.allowedDocs.forEach((function(e){e.title===t&&(n=e.id)})),r.state.allowedUsers.includes(r.state.currentUser)){var s={_id:n,html:r.state.currentContent};V.emit("create",s),V.on("doc",(function(e){r.setState({currentContent:e.html})}))}},r.clickTitle=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,c,o,i,l,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.innerHTML,a=[],c=[],o=document.getElementsByClassName("Quill")[0],i=document.getElementsByClassName("ExecuteCodeBtn")[0],l=document.getElementsByClassName("PdfBtn")[0],d=document.getElementsByClassName("react-codemirror2")[0],r.setState({currentTitle:n}),e.next=10,r.state.allowedDocs.forEach((function(e){if(document.getElementsByClassName("titleInput")[0].value=e.title,e.title===n){if(e.allowed_users.forEach((function(e){a.push(e.email)})),r.setState({type:e.type}),r.setState({allowedUsers:a}),r.setState({clickedDocId:e.id}),r.setState({clickedDocOwner:e.allowed_users[0].email}),"document"===e.type)o.classList.remove("hideEditor"),d.classList.add("hideEditor"),i.classList.add("hidden"),l.classList.remove("hidden"),document.getElementsByClassName("ql-editor")[0].innerHTML="",(new DOMParser).parseFromString(e.content,"text/html").body.children.forEach((function(e){var t=e.cloneNode(!0);document.getElementsByClassName("ql-editor")[0].appendChild(t)})),"BR"===document.querySelector(".ql-editor").firstChild.firstChild.nodeName&&document.querySelector(".ql-editor").firstChild.remove();"code"===e.type&&(o.classList.add("hideEditor"),d.classList.remove("hideEditor"),i.classList.remove("hidden"),l.classList.add("hidden"),document.querySelector(".CodeMirror").CodeMirror.setValue(e.content))}}));case 10:return s,e.next=13,r.state.allUsers.forEach((function(e){r.state.allowedUsers.includes(e)||c.push(e)}));case 13:r.setState({unallowedUsers:c}),document.getElementsByClassName("inputInvitation")[0].classList.remove("hidden"),document.getElementsByClassName("InviteBtn")[0].classList.remove("hidden"),document.getElementsByClassName("SaveBtn")[0].classList.remove("hidden");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.save=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="no",""!==r.state.token){e.next=3;break}return e.abrupt("return",r.setState({messageStatus:"You must be logged in"}));case 3:if(n=document.getElementsByClassName("titleInput")[0].value,null,n){e.next=7;break}return e.abrupt("return",r.setState({messageStatus:"You must provide a title"}));case 7:if(r.state.allowedDocs.forEach((function(e){e.title===n&&(r.setState({clickedDocId:e.id}),r.setState({clickedDocOwner:e.allowed_users[0].name}),t="yes",e.id,r.updateDatabase(r.state.currentContent))})),"no"!==t){e.next=12;break}return r.setState({messageStatus:"New entry created"}),e.next=12,r.postDatabase(n);case 12:case"end":return e.stop()}}),e)}))),r.register=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=document.getElementsByClassName("email")[0].value,s=document.getElementsByClassName("password")[0].value,e.next=5,L.a.post("".concat(R,"/register"),{email:n,password:s});case 5:return document.getElementsByClassName("email")[0].value="",document.getElementsByClassName("password")[0].value="",e.abrupt("return",r.setState({landingPageMessage:"".concat(n," was registered")}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.login=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=document.getElementsByClassName("email")[0].value,s=document.getElementsByClassName("password")[0].value,a="no",r.setState({currentUser:n}),n&&s){e.next=7;break}return e.abrupt("return",r.setState({messageStatus:"Email or password missing"}));case 7:return e.next=9,L.a.get("".concat(R,"/users")).then((function(e){e.data.data[0].Users.forEach((function(e){e.email===n&&(a="yes")}))}));case 9:if("no"===a&&r.setState({messageStatus:"Sorry, but email doesn't exist"}),"yes"!==a){e.next=13;break}return e.next=13,L.a.post("".concat(R,"/login"),{email:n,password:s}).then((function(e){e.data.data&&r.setState({token:e.data.data})})).catch((function(e){return console.warn(e)}));case 13:r.getDocs(),r.setState({messageStatus:""});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.logout=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setState({currentUser:""}),r.setState({token:""}),r.setState({allowedDocs:[]}),r.setState({allowedUsers:[]}),r.setState({unallowedPersons:[]}),r.setState({currentTitle:""}),r.setState({currentContent:""}),document.getElementsByClassName("titleInput")[0].value="";case 8:case"end":return e.stop()}}),e)}))),r.allowUser=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,s,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.innerHTML,e.next=4,L.a.post("".concat(R,"/allow_user"),{email:n,currentUser:r.state.currentUser,docId:r.state.clickedDocId});case 4:return(s=r.state.allowedUsers).push(n),r.setState({allowedUsers:s}),a=r.state.unallowedUsers.indexOf(n),(c=r.state.unallowedUsers).splice(a,1),r.setState({unallowedUsers:c}),e.abrupt("return",r.setState({messageStatus:"".concat(n," is now allowed to edit this document")}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.savePDF=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="<h1>".concat(r.state.currentTitle,"</h1>").concat(r.state.currentContent),n={margin:1,filename:"myfile.pdf",html2canvas:{scale:1},jsPDF:{unit:"in",format:"A4",orientation:"portrait"}},P()(t,n);case 3:case"end":return e.stop()}}),e)}))),r.sendMail=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.getElementsByClassName("inputInvitation")[0].value,e.next=3,L.a.post("".concat(R,"/sendmail"),{email:n,currentUser:r.state.currentUser,docId:r.state.clickedDocId,title:r.state.currentTitle});case 3:return r.setState({messageStatus:"Invitation email was sent"}),e.next=6,L.a.post("".concat(R,"/allow_user"),{email:n,currentUser:r.state.currentUser,docId:r.state.clickedDocId});case 6:(s=r.state.allowedUsers).push(n),r.setState({allowedUsers:s}),document.getElementsByClassName("inputInvitation")[0].value="";case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.switchEditor=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.getElementsByClassName("Quill")[0],s=document.getElementsByClassName("react-codemirror2")[0],document.getElementsByClassName("ExecuteCodeBtn")[0],a=document.getElementsByClassName("PdfBtn")[0],n.classList.toggle("hideEditor"),s.classList.toggle("hideEditor"),"document"===r.state.type&&(r.setState({type:"code"}),document.getElementsByClassName("ExecuteCodeBtn")[0].classList.remove("hidden"),a.classList.add("hidden")),"code"===r.state.type&&(r.setState({type:"document"}),document.getElementsByClassName("ExecuteCodeBtn")[0].classList.add("visible"),a.classList.remove("hidden"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.executeCode=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("code"!==r.state.type){e.next=8;break}return document.getElementsByClassName("Quill")[0],n=document.querySelectorAll("span[role='presentation']"),"",n.forEach((function(e){e.textContent})),s=btoa(String(r.state.currentCode)),e.next=8,L.a.post("https://execjs.emilfolino.se/code",{code:s}).then((function(e){r.setState({messageStatus:e.data.data})}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.saveComment=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,c,o,i,l,d,m,h,p,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.querySelector(".Comments > textarea"),(c=document.createElement("div")).innerHTML=r.state.currentContent,(o=c.children)[a].setAttribute("title",n.value),document.getElementsByClassName("ql-editor")[0].textContent="",i=[].slice.call(o),l="",i.forEach((function(e){e.removeAttribute("style"),l+=e.outerHTML,document.getElementsByClassName("ql-editor")[0].appendChild(e)})),r.updateDatabase(l),r.setState({messageStatus:"Comment added to row"}),document.querySelector(".Comments > textarea").classList.add("hidden"),document.querySelector(".Comments > button").classList.add("hidden"),s=Object(b.a)(document.getElementsByClassName("ql-editor")[0].children),d=Object(v.a)(s.entries());try{for(d.s();!(m=d.n()).done;)h=Object(j.a)(m.value,2),p=h[0],f=h[1],console.log(p),f.removeAttribute("style")}catch(t){d.e(t)}finally{d.f()}case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={landingPageMessage:"",allUsers:[],allowedDocs:[],allowedUsers:[],unallowedUsers:[],currentTitle:"",currentContent:"",messageStatus:"",token:"",currentUser:"",clickedDocId:"",clickedDocOwner:"",currentCode:"",type:"document",rowIndex:a,rowText:undefined,htmlRowsArray:[],commentsArray:[]},r}return Object(h.a)(n,[{key:"socketUpdateContent",value:function(e){this.setState({currentContent:e})}},{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(y,{handleRegister:this.register,handleLogin:this.login,token:this.state.token,landingPageMessage:this.state.landingPageMessage}),Object(C.jsx)(w,{messageStatus:this.state.messageStatus,currentUser:this.state.currentUser,logout:this.logout}),Object(C.jsx)(B,{currentTitle:this.state.currentTitle}),Object(C.jsx)(S,{listDocs:this.state.allowedDocs,clickTitle:this.clickTitle}),Object(C.jsx)(M,{saveComment:this.saveComment}),Object(C.jsx)(E,{allowedUsers:this.state.allowedUsers}),Object(C.jsx)(k,{allUsers:this.state.allUsers,unallowedUsers:this.state.unallowedUsers,allowUser:this.allowUser}),Object(C.jsx)(N,{sendMail:this.sendMail}),Object(C.jsx)(x.a,{className:"Quill",theme:"snow",value:this.state.currentContent,onChange:this.getCurrentInput}),Object(C.jsx)(A.Controlled,{className:"hideEditor",value:this.state.value,options:{readOnly:!1,lineWrapping:!0,lineNumbers:!0,lint:!0,cursorBlinkRate:1e3,tabindex:3,indentWithTabs:!0,mode:"javascript",theme:"material"},onBeforeChange:function(t,n,s){e.setState({currentCode:t.getValue()}),e.setState({value:s})},onChange:function(t,n,s){e.setState({currentCode:t.getValue()}),console.log(e.state.currentCode)}}),Object(C.jsx)(_,{switchEditor:this.switchEditor}),Object(C.jsx)(F,{executeCode:this.executeCode}),Object(C.jsx)(q,{savePDF:this.savePDF}),Object(C.jsx)(O,{saveContent:this.save})]})}}]),n}(c.a.Component),Q=H;n(272);i.a.render(Object(C.jsx)(Q,{}),document.getElementById("root"))}},[[273,1,2]]]);
//# sourceMappingURL=main.bd55133d.chunk.js.map