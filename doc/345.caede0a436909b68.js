"use strict";(self.webpackChunksponsors_management_app=self.webpackChunksponsors_management_app||[]).push([[345],{2726:(H,_,l)=>{l.r(_),l.d(_,{AddComponent:()=>q});var s=l(177),t=l(7705),a=l(9417),d=l(8765);let y=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#o=this.\u0275mod=t.$C({type:e});static#e=this.\u0275inj=t.G2t({imports:[d.G,a.X1,s.MD,d.G]})}return e})();var u=l(8498),h=l(5416);let g=(()=>{class e{constructor(o){this._snackBar=o}markAsTouched(o){this._snackBar?.open("Check required fields","ok",{duration:3e3,horizontalPosition:"end",verticalPosition:"top"}),Object.keys(o.controls).forEach(r=>{const n=o.get(r);n?.markAsTouched(),n instanceof a.Yp&&n.controls.forEach(m=>this.markAsTouched(m)),n instanceof a.gE&&this.markAsTouched(n)})}isControlHasError(o,r){const n=o.controls[r];return!!n&&!!n.errors&&(n.dirty||n.touched)}static#t=this.\u0275fac=function(r){return new(r||e)(t.KVO(h.UG))};static#o=this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var f=l(882),v=l(9631);function G(e,i){if(1&e&&(t.j41(0,"span",3),t.EFF(1),t.k0s()),2&e){const o=t.XpG(2);t.R7$(1),t.SpI(" ",o.controlText," field is required ")}}function F(e,i){1&e&&(t.j41(0,"span",3),t.EFF(1," please enter a valid email "),t.k0s())}function E(e,i){if(1&e&&(t.j41(0,"span",3),t.EFF(1),t.k0s()),2&e){const o=t.XpG(2);let r,n;t.R7$(1),t.SpI(" please enter at least ",null==(r=o.form.get(o.controlName))||null==(n=r.getError("minlength"))?null:n.requiredLength," characters ")}}function R(e,i){if(1&e&&(t.j41(0,"span",3),t.EFF(1),t.k0s()),2&e){const o=t.XpG(2);let r,n;t.R7$(1),t.SpI(" please enter at most ",null==(r=o.form.get(o.controlName))||null==(n=r.getError("maxlength"))?null:n.requiredLength," characters ")}}function I(e,i){if(1&e&&(t.j41(0,"mat-hint"),t.DNE(1,G,2,1,"span",2),t.DNE(2,F,2,0,"span",2),t.DNE(3,E,2,1,"span",2),t.DNE(4,R,2,1,"span",2),t.k0s()),2&e){const o=t.XpG();let r,n,m,c;t.HbH(o.text_direction),t.R7$(1),t.Y8G("ngIf",null==(r=o.form.get(o.controlName))?null:r.getError("required")),t.R7$(1),t.Y8G("ngIf",null==(n=o.form.get(o.controlName))?null:n.getError("email")),t.R7$(1),t.Y8G("ngIf",null==(m=o.form.get(o.controlName))?null:m.getError("minlength")),t.R7$(1),t.Y8G("ngIf",null==(c=o.form.get(o.controlName))?null:c.getError("maxlength"))}}let b=(()=>{class e{constructor(o){this.formErrorService=o,this.text_direction=""}ngOnInit(){}isControlHasError(){return this.formErrorService.isControlHasError(this.form,this.controlName)}static#t=this.\u0275fac=function(r){return new(r||e)(t.rXU(g))};static#o=this.\u0275cmp=t.VBU({type:e,selectors:[["kt-form-error"]],inputs:{form:"form",controlName:"controlName",controlText:"controlText",text_direction:"text_direction"},decls:2,vars:1,consts:[[1,"msg-err","p-t-10"],[3,"class",4,"ngIf"],["class","text-error",4,"ngIf"],[1,"text-error"]],template:function(r,n){1&r&&(t.j41(0,"div",0),t.DNE(1,I,5,7,"mat-hint",1),t.k0s()),2&r&&(t.R7$(1),t.Y8G("ngIf",n.isControlHasError()))},dependencies:[f.MV,s.bT],styles:[".msg-err[_ngcontent-%COMP%]{line-height:1rem;transform:translateY(-12px)}.msg-err[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f44336}"]})}return e})();function x(e,i){1&e&&(t.j41(0,"span",5),t.EFF(1," *"),t.k0s())}function T(e,i){if(1&e&&(t.j41(0,"mat-label",3),t.EFF(1),t.DNE(2,x,2,0,"span",4),t.k0s()),2&e){const o=t.XpG();t.R7$(1),t.SpI(" ",o.label,""),t.R7$(1),t.Y8G("ngIf",!o.optional)}}function $(e,i){if(1&e&&(t.j41(0,"div",6)(1,"mat-form-field",7),t.nrm(2,"input",8),t.k0s(),t.nrm(3,"kt-form-error",9),t.k0s()),2&e){const o=t.XpG();t.R7$(2),t.FS9("formControlName",o.form_control_name),t.Y8G("disabled",o.disabled)("value",o.value)("type",o.type)("placeholder",o.placeholder),t.R7$(1),t.Y8G("form",o.form)("controlName",o.form_control_name)("controlText",o.label)}}let k=(()=>{class e{constructor(){this.value=null,this.readonly=!1,this.disabled=!1,this.optional=!1,this.type="text"}ngOnInit(){}static#t=this.\u0275fac=function(r){return new(r||e)};static#o=this.\u0275cmp=t.VBU({type:e,selectors:[["kt-form-input"]],inputs:{form:"form",form_group:"form_group",title:"title",label:"label",value:"value",placeholder:"placeholder",tooltip:"tooltip",example_label:"example_label",form_control_name:"form_control_name",validation_type:"validation_type",readonly:"readonly",disabled:"disabled",optional:"optional",type:"type",mask:"mask"},decls:3,vars:3,consts:[[1,"field",3,"formGroup"],["class","mat-subtitle-2 f-s-14 f-w-600 m-b-12 d-block",4,"ngIf"],["class","px-0",4,"ngIf"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["class","required-filed",4,"ngIf"],[1,"required-filed"],[1,"px-0"],["appearance","outline","color","primary",1,"w-100"],["matInput","",3,"disabled","value","type","formControlName","placeholder"],[3,"form","controlName","controlText"]],template:function(r,n){1&r&&(t.j41(0,"div",0),t.DNE(1,T,3,2,"mat-label",1),t.DNE(2,$,4,8,"div",2),t.k0s()),2&r&&(t.Y8G("formGroup",n.form),t.R7$(1),t.Y8G("ngIf",n.label),t.R7$(1),t.Y8G("ngIf",!n.form_group))},dependencies:[f.rl,f.nJ,v.fg,a.me,a.BC,a.cb,a.j4,a.JD,s.bT,b],styles:["[_nghost-%COMP%]     .mat-form-field-infix{display:flex}"]})}return e})();var D=l(6600),S=l(2798);function N(e,i){1&e&&(t.j41(0,"span",6),t.EFF(1,"*"),t.k0s())}function O(e,i){if(1&e&&(t.j41(0,"mat-label",4),t.EFF(1),t.DNE(2,N,2,0,"span",5),t.k0s()),2&e){const o=t.XpG();t.R7$(1),t.SpI(" ",o.label," "),t.R7$(1),t.Y8G("ngIf",!o.optional)}}function Y(e,i){if(1&e&&(t.j41(0,"mat-option",11),t.EFF(1),t.nI1(2,"titlecase"),t.k0s()),2&e){const o=i.$implicit;t.Y8G("value",o),t.R7$(1),t.SpI(" ",t.bMT(2,2,o)," ")}}function j(e,i){if(1&e){const o=t.RV6();t.j41(0,"mat-form-field",7)(1,"mat-select",8,9),t.bIt("selectionChange",function(n){t.eBV(o);const m=t.XpG();return t.Njj(m.onMatSelectChange(n))}),t.DNE(3,Y,3,4,"mat-option",10),t.k0s()()}if(2&e){const o=t.XpG();t.Y8G("formGroup",o.form),t.R7$(1),t.Y8G("formControlName",o.form_control_name)("placeholder",o.placeholder),t.R7$(2),t.Y8G("ngForOf",o.dataList)}}function M(e,i){if(1&e&&t.nrm(0,"kt-form-error",12),2&e){const o=t.XpG();t.Y8G("form",o.form)("controlName",o.form_control_name)("controlText",o.label)}}let w=(()=>{class e{constructor(){this.lang="en",this.dataList=[],this.is_multi=!1,this.optional=!1,this.isLoading=!1,this.onSelectChange=new t.bkB}ngOnInit(){}ngOnChanges(o){}onMatSelectChange(o){this.onSelectChange.emit(o.value)}static#t=this.\u0275fac=function(r){return new(r||e)};static#o=this.\u0275cmp=t.VBU({type:e,selectors:[["kt-form-select"]],inputs:{form:"form",label:"label",placeholder:"placeholder",isTreeUi:"isTreeUi",form_control_name:"form_control_name",form_control_filter:"form_control_filter",validation_type:"validation_type",dataList:"dataList",is_multi:"is_multi",optional:"optional",isLoading:"isLoading"},outputs:{onSelectChange:"onSelectChange"},features:[t.OA$],decls:4,vars:3,consts:[[1,"field"],["class","mat-subtitle-2 f-s-14 f-w-600 m-b-12 d-block",4,"ngIf"],["appearance","outline","class","w-100","color","primary",3,"formGroup",4,"ngIf"],[3,"form","controlName","controlText",4,"ngIf"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["class","required-filed",4,"ngIf"],[1,"required-filed"],["appearance","outline","color","primary",1,"w-100",3,"formGroup"],[3,"formControlName","placeholder","selectionChange"],["singleSelect",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"form","controlName","controlText"]],template:function(r,n){1&r&&(t.j41(0,"div",0),t.DNE(1,O,3,2,"mat-label",1),t.DNE(2,j,4,4,"mat-form-field",2),t.DNE(3,M,1,3,"kt-form-error",3),t.k0s()),2&r&&(t.R7$(1),t.Y8G("ngIf",n.label),t.R7$(1),t.Y8G("ngIf",!n.is_multi),t.R7$(1),t.Y8G("ngIf",n.validation_type))},dependencies:[D.wT,f.rl,f.nJ,S.VO,a.BC,a.cb,a.j4,a.JD,s.Sq,s.bT,b,s.PV],styles:[".inValid[_ngcontent-%COMP%]{border-color:red}.parent_option[_ngcontent-%COMP%]{font-weight:bolder!important}.child_option[_ngcontent-%COMP%]{padding-left:2rem!important;font-weight:600!important}.sub_child_option[_ngcontent-%COMP%]{padding-left:3rem!important}"]})}return e})();var C=l(8834),P=l(9213);function L(e,i){1&e&&(t.j41(0,"span",6),t.EFF(1," *"),t.k0s())}function X(e,i){if(1&e&&(t.j41(0,"mat-label",4),t.EFF(1),t.DNE(2,L,2,0,"span",5),t.k0s()),2&e){const o=t.XpG();t.R7$(1),t.SpI(" ",o.label,""),t.R7$(1),t.Y8G("ngIf",!o.optional)}}function A(e,i){if(1&e){const o=t.RV6();t.j41(0,"div",7)(1,"div",8)(2,"div",9),t.nrm(3,"kt-form-input",10),t.k0s(),t.j41(4,"div",9),t.nrm(5,"kt-form-input",10),t.k0s(),t.j41(6,"div",9),t.nrm(7,"kt-form-input",10),t.k0s(),t.j41(8,"div",11)(9,"button",12),t.bIt("click",function(){const m=t.eBV(o).index,c=t.XpG();return t.Njj(0==m?c.addRow():c.removeRow(m))}),t.j41(10,"mat-icon"),t.EFF(11),t.k0s()()()()()}if(2&e){const o=i.index,r=t.XpG();t.Y8G("formGroupName",o),t.R7$(3),t.Y8G("form",r.getDataGroup(o))("form_control_name","contact_officer_name")("type","text")("placeholder","Name"),t.R7$(2),t.Y8G("form",r.getDataGroup(o))("form_control_name","email")("type","text")("placeholder","Email"),t.R7$(2),t.Y8G("form",r.getDataGroup(o))("form_control_name","phone")("type","text")("placeholder","Phone"),t.R7$(4),t.JRh(0==o?"add":"remove")}}let B=(()=>{class e{constructor(o){this.fb=o,this.form_array_name="sponsor_contact_officer",this.optional=!1,this.type="text"}ngOnInit(){this.rows=this.form.get(this.form_array_name),0==this.rows.value.length&&this.addRow()}addRow(){this.rows.push(this.createRowFormGroup())}removeRow(o){this.rows.removeAt(o)}createRowFormGroup(){return this.fb.group({contact_officer_name:["",a.k0.required],email:["",[a.k0.required,a.k0.email]],phone:["",[a.k0.required,a.k0.minLength(10),a.k0.maxLength(10)]]})}getDataGroup(o){return this.rows.at(o)}static#t=this.\u0275fac=function(r){return new(r||e)(t.rXU(a.ok))};static#o=this.\u0275cmp=t.VBU({type:e,selectors:[["kt-multi-contact-officer"]],inputs:{form:"form",form_control_name:"form_control_name",form_array_name:"form_array_name",title:"title",label:"label",optional:"optional",placeholder:"placeholder",type:"type"},decls:4,vars:4,consts:[[1,"form-group","field",3,"formGroup"],["class","mat-subtitle-2 f-s-14 f-w-600 m-b-12 d-block",4,"ngIf"],[3,"formArrayName"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["class","required-filed",4,"ngIf"],[1,"required-filed"],[3,"formGroupName"],[1,"officer-row"],[1,"form-input"],[3,"form","form_control_name","type","placeholder"],[1,"action"],["mat-mini-fab","","color","light",1,"btn",3,"click"]],template:function(r,n){1&r&&(t.j41(0,"div",0),t.DNE(1,X,3,2,"mat-label",1),t.j41(2,"div",2),t.DNE(3,A,12,14,"div",3),t.k0s()()),2&r&&(t.Y8G("formGroup",n.form),t.R7$(1),t.Y8G("ngIf",n.label),t.R7$(1),t.Y8G("formArrayName",n.form_array_name),t.R7$(1),t.Y8G("ngForOf",n.rows.controls))},dependencies:[f.nJ,C.$0,P.An,a.cb,a.j4,a.$R,a.v8,s.Sq,s.bT,k],styles:[".form-group[_ngcontent-%COMP%]   .officer-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(10,1fr);flex-direction:row;align-items:baseline;gap:10px}.form-group[_ngcontent-%COMP%]   .officer-row[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]{width:100%;grid-column:span 3}.form-group[_ngcontent-%COMP%]   .officer-row[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{display:flex;justify-content:end}"]})}return e})();var p=l(5596);let U=(()=>{class e{constructor(o,r,n){this._fb=o,this._router=r,this.formError=n,this.mode="ADD",this.formSubmitted=new t.bkB,this.sponsorTypeList=["normal","legal","other"]}ngOnInit(){this.initForm()}initForm(){this._formData=this._fb.group({sponsor_name:this._fb.control("",[a.k0.required]),sponsor_type:this._fb.control("",[a.k0.required]),sponsor_ID:this._fb.control("",[a.k0.required,a.k0.minLength(8),a.k0.maxLength(10)]),phone:this._fb.control("",[a.k0.required,a.k0.minLength(10),a.k0.maxLength(10)]),address:this._fb.control("",[a.k0.required]),email:this._fb.control("",[a.k0.required,a.k0.email]),postal_code:this._fb.control("",[a.k0.required,a.k0.minLength(5),a.k0.maxLength(5)]),max_limit:this._fb.control("",[a.k0.required]),financial_limit:this._fb.control("",[a.k0.required]),time_limit:this._fb.control("",[a.k0.required]),sponsor_contact_officer:this._fb.array([])})}onSubmit(){this._formData.invalid?this.formError?.markAsTouched(this._formData):this.formSubmitted.emit(this._formData.value)}static#t=this.\u0275fac=function(r){return new(r||e)(t.rXU(a.ok),t.rXU(u.Ix),t.rXU(g))};static#o=this.\u0275cmp=t.VBU({type:e,selectors:[["sponsor-form-manager"]],inputs:{mode:"mode"},outputs:{formSubmitted:"formSubmitted"},standalone:!0,features:[t.aNF],decls:23,vars:60,consts:[[1,"card-title"],[3,"formGroup"],[1,"form-container"],[3,"form","form_control_name","label","validation_type","placeholder"],[3,"form","form_control_name","label","placeholder","validation_type","dataList"],[3,"form","form_control_name","label","type","validation_type","placeholder"],[3,"form","form_control_name","label","placeholder"],[3,"form","form_control_name","label","type","placeholder"],[1,"full-row"],[3,"form","form_array_name","label","placeholder"],[1,"action"],["mat-raised-button","","color","primary",3,"click"]],template:function(r,n){1&r&&(t.j41(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title",0),t.EFF(3),t.nI1(4,"titlecase"),t.k0s()(),t.j41(5,"mat-card-content")(6,"form",1)(7,"div",2),t.nrm(8,"kt-form-input",3)(9,"kt-form-select",4)(10,"kt-form-input",5)(11,"kt-form-input",5)(12,"kt-form-input",6)(13,"kt-form-input",7)(14,"kt-form-input",7)(15,"kt-form-input",7)(16,"kt-form-input",7)(17,"kt-form-input",7),t.j41(18,"div",8),t.nrm(19,"kt-multi-contact-officer",9),t.k0s(),t.j41(20,"div",10)(21,"button",11),t.bIt("click",function(){return n.onSubmit()}),t.EFF(22,"Save"),t.k0s()()()()()()),2&r&&(t.R7$(3),t.JRh(t.bMT(4,58,n.mode+" Sponsor")),t.R7$(3),t.Y8G("formGroup",n._formData),t.R7$(2),t.Y8G("form",n._formData)("form_control_name","sponsor_name")("label","Sponsor Name")("validation_type","required")("placeholder","Sponsor Name"),t.R7$(1),t.Y8G("form",n._formData)("form_control_name","sponsor_type")("label","Sponsor Type")("placeholder","Sponsor Type")("validation_type","required")("dataList",n.sponsorTypeList),t.R7$(1),t.Y8G("form",n._formData)("form_control_name","sponsor_ID")("label","Sponsor ID")("type","number")("validation_type","minlength")("placeholder","094133563"),t.R7$(1),t.Y8G("form",n._formData)("form_control_name","phone")("label","Phone Number")("type","number")("validation_type","required")("placeholder","0314133563"),t.R7$(1),t.Y8G("form",n._formData)("form_control_name","address")("label","Address")("placeholder","Address"),t.R7$(1),t.Y8G("form",n._formData)("form_control_name","email")("label","Email")("type","email")("placeholder","example.com"),t.R7$(1),t.Y8G("form",n._formData)("form_control_name","postal_code")("label","Postal Code")("type","number")("placeholder","000 "),t.R7$(1),t.Y8G("form",n._formData)("form_control_name","max_limit")("label","Max Limit")("type","number")("placeholder","1000"),t.R7$(1),t.Y8G("form",n._formData)("form_control_name","financial_limit")("label","Financial Limit /EGP")("type","number")("placeholder","9999"),t.R7$(1),t.Y8G("form",n._formData)("form_control_name","time_limit")("label","Time Limit /Days")("type","number")("placeholder","1000"),t.R7$(2),t.Y8G("form",n._formData)("form_array_name","sponsor_contact_officer")("label","Contact Officers")("placeholder","Contact Officers"))},dependencies:[y,k,w,B,p.RN,p.m2,p.MM,p.dh,C.$z,s.PV,a.X1,a.qT,a.cb,a.j4],styles:[".card-title[_ngcontent-%COMP%]{font-size:20px;font-weight:600;text-transform:capitalize;margin-bottom:20px}.action[_ngcontent-%COMP%]{margin-bottom:2rem}.action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:40%}"]})}return e})();var V=l(9031);let q=(()=>{class e{constructor(o,r,n){this.router=o,this._sponsorService=r,this._snackBar=n,this.errorList=[]}ngOnInit(){}onSubmit(o){this._sponsorService.add(o).subscribe({next:r=>{this._snackBar.open("Sponsor added successfully","ok",{duration:3e3,horizontalPosition:"end",verticalPosition:"top"}),this.router.navigateByUrl("/sponsors/list")},error:r=>{r.error||r.error.errors?this.showErrorMessages(r.error.errors):this._snackBar.open("An unexpected error occurred","Close",{duration:3e3})}})}showErrorMessages(o){const r=Object.values(o).flat().join("\n");this._snackBar.open(r,"Close",{duration:5e3,verticalPosition:"top",horizontalPosition:"center",panelClass:["error-snackbar"]})}static#t=this.\u0275fac=function(r){return new(r||e)(t.rXU(u.Ix),t.rXU(V.i),t.rXU(h.UG))};static#o=this.\u0275cmp=t.VBU({type:e,selectors:[["app-add"]],inputs:{isLoading:"isLoading"},standalone:!0,features:[t.aNF],decls:1,vars:1,consts:[[3,"mode","formSubmitted"]],template:function(r,n){1&r&&(t.j41(0,"sponsor-form-manager",0),t.bIt("formSubmitted",function(c){return n.onSubmit(c)}),t.k0s()),2&r&&t.Y8G("mode","ADD")},dependencies:[U,s.MD]})}return e})()}}]);