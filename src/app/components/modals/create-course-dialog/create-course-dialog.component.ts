import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { course } from 'src/app/interfaces/course';

@Component({
  selector: 'app-create-course-dialog',
  templateUrl: './create-course-dialog.component.html',
  styleUrls: ['./create-course-dialog.component.scss'],
})
export class CreateCourseDialogComponent implements OnInit {
  course: course = {
    name: '',
    description: '',
    category: '',
    subject: '',
    start: '',
    end: '',
    amount: 0
  };

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  close(): void {
    this.modal.dismiss();
  }

  create(event: Event): void {
    const allow = this.validation(event);
    allow ? this.modal.close(this.course) : null;
  }

  validation(event: Event): boolean {
    let allow: boolean = false;
    const forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        allow = true;
      }
      form.classList.add('was-validated');
    });
    return allow;
  }
}
