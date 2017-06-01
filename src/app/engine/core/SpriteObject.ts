import * as PIXI from 'pixi.js';
import { ASSET } from './Assets';

export class SpriteObject {

// image ? : "X"
    constructor ( imageURL = ASSET.PlayerObject ) {
        this.sprite = PIXI.Sprite.fromImage ( imageURL );
    }

	// Updates the position
    public update ( ) {

    }

//// Updates the position
// update ( globalModifiers ) {
// 		globalModifiers.scale;
//  	globalModifiers.velocity;
//   }

}
