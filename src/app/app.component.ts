import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weatherData: any = null;

  constructor(private weatherService: WeatherService) {}

  updateWeatherData(data: any) {
    this.weatherData = data;
  }
  
  searchWeather(city: string) {
    this.weatherService.getWeather(city)
      .subscribe(data => {
        this.updateWeatherData(data);
      });
  }
}