import{j as t}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{r as E}from"./index-93f6b7ae.js";import{T as R}from"./index-5d3e6ce4.js";const F=e=>{const{style:s,inputStyle:o,inputText:l,maxLength:a,disabled:r,defaultValue:d,leftDecoration:c,type:V,placeholderStyle:_,children:j,rightDecoration:T,placeholder:M,autoFocus:H,onChange:h,onPressEnter:x,onInvalid:f}=e,I=n=>{n.preventDefault()},[y,p]=E.useState(d&&d.toString().length>0?"focused":"unfocused"),[$,v]=E.useState(""),m="component-textarea",N=`${m}-label${c?"-left-deco":""}`,O=n=>{h&&h(n),v(n.target.value)},C=()=>{p("focused")},P=n=>{n.target.value.length>0?p("focused"):p("unfocused")};return t.jsxs("form",{className:`${m}`,style:s,onSubmit:I,children:[c&&t.jsx("img",{src:c,alt:""}),t.jsx("div",{className:`${N}-${y}`,onClick:C,children:t.jsx(R,{variant:"label",weight:"regular",style:{color:"var(--text-tertiary)",..._},children:M})}),t.jsx("textarea",{className:`${m}-input`,maxLength:a,defaultValue:d,disabled:r,value:l,rows:10,autoFocus:H||y==="focused",onChange:O,onFocus:C,onBlur:P,style:o,onInvalid:f||(()=>{}),onKeyDown:n=>{if(n.key==="Enter"&&x)return n.currentTarget.value="",x($),v("")}}),T&&t.jsx("img",{src:T,alt:""}),j]})},g=F;F.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{style:{required:!1,tsType:{name:"any"},description:""},inputStyle:{required:!1,tsType:{name:"any"},description:""},inputText:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"any"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},placeholderStyle:{required:!1,tsType:{name:"any"},description:""},leftDecoration:{required:!1,tsType:{name:"string"},description:""},rightDecoration:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'email' | 'text' | 'password' | 'number'",elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"}]},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:""},onPressEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onInvalid:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FormEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"FormEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:""}}};const{useArgs:S}=__STORYBOOK_MODULE_PREVIEW_API__,W={title:"Components/TextArea",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{inputText:{control:"text"},placeholder:{control:"text"},maxLength:{control:"number"},disabled:{control:"boolean"},onChange:{action:"changed"},onPressEnter:{action:"pressed"},autoFocus:{control:"boolean"}}},i={args:{placeholder:"Enter your text...",maxLength:200,inputText:"",autoFocus:!1},render:e=>{const[{inputText:s},o]=S(),l=a=>{var r;o({inputText:a.target.value}),(r=e.onChange)==null||r.call(e,a)};return t.jsx(g,{...e,inputText:s,onChange:l})}},u={args:{placeholder:"Disabled TextArea",disabled:!0},render:e=>{const[{inputText:s},o]=S(),l=a=>{var r;o({inputText:a.target.value}),(r=e.onChange)==null||r.call(e,a)};return t.jsx(g,{...e,inputText:s,onChange:l})}};var A,b,q;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your text...',
    maxLength: 200,
    inputText: '',
    autoFocus: false
  },
  render: args => {
    const [{
      inputText
    }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateArgs({
        inputText: e.target.value
      });
      args.onChange?.(e);
    };
    return <TextArea {...args} inputText={inputText} onChange={handleChange} />;
  }
}`,...(q=(b=i.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var L,w,D;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled TextArea',
    disabled: true
  },
  render: args => {
    const [{
      inputText
    }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      updateArgs({
        inputText: e.target.value
      });
      args.onChange?.(e);
    };
    return <TextArea {...args} inputText={inputText} onChange={handleChange} />;
  }
}`,...(D=(w=u.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const Y=["Default","Disabled"];export{i as Default,u as Disabled,Y as __namedExportsOrder,W as default};
