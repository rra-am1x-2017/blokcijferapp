import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RapportenProvider } from '../../providers/rapporten/rapporten';
import { UsersProvider } from '../../providers/users/users';

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
        this.rapporten = data;
        //console.log(this.rapporten);

      })
  }

  public openTodoAlert(rapport, data, cijfer, vak) {
    console.log(rapport);
    console.log(data);
    console.log(cijfer);
    console.log(vak);

    let addTodoAlert = this.alertCtrl.create({
      title: "Cijfer is: " + rapport.firstname,
      message: "Voer een nieuw cijfer in",
      inputs: [
        {
          type: "number",
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
            // this.todos.push(todoText);
            this.rapportenProvider.addRapporten(todoText, rapport, data, cijfer, vak);
            this.navCtrl.push(HomePage);
          }
        }

      ]
    });
    addTodoAlert.present();
  }

  private gradeCol(grade:any): string {
    if (typeof(grade) == 'number') {
      return grade >= 5.5 ? 'row grade-vol': 'row grade-onv';
    } 
    else if (typeof(grade) == 'string')
      if ((grade == 'V') || (grade == 'G')) {
        return 'row grade-vol';
      } else {
        return 'row grade-onv';        
      }
      return 'row';
  }

  private age(date){
    let now = new Date();
    let bday = new Date(date);
    
    if ( (now.getMonth() >= bday.getMonth()) && (now.getDate() >= bday.getDate())) {
      return new Date().getFullYear() - new Date(date).getFullYear() ;      
    } else {
      return (new Date().getFullYear() - new Date(date).getFullYear()) - 1;     
    }
  }

  private refresh() {
    this.navCtrl.push(HomePage);
  }
}
