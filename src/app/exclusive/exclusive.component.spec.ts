import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveComponent } from './exclusive.component';

describe('ExclusiveComponent', () => {
  let component: ExclusiveComponent;
  let fixture: ComponentFixture<ExclusiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExclusiveComponent]
    });
    fixture = TestBed.createComponent(ExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
