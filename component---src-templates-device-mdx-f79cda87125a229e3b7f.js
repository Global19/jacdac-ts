(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{MyTZ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return _})),n.d(t,"default",(function(){return B}));var a=n("8o2o"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),o=n("9Dj+"),s=n("4+mf"),m=n("ZF4C"),u=n("XsSY"),l=n("cgyF"),d=n("tRbT"),p=n("TD2k"),f=n("6aaX"),v=n("dfam"),g=n("JrkS"),h=n("R/WZ"),b=n("ZBNC"),y=n("kKAo"),j=n("Ulw+"),w=n("48zx"),O=n("t8Zj"),k=n("eNf+");function S(e,t){return("dtmi:jacdac:"+Object(O.a)(e).map((function(e){return"string"==typeof e?e:"x"+e.toString(16)})).map((function(e){return e.replace(/(-|_)/g,"")})).join(":")+";"+(void 0!==t?t:1)).toLowerCase()}function E(e,t){return S([e.classIdentifier,t.name])}function x(e){return{"@type":"Object",fields:e}}function N(e){return{"@type":"Array",elementSchema:e}}function C(e,t,n){var a=t.fields.map((function(n){return function(e,t,n){var a;if("bool"==n.type)a="boolean";else if(n.isFloat)a="float";else if(n.isSimpleType)/^(u|i)/.test(n.type)?a="integer":"B"===n.type&&(a="string");else if("string"===n.type||"string0"==n.type)a="string";else if(n.shift&&/^(u|i)/.test(n.type))a="float";else{var r=e.enums[n.type];r&&(a=E(e,r))}return a||console.warn("unknown field type "+n.type,n),{name:"_"==n.name?t.name:n.name,type:a}}(e,t,n)}));if(a.length){if(1===a.length&&!t.fields[0].startRepeats)return a[0].type;var r=a.map((function(e){return{name:e.name,schema:e.type}})),i=t.fields.findIndex((function(e){return e.startRepeats}));if(i<0)return x(r);if(n){if(0==i)return N(x(r));var c=r.slice(0,i),o=r.slice(i);return x([].concat(Object(O.a)(c),[{name:"repeat",schema:N(o.length>1?x(o):o[0])}]))}console.warn("arrays not supported in "+e.shortName+"."+t.name)}}function T(e,t){var n={"@type":{const:"Property",rw:"Property",ro:"Property",event:"Telemetry"}[t.kind]||"Unsupported"+t.kind,name:t.name,"@id":S([e.classIdentifier,t.kind,t.name]),description:t.description};switch(t.kind){case"report":case"command":return;case"const":case"rw":case"ro":case"event":var a=function(e){if(1===e.fields.length){var t=e.fields[0];if(t.unit){var n={"m/s2":{semantic:"Acceleration",unit:"metrePerSecondSquared"},rad:{semantic:"Angle",unit:"radian"},"rad/s":{semantic:"AngularVelocity",unit:"radianPerSecond"},"rad/s2":{semantic:"AngularAcceleration",unit:"radianPerSecondSquared"},m:{semantic:"Length",unit:"metre"},m2:{semantic:"Area",unit:"squareMetre"},s:{semantic:"TimeSpan",unit:"second"},ms:{semantic:"TimeSpan",unit:"millisecond"},us:{semantic:"TimeSpan",unit:"microsecond"},K:{semantic:"Temperature",unit:"kelvin"},C:{semantic:"Temperature",unit:"degreeCelsius"},F:{semantic:"Temperature",unit:"degreeFahrenheit"},g:{semantic:"Acceleration",unit:"gForce"},mA:{semantic:"Current",unit:"milliampere"},uA:{semantic:"Current",unit:"microampere"},A:{semantic:"Current",unit:"ampere"},mV:{semantic:"Voltage",unit:"millivolt"},uV:{semantic:"Voltage",unit:"microvolt"},V:{semantic:"Voltage",unit:"volt"}}[t.unit];if(n)return n;["#","/"].indexOf(t.unit)>-1||console.warn("unsupported unit "+t.unit)}}}(t);a&&(n.unit=a.unit),n.schema=C(e,t,!1),"rw"===t.kind&&(n.writable=!0),n.schema||"event"!==t.kind?a&&a.semantic&&(n["@type"]=[n["@type"],a.semantic]):(n["@type"]=[n["@type"],"Event"],n.schema=S([e.classIdentifier,"event"]));break;default:console.log("unknown packet kind "+t.kind)}if(n.schema)return n;console.log("unknown schema for "+e.name+"."+t.name)}function A(e){return e=e.trim().replace(/[^a-zA-Z0-9_]/g,"_"),/^[a-zA-Z]/.test(e)||(e="a"+e),e.slice(0,64)}function V(e){return e.slice(0,64)}function D(e){var t={"@type":"Interface","@id":I(e),displayName:V(e.name),description:e.notes.short,contents:e.packets.filter((function(e){return!e.derived})).map((function(t){return T(e,t)})).filter((function(e){return!!e}))},n=e.packets.find((function(e){return"event"===e.kind})),a=Object.keys(e.enums).length;return(n||a)&&(t.schemas=[],n&&t.schemas.push({"@id":S([e.classIdentifier,"event"]),"@type":"Object",fields:[{name:"count",schema:"integer"}]}),a&&(t.schemas=t.schemas.concat(Object.keys(e.enums).map((function(t){return function(e,t){return{"@type":"Enum","@id":E(e,t),valueSchema:"integer",enumValues:Object.keys(t.members).map((function(e){return{name:A(e),displayName:e,enumValue:t.members[e]}}))}}(e,e.enums[t])}))))),t["@context"]="dtmi:dtdl:context;2",t}function I(e){return S([e.classIdentifier])}function F(e){return S([e.id])}function M(e,t){var n=e.services.map((function(e){return Object(m.y)(e)})),a=Object(k.R)(n,(function(e){return e.classIdentifier.toString()}),(function(e){return e})).map((function(e){return D(e)})),r={"@type":"Interface","@id":F(e),displayName:V(e.name),description:e.description,contents:n.map((function(e,t){return function(e,t){return{"@type":"Component",name:A(e.shortName),displayName:V(e.name),schema:I(e)}}(e)})),"@context":"dtmi:dtdl:context;2"};return(null==t?void 0:t.services)?[r].concat(Object(O.a)(a)):r}function J(e){var t=e.dev,n=Object(r.useMemo)((function(){return JSON.stringify(M(t,{services:!0}),null,2)}),[t]);return i.a.createElement(w.a,{value:n,mode:"json",download:t.name+".json"})}var Z=Object(h.a)((function(e){return Object(b.a)({root:{flexGrow:1,backgroundColor:e.palette.background.paper,marginBottom:e.spacing(1)},pre:{margin:"0",padding:"0",backgroundColor:"transparent",whiteSpec:"pre-wrap"}})}));function L(e){var t=e.deviceSpecification,n=e.showMarkdown,a=e.showSpecification,c=e.showDTDL,o=e.showJSON,s=Z(),u=Object(r.useState)(0),l=u[0],d=u[1],p=t,f=0;return i.a.createElement("div",{className:s.root},i.a.createElement(y.a,{square:!0},i.a.createElement(v.a,{value:l,onChange:function(e,t){d(t)},"aria-label":"View specification formats"},[n&&"Markdown",a&&"Specification",n&&"JSON",c&&"DTDL"].filter((function(e){return!!e})).map((function(e,t){return i.a.createElement(g.a,Object.assign({key:e,label:e},Object(j.a)(t)))}))),n&&i.a.createElement(j.b,{value:l,index:f++},i.a.createElement(w.a,{value:t.source||Object(m.f)(t),mode:"markdown",download:(p.name||"device")+".md"})),a&&i.a.createElement(j.b,{key:"spec",value:l,index:f++},i.a.createElement(R,{device:p})),o&&i.a.createElement(j.b,{key:"convjson",value:l,index:f++},i.a.createElement(w.a,{value:JSON.stringify(p,null,2),mode:"json"})),c&&i.a.createElement(j.b,{key:"dtdl",value:l,index:f++},i.a.createElement(J,{dev:t}))))}var P=n("0VGZ");function R(e){var t=e.device,n=e.showSource,a=Object(p.a)();return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{key:"title"},i.a.createElement(s.Link,{to:t.link},t.name)),t.image&&i.a.createElement("img",{alt:"image of the device",src:"https://raw.githubusercontent.com/microsoft/jacdac/main/devices/"+t.image}),t.description&&i.a.createElement(f.a,{source:t.description}),t.repo&&i.a.createElement(P.a,{slug:t.repo}),!!t.firmwares.length&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Firmware identifiers"),i.a.createElement("ul",null,t.firmwares.map((function(e){return i.a.createElement("li",{key:e},i.a.createElement(u.a,{id:e,filter:"fw:0x"+e.toString(16)}))})))),i.a.createElement("h3",null,"Services"),i.a.createElement(d.a,{container:!0,spacing:2},t.services.map((function(e){return Object(m.y)(e)})).map((function(e){return i.a.createElement(d.a,Object.assign({item:!0,key:e.shortId},a),i.a.createElement(l.a,{specification:e}))}))),n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Specification"),i.a.createElement(L,{deviceSpecification:t,showMarkdown:!0,showJSON:!0,showDTDL:!0})))}var _={},q={_frontmatter:_},z=o.f;function B(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.mdx)(z,Object.assign({},q,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)(R,{device:Object(m.e)(n.pageContext.node.id),showSource:!0,mdxType:"DeviceSpecification"}),Object(c.mdx)("h2",{id:"see-also",style:{position:"relative"}},Object(c.mdx)("a",Object.assign({parentName:"h2"},{href:"#see-also","aria-label":"see also permalink",className:"anchor before"}),Object(c.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(c.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"See Also"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object.assign({parentName:"li"},{href:"/jacdac-ts/reference/module-definition"}),"module definition")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",Object.assign({parentName:"li"},{href:"/jacdac-ts/tools/module-designer"}),"module designer"))))}B.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-templates-device-mdx-f79cda87125a229e3b7f.js.map