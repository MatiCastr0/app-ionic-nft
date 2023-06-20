import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../services/getapi.service';
import { Nft } from '../interfaces/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit
{
  getdata: Nft[] = [];

  constructor(private _services: GetapiService){}


  ngOnInit() {
    this._services.getdata().subscribe((data) => {
      this.getdata = data;
      console.log(this.getdata);
    });
  }
}
