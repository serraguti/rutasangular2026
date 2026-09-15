import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Musicacomponent } from './musicacomponent';

describe('Musicacomponent', () => {
  let component: Musicacomponent;
  let fixture: ComponentFixture<Musicacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Musicacomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Musicacomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
