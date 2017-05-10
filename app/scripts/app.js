function initialize () {
	// Initialize the application and set properties
	var app = new PIXI.Application ( window.innerWidth, window.innerHeight, {
		backgroundColor : 0x1099bb
	});
	// Append the view into the body
	document.body.appendChild ( app.view );

	let you = PIXI.Sprite.fromImage ("images/bee.svg");
	you.anchor.set ( 0.5, 0.5 );
	you.x = app.renderer.width / 2;
	you.y = app.renderer.height / 2;
	you.interactive = true;
	you.buttonMode = true;
	you.on ( "pointerdown", function () {
		you.scale.x *= 1.2;
		you.scale.y *= 1.2;
	});
	you.on ( "pointerup", function () {
		you.scale.x /= 1.2;
		you.scale.y /= 1.2;
	});

	app.stage.addChild ( you );

	// var startTime = ( new Date () ).getTime () / 1000;

	// Listen for animate update
	app.ticker.add ( function ( delta ) {
	    // you.rotation += 0.1 * delta;
	    you.x = app.renderer.plugins.interaction.mouse.global.x;
	});
}

function createObstacle ( x ) {

}