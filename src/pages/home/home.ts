import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RapportenProvider } from '../../providers/rapporten/rapporten'
import { UsersProvider } from '../../providers/users/users'

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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public rapporten: gradeObject[] = [];
  public users = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public rapportenProvider: RapportenProvider,
              public usersProvider: UsersProvider ) {
    this.rapporten = this.rapportenProvider.getRapporten();
    console.log(this.rapporten);
    //console.log(this.rapporten[0].period[0].game);
    this.users = this.usersProvider.getUsers();
  }

  ionViewDidLoad() {

  }

  public openTodoAlert() {
    let addTodoAlert = this.alertCtrl.create({
      title: "Klusje",
      message: "Tik een nieuwe klus in",
      inputs: [
        {
          type: "text",
          name: "nameTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Voeg toe",
          handler: (inputData) => {
            let todoText;
            todoText = inputData.nameTodoInput;
            this.todos.push(todoText);
          }
        }

      ]
    });
    addTodoAlert.present();
  }

}
