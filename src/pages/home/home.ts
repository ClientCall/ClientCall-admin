import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { ModalTurnComponent } from '../../components/modal-turn/modal-turn';
import { Turn } from '../../models/Turn';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemsCollection: AngularFirestoreCollection<Turn>; //Firestore collection
  items: Observable<Turn[]>; // read collection

  constructor(
    public navCtrl: NavController, 
    private afs: AngularFirestore,
    public modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.itemsCollection = this.afs.collection('turns'); //ref()
    this.items = this.itemsCollection.valueChanges();
    //this.insertData();
  }

  changeStatusOfTurn(turn: Turn) {
    const modal = this.modalCtrl.create(ModalTurnComponent, { turn: turn });
    modal.present();
  }

  private insertData(){
    this.itemsCollection.add({
      createAt: new Date(),
      nameClient: "Natali Gil",
      order: "#89751",
      status: "CREATED"
    })
    .then( (result) => {
        console.log("Document addded with id >>> ", result.id);
    })
    .catch( (error) => {
        console.error("Error adding document: ", error);
    });
  }
}
