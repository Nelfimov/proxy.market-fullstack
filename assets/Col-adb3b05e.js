import{r as h,j as B,c as m,u as C,g as N,h as j}from"./index-7f57edd0.js";function g({as:c,bsPrefix:s,className:r,...o}){s=C(s,"col");const p=N(),u=j(),e=[],f=[];return p.forEach(t=>{const n=o[t];delete o[t];let a,i,$;typeof n=="object"&&n!=null?{span:a,offset:i,order:$}=n:a=n;const l=t!==u?`-${t}`:"";a&&e.push(a===!0?`${s}${l}`:`${s}${l}-${a}`),$!=null&&f.push(`order${l}-${$}`),i!=null&&f.push(`offset${l}-${i}`)}),[{...o,className:m(r,...e,...f)},{as:c,bsPrefix:s,spans:e}]}const d=h.forwardRef((c,s)=>{const[{className:r,...o},{as:p="div",bsPrefix:u,spans:e}]=g(c);return B(p,{...o,ref:s,className:m(r,!e.length&&u)})});d.displayName="Col";const y=d;export{y as C,g as u};
