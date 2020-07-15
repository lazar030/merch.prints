import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreenPrintingPage } from './screen-printing.page';

describe('ScreenPrintingPage', () => {
  let component: ScreenPrintingPage;
  let fixture: ComponentFixture<ScreenPrintingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenPrintingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenPrintingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
