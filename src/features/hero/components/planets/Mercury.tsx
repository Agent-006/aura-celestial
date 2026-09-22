'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

let cachedMercuryTex: THREE.CanvasTexture | null = null;

function getMercuryTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedMercuryTex) return cachedMercuryTex;

    const c = document.createElement('canvas');
    c.width = 1024; c.height = 512;
    const ctx = c.getContext('2d')!;

    ctx.fillStyle = '#686b73';
    ctx.fillRect(0, 0, 1024, 512);

    // Ancient cratered maria plains & impact rays
    for (let i = 0; i < 350; i++) {
        const cx = Math.random() * 1024, cy = Math.random() * 512, cr = Math.random() * 22 + 4;
        ctx.fillStyle = Math.random() > 0.4 ? 'rgba(45, 48, 54, 0.45)' : 'rgba(160, 164, 175, 0.35)';
        ctx.beginPath();
        ctx.arc(cx, cy, cr, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(215, 220, 230, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    cachedMercuryTex = new THREE.CanvasTexture(c);
    return cachedMercuryTex;
}

export function Mercury({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const tex = getMercuryTexture();

    useFrame(() => {
        if (meshRef.current) meshRef.current.rotation.y += 0.0018;
    });

    return (
        <group position={position}>
            {tex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[3.2, 48, 48]} />
                    <meshStandardMaterial map={tex} roughness={0.65} metalness={0.1} />
                </mesh>
            )}
        </group>
    );
}
