/*

THINGS IN PROGRESS:
    make move function for boxes paddles and the such like
    can't add or subract vectors in place with them as pos not def locally

    fixed with hackkery

added OimoJSPlugin for use with applyimpulse setgravity


*/


var canvas = document.getElementById('renderCanvas');
var engine = new BABYLON.Engine(canvas, true);

var createScene = function(){
//Physics
    var scene = new BABYLON.Scene(engine);
    scene.enablePhysics(new BABYLON.Vector3(0, -10, 0), new BABYLON.OimoJSPlugin());
    scene.collisionsEnabled = true;
    
 //   scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
    var charJump = new BABYLON.Vector3(0, 1 , 0);
    //box move 
    boxVectorx = new BABYLON.Vector3(.1,0,0);
    boxVectorz = new BABYLON.Vector3(0,0,.1);

    scene.fogEnabled = true;
    scene.FOGMODE_EXP;
    scene.fogDensity = 30;


//lights camera
	//var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0,5,-15), scene);

    var camera = new Camera('run','character', new BABYLON.Vector3(0,5,-15), 4, scene);
   // camera.fly();
      camera.run();
        camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);


   // camera.ellipsoid.setPhysicsState({impostor:BABYLON.PhysicsEngine.SphereImpostor, move:true, mass:1, friction:0.5, restitution:0.5});
    //d.setPhysicsState({impostor:BABYLON.PhysicsEngine.BoxImpostor, move:true, mass:1, friction:0.5, restitution:0.1});
    




 	//var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
 	//var camera = new BABYLON.FollowCamera("camera1", new BABYLON.Vector3(0,5,-100), scene);
	//camera.setTarget(BABYLON.Vector3.Zero());
	//camera.setPosition(new BABYLON.Vector3(0, 0, -20));
	//camera.attachControl(canvas, false);
	//var light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,-10), scene);
	var light2 = new BABYLON.HemisphericLight('light2', new BABYLON.Vector3(0,2,3), scene);
//	var cameraPosition = new BABYLON.Vector3(camera.position.x, camera.position.y, camera.position.z);
	// light2.parent = camera;

	// console.log(cameraPosition);

    var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 0, tessellation: 4}, scene);
    cone.position = new BABYLON.Vector3(5,5,5);

//objects
	var sphere1 = new BABYLON.Mesh.CreateSphere('sphere1', 16, 4, scene);
	sphere1.position = new BABYLON.Vector3(0,0,0);
    //cube (xyzlwh,scene)
    var cube = new Cube( 0, 0, 0, 35, scene);
    cube.position  = new BABYLON.Vector3(5,5,5);
    cube.draw();

    var sky = new Sky(0,0,0,scene);
    //sky.draw();

    var row1 = new Cubes(10, 5, scene);
    row1.drawRow(true);
    row1.drawRow(false);
    row1.drawCol(true);
    row1.drawCol(false);
    row1.drawSpike(true);
    row1.drawSpike(false);
		
	// var ground = new BABYLON.Mesh.CreatePlane('ground', 100, scene);
	// ground.rotation = new BABYLON.Vector3(Math.PI/2, 0, 0);
	// ground.position = new BABYLON.Vector3(0, -1.5, 0);

    var mat = new BABYLON.StandardMaterial("ground", scene);
    var t = new BABYLON.Texture("images/concrete.jpg", scene);
    t.uScale = t.vScale = 30;
    mat.diffuseTexture = t;
    mat.specularColor = BABYLON.Color3.Black();

// Object
    var g = BABYLON.Mesh.CreateBox("ground1", 200, scene);
    g.position.y = -20;
    g.scaling.y = 0.01;
    g.material = mat;

    g.checkCollisions = true;
    g.backFaceCulling = false;
    g.setPhysicsState({ impostor: BABYLON.PhysicsEngine.BoxImpostor, move:false});





    document.addEventListener("keydown", function(event){
    	// if(event.key == " "){
    	// 	console.log("spacedicks");
    	// 	camera.position.addInPlace(charJump);
    	// 	cube.position.addInPlace(charJump);
    	// 	console.log(camera.applyGravity)
    	// }
//reg controls
    	if(event.key == "a"){
    		//cube.position.subtractInPlace(boxVectorx);
            cube.move(true);
    	}

    	if(event.key == "d"){
   			cube.position.addInPlace(boxVectorx);
    	}    	

    	if(event.key == "w"){
    		cube.position. addInPlace(boxVectorz);
    	}
    	if(event.key == "s"){
    		cube.position.subtractInPlace(boxVectorz);
    	}
    	if (event.key == "a" && event.key == "w"){
            cube.position.subtractInPlace(boxVectorx).addInPlace(boxVectorz)
    	}
//diagonal controls 
    	if (event.key == "a" && event.key == "s"){

    	}
    	if (event.key == "a" && event.key == "w"){

    	}
    	if (event.key == "a" && event.key == "s"){

    	}
    	if (event.key == "d" && event.key == "w"){

    	}
    	if (event.key == "d" && event.key == "s"){

    	}

   //  	if( == duck.right){
   //  		duck.pos.x += duck.movespeed;
  	// 	}
 		// if(duck.xmove == duck.left){
   //  		duck.pos.x -= duck.movespeed;
  	// 	}



    });
// Enable Collisions
    scene.enablePhysics(new BABYLON.Vector3(0,-10,0), new BABYLON.OimoJSPlugin());
//Then apply collisions and gravity to the active camera
   //  camera.checkCollisions = true;
   // camera.applyGravity = true;
    console.log("nosersiouslyWAT");
//    cube.applyGravity = true;

    //Set the ellipsoid around the camera (e.g. your player's size)

    //finally, say which mesh will be collisionable
//    ground.checkCollisions = true;
    cube.checkCollisions = true;
    sphere1.checkCollisions = true;
//    sky.checkCollisions=true;

	

//animations stuff and frames
		var ani1 = new BABYLON.Animation("myAnimation", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		var keys = []; 
				//At the animation key 0, the value of scaling is "1"
			keys.push({frame: 0, value: 1});
				//At the animation key 20, the value of scaling is "0.2"
			keys.push({frame: 80, value: 3});
				//At the animation key 100, the value of scaling is "1"
			keys.push({frame: 100, value: 1});

			ani1.setKeys(keys);
			sphere1.animations.push(ani1);
			// scene.beginAnimation(sphere1, 0, 200, true);

			return scene;
		}

		var scene = createScene();

		engine.runRenderLoop(function(){
			scene.render();
		});

		window.addEventListener('resize', function() {
    		engine.resize();
		});





			//Pressing W camera.cameraDirection= camera.cameraDirection.add(new BABYLON.Vector3(0,0,0.1));
			//Pressing S camera.cameraDirection= camera.cameraDirection.add(new BABYLON.Vector3(0,0,-0.1));
			//Pressing A camera.cameraDirection= camera.cameraDirection.add(new BABYLON.Vector3(-0.1,0,0));	
			//Pressing D camera.cameraDirection= camera.cameraDirection.add(new BABYLON.Vector3(0.1,0,0));
			//The rotation is done by creating mouse variable:
			// var mouse = new BABYLON.Vector2();function onDocumentMouseMove( event ) {   mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;   
			// mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1;}function yourRenderFunction(){   
			// 	if(mouse.x>0.7 || mouse.x<-0.7 || mouse.y>0.7 || mouse.y<-0.7){
			// 		camera.rotation = camera.rotation.add( new BABYLON.Vector3((-mouse.y)/100,0,0));      
			// 		camera.rotation = camera.rotation.add( new BABYLON.Vector3(0,(mouse.x)/100,0)); 
			// 	}
			// }








