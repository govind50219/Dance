import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openNav() {
    document.getElementById("nav").style.left = "0vw";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
  }
  closeNav() {
    document.getElementById("nav").style.left = "-100vw";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
  }

  box=[
    {
      'route': 'home',
      'name': 'Dance'
    },
    {
      'route': 'estampie',
      'name': 'Estampie'
    },{
      'route': 'jitterburg',
      'name': 'Jitterburg'
    },{
      'route': 'nrityagana',
      'name': 'Nrityagana'
    },{
      'route': 'roots',
      'name': 'Roots'
    },{
      'route': 'tourdeforce',
      'name': 'Tour De Force'
    },{
      'route': 'contacts',
      'name': 'Contacts'
    }
  ];

}
