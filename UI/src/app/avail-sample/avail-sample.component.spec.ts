import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailSampleComponent } from './avail-sample.component';

describe('AvailSampleComponent', () => {
  let component: AvailSampleComponent;
  let fixture: ComponentFixture<AvailSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
