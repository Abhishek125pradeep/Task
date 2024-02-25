import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCompoComponent } from './extra-compo.component';

describe('ExtraCompoComponent', () => {
  let component: ExtraCompoComponent;
  let fixture: ComponentFixture<ExtraCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraCompoComponent]
    });
    fixture = TestBed.createComponent(ExtraCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
