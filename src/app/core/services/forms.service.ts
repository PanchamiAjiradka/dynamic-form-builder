import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormTemplateService {
  constructor(private http: HttpClient) {}

  loadDefaultTemplates(): Observable<any[]> {
    return this.http.get<any[]>('/assets/data/default-templates.json');
  }
}
