import { NgModule } from '@angular/core';
import { ModalTurnComponent } from './modal-turn/modal-turn';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ModalTurnComponent],
	imports: [IonicModule],
	exports: [ModalTurnComponent],
	entryComponents:[
		ModalTurnComponent
	]
})
export class ComponentsModule {}
