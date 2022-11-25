import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPrensamentoComponent } from './listar-prensamento.component';

describe('ListarPrensamentoComponent', () => {
  let component: ListarPrensamentoComponent;
  let fixture: ComponentFixture<ListarPrensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPrensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPrensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
