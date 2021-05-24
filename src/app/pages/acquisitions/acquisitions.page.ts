import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AcquisitionService } from './../../services/acquisition.service';
import { Acquisition } from './../../services/acquisition';


@Component({
    selector: 'app-acquisitions',
    templateUrl: 'acquisitions.page.html',
    styleUrls: ['acquisitions.page.scss'],
})
export class AcquisitionsPage implements OnInit {

    items: Observable<Acquisition[]>;

    constructor(private acquisitionService: AcquisitionService) {
      
  }

  ngOnInit() {
   
      this.items = this.acquisitionService.getAcquisitions();

  }

}
