'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// --- MODULE-LEVEL CACHE ---
let cachedEarthTex: THREE.CanvasTexture | null = null;

function getEarthTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedEarthTex) return cachedEarthTex;

    const c = document.createElement('canvas');
    c.width = 1024; c.height = 512;
    const ctx = c.getContext('2d')!;

    // Abyssal deep blues
    ctx.fillStyle = '#0a2744';
    ctx.fillRect(0, 0, 1024, 512);

    // Continental shelf gradients
    ctx.fillStyle = '#114a6b';
    for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 1024, Math.random() * 380 + 60, Math.random() * 120 + 35, Math.random() * 65 + 20, Math.random(), 0, Math.PI * 2);
        ctx.fill();
    }

    // Landmasses (verdant greens and desert ochres)
    ctx.fillStyle = '#1d5a37';
    for (let i = 0; i < 48; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 1024, Math.random() * 360 + 70, Math.random() * 95 + 25, Math.random() * 50 + 15, Math.random() * 0.8, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.fillStyle = '#8b6938';
    for (let i = 0; i < 24; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 1024, Math.random() * 280 + 110, Math.random() * 45 + 15, Math.random() * 25 + 8, Math.random() * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }

    // Polar ice caps
    ctx.fillStyle = '#f1f5f9';
    ctx.beginPath(); ctx.ellipse(512, 18, 512, 24, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(512, 494, 512, 24, 0, 0, Math.PI * 2); ctx.fill();

    // Atmospheric cloud decks
    ctx.fillStyle = 'rgba(255, 255, 255, 0.48)';
    for (let i = 0; i < 85; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 1024, Math.random() * 512, Math.random() * 150 + 30, Math.random() * 16 + 3, Math.random() * 0.4 - 0.2, 0, Math.PI * 2);
        ctx.fill();
    }

    cachedEarthTex = new THREE.CanvasTexture(c);
    return cachedEarthTex;
}

export function Earth({ position }: { position: [number, number, number] }) {
    const earthRef = useRef<THREE.Mesh>(null);
    const moonRef = useRef<THREE.Mesh>(null);

    const earthTex = getEarthTexture();
    const earthRadius = 6.2;
    const moonOrbitRadius = earthRadius * 2.2; // 13.64

    // Pre-calculate the moon's faint orbit ring using a primitive
    const moonOrbitLine = useMemo(() => {
        const pts = [];
        for (let i = 0; i <= 48; i++) {
            const th = (i / 48) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(th) * moonOrbitRadius, 0, Math.sin(th) * moonOrbitRadius));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const mat = new THREE.LineBasicMaterial({ color: '#93c5fd', transparent: true, opacity: 0.35 });
        return new THREE.Line(geo, mat);
    }, [moonOrbitRadius]);

    useFrame((state) => {
        const elapsed = state.clock.getElapsedTime();

        // Earth axial spin
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.0035;
        }

        // Moon orbit animation
        if (moonRef.current) {
            const mAng = elapsed * 1.8;
            moonRef.current.position.set(
                Math.cos(mAng) * moonOrbitRadius,
                0.8,
                Math.sin(mAng) * moonOrbitRadius
            );
        }
    });

    return (
        <group position={position}>
            {/* The Earth */}
            {earthTex && (
                <mesh ref={earthRef}>
                    <sphereGeometry args={[earthRadius, 48, 48]} />
                    <meshStandardMaterial
                        map={earthTex}
                        roughness={0.42}
                        metalness={0.15}
                    />
                </mesh>
            )}

            {/* Chandra (The Moon) */}
            <mesh ref={moonRef} position={[moonOrbitRadius, 1.2, 0]}>
                <sphereGeometry args={[1.4, 20, 20]} />
                <meshStandardMaterial color="#cccccc" roughness={0.7} />
            </mesh>

            {/* Faint lunar orbit track */}
            <primitive object={moonOrbitLine} />
        </group>
    );
}
