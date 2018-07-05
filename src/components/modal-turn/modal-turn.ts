import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Turn } from '../../models/Turn';

/**
 * Generated class for the ModalTurnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-turn',
  templateUrl: 'modal-turn.html'
})
export class ModalTurnComponent {
  turn: Turn;
  text: string;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.turn = params.get('turn');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
