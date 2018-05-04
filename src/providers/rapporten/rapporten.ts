import { HttpClient, HttpParams } from '@angular/common/http';
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
  private url = 'http://localhost/2017-2018/blok4/ionic-am1x/test-639h/src/assets/test.json'
  
  public rapporten: gradeObject[] = []; 

  // Properties
  // public getRapporten(): gradeObject[] { 
  //   return this.rapporten;  
  // }

  public getRapporten() { 
    return this.http.get(this.url);
  }

  constructor(public http: HttpClient) {
    // let params = new HttpParams().set("id", "1");
    // this.http.get(this.url).subscribe((data: gradeObject[]) => { 
    //   console.log(data);
    //   console.log(data[0].period[0].game);
    //   this.rapporten = data;
    //   console.log(this.rapporten);
    //   data.forEach((element: gradeObject) => {
    //     this.rapporten.push(element);
    //   });
    // });
  }


  

  public addRapporten(vak) {
    this.rapporten.push(vak);
  }

}
