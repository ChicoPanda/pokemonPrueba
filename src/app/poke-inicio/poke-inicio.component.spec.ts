import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeInicioComponent } from './poke-inicio.component';

describe('PokeInicioComponent', () => {
  let component: PokeInicioComponent;
  let fixture: ComponentFixture<PokeInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
