import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ColumnDef, FormFieldConfig } from '../../models/general.model';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/shared/store/auth/auth.selectors';
import { logout } from 'src/app/shared/store/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  isCreatingTemplate = false;
  allowTemplateCreation = false;

  formData!: any[];

  createNewTemplate() {
    localStorage.setItem('creatingNewTemplate', 'true');
    this.router.navigate(['/form-builder']);
  }

  cancelTemplateCreation() {
    this.isCreatingTemplate = false;
  }

  saveTemplate(templateData: any) {
    this.listData.push(templateData);
    this.isCreatingTemplate = false;
  }
  constructor(
    private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store,
    private router: Router
  ) {
    this.store.select(selectUser).subscribe((user) => {
      if (user?.role.includes('admin')) {
        this.allowTemplateCreation = true;
      } else {
        this.allowTemplateCreation = false;
      }
    });
  }

  onLogout() {
    localStorage.clear();
    this.store.dispatch(logout());
  }

  formConfig!: FormFieldConfig[];
  listData!: any[];
  columns!: ColumnDef[];
  displayedColumns: string[] = [];

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}
