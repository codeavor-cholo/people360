(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5a779090"],{"200d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("ongoing-project")],1)},r=[],i={components:{"ongoing-project":s("2368").default}},n=i,o=s("2877"),c=Object(o["a"])(n,a,r,!1,null,null,null);e["default"]=c.exports},2368:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{},[s("div",{},[s("q-markup-table",[s("thead",[s("tr",[s("th",{attrs:{colspan:"20"}},[s("div",{staticClass:"row no-wrap items-center"},[s("div",{staticClass:"text-h5 text-primary"},[t._v("Ongoing Projects Table")])])])]),s("tr",[s("th",{staticClass:"text-left"},[t._v("Pre-Proposal Number")]),s("th",{staticClass:"text-left"},[t._v("Company Name")]),s("th",{staticClass:"text-left"},[t._v("Full Name")]),s("th",{staticClass:"text-left"},[t._v("Date")]),s("th",{staticClass:"text-left"},[t._v("Start Date")]),s("th",{staticClass:"text-left"},[t._v("Equipment")]),s("th",{staticClass:"text-left"},[t._v("Mobilization Fee")]),s("th",{staticClass:"text-left"},[t._v("Price")]),s("th",{staticClass:"text-left"},[t._v("Total Equipment Price")]),s("th",{staticClass:"text-left"},[t._v("Quantity")]),s("th",{staticClass:"text-left"},[t._v("Total Price")]),s("th",{staticClass:"text-left"},[t._v("Project Location")]),s("th",{staticClass:"text-left"},[t._v("Name")]),s("th",{staticClass:"text-left"},[t._v("Report")]),s("th",{staticClass:"text-left"},[t._v("Status")]),t.setAdmin?s("th",{staticClass:"text-left"},[t._v("Actions")]):t._e()])]),s("tbody",t._l(t.clientPreproposals,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"text-left"},[t._v(t._s(e.proposalNumber))]),s("td",{staticClass:"text-left"},[t._v(t._s(e.companyName))]),s("td",{staticClass:"text-left"},[t._v(t._s(e.fullName))]),s("td",{staticClass:"text-left"},[t._v(t._s(e.date))]),s("td",{staticClass:"text-left"},[t._v(t._s(e.start))]),s("td",{staticClass:"text-left"},[s("div",{staticClass:"row"},[s("div",t._l(e.itemPurchase,(function(e){return s("q-card-section",{key:e.id},[t._v(t._s(e.service_equipment))])})),1)])]),s("td",{staticClass:"text-right"},[t._v("\n              "+t._s(t._f("currency")(e.mobilizationFee,"₱",2,{decimalSeparator:"."}))+"\n            ")]),s("td",{staticClass:"text-right"},[s("div",{staticClass:"row"},[s("div",t._l(e.itemPurchase,(function(e){return s("q-card-section",{key:e.id},[t._v("\n                    "+t._s(t._f("currency")(e.service_price,"₱",2,{decimalSeparator:"."}))+"\n                  ")])})),1)])]),s("td",{staticClass:"text-right"},[t._v("\n              "+t._s(t._f("currency")(e.totalEquipmentPrice,"₱",2,{decimalSeparator:"."}))+"\n            ")]),s("td",{staticClass:"text-left"},[s("div",{staticClass:"row"},[s("div",{staticClass:"row"},[s("div",{staticClass:"row"},t._l(e.itemPurchase,(function(e,a){return s("q-card-section",{key:e.id},[t._v(t._s(e.service_quantity))])})),1)])])]),s("td",{staticClass:"text-right"},[t._v("\n              "+t._s(t._f("currency")(e.totalPrice,"₱",2,{decimalSeparator:"."}))+"\n            ")]),s("td",{staticClass:"text-left"},[t._v(t._s(e.location))]),s("td",{staticClass:"text-left"},[s("div",{staticClass:"row"},[s("div",t._l(e.itemPurchase,(function(e){return s("q-card-section",{key:e.id},[t._v(t._s(e.service_name))])})),1)])]),s("td",{staticClass:"text-left"},[s("q-badge",{attrs:{color:e.optionReport?"green-7":"grey-4"}},[t._v(t._s(e.optionReport?"Yes":"No"))])],1),s("td",{staticClass:"text-left"},["pending"==e.status?s("q-badge",{attrs:{color:"orange-7"}},[t._v("Pending")]):t._e(),"approved"==e.status?s("q-badge",{attrs:{color:"green-7"}},[t._v("Approved")]):t._e(),"ongoing"==e.status?s("q-badge",{attrs:{color:"orange-7"}},[t._v("On-Going")]):t._e(),"done"==e.status?s("q-badge",{attrs:{color:"orange-7"}},[t._v("Done")]):t._e()],1),s("td",{staticClass:"text-left"},[s("q-btn",{attrs:{round:"",color:"primary",flat:"",dense:"",icon:"thumb_down_alt"},on:{click:function(s){return t.cancelProposal(e)}}},[s("q-tooltip",{attrs:{"content-class":"bg-red"}},[t._v("Cancel")])],1),s("view-quotation",{attrs:{proposalId:e.id}}),s("q-btn",{attrs:{round:"",color:"primary",flat:"",dense:"",icon:"assignment_turned_in"}},[s("q-tooltip",{attrs:{"content-class":"bg-red"}},[t._v("For Inspection")])],1)],1)])})),0)])],1)])])},r=[],i=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("c47a")),n=s.n(i),o=s("2f62"),c=s("fc1b");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var p={firestore:function(){return{preproposals:c["e"].collection("preproposals")}},data:function(){return{clientPreproposals:{}}},mounted:function(){this.$binding("clientPreproposals",c["e"].collection("preproposals").where("status","==","ongoing").orderBy("start"))},computed:d({},Object(o["d"])("auth",["loggedIn","userDetails","setAdmin"]))},u=p,_=s("2877"),f=Object(_["a"])(u,a,r,!1,null,null,null);e["default"]=f.exports}}]);