webpackJsonp([1],{"++w0":function(t,a){},"342K":function(t,a){},"8XRw":function(t,a){},Jmt5:function(t,a){},KyhK:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),n=s("e6fC"),r=s.n(n),i={type:"line",data:{labels:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],datasets:[{label:"Number of Moons",data:[0,0,1,2,67,62,27,14],backgroundColor:["rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)","rgba(54,73,93,.5)"],borderColor:["#36495d","#36495d","#36495d","#36495d","#36495d","#36495d","#36495d","#36495d"],borderWidth:3},{label:"Planet Mass (x1,000 km)",data:[4.8,12.1,12.7,6.7,139.8,116.4,50.7,49.2],backgroundColor:["rgba(71, 183,132,.5)"],borderColor:["#47b784"],borderWidth:3}]},options:{responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!0,padding:25}}]}}},o=s("ikxi"),l=s.n(o),c={name:"Chart",data:function(){return{planetChartData:i}},methods:{createChart:function(t,a){var s=document.getElementById(t);new l.a(s,{type:a.type,data:a.data,options:a.options})}},mounted:function(){this.createChart("planet-chart",this.planetChartData)}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"chart"},[s("div",{staticClass:"card mb-3 w-100"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("\n        Wykres\n        "),s("hr"),t._v(" "),s("div",[s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n              Wybierz interwał czasu\n            ")]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Tydzień")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Miesiąc")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("3 miesiące")])])])])]),t._v(" "),s("nav",[s("div",{staticClass:"nav nav-tabs border-0 mt-4",attrs:{id:"nav-tab",role:"tablist"}},[s("a",{staticClass:"nav-item nav-item-edit nav-link active ml-4",attrs:{id:"nav-tab-0","data-toggle":"tab",href:"#chart0",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[t._v("Wykres czegoś")]),t._v(" "),s("a",{staticClass:"nav-item nav-item-edit nav-link",attrs:{id:"nav-tab-1","data-toggle":"tab",href:"#chart0",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[t._v("Wykres 2")]),t._v(" "),s("a",{staticClass:"nav-item nav-item-edit nav-link",attrs:{id:"nav-tab-1","data-toggle":"tab",href:"#chart0",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[t._v("Wykres 3")]),t._v(" "),s("a",{staticClass:"nav-item nav-item-edit nav-link",attrs:{id:"nav-tab-1","data-toggle":"tab",href:"#chart0",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[t._v("Wykres 4")])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("canvas",{attrs:{id:"planet-chart"}})])])])])}]};var v=s("VU/8")(c,d,!1,function(t){s("8XRw")},"data-v-605d80ca",null).exports,u={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-danger navbar-white"},[t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{attrs:{to:"/"}},[s("a",{staticClass:"nav-link pt-3 pb-3 navbar-white",attrs:{href:"#"}},[t._v("\n              Strona główna "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/chart"}},[s("a",{staticClass:"nav-link pt-3 pb-3 navbar-white",attrs:{href:"#"}},[t._v("Wykresy")])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/test"}},[s("a",{staticClass:"nav-link pt-3 pb-3 navbar-white",attrs:{href:"#"}},[t._v("\n              Cośtam dalej\n            ")])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/wyloguj"}},[s("a",{staticClass:"nav-link pt-3 pb-3 navbar-white",attrs:{href:"#"}},[t._v("\n              Wyloguj\n            ")])])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]};var j=s("VU/8")({name:"Navbar",data:function(){return{message:""}},methods:{}},u,!1,function(t){s("342K")},"data-v-84fc8792",null).exports,m={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"}),t._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"card border-0"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[s("form",{staticClass:"p-3"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-1"},[s("font-awesome-icon",{attrs:{icon:"user-tie",size:"lg"}})],1),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"form-group"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-1"},[s("font-awesome-icon",{attrs:{icon:"key",size:"lg"}})],1),t._v(" "),t._m(2)])]),t._v(" "),t._m(3)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header bg-danger text-center"},[a("h4",{staticClass:"text-white"},[this._v("Logowanie")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-11"},[a("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Podaj MerchantID"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-11"},[a("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Podaj hasło"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"d-flex justify-content-end"},[a("div",{staticClass:"form-check w-100 mt-1"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),this._v(" "),a("label",{staticClass:"form-check-label text-muted mb-2",attrs:{for:"exampleCheck1"}},[this._v("\n                  Zapamiętaj\n                ")])]),this._v(" "),a("div",[a("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[this._v("Zaloguj")])])])}]};var h=s("VU/8")({name:"Index",data:function(){return{message:""}},methods:{}},m,!1,function(t){s("++w0")},"data-v-710bafec",null).exports,b={name:"App",components:{Chart:v,Navbar:j,Home:h}},p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),this._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("router-view")],1)])])],1)},staticRenderFns:[]};var f=s("VU/8")(b,p,!1,function(t){s("bYcQ")},null,null).exports,g=s("/ocq"),C={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};s("VU/8")({name:"Login",data:function(){return{message:""}},methods:{}},C,!1,function(t){s("KyhK")},"data-v-5ff9bf82",null).exports,s("K3J8"),s("Jmt5"),s("7t+N"),s("Zgw8");e.default.use(g.a);var k=new g.a({routes:[{path:"/",component:h},{path:"/chart",component:v}]}),_=s("C/JF"),w=s("fhbW"),y=s("1e6/");e.default.use(r.a),_.c.add(w.a),e.default.component("font-awesome-icon",y.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:k,components:{App:f},template:"<App/>"})},bYcQ:function(t,a){},uslO:function(t,a,s){var e={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(r(t))}function r(t){var a=e[t];if(!(a+1))throw new Error("Cannot find module '"+t+"'.");return a}n.keys=function(){return Object.keys(e)},n.resolve=r,t.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.3c53cd7740012739602d.js.map