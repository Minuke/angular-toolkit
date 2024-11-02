import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  
  @HostListener('error') handleError():void {
    const elNative = this._host.nativeElement;
    elNative.src = "./images/image-not-found.svg"
  }

  private _host: ElementRef = inject(ElementRef);
  
}
