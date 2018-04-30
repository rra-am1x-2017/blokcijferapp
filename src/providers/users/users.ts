import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface userObject{
  firstname: string,
  infix: string,
  lastname: string,
  photo: string
}
/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  // Fields
  private users: userObject[] = [];
  private url: string = 'http://localhost/2017-2018/blok4/ionic-am1x/test-639h/src/assets/users.php';

  // Properties
  public getUsers() { return this.users; }

  

  constructor(public http: HttpClient) {
    this.http.get(this.url).subscribe((data: userObject[]) => {
      data.forEach((element: userObject) => {
         this.users.push(element);
      });
    });
  }


}
