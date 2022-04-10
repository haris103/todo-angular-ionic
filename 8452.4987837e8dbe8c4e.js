"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8452],{5514:(x,f)=>{var m=function(){function n(r){if(!r)throw new TypeError("Invalid argument; `value` has no value.");this.value=n.EMPTY,r&&n.isGuid(r)&&(this.value=r)}return n.isGuid=function(r){var p=r.toString();return r&&(r instanceof n||n.validator.test(p))},n.create=function(){return new n([n.gen(2),n.gen(1),n.gen(1),n.gen(1),n.gen(3)].join("-"))},n.createEmpty=function(){return new n("emptyguid")},n.parse=function(r){return new n(r)},n.raw=function(){return[n.gen(2),n.gen(1),n.gen(1),n.gen(1),n.gen(3)].join("-")},n.gen=function(r){for(var p="",i=0;i<r;i++)p+=(65536*(1+Math.random())|0).toString(16).substring(1);return p},n.prototype.equals=function(r){return n.isGuid(r)&&this.value===r.toString()},n.prototype.isEmpty=function(){return this.value===n.EMPTY},n.prototype.toString=function(){return this.value},n.prototype.toJSON=function(){return{value:this.value}},n.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),n.EMPTY="00000000-0000-0000-0000-000000000000",n}();f.i=m},8452:(x,f,a)=>{a.r(f),a.d(f,{TodoappPageModule:()=>B});var m=a(6019),n=a(9010),r=a(4662),p=a(4510),i=a(607);const S=(0,i.ZF)("apireducer"),G=(0,i.P1)(S,e=>e.todo);(0,i.P1)(S,e=>e.todo);var u=(()=>{return(e=u||(u={})).GET_TODO="[GET_TODO]",e.GET_TODO_SUCCESS="[GET_TODO] SUCCESS",e.GET_TODO_FAILURE="[GET_TODO_FAILURE] FAILURE",e.ADD_TODO="[ADD_TODO]",e.ADD_TODO_SUCCESS="[ADD_TODO] SUCCESS",e.ADD_TODO_FAILURE="[ADD_TODO_FAILURE] FAILURE",e.DELETE_TODO="[DELETE_TODO]",e.DELETE_TODO_SUCCESS="[DELETE_TODO] SUCCESS",e.DELETE_TODO_FAILURE="[DELETE_TODO_FAILURE] FAILURE",e.UPDATE_TODO="[UPDATE_TODO]",e.UPDATE_TODO_SUCCESS="[UPDATE_TODO] SUCCESS",e.UPDATE_TODO_FAILURE="[UPDATE_TODO_FAILURE] FAILURE",u;var e})();const h=(0,i.PH)(u.GET_TODO),_=(0,i.PH)(u.GET_TODO_SUCCESS,(0,i.Ky)()),v=(0,i.PH)(u.GET_TODO_FAILURE),E=(0,i.PH)(u.DELETE_TODO,(0,i.Ky)()),b=(0,i.PH)(u.DELETE_TODO_SUCCESS),P=(0,i.PH)(u.DELETE_TODO_FAILURE),F=(0,i.PH)(u.ADD_TODO),Z=(0,i.PH)(u.ADD_TODO_SUCCESS),C=(0,i.PH)(u.ADD_TODO_FAILURE),U=(0,i.PH)(u.UPDATE_TODO,(0,i.Ky)()),j=(0,i.PH)(u.UPDATE_TODO_SUCCESS),I=(0,i.PH)(u.UPDATE_TODO_FAILURE);var t=a(3668),R=a(4522);let D=(()=>{class e{constructor(o){this.http=o}getData(){return this.http.get("https://jsonplaceholder.typicode.com/users").toPromise()}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(R.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var O=a(4762),w=a(5514),A=a(2411);let L=(()=>{class e{constructor(o,s){this.userapi=o,this.store=s,this.loginForm=new n.cw({input:new n.NI("")}),this.user=[],this.newEditItem2={input:"",id:null,toggleSubmit:!0},this.u=[]}getTodos(){return console.log("gggg",this.user),(0,A.of)(this.user)}getData(){return(0,A.of)(this.apiDataFromStore$)}getApiData(){return(0,O.mG)(this,void 0,void 0,function*(){try{const s=(yield this.userapi.getData())[Symbol.iterator]();let l=s.next();for(;!l.done;)this.user.push({input:l.value.name,id:w.i.create(),toggleSubmit:!0}),l=s.next(),console.log("Data from API",this.user)}catch(o){return console.log("ERROR IN API: ",o.message)}this.store.dispatch(h())})}onSubmit(){return(0,O.mG)(this,void 0,void 0,function*(){console.log("Reactive Form",this.loginForm.value.input),this.loginForm.value.input?this.loginForm.value.input&&!this.newEditItem2.toggleSubmit?(this.user=this.user.map(o=>o.id===this.newEditItem2.id?Object.assign(Object.assign({},o),{input:this.loginForm.value.input}):o),console.log("Block A Called"),this.loginForm.reset(),this.newEditItem2=Object.assign(Object.assign({},this.newEditItem2),{toggleSubmit:!0})):this.loginForm.value.input&&this.newEditItem2.toggleSubmit&&(this.user=Object.assign([],this.user),this.user.unshift({input:this.loginForm.value.input,id:w.i.create(),toggleSubmit:!0}),this.loginForm.get("input").reset(),console.log(this.user),console.log("Block B Called")):alert("Enter the valueeeeeee"),this.store.dispatch(h())})}onDelete(o){return(0,O.mG)(this,void 0,void 0,function*(){this.user=this.user.filter(s=>s.id!==o),this.store.dispatch(h())})}onEdit(o){return(0,O.mG)(this,void 0,void 0,function*(){const s=this.user.find(l=>l.id===o);this.newEditItem2=Object.assign(Object.assign({},s),{toggleSubmit:!1}),this.loginForm.controls.input.setValue(this.newEditItem2.input),this.store.dispatch(h())})}onRemove(){this.user.splice(0)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(D),t.LFG(i.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function y(e,c){if(1&e){const o=t.EpF();t.TgZ(0,"ion-grid"),t.TgZ(1,"ion-row"),t.TgZ(2,"ion-col",5),t.TgZ(3,"ion-text",14),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"ion-col",15),t.TgZ(6,"ion-button",9),t.NdJ("click",function(){const g=t.CHM(o).$implicit;return t.oxw().onEdit(g.id)}),t._UZ(7,"ion-icon",16),t.qZA(),t.TgZ(8,"ion-button",17),t.NdJ("click",function(){const g=t.CHM(o).$implicit;return t.oxw().onDelete(g.id)}),t._UZ(9,"ion-icon",18),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=c.$implicit;t.xp6(4),t.Oqu(o.input)}}const M=[{path:"",component:(()=>{class e{constructor(o,s,l,g){this.userapi=o,this.routerr=s,this.submitapi=l,this.store=g,this.user=[]}ngOnInit(){this.submitapi.getApiData(),this.apiDataFromStore$=this.store.select(G)}onDelete(o){this.store.dispatch(E({todoId:o}))}onEdit(o){this.submitapi.onEdit(o)}onSubmit(){this.submitapi.onSubmit()}onRemove(){this.submitapi.onRemove()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(D),t.Y36(p.F0),t.Y36(L),t.Y36(i.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-todoapp"]],decls:25,vars:5,consts:[[2,"background-color","#3880ff"],["size-md","6","offset-md","3"],[2,"text-align","center","font-family","'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif","color","#ffffff"],["color",""],["color","",1,"ion-text-center",2,"color","#3880ff"],["size-md","10",1,"bg1"],[1,"_form",3,"formGroup","ngSubmit"],["type","text","placeholder","Enter the list items here","formControlName","input",1,"_input"],[1,"bg2"],[3,"click"],["name","add-circle-sharp"],[4,"ngFor","ngForOf"],[1,"remove_btn1"],["size","default",3,"click"],[1,"text_color"],["size-md","2",1,"bg2"],["name","create-outline"],[1,"icon_btn",3,"click"],["name","close-circle-sharp"]],template:function(o,s){1&o&&(t.TgZ(0,"ion-content"),t.TgZ(1,"ion-grid",0),t.TgZ(2,"ion-row"),t.TgZ(3,"ion-col",1),t.TgZ(4,"h1",2),t._uU(5,"CRUD Operations oriented Todo app built with Angular and Ionic using NGRX"),t.qZA(),t.TgZ(6,"ion-card",3),t.TgZ(7,"ion-card-header",4),t._uU(8),t.qZA(),t.TgZ(9,"ion-grid"),t.TgZ(10,"ion-row"),t.TgZ(11,"ion-col",5),t.TgZ(12,"form",6),t.NdJ("ngSubmit",function(){return s.onSubmit()}),t._UZ(13,"input",7),t.qZA(),t.qZA(),t.TgZ(14,"ion-col",8),t.TgZ(15,"ion-button",9),t.NdJ("click",function(){return s.onSubmit()}),t._UZ(16,"ion-icon",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(17,y,10,1,"ion-grid",11),t.ALo(18,"async"),t.TgZ(19,"ion-grid"),t.TgZ(20,"ion-row"),t.TgZ(21,"ion-col",12),t.TgZ(22,"ion-button",13),t.NdJ("click",function(){return s.onRemove()}),t.TgZ(23,"ion-text"),t._uU(24,"Remove All"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(8),t.hij(" You entered: ",s.submitapi.loginForm.value.input," "),t.xp6(4),t.Q6J("formGroup",s.submitapi.loginForm),t.xp6(5),t.Q6J("ngForOf",t.lcZ(18,3,s.apiDataFromStore$)))},directives:[r.W2,r.jY,r.Nd,r.wI,r.PM,r.Zi,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,r.YG,r.gu,m.sg,r.yW],pipes:[m.Ov],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.text_color[_ngcontent-%COMP%]{color:#3880ff}.loop[_ngcontent-%COMP%]{background-color:#021bfa;color:green;height:200px}.bg1[_ngcontent-%COMP%]{display:flex;justify-content:left;align-items:center}.bg2[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center}._form[_ngcontent-%COMP%]{width:100%;height:40px}._input[_ngcontent-%COMP%]{width:100%;height:inherit}.remove_btn1[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]}),e})()}];let z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(M)],p.Bz]}),e})();const H=(0,i.Lq)({loading:!1,error:"",todo:null},(0,i.on)(h,e=>Object.assign(Object.assign({},e),{loading:!0})),(0,i.on)(_,(e,c)=>Object.assign(Object.assign({},e),{loading:!1,todo:c.userr})),(0,i.on)(v,e=>Object.assign(Object.assign({},e),{loading:!1,error:"Something went wrong"})),(0,i.on)(E,e=>Object.assign(Object.assign({},e),{loading:!0})),(0,i.on)(b,e=>Object.assign(Object.assign({},e),{loading:!1})),(0,i.on)(P,e=>Object.assign(Object.assign({},e),{loading:!1,error:"Something went wrong"})),(0,i.on)(F,e=>Object.assign(Object.assign({},e),{loading:!0})),(0,i.on)(Z,e=>Object.assign(Object.assign({},e),{loading:!1})),(0,i.on)(C,e=>Object.assign(Object.assign({},e),{loading:!1,error:"Something went wrong"})),(0,i.on)(U,e=>Object.assign(Object.assign({},e),{loading:!0})),(0,i.on)(j,e=>Object.assign(Object.assign({},e),{loading:!1})),(0,i.on)(I,e=>Object.assign(Object.assign({},e),{loading:!1,error:"Something went wrong"})));function N(e,c){return H(e,c)}var d=a(1410),T=a(4421),q=a(8053),J=a(2047);let k=(()=>{class e{constructor(o,s,l){this.action=o,this.todoApiService=s,this.todoService=l,this.getApi=(0,d.GW)(()=>this.action.pipe((0,d.l4)(h),(0,T.zg)(()=>this.todoService.getTodos().pipe((0,q.U)(g=>(console.log("ttt",g),_({userr:g}))),(0,J.K)(()=>(0,A.of)(v)))))),this.deleteApi=(0,d.GW)(()=>this.action.pipe((0,d.l4)(E),(0,T.zg)(g=>this.todoService.onDelete(g.todoId).then(()=>b()).catch(()=>P())))),this.addApi=(0,d.GW)(()=>this.action.pipe((0,d.l4)(F),(0,T.zg)(()=>this.todoService.onSubmit().then(()=>Z()).catch(()=>C())))),this.updateApi=(0,d.GW)(()=>this.action.pipe((0,d.l4)(U),(0,T.zg)(g=>this.todoService.onEdit(g.updateId).then(()=>j()).catch(()=>I()))))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(d.eX),t.LFG(D),t.LFG(L))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),B=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,n.u5,n.UX,r.Pc,z,i.Aw.forFeature("apireducer",N),d.sQ.forFeature([k])]]}),e})()}}]);