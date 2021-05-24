import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AcquisitionService } from './../../services/acquisition.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SpiritService } from './../../services/spirit.service';
import { Spirit } from './../../services/spirit';
import { IonicSelectableComponent } from 'ionic-selectable';


@Component({
    selector: 'app-acquisition-details',
    templateUrl: 'acquisition-details.page.html',
    styleUrls: ['acquisition-details.page.scss'],
})
export class AcquisitionDetailsPage implements OnInit {
    acquisitionForm: FormGroup;
    id = null;
    //items: Observable<Spirit[]>;
    spirits: Spirit[];
    
    constructor(private fb: FormBuilder, private route: ActivatedRoute, private acquisitionService: AcquisitionService, private navCtrl: NavController, private spiritService: SpiritService) {
        
    }

    ngOnInit() {
        //this.items = this.spiritService.getSpirits();

        this.spiritService.getSpirits().subscribe(res => this.spirits = res as Spirit[]);

        this.acquisitionForm = this.fb.group({
            spiritID: '',
            aroma: [0],
            finish: [0],
            overallEnjoyment: [0],
            taste: [0],
            visualAppeal: [0],
            comments: ''
        });

        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id && this.id != 'null') {
            this.acquisitionService.getAcquisitionById(this.id).subscribe(res => {
                this.acquisitionForm.patchValue(res);
            });
        } else {
            this.id = null;
        }
    }

    submit() {
        if (this.id) {
            this.acquisitionService.updateAcquisitionById(this.id, this.acquisitionForm.value).then(res => {
                this.navCtrl.pop();
            });
        } else {
            this.acquisitionService.addAcquisition(this.acquisitionForm.value).then(res => {
                this.navCtrl.pop();
            });
        }
    }

    delete() {
        this.acquisitionService.deleteAcquisitionById(this.id).then(res => {
            this.navCtrl.pop();
        });
    }

    onAromaRatingChange(rating) {
        console.log('The aroma evaluation was modified and now its value is: ', rating);
        // do your stuff
    }
    onFinishRatingChange(rating) {
        console.log('The finish evaluation was modified and now its value is: ', rating);
        // do your stuff
    }
    onOverallEnjoymentRatingChange(rating) {
        console.log('The overall evaluation was modified and now its value is: ', rating);
        // do your stuff
    }
    onTasteRatingChange(rating) {
        console.log('The taste evaluation was modified and now its value is: ', rating);
        // do your stuff
    }
    onVisualAppealRatingChange(rating) {
        console.log('The visual appeal evaluation was modified and now its value is: ', rating);
        // do your stuff
    }

    spiritChange(event: {
        component: IonicSelectableComponent,
        value: any
    }) {
        console.log('port:', event.value);
    }
}
