import * as THREE from './three.js';

//crear una escena
const scene = new THREE.Scene();
//crear una camara con perspectiva y parametros de vision 
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );

//crear un renderizador
const renderer = new THREE.WebGLRenderer();
//establecer el tamaño del renderizador
renderer.setSize( window.innerWidth, window.innerHeight );
//agregar el renderizador al documento
renderer.setAnimationLoop( animate );
//agregar el elemento html para visualizar la escena
document.body.appendChild( renderer.domElement );

//crear un cubo
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//agregar el material de llenado y color al cubo
const material = new THREE.MeshBasicMaterial( { color: 0xB72727 } );
//crear el cubo con lo solicitado
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//posicionar la camara
camera.position.z = 5;

//funcion para animar el cubo
function animate() {
    //si el cubo se mueve hacia arriba
	cube.rotation.x += 0.01;
    //si el cubo se mueve hacia los lados
	cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    //se renderiza la escena
	renderer.render( scene, camera );

}