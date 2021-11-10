import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiWebappComponent } from './ci-webapp.component';

describe('CiWebappComponent', () => {
  let component: CiWebappComponent;
  let fixture: ComponentFixture<CiWebappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiWebappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
