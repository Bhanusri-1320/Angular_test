import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartNewComponent } from './cart-new.component';

describe('CartNewComponent', () => {
  let component: CartNewComponent;
  let fixture: ComponentFixture<CartNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
