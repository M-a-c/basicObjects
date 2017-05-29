import * as PIXI from 'pixi.js';

export class SpriteObject {

// image ? : "X"
    constructor ( imageURL = '../../../assets/images/bee.png' ) {
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
