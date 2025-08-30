import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const Model = () => {
  const gltf = useGLTF("/Robot.glb");
  const robotRef = useRef();
  const eyesRef = useRef([]);
  const edgesRef = useRef(); // ✅ edges container
  const mousePosition = useRef(new THREE.Vector2(0, 0));
  const { size, camera } = useThree();

  // Debug + find eyes and edges + apply colors
  useEffect(() => {
    if (gltf?.scene) {
      console.log("GLB Scene Graph:");
      gltf.scene.traverse((child) => {
        console.log(child.name);

        if (child.isMesh) {
          child.material = child.material.clone(); // prevent shared material edits
        }

        // Body (Mesh005, Mesh005_1)
        if (
          child.isMesh &&
          (child.name === "Mesh005" || child.name === "Mesh005_1")
        ) {
          child.material.color = new THREE.Color("#1565C0"); // deep bluish
        }

        // Eyes (EyeBall, eyes)
        if (
          child.isMesh &&
          (child.name === "EyeBall" || child.name === "eyes")
        ) {
          child.material.color = new THREE.Color("#ffffff"); // white base
          child.material.emissive = new THREE.Color("#00eaff"); // cyan glow
          child.material.emissiveIntensity = 1.5;
        }

        // Halo (jail)
        if (child.isMesh && child.name === "jail") {
          child.material.color = new THREE.Color("#9333ea"); // purple neon
          child.material.emissive = new THREE.Color("#3b82f6"); // blue glow
          child.material.emissiveIntensity = 3.0;
        }
      });

      // collect possible eyes
      const candidates = ["EyeBall", "eyes"];
      eyesRef.current = candidates
        .map((name) => gltf.scene.getObjectByName(name))
        .filter(Boolean);

      // halo edges
      edgesRef.current = gltf.scene.getObjectByName("jail");
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
    // make only eyes follow cursor
    if (eyesRef.current.length > 0) {
      const vector = new THREE.Vector3(
        mousePosition.current.x * 28,
        mousePosition.current.y * 28,
        0.5
      );
      vector.unproject(camera);
      eyesRef.current.forEach((eye) => {
        eye.lookAt(vector);
      });
    }

    // ✅ rotate edges in a smooth flat spin (halo effect)
    if (edgesRef.current) {
      edgesRef.current.rotation.y += 0.03;
    }
  });

  return (
    <primitive
      ref={robotRef}
      object={gltf.scene}
      scale={1.2}
      position={[1.5, 0, 0]}
    />
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
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
