import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BandMerchPage } from './band-merch.page';

describe('BandMerchPage', () => {
  let component: BandMerchPage;
  let fixture: ComponentFixture<BandMerchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandMerchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BandMerchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
