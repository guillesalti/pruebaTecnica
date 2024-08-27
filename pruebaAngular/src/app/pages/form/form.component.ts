import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Localidades } from '../../interfaces/localidades';
import { LocalidadesService } from '../../core/service/localidades.service';
import { VendedoresService } from '../../core/service/vendedores.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  vendedorForm: FormGroup;
  localidades: Localidades[]=[];


  constructor(
    private localidadesService: LocalidadesService,
    private vendedoresService: VendedoresService,
    private builer: FormBuilder
  ){
    
  
  this.vendedorForm = this.builer.group({
    usuarioLogin: ['', Validators.required],
    nombre: ['', Validators.required],
    habilitado: [true, Validators.required],
    fechaNacimiento: ['', [Validators.required, this.validacionEdad]],
    observaciones: [''],
    localidad: ['', Validators.required]
  }); 
  }
 
  ngOnInit(): void {
    this.localidadesService.getLocalidades().subscribe(data => {
      this.localidades = data;
    });
  }

  validacionEdad(control: FormGroup): { [key: string]: boolean } | null {
    const value = control.value;
    if(!value) return null;

    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18 && age <= 65 ? null : { ageInvalid: true };
  }

 

  postVendedor() {
    console.log(this.vendedorForm.value);
    
    this.vendedoresService.postVendedor(this.vendedorForm.value).subscribe({
      next: (data)=> {
        console.log(data);
      }, error: (e)=>{console.log(e);}
    });
  }

  cancel(): void {
    this.vendedorForm.reset();  
  }
  
}
