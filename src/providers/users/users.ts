import { HttpClient} from '@angular/common/http';
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
  // private url: string = 'http://localhost/2017-2018/blok4/ionic-am1x/test-639h/src/assets/users.php';
  private url: string = 'http://blokcijferapp.nl/users.php';
  // private url: string = 'http://rra-am1x-2017.stateu.org/assets/users.php';
  // private url = 'http://localhost:8100/assets/users.php'

  // Properties
  public getUsers() { return this.users; }

  

  constructor(public http: HttpClient) {
    this.http.get(this.url, {responseType: "json"}).subscribe((data: userObject[]) => {
      data.forEach((element: userObject) => {
         this.users.push(element);
      });
    });
  }

  


}
