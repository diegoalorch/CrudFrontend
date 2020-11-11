import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPersonaComponent } from './Components/Persona/listar-persona/listar-persona.component';
import { AppComponent } from './app.component';
import { AddPersonaComponent } from './Components/Persona/add-persona/add-persona.component';
import { UpdatePersonaComponent } from './Components/Persona/update-persona/update-persona.component';

const ROUTES: Routes = [
  { path: 'listar', component: ListarPersonaComponent},
  { path: "persona/add", component: AddPersonaComponent},
  { path: "editar/:id", component: UpdatePersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
