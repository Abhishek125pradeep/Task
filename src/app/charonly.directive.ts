import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharonly]'
})
export class CharonlyDirective {

  constructor(private elementref:ElementRef) { }
@HostListener('input',['$event'])
CatchEvent(){
  let value = this.elementref.nativeElement.value;
  this.elementref.nativeElement.value = value.replace(/[^a-zA-Z]*/g,'')
}




}
