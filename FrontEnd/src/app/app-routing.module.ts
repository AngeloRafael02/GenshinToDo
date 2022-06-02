import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//COMPONENTS
import { CharacterViewComponent } from './character-view/character-view.component';
import { WeaponViewComponent } from './weapon-view/weapon-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { WeaponDetailsComponent } from './weapon-details/weapon-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/Characters', pathMatch:'full'}, //default Route
  {path:"Characters", component:CharacterViewComponent},
    {path:"Characters/:id", component:CharacterDetailsComponent},
  {path:"Weapons", component:WeaponViewComponent},
    {path:"Weapons/:id", component:WeaponDetailsComponent},
  {path:"**", component:NotFoundComponent} //Wildcard Route
];

@NgModule({
  imports: [
    CommonModule
    ,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ //Stored all components in an array for export in app.module.ts
  CharacterViewComponent,
  CharacterDetailsComponent,
  WeaponViewComponent, 
  WeaponDetailsComponent,
  NotFoundComponent];
