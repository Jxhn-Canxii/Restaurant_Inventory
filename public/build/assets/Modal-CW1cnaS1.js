import{r as h,s as b,l as v,o as p,C as g,b as k,i as _,d as i,w as c,g as m,D as u,f as s,n,E as f,t as B,h as C,B as E,k as S,G as M}from"./app-DO9d76PO.js";const D={class:"fixed inset-0 overflow-auto px-4 py-6 sm:px-0 z-50 min-h-full","scroll-region":""},L={class:"text-lg font-semibold text-white"},N=s("i",{class:"fa fa-times fa-xl font-bold text-white"},null,-1),T=[N],e="shadow-b-8 shadow-l-8 border-b-4 border-l-4 border-t-2 border-b-gray-300 border-l-gray-300 border-t-gray-400 shadow-2xl shadow-gray-600",j={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},title:{type:String,default:"Modal"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:w}){const r=h("bg-slate-900"),a=t,x=b(()=>({sm:"sm:max-w-sm "+e,md:"sm:max-w-md "+e,lg:"sm:max-w-lg "+e,xl:"sm:max-w-xl "+e,"2xl":"sm:max-w-2xl "+e,"4xl":"sm:max-w-4xl "+e,"6xl":"sm:max-w-6xl "+e,"8xl":"sm:max-w-8xl "+e,fullscreen:"absolute top-0 mt-0 pt-0 h-screen w-screen"})[a.maxWidth]),y=w;v(()=>a.show,()=>{a.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const o=()=>{a.closeable&&y("close")},d=l=>{l.key==="Escape"&&a.show&&o()};return p(()=>document.addEventListener("keydown",d)),g(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null}),(l,V)=>(k(),_(M,{to:"body"},[i(f,{"leave-active-class":"duration-200"},{default:c(()=>[m(s("div",D,[s("div",{class:n(["fixed inset-0 opacity-50",r.value]),onClick:o},null,2),i(f,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:c(()=>[m(s("div",{class:n(["mb-6 bg-white rounded-lg overflow-auto transform transition-all sm:w-full sm:mx-auto",x.value])},[s("div",{class:n(["flex justify-between px-3 py-2",r.value])},[s("h2",L,B(t.title),1),s("button",{class:"flex float-end p-2 items-center justify-center bg-red-500 border-white border-2 animate-pulse rounded-full mr-4 md:mr-1 w-8 h-8",onClick:C(o,["prevent"])},T)],2),t.show?E(l.$slots,"default",{key:0}):S("",!0)],2),[[u,t.show]])]),_:3})],512),[[u,t.show]])]),_:3})]))}};export{j as _};
