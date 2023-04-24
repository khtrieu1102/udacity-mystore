import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  products: Product[] = [];
  product = new Product();
  id: string | null = '';

  constructor(
    private productsServices: ProductsService,
    private route: ActivatedRoute,
    private cartServices: CartService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.productsServices.getAllProducts().subscribe((allProducts) => {
      this.products = allProducts.map((product) => ({
        ...product,
        counter: 1,
      }));

      const findingProduct = this.products.find(
        (p) => p.id === Number(this.id)
      );
      if (findingProduct) {
        this.product = findingProduct;
      }
      console.log(allProducts, findingProduct);
    });
  }

  onChangeCounter(event: any) {
    this.product.counter = Number(event.target.value);
  }

  onAddToCart() {
    this.cartServices.addToCart(this.product);
  }
}
