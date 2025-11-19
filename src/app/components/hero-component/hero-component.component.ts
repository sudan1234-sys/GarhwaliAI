import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  imports: [],
  templateUrl: './hero-component.component.html',
  styleUrl: './hero-component.component.scss'
})
export class HeroComponentComponent {

  startChat() {
    // You can navigate to your chat page here
    console.log("Start Chat clicked");
  }

  attachDocument() {
    // You can open file-picker or modal here
    console.log("Attach Document clicked");
  }
}
