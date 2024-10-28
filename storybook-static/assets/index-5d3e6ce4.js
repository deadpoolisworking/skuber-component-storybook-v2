import{j as c}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{r as y}from"./index-93f6b7ae.js";const i=y.forwardRef((r,s)=>{const{variant:a,weight:l,style:t,ellipsis:o,children:m,onClick:p}=r,e="component-typography",n=`${e}-${a===void 0?"s1":a}`,d=`${n}-${l===void 0?"bold":l}`,u=`${e}-${o===void 0?"non-ellipsis":"ellipsis"}`;return c.jsx("div",{className:`${e} ${n} ${d} ${u}`,style:{...t},onClick:p,ref:s,children:m})}),g=i;i.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 's1'
| 'b1'
| 'b2'
| 'label'
| 'link'
| 'link-lowercase'
| 'code'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'s1'"},{name:"literal",value:"'b1'"},{name:"literal",value:"'b2'"},{name:"literal",value:"'label'"},{name:"literal",value:"'link'"},{name:"literal",value:"'link-lowercase'"},{name:"literal",value:"'code'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'semi-bold' | 'medium' | 'regular' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'semi-bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'thin'"}]},description:""},ellipsis:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"any"},description:""},children:{required:!1,tsType:{name:"any"},description:""},link:{required:!1,tsType:{name:"string"},description:""},dangerouslySetInnerHTML:{required:!1,tsType:{name:"any"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{g as T};
