(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{nKdS:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),s=n("3Pt+"),a=n("tk/3"),i=n("tyNb"),l=n("YkZh"),o=n("fXoL"),d=n("JhMT"),m=n("5eHb"),c=n("2Vo4"),p=n("itXk"),u=n("LRne"),h=n("z6cu"),f=n("7o/Q");function v(e=-1){return t=>t.lift(new g(e,t))}class g{constructor(e,t){this.count=e,this.source=t}call(e,t){return t.subscribe(new S(e,this.count,this.source))}}class S extends f.a{constructor(e,t,n){super(e),this.count=t,this.source=n}error(e){if(!this.isStopped){const{source:t,count:n}=this;if(0===n)return super.error(e);n>-1&&(this.count=n-1),t.subscribe(this._unsubscribeAndRecycle())}}}var b=n("lJxs"),E=n("vkgz"),x=n("JIr8"),y=n("AytR");let C=(()=>{class e{constructor(e){this.http=e,this.states=new c.a([]),this.states$=this.states.asObservable(),this.users=new c.a([]),this.users$=this.users.asObservable()}getUsers(e=!1){if(e||0===this.users.getValue().length||Date.now()-this._lastUserDataRetreivalTime>y.a.dataCaching.userData){const e=localStorage.getItem("users");if(e){const t=JSON.parse(e);this.users.next(t),console.log("GET users")}else Object(p.a)([this.http.get(y.a.apiUrl+"addresses.json"),this.http.get(y.a.apiUrl+"users.json")]).pipe(v(3),Object(b.a)(([e,t])=>(t.forEach(t=>t.addresses=e.filter(e=>t.addressIds.includes(e.id))),t)),Object(E.a)(e=>{this._lastUserDataRetreivalTime=Date.now(),this.users.next(e),console.log("GET users")}),Object(x.a)(this.handleError)).subscribe()}return this.users$}getStates(e=!1){return(e||0===this.states.getValue().length||Date.now()-this._lastStateDataRetreivalTime>y.a.dataCaching.defaultLong)&&this.http.get(y.a.apiUrl+"states.json").pipe(v(3),Object(E.a)(e=>{this._lastStateDataRetreivalTime=Date.now(),this.states.next(e),console.log("GET states")}),Object(x.a)(this.handleError)).subscribe(),this.states$}updateUser(e){const t=this.users.getValue();return t.map(t=>e.id===t.id?e:t),localStorage.setItem("users",JSON.stringify(t)),this.users.next(t),Object(u.a)(!0)}handleError(e){return console.error(e),Object(h.a)(e||"Server error")}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](a.b))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const w=function(e,t,n){return{slideInLeft:e,bounce:t,shake:n}};function M(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",1),o["\u0275\u0275elementStart"](1,"h3"),o["\u0275\u0275text"](2,"User"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"form",2,3),o["\u0275\u0275elementStart"](5,"div",4),o["\u0275\u0275elementStart"](6,"label",5),o["\u0275\u0275text"](7,"First Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"div",6),o["\u0275\u0275elementStart"](9,"div",7),o["\u0275\u0275elementStart"](10,"div",8),o["\u0275\u0275element"](11,"i",9),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"input",10,11),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().formUser.firstName=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"div",12),o["\u0275\u0275text"](15," First name must be between 2 and 20 characters "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"div",4),o["\u0275\u0275elementStart"](17,"label",5),o["\u0275\u0275text"](18,"Last Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"div",6),o["\u0275\u0275elementStart"](20,"div",7),o["\u0275\u0275elementStart"](21,"div",8),o["\u0275\u0275element"](22,"i",13),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"input",14,15),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().formUser.lastName=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"div",12),o["\u0275\u0275text"](26," Last name must be between 2 and 20 characters "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](27,"div",4),o["\u0275\u0275elementStart"](28,"label",5),o["\u0275\u0275text"](29,"Email Address"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](30,"div",6),o["\u0275\u0275elementStart"](31,"div",7),o["\u0275\u0275elementStart"](32,"div",8),o["\u0275\u0275element"](33,"i",16),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](34,"input",17,18),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().formUser.email=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](36,"div",12),o["\u0275\u0275text"](37," Not a valid email address "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](38,"div",4),o["\u0275\u0275elementStart"](39,"label",5),o["\u0275\u0275text"](40,"Phone Number"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](41,"div",6),o["\u0275\u0275elementStart"](42,"div",7),o["\u0275\u0275elementStart"](43,"div",8),o["\u0275\u0275element"](44,"i",19),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](45,"input",20,21),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().formUser.phone=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](47,"div",12),o["\u0275\u0275text"](48," Phone is not in the required format (###) ###-#### "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](49,"div",4),o["\u0275\u0275elementStart"](50,"label",5),o["\u0275\u0275text"](51,"Date of Birth"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](52,"div",6),o["\u0275\u0275elementStart"](53,"div",7),o["\u0275\u0275elementStart"](54,"div",8),o["\u0275\u0275element"](55,"i",22),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](56,"input",23,24),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().formUser.dob=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](58,"div",12),o["\u0275\u0275text"](59," Date of birth is invalid "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](60,"div",25),o["\u0275\u0275elementStart"](61,"button",26),o["\u0275\u0275listener"]("click",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().saveForm()})),o["\u0275\u0275element"](62,"i",27),o["\u0275\u0275text"](63," Save"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](64," \xa0 "),o["\u0275\u0275elementStart"](65,"button",26),o["\u0275\u0275listener"]("click",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().cancelForm()})),o["\u0275\u0275element"](66,"i",28),o["\u0275\u0275text"](67," Cancel"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](68,"div",29),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275reference"](4),t=o["\u0275\u0275reference"](13),n=o["\u0275\u0275reference"](24),r=o["\u0275\u0275reference"](35),s=o["\u0275\u0275reference"](46),a=o["\u0275\u0275reference"](57),i=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("ngClass",o["\u0275\u0275pureFunction3"](37,w,"new"===i.status,"saved"===i.status,"canceled"===i.status)),o["\u0275\u0275advance"](5),o["\u0275\u0275classProp"]("has-error",t.invalid&&t.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formUser.firstName),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("hidden",t.valid||t.pristine),o["\u0275\u0275advance"](2),o["\u0275\u0275classProp"]("has-error",n.invalid&&n.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formUser.lastName),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("hidden",n.valid||n.pristine),o["\u0275\u0275advance"](2),o["\u0275\u0275classProp"]("has-error",r.invalid&&r.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formUser.email),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("hidden",r.valid||r.pristine),o["\u0275\u0275advance"](2),o["\u0275\u0275classProp"]("has-error",s.invalid&&s.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formUser.phone),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("hidden",s.valid||s.pristine),o["\u0275\u0275advance"](2),o["\u0275\u0275classProp"]("has-error",a.invalid&&a.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formUser.dob),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("hidden",a.valid),o["\u0275\u0275advance"](3),o["\u0275\u0275classProp"]("btn-sm",i.shrink),o["\u0275\u0275property"]("disabled",e.pristine||e.invalid),o["\u0275\u0275advance"](4),o["\u0275\u0275classProp"]("btn-sm",i.shrink),o["\u0275\u0275property"]("disabled",e.pristine)}}let U=(()=>{class e{constructor(){this.shrink=window.innerWidth<768,this.status="new",this.save=new o.EventEmitter}set user(e){this.inputUser=e,this.formUser=e?Object.assign({},e):null}ngOnInit(){window.onresize=()=>this.shrink=window.innerWidth<768}saveForm(){Object.assign(this.inputUser,this.formUser),this.save.emit(this.inputUser),this.status="saved"}cancelForm(){Object.assign(this.formUser,this.inputUser),this.status="canceled"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-form"]],inputs:{user:"user"},outputs:{save:"save"},decls:1,vars:1,consts:[["id","user-form","class","animated",3,"ngClass",4,"ngIf"],["id","user-form",1,"animated",3,"ngClass"],["novalidate",""],["userForm","ngForm"],[1,"form-group"],[1,"control-label"],[1,"input-group","margin-bottom-sm"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa","fa-user","fa-fw"],["type","text","name","firstName","placeholder","First Name","pattern","[A-Za-z ,.'-]+","required","","autofocus","","minlength","2","maxlength","20",1,"form-control",3,"ngModel","ngModelChange"],["firstNameControl","ngModel"],[1,"alert","alert-danger",3,"hidden"],[1,"fa","fa-users","fa-fw"],["type","text","name","lastName","placeholder","Last Name","pattern","[A-Za-z ,.'-]+","required","","minlength","2","maxlength","20",1,"form-control",3,"ngModel","ngModelChange"],["lastNameControl","ngModel"],[1,"fa","fa-envelope-o","fa-fw"],["type","email","name","email","required","","placeholder","Email address","pattern","[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",1,"form-control",3,"ngModel","ngModelChange"],["emailControl","ngModel"],[1,"fa","fa-phone","fa-fw"],["type","tel","name","phone","placeholder","(###) ###-####","pattern","[\\(]\\d{3}[\\)][\\s]\\d{3}[\\-]\\d{4}","required","",1,"form-control",3,"ngModel","ngModelChange"],["phoneControl","ngModel"],[1,"fa","fa-calendar","fa-fw"],["type","date","name","dob","placeholder","MM/DD/YYYY",1,"form-control",3,"ngModel","ngModelChange"],["dobControl","ngModel"],[2,"height","10px"],[1,"btn","btn-success",3,"disabled","click"],[1,"fa","fa-check"],[1,"fa","fa-times"],[1,"hidden-md-up",2,"height","20px"]],template:function(e,t){1&e&&o["\u0275\u0275template"](0,M,69,41,"div",0),2&e&&o["\u0275\u0275property"]("ngIf",t.formUser)},directives:[r.j,r.h,s.p,s.g,s.h,s.a,s.l,s.m,s.d,s.c,s.f,s.i],styles:[".form-group[_ngcontent-%COMP%]{margin-bottom:5px}h2[_ngcontent-%COMP%]{margin-top:0}input.ng-valid[_ngcontent-%COMP%]{border-left:5px solid #5cb85c}input.ng-invalid[_ngcontent-%COMP%]{border-left:5px solid #d9534f}label[_ngcontent-%COMP%]{margin-bottom:1px}"]}),e})();function O(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"option",29),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275property"]("value",e.abbreviation),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](e.name)}}function N(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",1),o["\u0275\u0275elementStart"](1,"h3"),o["\u0275\u0275text"](2,"Address"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"form",2,3),o["\u0275\u0275elementStart"](5,"div",4),o["\u0275\u0275elementStart"](6,"label",5),o["\u0275\u0275text"](7,"Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"div",6),o["\u0275\u0275elementStart"](9,"div",7),o["\u0275\u0275elementStart"](10,"div",8),o["\u0275\u0275element"](11,"i",9),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"input",10,11),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().formAddress.name=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"div",12),o["\u0275\u0275text"](15," Name only allows for alpha characters. First word must be capatalized. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"div",4),o["\u0275\u0275elementStart"](17,"label",5),o["\u0275\u0275text"](18,"Street Number"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"div",6),o["\u0275\u0275elementStart"](20,"div",7),o["\u0275\u0275elementStart"](21,"div",8),o["\u0275\u0275element"](22,"i",13),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"input",14,15),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().formAddress.streetNumber=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"div",12),o["\u0275\u0275text"](26," Street number is invalid and must be between 1 and 99999 "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](27,"div",4),o["\u0275\u0275elementStart"](28,"label",5),o["\u0275\u0275text"](29,"Street Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](30,"div",6),o["\u0275\u0275elementStart"](31,"div",7),o["\u0275\u0275elementStart"](32,"div",8),o["\u0275\u0275element"](33,"i",16),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](34,"input",17,18),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().formAddress.streetName=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](36,"div",12),o["\u0275\u0275text"](37," Street name only allows for alpha characters. First word must be capatalized. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](38,"div",4),o["\u0275\u0275elementStart"](39,"label",5),o["\u0275\u0275text"](40,"City"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](41,"div",6),o["\u0275\u0275elementStart"](42,"div",7),o["\u0275\u0275elementStart"](43,"div",8),o["\u0275\u0275element"](44,"i",19),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](45,"input",20,21),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().formAddress.city=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](47,"div",12),o["\u0275\u0275text"](48," City is invalid. First word must be capatalized. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](49,"div",4),o["\u0275\u0275elementStart"](50,"label",5),o["\u0275\u0275text"](51,"State"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](52,"div",6),o["\u0275\u0275elementStart"](53,"div",7),o["\u0275\u0275elementStart"](54,"div",8),o["\u0275\u0275element"](55,"i",22),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](56,"select",23,24),o["\u0275\u0275listener"]("change",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().onUpdateState(t)})),o["\u0275\u0275template"](58,O,2,2,"option",25),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](59,"div",12),o["\u0275\u0275text"](60," State is required "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](61,"div",4),o["\u0275\u0275elementStart"](62,"label",5),o["\u0275\u0275text"](63,"Zip Code"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](64,"div",6),o["\u0275\u0275elementStart"](65,"div",7),o["\u0275\u0275elementStart"](66,"div",8),o["\u0275\u0275element"](67,"i",26),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](68,"input",27,28),o["\u0275\u0275listener"]("ngModelChange",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().formAddress.zipCode=t})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](70,"div",12),o["\u0275\u0275text"](71," Zip code must be in the format ##### or #####-#### "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275reference"](13),t=o["\u0275\u0275reference"](24),n=o["\u0275\u0275reference"](35),r=o["\u0275\u0275reference"](46),s=o["\u0275\u0275reference"](57),a=o["\u0275\u0275reference"](69),i=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](5),o["\u0275\u0275classProp"]("has-error",e.invalid&&e.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formAddress.name),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("hidden",e.valid||e.pristine),o["\u0275\u0275advance"](2),o["\u0275\u0275classProp"]("has-error",t.invalid&&t.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formAddress.streetNumber),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("hidden",t.valid||t.pristine),o["\u0275\u0275advance"](2),o["\u0275\u0275classProp"]("has-error",n.invalid&&n.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formAddress.streetName),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("hidden",n.valid||n.pristine),o["\u0275\u0275advance"](2),o["\u0275\u0275classProp"]("has-error",r.invalid&&r.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formAddress.city),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("hidden",r.valid||r.pristine),o["\u0275\u0275advance"](2),o["\u0275\u0275classProp"]("has-error",s.invalid&&s.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formAddress.state),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngForOf",i.states),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("hidden",s.valid||s.pristine),o["\u0275\u0275advance"](2),o["\u0275\u0275classProp"]("has-error",a.invalid&&a.dirty),o["\u0275\u0275advance"](7),o["\u0275\u0275classProp"]("form-control-sm",i.shrink),o["\u0275\u0275property"]("ngModel",i.formAddress.zipCode),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("hidden",a.valid||a.pristine)}}let k=(()=>{class e{constructor(e,t){this.toastrService=e,this._userService=t,this.shrink=window.innerWidth<768,this.states=[],this.save=new o.EventEmitter}set address(e){this.inputAddress=e,this.formAddress=e?Object.assign({},e):null}ngOnInit(){this.stateSubscription=this._userService.getStates().subscribe(e=>this.states=e),window.onresize=()=>this.shrink=window.innerWidth<768}ngOnDestroy(){this.stateSubscription.unsubscribe()}onUpdateState(e){this.toastrService.success(e.target.selectedOptions[0].text,"State Changed")}saveForm(){Object.assign(this.inputAddress,this.formAddress),this.save.emit(this.inputAddress)}cancelForm(){Object.assign(this.formAddress,this.inputAddress)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](m.b),o["\u0275\u0275directiveInject"](C))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-address-form"]],inputs:{address:"address"},outputs:{save:"save"},decls:1,vars:1,consts:[["class","animated slideInRight",4,"ngIf"],[1,"animated","slideInRight"],["novalidate",""],["addressForm","ngForm"],[1,"form-group"],[1,"control-label"],[1,"input-group","margin-bottom-sm"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa","fa-thumb-tack","fa-fw"],["type","text","name","name","placeholder","Enter name (optional)","pattern","[A-Z]{1}[a-z]+(?:[\\s-][a-zA-Z]+)*",1,"form-control",3,"ngModel","ngModelChange"],["nameControl","ngModel"],[1,"alert","alert-danger",3,"hidden"],[1,"fa","fa-location-arrow","fa-fw"],["type","number","name","streetNumber","placeholder","Enter street house #","required","","min","1","max","99999",1,"form-control",3,"ngModel","ngModelChange"],["streetNumberControl","ngModel"],[1,"fa","fa-map-marker","fa-fw"],["type","text","name","streetName","required","","placeholder","Enter street name","pattern","[A-Z]{1}[a-z]+(?:[\\s-][a-zA-Z]+)*",1,"form-control",3,"ngModel","ngModelChange"],["streetNameControl","ngModel"],[1,"fa","fa-compass","fa-fw"],["type","text","name","city","required","","placeholder","Enter city name","pattern","[A-Z]{1}[a-z]+(?:[\\s-][a-zA-Z]+)*",1,"form-control",3,"ngModel","ngModelChange"],["cityControl","ngModel"],[1,"fa","fa-plane","fa-fw"],["name","state",1,"form-control",3,"ngModel","change"],["stateControl","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"fa","fa-globe","fa-fw"],["type","text","name","zipCode","required","","placeholder","Enter zip code","pattern","[0-9]{5}(?:-[0-9]{4})?",1,"form-control",3,"ngModel","ngModelChange"],["zipCodeControl","ngModel"],[3,"value"]],template:function(e,t){1&e&&o["\u0275\u0275template"](0,N,72,37,"div",0),2&e&&o["\u0275\u0275property"]("ngIf",t.formAddress)},directives:[r.j,s.p,s.g,s.h,s.a,s.l,s.f,s.i,s.k,s.m,s.n,r.i,s.j,s.o],styles:[".form-group[_ngcontent-%COMP%]{margin-bottom:5px}h2[_ngcontent-%COMP%]{margin-top:0}input.ng-valid[_ngcontent-%COMP%]{border-left:5px solid #5cb85c}input.ng-invalid[_ngcontent-%COMP%]{border-left:5px solid #d9534f}label[_ngcontent-%COMP%]{margin-bottom:1px}"]}),e})();const P=function(e,t){return{"fa-caret-down":e,"fa-caret-up":t}};function I(e,t){if(1&e&&o["\u0275\u0275element"](0,"i",20),2&e){const e=o["\u0275\u0275nextContext"](2);o["\u0275\u0275property"]("ngClass",o["\u0275\u0275pureFunction2"](1,P,!e.sortReverse,e.sortReverse))}}function A(e,t){if(1&e&&o["\u0275\u0275element"](0,"i",20),2&e){const e=o["\u0275\u0275nextContext"](2);o["\u0275\u0275property"]("ngClass",o["\u0275\u0275pureFunction2"](1,P,!e.sortReverse,e.sortReverse))}}function j(e,t){if(1&e&&o["\u0275\u0275element"](0,"i",20),2&e){const e=o["\u0275\u0275nextContext"](2);o["\u0275\u0275property"]("ngClass",o["\u0275\u0275pureFunction2"](1,P,!e.sortReverse,e.sortReverse))}}function F(e,t){if(1&e&&o["\u0275\u0275element"](0,"i",20),2&e){const e=o["\u0275\u0275nextContext"](2);o["\u0275\u0275property"]("ngClass",o["\u0275\u0275pureFunction2"](1,P,!e.sortReverse,e.sortReverse))}}function V(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"tr",21),o["\u0275\u0275listener"]("click",(function(n){o["\u0275\u0275restoreView"](e);const r=t.$implicit;return o["\u0275\u0275nextContext"](2).selectUser(r)})),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"td"),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"td"),o["\u0275\u0275text"](8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=o["\u0275\u0275nextContext"](2);o["\u0275\u0275classProp"]("bg-secondary",e===n.selectedUser)("text-light",e===n.selectedUser)("bold",e.isDirty),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.firstName),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.lastName),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.email),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.phone)}}function z(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",15),o["\u0275\u0275elementStart"](1,"table",16),o["\u0275\u0275elementStart"](2,"thead"),o["\u0275\u0275elementStart"](3,"tr"),o["\u0275\u0275elementStart"](4,"th",17),o["\u0275\u0275listener"]("click",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().changeSort("firstName")})),o["\u0275\u0275text"](5," First Name\xa0 "),o["\u0275\u0275template"](6,I,1,4,"i",18),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"th",17),o["\u0275\u0275listener"]("click",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().changeSort("lastName")})),o["\u0275\u0275text"](8," Last Name\xa0 "),o["\u0275\u0275template"](9,A,1,4,"i",18),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"th",17),o["\u0275\u0275listener"]("click",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().changeSort("email")})),o["\u0275\u0275text"](11," Email\xa0 "),o["\u0275\u0275template"](12,j,1,4,"i",18),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"th",17),o["\u0275\u0275listener"]("click",(function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().changeSort("phone")})),o["\u0275\u0275text"](14," Phone\xa0 "),o["\u0275\u0275template"](15,F,1,4,"i",18),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"tbody"),o["\u0275\u0275template"](17,V,9,10,"tr",19),o["\u0275\u0275pipe"](18,"sortObjects"),o["\u0275\u0275pipe"](19,"filterObjects"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275classProp"]("table-sm",e.shrink),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("ngIf","firstName"===e.sortType),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngIf","lastName"===e.sortType),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngIf","email"===e.sortType),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngIf","phone"===e.sortType),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngForOf",o["\u0275\u0275pipeBind3"](18,7,o["\u0275\u0275pipeBind2"](19,11,e.users,e.searchString),e.sortType,e.sortReverse))}}let R=(()=>{class e{constructor(){this.choose=new o.EventEmitter,this.isOpen=!0,this.sortType="firstName",this.sortReverse=!1,this.searchString="",this.selectedUser=null,this.shrink=window.innerWidth<768}ngOnInit(){window.onresize=()=>this.shrink=window.innerWidth<768}changeSort(e){e===this.sortType?this.sortReverse=!this.sortReverse:this.sortType=e}selectUser(e){this.selectedUser=e,this.choose.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-list"]],inputs:{users:"users"},outputs:{choose:"choose"},decls:20,vars:13,consts:[[1,"animated","slideInUp"],[1,"card"],[1,"card-header","bg-dark","text-light","d-flex","align-items-center"],[1,"mr-auto"],[1,"badge-light","rounded"],[1,"form-inline"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"fa","fa-search","fa-fw"],["name","searchString","type","text","placeholder","Search String","aria-label","Search String",1,"form-control",3,"ngModel","ngModelChange"],[1,"fa","fa-fw","align-self-center",3,"click"],[1,"card-body"],["class","table-responsive",4,"ngIf"],[1,"card-footer","text-info"],[1,"table-responsive"],[1,"table","table-striped","table-hover",2,"cursor","pointer"],["scope","col",3,"click"],["class","fa",3,"ngClass",4,"ngIf"],[3,"bg-secondary","text-light","bold","click",4,"ngFor","ngForOf"],[1,"fa",3,"ngClass"],[3,"click"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"h5",3),o["\u0275\u0275text"](4,"User List\xa0"),o["\u0275\u0275elementStart"](5,"span",4),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"form",5),o["\u0275\u0275elementStart"](8,"div",6),o["\u0275\u0275elementStart"](9,"div",7),o["\u0275\u0275elementStart"](10,"span",8),o["\u0275\u0275element"](11,"i",9),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"input",10),o["\u0275\u0275listener"]("ngModelChange",(function(e){return t.searchString=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](13," \xa0\xa0"),o["\u0275\u0275elementStart"](14,"i",11),o["\u0275\u0275listener"]("click",(function(e){return t.isOpen=!t.isOpen})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"div",12),o["\u0275\u0275template"](16,z,20,14,"div",13),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"div",14),o["\u0275\u0275text"](18," Select user to edit or view address details"),o["\u0275\u0275element"](19,"br"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](6),o["\u0275\u0275textInterpolate"](t.users.length),o["\u0275\u0275advance"](6),o["\u0275\u0275classProp"]("form-control-sm",t.shrink),o["\u0275\u0275property"]("ngModel",t.searchString),o["\u0275\u0275advance"](2),o["\u0275\u0275classProp"]("fa-chevron-right",!t.isOpen)("fa-chevron-down",t.isOpen),o["\u0275\u0275advance"](1),o["\u0275\u0275classProp"]("collapse",!t.isOpen),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.users.length>0),o["\u0275\u0275advance"](1),o["\u0275\u0275classProp"]("collapse",!t.isOpen))},directives:[s.p,s.g,s.h,s.a,s.f,s.i,r.j,r.i,r.h],pipes:[l.c,l.b],encapsulation:2}),e})(),_=(()=>{class e{constructor(e,t,n){this.connectivityService=e,this.toastrService=t,this._userService=n,this.address=null,this.addresses=[],this.isConnected=!0,this.subscriptions=[],this.user=null,this.users=[]}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}ngOnInit(){this.subscriptions.push(this.connectivityService.isConnected$.subscribe(e=>{if(this.isConnected=e,e){const e=localStorage.getItem("dirtyUsers");e&&(JSON.parse(e).forEach(e=>this.onSaveUser(e)),localStorage.removeItem("dirtyUsers"))}})),this.subscriptions.push(this._userService.getUsers(!0).subscribe(e=>this.users=e))}onSaveUser(e){if(this.isConnected)this._userService.updateUser(e).subscribe(t=>{this.toastrService.success(`User '${e.firstName} ${e.lastName}' saved to API`,"Save User"),console.log(`User '${e.firstName} ${e.lastName}' saved to API`)},t=>{console.error(`Error saving user '${e.firstName} ${e.lastName}' to API`,"Save User")});else{e.isDirty=!0,this.users.map(t=>e.id===t.id?e:t),localStorage.setItem("users",JSON.stringify(this.users));const t=this.users.filter(e=>e.isDirty);localStorage.setItem("dirtyUsers",JSON.stringify(t)),this.toastrService.success(`Offline - User '${e.firstName} ${e.lastName}' saved locally`,"Save User"),console.log(`Offline - User '${e.firstName} ${e.lastName}' saved locally.  Once connected, changes will be uploaded`)}}onSelect(e){window.scrollTo(0,0),this.user=e,e.addresses&&e.addresses.length>0&&(this.address=e.addresses[0])}reset(){localStorage.removeItem("users"),localStorage.removeItem("dirtyUsers"),this.user=null,this.address=null,this._userService.getUsers(!0),console.log("User list reset")}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](m.b),o["\u0275\u0275directiveInject"](C))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-shell"]],decls:9,vars:3,consts:[[1,"row"],[1,"col"],[3,"user","save"],[3,"address"],[1,"btn","btn-warning","mb-3",3,"click"],[3,"users","choose"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"app-user-form",2),o["\u0275\u0275listener"]("save",(function(e){return t.onSaveUser(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"div",1),o["\u0275\u0275element"](4,"app-address-form",3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"button",4),o["\u0275\u0275listener"]("click",(function(e){return t.reset()})),o["\u0275\u0275text"](6,"Reset List"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](7,"br"),o["\u0275\u0275elementStart"](8,"app-user-list",5),o["\u0275\u0275listener"]("choose",(function(e){return t.onSelect(e)})),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("user",t.user),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("address",t.address),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("users",t.users))},directives:[U,k,R],encapsulation:2}),e})();n.d(t,"UserModule",(function(){return D}));let D=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[C],imports:[[l.a,r.b,s.b,a.c,i.f.forChild([{path:"",component:_}])]]}),e})()}}]);