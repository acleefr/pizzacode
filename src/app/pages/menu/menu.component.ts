import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../model/pizza.model";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  content?: Pizza[];
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getAllPizza().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }

}
