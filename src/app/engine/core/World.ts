import * as PIXI from 'pixi.js';
import { GameObjectGenerator } from './GameObjectGenerator';
import { PlayerObject } from './PlayerObject';

export class World extends PIXI.Container {

    constructor ( view ) {
        // Call the super constructor
        super ();
        // Save the reference to the view
        this.view = view;
        // Initialize elapsed game time counter and initialization flag
        this.elapsedTime = 0.0;
        this.intializationFlag = true;
        // Initialize the game object generator, and register classes
        this.generator = new GameObjectGenerator ();
        this.generator.register ( 'MagnifyEffect' );
        this.generator.register ( 'MinifyEffect' );
        // Initialize the player
        this.initializePlayerObject ();
        // Initialize game object array
        this.objectChildren = [];
        // Make stage interactive and link mouse events
        this.interactive = true;
        this.mouse = { x: 0 };
        this.on ( 'mousemove', this.mouseMove.bind ( this ) );
    }

    public mouseMove ( event ) {
        this.mouse.x = event.data.getLocalPosition ( this );
        this.mouse.x = event.data.global.x;
    }

    // Initializes the player object
    public initializePlayerObject () {
        this.player = new PlayerObject ();
        this.player.sprite.x = 0;
        this.player.sprite.y = ( this.view.height / 2 ) - ( this.player.sprite.height / 2 );
        this.addChild ( this.player.sprite );
    }

    // Populates self with game objects
    public populateRow () {
        // Loop through to initialize game objects
        for ( let i = 0; i < Math.floor ( 3 * Math.random () ); i++ ) {
            // Request a random object from the generator
            let randomObject = this.generator.nextObject ();
            // Set object properties
            // randomObject.sprite.y = this.view.height;
            randomObject.sprite.y = 0 - randomObject.sprite.height;
            randomObject.sprite.x = Math.floor (
                ( this.view.width - randomObject.sprite.width ) * Math.random ()
            );
            randomObject.sprite.vx = 0;
            randomObject.sprite.vy = 0;
            // Add said object to main container
            this.objectChildren.push ( randomObject.sprite );
            this.addChild ( randomObject.sprite );
        }
    }

    // Loops through all sprite objects and updates them, update timer based on timestamp
    public update () {
        // Walk through all the children and call the update function
        this.objectChildren.map ( ( child ) => {
            child.y += 3;
            child.x += child.vx;
        });
        // Save reference to class instance
        var that = this;
        // Filter through children objects and remove all objects that are off screen
        this.objectChildren = this.objectChildren.filter ( ( obj ) => {
            return obj.y < that.view.height;
        });
        // Filter through the children objects in the stage and remove ones that are off screen
        this.children = this.children.filter ( ( obj ) => {
            return obj.y < that.view.height;
        });
        // Run collision detection, and remove all coins that collide with player
        this.collision ( this.player ).map ( ( obj ) => {
            that.score++;
            that.children = that.children.filter ( ( child ) => {
                return child != obj;
            });
            that.objectChildren = that.objectChildren.filter ( ( child ) => {
                return child != obj;
            });
        });
    }

    // Loops through and checks for collisions with target, returns collision list
    public collision ( target ) {
        // Return all the colliding coins
        return this.objectChildren.filter ( ( obj ) => {
            // Collision detection using bounding box method
            let a = target.sprite;
            let b = obj;
            return a.x + a.width > b.x && 
                   a.x < b.x + b.width &&
                   a.y + a.height > b.height &&
                   a.y < b.y + b.height;
        });
    }

    // Contains main game loop
    public run ( ticker ) {
        // Check ticker time and see if we can initialize another row of objects
        if ( Math.floor ( this.elapsedTime ) % 30 == 0 ) {
            this.populateRow ();
        }
        // Accumulate elapsed time
        this.elapsedTime += ticker.deltaTime;
        // Save reference to this
        let that = this;
        if ( this.intializationFlag ) {
            // Set initialization flag
            this.intializationFlag = false;
            // Update player position
            ticker.add ( function ( delta ) {
                that.player.sprite.x = that.mouse.x - ( that.player.sprite.width / 2 );
            });
            // Update and render onto the canvas
            ticker.add ( function ( delta ) {
                that.update ();
            });
        }
        // Render next frame when available
        window.requestAnimationFrame ( this.run.bind ( this, ticker ) );
    }

}
