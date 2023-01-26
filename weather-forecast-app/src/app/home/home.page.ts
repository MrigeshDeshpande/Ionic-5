import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  weatherTemp;
  isLoading = false;
  error: any;
  todaydate=new Date();
  cityName; 
  weatherIcon;
  weatherDetails;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.isLoading = true;
    this.httpClient.get(`${API_URL}/weather?q=${"Mumbai"}&appid=${API_KEY}`)
    .subscribe(result => {
        this.isLoading = false;
        this.weatherTemp = result['main'];
        this.cityName=result['name'];
        this.weatherDetails=result['weather'][0]
        this.weatherIcon=`http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`
      
        console.log(this.weatherTemp);
        console.log(this.weatherDetails);
        
        
    },
    error => {
        this.isLoading = false;
        this.error = error;
        console.log(error);
    });
  }
}
