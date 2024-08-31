import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova4ChildComponent } from './prova4-child.component';

describe('Prova4ChildComponent', () => {
  let component: Prova4ChildComponent;
  let fixture: ComponentFixture<Prova4ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prova4ChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prova4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
