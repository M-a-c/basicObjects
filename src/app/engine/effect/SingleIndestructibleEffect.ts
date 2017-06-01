// Think mario superstar, makes the PlayerObject that activated
// it only pick up good effects, bad effects don't have any effect.

import { EffectObject } from 'app/engine/core/EffectObject';
import { ASSET } from 'app/engine/core/assets';


export class SingleIndestructibleEffect extends EffectObject {

    constructor () {
        super (ASSET.SingleIndestructibleEffect);
    }
}
