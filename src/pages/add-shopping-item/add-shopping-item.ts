import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Item } from '../../model/item.model';
import { ShoppingListService } from '../../service/shopping-list/shopping-list.service';
import { ToastService } from '../../service/toast/toast.service';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item={
    name: "",
    quantity: 0,
    price: 0
  };
  constructor(private toast:ToastService,private shop: ShoppingListService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item){
    this.toast.show(`Add ${item.name} To Your Shopping List`);
    this.shop.addItem(item).then(ref=>{
      console.log(ref.key);
      this.navCtrl.setRoot('HomePage', {key: ref.key});
    });
  }

}
