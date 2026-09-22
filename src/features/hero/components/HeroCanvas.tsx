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

// This is where our planets and lights will live later
function SolarSystemScene() {
    return (
        <>
            {/* Deep cosmic ambient lighting for the dark side of planets */}
            <ambientLight color="#0d1424" intensity={1.85} />

            {/* The Sun acts as the anchor on the far left (-200 on the X axis) */}
            <Sun position={[-200, 0, 0]} />
            <Earth position={[-62, 0, 0]} />
            <Saturn position={[86, 0, 0]} />
            <Mercury position={[-116, 0, 0]} />
            <Venus position={[-92, 0, 0]} />
            <Mars position={[-30, 0, 0]} />
            <Jupiter position={[26, 0, 0]} />
            <Uranus position={[138, 0, 0]} />
            <Neptune position={[172, 0, 0]} />
            <Pluto position={[202, 0, 0]} />
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
    // We pass 'state' to safely access the camera without capturing the outer scope
    useFrame((state) => {
        mouse.current.x += (target.current.x - mouse.current.x) * 0.045;
        mouse.current.y += (target.current.y - mouse.current.y) * 0.045;
        state.camera.position.x = 16 + mouse.current.x * 1.15;
        state.camera.position.y = 22 + mouse.current.y * 0.85;
        state.camera.lookAt(16, -2, 0);
    });


    return null;
}

export function HeroCanvas() {
    return (
        <Canvas
            camera={{ position: [16, 22, 385], fov: 36, near: 0.1, far: 4500 }}
            gl={{
                antialias: true,
                powerPreference: 'high-performance',
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.35
            }}
            dpr={[1, 2]}
        >
            <color attach="background" args={['#020408']} />
            <fogExp2 attach='fog' args={['#020408', 0.00035]} />

            <CameraController />
            <SolarSystemScene />
        </Canvas >
    )
}