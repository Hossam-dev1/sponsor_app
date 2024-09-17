import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorService } from 'src/app/core/FormError.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'sponsor-form-manager',
  standalone: true,
  imports: [
    SharedModule,
    TitleCasePipe,
    ReactiveFormsModule
  ],
  templateUrl: './form-manager.component.html',
  styleUrls: ['./form-manager.component.scss']
})
export class FormManagerComponent {

  @Input() mode: 'ADD' | 'EDIT' = 'ADD';
  @Output() formSubmitted = new EventEmitter<FormData>();

  sponsorTypeList: string[] = ['normal', 'legal', 'other'];

  _formData!: FormGroup;

  constructor(
    public _fb: FormBuilder,
    private _router: Router,
    private formError: FormErrorService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this._formData = this._fb.group({
      sponsor_name: this._fb.control('', [Validators.required]),
      sponsor_type: this._fb.control('', [Validators.required]),
      sponsor_ID: this._fb.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
      phone: this._fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      address: this._fb.control('', [Validators.required]),
      email: this._fb.control('', [Validators.required, Validators.email]),
      postal_code: this._fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      max_limit: this._fb.control('', [Validators.required]),
      financial_limit: this._fb.control('', [Validators.required]),
      time_limit: this._fb.control('', [Validators.required]),

      sponsor_contact_officer: this._fb.array([]),
    });
  }

  onSubmit() {

    if (this._formData.invalid) {
      this.formError?.markAsTouched(this._formData);
      return
    }
    this.formSubmitted.emit(this._formData.value);
  }


}
