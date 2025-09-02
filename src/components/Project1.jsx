import {
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from '@react-three/drei';

import { Canvas } from '@react-three/fiber';

export default function Experience() {
  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );

  return (
    <Canvas
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
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
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
            object={computer.scene}
            position-y={-1.2}
            position-x={0.5}
            // rotation-x={ 0.13 }
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://www.fresco-design.com/" />
            </Html>
          </primitive>

          {/*<Text*/}
          {/*  font="./bangers-v20-latin-regular.woff"*/}
          {/*  fontSize={1}*/}
          {/*  position={[2, 0.75, 0.75]}*/}
          {/*  rotation-y={-1.25}*/}
          {/*  maxWidth={2}*/}
          {/*>*/}
          {/*  BRUNO SIMON*/}
          {/*</Text>*/}
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </Canvas>
  );
}
