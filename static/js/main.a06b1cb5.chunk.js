(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),r=c(4),a=c(5),l=c(7),i=c(6),o=c(1),d=c.n(o),u=(c(12),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selected:""},e}return Object(a.a)(c,[{key:"clickHandler",value:function(e){this.setState({selected:e})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"App",children:[this.state.selected?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"".concat(this.state.selected," is selected")}),Object(u.jsx)("button",{type:"button",className:"cross",onClick:function(){return e.clickHandler("")},children:"X"})]}):Object(u.jsx)("h1",{children:"No goods selected"}),Object(u.jsx)("ul",{children:j.map((function(t){return Object(u.jsxs)("div",{className:"ui container",children:[Object(u.jsx)("li",{className:e.state.selected===t?"selected":"",children:t}),Object(u.jsx)("button",{className:e.state.selected===t?"hidden":"ui button mini",type:"button",onClick:function(){return e.clickHandler(t)},children:"Select"})]},t)}))})]})}}]),c}(d.a.Component),b=h;s.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a06b1cb5.chunk.js.map