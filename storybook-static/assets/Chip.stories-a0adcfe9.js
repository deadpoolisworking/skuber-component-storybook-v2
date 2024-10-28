import{j as n}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{T as I}from"./index-5d3e6ce4.js";import"./index-93f6b7ae.js";const _=""+new URL("warning-f44ae74a.svg",import.meta.url).href,x=""+new URL("clearTag-78805f35.svg",import.meta.url).href,i=s=>{const{selected:a=!1,hasDelete:l=!1,hasIcon:c=!1,label:e,onChange:p,deletedTapped:d}=s,v=()=>p&&p(!a),T=()=>d&&e&&d(e);return n.jsxs("div",{className:`component-chip ${a&&"component-chip-selected"}`,onClick:v,children:[c&&n.jsx("img",{src:_,alt:""}),e&&n.jsx(I,{variant:"b1",weight:"regular",children:e}),l&&n.jsx("img",{src:x,className:"component-chip-tag",onClick:T,alt:""})]})};i.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},hasDelete:{required:!1,tsType:{name:"boolean"},description:""},hasIcon:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"selected"}],return:{name:"void"}}},description:""},deletedTapped:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string) => void",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"void"}}},description:""}}};const{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,O={title:"Components/Chip",component:i,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{selected:!1,label:"Default Chip"},parameters:{docs:{storyDescription:"기본 칩 컴포넌트"}}},t={args:{selected:!1,hasDelete:!0,label:"Has Delete Chip"},parameters:{docs:{storyDescription:"삭제 가능 칩 컴포넌트"}},render:s=>{const[{value:a},l]=j(),c=()=>{var e;l({value:!a}),(e=s.onChange)==null||e.call(s,!0)};return n.jsx(i,{...s,selected:a,onChange:c})}},o={args:{selected:!1,hasIcon:!0,label:"Has Icon Chip"},parameters:{docs:{storyDescription:"아이콘 칩 컴포넌트"}}};var m,u,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    selected: false,
    label: 'Default Chip'
  },
  parameters: {
    docs: {
      storyDescription: '기본 칩 컴포넌트'
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    selected: false,
    hasDelete: true,
    label: 'Has Delete Chip'
  },
  parameters: {
    docs: {
      storyDescription: '삭제 가능 칩 컴포넌트'
    }
  },
  render: args => {
    const [{
      value
    }, updateArgs] = useArgs();
    const handleChange = () => {
      updateArgs({
        value: !value
      });
      args.onChange?.(true);
    };
    return <Chip {...args} selected={value} onChange={handleChange} />;
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,D,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    selected: false,
    hasIcon: true,
    label: 'Has Icon Chip'
  },
  parameters: {
    docs: {
      storyDescription: '아이콘 칩 컴포넌트'
    }
  }
}`,...(b=(D=o.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const R=["Default","DeleteChip","IconChip"];export{r as Default,t as DeleteChip,o as IconChip,R as __namedExportsOrder,O as default};
