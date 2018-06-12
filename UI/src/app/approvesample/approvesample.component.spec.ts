import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovesampleComponent } from './approvesample.component';

describe('ApprovesampleComponent', () => {
  let component: ApprovesampleComponent;
  let fixture: ComponentFixture<ApprovesampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovesampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
