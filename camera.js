function Camera(type, name, startPos, speed, scene){

	if (type == 'run'){
		this.run = function(){
			var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0,5,-15), scene);
			camera.attachControl(canvas, false);
			this.position = camera.position;
			camera.checkCollisions = true;
	 		camera.applyGravity = true;
	 		//camera.maxZ = 500;
		}
	}


	this.jump = function(){
		camera.applyImpulse()

	}
	if (type == 'free'){
		console.log("maybe here?")
		this.fly = function(){
			var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0,5,-15), scene);
			camera.attachControl(canvas, false);
			this.position = camera.position;
			    camera.checkCollisions = true;
 				camera.applyGravity = false;
		}
	}	
}



//var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
 	//var camera = new BABYLON.FollowCamera("camera1", new BABYLON.Vector3(0,5,-100), scene);
	//camera.setTarget(BABYLON.Vector3.Zero());
	//camera.setPosition(new BABYLON.Vector3(0, 0, -20));
	//camera.attachControl(canvas, false);