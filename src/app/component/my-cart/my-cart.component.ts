import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.scss'
})
export class MyCartComponent {
  cart: any[] = [];
  promoCode = '';
  promoError = '';
  discount = 0;
  totalPrice = 0;

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.cart = state?.['cart'] || [];
  }

  ngOnInit() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cart = cart;
    this.calculateTotal();
  }

  goBack() {
    this.router.navigate(['/main']);
  }

  removeFromCart(index: number) {
    const item = this.cart[index];
    item.removed = true;
    setTimeout(() => {
      this.cart.splice(index, 1);
      this.updateCart();
    }, 500);
}

  changeQuantity(index: number, amount: number) {
    if (this.cart[index].quantity + amount > 0) {
      this.cart[index].quantity += amount;
    } else {
      this.cart.splice(index, 1);
    }
    this.updateCart();
  }

  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.calculateTotal();
  }
  applyPromoCode() {
    const match = this.promoCode.match(/^DISCOUNT(\d{1,2})$/);
    if (match) {
      this.discount = parseInt(match[1], 10);
    } else {
      alert('Invalid promo code');
      this.discount = 0;
    }
    this.calculateTotal();
  }

  calculateTotal() {
    let total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (this.discount) {
      total = total - (total * this.discount) / 100;
    }
    this.totalPrice = total;
  }
  checkout() {
    alert('Checkout successful! Your order will be delivered soon.Thank you for choosing our app!');
    this.router.navigate(['/main']);
    localStorage.removeItem('cart');
  }
}
