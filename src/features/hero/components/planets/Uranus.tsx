'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

let cachedUranusTex: THREE.CanvasTexture | null = null;

function getUranusTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedUranusTex) return cachedUranusTex;

    const c = document.createElement('canvas');
    c.width = 1024; c.height = 512;
    const ctx = c.getContext('2d')!;

    ctx.fillStyle = '#67e8f9';
    ctx.fillRect(0, 0, 1024, 512);

    for (let y = 0; y < 512; y += 4) {
        ctx.fillStyle = Math.sin(y * 0.05) > 0 ? 'rgba(165, 243, 252, 0.3)' : 'rgba(34, 211, 238, 0.2)';
        ctx.fillRect(0, y, 1024, 3);
    }

    cachedUranusTex = new THREE.CanvasTexture(c);
    return cachedUranusTex;
}

export function Uranus({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const tex = getUranusTexture();

    useFrame(() => {
        // Uranus rolls on its side! Negative spin.
        if (meshRef.current) meshRef.current.rotation.y += -0.0028;
    });

    return (
        <group position={position}>
            {tex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[8.2, 48, 48]} />
                    <meshStandardMaterial map={tex} roughness={0.65} metalness={0.1} />
                </mesh>
            )}
        </group>
    );
}
