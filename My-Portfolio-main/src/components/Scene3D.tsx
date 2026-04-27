import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function FloatingShapes() {
  const torusRef = useRef<Mesh>(null);
  const icoRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.3;
    }
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.15;
      icoRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <Sphere args={[1.1, 64, 64]} position={[2.4, 0.4, 0]}>
          <MeshDistortMaterial
            color="#22d3ee"
            attach="material"
            distort={0.45}
            speed={1.6}
            roughness={0.15}
            metalness={0.85}
          />
        </Sphere>
      </Float>

      <Float speed={1.1} rotationIntensity={0.8} floatIntensity={1.6}>
        <Torus ref={torusRef} args={[0.85, 0.28, 32, 100]} position={[-2.6, -0.3, -0.5]}>
          <meshStandardMaterial color="#d946ef" roughness={0.2} metalness={0.9} emissive="#7e22ce" emissiveIntensity={0.4} />
        </Torus>
      </Float>

      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1}>
        <Icosahedron ref={icoRef} args={[0.55, 0]} position={[0, 1.8, -1]}>
          <meshStandardMaterial color="#a78bfa" roughness={0.1} metalness={1} emissive="#6d28d9" emissiveIntensity={0.3} wireframe />
        </Icosahedron>
      </Float>
    </>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#d946ef" />
        <Suspense fallback={null}>
          <FloatingShapes />
        </Suspense>
      </Canvas>
    </div>
  );
}
