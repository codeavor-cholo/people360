(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["99f56d6e"],{"5b0f":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[t.cart.length?[s("q-stepper",{ref:"stepper",attrs:{contracted:"",color:"primary",animated:""},model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[s("q-step",{attrs:{name:1,title:"Select campaign settings",icon:"settings",done:t.step>1}},[s("q-card-actions",{},[s("q-item-label",{staticClass:"q-ml-md"},[s("q-item-label",{staticClass:"col text-justify q-pb-xs"},[s("strong",[t._v("1.")]),t._v("\n              If there's a Lifting Equipment, test weight for load testing, as well as necessary equipment for moving the test weights will be provided by the\n              "),s("strong",[t._v(t._s(this.userDetails.companyName))])]),s("q-item-label",{staticClass:"col text-justify q-pb-xs"},[s("strong",[t._v("2.")]),s("strong",[t._v(t._s(this.userDetails.companyName))]),t._v(" will provide a counterpart Safety Officer who will be the dedicated Liason Officer to coordinate with the other concerned parties within its organization.\n            ")]),s("q-item-label",{staticClass:"col text-justify q-pb-xs"},[s("strong",[t._v("3.")]),s("strong",[t._v("All equipment inspected, even if it is deemed that inspection is no longer necessary on that equipment, whether it passes or fails, will be included in the billing")])]),s("q-item-label",{staticClass:"col text-justify q-pb-xs"},[s("strong",[t._v("4.")]),s("strong",[t._v("Grace Period:")]),t._v(" If equipment fails an inspection, there will be a\n              "),s("strong",[t._v("30-days grace period")]),t._v("- within this period only mobilization will be billed for the reinspection. Beyond that period, it will be billed as new equipment.\n            ")]),s("q-item-label",{staticClass:"col text-justify q-pb-xs"},[s("strong",[t._v("5.")]),s("strong",[t._v("Equipment Breakdown.")]),t._v("\n              PEOPLE360 is not responsible for any loss, destruction, or damage that may occur during the conduct of inspection of the units of equipment, nor any parts of said number of equipment, covered by this agreement.\n            ")]),s("q-item-label",{staticClass:"col text-justify q-pb-xs"},[s("strong",[t._v("6.")]),t._v("\n              If DOLE Witness is required,\n              "),s("strong",[t._v("("+t._s(this.userDetails.companyName)+")")]),t._v(" will make the necessary arrangements.\n            ")]),s("q-item-label",{staticClass:"col text-justify q-pb-md"},[s("strong",[t._v("7.")]),t._v("\n              This qoutation is only valid for 6 months after the date of issuance.\n            ")])],1),s("q-item-label",{staticClass:"col-6 text-justify q-pb-lg"},[t._v("Yours Very Truly,")]),s("div",{staticClass:"row col-6"},[s("q-item-label",{staticClass:"col-12 text-justify"},[t._v("Conforme:")]),s("q-item-label",{staticClass:"col-12 text-justify"},[t._v("\n              For\n              "),s("strong",[t._v(t._s(this.userDetails.companyName))])])],1),s("div",{staticClass:"row col-6"},[s("q-item-label",{staticClass:"col-12"},[t._v("People 360 Consulting Company")])],1),s("div",{staticClass:"row col-6 q-mt-lg"},[s("q-item-label",{staticClass:"col q-pb-lg"},[t._v("("+t._s(this.userDetails.name)+" "+t._s(this.userDetails.middleName.charAt(0))+". "+t._s(this.userDetails.lastName)+", "+t._s(this.todaysDate)+")")])],1)],1),s("q-btn",{attrs:{round:"",color:"primary",icon:"arrow_forward"},on:{click:function(){t.done1=!0,t.step=2}}})],1),s("q-step",{attrs:{name:2,title:"Create an ad group",caption:"Optional",icon:"add_shopping_cart",done:t.step>2}},[s("div",{staticClass:"text-subtitle2"},[s("q-card-section",[s("div",{staticClass:"text-h6 text-primary"},[t._v("Formal Quotation")])]),s("q-list",t._l(t.cart,(function(e){return s("q-item",{key:e.id},[s("q-item-section",{attrs:{top:"",avatar:""}},[s("q-avatar",[s("img",{attrs:{src:e.service_photo}})])],1),s("q-item-section",[s("q-item-label",[t._v(t._s(e.service_name))]),s("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.service_equipment))])],1),s("q-item-section",{attrs:{side:"",top:""}},[s("q-badge",[t._v("\n                  "+t._s(t._f("currency")(e.service_price,"₱",2,{decimalSeparator:"."}))+"\n                ")]),s("q-item-label",{attrs:{caption:""}},[t._v("Qty: "+t._s(e.service_quantity))]),s("q-btn",{attrs:{dense:"",round:"",size:"8px",icon:"clear",flat:""},on:{click:function(s){return t.removeToCart(e)}}})],1)],1)})),1)],1),s("q-separator"),s("q-badge",{attrs:{color:"red"}},[t._v("Note: Please review items before to submit")]),s("q-card-actions",{staticClass:"q-pr-md row",attrs:{align:"right"}},[s("q-space"),s("div",{attrs:{align:"right"}},[s("q-item-label",{staticClass:"text-grey-8 q-pb-xs"},[t._v("\n              Total:\n              "),s("strong",[t._v(t._s(t._f("currency")(t.totalPrice,"₱",2,{decimalSeparator:"."})))])]),s("q-item-label",{staticClass:"text-grey-8 q-pb-xs"},[t._v("\n              ADD 12% VAT\n              "),s("strong",[t._v("\n                "+t._s(t._f("currency")(t.computeTax,"₱",2,{decimalSeparator:"."}))+"\n              ")])]),"new"==t.userDetails.roles?s("q-item-label",{staticClass:"text-grey-8 q-pb-xs"},[t._v("\n              Mobilization Fee:\n              "),s("strong",[t._v("\n                "+t._s(t._f("currency")(t.preproposal.mobilizationFee.newClientPrice,"₱",2,{decimalSeparator:"."}))+"\n              ")])]):t._e(),"old"==t.userDetails.roles?s("q-item-label",{staticClass:"text-grey-8 q-pb-xs"},[t._v("\n              Mobilization Fee:\n              "),s("strong",[t._v("\n                "+t._s(t._f("currency")(t.preproposal.mobilizationFee.oldClientPrice,"₱",2,{decimalSeparator:"."}))+"\n              ")])]):t._e(),"new"==t.userDetails.roles?s("q-item-label",{staticClass:"q-pb-xs"},[s("strong",[t._v("GRAND TOTAL:")]),s("strong",{staticStyle:{"font-size":"15px"}},[t._v("\n                "+t._s(t._f("currency")(t.grandTotalforNew,"₱",2,{decimalSeparator:"."}))+"\n              ")])]):t._e(),"old"==t.userDetails.roles?s("q-item-label",{staticClass:"q-pb-xs"},[s("strong",[t._v("GRAND TOTAL:")]),s("strong",{staticStyle:{"font-size":"15px"}},[t._v("\n                "+t._s(t._f("currency")(t.grandTotalforOld,"₱",2,{decimalSeparator:"."}))+"\n              ")])]):t._e()],1)],1),s("div",{staticClass:"q-mt-md"},[s("q-form",{on:{submit:function(e){return e.preventDefault(),t.requestProposal(e)}}},[s("q-card",{staticClass:"my-card bg-white text-primary",attrs:{flat:""}},[s("q-card-section",{},[s("q-input",{staticClass:"col q-mb-sm",staticStyle:{display:"none"},attrs:{disable:"",label:"Date"},model:{value:t.preproposal.date,callback:function(e){t.$set(t.preproposal,"date",e)},expression:"preproposal.date"}}),s("q-input",{staticClass:"col q-mb-sm",staticStyle:{display:"none"},attrs:{disable:"",label:"Proposal Number"},model:{value:t.preproposal.proposalNumber,callback:function(e){t.$set(t.preproposal,"proposalNumber",e)},expression:"preproposal.proposalNumber"}}),s("q-select",{staticClass:"col q-mb-none q-pb-sm",attrs:{rules:[function(t){return!!t||"Field is required"}],options:t.locations,label:"Location"},model:{value:t.preproposal.mobilizationFee,callback:function(e){t.$set(t.preproposal,"mobilizationFee",e)},expression:"preproposal.mobilizationFee"}}),s("q-input",{staticClass:"col q-mb-none q-pb-sm",attrs:{"lazy-rules":"",label:"Start Date"},scopedSlots:t._u([{key:"append",fn:function(){return[t.preproposal.start?s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"}}):t._e(),s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[s("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-date",{attrs:{mask:"YYYY-MM-DD",landscape:"",options:t.optionsFn},on:{input:function(){return t.$refs.qDateProxy.hide()}},model:{value:t.preproposal.start,callback:function(e){t.$set(t.preproposal,"start",e)},expression:"preproposal.start"}})],1)],1)]},proxy:!0}],null,!1,3871236738),model:{value:t.preproposal.start,callback:function(e){t.$set(t.preproposal,"start",e)},expression:"preproposal.start"}}),s("q-select",{staticClass:"col",attrs:{rules:[function(t){return!!t||"Field is required"}],options:t.optionsReport,label:"With Report?"},model:{value:t.preproposal.optionReport,callback:function(e){t.$set(t.preproposal,"optionReport",e)},expression:"preproposal.optionReport"}})],1),s("q-card-actions",[t.step>1?s("q-btn",{attrs:{round:"",color:"primary",icon:"arrow_back"},on:{click:function(e){return t.$refs.stepper.previous()}}}):t._e(),s("q-space"),s("q-btn",{attrs:{type:"submit",disable:!t.cart.length,color:"primary",label:"Submit"}})],1)],1)],1)],1)],1)],1)]:[s("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut absolute-top"}},[s("q-banner",{staticClass:"fixed-center",scopedSlots:t._u([{key:"avatar",fn:function(){return[s("span",[t._v("\n            No items on cart\n            "),s("q-spinner-cube",{attrs:{size:"1em",color:"primary"}})],1)]},proxy:!0}])})],1)],s("q-dialog",{model:{value:t.medium,callback:function(e){t.medium=e},expression:"medium"}},[s("add-event",{attrs:{start:t.start,end:t.end},on:{close:function(e){t.medium=!1}}})],1),s("q-dialog",{model:{value:t.showEditEvent,callback:function(e){t.showEditEvent=e},expression:"showEditEvent"}},[s("edit-event",{attrs:{title:t.event.title,details:t.event.details,start:t.event.start,end:t.event.end,id:t.event.id,color:t.event.color},on:{close:function(e){t.showEditEvent=!1}}})],1)],2)},a=[],r=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("f751"),s("4db1")),i=s.n(r),n=s("c47a"),l=s.n(n),p=(s("7f7f"),s("f576"),s("dc09")),c=s("88e1"),d=s("a7c0"),u=s("19bc"),m=s("f88c"),h=(s("795d"),s("a435"),s("1599"),s("fc1b")),f=s("2bdd"),b=s("2f62");function v(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function g(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(Object(s),!0).forEach((function(e){l()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var q={firestore:function(){return{preproposals:h["e"].collection("preproposals"),mobilizationFees:h["e"].collection("mobilizationFees"),safetyAssociates:h["e"].collection("safetyAssociates")}},data:function(){return{step:1,todaysDate:"",date:"2020/02/17",locations:[],safetyAssociates:{},start:"",end:"",medium:!1,showEditEvent:!1,hiddenDays:[0],clientReservation:{},calendarPlugins:[c["d"],d["a"],u["a"],m["a"]],title:null,type:"month",calendarWeekends:!0,today:(new Date).toISOString().substr(0,10),request:[],grandTotalforNewClient:"",grandTotalforOldClient:"",preproposal:{allDay:"true",color:"#027be3",start:"",end:"",title:"",date:"",totalPrice:"",proposalNumber:[],companyName:"",location:"",optionReport:"",status:"",itemPurchase:[],fullName:"",mobilizationFee:"",totalEquipmentPrice:"",projectLocation:"",tax:""},stars:"",optionsReport:["Yes","No"],event:{title:"",details:"",start:"",end:"",color:"",id:""}}},methods:{optionsFn:function(t){var e=new Date,s=(new Date,e.setDate(e.getDate()+1),String(e.getDate()).padStart(2,"0")),o=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return e=a+"/"+o+"/"+s,t>e&&t<="3000/03/15"},handleSelect:function(t){this.medium=!0,this.start=t.startStr,this.end=t.endStr},handleClick:function(t){this.showEditEvent=!0,console.log(t),this.event.title=t.event.title,this.event.details=t.event.extendedProps.details,this.event.id=t.event.id,this.event.color=t.event.borderColor;var e=t.event.start.getFullYear(),s=t.event.start.getDay(),o=t.event.start.getDate();this.event.start=e+"-"+s+"-"+o;var a=t.event.end.getFullYear(),r=t.event.end.getMonth(),i=t.event.end.getDay();this.event.end=a+"-"+r+"-"+i},getEventColor:function(t){return t.color},removeToCart:function(t){this.$store.commit("storeservices/removeItemFromCart",t)},clear:function(){this.preproposal.start="",this.preproposal.end="",this.preproposal.title="",this.preproposal.date="",this.preproposal.proposalNumber="",this.preproposal.companyName="",this.preproposal.location="",this.preproposal.optionReport="",this.preproposal.quantity="",this.preproposal.equipment="",this.preproposal.name="",this.preproposal.status=""},requestProposals:function(){console.log(this.preproposal.mobilizationFee.value),console.log(this.grandTotalforNew),console.log(this.grandTotalforOld),"new"==this.userDetails.roles?console.log(this.preproposal.mobilizationFee.newClientPrice):console.log(this.preproposal.mobilizationFee.oldClientPrice),console.log(this.totalPrice)},requestProposal:function(){var t=this,e=new Date,s=new Date,o=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();e=r+"-"+a+"-"+o,this.preproposal.date=e,s=a,this.preproposal.proposalNumber="PN-IN-"+Math.floor(1e9*Math.random()+1)+"-"+s,this.$q.loading.show();var n=this.cart.map((function(t){return l()({},t.service_Id,t.service_quantity)}));n=Object.assign.apply(Object,[{}].concat(i()(n)));var p=this.cart.map((function(t){return l()({},t.service_Id,t.service_price)}));p=Object.assign.apply(Object,[{}].concat(i()(p)));var c=this.cart.map((function(t){return l()({},t.service_Id,t.service_equipment)}));c=Object.assign.apply(Object,[{}].concat(i()(c)));var d=this.cart.map((function(t){return l()({},t.service_Id,t.service_name)}));d=Object.assign.apply(Object,[{}].concat(i()(d))),this.preproposal.id=h["c"].auth().currentUser.uid,this.preproposal.location=this.userDetails.companyLocation,this.preproposal.fullName=this.userDetails.name+" "+this.userDetails.middleName.charAt(0)+". "+this.userDetails.lastName,this.preproposal.projectLocation=this.preproposal.mobilizationFee.label,this.preproposal.itemPurchase=this.cart,this.preproposal.companyName=this.userDetails.companyName,"new"==this.userDetails.roles?(this.preproposal.status="pending",this.preproposal.downPayment=20*this.grandTotalforNewClient/100,this.preproposal.totalPrice=this.grandTotalforNewClient,this.preproposal.balance=this.grandTotalforNewClient,this.preproposal.mobilizationFee=this.preproposal.mobilizationFee.newClientPrice):(this.preproposal.status="approved",this.preproposal.totalPrice=this.grandTotalforOldClient,this.preproposal.balance=this.grandTotalforOldClient,this.preproposal.mobilizationFee=this.preproposal.mobilizationFee.oldClientPrice),"Yes"===this.preproposal.optionReport&&(this.preproposal.optionReport=!0),this.preproposal.totalEquipmentPrice=this.totalPrice,this.preproposal.title=this.preproposal.companyName+" "+this.preproposal.location,this.$firestore.preproposals.add(this.preproposal).then((function(e){t.$store.commit("storeservices/removeItemFromCart",t.cart),t.clear(),console.log(e),t.$q.loading.hide(),"new"==t.userDetails.roles?t.$q.dialog({title:"Success",message:"Please proceed for downpayment",persistent:!0}):t.$q.dialog({title:"Reserved",message:"Please wait for inspectors",persistent:!0}),t.$store.commit("storeservices/removeItemFromCart",t.cart)})).catch((function(t){Object(f["a"])(t.message),console.log(t)}))}},mounted:function(){var t=this,e=new Date,s=(new Date,String(e.getDate()).padStart(2,"0")),o=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();e=a+"-"+o+"-"+s,this.todaysDate=e,this.$binding("locations",h["e"].collection("mobilizationFees")),this.$binding("safetyAssociates",h["e"].collection("safetyAssociates"));var r=h["c"].auth().currentUser;r&&r.getIdTokenResult().then((function(e){var s=e.claims.admin;1==s?(t.admin=!0,t.$store.commit("storeevents/setEventDownloaded",!0)):t.$binding("clientReservation",h["e"].collection("inspectionEvent").where("id","==",r.uid)).then((function(t){console.log(t)})).catch((function(t){Object(f["a"])(t.message)}))}))},computed:g({computeTax:function(){return this.preproposal.tax=12*this.totalPrice/100},downPayment:function(){return this.preproposal.downPayment=12*this.totalPrice/100},grandTotalforNew:function(){return this.grandTotalforNewClient=+this.totalPrice+ +this.preproposal.mobilizationFee.newClientPrice+12*+this.totalPrice/100},grandTotalforOld:function(){return this.grandTotalforOldClient=+this.totalPrice+ +this.preproposal.mobilizationFee.oldClientPrice}},Object(b["d"])("storeservices",["cart"]),{},Object(b["c"])("storeservices",["totalPrice"]),{},Object(b["d"])("auth",["loggedIn","userDetails"])),components:{FullCalendar:p["a"],"add-event":s("6fae").default,"edit-event":s("b78f").default}},y=q,_=s("2877"),w=Object(_["a"])(y,o,a,!1,null,null,null);e["default"]=w.exports},"7a81":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("q-pull-to-refresh",{on:{refresh:t.refresh}},[s("checkout")],1)],1)},a=[],r={components:{checkout:s("5b0f").default},methods:{refresh:function(t){setTimeout((function(){t()}),1e3)}}},i=r,n=s("2877"),l=Object(n["a"])(i,o,a,!1,null,null,null);e["default"]=l.exports}}]);