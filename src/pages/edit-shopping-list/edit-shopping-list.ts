import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../model/item.model';
import { ShoppingListService } from '../../service/shopping-list/shopping-list.service';
import { ToastService } from '../../service/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-edit-shopping-list',
  templateUrl: 'edit-shopping-list.html',
})
export class EditShoppingListPage {

  item:Item;
  constructor(private toast:ToastService, private shop:ShoppingListService,public navCtrl: NavController, public navParams: NavParams) {
  this.item=this.navParams.get('item');
  }

  ionViewDidLoad() {
    
  }

  editItem(item:Item){
    this.shop.editItem(item).then(()=>{
      this.toast.show(`${item.name} Updated`);
      this.navCtrl.setRoot('HomePage');
    })
    console.log(item);
  }

}
