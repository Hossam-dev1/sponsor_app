import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormErrorService } from 'src/app/core/FormError.service';

@Component({
  selector: 'kt-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {

  @Input() form!: UntypedFormGroup;
  @Input() controlName!: string;
  @Input() controlText !: string;
  @Input() text_direction = '';


  constructor(private formErrorService: FormErrorService) {
  }

  ngOnInit() {
  }


  isControlHasError(): boolean {
    return this.formErrorService.isControlHasError(this.form, this.controlName);
  }

}
