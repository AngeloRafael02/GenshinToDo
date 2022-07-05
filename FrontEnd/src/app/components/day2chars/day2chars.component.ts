import { Component, Injector, OnInit } from '@angular/core';
import { characterInterface } from 'src/app/interfaces';
import { BaseCharacterClassComponent } from '../Utils/base-character-class.component';

@Component({
  templateUrl: '../../templates/characterView.html',
  styleUrls: ['../../styles/CharacterAndWeaponView.scss']
})
export class Day2charsComponent extends BaseCharacterClassComponent implements OnInit {

  public MondstadtCharacters = super.Characters;
  public LiyueCharacters = super.Characters;
  public InazumaCharacters = super.Characters;

  constructor(
    injector:Injector
   ) {
     super(injector)
    }

  ngOnInit(): void {
    this._mainService.getDay2Characters(1).subscribe(data => this.MondstadtCharacters = data);
    this._mainService.getDay2Characters(2).subscribe(data => this.LiyueCharacters = data);
    this._mainService.getDay2Characters(3).subscribe(data=> this.InazumaCharacters = data);
  }
  onSelect(character:characterInterface)  {
    this.router.navigate(['Characters/day2chars',character.id]);
  }
}
