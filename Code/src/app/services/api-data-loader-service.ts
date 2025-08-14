import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APIResponse } from '../model/model-beans';
import { DataprocessorService } from './dataprocessor-service';
import { DataService } from './data-service';

@Injectable({
  providedIn: 'root'
})
export class APIDataLoaderService {
  initialMaxPageSize  = 1000;
  private http = inject(HttpClient);
  private data = inject(DataService);
  private processor = inject(DataprocessorService);

  refreshData(){
    this.#loadDataFromAPI();
  }

  #loadDataFromAPI(){
    this.http.get<APIResponse>("https://api.ashescodex.com/items?per_page=" + this.initialMaxPageSize).subscribe(response => {
      const pageCount = response.meta.total;
      const pageSize = response.meta.per_page;
      let expectedPageCount = pageCount / pageSize;
      expectedPageCount = (expectedPageCount > Math.trunc(expectedPageCount))? Math.trunc(expectedPageCount) + 1 : expectedPageCount;

      let listItens = this.processor.extractItemData(response)
      this.data.setToDatabase(listItens)
      
      for( let i=2;i<=expectedPageCount;i++){
        this.http.get<APIResponse>("https://api.ashescodex.com/items?per_page=" + this.initialMaxPageSize + "&page=" + i).subscribe(response => {
          let listItens = this.processor.extractItemData(response);
          this.data.addToDatabase(listItens)
        });
      }
    });
  }
}