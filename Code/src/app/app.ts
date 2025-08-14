import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar-component/sidebar-component';
import { DataService } from './services/data-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AoCItemCalculator');
  private data = inject(DataService);

  ngOnInit() {
    this.data.initializeData();
  }
}
