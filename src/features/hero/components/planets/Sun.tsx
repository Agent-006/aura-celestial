'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

let cachedSunTex: THREE.CanvasTexture | null = null;
let cachedCoronaTex: THREE.CanvasTexture | null = null;

function getSunTexture() {
    if (typeof document === 'undefined') return null; // Safe for Next.js SSR
    if (cachedSunTex) return cachedSunTex;

    const c = document.createElement('canvas');
    c.width = 1024; c.height = 1024;
    const ctx = c.getContext('2d')!;
    const g = ctx.createRadialGradient(512, 512, 80, 512, 512, 512);

    g.addColorStop(0, '#ffffff');
    g.addColorStop(0.12, '#fff6d2');
    g.addColorStop(0.35, '#f5b942');
    g.addColorStop(0.65, '#e05307');
    g.addColorStop(0.86, '#941717');
    g.addColorStop(1, '#240404');

    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1024, 1024);

    // Micro plasma granulations
    for (let i = 0; i < 1500; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 1024;

        if (Math.hypot(x - 512, y - 512) < 500) {
            ctx.fillStyle = `rgba(255, 245, 210, ${Math.random() * 0.22})`;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 18 + 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    cachedSunTex = new THREE.CanvasTexture(c);
    return cachedSunTex;
}

function getCoronaTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedCoronaTex) return cachedCoronaTex;

    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d')!;
    const g = ctx.createRadialGradient(256, 256, 30, 256, 256, 256);

    g.addColorStop(0, 'rgba(255, 255, 240, 0.98)');
    g.addColorStop(0.24, 'rgba(245, 185, 66, 0.85)');
    g.addColorStop(0.55, 'rgba(224, 83, 7, 0.38)');
    g.addColorStop(0.85, 'rgba(45, 212, 191, 0.14)');
    g.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 512);

    cachedCoronaTex = new THREE.CanvasTexture(c);
    return cachedCoronaTex;
}


export function Sun({ position }: { position: [number, number, number] }) {
    const groupRef = useRef<THREE.Group>(null);
    const coronaRef = useRef<THREE.Sprite>(null);

    // Get textures (will generate only once per session)
    const sunTex = getSunTexture();
    const coronaTex = getCoronaTexture();

    // Animate the corona swirl
    useFrame((state, delta) => {
        if (coronaRef.current) {
            coronaRef.current.material.rotation += delta * 0.015;
        }
    });

    return (
        <group position={position} ref={groupRef}>
            {/* The Sun's Primary Light Source */}
            <pointLight color="#fff6dd" intensity={7.2} distance={3200} decay={0.55} />
            <directionalLight color="#ffeed0" intensity={2.4} position={[0, 0, 20]} />

            {/* The Photosphere Sphere */}
            {sunTex && (
                <mesh>
                    <sphereGeometry args={[66, 64, 64]} />
                    <meshBasicMaterial map={sunTex} />
                </mesh>
            )}

            {/* The Coronal Glow Sprite */}
            {coronaTex && (
                <sprite ref={coronaRef} scale={[330, 330, 1]}>
                    <spriteMaterial
                        map={coronaTex}
                        transparent={true}
                        opacity={0.96}
                        blending={THREE.AdditiveBlending}
                    />
                </sprite>
            )}
        </group>
    );
}
