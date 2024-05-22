import"./chunk-SRKQFXZ3.js";import"./chunk-6HL7AIRA.js";import{a as ie,b as et,c as se,d as it,e as ce,f as vt,g as rt,h as z,i as b,j as T,k as pe}from"./chunk-N2PS63TU.js";import{a as U,b as oe,c as j,d as ae}from"./chunk-JFCT2LC6.js";import{$ as jt,$a as ne,A as f,Aa as Yt,B as N,Ba as ft,C as At,Ca as F,D as Q,Da as L,E as J,Ea as Zt,F as wt,G as p,Ga as g,H as x,Ha as Wt,I as h,Ia as Xt,J as m,Ja as tt,Ka as ht,N as a,Na as te,O as o,Oa as gt,P as _,Pa as ee,Q as Nt,R as kt,S as Dt,T as Y,U as k,V,W as Ft,X as Z,Y as Lt,Z as s,_ as Ut,_a as re,a as P,b as H,e as G,ea as R,f as A,g as xt,ga as I,h as Rt,ha as O,ia as zt,j as It,ja as Ht,k as ct,ka as $t,l as Ot,la as D,ma as Vt,na as W,o as $,pa as X,qa as qt,ra as Bt,s as bt,sa as Kt,t as pt,ta as mt,u as E,ua as Gt,v as w,va as Qt,w as lt,wa as dt,x as l,xa as ut,y as Tt,ya as Jt,z as Pt,za as M}from"./chunk-CLPIGH75.js";var le=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-home-component"]],decls:2,vars:0,template:function(i,n){i&1&&(a(0,"p"),s(1,"home-component works!"),o())}});let e=t;return e})();var me=(()=>{let t=class t{constructor(r,i){this.http=r,this.route=i}ngOnInit(){Rt(1).pipe(It(i=>i>0),Ot(5)).pipe($(i=>this.http.get(`https://jsonplaceholder.typicode.com/posts/${i}`))).subscribe(i=>{console.log(i)})}redirectTo(){this.route.navigate(["/parent"])}};t.\u0275fac=function(i){return new(i||t)(x(X),x(M))},t.\u0275cmp=f({type:t,selectors:[["app-map-component"]],decls:4,vars:0,consts:[[1,"btn","btn-success",3,"click"]],template:function(i,n){i&1&&(a(0,"p"),s(1,"switchmap vs mergemap vs concatmap vs exhaustmap"),o(),a(2,"button",0),k("click",function(){return n.redirectTo()}),s(3,"Parent"),o())}});let e=t;return e})();var Ue=[[["",8,"data"]],"*",[["",8,"btn-primary"]]],je=[".data","*",".btn-primary"],de=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-child"]],ngContentSelectors:je,decls:10,vars:0,template:function(i,n){i&1&&(Ft(Ue),a(0,"p"),s(1,"child works!"),o(),a(2,"div")(3,"h3"),s(4,"Child Component"),o(),Z(5),Z(6,1),a(7,"p"),s(8,"This content is projected from the child component."),o(),Z(9,2),o())}});let e=t;return e})();function He(e,t){e&1&&Dt(0)}function $e(e,t){e&1&&(a(0,"p"),s(1,"Template Content"),o())}function Ve(e,t){if(e&1){let c=Y();Nt(0),a(1,"app-child"),h(2,$e,2,0,"p",3),a(3,"p",4),s(4),o(),a(5,"button",5),k("click",function(){Q(c);let i=V(2);return J(i.dummy())}),s(6,"child click!"),o()(),kt()}if(e&2){let c=t.$implicit;p(2),m("ngIf",c==="Item 1"),p(2),Ut(c)}}function qe(e,t){if(e&1&&(a(0,"div"),h(1,Ve,7,2,"ng-container",2),o()),e&2){let c=V();p(),m("ngForOf",c.items)}}var fe=(()=>{let t=class t{constructor(){this.items=["Item 1","Item 2","Item 3"]}dummy(){}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-parent"]],decls:8,vars:1,consts:[["template",""],[4,"ngTemplateOutlet"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"data"],[1,"btn","btn-primary",3,"click"]],template:function(i,n){if(i&1&&(a(0,"p"),s(1,"parent works!"),o(),a(2,"div")(3,"h1"),s(4,"Parent Component"),o(),h(5,He,1,0,"ng-container",1),o(),h(6,qe,2,1,"ng-template",null,0,zt)),i&2){let d=Lt(7);p(5),m("ngTemplateOutlet",d)}},dependencies:[$t,D,Vt,de]});let e=t;return e})();var he=(()=>{let t=class t{constructor(r,i){this.store=r,this.router=i}canActivate(r,i){return this.store.select(et).pipe(A(n=>n?!0:this.router.createUrlTree(["auth"])))}};t.\u0275fac=function(i){return new(i||t)(l(g),l(M))},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Be=[{path:"",component:le},{path:"counter",loadChildren:()=>import("./chunk-3ZO5M6ZE.js").then(e=>e.CounterModule)},{path:"post",loadChildren:()=>import("./chunk-J2HPXRLW.js").then(e=>e.postModule),canActivate:[he]},{path:"auth",loadChildren:()=>import("./chunk-7G5Z22FE.js").then(e=>e.AuthModule)},{path:"map",component:me},{path:"parent",component:fe}],ge=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=N({type:t}),t.\u0275inj=w({imports:[ft.forRoot(Be),ft]});let e=t;return e})();var Ct="shared",ve=ht(Ct),Ce=tt(ve,e=>e.showLoading),Se=tt(ve,e=>e.errorMessage);var Ke=()=>["/"],Ge=()=>["/counter"],Qe=()=>["/post"],Je=()=>["/map"],Ye=()=>["/auth"],Ze=()=>["/auth/signup"];function We(e,t){e&1&&(a(0,"li",7)(1,"a",9),s(2,"Login"),o()()),e&2&&(p(),m("routerLink",R(1,Ye)))}function Xe(e,t){e&1&&(a(0,"li",7)(1,"a",9),s(2,"SignUp"),o()()),e&2&&(p(),m("routerLink",R(1,Ze)))}function ti(e,t){if(e&1){let c=Y();a(0,"li",7)(1,"a",11),k("click",function(i){Q(c);let n=V();return J(n.onLogout(i))}),s(2,"Logout"),o()()}}var ye=(()=>{let t=class t{constructor(r){this.store=r}ngOnInit(){this.isAuthendicated=this.store.select(et)}onLogout(r){r.preventDefault(),this.store.dispatch(z())}};t.\u0275fac=function(i){return new(i||t)(x(g))},t.\u0275cmp=f({type:t,selectors:[["app-header"]],decls:26,vars:17,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active",3,"routerLink"],["href","#",1,"nav-link",3,"routerLink"],["class","nav-item",4,"ngIf"],["href","#",1,"nav-link",3,"click"]],template:function(i,n){i&1&&(a(0,"nav",0)(1,"div",1)(2,"a",2),s(3,"Navbar"),o(),a(4,"button",3),_(5,"span",4),o(),a(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),s(10,"Home"),o()(),a(11,"li",7)(12,"a",9),s(13,"Counter"),o()(),a(14,"li",7)(15,"a",9),s(16,"Post"),o()(),h(17,We,3,2,"li",10),I(18,"async"),h(19,Xe,3,2,"li",10),I(20,"async"),h(21,ti,3,0,"li",10),I(22,"async"),a(23,"li",7)(24,"a",9),s(25,"Map"),o()()()()()()),i&2&&(p(9),m("routerLink",R(13,Ke)),p(3),m("routerLink",R(14,Ge)),p(3),m("routerLink",R(15,Qe)),p(2),m("ngIf",!O(18,7,n.isAuthendicated)),p(2),m("ngIf",!O(20,9,n.isAuthendicated)),p(2),m("ngIf",O(22,11,n.isAuthendicated)),p(3),m("routerLink",R(16,Je)))},dependencies:[D,Yt,W]});let e=t;return e})();var _e=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-loading-spinner"]],decls:17,vars:0,consts:[[1,"backdrop"],[1,"loading-spinner"],[1,"lds-spinner"]],template:function(i,n){i&1&&(_(0,"div",0),a(1,"div",1)(2,"div",2),_(3,"div")(4,"div")(5,"div")(6,"div")(7,"div")(8,"div")(9,"div")(10,"div")(11,"div")(12,"div")(13,"div")(14,"div"),o(),a(15,"div"),s(16,"Loading data"),o()())},styles:['.lds-spinner[_ngcontent-%COMP%], .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{box-sizing:border-box}.lds-spinner[_ngcontent-%COMP%]{color:currentColor;display:inline-block;position:relative;width:80px;height:80px}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform-origin:40px 40px;animation:_ngcontent-%COMP%_lds-spinner 1.2s linear infinite}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;top:3.2px;left:36.8px;width:6.4px;height:17.6px;border-radius:20%;background:currentColor}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){transform:rotate(0);animation-delay:-1.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){transform:rotate(30deg);animation-delay:-1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(60deg);animation-delay:-.9s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){transform:rotate(90deg);animation-delay:-.8s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5){transform:rotate(120deg);animation-delay:-.7s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6){transform:rotate(150deg);animation-delay:-.6s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7){transform:rotate(180deg);animation-delay:-.5s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8){transform:rotate(210deg);animation-delay:-.4s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9){transform:rotate(240deg);animation-delay:-.3s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10){transform:rotate(270deg);animation-delay:-.2s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11){transform:rotate(300deg);animation-delay:-.1s}.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12){transform:rotate(330deg);animation-delay:0s}@keyframes _ngcontent-%COMP%_lds-spinner{0%{opacity:1}to{opacity:0}}.loading-spinner[_ngcontent-%COMP%]{position:fixed;width:20vw;left:40vw;top:30%;z-index:99;background-color:#fff;text-align:center;padding:20px;border:1px solid #aaa}.backdrop[_ngcontent-%COMP%]{position:fixed;top:0;width:100%;height:100%;background-color:#00000080;z-index:98}']});let e=t;return e})();function ri(e,t){e&1&&_(0,"app-loading-spinner")}function ni(e,t){if(e&1&&(a(0,"div",5),s(1),o()),e&2){let c=t.ngIf;p(),jt(" ",c," ")}}var Ee=(()=>{let t=class t{constructor(r){this.store=r,this.title="sampleRxJS"}ngOnInit(){this.showloading=this.store.select(Ce),this.errorMessage=this.store.select(Se),this.store.dispatch(rt())}};t.\u0275fac=function(i){return new(i||t)(x(g))},t.\u0275cmp=f({type:t,selectors:[["app-root"]],decls:9,vars:6,consts:[[4,"ngIf"],[1,"container"],[1,"row"],[1,"col-md-12","text-center"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"]],template:function(i,n){i&1&&(_(0,"app-header"),h(1,ri,1,0,"app-loading-spinner",0),I(2,"async"),a(3,"div",1)(4,"div",2)(5,"div",3),h(6,ni,2,1,"div",4),I(7,"async"),_(8,"router-outlet"),o()()()),i&2&&(p(),m("ngIf",O(2,2,n.showloading)),p(5),m("ngIf",O(7,4,n.errorMessage)))},dependencies:[D,Jt,ye,_e,W]});let e=t;return e})();var Ie="@ngrx/router-store/request",ji=F(Ie,L()),St="@ngrx/router-store/navigation",zi=F(St,L()),yt="@ngrx/router-store/cancel",Hi=F(yt,L()),_t="@ngrx/router-store/error",$i=F(_t,L()),Oe="@ngrx/router-store/navigated",Vi=F(Oe,L());function be(e,t){let c=t;switch(c.type){case St:case _t:case yt:return{state:c.payload.routerState,navigationId:c.payload.event.id};default:return e}}var nt=class{serialize(t){return{root:this.serializeRoute(t.root),url:t.url}}serializeRoute(t){let c=t.children.map(r=>this.serializeRoute(r));return{params:t.params,data:t.data,url:t.url,outlet:t.outlet,title:t.title,routeConfig:t.routeConfig?{path:t.routeConfig.path,pathMatch:t.routeConfig.pathMatch,redirectTo:t.routeConfig.redirectTo,outlet:t.routeConfig.outlet,title:typeof t.routeConfig.title=="string"?t.routeConfig.title:void 0}:null,queryParams:t.queryParams,fragment:t.fragment,firstChild:c[0],children:c}}},Et=function(e){return e[e.PreActivation=1]="PreActivation",e[e.PostActivation=2]="PostActivation",e}(Et||{}),oi="router",Me=new lt("@ngrx/router-store Internal Configuration"),Te=new lt("@ngrx/router-store Configuration");function ai(e){return P({stateKey:oi,serializer:nt,navigationActionTiming:Et.PreActivation},e)}var ot=class{serialize(t){return{root:this.serializeRoute(t.root),url:t.url}}serializeRoute(t){let c=t.children.map(r=>this.serializeRoute(r));return{params:t.params,paramMap:t.paramMap,data:t.data,url:t.url,outlet:t.outlet,title:t.title,routeConfig:t.routeConfig?{component:t.routeConfig.component,path:t.routeConfig.path,pathMatch:t.routeConfig.pathMatch,redirectTo:t.routeConfig.redirectTo,outlet:t.routeConfig.outlet,title:t.routeConfig.title}:null,queryParams:t.queryParams,queryParamMap:t.queryParamMap,fragment:t.fragment,component:t.routeConfig?t.routeConfig.component:void 0,root:void 0,parent:void 0,firstChild:c[0],pathFromRoot:void 0,children:c}}},at=class{},S=function(e){return e[e.NONE=1]="NONE",e[e.ROUTER=2]="ROUTER",e[e.STORE=3]="STORE",e}(S||{}),xe=(()=>{let t=class t{constructor(r,i,n,d,C,u){this.store=r,this.router=i,this.serializer=n,this.errorHandler=d,this.config=C,this.activeRuntimeChecks=u,this.lastEvent=null,this.routerState=null,this.trigger=S.NONE,this.stateKey=this.config.stateKey,!Xt()&&Ht()&&(u?.strictActionSerializability||u?.strictStateSerializability)&&this.serializer instanceof ot&&console.warn("@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer."),this.setUpStoreStateListener(),this.setUpRouterEventsListener()}setUpStoreStateListener(){this.store.pipe(Wt(this.stateKey),pt(this.store)).subscribe(([r,i])=>{this.navigateIfNeeded(r,i)})}navigateIfNeeded(r,i){if(!r||!r.state||this.trigger===S.ROUTER||this.lastEvent instanceof mt)return;let n=r.state.url;si(this.router.url,n)||(this.storeState=i,this.trigger=S.STORE,this.router.navigateByUrl(n).catch(d=>{this.errorHandler.handleError(d)}))}setUpRouterEventsListener(){let r=this.config.navigationActionTiming===Et.PostActivation,i;this.router.events.pipe(pt(this.store)).subscribe(([n,d])=>{this.lastEvent=n,n instanceof mt?(this.routerState=this.serializer.serialize(this.router.routerState.snapshot),this.trigger!==S.STORE&&(this.storeState=d,this.dispatchRouterRequest(n))):n instanceof ut?(i=n,!r&&this.trigger!==S.STORE&&this.dispatchRouterNavigation(n)):n instanceof Qt?(this.dispatchRouterCancel(n),this.reset()):n instanceof dt?(this.dispatchRouterError(n),this.reset()):n instanceof Gt&&(this.trigger!==S.STORE&&(r&&this.dispatchRouterNavigation(i),this.dispatchRouterNavigated(n)),this.reset())})}dispatchRouterRequest(r){this.dispatchRouterAction(Ie,{event:r})}dispatchRouterNavigation(r){let i=this.serializer.serialize(r.state);this.dispatchRouterAction(St,{routerState:i,event:new ut(r.id,r.url,r.urlAfterRedirects,i)})}dispatchRouterCancel(r){this.dispatchRouterAction(yt,{storeState:this.storeState,event:r})}dispatchRouterError(r){this.dispatchRouterAction(_t,{storeState:this.storeState,event:new dt(r.id,r.url,`${r}`)})}dispatchRouterNavigated(r){let i=this.serializer.serialize(this.router.routerState.snapshot);this.dispatchRouterAction(Oe,{event:r,routerState:i})}dispatchRouterAction(r,i){this.trigger=S.ROUTER;try{this.store.dispatch({type:r,payload:H(P({routerState:this.routerState},i),{event:this.config.routerState===0?i.event:{id:i.event.id,url:i.event.url,urlAfterRedirects:i.event.urlAfterRedirects}})})}finally{this.trigger=S.NONE}}reset(){this.trigger=S.NONE,this.storeState=null,this.routerState=null}};t.\u0275fac=function(i){return new(i||t)(l(g),l(M),l(at),l(wt),l(Te),l(Zt))},t.\u0275prov=E({token:t,factory:t.\u0275fac});let e=t;return e})();function si(e,t){return Re(e)===Re(t)}function Re(e){return e?.length>0&&e[e.length-1]==="/"?e.substring(0,e.length-1):e}function ci(e={}){return At([{provide:Me,useValue:e},{provide:Te,useFactory:ai,deps:[Me]},{provide:at,useClass:e.serializer?e.serializer:e.routerState===0?ot:nt},{provide:Pt,multi:!0,useFactory(){return()=>Tt(xe)}},xe])}var Pe=(()=>{let t=class t{static forRoot(r={}){return{ngModule:t,providers:[ci(r)]}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=N({type:t}),t.\u0275inj=w({});let e=t;return e})();var Ae={showLoading:!1,errorMessage:""};var pi=ee(Ae,gt(b,(e,t)=>H(P({},e),{showLoading:t.status})),gt(T,(e,t)=>H(P({},e),{errorMessage:t.message})));function we(e,t){return pi(e,t)}var Ne={[Ct]:we,[ie]:pe,router:be};var Mt={production:!1,FIRBASE_API_KEY:"AIzaSyA9HEOZrRHZP026VQObeDz2PVD_GLpMV50"};var K=class{constructor(t,c,r,i){this.email=t,this.token=c,this.localId=r,this.expirationDate=i}get expireDate(){return this.expirationDate}get userToken(){return this.token}};var ke=(()=>{let t=class t{constructor(r,i){this.http=r,this.store=i}login(r,i){return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${Mt.FIRBASE_API_KEY}`,{email:r,password:i,returnSecureToken:!0})}signUp(r,i){return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${Mt.FIRBASE_API_KEY}`,{email:r,password:i,returnSecureToken:!0})}formatUser(r){let i=new Date(new Date().getTime()+ +r.expiresIn*1e3);return new K(r.email,r.idToken,r.localId,i)}getErrorMessage(r){switch(r){case"EMAIL_NOT_FOUND":return"Email Not Found";case"INVALID_PASSWORD":return"Invalid Password";case"EMAIL_EXISTS":return"Email already exists";default:return"Unknown error occured. Please try again"}}setUserInLocalStorage(r){localStorage.setItem("UserData",JSON.stringify(r)),this.runTimeoutInterval(r)}runTimeoutInterval(r){let i=new Date().getTime(),d=r.expireDate.getTime()-i;this.timeoutInterval=setTimeout(()=>{this.store.dispatch(z())},d)}getUserFromLocalStroage(){let r=localStorage.getItem("UserData");if(r){let i=JSON.parse(r),n=new Date(i.expirationDate),d=new K(i.email,i.token,i.localId,n);return this.runTimeoutInterval(d),d}return null}logout(){localStorage.removeItem("UserData"),this.timeoutInterval&&(clearTimeout(this.timeoutInterval),this.timeoutInterval=null)}};t.\u0275fac=function(i){return new(i||t)(l(X),l(g))},t.\u0275prov=E({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var De=(()=>{let t=class t{constructor(r,i,n,d){this.action$=r,this.authService=i,this.store=n,this.router=d,this.login$=U(()=>this.action$.pipe(j(se),$(C=>this.authService.login(C.email,C.password).pipe(A(u=>{this.store.dispatch(b({status:!1})),this.store.dispatch(T({message:""}));let y=this.authService.formatUser(u);return this.authService.setUserInLocalStorage(y),it({userData:y,redirect:!0})}),ct(u=>{this.store.dispatch(b({status:!1}));let y=this.authService.getErrorMessage(u.error?.error?.message);return G(T({message:y}))}))))),this.loginRedirect$=U(()=>this.action$.pipe(j(it,vt),bt(C=>{this.store.dispatch(T({message:""})),C.redirect&&this.router.navigate(["/"])})),{dispatch:!1}),this.signUp$=U(()=>this.action$.pipe(j(ce),$(C=>this.authService.signUp(C.email,C.password).pipe(A(u=>{this.store.dispatch(b({status:!1}));let y=this.authService.formatUser(u);return this.authService.setUserInLocalStorage(y),vt({userData:y,redirect:!0})}),ct(u=>{this.store.dispatch(b({status:!1}));let y=this.authService.getErrorMessage(u.error?.error?.message);return G(T({message:y}))}))))),this.autoLogin$=U(()=>this.action$.pipe(j(rt),xt(C=>{let u=this.authService.getUserFromLocalStroage();return u!=null?G(it({userData:u,redirect:!1})):""})),{dispatch:!1}),this.logout$=U(()=>this.action$.pipe(j(z),A(C=>{this.authService.logout(),this.router.navigate(["auth"])})),{dispatch:!1})}};t.\u0275fac=function(i){return new(i||t)(l(oe),l(ke),l(g),l(M))},t.\u0275prov=E({token:t,factory:t.\u0275fac});let e=t;return e})();var st=class{serialize(t){let c=t.root;for(;c.firstChild;)c=c.firstChild;let{url:r,root:{queryParams:i}}=t,{params:n}=c;return{url:r,params:n,queryParams:i}}};var Fe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=N({type:t,bootstrap:[Ee]}),t.\u0275inj=w({imports:[re,ne,Kt,ge,qt,ae.forRoot([De]),te.forRoot(Ne),Pe.forRoot({serializer:st})]});let e=t;return e})();Bt().bootstrapModule(Fe).catch(e=>console.error(e));