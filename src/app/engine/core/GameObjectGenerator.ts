import { MagnifyEffect } from 'app/engine/effect/MagnifyEffect';
import { MinifyEffect } from 'app/engine/effect/MinifyEffect';
import { AllIndestructibleEffect } from 'app/engine/effect/AllIndestructibleEffect'
import { Block } from 'app/engine/effect/Block'
import { DeathEffect } from 'app/engine/effect/DeathEffect'
import { DivideEffect } from 'app/engine/effect/DivideEffect'
import { MultiplyEffect } from 'app/engine/effect/MultiplyEffect'
import { ReverseDirectionEffect } from 'app/engine/effect/ReverseDirectionEffect'
import { SingleIndestructibleEffect } from 'app/engine/effect/SingleIndestructibleEffect'
import { SlowTimeEffect } from 'app/engine/effect/SlowTimeEffect'
import { SpeedUpTimeEffect } from 'app/engine/effect/SpeedUpTimeEffect'

export class GameObjectGenerator {

    public types: string;

    constructor () {
        // Initialize a list for the registered objects
        this.types = [];
    }

    // Register function (what kinds of objects should we return)
    public register ( spriteObject ) {
        // Save the class name into the types array
        this.types.push ( spriteObject );
    }

    public getGameObject ( type ) {
        // Switch between types
        switch ( type ) {
            case 'MagnifyEffect':
                return new MagnifyEffect ();
            case 'MinifyEffect':
                return new MinifyEffect ();
            case 'AllIndestructibleEffect':
                return new AllIndestructibleEffect ();
            case 'Block':
                return new Block ();
            case 'DeathEffect':
                return new DeathEffect ();
            case 'DivideEffect':
                return new DivideEffect ();
            case 'MultiplyEffect':
                return new MultiplyEffect ();
            case 'ReverseDirectionEffect':
                return new ReverseDirectionEffect ();
            case 'SingleIndestructibleEffect':
                return new SingleIndestructibleEffect ();
            case 'SlowTimeEffect':
                return new SlowTimeEffect ();
            case 'SpeedUpTimeEffect':
                return new SpeedUpTimeEffect ();
        }
    }

    // Returns an initialized spriteObject randomly
    public nextObject () {
        // Get a random number within the domain of the types list
        let rand = Math.floor ( Math.random () * this.types.length );
        // Return a random object
        return new this.getGameObject ( this.types [ rand ] );
    }

}
