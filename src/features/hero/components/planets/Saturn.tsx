'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

let cachedSaturnTex: THREE.CanvasTexture | null = null;
let cachedRingTex: THREE.CanvasTexture | null = null;

function getSaturnTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedSaturnTex) return cachedSaturnTex;

    const c = document.createElement('canvas');
    c.width = 1024; c.height = 1024;
    const ctx = c.getContext('2d')!;

    // Smooth, realistic pale gold/tan gradient for Saturn
    const g = ctx.createLinearGradient(0, 0, 0, 1024);
    g.addColorStop(0, '#8e8166');
    g.addColorStop(0.1, '#c7b491');
    g.addColorStop(0.2, '#d3c2a4');
    g.addColorStop(0.3, '#bca981');
    g.addColorStop(0.4, '#e4d3a8');
    g.addColorStop(0.5, '#c3b189');
    g.addColorStop(0.6, '#dcd0b1');
    g.addColorStop(0.7, '#c7b491');
    g.addColorStop(0.8, '#d3c2a4');
    g.addColorStop(0.9, '#a69677');
    g.addColorStop(1, '#8e8166');
    
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1024, 1024);
    
    // Add very subtle noise/banding
    for(let y = 0; y < 1024; y += 2) {
        ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.035})`;
        ctx.fillRect(0, y, 1024, 2);
    }

    cachedSaturnTex = new THREE.CanvasTexture(c);
    return cachedSaturnTex;
}

function getSaturnRingTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedRingTex) return cachedRingTex;

    const c = document.createElement('canvas');
    c.width = 2048; c.height = 128;
    const ctx = c.getContext('2d')!;
    const g = ctx.createLinearGradient(0, 0, 2048, 0);

    g.addColorStop(0, 'rgba(215, 185, 130, 0)');
    g.addColorStop(0.08, 'rgba(200, 175, 130, 0.28)');
    g.addColorStop(0.20, 'rgba(220, 195, 150, 0.55)');
    g.addColorStop(0.25, 'rgba(245, 225, 180, 0.96)');
    g.addColorStop(0.52, 'rgba(235, 210, 165, 0.92)');
    g.addColorStop(0.55, 'rgba(25, 20, 15, 0.18)');
    g.addColorStop(0.58, 'rgba(35, 28, 20, 0.22)');
    g.addColorStop(0.61, 'rgba(238, 218, 170, 0.88)');
    g.addColorStop(0.78, 'rgba(225, 200, 155, 0.75)');
    g.addColorStop(0.88, 'rgba(195, 168, 125, 0.55)');
    g.addColorStop(0.96, 'rgba(140, 115, 80, 0.25)');
    g.addColorStop(1, 'rgba(100, 80, 50, 0)');

    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 2048, 128);

    for (let x = 160; x < 1920; x += 6) {
        ctx.fillStyle = (x % 18 === 0) ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.07)';
        ctx.fillRect(x, 0, 1.5, 128);
    }

    cachedRingTex = new THREE.CanvasTexture(c);
    return cachedRingTex;
}

export function Saturn({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const moonsRef = useRef<THREE.Group>(null);

    const saturnTex = getSaturnTexture();
    const ringTex = getSaturnRingTexture();

    const radius = 15.0;

    const moons = [
        { name: 'Titan', r: radius * 3.2, size: 1.8, color: '#c8a84a', speed: 0.6 },
        { name: 'Rhea', r: radius * 2.9, size: 1.0, color: '#b8b0a0', speed: 0.9 },
        { name: 'Iapetus', r: radius * 3.6, size: 0.9, color: '#8a7d6b', speed: 0.4 },
        { name: 'Dione', r: radius * 2.6, size: 0.8, color: '#d0c8b8', speed: 1.2 },
    ];

    // We must manually map the UVs of the RingGeometry to match our gradient texture
    const ringGeometry = useMemo(() => {
        const geo = new THREE.RingGeometry(radius * 1.35, radius * 2.75, 128);
        const pos = geo.attributes.position;
        const uvs = geo.attributes.uv;

        for (let i = 0; i < pos.count; i++) {
            const vx = pos.getX(i);
            const vy = pos.getY(i);
            const currentRadius = Math.hypot(vx, vy);

            // Normalized radial coordinate across the ring width
            const u = (currentRadius - (radius * 1.35)) / ((radius * 2.75) - (radius * 1.35));
            uvs.setXY(i, u, 0.5);
        }
        geo.attributes.uv.needsUpdate = true;
        return geo;
    }, [radius]);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.0042;
        }
        const t = state.clock.getElapsedTime();
        if (moonsRef.current) {
            moonsRef.current.children.forEach((moon, i) => {
                const m = moons[i];
                moon.position.set(
                    Math.cos(t * m.speed) * m.r,
                    (i % 2 === 0 ? 0.8 : -0.5),
                    Math.sin(t * m.speed) * m.r
                );
            });
        }
    });

    return (
        <group position={position}>
            {/* The entire Saturn system is tilted by ~26 degrees (0.45 rad) */}
            <group rotation={[0.45, 0, -0.2]}>
                {/* The Gas Giant */}
                {saturnTex && (
                    <mesh ref={meshRef}>
                        <sphereGeometry args={[radius, 48, 48]} />
                        <meshStandardMaterial
                            map={saturnTex}
                            roughness={0.8}
                            metalness={0.05}
                        />
                    </mesh>
                )}

                {/* The Continuous Ring System */}
                {ringTex && (
                    <mesh
                        geometry={ringGeometry}
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <meshBasicMaterial
                            map={ringTex}
                            side={THREE.DoubleSide}
                            transparent={true}
                            opacity={0.95}
                            depthWrite={false}
                        />
                    </mesh>
                )}

                {/* Saturn's Moons */}
                <group ref={moonsRef}>
                    {moons.map((m) => (
                        <mesh key={m.name} position={[m.r, 0, 0]}>
                            <sphereGeometry args={[m.size, 16, 16]} />
                            <meshStandardMaterial color={m.color} roughness={0.7} />
                        </mesh>
                    ))}
                </group>
            </group>
        </group>
    );
}
