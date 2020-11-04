import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1,'2018 Zinfandel 750mL', 30.00, './assets/2018 Zinfandel.jpeg','A Zinfandel that draws its power from sophistication instead of raw alcohol content. Made in the classic field blend style including significant portions of Petite sirah and Carignane.'),
    new Product(2,'2017 Cabernet Sauvignon 750mL', 40.00, './assets/2017 Estate Grown Cabernet Sauvignon.jpeg','A wine with all the hallmarks of the legendary Cabernets of Rutherford: deep, cassis-currant aromas, the classic notes of Rutherford Dust, earthen flavors of cedar and black olive and a velvety, plush mouthfeel'),
    new Product(3,'2018 Heritage Blend 750mL', 79.00, './assets/2018 Heritage Blend.jpeg','A field blend of varietals rarely seen today including Charbono, Carignan, Valdiguie, and Mourvèdre. Bright, fresh red fruit flavors meet baking spice aromas to tell a historic story.'),
    new Product(4,'2018 Chardonnay Shale  750mL', 45.00, './assets/2018 Chardonnay Shale and Stone.jpeg',"'Shale and Stone' on the label is reflective of the deep minerality of the vineyard's ancient fractured shale soils and the freshness of the varietal. With long sur lie aging in concrete, it is taut but generous, and full yet bright on the palate."),
    new Product(5,'2018 Chenin Blanc 750mL', 50.00, './assets/2018 Chenin Blanc.jpeg','ermented and aged entirely in concrete, this wine is lean yet supple, aromatic yet reserved, savory yet refreshing and deeply sophisticated. 100% Chenin Blanc with bright acidity and superb balance.'),
    new Product(6,'2018 Sauvignon Blanc 750mL', 80.00, './assets/2018 Rachel Rossi Reserve Sauvignon Blanc.jpeg','Honoring the matriarch of the family who founded our Rossi Vineyard and made from 39-year-old vines, rich apricot and freshly wetted stone aromas meet seamless flavors, superb balance and a flawless finish.'),
    new Product(7,'2018 Planet Zinfandel 750mL', 40.00, './assets/2017 Estate Grown Cabernet Sauvignon.jpeg','A Zinfandel that draws its power from sophistication instead of raw alcohol content. Made in the classic field blend style including significant portions of Petite sirah and Carignane.'),
    new Product(8,'2019 Sauvignon Blanc 750mL', 79.00, './assets/2019 Sauvignon Blanc.jpeg','Made from 75-year-old vines, delicate floral aromas and fresh fruit flavors come together in this classic Provencal style rose. Lifted by bright, natural acidity and low alcohol, this wine is the perfect companion to a warm, sunny day.'),
]

  constructor() { }

  getProducts(): Product[]{
    return this.products
    }
}
