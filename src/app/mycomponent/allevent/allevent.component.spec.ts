import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleventComponent } from './allevent.component';

describe('AlleventComponent', () => {
  let component: AlleventComponent;
  let fixture: ComponentFixture<AlleventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlleventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlleventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
