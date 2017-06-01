// Makes a PlayerObject smaller 2/3 current size ( when larger than a predetermined
// minimum (A Static value determined in the Player object))

import { EffectObject } from 'app/engine/core/EffectObject';
import { ASSET } from 'app/engine/core/assets';


export class MinifyEffect extends EffectObject {

    constructor () {
        super (ASSET.MinifyEffect);
    }
}
