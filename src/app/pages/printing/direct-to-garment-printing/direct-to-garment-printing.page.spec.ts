import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectToGarmentPrintingPage } from './direct-to-garment-printing.page';

describe('DirectToGarmentPrintingPage', () => {
  let component: DirectToGarmentPrintingPage;
  let fixture: ComponentFixture<DirectToGarmentPrintingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectToGarmentPrintingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectToGarmentPrintingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
