import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalidadItemComponent } from '../../components/localidad-item/localidad-item.component';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { LocalidadesService } from '../../core/service/localidades.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Localidades } from '../../interfaces/localidades';

@Component({
  selector: 'app-localidades-list',
  standalone: true,
  imports: [AsyncPipe, LocalidadItemComponent, ErrorMessageComponent, NgIf, NgFor],
  templateUrl: './localidades-list.component.html',
  styleUrl: './localidades-list.component.css'
})

export class LocalidadesListComponent implements OnInit{
  public localidadesList$!: Observable<Localidades[]>;
  public errorMessage!: string;

  constructor(private service:LocalidadesService){ }

   ngOnInit(): void {
  this.localidadesList$= this.service.getLocalidades().pipe(catchError((error:string)=>{
    this.errorMessage= error;
    return EMPTY
  }));
   }

   trackByFn(index: number, item: Localidades): number {
    return item.id;
  }


   
}
