import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface gradeObject {
  "id": number,
  "user_id": number,
  "period": number,
  "web": number,
  "game": number,
  "slb": number,
  "ned": number,
  "eng": number,
  "rek": number,
  "proj": number,
  "data": number,
  "blok": string
}


@Injectable()
export class RapportenProvider {
  // Fields
  private url = 'http://localhost/2017-2018/blok4/ionic-am1x/test-639h/src/assets/grades.php'
  
  private rapporten: gradeObject[] = []; 

  // Properties
  public getRapporten() { return this.rapporten; }

  constructor(public http: HttpClient) {
    let params = new HttpParams().set("id", "1");
    this.http.get(this.url, { params: params}).subscribe((data: gradeObject[]) => { 
      console.log(data);
      data.forEach((element: gradeObject) => {
      console.log(element);
      this.rapporten.push(element);       
      }); 
    });
  }

  ionViewDidLoad() {
    
  }


  

  public addRapporten(vak) {
    this.rapporten.push(vak);
  }

}
