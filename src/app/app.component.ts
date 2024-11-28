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
import { InputComponent } from '@components/change-detection/input/input.component';
import { DisplayComponent } from '@components/change-detection/display/display.component';
import { MockComponent } from '@components/change-detection/mock/mock.component';
import { EllipsisComponent } from '@components/utilities/ellipsis/ellipsis.component';
import { TooltipComponent } from '@components/utilities/tooltip/tooltip.component';
import { PrincipalComponent } from '@components/dialog-example/principal/principal.component';
import { FiltersComponent } from '@components/filters/filters.component';
import { DisablingComponent } from '@components/utilities/disabling/disabling.component';
import { SignalsComponent } from '@components/signals/signals.component';
import { ParentComponent } from '@components/communication/parent/parent.component';
import { ParentBidirectionalComponent } from '@components/bidirectional/parent-bidirectional/parent-bidirectional.component';
import { SelectorOpcionesComponent } from '@components/linked-signal/selector-opciones/selector-opciones.component';
import { PreservarOpcionComponent } from '@components/linked-signal/preservar-opcion/preservar-opcion.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from '@components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from '@components/reactive-form/reactive-form.component';
import { DynamicFormComponent } from '@components/dynamic-form/dynamic-form.component';

// RouterOutlet, LayoutComponent, BuiltInPipesComponent, CustomPipesComponent, HostListenerComponent, BuiltInDirectivesComponent, CustomDirectivesComponent, BindingsComponent, DeferrableViewsComponent, ContentProjectionComponent, InputComponent, DisplayComponent, MockComponent, EllipsisComponent, TooltipComponent, PrincipalComponent, FiltersComponent, DisablingComponent, SignalsComponent, ParentComponent, ParentBidirectionalComponent, SelectorOpcionesComponent, PreservarOpcionComponent, TemplateDrivenFormComponent, ReactiveFormComponent

@Component({
    selector: 'app-root',
    imports: [DynamicFormComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-toolkit';

  renderApp():boolean {
    console.log("Render App");
    return true;
  }
}
