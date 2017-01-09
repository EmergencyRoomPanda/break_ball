function Camera(type, name, startPos, speed, scene){

	this.run = function(){

	}
	this.jump = function(){

	}
	if type == 'free'{
		this.fly = function(){
			var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0,5,-15), scene);
			camera.attachControl(canvas, false);
			this.position
		}
	}	
}