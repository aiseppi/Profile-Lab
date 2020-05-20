import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: UserProfile = {
    name: "Bob Dobalina",
    contact: "mistadobalina@delmail.com",
    bio: "I'll really make you sick with my fraudulent behavior"
  }
  constructor() { }

  getUserProfile(): UserProfile {
    return this.user;
  }
  setUserProfile(user: UserProfile) {
    this.user = user;
  }
}
