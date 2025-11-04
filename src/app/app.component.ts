import { Component } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import { jello, pulse, shakeX } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger("death", [
    transition(
      ":increment",
      useAnimation(shakeX, { params: { timing: 0.5 } })
    ),
  ]),
  trigger("attack", [
    transition(
      ":increment",[
        useAnimation(jello, { params: { timing: 0.5 } }),
        useAnimation(pulse, { params: { timing: 0.3,scale:4.5 } })
      ]
      
    ),
  ]),
  trigger("preAttack", [
    transition(
      ":increment",
      useAnimation(jello, { params: { timing: 0.5 } })
    ),
  ]),
]
})
export class AppComponent {
  slimeIsPresent = false;
  ng_death = 0;
  ng_attack = 0;
  ng_pattack = 0;

  css_hit = false;

  constructor() {
  }

  spawn() {
    this.slimeIsPresent = true;
    // TODO Animation angular avec forwards
    this.showSlime();
  }

  death(){
    this.slimeIsPresent = false;
    // TODO Animation angular avec forwards
    this.ng_death++;

    // TODO 2e animation angular en même temps
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeIn");
    element?.classList.add("fadeOut");
  }

  attack(){
    // TODO Jouer une animation et augmenter l'intensité du mouvement avec scale
    // TODO Jouer une autre animation avant
    this.ng_attack++;
  }

  hit(){
    // TODO Utilisé Animista pour faire une animation différente avec css (wobble)
    this.css_hit = true;
    setTimeout(() => {
      this.css_hit = false;
    }, 1000);
  }

  showSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeOut");
    element?.classList.add("fadeIn");
}
}
