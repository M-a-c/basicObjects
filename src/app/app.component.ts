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
    let app = new PIXI.Application ( window.innerWidth, window.innerHeight, {
      backgroundColor : 0x1099BB
    });

    // Append the view into the body
    this.div.appendChild ( app.view );
    // Initialize our world and add it to our application
    let world = new World ( app.view );
    app.stage.addChild ( world );
    // Initialize the world, and then run it
    world.run ( app.ticker );
  }

	// let you = PIXI.Sprite.fromImage ("images/bee.svg");
	// you.anchor.set ( 0.5, 0.5 );
	// you.x = app.renderer.width / 2;
	// you.y = app.renderer.height / 2;
	// you.interactive = true;
	// you.buttonMode = true;
	// you.on ( "pointerdown", function () {
	// 	you.scale.x *= 1.2;
	// 	you.scale.y *= 1.2;
	// });
	// you.on ( "pointerup", function () {
	// 	you.scale.x /= 1.2;
	// 	you.scale.y /= 1.2;
	// });

	// app.stage.addChild ( you );

	// // var startTime = ( new Date () ).getTime () / 1000;

	// // Listen for animate update
	// app.ticker.add ( function ( delta ) {
	//     // you.rotation += 0.1 * delta;
	//     you.x = app.renderer.plugins.interaction.mouse.global.x;
	// });
	
}