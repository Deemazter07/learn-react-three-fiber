import { OrbitControls } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Particles from "./Particles";
import Model from "./Model";
import Bike from "./Bike";

extend({ OrbitControls });

function Scene() {
  const boxRef = useRef();
  const planeRef = useRef();

  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    // boxRef.current.rotation.y += delta;
    // planeRef.current.rotation.y += delta;
  });

  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={2} />

      {/* Directional Light */}
      <directionalLight />

      {/* Manual orbit control */}
      {/* <orbitControls args={[camera, gl.domElement]} /> */}

      {/* Orbit control with three drei */}
      <OrbitControls />

      {/* default mesh */}
      {/* <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color="orange" side={DoubleSide} />
      </mesh>
      <mesh ref={boxRef} position-x={2}>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh> */}

      {/* particles */}
      {/* <Particles /> */}

      {/* 3D Model */}
      <Model />
      {/* GLTF JSX */}
      {/* <Bike position={[-0.5, 0.75, 0]} /> */}
    </>
  );
}

export default Scene;
