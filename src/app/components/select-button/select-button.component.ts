import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss'],
})
export class SelectButtonComponent implements OnInit {
  @Input() label = '';
  @Input() options: string[] = [];

  @Input() selected?: string;
  @Output() selectedChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelectedChange(value: string): void {
    this.selectedChange.emit(value);
  }
}
