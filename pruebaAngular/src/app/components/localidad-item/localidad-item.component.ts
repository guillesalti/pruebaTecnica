import { Component, Input } from '@angular/core';
import { Localidades } from '../../interfaces/localidades';

@Component({
  selector: 'app-localidad-item',
  standalone: true,
  imports: [],
  templateUrl: './localidad-item.component.html',
  styleUrl: './localidad-item.component.css'
})
export class LocalidadItemComponent {
  @Input() localidadesInfo!: Localidades;
}
