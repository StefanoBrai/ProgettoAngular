import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova3ServiceComponent } from './prova3-service.component';

describe('Prova3ServiceComponent', () => {
  let component: Prova3ServiceComponent;
  let fixture: ComponentFixture<Prova3ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prova3ServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prova3ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
