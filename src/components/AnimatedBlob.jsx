// src/components/AnimatedBlob.jsx

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const AnimatedBlob = () => {
  const mountRef = useRef();
  const frameIdRef = useRef();

  useEffect(() => {
    let width = 300;
    let height = 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    const currentMount = mountRef.current;
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(0.8, 5);
    const material = new THREE.PointsMaterial({
      size: 0.01,
      color: "#ffffff",
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      points.rotation.y += 0.005;
      points.rotation.x += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // 🧼 Clean up
      cancelAnimationFrame(frameIdRef.current);
      renderer.dispose();
      geometry.dispose();
      material.dispose();

      while (currentMount.firstChild) {
        currentMount.removeChild(currentMount.firstChild);
      }
    };
  }, []);

  return (
    <div
      className="w-[300px] h-[300px] mx-auto hover:scale-105 transition-transform duration-300"
      ref={mountRef}
    />
  );
};

export default AnimatedBlob;
