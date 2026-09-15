import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cinecomponent } from './cinecomponent';

describe('Cinecomponent', () => {
  let component: Cinecomponent;
  let fixture: ComponentFixture<Cinecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cinecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Cinecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
