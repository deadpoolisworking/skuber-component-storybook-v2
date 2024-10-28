import{j as D}from"./jsx-runtime-6d9837fe.js";import{I as u}from"./index-e0c8114f.js";import"./index-93f6b7ae.js";/* empty css              */const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,y={title:"Components/InputDate",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{date:{control:"date"},readOnly:{control:"boolean"},onChange:{action:"changed"}}},t={args:{date:new Date,readOnly:!1},render:e=>{const[{date:o},s]=C(),d=n=>{var a;s({date:n}),(a=e.onChange)==null||a.call(e,n)};return D.jsx(u,{...e,date:o,onChange:d})}},r={args:{date:new Date,readOnly:!0},render:e=>{const[{date:o},s]=C(),d=n=>{var a;s({date:n}),(a=e.onChange)==null||a.call(e,n)};return D.jsx(u,{...e,date:o,onChange:d})}};var c,p,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    date: new Date(),
    readOnly: false
  },
  render: args => {
    const [{
      date
    }, updateArgs] = useArgs();
    const handleChange = (newDate: Date | null) => {
      updateArgs({
        date: newDate
      });
      args.onChange?.(newDate);
    };
    return <InputDate {...args} date={date} onChange={handleChange} />;
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var l,h,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    date: new Date(),
    readOnly: true
  },
  render: args => {
    const [{
      date
    }, updateArgs] = useArgs();
    const handleChange = (newDate: Date | null) => {
      updateArgs({
        date: newDate
      });
      args.onChange?.(newDate);
    };
    return <InputDate {...args} date={date} onChange={handleChange} />;
  }
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const w=["Default","ReadOnly"];export{t as Default,r as ReadOnly,w as __namedExportsOrder,y as default};
