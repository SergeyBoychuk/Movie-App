import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class DataService {
   
   private API_KEY: string = environment.API_KEY;
   private API_URL: string = environment.API_URL;
   private query: string;
   private URL : string = this.API_URL + this.API_KEY + '&query=';
  //  private perPage : string = this.API_URL + this.API_KEY + '&q=';


  constructor(private http:Http) {
    
  }

  getImage(query){
    return this.http.get(this.URL + query)
      .map(res => res.json());
  }
 
  


  

}
