import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { products } from '../../model/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product: any;
  quantity = 1;
  isFavorite = false;
  products = products;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const productId = +params['id'];
      console.log(productId, params);
      this.product = this.products.find(p => p.product_id === productId.toString().padStart(8, '0'));
      if (!this.product) {
        this.router.navigate(['/']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/main']);
  }

  changeQuantity(amount: number) {
    if (this.quantity + amount > 0 && this.quantity + amount <= this.product.stock) {
      this.quantity += amount;
    }
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    alert(this.isFavorite ? 'Product added to favorites' : 'Product removed from favorites');
  }

  addToCart() {
    if (this.product.stock === 0) {
      alert('This product is out of stock!');
      return;
    }
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productInCart = cart.find((item: any) => item.product_id === this.product.product_id);

    if (productInCart) {
      productInCart.quantity += this.quantity;
    } else {
      const productToAdd = { ...this.product, quantity: this.quantity };
      cart.push(productToAdd);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
    this.router.navigate(['/my-cart']);
  }
}
