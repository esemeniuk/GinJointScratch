import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpiritService } from './../../services/spirit.service';
import { Spirit } from './../../services/spirit';

@Component({
  selector: 'app-spirits',
  templateUrl: 'spirits.page.html',
  styleUrls: ['spirits.page.scss'],
})

export class SpiritsPage implements OnInit {

    items: Observable<Spirit[]>;

    constructor(private spiritService: SpiritService) {
      
    }

    ngOnInit() {

        this.items = this.spiritService.getSpirits();

    }

}
