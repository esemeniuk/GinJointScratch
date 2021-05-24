import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from './../../services/book.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: 'book-details.page.html',
  styleUrls: ['book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {
  bookForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private bookService: BookService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.bookForm = this.fb.group({ 
      title: '', 
      release_date: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.bookService.getBookById(this.id).subscribe(res => {
        this.bookForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.bookService.updateBookById(this.id, this.bookForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.bookService.addBook(this.bookForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.bookService.deleteBookById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
