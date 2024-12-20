import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public router: Router = inject(Router);
  
  public navigateTo(ruta: string): void {
    this.router.navigate([ruta]);
  }
}

