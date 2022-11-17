import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from "../../../_services/user.service";
@Component({
  selector: 'form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.css']
})
export class FormHomeComponent implements OnInit {

  constructor(private userService: UserService) { }
    content!:string
  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.userService.postBooking(f.value).subscribe({
      next: data => {
        this.content = data;
        window.location.reload()
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });

  }

}
