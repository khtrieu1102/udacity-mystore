import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { BillingInformation } from '../models/BillingInformation';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsInCart: Product[] = [];
  billingInformation: BillingInformation = new BillingInformation();

  constructor() {}

  getAllItemsInCart(): Product[] {
    return this.productsInCart;
  }

  addToCart(product: Product): Product[] {
    const existingProduct = this.productsInCart.find(
      (p) => p.id === product.id
    );

    if (existingProduct) {
    } else {
      this.productsInCart.push(product);
    }
    alert(`Item ${product.name} is added to cart!`);
    return this.productsInCart;
  }

  summarizeInformation(
    total: number,
    fullname: string,
    address: string,
    creditCardNumber: string
  ): void {
    this.billingInformation.total = total;
    this.billingInformation.fullname = fullname;
    this.billingInformation.address = address;
    this.billingInformation.creditCardNumber = creditCardNumber;
  }

  generateFinalResult(): BillingInformation {
    this.productsInCart = new Array();
    return this.billingInformation;
  }

  removeItem(deletingProductId: number): Product[] {
    const deletingProduct = this.productsInCart.find(
      (p) => p.id === deletingProductId
    );

    if (!deletingProduct) return this.productsInCart;

    this.productsInCart = this.productsInCart.filter(
      (product) => product.id !== deletingProductId
    );
    alert(`Item ${deletingProduct.name} is removed from cart!`);

    return this.productsInCart;
  }
}
