import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }
  
  //Desabilitar menu ao entrar na pagina
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  //Habilitar menu ao entrar na pagina  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    this.navCtrl.setRoot('CategoriasPage');
  }

}
