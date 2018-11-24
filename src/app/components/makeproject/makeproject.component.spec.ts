import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeprojectComponent } from './makeproject.component';

describe('MakeprojectComponent', () => {
  let component: MakeprojectComponent;
  let fixture: ComponentFixture<MakeprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
