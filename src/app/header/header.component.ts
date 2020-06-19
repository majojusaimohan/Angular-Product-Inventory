import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userloginstatus: string;
  useregisterationstatues: string;
  status: boolean;

  constructor(private route: Router,private auth: AuthService) { }



  ngOnInit() {

    this.auth.loginstatus.subscribe(

      data=>{this.status=data;
        this.userloginstatus='Login';
        this.useregisterationstatues='Register'
        if(this.status==false){
          this.userloginstatus='Logout';
          this.useregisterationstatues='View Profile';
          this.route.navigate(['/home']);


        }
        
      
      }
    )
    
  }


  loginstatus(){
    if(this.userloginstatus=="Login"){
      
      
      this.route.navigate(['/login']);
     

    }
    else if(this.userloginstatus=="Logout"){
      
      this.userloginstatus="Login"
      this.auth.logout();
      this.route.navigate(['/home']);

    }





  }
  Register(){

    if(this.useregisterationstatues=='Register'){

    this.route.navigate(['/register']);

    }

    if(this.useregisterationstatues=='View Profile')
    this.route.navigate(['/profile']);

  }

}
