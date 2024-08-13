import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuartoComponenteComponent } from './quarto-componente/quarto-componente.component';
import { QuintoComponenteComponent } from "./quinto-componente/quinto-componente.component";
import { SextoComponenteComponent } from "./sexto-componente/sexto-componente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuartoComponenteComponent, QuintoComponenteComponent, SextoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terceiro-projeto';
}
