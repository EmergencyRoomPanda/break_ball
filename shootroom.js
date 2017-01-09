var canvas = document.getElementById('renderCanvas');
var engine = new BABYLON.Engine(canvas, true);


var createScene = function(){
		var scene = new BABYLON.Scene(engine);

//lights camera
	var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0,5,-15), scene);
 	//var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(0, 0, -0), scene);
 	//var camera = new BABYLON.FollowCamera("camera1", new BABYLON.Vector3(0,5,-15), scene, box);
	camera.setTarget(BABYLON.Vector3.Zero());
	//camera.setPosition(new BABYLON.Vector3(0, 0, -20));
	camera.attachControl(canvas, false);
	//var light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,-10), scene);
	var light2 = new BABYLON.HemisphericLight('light2', new BABYLON.Vector3(0,2,3), scene);
//	var cameraPosition = new BABYLON.Vector3(camera.position.x, camera.position.y, camera.position.z);
	// light2.parent = camera;

	// console.log(cameraPosition);

//objects
	var sphere1 = new BABYLON.Mesh.CreateSphere('sphere1', 16, 4, scene);
	sphere1.position = new BABYLON.Vector3(0,0,-1);
	//var sphere2 = new BABYLON.Mesh.CreateSphere('sphere2', 16, 4, scene);

 	var box = BABYLON.MeshBuilder.CreateBox('box', {width: 10, height: 3, depth: 5,}, scene);
 	box.position = new BABYLON.Vector3(0,0,2.5);
		
	var ground = new BABYLON.Mesh.CreatePlane('ground', 100, scene);
	ground.rotation = new BABYLON.Vector3(Math.PI/2, 0, 0);
	ground.position = new BABYLON.Vector3(0, -1.5, 0);

//Physics
    scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
    var charJump = new BABYLON.Vector3(0, 1 , 0);
    //box move 
    boxVectorx = new BABYLON.Vector3(.1,0,0);
    boxVectorz = new BABYLON.Vector3(0,0,.1);


    document.addEventListener("keydown", function(event){
    	if(event.key == " "){
    		console.log("spacedicks");
    		camera.position.addInPlace(charJump);
    		box.position.addInPlace(charJump);
    		console.log(camera.applyGravity)
    	}
//reg controls
    	if(event.key == "a"){
    		box.position.subtractInPlace(boxVectorx);
    	}

    	if(event.key == "d"){
   			box.position.addInPlace(boxVectorx);
    	}    	

    	if(event.key == "w"){
    		box.position. addInPlace(boxVectorz);
    	}
    	if(event.key == "s"){
    		box.position.subtractInPlace(boxVectorz);
    	}
    	if (event.key == "a" && event.key == "w"){

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
    scene.collisionsEnabled = true;

    //Then apply collisions and gravity to the active camera
    camera.checkCollisions = true;
    camera.applyGravity = true;
    console.log("nosersiouslyWAT")
    box.applyGravity = true;

    //Set the ellipsoid around the camera (e.g. your player's size)
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

    //finally, say which mesh will be collisionable
    ground.checkCollisions = true;
    box.checkCollisions = true;
    sphere1.checkCollisions = true;

	

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








