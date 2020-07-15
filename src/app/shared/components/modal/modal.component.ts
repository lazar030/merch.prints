import { Component, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'my-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  submit(chat) {
    this.modalRef.hide();
    chat.intercom.show();
  }
}
