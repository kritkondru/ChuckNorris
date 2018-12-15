import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import {FactsService} from '../facts.service';
@Component({
  selector: 'app-facts',
  templateUrl: './facts.page.html',
  styleUrls: ['./facts.page.scss'],
})
export class FactsPage implements OnInit {
value:any;
factdata:any;
  constructor(private modalCtrl:ModalController,public fservice:FactsService) { }


  ngOnInit() {
    this.fservice.factDetails();
  }
  doRefresh(event) {
    this.fservice.factDetails();

    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
}
