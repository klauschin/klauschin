import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'glslify';

const WaveMaterial = shaderMaterial(
	{
		uTime: 0,
		uColorStart: new THREE.Color(),
		uColorEnd: new THREE.Color(),
		uMouse: new THREE.Vector2(),
	},
	glsl`
      varying vec2 vUv;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
        vUv = uv;
      }`,
	glsl`
      #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl)
      uniform float uTime;
      uniform vec3 uColorStart;
      uniform vec3 uColorEnd;
      varying vec2 vUv;
      void main() {
        vec2 displacedUv = vUv + cnoise3(vec3(vUv * 1.0, uTime * 0.05));
        float strength = cnoise3(vec3(displacedUv * 10.0, uTime * 0.2));
        float outerGlow = distance(vUv, vec2(0.5)) * 2.0 - 0.5;
        strength += outerGlow;
        strength += step(-0.2, strength) * 0.6;
        strength = clamp(strength, 0.0, 1.0);
        vec3 color = mix(uColorStart, uColorEnd, strength);
        gl_FragColor = vec4(color, 1.0);
      }`
);

extend({ WaveMaterial });

export default WaveMaterial;
