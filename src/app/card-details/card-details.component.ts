import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Course } from '../course.model';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  cartItems: Course[] = [];
  totalCartValue: number = 0;
  constructor(private cartService: DataSharingService) { }
  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
      this.calculateCartValues();
  }
  deleteItem(item: Course): void {
    // Remove the item from the cartItems array
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    
    // Update the cart items in the service
    this.cartService.setCartItems(this.cartItems);

    // Recalculate cart values
    this.calculateCartValues(); 
  }
  moveToWishlist(item: Course): void {
    // Step 1: Remove the item from the cartItems array
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    
    // Update the cart items in the service
    this.cartService.setCartItems(this.cartItems);
    
    // Step 2: Add the item to the wishlist
    this.cartService.addToWishlist(item);
    this.calculateCartValues();
  }
  calculateCartValues(): void {
    this.totalCartValue = 0;

    for (const item of this.cartItems) {
      // Convert actualPrice to a number by removing currency symbols
      const price = parseFloat(item.actualPrice.replace('₹', ''));
      this.totalCartValue += price;
      
      // Calculate savings based on the discount percentage
      const discount = price * (item.discountPercentage / 100);
    }
  }
  checkout(): void {
    if (this.cartItems.length === 0) {
      // If the cart is empty, display a message to the user
      alert('Your cart is empty. Please add items before checking out.');
    } else {
      alert('Order placed successfully!');
      this.cartItems = [];
      this.cartService.setCartItems([]);
      this.calculateCartValues(); // Recalculate cart values
    }
  }
  
}
