
import { SpriteObject } from './SpriteObject';

export class PlayerObject extends SpriteObject {
    constructor () {
        super ();
        this.sprite.scale.x = 0.2;
        this.sprite.scale.y = 0.2;
    }
    
    // Updates the position
    public update ( ) {
        
    }
    
    //// Updates the position
    // update ( globalModifiers ) {
    // 		globalModifiers.scale;
    //  	globalModifiers.velocity;
    // }

}
