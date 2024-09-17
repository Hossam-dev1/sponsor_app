import { Component, ErrorHandler, Input } from '@angular/core';
import { FormManagerComponent } from '../form-manager/form-manager.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SponsorService } from '../../services/sponsor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sponsor, SponsorData } from 'src/app/core/interfaces/sponsors/sponsor';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormManagerComponent,
    CommonModule
  ],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  @Input() isLoading!: boolean;
  errorList: any[] = [];
  constructor(
    private router: Router,
    private _sponsorService: SponsorService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

  }


  onSubmit(formValues: any) {

    this._sponsorService.add(formValues).subscribe({
      next: (res: Sponsor) => {
        this._snackBar.open('Sponsor added successfully', 'ok', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        })
        this.router.navigateByUrl('/sponsors/list'); // Navigate back to the previous route
      },
      error: (err: HttpErrorResponse) => {
        if (err.error || err.error.errors) {
          this.showErrorMessages(err.error.errors);
        } else {
          // Handle other types of errors
          this._snackBar.open('An unexpected error occurred', 'Close', { duration: 3000 });
        }
      }
    })
  }


  showErrorMessages(errors: any) {
    const errorMessages = Object.values(errors).flat().join('\n');

    this._snackBar.open(errorMessages, 'Close', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['error-snackbar']
    });
  }

}
