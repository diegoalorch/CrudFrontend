import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona, PersonaAdd } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  personaModel:PersonaAdd = new PersonaAdd();
  constructor(private personaService:PersonaService, private router: Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {}

    public create():void{       
      this.personaService.addPersona(this.personaModel).subscribe(        
        response=>{
          
        Swal.fire('Nuevo Persona', `Persona ${this.personaModel.nombre,
                                              this.personaModel.apellidos,
                                              this.personaModel.dni,
                                              this.personaModel.fec_nacimiento,
                                              this.personaModel.celular,
                                              this.personaModel.correo,
                                              this.personaModel.usuario,
                                              this.personaModel.clave,
                                              this.personaModel.idestado_civil} 
                                              creado con exito`,"success")
        this.router.navigate(['/listar'])
      })
  }
}