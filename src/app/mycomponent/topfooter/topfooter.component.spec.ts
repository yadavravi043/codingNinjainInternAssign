import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfooterComponent } from './topfooter.component';

describe('TopfooterComponent', () => {
  let component: TopfooterComponent;
  let fixture: ComponentFixture<TopfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
