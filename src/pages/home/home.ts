import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RapportenProvider } from '../../providers/rapporten/rapporten'
import { UsersProvider } from '../../providers/users/users'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private todos = [];
  private rapporten = [];
  public users = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public rapportenProvider: RapportenProvider,
              public usersProvider: UsersProvider ) {
    this.rapporten = this.rapportenProvider.getRapporten();
    this.users = this.usersProvider.getUsers();
    console.log();
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
