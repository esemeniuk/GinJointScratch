import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax-image',
  templateUrl: './parallax-image.page.html',
  styleUrls: ['./parallax-image.page.scss'],
})
export class ParallaxImagePage implements OnInit {

  myImagePath = 'https://images.unsplash.com/photo-1601652290498-0b5f418541a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';

  constructor() { }

  ngOnInit() {
  }

}
