(this["webpackJsonpmy-app-1"]=this["webpackJsonpmy-app-1"]||[]).push([[0],{104:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(29),r=n(5),o={dialogsItemData:[{id:1,name:"Bugg"},{id:2,name:"Butterfly"},{id:3,name:"Caterpillar"},{id:4,name:"Spider"}],messagesItemData:[{id:11,message:"hello nigga"},{id:22,message:"no hook no hoes"},{id:33,message:"GIDDY UP!"},{id:44,message:"Numb Numb Juice"}]},s=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messagesItemData:[].concat(Object(a.a)(e.messagesItemData),[{id:e.messagesItemData.length+1,message:n}])});default:return e}}},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(12),r=n(16),o=n(15),s=n(14),i=n(0),c=n.n(i),u=n(11),l=n(13),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(s.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),i}(c.a.Component);return Object(l.b)(m)(t)}},142:function(e,t,n){e.exports=n.p+"static/media/arrow.4f2a3203.svg"},143:function(e,t,n){e.exports=n.p+"static/media/next.1c77e35a.svg"},144:function(e,t,n){e.exports=n.p+"static/media/imgBug.8e169284.png"},145:function(e,t,n){e.exports=n.p+"static/media/preloader.0a156a71.gif"},146:function(e,t,n){e.exports={content:"Profile_content__2wLDD"}},147:function(e,t,n){e.exports=n.p+"static/media/heart.7a8ade7e.svg"},148:function(e,t,n){e.exports=n.p+"static/media/watermelon.7fe1c41b.svg"},149:function(e,t,n){e.exports=n.p+"static/media/hacker.3dae5850.svg"},175:function(e,t,n){e.exports=n(321)},180:function(e,t,n){},24:function(e,t,n){e.exports={profileContainer:"MyProfile_profileContainer__ntLo0",leftElementContainer:"MyProfile_leftElementContainer__17d9W",rightElementContainer:"MyProfile_rightElementContainer__1gGLV",myTitle:"MyProfile_myTitle__1QBuW",itemPhoto:"MyProfile_itemPhoto__1OvH2",itemDiscription:"MyProfile_itemDiscription__2qQYQ",imgStatus:"MyProfile_imgStatus__1RF_j",fullName:"MyProfile_fullName__3NYI4",myPhoto:"MyProfile_myPhoto__mHVQU",imgAnon:"MyProfile_imgAnon__2_R6f",status:"MyProfile_status__1mlNU",inputStatus:"MyProfile_inputStatus__NI8Ea"}},25:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",navContainer:"Navbar_navContainer__Nd_xd",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk",activeLink:"Navbar_activeLink__3etBE"}},259:function(e,t,n){},26:function(e,t,n){e.exports={usersContainer:"users_usersContainer__13urB",name:"users_name__2Xz29",status:"users_status__2-fS8",location:"users_location__2R4ze",button:"users_button__2y6Lc",userImgContainer:"users_userImgContainer__wJ08R",userImg:"users_userImg__2-qEp",usersPageCount:"users_usersPageCount__1amfq",preloader:"users_preloader__3WYO4"}},264:function(e,t,n){e.exports={friendsListContainer:"FriendsList_friendsListContainer__3uo9r",friendListCard:"FriendsList_friendListCard__1pMvl",friendsName:"FriendsList_friendsName__1JxsK",friendsCountry:"FriendsList_friendsCountry__2FnKv"}},30:function(e,t,n){e.exports={loginFormContainer:"login_loginFormContainer__292Eh",Title:"login_Title__JiiIB",loginForm:"login_loginForm__2MbvJ",inputLogin:"login_inputLogin__rmmc9",inputPass:"login_inputPass__1_XVD",passwordForm:"login_passwordForm__2rn5v",rememberMeForm:"login_rememberMeForm__3L3ZG",inputRemember:"login_inputRemember__I8rXD",buttonLogin:"login_buttonLogin__3a1jr"}},321:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(72),s=n.n(o);n(180),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(9),c=n(137),u=n(138),l=n(104),m=n(10),p=n.n(m),f=n(20),d=n(29),_=n(5),g=n(94).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5244641d-cf75-402c-bbdb-0144979168bb"}}),E=function(e,t){return g.get("users?page=".concat(e,"&count=").concat(t))},v=function(e){return g.post("follow/".concat(e))},h=function(e){return g.delete("follow/".concat(e))},b=function(e){return g.get("profile/"+e)},O=function(e){return g.get("profile/status/"+e)},P=function(e){return g.put("profile/status",{status:e})},N=function(){return g.get("auth/me")},S=function(e,t,n){return g.post("auth/login",{email:e,password:t,rememberMe:n})},w=function(){return g.delete("auth/login")},C={postData:[{id:1,message:"Its my first post",likeCounter:0},{id:2,message:"Hi,how are you?",likeCounter:0}],profile:null,status:""},y=function(e){return{type:"SET_STATUS",status:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={userId:e.postData.length+1,message:t.newPostText};return Object(_.a)(Object(_.a)({},e),{},{postData:[].concat(Object(d.a)(e.postData),[n])});case"UPDATE-NEW-POST-TEXT":return Object(_.a)(Object(_.a)({},e),{},{newPostText:t.newText});case"SET_STATUS":return Object(_.a)(Object(_.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(_.a)(Object(_.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(_.a)(Object(_.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!=t.postId}))});default:return e}},k={friendsItemData:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return e},L={users:[],pageSize:10,totalItemsCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},T=function(e){return{type:"FOLLOW",userId:e}},x=function(e){return{type:"UNFOLLOW",userId:e}},F=function(e){return{type:"SET_USERS",users:e}},M=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},D=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},A=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},z=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(_.a)(Object(_.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(_.a)(Object(_.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(_.a)(Object(_.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(_.a)(Object(_.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(_.a)(Object(_.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(_.a)(Object(_.a)({},e),{},{totalItemsCount:t.count});case"TOGGLE_IS_FETCHING":return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(_.a)(Object(_.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(d.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},R=n(53),H={userId:null,login:null,email:null,isAuth:!1},G=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{userId:e,email:n,login:t,isAuth:a}}},B=function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,r,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,s=a.email,t(G(r,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(_.a)(Object(_.a)({},e),t.payload);default:return e}},Y={initialized:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},K=Object(i.c)({app:J,dialogsPage:l.a,profilePage:j,friendsPage:I,usersPage:U,auth:W,form:c.a}),X=Object(i.e)(K,Object(i.a)(u.a));window.store=X;var Q=X,Z=n(12),V=n(16),q=n(15),$=n(14),ee=(n(259),n(33)),te=n.n(ee),ne=n(17),ae=n(19),re=n(102),oe=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},se=function(e,t,n){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(n,")")},ie=function(){var e=Object(re.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),t=Object(ae.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{className:te.a.logo__container},r.a.createElement(re.a.div,{class:te.a.header__logo,onMouseMove:function(e){var t=e.clientX,n=e.clientY;return a({xys:oe(t,n)})},onMouseLeave:function(){return a({xys:[0,0,1]})},style:{transform:n.xys.interpolate(se)}}))};var ce=function(e){return r.a.createElement("header",{className:te.a.header},r.a.createElement("div",{className:te.a.headerContainer},r.a.createElement(ie,null),r.a.createElement("div",{className:te.a.loginBlock},e.isAuth?r.a.createElement("div",{className:te.a.userName},e.login," -  ",r.a.createElement("button",{onClick:e.logout,className:te.a.buttonLogout},"Log out")," "):r.a.createElement(ne.b,{className:te.a.loginLink,to:"/login"},"Login"))))},ue=n(13),le=function(e){Object(q.a)(n,e);var t=Object($.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return r.a.createElement(ce,this.props)}}]),n}(r.a.Component),me=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:B,logout:function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:0===e.sent.data.resultCode&&t(G(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(le),pe=n(25),fe=n.n(pe);var de=function(){return r.a.createElement("nav",{className:fe.a.nav},r.a.createElement("div",{className:fe.a.navContainer},r.a.createElement("div",{className:fe.a.item},r.a.createElement(ne.b,{to:"../Profile",activeClassName:fe.a.activeLink},"Profile")),r.a.createElement("div",{className:fe.a.item},r.a.createElement(ne.b,{to:"../Dialogs",activeClassName:fe.a.activeLink},"Messages")),r.a.createElement("div",{className:fe.a.item},r.a.createElement(ne.b,{to:"../Users",activeClassName:fe.a.activeLink},"Users")),r.a.createElement("div",{className:fe.a.item},r.a.createElement(ne.b,{to:"../Friends",activeClassName:fe.a.activeLink},"Friends")),r.a.createElement("div",{className:fe.a.item},r.a.createElement("a",null,"Music")),r.a.createElement("div",{className:fe.a.item},r.a.createElement("a",null,"Settings"))))},_e=n(98),ge=n.n(_e);n(264),n(141);var Ee=function(e){};var ve=function(e){var t=e.store.getState().friendsPage.friendsItemData.map((function(e){return r.a.createElement(Ee,{id:e.id,name:e.name,country:e.country})}));return r.a.createElement("div",{className:ge.a.friends__container},r.a.createElement("div",{className:ge.a.friends__header},"My friends"),t,r.a.createElement(Ee,null))},he=n(44),be=n(26),Oe=n.n(be),Pe=n(34),Ne=n.n(Pe),Se=n(142),we=n.n(Se),Ce=n(143),ye=n.n(Ce),je=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.onPageChanged,s=e.currentPage,i=e.portionSize,c=void 0===i?10:i,u=(Object(he.a)(e,["totalItemsCount","pageSize","onPageChanged","currentPage","portionSize"]),Math.ceil(t/n)),l=[],m=1;m<=u;m++)l.push(m);console.log("portionSize",c);var p=Math.ceil(u/c),f=Object(a.useState)(1),d=Object(ae.a)(f,2),_=d[0],g=d[1],E=(_-1)*c+1,v=_*n;return r.a.createElement("div",{className:Ne.a.paginator_block},r.a.createElement("div",{className:Ne.a.arrow_container},_>1&&r.a.createElement("div",{className:Ne.a.arrow},r.a.createElement("img",{src:we.a,onClick:function(){return g(_-1)}}))),r.a.createElement("div",{className:Ne.a.pages_block},l.filter((function(e){return e>=E&&e<=v})).map((function(e){return r.a.createElement("span",{key:e.id,className:s===e?Ne.a.selectedPage:Ne.a.defaultPage,onClick:function(t){o(e)}},e)}))),r.a.createElement("div",{className:Ne.a.arrow_container},p>_&&r.a.createElement("div",{className:Ne.a.arrow},r.a.createElement("img",{src:ye.a,onClick:function(){return g(_+1)}}))))},ke=n(144),Ie=n.n(ke),Le=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",{className:Oe.a.userImgContainer},r.a.createElement(ne.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Ie.a,className:Oe.a.userImg}))),r.a.createElement("div",{className:Oe.a.name},t.name),r.a.createElement("div",{className:Oe.a.status},t.status),r.a.createElement("div",{className:Oe.a.location}),r.a.createElement("div",{className:Oe.a.button},t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"follow"))))},Te=function(e){var t=e.onPageChanged,n=e.totalItemsCount,a=e.portionSize,o=e.pageSize,s=e.currentPage,i=e.followingInProgress,c=e.unfollow,u=e.follow,l=Object(he.a)(e,["onPageChanged","totalItemsCount","portionSize","pageSize","currentPage","followingInProgress","unfollow","follow"]);return r.a.createElement("div",{className:Oe.a.usersContainer},r.a.createElement("div",{className:Oe.a.usersPageCount},r.a.createElement(je,{totalItemsCount:n,portionSize:a,pageSize:o,onPageChanged:t,currentPage:s})),l.users.map((function(e){return r.a.createElement(Le,{key:e.id,user:e,followingInProgress:i,unfollow:c,follow:u})})))},xe=n(145),Fe=n.n(xe),Me=function(e){return r.a.createElement("div",{className:Oe.a.preloader},r.a.createElement("img",{src:Fe.a}))},De=function(e){return e.usersPage.users},Ae=function(e){return e.usersPage.pageSize},ze=function(e){return e.usersPage.portionSize},Ue=function(e){return e.usersPage.totalItemsCount},Re=function(e){return e.usersPage.currentPage},He=function(e){return e.usersPage.isFetching},Ge=function(e){return e.usersPage.followingInProgress},Be=function(e){Object(q.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(Z.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsersThunk(t,e.props.pageSize)},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Me,null):null,r.a.createElement(Te,{onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,portionSize:this.props.portionSize}))}}]),n}(r.a.Component),We=Object(ue.b)((function(e){return{users:De(e),pageSize:Ae(e),portionSize:ze(e),totalItemsCount:Ue(e),currentPage:Re(e),isFetching:He(e),followingInProgress:Ge(e)}}),{follow:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(z(!0,e)),t.next=3,v(e);case 3:0==t.sent.data.resultCode&&n(T(e)),n(z(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(z(!0,e)),t.next=3,h(e);case 3:0==t.sent.data.resultCode&&n(x(e)),n(z(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:F,setCurrentPage:M,setTotalUsersCount:D,toggleIsFetching:A,toggleFollowingProgress:z,getUsersThunk:function(e,t){return function(){var n=Object(f.a)(p.a.mark((function n(a){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(A(!0)),a(M(e)),n.next=4,E(e,t);case 4:r=n.sent,a(A(!1)),a(F(r.data.items)),a(D(r.data.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Be),Ye=n(30),Je=n.n(Ye),Ke=n(135),Xe=n(136),Qe=n(11),Ze=n(57),Ve=n(49),qe=Object(Xe.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:Je.a.loginFormContainer},r.a.createElement("div",{className:Je.a.Title},r.a.createElement("p",null,"Sign in")),e.error&&r.a.createElement("div",{className:Je.a.commonError},r.a.createElement("span",null,e.error)),r.a.createElement("div",{className:Je.a.loginForm},r.a.createElement(Ke.a,{name:"email",component:Ze.a,validate:[Ve.b],className:Je.a.inputLogin,placeholder:"Email"})),r.a.createElement("div",{className:Je.a.passwordForm},r.a.createElement(Ke.a,{name:"password",component:Ze.a,validate:[Ve.b],className:Je.a.inputPass,type:"password",placeholder:"Password"})),r.a.createElement("div",{className:Je.a.rememberMeForm},r.a.createElement(Ke.a,{name:"rememberMe",component:"input",className:Je.a.inputRemember,type:"checkbox"}),"Remember me"),r.a.createElement("button",{className:Je.a.buttonLogin,variant:"contained",color:"primary"},"Login"))})),$e=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(f.a)(p.a.mark((function a(r){var o,s;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(B()):(s=o.data.messages.length>0?o.data.messages[0]:"error",r(Object(R.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(Qe.a,{to:"/profile"}):r.a.createElement(qe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})})),et=n(146),tt=n.n(et),nt=n(35),at=n.n(nt),rt=n(76),ot=n.n(rt),st=n(147),it=n.n(st),ct=n(77),ut=n.n(ct),lt=function(e){var t=Object(a.useState)(0),n=Object(ae.a)(t,2),o=n[0],s=n[1];return r.a.createElement("div",{className:ut.a.container},r.a.createElement("div",{className:ut.a.like},r.a.createElement("img",{src:it.a,onClick:function(){return s(o+1)}})),r.a.createElement("div",{className:ut.a.count},o))};var mt=function(e){return r.a.createElement("div",{className:ot.a.posts},r.a.createElement("div",{className:ot.a.posts__item},r.a.createElement("div",{className:ot.a.item__container},r.a.createElement(ne.b,{to:"/profile/"+e.id}),e.message),r.a.createElement(lt,null)))},pt=r.a.memo((function(e){var t=e.postData.map((function(e){return r.a.createElement(mt,{message:e.message,key:e.id,id:e.id})}));return r.a.createElement("div",{className:at.a.content},r.a.createElement("div",{className:at.a.postsHeader},"My posts"),r.a.createElement("div",{className:at.a.posts},r.a.createElement(dt,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:at.a.postElementContainer},r.a.createElement("div",{className:at.a.postElement},t))))})),ft=Object(Ve.a)(15),dt=Object(Xe.a)({form:"ProfileAddNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:at.a.item},r.a.createElement(Ke.a,{validate:[Ve.b,ft],className:at.a.inputPost,component:Ze.b,onKeyDown:function(t){"Enter"===t.key&&(t.metaKey||t.ctrlKey)&&e.handleSubmit()},placeholder:"write me..",name:"newPostText"})),r.a.createElement("div",{className:at.a.post__add},r.a.createElement("button",null,"ADD")))})),_t=pt,gt=Object(ue.b)((function(e){return{postData:e.profilePage.postData,likeCounter:e.profilePage.likeCounter}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(_t),Et=n(24),vt=n.n(Et),ht=n(148),bt=n.n(ht),Ot=n(149),Pt=n.n(Ot),Nt=(r.a.Component,function(e){var t=Object(a.useState)(!1),n=Object(ae.a)(t,2),o=n[0],s=n[1],i=Object(a.useState)(e.status),c=Object(ae.a)(i,2),u=c[0],l=c[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"no status")),o&&r.a.createElement("div",null,r.a.createElement("input",{className:vt.a.inputStatus,onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(u)},value:u})))});var St=function(e){return e.profile&&e.profile.photos?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:vt.a.profileContainer},r.a.createElement("div",{className:vt.a.rightElementContainer},r.a.createElement("div",{className:vt.a.myTitle},e.profile.fullName,r.a.createElement("img",{className:vt.a.imgStatus,src:bt.a})),r.a.createElement("div",{className:vt.a.status},r.a.createElement(Nt,{status:e.status,updateStatus:e.updateStatus})),r.a.createElement("div",{className:vt.a.itemPhoto},r.a.createElement("img",{className:vt.a.imgAnon,src:null!=e.profile.photos.large?e.profile.photos.small:Pt.a})),r.a.createElement("div",{className:vt.a.itemDiscription},r.a.createElement("p",null,null!=e.profile.aboutMe?e.profile.aboutMe:r.a.createElement("p",null,"ABOUT ME..")))))):r.a.createElement(Me,null)};var wt=function(e){return r.a.createElement("div",{className:tt.a.content},r.a.createElement(St,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(gt,{likeCounter:e.likeCounter}))},Ct=n(134),yt=function(e){Object(q.a)(n,e);var t=Object($.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(wt,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,myStatus:this.props.myStatus,updateStatus:this.props.updateStatus,likeCounter:this.props.likeCounter}))}}]),n}(r.a.Component),jt=Object(i.d)(Object(ue.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,myStatus:e.profilePage.myStatus,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth,likeCounter:e.profilePage.likeCounter}}),{getUserProfile:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:0===t.sent.data.resultCode&&n(y(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:a=t.sent,n(y(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),Qe.f,Ct.a)(yt),kt=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(e,t))}},It=r.a.lazy((function(){return n.e(3).then(n.bind(null,323))})),Lt=function(e){Object(q.a)(n,e);var t=Object($.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){var e=this;return this.props.initialized?r.a.createElement("div",{className:"app_wrapper"},r.a.createElement(me,null),r.a.createElement(de,null),r.a.createElement("div",{className:"app_wrapper__content"},r.a.createElement(Qe.b,{path:"/dialogs",render:kt(It)}),r.a.createElement(Qe.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(jt,null)}}),r.a.createElement(Qe.b,{path:"/friends",render:function(){return r.a.createElement(ve,{store:e.props.store})}}),r.a.createElement(Qe.b,{path:"/users",render:function(){return r.a.createElement(We,null)}}),r.a.createElement(Qe.b,{path:"/login",render:function(){return r.a.createElement($e,null)}}))):r.a.createElement(Me,null)}}]),n}(r.a.Component),Tt=Object(i.d)(Qe.f,Object(ue.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(B());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Lt);s.a.render(r.a.createElement(ne.a,null,r.a.createElement(ue.a,{store:Q},r.a.createElement(Tt,{dispatch:Q.dispatch.bind(Q),store:Q}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){e.exports={header:"Header_header__1VCKf",headerContainer:"Header_headerContainer__1YLYN",logo__container:"Header_logo__container__2M5xl",header__logo:"Header_header__logo__1ETZb",loginBlock:"Header_loginBlock__6mma5",userName:"Header_userName__2h_yj",buttonLogout:"Header_buttonLogout__Ysfz9",loginLink:"Header_loginLink__1yPle"}},34:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__xmQj0",defaultPage:"Paginator_defaultPage__25szk",paginator_block:"Paginator_paginator_block__33WTx",pages_block:"Paginator_pages_block__2xPQu",arrow_container:"Paginator_arrow_container__2kA_M",arrow:"Paginator_arrow__1WEtH"}},35:function(e,t,n){e.exports={content:"MyPosts_content__1JseI",posts:"MyPosts_posts__3tZ1c",postElementContainer:"MyPosts_postElementContainer__Esn3-",postElement:"MyPosts_postElement__1ufxA",post__like:"MyPosts_post__like__2tsmz",postsHeader:"MyPosts_postsHeader__3ANY5",inputPost:"MyPosts_inputPost__1Cmz3",post__add:"MyPosts_post__add__1OhHk"}},49:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));n(0);var a=function(e){if(!e)return"required"},r=function(e){return function(t){if(t&&t.length>e)return"max ".concat(e," simbols")}}},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var a=n(44),r=n(0),o=n.n(r),s=n(99),i=n.n(s),c=function(e){var t=e.input,n=e.meta,r=n.touched,s=n.error,c=Object(a.a)(e,["input","meta"]);return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,c))),o.a.createElement("div",{className:i.a.error},r&&s&&o.a.createElement("span",null," ",s," ")))},u=function(e){var t=e.input,n=e.meta,r=n.touched,s=n.error,c=Object(a.a)(e,["input","meta"]);return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,c))),o.a.createElement("div",{className:i.a.error},r&&s&&o.a.createElement("span",null," ",s," ")))}},76:function(e,t,n){e.exports={posts__item:"Post_posts__item__3ZBS2",item__container:"Post_item__container__24Ftn"}},77:function(e,t,n){e.exports={container:"LikeHookCounter_container__2uPsa",like:"LikeHookCounter_like__arUjJ",count:"LikeHookCounter_count__1wcnF"}},98:function(e,t,n){e.exports={friends__container:"Friends_friends__container__2V9zA",friends__header:"Friends_friends__header__2_Ews"}},99:function(e,t,n){e.exports={error:"FormControl_error__H5X-O"}}},[[175,1,2]]]);
//# sourceMappingURL=main.fc926dae.chunk.js.map