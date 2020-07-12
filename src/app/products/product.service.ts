import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ProductService{
    url: string= 'http://localhost:3000/products'
    editproductemited= new Subject();
    productdetail= new Subject<ProductModel>();

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
                    "quantity": addproductform.value.quantity,
                    "viewdtimes":0

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


    updateproduct(addproductform: import("@angular/forms").NgForm,id:number,rating?:number){

      return this.http.put(this.url+'/'+id,
      {
      "ProductName":addproductform.value.productname,
      "ProductDescription": addproductform.value.productdiscription,
      "Manufacturer": addproductform.value.manufacturer,
      "Price":addproductform.value.price,
      "quantity": addproductform.value.quantity, 
      "viewdtimes": rating
      
      }
      );
          }


        detail(p:ProductModel){
            this.productdetail.next(p);

        }




        updaterating(p:ProductModel, id:number,rating:number){

          return this.http.put(this.url+'/'+id,
          {
            "ProductName":p['ProductName'],
            "ProductDescription": p['ProductDescription'],
            "Manufacturer": p['Manufacturer'],
            "Price":p['Price'],
            "quantity": p['quantity'],
          "viewdtimes": rating
          
          }
          );
              }
      

}