import { Component, OnInit,Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherDashboardComponent } from '../weather-dashboard/weather-dashboard.component';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent  {
  @Input() weatherData: any; 

  constructor(private weatherService: WeatherService) {}

  getWeatherData(city: string) {
    this.weatherService.getWeather(city).subscribe((data: any) => {
      this.weatherData = data; 
    });
  }

  kelvinToCelsius(tempInKelvin: number): number {
    return tempInKelvin - 273.15;
  }
}