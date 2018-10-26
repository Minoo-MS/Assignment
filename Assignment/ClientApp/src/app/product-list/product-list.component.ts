import { Product } from "./../models/product";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  // variables
  products: Product[];
  columns = [
    { title: "Key" },
    { title: "ArtikelCode" },
    { title: "ColorCode" },
    { title: "Description" },
    { title: "Price" },
    { title: "DeliveredIn" },
    { title: "Q1" },
    { title: "Size" },
    { title: "Color" }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.populateProducts();
  }

  private populateProducts() {
    debugger;
    this.productService.fetch().subscribe(result => {
      this.products = result;
    });
  }
}
