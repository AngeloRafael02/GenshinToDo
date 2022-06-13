import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//COMPONENTS
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { WeaponViewComponent } from './components/weapon-view/weapon-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { WeaponDetailsComponent } from './components/weapon-details/weapon-details.component';
//Child Route Components
import { AllcharsComponent } from './components/allchars/allchars.component';
import { Day1charsComponent } from './components/day1chars/day1chars.component';
import { Day2charsComponent } from './components/day2chars/day2chars.component';
import { Day3charsComponent } from './components/day3chars/day3chars.component';
import { AllWeaponsComponent } from './components/allweapons/allweapons.component';
import { Day1weaponsComponent } from './components/day1weapons/day1weapons.component';
import { Day2weaponsComponent } from './components/day2weapons/day2weapons.component';
import { Day3weaponsComponent } from './components/day3weapons/day3weapons.component';

const routes: Routes = [
  {path:'', redirectTo:'/Characters/allchars', pathMatch:'full'}, //default Route + child route
  
  {path:"Characters", component:CharacterViewComponent,
    children:[{path:"allchars", component:AllcharsComponent },
              {path:"day1chars", component:Day1charsComponent},
              {path:"day2chars", component:Day2charsComponent},
              {path:"day3chars", component:Day3charsComponent}]
  },{path:"Characters/:id", component:CharacterDetailsComponent},

  {path:"Weapons", component:WeaponViewComponent,
    children:[{path:"allWeapons", component:AllWeaponsComponent},
              {path:"day1weapons", component:Day1weaponsComponent},
              {path:"day2weapons", component:Day2weaponsComponent},
              {path:"day3weapons", component:Day3weaponsComponent}]
  },{path:"Weapons/:id", component:WeaponDetailsComponent},

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
  //CHARACTER CHILD COMPONENTS
  AllcharsComponent,Day1charsComponent,Day2charsComponent,Day3charsComponent,
  //WEAPONS CHILD COMPONENTS
  AllWeaponsComponent,Day1weaponsComponent,Day2weaponsComponent,Day3weaponsComponent,
  CharacterDetailsComponent,
  WeaponViewComponent, 
  WeaponDetailsComponent,
  NotFoundComponent
  ];
