(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(80),c=a.n(r),i=a(24),o=a(20),s=a(14),d=a(15),u=a(17),m=a(16),h=a(18),p=a(81).initializeApp({apiKey:"AIzaSyCv5bo0qLFQ6YxRkQk04ssUvJsqjCZ8KuU",authDomain:"healthe-8a7fd.firebaseapp.com",databaseURL:"https://healthe-8a7fd.firebaseio.com",projectId:"healthe-8a7fd",storageBucket:"healthe-8a7fd.appspot.com",messagingSenderId:"73806913302"}),b=(a(78),a(165),a(58)),g=a.n(b),v=a(44),f=a.n(v),E=(a(167),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={},console.log(e),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){var e=function(e){return f()(e).format("MMM D, YYYY")},t=[],a=[];for(var n in this.props.d)t.push(e(this.props.d[n].date)),a.push({x:e(this.props.d[n].date),y:this.props.d[n].weight});console.log(t),console.log(a);var l={type:"line",data:{labels:t,datasets:[{label:"Weight",backgroundColor:"rgba(231, 76, 60,0.2)",borderColor:"rgba(192, 57, 43,1.0)",fill:!0,data:a,type:"line",pointRadius:0,lineTension:0,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,title:{text:"Weight"},legend:{display:!1},scales:{xAxes:[{type:"time",distribution:"series",time:{parser:"MMM D, YYYY",tooltipFormat:"ll"},scaleLabel:{display:!0,labelString:"Date"},ticks:{source:"auto",autoskip:!0,callback:function(e,t,a){return a[t]?f()(parseInt(a[t].value,10)).format("MMM DD, YY"):e}}}],yAxes:[{scaleLabel:{display:!0,labelString:"Weights"}}]},tooltips:{intersect:!1,mode:"index",callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label||"";return a&&(a+=": "),a+=parseFloat(e.value).toFixed(2),a}}}}},r=document.getElementById("myChart").getContext("2d");g.a.defaults.global.defaultFontColor="black",window.myLineChart=new g.a(r,l)}},{key:"render",value:function(){return l.a.createElement("canvas",{id:"myChart",className:"col "})}}]),t}(n.Component)),y=p.database(),w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={weightData:{}},e}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.ref("/weightData/").once("value").then(function(t){e.setState({weightData:t.val()})})}},{key:"render",value:function(){return l.a.createElement("div",{id:"displayWeightData",className:"container"},l.a.createElement("div",{className:"accordion ",id:"accordionExample"},l.a.createElement("h2",{className:"mb-0 row justify-content-center"},l.a.createElement("button",{id:"showData",className:"btn btn-light btn-sm",type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Weight Data")),l.a.createElement("div",{id:"collapseOne",className:"collapse row justify-content-center","aria-labelledby":"headingOne","data-parent":"#accordionExample"},l.a.createElement("div",{className:"card-body table-responsive col col-md-5 ",id:"weightsTable"},l.a.createElement(j,{data:this.state.weightData})))),l.a.createElement("div",{id:"weightsChart",className:"row justify-content-center"},l.a.createElement(E,{d:this.state.weightData})))}}]),t}(n.Component),j=function(e){var t=[Object.keys(e.data).map(function(t){var a=e.data[t],n=a.weight,r=a.date,c=new Date(r+"T00:00:00");return l.a.createElement("tr",{key:t},l.a.createElement("td",null,c.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"})),l.a.createElement("td",null,n))})];return l.a.createElement("table",{className:"table table-dark table-hover table-sm table-striped table-bordered"},l.a.createElement("thead",{className:""},l.a.createElement("tr",null,l.a.createElement("th",null,"Date"),l.a.createElement("th",null,"weight"))),l.a.createElement("tbody",null,t))},D=w,N=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(D,null))}}]),t}(n.Component),k=a(82),O=(a(168),p.database()),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={weight:"",date:""},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.AddWeight=function(e){e.preventDefault();var t=a.state,n=t.weight,l=t.date,r=new Date(l).getTime();console.log(r),O.ref("weightData/"+r).set({weight:n,date:l}).then(function(){console.log("Successfully written"),a.setState({weight:"",date:""})})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"addWeight"},l.a.createElement("form",{onSubmit:this.AddWeight},l.a.createElement("label",{htmlFor:"inputWeight",className:""},"Weight"),l.a.createElement("input",{className:"form-control",id:"inputWeight",placeholder:"Input Weight",type:"text",name:"weight",value:this.state.weight,onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"inputDate",className:""},"Date"),l.a.createElement("input",{className:"form-control",id:"inputDate",placeholder:"Input Date",type:"date",name:"date",value:this.state.date,onChange:this.handleChange}),l.a.createElement("button",{id:"addWeightButton",type:"submit",className:"btn btn-dark "},"ADD")))}}]),t}(n.Component),x=(a(169),function(e){var t=e.children,a=e.path;return console.log(a),l.a.createElement("div",{className:""},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark justify-content-between justify-content-md-center"},l.a.createElement(i.b,{className:"navbar-brand",to:"/",style:{fontWeight:600}},"Health-E"),l.a.createElement("button",{className:"navbar-toggler justify-content-end",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"nav navbar-nav "},l.a.createElement("li",{className:"nav-item "+("/"===a?"active":"")},l.a.createElement(i.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item "+("/add"===a?"active":"")},l.a.createElement(i.b,{className:"nav-link",to:"/add"},"Add Weights"))))),t)});c.a.render(l.a.createElement(i.a,null,l.a.createElement(o.c,null,"path",l.a.createElement(o.a,{exact:!0,path:"/",render:function(){return l.a.createElement(x,{path:"/"},l.a.createElement(N,null))}}),l.a.createElement(o.a,{path:"/add",render:function(){return l.a.createElement(x,{path:"/add"},l.a.createElement(C,null))}}))),document.getElementById("root"))},85:function(e,t,a){e.exports=a(178)}},[[85,1,2]]]);
//# sourceMappingURL=main.60deae8d.chunk.js.map