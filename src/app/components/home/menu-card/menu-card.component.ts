import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../_services/user.service";
import {Pizza} from "../../../model/pizza.model";

@Component({
  selector: 'menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {
  content!: Pizza[];
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getAllPizza().subscribe({
      next: (data:Pizza[] ) => {
        this.content = data.filter(pizza => parseInt(pizza.id) < 4 );
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });


  }

}
