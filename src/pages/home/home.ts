import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RapportenProvider } from '../../providers/rapporten/rapporten'
import { UsersProvider } from '../../providers/users/users'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public rapporten = [];
  public users = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public rapportenProvider: RapportenProvider,
              public usersProvider: UsersProvider ) {
  
    this.users = this.usersProvider.getUsers();
  }

  ionViewDidLoad() {
    this.rapportenProvider.getRapporten()
      .subscribe((data: any[]) => {
        //console.log(JSON.parse(data[0].period)[0].game);

        this.rapporten = data;
        console.log(this.rapporten);

      })
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
