import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginbuttontext='Login';

  constructor(public auth: AuthService) { }

  ngOnInit() {
    
  }



  onsubmit(authform: NgForm){

    if(this.loginbuttontext=='Login'){
    if(!authform.valid){
        return;

    }
      const email=authform.value.email;
      const password= authform.value.password;


        console.log(authform);
     
    

      
        this.auth.login(email, password)
        

     

      }

      this.loginbuttontext='Logout'


    }

  }


