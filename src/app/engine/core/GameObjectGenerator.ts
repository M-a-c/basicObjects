import { MagnifyEffect } from '../effect/MagnifyEffect';
import { MinifyEffect } from '../effect/MinifyEffect';


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
