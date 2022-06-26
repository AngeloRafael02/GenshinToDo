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
import { Day1CharacterDetailsComponent } from './components/day1-character-details/day1-character-details.component';
import { Day2CharacterDetailsComponent } from './components/day2-character-details/day2-character-details.component';
import { Day3CharacterDetailsComponent } from './components/day3-character-details/day3-character-details.component';
import { Day1WeaponDetailsComponent } from './components/day1-weapon-details/day1-weapon-details.component';
import { Day2WeaponDetailsComponent } from './components/day2-weapon-details/day2-weapon-details.component';
import { Day3WeaponDetailsComponent } from './components/day3-weapon-details/day3-weapon-details.component';

function DefaultChildRoute():string{
  const CurrentDate = new Date().getDay();
  if (CurrentDate == 0){
    return 'Characters/allchars'
  } else if(CurrentDate == 1 || CurrentDate == 4 ){
    return 'Characters/day1chars'
  } else if(CurrentDate == 2 || CurrentDate == 5 ){
    return 'Characters/day2chars'
  } else if(CurrentDate == 3 || CurrentDate == 6 ){
    return 'Characters/day3chars'
  } else { return '**' }
}

const routes: Routes = [
  {path:'', redirectTo:DefaultChildRoute(), pathMatch:'full'}, //default Route + child route
  
  {path:"Characters", component:CharacterViewComponent,
    children:[{path:"allchars", component:AllcharsComponent },
              {path:"day1chars", component:Day1charsComponent,},
              {path:"day2chars", component:Day2charsComponent},
              {path:"day3chars", component:Day3charsComponent}]
  },
  {path:"Characters/allchars/:id", component:CharacterDetailsComponent},
  {path:"Characters/day1chars/:id", component:Day1CharacterDetailsComponent},
  {path:"Characters/day2chars/:id", component:Day2CharacterDetailsComponent},
  {path:"Characters/day3chars/:id", component:Day3CharacterDetailsComponent},

  {path:"Weapons", component:WeaponViewComponent,
    children:[{path:"allweapons", component:AllWeaponsComponent},
              {path:"day1weapons", component:Day1weaponsComponent},
              {path:"day2weapons", component:Day2weaponsComponent},
              {path:"day3weapons", component:Day3weaponsComponent}]
  },
  {path:"Weapons/allweapons/:id", component:WeaponDetailsComponent},
  {path:"Weapons/day1weapons/:id", component:Day1WeaponDetailsComponent},
  {path:"Weapons/day2weapons/:id", component:Day2WeaponDetailsComponent},
  {path:"Weapons/day3weapons/:id", component:Day3WeaponDetailsComponent},

  {path:"**", component:NotFoundComponent} //Wildcard Route
];

@NgModule({
  imports: [
    CommonModule
    ,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ //Stored all components in an array for export in app.module.ts
  CharacterViewComponent,
  WeaponViewComponent, 
  WeaponDetailsComponent,
  NotFoundComponent,
  //CHARACTER CHILD COMPONENTS
  AllcharsComponent,Day1charsComponent,Day2charsComponent,Day3charsComponent,
  //CHARACTER DETAIL COMPONENTS
  Day1CharacterDetailsComponent,Day2CharacterDetailsComponent,Day3CharacterDetailsComponent,
  //WEAPONS CHILD COMPONENTS
  AllWeaponsComponent,Day1weaponsComponent,Day2weaponsComponent,Day3weaponsComponent,
  //CHARACTER DETAIL COMPONENTS
  CharacterDetailsComponent,Day1WeaponDetailsComponent,Day2WeaponDetailsComponent,Day3WeaponDetailsComponent,
  ];
