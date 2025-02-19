import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
  standalone: true
})
export class RenklendirDirective {

  @Input("test") name: string | undefined;

  constructor(
    private el: ElementRef
  ) { }

  @HostListener("mouseenter") method1() {
    this.el.nativeElement.style = "color: red"
    console.log("Mouse elementin üzerine geldi.");
    console.log(this.name) // Bu şekilde app.component.ts de çınar değerini burada yazının üstüne geldiği zaman console yazdır demiş olurum
  }

  @HostListener("mouseleave") method2() {
    this.el.nativeElement.style = "color: black"
    console.log("Mouse elementin üzerinden ayrıldı.");
  }


}
