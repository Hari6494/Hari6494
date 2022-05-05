import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NihaUsersComponent } from './niha-users.component';

describe('NihaUsersComponent', () => {
  let component: NihaUsersComponent;
  let fixture: ComponentFixture<NihaUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NihaUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NihaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
