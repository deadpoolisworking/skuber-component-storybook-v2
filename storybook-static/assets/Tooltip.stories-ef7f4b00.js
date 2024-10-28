import{j as d}from"./jsx-runtime-6d9837fe.js";/* empty css              */import"./index-93f6b7ae.js";const s=a=>{const{style:p,position:o,children:r,marginX:c,marginY:l}=a;return d.jsx("div",{className:"tooltip-container",style:{transform:`translate(${o.x-c}px, ${o.y-l}px)`,...p},children:r||"test"})},m=s;s.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{style:{required:!1,tsType:{name:"any"},description:""},children:{required:!1,tsType:{name:"any"},description:""},position:{required:!1,tsType:{name:"any"},description:""},marginX:{required:!0,tsType:{name:"number"},description:""},marginY:{required:!0,tsType:{name:"number"},description:""}}};const x={title:"Components/Tooltip",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{style:{control:"object"},marginX:{control:"number"},marginY:{control:"number"},position:{control:"object"},children:{control:"text"}}},e={args:{position:{x:0,y:0},marginX:0,marginY:0,children:"This is a tooltip",style:{backgroundColor:"black",color:"white",padding:"10px",borderRadius:"4px"}}};var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    position: {
      x: 0,
      y: 0
    },
    marginX: 0,
    marginY: 0,
    children: 'This is a tooltip',
    style: {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px',
      borderRadius: '4px'
    }
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,x as default};
