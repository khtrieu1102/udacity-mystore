import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productsServices: ProductsService,
    private cartServices: CartService
  ) {}

  ngOnInit(): void {
    let allProducts: Product[] = [];
    this.productsServices.getAllProducts().subscribe((data) => {
      allProducts = data;
      console.log({ allProducts, data });

      const productListWithCounters = allProducts.map((product) => ({
        ...product,
        counter: 1,
      }));
      this.products = productListWithCounters;
    });
  }

  onAddToCart(product: Product) {
    this.cartServices.addToCart(product);
  }
}
