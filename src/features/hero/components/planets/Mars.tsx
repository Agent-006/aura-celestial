'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

let cachedMarsTex: THREE.CanvasTexture | null = null;

function getMarsTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedMarsTex) return cachedMarsTex;

    const c = document.createElement('canvas');
    c.width = 1024; c.height = 512;
    const ctx = c.getContext('2d')!;

    // Iron oxide rust desert
    ctx.fillStyle = '#b74324';
    ctx.fillRect(0, 0, 1024, 512);

    // Dark volcanic basalt patches (Syrtis Major & Acidalia Planitia)
    ctx.fillStyle = '#612111';
    for (let i = 0; i < 45; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 1024, Math.random() * 512, Math.random() * 75 + 20, Math.random() * 35 + 10, Math.random(), 0, Math.PI * 2);
        ctx.fill();
    }

    // Bright polar ice cap
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(512, 14, 28, 0, Math.PI * 2);
    ctx.fill();

    cachedMarsTex = new THREE.CanvasTexture(c);
    return cachedMarsTex;
}

export function Mars({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const phobosRef = useRef<THREE.Mesh>(null);
    const deimosRef = useRef<THREE.Mesh>(null);
    const tex = getMarsTexture();

    useFrame((state) => {
        if (meshRef.current) meshRef.current.rotation.y += 0.0032;
        const t = state.clock.getElapsedTime();
        if (phobosRef.current) {
            phobosRef.current.position.set(Math.cos(t * 2.5) * 7.5, 0.3, Math.sin(t * 2.5) * 7.5);
        }
        if (deimosRef.current) {
            deimosRef.current.position.set(Math.cos(t * 1.2) * 10, -0.2, Math.sin(t * 1.2) * 10);
        }
    });

    return (
        <group position={position}>
            {tex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[4.4, 48, 48]} />
                    <meshStandardMaterial map={tex} roughness={0.65} metalness={0.1} />
                </mesh>
            )}
            {/* Phobos */}
            <mesh ref={phobosRef}>
                <icosahedronGeometry args={[0.55, 0]} />
                <meshStandardMaterial color="#8a7d6b" roughness={0.9} flatShading />
            </mesh>
            {/* Deimos */}
            <mesh ref={deimosRef}>
                <icosahedronGeometry args={[0.35, 0]} />
                <meshStandardMaterial color="#9a8e7e" roughness={0.9} flatShading />
            </mesh>
        </group>
    );
}
