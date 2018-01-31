import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuComponentComponent } from './sidemenu-component.component';

describe('SidemenuComponentComponent', () => {
  let component: SidemenuComponentComponent;
  let fixture: ComponentFixture<SidemenuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemenuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
