import { Product } from './../models/product';
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
  products: Product[];
  query: any = {
    pageSize: this.PAGE_SIZE
  };
 totalItems : any;
  columns = [
    { title: 'Key' },
    { title: 'ArtikelCode' },
    { title: 'ColorCode' },
    { title: 'Description' },
    { title: 'Price' },
    { title: 'DeliveredIn' },
    { title: 'Q1' },
    { title: 'Size' },
    { title: 'Color' }
    
  ];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.populateProducts();

  }

  private populateProducts() {
    debugger;
    this.productService.fetch().subscribe(
      result =>{ this.products = result;
      this.totalItems = result.length;}
      );
  }
  onPageChange(page) {
    this.query.page = page;
    this.populateProducts();
  }

}
