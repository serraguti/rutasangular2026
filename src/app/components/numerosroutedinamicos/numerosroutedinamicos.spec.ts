import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Numerosroutedinamicos } from './numerosroutedinamicos';

describe('Numerosroutedinamicos', () => {
  let component: Numerosroutedinamicos;
  let fixture: ComponentFixture<Numerosroutedinamicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Numerosroutedinamicos],
    }).compileComponents();

    fixture = TestBed.createComponent(Numerosroutedinamicos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
