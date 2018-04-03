import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandfatherComponent } from './grandfather.component';

describe('GrandfatherComponent', () => {
  let component: GrandfatherComponent;
  let fixture: ComponentFixture<GrandfatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandfatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandfatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
