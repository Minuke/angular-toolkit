import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { BuiltInPipesComponent } from '@shared/components/built-in-pipes/built-in-pipes.component';
import { CustomPipesComponent } from '@shared/components/custom-pipes/custom-pipes.component';
import { HostListenerComponent } from '@shared/components/host-listener/host-listener.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, BuiltInPipesComponent, CustomPipesComponent, HostListenerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-toolkit';
}
