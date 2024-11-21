import { Component } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'app-tooltip',
    imports: [MatTooltipModule],
    templateUrl: './tooltip.component.html',
    styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  dynamicContent = 'Este contenido puede cambiar dinámicamente';
}
