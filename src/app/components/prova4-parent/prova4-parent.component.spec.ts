import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova4ParentComponent } from './prova4-parent.component';

describe('Prova4ParentComponent', () => {
  let component: Prova4ParentComponent;
  let fixture: ComponentFixture<Prova4ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Prova4ParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prova4ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
