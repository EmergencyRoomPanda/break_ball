/*

THINGS IN PROGRESS:
    make move function for boxes paddles and the such like
    can't add or subract vectors in place with them as pos not def locally

    fixed with hackkery

added OimoJSPlugin for use with applyimpulse setgravity
gravity set
imposters to be made individually in calls to element constructor classes


make object hash priority queue idk to loop through nearby objects for collisions with cam
maybe handled by fv + fog;

*/



var canvas = document.getElementById('renderCanvas');
var engine = new BABYLON.Engine(canvas, true);

var createScene = function(){
//Physics
    // var scene = new BABYLON.Scene(engine);
    // scene.enablePhysics(new BABYLON.Vector3(0, -10, 0), new BABYLON.OimoJSPlugin());

    var scene = new BABYLON.Scene(engine);
    var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
    var physicsPlugin = new BABYLON.OimoJSPlugin();
    scene.enablePhysics(gravityVector, physicsPlugin);
    scene.collisionsEnabled = true;

//lights camera
    var camera = new Camera('free','character', new BABYLON.Vector3(0,5,-15), 4, scene);
    camera.fly();
    //camera.run();
    camera.checkCollisions = true;


   // camera.ellipsoid.setPhysicsState({impostor:BABYLON.PhysicsEngine.SphereImpostor, move:true, mass:1, friction:0.5, restitution:0.5});
    //d.setPhysicsState({impostor:BABYLON.PhysicsEngine.BoxImpostor, move:true, mass:1, friction:0.5, restitution:0.1});
    
	var light2 = new BABYLON.HemisphericLight('light2', new BABYLON.Vector3(0,2,3), scene);
	// light2.parent = camera;
	// console.log(cameraPosition);

//objects
	var sphere1 = new BABYLON.Mesh.CreateSphere('sphere1', 14, .5, scene);
	sphere1.position = new BABYLON.Vector3(0,8,0);
    sphere1.checkCollisions = true;

    // var boxcol = new BABYLON.Mesh.CreateBox('boxtest', 6, scene);
    // boxcol.position = new BABYLON.Vector3(20,1.5,10);
    // boxcol.checkCollisions = true;
    
    // var cube = new Cube( 10, 5, 10, 10, scene);
    // cube.draw();
    // cube.checkCollisions = true;

    // var sky = new Sky(0,0,0,scene);
    // sky.draw();
    // sky.checkCollisions = true;

    var ground = new Level(scene, 10, 10, -1, "ground");
    ground.checkCollisions = true;

    // var paddle = new Level(scene, 2 , 2 , 0, "paddle");
    // paddle.checkCollisions = true;

    // var row1 = new Cubes(10, 5, scene);
    // row1.drawRow(true);
    // row1.drawRow(false);
    // row1.drawCol(true);
    // row1.drawCol(false);
    // row1.drawSpike(true);
    // row1.drawSpike(false);

    var mat = new BABYLON.StandardMaterial("wall", scene);
    var t = new BABYLON.Texture("images/concrete.jpg", scene);
    t.uScale = t.vScale = 30;
    mat.diffuseTexture = t;
    mat.specularColor = BABYLON.Color3.Black();

// //Object
    var g = BABYLON.Mesh.CreateBox("wall", {length:10, width:5, depth:2}, scene);
    g.position = new BABYLON.Vector3(2,2,2);
    g.material = mat;
    g.checkCollisions = true;
    g.backFaceCulling = false; 


    // var plane = BABYLON.Mesh.CreatePlane("plane", 10.0, scene, true, BABYLON.Mesh.DOUBLESIDE);
    // var st = new BABYLON.StandardMaterial("myplanematerial", scene);
    // st.backFaceCulling = false;
    // plane.material = st;
    // plane.checkCollisions = true;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 14, .5, scene);
    sphere.position.y = 20;

    //var cubepaddle = new Paddle(3, scene);
    //cubepaddle.draw();
    var cubepaddle = BABYLON.MeshBuilder.CreateBox("paddle", {size:2, width:2, height:.2, depth:2}, scene);
    console.log("why the fuck");
    cubepaddle.position = new BABYLON.Vector3(0,0,0);
    cubepaddle.physicsImpostor = new BABYLON.PhysicsImpostor(cubepaddle, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, scene);

    cubepaddle.checkCollisions = true;


    //ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
    cubepaddle.physicsImpostor = new BABYLON.PhysicsImpostor(cubepaddle, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 1}, scene);
    // paddle.physicsImpostor.forceUpdate();

    sphere1.physicsImpostor = new BABYLON.PhysicsImpostor(sphere1, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: .5 }, scene);
    sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 5, restitution: .5 }, scene);






    //var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    //ground.checkCollisions = true;

