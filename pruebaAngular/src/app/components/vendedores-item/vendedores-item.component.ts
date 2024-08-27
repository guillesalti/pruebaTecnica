import { Component, Input } from '@angular/core';
import {  Vendedores } from '../../interfaces/localidades';
import { NgFor } from '@angular/common';
import { VendedoresService } from '../../core/service/vendedores.service';




@Component({
  selector: 'app-vendedores-item',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vendedores-item.component.html',
  styleUrl: './vendedores-item.component.css'
})
export class VendedoresItemComponent {
  @Input() vendedoresInfo!:Vendedores;
 
  constructor(private vendedoresService: VendedoresService) {}

  ngOnChanges() {
    console.log(this.vendedoresInfo);
  }

  deleteVendedor(id: number) {
    this.vendedoresService.deleteVendedor(id).subscribe({
      next:(data)=>{
        console.log('Vendedor eliminado:', data);
      }, error:(e)=>{  console.error('Error al eliminar el vendedor:', e); }
    })
  }
  

}
