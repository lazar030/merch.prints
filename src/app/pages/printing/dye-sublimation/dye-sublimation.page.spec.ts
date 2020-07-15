import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DyeSublimationPage } from './dye-sublimation.page';

describe('DyeSublimationPage', () => {
  let component: DyeSublimationPage;
  let fixture: ComponentFixture<DyeSublimationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyeSublimationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DyeSublimationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
