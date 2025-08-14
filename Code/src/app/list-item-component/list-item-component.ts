import { Component, inject } from '@angular/core';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-list-item-component',
  imports: [],
  templateUrl: './list-item-component.html',
  styleUrl: './list-item-component.css'
})
export class ListItemComponent {
  private service = inject(DataService);
  data = this.service.currentDatabase;

  buildImgUrl(displayIcon: string){
    let end = displayIcon.lastIndexOf('.');
    return "https://cdn.ashescodex.com" + displayIcon.substring(0,end).replace('/Game/','/') + '_64.webp';
  }

}
