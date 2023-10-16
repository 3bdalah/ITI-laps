import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarePipe'
})
export class SquarePipeForLab implements PipeTransform {

  transform(value: any): any {
    
    if(null!==value && !isNaN(value)){
      return value*value;
    }
    else{
      return 'Not a number';
    }
      
  }

}
