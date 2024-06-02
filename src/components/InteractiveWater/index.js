'use client'
import React, { useState, useEffect, useRef } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import WaveMaterial from './wave-material';

function ShaderPlane() {
	const ref = useRef();
	const { width, height } = useThree((state) => state.viewport);
	useFrame((state, delta) => (ref.current.uTime += delta));

	return (
		<mesh scale={[width, height, 1]}>
			<planeGeometry />
			<waveMaterial
				ref={ref}
				key={WaveMaterial.key}
				toneMapped={true}
				uTime={1}
				uColorStart="#666"
				uColorEnd="#333"
			/>
		</mesh>
	);
}

export default function InteractiveGradient() {
	const windows = useWindowDimensions();
	const [isLoading, setIsLoading] = useState(true);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		if (windows) {
			setIsLoading(false);
		}
	}, [windows]);

	return (
		<Canvas>
			<ShaderPlane mousePosition={mousePosition} />
		</Canvas>
	);
}
