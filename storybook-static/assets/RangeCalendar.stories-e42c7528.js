import{j as p}from"./jsx-runtime-6d9837fe.js";import{R as d}from"./index-9af33549.js";import"./index-93f6b7ae.js";/* empty css              */import"./index-d74c6a26.js";import"./index-5d3e6ce4.js";const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,_={title:"Components/RangeCalendar",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{from:{control:"date"},to:{control:"date"},onFromChange:{action:"from date changed"},onToChange:{action:"to date changed"}}},a={args:{from:new Date(2023,0,1),to:new Date(2023,11,31)},render:n=>{const[{from:g,to:c},t]=C(),h=e=>{var o;t({from:e}),(o=n.onFromChange)==null||o.call(n,e)},l=e=>{var o;t({to:e}),(o=n.onToChange)==null||o.call(n,e)};return p.jsx(d,{...n,from:g,to:c,onFromChange:h,onToChange:l})}};var r,m,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    from: new Date(2023, 0, 1),
    to: new Date(2023, 11, 31)
  },
  render: args => {
    const [{
      from,
      to
    }, updateArgs] = useArgs();
    const handleFromChange = (newFromDate: Date | null) => {
      updateArgs({
        from: newFromDate
      });
      args.onFromChange?.(newFromDate);
    };
    const handleToChange = (newToDate: Date | null) => {
      updateArgs({
        to: newToDate
      });
      args.onToChange?.(newToDate);
    };
    return <RangeCalendar {...args} from={from} to={to} onFromChange={handleFromChange} onToChange={handleToChange} />;
  }
}`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const w=["Default"];export{a as Default,w as __namedExportsOrder,_ as default};
