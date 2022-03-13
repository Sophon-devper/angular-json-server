import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestService } from 'src/app/services/request.service';
import { CreateCourseDialogComponent } from '../modals/create-course-dialog/create-course-dialog.component';
import { ConfirmationDialogComponent } from '../modals/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  course: any = [];

  constructor(private service: RequestService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.service.getCourse().subscribe((exists) => {
      this.course = exists;
      console.log(this.course)
    });
  }

  create(): void {
    this.modal
      .open(CreateCourseDialogComponent)
      .result.then((newCourse) => {
        this.service.createCourse(newCourse).subscribe((res) => {
          this.loadData();
        });
      })
      .catch((error) => {});
  }

  delete(course: any): void {
    const confirmModal = this.modal.open(ConfirmationDialogComponent);
    confirmModal.componentInstance.message = `Are you sure to delete "${course.name}" course?`;
    confirmModal.result
      .then((result) => {
        if (result.confirm) {
          this.service.deleteCourse(course.id).subscribe((res) => {
            this.loadData();
          });
        }
      })
      .catch((error) => {});
  }
}
