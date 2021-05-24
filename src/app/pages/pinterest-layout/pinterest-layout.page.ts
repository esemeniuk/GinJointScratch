import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pinterest-layout',
  templateUrl: './pinterest-layout.page.html',
  styleUrls: ['./pinterest-layout.page.scss'],
})
export class PinterestLayoutPage implements OnInit {
  imageList = [];
  nextPage = 'https://picsum.photos/v2/list';
 
  constructor(private http: HttpClient) {
    this.loadImages();
  }

  ngOnInit() {

  }
 
  loadImages(event?) {
    this.http.get<any[]>(this.nextPage, { observe: 'response' })
    .subscribe(res => {
      this.nextPage = this.parse_link_header(res.headers.get('Link'))['next'];
      this.imageList = this.imageList.length == 0 ? res.body : [...this.imageList, ...res.body];
 
      if (event) {
        event.target.complete();
      }
    });
  }
 
  // https://www.techiediaries.com/angular-httpclient-headers-full-response/
  private parse_link_header(header) {
    if (header.length == 0) {
      return ;
    }
 
    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
 
    });
    return links;
  }  
}
