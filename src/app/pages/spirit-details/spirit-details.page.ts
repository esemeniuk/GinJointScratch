import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SpiritService } from './../../services/spirit.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-spirit-details',
    templateUrl: 'spirit-details.page.html',
    styleUrls: ['spirit-details.page.scss'],
})
export class SpiritDetailsPage implements OnInit {
    spiritForm: FormGroup;
    id = null;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private spiritService: SpiritService, private navCtrl: NavController) {

    }

    ngOnInit() {
        this.spiritForm = this.fb.group({
            spiritType: '',
            name: '',
            countryCode: '',
            country: '',
            region: '',
            producer: '',
            promotingAgent: '',
            degreeOfAlcohol: '',
            colour: '',
            image: '',
            slug: '',
            description: '',
        });

        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id && this.id != 'null') {
            this.spiritService.getSpiritById(this.id).subscribe(res => {
                this.spiritForm.patchValue(res);
            });
        } else {
            this.id = null;
        }
    }

    submit() {
        if (this.id) {
            this.spiritService.updateSpiritById(this.id, this.spiritForm.value).then(res => {
                this.navCtrl.pop();
            });
        } else {
            this.spiritService.addSpirit(this.spiritForm.value).then(res => {
                this.navCtrl.pop();
            });
        }
    }

    delete() {
        this.spiritService.deleteSpiritById(this.id).then(res => {
            this.navCtrl.pop();
        });
    }
}
