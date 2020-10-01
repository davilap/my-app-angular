import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/views/modal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { first } from 'rxjs/operators';
import { Product, Store } from 'src/app/models/product';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  list: Product[] = [];
  store: Store[] = [];
  category: Category[] = [];

  productForm: FormGroup;

  currentIndex: number = -1;
  error = '';
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private productService: ProductService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.productService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          this.list = data;
        }
      );

    this.loadSummary();

    this.productForm = this.formBuilder.group({
      description: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  get f() { return this.productForm.controls; }

  create() {
    this.openModal('popup-product');

    this.currentIndex = -1;

    this.categoryService.getAll()
      .pipe(first())
      .subscribe(
        data => {
          this.category = data;
        }
      );

    this.f.description.setValue('');
    this.f.category.setValue('');
  }

  loadSummary() {
    this.productService.find()
      .pipe(first())
      .subscribe(
        data => {
          this.store = data;
        }
      );
  }

  onSubmit() {
    this.submitted = true;

    if (this.productForm.invalid) {
      return;
    }

    this.loading = true;

    this.productService.create(this.f.description.value, this.f.category.value)
      .pipe(first())
      .subscribe(
        (data: Product) => {
          this.list.unshift(data);
          this.loading = false;
          this.closeModal('popup-product');

          this.loadSummary();
        }, (error: string) => {
          this.error = error;
          this.loading = false;
        }
      );
  }

  delete(i: number, item: Product) {
    this.productService.delete(item.id)
      .pipe(first())
      .subscribe(
        () => {
          this.list.splice(i, 1);
          
          this.loadSummary();
        }, (error: string) => {
          this.error = error;
        }
      );
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
