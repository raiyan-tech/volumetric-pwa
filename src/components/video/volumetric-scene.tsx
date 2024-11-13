"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense } from "react"
import { VRButton, ARButton, XR, Controllers } from "@react-three/xr"

interface VolumetricSceneProps {
  sourceUrl: string
  mode: "normal" | "ar" | "vr"
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

export function VolumetricScene({ sourceUrl, mode }: VolumetricSceneProps) {
  return (
    <>
      {mode === "vr" && <VRButton />}
      {mode === "ar" && <ARButton />}
      <Canvas
        camera={{ position: [0, 1.5, 3], fov: 50 }}
        style={{ height: "100%" }}
      >
        <XR>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Model url={sourceUrl} />
            <OrbitControls enableZoom={true} enablePan={true} />
            {(mode === "ar" || mode === "vr") && <Controllers />}
          </Suspense>
        </XR>
      </Canvas>
    </>
  )
} 