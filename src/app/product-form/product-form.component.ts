import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  forms = [];
  isLoading = true;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getForms();
  }

  getForms() {
    this.productService.getForms().subscribe((result: any) => {
      this.forms = result.resData;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
    });
  }

}
