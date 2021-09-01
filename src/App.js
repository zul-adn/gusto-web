import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";

import { TextureLoader } from 'three/src/loaders/TextureLoader'

import "./css/styles.css";
import "./css/styles2.css";

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

      <model-viewer
        style={{ height: '100vh', width: '100vw' }}
        src="https://dinartech.com/ar/cylinder.glb"
        alt="A 3D model of an astronaut"
        ar
        ar-modes="webxr scene-viewer quick-look"
        // environment-image="neutral"
        max-field-of-view="-160deg"
        min-field-of-view="5deg"
        max-camera-orbit="Infinity 89deg auto"
        min-camera-orbit="-Infinity 85deg auto"
        camera-controls>
      </model-viewer>

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