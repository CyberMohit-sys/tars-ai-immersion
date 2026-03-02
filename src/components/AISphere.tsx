import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AISphereCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.8, 128, 128]}>
      <MeshDistortMaterial
        color="#3b82f6"
        emissive="#1d4ed8"
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.8}
        distort={0.3}
        speed={1.5}
        transparent
        opacity={0.85}
      />
    </Sphere>
  );
}

function ParticleRing() {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 1.5;
      const y = (Math.random() - 0.5) * 1.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#60a5fa" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function GlowRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.8, 0.01, 16, 100]} />
      <meshBasicMaterial color="#7c3aed" transparent opacity={0.5} />
    </mesh>
  );
}

export default function AISphere() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="#7c3aed" />
        <pointLight position={[0, 3, -5]} intensity={0.3} color="#06b6d4" />
        <AISphereCore />
        <ParticleRing />
        <GlowRing />
      </Canvas>
    </div>
  );
}
