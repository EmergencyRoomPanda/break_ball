/* 
PROGRESS:
store specific knockables in NVP {}, look up by name apply effects

ADD:
offset vars for cube and take into account bounding mesh rad at theta

*/

//CUBES
function Cube(x,y,z,l,w,h,scene){

		this.l = l;
		this.w = w;
		this.h = h;
		this.position; 

	this.draw = function(){
		var box = BABYLON.Mesh.CreateBox('box', {width: w, height: h, depth: l}, scene);
 		box.position = new BABYLON.Vector3(x,y,z);
 		//functional movement
 		this.position = box.position; 

	}

	this.move = function(){
		//apply physics fuckin OIMO YO


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




