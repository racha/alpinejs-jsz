var l=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var x=Object.prototype.hasOwnProperty;var L=(t,e)=>{for(var a in e)l(t,a,{get:e[a],enumerable:!0})},M=(t,e,a,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of s(e))!x.call(t,n)&&n!==a&&l(t,n,{get:()=>e[n],enumerable:!(c=T(e,n))||c.enumerable});return t};var g=t=>M(l({},"__esModule",{value:!0}),t);var v={};L(v,{default:()=>H});module.exports=g(v);function u(t){t.directive("jsz",(e,a,{evaluate:c,effect:n})=>{let d=r=>{let i=document.createElement("textarea");return i.innerHTML=r,i.value},f=new RegExp("{{([^{}]*)}}","g"),E=r=>{var i;return(i=r.match(f))==null||i.map(p=>{r=r.replace(p,c(d(p.replace(f,"$1")))||"")}),r||""},o=e,m=e.innerHTML;e.tagName==="TEMPLATE"&&(o=e.content.firstElementChild.cloneNode(),m=e.content.firstElementChild.innerHTML,e.after(o)),n(()=>{o.innerHTML=E(m)})})}var H=u;0&&(module.exports={});
