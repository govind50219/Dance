import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title="DANCE"

  blog="Do you think you have the rhythm and energy to set the dance floor afire? Do you think your moves will leave our mouths open? Then we give you the largest and most competitive stages of all. Prove your mettle in the many diverse competitions we have to bring out the best in you, ranging from group events to solo face-offs to street dance. With a stellar panel of judges it's bound to be a trial by fire. Come abound with energy to fight it out for the most coveted trophy?"
  constructor() { }

  ngOnInit(): void {
  }

}
