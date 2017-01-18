function Level(scene,l,w,y,texture){

	l = l || 10;
	w = w || 10;
	y = y || 0;
	texture = texture || "ground";


	var mat;
	var t 

	switch (texture){
		case "ground":
			mat = new BABYLON.StandardMaterial("ground", scene);
		    t = new BABYLON.Texture("images/concrete.jpg", scene);
		    t.uScale = t.vScale = 30;
		    mat.diffuseTexture = t;
			mat.specularColor = BABYLON.Color3.Black();

		break;

		case "paddle":
			mat = new BABYLON.StandardMaterial("ground", scene);
		    t = new BABYLON.Texture("images/fuckincolorsm10.png", scene);
		    t.uScale = t.vScale = .5;
		    mat.diffuseTexture = t;
			mat.specularColor = BABYLON.Color3.Black();

		break;


	}

	if(texture == "ground"){

	}
	if(texture == "ground"){
		
	}

//Object
    var g = BABYLON.Mesh.CreateGround("ground1", l, w, 1, scene); ///200, scene);
    g.position.y = y;
    g.scaling.y = 0.01;
    g.material = mat;
    g.checkCollisions = true;
    g.backFaceCulling = false; 
    this.position = g.position;



    return g;
}