import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Output() confirm = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onConfirm(): void {
    this.confirm.emit('confirm');
  }

}
