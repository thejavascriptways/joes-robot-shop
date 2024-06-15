import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      name: 'Friendly bot',
      description: 'A friendly robot with two eyes and a smile - a friendly bot',
      price: 945.0,
      category: "heads",
      imgName: "head-friendly.png",
      discount: 0.2
    };

  }

}
