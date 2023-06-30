import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindTeacherPage } from './find-teacher.page';

describe('FindTeacherPage', () => {
  let component: FindTeacherPage;
  let fixture: ComponentFixture<FindTeacherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FindTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
