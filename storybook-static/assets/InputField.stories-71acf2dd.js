import{j as t}from"./jsx-runtime-6d9837fe.js";import{a as ke,b as Be,s as H}from"./arrow_up-4ae92a10.js";/* empty css              */import{r as x}from"./index-93f6b7ae.js";import{T as f}from"./index-5d3e6ce4.js";const Oe=""+new URL("triangle_down-e1d081ca.svg",import.meta.url).href,Ue=""+new URL("triangle_up-c7dd5a4f.svg",import.meta.url).href,ve=""+new URL("superAdmin-e6b29b5d.svg",import.meta.url).href,Ce=e=>{const{type:i="default",valid:u=!0,inputText:s,disabled:r=!1,defaultValue:o,leftDecoration:a,leftTextDecoration:_,inputType:p,children:Ie,rightDecoration:$,secondRightDecoration:V,error:k=!1,errorText:we,placeholder:Ee,autoFocus:B,min:O,max:U,maxLength:be=253,category:T=[],style:Se,inputStyle:P,placeholderStyle:Ae,secondRightStyle:je,rightStyle:Fe,onChange:c,onPressEnter:v,onInvalid:C,rightDecorationTapped:Me,secondRightDecorationTapped:De}=e,[K,W]=x.useState(!1),z=x.useRef(null),[I,w]=x.useState(s&&s.length>0||o&&o.length?"focused":"unfocused"),[d,h]=x.useState(p==="number"?s||"1":o),[Y,Le]=x.useState(0),y="component-inputfield",Re=`${y}-label${a?"-left-deco":""}`,qe={color:"var(--status-danger)",marginTop:"-18px",fontSize:"var(--body-label-bold-size)",fontWeight:"400",position:"absolute",top:"57px",left:"-1px"};x.useEffect(()=>{h(s||"")},[s]),x.useEffect(()=>{r&&w("focused")},[r]);const Ne=n=>{if(/^\d{4}$/.test(n)){const l=Math.min(23,parseInt(n.slice(0,2),10)),N=Math.min(59,parseInt(n.slice(2),10));return`${String(l).padStart(2,"0")}:${String(N).padStart(2,"0")}`}return n},G=n=>n.preventDefault(),q=()=>w("focused"),E=n=>{if(p==="custom-time"){let l=n.target.value;l=l.replace(/[^0-9]/g,""),l.length>4&&(l=l.slice(0,4)),l=Ne(l),c&&c(n),h(l)}else{const l=p==="number"?Number(n.target.value)>=0?n.target.value:"0":n.target.value;c&&(i==="searchFilter"?c(n,Y):c(n)),h(l)}},b=n=>{if(p==="custom-time"&&!n.target.value){h("00:00");return}n.target.value.length>0?w("focused"):w("unfocused")},He=()=>{const n=String(Number(d)+1);h(n),c&&c({target:{value:n}})},_e=()=>{const n=String(Number(d)-1);h(n),Number(d)<0&&h("0"),c&&c({target:{value:n}})},$e=()=>W(n=>!n),Ve=n=>{Le(n),W(!1)};return t.jsx(t.Fragment,{children:i==="default"?t.jsx(t.Fragment,{children:t.jsxs("form",{ref:z,className:`${y}`,style:{...Se,border:k?"1px solid var(--status-danger)":u?"":"1px solid var(--status-danger)",marginBottom:"5px"},onSubmit:G,children:[a&&t.jsx("img",{src:a,alt:""}),_&&t.jsx(f,{variant:"b1",weight:"thin",children:_}),!r&&t.jsx("div",{className:`${Re}-${I}`,onClick:q,children:t.jsx(f,{variant:"label",weight:"regular",style:{color:"var(--text-tertiary)",padding:"0px 4px",backgroundColor:"#363636",marginTop:I==="focused"?"-2px":"",...Ae},children:Ee})}),t.jsx("input",{className:`${y}-input`,defaultValue:o,disabled:r,value:p==="number"&&Number(d)<=1?1:d,autoFocus:B||I==="focused",type:p?p==="uid"?"text":p:"text",min:p==="number"&&O?O:void 0,max:p==="number"&&U?U:void 0,onChange:n=>E&&E(n),onFocus:q,maxLength:be,onBlur:n=>b&&b(n),style:{...P,color:r&&"gray"},onInvalid:C||(()=>{}),onKeyDown:n=>{n.key==="Enter"&&v&&v(d)}}),p==="number"&&!r&&t.jsxs("div",{className:"number-spinner",children:[t.jsx("div",{className:"increment",onClick:He,children:t.jsx("img",{src:Ue,alt:"up",style:{width:"10px"}})}),t.jsx("div",{className:"decrement",onClick:_e,children:t.jsx("img",{src:Oe,alt:"down",style:{width:"10px"}})})]}),$&&t.jsx("img",{src:$,style:Fe,alt:"",className:"input-right-deco",onClick:Me}),V&&t.jsx("img",{src:V,alt:"",style:je,onClick:De}),Ie,k&&t.jsx(f,{style:qe,children:we})]})}):t.jsx(t.Fragment,{children:t.jsxs("form",{ref:z,className:`${y}`,style:{marginBottom:"5px",padding:"0px"},onSubmit:G,children:[t.jsxs("div",{className:"component-input-category",onClick:$e,children:[t.jsx(f,{variant:"b1",weight:"regular",style:{color:"var(--text-ui-text-secondary)",marginRight:"20px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:T?T[Y]:"-"}),t.jsx("img",{src:K?ke:Be,alt:""}),K&&t.jsx("div",{className:"component-input-category-wrapper",children:T&&T.length>0&&T.map((n,l)=>t.jsx("div",{className:"component-input-category-item",onClick:N=>{N.stopPropagation(),Ve(l)},children:t.jsx(f,{variant:"b1",weight:"regular",style:{color:"var(--text-ui-text-secondary)"},children:n})},l))})]}),t.jsx("div",{className:"component-input-category-divider"}),t.jsx("img",{src:H,alt:""}),t.jsx("input",{className:`${y}-input`,defaultValue:o,placeholder:"Search",disabled:r,value:d,autoFocus:B||I==="focused",type:"text",onChange:n=>E&&E(n),onFocus:q,onBlur:n=>b&&b(n),style:{...P,margin:"10px"},onInvalid:C||(()=>{}),onKeyDown:n=>{n.key==="Enter"&&v&&v(d)}})]})})})},g=Ce;Ce.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{type:{required:!1,tsType:{name:"union",raw:"'default' | 'searchFilter'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'searchFilter'"}]},description:""},inputType:{required:!1,tsType:{name:"union",raw:`| 'email'
| 'text'
| 'password'
| 'number'
| 'uid'
| 'box'
| 'custom-time'`,elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'uid'"},{name:"literal",value:"'box'"},{name:"literal",value:"'custom-time'"}]},description:""},inputText:{required:!1,tsType:{name:"string"},description:""},category:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectCategory:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""},valid:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},leftDecoration:{required:!1,tsType:{name:"string"},description:""},leftTextDecoration:{required:!1,tsType:{name:"string"},description:""},rightDecoration:{required:!1,tsType:{name:"string"},description:""},secondRightDecoration:{required:!1,tsType:{name:"string"},description:""},verifyText:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"any"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"any"},description:""},style:{required:!1,tsType:{name:"any"},description:""},inputStyle:{required:!1,tsType:{name:"any"},description:""},rightStyle:{required:!1,tsType:{name:"any"},description:""},secondRightStyle:{required:!1,tsType:{name:"any"},description:""},placeholderStyle:{required:!1,tsType:{name:"any"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>, categoryIndex?: number) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"},{type:{name:"number"},name:"categoryIndex"}],return:{name:"void"}}},description:""},onPressEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onInvalid:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FormEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLInputElement"}],raw:"FormEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},rightDecorationTapped:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  e: React.MouseEvent<HTMLImageElement, MouseEvent>,
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLImageElement, MouseEvent>",elements:[{name:"HTMLImageElement"},{name:"MouseEvent"}]},name:"e"}],return:{name:"void"}}},description:""},secondRightDecorationTapped:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  e: React.MouseEvent<HTMLImageElement, MouseEvent>,
) => void`,signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLImageElement, MouseEvent>",elements:[{name:"HTMLImageElement"},{name:"MouseEvent"}]},name:"e"}],return:{name:"void"}}},description:""}}};const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,Ge={title:"Components/InputField",component:g,parameters:{layout:"centered"},tags:["autodocs"]},S={args:{inputText:"",placeholder:"Enter text",inputType:"text",maxLength:50,disabled:!1,error:!1},render:e=>{const[{inputText:i},u]=m(),s=r=>{var a;const o=r.target.value;u({inputText:o}),(a=e.onChange)==null||a.call(e,r)};return t.jsx(g,{...e,inputText:i,onChange:s})}},A={args:{inputText:"",placeholder:"hasLeftIcon",inputType:"text",leftDecoration:ve},render:e=>{const[{inputText:i},u]=m(),s=r=>{var a;const o=r.target.value;u({inputText:o}),(a=e.onChange)==null||a.call(e,r)};return t.jsx(g,{...e,inputText:i,onChange:s})}},j={args:{inputText:"",placeholder:"hasRightIcon",inputType:"text",rightDecoration:H},render:e=>{const[{inputText:i},u]=m(),s=r=>{var a;const o=r.target.value;u({inputText:o}),(a=e.onChange)==null||a.call(e,r)};return t.jsx(g,{...e,inputText:i,onChange:s})}},F={args:{inputText:"",placeholder:"hasBothIcons",inputType:"text",leftDecoration:ve,rightDecoration:H},render:e=>{const[{inputText:i},u]=m(),s=r=>{var a;const o=r.target.value;u({inputText:o}),(a=e.onChange)==null||a.call(e,r)};return t.jsx(g,{...e,inputText:i,onChange:s})}},M={args:{inputText:"Invalid input",placeholder:"Enter text",inputType:"text",error:!0,errorText:"This is an error"},render:e=>{const[{inputText:i},u]=m(),s=r=>{var a;const o=r.target.value;u({inputText:o}),(a=e.onChange)==null||a.call(e,r)};return t.jsx(g,{...e,inputText:i,onChange:s})}},D={args:{inputText:"5",placeholder:"Enter number",inputType:"number"},render:e=>{const[{inputText:i},u]=m(),s=r=>{var a;const o=r.target.value;u({inputText:o}),(a=e.onChange)==null||a.call(e,r)};return t.jsx(g,{...e,inputText:i,onChange:s})}},L={args:{inputText:"No Data",placeholder:"Disabled InputField",inputType:"text",maxLength:50,disabled:!0,error:!1},render:e=>{const[{inputText:i},u]=m(),s=r=>{var a;const o=r.target.value;u({inputText:o}),(a=e.onChange)==null||a.call(e,r)};return t.jsx(g,{...e,inputText:i,onChange:s})}},R={args:{type:"searchFilter",inputType:"text",category:["Category0","Category1","Category2"]},render:e=>{const[{inputText:i},u]=m(),s=r=>{var a;const o=r.target.value;u({inputText:o}),(a=e.onChange)==null||a.call(e,r)};return t.jsx(g,{...e,inputText:i,onChange:s})}};var J,Q,X;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    inputText: '',
    placeholder: 'Enter text',
    inputType: 'text',
    maxLength: 50,
    disabled: false,
    error: false
  },
  render: args => {
    const [{
      inputText
    }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({
        inputText: newText
      });
      args.onChange?.(e);
    };
    return <InputField {...args} inputText={inputText} onChange={handleChange} />;
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    inputText: '',
    placeholder: 'hasLeftIcon',
    inputType: 'text',
    leftDecoration: superAdmin
  },
  render: args => {
    const [{
      inputText
    }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({
        inputText: newText
      });
      args.onChange?.(e);
    };
    return <InputField {...args} inputText={inputText} onChange={handleChange} />;
  }
}`,...(ne=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ae;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    inputText: '',
    placeholder: 'hasRightIcon',
    inputType: 'text',
    rightDecoration: searchSvg
  },
  render: args => {
    const [{
      inputText
    }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({
        inputText: newText
      });
      args.onChange?.(e);
    };
    return <InputField {...args} inputText={inputText} onChange={handleChange} />;
  }
}`,...(ae=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,ie;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    inputText: '',
    placeholder: 'hasBothIcons',
    inputType: 'text',
    leftDecoration: superAdmin,
    rightDecoration: searchSvg
  },
  render: args => {
    const [{
      inputText
    }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({
        inputText: newText
      });
      args.onChange?.(e);
    };
    return <InputField {...args} inputText={inputText} onChange={handleChange} />;
  }
}`,...(ie=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ue,le,pe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    inputText: 'Invalid input',
    placeholder: 'Enter text',
    inputType: 'text',
    error: true,
    errorText: 'This is an error'
  },
  render: args => {
    const [{
      inputText
    }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({
        inputText: newText
      });
      args.onChange?.(e);
    };
    return <InputField {...args} inputText={inputText} onChange={handleChange} />;
  }
}`,...(pe=(le=M.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,de,ge;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    inputText: '5',
    placeholder: 'Enter number',
    inputType: 'number'
  },
  render: args => {
    const [{
      inputText
    }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({
        inputText: newText
      });
      args.onChange?.(e);
    };
    return <InputField {...args} inputText={inputText} onChange={handleChange} />;
  }
}`,...(ge=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var me,he,xe;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    inputText: 'No Data',
    placeholder: 'Disabled InputField',
    inputType: 'text',
    maxLength: 50,
    disabled: true,
    error: false
  },
  render: args => {
    const [{
      inputText
    }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({
        inputText: newText
      });
      args.onChange?.(e);
    };
    return <InputField {...args} inputText={inputText} onChange={handleChange} />;
  }
}`,...(xe=(he=L.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Te,ye,fe;R.parameters={...R.parameters,docs:{...(Te=R.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    type: 'searchFilter',
    inputType: 'text',
    category: ['Category0', 'Category1', 'Category2']
  },
  render: args => {
    const [{
      inputText
    }, updateArgs] = useArgs();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;
      updateArgs({
        inputText: newText
      });
      args.onChange?.(e);
    };
    return <InputField {...args} inputText={inputText} onChange={handleChange} />;
  }
}`,...(fe=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};const Je=["Default","hasLeftIcon","hasRightIcon","hasBothIcons","Error","InputNumber","Disabled","SearchFilter"];export{S as Default,L as Disabled,M as Error,D as InputNumber,R as SearchFilter,Je as __namedExportsOrder,Ge as default,F as hasBothIcons,A as hasLeftIcon,j as hasRightIcon};
