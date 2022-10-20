import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private userService: UserService,private authService: AuthService, private tokenStorage: TokenStorageService) { }



  ngOnInit(): void {


    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

      if(this.roles.includes("admin")){
        this.userService.getAdminBoard().subscribe({
          next:data => {
            this.content = data;
          },
          error:err => {
            this.content = JSON.parse(err.error).message;
        }});
      }else{
        this.content = "You don't have access to this page : "+ this.tokenStorage.getUser().roles;
      }

    }else{
      window.location.replace("http://localhost:4200/login");

    }


  }
}
