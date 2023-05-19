import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(value: string,limit?:number): string | null {
   if(!value){
    return null;
   }else{
     return value.substring(0,limit||50)+"...";
   }
  }

}
