import { Component, Injector, OnInit } from '@angular/core';
import { characterInterface } from 'src/app/interfaces';
import { BaseCharacterClassComponent } from '../Utils/base-character-class.component';

@Component({
  templateUrl: '../../templates/CharacterAndWeaponView.html',
  styleUrls: ['../../styles/CharacterAndWeaponView.scss']
})
export class Day2charsComponent extends BaseCharacterClassComponent implements OnInit {

  public MondstadtDomain = super.MondstadtDM()
  public LiyueDomain = super.LiyueDM()
  public InazumaDomain = super.InazumaDM()

  public Mondstadt = super.Characters;
  public Liyue = super.Characters;
  public Inazuma = super.Characters;

  constructor(
    injector:Injector
   ) {
     super(injector)
    }

  ngOnInit(): void {
    this._mainService.getDay2Characters(1).subscribe(data => this.Mondstadt = data);
    this._mainService.getDay2Characters(2).subscribe(data => this.Liyue = data);
    this._mainService.getDay2Characters(3).subscribe(data=> this.Inazuma = data);
  }
  onSelect(character:characterInterface)  {
    this.router.navigate(['Characters/day2chars',character.id]);
  }
}
