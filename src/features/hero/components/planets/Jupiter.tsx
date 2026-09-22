'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

let cachedJupiterTex: THREE.CanvasTexture | null = null;

function getJupiterTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedJupiterTex) return cachedJupiterTex;

    const c = document.createElement('canvas');
    c.width = 2048; c.height = 1024;
    const ctx = c.getContext('2d')!;

    ctx.fillStyle = '#b0774a';
    ctx.fillRect(0, 0, 2048, 1024);

    // Distinct latitudinal belts & zones (North/South Equatorial & Temperate Belts)
    const bands = [
        '#f0e5d8', '#804c26', '#c9a17b', '#4e280d', '#f6ece1',
        '#8c5831', '#d4af88', '#5b3216', '#eedfd0', '#9c663f',
        '#663717', '#e7d6c3', '#794723', '#ba9370', '#4a250b'
    ];
    const bandHeight = 1024 / bands.length;
    for (let i = 0; i < bands.length; i++) {
        ctx.fillStyle = bands[i];
        ctx.fillRect(0, i * bandHeight, 2048, bandHeight);
    }

    // Sinusoidal boundary shearing and fluid turbulence between belts
    for (let y = 0; y < 1024; y += 6) {
        const offset = Math.sin(y * 0.04) * 24 + Math.cos(y * 0.015) * 16;
        ctx.fillStyle = (y % 12 === 0) ? 'rgba(255, 250, 240, 0.18)' : 'rgba(40, 18, 6, 0.14)';
        ctx.beginPath();
        ctx.ellipse((y * 3 + offset) % 2048, y, 140, 5, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    // Fine festoons & white oval storm plumes
    ctx.fillStyle = 'rgba(255, 255, 255, 0.38)';
    for (let i = 0; i < 65; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 2048, Math.random() * 600 + 200, Math.random() * 32 + 8, Math.random() * 12 + 4, Math.random() * 0.3, 0, Math.PI * 2);
        ctx.fill();
    }

    cachedJupiterTex = new THREE.CanvasTexture(c);
    return cachedJupiterTex;
}

export function Jupiter({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const tex = getJupiterTexture();

    useFrame(() => {
        if (meshRef.current) meshRef.current.rotation.y += 0.0048;
    });

    return (
        <group position={position}>
            {tex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[18.0, 48, 48]} />
                    {/* Notice Gas Giants are slightly smoother (0.52 roughness) */}
                    <meshStandardMaterial map={tex} roughness={0.52} metalness={0.1} />
                </mesh>
            )}
        </group>
    );
}
