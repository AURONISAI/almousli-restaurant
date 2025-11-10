'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function IngredientSphere({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

function Ingredients() {
  return (
    <>
      {/* Garlic - cream */}
      <IngredientSphere position={[-3, 2, -2]} color="#F5EFE6" scale={0.8} />
      
      {/* Lemon - gold */}
      <IngredientSphere position={[3, -1, -1]} color="#D2A85B" scale={1.2} />
      
      {/* Parsley - leaf green */}
      <IngredientSphere position={[-2, -2, 0]} color="#3D7F64" scale={0.9} />
      
      {/* Sesame - cream */}
      <IngredientSphere position={[2, 2, 1]} color="#F5EFE6" scale={0.6} />
      
      {/* Chili - spice red */}
      <IngredientSphere position={[0, 0, -3]} color="#B23A2E" scale={1.0} />

      {/* Additional ambient spheres */}
      <IngredientSphere position={[-1, 3, 1]} color="#D2A85B" scale={0.5} />
      <IngredientSphere position={[1, -3, 2]} color="#3D7F64" scale={0.7} />
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#D2A85B" />
      
      <Ingredients />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
