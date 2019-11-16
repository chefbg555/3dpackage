


    // revolutions per second
    let angularSpeed = 0.1;
    let lastTime = 0;

    let cube = null;

    // this function is executed on each animation frame
    function animate() {
        // update
        let time = (new Date()).getTime();
        let timeDiff = time - lastTime;
        let angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
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
    let container = document.getElementById("container");
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);


    // camera
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 700;

    // scene
    let scene = new THREE.Scene();

    // cube
    cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), new THREE.MeshLambertMaterial({
        color: '#deb887'
    }));
    cube.overdraw = true;
    cube.rotation.x = Math.PI * 0.1;
    cube.rotation.y = Math.PI * 0.3;
    scene.add(cube);

    // add subtle ambient lighting
    let ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    // directional lighting
    let directionalLight = new THREE.DirectionalLight(0x888888);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // start animation
    animate();

let $ = function(id) { return document.getElementById(id); };

    oninput= function() {
    let width = parseInt($('inp-width').value),
        height = parseInt($('inp-height').value),
        length = parseInt($('inp-length').value);

    cube.scale.x = width;
    cube.scale.y = height;
    cube.scale.z = length;
};