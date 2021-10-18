(this["webpackJsonpapplication-portfolio"]=this["webpackJsonpapplication-portfolio"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),i=a.n(r),c=(a(90),a(18)),l=a(40),d=a(10),o=a(2);function u(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Page not found!"})})}var j=a(25),p=a(26),b=a(32),h=a(30),m=a(136),v=a(140),O=a(139),x=a(137),f=a(138),g=a(131),V=a(54),N=a.n(V),D=a(141),S=a(135),C=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).onAdd=function(){n.props.history.push("/add-version/".concat(n.props.match.params.guid))},n.onDelete=function(e){var t=n.state.appList.map((function(t){var a=t.versions.map((function(e){return e.guid})).indexOf(e);return-1!==a&&t.versions.splice(a,1),t}));n.setState({appList:t})},n.getAppDetails=function(){return n.state.appList.filter((function(e){return!!e.guid&&e.guid.toLowerCase().includes(n.props.match.params.guid)}))[0]},n.state={appList:e.context.applications},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.getAppDetails(),a=t.versions&&t.versions.map((function(e){return e.currentVersion?e.name:""}));return Object(o.jsxs)("div",{children:[Object(o.jsx)(g.a,{className:"top-bar",children:Object(o.jsxs)(S.a,{container:!0,spacing:1,children:[Object(o.jsxs)(S.a,{item:!0,md:5,children:[Object(o.jsx)("strong",{children:"Application Name :"})," ",t.name]}),Object(o.jsxs)(S.a,{item:!0,md:4,children:[Object(o.jsx)("strong",{children:"Current version :"})," ",a]}),Object(o.jsxs)(S.a,{item:!0,md:3,children:[Object(o.jsx)("strong",{children:"Application state :"})," ",t.state]})]})}),Object(o.jsx)(g.a,{className:"table-wrapper",children:Object(o.jsxs)(m.a,{children:[Object(o.jsx)(x.a,{className:"table-head",children:Object(o.jsxs)(f.a,{children:[Object(o.jsx)(O.a,{className:"table-cell",children:"Version Name"}),Object(o.jsx)(O.a,{className:"table-cell",align:"center",children:"Version GUID"}),Object(o.jsx)(O.a,{className:"table-cell",align:"center",children:"Status"}),Object(o.jsx)(O.a,{className:"table-cell",align:"center",children:"Version Date"}),Object(o.jsx)(O.a,{className:"table-cell",align:"center",children:"Current Version"}),Object(o.jsx)(O.a,{className:"table-cell",align:"center",children:"Delete"})]})}),Object(o.jsx)(v.a,{children:t.versions.map((function(t){return Object(o.jsxs)(f.a,{children:[Object(o.jsxs)(O.a,{className:"table-cell",component:"th",scope:"row",children:[t.name,t.currentVersion?"*":""]}),Object(o.jsx)(O.a,{className:"table-cell",align:"center",children:t.guid}),Object(o.jsx)(O.a,{className:"table-cell",align:"center",children:t.status}),Object(o.jsx)(O.a,{className:"table-cell",align:"center",children:new Date(t.versionDate).toISOString().split("T")[0]}),Object(o.jsx)(O.a,{className:"table-cell",align:"center",children:t.currentVersion?"Yes":"No"}),Object(o.jsx)(O.a,{className:"table-cell",children:Object(o.jsx)(D.a,{onClick:function(){return e.onDelete(t.guid)},children:Object(o.jsx)(N.a,{})})})]},t.name)}))})]})}),Object(o.jsx)("div",{className:"add-button",children:Object(o.jsx)(D.a,{variant:"contained",onClick:this.onAdd,children:"Add version"})})]})}}]),a}(s.a.PureComponent),L=Object(d.f)(C),T=a(39),y=a(146),A=a(143),w=a(142),q=a(145),Z=a(147),F=(a(98),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(c.a)(Object(c.a)({},n.state),{},Object(T.a)({},e.target.name,e.target.value)))},n.validateForm=function(){return""!==n.state.appState&&""!==n.state.versionStatus},n.handleSubmit=function(e){if(e.preventDefault(),n.validateForm()){n.setState({Errors:!1});var t={guid:n.state.appGuid,name:n.state.appName,state:n.state.appState,versions:[{currentVersion:!0,guid:n.state.appVersionGuid,name:n.state.appVersion,status:n.state.versionStatus,versionDate:new Date(n.state.appVersionDate).toISOString()}]};n.updateAppList(t),n.props.history.push("/")}else n.setState({Errors:!0})},n.updateAppList=function(e){var t=n.state.appList;t.push(e),n.setState({appList:t})},n.state={appList:e.context.applications,appState:"",versionStatus:"",appName:"",appGuid:"",appVersion:"",appVersionGuid:"",appVersionDate:new Date,Errors:!1},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{className:"form-header",children:"Application Form"}),Object(o.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"app-name",children:"New Application name"}),Object(o.jsx)(A.a,{id:"app-name",name:"appName",value:this.state.appName,onChange:this.handleChange,required:!0})]}),Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"app-id",children:"GUID"}),Object(o.jsx)(A.a,{id:"app-id",name:"appGuid",value:this.state.appGuid,onChange:this.handleChange,required:!0})]}),Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"app-state",children:"State"}),Object(o.jsxs)(q.a,{value:this.state.appState,onChange:this.handleChange,inputProps:{name:"appState",id:"app-state"},required:!0,children:[Object(o.jsx)(Z.a,{value:"",children:"Select"}),Object(o.jsx)(Z.a,{value:"analysis_ready",children:"Analysis Ready"}),Object(o.jsx)(Z.a,{value:"analysis_succeed",children:"Analysis Succeed"})]})]}),Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"version-no",children:"Current Version name"}),Object(o.jsx)(A.a,{id:"version-no",name:"appVersion",value:this.state.appVersion,onChange:this.handleChange,required:!0})]}),Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"version-id",children:"version GUID"}),Object(o.jsx)(A.a,{id:"version-id",name:"appVersionGuid",value:this.state.appVersionGuid,onChange:this.handleChange,required:!0})]}),Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"version-date"}),Object(o.jsx)(A.a,{id:"version-date",label:"version Date",type:"date",name:"appVersionDate",value:new Date(this.state.appVersionDate).toISOString().split("T")[0],onChange:this.handleChange,required:!0})]}),Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"version-no",children:"version Status"}),Object(o.jsxs)(q.a,{value:this.state.versionStatus,onChange:this.handleChange,inputProps:{name:"versionStatus",id:"version-no"},required:!0,children:[Object(o.jsx)(Z.a,{value:"",children:"Select"}),Object(o.jsx)(Z.a,{value:"accepted",children:"Accepted"}),Object(o.jsx)(Z.a,{value:"delivered",children:"Delivered"}),Object(o.jsx)(Z.a,{value:"opened",children:"Opened"}),Object(o.jsx)(Z.a,{value:"purged",children:"Purged"})]})]}),Object(o.jsx)(D.a,{className:"form-button",variant:"contained",type:"submit",value:"Submit",children:"Add Application"})]}),this.state.Errors&&Object(o.jsx)("footer",{className:"form-footer",children:"Please select all the fields"})]})}}]),a}(s.a.PureComponent)),G=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(c.a)(Object(c.a)({},n.state),{},Object(T.a)({},e.target.name,e.target.value)))},n.validateForm=function(){return""!==n.state.versionStatus},n.updateVersionList=function(e){var t=n.state.appList.map((function(t){return t.guid.includes(n.props.match.params.guid)&&(t.versions.map((function(e){return e.currentVersion&&(e.currentVersion=!1),e})),t.versions.push(e)),t}));n.setState({appList:t})},n.handleSubmit=function(e){if(e.preventDefault(),n.validateForm()){n.setState({Errors:!1});var t={currentVersion:!0,guid:n.state.appVersionGuid,name:n.state.versionName,status:n.state.versionStatus,versionDate:new Date(n.state.appVersionDate).toISOString()};n.updateVersionList(t),n.props.history.push("/detailed-view/".concat(n.props.match.params.guid))}else n.setState({Errors:!0})},n.state={appList:e.context.applications,versionName:"",appVersionGuid:"",appVersionDate:new Date,versionStatus:"",Errors:!1},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{className:"form-header",children:"Version Form"}),Object(o.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"version-name",children:"New version name"}),Object(o.jsx)(A.a,{id:"version-name",name:"versionName",value:this.state.versionName,onChange:this.handleChange,required:!0})]}),Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"version-id",children:"version GUID"}),Object(o.jsx)(A.a,{id:"version-id",name:"appVersionGuid",value:this.state.appVersionGuid,onChange:this.handleChange,required:!0})]}),Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"version-date"}),Object(o.jsx)(A.a,{id:"version-date",label:"version Date",type:"date",name:"appVersionDate",value:new Date(this.state.appVersionDate).toISOString().split("T")[0],onChange:this.handleChange,required:!0})]}),Object(o.jsxs)(w.a,{required:!0,children:[Object(o.jsx)(y.a,{htmlFor:"version-no",children:"version Status"}),Object(o.jsxs)(q.a,{value:this.state.versionStatus,onChange:this.handleChange,inputProps:{name:"versionStatus",id:"version-no"},required:!0,children:[Object(o.jsx)(Z.a,{value:"",children:"Select"}),Object(o.jsx)(Z.a,{value:"accepted",children:"Accepted"}),Object(o.jsx)(Z.a,{value:"delivered",children:"Delivered"}),Object(o.jsx)(Z.a,{value:"opened",children:"Opened"}),Object(o.jsx)(Z.a,{value:"purged",children:"Purged"})]})]}),Object(o.jsx)(D.a,{className:"form-button",variant:"contained",type:"submit",value:"Submit",children:"Add version"})]}),this.state.Errors&&Object(o.jsx)("footer",{children:"Please select all the fields"})]})}}]),a}(s.a.PureComponent),P=a(65),k=(a(100),function(){return Object(o.jsx)("header",{className:"main-header",children:Object(o.jsx)("h2",{children:Object(o.jsx)(l.b,{className:"link-wrapper",to:{pathname:"/"},children:"Application Portfolio"})})})}),I=a(144),E=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)(k,{}),Object(o.jsx)(I.a,{fixed:!0,children:e.children})]})},_=function(e){return Object(o.jsx)(E,{children:Object(o.jsx)(z.Consumer,{children:function(t){return Object(o.jsx)(e.mainComponent,Object(c.a)({context:t},e))}})})},U=a(72),J=a.n(U),W=a(71),B=a.n(W),H=(a(101),function(e){for(var t=e.versionList,a="",n=0;n<t.length;n++)if(t[n].currentVersion){a=Object(o.jsx)(O.a,{align:"center",children:t[n].name});break}return a||!a&&Object(o.jsx)(O.a,{align:"center",children:"Unavailable"})}),R=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=n.state.appList.filter((function(t){return t.name?t.name.toLowerCase().includes(e.target.value):""}));n.setState({filteredList:t,searchText:e.target.value})},n.onAdd=function(){n.props.history.push("/add-application")},n.onDelete=function(e){var t=n.state.appList.filter((function(t){return!!t.guid&&!t.guid.includes(e)}));n.setState({appList:t})},n.state={appList:e.context.applications,filteredList:{},searchText:""},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=""!==this.state.searchText&&this.state.filteredList||this.state.appList;return this.props.context.applications=this.state.appList,Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"search-wrapper",children:[Object(o.jsx)("span",{children:"Hello, Welcome User!"}),Object(o.jsxs)("div",{className:"search-box",children:[Object(o.jsx)(B.a,{className:"searchIconWrapper"}),Object(o.jsx)("input",{type:"text",placeholder:"Search\u2026",value:this.state.searchText,onChange:function(t){return e.handleChange(t)}})]})]}),Object(o.jsxs)(g.a,{className:"table-wrapper",children:[Object(o.jsxs)(m.a,{children:[Object(o.jsx)(x.a,{className:"table-head",children:Object(o.jsxs)(f.a,{children:[Object(o.jsx)(O.a,{className:"table-cell",children:"Application Name"}),Object(o.jsx)(O.a,{align:"center",className:"table-cell",children:"GUID"}),Object(o.jsx)(O.a,{align:"center",className:"table-cell",children:"State"}),Object(o.jsx)(O.a,{align:"center",className:"table-cell",children:"Total Versions"}),Object(o.jsx)(O.a,{align:"center",className:"table-cell",children:"Current Version"}),Object(o.jsx)(O.a,{align:"center",className:"table-cell",children:"Details"}),Object(o.jsx)(O.a,{align:"center",className:"table-cell",children:"Delete"})]})}),Object(o.jsx)(v.a,{children:t.map((function(t){return Object(o.jsxs)(f.a,{children:[Object(o.jsx)(O.a,{component:"th",scope:"row",className:"table-cell",children:t.name}),Object(o.jsx)(O.a,{align:"center",className:"table-cell",children:t.guid}),Object(o.jsx)(O.a,{align:"center",className:"table-cell",children:t.state.toString()}),Object(o.jsx)(O.a,{align:"center",className:"table-cell",children:t.versions.length}),Object(o.jsx)(H,{versionList:t.versions}),Object(o.jsx)(O.a,{className:"table-cell",children:Object(o.jsx)(l.b,{className:"link-wrapper",to:{pathname:"/detailed-view/".concat(t.guid)},children:Object(o.jsx)(J.a,{})})}),Object(o.jsx)(O.a,{className:"table-cell",children:Object(o.jsx)(D.a,{onClick:function(){return e.onDelete(t.guid)},children:Object(o.jsx)(N.a,{})})})]},t.guid)}))})]}),""!==this.state.searchText&&0===this.state.filteredList.length&&Object(o.jsx)("div",{className:"no-result-text",children:"0 search result"})]}),Object(o.jsx)("div",{className:"add-button",children:Object(o.jsx)(D.a,{variant:"contained",onClick:function(){return e.onAdd()},children:"Add Application"})})]})}}]),a}(s.a.PureComponent),Y=Object(d.f)(R),z=Object(n.createContext)(P),K=function(){var e=P.applications;return Object(o.jsx)(z.Provider,{value:{applications:e},children:Object(o.jsx)(l.a,{basename:"/ApplicationPortfolio",children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{exact:!0,path:"/",render:function(e){return Object(o.jsx)(_,Object(c.a)({mainComponent:Y},e))}}),Object(o.jsx)(d.a,{exact:!0,path:"/detailed-view/:guid",render:function(e){return Object(o.jsx)(_,Object(c.a)({mainComponent:L},e))}}),Object(o.jsx)(d.a,{exact:!0,path:"/add-application",render:function(e){return Object(o.jsx)(_,Object(c.a)({mainComponent:F},e))}}),Object(o.jsx)(d.a,{exact:!0,path:"/add-version/:guid",render:function(e){return Object(o.jsx)(_,Object(c.a)({mainComponent:G},e))}}),Object(o.jsx)(d.a,{path:"",component:u})]})})})};i.a.render(Object(o.jsx)(K,{}),document.getElementById("root"))},65:function(e){e.exports=JSON.parse('{"applications":[{"guid":"e4de92fa-e098-4dac-b7f8-c22b927ff62e","name":"monster","state":"analysis_succeed","versions":[{"currentVersion":true,"guid":"54317b21-2414-4675-8e48-2351a121e275","name":"v1","status":"accepted","versionDate":"2019-05-27T12:06:00.000Z"}]},{"guid":"fee16fb9-81b3-4cec-9f05-04a4984c2ec8","name":"nodeJS","state":"analysis_succeed","versions":[{"currentVersion":false,"guid":"bface28d-6099-4148-ad9b-3510871eecfa","name":"v4","status":"delivered","versionDate":"2018-12-07T11:19:00.000Z"},{"currentVersion":false,"guid":"801edcd0-794b-4208-9e18-10fb8a3dcf83","name":"v3","status":"delivered","versionDate":"2018-12-07T11:09:00.000Z"},{"currentVersion":false,"guid":"109b16bc-6fd7-4e6f-b92e-204236fd62b8","name":"v2","status":"delivered","versionDate":"2018-11-14T16:10:00.000Z"},{"currentVersion":true,"guid":"8876ef5d-ae5e-47d8-ac8d-7928e0f9f769","name":"v1","status":"accepted","versionDate":"2018-11-08T11:09:00.000Z"}]},{"guid":"b4847732-5180-4e7e-88de-787201fd9a71","name":"reactJs","state":"analysis_ready","versions":[{"currentVersion":true,"guid":"8c210972-1cc8-4352-b02e-e55c350024ba","name":"v2","status":"accepted","versionDate":"2019-01-31T15:03:00.000Z"},{"currentVersion":false,"guid":"6aa39d17-1f49-449e-9e45-167d366b4215","name":"v1","status":"accepted","versionDate":"2018-11-16T12:33:00.000Z"}]},{"guid":"94a02dff-77e7-4a7d-bf12-6b17481e7b9b","name":"test1","state":"analysis_succeed","versions":[{"currentVersion":true,"guid":"5fed6691-030f-4875-a55d-d51876909b99","name":"Version-cpp","status":"accepted","versionDate":"2019-06-04T10:50:00.000Z"},{"currentVersion":false,"guid":"4d003372-7ace-4ef7-ac3c-f2efec5f9391","name":"Version-5091","status":"delivered","versionDate":"2019-05-29T06:21:00.000Z"},{"currentVersion":false,"guid":"4fbacfa6-7948-4e70-b65b-624766d4e93c","name":"Version-2019-05-29","status":"accepted","versionDate":"2019-05-29T05:44:00.000Z"},{"currentVersion":false,"dmtIgnore":"43dfffd2-4818-4ed0-96ba-9d519b9d7422","guid":"a806d26c-7cd5-4929-b4d2-fdabf2e04fb8","name":"Version-2019-05-21-3","status":"accepted","versionDate":"2019-05-21T13:58:00.000Z"},{"currentVersion":false,"guid":"0310acfd-4282-4c47-b79d-deab54b5a32b","name":"Version-2019-05-21-2","previousVersion":"52aa0ccd-e6ef-46f7-bf01-b832ef05ea0a","status":"accepted","versionDate":"2019-05-21T11:36:00.000Z"},{"currentVersion":false,"guid":"52aa0ccd-e6ef-46f7-bf01-b832ef05ea0a","name":"Version-2019-05-21","status":"accepted","versionDate":"2019-05-21T10:10:00.000Z"},{"currentVersion":false,"guid":"7659c6b7-53e9-49ca-8a38-c110c56e95af","name":"Version-2019-05-17-3","status":"accepted","versionDate":"2019-05-17T13:29:00.000Z"},{"currentVersion":false,"guid":"34598b5b-8426-4413-86b4-6cc3ed0c8bad","name":"Version-2019-05-17-2","status":"opened","versionDate":"2019-05-17T09:32:00.000Z"},{"currentVersion":false,"guid":"a4d62d0d-1ad9-46ed-a1fe-3b91af086089","name":"Version-2019-05-17","status":"purged","versionDate":"2019-05-17T08:22:00.000Z"},{"currentVersion":false,"guid":"341f14a8-8d51-44c7-beb8-f81de4ccb15d","name":"Version-2019-05-13","status":"opened","versionDate":"2019-05-13T14:04:00.000Z"}]},{"guid":"8fc87343-eb0f-4e25-9530-53ea6754cfca","name":"webi-5147","state":"analysis_succeed","versions":[{"currentVersion":false,"guid":"115d65df-0ac7-468f-a962-5b61fe402324","name":"v1.1","status":"delivered","versionDate":"2019-06-05T11:56:00.000Z"},{"currentVersion":true,"guid":"e863ab99-b942-4719-b2cf-00addacccd52","name":"v1.0","status":"analysis_done","versionDate":"2019-06-05T07:01:00.000Z"}]}]}')},90:function(e,t,a){},98:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.3ce5b08c.chunk.js.map