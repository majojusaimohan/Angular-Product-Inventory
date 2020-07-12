import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 

              firstName: string;
               lastName: string ;
            email: string ;
              
             
               location: string ;
             mobilenumber: string ;


  constructor( public auth : AuthService) { }

  ngOnInit() {

      this.auth.profile.subscribe(

      data=>{
        console.log(data['mobile']);
        this.firstName=data['firstname'];
        console.log(this.firstName)
        this.lastName=data['lastname'];
        this.mobilenumber=data['mobile'];
        this.location=data['location'];
       this.email=data['email'];
       



      }
    )
  }
  

}
