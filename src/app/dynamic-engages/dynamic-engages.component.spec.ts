import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEngagesComponent } from './dynamic-engages.component';

describe('DynamicEngagesComponent', () => {
  let component: DynamicEngagesComponent;
  let fixture: ComponentFixture<DynamicEngagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicEngagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicEngagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
