import{j as e}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{r as _}from"./index-93f6b7ae.js";import{B as s}from"./index-f3c3644e.js";import{C as z}from"./index-2bfacdd1.js";import{S as E}from"./index-fc6dbd1a.js";import{T as R}from"./index-5d3e6ce4.js";import"./index-a64fa749.js";const O=v=>{const{loading:a,hideOption:j,hideOptionText:l,leftButtonTitle:c,cancelButtonTitle:d,confirmButtonTitle:p,isConfirmButtonDisabled:q,style:w,onClose:F,onConfirm:M,onClickLeftButton:S}=v,[i,N]=_.useState(!1),u=()=>N(!i),L=()=>M(i);return e.jsxs("div",{className:"modal-footer",style:{...w},children:[e.jsxs("div",{className:"modal-footer-left-container",children:[c&&e.jsx(s,{size:"medium",variant:"outlined",style:{width:"60px",height:"32px",opacity:"1",cursor:"pointer"},onClick:S,children:c}),j&&e.jsxs("div",{className:"modal-footer-hide-container",onClick:u,children:[e.jsx(z,{checked:i,onChange:u}),e.jsx(R,{variant:"b1",weight:"regular",style:{color:"rgba(255, 255, 255, 0.9)",marginLeft:"4px"},children:l===""?"Do not show again":l})]})]}),e.jsxs("div",{className:"modal-footer-right-container",children:[d&&e.jsx(s,{size:"medium",variant:"outlined",style:{width:"60px",height:"32px",cursor:"pointer"},onClick:F,children:d}),p&&e.jsx(s,{className:"button",size:"medium",variant:"contained",onClick:L,disabled:a||q,children:a?e.jsx(E,{style:{width:"40px",height:"40px",paddingTop:"4px"}}):p})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{loading:{required:!1,tsType:{name:"boolean"},description:""},hideOption:{required:!1,tsType:{name:"boolean"},description:""},hideOptionText:{required:!1,tsType:{name:"string"},description:""},leftButtonTitle:{required:!1,tsType:{name:"string"},description:""},cancelButtonTitle:{required:!1,tsType:{name:"string"},description:""},confirmButtonTitle:{required:!1,tsType:{name:"string"},description:""},isConfirmButtonDisabled:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"option"}],return:{name:"void"}}},description:""},onClickLeftButton:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const U={title:"Components/ModalFooter",component:O,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{leftButtonTitle:"이전",cancelButtonTitle:"취소",confirmButtonTitle:"완료",isConfirmButtonDisabled:!1,hideOption:!1,style:{backgroundColor:"rgba(0, 0, 0, 0.1)"}},parameters:{docs:{storyDescription:"기본 Modal Footer 입니다."}}},o={args:{leftButtonTitle:"이전",cancelButtonTitle:"취소",confirmButtonTitle:"완료",isConfirmButtonDisabled:!0,style:{backgroundColor:"rgba(0, 0, 0, 0.1)"}},parameters:{docs:{storyDescription:"완료 버튼이 대기중인 Modal Footer 입니다."}}},n={args:{leftButtonTitle:"이전",cancelButtonTitle:"취소",confirmButtonTitle:"완료",loading:!0,style:{backgroundColor:"rgba(0, 0, 0, 0.1)"}},parameters:{docs:{storyDescription:"완료 버튼이 대기중인 Modal Footer 입니다."}}},r={args:{hideOption:!0,hideOptionText:"Do not show again",cancelButtonTitle:"취소",confirmButtonTitle:"완료",style:{backgroundColor:"rgba(0, 0, 0, 0.1)"}},parameters:{docs:{storyDescription:"Check Option이 활성화된 Modal Footer 입니다."}}};var m,g,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    leftButtonTitle: '이전',
    cancelButtonTitle: '취소',
    confirmButtonTitle: '완료',
    isConfirmButtonDisabled: false,
    hideOption: false,
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  parameters: {
    docs: {
      storyDescription: '기본 Modal Footer 입니다.'
    }
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var T,y,h;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    leftButtonTitle: '이전',
    cancelButtonTitle: '취소',
    confirmButtonTitle: '완료',
    isConfirmButtonDisabled: true,
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  parameters: {
    docs: {
      storyDescription: '완료 버튼이 대기중인 Modal Footer 입니다.'
    }
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var B,C,b;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    leftButtonTitle: '이전',
    cancelButtonTitle: '취소',
    confirmButtonTitle: '완료',
    loading: true,
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  parameters: {
    docs: {
      storyDescription: '완료 버튼이 대기중인 Modal Footer 입니다.'
    }
  }
}`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var x,k,D;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    hideOption: true,
    hideOptionText: 'Do not show again',
    cancelButtonTitle: '취소',
    confirmButtonTitle: '완료',
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },
  parameters: {
    docs: {
      storyDescription: 'Check Option이 활성화된 Modal Footer 입니다.'
    }
  }
}`,...(D=(k=r.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const V=["Default","Disabled","Loading","CheckOption"];export{r as CheckOption,t as Default,o as Disabled,n as Loading,V as __namedExportsOrder,U as default};
