// Reverses Direction of the PlayerObject and all
// spawning of objects is reversed

import { EffectObject } from 'app/engine/core/EffectObject';
import { ASSET } from 'app/engine/core/assets';


export class ReverseDirectionEffect extends EffectObject {

    constructor () {
        super (ASSET.ReverseDirectionEffect);
    }
}
