import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron, Stars } from '@react-three/drei';

const FloatingCore = () => {
  const meshRef = useRef();
  const torusRef = useRef();
  const torusRef2 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.5;
      torusRef.current.rotation.y = t * 0.3;
    }
    if (torusRef2.current) {
      torusRef2.current.rotation.x = -t * 0.3;
      torusRef2.current.rotation.z = t * 0.4;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.35} floatIntensity={1.1}>
      <Sphere ref={meshRef} args={[0.95, 40, 40]}>
        <MeshDistortMaterial
          color="#3B82F6"
          distort={0.22}
          speed={1.3}
          roughness={0.15}
          metalness={0.55}
          transparent
          opacity={0.85}
        />
      </Sphere>

      <Torus
        ref={torusRef}
        args={[1.45, 0.02, 16, 60]}
        rotation={[Math.PI / 3, 0, 0]}
      >
        <meshStandardMaterial
          color="#8B5CF6"
          roughness={0.2}
          metalness={0.7}
          transparent
          opacity={0.55}
        />
      </Torus>

      <Torus
        ref={torusRef2}
        args={[1.85, 0.015, 12, 50]}
        rotation={[Math.PI / 5, Math.PI / 4, 0]}
      >
        <meshStandardMaterial
          color="#60A5FA"
          roughness={0.2}
          metalness={0.65}
          transparent
          opacity={0.4}
        />
      </Torus>
    </Float>
  );
};

const FloatingIcosahedron = ({ position, scale, speed }) => {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * speed;
      ref.current.rotation.y = t * speed * 0.7;
      ref.current.position.y = position[1] + Math.sin(t * 0.8 + position[0]) * 0.3;
    }
  });

  return (
    <Icosahedron ref={ref} position={position} args={[scale, 0]}>
      <meshStandardMaterial
        color="#8B5CF6"
        wireframe
        transparent
        opacity={0.3}
      />
    </Icosahedron>
  );
};

const ParticleField = () => {
  const count = 48;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#3B82F6"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.25]}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 4, 5]} intensity={0.85} color="#3B82F6" />
      <directionalLight position={[-4, -2, -4]} intensity={0.35} color="#8B5CF6" />
      <pointLight position={[0, 0, 3]} intensity={1.2} color="#3B82F6" distance={6} />

      <Stars radius={50} depth={28} count={250} factor={2} fade speed={0.4} />

      <FloatingCore />

      <FloatingIcosahedron position={[-3.5, 1.5, -1]} scale={0.25} speed={0.6} />
      <FloatingIcosahedron position={[3.2, -1.2, -0.5]} scale={0.2} speed={0.4} />
      <FloatingIcosahedron position={[-2.5, -1.8, 0.5]} scale={0.15} speed={0.8} />
      <FloatingIcosahedron position={[2.8, 2.0, -1]} scale={0.18} speed={0.5} />

      <ParticleField />
    </Canvas>
  );
};

export default HeroScene;
