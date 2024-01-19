import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanydataComponentComponent } from './companydata-component.component';

describe('CompanydataComponentComponent', () => {
  let component: CompanydataComponentComponent;
  let fixture: ComponentFixture<CompanydataComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanydataComponentComponent]
    });
    fixture = TestBed.createComponent(CompanydataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
