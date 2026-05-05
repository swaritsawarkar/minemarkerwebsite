"use client";

import { Float, Line, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function TimelineRails() {
  const points = useMemo(
    () => [
      new THREE.Vector3(-4.8, -1.1, 0),
      new THREE.Vector3(-2.6, -0.65, -0.2),
      new THREE.Vector3(-0.4, -0.18, -0.45),
      new THREE.Vector3(1.8, 0.04, -0.2),
      new THREE.Vector3(4.8, 0.34, 0.08),
    ],
    [],
  );

  return (
    <group>
      <Line points={points} color="#52ffaa" lineWidth={2.6} transparent opacity={0.9} />
      <Line
        points={points.map((point) => point.clone().add(new THREE.Vector3(0, -0.2, -0.35)))}
        color="#54d8ff"
        lineWidth={1.3}
        transparent
        opacity={0.44}
      />
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <boxGeometry args={[0.12, index % 2 ? 0.44 : 0.7, 0.12]} />
          <meshStandardMaterial
            color={index % 2 ? "#52ffaa" : "#56dfff"}
            emissive={index % 2 ? "#0f8f4e" : "#116c81"}
            emissiveIntensity={1.6}
            roughness={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function OreCluster() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.18 + pointer.x * 0.2;
    group.current.rotation.x = -0.18 + pointer.y * 0.08;
  });

  const cubes = [
    [-0.6, 0.2, 0.2, "#1b251f"],
    [0, 0.2, 0, "#273229"],
    [0.6, 0.2, -0.1, "#151d18"],
    [-0.3, -0.4, 0.1, "#202b24"],
    [0.3, -0.4, -0.2, "#172019"],
    [0, 0.85, -0.3, "#121a15"],
  ] as const;

  return (
    <Float floatIntensity={0.5} rotationIntensity={0.2} speed={1.2}>
      <group ref={group} position={[1.18, 0.26, -0.28]} rotation={[-0.14, -0.64, 0]}>
        {cubes.map(([x, y, z, color], index) => (
          <mesh key={index} position={[x, y, z]}>
            <boxGeometry args={[0.78, 0.78, 0.78]} />
            <meshStandardMaterial color={color} roughness={0.74} metalness={0.08} />
          </mesh>
        ))}

        {[
          [-0.6, 0.24, 0.6],
          [0.02, 0.25, 0.42],
          [0.58, 0.22, 0.32],
          [-0.28, -0.36, 0.5],
          [0.3, -0.38, 0.28],
        ].map((position, index) => (
          <mesh key={`ore-${index}`} position={position as [number, number, number]}>
            <boxGeometry args={[0.24, 0.24, 0.045]} />
            <meshStandardMaterial
              color="#61fff1"
              emissive="#19d6c8"
              emissiveIntensity={2.2}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function FloatingPanels() {
  return (
    <group position={[-1.1, 0.14, 0.12]} rotation={[0.04, 0.24, -0.02]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.15, 1.8, 0.06]} />
        <meshStandardMaterial
          color="#0a1110"
          emissive="#0b2318"
          emissiveIntensity={0.6}
          roughness={0.38}
          metalness={0.28}
          transparent
          opacity={0.88}
        />
      </mesh>
      {[-0.55, -0.15, 0.25, 0.65].map((y, index) => (
        <mesh key={y} position={[0, y, 0.05]}>
          <boxGeometry args={[2.55 - index * 0.18, 0.045, 0.03]} />
          <meshStandardMaterial
            color={index === 1 ? "#52ffaa" : "#335448"}
            emissive={index === 1 ? "#14804c" : "#11251f"}
            emissiveIntensity={index === 1 ? 1.1 : 0.35}
          />
        </mesh>
      ))}
      <mesh position={[-1.3, 0.75, 0.07]}>
        <boxGeometry args={[0.22, 0.22, 0.04]} />
        <meshStandardMaterial color="#52ffaa" emissive="#168a51" emissiveIntensity={1.4} />
      </mesh>
    </group>
  );
}

function SceneContents() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.3, 6.2]} fov={44} />
      <ambientLight intensity={0.72} />
      <directionalLight position={[4, 4, 4]} intensity={1.3} color="#ddffe8" />
      <pointLight position={[-3.5, -1.6, 2.5]} intensity={4.8} color="#52ffaa" />
      <pointLight position={[2.5, 1.8, 2]} intensity={2.2} color="#5ce6ff" />
      <pointLight position={[-1.6, 2.2, -2]} intensity={2.2} color="#ffba65" />

      <group position={[0, -0.15, 0]}>
        <FloatingPanels />
        <OreCluster />
        <TimelineRails />
        <Sparkles
          count={75}
          scale={[7, 3.8, 3]}
          size={2}
          speed={0.25}
          opacity={0.38}
          color="#73ffd0"
        />
      </group>
    </>
  );
}

export function VoxelScene() {
  return (
    <div className="absolute inset-0">
      <Canvas dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <SceneContents />
      </Canvas>
    </div>
  );
}
