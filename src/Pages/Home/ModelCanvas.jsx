import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const Model = () => {
  const gltf = useGLTF("/Robot.glb");
  const robotRef = useRef();
  const targetEmpty = useRef();
  const rotatingEdges = useRef();
  const mousePosition = useRef(new THREE.Vector2(0, 0));
  const { size } = useThree();

  // Debug log once
  useEffect(() => {
    if (gltf?.scene) {
      console.log("GLB Scene Graph:");
      gltf.scene.traverse((child) => console.log(child.name));
      targetEmpty.current = gltf.scene.getObjectByName("Empty");
      rotatingEdges.current = gltf.scene.getObjectByName("CubeEdges");
    }
  }, [gltf]);

  // Global mouse listener
  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current.x = (event.clientX / size.width) * 2 - 1;
      mousePosition.current.y = -(event.clientY / size.height) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  // Animations
  useFrame(() => {
    if (robotRef.current) {
      robotRef.current.rotation.y = mousePosition.current.x * 0.5;
      robotRef.current.rotation.x = -mousePosition.current.y * 0.3;
    }
    if (targetEmpty.current) {
      const targetPos = new THREE.Vector3(
        mousePosition.current.x * 2,
        mousePosition.current.y * 2,
        0
      );
      targetEmpty.current.position.lerp(targetPos, 0.1);
    }
    if (rotatingEdges.current) {
      rotatingEdges.current.rotation.y += 0.003;
      rotatingEdges.current.rotation.x += 0.002;
    }
  });

  return (
    <primitive
      ref={robotRef}
      object={gltf.scene}
      scale={1.3} // ✅ increased size
      position={[0, -0.2, 0]}
    />
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "transparent",
        pointerEvents: "none",
        zIndex: 0, // ✅ behind text & buttons
        mixBlendMode: "lighten", // ✅ blend with gradient
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* Model */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>

      {/* Glow */}
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default ModelCanvas;
