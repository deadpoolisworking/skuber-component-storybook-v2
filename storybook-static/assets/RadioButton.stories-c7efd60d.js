import{j as s}from"./jsx-runtime-6d9837fe.js";import{T as p}from"./index-5d3e6ce4.js";/* empty css              */import"./index-93f6b7ae.js";const m=""+new URL("radio_button_selected-63de47c8.svg",import.meta.url).href,g=""+new URL("radio_button_default-16e68633.svg",import.meta.url).href,c=e=>{const{title:t,isSelected:a,onChange:r,style:n}=e;return s.jsxs("div",{className:"single-radio-button-container",onClick:r,style:n,children:[s.jsx("img",{className:"single-radio-button",src:a?m:g,alt:""}),s.jsx(p,{variant:"b1",weight:"regular",children:t})]})},u=c;c.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{title:{required:!0,tsType:{name:"string"},description:""},isSelected:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"any"},description:""}}};const{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,R={title:"Components/RadioButton",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},isSelected:{control:"boolean"},onChange:{action:"clicked"},style:{control:"object"}}},o={args:{title:"Radio Button",isSelected:!1},render:e=>{const[{isSelected:t},a]=h(),r=()=>{var n;a({isSelected:!t}),(n=e.onChange)==null||n.call(e)};return s.jsx(u,{...e,isSelected:t,onChange:r})}};var i,d,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Radio Button',
    isSelected: false
  },
  render: args => {
    const [{
      isSelected
    }, updateArgs] = useArgs();
    const handleChange = () => {
      updateArgs({
        isSelected: !isSelected
      });
      args.onChange?.();
    };
    return <RadioButton {...args} isSelected={isSelected} onChange={handleChange} />;
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,R as default};
