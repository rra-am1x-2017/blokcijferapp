import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RapportenProvider {
  // Fields
  private url = 'http://localhost/2017-2018/blok4/ionic-am1x/test-639h/src/assets/data.php'
  
  private rapporten: Array<object> = []; 

  // Properties
  public getRapporten() { return this.rapporten; }

  constructor(public http: HttpClient) {
    let params = new HttpParams().set('id', '5,5');
    this.http.get(this.url, { params: params}).subscribe(data => { 
      data["blok1"].forEach(element => {
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
