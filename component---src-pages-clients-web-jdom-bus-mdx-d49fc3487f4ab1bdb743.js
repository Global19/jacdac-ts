(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5D0W":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));var c=n("8o2o"),a=(n("q1tI"),n("7ljp")),s=n("9Dj+"),i={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",t)}},d=o("Widget"),r=o("ConnectButton"),l={_frontmatter:i},m=s.f;function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.mdx)(m,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"jdbus",style:{position:"relative"}},Object(a.mdx)("a",Object.assign({parentName:"h1"},{href:"#jdbus","aria-label":"jdbus permalink",className:"anchor before"}),Object(a.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"JDBus"),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},"A ",Object(a.mdx)("strong",{parentName:"p"},"bus")," is the top-level ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/jdom"}),"JDOM")," ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/jdom/node"}),"node"),".\nIt processes the incoming and outcoming packets,\nhandles the connection to the underlying communiction transport\nand maintains a set of active ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/jdom/device"}),"devices")," nodes.")),Object(a.mdx)("h2",{id:"webusb-bus",style:{position:"relative"}},Object(a.mdx)("a",Object.assign({parentName:"h2"},{href:"#webusb-bus","aria-label":"webusb bus permalink",className:"anchor before"}),Object(a.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"WebUSB bus"),Object(a.mdx)("p",null,"The most common use is to create a bus that uses WebUSB to\ncommunicate to a physical JACDAC device. This is done with ",Object(a.mdx)("inlineCode",{parentName:"p"},"createUSBBus"),"."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const bus = createUSBBus();\n")),Object(a.mdx)("h2",{id:"connection-and-disconnection",style:{position:"relative"}},Object(a.mdx)("a",Object.assign({parentName:"h2"},{href:"#connection-and-disconnection","aria-label":"connection and disconnection permalink",className:"anchor before"}),Object(a.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Connection and disconnection"),Object(a.mdx)("p",null,"By default, the WebUSB bus will try to reconnect\nto any known connected physical device. The JACDAC physical device hasn't been paired yet,\nyou can initiate the connection from a user interaction handler (security measure as the user must manually pick the device)."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await bus.connectAsync();\n")),Object(a.mdx)("p",null,"The bus will detect that the physical device is disconnected automatically. If you wish to disconnect manually, use"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"await bus.disconnectAsync();\n")),Object(a.mdx)("p",null,"You can query the status of the connection using ",Object(a.mdx)("inlineCode",{parentName:"p"},"bus.connectionState"),". The connection has 4 states:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"connected: connected to a physical device over WebUSB and receiving packets"),Object(a.mdx)("li",{parentName:"ul"},"connection: connection in progress (for example, user is selecting the device)"),Object(a.mdx)("li",{parentName:"ul"},"disconnected: no active connection to a physical device"),Object(a.mdx)("li",{parentName:"ul"},"disconnecting: closing the connection to the physical device")),Object(a.mdx)("p",null,"Using the ",Object(a.mdx)("inlineCode",{parentName:"p"},"CONNECTION_STATE")," event, you can track changes of the state."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"// am i in connected state?\nconst connected = bus.connected\nbus.on(CONNECTION_STATE, state => console.log(state))\n")),Object(a.mdx)(d,{mdxType:"Widget"},Object(a.mdx)(r,{full:!0,mdxType:"ConnectButton"})),Object(a.mdx)("h2",{id:"methods",style:{position:"relative"}},Object(a.mdx)("a",Object.assign({parentName:"h2"},{href:"#methods","aria-label":"methods permalink",className:"anchor before"}),Object(a.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Methods"),Object(a.mdx)("h3",{id:"devices",style:{position:"relative"}},Object(a.mdx)("a",Object.assign({parentName:"h3"},{href:"#devices","aria-label":"devices permalink",className:"anchor before"}),Object(a.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Devices"),Object(a.mdx)("p",null,"You can query the bus at any to receive a snapshot of the ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"./device"}),"devices")," JDOM."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"const devices = bus.devices()\nfor(const device of devices)\n    console.log(device)\n")),Object(a.mdx)("h2",{id:"events",style:{position:"relative"}},Object(a.mdx)("a",Object.assign({parentName:"h2"},{href:"#events","aria-label":"events permalink",className:"anchor before"}),Object(a.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Events"),Object(a.mdx)("p",null,"All bus state mutation are advertised by events. You can listen or subscribe to those events."),Object(a.mdx)("h3",{id:"change",style:{position:"relative"}},Object(a.mdx)("a",Object.assign({parentName:"h3"},{href:"#change","aria-label":"change permalink",className:"anchor before"}),Object(a.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(a.mdx)("inlineCode",{parentName:"h3"},"CHANGE")),Object(a.mdx)("p",null,"Catch all event raised when some change happened to the bus, whether it is a connection change or a change in the list of services\nor the error state changed."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus.on(CHANGE, () => console.log('bus changed!'))\n")),Object(a.mdx)("h3",{id:"connection_state",style:{position:"relative"}},Object(a.mdx)("a",Object.assign({parentName:"h3"},{href:"#connection_state","aria-label":"connection_state permalink",className:"anchor before"}),Object(a.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(a.mdx)("inlineCode",{parentName:"h3"},"CONNECTION_STATE")),Object(a.mdx)("p",null,"Raised when the connection state of the bus has changed."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus.on(CONNECTION_STATE, state => console.log(`bus connection state: ${state}`))\n")),Object(a.mdx)("h3",{id:"connect-connecting-disconnecting-disconnect",style:{position:"relative"}},Object(a.mdx)("a",Object.assign({parentName:"h3"},{href:"#connect-connecting-disconnecting-disconnect","aria-label":"connect connecting disconnecting disconnect permalink",className:"anchor before"}),Object(a.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(a.mdx)("inlineCode",{parentName:"h3"},"CONNECT"),", ",Object(a.mdx)("inlineCode",{parentName:"h3"},"CONNECTING"),", ",Object(a.mdx)("inlineCode",{parentName:"h3"},"DISCONNECTING"),", ",Object(a.mdx)("inlineCode",{parentName:"h3"},"DISCONNECT")),Object(a.mdx)("p",null,"Raised on each connection state changes."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus.on(CONNECT, state => console.log(`bus connected`))\nbus.on(CONNECTING, state => console.log(`bus connecting`))\nbus.on(DISCONNECTING, state => console.log(`bus disconnecting`))\nbus.on(DISCONNECT, state => console.log(`bus disconnected`))\n")),Object(a.mdx)("h3",{id:"error",style:{position:"relative"}},Object(a.mdx)("a",Object.assign({parentName:"h3"},{href:"#error","aria-label":"error permalink",className:"anchor before"}),Object(a.mdx)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.mdx)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),Object(a.mdx)("inlineCode",{parentName:"h3"},"ERROR")),Object(a.mdx)("p",null,"An error occured."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus.on(ERROR, { context, exception } => console.error(`bus error: ${context}`, exception))\n")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clients-web-jdom-bus-mdx-d49fc3487f4ab1bdb743.js.map