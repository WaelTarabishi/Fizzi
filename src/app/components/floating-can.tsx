"use client";
import { Float } from "@react-three/drei";
import { SodaCan } from "./soda-can";
import { forwardRef } from "react";
import { Group } from "three";

type FloatingCanProps = {};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (props: FloatingCanProps) => {
    return (
      <group>
        <Float
          speed={1}
          rotationIntensity={2}
          floatIntensity={1}
          floatingRange={[-0.1, 0.1]}
        >
          <SodaCan />
        </Float>
      </group>
    );
  },
);
FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
