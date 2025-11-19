import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttchementbuttonComponent } from './attchementbutton.component';

describe('AttchementbuttonComponent', () => {
  let component: AttchementbuttonComponent;
  let fixture: ComponentFixture<AttchementbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttchementbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttchementbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
