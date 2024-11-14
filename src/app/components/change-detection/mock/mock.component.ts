import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mock',
  standalone: true,
  imports: [],
  templateUrl: './mock.component.html',
  styleUrl: './mock.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MockComponent {
  renderMock():boolean {
    console.log("Render Mock");
    return true;
  }
}
