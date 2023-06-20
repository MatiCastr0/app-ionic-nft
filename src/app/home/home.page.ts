import { Component } from '@angular/core';
import { GetapiService } from '../services/getapi.service';
import { Nft } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  getdata: Nft[] = [];

  constructor(private getapiService: GetapiService) {}


  ngOnInit() {
    this.getapiService.getdata().subscribe((data: Nft[]) => {
      this.getdata = data;
    });
  }
}
