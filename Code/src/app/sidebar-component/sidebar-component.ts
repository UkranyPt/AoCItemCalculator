import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../services/data-service';
import { APIDataLoaderService } from '../services/api-data-loader-service';
import { LocalDataLoaderService } from '../services/local-data-loader-service';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css'
})
export class SidebarComponent implements OnInit{
  private router = inject(Router);
  private loader = inject(APIDataLoaderService);
  private local = inject(LocalDataLoaderService)
  private data = inject(DataService);
  nextRefreshTimestamp = -1;

  ngOnInit(){
    setInterval(()=>{
      this.nextRefreshTimestamp = Math.trunc( (this.local.timeoutWatcher() - Date.now()) / 1000 );
    },1000);
  }

  goToList(){
    this.router.navigate(['/list']);
  }

  goToSearch(){
    this.router.navigate(['/search']);
  }

  goToBuiler(){
    this.router.navigate(['/build']);
  }

  reloadDatabase(){
    if(this.nextRefreshTimestamp > 0){
      return;
    }
    if(this.local.getAPINextFetchTimestamp() <= Date.now()){
      this.loader.refreshData();
      this.local.updateAPINextFetchTimestamp();
    }
  }

  debugData(){
    this.local.updateAPINextFetchTimestamp();
    let tmp = this.data.currentDatabase();
    let start = 0;
    let end = 200;
    for(; end <= tmp.length;){
      let tmp2 = tmp.slice(start,end);
      console.log(tmp2);
      console.log(JSON.stringify(tmp2));
      start=start+200;
      end=end+200;
    }
  }
}
