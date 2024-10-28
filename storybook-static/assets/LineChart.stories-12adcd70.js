import{j as e}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{T as a}from"./index-5d3e6ce4.js";import{S as f}from"./index-fc6dbd1a.js";import{R as j,A as w,a as p}from"./AreaChart-61802830.js";import"./index-93f6b7ae.js";import"./index-a64fa749.js";import"./_baseAssignValue-44140415.js";import"./debounce-74277521.js";import"./tiny-invariant-dd7d57d2.js";const u=y=>{const{chartName:x,titles:r,values:i,data:t,width:m=360,height:o=64,loading:C,style:b}=y;return e.jsxs("div",{className:"line-chart-container",style:{...b},children:[e.jsx(a,{variant:"label",weight:"medium",style:{color:"rgba(255, 255, 255, 0.4)"},children:x}),e.jsxs("div",{className:"line-chart-title-container",children:[e.jsxs("div",{className:"line-chart-title-wrapper",children:[e.jsx("div",{className:"line-chart-title-line"}),e.jsx(a,{variant:"label",weight:"medium",style:{color:"rgba(255, 255, 255, 0.4)",marginRight:"8px"},children:r&&r[0]}),e.jsx(a,{variant:"b1",weight:"regular",style:{color:"rgba(255, 255, 255, 0.9)"},children:t&&t.length<2?0:i[0]})]}),e.jsxs("div",{className:"line-chart-title-wrapper",children:[e.jsx("div",{className:"line-chart-title-line",style:{borderTop:"2px solid #538BFF"}}),e.jsx(a,{variant:"label",weight:"medium",style:{color:"rgba(255, 255, 255, 0.4)",marginRight:"8px"},children:r&&r[1]}),e.jsx(a,{variant:"b1",weight:"regular",style:{color:"rgba(255, 255, 255, 0.9)"},children:t&&t.length<2?0:i[1]})]})]}),e.jsx("div",{className:"line-chart-body",style:{width:m,height:o},children:C?e.jsx(f,{style:{width:"40px",height:"40px"}}):e.jsx(j,{children:e.jsxs(w,{width:m,height:o,data:t,margin:{top:20,right:0,left:0,bottom:1},children:[e.jsx(p,{isAnimationActive:!1,type:"natural",dataKey:"v1",stroke:"#538BFF",fillOpacity:1,fill:"rgba(83, 139, 255, 0.2)"}),e.jsx(p,{isAnimationActive:!1,type:"natural",dataKey:"v2",stroke:"rgba(255, 255, 255, 0.7)",fillOpacity:1,fill:"rgba(255, 255, 255, 0.08)"})]})})})]})};u.__docgenInfo={description:"",methods:[],displayName:"CustomLineChart",props:{chartName:{required:!0,tsType:{name:"string"},description:""},titles:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},values:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"v1v2ChartForm"}],raw:"v1v2ChartForm[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const O={title:"Components/Charts/CustomLineChart",component:u,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{chartName:"Sample Chart",data:[{timestamp:0,v1:6,v2:4},{timestamp:10,v1:6,v2:5},{timestamp:20,v1:6,v2:4},{timestamp:30,v1:7,v2:5},{timestamp:40,v1:7,v2:6},{timestamp:50,v1:7,v2:5},{timestamp:60,v1:8,v2:6},{timestamp:70,v1:8,v2:7},{timestamp:80,v1:8,v2:6},{timestamp:90,v1:8,v2:5},{timestamp:100,v1:7,v2:6},{timestamp:110,v1:7,v2:5},{timestamp:120,v1:7,v2:4},{timestamp:130,v1:7,v2:5},{timestamp:140,v1:6,v2:4}],values:[0,1],width:360,height:64},parameters:{docs:{storyDescription:"-"}}},s={args:{chartName:"Loading Chart",data:[],loading:!0},parameters:{docs:{storyDescription:"-"}}};var l,c,v;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    chartName: 'Sample Chart',
    data: [{
      timestamp: 0,
      v1: 6,
      v2: 4
    }, {
      timestamp: 10,
      v1: 6,
      v2: 5
    }, {
      timestamp: 20,
      v1: 6,
      v2: 4
    }, {
      timestamp: 30,
      v1: 7,
      v2: 5
    }, {
      timestamp: 40,
      v1: 7,
      v2: 6
    }, {
      timestamp: 50,
      v1: 7,
      v2: 5
    }, {
      timestamp: 60,
      v1: 8,
      v2: 6
    }, {
      timestamp: 70,
      v1: 8,
      v2: 7
    }, {
      timestamp: 80,
      v1: 8,
      v2: 6
    }, {
      timestamp: 90,
      v1: 8,
      v2: 5
    }, {
      timestamp: 100,
      v1: 7,
      v2: 6
    }, {
      timestamp: 110,
      v1: 7,
      v2: 5
    }, {
      timestamp: 120,
      v1: 7,
      v2: 4
    }, {
      timestamp: 130,
      v1: 7,
      v2: 5
    }, {
      timestamp: 140,
      v1: 6,
      v2: 4
    }],
    values: [0, 1],
    width: 360,
    height: 64
  },
  parameters: {
    docs: {
      storyDescription: '-'
    }
  }
}`,...(v=(c=n.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var d,h,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    chartName: 'Loading Chart',
    data: [],
    loading: true
  },
  parameters: {
    docs: {
      storyDescription: '-'
    }
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const k=["Default","LoadingChart"];export{n as Default,s as LoadingChart,k as __namedExportsOrder,O as default};
