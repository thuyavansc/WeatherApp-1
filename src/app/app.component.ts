import { weatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private WeatherService: WeatherService) {}

  weatherData?: weatherData;
  cityName: string = 'London';

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  private getWeatherData(cityName: string) {
    this.WeatherService.getWeatherData(cityName).subscribe({
      next: (Response) => {
        this.weatherData = Response;
        console.log(Response);
      },
    });
  }
}
