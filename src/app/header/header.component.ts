import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() feautreEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onNavigation(feature: string) {
    this.feautreEvent.emit(feature);
  }
}