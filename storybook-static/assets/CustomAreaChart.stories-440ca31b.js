import{j as t}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{T as l}from"./index-5d3e6ce4.js";import{S as F}from"./index-fc6dbd1a.js";import{R as d,A as c,a as h}from"./AreaChart-61802830.js";import"./index-93f6b7ae.js";import"./index-a64fa749.js";import"./_baseAssignValue-44140415.js";import"./debounce-74277521.js";import"./tiny-invariant-dd7d57d2.js";const v=360,g=64,A=T=>{const{style:b,mode:n="light",title:m,subTitle:r,data:i,width:e=170,height:o=48,loading:p}=T,w=[{timestamp:0,v1:0},{timestamp:0,v1:0},{timestamp:0,v1:0}],D=[{timestamp:0,v2:0},{timestamp:0,v2:0},{timestamp:0,v2:0}];return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"custom-area-chart-container",style:b,children:[m&&t.jsx(l,{variant:"label",weight:"medium",style:{color:"rgba(255, 255, 255, 0.4)"},children:m}),r&&t.jsx("div",{className:"custom-area-chart-title-container",children:t.jsx(l,{variant:"b1",weight:"regular",style:{color:"rgba(255, 255, 255, 0.9)"},children:p?"-":r||0})}),t.jsx("div",{className:"custom-area-chart-body",style:{width:e?`${e}px`:"140px",height:o?`${o}px`:"64px"},children:p?t.jsx("div",{style:{display:"flex",width:e?`${e}px`:"140px",height:"100%"},children:t.jsx(F,{style:{width:"40px",height:"40px"}})}):i&&i.length>1?t.jsx(d,{children:t.jsx(c,{width:v,height:g,data:i,margin:{top:20,right:0,left:0,bottom:1},children:n==="light"?t.jsxs(t.Fragment,{children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"v1",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"5%",stopColor:"#FDA701",stopOpacity:.9}),t.jsx("stop",{offset:"95%",stopColor:"#00C02A",stopOpacity:11})]})}),t.jsx(h,{type:"natural",isAnimationActive:!1,dataKey:"v1",stroke:"rgba(255, 255, 255, 0.4)",strokeWidth:2,fillOpacity:1,fill:"url(#v1)"})]}):t.jsxs(t.Fragment,{children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"v2",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"5%",stopColor:"#EB4E87",stopOpacity:.9}),t.jsx("stop",{offset:"95%",stopColor:"#125AED",stopOpacity:11})]})}),t.jsx(h,{type:"natural",isAnimationActive:!1,dataKey:"v2",stroke:"rgba(255, 255, 255, 0.4)",strokeWidth:2,fillOpacity:1,fill:"url(#v2)"})]})})}):t.jsx(d,{children:t.jsx(c,{width:v,height:g,data:n==="light"?w:D,margin:{top:20,right:0,left:0,bottom:1}})})})]})})};A.__docgenInfo={description:"",methods:[],displayName:"CustomAreaChart",props:{mode:{required:!0,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},data:{required:!0,tsType:{name:"union",raw:"v1ChartForm[] | v2ChartForm[]",elements:[{name:"Array",elements:[{name:"v1ChartForm"}],raw:"v1ChartForm[]"},{name:"Array",elements:[{name:"v2ChartForm"}],raw:"v2ChartForm[]"}]},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const G={title:"Components/Charts/CustomAreaChart",component:A,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{mode:"light",title:"Sample Chart",data:[{timestamp:0,v1:6},{timestamp:10,v1:6},{timestamp:20,v1:6},{timestamp:30,v1:7},{timestamp:40,v1:7},{timestamp:50,v1:7},{timestamp:60,v1:8},{timestamp:70,v1:8},{timestamp:80,v1:8},{timestamp:90,v1:8},{timestamp:100,v1:7},{timestamp:110,v1:7},{timestamp:120,v1:7},{timestamp:130,v1:7},{timestamp:140,v1:6}],loading:!1},parameters:{docs:{storyDescription:"-"}}},s={args:{mode:"light",title:"Loading Chart",data:[],loading:!0},parameters:{docs:{storyDescription:"-"}}};var u,y,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    mode: 'light',
    title: 'Sample Chart',
    data: [{
      timestamp: 0,
      v1: 6
    }, {
      timestamp: 10,
      v1: 6
    }, {
      timestamp: 20,
      v1: 6
    }, {
      timestamp: 30,
      v1: 7
    }, {
      timestamp: 40,
      v1: 7
    }, {
      timestamp: 50,
      v1: 7
    }, {
      timestamp: 60,
      v1: 8
    }, {
      timestamp: 70,
      v1: 8
    }, {
      timestamp: 80,
      v1: 8
    }, {
      timestamp: 90,
      v1: 8
    }, {
      timestamp: 100,
      v1: 7
    }, {
      timestamp: 110,
      v1: 7
    }, {
      timestamp: 120,
      v1: 7
    }, {
      timestamp: 130,
      v1: 7
    }, {
      timestamp: 140,
      v1: 6
    }],
    loading: false
  },
  parameters: {
    docs: {
      storyDescription: '-'
    }
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,C,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    mode: 'light',
    title: 'Loading Chart',
    data: [],
    loading: true
  },
  parameters: {
    docs: {
      storyDescription: '-'
    }
  }
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const I=["Default","LoadingChart"];export{a as Default,s as LoadingChart,I as __namedExportsOrder,G as default};
