import { Component, OnInit, Input } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() headerTxt;
  bars = faBars;
  close = faTimes;
  smallNavSelected = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSmallNavSelection() {
    this.smallNavSelected = !this.smallNavSelected;
  }
}
