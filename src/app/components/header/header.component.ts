import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() searchCity = new EventEmitter<string>();
  public icon: string = 'bx bxs-moon';
  city: string = '';

  constructor() {}

  toogle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.icon = 'bx bxs-sun';
    } else {
      this.icon = 'bx bxs-moon';
    }
  }

  onSearch() {
    this.searchCity.emit(this.city);
  }
}