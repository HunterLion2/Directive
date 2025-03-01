import { Component, Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RenklendirDirective } from './renklendir.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RenklendirDirective, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directive';
}
