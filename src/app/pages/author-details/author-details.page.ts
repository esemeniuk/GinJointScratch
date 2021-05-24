import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorService } from './../../services/author.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-details',
  templateUrl: 'author-details.page.html',
  styleUrls: ['author-details.page.scss'],
})
export class AuthorDetailsPage implements OnInit {
  authorForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private authorService: AuthorService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.authorForm = this.fb.group({ 
      first_name: '', 
      last_name: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.authorService.getAuthorById(this.id).subscribe(res => {
        this.authorForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.authorService.updateAuthorById(this.id, this.authorForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.authorService.addAuthor(this.authorForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.authorService.deleteAuthorById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
