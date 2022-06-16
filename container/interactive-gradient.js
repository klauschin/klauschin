import React, { useState, useEffect } from 'react';
import regl, { ReglFrame } from 'react-regl';
import useWindowDimensions from '@/hooks/useWindowDimensions';

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

  let morphAmount = 1.5;
  const DEV = false;
  const seed = new Date().getTime() % 100000;
  const Triangle = regl({
    frag: `
					precision mediump float;
					#define SEED ${seed}.579831

					uniform vec2 uResolution;
					uniform float uTime;
					uniform vec2 uMouse;
					uniform float uMorph;
					uniform vec2 uGrid;

					const int   complexity  = 10;   // complexity of curls/computation
					const float mouseSpeed  = 0.6;  // control the color changing
					const float fixedOffset = 0.7;  // Drives complexity in the amount of curls/cuves.  Zero is a single whirlpool.
					const float fluidSpeed  = 0.1;  // Drives speed, smaller number will make it slower.
					const float baseColor   = 0.6;
					const float BLUR        = 0.5;

					#define PI 3.14159

					float random(float x) {
						return fract(sin(x) * SEED);
					}

					float noise(float x) {
						float i = floor(x);
						float f = fract(x);
						return mix(random(i), random(i + 1.0), smoothstep(0.0, 1.0, f));
					}

					float noiseS(float x) {
						return noise(x) * 2.0 - 1.0;
					}

					void main() {
						vec2 p = (2.0 * gl_FragCoord.xy - uResolution) / min(uResolution.x, uResolution.y) * 0.7;
						float t = uTime * fluidSpeed + uMorph;
						float noiseTime = noise(t);
						float noiseSTime = noiseS(t);
						float noiseSTime1 = noiseS(t + 1.0);

						float blur = (BLUR + 0.14 * noiseSTime);
						for(int i=1; i <= complexity; i++) {
							p += blur / float(i) * sin(
									float(i) * p.yx + t + PI * vec2(noiseSTime, noiseSTime1))
								+ fixedOffset;
						}

						for(int i=1; i <= complexity; i++) {
							p += blur / float(i) * cos(
									float(i) * p.yx + t + PI * vec2(noiseSTime, noiseSTime1))
								+ fixedOffset;
						}

						p += uMouse * mouseSpeed;

						vec2 grid = uGrid * 2.0; // set complexity to 0 to debug the grid
						gl_FragColor = vec4(
							baseColor * vec3(
								sin(grid * p + vec2(2.0 * noiseSTime, 3.0 * noiseSTime1)),
								sin(p.x + p.y + noiseSTime)
							), 1);
					}
				`,

    vert: `
					attribute vec2 position;
					void main () {
						gl_Position = vec4(position, 0, 1);
					}
				`,

    // Here we define the vertex attributes for the above shader
    attributes: {
      // regl.buffer creates a new array buffer object
      position: regl.buffer([
        [-1, -1],
        [1, -1],
        [-1, 1], // no need to flatten nested arrays, regl automatically
        [-1, 1],
        [1, 1],
        [1, -1], // unrolls them into a typedarray (default Float32)
      ]),

      // regl automatically infers sane defaults for the vertex attribute pointers
    },

    uniforms: {
      uResolution: ({ viewportWidth, viewportHeight }) => [
        viewportWidth,
        viewportHeight,
      ],
      uTime: ({ tick }) => {
        console.log(
          '🚀 ~ file: interactiev-gradient.js ~ line 108 ~ InteractiveGradient ~ tick',
          tick
        );
        return 0.01 * tick;
      },
      uMouse: () => [mousePosition.x, mousePosition.y],
      uMorph: () => morphAmount,
      uRandomSeed: new Date().getTime() % 1000000,
      uGrid: ({ viewportWidth, viewportHeight }) => {
        const ratio = 0.32;
        return viewportHeight >= viewportWidth
          ? [1, (viewportHeight / viewportWidth) * ratio]
          : [(viewportWidth / viewportHeight) * ratio, 1];
      },
    },

    // This tells regl the number of vertices to draw in this command
    count: 6,
  });

  useEffect(() => {
    if (windows) {
      setIsLoading(false);
    }
  }, [windows]);

  return (
    <div onMouseMove={handleMouseMove}>
      {!isLoading && (
        <ReglFrame width={`${windows.width}px`} height={`${windows.height}px`}>
          <Triangle color={[1, 0, 0, 1]} />
        </ReglFrame>
      )}
    </div>
  );
};

export default InteractiveGradient;
