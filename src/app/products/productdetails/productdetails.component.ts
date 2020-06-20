import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(public productservice: ProductService, public route: Router, public router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe(

      params=>{
        console.log(params);

        

      });
    
  }

}
