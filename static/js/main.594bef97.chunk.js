(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,n){e.exports={item:"Statistics_item__2UkrQ",list:"Statistics_list__2rzSu"}},17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(4),i=n.n(s),r=(n(16),n(17),n(5)),o=n(6),l=n(7),u=n(11),b=n(10),d=(n(18),n(8)),j=n.n(d),h=n(0);var v=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsx)("button",{className:j.a.button,type:"button",value:e,onClick:function(){return n(e)},children:e},e)}))})},O=n(1),f=n.n(O);var x=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercent;return Object(h.jsxs)("ul",{className:f.a.item,children:[Object(h.jsxs)("li",{className:f.a.list,children:["Good: ",t]}),Object(h.jsxs)("li",{className:f.a.list,children:["Neutral: ",n]}),Object(h.jsxs)("li",{className:f.a.list,children:["Bad: ",c]}),Object(h.jsxs)("li",{className:f.a.list,children:["Total: ",a]}),Object(h.jsxs)("li",{className:f.a.list,children:["Positive feedback: ",s,"%"]})]})};var k=function(e){var t=e.message;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{children:t})})},m=n(9),p=n.n(m);var g=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:p.a.section,children:[t&&Object(h.jsx)("h2",{children:t}),n]})},F=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.floor(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),s=a>0,i=this.countPositiveFeedbackPercentage();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(g,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(g,{title:"Statistics",children:s?Object(h.jsx)(x,{good:t,neutral:n,bad:c,total:a,positivePercent:i}):Object(h.jsx)(k,{message:"There is no feedback"})})]})}}]),n}(c.Component),N=F;i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={button:"FeedbackOptions_button__xQv9K"}},9:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.594bef97.chunk.js.map