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
error=false;
status:boolean;
isloading=false;


  constructor(public auth: AuthService) { 
   
  }

  ngOnInit() {
    this.auth.loginstatus.subscribe(
      data=>{
          this.status=data;
      }
      
          )


         
    
  }



  onsubmit(authform: NgForm){

    if(this.loginbuttontext=='Login'){
    if(!authform.valid){
        return;

    }
    this.isloading=true;
      const email=authform.value.email;
      const password= authform.value.password;
      if(this.status)
      {
      this.error=true;}


      this.auth.login(email, password)
     
     
     
      
      

      
       
        

     

      }

      


    }

  }


