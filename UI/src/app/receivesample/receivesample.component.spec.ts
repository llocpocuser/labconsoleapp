import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivesampleComponent } from './receivesample.component';

describe('ReceivesampleComponent', () => {
  let component: ReceivesampleComponent;
  let fixture: ComponentFixture<ReceivesampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivesampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
