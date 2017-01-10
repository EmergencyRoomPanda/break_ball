/* 
PROGRESS:
store specific knockables in NVP {}, look up by name apply effects

ADD:
offset vars for cube and take into account bounding mesh rad at theta

*/

//CUBES
function Cube( x, y, z, size, scene){

		this.position; 
		console.log("buttssss")

	this.draw = function(){
		// console.log("biteme")
		// var box = BABYLON.MeshBuilder.CreateBox('cube', {width: 5, height: 5, depth: 5}, scene);
		// console.log(box)
 	// 	//functional movement

 	var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
		skyboxMaterial.backFaceCulling = false;
		skyboxMaterial.disableLighting = true;
		skybox.material = skyboxMaterial;
 		this.position = skybox.position; 

	}

	this.move = function(){
		//apply physics fuckin OIMO YO
		new BABYLON.OimoJSPlugin.applyImplulse();


	}
	this.break = function(){
		//remove block on hit start with click
	}
};

function Cubes(number,_,scene){
//inv
	//dir =1 pos direction t
	//dir =0 neg direction f

		// this.l = l;
		// this.w = w;
		// this.h = h;
		this.number = number;
		this.spacing = _;

	this.drawRow = function(invx){
		//var boxs = [];
		//var boxes = [];
		for (var i = 0; i <= number; i++) {
        	var box = BABYLON.MeshBuilder.CreateBox("Box", {width: 2, height: 2, depth: 2}, scene);
        	//console.log(boxes);
        	// boxes[i] =  box
        	box.position = invx == true?  new BABYLON.Vector3( i*-_, 0 , 0) : new BABYLON.Vector3(i*_, 0, 0);
        	//boxsPos[i] = box.position;
        	this.position = box.position;
        	// return {boxes & boxsPos};
    	}
	}

	this.drawCol = function(invy){
		//var boxs = [];
		//var boxes = [];
		for (var i = 0; i <= number; i++) {
        	var box = BABYLON.MeshBuilder.CreateBox("Box", {width: 2, height: 2, depth: 2}, scene);
        	//console.log(boxes);
        	// boxes[i] =  box
        	box.position = invy == true?  new BABYLON.Vector3( 0, i*-_, 0) : new BABYLON.Vector3(0, i*_, 0);
        	//boxsPos[i] = box.position;
        	this.position = box.position;
        	// return {boxes & boxsPos};
    	}
	}

	this.drawSpike =  function(invz){
		//var boxs = [];
		//var boxes = [];
		for (var i = 0; i <= number; i++) {
        	var box = BABYLON.MeshBuilder.CreateBox("Box", {width: 2, height: 2, depth: 2}, scene);
        	//console.log(boxes);
        	// boxes[i] =  box
        	box.position = invz == true?  new BABYLON.Vector3( 0, 0, i*-_) : new BABYLON.Vector3(0,0,  i*_);

        	//boxsPos[i] = box.position;
        	this.position = box.position;
        	// return {boxes & boxsPos};
    	}
	}

}




