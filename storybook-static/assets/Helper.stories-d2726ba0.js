import{j as e}from"./jsx-runtime-6d9837fe.js";import{r}from"./index-93f6b7ae.js";import{E as B}from"./index-88b1c1ff.js";/* empty css              */const P=({type:t="center",children:q,title:c,style:E,titleStyle:N,content:d,contentIcon:l})=>{const[u,m]=r.useState(!1),[y,R]=r.useState({x:0,y:0}),s=r.useRef(null);r.useEffect(()=>{if(s.current){const p=s.current.getBoundingClientRect();R({x:p.left+p.width/2,y:p.bottom+10})}},[u,s]);const w=()=>m(!0),S=()=>m(!1),_=e.jsx("div",{style:{display:"flex",flexDirection:l?"row":"column",justifyContent:"center"},children:u&&d&&e.jsxs("div",{className:`fixed-helper ${t}`,style:{left:y.x,top:y.y},children:[t==="left"?e.jsx("div",{className:"fixed-helper-triangle-left"}):e.jsx("div",{className:"fixed-helper-triangle-center"}),c&&e.jsx("div",{style:{marginBottom:"10px",...N},children:c}),d,l&&e.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:["(",e.jsx("img",{width:16,height:16,src:l,alt:"",style:{marginTop:"1px"}}),")"]})]})});return e.jsxs("div",{onMouseEnter:w,onMouseLeave:S,style:{display:"inline-block",position:"relative",...E},children:[e.jsx("div",{ref:s,children:q}),B.createPortal(_,document.body)]})},a=P;P.__docgenInfo={description:"",methods:[],displayName:"Helper",props:{type:{required:!1,tsType:{name:"union",raw:"'center' | 'left'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},content:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},parentPosition:{required:!1,tsType:{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},description:""},title:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"any"},description:""},titleStyle:{required:!1,tsType:{name:"any"},description:""},contentIcon:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Components/Helper",component:a,parameters:{layout:"centered",controls:{exclude:["children"]}},tags:["autodocs"],argTypes:{type:{control:!1,options:["left","center"]},content:{control:"text"},title:{control:"text"},style:{control:"object"},titleStyle:{control:"object"},parentPosition:{control:"object"},children:{control:!1}}},n={args:{type:"center",content:"Butto2211n name"},render:t=>e.jsx(a,{...t,children:e.jsx("button",{children:"Helper"})})},o={args:{type:"left",title:"Title",content:"This is a message inside a HelpPopover. This is a message inside a HelpPopover. This is a message inside a HelpPopover."},render:t=>e.jsx(a,{...t,children:e.jsx("button",{children:"?"})})},i={args:{type:"left",content:"This is a message inside a HelpPopover. This is a message inside a HelpPopover. This is a message inside a HelpPopover."},render:t=>e.jsx(a,{...t,children:e.jsx("button",{children:"?"})})};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'center',
    content: 'Butto2211n name'
  },
  render: (args: any) => <Helper {...args}>
      <button>Helper</button>
    </Helper>
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,v,H;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'left',
    title: 'Title',
    content: 'This is a message inside a HelpPopover. This is a message inside a HelpPopover. This is a message inside a HelpPopover.'
  },
  render: (args: any) => <Helper {...args}>
      <button>?</button>
    </Helper>
}`,...(H=(v=o.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var T,j,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'left',
    content: 'This is a message inside a HelpPopover. This is a message inside a HelpPopover. This is a message inside a HelpPopover.'
  },
  render: (args: any) => <Helper {...args}>
      <button>?</button>
    </Helper>
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const $=["Default","helpPopover","helpPopoverNoTitle"];export{n as Default,$ as __namedExportsOrder,L as default,o as helpPopover,i as helpPopoverNoTitle};
