(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{100:function(e,t,a){e.exports={user:"User_user__1Olbp",link:"User_link__7K8GX",active:"User_active__1U0eM"}},101:function(e,t,a){e.exports={Dialog:"Dialog_Dialog__emF7X",form:"Dialog_form__1i_Mq",button:"Dialog_button__203a6"}},103:function(e,t,a){e.exports={Message:"Message_Message__k_ZHH",author:"Message_author__1J-mb",text:"Message_text__fDGum"}},104:function(e,t,a){e.exports={status:"Status_status__1fG8W",input:"Status_input__2zYuJ"}},105:function(e,t,a){e.exports={Input:"Input_Input__dtkUK",error:"Input_error__1B2WB",span:"Input_span__1q-CF"}},124:function(e,t,a){e.exports={Messages:"Messages_Messages__12Qme",users:"Messages_users__2f5iZ"}},129:function(e,t,a){e.exports=a.p+"static/media/Misha.7547549a.jpg"},130:function(e,t,a){e.exports=a.p+"static/media/Anya.9c5e0711.jpg"},131:function(e,t,a){e.exports=a.p+"static/media/Zeka.a704a6ae.jpg"},132:function(e,t,a){e.exports={preloader_wrapper:"LoginContainer_preloader_wrapper__1ui1K",errorMessage:"LoginContainer_errorMessage__10XCm"}},173:function(e,t,a){e.exports={Profile:"Profile_Profile__3nFHM",header:"Profile_header__2xuKN"}},177:function(e,t,a){e.exports=a.p+"static/media/user.0f16ef6a.png"},178:function(e,t,a){e.exports={Preloader:"Preloader_Preloader__1CrUy"}},179:function(e,t,a){e.exports=a.p+"static/media/preloader.b1df8c1d.svg"},180:function(e,t,a){e.exports={Container:"ProfileContainer_Container__fxG_f"}},181:function(e,t,a){e.exports={Greeting:"Greeting_Greeting__1ET-m",title:"Greeting_title__3vWkW"}},182:function(e,t,a){e.exports=a.p+"static/media/Greetings.d301fdc8.gif"},183:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},197:function(e,t,a){e.exports=a(341)},198:function(e,t,a){},203:function(e,t,a){},322:function(e,t,a){},341:function(e,t,a){"use strict";a.r(t);a(198);var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s,o=a(0),i=a.n(o),c=a(9),u=a.n(c),l=a(62),m=a(38),f=a(88),d=a(89),g=a(99),p=(a(203),a(33)),h=a(15),E=a(124),b=a.n(E),_=a(100),v=a.n(_),O=function(e){return i.a.createElement("div",{className:v.a.user},i.a.createElement(h.c,{to:"/Messages/"+e.id,className:v.a.link,activeClassName:v.a.active},e.name))},k=a(12),w=a(101),y=a.n(w),N=a(394),x=a(393),L=a(3),I=a(75),j=a.n(I),F=function(e){var t=e.input,a=e.meta,n=Object(L.a)(e,["input","meta"]);return i.a.createElement("div",{className:j.a.TextArea},i.a.createElement("textarea",Object.assign({},t,n,{className:j.a.textarea+(a.error&&a.touched?" "+j.a.error:"")})),a.error&&a.touched?i.a.createElement("div",{className:j.a.span},a.error):i.a.createElement(i.a.Fragment,null))},C=function(e){if(!e||""===e)return"Field is required"},P=(s=100,function(e){if(e&&e.length>s)return"Max length is "+s}),M=Object(x.a)({form:"messageForm"})((function(e){return i.a.createElement("form",{className:y.a.form,onSubmit:e.handleSubmit},i.a.createElement(N.a,{component:F,name:"message",validate:[C,P]}),i.a.createElement("button",{className:y.a.button},"Submit"))})),S=function(e){return i.a.createElement("div",{className:y.a.Dialog},e.renderedMessages,i.a.createElement(M,{onSubmit:e.addMsg}))},T=[{userId:1,dialog:[{text:"Hi",author:"Me"},{text:"How are you?",author:"Misha"},{text:"I`m gonna hang out",author:"Me"}]},{userId:2,dialog:[{text:"Hi, Ann",author:"Me"},{text:"How are you?",author:"Ann"},{text:"I`m fine",author:"Me"}]},{userId:3,dialog:[{text:"Hi, Zeka",author:"Me"},{text:"Let`s play CS:GO",author:"Zeka"},{text:"I`m fine",author:"Me"}]},{userId:4,dialog:[{text:"Hi",author:"Me"},{text:"How are you?",author:"Azat"},{text:"I`m gonna hang out",author:"Me"}]}],U=a(129),A=a.n(U),R=a(130),G=a.n(R),H=a(131),D=a.n(H),W=a(92),q=a.n(W),z=a(46),Z=a.n(z),B=[{userId:1,p:[{text:"Hi, wassup?",likes:45},{text:"How are you?",likes:24}]},{userId:2,p:[{text:"Hi, i`m Ann",likes:75},{text:"I really love dogs",likes:97}]},{userId:3,p:[{text:"Hi, I`m Misha?",likes:24},{text:"Sport one love",likes:-32}]},{userId:4,p:[{text:"Hi, I`m Zeka?",likes:36},{text:"\u041e\u043c\u0441\u043a \u0442\u043e\u043f",likes:100000002}]}],K=function(e){for(var t=0;t<B.length;t++)if(B[t].userId===e)return B[t].p},X=function(e){for(var t=[Q,Y,$,V],a=0;a<t.length;a++)if(t[a].login===e)return t[a]},J=function(e){for(var t=[Q,Y,$,V],a=0;a<t.length;a++)if(t[a].id===e)return t[a]},Q={id:1,login:"Whatruska",date:"03.03.2002",city:"Omsk",phone:"+79136560423",vk:"vk.com/vitdub",avatar:q.a,header:Z.a,posts:K(1),status:"\u041f\u0438\u0448\u0435\u043c \u043a\u043e\u0434 \u0441\u043b\u0435\u0437\u0430\u043c\u0438"},Y={id:2,login:"Anya",date:"04.05.2001",city:"Omsk",phone:"+79146578354",vk:"vk.com/annya",avatar:G.a,header:Z.a,posts:K(2),followed:!1,status:"\u042d\u043a\u043e\u043d\u043e\u043c - \u0447\u0435\u043c\u043f\u0438\u043e\u043d"},V={id:4,login:"Zeka",date:"25.04.1996",city:"Omsk",phone:"+79146578354",vk:"vk.com/zeka",avatar:D.a,header:Z.a,posts:K(4),followed:!0,status:"I love Siberia"},$={id:3,login:"Misha",date:"28.31.2001",city:"Omsk",phone:"+79146578354",vk:"vk.com/Misha",avatar:A.a,header:Z.a,posts:K(3),followed:!1,status:"\u0421\u043f\u043e\u0440\u0442 - \u044d\u0442\u043e \u0436\u0438\u0437\u043d\u044c"},ee=[{name:"Misha",avatar:A.a},{name:"Anya",avatar:G.a},{name:"Zeka",avatar:D.a}],te=a(19),ae=a(18),ne=function(e){var t=Object(ae.a)({},e);t.users=Object(te.a)(e.users);for(var a=0;a<e.users.length;a++)t.users[a]=Object(ae.a)({},e.users[a]),t.users[a].id=e.users[a].id,t.users[a].name=e.users[a].name;t.messages=Object(te.a)(e.messages);for(var n=0;n<e.messages.length;n++)t.messages[n]=Object(ae.a)({},e.messages[n]),t.messages[n].dialog=Object(te.a)(e.messages[n].dialog),t.messages[n].userId=e.messages[n].userId;return t},re={users:[{id:1,name:"Misha"},{id:2,name:"Anya"},{id:3,name:"Evgenii"},{id:4,name:"Azat"}],messages:T,msg:""},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0,a=ne(e);switch(t.type){case"ADD-MSG":for(var n=0;n<a.messages.length;n++)if(a.messages[n].userId===t.id)return a.messages[n].dialog.push({text:t.text,author:"Me"}),a;break;default:return a}},oe=a(103),ie=a.n(oe),ce=function(e){return i.a.createElement("div",{className:ie.a.Message},i.a.createElement("div",{className:ie.a.author},e.author+" : "),i.a.createElement("div",{className:ie.a.text},e.text))},ue=function(e){return e.messagesPage.messages},le=function(e,t){for(var a=0;a<e.length;a++){var n=e[a];if(n.userId===t)return n.dialog}},me=Object(k.b)((function(e){return{messages:ue(e)}}),(function(e){return{add:function(t,a){e(function(e,t){return{type:"ADD-MSG",text:e,id:t}}(t,a))}}}),(function(e,t,a){return{id:a.id,messages:le(e.messages,a.id),add:t.add}}))((function(e){return o.createElement(S,{renderedMessages:e.messages.map((function(e){return o.createElement(ce,{author:e.author,text:e.text})})),addMsg:function(t){e.add(t.message,e.id)}})})),fe=me,de=function(e){var t=e.state,a=t.users.map((function(e){return i.a.createElement(O,{id:e.id,name:e.name})})),n=t.messages.map((function(e){return i.a.createElement(p.b,{path:"/Messages/"+e.userId,exact:!0,render:function(){return i.a.createElement(fe,{id:e.userId})}})}));return i.a.createElement("div",{className:b.a.Messages},i.a.createElement("div",{className:b.a.users},a),n)},ge=a(173),pe=a.n(ge),he=a(42),Ee=a.n(he),be=function(e){var t=e.userInfo;return i.a.createElement("div",{className:Ee.a.Info},i.a.createElement("img",{className:Ee.a.avatar,src:e.avatar,alt:"Ava"}),i.a.createElement("div",{className:Ee.a.data},i.a.createElement("span",{className:Ee.a.fio},t.login),i.a.createElement("span",{className:Ee.a.date},"Birth date : ",t.date),i.a.createElement("span",{className:Ee.a.city},"City : ",t.city),i.a.createElement("span",{className:Ee.a.contacts},i.a.createElement("span",{className:Ee.a.phone}," Tel : ",t.phone),i.a.createElement("span",{className:Ee.a.vk}," Vk : ",t.vk))))},_e=a(58),ve=a.n(_e),Oe=function(e){return i.a.createElement("div",{className:ve.a.posts},i.a.createElement("h2",null,"Posts"),i.a.createElement("div",{className:ve.a.list},e.renderedPosts))},ke=function(e){var t=Object(ae.a)({},e);t.myPostsCount++;for(var a=0;a<t.users.length;a++)t.users[a]=Object(ae.a)({},e.users[a]),t.users[a].id=e.users[a].id,t.users[a].login=e.users[a].login,t.users[a].date=e.users[a].date,t.users[a].city=e.users[a].city,t.users[a].phone=e.users[a].phone,t.users[a].vk=e.users[a].vk,t.users[a].avatar=e.users[a].avatar,t.users[a].header=e.users[a].header,t.users[a].posts=Object(te.a)(e.users[a].posts);return t},we={users:[Q,V,$,Y],myPostsCount:2},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,a=ke(e);switch(t.type){case"ADD-POST":return a.users[0].posts.push({text:t.post,likes:0}),a.myPostsCount++,a;default:return a}},Ne=a(76),xe=a.n(Ne),Le=function(e){return i.a.createElement("div",{className:xe.a.Post},i.a.createElement("img",{className:xe.a.avatar,src:e.ava,alt:"post author img"}),i.a.createElement("div",{className:xe.a.text},e.text),i.a.createElement("div",{className:xe.a.likes},i.a.createElement("b",null,"Likes : "),e.likes))},Ie=function(e){return function(t){return t&&t.length<e?"Min length is "+e:t?void 0:"Field is empty"}}(1),je=Object(x.a)({form:"postsForm"})((function(e){return i.a.createElement("form",{className:ve.a.form,onSubmit:e.handleSubmit},i.a.createElement(N.a,{component:F,name:"post",className:ve.a.textarea,validate:[Ie]}),i.a.createElement("button",{className:ve.a.button},"Submit"))})),Fe=Object(k.b)((function(e){return{arr:[]}}),(function(e){return{add:function(t){return e(function(e){return{type:"ADD-POST",post:e}}(t))}}}),(function(e,t,a){var n=a.login,r=X(n);return{login:n,add:t.add,posts:a.posts,avatar:r.avatar}}))((function(e){var t=function(){return e.posts.map((function(t){return i.a.createElement(Le,{text:t.text,likes:t.likes,ava:e.avatar})}))},a=function(t){e.add(t.post)};return"Whatruska"===e.login?i.a.createElement(i.a.Fragment,null,i.a.createElement(je,{onSubmit:a}),i.a.createElement(Oe,{renderedPosts:t(),addPost:a})):i.a.createElement(i.a.Fragment,null,i.a.createElement(Oe,{renderedPosts:t(),addPost:a}))})),Ce=Fe,Pe=a(35),Me=function(e){var t=Object(ae.a)({},e);return t.isFetching=e.isFetching,t.currentProfile=Object(ae.a)({},e.currentProfile),t},Se=a(176),Te=a.n(Se),Ue=Te.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"bba2ac1a-9c7c-4d15-b0e3-ba9dcc3dbeb7","Content-Type":"application/json"}}),Ae=Ue,Re={getProfileRequest:function(e){return Ae.get(function(e){return"profile/"+e}(e)).then((function(e){return e.data})).then((function(e){return{id:e.userId,login:e.fullName,date:"Idcr",city:"Omsk",phone:"+00000000000",vk:e.contacts.vk,avatar:null===e.photos.large?q.a:e.photos.large,header:Z.a}}))},getStatusRequest:function(e){return Ae.get(function(e){return"profile/status/"+e}(e)).then((function(e){return e.data}))}},Ge=Re,He={currentProfile:void 0,isFetching:!0,status:""},De=function(e){return{type:"SET_PROFILE",profile:e}},We=function(e,t){return function(a){if(t||a({type:"FETCH"}),null!=e.match(new RegExp("\\d+")))a(function(e){return function(t){Ge.getProfileRequest(e).then((function(e){t(De(e)),t({type:"FETCH"})}))}}(e));else{var n=X(e);a(De(n)),a({type:"FETCH"})}}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0,a=Me(e);switch(t.type){case"FETCH":a.isFetching=!a.isFetching;break;case"SET_PROFILE":a.currentProfile=t.profile;break;case"STATUS":a.status=t.status}return a},ze=a(104),Ze=a.n(ze),Be=i.a.createRef(),Ke=function(e){return e.editMode?1===e.id?i.a.createElement("input",{type:"text",className:Ze.a.input,ref:Be,onBlur:function(){e.updateStatus(Be.current.value),e.deactivateEdit()}}):i.a.createElement("div",{className:Ze.a.status},"Status : ",e.status):i.a.createElement("div",{onDoubleClick:e.activateEdit,className:Ze.a.status},"Status : ",e.status)},Xe=function(e){return e.profilePage.currentProfile},Je=function(e){return e.profilePage.isFetching},Qe=function(e){return e.profilePage.status},Ye=Object(k.b)((function(e){return{status:Qe(e)}}),(function(e){return{getStatus:function(t){e(function(e){return function(t){Ge.getStatusRequest(e).then((function(e){t(function(e){return{type:"STATUS",status:e}}(e))}))}}(t))}}}))((function(e){var t=Object(o.useState)(!1),a=Object(Pe.a)(t,2),n=a[0],r=a[1];Object(o.useEffect)((function(){e.getStatus(e.id)}),[]);var s=e.status;return e.id<5&&(s=J(e.id).status),i.a.createElement(Ke,{editMode:n,status:s,id:e.id,activateEdit:function(){r(!0)},deactivateEdit:function(){r(!1)},updateStatus:function(t){J(e.id).status=t}})})),Ve=function(e){var t=e.state,a=t.id,n={login:t.login,date:t.date,city:t.city,phone:t.phone,vk:t.vk};return i.a.createElement("div",{className:pe.a.Profile},i.a.createElement(be,{userInfo:n,avatar:t.avatar}),i.a.createElement(Ye,{id:a}),t.posts?i.a.createElement(Ce,{posts:t.posts,login:t.login}):i.a.createElement(i.a.Fragment,null))},$e=function(e){var t=Object(ae.a)({},e);t.users=Object(te.a)(e.users);for(var a=0;a<t.length;a++)t.users[a]=Object(ae.a)({},e.users[a]);return t},et=a(177),tt=a.n(et),at={getPageRequest:function(e,t){return Ae.get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"users?page="+e+"&count="+t}(e,t)).then((function(e){return e.data.items.map((function(e){return{id:e.id,login:e.name,followed:e.followed,avatar:null===e.photos.large?tt.a:e.photos.large,date:"00.00.0000",city:"NaN",phone:"NaN",vk:"NaN",header:Z.a,posts:[]}}))}))}},nt=function(e){return"follow/"+e},rt={getFollowRequest:function(e){return Ae.post(nt(e),{}).then((function(e){return e.data}))},getUnfollowRequest:function(e){return Ae.delete(nt(e)).then((function(e){return e.data}))}},st={users:[Y,$,V],pageSize:6,pageCount:1,isFetching:!1},ot=function(e,t){for(var a=0;a<t.length;a++)if(t[a].id===e)return t[a]},it=function(e){return{type:"SET_PAGE_COUNT",count:e}},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0,a=$e(e);switch(t.type){case"FOLLOW":var n=ot(t.id,a.users);n.followed=!0;break;case"UNFOLLOW":var r=ot(t.id,a.users);r.followed=!1;break;case"USERS":a.users=t.users;break;case"SET_PAGE_COUNT":a.pageCount=t.count;break;case"SET_PAGE_SIZE":break;case"TOGGLE_FETCH":a.isFetching=!a.isFetching;break;default:return a}return a},ut=a(41),lt=a.n(ut),mt=a(178),ft=a.n(mt),dt=a(179),gt=a.n(dt),pt=function(){return i.a.createElement("img",{src:gt.a,className:ft.a.Preloader,alt:"Preloader"})},ht=function(e){return i.a.createElement("div",{className:lt.a.UserList},e.isFetching?i.a.createElement(pt,null):i.a.createElement("div",{className:lt.a.wrapper},e.renderedUsers),i.a.createElement("div",{className:lt.a.btns_wrapper},i.a.createElement("button",{onClick:function(){e.refresh(e.dec)},className:lt.a.btn,disabled:e.isFetching},"<<<"),i.a.createElement("div",{className:lt.a.page_counter},"Page number : ",e.pageCount),i.a.createElement("button",{onClick:function(){e.refresh(e.inc)},className:lt.a.btn,disabled:e.isFetching},">>>")))},Et=a(47),bt=a.n(Et),_t=function(e){var t=e.user,a=t.followed?bt.a.unfollow:bt.a.follow,n=t.followed?"Unfollow":"Follow";return i.a.createElement("div",{className:bt.a.UserListItem},i.a.createElement("div",{className:bt.a.meta},i.a.createElement("img",{className:bt.a.avatar,src:t.avatar,alt:"Avatar"}),i.a.createElement("button",{type:"submit",className:bt.a.btn+" "+a,onClick:function(a){a.preventDefault(),t.followed?e.unfollow(t.id):e.follow(t.id)}},n)),i.a.createElement("div",{className:bt.a.info},i.a.createElement(h.c,{className:bt.a.login,to:"../User/"+t.id},t.login),i.a.createElement("h4",null,"City : ",t.city),i.a.createElement("h4",null,"Birthday : ",t.date)))},vt=function(e){return e.userList.users},Ot=function(e){return e.userList.pageSize},kt=function(e){return e.userList.pageCount},wt=function(e){return e.userList.isFetching},yt=Object(k.b)((function(e){return{isFetching:wt(e)}}),(function(e){return{follow:function(t){e(function(e){return function(t){t({type:"TOGGLE_FETCH"}),rt.getFollowRequest(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"FOLLOW",id:e}}(e)),t({type:"TOGGLE_FETCH"})}))}}(t))},unfollow:function(t){e(function(e){return function(t){t({type:"TOGGLE_FETCH"}),rt.getUnfollowRequest(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"UNFOLLOW",id:e}}(e)),t({type:"TOGGLE_FETCH"})}))}}(t))},toggleFetching:function(){e({type:"TOGGLE_FETCH"})}}}),(function(e,t,a){return{isFetching:e.isFetching,user:a.user,follow:t.follow,unfollow:t.unfollow,toggleFetching:t.toggleFetching}}))((function(e){return i.a.createElement(_t,{user:e.user,follow:e.follow,unfollow:e.unfollow})})),Nt=function(e){return e.loginData.email},xt=function(e){return e.loginData.isLogged},Lt=function(e){return e.loginData.isFetching},It=function(e){return e.loginData.errorMessage},jt=Object(k.b)((function(e){return{isLogged:xt(e),users:vt(e),pageSize:Ot(e),pageCount:kt(e),isFetching:wt(e),inc:"INC",dec:"DEC"}}),(function(e){return{refresh:function(t,a,n){e(function(e,t,a){return function(n){if(n({type:"TOGGLE_FETCH"}),e)switch(e){case"INC":n(it(++t));break;case"DEC":t>1&&n(it(--t))}at.getPageRequest(t,a).then((function(e){n(function(e){return{type:"USERS",users:e}}(e)),n({type:"TOGGLE_FETCH"})}))}}(t,a,n))}}}))((function(e){var t=function(t){e.refresh(t,e.pageCount,e.pageSize)};Object(o.useEffect)((function(){t()}),[]);var a=function(e){if(e)return function(e){for(var t=[],a=[];e.length>0;)3===a.length?(t.push(i.a.createElement("div",{className:lt.a.column},a)),a=[]):a.push(e.pop());return a.length>0&&t.push(i.a.createElement("div",{className:lt.a.column},a)),t}(e.map((function(e){return i.a.createElement(yt,{user:e})})))}(e.users);return e.isLogged?i.a.createElement(ht,{renderedUsers:a,refresh:t,inc:e.inc,dec:e.dec,pageCount:e.pageCount,isFetching:e.isFetching}):i.a.createElement(p.a,{to:"/"})})),Ft=a(180),Ct=a.n(Ft),Pt=Object(p.f)((function(e){Object(o.useEffect)((function(){e.refresh(e.match.params.userId,e.isFetching)}),[]);var t=e.isFetching;return i.a.createElement("div",{className:Ct.a.Container},t?i.a.createElement(pt,null):i.a.createElement(Ve,{state:e.profile}))})),Mt=Object(k.b)((function(e){return{isFetching:Je(e),profile:Xe(e)}}),(function(e){return{refresh:function(t,a){e(We(t,a))}}}))(Pt),St={getAuthRequest:function(){return Ae.get("auth/me").then((function(e){return e.data}))},getLoginRequest:function(e,t,a){return Ae.post(function(e,t,a){return"auth/login?email="+e+"&password="+t+"&rememberMe="+a}(e,t,a)).then((function(e){return e.data}))},getLogoutRequest:function(){return Ae.delete("auth/login").then((function(e){return e.data}))}},Tt={userId:1,email:"test@email",isLogged:!1,isFetching:!1,errorMessage:void 0},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0,a=Object(ae.a)({},e);switch(t.type){case"LOGIN_ID":a.userId=t.id;break;case"SET_EMAIL":a.email=t.email;break;case"LOG_IN":a.isLogged=!0;break;case"LOG_OUT":a.isLogged=!1;break;case"FETCH":a.isFetching=!a.isFetching;break;case"ERROR":a.errorMessage=[t.errorMessage];break;case"SET_DATA":var n=t.data;a.email=n.email,a.userId=n.userId,a.isLogged=!0;break;default:return a}return a},At=a(53),Rt=a.n(At),Gt=a(105),Ht=a.n(Gt),Dt=function(e){var t=e.input,a=e.meta,n=e.className,r=Object(L.a)(e,["input","meta","className"]);return i.a.createElement("div",{className:Ht.a.Input},i.a.createElement("input",Object.assign({},t,r,{className:n+(a.error&&a.touched?" "+Ht.a.error:"")})),a.error&&a.touched?i.a.createElement("div",{className:Ht.a.span},a.error):i.a.createElement(i.a.Fragment,null))},Wt=function(e){if(e&&-1===e.toString().indexOf("@"))return"Invalid email format"},qt=Object(x.a)({form:"loginForm"})((function(e){return i.a.createElement("form",{className:Rt.a.loginForm,onSubmit:e.handleSubmit},i.a.createElement(N.a,{placeholder:"E-mail",type:"e-mail",name:"email",className:Rt.a.input,component:Dt,validate:[C,Wt]}),i.a.createElement(N.a,{placeholder:"Password",type:"password",name:"password",className:Rt.a.input,component:Dt,validate:[C]}),i.a.createElement(N.a,{component:"input",type:"checkbox",name:"remember",className:Rt.a.checkbox}),i.a.createElement("span",null,"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),i.a.createElement("div",null,e.errorMessage),i.a.createElement("button",{type:"submit",className:Rt.a.btn},"Login"))})),zt=function(e){function t(){return Object(l.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:Rt.a.Login},i.a.createElement("h1",{className:Rt.a.heading},"Welcome"),i.a.createElement(qt,{onSubmit:this.props.login,errorMessage:this.props.errorMessage}))}}]),t}(i.a.Component),Zt=a(132),Bt=a.n(Zt),Kt=Object(k.b)((function(e){return{isLogged:xt(e),isFetching:Lt(e),errorMessage:It(e)}}),(function(e){return{login:function(t,a,n){e(function(e,t,a){return function(n){n({type:"FETCH"}),St.getLoginRequest(e,t,a).then((function(t){0===t.resultCode?(n(function(e){return{type:"SET_EMAIL",email:e}}(e)),n({type:"LOGIN_ID",id:t.data.userId}),n({type:"LOG_IN"})):n({type:"ERROR",errorMessage:"\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u044b email/\u043f\u0430\u0440\u043e\u043b\u044c"}),n({type:"FETCH"})}))}}(t,a,n))}}}))((function(e){var t=function(e){if(e)return e.map((function(e){return i.a.createElement("div",{className:Bt.a.errorMessage},e)}))}(e.errorMessage);return e.isLogged?i.a.createElement(i.a.Fragment,null):e.isFetching?i.a.createElement("div",{className:Bt.a.preloader_wrapper},i.a.createElement(pt,null)):i.a.createElement(zt,{login:function(t){var a=t.email,n=t.password,r=!!t.remember;e.login(a,n,r)},errorMessage:t})})),Xt=a(181),Jt=a.n(Xt),Qt=a(182),Yt=a.n(Qt),Vt=function(){return i.a.createElement("div",{className:Jt.a.Greeting},i.a.createElement("img",{src:Yt.a,alt:"gif"}))},$t={isInitialized:!1},ea=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$t,t=arguments.length>1?arguments[1]:void 0,a=Object(ae.a)({},e);return t.type,a.isInitialized=!0,a},ta=function(e){return e.init.isInitialized},aa=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).myProfile=i.a.createElement(p.b,{path:"/Profile",exact:!0,render:function(){var e=a.props.userPages[0];return i.a.createElement(Ve,{state:e})}}),a.renderedFriends=a.props.userPages.map((function(e){if("Whatruska"!==e.login)return i.a.createElement(p.b,{path:"/Friend/"+e.login,exact:!0,render:function(){return i.a.createElement(Ve,{state:e})}})})),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.props.isInitialized?this.props.isLogged?i.a.createElement("div",{className:"Main"},i.a.createElement(p.b,{path:"/Messages",render:function(){return i.a.createElement(de,{state:e.props.messagesPage})}}),i.a.createElement(p.b,{path:"/UserListAPIComponent",render:function(){return i.a.createElement(jt,null)}}),this.myProfile,this.renderedFriends,i.a.createElement(p.b,{path:"/User/:userId"},i.a.createElement(Mt,null)),i.a.createElement(p.b,{path:"/",exact:!0,render:function(){return i.a.createElement(Vt,null)}})):i.a.createElement(h.a,null,i.a.createElement("div",{className:"Main"},i.a.createElement(p.a,{to:"/"}),i.a.createElement(p.b,{path:"/",exact:!0,render:function(){return i.a.createElement(Kt,null)}}))):(this.props.auth(),this.props.finishInit(),i.a.createElement(pt,null))}}]),t}(i.a.Component),na=Object(k.b)((function(e){return{messagesPage:e.messagesPage,friendInfo:e.friendInfo,userPages:e.userPages.users,isLogged:xt(e),isInitialized:ta(e)}}),(function(e){return{finishInit:function(){e({type:"INIT_FINISH"})},auth:function(){e((function(e){St.getAuthRequest().then((function(t){0===t.resultCode&&e(function(e){return{type:"SET_DATA",data:e}}(t.data))}))}))}}}))(aa),ra=(a(322),a(183)),sa=a.n(ra),oa=a(24),ia=a(378),ca=a(396),ua=a(8),la=a(392),ma=Object(la.a)((function(e){var t,a;return{Header:{background:"linear-gradient(49deg,"+e.palette.primary.main+" 26%, "+e.palette.primary.light+" 89%)",color:"white"},logo:Object(ua.a)({width:"7em",height:"7em"},e.breakpoints.down("xs"),{width:"3rem"}),logo_btn:{"&:hover":{backgroundColor:"transparent"}},heading:(t={fontSize:"2.5rem"},Object(ua.a)(t,e.breakpoints.down("lg"),{fontSize:"1.5rem"}),Object(ua.a)(t,e.breakpoints.down("xs"),{fontSize:"1rem"}),Object(ua.a)(t,"color","white"),Object(ua.a)(t,"fontWeight","bold"),t),tabs:{marginLeft:"auto"},tab:{padding:"0px 0px",fontSize:"1rem"},spacing:Object(ae.a)({},e.mixins.toolbar,{marginBottom:"5em"}),menu:{top:"8em"},menuList:{backgroundColor:e.palette.primary.light,color:"white",fontWeight:"bold"},logout:(a={backgroundColor:e.palette.error.main,color:"white",fontWeight:"bold"},Object(ua.a)(a,e.breakpoints.down("xs"),{fontSize:"0.7rem"}),Object(ua.a)(a,"&:hover",{backgroundColor:e.palette.error.light}),a),logout_wrapper:Object(ua.a)({marginLeft:"auto",display:"flex",flexDirection:"column",justifyContent:"center",fontSize:"0.7em"},e.breakpoints.down("lg"),{marginLeft:"0px"}),email:{fontSize:"1.2em",marginBottom:"0.5em"},drawer_btn:{marginLeft:"auto",color:"white","&:hover":{backgroundColor:"transparent"}},drawer_close_btn:{margin:"auto"}}})),fa=a(382),da=a(380),ga=a(381),pa=a(395),ha=a(383),Ea=a(398),ba=a(385),_a=a(190),va=a.n(_a),Oa=a(386),ka=a(384),wa=a(344),ya=a(400),Na=a(379),xa=a(188),La=a.n(xa),Ia=a(184),ja=a.n(Ia),Fa=a(185),Ca=a.n(Fa),Pa=a(186),Ma=a.n(Pa),Sa=a(189),Ta=a.n(Sa),Ua=a(187),Aa=a.n(Ua),Ra=a(387),Ga=a(388),Ha=a(390),Da=a(389),Wa=function(e){var t=Object(oa.a)(),a=ma(t),n=Object(o.useState)(null),r=Object(Pe.a)(n,2),s=r[0],c=r[1],u=Object(o.useState)(!1),l=Object(Pe.a)(u,2),m=l[0],f=l[1],d=Object(o.useState)(!1),g=Object(Pe.a)(d,2),p=g[0],E=g[1],b=Object(o.useState)(!1),_=Object(Pe.a)(b,2),v=_[0],O=_[1],k=Object(o.useState)(0),w=Object(Pe.a)(k,2),y=w[0],N=w[1],x=Object(o.useState)(-1),L=Object(Pe.a)(x,2),I=L[0],j=L[1];Object(o.useEffect)((function(){var e=window.location.pathname;switch("whatruska.github.io"===window.location.host&&(e=e.substring(e.indexOf("/React")+6)),e){case"/":N(0);break;case"/Profile":N(1);break;case"/Messages":N(2);break;case"/UserListAPIComponent":N(3);break;default:N(-1)}}),[]);var F=function(){f(!m)},C=function(){E(!p)},P=function(e){c(null),F()},M=function(e,t){j(t)},S=Object(ia.a)(t.breakpoints.up("lg")),T=function(e,t,a,n){return{link:e,primary:t,secondary:a,icon:n}},U=[T("/","Home","Home, sweet home",i.a.createElement(ja.a,null)),T("/profile","Profile","Check your profile and edit status",i.a.createElement(Ca.a,null)),T("/messages","Messages","Check your messages",i.a.createElement(Ma.a,null)),T("/UserListAPIComponent","Users","List of users",i.a.createElement(Aa.a,null))].map((function(e,t){return i.a.createElement(wa.a,{button:!0,onClick:C,component:h.b,to:e.link},i.a.createElement(Na.a,null,e.icon),i.a.createElement(ya.a,{primary:e.primary,secondary:e.secondary}))}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(da.a,Object.assign({},e,{className:a.Header}),i.a.createElement(ga.a,null,i.a.createElement(fa.a,{disableRipple:!0,component:h.b,to:"/",className:a.logo_btn},i.a.createElement("img",{src:sa.a,alt:"logo",className:a.logo}),i.a.createElement("span",{className:a.heading},"Web app")),e.isLogged?i.a.createElement(i.a.Fragment,null,S?i.a.createElement(i.a.Fragment,null,i.a.createElement(pa.a,{value:y,indicatorColor:"secondary",className:a.tabs,onChange:function(e,t){N(t)}},i.a.createElement(ha.a,{label:"Home",component:h.b,to:"/",className:a.tab}),i.a.createElement(ha.a,{label:"Profile",component:h.b,to:"/Profile",className:a.tab}),i.a.createElement(ha.a,{label:"Messages",component:h.b,to:"/Messages",className:a.tab}),i.a.createElement(ha.a,{label:"Users",component:h.b,to:"/UserListAPIComponent",className:a.tab}),i.a.createElement(ha.a,{label:"Friends","aria-controls":m?"menu":void 0,"aria-owns":s?"menu":void 0,"aria-haspopup":s?"true":void 0,onMouseOver:function(e){c(e.currentTarget),F()},className:a.tab})),i.a.createElement(Ea.a,{open:m,id:"menu",anchorEl:s,onClose:P,autoFocusItem:m,MenuListProps:{onMouseLeave:P},classes:{paper:a.menu,list:a.menuList},transformOrigin:{vertical:"top",horizontal:"center"},elevation:3,keepMounted:!0},i.a.createElement(ba.a,{selected:0===I,onClick:function(e){M(0,0)},component:h.b,to:"/Friend/Misha"},"Michael"),i.a.createElement(ba.a,{selected:1===I,onClick:function(e){M(0,1)},component:h.b,to:"/Friend/Anya"},"Anna"),i.a.createElement(ba.a,{selected:2===I,onClick:function(e){M(0,2)},component:h.b,to:"/Friend/Zeka"},"Evgenii"))):i.a.createElement(i.a.Fragment,null,i.a.createElement(ca.a,{onClose:C,onOpen:C,open:p},i.a.createElement(ka.a,null,i.a.createElement(wa.a,null,i.a.createElement(Oa.a,{onClick:C,className:a.drawer_close_btn},i.a.createElement(La.a,null))),U,i.a.createElement(wa.a,{button:!0,onClick:function(e){O(!v)}},i.a.createElement(Na.a,null,i.a.createElement(Ta.a,null)),i.a.createElement(ya.a,{primary:"Friends",secondary:"List of your friends"}),v?i.a.createElement(Ra.a,null):i.a.createElement(Ga.a,null)),i.a.createElement(Da.a,{in:v,timeout:500,unmountOnExit:!0},i.a.createElement(ka.a,{component:"div",disablePadding:!0},i.a.createElement(wa.a,{button:!0,component:h.b,to:"/Friend/Misha",onClick:C},i.a.createElement(Na.a,null,i.a.createElement(Ha.a,null)),i.a.createElement(ya.a,{primary:"Misha"})),i.a.createElement(wa.a,{button:!0,component:h.b,to:"/Friend/Anya",onClick:C},i.a.createElement(Na.a,null,i.a.createElement(Ha.a,null)),i.a.createElement(ya.a,{primary:"Anna"})),i.a.createElement(wa.a,{button:!0,component:h.b,to:"/Friend/Zeka",onClick:C},i.a.createElement(Na.a,null,i.a.createElement(Ha.a,null)),i.a.createElement(ya.a,{primary:"Evgenii"})))))),i.a.createElement(fa.a,{onClick:C,className:a.drawer_btn},i.a.createElement(va.a,null))),i.a.createElement("div",{className:a.logout_wrapper},i.a.createElement("div",{className:a.email},e.email),i.a.createElement(fa.a,{onClick:e.logout,className:a.logout},"Log out"))):i.a.createElement(i.a.Fragment,null))),i.a.createElement("div",{className:a.spacing}))},qa=Object(k.b)((function(e){return{email:Nt(e),isLogged:xt(e)}}),(function(e){return{logout:function(){e((function(e){St.getLogoutRequest().then((function(t){e({type:"LOG_OUT"})}))}))}}}))((function(e){return e.isLogged?i.a.createElement(Wa,{isLogged:e.isLogged,email:e.email,logout:e.logout}):i.a.createElement(Wa,null)})),za=a(391),Za=a(191),Ba=a.n(Za)()({palette:{primary:{main:"#313186",light:"#a2a2e2"},error:{main:"#ff5f57",light:"#ff938c"}},overrides:{MuiTab:{width:"5em",root:{width:"5em"},wrapper:{width:"fit-content"}}}}),Ka=function(e){return i.a.createElement(h.a,{basename:"/React"},i.a.createElement(k.a,{store:e.store},i.a.createElement(za.a,{theme:Ba},i.a.createElement("div",{className:"App"},i.a.createElement(qa,null),i.a.createElement(na,null)))))},Xa=a(16),Ja={friends:ee},Qa=function(e,t){return Ja},Ya=a(192),Va=a(399),$a=Object(Xa.c)({messagesPage:se,userPages:ye,friendInfo:Qa,userList:ct,profilePage:qe,loginData:Ut,init:ea,form:Va.a}),en=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Xa.d,tn=Object(Xa.e)($a,en(Object(Xa.a)(Ya.a)));(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn;u.a.render(i.a.createElement(Ka,{store:e}),document.getElementById("root"))})(),function(e){if("serviceWorker"in navigator){if(new URL("/React",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/React","/service-worker.js");n?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):r(t,e)}))}}()},41:function(e,t,a){e.exports={UserList:"UserList_UserList__2EIqO",wrapper:"UserList_wrapper__1BZYq",column:"UserList_column__a0jpE",btn:"UserList_btn__qUYxt",btns_wrapper:"UserList_btns_wrapper__FsbPQ",page_counter:"UserList_page_counter__1MBex"}},42:function(e,t,a){e.exports={Info:"Info_Info__3Aoe6",avatar:"Info_avatar__xG-n1",data:"Info_data__1mO8o",contacts:"Info_contacts__3R0Wh",fio:"Info_fio__3qeNE"}},46:function(e,t,a){e.exports=a.p+"static/media/profile-header.d05892b6.jpeg"},47:function(e,t,a){e.exports={UserListItem:"UserListItem_UserListItem__3ChfZ",meta:"UserListItem_meta__1268y",avatar:"UserListItem_avatar__2mLjR",btn:"UserListItem_btn__Sj20V",follow:"UserListItem_follow__1RdX1",unfollow:"UserListItem_unfollow__NsEmq",info:"UserListItem_info__1RZjo",login:"UserListItem_login__1NbRQ"}},53:function(e,t,a){e.exports={Login:"Login_Login__xzL9z",loginForm:"Login_loginForm__1GfkO",heading:"Login_heading__3MXPD",input:"Login_input__2xjm-",checkbox:"Login_checkbox__3wURm",btn:"Login_btn__38lZ2"}},58:function(e,t,a){e.exports={posts:"Posts_posts__2RNie",list:"Posts_list__1o-gi",form:"Posts_form__V3yv6",textarea:"Posts_textarea__3-d5J",button:"Posts_button__ElwWQ"}},75:function(e,t,a){e.exports={TextArea:"TextArea_TextArea__2prCQ",textarea:"TextArea_textarea__3Uv7a",error:"TextArea_error__3IeT6",span:"TextArea_span__3MdUs"}},76:function(e,t,a){e.exports={Post:"Post_Post__ADmZg",avatar:"Post_avatar__1nytp",text:"Post_text__SY1ZK",likes:"Post_likes__h6tK1"}},92:function(e,t,a){e.exports=a.p+"static/media/ava.65808d6a.jpeg"}},[[197,1,2]]]);
//# sourceMappingURL=main.b3d2d2a4.chunk.js.map