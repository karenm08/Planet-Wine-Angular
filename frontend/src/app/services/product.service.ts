import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1,'2018 Zinfandel 750mL', 30.00, './assets/2018 Zinfandel.jpeg'),
    new Product(2,'2017 Estate Grown Cabernet Sauvignon 750mL', 40.00, './assets/2017 Estate Grown Cabernet Sauvignon.jpeg'),
    new Product(3,'2018 Heritage Blend 750mL', 79.00, './assets/2018 Heritage Blend.jpeg'),
    new Product(4,'2018 Chardonnay Shale and Stone 750mL', 45.00, './assets/2018 Chardonnay Shale and Stone.jpeg'),
    new Product(5,'2018 Chenin Blanc 750mL', 50.00, './assets/2018 Chenin Blanc.jpeg'),
    new Product(6,'2018 Rachel Rossi Reserve Sauvignon Blanc 750mL', 80.00, './assets/2018 Rachel Rossi Reserve Sauvignon Blanc.jpeg'),
    new Product(7,'2018 Planet Zinfandel 750mL', 40.00, './assets/2017 Estate Grown Cabernet Sauvignon.jpeg'),
    new Product(8,'2019 Sauvignon Blanc 750mL', 79.00, './assets/2019 Sauvignon Blanc.jpeg'),
]

  constructor() { }

  getProducts(): Product[]{
    return this.products
    }
}
