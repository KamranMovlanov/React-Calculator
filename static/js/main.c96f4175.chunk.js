(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,n,t){e.exports={screenInput:"calcScreen_screenInput__1sqXL",screenInputMin:"calcScreen_screenInputMin__2yJ00",screenInputSuperMin:"calcScreen_screenInputSuperMin__22mXk",sticky:"calcScreen_sticky__1_cNH"}},15:function(e,n,t){},17:function(e,n,t){},2:function(e,n,t){e.exports={buttons:"ButtonBox_buttons__3dnxQ",button:"ButtonBox_button__vdbnu",buttonEqual:"ButtonBox_buttonEqual__2iSev"}},21:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),u=t(5),r=t.n(u),l=(t(15),t(3)),s=(t(17),t(2)),o=t.n(s),i=t(1),p=t.n(i),m=function(e){return console.log(e),a.a.createElement("div",null,a.a.createElement("div",null,e.result?a.a.createElement("span",{className:e.calc.length+e.result.length<6?p.a.screenInput:p.a.screenInputMin&&e.calc.length+e.result.length>=12?p.a.screenInputSuperMin:p.a.screenInputMin},"(",parseInt(e.result),") ",e.calc||"0"):a.a.createElement("span",{className:p.a.screenInput},e.result," ",e.calc||"0")))};var _=function(){var e=Object(c.useState)(""),n=Object(l.a)(e,2),t=n[0],u=n[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),i=s[0],p=s[1],_=["/","*","+","-","."],b=function(){u(""),p("")},d=function(e){return new Function("return "+e)()};return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(m,{result:i,calc:t}),a.a.createElement("div",{className:o.a.wrapper},a.a.createElement("div",{className:o.a.buttons},[["C","+-","%","/"],[7,8,9,"*"],[4,5,6,"-"],[1,2,3,"+"],[0,"."]].flat().map(function(e,n){return a.a.createElement("button",{className:o.a.button,type:"button",key:n,onClick:"C"===e?b:function(){return n=e,void(_.includes(n)&&""===t||_.includes(n)&&_.includes(t.slice(-1))||(u(t+n),_.includes(n)&&"="!==n||p(d(t+n)),_.includes(n.slice(-1))?p(d(n.slice(0,-1))):p(d(n))));var n}},e)}),a.a.createElement("button",{type:"button",className:o.a.buttonEqual,onClick:function(e){p(d(t))}},"=")))))},b=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,22)).then(function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,u=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),u(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_,null))),b()},6:function(e,n,t){e.exports=t(21)}},[[6,3,2]]]);
//# sourceMappingURL=main.c96f4175.chunk.js.map