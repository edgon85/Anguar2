import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private element:ElementRef) { 
    // console.log('Directiva llamada');
    // element.nativeElement.style.backgroundColor = "yellow";
  }

  @Input("appResaltado") newColor:string;

  @HostListener('mouseenter') mouseEnter(){
    // this.element.nativeElement.style.backgroundColor = "yellow";
    this.resaltar(this.newColor || 'yellow');
  }

  @HostListener('mouseleave') mosueOut(){
    // this.element.nativeElement.style.backgroundColor = null;
    this.resaltar(null);
  }

  private resaltar(color:string){
    this.element.nativeElement.style.backgroundColor = color;
  }
    
}
