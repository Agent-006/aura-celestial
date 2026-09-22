'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

let cachedGeo: THREE.BufferGeometry | null = null;
let cachedMat: THREE.PointsMaterial | null = null;

let cachedMWGeo: THREE.BufferGeometry | null = null;
let cachedMWMat: THREE.PointsMaterial | null = null;

function getMilkyWayData() {
    if (cachedMWGeo && cachedMWMat) return { geo: cachedMWGeo, mat: cachedMWMat };

    const count = 18000;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const palette = [
        new THREE.Color(0x3b82f6), // Deep blue
        new THREE.Color(0x8b5cf6), // Purple
        new THREE.Color(0xc084fc), // Light purple
        new THREE.Color(0x0f172a), // Dark void
        new THREE.Color(0xffffff)  // Bright star
    ];

    for (let i = 0; i < count * 3; i += 3) {
        // Create a thick disk/band
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 2200;
        const spread = (Math.random() - 0.5) * 200 * (1 - radius / 2200); // denser at center

        const x = Math.cos(angle) * radius;
        const y = spread;
        const z = Math.sin(angle) * radius;

        // Apply a tilt to the whole galaxy band
        const tiltX = Math.cos(0.5) * x - Math.sin(0.5) * y;
        const tiltY = Math.sin(0.5) * x + Math.cos(0.5) * y;
        const tiltZ = z - 600; // push it back deeply

        pos[i] = tiltX;
        pos[i + 1] = tiltY;
        pos[i + 2] = tiltZ;

        const col = palette[Math.floor(Math.random() * palette.length)];
        cols[i] = col.r;
        cols[i + 1] = col.g;
        cols[i + 2] = col.b;
    }

    cachedMWGeo = new THREE.BufferGeometry();
    cachedMWGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    cachedMWGeo.setAttribute('color', new THREE.BufferAttribute(cols, 3));

    cachedMWMat = new THREE.PointsMaterial({
        size: 3.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    return { geo: cachedMWGeo, mat: cachedMWMat };
}

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
    const mwRef = useRef<THREE.Points>(null);

    const { geo, mat } = getStarfieldData();
    const mw = getMilkyWayData();

    useFrame((_, delta) => {
        // Slow precession of the starry background
        if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.04;
        if (mwRef.current) mwRef.current.rotation.y += delta * 0.01;
    });

    return (
        <group>
            {/* Standard Background Stars */}
            <points ref={pointsRef} geometry={geo} material={mat} />

            {/* The Milky Way Band */}
            <points ref={mwRef} geometry={mw.geo} material={mw.mat} position={[-200, 400, -2800]} rotation={[0.2, 0, 0.4]} />

            {/* Shooting Comets */}
            <Comet startX={800} startY={600} startZ={-300} speed={80} />
            <Comet startX={1200} startY={300} startZ={-500} speed={120} delay={4} />
        </group>
    );
}

interface CometProps {
    startX: number;
    startY: number;
    startZ: number;
    speed: number;
    delay?: number;
}

function Comet({ startX, startY, startZ, speed, delay = 0 }: CometProps) {
    const cometRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (cometRef.current) {
            const t = state.clock.getElapsedTime();
            if (t > delay) {
                cometRef.current.position.x -= delta * speed;
                cometRef.current.position.y -= delta * (speed * 0.25);
                if (cometRef.current.position.x < -1500) {
                    cometRef.current.position.x = startX;
                    cometRef.current.position.y = startY;
                }
            }
        }
    });

    const tailGeo = useMemo(() => {
        const pts = [];
        for (let i = 0; i < 60; i++) {
            pts.push(new THREE.Vector3(i * 2, i * 0.5, 0));
        }
        return new THREE.BufferGeometry().setFromPoints(pts);
    }, []);

    return (
        <group ref={cometRef} position={[startX, startY, startZ]}>
            <mesh>
                <sphereGeometry args={[1.5, 16, 16]} />
                <meshBasicMaterial color="#ffffff" />
            </mesh>
            <points geometry={tailGeo}>
                <pointsMaterial size={2.5} color="#93c5fd" transparent opacity={0.4} blending={THREE.AdditiveBlending} depthWrite={false} />
            </points>
        </group>
    );
}
