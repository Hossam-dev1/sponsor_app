import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kt-multi-contact-officer',
  templateUrl: './multi-contact-officer.component.html',
  styleUrls: ['./multi-contact-officer.component.scss']
})
export class MultiContactOfficerComponent {
  @Input() form!: FormGroup;
  @Input() form_control_name!: string;
  @Input() form_array_name: string = "sponsor_contact_officer";
  @Input() title!: string;
  @Input() label!: string;
  @Input() optional: boolean = false;
  @Input() placeholder!: string;
  @Input() type: string = "text";

  rows!: FormArray;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.rows = this.form.get(this.form_array_name) as FormArray;

    if (this.rows.value.length == 0) { // is not patched value
      this.addRow()
    }
  }

  addRow() {
    this.rows.push(this.createRowFormGroup());
  }

  removeRow(index: number) {
    this.rows.removeAt(index);
  }

  createRowFormGroup(): FormGroup {
    return this.fb.group({
      contact_officer_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }


  getDataGroup(index: number): FormGroup {
    return this.rows.at(index) as FormGroup;
  }
}
