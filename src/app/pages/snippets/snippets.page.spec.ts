import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SnippetsPage } from './snippets.page';

describe('SnippetsPage', () => {
  let component: SnippetsPage;
  let fixture: ComponentFixture<SnippetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SnippetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
