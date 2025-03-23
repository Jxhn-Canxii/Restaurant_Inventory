import{T as y,b as d,c as n,d as t,u as e,w as r,F as x,Z as b,f as o,t as v,k as V,h as m,n as u,A as k,e as c}from"./app-DO9d76PO.js";import{A as L}from"./ApplicationLogo-Bf19fAaG.js";import{G as C}from"./GuestLayout-BoInluA3.js";import{_ as p}from"./InputError-B4f-ilel.js";import{_ as f,a as _}from"./TextInput-BgahincY.js";import{_ as N}from"./PrimaryButton-BLzmvoG4.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./NavLink-Cya126qz.js";const $={class:"flex justify-center items-center min-h-screen px-4 py-8"},j={class:"w-full max-w-md bg-white p-6 rounded-lg shadow-md"},B={class:"flex justify-center"},F={key:0,class:"mb-4 text-sm font-medium text-green-600"},S={class:"mt-3"},q={class:"relative flex w-full"},E={class:"mt-4 flex justify-end"},G={class:"mt-6"},I={__name:"Login",props:{status:String},setup(i){const s=y({email:"",password:"",show:!1}),w=()=>{s.post(route("login"),{onFinish:()=>{s.reset("password")}})},g=()=>{s.show=!s.show};return(h,a)=>(d(),n(x,null,[t(e(b),{title:"Login"}),t(C,null,{default:r(()=>[o("div",$,[o("div",j,[o("div",B,[t(L,{class:"h-16 w-16 text-gray-500"})]),i.status?(d(),n("div",F,v(i.status),1)):V("",!0),o("form",{onSubmit:m(w,["prevent"])},[o("div",null,[t(f,{for:"email",value:"Email"}),t(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=l=>e(s).email=l),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(p,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),o("div",S,[t(f,{for:"password",value:"Password"}),o("div",q,[t(_,{id:"password",type:e(s).show?"text":"password",class:"block w-full py-2 pr-10 shadow border-3 border-solid border-gray-200 rounded-l",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=l=>e(s).password=l),required:"",placeholder:"Input password",autocomplete:"current-password"},null,8,["type","modelValue"]),o("button",{onClick:m(g,["prevent"]),type:"button",class:"absolute font-extrabold text-rose-500 inset-y-0 right-0 px-4 rounded-r shadow"},[o("i",{class:u(e(s).show?"fa fa-eye":"fa fa-eye-slash")},null,2)])]),t(p,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),o("div",E,[t(e(k),{href:h.route("register"),class:"text-sm text-gray-600 underline hover:text-gray-900"},{default:r(()=>[c(" No Account? Click here to register ")]),_:1},8,["href"])]),o("div",G,[t(N,{class:u(["w-full",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[c(" Log in ")]),_:1},8,["class","disabled"])])],32)])])]),_:1})],64))}},J=A(I,[["__scopeId","data-v-7002a135"]]);export{J as default};
