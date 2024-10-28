import{j as r}from"./jsx-runtime-6d9837fe.js";/* empty css              */import"./index-93f6b7ae.js";const C=""+new URL("default_start-b865a2f2.svg",import.meta.url).href,y=""+new URL("star_selected-4885714e.svg",import.meta.url).href,v=e=>{const{type:a,value:t,onChange:s}=e,n="component-toggle-container",c="component-toggle-toggle";return r.jsx(r.Fragment,{children:a==="switch"?r.jsx("div",{className:`${n} ${n}-${t?"on":"off"}`,style:{cursor:"pointer"},onClick:s,children:r.jsx("div",{className:`${c} ${c}-${t?"on":"off"}`})}):r.jsx("img",{width:20,height:20,src:t?y:C,onClick:s,alt:"",style:{cursor:"pointer"}})})},u=v;v.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{type:{required:!0,tsType:{name:"union",raw:"'switch' | 'favorite'",elements:[{name:"literal",value:"'switch'"},{name:"literal",value:"'favorite'"}]},description:""},value:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{useArgs:f}=__STORYBOOK_MODULE_PREVIEW_API__,x={title:"Components/Toggle",component:u,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{value:!1,type:"switch"},render:e=>{const[{value:a},t]=f(),s=()=>{var n;t({value:!a}),(n=e.onChange)==null||n.call(e)};return r.jsx(u,{...e,value:a,onChange:s})}},l={args:{value:!1,type:"favorite"},render:e=>{const[{value:a},t]=f(),s=()=>{var n;t({value:!a}),(n=e.onChange)==null||n.call(e)};return r.jsx(u,{...e,value:a,onChange:s})}};var g,i,d;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: false,
    type: 'switch'
  },
  render: args => {
    const [{
      value
    }, updateArgs] = useArgs();
    const handleChange = () => {
      updateArgs({
        value: !value
      });
      args.onChange?.();
    };
    return <Toggle {...args} value={value} onChange={handleChange} />;
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: false,
    type: 'favorite'
  },
  render: args => {
    const [{
      value
    }, updateArgs] = useArgs();
    const handleChange = () => {
      updateArgs({
        value: !value
      });
      args.onChange?.();
    };
    return <Toggle {...args} value={value} onChange={handleChange} />;
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const A=["Default","Favorite"];export{o as Default,l as Favorite,A as __namedExportsOrder,x as default};
