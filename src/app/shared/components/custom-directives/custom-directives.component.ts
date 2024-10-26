import { Component } from '@angular/core';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [ImgBrokenDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.scss'
})
export class CustomDirectivesComponent {

}
