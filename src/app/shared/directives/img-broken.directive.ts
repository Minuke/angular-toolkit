import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  
  @HostListener('error') handleError():void {
    const elNative = this.host.nativeElement;
    elNative.src = "./images/image-not-found.svg"
  }
  
  constructor(private host:ElementRef) {
    console.log(host)
  }

}
