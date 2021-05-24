import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParallaxImagePage } from './parallax-image.page';

describe('ParallaxImagePage', () => {
  let component: ParallaxImagePage;
  let fixture: ComponentFixture<ParallaxImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParallaxImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
