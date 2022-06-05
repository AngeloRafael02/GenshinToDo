import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//COMPONENTS
import { CharacterViewComponent } from './character-view/character-view.component';
import { WeaponViewComponent } from './weapon-view/weapon-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { WeaponDetailsComponent } from './weapon-details/weapon-details.component';
//Child Route Components
import { AllcharsComponent } from './allchars/allchars.component';
import { Day1charsComponent } from './day1chars/day1chars.component';
import { Day2charsComponent } from './day2chars/day2chars.component';
import { Day3charsComponent } from './day3chars/day3chars.component';

const routes: Routes = [
  {path:'', redirectTo:'/Characters', pathMatch:'full'}, //default Route
  {path:"Characters", component:CharacterViewComponent,
    children:[{path:"allChars", component:AllcharsComponent },
              {path:"day1chars", component:Day1charsComponent},
              {path:"day2chars", component:Day2charsComponent},
              {path:"day3chars", component:Day3charsComponent}]
  },
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
  AllcharsComponent,Day1charsComponent,Day2charsComponent,Day3charsComponent,
  CharacterDetailsComponent,
  WeaponViewComponent, 
  WeaponDetailsComponent,
  NotFoundComponent
  
];
