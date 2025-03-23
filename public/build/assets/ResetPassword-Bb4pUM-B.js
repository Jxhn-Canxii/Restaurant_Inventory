import{T as f,z as w,b as _,c as g,d as s,u as o,w as l,F as V,Z as k,f as r,n as b,e as v,h as y}from"./app-DO9d76PO.js";import{A as x}from"./ApplicationLogo-Bf19fAaG.js";import{G as P}from"./GuestLayout-BoInluA3.js";import{_ as m}from"./InputError-B4f-ilel.js";import{_ as i,a as n}from"./TextInput-BgahincY.js";import{_ as h}from"./PrimaryButton-BLzmvoG4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./NavLink-Cya126qz.js";const C={class:"mt-3"},L={class:"mt-3"},$={class:"mt-4 flex items-center justify-end"},A={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,e=f({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{e.post(route("password.update"),{onFinish:()=>e.reset("password","password_confirmation")})};return(q,a)=>{const c=w("Link");return _(),g(V,null,[s(o(k),{title:"Reset Password"}),s(P,null,{default:l(()=>[s(c,{href:"/",class:"mb-4 flex items-center justify-center"},{default:l(()=>[s(x,{class:"h-20 w-20 fill-current text-gray-500"})]),_:1}),r("form",{onSubmit:y(u,["prevent"])},[r("div",null,[s(i,{for:"email",value:"Email"}),s(n,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o(e).email,"onUpdate:modelValue":a[0]||(a[0]=t=>o(e).email=t),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),s(m,{class:"mt-2",message:o(e).errors.email},null,8,["message"])]),r("div",C,[s(i,{for:"password",value:"Password"}),s(n,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(e).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(e).password=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(m,{class:"mt-2",message:o(e).errors.password},null,8,["message"])]),r("div",L,[s(i,{for:"password_confirmation",value:"Confirm Password"}),s(n,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o(e).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(e).password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),s(m,{class:"mt-2",message:o(e).errors.password_confirmation},null,8,["message"])]),r("div",$,[s(h,{class:b(["w-full",{"opacity-25":o(e).processing}]),disabled:o(e).processing},{default:l(()=>[v(" Reset Password ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}}};export{A as default};
