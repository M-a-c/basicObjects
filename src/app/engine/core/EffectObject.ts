import { SpriteObject } from './SpriteObject';

export class EffectObject extends SpriteObject {
    private pointValue Number;


    constructor (image, pointValue) {
        super (image);
        this.sprite.scale.x = 0.3; // Scale using dpi dependent units in the future
        this.sprite.scale.y = 0.3;
        this.pointValue = 0;

        // effect would be public.
        // Upon striking an effect object it reads its effect.
        this.effect = {
            scale: 1,
            speed: 1,
        };
    }
}
