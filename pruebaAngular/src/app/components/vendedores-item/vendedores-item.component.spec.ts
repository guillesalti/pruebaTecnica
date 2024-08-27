import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoresItemComponent } from './vendedores-item.component';

describe('VendedoresItemComponent', () => {
  let component: VendedoresItemComponent;
  let fixture: ComponentFixture<VendedoresItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendedoresItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendedoresItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
