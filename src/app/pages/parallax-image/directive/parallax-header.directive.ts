import { Directive, ElementRef, HostListener, Renderer2, AfterViewInit } from '@angular/core';
import { DomController } from '@ionic/angular';
 
@Directive({
  selector: '[appParallaxHeader]'
})
export class ParallaxHeaderDirective implements AfterViewInit {
  header: any;
  headerHeight: number;
  moveImage: number;
  scaleImage: number;
 
  constructor(public element: ElementRef, public renderer: Renderer2, private domCtrl: DomController) {}
 
  ngAfterViewInit() {
    let content = this.element.nativeElement;
    this.header = content.getElementsByClassName('parallax-image')[0];
 
    this.domCtrl.read(() => {
      this.headerHeight = this.header.clientHeight;
    });
  }
 
  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    const scrollTop = $event.detail.scrollTop;
 
    this.domCtrl.write(() => {
      if (scrollTop > 0) {
        // Use higher values to move the image out faster
        // Use lower values to move it out slower
        this.moveImage = scrollTop / 2;
        this.scaleImage = 1;
      } else {
        // +1 at the end as the other part can become 0
        // and the image would disappear
        this.scaleImage = -scrollTop / this.headerHeight + 1;
        this.moveImage = scrollTop / 1.4;
      }
 
      this.renderer.setStyle(this.header,'webkitTransform',
        'translate3d(0,' + this.moveImage + 'px,0) scale(' + this.scaleImage + ',' + this.scaleImage +')'
      );
    });
  }
}