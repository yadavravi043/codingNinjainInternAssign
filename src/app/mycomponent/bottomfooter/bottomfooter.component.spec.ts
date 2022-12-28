import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomfooterComponent } from './bottomfooter.component';

describe('BottomfooterComponent', () => {
  let component: BottomfooterComponent;
  let fixture: ComponentFixture<BottomfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
