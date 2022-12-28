import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbodyComponent } from './eventbody.component';

describe('EventbodyComponent', () => {
  let component: EventbodyComponent;
  let fixture: ComponentFixture<EventbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
