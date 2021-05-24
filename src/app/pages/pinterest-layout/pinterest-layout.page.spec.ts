import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PinterestLayoutPage } from './pinterest-layout.page';

describe('PinterestLayoutPage', () => {
  let component: PinterestLayoutPage;
  let fixture: ComponentFixture<PinterestLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PinterestLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
