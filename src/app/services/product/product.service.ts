import { Injectable } from '@angular/core';
import { Configuration } from 'src/app/app.constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product, Store } from '../../models/product';

@Injectable()
export class ProductService {

  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = `${configuration.ServerWithApi}`;
  }

  public getAll(): Observable<Product[]> {
    let finalUrl = `${this.actionUrl}/products`;
    return this.http.get<Product[]>(finalUrl);
  }

  public find(): Observable<Store[]> {
    const finalUrl = `${this.actionUrl}/store`;
    return this.http.get<Store[]>(finalUrl);
  }

  public create(description: string, category_id: number): Observable<Product> {
    const finalUrl = `${this.actionUrl}/product`;
    return this.http.post<Product>(finalUrl, { description, category_id });
  }

  public delete(product_id: number) {
    const finalUrl = `${this.actionUrl}/product/${product_id}`;
    return this.http.delete(finalUrl);
  }
}
