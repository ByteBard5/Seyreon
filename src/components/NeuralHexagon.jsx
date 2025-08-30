import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const HexagonBlob = () => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  // animate the shape
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.3;
    const position = mesh.current.geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const ix = i * 3;
      const offset = Math.sin(t + i * 0.1) * 0.05;
      position.array[ix] += offset * 0.05;
      position.array[ix + 1] += offset * 0.05;
      position.array[ix + 2] += offset * 0.05;
    }
    position.needsUpdate = true;
  });

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1, 4]} />
      <meshStandardMaterial
        color={hovered ? "#a855f7" : "#6366f1"}
        emissive={hovered ? "#a855f7" : "#000000"}
        roughness={0.3}
        metalness={0.5}
        wireframe
      />
    </mesh>
  );
};

const NeuralHexagon = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <HexagonBlob />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default NeuralHexagon;
