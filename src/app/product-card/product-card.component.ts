import { Component,Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
[x: string]: any;
@Input()products:Product[]=[]
counter:number=0;

constructor(private router:Router,private _counter:CounterService){

}


ngOnInit() {
  this._counter.counterVal.subscribe((res)=>{
   this.counter = res
    
  })
}
decreaseCounter(){
  this._counter.changeCounter(--this.counter)
}
increaseCounter(){
  this._counter.changeCounter(++this.counter)

}

}
