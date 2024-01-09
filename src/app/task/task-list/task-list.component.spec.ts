import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompetitionComponent } from './task-list.component';

describe('ListCompetitionComponent', () => {
  let component: ListCompetitionComponent;
  let fixture: ComponentFixture<ListCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompetitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
