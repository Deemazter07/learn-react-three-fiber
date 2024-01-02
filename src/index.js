import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Particles from "./Particles";
import { Perf } from "r3f-perf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Canvas
      camera={{
        fov: 45,
        near: 0.01,
        far: 1000,
      }}
    >
      <Perf />
      <Scene />
    </Canvas>
  </>
);
