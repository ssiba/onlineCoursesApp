import { Component, EventEmitter, Output } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ngOnInit(): void {}

  courses: Course[] = [];
  
}
