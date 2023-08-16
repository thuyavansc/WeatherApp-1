import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { weatherData } from '../models/weather.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  // getWeatherData(cityName: string): Observable<weatherData> {
  //   return this.http.get<weatherData>(environment.weatherApiUrl, {
  //     headers: new HttpHeaders()
  //       .set(
  //         environment.XRapidAPIHostHeaderName,
  //         environment.XRapidAPIHostHeaderValue
  //       )
  //       .set(
  //         environment.XRapidAPIKeyHeaderName,
  //         environment.XRapidAPIKeyHeaderValue
  //       ),
  //     params: new HttpParams()
  //       .set('q', cityName)
  //       .set('units', 'metric')
  //       .set('mode', 'json'),
  //   });
  // }

  // getWeatherData(cityName: string): Observable<weatherData> {
  //   return this.http.get<weatherData>(environment.weatherApiUrl, {
  //     headers: new HttpHeaders().set(
  //       environment.XRapidAPIKeyHeaderName,
  //       environment.XRapidAPIKeyHeaderValue
  //     ),
  //     params: new HttpParams().set('q', cityName).set('units', 'metric'),
  //   });
  // }

  getWeatherData(cityName: string): Observable<weatherData> {
    const url = `${environment.apiUrl}?q=${cityName}&appid=${environment.apiKey}&units=metric`;
    return this.http.get<weatherData>(url);
  }
}
