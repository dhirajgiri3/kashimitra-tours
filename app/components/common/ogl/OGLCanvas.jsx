// app/components/common/ogl/OGLCanvas.jsx

"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const OGLCanvas = ({ image }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        
        const loader = new THREE.TextureLoader();
        const backgroundTexture = loader.load(image);
        scene.background = backgroundTexture;

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
        const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const animate = () => {
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        gsap.to(mesh.scale, {
            x: 2,
            y: 2,
            z: 2,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut"
        });

        gsap.to(mesh.rotation, {
            z: Math.PI * 2,
            duration: 4,
            repeat: -1,
            ease: "none"
        });

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
        };
    }, [image]);

    return <canvas ref={canvasRef} />;
};

export default OGLCanvas;
