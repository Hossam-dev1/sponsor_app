import { Injectable } from '@angular/core';
import { Form, FormArray, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class FormErrorService {
  constructor(
    private _snackBar?: MatSnackBar,

  ) {
  }

  public markAsTouched(formGroup: FormGroup) {
    this._snackBar?.open('Check required fields', 'ok', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    })
    // Loop through all controls in the form group
    Object.keys(formGroup.controls).forEach(controlName => {
      const control = formGroup.get(controlName);
      // Mark the control as touched
      control?.markAsTouched();

      if (control instanceof FormArray) {
        control.controls.forEach(c => this.markAsTouched(c as FormGroup));
      }
      // Check if the control is a form group (nested)
      if (control instanceof FormGroup) {
        // Recursively call this function for the nested form group
        this.markAsTouched(control);
      }
    });
    return
  }

  public isControlHasError(form: FormGroup, controlName: string) {
    const control = form.controls[controlName];
    if (!control) {
      return false;
    }
    return !!control.errors && (control.dirty || control.touched);
    // return control.hasError(validationType) && (control.dirty || control.touched);
  }


}
