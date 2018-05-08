import { HttpClient, HttpParams, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface gradeObject {  
  "firstname": string,
  "infix": string,
  "lastname": string,
  "period": test[],
  "user_id": number,
  "photo": string
}

interface test {
  game: number,
  web: number
}


@Injectable()
export class RapportenProvider {
  // Fields
  // private url = 'http://localhost/2017-2018/blok4/ionic-am1x/test-639h/src/assets/grades.php'
  // private urlUpdate = 'http://localhost/2017-2018/blok4/ionic-am1x/test-639h/src/assets/update.php'
  private urlUpdate = 'http://blokcijferapp.nl/update.php'
  private url = 'http://blokcijferapp.nl/grades.php'
  // private url = 'http://rra-am1x-2017.stateu.org/assets/grades.php'
  
  public rapporten: gradeObject[] = []; 

  // Properties
  // public getRapporten(): gradeObject[] { 
  //   return this.rapporten;  
  // }

  public getRapporten() {    
    return this.http.get(this.url, {responseType: "json"});   
  }

  constructor(public http: HttpClient, public httptest: HttpClient) {
  }


  

  public addRapporten(todoText, rapport, data, cijfer, vak) {
    let params = new HttpParams();
    params = params.set('todoText', todoText);
    params = params.set('rapport', rapport);
    params = params.set('data', data);
    params = params.set('cijfer', cijfer);
    params = params.set('vak', vak);

    // let params = new FormData();
    // params.append('todoText', 'arjan');
    // // params.set('rapport', rapport);
    // // params.set('data', data);
    // // params.set('cijfer', cijfer);
    // console.log(params);

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type',  'application/x-www-form-urlencoded; charset=UTF-8');

    this.http.post(this.urlUpdate,
                   params,
                   {headers: headers, responseType: "json"}).subscribe(data => {
      console.log(data);
    }); 

  }

}
