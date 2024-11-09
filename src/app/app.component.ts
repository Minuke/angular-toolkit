import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingsComponent } from './components/bindings/bindings.component';
import { BuiltInDirectivesComponent } from './components/built-in-directives/built-in-directives.component';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { HostListenerComponent } from './components/host-listener/host-listener.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DeferrableViewsComponent } from '@components/deferrable-views/deferrable-views.component';
import { ContentProjectionComponent } from '@components/content-projection/content-projection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, BuiltInPipesComponent, CustomPipesComponent, HostListenerComponent, BuiltInDirectivesComponent, CustomDirectivesComponent, BindingsComponent, DeferrableViewsComponent, ContentProjectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-toolkit';
}
