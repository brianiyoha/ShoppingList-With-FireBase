import { Component } from '@angular/core';
import { NavController, IonicPage,NavParams } from 'ionic-angular';
import { Item } from '../../model/item.model';
import { Observable } from 'rxjs/Observable';
import { ShoppingListService } from '../../service/shopping-list/shopping-list.service';
import { ToastService } from '../../service/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;
  constructor(private toast: ToastService,private shop:ShoppingListService,  public navCtrl: NavController, private navParam: NavParams ) {
    this.shoppingList$ = this.shop
    .getShoppingList()
    .snapshotChanges()
    .map(changes=>{
      return changes.map(c=>({
        key: c.payload.key,...c.payload.val()
      }))
    })
  }

  removeItem(item: Item){
    this.shop.removeItem(item)
    .then(()=>{
      this.toast.show(`${item.name} Deleted!`);
    })
  }
}
