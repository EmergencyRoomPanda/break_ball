function Level(scene){
	var mat = new BABYLON.StandardMaterial("ground", scene);
    var t = new BABYLON.Texture("images/concrete.jpg", scene);
    t.uScale = t.vScale = 30;
    mat.diffuseTexture = t;
    mat.specularColor = BABYLON.Color3.Black();

//Object
    var g = BABYLON.Mesh.CreateGround("ground1",9,8,0, scene); ///200, scene);
    g.position.y = -2;
    g.scaling.y = 0.01;
    g.material = mat;
    g.checkCollisions = true;
    g.backFaceCulling = false; 

    return g;
}