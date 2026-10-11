'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

let cachedNeptuneTex: THREE.CanvasTexture | null = null;

function getNeptuneTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedNeptuneTex) return cachedNeptuneTex;

    const c = document.createElement('canvas');
    c.width = 1024; c.height = 512;
    const ctx = c.getContext('2d')!;

    ctx.fillStyle = '#2563eb';
    ctx.fillRect(0, 0, 1024, 512);

    // Dynamic white methane cirrus cloud streaks & Great Dark Spot
    for (let y = 0; y < 512; y += 8) {
        ctx.fillStyle = 'rgba(59, 130, 246, 0.35)';
        ctx.fillRect(0, y, 1024, 4);
    }
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 1024, Math.random() * 512, Math.random() * 90 + 20, Math.random() * 8 + 2, 0.15, 0, Math.PI * 2);
        ctx.fill();
    }

    cachedNeptuneTex = new THREE.CanvasTexture(c);
    return cachedNeptuneTex;
}

export function Neptune({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const tritonRef = useRef<THREE.Mesh>(null);
    const tex = getNeptuneTexture();

    useFrame((state) => {
        if (meshRef.current) meshRef.current.rotation.y += 0.0026;
        const t = state.clock.getElapsedTime();
        if (tritonRef.current) {
            // Triton has a retrograde orbit
            tritonRef.current.position.set(
                Math.cos(-t * 0.8) * 14,
                0.4,
                Math.sin(-t * 0.8) * 14
            );
        }
    });

    return (
        <group position={position}>
            {tex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[8.0, 48, 48]} />
                    <meshStandardMaterial map={tex} roughness={0.65} metalness={0.1} />
                </mesh>
            )}
            {/* Triton */}
            <mesh ref={tritonRef} position={[14, 0, 0]}>
                <sphereGeometry args={[1.1, 12, 12]} />
                <meshStandardMaterial color="#d4cfc4" roughness={0.75} />
            </mesh>
        </group>
    );
}
