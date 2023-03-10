import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudesHabilidadesComponent } from './aptitudes-habilidades.component';

describe('AptitudesHabilidadesComponent', () => {
  let component: AptitudesHabilidadesComponent;
  let fixture: ComponentFixture<AptitudesHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudesHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptitudesHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
