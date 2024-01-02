import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Particles() {
  const particleRef = useRef();
  useFrame((_, delta) => {
    particleRef.current.position.y += delta * 0.1;
    particleRef.current.position.x += delta * 0.1;
  });

  const texture = useLoader(THREE.TextureLoader, "./img/snow.jpg");

  const verticesAmount = 2000;
  const positionArray = new Float32Array(verticesAmount * 3);

  for (let i = 0; i < verticesAmount * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10.0;
  }

  return (
    <points ref={particleRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionArray.length / 3}
          itemSize={3}
          array={positionArray}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        alphaMap={texture}
        transparent
        depthTest={false}
      />
    </points>
  );
}

export default Particles;
