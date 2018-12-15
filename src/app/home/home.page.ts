import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FactsPage } from '../facts/facts.page';
import { FactsService } from '../facts.service';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  fdata:any;

   constructor( private router: Router,public factservice:FactsService ,private modalCtr:ModalController){}
   ngOnInit(){
   }

    
  }