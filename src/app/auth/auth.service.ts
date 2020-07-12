import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

class RegisterModel {
  constructor(public firstName: string = '',
              public lastName: string = '',
              public email: string = '',
              public password: string = '',
          
              public location: string = '',
              public mobilenumber: string = ''
              ) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // loginstatus= new BehaviorSubject<boolean>(true);
  loginstatus= new BehaviorSubject<boolean>(false);
  profile= new Subject();

  Registeredusers: RegisterModel[];
  logineduser: RegisterModel;

  login(email, password)
  {


       this.http.get<RegisterModel[]>('http://localhost:3000/register').subscribe
        
    ( 
       data=>{

          this.Registeredusers=data;

          this.Registeredusers.forEach(element => {
            if( element.email==email && element.password==password){
              
               this.profile.next(element);
               
               this.loginstatus.next(false);
               
              
              }
             
           });
     

       
       }
       


         
  
      
      )

      
    
      
      
    

  }
  register(firstname:string,lastname:string,password:string,email:string,location:string,mobilenumber:string){
    
      
this.http.post('http://localhost:3000/register',

{   "id":"",
  "firstname": firstname,
  "lastname": lastname,
  "password": password,
  "email": email,
  "location": location,
  "mobile": mobilenumber

}
).subscribe(

  data => {
    // this.postId = data.id;
     console.log('POST Request is successful ', data);
   },
   error => {
     console.log('Error', error);
   }
 );


  }
logout(){
  this.loginstatus.next(true);

  
}

}
