import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactarClienteComponent } from './contactar-cliente.component';

describe('ContactarClienteComponent', () => {
  let component: ContactarClienteComponent;
  let fixture: ComponentFixture<ContactarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
