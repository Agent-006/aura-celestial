'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// ==========================================================================
// The asteroid belt orbits between Mars (x=-30) and Jupiter (x=26).
// Sun is at x=-255. Mars distance from Sun = 225, Jupiter = 281.
// Belt orbital radius: 225–275 units centered on the Sun.
// ==========================================================================

let cachedMatrices: Float32Array | null = null;
let cachedGeo: THREE.BufferGeometry | null = null;
let cachedMat: THREE.MeshStandardMaterial | null = null;

const ASTEROID_COUNT = 5000;

function getAsteroidData() {
    if (cachedGeo && cachedMat && cachedMatrices) return { geo: cachedGeo, mat: cachedMat, matrices: cachedMatrices };

    const minRadius = 245;
    const maxRadius = 300;

    // Use SphereGeometry(detail 3) for smooth, natural-looking rocks
    // by distorting vertices for an organic irregular shape
    const baseGeo = new THREE.SphereGeometry(0.5, 5, 4);
    const posAttr = baseGeo.getAttribute('position');
    for (let v = 0; v < posAttr.count; v++) {
        const x = posAttr.getX(v);
        const y = posAttr.getY(v);
        const z = posAttr.getZ(v);
        const noise = 0.7 + Math.random() * 0.6; // 0.7–1.3 scale factor
        posAttr.setXYZ(v, x * noise, y * noise, z * noise);
    }
    posAttr.needsUpdate = true;
    baseGeo.computeVertexNormals();
    cachedGeo = baseGeo;

    cachedMat = new THREE.MeshStandardMaterial({
        color: '#7a6b55',
        roughness: 0.95,
        metalness: 0.05,
        flatShading: true,
    });

    cachedMatrices = new Float32Array(ASTEROID_COUNT * 16);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < ASTEROID_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Gaussian-ish distribution to cluster rocks toward center of belt
        const t = (Math.random() + Math.random() + Math.random()) / 3;
        const r = minRadius + t * (maxRadius - minRadius);

        const x = Math.cos(angle) * r;
        const y = (Math.random() - 0.5) * 9;
        const z = Math.sin(angle) * r;

        dummy.position.set(x, y, z);

        dummy.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
        );

        // Power distribution: most are small, few are larger
        const scale = 0.3 + Math.pow(Math.random(), 4) * 2.5;
        dummy.scale.set(
            scale * (0.7 + Math.random() * 0.6),
            scale * (0.5 + Math.random() * 0.5),
            scale * (0.7 + Math.random() * 0.6)
        );

        dummy.updateMatrix();
        dummy.matrix.toArray(cachedMatrices, i * 16);
    }

    return { geo: cachedGeo, mat: cachedMat, matrices: cachedMatrices };
}

export function AsteroidBelt() {
    const groupRef = useRef<THREE.Group>(null);
    const { geo, mat, matrices } = getAsteroidData();

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.006;
        }
    });

    return (
        <group position={[-240, 0, 0]} ref={groupRef}>
            <instancedMesh args={[geo, mat, ASTEROID_COUNT]}>
                <instancedBufferAttribute
                    attach="instanceMatrix"
                    args={[matrices, 16]}
                />
            </instancedMesh>
        </group>
    );
}
