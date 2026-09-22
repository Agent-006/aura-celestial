'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// ==========================================================================
// The Kuiper Belt sits BEYOND Pluto (x=202). With the Sun at x=-255,
// Pluto is 457 units from the Sun. The belt must start well beyond that.
// minRadius = 500, maxRadius = 600 ensures it wraps outside all planets.
// ==========================================================================

let cachedKBGeo: THREE.BufferGeometry | null = null;
let cachedKBMat: THREE.PointsMaterial | null = null;

function getKuiperBeltData() {
    if (cachedKBGeo && cachedKBMat) return { geo: cachedKBGeo, mat: cachedKBMat };

    const count = 20000;
    const minRadius = 570;
    const maxRadius = 700;

    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const palette = [
        new THREE.Color('#c8d6e5'), // ice white
        new THREE.Color('#a5b4c4'), // grey ice
        new THREE.Color('#7ea3c4'), // soft blue
        new THREE.Color('#5b7d9d'), // steel blue
        new THREE.Color('#3d5a80'), // deep blue
    ];

    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const angle = Math.random() * Math.PI * 2;
        // Gaussian-ish distribution for the belt density
        const t = (Math.random() + Math.random() + Math.random()) / 3;
        const r = minRadius + t * (maxRadius - minRadius);

        pos[i3] = Math.cos(angle) * r;
        pos[i3 + 1] = (Math.random() - 0.5) * 18;
        pos[i3 + 2] = Math.sin(angle) * r;

        const col = palette[Math.floor(Math.random() * palette.length)];
        cols[i3] = col.r;
        cols[i3 + 1] = col.g;
        cols[i3 + 2] = col.b;

        sizes[i] = 0.4 + Math.random() * 1.6;
    }

    cachedKBGeo = new THREE.BufferGeometry();
    cachedKBGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    cachedKBGeo.setAttribute('color', new THREE.BufferAttribute(cols, 3));

    cachedKBMat = new THREE.PointsMaterial({
        size: 1.0,
        vertexColors: true,
        transparent: true,
        opacity: 0.45,
        sizeAttenuation: true,
    });

    return { geo: cachedKBGeo, mat: cachedKBMat };
}

export function KuiperBelt() {
    const groupRef = useRef<THREE.Group>(null);
    const { geo, mat } = getKuiperBeltData();

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.003;
        }
    });

    return (
        <group position={[-240, 0, 0]} ref={groupRef}>
            <points geometry={geo} material={mat} />
        </group>
    );
}
