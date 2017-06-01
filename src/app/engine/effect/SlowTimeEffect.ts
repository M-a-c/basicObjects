// Slows time for a period of time, stacking adds

import { EffectObject } from 'app/engine/core/EffectObject';
import { ASSET } from 'app/engine/core/assets';


export class SlowTimeEffect extends EffectObject {

    constructor () {
        super (ASSET.SlowTimeEffect);
    }
}
