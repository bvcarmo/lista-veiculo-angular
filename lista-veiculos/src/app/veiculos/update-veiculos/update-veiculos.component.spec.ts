import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVeiculosComponent } from './update-veiculos.component';

describe('UpdateVeiculosComponent', () => {
  let component: UpdateVeiculosComponent;
  let fixture: ComponentFixture<UpdateVeiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVeiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
