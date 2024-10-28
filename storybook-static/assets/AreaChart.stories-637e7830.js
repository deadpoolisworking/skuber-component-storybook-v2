import{j as i}from"./jsx-runtime-6d9837fe.js";import{T as M}from"./index-5d3e6ce4.js";/* empty css              */import"./index-93f6b7ae.js";const $=j=>{const{dataPoints:d,capacity:P,unit:T="",fill:y,width:l=140,height:o=36,style:q}=j,v=()=>([...d].sort((e,n)=>e.y-n.y),d.map((e,n)=>({x:n*10,y:o-e.y/o*100}))),L=(a,t)=>{const e=t.x-a.x,n=t.y-a.y,s=Math.sqrt(e*e+n*n),r=Math.atan2(n,e);return{length:s,angle:r}},m=(a,t,e,n)=>{const s=a||t,r=e||t,p=.25,c=L(s,r),u=c.angle+(n?Math.PI:0),g=c.length*p;return{x:t.x+Math.cos(u)*g,y:t.y+Math.sin(u)*g}},S=()=>{const t=v().map((n,s,r)=>{if(s===0)return`M 0,${n.y}`;const p=m(r[s-2],r[s-1],n),c=m(r[s-1],n,r[s+1],!0);return`C${p.x},${p.y} ${c.x},${c.y} ${n.x},${n.y}`});t.push(`L${l},${o} L0,${o}z`);const e=t.join(" ");return i.jsx("path",{d:e,fill:y||"var(--status-good-lightgreen)",stroke:y||"var(--status-good-lightgreen)",strokeWidth:1,strokeLinejoin:"round"})};return i.jsxs("div",{className:"component-area-chart",style:{...q},children:[i.jsxs("svg",{className:"component-area-chart-container",rx:8,ry:8,width:l,height:o,children:[i.jsx("rect",{className:"component-area-chart-background",x:0,y:0,width:l,height:o}),S()]}),i.jsx(M,{variant:"label",weight:"regular",style:{color:"var(--text-tertiary)"},children:`${P}${T}`})]})};$.__docgenInfo={description:"",methods:[],displayName:"AreaChart",props:{dataPoints:{required:!0,tsType:{name:"Array",elements:[{name:"Coord"}],raw:"Coord[]"},description:""},capacity:{required:!1,tsType:{name:"string"},description:""},unit:{required:!1,tsType:{name:"string"},description:""},fill:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const N={title:"Components/Charts/AreaChart",component:$,parameters:{layout:"centered"},tags:["autodocs"]},x={args:{dataPoints:[{x:0,y:4},{x:10,y:4},{x:20,y:5},{x:30,y:6},{x:40,y:6},{x:50,y:7},{x:60,y:8},{x:70,y:8},{x:80,y:8},{x:90,y:7},{x:100,y:7},{x:110,y:6},{x:120,y:6},{x:130,y:5},{x:140,y:4}],capacity:"200",unit:"GB"},parameters:{docs:{storyDescription:"-"}}};var h,f,C;x.parameters={...x.parameters,docs:{...(h=x.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    dataPoints: [{
      x: 0,
      y: 4
    }, {
      x: 10,
      y: 4
    }, {
      x: 20,
      y: 5
    }, {
      x: 30,
      y: 6
    }, {
      x: 40,
      y: 6
    }, {
      x: 50,
      y: 7
    }, {
      x: 60,
      y: 8
    }, {
      x: 70,
      y: 8
    }, {
      x: 80,
      y: 8
    }, {
      x: 90,
      y: 7
    }, {
      x: 100,
      y: 7
    }, {
      x: 110,
      y: 6
    }, {
      x: 120,
      y: 6
    }, {
      x: 130,
      y: 5
    }, {
      x: 140,
      y: 4
    }],
    capacity: '200',
    unit: 'GB'
  },
  parameters: {
    docs: {
      storyDescription: '-'
    }
  }
}`,...(C=(f=x.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const _=["Default"];export{x as Default,_ as __namedExportsOrder,N as default};
