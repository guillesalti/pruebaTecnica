import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalidadesListComponent } from './localidades-list.component';
import { ErrorMessageComponent } from '../../error-message/error-message.component';

describe('LocalidadesListComponent', () => {
  let component: LocalidadesListComponent;
  let fixture: ComponentFixture<LocalidadesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalidadesListComponent, ErrorMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalidadesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
