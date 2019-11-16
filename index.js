 //Script for 3D Box 


    // revolutions per second
    var angularSpeed = 0.1;
    var lastTime = 0;

    var cube = null;

    // this function is executed on each animation frame
    function animate() {
        // update
        var time = (new Date()).getTime();
        var timeDiff = time - lastTime;
        var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
        cube.rotation.y += angleChange;
        lastTime = time;

        // render
        renderer.render(scene, camera);

        // request new frame
        requestAnimationFrame(function () {
            animate();
        });
    }

    // renderer
    var container = document.getElementById("container");
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);


    // camera
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 700;

    // scene
    var scene = new THREE.Scene();

    // cube
    cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), new THREE.MeshLambertMaterial({
        color: '#cccccc'
    }));
    cube.overdraw = true;
    cube.rotation.x = Math.PI * 0.1;
    cube.rotation.y = Math.PI * 0.3;
    scene.add(cube);

    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x888888);
    scene.add(ambientLight);

    // directional lighting
    var directionalLight = new THREE.DirectionalLight(0x666666);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // start animation
    animate();

var $ = function(id) { return document.getElementById(id); };

    oninput= function() {
    var width = parseInt($('inp-width').value),
        height = parseInt($('inp-height').value),
        length = parseInt($('inp-length').value);

    cube.scale.x = width;
    cube.scale.y = height;
    cube.scale.z = length;
};