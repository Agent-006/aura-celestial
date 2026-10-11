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
    const moonsRef = useRef<THREE.Group>(null);
    const tex = getUranusTexture();

    const moons = [
        { name: 'Titania', r: 14, size: 0.9, color: '#b8b0a0', speed: 1.0 },
        { name: 'Oberon', r: 16, size: 0.85, color: '#8a7d6b', speed: 0.7 },
        { name: 'Umbriel', r: 12, size: 0.7, color: '#6b6055', speed: 1.4 },
        { name: 'Ariel', r: 11, size: 0.75, color: '#c0b8a8', speed: 1.8 },
    ];

    useFrame((state) => {
        if (meshRef.current) meshRef.current.rotation.y += -0.0028;
        const t = state.clock.getElapsedTime();
        if (moonsRef.current) {
            moonsRef.current.children.forEach((moon, i) => {
                const m = moons[i];
                moon.position.set(
                    Math.cos(t * m.speed) * m.r,
                    (i % 2 === 0 ? 0.3 : -0.2),
                    Math.sin(t * m.speed) * m.r
                );
            });
        }
    });

    return (
        <group position={position}>
            {tex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[8.2, 48, 48]} />
                    <meshStandardMaterial map={tex} roughness={0.65} metalness={0.1} />
                </mesh>
            )}
            <group ref={moonsRef}>
                {moons.map((m) => (
                    <mesh key={m.name} position={[m.r, 0, 0]}>
                        <sphereGeometry args={[m.size, 12, 12]} />
                        <meshStandardMaterial color={m.color} roughness={0.8} />
                    </mesh>
                ))}
            </group>
        </group>
    );
}
