import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
// imgSrc:string="src/assets/imgs/pexels-photo-1337388.webp"
counter:number=0;
constructor(private _counter:CounterService){}
ngOnInit(){
  this._counter.counterVal.subscribe((res)=>this.counter=res );
}
}
