import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  @Input() text:string;
  @Output() btnClick = new EventEmitter();

  constructor () {
    this.color = "Red";
    this.text = "Click";
  }
  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
