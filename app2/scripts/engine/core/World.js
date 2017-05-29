class World extends PIXI.Container {
	
	constructor ( ticker ) {
		// Call the super constructor
		super ();
		// Initialize the game object generator, and register classes
		this.generator = new GameObjectGenerator ();
		this.generator.register ( "MagnifyEffect" );
		this.generator.register ( "MinifyEffect" );
	}

	// Populates self with game objects
	initialize () {
		// Loop through to initialize game objects
		for ( var i = 0; i < 10; i++ ) {
			// Request a random object from the generator
			let randomObject = this.generator.nextObject ();
			// Set object properties
			randomObject.y = 800;
			randomObject.x = Math.floor ( 1024 * Math.random () );
			randomObject.sprite.vx = 0;
			randomObject.sprite.vy = -0.2;
			// Add said object to main container
			this.addChild ( randomObject.sprite );
		}
	}
	
	// Loops through all sprite objects and updates them, update timer based on timestamp
	update () {
		// Walk through all the children and call the update function
		// this.children.map ( ( child ) => { child.update (); } ); 
		this.children.map ( ( child ) => {
			child.y += child.vy;
			child.x += child.vx;
		});
	}
	
	// Loops through and checks for collisions with target, returns collision list
	collision ( target ) {
		
	}

	// Contains main game loop
	run ( ticker ) {
		// Save reference to this
		let that = this;
		// Update and render onto the canvas
		ticker.add ( function ( delta ) {
			that.update ();
		});
		// Render next frame when available
		window.requestAnimationFrame ( this.run.bind ( this, ticker ) );
	}

}