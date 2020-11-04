import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private router:Router,
    private productService:ProductService) { }
    sub;
    id;
    productItem:Product;

    ngOnInit(): void {
      this.sub = this.activatedroute.paramMap.subscribe(params => { 
         this.id = params.get('id'); 
         let products = this.productService.getProducts();
         this.productItem = products.find(p => p.id == this.id);    
     });
    }

}
