import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import { INTRO_KEY } from '../introduction/introduction.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private auth: AuthService) {}

  logOut() {
    this.auth.logOut();
  }

  async resetIntro() {
    await Storage.remove({key: INTRO_KEY});
  }
}
