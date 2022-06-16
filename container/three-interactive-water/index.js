import React, { useState, useEffect, useRef } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { WaveMaterial } from './wave-material';

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

const InteractiveGradient = () => {
  const windows = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    console.log(
      '🚀 ~ file: template-home.js ~ line 10 ~ handleMouseMove ~ e.clientX',
      e.clientX
    );
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
};

export default InteractiveGradient;
