// Divides the object into two smaller objects ½:½

import { EffectObject } from 'app/engine/core/EffectObject';
import { ASSET } from 'app/engine/core/assets';


export class DivideEffect extends EffectObject {

    constructor () {
        super (ASSET.DivideEffect);
    }
}
