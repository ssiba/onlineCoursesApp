import { Component } from '@angular/core';
import { Course } from '../course.model';
import { DataSharingService } from '../data-sharing.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  wishlistItems: Course[] = [];
  constructor(private cartService: DataSharingService) { }

  ngOnInit(): void {
    // this.wishlistItems = this.authService.getWishlistItems(); 
    this.wishlistItems = this.cartService.getWishlistItems();
    // Fetch wishlist data from the service
  }

  addToWishlist(course: Course): void {
    this.cartService.addToWishlist(course);
    this.wishlistItems = this.cartService.getWishlistItems();
  }
  removeFromWishlist(course: Course): void {
    this.cartService.removeFromWishlist(course);
    this.wishlistItems = this.cartService.getWishlistItems();
  }
  isInWishlist(course: Course): boolean {
    return this.wishlistItems.some(item => item.courseName === course.courseName);
  }
}
