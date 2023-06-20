import { Component, EventEmitter, Output } from '@angular/core';
import { GetapiService } from '../services/getapi.service';
import { Nft } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: 'filter.page.html',
  styleUrls: ['filter.page.scss'],
})
export class FilterPage {
  @Output() searchChange: EventEmitter<Nft[]> = new EventEmitter<Nft[]>();
  filteredData: Nft[] = [];
  allData: Nft[] = [];
  isSearchPerformed = false;
  noResultsFound = false;
  currentPlatform: any;
  platforms: any[] = [];

  constructor(private getapiService: GetapiService, private router: Router) {}

  ngOnInit() {
    this.getapiService.getdata().subscribe((data: Nft[]) => {
      this.allData = data;
      this.platforms = this.getDistinctPlatforms(data); 
    });
  }

  compareWith(option1: any, option2: any) {
    return option1 && option2 ? option1.asset_platform_id === option2.asset_platform_id : option1 === option2;
  }

  handleChange(event: any) {
    const selectedPlatform = event.detail.value;
    this.filteredData = this.allData.filter((nft) =>
      nft.asset_platform_id === selectedPlatform.asset_platform_id
    );
    this.searchChange.emit(this.filteredData);
    this.isSearchPerformed = true;
    this.noResultsFound = this.filteredData.length === 0;
  }

  getDistinctPlatforms(data: Nft[]) {
    const uniquePlatforms = new Set<string>();
    data.forEach((nft) => {
      uniquePlatforms.add(nft.asset_platform_id);
    });
    return Array.from(uniquePlatforms).map((platform) => ({ asset_platform_id: platform }));
  }
}
