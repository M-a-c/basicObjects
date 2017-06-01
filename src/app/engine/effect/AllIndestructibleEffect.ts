// Think mario superstar, makes you only pick up
// good effects, bad effects don't affect you

import { EffectObject } from 'app/engine/core/EffectObject';
import { ASSET } from 'app/engine/core/assets';


export class AllIndestructibleEffect extends EffectObject {

    constructor () {
        super (ASSET.AllIndestructibleEffect);
    }
}
