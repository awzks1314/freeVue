var e=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,t=(l,o,a)=>o in l?e(l,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[o]=a;import{x as r,a as u,t as n,e as s,f as m,h as c,i as d,k as p,l as f,q as i}from"./vendor.1cfc7906.js";var b=r({name:"Login",setup(){const e=u({ruleForm:{userName:"",code:""}});return((e,r)=>{for(var u in r||(r={}))o.call(r,u)&&t(e,u,r[u]);if(l)for(var u of l(r))a.call(r,u)&&t(e,u,r[u]);return e})({},n(e))}});const g=i(),y=g(((e,l,o,a,t,r)=>{const u=s("el-input"),n=s("el-form-item"),i=s("el-col"),b=s("el-button"),y=s("el-row"),_=s("el-form");return m(),c(_,{class:"login-content-form"},{default:g((()=>[d(n,null,{default:g((()=>[d(u,{type:"text",placeholder:e.$t("message.mobile.placeholder1"),"prefix-icon":"el-icon-user",modelValue:e.ruleForm.userName,"onUpdate:modelValue":l[1]||(l[1]=l=>e.ruleForm.userName=l),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])])),_:1}),d(n,null,{default:g((()=>[d(y,{gutter:15},{default:g((()=>[d(i,{span:16},{default:g((()=>[d(u,{type:"text",maxlength:"4",placeholder:e.$t("message.mobile.placeholder2"),"prefix-icon":"el-icon-position",modelValue:e.ruleForm.code,"onUpdate:modelValue":l[2]||(l[2]=l=>e.ruleForm.code=l),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])])),_:1}),d(i,{span:8},{default:g((()=>[d(b,null,{default:g((()=>[p(f(e.$t("message.mobile.codeText")),1)])),_:1})])),_:1})])),_:1})])),_:1}),d(n,null,{default:g((()=>[d(b,{type:"primary",class:"login-content-submit",round:""},{default:g((()=>[d("span",null,f(e.$t("message.mobile.btnText")),1)])),_:1})])),_:1})])),_:1})}));b.render=y,b.__scopeId="data-v-0753bb15";export default b;
