import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ProductService{
    url: string= 'http://localhost:3000/products'
    editproductemited= new Subject();

  constructor(public http: HttpClient){}


  products:ProductModel[];
   product:ProductModel;



    addproduct(addproductform: import("@angular/forms").NgForm) {
       
       
            this.http.post(this.url,
                {
                    "id":"",
                    "ProductName":addproductform.value.productname,
                    "ProductDescription": addproductform.value.productdiscription,
                    "Manufacturer": addproductform.value.manufacturer,
                    "Price":addproductform.value.price,
                    "quantity": addproductform.value.quantity

                }
                ).subscribe(

                    data => {
                        // this.postId = data.id;
                         console.log('POST Request is successful ', data);
                       },
                       error => {
                         console.log('Error', error);
                       }
                )

      }


      fetchproducts(){
        this.http.get<ProductModel[]>(this.url).subscribe(

          
        )

       return this.http.get<ProductModel[]>(this.url);

      }

      editproduct(id: number){

        this.fetchproducts().subscribe(

            data=>{

              data;
              

              data.forEach(element=>{
                if(element['id']==id){
                  
                this.editproductemited.next(element);}
              })
              

              

            })

        }



    deleteproduct(id: number){

return this.http.delete(this.url+'/'+id)
    }


    updateproduct(addproductform: import("@angular/forms").NgForm,id:number){

      return this.http.put(this.url+'/'+id,
      {
      "ProductName":addproductform.value.productname,
      "ProductDescription": addproductform.value.productdiscription,
      "Manufacturer": addproductform.value.manufacturer,
      "Price":addproductform.value.price,
      "quantity": addproductform.value.quantity
      }
      );
          }
      

}