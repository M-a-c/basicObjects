class World extends PIXI.Container {
	
	constructor () {
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
			
			// Set object x y velocity randomly
			// renderer.view.style.width
			
			// Add said object to main container
			this.addChild ( randomObject );
		}
	}
	
	// Loops through all sprite objects and updates them, update timer based on timestamp
	update () {
		// Walk through all the children and call the update function
		this.children.map ( ( child ) => { child.update (); } ); 
	}
	
	// Loops through contents of container and renders them
	render () {
		// this.children.map ( ( child ) => { child.render (screen); } )
	}

	// Loops through and checks for collisions with target, returns collision list
	collision ( target ) {
		
	}

	// Contains main game loop
	run () {
		// Update and render onto the canvas
		this.update ();
		this.render ();
		// Render next frame when available
		window.requestAnimationFrame ( this.run.bind ( this ) );
	}

}