import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';



@Component({
  selector: 'app-productdetails',
  // templateUrl: './productdetails.component.html',
    template:`
    
<br><br>

<div class="card" style="width: 18rem;">
  
   <div class="card-body">
     <h5 class="card-title">Details Of The Product</h5>
     <p class="card-text"></p>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item"  >Product Name: {{ productname }}</li>
     <li class="list-group-item">Product Description:{{productdiscription}}</li>
     <li class="list-group-item">Price: {{price}}</li>
     <li class="list-group-item">Quantity: {{quantity}}</li>
     <li class="list-group-item">Manufacturer: {{manufacturer}}</li>
   </ul>
   <div class="card-body">
     <a href="#" class="card-link">Card link</a>
     <a href="#" class="card-link">Another link</a>
   </div>
 </div> 


 

    `,
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  public productname:string;
  public manufacturer:string;
  public productdiscription:string;
  public price:string;
  public quantity:number;
  public id:string;

   deatail:ProductModel;
  


  constructor(public productservice: ProductService, private crf:ChangeDetectorRef) { 
    
   // this.initialization(); 
  }

  ngOnInit()
  
  
  {
    this.productservice.productdetail.subscribe
    (

      data=>{
          
          console.log(data["id"]);
      this.id=data["id"];

      console.log(data['id']);
              this.productname=data['ProductName'];
              this.productdiscription=data['ProductDescription'];
              this.price=data['Price'];
              this.quantity=data['quantity'];
              this.manufacturer=data['Manufacturer'];

              
      }
    )
    this.getname();


      }

  getname(){
    this.deatail= new ProductModel(this.productname,this.productdiscription,+this.price,this.quantity,this.manufacturer);

    console.log(this.deatail);
  }

  }



