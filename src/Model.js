import React, { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

function Model() {
  const glbModel = useGLTF("./model/dog.glb");
  const animations = useAnimations(glbModel.animations, glbModel.scene);
  console.log(`animations`, animations);

  useEffect(() => {
    animations.actions.Travel.play();
  }, []);
  return (
    <>
      <primitive object={glbModel.scene} />
    </>
  );
}

export default Model;
