import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icon: string = 'bx bxs-moon';

  toogle(){
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.icon = 'bx bxs-sun'
    } else {
      this.icon = 'bx bxs-moon'
    }
  }
}
