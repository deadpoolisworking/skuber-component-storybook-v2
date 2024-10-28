import{j as e}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{T as f}from"./index-5d3e6ce4.js";import"./index-93f6b7ae.js";const h=""+new URL("infoWhite-69dd88df.svg",import.meta.url).href,H=""+new URL("modal_close_button-eb48231b.svg",import.meta.url).href,c=m=>{const{leftDecoration:o,children:p,style:u,title:g,onClose:y}=m;return e.jsxs("div",{className:"modal-header",style:u,children:[e.jsxs("div",{className:"modal-header-left-container",children:[o&&e.jsx("img",{width:20,height:20,src:o,alt:""}),e.jsx(f,{variant:"s1",weight:"bold",children:g})]}),e.jsxs("div",{className:"modal-header-right-container",children:[p,e.jsx("img",{className:"modal-close-icon",src:H,onClick:y,alt:""})]})]})};c.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"any"},description:""},leftDecoration:{required:!1,tsType:{name:"any"},description:""},style:{required:!1,tsType:{name:"any"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const j={title:"Components/ModalHeader",component:c,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{title:"Modal Sample Header",style:{backgroundColor:"rgba(0, 0, 0, 0.1)"}},parameters:{docs:{storyDescription:"기본 Modal Header 입니다."}}},a={args:{title:"Modal Sample Header",leftDecoration:h,style:{backgroundColor:"rgba(0, 0, 0, 0.1)"}},parameters:{docs:{storyDescription:"Icon이 들어간 Modal Header 입니다."}}};var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    title: 'Modal Sample Header',
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  parameters: {
    docs: {
      storyDescription: '기본 Modal Header 입니다.'
    }
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Modal Sample Header',
    leftDecoration: infoWhite,
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  parameters: {
    docs: {
      storyDescription: 'Icon이 들어간 Modal Header 입니다.'
    }
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const v=["Default","IconHeader"];export{r as Default,a as IconHeader,v as __namedExportsOrder,j as default};
