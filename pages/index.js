import React, { useRef, Suspense } from "react";
import Head from 'next/head'
import Image from 'next/image';
import {
  useGLTF,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import autumnBackground from '../public/autumn-forest-godrays.jpg';
import castleBackground from '../public/castle.jpg';
import volcanoBackground from '../public/volcano.jpg';

export function Sting(props) {
  const ref = useRef()

  const { nodes, materials } = useGLTF('/sting-lowpoly-compressed.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <group {...props} dispose={null} ref={ref}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 11.76]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Garde_Sting_0.geometry} material={materials.Sting} />
          </group>
          <group position={[0, 0, 27.96]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Pommeau_Sting_0.geometry} material={materials.Sting} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Manche_Sting_0.geometry} material={materials.Sting} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Lame_Sting_0.geometry} material={materials.Sting} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default function Home() {
  const [background, setBackground] = React.useState({ image: autumnBackground, hdri: "autumn-forest-1k.hdr" });

  return (
    <div className="container"><Head>
      <title>React Three Fiber Sting</title>
      <meta name="description" content="React Three Fiber example of dynamic lighting on a sword" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <nav>
        <button onClick={() => setBackground({ image: autumnBackground, hdri: "autumn-forest-1k.hdr" })}>Autumn Forest</button>
        <button onClick={() => setBackground({ image: castleBackground, hdri: "lost-city-4k.hdr" })}>Castle Ruins</button>
        <button onClick={() => setBackground({ image: volcanoBackground, hdri: "circus_arena_1k.hdr" })}>Mount Doom</button>
      </nav>

      <Image src={background.image} alt="Autumn background" layout="fill" fill style={{ objectFit: "cover" }} />

      <Canvas camera={{ position: [0, 100, 10], fov: 40 }}>

        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

        <Suspense fallback={null}>
          <Sting />
          <Environment files={background.hdri} />
        </Suspense>
        <OrbitControls />
      </Canvas>

      <div className="attribution">
        "Sting Sword Lowpoly" (https://skfb.ly/6nQTY) by KangaroOz 3D is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
      </div>
    </div>
  )
}
