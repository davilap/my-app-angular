import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Configuration } from '../app.constants';
import { ProductService } from './product/product.service';
import { CategoryService } from './category/category.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    Configuration,
    ProductService,
    CategoryService
  ]
})
export class ServicesModule { }
