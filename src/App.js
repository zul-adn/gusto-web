import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, Environment } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { useGLTF } from '@react-three/drei';

import { TextureLoader } from 'three/src/loaders/TextureLoader';

import Car from './3d/vw.glb';
import Bumpers from './3d/bumber1.glb';
import Bump2 from './3d/bump2glb.glb';
import Bump3 from './3d/bump3glb.glb';

import Img1 from './img/bump1.png';
import Img2 from './img/bump2.png';
import Img3 from './img/bump3.png';

import "./App.css";

const bumper = [
  {
    id: 1,
    scale: 1,
    position: [0, 0.18, 2],
    rotation: [0, 0, 0],
    name: "Bumper 1",
    link: Bumpers,
    img: Img1
  },
  {
    id: 2,
    scale: 0.14,
    position: [0, 0.18, 2.1],
    rotation: [0, 22, 0],
    name: "Bumper 2",
    link: Bump2,
    img: Img2
  },
  {
    id: 3,
    scale: 0.3,
    position: [0, 0.4, 2],
    rotation: [0, 22, 0],
    name: "Bumper 2",
    link: Bump3,
    img: Img3
  }
]


export default function App() {

  const [bumpChoose, setBumpChoose] = useState([])

  React.useEffect(() => {
    console.log(bumpChoose.id)
  }, [bumpChoose])

  const Model = () => {
    const gltf = useLoader(GLTFLoader, Car);
    return (
      <>
        <primitive object={gltf.scene} scale={1} />
      </>
    );
  };

  const Bumper = () => {
    const gltf = useLoader(GLTFLoader, Bumpers);
    return (
      <>
        {bumpChoose.length !== 0 ?
          <primitive object={gltf.scene} scale={bumpChoose.scale} position={bumpChoose.position} rotation={bumpChoose.rotation} />
          :
          <></>
        }
      </>
    );
  };

  const Bumper1 = () => {
    const gltf = useLoader(GLTFLoader, Bump2);
    return (
      <>
        {bumpChoose.length !== 0 ?
          <primitive object={gltf.scene} scale={bumper[1].scale} position={bumper[1].position} rotation={bumper[1].rotation} />
          :
          <></>
        }
      </>
    );
  };

  const Bumper2 = () => {
    const gltf = useLoader(GLTFLoader, Bump3);
    return (
      <>
        {bumpChoose.length !== 0 ?
          <primitive object={gltf.scene} scale={bumpChoose.scale} position={bumpChoose.position} rotation={bumpChoose.rotation} />
          :
          <></>
        }
      </>
    );
  };

  return (
    <div className="container">
      <div className="main">
        <Canvas>
          <Suspense fallback={null}>
            <Model />
            <Bumper />
            {bumpChoose.length !== 0 ?
              bumpChoose.id === 1 ? <Bumper /> :  bumpChoose.id === 2 ? <Bumper1 /> :  bumpChoose.id === 3 ? <Bumper2 /> : <></>
            :
            <></>
            }
            <OrbitControls />
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>
      </div>
      <div className="sidebar">
        {bumper.map((v, i) =>
          <div key={i} className="choose" onClick={() => setBumpChoose(v)}>
            <img src={v.img} />
          </div>
        )}
      </div>
    </div>
  );
}