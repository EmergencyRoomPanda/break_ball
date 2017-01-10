function Camera(type, name, startPos, speed, scene){

	if (type == 'run'){
		this.run = function(){
			var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0,5,-15), scene);
			camera.attachControl(canvas, false);
			this.position = camera.position;
			camera.checkCollisions = true;
	 		camera.applyGravity = true;
		}
	}


	this.jump = function(){


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