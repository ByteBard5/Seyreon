// src/components/ModelViewer.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/cube.glb");
  return <primitive object={gltf.scene} scale={2.5} />;
}

const ModelViewer = () => {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
