import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { GearItem } from '../model/model-beans';

import { LocalDataLoaderService } from './local-data-loader-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentDatabase: WritableSignal<GearItem[]> = signal([]);
  private loader = inject(LocalDataLoaderService);
  
  initializeData(){
    if(this.currentDatabase().length > 0){
      console.log("Atempt to re-initialize local data. Check the code");
    }else{
      let cacheContent = this.#loadFromLocalCache();
      if(cacheContent === undefined || cacheContent.length == 0){
        this.loader.loadFromFile( (fileContent: GearItem[]) => { 
          this.#saveToLocalCache(fileContent);
          this.currentDatabase.set(fileContent);
        });
      }else{
        this.currentDatabase.set(cacheContent);
      }
      
    }
  }

  setToDatabase(itens: GearItem[]){
    this.currentDatabase.set(itens);
    this.#saveToLocalCache(itens);
  }

  addToDatabase(itens: GearItem[]){
    let cacheItens = this.currentDatabase();
    let newItemList = cacheItens.concat(itens);
    this.setToDatabase(newItemList);
  }

  #loadFromLocalCache() : GearItem[]{
    let json = localStorage['cache'];
    if(json === undefined || json.length == 0){
      json = "[]";
      localStorage.setItem('cache', json);
    }
    return JSON.parse(json);
  }

  #saveToLocalCache(content: GearItem[]){
    let json = JSON.stringify(content)
    localStorage.setItem('cache', json);
  }
  
}
