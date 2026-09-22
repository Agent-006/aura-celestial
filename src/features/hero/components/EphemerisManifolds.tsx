'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

// 1. Orbital Loops
function TrajectoryLoop({ cx, cy, rx, ry, tiltZ, opacity, color }: { cx: number, cy: number, rx: number, ry: number, tiltZ: number, opacity: number, color: string }) {
    const lineObj = useMemo(() => {
        const pts = [];
        const segs = 200;
        for (let i = 0; i <= segs; i++) {
            const t = (i / segs) * Math.PI * 2;
            const x = cx + Math.cos(t) * rx;
            const y = cy + Math.sin(t) * ry;
            const z = Math.sin(t * 2) * (rx * 0.08); // 3D wave warp
            pts.push(new THREE.Vector3(x, y, z));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
        return new THREE.Line(geo, mat);
    }, [cx, cy, rx, ry, color, opacity]);

    return <primitive object={lineObj} rotation-z={tiltZ} />;
}

// 2. Parabolic Sweep Arcs from the Sun
function SweepArc({ startY, midY, endX, opacity, color }: { startY: number, midY: number, endX: number, opacity: number, color: string }) {
    const lineObj = useMemo(() => {
        const curve = new THREE.CubicBezierCurve3(
            new THREE.Vector3(-145, startY, 0),
            new THREE.Vector3(-40, midY, 15),
            new THREE.Vector3(60, midY * 0.5, -10),
            new THREE.Vector3(endX, 0, 0)
        );
        const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(140));
        const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
        return new THREE.Line(geo, mat);
    }, [startY, midY, endX, color, opacity]);

    return <primitive object={lineObj} />;
}

// 3. Vertical Precision Rulers
function VerticalTelemetryRuler({ x, height }: { x: number, height: number }) {
    const dots = [];
    for (let y = -height; y <= height; y += 5) {
        dots.push(y);
    }
    return (
        <group position={[x, 0, 0]}>
            {dots.map(y => {
                const isCenter = Math.abs(y) < 1;
                return (
                    <mesh key={y} position={[0, y, 0]}>
                        <sphereGeometry args={[isCenter ? 0.9 : 0.55, 8, 8]} />
                        <meshBasicMaterial
                            color={isCenter ? '#f5b942' : '#2dd4bf'}
                            transparent
                            opacity={isCenter ? 0.9 : 0.5}
                        />
                    </mesh>
                )
            })}
        </group>
    );
}

export function EphemerisManifolds() {
    // Linear center axis baseline
    const axisLine = useMemo(() => {
        const geo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(-140, 0, 0),
            new THREE.Vector3(225, 0, 0)
        ]);
        const mat = new THREE.LineBasicMaterial({ color: '#f5b942', transparent: true, opacity: 0.28 });
        return new THREE.Line(geo, mat);
    }, []);

    return (
        <group>
            {/* Deep space accent lights */}
            <directionalLight color="#2dd4bf" intensity={0.65} position={[80, 90, -120]} />
            <directionalLight color="#6366f1" intensity={0.4} position={[140, -80, 90]} />

            {/* Central Main Axis */}
            <primitive object={axisLine} />

            {/* Complex Orbital Intersections */}
            <TrajectoryLoop cx={-62} cy={0} rx={24} ry={24} tiltZ={0} opacity={0.35} color="#2dd4bf" />
            <TrajectoryLoop cx={-62} cy={0} rx={42} ry={38} tiltZ={0.15} opacity={0.22} color="#f5b942" />
            <TrajectoryLoop cx={26} cy={0} rx={36} ry={36} tiltZ={0} opacity={0.38} color="#f5b942" />
            <TrajectoryLoop cx={26} cy={0} rx={68} ry={88} tiltZ={0.2} opacity={0.25} color="#2dd4bf" />
            <TrajectoryLoop cx={26} cy={0} rx={88} ry={58} tiltZ={-0.28} opacity={0.2} color="#f5b942" />
            <TrajectoryLoop cx={86} cy={0} rx={60} ry={96} tiltZ={0.08} opacity={0.28} color="#93c5fd" />
            <TrajectoryLoop cx={86} cy={0} rx={88} ry={64} tiltZ={-0.15} opacity={0.2} color="#f5b942" />

            {/* Sweep Arcs (Gravitational Tethers to Sun) */}
            <SweepArc startY={35} midY={28} endX={26} opacity={0.35} color="#f5b942" />
            <SweepArc startY={-35} midY={-28} endX={86} opacity={0.3} color="#2dd4bf" />
            <SweepArc startY={55} midY={42} endX={138} opacity={0.25} color="#f5b942" />
            <SweepArc startY={-55} midY={-45} endX={172} opacity={0.22} color="#93c5fd" />

            {/* Vertical Telemetry */}
            <VerticalTelemetryRuler x={26} height={56} />
            <VerticalTelemetryRuler x={86} height={68} />
        </group>
    );
}
