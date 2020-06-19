import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product.model';
import { ProductService } from '../product.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
  searchString: string="";
  status:boolean=true;
  products:ProductModel[];
  togglename=true;
  toggledes=true;
  toggleprice=true;
  togglequantity=true;
  toggleman=true;
  
  constructor( public productservice: ProductService,public auth: AuthService, public  route: Router) {
    
   }

  ngOnInit() {


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
    console.log(id);

    this.route.navigate(['addproduct',{'edit':id, 'type':'edit'}]);




  }

  deleteproduct(id:number)
  {      this.productservice.deleteproduct(id).subscribe(


    ()=>{
      console.log("product deleted sucessfullly");
      alert("product deleted sucessfullly")
      

    },
    (err: any)=>{
console.log(err)

    }
  );

  this.route.navigate(['/viewproducts'])

  


  }
  productdetails(id:number)
  {      console.log(id);


  }

 

}
