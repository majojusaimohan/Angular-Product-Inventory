import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { ProductModel } from '../products/product.model';

interface topproduct{
  productname: string,
  viewdnumber: number

}


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

 public  products:ProductModel[]
   public  g:number[]=new Array();
   public n:string[]= new Array(); 


  top:topproduct[]=new Array();


  constructor( private productservice: ProductService) { }

  ngOnInit() {

    this.productservice.fetchproducts().subscribe(

      data=>{
        this.products=data;
        console.log(this.products)

        this.products.forEach(element => {
          this.n.push( element['ProductName']);
          this.g.push(element['viewdtimes']);
         
       });
       console.log(this.top)
      }
    );
   
        
   
      
    


  }



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels = this.n;
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
   // {data: [65, 59, 80, 81, 56, 55, 40], label: 'top viewed product'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    {data: this.g, label: 'top viewed product'}
  ];


}
