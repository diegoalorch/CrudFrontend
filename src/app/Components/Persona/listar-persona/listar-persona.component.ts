import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})

export class ListarPersonaComponent implements OnInit {

  personas:Persona[];
  constructor(private PersonaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  delPersona(num:number):void{
    
    Swal.fire({
      title: '¿Estas seguro de la acción?',
      text: "No podras revertir despues de aceptar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.listar()
        Swal.fire(
          'Eliminación Exitosa!',
          'El registro ha sido eliminado.',
          'success'
        )
      }
      this.PersonaService.deletePersona(num).subscribe(
        response=>{
    })
  }
  )    
}
listar():void{
  this.PersonaService.getPersonas().subscribe(
    (data)=>{
      this.personas = data['CUR_PERSONA'];
    }
  ) 
}
}