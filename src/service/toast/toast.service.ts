import { ToastController } from "ionic-angular";
import { Injectable } from "@angular/core";

@Injectable()
export class ToastService{
    constructor(private toastCtrl:ToastController ){}

    show(message:string, duration: number=3000){
       return this.toastCtrl.create({
            message:message,
            duration:duration

        }).present();
    }
}