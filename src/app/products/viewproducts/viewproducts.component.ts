import { Component, OnInit, Output } from '@angular/core';
import { ProductModel } from '../product.model';
import { ProductService } from '../product.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {


  showModal : boolean= false;
  public productname:string;
  public manufacturer:string;
  public productdiscription:string;
  public price:string;
  public quantity:number;
  public id:number;
  rating:number;
  
  searchString: string="";
  status:boolean=true;
  products:ProductModel[];
  togglename=true;
  toggledes=true;
  toggleprice=true;
  togglequantity=true;
  toggleman=true;
  productdetail= new Subject<any>();
  
  constructor( public productservice: ProductService,public auth: AuthService, public  route: Router) {
    
   }

  ngOnInit() {

this.initialization();
    
  }
  


  initialization()
  {
    this.productservice.fetchproducts().subscribe(

      data=>{
        this.products=data;
      }
    );
    this.auth.loginstatus.subscribe(

      data=>{this.status=data;
        

        }
        
      
      
    );

  }
  togglefilter(filter: string){
    if(filter=='Name'){
this.togglename=!this.togglename;}
if(filter=='Description'){
  this.toggledes=!this.toggledes;}
  if(filter=='Price'){
    this.toggleprice=!this.toggleprice;}
    if(filter=='Quantity'){
      this.togglequantity=!this.togglequantity;}
      if(filter=='Manufacturer'){
        this.toggleman=!this.toggleman;}

  }


  editproduct( id:number ){


    if(this.status){

      this.route.navigate(['./login']);

    }else{
    console.log(id);

    this.route.navigate(['addproduct',{'edit':id, 'type':'edit'}]);
    }



  }

  deleteproduct(id:number)

  { 
    if(this.status){

      this.route.navigate(['./login']);

    }
    
    else{
    
    this.productservice.deleteproduct(id).subscribe(


    ()=>{
      console.log("product deleted sucessfullly");
      alert("product deleted sucessfullly")
      this.initialization();
      

    },
    (err: any)=>{
console.log(err)

    }
  );

  this.route.navigate(['/viewproducts'])

  }


  }
  productdetails(p: ProductModel)
  {      


    if(this.status){

      this.route.navigate(['./login']);

    }
else{

this.productname=p['ProductName'];
this.productdiscription=p['ProductDescription'];
              this.price=p['Price'];
              this.quantity=p['quantity'];
              this.manufacturer=p['Manufacturer'];
              this.id=p['id'];
              this.rating=p['viewdtimes']+1;
              this.productservice.updaterating(p,this.id,this.rating).subscribe(

                ()=>{
        
                  
                 console.log("sucess")
                },
                (err:any)=>{
                  console.log(err);
                }
        
              )

console.log(p);

this.rating=0;
  
  // this.productservice.detail(p);

  // this.route.navigate(['/productdetails']);
}

  }











  




  

 

}
