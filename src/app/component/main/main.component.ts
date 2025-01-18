import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { categories, products } from '../../model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  products = products;
  categories = categories;
  userName: string | null = localStorage.getItem('userName');
  filteredProducts = [...this.products];
  selectedCategory: string = 'popular';
  cart: any[] = [];

  constructor(private router: Router) { }

  addToCart(product: any) {
    const productToAdd = { ...product, quantity: 1 };
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex((item: any) => item.product_id === product.product_id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push(productToAdd);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.reduce((total: any, item: any) => total + item.quantity, 0);
  }

  filterByCategory(type: string) {
    this.selectedCategory = type;
    if (type === 'popular') {
      this.filteredProducts = this.products.sort((a, b) => b.rating - a.rating);
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.type === type
      );
    }
  }

  navigateToProductDetails(product: any) {
    console.log(product);
    this.router.navigate(['/product-details'], { queryParams: { id: parseInt(product.product_id, 10) } });
  }
  navigateToMyCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.router.navigate(['/my-cart'], {
      state: { cart: [...cart] },
    });
    console.log(cart);
  }

  navigateToFavorites() {
    this.router.navigate(['/favorites']);
  }
}
