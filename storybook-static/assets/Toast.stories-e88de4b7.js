import{j as t}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{c as T}from"./closeIcon-fd09bb3d.js";import{T as f}from"./index-5d3e6ce4.js";import"./index-93f6b7ae.js";const i=e=>{const{type:s="default",label:a,children:o,deleteTapped:r}=e,m="component-toast",u=()=>r&&r(!0);return t.jsxs("div",{className:`${m} `,children:[t.jsx(f,{variant:"b1",weight:"medium",children:a}),s==="action"&&o&&t.jsx(t.Fragment,{children:o}),t.jsx("img",{src:T,className:"component-toast-delete",alt:"",onClick:u})]})},c=i;i.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{type:{required:!0,tsType:{name:"union",raw:"'default' | 'action'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'action'"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"any"},description:""},deleteTapped:{required:!1,tsType:{name:"signature",type:"function",raw:"(tapped: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"tapped"}],return:{name:"void"}}},description:""}}};const j={title:"Components/Toast",component:c,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{type:"default",label:"Toast Sample Text"},render:e=>{const s=()=>{var a;return(a=e.deleteTapped)==null?void 0:a.call(e,!0)};return t.jsx(c,{...e,label:e.label,deleteTapped:s})}};var l,d,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'default',
    label: 'Toast Sample Text'
  },
  render: args => {
    const handleChange = () => args.deleteTapped?.(true);
    return <Toast {...args} label={args.label} deleteTapped={handleChange} />;
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Default"];export{n as Default,v as __namedExportsOrder,j as default};
