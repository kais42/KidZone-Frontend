import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../login/_services/token-storage.service';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  currentUser: any;
  lastName: string;
  firstName: string;
  aboutMe: string;
  zipCode: string;
  city: string;
  address: string;

  constructor(private token: TokenStorageService, private profileService: ProfileService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  editProfile() {
    const data = {
      email: this.currentUser.email,
      id: this.currentUser.id,
      username: this.currentUser.username,
      lastName: this.lastName,
      aboutMed: this.aboutMe,
      zipCode: this.zipCode,
      city: this.city,
      address: this.address
    };
    this.profileService.editProfile(data).subscribe(user => this.currentUser.id = user.id);
  }
}
