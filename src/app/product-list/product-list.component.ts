import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import jsonData from '../../assets/products-list.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title = 'e-commerce';
  data:Product[]=jsonData;
  ngOnInit() {
    console.log('Data', this.data);
  }
}
