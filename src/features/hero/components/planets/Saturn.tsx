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
    c.width = 2048; c.height = 1024;
    const ctx = c.getContext('2d')!;

    ctx.fillStyle = '#e8d4a9';
    ctx.fillRect(0, 0, 2048, 1024);

    for (let y = 0; y < 1024; y += 4) {
        const factor = Math.sin((y / 1024) * Math.PI * 14);
        ctx.fillStyle = factor > 0.05 ? '#d9be8c' : '#faedd0';
        ctx.fillRect(0, y, 2048, 3.5);
    }

    const pGrad = ctx.createLinearGradient(0, 0, 0, 1024);
    pGrad.addColorStop(0, 'rgba(148, 122, 75, 0.45)');
    pGrad.addColorStop(0.18, 'rgba(0, 0, 0, 0)');
    pGrad.addColorStop(0.5, 'rgba(255, 245, 220, 0.15)');
    pGrad.addColorStop(0.82, 'rgba(0, 0, 0, 0)');
    pGrad.addColorStop(1, 'rgba(148, 122, 75, 0.45)');
    ctx.fillStyle = pGrad;
    ctx.fillRect(0, 0, 2048, 1024);

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

    const saturnTex = getSaturnTexture();
    const ringTex = getSaturnRingTexture();

    const radius = 15.0;

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

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.0042;
        }
    });

    return (
        <group position={position}>
            {/* The Gas Giant */}
            {saturnTex && (
                <mesh ref={meshRef}>
                    <sphereGeometry args={[radius, 48, 48]} />
                    <meshStandardMaterial
                        map={saturnTex}
                        roughness={0.52}
                        metalness={0.1}
                    />
                </mesh>
            )}

            {/* The Continuous Ring System */}
            {ringTex && (
                <mesh
                    geometry={ringGeometry}
                    rotation={[Math.PI / 2.3, 0.22, 0]}
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
        </group>
    );
}
