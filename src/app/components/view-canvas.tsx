"use client";

import {
  Environment,
  Float,
  OrbitControls,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SodaCan } from "./soda-can";

const ViewCanvas = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      camera={{
        fov: 30,
      }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <Float
        speed={1}
        rotationIntensity={2}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        <SodaCan />
      </Float>
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </Canvas>
  );
};

export default ViewCanvas;
