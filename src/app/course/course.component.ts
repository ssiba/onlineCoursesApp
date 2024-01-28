import { Component } from '@angular/core';
import { Course } from '../course.model';
import { DataSharingService } from '../data-sharing.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent {
  courses: Course[] = [];
  searchTerm: string = '';
  searchQuery: string = '';
  filteredCourses: any[]=[];
  cartItems: Course[] = [];
  wishlistItems: Course[] = [];
  courseId:number;
  url: string = '/assets/data.json';
  constructor(private cartService:DataSharingService,private route: ActivatedRoute) { }
  ngOnInit() {
    fetch(this.url).then(res => res.json())
    .then(json => {
      this.courses = json;
      this.filteredCourses = [...this.courses];
    this.cartItems = this.cartService.getCartItems();
    this.wishlistItems = this.cartService.getWishlistItems();
    this.courseId = +this.route.snapshot.paramMap.get('id');
    console.log(this.courseId)
    });
  }
  addToCart(course: Course): void {
    console.log('Add to cart', course);
    this.cartItems.push(course);
    this.cartService.setCartItems(this.cartItems);
    this.cartService.addToCart(course);
  }
  addToWishlist(course: Course){
    this.cartService.addToWishlist(course);
    this.wishlistItems = this.cartService.getWishlistItems();
  }
  sortByLowestPrice(){
    this.filteredCourses.sort((a, b) => {
      return parseFloat(a.actualPrice.replace('₹', '')) - parseFloat(b.actualPrice.replace('₹', ''));
    });
  }
  sortByHighestPrice() {
    this.filteredCourses.sort((a, b) => {
      return parseFloat(b.actualPrice.replace('₹', '')) - parseFloat(a.actualPrice.replace('₹', ''));
    });
  }
  filterCourses() {
    this.filteredCourses = this.courses.filter(course =>
      course.courseName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      course.author.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }
  isInWishlist(course: Course): boolean {
    return this.wishlistItems.some(item => item.courseName === course.courseName);
  }
}
