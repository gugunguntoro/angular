import { Component, OnInit } from '@angular/core';
import { trigger,
         state,
         style,
         animate,
         transition,
         keyframes,
         group
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('lightsOnOff', [
      state('off', style({
        backgroundImage: "url(assets/images/menu.png)",
      })),
      state('on', style({
        backgroundImage: "url(assets/images/cancel.png)",
      })),
      transition('off <=> on', [animate('0.5s', style({transform: 'rotate(90deg)'}))])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  roomState: string = "off";
  menu: any = "/assets/images/menu.png";

  togglelights() {
    this.roomState = (this.roomState === "off") ? "on" : "off";
  }



  ngOnInit() {
  }

}
