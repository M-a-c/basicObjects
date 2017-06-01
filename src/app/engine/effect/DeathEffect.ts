// Ends the game, destroys all PlayerObjects

import { EffectObject } from 'app/engine/core/EffectObject';
import { ASSET } from 'app/engine/core/assets';


export class DeathEffect extends EffectObject {

    constructor (imageFile, pointValue) {
        super (ASSET.DeathEffect);
    }
}
