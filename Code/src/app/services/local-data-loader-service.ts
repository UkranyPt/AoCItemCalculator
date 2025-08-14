import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { GearItem } from '../model/model-beans';

@Injectable({
  providedIn: 'root'
})
export class LocalDataLoaderService{
  private http = inject(HttpClient);
  private refreshTimeout = 10 * 60 * 1000;
  timeoutWatcher = signal (this.getAPINextFetchTimestamp());

  loadFromFile(handle: any){ 
    this.http.get<GearItem[]>("assets/initialFile.json").subscribe(response => {
      handle(response);
    });
  }

  updateAPINextFetchTimestamp(): number {
    let now = Date.now() + this.refreshTimeout;
    localStorage.setItem('apiFetch', now.toString());
    this.timeoutWatcher.set(now);
    return now;
  }

  getAPINextFetchTimestamp(): number{
    let fetchTimestamp = localStorage.getItem('apiFetch');
    return Number(fetchTimestamp);
  }
  
}
