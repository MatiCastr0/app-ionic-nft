import { Component, EventEmitter, Output } from '@angular/core';
import { GetapiService } from '../services/getapi.service';
import { Nft } from '../interfaces/interfaces';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchChange: EventEmitter<Nft[]> = new EventEmitter<Nft[]>();
  filteredData: Nft[] = [];
  allData: Nft[] = [];
  isSearchPerformed = false;
  noResultsFound = false;
  constructor(private getapiService: GetapiService, private router: Router) {}
  ngOnInit() {
    this.getapiService.getdata().subscribe((data: Nft[]) => {
      this.allData = data;
    });
  }
  handleInput(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredData = this.allData.filter((nft) =>
      nft.name.toLowerCase().includes(searchTerm)
    );
    this.searchChange.emit(this.filteredData);
    this.isSearchPerformed = true;
    this.noResultsFound = this.filteredData.length === 0;
    if (!searchTerm) {
      this.router.navigateByUrl('/');
    }
  }
  
}
