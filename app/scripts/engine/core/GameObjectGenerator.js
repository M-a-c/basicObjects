class GameObjectGenerator {

	constructor () {
		// Initialize a list for the registered objects
		this.types = [];
	}

	// Register function (what kinds of objects should we return)
	register ( spriteObject ) {
		// Save the class name into the types array
		this.types.push ( spriteObject );
	}

	// Returns an initialized spriteObject randomly
	nextObject () {
		// Get a random number within the domain of the types list
		//let rand = Math.floor ( Math.random () * this.types.length );
		// Return a random object
		return new MagnifyEffect ();
		// return window [ this.types [ rand ] ];
	}
	
}