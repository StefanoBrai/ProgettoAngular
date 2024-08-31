import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova5ObservableComponent } from './prova5-observable.component';

describe('Prova5ObservableComponent', () => {
  let component: Prova5ObservableComponent;
  let fixture: ComponentFixture<Prova5ObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prova5ObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prova5ObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
