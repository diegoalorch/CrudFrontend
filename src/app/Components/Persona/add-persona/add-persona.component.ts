import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddPersonaComponent implements OnInit {

  personaModel:Persona = new Persona();
  constructor(private personaService:PersonaService, private router: Router, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {}

    public create():void{       
      this.personaService.addPersona(this.personaModel).subscribe(        
        response=>{
          this.router.navigate(['/listar'])
        Swal.fire('Nuevo Denominacion', `Denominacion ${this.personaModel.NOMBRE, 
                                                        this.personaModel.APELLIDOS,
                                                        this.personaModel.DNI,
                                                        this.personaModel.FEC_NACIMIENTO,
                                                        this.personaModel.CELULAR,
                                                        this.personaModel.CORREO,
                                                        this.personaModel.USUARIO,
                                                        this.personaModel.CLAVE,
                                                        this.personaModel.IDESTADO_CIVIL} 
                                                        creado con exito`,"success")      
      })
  }
}