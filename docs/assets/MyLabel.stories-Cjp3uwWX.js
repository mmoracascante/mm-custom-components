import{j as v}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const x=({label:o,size:g="normal",allCaps:f,color:h="text-primary",fontColor:z})=>v.jsx("span",{className:`${g} ${h} label`,style:{color:z},children:f?o.toUpperCase():o});x.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:`Choose the font size
'normal' | 'h1' | 'h2' | 'h3'`,defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:`Choose the color
'text-primary' |'text-secondary' |'text-tertiary'`,defaultValue:{value:"'text-primary'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters"},fontColor:{required:!1,tsType:{name:"string"},description:"Change label color"}}};const T={title:"MyLabel",component:x,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"},fontColor:{control:"color"},color:{control:"select"}}},e={args:{label:"Basic label",size:"normal"}},a={args:{label:"All Caps label",size:"normal",allCaps:!0}},r={args:{label:"Secondary label",size:"normal",color:"text-secondary"}},l={args:{label:"Custom color label",size:"normal",fontColor:"#46dd"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Basic label',
    size: 'normal'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    size: 'normal',
    allCaps: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    size: 'normal',
    color: 'text-secondary'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,b,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom color label',
    size: 'normal',
    fontColor: '#46dd'
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const q=["Basic","AllCaps","SecondaryLabel","CustomColorLabel"];export{a as AllCaps,e as Basic,l as CustomColorLabel,r as SecondaryLabel,q as __namedExportsOrder,T as default};
