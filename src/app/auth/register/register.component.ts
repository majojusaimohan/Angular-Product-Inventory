import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



class RegisterModel {
  constructor(public firstName: string = '',
              public lastName: string = '',
              public email: string = '',
              public password: string = '',
              public conformpassword: string = '',
              public location: string = '',
              public mobilenumber: string = ''
              ) {
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
   conformpassword=false;
   model: RegisterModel= new RegisterModel();

  constructor(public auth : AuthService,public route: Router) { }

  ngOnInit() {
  }



  onsubmit(registerform: NgForm){
const firstname=registerform.value.firstname;
const lastname=registerform.value.lastname;
 const password=registerform.value.password;
 const email=registerform.value.email;
 const location=registerform.value.location;
 const mobilenumber=registerform.value.mobile;
 

 const conform=registerform.value.conformpassword;
 if(password!=conform){
 this.conformpassword=true;
return;}

 console.log(registerform);


this.auth.register(firstname,lastname,password,email,location,mobilenumber);

alert("Resigtration successful")
this.route.navigate(['/home']);



    
  }

}
