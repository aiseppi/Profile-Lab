import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: UserProfile;
  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    //when the component is rendered set property to be what the current state of the profile is,
    // this ties in with the one way data binding on the ts file
    this.user = this.profileService.getUserProfile();
  }
  theSubmittedEvent(form: NgForm): void {
    let newProfile = {
      name: form.value.name,
      contact: form.value.contact,
      bio: form.value.bio
    }
    this.profileService.setUserProfile(newProfile);
    this.router.navigate(["profile"])
  }

}

