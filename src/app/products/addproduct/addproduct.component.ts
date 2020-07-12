import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  buttontext='Add product';
  editingproduct: ProductModel[];
 public productname:string;
 public manufacturer:string;
 public productdiscription:string;
 public price:string;
 public quantity:number;
 public id:number;
  public raitng: number

  constructor(public productservice: ProductService, public route: Router, public router: ActivatedRoute) { }

  ngOnInit() {


    

this.router.params.subscribe(

  params=>{

    this.id=+params['edit']
    if(params['type']=='edit'){
      this.buttontext='Update Product';
     this.productservice.editproduct(params['edit']);
      this.productservice.fetchproducts().subscribe(

        data=>{
          this.editingproduct=data;
          

          this.editingproduct.forEach(elements=>{

              if(elements['id']==params['edit']){
                
                console.log(elements['id']);
                this.productname=elements['ProductName'];
                this.productdiscription=elements['ProductDescription'];
                this.price=elements['Price'];
                this.quantity=elements['quantity'];
                this.manufacturer=elements['Manufacturer'];
                this.raitng=elements['viewdtimes']

              
              }

               })


        }
      
      
      
          )}

    else{

     this.buttontext='Add product';
     

    }
  }
)


  }

  onsubmit(addproductform: NgForm){
    if(this.buttontext=="Add product"){
this.productservice.addproduct(addproductform);

    alert("product added sucessfully")
    addproductform.reset();}

    else if(this.buttontext=="Update Product"){
      this.productservice.updateproduct(addproductform,this.id,this.raitng).subscribe(

        ()=>{

          alert("Product Updated sucessfully");
          this.route.navigate(['/viewproducts']);
        },
        (err:any)=>{
          console.log(err);
        }

      )

    }

  }

}
