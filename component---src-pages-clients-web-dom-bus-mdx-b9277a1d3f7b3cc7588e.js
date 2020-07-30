(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{aSOY:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return j}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("7ljp"),s=t("9Dj+"),c=t("WmPD"),b=t("nyfv");var o={},p={_frontmatter:o},i=s.a;function j(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(i,Object.assign({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"JDBus"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"A ",Object(n.b)("strong",{parentName:"p"},"bus")," is the top-level ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom"}),"DOM")," ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/node"}),"node"),".\nIt processes the incoming and outcoming packets,\nhandles the connection to the underlying communiction transport\nand maintains a set of active ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/jacdac-ts/clients/web/dom/device"}),"devices")," nodes.")),Object(n.b)("h2",null,"WebUSB bus"),Object(n.b)("p",null,"The most common use is to create a bus that uses WebUSB to\ncommunicate to a physical JACDAC device. This is done with ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"createUSBBus"),"."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," bus ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"createUSBBus"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h2",null,"Connection and disconnection"),Object(n.b)("p",null,"By default, the WebUSB bus will try to reconnect\nto any known connected physical device. The JACDAC physical device hasn't been paired yet,\nyou can initiate the connection from a user interaction handler (security measure as the user must manually pick the device)."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"await")," bus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"connectAsync"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"The bus will detect that the physical device is disconnected automatically. If you wish to disconnect manually, use"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"await")," bus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"disconnectAsync"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("p",null,"You can query the status of the connection using ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"bus.connectionState"),". The connection has 4 states:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"connected: connected to a physical device over WebUSB and receiving packets"),Object(n.b)("li",{parentName:"ul"},"connection: connection in progress (for example, user is selecting the device)"),Object(n.b)("li",{parentName:"ul"},"disconnected: no active connection to a physical device"),Object(n.b)("li",{parentName:"ul"},"disconnecting: closing the connection to the physical device")),Object(n.b)("p",null,"Using the ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"CONNECTION_STATE")," event, you can track changes of the state."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// am i in connected state?"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," connected ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," bus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"connected\nbus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CONNECTION_STATE"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"state",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)(c.a,{mdxType:"Widget"},Object(n.b)(b.a,{mdxType:"ConnectButton"})),Object(n.b)("h2",null,"Methods"),Object(n.b)("h3",null,"Devices"),Object(n.b)("p",null,"You can query the bus at any to receive a snapshot of the devices DOM."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," devices ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," bus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"devices"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"for"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," device ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"of")," devices",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"device",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h2",null,"Events"),Object(n.b)("p",null,"All bus state mutation are advertised by events. You can listen or subscribe to those events."),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"CHANGE")),Object(n.b)("p",null,"Catch all event raised when some change happened to the bus, whether it is a connection change or a change in the list of services\nor the error state changed."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CHANGE"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'bus changed!'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"CONNECTION_STATE")),Object(n.b)("p",null,"Raised when the connection state of the bus has changed."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CONNECTION_STATE"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus connection state: "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"state",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"CONNECT"),", ",Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"CONNECTING"),", ",Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"DISCONNECTING"),", ",Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"DISCONNECT")),Object(n.b)("p",null,"Raised on each connection state changes."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CONNECT"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus connected"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\nbus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"CONNECTING"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus connecting"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\nbus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DISCONNECTING"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus disconnecting"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\nbus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"DISCONNECT"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"state")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus disconnected"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("h3",null,Object(n.b)("code",Object.assign({parentName:"h3"},{className:"language-text"}),"ERROR")),Object(n.b)("p",null,"An error occured."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"javascript"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-javascript"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"bus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"on"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token constant"}),"ERROR"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," context",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," exception ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," console",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"error"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"bus error: "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"context",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," exception",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-clients-web-dom-bus-mdx-b9277a1d3f7b3cc7588e.js.map