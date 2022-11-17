import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    this.userService.postBooking(f.value).subscribe({
      next: data => {
      },
      error: err => {
        console.log(JSON.parse(err.error).message);
      }
    });

  }
}
