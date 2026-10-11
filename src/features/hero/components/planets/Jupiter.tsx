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

    // Realistic Jupiter latitudinal gradient
    const g = ctx.createLinearGradient(0, 0, 0, 1024);
    const jupiterColors = [
        { stop: 0.00, color: '#4a250b' },
        { stop: 0.05, color: '#794723' },
        { stop: 0.12, color: '#ba9370' },
        { stop: 0.18, color: '#e7d6c3' },
        { stop: 0.25, color: '#9c663f' },
        { stop: 0.30, color: '#eedfd0' },
        { stop: 0.38, color: '#5b3216' },
        { stop: 0.45, color: '#d4af88' },
        { stop: 0.52, color: '#f6ece1' }, // equator
        { stop: 0.55, color: '#d4af88' },
        { stop: 0.62, color: '#8c5831' },
        { stop: 0.70, color: '#eedfd0' },
        { stop: 0.78, color: '#4e280d' },
        { stop: 0.85, color: '#c9a17b' },
        { stop: 0.92, color: '#804c26' },
        { stop: 0.98, color: '#f0e5d8' },
        { stop: 1.00, color: '#4a250b' }
    ];
    
    jupiterColors.forEach(c => g.addColorStop(c.stop, c.color));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 2048, 1024);

    // Sinusoidal boundary shearing and fluid turbulence between belts
    for (let y = 0; y < 1024; y += 6) {
        const offset = Math.sin(y * 0.04) * 30 + Math.cos(y * 0.015) * 20;
        ctx.fillStyle = (y % 12 === 0) ? 'rgba(255, 250, 240, 0.12)' : 'rgba(40, 18, 6, 0.1)';
        ctx.beginPath();
        ctx.ellipse((y * 3 + offset) % 2048, y, 160, 6, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    // Great Red Spot
    ctx.fillStyle = 'rgba(160, 60, 20, 0.6)';
    ctx.beginPath();
    ctx.ellipse(800, 650, 60, 30, -0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(120, 40, 10, 0.8)';
    ctx.beginPath();
    ctx.ellipse(800, 650, 45, 20, -0.1, 0, Math.PI * 2);
    ctx.fill();

    // Fine festoons & white oval storm plumes
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let i = 0; i < 80; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 2048, Math.random() * 700 + 150, Math.random() * 40 + 10, Math.random() * 15 + 4, Math.random() * 0.3, 0, Math.PI * 2);
        ctx.fill();
    }

    cachedJupiterTex = new THREE.CanvasTexture(c);
    return cachedJupiterTex;
}

export function Jupiter({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const moonsRef = useRef<THREE.Group>(null);
    const tex = getJupiterTexture();

    // Moon definitions: name, orbit radius, size, color, speed
    const moons = [
        { name: 'Io', r: 24, size: 1.2, color: '#e8c84a', speed: 2.8 },
        { name: 'Europa', r: 28, size: 1.0, color: '#c4bfae', speed: 2.0 },
        { name: 'Ganymede', r: 33, size: 1.6, color: '#9a8e7a', speed: 1.4 },
        { name: 'Callisto', r: 39, size: 1.4, color: '#6b6055', speed: 0.9 },
    ];

    useFrame((state) => {
        if (meshRef.current) meshRef.current.rotation.y += 0.0048;

        const t = state.clock.getElapsedTime();
        if (moonsRef.current) {
            moonsRef.current.children.forEach((moon, i) => {
                const m = moons[i];
                moon.position.set(
                    Math.cos(t * m.speed) * m.r,
                    (i % 2 === 0 ? 0.5 : -0.3),
                    Math.sin(t * m.speed) * m.r
                );
            });
        }
    });

    return (
        <group position={position}>
            {tex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[18.0, 64, 64]} />
                    <meshStandardMaterial map={tex} roughness={0.65} metalness={0.05} />
                </mesh>
            )}

            {/* Galilean Moons */}
            <group ref={moonsRef}>
                {moons.map((m) => (
                    <mesh key={m.name} position={[m.r, 0, 0]}>
                        <sphereGeometry args={[m.size, 16, 16]} />
                        <meshStandardMaterial color={m.color} roughness={0.7} />
                    </mesh>
                ))}
            </group>
        </group>
    );
}
