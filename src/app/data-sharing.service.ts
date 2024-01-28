import { Injectable } from '@angular/core';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  cartItems: Course[] = [];
  wishlistItems:Course[]=[];

  private readonly CART_KEY = 'cartItems';
  private readonly WISHLIST_KEY = 'wishlistItems';
  constructor() { }
   // Get cart items from local storage
   getCartItems(): Course[] {
    const cartItemsJson = localStorage.getItem(this.CART_KEY);
    return cartItemsJson ? JSON.parse(cartItemsJson) : [];
  }

  addToCart(course: Course){
    if (this.cartItems.some(item => item.courseName === course.courseName)) {
      alert('Already exists in the cart: ' + course.courseName);
    } else {
      this.cartItems.push(course);
      alert('Item was added successfully: ' + course.courseName)
      // Trigger event or notify component to display popup
    }
  }
    // Set cart items in local storage
    setCartItems(cartItems: Course[]){
      localStorage.setItem(this.CART_KEY, JSON.stringify(cartItems));
      return this.cartItems;
    }
      addToWishlist(course: Course): void {
    const wishlistItems = this.getWishlistItems();
    wishlistItems.push(course);
    localStorage.setItem(this.WISHLIST_KEY, JSON.stringify(wishlistItems));
  }

  removeFromWishlist(course: Course): void {
    let wishlistItems = this.getWishlistItems();
    wishlistItems = wishlistItems.filter(item => item.courseName !== course.courseName);
    localStorage.setItem(this.WISHLIST_KEY, JSON.stringify(wishlistItems));
  }

  getWishlistItems(): Course[] {
    const wishlistItemsJson = localStorage.getItem(this.WISHLIST_KEY);
    return wishlistItemsJson ? JSON.parse(wishlistItemsJson) : [];
  }
}
