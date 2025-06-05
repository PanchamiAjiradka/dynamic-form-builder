import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/shared/store/auth/auth.selectors';

@Component({
  selector: 'app-template-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
})
export class TemplateListComponent implements OnInit {
  templates: any[] = [];
  allowTemplateDeleteEdit = false;
  constructor(private router: Router, private store: Store) {
    this.store.select(selectUser).subscribe((user) => {
      if (user?.role.includes('admin')) {
        this.allowTemplateDeleteEdit = true;
      } else {
        this.allowTemplateDeleteEdit = false;
      }
    });
  }

  ngOnInit(): void {
    const saved = localStorage.getItem('formTemplates');
    this.templates = saved ? JSON.parse(saved) : [];
  }

  editTemplate(index: number): void {
    const template = this.templates[index];
    localStorage.setItem('editingTemplateIndex', index.toString());
    localStorage.setItem('editingTemplateData', JSON.stringify(template));
    this.router.navigate(['/form-builder']);
  }

  previewTemplate(template: any): void {
    localStorage.setItem('previewTemplateData', JSON.stringify(template));
    this.router.navigate(['/form-preview']);
  }

  deleteTemplate(index: number): void {
    if (confirm('Are you sure you want to delete this template?')) {
      this.templates.splice(index, 1);
      localStorage.setItem('formTemplates', JSON.stringify(this.templates));
    }
  }
}
