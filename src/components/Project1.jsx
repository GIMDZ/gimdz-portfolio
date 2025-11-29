import {
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from '@react-three/drei';

import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { useMemo } from 'react';

export default function Project1() {
  // Load local model from the public/models folder instead of remote URL
  const computer = useGLTF('/models/macbook-14-transformed.glb');

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1440px)' });
  const is4K = useMediaQuery({ query: '(min-width: 2560px)' });

  // Calculate responsive values based on screen size
  const responsiveValues = useMemo(() => {
    if (is4K) {
      return {
        // Slightly smaller iframe scaling because Html will also scale with the model
        distanceFactor: 1.35,
        // Multiplied position by 10
        position: [-1.5, 10.8, -19],
        // Multiplied iframeScale by 10
        iframeScale: 10,
        // Reduced model scale by 10
        modelScale: 0.086,
      };
    }
    if (isLargeScreen) {
      return {
        distanceFactor: 1.38,
        position: [1.7, 10, -19],
        iframeScale: 10,
        modelScale: 0.086,
      };
    }
    if (isTablet && !isMobile) {
      return {
        distanceFactor: 1.45,
        position: [1.7, 10, -19],
        iframeScale: 9.5,
        modelScale: 0.086,
      };
    }
    if (isMobile) {
      return {
        distanceFactor: 1.6,
        position: [2, 7.85, -19],
        iframeScale: 8.8,
        modelScale: 0.086,
      };
    }
    // Default (desktop 1920x1080)
    return {
      distanceFactor: 1.17,
      position: [-1.5, 10.8, -19],
      iframeScale: 10.2,
      modelScale: 0.078,
    };
  }, [isMobile, isTablet, isLargeScreen, is4K]);

  return (
    <Canvas
      className="rounded-2xl"
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <color args={['#64748B']} attach="background" />

      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0, 0]}
        azimuth={[-0, 0]}
        damping={0.1}
        snap
      >
        <Float rotationIntensity={0.2}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive
            scale={responsiveValues.modelScale}
            object={computer.scene}
            position-y={-1.2}
            position-x={0.5}
            rotation-x={0.13}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={responsiveValues.distanceFactor}
              position={responsiveValues.position}
              rotation-x={-0.35}
              scale={responsiveValues.iframeScale}
              zIndexRange={[1, 1]}
            >
              <iframe src="https://www.fresco-design.com/" />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-2} opacity={0.4} scale={5} blur={2.4} />
    </Canvas>
  );
}
