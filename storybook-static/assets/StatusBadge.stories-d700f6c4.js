import{j as o}from"./jsx-runtime-6d9837fe.js";import{T}from"./index-5d3e6ce4.js";import{S as j}from"./index-fc6dbd1a.js";/* empty css              */import"./index-93f6b7ae.js";import"./index-a64fa749.js";const L=b=>{const{status:a,children:x,isLoading:y=!1}=b,B="status-badge",N=`status-badge-${a}`,v=a==="good"?"#00c02a":a==="neutral"?"#538bff":a==="bad"?"#ffa800":"rgba(255, 255, 255, 0.4)";return o.jsxs("div",{className:`${B} ${N}`,children:[o.jsx(T,{variant:"b1",weight:"regular",style:{color:v,alignSelf:"center"},children:x}),y&&o.jsx(j,{style:{width:"30px",height:"36px"}})]})},_=L;L.__docgenInfo={description:"",methods:[],displayName:"StatusBadge",props:{status:{required:!0,tsType:{name:"union",raw:"'good' | 'neutral' | 'bad' | 'etc'",elements:[{name:"literal",value:"'good'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'bad'"},{name:"literal",value:"'etc'"}]},description:""},children:{required:!1,tsType:{name:"any"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const I={title:"Components/StatusBadge",component:_,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["good","neutral","bad","etc"]},children:{control:"text"},isLoading:{control:"boolean"}}},e={args:{status:"good",children:"Good Status",isLoading:!1}},s={args:{status:"neutral",children:"Neutral Status",isLoading:!1}},t={args:{status:"bad",children:"Bad Status",isLoading:!1}},r={args:{status:"etc",children:"Loading...",isLoading:!0}};var n,d,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    status: 'good',
    children: 'Good Status',
    isLoading: false
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    status: 'neutral',
    children: 'Neutral Status',
    isLoading: false
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,p,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: 'bad',
    children: 'Bad Status',
    isLoading: false
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var S,f,h;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: 'etc',
    children: 'Loading...',
    isLoading: true
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const O=["Good","NeutralStatus","BadStatus","Loading"];export{t as BadStatus,e as Good,r as Loading,s as NeutralStatus,O as __namedExportsOrder,I as default};
