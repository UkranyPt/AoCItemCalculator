import { Component, inject, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css'
})
export class SidebarComponent {
  private router = inject(Router);

  goToList(){
    this.router.navigate(['/list']);
  }

  goToSearch(){
    this.router.navigate(['/search']);
  }
}
