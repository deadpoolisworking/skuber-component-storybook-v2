import{j as k}from"./jsx-runtime-6d9837fe.js";import{C as t}from"./index-2bfacdd1.js";import"./index-93f6b7ae.js";/* empty css              */const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,E={title:"Components/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:{type:"boolean"}},onChange:{action:"checked state changed"}}},h={args:{checked:!0,label:"Checked Checkbox"},render:e=>{const[{checked:a},r]=C(),o=n=>{var c;r({checked:n}),(c=e.onChange)==null||c.call(e,n)};return k.jsx(t,{...e,checked:a,onChange:o})}},s={args:{checked:!1,label:"Unchecked Checkbox"},render:e=>{const[{checked:a},r]=C(),o=n=>{var c;r({checked:n}),(c=e.onChange)==null||c.call(e,n)};return k.jsx(t,{...e,checked:a,onChange:o})}},d={args:{checked:!1},render:e=>{const[{checked:a},r]=C(),o=n=>{var c;r({checked:n}),(c=e.onChange)==null||c.call(e,n)};return k.jsx(t,{...e,checked:a,onChange:o})}};var g,u,l;h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Checked Checkbox'
  },
  render: args => {
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleChange = (newChecked: boolean) => {
      updateArgs({
        checked: newChecked
      });
      args.onChange?.(newChecked);
    };
    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
  }
}`,...(l=(u=h.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,m,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Unchecked Checkbox'
  },
  render: args => {
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleChange = (newChecked: boolean) => {
      updateArgs({
        checked: newChecked
      });
      args.onChange?.(newChecked);
    };
    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,i,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    checked: false
  },
  render: args => {
    const [{
      checked
    }, updateArgs] = useArgs();
    const handleChange = (newChecked: boolean) => {
      updateArgs({
        checked: newChecked
      });
      args.onChange?.(newChecked);
    };
    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
  }
}`,...(A=(i=d.parameters)==null?void 0:i.docs)==null?void 0:A.source}}};const O=["Checked","Unchecked","WithoutLabel"];export{h as Checked,s as Unchecked,d as WithoutLabel,O as __namedExportsOrder,E as default};
