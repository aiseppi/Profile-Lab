import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: UserProfile = {
    name: "Alyssa D. Crechiolioliolio",
    contact: "alyssa@lyssmail.com",
    bio: "she already done had herses"
  }
  constructor() { }

  getUserProfile(): UserProfile {
    return this.user;
  }
  setUserProfile(user: UserProfile) {
    this.user = user;
  }
}
