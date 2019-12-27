import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoViewPage } from './info-view.page';

describe('InfoViewPage', () => {
  let component: InfoViewPage;
  let fixture: ComponentFixture<InfoViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
