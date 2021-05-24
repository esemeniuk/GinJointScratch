import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from './../../services/book.service';
import { Book } from './../../services/book';

@Component({
  selector: 'app-book',
  templateUrl: 'book.page.html',
  styleUrls: ['book.page.scss'],
})
export class BookPage implements OnInit {
  items: Observable<Book[]>;

  constructor(private bookService: BookService) {
      
  }
  ngOnInit() {
    this.items = this.bookService.getBooks();
  }

}