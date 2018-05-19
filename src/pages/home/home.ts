import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RapportenProvider } from '../../providers/rapporten/rapporten';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public rapporten = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public rapportenProvider: RapportenProvider )
  { 
  }

  ionViewDidLoad() {
    this.rapportenProvider.getRapporten()
      .subscribe((data: any[]) => {
        this.rapporten = data;
        console.log(this.rapporten[1]);
      });

      
  }
  
  public changeGradeAlert(rapport, data, grade, vak) {
    console.log(data);
    let addTodoAlert = this.alertCtrl.create({
      title: "<p>Student: " + rapport.firstname + "</p>" +
             "<p>Vak: " + vak + " </p>" +
             "<p>Periode: " + data.period + "</p>" +
             "<p>Cijfer: " + grade + "</p>",
      message: "Voer een nieuw cijfer in",
      inputs: [
        {
          type: "number",
          name: "nameNewGrade"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Voeg toe",
          handler: (inputData) => {
            let newGrade = inputData.nameNewGrade;
            this.rapportenProvider.addRapporten(newGrade, data.period, rapport.id, vak);
            this.navCtrl.push(HomePage);
          }
        }

      ],
      cssClass: 'cssCustom'
    });
    addTodoAlert.present();
  }  

  public gradeCol(grade: number | string): string {
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

  public calculateBlokGrade(data: any): string {
    let total : number = 0;
    let max : number = 0;
    for (let key of Object.keys(data.som)) { 
      max += data.som[key];
      if ( data[key] >= 5.5 ) 
      {
        total += data.som[key];
      }

    }
    // console.log((data.cesure["g"]/100) * max);
    // console.log((data.cesure["v"]/100) * max);
    // return total;
    if ( total >= (data.cesure["g"]/100) * max) {
      return "G";
    } else if ( total >= (data.cesure["v"]/100) * max) {
      return "V";
    } else {
      return "O";
    }
     
  }

  public age(date){
    let now = new Date();
    let bday = new Date(date);
    
    if ( (now.getMonth() >= bday.getMonth()) && (now.getDate() >= bday.getDate())) {
      return new Date().getFullYear() - new Date(date).getFullYear() ;      
    } else {
      return (new Date().getFullYear() - new Date(date).getFullYear()) - 1;     
    }
  }

  // Voor gebruik buiten de class anders never used melding
  public refresh() {
    this.navCtrl.push(HomePage);
  }
}
