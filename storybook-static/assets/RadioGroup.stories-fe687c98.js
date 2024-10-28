import{j as e}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{r as j}from"./index-93f6b7ae.js";import{T}from"./index-5d3e6ce4.js";const R=w=>{const{list:s,groupName:x,displayRow:l,defaultValue:O,onClick:p,disabled:r,isSecurity:N}=w,[v,G]=j.useState(s[O||0].key);return e.jsx("div",{className:"component-radio-button-container",style:{display:l?"flex":"inline",flexDirection:"row",pointerEvents:r?"none":"auto",opacity:r?"0.5":"1"},children:s.map((o,i)=>e.jsxs("div",{className:"component-radio-button",onClick:()=>{r||(p&&p(i),G(o.key))},style:{marginLeft:l&&i!==0?"16px":"0px",marginBottom:N?"0":"17px"},children:[e.jsx("div",{className:"component-radio-button-circle",children:v===o.key&&e.jsx("div",{className:"component-radio-button-circle-selected"})}),e.jsx("div",{className:"component-radio-button-label",children:e.jsx(T,{variant:"b1",weight:"regular",children:o.label})})]},`${x}-input-${o}-${i}`))})},q=R;R.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{list:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ key: string; label: string }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ key: string; label: string }[]"},description:""},groupName:{required:!0,tsType:{name:"string"},description:""},displayRow:{required:!1,tsType:{name:"boolean"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isSecurity:{required:!1,tsType:{name:"boolean"},description:""}}};const D={title:"Components/RadioGroup",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{list:{control:"object"},groupName:{control:"text"},displayRow:{control:"boolean"},defaultValue:{control:"number"},onClick:{action:"clicked"},disabled:{control:"boolean"}}},a={args:{list:[{key:"option1",label:"Option 1"},{key:"option2",label:"Option 2"},{key:"option3",label:"Option 3"}],groupName:"defaultRadioGroup",displayRow:!1,defaultValue:0,disabled:!1}},n={args:{list:[{key:"option1",label:"Option 1"},{key:"option2",label:"Option 2"},{key:"option3",label:"Option 3"}],groupName:"rowRadioGroup",displayRow:!0,defaultValue:1,disabled:!1}},t={args:{list:[{key:"option1",label:"Option 1"},{key:"option2",label:"Option 2"}],groupName:"disabledRadioGroup",displayRow:!1,defaultValue:0,disabled:!0}};var d,u,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    list: [{
      key: 'option1',
      label: 'Option 1'
    }, {
      key: 'option2',
      label: 'Option 2'
    }, {
      key: 'option3',
      label: 'Option 3'
    }],
    groupName: 'defaultRadioGroup',
    displayRow: false,
    defaultValue: 0,
    disabled: false
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,y,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    list: [{
      key: 'option1',
      label: 'Option 1'
    }, {
      key: 'option2',
      label: 'Option 2'
    }, {
      key: 'option3',
      label: 'Option 3'
    }],
    groupName: 'rowRadioGroup',
    displayRow: true,
    defaultValue: 1,
    disabled: false
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,f,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    list: [{
      key: 'option1',
      label: 'Option 1'
    }, {
      key: 'option2',
      label: 'Option 2'
    }],
    groupName: 'disabledRadioGroup',
    displayRow: false,
    defaultValue: 0,
    disabled: true
  }
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const _=["Default","RowLayout","Disabled"];export{a as Default,t as Disabled,n as RowLayout,_ as __namedExportsOrder,D as default};
