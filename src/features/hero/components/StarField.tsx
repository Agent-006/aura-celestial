'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

let cachedGeo: THREE.BufferGeometry | null = null;
let cachedMat: THREE.PointsMaterial | null = null;

function getStarfieldData() {
    if (cachedGeo && cachedMat) return { geo: cachedGeo, mat: cachedMat };

    const starCount = 3800;
    const pos = new Float32Array(starCount * 3);
    const cols = new Float32Array(starCount * 3);
    const palette = [
        new THREE.Color(0xffffff),
        new THREE.Color(0xfff4cc),
        new THREE.Color(0x93c5fd),
        new THREE.Color(0x2dd4bf),
        new THREE.Color(0xf5b942),
        new THREE.Color(0xc084fc)
    ];

    for (let i = 0; i < starCount * 3; i += 3) {
        pos[i] = (Math.random() - 0.5) * 3200;
        pos[i + 1] = (Math.random() - 0.5) * 1900;
        pos[i + 2] = (Math.random() - 0.5) * 2600 - 180;

        const col = palette[Math.floor(Math.random() * palette.length)];
        cols[i] = col.r;
        cols[i + 1] = col.g;
        cols[i + 2] = col.b;
    }

    cachedGeo = new THREE.BufferGeometry();
    cachedGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    cachedGeo.setAttribute('color', new THREE.BufferAttribute(cols, 3));

    cachedMat = new THREE.PointsMaterial({
        size: 1.45,
        vertexColors: true,
        transparent: true,
        opacity: 0.88
    });

    return { geo: cachedGeo, mat: cachedMat };
}

export function StarField() {
    const pointsRef = useRef<THREE.Points>(null);
    const { geo, mat } = getStarfieldData();

    useFrame((_, delta) => {
        // Slow precession of the starry background
        if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.04;
    });

    return <points ref={pointsRef} geometry={geo} material={mat} />;
}
