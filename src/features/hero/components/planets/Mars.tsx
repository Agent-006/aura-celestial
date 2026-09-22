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
    const tex = getMarsTexture();

    useFrame(() => {
        if (meshRef.current) meshRef.current.rotation.y += 0.0032;
    });

    return (
        <group position={position}>
            {tex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[4.4, 48, 48]} />
                    <meshStandardMaterial map={tex} roughness={0.65} metalness={0.1} />
                </mesh>
            )}
        </group>
    );
}
