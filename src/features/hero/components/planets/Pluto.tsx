'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

let cachedPlutoTex: THREE.CanvasTexture | null = null;

function getPlutoTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedPlutoTex) return cachedPlutoTex;

    const c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    const ctx = c.getContext('2d')!;

    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(0, 0, 512, 256);

    // Dark reddish-brown tholin terrain
    ctx.fillStyle = '#78350f';
    for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 512, Math.random() * 256, Math.random() * 50 + 15, Math.random() * 30 + 8, Math.random(), 0, Math.PI * 2);
        ctx.fill();
    }

    // Bright nitrogen ice heart (Tombaugh Regio)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(256, 130, 58, 42, 0.2, 0, Math.PI * 2);
    ctx.fill();

    cachedPlutoTex = new THREE.CanvasTexture(c);
    return cachedPlutoTex;
}

export function Pluto({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const charonRef = useRef<THREE.Mesh>(null);
    const tex = getPlutoTexture();

    useFrame((state) => {
        if (meshRef.current) meshRef.current.rotation.y += 0.0012;
        const t = state.clock.getElapsedTime();
        if (charonRef.current) {
            // Charon orbits very close (binary system)
            charonRef.current.position.set(
                Math.cos(t * 0.6) * 5,
                0.2,
                Math.sin(t * 0.6) * 5
            );
        }
    });

    return (
        <group position={position}>
            {tex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[2.2, 48, 48]} />
                    <meshStandardMaterial map={tex} roughness={0.65} metalness={0.1} />
                </mesh>
            )}
            {/* Charon */}
            <mesh ref={charonRef} position={[5, 0, 0]}>
                <sphereGeometry args={[1.2, 12, 12]} />
                <meshStandardMaterial color="#8a8278" roughness={0.8} />
            </mesh>
        </group>
    );
}
