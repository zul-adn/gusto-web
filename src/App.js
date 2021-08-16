import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";

import { TextureLoader } from 'three/src/loaders/TextureLoader'

import "./css/styles.css";
import "./css/styles2.css";

function Cylinder() {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    'https://i.gifer.com/ycY.gif',
    'https://37.media.tumblr.com/f174f6ccfa4ed07692ab38c7a31d5864/tumblr_n69cl3N9Sv1roeqdqo1_500.gif'
  ])
  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    >
      <cylinderBufferGeometry attach="geometry" args={[3, 3, 2, 100]} />
      <meshBasicMaterial
        displacementScale={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

export default function App() {
  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div>
            <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder-1.png" className="logo" />
          </div>
          <div>
            <ul className="list">
              <li><a>Home</a></li>
              <li><a>Project</a></li>
              <li><a>Portofolio</a></li>
              <li><a>Abous Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
  
      <Canvas
        pixelRatio={window.devicePixelRatio}
        camera={{
          position: [3, 0, 3.8]
        }}
        style={{ position: "absolute" }}
        >
        <Suspense fallback={null}>
          <Physics>
            <Cylinder />
          </Physics>
          <OrbitControls />
        </Suspense>
      </Canvas>

      <div class="footer-wrapper">
        <div class="footer">
          <div class="page">
            <span id="page-number"></span>
          </div>
          <div class="footer-desc">

          </div>
        </div>
      </div>
    </>
  );
}