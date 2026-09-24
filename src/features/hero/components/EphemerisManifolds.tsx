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
            new THREE.Vector3(-280, startY, 0),
            new THREE.Vector3(-80, midY, 15),
            new THREE.Vector3(60, midY * 0.5, -10),
            new THREE.Vector3(endX, 0, 0)
        );
        const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(140));
        const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
        return new THREE.Line(geo, mat);
    }, [startY, midY, endX, color, opacity]);

    return <primitive object={lineObj} />;
}

export function EphemerisManifolds() {
    // Linear center axis baseline
    const axisLine = useMemo(() => {
        const geo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(-280, 0, 0),
            new THREE.Vector3(380, 0, 0)
        ]);
        const mat = new THREE.LineBasicMaterial({ color: '#f5b942', transparent: true, opacity: 0.18 });
        return new THREE.Line(geo, mat);
    }, []);

    return (
        <group>
            {/* Subtle deep space rim lights — very low for realism */}
            <directionalLight color="#1a3a4a" intensity={0.25} position={[80, 90, -120]} />
            <directionalLight color="#1a1a3a" intensity={0.15} position={[140, -80, 90]} />

            {/* Central Main Axis */}
            <primitive object={axisLine} />

            {/* Complex Orbital Intersections */}
            <TrajectoryLoop cx={-55} cy={0} rx={24} ry={24} tiltZ={0} opacity={0.2} color="#c8a860" />
            <TrajectoryLoop cx={-55} cy={0} rx={42} ry={38} tiltZ={0.15} opacity={0.12} color="#8a7040" />
            <TrajectoryLoop cx={85} cy={0} rx={36} ry={36} tiltZ={0} opacity={0.22} color="#c8a860" />
            <TrajectoryLoop cx={85} cy={0} rx={68} ry={88} tiltZ={0.2} opacity={0.14} color="#8a8a8a" />
            <TrajectoryLoop cx={85} cy={0} rx={88} ry={58} tiltZ={-0.28} opacity={0.1} color="#8a7040" />
            <TrajectoryLoop cx={175} cy={0} rx={60} ry={96} tiltZ={0.08} opacity={0.16} color="#7a8a9a" />
            <TrajectoryLoop cx={175} cy={0} rx={88} ry={64} tiltZ={-0.15} opacity={0.1} color="#8a7040" />

            {/* Sweep Arcs (Gravitational Tethers to Sun) */}
            <SweepArc startY={35} midY={28} endX={85} opacity={0.18} color="#a08040" />
            <SweepArc startY={-35} midY={-28} endX={175} opacity={0.15} color="#808080" />
            <SweepArc startY={55} midY={42} endX={240} opacity={0.12} color="#a08040" />
            <SweepArc startY={-55} midY={-45} endX={285} opacity={0.1} color="#7a8a9a" />

            {/* Vertical Telemetry */}
        </group>
    );
}
