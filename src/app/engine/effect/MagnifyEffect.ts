// Makes a PlayerObject larger 4/3 current size ( when smaller than a
// predetermined maximum (A Static value determined in the Player object))

import { EffectObject } from 'app/engine/core/EffectObject';
import { ASSET } from 'app/engine/core/assets';


export class MagnifyEffect extends EffectObject {

    constructor (imageFile, pointValue) {
        super (ASSET.MagnifyEffect);
    }
}
