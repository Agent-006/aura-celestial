'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

let cachedVenusTex: THREE.CanvasTexture | null = null;

function getVenusTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedVenusTex) return cachedVenusTex;

    const c = document.createElement('canvas');
    c.width = 1024; c.height = 512;
    const ctx = c.getContext('2d')!;

    ctx.fillStyle = '#d4a877';
    ctx.fillRect(0, 0, 1024, 512);

    // Dense swirling sulfuric acid cloud bands & atmospheric shearing
    for (let y = 0; y < 512; y += 4) {
        ctx.fillStyle = Math.sin(y * 0.08) > 0 ? 'rgba(247, 228, 198, 0.35)' : 'rgba(184, 131, 80, 0.35)';
        ctx.fillRect(0, y, 1024, 3);
    }
    for (let i = 0; i < 90; i++) {
        ctx.fillStyle = 'rgba(255, 242, 218, 0.2)';
        ctx.beginPath();
        ctx.ellipse(Math.random() * 1024, Math.random() * 512, Math.random() * 140 + 30, Math.random() * 16 + 4, 0.35, 0, Math.PI * 2);
        ctx.fill();
    }

    cachedVenusTex = new THREE.CanvasTexture(c);
    return cachedVenusTex;
}

export function Venus({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const tex = getVenusTexture();

    useFrame(() => {
        // Venus spins backwards (retrograde)! Notice the negative spin.
        if (meshRef.current) meshRef.current.rotation.y += -0.0014;
    });

    return (
        <group position={position}>
            {tex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[5.6, 48, 48]} />
                    <meshStandardMaterial map={tex} roughness={0.65} metalness={0.1} />
                </mesh>
            )}
        </group>
    );
}
