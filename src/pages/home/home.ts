import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

interface Turns {
  createAt: Date;
  nameClient: string;
  order: string;
  status: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemsCollection: AngularFirestoreCollection<Turns>; //Firestore collection
  items: Observable<Turns[]>; // read collection

  constructor(
    public navCtrl: NavController, 
    private afs: AngularFirestore) {

  }

  ionViewWillEnter() {
    this.itemsCollection = this.afs.collection('turns'); //ref()
    this.items = this.itemsCollection.valueChanges()
  }
}
