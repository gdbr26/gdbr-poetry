import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadsvgComponent } from './readsvg.component';

describe('ReadsvgComponent', () => {
  let component: ReadsvgComponent;
  let fixture: ComponentFixture<ReadsvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadsvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
