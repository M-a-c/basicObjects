class EffectObject extends SpriteObject {
	
	constructor (image,pointValue) {
		super (image);
		this.pointValue = 0;
		
		//effect would be public. 
		//Upon striking an effect object it reads its effect.
		this.effect = { 
			scale: 1,
			speed: 1,
		}
	}
}