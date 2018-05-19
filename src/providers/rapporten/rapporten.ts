import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RapportenProvider {
  private urlUpdate = 'http://blokcijferapp.nl/update.php'
  private url = 'http://blokcijferapp.nl/grades.php'
  // private url = 'http://rra-am1x-2017.stateu.org/assets/grades.php'
  
  
  public getRapporten() {    
    return this.http.get(this.url, {responseType: "json"});   
  }

  constructor(public http: HttpClient) {
  }  

  public addRapporten(newGrade, period, id, vak) {

    let params = new HttpParams();
    params = params.set('newGrade', newGrade);
    params = params.set('period', period);
    params = params.set('id', id);
    params = params.set('vak', vak);
    console.log(params);

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');

    this.http.post(this.urlUpdate,
                   params,
                   {headers: headers, responseType: "json"}).subscribe(data => {
    }); 

  }

}
