import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
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
