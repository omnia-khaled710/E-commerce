import { Component } from '@angular/core';
import { CounterService } from '../counter.service';
import { ShowInCartService } from '../show-in-cart.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent {
item: any;


  arrayOfCartList: any;
  counter!: number;
  sum: number = 0;
constructor(private _counter:CounterService, private orders: ShowInCartService){
  
}

ngOnInit() {
  // this._counter.counterVal.subscribe((res)=>{
  //  this.counter = res})
  this.orders.cartList.subscribe((res: any) => this.arrayOfCartList = res)
    // this.counter.counterValue.subscribe((res: any)=> this.counter = res)
    this._counter.counterVal.subscribe(res=> this.counter = res);
}
decreaseCounter(itemId: number){
  // this._counter.changeCounter(--this.counter)
  let filterItem = this.arrayOfCartList?.find((item: any) => item.id == itemId);
  if(filterItem.quantity > 1) {filterItem.quantity--
    filterItem.countOfPrice = filterItem.quantity * filterItem.price;this.total()
  }
}
increaseCounter(itemId: number){
  // this._counter.changeCounter(++this.counter)
  let filterItem = this.arrayOfCartList?.find((item: any) => item.id == itemId);
  filterItem.quantity++
  filterItem.countOfPrice = filterItem.quantity * filterItem.price;
  this.total()

}


removeItem(itemId: number) {
  this.arrayOfCartList = this.arrayOfCartList?.filter((item: any)=> item.id != itemId)
  this._counter.changeCounter(--this.counter)
  this.orders.afterRemove(this.arrayOfCartList);
  this.total()
}
total() {
  this.sum = 0
  this.arrayOfCartList?.map((item: any)=> this.sum += Number(item.countOfPrice))
  return this.sum;
}

}