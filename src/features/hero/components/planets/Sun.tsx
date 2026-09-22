'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// ==========================================================================
// MODULE-LEVEL CACHED TEXTURES (React 19 purity-safe)
// ==========================================================================

// Simple pseudo-random generator to replace Math.random() for React purity
let seed = 12345;
function seededRandom() {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
}

let cachedSunTex: THREE.CanvasTexture | null = null;
let cachedCoronaTex: THREE.CanvasTexture | null = null;

function getSunTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedSunTex) return cachedSunTex;

    const c = document.createElement('canvas');
    c.width = 4096; c.height = 4096;
    const ctx = c.getContext('2d')!;
    const W = 4096;
    const H = W / 2;

    // Layer 1: Deep photosphere radial gradient with more colour stops
    const g = ctx.createRadialGradient(H, H, 40, H, H, H);
    g.addColorStop(0, '#fffff8');
    g.addColorStop(0.05, '#fffde6');
    g.addColorStop(0.12, '#fff0b3');
    g.addColorStop(0.22, '#ffd700');
    g.addColorStop(0.34, '#f5b942');
    g.addColorStop(0.46, '#e88615');
    g.addColorStop(0.56, '#d45500');
    g.addColorStop(0.66, '#b83a00');
    g.addColorStop(0.76, '#941717');
    g.addColorStop(0.85, '#6b0a0a');
    g.addColorStop(0.92, '#3a0404');
    g.addColorStop(1, '#0a0101');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, W);

    // Layer 2: Supergranulation — large-scale convection cells
    for (let i = 0; i < 120; i++) {
        const angle = seededRandom() * Math.PI * 2;
        const r = seededRandom() * 1600;
        const cx = H + Math.cos(angle) * r;
        const cy = H + Math.sin(angle) * r;
        const dist = Math.hypot(cx - H, cy - H);
        if (dist < 1900) {
            const cellGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, seededRandom() * 80 + 40);
            cellGrad.addColorStop(0, `rgba(255, 240, 180, ${0.06 + seededRandom() * 0.06})`);
            cellGrad.addColorStop(1, 'rgba(200, 130, 40, 0)');
            ctx.fillStyle = cellGrad;
            ctx.fillRect(cx - 120, cy - 120, 240, 240);
        }
    }

    // Layer 3: Fine granulation cells (bubbly plasma surface)
    for (let i = 0; i < 8000; i++) {
        const x = seededRandom() * W;
        const y = seededRandom() * W;
        const dist = Math.hypot(x - H, y - H);
        if (dist < 1920) {
            const brightness = 1 - (dist / 1920);
            const alpha = seededRandom() * 0.12 * brightness;
            const isHot = seededRandom() > 0.7;
            ctx.fillStyle = isHot
                ? `rgba(255, 255, 230, ${alpha * 1.5})`
                : `rgba(255, 220, 140, ${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, seededRandom() * 12 + 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Layer 4: Dark sunspot clusters with complex structure
    for (let i = 0; i < 18; i++) {
        const angle = seededRandom() * Math.PI * 2;
        const r = seededRandom() * 1000 + 200;
        const cx = H + Math.cos(angle) * r;
        const cy = H + Math.sin(angle) * r;
        const size = seededRandom() * 60 + 20;

        // Penumbra (outer lighter halo)
        const penGrad = ctx.createRadialGradient(cx, cy, size * 0.4, cx, cy, size * 2.2);
        penGrad.addColorStop(0, 'rgba(60, 20, 5, 0.5)');
        penGrad.addColorStop(0.5, 'rgba(100, 45, 10, 0.25)');
        penGrad.addColorStop(1, 'rgba(180, 100, 40, 0)');
        ctx.fillStyle = penGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, size * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Umbra (dark core)
        ctx.fillStyle = 'rgba(10, 2, 0, 0.7)';
        ctx.beginPath();
        ctx.arc(cx, cy, size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Layer 5: Hot bright facular regions
    for (let i = 0; i < 200; i++) {
        const x = seededRandom() * W;
        const y = seededRandom() * W;
        if (Math.hypot(x - H, y - H) < 1700) {
            ctx.fillStyle = `rgba(255, 255, 210, ${seededRandom() * 0.08})`;
            ctx.beginPath();
            ctx.ellipse(x, y, seededRandom() * 40 + 5, seededRandom() * 12 + 3, seededRandom() * Math.PI, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Layer 6: Convection currents (swirling wisps)
    for (let i = 0; i < 300; i++) {
        const x = seededRandom() * W;
        const y = seededRandom() * W;
        if (Math.hypot(x - H, y - H) < 1800) {
            ctx.strokeStyle = `rgba(255, 200, 80, ${seededRandom() * 0.06})`;
            ctx.lineWidth = seededRandom() * 3 + 0.5;
            ctx.beginPath();
            ctx.moveTo(x, y);
            const cp1x = x + (seededRandom() - 0.5) * 150;
            const cp1y = y + (seededRandom() - 0.5) * 150;
            const cp2x = x + (seededRandom() - 0.5) * 300;
            const cp2y = y + (seededRandom() - 0.5) * 300;
            ctx.quadraticCurveTo(cp1x, cp1y, cp2x, cp2y);
            ctx.stroke();
        }
    }

    // Layer 7: Limb darkening overlay (edges naturally darker)
    const limbGrad = ctx.createRadialGradient(H, H, H * 0.5, H, H, H);
    limbGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    limbGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0)');
    limbGrad.addColorStop(0.88, 'rgba(80, 20, 0, 0.15)');
    limbGrad.addColorStop(0.96, 'rgba(40, 5, 0, 0.35)');
    limbGrad.addColorStop(1, 'rgba(10, 0, 0, 0.6)');
    ctx.fillStyle = limbGrad;
    ctx.fillRect(0, 0, W, W);

    cachedSunTex = new THREE.CanvasTexture(c);
    return cachedSunTex;
}

function getCoronaTexture() {
    if (typeof document === 'undefined') return null;
    if (cachedCoronaTex) return cachedCoronaTex;

    const c = document.createElement('canvas');
    c.width = 1024; c.height = 1024;
    const ctx = c.getContext('2d')!;

    // Multi-layered corona with more realism
    const g = ctx.createRadialGradient(512, 512, 40, 512, 512, 512);
    g.addColorStop(0, 'rgba(255, 255, 248, 0.98)');
    g.addColorStop(0.12, 'rgba(255, 230, 150, 0.9)');
    g.addColorStop(0.28, 'rgba(245, 185, 66, 0.7)');
    g.addColorStop(0.45, 'rgba(224, 120, 30, 0.4)');
    g.addColorStop(0.65, 'rgba(200, 60, 10, 0.18)');
    g.addColorStop(0.82, 'rgba(148, 23, 23, 0.08)');
    g.addColorStop(0.92, 'rgba(45, 20, 10, 0.03)');
    g.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1024, 1024);

    // Coronal streamers (radial plasma jets)
    for (let i = 0; i < 40; i++) {
        const angle = seededRandom() * Math.PI * 2;
        const length = seededRandom() * 250 + 150;
        const width = seededRandom() * 20 + 5;
        const startR = 180;

        ctx.save();
        ctx.translate(512, 512);
        ctx.rotate(angle);

        const sg = ctx.createLinearGradient(0, -startR, 0, -(startR + length));
        sg.addColorStop(0, `rgba(255, 200, 80, ${seededRandom() * 0.25 + 0.1})`);
        sg.addColorStop(0.5, `rgba(224, 100, 20, ${seededRandom() * 0.12})`);
        sg.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = sg;
        ctx.beginPath();
        ctx.moveTo(-width / 2, -startR);
        ctx.quadraticCurveTo(0, -(startR + length * 0.7), width / 2, -(startR + length));
        ctx.quadraticCurveTo(0, -(startR + length * 0.5), -width / 2, -startR);
        ctx.fill();
        ctx.restore();
    }

    cachedCoronaTex = new THREE.CanvasTexture(c);
    return cachedCoronaTex;
}


// ==========================================================================
// SOLAR WIND (Bézier curves sweeping outward from the Sun)
// ==========================================================================
function SolarWind() {
    const lines = useMemo(() => {
        const result: THREE.Line[] = [];
        const windPaths = [
            // Downward sweeping arcs (like the reference "Solar Wind" label)
            { startAngle: -0.6, endX: 320, endY: -180, cpY1: -40, cpY2: -130, opacity: 0.22 },
            { startAngle: -0.45, endX: 280, endY: -160, cpY1: -30, cpY2: -100, opacity: 0.18 },
            { startAngle: -0.8, endX: 360, endY: -220, cpY1: -60, cpY2: -160, opacity: 0.15 },
            // Upward sweeping arcs
            { startAngle: 0.5, endX: 300, endY: 150, cpY1: 30, cpY2: 100, opacity: 0.2 },
            { startAngle: 0.35, endX: 260, endY: 120, cpY1: 20, cpY2: 80, opacity: 0.16 },
            { startAngle: 0.7, endX: 340, endY: 190, cpY1: 50, cpY2: 140, opacity: 0.14 },
            // Horizontal sweeps
            { startAngle: 0.05, endX: 380, endY: 20, cpY1: 15, cpY2: 10, opacity: 0.25 },
            { startAngle: -0.05, endX: 370, endY: -15, cpY1: -10, cpY2: -8, opacity: 0.2 },
        ];

        for (const w of windPaths) {
            const curve = new THREE.CubicBezierCurve3(
                new THREE.Vector3(70, Math.sin(w.startAngle) * 50, 0),
                new THREE.Vector3(140, w.cpY1, 10),
                new THREE.Vector3(220, w.cpY2, -5),
                new THREE.Vector3(w.endX, w.endY, 0)
            );
            const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(80));
            const mat = new THREE.LineBasicMaterial({
                color: '#f5b942',
                transparent: true,
                opacity: w.opacity,
            });
            result.push(new THREE.Line(geo, mat));
        }

        return result;
    }, []);

    return (
        <group>
            {lines.map((line, i) => (
                <primitive key={i} object={line} />
            ))}
        </group>
    );
}


// ==========================================================================
// SOLAR FLARES (animated plasma eruptions on the Sun's limb)
// ==========================================================================
function SolarFlares() {
    const flaresRef = useRef<THREE.Group>(null);

    // Pre-build flare shapes at module level via useMemo
    const flareData = useMemo(() => {
        const flares: { geo: THREE.BufferGeometry; mat: THREE.MeshBasicMaterial; pos: [number, number, number]; scale: [number, number, number]; rotZ: number }[] = [];

        const flareConfigs = [
            { angle: -0.3, size: 18, color: '#ff6b00', opacity: 0.55 },
            { angle: 0.2, size: 14, color: '#ffa040', opacity: 0.45 },
            { angle: -0.8, size: 22, color: '#ff4500', opacity: 0.4 },
            { angle: 0.9, size: 12, color: '#ffcc00', opacity: 0.5 },
            { angle: -1.2, size: 16, color: '#ff6b00', opacity: 0.35 },
            { angle: 1.5, size: 20, color: '#ff8c00', opacity: 0.3 },
        ];

        for (const f of flareConfigs) {
            // Use a stretched torus as the flare arch
            const geo = new THREE.TorusGeometry(f.size, f.size * 0.15, 8, 24, Math.PI);
            const mat = new THREE.MeshBasicMaterial({
                color: f.color,
                transparent: true,
                opacity: f.opacity,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false,
            });

            const r = 85; // Sun radius
            const px = Math.cos(f.angle) * r;
            const py = Math.sin(f.angle) * r;

            flares.push({
                geo,
                mat,
                pos: [px, py, 0],
                scale: [1, 1.2 + seededRandom() * 0.5, 1],
                rotZ: f.angle + Math.PI / 2,
            });
        }

        return flares;
    }, []);

    useFrame((state) => {
        if (flaresRef.current) {
            const t = state.clock.getElapsedTime();
            // Gentle pulsing
            const s = 1 + Math.sin(t * 0.8) * 0.08;
            flaresRef.current.scale.set(s, s, s);
        }
    });

    return (
        <group ref={flaresRef}>
            {flareData.map((f, i) => (
                <mesh
                    key={i}
                    geometry={f.geo}
                    material={f.mat}
                    position={f.pos}
                    scale={f.scale}
                    rotation={[0, 0, f.rotZ]}
                />
            ))}
        </group>
    );
}


// ==========================================================================
// SUN COMPONENT
// ==========================================================================

export function Sun({ position }: { position: [number, number, number] }) {
    const groupRef = useRef<THREE.Group>(null);
    const coronaRef = useRef<THREE.Sprite>(null);
    const sunMeshRef = useRef<THREE.Mesh>(null);

    const sunTex = getSunTexture();
    const coronaTex = getCoronaTexture();

    useFrame((state, delta) => {
        // Slowly rotate the corona
        if (coronaRef.current) {
            coronaRef.current.material.rotation += delta * 0.012;
        }
        // Slowly rotate the sun surface
        if (sunMeshRef.current) {
            sunMeshRef.current.rotation.y += delta * 0.008;
        }
    });

    return (
        <group position={position} ref={groupRef}>
            {/* Core Sun Illumination cast into the solar system */}
            <pointLight color="#fff6dd" intensity={12.5} distance={4000} decay={0.5} />

            {/* Warmer orange inner glow light */}
            <pointLight color="#ff8844" intensity={5.0} distance={2000} decay={0.7} />
            <directionalLight color="#ffeed0" intensity={4.0} position={[0, 0, 20]} />

            {/* The Photosphere Sphere — enlarged for dramatic half-crop */}
            {sunTex && (
                <mesh ref={sunMeshRef}>
                    <sphereGeometry args={[85, 96, 96]} />
                    <meshBasicMaterial map={sunTex} />
                </mesh>
            )}

            {/* Inner hot glow layer 1 */}
            <mesh>
                <sphereGeometry args={[87, 48, 48]} />
                <meshBasicMaterial
                    color="#ffdd88"
                    transparent
                    opacity={0.12}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* Inner hot glow layer 2 */}
            <mesh>
                <sphereGeometry args={[90, 48, 48]} />
                <meshBasicMaterial
                    color="#ffcc66"
                    transparent
                    opacity={0.08}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* Chromosphere haze */}
            <mesh>
                <sphereGeometry args={[95, 48, 48]} />
                <meshBasicMaterial
                    color="#ff6600"
                    transparent
                    opacity={0.05}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* Outer prominence envelope */}
            <mesh>
                <sphereGeometry args={[105, 32, 32]} />
                <meshBasicMaterial
                    color="#cc3300"
                    transparent
                    opacity={0.025}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>

            {/* The Coronal Glow Sprite — expanded */}
            {coronaTex && (
                <sprite ref={coronaRef} scale={[480, 480, 1]}>
                    <spriteMaterial
                        map={coronaTex}
                        transparent={true}
                        opacity={0.88}
                        blending={THREE.AdditiveBlending}
                    />
                </sprite>
            )}

            {/* Solar Flares */}
            <SolarFlares />

            {/* Solar Wind Lines */}
            <SolarWind />
        </group>
    );
}
