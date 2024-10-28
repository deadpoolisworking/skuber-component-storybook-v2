import{j as h}from"./jsx-runtime-6d9837fe.js";import{I as i}from"./index-4ba621df.js";import"./index-93f6b7ae.js";/* empty css              */const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,y={title:"Components/InputTime",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{time:{control:"date"},readOnly:{control:"boolean"},onChange:{action:"changed"}}},a={args:{time:new Date,readOnly:!1},render:e=>{const[{time:o},s]=C(),m=n=>{var t;s({time:n}),(t=e.onChange)==null||t.call(e,n)};return h.jsx(i,{...e,time:o,onChange:m})}},r={args:{time:new Date,readOnly:!0},render:e=>{const[{time:o},s]=C(),m=n=>{var t;s({time:n}),(t=e.onChange)==null||t.call(e,n)};return h.jsx(i,{...e,time:o,onChange:m})}};var d,u,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    time: new Date(),
    readOnly: false
  },
  render: args => {
    const [{
      time
    }, updateArgs] = useArgs();
    const handleChange = (newTime: Date | null) => {
      updateArgs({
        time: newTime
      });
      args.onChange?.(newTime);
    };
    return <InputTime {...args} time={time} onChange={handleChange} />;
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,g,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    time: new Date(),
    readOnly: true
  },
  render: args => {
    const [{
      time
    }, updateArgs] = useArgs();
    const handleChange = (newTime: Date | null) => {
      updateArgs({
        time: newTime
      });
      args.onChange?.(newTime);
    };
    return <InputTime {...args} time={time} onChange={handleChange} />;
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const D=["Default","ReadOnly"];export{a as Default,r as ReadOnly,D as __namedExportsOrder,y as default};
