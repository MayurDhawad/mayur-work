import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from '../login'


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  loginUserData = new Login ("","")
  constructor(private _auth : AuthService, private _router : Router){}

  ngOnInit(){
      
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
        .subscribe(
           res => {
                    console.log(res),
                    localStorage.setItem('token', res.token)
                    this._router.navigate(['/exchange'])
                  },
           err => console.log(err)
        )
  }
}
