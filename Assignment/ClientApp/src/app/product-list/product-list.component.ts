import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private readonly PAGE_SIZE = 10;
  // variables
  products: any = {};
  query: any = {
    pageSize: this.PAGE_SIZE
  };
  columns = [
    { title: 'Key' },
    { }
  ];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.populateProducts();

  }

  private populateProducts() {
    this.productService.fetch().subscribe(result => this.products = result);
  }
  onPageChange(page) {
    this.query.page = page;
    this.populateProducts();
  }

}
