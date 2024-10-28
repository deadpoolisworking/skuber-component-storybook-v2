import{j as e}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{a as ie,b as ce,s as le}from"./arrow_up-4ae92a10.js";import{r as o}from"./index-93f6b7ae.js";import{T as d}from"./index-5d3e6ce4.js";const pe=""+new URL("hamburger-ec560c9c.svg",import.meta.url).href,de=""+new URL("check_white-d468c6a7.svg",import.meta.url).href,Q=V=>{const{title:T,size:y="small",type:s="default",search:X,searchPlaceHolder:Y="",disabledText:S,helperText:C="",disabled:c=!1,isError:D=!1,options:a=[],onSelect:N,style:Z}=V,[n,O]=o.useState(!1),[l,ee]=o.useState(""),w=o.useRef(null),i="component-dropdown",te=`dropdown-${y}`,re=c?"dropdown-disabled":"",j=`${i}-item`,[v,se]=o.useState(0),[m,E]=o.useState(a);o.useEffect(()=>{l?ae():E(a)},[l]),o.useEffect(()=>{const t=r=>{w.current&&!w.current.contains(r.target)&&O(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const ne=t=>{let r;O(!1),l?r=a.findIndex(p=>p===m[t]):r=t,se(r),N&&N(r)},oe=()=>!c&&O(!n),$=t=>ee(t),ae=()=>{const t=l.toLowerCase(),r=a.filter(p=>p.toLowerCase().includes(t));E(r)};return e.jsxs("div",{className:"component-dropdown-wrapper",style:Z,children:[e.jsxs("div",{className:`${i} ${s==="default"&&te} ${s==="default"&&re}`,style:{borderWidth:s==="context"?"0px":"1px",borderRadius:s==="context"?"12px":"8px",borderColor:s==="default"&&D?"#EB4136":n?"#125aed":"",backgroundColor:n?"transparent":""},ref:w,children:[e.jsx("div",{className:`${j}`,onClick:oe,children:s==="context"?e.jsx("div",{className:`${j}-button-decoration`,children:e.jsx("img",{src:pe,alt:""})}):e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"b1",weight:"regular",style:{color:c?"rgba(255, 255, 255, 0.2)":"var(--text-ui-text-secondary)",marginRight:"20px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:c&&S||a[v]}),e.jsx("img",{className:`${j}-triangle`,src:n?ie:ce,alt:"",style:{marginRight:"8px"}})]})}),T&&e.jsx(d,{variant:"label",weight:"regular",style:{display:"flex",position:"absolute",top:"-8px",left:"8px",paddingLeft:"4px",paddingRight:"4px",backgroundColor:"rgb(38,41,53)",color:"rgba(255, 255, 255, 0.4)"},children:T}),n&&e.jsxs("div",{className:`${i}-list`,style:{top:y==="small"?"40px":"48px",minWidth:s==="context"?"100px":"100%"},children:[X&&e.jsx("div",{className:"dropdown-search-container-wrapper",children:e.jsxs("div",{className:"dropdown-search-container",children:[e.jsx("img",{src:le,style:{marginLeft:"4px"},alt:""}),e.jsx("input",{type:"text",placeholder:Y,value:l,onChange:t=>$&&$(t.target.value),style:{width:"100%",marginLeft:"-4px",color:"rgba(255, 255, 255, 0.40))",fontSize:"14px",fontWeight:"400",padding:"4px",backgroundColor:"transparent",borderRadius:"0px",borderWidth:"0px",outline:"none"}})]})}),e.jsx("div",{className:`${i}-list-wrapper`,children:m&&m.length>0?m.map((t,r)=>e.jsxs("div",{className:`${i}-list-item`,onClick:p=>{p.stopPropagation(),ne(r)},children:[e.jsx(d,{variant:"b1",weight:"regular",style:{color:"var(--text-ui-text-secondary)"},children:t}),r===v&&e.jsx("img",{className:"dropdown-check-icon",src:de,alt:""})]},`${i}-list-item-${t}__${r}`)):e.jsx("div",{style:{width:"100%",height:"20px",marginBottom:"8px",alignContent:"center",paddingLeft:"12px"},children:e.jsx(d,{variant:"b1",weight:"regular",style:{paddingBottom:"4px",color:"var(--text-ui-text-secondary)"},children:"No Data"})})})]})]}),s==="default"&&!n&&C&&e.jsx(d,{variant:"label",weight:"regular",style:{position:"absolute",top:y==="small"?"36px":"44px",color:n?"#538BFF":D?"red":c?"rgba(255, 255, 255, 0.2)":"var(--text-ui-text-secondary)",whiteSpace:"nowrap",marginLeft:"4px",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:C})]})};Q.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{title:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},type:{required:!1,tsType:{name:"union",raw:"'default' | 'context'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'context'"}]},description:""},search:{required:!1,tsType:{name:"boolean"},description:""},searchPlaceHolder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},disabledText:{required:!1,tsType:{name:"string"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},style:{required:!1,tsType:{name:"any"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const be={title:"Components/Dropdown",component:Q,parameters:{layout:"centered"},tags:["autodocs"]},u={args:{size:"small",helperText:"Helper Text",options:["Object1","Object2","Object3"]},parameters:{docs:{storyDescription:"작은 사이즈 드롭다운입니다."}}},x={args:{size:"medium",helperText:"Helper Text",options:["Object1","Object2","Object3"]},parameters:{docs:{storyDescription:"중간 사이즈 드롭다운입니다."}}},g={args:{size:"small",helperText:"Option is empty",options:["Object1","Object2","Object3"],disabled:!0,disabledText:"None"},parameters:{docs:{storyDescription:"비활성화된 드롭다운입니다."}}},h={args:{size:"small",helperText:"Something goes wrong.",options:["Object1","Object2","Object3"],isError:!0},parameters:{docs:{storyDescription:"에러상태 드롭다운입니다."}}},b={args:{type:"context",options:["Option1","Option2","Option3"]},parameters:{docs:{storyDescription:"컨텍스트메뉴 전용 드롭다운입니다."}}},f={args:{type:"default",options:["Option1","Option2","Option3"],search:!0,searchPlaceHolder:"Choose the option you want."},parameters:{docs:{storyDescription:"컨텍스트메뉴 검색 전용 드롭다운입니다."}}};var q,z,I;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'small',
    helperText: 'Helper Text',
    options: ['Object1', 'Object2', 'Object3']
  },
  parameters: {
    docs: {
      storyDescription: '작은 사이즈 드롭다운입니다.'
    }
  }
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var L,k,R;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    helperText: 'Helper Text',
    options: ['Object1', 'Object2', 'Object3']
  },
  parameters: {
    docs: {
      storyDescription: '중간 사이즈 드롭다운입니다.'
    }
  }
}`,...(R=(k=x.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var H,M,W;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'small',
    helperText: 'Option is empty',
    options: ['Object1', 'Object2', 'Object3'],
    disabled: true,
    disabledText: 'None'
  },
  parameters: {
    docs: {
      storyDescription: '비활성화된 드롭다운입니다.'
    }
  }
}`,...(W=(M=g.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var _,P,B;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small',
    helperText: 'Something goes wrong.',
    options: ['Object1', 'Object2', 'Object3'],
    isError: true
  },
  parameters: {
    docs: {
      storyDescription: '에러상태 드롭다운입니다.'
    }
  }
}`,...(B=(P=h.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var F,U,A;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'context',
    options: ['Option1', 'Option2', 'Option3']
  },
  parameters: {
    docs: {
      storyDescription: '컨텍스트메뉴 전용 드롭다운입니다.'
    }
  }
}`,...(A=(U=b.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'default',
    options: ['Option1', 'Option2', 'Option3'],
    search: true,
    searchPlaceHolder: 'Choose the option you want.'
  },
  parameters: {
    docs: {
      storyDescription: '컨텍스트메뉴 검색 전용 드롭다운입니다.'
    }
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const fe=["Small","Medium","Disabled","Error","ContextMenu","ContextMenuSearch"];export{b as ContextMenu,f as ContextMenuSearch,g as Disabled,h as Error,x as Medium,u as Small,fe as __namedExportsOrder,be as default};
