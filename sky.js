function Sky(x,y,z, scene){
	var size = 900;
	this.draw = function(){
		// console.log("biteme")
		// var box = BABYLON.MeshBuilder.CreateBox('cube', {width: 5, height: 5, depth: 5}, scene);
		// console.log(box)
 	// 	//functional movement
 	console.log("banas")

 	var skybox = BABYLON.Mesh.CreateBox("skyBox", size, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
		skyboxMaterial.backFaceCulling = false;
		// skyboxMaterial.disableLighting = true;
		skybox.material = skyboxMaterial;
		skybox.position = new BABYLON.Vector3(x,y,z);
 		this.position = skybox.position; 

	}
}