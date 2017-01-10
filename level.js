/** GROUND **/
// Material
var mat = new BABYLON.StandardMaterial("ground", scene);
var t = new BABYLON.Texture("images/ground3.jpg", scene);
t.uScale = t.vScale = 10;
mat.diffuseTexture = t;
mat.specularColor = BABYLON.Color3.Black();

// Object
var g = BABYLON.Mesh.CreateBox("ground", 400, scene);
g.position.y = -20;
g.scaling.y = 0.01;

g.material = mat;