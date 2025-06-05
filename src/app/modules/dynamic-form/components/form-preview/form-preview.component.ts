import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { DateAutoFormatDirective } from '../../directives/date-auto-format.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-preview',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    DateAutoFormatDirective,
  ],
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss'],
})
export class FormPreviewComponent {
  template: any;
  formData: { [key: string]: any } = {};
  submittedData: any = null;

  ngOnInit(): void {
    const data = localStorage.getItem('previewTemplateData');
    this.template = data ? JSON.parse(data) : null;
  }

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(form: any) {
    if (form.invalid) {
      alert('Please fill all required fields!');
      return;
    }
    console.log('Submitting form...', this.formData);
    this.submitForm();
  }

  submitForm() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    this.apiService.post(apiUrl, this.formData).subscribe({
      next: (response) => {
        alert('Form submitted successfully!');
        console.log('Submitted:', response);
        this.router.navigate(['/list']);
      },
      error: (error) => {
        alert('Submission failed.');
        console.error('Error:', error);
      },
    });
  }

  cancel() {
    this.router.navigate(['/list']);
  }
}
