import { Component, inject, signal, WritableSignal } from '@angular/core';
import { GearItem } from '../model/model-beans';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-search-item-component',
  imports: [],
  templateUrl: './search-item-component.html',
  styleUrl: './search-item-component.css'
})
export class SearchItemComponent {
  private data = inject(DataService);
  resultsData: WritableSignal<GearItem[]> = signal([]);

  buildImgUrl(displayIcon: string){
    let end = displayIcon.lastIndexOf('.');
    return "https://cdn.ashescodex.com" + displayIcon.substring(0,end).replace('/Game/','/') + '_64.webp';
  }

  fetchMatchingResults(event: any){
    let term = event.target?.value;
    if(term.length < 3){
      return;
    }
    setTimeout(()=>{
      if(term == event.target?.value){
        this.#executeFilterFunction(term);      
      }
    },1000)
  }

  #executeFilterFunction(term: string){
    let allResults = this.data.currentDatabase();
    let matchingResults = [];
    for(let item of allResults){
      //Maybe renable with a user checkbox
      /*if(item.description?.indexOf(term) > -1){
        matchingResults.push(item);
        continue;
      }*/
      if(item.itemName?.indexOf(term) > -1){
        matchingResults.push(item);
        continue;
      }
    }
    this.resultsData.set(matchingResults);
  }
}
