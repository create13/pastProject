webpackJsonp([12],{"09LS":function(a,t){},"M+Us":function(a,t){},oUZO:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("BO1k"),o=s.n(i),e={name:"organization",data:function(){return{value1:"",myColor:"",orgaName:"",orgInfo:null,companyAbout:null,stateCompany:"",paramsData:{myColor:"",loadingSearch:!1},switchChoose:null,loadingSearch:!1,disabledGroup:"",inputSet:[{lables:"组织名称",models:"",spans:4,types:"input"},{lables:"查询",spans:5,types:"button"}],treeOrigation:[],tableData:[],redraw:[],pages:1,sizes:10}},components:{},computed:{},watch:{},mounted:function(){this.getOrganization(),this.treeData()},methods:{search:function(){var a=this,t=!0,s=!1,i=void 0;try{for(var e,n=o()(this.inputSet);!(t=(e=n.next()).done);t=!0){var r=e.value;"input"===r.types&&"组织名称"===r.lables&&(this.orgaName=r.models)}}catch(a){s=!0,i=a}finally{try{!t&&n.return&&n.return()}finally{if(s)throw i}}var l={companyName:this.orgaName};this.$service.http.post("winpie/api/searchCompany",l,"post").then(function(t){console.log(t.result),a.redraw=t.result;var s=!0,i=!1,e=void 0;try{for(var n,r=o()(a.redraw);!(s=(n=r.next()).done);s=!0){var l=n.value;a.companyAbout=l.companyId}}catch(a){i=!0,e=a}finally{try{!s&&r.return&&r.return()}finally{if(i)throw e}}a.recursion(a.redraw),a.getOrganization(a.companyAbout)}).catch(function(t){console.log(t),a.$Message.error(t.msg)})},getCheckedNodes:function(a){console.log(a),this.getOrganization(a[0].onlyId)},treeData:function(){var a=this;this.$service.http.post("winpie/api/companyManageTree","","post").then(function(t){console.log(t),a.treeOrigation=[JSON.parse(t.result)],console.log(a.treeOrigation),a.recursion(a.treeOrigation)}).catch(function(t){console.log(t),a.$Message.error(t.msg)})},recursion:function(a){var t=[],s=!0,i=!1,e=void 0;try{for(var n,r=o()(a);!(s=(n=r.next()).done);s=!0){var l=n.value,c=l.companyName,v=l.nodes,p=l.companyId;if(v)v=this.recursion(v);t.push({title:c,expand:!0,children:v,onlyId:p})}}catch(a){i=!0,e=a}finally{try{!s&&r.return&&r.return()}finally{if(i)throw e}}return this.treeOrigation=t,this.treeOrigation},getOrganization:function(a){var t=this,s={companyId:a||this.$store.getters.getInfo.companyId};this.$service.http.post("winpie/api/getCompanyInfo",s,"post").then(function(a){t.orgInfo=a.result;var s=!0,i=!1,e=void 0;try{for(var n,r=o()(t.orgInfo);!(s=(n=r.next()).done);s=!0){var l=n.value;1===l.companyStatus?(t.switchChoose=!0,t.stateCompany="启用"):(t.switchChoose=!1,t.stateCompany="不启用"),1===l.ctypeId?t.disabledGroup="网点":t.disabledGroup="专线"}}catch(a){i=!0,e=a}finally{try{!s&&r.return&&r.return()}finally{if(i)throw e}}}).catch(function(a){console.log(a),t.$Message.error(a.msg)})},colorChange:function(a){this.paramsData.myColor=a},resetColor:function(){this.paramsData.myColor=""}}},n={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("div",{staticClass:"manage-set"},[s("div",{staticClass:"center-content"},[s("div",{staticClass:"input-search"},[s("con-inputs",{attrs:{setInput:a.inputSet,paramsData:a.paramsData},on:{changeColor:a.colorChange,resetColor:a.resetColor,searchTable:a.search}})],1),a._v(" "),s("Row",[s("i-col",{attrs:{span:"5"}},[s("div",{staticClass:"fonts-explain"},[a._v("组织结构")]),a._v(" "),s("div",{staticClass:"tree-construction"},[s("Tree",{attrs:{data:a.treeOrigation},on:{"on-select-change":a.getCheckedNodes}})],1)]),a._v(" "),s("i-col",{attrs:{span:"19"}},[s("div",{staticClass:"input-search row-set"},[a._v("\n              详细信息\n            ")]),a._v(" "),a._l(a.orgInfo,function(t,i){return s("div",{key:i,staticClass:"detail-show"},[s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("公司名称"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[a._v(a._s(t.companyName))])]),a._v(" "),s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("组织代码"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[a._v(a._s(t.regionId))])]),a._v(" "),s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("公司状态"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[s("i-switch",{model:{value:a.switchChoose,callback:function(t){a.switchChoose=t},expression:"switchChoose"}}),a._v(" "),s("span",{staticClass:"padding-l"},[a._v("启用")])],1)]),a._v(" "),s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("公司类型"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[s("RadioGroup",{model:{value:a.disabledGroup,callback:function(t){a.disabledGroup=t},expression:"disabledGroup"}},[s("Radio",{attrs:{label:"网点"}}),a._v(" "),s("Radio",{attrs:{label:"专线"}})],1)],1)]),a._v(" "),s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("联系人"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[a._v(a._s(t.contacts))])]),a._v(" "),s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("联系电话"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[a._v(a._s(t.contactsTel))])]),a._v(" "),s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("公司电话"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[a._v(a._s(t.companyTel))])]),a._v(" "),s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("所在地"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[a._v(a._s(t.regionId))])]),a._v(" "),s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("发货查询电话"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[a._v(a._s(t.sendTel))])]),a._v(" "),s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("到货查询电话"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[a._v(a._s(t.arrivalTel))])]),a._v(" "),s("div",{staticClass:"orgDiv"},[s("p",{staticClass:"orgTitle"},[a._v("详细地址"),s("i")]),a._v(" "),s("span",{staticClass:"padding-l"},[a._v(":")]),a._v(" "),s("span",{staticClass:"orgData"},[a._v(a._s(t.officeAddress))])])])})],2)],1)],1)])])},staticRenderFns:[]};var r=s("VU/8")(e,n,!1,function(a){s("M+Us"),s("09LS")},"data-v-2b439753",null);t.default=r.exports}});
//# sourceMappingURL=12.a1d5e7d4ce54a8d135e4.js.map