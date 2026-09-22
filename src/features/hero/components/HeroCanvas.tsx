'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Sun } from './planets/Sun';
import { Earth } from './planets/Earth';
import { Saturn } from './planets/Saturn';
import { Mercury } from './planets/Mercury';
import { Venus } from './planets/Venus';
import { Mars } from './planets/Mars';
import { Jupiter } from './planets/Jupiter';
import { Uranus } from './planets/Uranus';
import { Neptune } from './planets/Neptune';
import { Pluto } from './planets/Pluto';
import { StarField } from './StarField';
import { EphemerisManifolds } from './EphemerisManifolds';
import { AsteroidBelt } from './AsteroidBelt';
import { KuiperBelt } from './KuiperBelt';

// This is where our planets and lights will live later
function SolarSystemScene() {
    return (
        <>
            {/* Deep cosmic ambient — very low to let the Sun dominate lighting */}
            <ambientLight color="#0a0e18" intensity={1.5} />

            {/* Subtle hemisphere light: warm sky (sunlit), cool ground (deep space) */}
            <hemisphereLight args={['#1a1408', '#050810', 1.2]} />

            {/* The Sun sits far left — only its right half peeks into the viewport */}
            <Sun position={[-240, 0, 0]} />
            <Mercury position={[-130, 0, 0]} />
            <Venus position={[-95, 0, 0]} />
            <Earth position={[-55, 0, 0]} />
            <Mars position={[-15, 0, 0]} />
            <AsteroidBelt />
            <Jupiter position={[85, 0, 0]} />
            <Saturn position={[175, 0, 0]} />
            <Uranus position={[240, 0, 0]} />
            <Neptune position={[285, 0, 0]} />
            <Pluto position={[315, 0, 0]} />
            <KuiperBelt />
            <StarField />
            <EphemerisManifolds />

        </>
    );
}

// A component to handle the smooth mouse parallax effect
function CameraController() {
    const mouse = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            target.current.x = ((e.clientX / window.innerWidth) * 2 - 1) * 22;
            target.current.y = (-(e.clientY / window.innerHeight) * 2 + 1) * 14;
        };

        window.addEventListener('mousemove', handleMouseMove, {
            passive: true,
        });

        return () => window.removeEventListener('mousemove', handleMouseMove);

    }, []);

    // Smoothly damp the camera position every frame
    useFrame((state) => {
        mouse.current.x += (target.current.x - mouse.current.x) * 0.045;
        mouse.current.y += (target.current.y - mouse.current.y) * 0.045;
        state.camera.position.x = 50 + mouse.current.x * 1.15;
        state.camera.position.y = 45 + mouse.current.y * 0.85;
        state.camera.lookAt(50, -8, 0);
    });

    return null;
}

export function HeroCanvas() {
    return (
        <Canvas
            camera={{ position: [50, 45, 480], fov: 40, near: 0.1, far: 6000 }}
            gl={{
                antialias: true,
                powerPreference: 'high-performance',
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.2
            }}
            dpr={[1, 2]}
        >
            <color attach="background" args={['#010204']} />
            <fogExp2 attach='fog' args={['#010204', 0.00018]} />

            <CameraController />
            <SolarSystemScene />
        </Canvas>
    )
}