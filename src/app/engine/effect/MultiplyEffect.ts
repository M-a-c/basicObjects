// Duplicates the player object 1:1 duplication

import { EffectObject } from 'app/engine/core/EffectObject';
import { ASSET } from 'app/engine/core/assets';


export class MultiplyEffect extends EffectObject {

    constructor () {
        super (ASSET.MultiplyEffect);
    }
}
