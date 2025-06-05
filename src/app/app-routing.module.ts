import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
import { FormBuilderComponent } from './modules/dynamic-form/components/form-builder/form-builder.component';
import { FormPreviewComponent } from './modules/dynamic-form/components/form-preview/form-preview.component';
import { DynamicFormComponent } from './modules/dynamic-form/components/dynamic-form/dynamic-form.component';
import { LoginComponent } from './modules/dynamic-form/components/login/login.component';
import { TemplateListComponent } from './modules/dynamic-form/components/template-list/template-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'list',
    component: DynamicFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'form-builder',
    component: FormBuilderComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' },
  },
  {
    path: 'form-preview',
    component: FormPreviewComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
