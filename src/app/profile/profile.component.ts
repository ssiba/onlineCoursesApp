import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm: FormGroup;
  userName: string;
  constructor(private authService: AuthService,private fb: FormBuilder) { }
  
  ngOnInit() {
    this.userName = this.authService.getUserName();
    this.profileForm = this.fb.group({
      displayName:[this.authService.getUserName(),Validators.required],
      firstName: ['', Validators.required],
      lastName: [''],
      about: [''],
      role: ['student'],
      experience: [''],
      expertise: [''],
      areaOfInt:['']
    });
 
  }

  submitProfile() {
    if (this.profileForm.valid) {
      alert('Form submitted successfully:');
    } else {
      alert('Form is invalid. Please check the fields.');
    }
  }
}
