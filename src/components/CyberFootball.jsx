import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, PointMaterial, Stars, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const FootballMesh = () => {
  const ref = useRef();
  
  // Generate particles along a sphere shell to surround the football
  const [positions] = useMemo(() => {
    const count = 2000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 2.45; // slightly larger than the wireframe sphere
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const timeRotation = state.clock.getElapsedTime() * 0.08;
      const scrollRotation = window.scrollY * 0.003;
      
      // Rotate the football group
      ref.current.rotation.y = timeRotation + scrollRotation;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.15 + (window.scrollY * 0.001);
      
      // Slight mouse interaction for parallax feeling
      const targetX = (state.mouse.x * Math.PI) / 8;
      const targetY = (state.mouse.y * Math.PI) / 8;
      
      ref.current.rotation.x += 0.05 * (targetY - ref.current.rotation.x);
      ref.current.rotation.y += 0.05 * (targetX - ref.current.rotation.y);
    }
  });

  return (
    <group ref={ref}>
      {/* 1. Outer Particle cloud representing digital aura */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#00FF87"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.65}
        />
      </points>
      
      {/* 2. Inner solid sphere to block stars behind and give density */}
      <Sphere args={[2.3, 32, 32]}>
        <meshBasicMaterial color="#060913" transparent opacity={0.85} />
      </Sphere>
      
      {/* 3. The Football Wireframe: Icosahedron creates pentagonal/hexagonal grid pattern */}
      <Icosahedron args={[2.35, 1]}>
        <meshBasicMaterial color="#00FF87" wireframe transparent opacity={0.3} />
      </Icosahedron>

      {/* 4. Second slightly rotated offset wireframe to make it look complex/digital */}
      <Icosahedron args={[2.36, 2]} rotation={[0.5, 0.5, 0.5]}>
        <meshBasicMaterial color="#00d2ff" wireframe transparent opacity={0.15} />
      </Icosahedron>

      {/* 5. Glowing vertex points at intersections of the icosahedron */}
      <Icosahedron args={[2.37, 1]}>
        <meshBasicMaterial color="#FFD700" wireframe transparent opacity={0.08} />
      </Icosahedron>
    </group>
  );
};

export default function CyberFootball() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5.5], fov: 60 }}>
        <color attach="background" args={['#060913']} />
        <ambientLight intensity={0.6} />
        {/* Futuristic starfield */}
        <Stars radius={120} depth={40} count={3500} factor={4} saturation={0.5} fade speed={1.2} />
        <FootballMesh />
      </Canvas>
    </div>
  );
}
