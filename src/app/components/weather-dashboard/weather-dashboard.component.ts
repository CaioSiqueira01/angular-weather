import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent {
  @Input() weatherData: any;

  getCurrentDate(): string {
    const date = new Date();
    return (
      date.getDate() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getFullYear()
    );
  }

  getCurrentTime(): string {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return hours + ':' + minutes;
  }

  kelvinToCelsius(tempInKelvin: number): number {
    return tempInKelvin - 273.15;
  }

}