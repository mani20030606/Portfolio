'use client';

import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { particleVertexShader, particleFragmentShader } from './shaders/particleShaders';

interface LemniscateParticlesProps {
  particleCount?: number;
}

export function LemniscateParticles({ particleCount = 18000 }: LemniscateParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  const { positions, progress, scales, randoms, velocities } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const prog = new Float32Array(particleCount);
    const sc = new Float32Array(particleCount);
    const rand = new Float32Array(particleCount);
    const vel = new Float32Array(particleCount * 3);

    const a = 4.2; // scale factor of the lemniscate

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Parametric progress t in [0, 2*PI]
      const t = Math.random() * Math.PI * 2;
      const progressVal = t / (Math.PI * 2);
      prog[i] = progressVal;

      // Lemniscate of Bernoulli
      const denom = Math.sin(t) * Math.sin(t) + 1;
      const x0 = (a * Math.SQRT2 * Math.cos(t)) / denom;
      const y0 = (a * Math.SQRT2 * Math.cos(t) * Math.sin(t)) / denom;
      // Slight Z wave for elegant 3D twist
      const z0 = Math.sin(t * 2) * 0.75;

      // Particle layering: 65% dense core, 25% orbital trails, 10% ambient dust
      const layerRand = Math.random();
      let spread = 0.12;
      if (layerRand > 0.65 && layerRand <= 0.9) {
        spread = 0.45;
      } else if (layerRand > 0.9) {
        spread = 1.2;
      }

      const offsetX = (Math.random() - 0.5) * spread;
      const offsetY = (Math.random() - 0.5) * spread;
      const offsetZ = (Math.random() - 0.5) * spread;

      pos[i3] = x0 + offsetX;
      pos[i3 + 1] = y0 + offsetY;
      pos[i3 + 2] = z0 + offsetZ;

      // Velocity direction along curve tangent for rhythmic shader breathing
      vel[i3] = -Math.sin(t);
      vel[i3 + 1] = Math.cos(t);
      vel[i3 + 2] = Math.cos(t * 2);

      sc[i] = Math.random() * 0.7 + 0.3;
      rand[i] = Math.random();
    }

    return {
      positions: pos,
      progress: prog,
      scales: sc,
      randoms: rand,
      velocities: vel,
    };
  }, [particleCount]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1 },
      uSize: { value: 12.0 },
    }),
    []
  );

  useFrame((state) => {
    if (!materialRef.current || !pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    materialRef.current.uniforms.uTime.value = time;

    // Slow, stately rotation around Y axis with subtle roll
    pointsRef.current.rotation.y = time * 0.08;
    pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.12;

    // Gentle mouse parallax interpolation
    const targetX = (state.pointer.x * 0.3);
    const targetY = (state.pointer.y * 0.2);
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.05;
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aProgress"
          args={[progress, 1]}
        />
        <bufferAttribute
          attach="attributes-aScale"
          args={[scales, 1]}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          args={[randoms, 1]}
        />
        <bufferAttribute
          attach="attributes-aVelocity"
          args={[velocities, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

