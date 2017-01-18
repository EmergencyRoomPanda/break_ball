function Paddle (size, scene){
	this.position;
	console.log("paddlesfo real")

	// this.draw = fuction(){
 // 		var boxMaterial = new BABYLON.StandardMaterial("Box", scene);
	// 	boxMaterial.backFaceCulling = false;
	// 	var box = BABYLON.Mesh.CreateBox("paddle", size, scene);
	// 	box.material = boxMaterial;
	// 	box.position = new BABYLON.Vector3(2,2,2);
 // 		this.position = box.position;

 // 	}

 	this.draw = function(){
		// console.log("biteme")
		// var box = BABYLON.MeshBuilder.CreateBox('cube', {width: 5, height: 5, depth: 5}, scene);
		// console.log(box)
 	// 	//functional movement
 	console.log("bananasfo real")
 	var boxMaterial = new BABYLON.StandardMaterial("Box", scene);
	boxMaterial.backFaceCulling = false;
	var paddle = BABYLON.MeshBuilder.CreateBox("paddle",{width: size, height: size, depth: size}, scene);
	paddle.material = boxMaterial;
 	

		// skyboxMaterial.disableLighting = true;

		paddle.position = new BABYLON.Vector3(0,0,0);
 		this.position = paddle.position;

	}
}