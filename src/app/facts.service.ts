import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
myData:any;
  constructor(private http:HttpClient) { }

  factDetails() {
    this.http.get('https://api.chucknorris.io/jokes/random')
    .subscribe( (data:any) => {
      this.myData=data;
      console.log(this.myData.value);
    });
    console.log(this.myData);
  }
}
