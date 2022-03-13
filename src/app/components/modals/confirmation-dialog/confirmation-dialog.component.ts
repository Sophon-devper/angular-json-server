import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  @Input() message: any;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  close(): void {
    this.modal.dismiss();
  }

  no(): void {
    this.modal.close({ confirm: false });
  }

  confirm(): void {
    this.modal.close({ confirm: true });
  }
}
