import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiTableComponent } from './contatti-table.component';

describe('ContattiTableComponent', () => {
  let component: ContattiTableComponent;
  let fixture: ComponentFixture<ContattiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContattiTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContattiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
