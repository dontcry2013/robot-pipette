(this["webpackJsonprobot-pipette"]=this["webpackJsonprobot-pipette"]||[]).push([[0],{11:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(5),u=r.n(l),o=r(2),c=function(e){return a.a.createElement("button",{className:"".concat(e.hoverClass," square"),position:e.position},e.value)},s=function(e){var t=function(t){return a.a.createElement(c,{key:t,position:t,hoverClass:t===e.current?"square--green":null,value:e.squares[t]})};return a.a.createElement("div",null,function(e,r){for(var n=[],l=0,u=e-1;u>=0;u-=1){var o=[];l=u*r-1;for(var c=0;c<r;c+=1)l+=1,o.push(t(l,u,c));n.push(a.a.createElement("div",{key:u,className:"board-row"},o))}return n}(e.row,e.col))},i=r(1),p=a.a.createContext(null);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=function(e){var t=Object(n.useRef)(null),r=Object(n.useState)({textareaVal:e.textareaVal||"",commands:[]}),l=Object(o.a)(r,2),u=l[0],c=l[1],s=Object(n.useContext)(p);return Object(n.useEffect)((function(){var e=function(){var e=[],t=u.textareaVal.trim().toUpperCase().indexOf("PLACE");t>=0&&(e=u.textareaVal.substr(t).split(/\r?\n/).filter((function(e){return e})));return e}(u.textareaVal);c(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u,{commands:e}))}),[u.textareaVal]),a.a.createElement("div",{className:"panel"},a.a.createElement("div",{className:"title"},"Input"),a.a.createElement("textarea",{ref:t,value:u.textareaVal,rows:"30",cols:"40",onChange:function(e){c({textareaVal:e.target.value})}}),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){s({type:"setCommands",commands:u.commands})}},"Execute")))},b=function(e){var t=e.reports?e.reports.map((function(e,t){return a.a.createElement("li",{key:t},e)})):null;return a.a.createElement("div",{className:"panel"},a.a.createElement("div",{className:"title"},"Output"),a.a.createElement("div",{className:"output"},a.a.createElement("ul",{style:{listStyleType:"none"}},t)))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,r=null;if(!isNaN(e)&&!isNaN(t)&&e>=0&&t>0){var n=Math.floor(e/t),a=e%t;r={x:n,y:a}}return r},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,r=-1;return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(t)&&e.x>=0&&e.y>=0&&t>0&&(r=e.x*t+e.y),r},O=function(e,t){var r=null;if(!Array.isArray(e)||isNaN(t))return null;try{r="X"===e[t]?"FULL":null===e[t]?"EMPTY":"ERR"}catch(n){r=null}return r},E=r(3);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={row:5,col:5,squares:Array(25).fill(null),commands:[],output:[],textareaVal:""},h=function(e,t){switch(t.type){case"primingPlate":return g({},e,{squares:t.squares});case"setCommands":return g({},e,{commands:t.commands,output:[]});case"PLACE":return g({},e,{current:y(t.position,e.col)});case"MOVE":var r=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;if(isNaN(e)||isNaN(r)||isNaN(n))return null;if(e<0||r<0||n<0)return null;if(!t||"NWSEnwse".indexOf(t)<0)return null;var a=v(e,r);if(!a)return null;var l=null,u=a.x,o=a.y;switch(t.toUpperCase()){case"N":u+1>=n?console.log("out of boundary",t,e,u,o):l=y({x:u+1,y:o},r);break;case"S":u-1<0?console.log("out of boundary",t,e,u,o):l=y({x:u-1,y:o},r);break;case"W":o-1<0?console.log("out of boundary",t,e,u,o):l=y({x:u,y:o-1},r);break;case"E":o+1>=r?console.log("out of boundary",t,e,u,o):l=y({x:u,y:o+1},r);break;default:console.log("error from handleMove",t)}return l}(e.current,t.direction,e.col,e.row);return r?g({},e,{current:r}):e;case"DROP":var n=e.squares.slice();return n[e.current]="X",g({},e,{squares:n});case"DETECT":var a=O(e.squares,e.current);return g({},e,{output:[].concat(Object(E.a)(e.output),["Output: ".concat(a)])});case"REPORT":var l=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,n=O(e,t),a=v(t,r);return n&&a&&a.x&&a.y?"".concat(a.x,",").concat(a.y,",").concat(n):null}(e.squares,e.current,e.col);return g({},e,{output:[].concat(Object(E.a)(e.output),["Output: ".concat(l)])});default:throw new Error}},x=["X",null,null,null,"X",null,null,"X",null,null,"X","X",null,null,null,null,null,null,"X",null,null,null,"X",null,"X"],j=["X",null,null,null,null,null,null,"X",null,null,"X",null,"X",null,null,"X","X",null,null,"X",null,null,"X",null,null];r(11);u.a.render(a.a.createElement((function(){var e=Object(n.useReducer)(h,P),t=Object(o.a)(e,2),r=t[0],l=t[1];return Object(n.useEffect)((function(){r.commands.length>0&&r.commands.forEach((function(e){var t=e.split(" ");switch(t[0].toUpperCase()){case"PLACE":var r=function(e){var t=null;if("string"===typeof e||e instanceof String){var r=e.split(",");t=2===r.length?{x:+r[0],y:+r[1]}:null}return t}(t[1]);r&&l({type:"PLACE",position:r});break;case"MOVE":t[1]&&l({type:"MOVE",direction:t[1]});break;case"DROP":l({type:"DROP"});break;case"DETECT":l({type:"DETECT"});break;case"REPORT":l({type:"REPORT"});break;default:console.error("error from useEffect",e)}}))}),[r.commands]),a.a.createElement(p.Provider,{value:l},a.a.createElement("div",{className:"robot"},a.a.createElement("div",{className:"board"},a.a.createElement("div",{className:"title"},"Plate"),a.a.createElement(s,{row:r.row,col:r.col,squares:r.squares,current:r.current}),a.a.createElement("button",{onClick:function(){l({type:"primingPlate",squares:x})}},"Set Test Data 1"),a.a.createElement("button",{style:{marginLeft:"20px"},onClick:function(){l({type:"primingPlate",squares:j})}},"Set Test Data 2")),a.a.createElement(m,{textareaVal:r.textareaVal}),a.a.createElement(b,{reports:r.output})))}),null),document.getElementById("root"))},6:function(e,t,r){e.exports=r(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.184912a3.chunk.js.map