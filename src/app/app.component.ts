import {AfterViewInit, Component, ViewChild} from '@angular/core';
import * as PIXI from 'pixi.js';
import { World } from './engine/core/World';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('game') container: any;

  ngAfterViewInit() {
    this.div = this.container.nativeElement;

    // Initialize the application and set properties
    let app = new PIXI.Application( window.innerWidth, window.innerHeight, {
      backgroundColor : 0x1099BB
    });

    // Append the view into the body
    this.div.appendChild ( app.view );
    // Initialize our world and add it to our application
    let world = new World ();
    app.stage.addChild ( world );
    // Initialize the world, and then run it
    world.initialize ();
    world.run ( app.ticker );
  }

}
