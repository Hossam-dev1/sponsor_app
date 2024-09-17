import { NgModule } from "@angular/core";
import { FormInputComponent } from "./forms/form-input/form-input.component";
import { MaterialModule } from "./material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MultiContactOfficerComponent } from "./forms/multi-contact-officer/multi-contact-officer.component";
import { FormErrorComponent } from "./forms/form-error/form-error.component";
import { FormSelectComponent } from "./forms/form-select/form-select.component";



@NgModule({
  declarations: [
    FormInputComponent,
    FormErrorComponent,
    FormSelectComponent,
    MultiContactOfficerComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FormInputComponent,
    FormErrorComponent,
    FormSelectComponent,
    MultiContactOfficerComponent,
    MaterialModule
  ],
})
export class SharedModule { }
