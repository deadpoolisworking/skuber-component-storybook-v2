import{j as s}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{T as c}from"./index-5d3e6ce4.js";import"./index-93f6b7ae.js";const n=i=>{const{value:r,style:d}=i;return s.jsxs("div",{className:"horizontal-bar-container",style:d,children:[s.jsx("div",{className:"horizontal-bar-progress",children:s.jsx("div",{style:{width:`${r>=100?240:240*(r/100)}px`,height:"16px",backgroundColor:r>50?"var(--status-ui-status-warning)":"var(--status-good-lightgreen)",borderRadius:"4px"}})}),s.jsx("div",{children:s.jsxs(c,{style:{color:r>50?"var(--status-ui-status-warning)":"var(--status-good-lightgreen)"},children:[r.toFixed(2),"%"]})})]})};n.__docgenInfo={description:"",methods:[],displayName:"HorizontalBar",props:{value:{required:!0,tsType:{name:"number"},description:""},style:{required:!1,tsType:{name:"any"},description:""}}};const g={title:"Components/Charts/HorizontalBar",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{value:30},parameters:{docs:{storyDescription:"-"}}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: 30
  },
  parameters: {
    docs: {
      storyDescription: '-'
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,g as default};
