import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/app.constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../models/category';

@Injectable()
export class CategoryService {

  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = `${configuration.ServerWithApi}`;
  }

  public getAll(): Observable<Category[]> {
    let finalUrl = `${this.actionUrl}/categories`;
    return this.http.get<Category[]>(finalUrl);
  }
}
