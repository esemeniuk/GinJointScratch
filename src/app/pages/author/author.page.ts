import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorService } from './../../services/author.service';
import { Author } from './../../services/author';

@Component({
  selector: 'app-author',
  templateUrl: 'author.page.html',
  styleUrls: ['author.page.scss'],
})
export class AuthorPage implements OnInit {
  items: Observable<Author[]>;

  constructor(private authorService: AuthorService) {
      
  }
  ngOnInit() {
    this.items = this.authorService.getAuthors();
  }

}