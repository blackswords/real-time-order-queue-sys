var e=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,n=(e,n)=>{for(var i in n||(n={}))s.call(n,i)&&o(e,i,n[i]);if(t)for(var i of t(n))a.call(n,i)&&o(e,i,n[i]);return e};import{u as i,o as r,r as l,a as c,c as u,b as m,p as A,d,e as p,f as h,g as v,t as P,F as E,h as f,i as g,j as R,k as C,w as S,v as T,l as _,m as b,s as y,n as O,N as w,q as D,x as k,y as x,S as j,z as q,A as I,D as L,O as N,_ as M,B as U,C as V,E as Y,G}from"./vendor.18b10b7e.js";const B={setup(){const e=i();r((()=>{let t=sessionStorage.getItem("state")||"";t&&e.replaceState(Object.assign({},e.state,JSON.parse(t))),console.log(t)}))}},F={class:"app"};let z;B.render=function(e,t,s,a,o,n){const i=l("router-view");return c(),u("div",F,[m(i)])};const K={},Q=function(e,t){if(!t||0===t.length)return e();if(void 0===z){const e=document.createElement("link").relList;z=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`./${e}`)in K)return;K[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":z,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))};const H={setup(){const e=p(),t=i(),s=h({isCollapse:!1}),a=v((()=>t.state.routers));console.log("routers: "),console.log(t.state.routers);return n({route:e,routers:a,concatPath:(e,t="")=>`${""!==e?"/"+e:"/"}${""!==t?"/"+t:""}`,changeCollapse:()=>{s.isCollapse=!s.isCollapse}},P(s))}},J=_("data-v-3d349659");A("data-v-3d349659");const W=m("div",{class:"logo"},[m("img",{src:"data:image/png;base64,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",alt:"logo",draggable:"false"})],-1),Z={class:"el-icon-d-arrow-left"},X={class:"el-icon-d-arrow-right"};d();const $=J(((e,t,s,a,o,n)=>{const i=l("el-menu-item"),r=l("el-submenu"),A=l("el-menu"),d=l("el-aside");return c(),u(d,{width:e.isCollapse?"64px":"200px"},{default:J((()=>[W,m(A,{"background-color":"#001529","text-color":"#eee","active-text-color":"#fff",router:"","unique-opened":"","default-active":a.route.path,collapse:e.isCollapse},{default:J((()=>[(c(!0),u(E,null,f(a.routers,(e=>(c(),u(E,{key:e.name},[e.hidden?C("",!0):(c(),u(E,{key:0},[e.children&&e.children.length?(c(),u(r,{key:0,index:a.concatPath(e.path)},{title:J((()=>[m("i",{class:e.meta.icon},null,2),m("span",null,g(e.meta.title),1)])),default:J((()=>[(c(!0),u(E,null,f(e.children,(t=>(c(),u(i,{key:t.name,index:a.concatPath(e.path,t.path)},{title:J((()=>[R(g(t.meta.title),1)])),default:J((()=>[m("i",{class:t.meta.icon},null,2)])),_:2},1032,["index"])))),128))])),_:2},1032,["index"])):(c(),u(i,{key:1,index:a.concatPath(e.path)},{title:J((()=>[R(g(e.meta.title),1)])),default:J((()=>[m("i",{class:e.meta.icon},null,2)])),_:2},1032,["index"]))],64))],64)))),128))])),_:1},8,["default-active","collapse"]),m("div",{class:"fold",onClick:t[1]||(t[1]=(...e)=>a.changeCollapse&&a.changeCollapse(...e))},[S(m("i",Z,null,512),[[T,!e.isCollapse]]),S(m("i",X,null,512),[[T,e.isCollapse]])])])),_:1},8,["width"])}));H.render=$,H.__scopeId="data-v-3d349659";var ee="./static/admin.3ac1228f.png";const te={setup(){const{proxy:e}=O(),t=b(),s=i(),a=h({isFullScreen:!1,avatar:"./static/admin.3ac1228f.png",screenfull:y}),o=v((()=>s.getters.getUserName)),r=v((()=>"customer"===s.getters.getRole));return n({userName:o,isCustomer:r,handleCommand:a=>{"user"===a?t.push("/user"):(e.$message.success("退出成功"),s.dispatch("clearUser"),t.replace("/login"),sessionStorage.clear(),localStorage.clear())},handleCustomer:()=>{t.push("/customer")},handleQueue:()=>{t.push("/myqueue")},handleFullScreen:()=>{y.isEnabled&&(a.isFullScreen=!a.isFullScreen,y.toggle())}},P(a))}},se=_("data-v-0b442122");A("data-v-0b442122");const ae={class:"header_left"},oe={class:"header_right"},ne={class:"user_info"},ie={class:"username"},re=R("个人中心"),le=R("退出登录");d();const ce=se(((e,t,s,a,o,n)=>{const i=l("el-tooltip"),r=l("el-avatar"),A=l("el-dropdown-item"),d=l("el-dropdown-menu"),p=l("el-dropdown"),h=l("el-header");return c(),u(h,{height:"56px"},{default:se((()=>[m("div",ae,[a.isCustomer?(c(),u(i,{key:0,content:a.isCustomer?"商家页面":""},{default:se((()=>[m("i",{class:"el-icon-back",onClick:t[1]||(t[1]=(...e)=>a.handleCustomer&&a.handleCustomer(...e))})])),_:1},8,["content"])):C("",!0),a.isCustomer?(c(),u(i,{key:1,content:a.isCustomer?"队列信息":""},{default:se((()=>[m("i",{style:{"margin-left":"15px"},class:"el-icon-place",onClick:t[2]||(t[2]=(...e)=>a.handleQueue&&a.handleQueue(...e))})])),_:1},8,["content"])):C("",!0)]),m("div",oe,[m(i,{content:e.isFullScreen?"退出全屏":"全屏"},{default:se((()=>[m("i",{class:"el-icon-full-screen",onClick:t[3]||(t[3]=(...e)=>a.handleFullScreen&&a.handleFullScreen(...e))})])),_:1},8,["content"]),m(p,{size:"medium",onCommand:a.handleCommand},{dropdown:se((()=>[m(d,null,{default:se((()=>[m(A,{icon:"el-icon-user",command:"user"},{default:se((()=>[re])),_:1}),m(A,{icon:"el-icon-switch-button",command:"logout"},{default:se((()=>[le])),_:1})])),_:1})])),default:se((()=>[m("div",ne,[m(r,{size:36,src:e.avatar},null,8,["src"]),m("span",ie,g(a.userName),1)])])),_:1},8,["onCommand"])])])),_:1})}));te.render=ce,te.__scopeId="data-v-0b442122";const ue={components:{Aside:H,Header:te},setup(){const e=i();return{isCustomer:v((()=>e.getters.getRole))}}},me=_("data-v-3a328534");A("data-v-3a328534");const Ae={class:"app_wrap"};d();const de=me(((e,t,s,a,o,n)=>{const i=l("Aside"),r=l("Header"),A=l("router-view"),d=l("el-main"),p=l("el-backtop"),h=l("el-container");return c(),u(h,{class:"layout"},{default:me((()=>["customer"!==a.isCustomer?(c(),u(i,{key:0})):C("",!0),m(h,null,{default:me((()=>[m(r),m("div",Ae,[m(d,null,{default:me((()=>[m(A)])),_:1}),m(p,{target:".app_wrap"})])])),_:1})])),_:1})}));ue.render=de,ue.__scopeId="data-v-3a328534";const pe=[{path:"customer",name:"Customer",meta:{title:"选择商家",icon:"el-icon-location",roles:["customer"]},component:()=>Q((()=>import("./index.b509b5e7.js")),["static/index.b509b5e7.js","static/index.db66d5eb.css","static/vendor.18b10b7e.js"])},{path:"queue/:mId",name:"Queue",meta:{title:"队列",icon:"el-icon-s-comment",roles:["merc314hant"]},component:()=>Q((()=>import("./Queue.2fa62218.js")),["static/Queue.2fa62218.js","static/Queue.640a9ebd.css","static/vendor.18b10b7e.js"])},{path:"myqueue",name:"MyQueue",meta:{title:"我的队列",icon:"el-icon-s-comment",roles:["customer"]},component:()=>Q((()=>import("./MyQueue.0489ddfc.js")),["static/MyQueue.0489ddfc.js","static/MyQueue.010603ba.css","static/vendor.18b10b7e.js"])},{path:"merchant",name:"MerchantMain",meta:{title:"叫号点单",icon:"el-icon-phone",roles:["merchant"]},component:()=>Q((()=>import("./Calling.0b4cda66.js")),["static/Calling.0b4cda66.js","static/Calling.1553b5a6.css","static/vendor.18b10b7e.js"])},{path:"order",name:"Order",meta:{title:"点单",icon:"el-icon-document",roles:["merchant"]},component:()=>Q((()=>import("./Order.53449ffe.js")),["static/Order.53449ffe.js","static/index.db66d5eb.css","static/vendor.18b10b7e.js"])},{path:"dish",name:"Dish",meta:{title:"查看菜品",icon:"el-icon-video-camera-solid",roles:["merchant"]},component:()=>Q((()=>import("./Dish.878a5c60.js")),["static/Dish.878a5c60.js","static/Dish.87e78be4.css","static/vendor.18b10b7e.js"])},{path:"BigData1",name:"BigData1",meta:{title:"昨日搜索词排名",icon:"el-icon-document",roles:["admin"]},component:()=>Q((()=>import("./BigData1.c7df861c.js")),["static/BigData1.c7df861c.js","static/vendor.18b10b7e.js"])},{path:"BigData2",name:"BigData2",meta:{title:"昨日用户点击排名",icon:"el-icon-document",roles:["admin"]},component:()=>Q((()=>import("./BigData2.ac880f79.js")),["static/BigData2.ac880f79.js","static/vendor.18b10b7e.js"])},{path:"BigData3",name:"BigData3",meta:{title:"昨日商家点击排行",icon:"el-icon-document",roles:["admin"]},component:()=>Q((()=>import("./BigData3.c1bbb2bf.js")),["static/BigData3.c1bbb2bf.js","static/vendor.18b10b7e.js"])},{path:"List",name:"List",meta:{title:"查看订单",icon:"el-icon-video-camera-solid",roles:["merchant"]},component:()=>Q((()=>import("./List.cddeb7c6.js")),["static/List.cddeb7c6.js","static/List.f09af609.css","static/vendor.18b10b7e.js"])},{path:"admin",name:"AdminRole",meta:{title:"角色列表",icon:"el-icon-s-custom",roles:["admin"]},component:()=>Q((()=>import("./RoleList.d7aebd62.js")),["static/RoleList.d7aebd62.js","static/RoleList.db0272af.css","static/vendor.18b10b7e.js"])},{path:"adminMerchant",name:"AdminMerchant",meta:{title:"商家列表",icon:"el-icon-s-custom",roles:["admin"]},component:()=>Q((()=>import("./Merchant.668645b4.js")),["static/Merchant.668645b4.js","static/index.db66d5eb.css","static/vendor.18b10b7e.js"])},{path:"cuisine",name:"cuisine",meta:{title:"菜系管理",icon:"el-icon-s-custom",roles:["admin"]},component:()=>Q((()=>import("./Cuisine.6d10e5f8.js")),["static/Cuisine.6d10e5f8.js","static/index.db66d5eb.css","static/vendor.18b10b7e.js"])}],he=[{path:"/login",name:"Login",meta:{title:"登录"},component:()=>Q((()=>import("./Login.f1820234.js")),["static/Login.f1820234.js","static/Login.333ed9a8.css","static/vendor.18b10b7e.js"])},{path:"/",name:"Layout",meta:{title:"Router"},component:ue,children:[...pe]}];w.configure({showSpinner:!1});const ve=D({history:k(),routes:[...he],scrollBehavior:(e,t,s)=>s||{top:0}});ve.beforeEach(((e,t,s)=>{w.start(),document.title=e.meta&&e.meta.title?e.meta.title+" - 管理应用":"管理系统";const a=sessionStorage.getItem("state")||"";if("/login"===e.path)a?s("/"):s();else{if("Login"===t.name&&!a)return s(!1),!1;if(a){if(e.meta.hasOwnProperty("")){let t=e.meta.roles||[],{role:o}=a&&JSON.parse(x(a));return t.includes(o)?s():s("/error"),!1}s()}else s("/login")}})),ve.afterEach((()=>{w.done()}));const Pe=(e,t)=>e.filter((e=>null!=e.meta.title&&(!!((e,t)=>!e.meta||!e.meta.roles||e.meta.roles.includes(t))(e,t)&&(e.children&&e.children.length&&(e.children=Pe(e.children,t)),!0)))),Ee={getUserName:e=>e.users?e.users:"",getRole:e=>e.role?e.role:""},fe={CLEAR_USER(e){e.users=null,e.routers=[],e.role=null,e.token=null},SET_USER(e,t){e.users=t},SET_ROUTES(e,t){e.routers=t},SET_TOKENS(e,t){e.token=t},SET_ROLE(e,t){e.role=t}};new j({encodingType:"aes",isCompression:!1,encryptionSecret:"vite-vue"});const ge={clearUser({commit:e}){e("CLEAR_USER")},setUser({commit:e},t){let s=JSON.parse(JSON.stringify(pe)),a=Pe(s,t.auth);e("SET_USER",t),e("SET_ROUTES",a),e("SET_ROLE",t.auth)},setToken({commit:e},t){let{token:s,uname:a,auth:o}=t;e("SET_ROUTES",Pe(JSON.parse(JSON.stringify(pe)),o)),e("SET_USER",a),e("SET_TOKENS",s),e("SET_ROLE",o)}};q({key:"store",storage:window.sessionStorage,reducer:e=>n({},e)});var Re=I({state:sessionStorage.getItem("state")?JSON.parse(sessionStorage.getItem("state")):{users:null,routers:null,token:null,role:null},getters:Ee,mutations:fe,actions:ge});const Ce=L.create({baseURL:"https://www.baidu.com",timeout:1e4});Ce.interceptors.request.use((e=>e),(e=>{Promise.reject(e)})),Ce.interceptors.response.use((e=>e),(e=>Promise.reject(e)));const Se=V(B);Se.config.globalProperties.$axios=Ce,Se.config.globalProperties.$qs=Y,Se.config.globalProperties.$oss=async(e,t,s,a)=>{let o=((e,t="",s=[],a=0)=>{if(!(e instanceof Object))return null;if(a&&e.size>=1024*a*1024)return M.warning(`上传的文件大小不能超过 ${a}M，请重新上传！`),null;let o=e.name.toLowerCase(),n=o.lastIndexOf("."),i=o.substr(n),r=s.join(".");return r&&!r.includes(i)?(M.error("上传文件类型有误，请重新上传！"),null):t+U().format("YYYY_MM/DD_HHmmss_SSS")+i})(e,t,s,a);if(!o)return null;let n=new N({region:"oss-cn-beijing",accessKeyId:"accessKeyId",accessKeySecret:"accessKeySecret",stsToken:"",bucket:"bucket"});try{let{res:t,url:s}=await n.put(o,e);return 200==t.status?(M.success("上传成功"),s):(M.error("上传失败"),null)}catch(i){return M.error("文件上传失败"),null}},Se.use(G),Se.use(ve).use(Re).mount("#app");export{ee as _,ve as r};