//PHYSICS
    //sphere1.physicsImpostor = new BABYLON.PhysicsImpostor(sphere1, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.99 }, scene);
    //g.physicsImpostor = new BABYLON.PhysicsImpostor(g, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.99 }, scene);

  //  ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.99 }, scene);





   // g.setPhysicsState({ impostor: BABYLON.PhysicsEngine.BoxImpostor, move:false});

  //  var imp = new BABYLON.PhysicsImpostor(object: IPhysicsEnabledObject, type: , options: PhysicsImpostorParameters, scene:BABYLON.Scene);


    scene.registerBeforeRender(function () {
        cubepaddle.rotate(BABYLON.Axis.Z, 0.5);
        cubepaddle.position.y += 0.1;
        
    })



    document.addEventListener("keydown", function(event){
    	if(event.key == " "){
            cubepaddle.physicsImpostor.applyImpulse(new BABYLON.Vector3(0,10,0), cubepaddle.position);
            console.log("fuckinellm8");
    	}
//reg controls
    	if(event.key == "a"){
            cubepaddle.physicsImpostor.applyImpulse(new BABYLON.Vector3(-10,0,0), cubepaddle.position);
            console.log("a");
    	}

    	if(event.key == "d"){
            cubepaddle.physicsImpostor.applyImpulse(new BABYLON.Vector3(10,0,0), cubepaddle.position);
            console.log("d");

    	}    	

    	if(event.key == "w"){
            cubepaddle.physicsImpostor.applyImpulse(new BABYLON.Vector3(0,0,5), cubepaddle.position);
            console.log("w");

    	}
    	if(event.key == "s"){
            cubepaddle.physicsImpostor.applyImpulse(new BABYLON.Vector3(0,0,-5), cubepaddle.position);
            console.log("s");

    	}
//     	if (event.key == "a" && event.key == "w"){
//            // cube.position.subtractInPlace(boxVectorx).addInPlace(boxVectorz)
//     	}
// //diagonal controls 
//     	if (event.key == "a" && event.key == "s"){

//     	}
//     	if (event.key == "a" && event.key == "w"){

//     	}
//     	if (event.key == "a" && event.key == "s"){

//     	}
//     	if (event.key == "d" && event.key == "w"){

//     	}
//     	if (event.key == "d" && event.key == "s"){

//     	}

   //  	if( == duck.right){
   //  		duck.pos.x += duck.movespeed;
  	// 	}
 		// if(duck.xmove == duck.left){
   //  		duck.pos.x -= duck.movespeed;
  	// 	}



    });

//animations stuff and frames
		// var ani1 = new BABYLON.Animation("myAnimation", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		// var keys = []; 
		// 		//At the animation key 0, the value of scaling is "1"
		// 	keys.push({frame: 0, value: 1});
		// 		//At the animation key 20, the value of scaling is "0.2"
		// 	keys.push({frame: 80, value: 5});
		// 		//At the animation key 100, the value of scaling is "1"
		// 	keys.push({frame: 100, value: 1});

		// 	ani1.setKeys(keys);
		// 	sphere1.animations.push(ani1);
		// 	// scene.beginAnimation(sphere1, 0, 200, true);

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








