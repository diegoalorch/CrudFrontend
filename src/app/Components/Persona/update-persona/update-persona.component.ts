import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-rol',
  templateUrl: './update-persona.component.html',
  styleUrls: ['./update-persona.component.css']
})
export class UpdatePersonaComponent implements OnInit {
  personas: any;  
  persona:Persona=new Persona();
  
  constructor(private personaService:PersonaService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPersona();
  }
  cargarPersona():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.personaService.getPersona(id).subscribe(
          (data)=>{
          this.persona=data['CUR_PERSONA'] 
          this.persona.IDPERSONA=id;
        })
      }
    })
  }
  modificarPersona():void{
    this.personaService.updatePersona(this.persona).subscribe(
      response=>{
        Swal.fire({
          title: '¿Estas seguro de la Acción?',
          text: "No podras revertir despues de aceptar!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listar'])
            Swal.fire(
              'Actualización Exitosa!',
              'El registro se ha Modificado.',
              'success'
            )
          }
        })    
    })
  }
  }
  