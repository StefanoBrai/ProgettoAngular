import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova2CardComponent } from './prova2-card.component';

describe('Prova2CardComponent', () => {
  let component: Prova2CardComponent;
  let fixture: ComponentFixture<Prova2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prova2CardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prova2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
