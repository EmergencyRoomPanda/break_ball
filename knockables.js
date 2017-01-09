/* 
PROGRESS:
store specific knockables in NVP {}, look up by name apply effects
*/

//CUBES
function Cube(x,y,z,l,w,h,number,_,scene){

		this.l = l;
		this.w = w;
		this.h = h;
		this.spacing = _;

	this.draw = function(){
		var box = BABYLON.MeshBuilder.CreateBox('box', {width: l, height: w, depth: h,}, scene);
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


//
function Cubes(number,_,scene){

		this.l = l;
		this.w = w;
		this.h = h;
		this.spacing = _;

	this.drawRow = function(){
		var cube = new Cube(3,3,3,4,4,4,2,1,scene);
	}

	this.drawCol = function(){
		var box = BABYLON.MeshBuilder.CreateBox('box', {width: l, height: w, depth: h,}, scene);
 		box.position = new BABYLON.Vector3(x,y,z);
	}

}




