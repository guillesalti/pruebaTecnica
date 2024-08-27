import { Component, OnInit } from '@angular/core';
import { VendedoresService } from '../../core/service/vendedores.service';
import { Observable, catchError, EMPTY } from 'rxjs';
import { Vendedores } from '../../interfaces/localidades';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { VendedoresItemComponent } from "../../components/vendedores-item/vendedores-item.component";
import { Router, RouterOutlet } from '@angular/router';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-vendedores-list',
  standalone: true,
  imports: [AsyncPipe, ErrorMessageComponent, NgIf, NgFor, VendedoresItemComponent, FormComponent, RouterOutlet],
  templateUrl: './vendedores-list.component.html',
  styleUrl: './vendedores-list.component.css'
})
export class VendedoresListComponent implements OnInit{

  public vendedoresList$!: Observable<Vendedores[]>;
  public errorMessage!: string;

  
  constructor(
    private service:VendedoresService,
    private router: Router
   ){ }


  ngOnInit(): void {
  this.vendedoresList$= this.service.getVendedores().pipe(catchError((error:string)=>{
    this.errorMessage= error;
    return EMPTY
  }));
   }

   trackByFn(index: number, item: Vendedores): number {
    return item.id;
  }
  navigateToForm() {
    this.router.navigate(['/form']);
  }

}
