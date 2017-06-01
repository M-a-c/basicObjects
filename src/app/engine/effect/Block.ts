// Destroys any PlayerObject that hits it.

import { EffectObject } from 'app/engine/core/EffectObject';
import { ASSET } from 'app/engine/core/assets';


export class Block extends EffectObject {

    constructor (imageFile, pointValue) {
        super (ASSET.Block);
    }
}
