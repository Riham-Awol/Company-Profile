import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

/** Gently steers the whole scene toward the pointer for a parallax feel. */
function ParallaxRig({ children }) {
  const group = useRef()
  const width = useThree((state) => state.size.width)
  const wide = width > 940

  useFrame((state, delta) => {
    const damp = 1 - Math.pow(0.001, delta)
    group.current.rotation.y += (state.pointer.x * 0.35 - group.current.rotation.y) * damp
    group.current.rotation.x += (-state.pointer.y * 0.22 - group.current.rotation.x) * damp
  })

  return (
    <group ref={group} position={[wide ? 2.1 : 0, 0, 0]} scale={wide ? 1 : 0.68}>
      {children}
    </group>
  )
}

/** The hero centrepiece: a slowly morphing, self-rotating blob. */
function Core() {
  const mesh = useRef()

  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * 0.18
    mesh.current.rotation.z += delta * 0.05
  })

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.45, 48]} />
        <MeshDistortMaterial
          color="#12a4bd"
          emissive="#0b4f6c"
          emissiveIntensity={0.45}
          roughness={0.26}
          metalness={0.42}
          distort={0.36}
          speed={1.5}
        />
      </mesh>
    </Float>
  )
}

/** Wireframe shell around the core. */
function Shell() {
  const mesh = useRef()

  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.11
    mesh.current.rotation.y -= delta * 0.07
  })

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[2.35, 1]} />
      <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.22} />
    </mesh>
  )
}

/** Four satellites, one per product, tracing their own orbit. */
function Satellites({ colors }) {
  const group = useRef()

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.32
    group.current.children.forEach((child, i) => {
      child.position.y = Math.sin(state.clock.elapsedTime * 0.8 + i * 1.6) * 0.45
    })
  })

  return (
    <group ref={group} rotation={[0.35, 0, 0.2]}>
      {colors.map((color, i) => {
        const angle = (i / colors.length) * Math.PI * 2
        const radius = 3.1
        return (
          <mesh key={color} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
            <sphereGeometry args={[0.135, 24, 24]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.7} roughness={0.35} />
          </mesh>
        )
      })}
    </group>
  )
}

/** Drifting dust so the space around the core does not read as empty. */
function Dust({ count = 340 }) {
  const points = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4.5 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [positions])

  useFrame((_, delta) => {
    points.current.rotation.y += delta * 0.035
  })

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial size={0.035} color="#8fd8e8" transparent opacity={0.6} sizeAttenuation depthWrite={false} />
    </points>
  )
}

export default function Scene3D({ accents }) {
  return (
    <Canvas
      className="hero-canvas"
      // r3f writes position/width/height inline, so the fill has to come through `style`.
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 8.5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 5]} intensity={1.5} color="#e0f7ff" />
      <pointLight position={[-5, -2, -4]} intensity={45} color="#6366f1" />
      <pointLight position={[5, 2, 3]} intensity={30} color="#22d3ee" />
      <spotLight position={[0, 6, 2]} angle={0.6} penumbra={1} intensity={55} color="#a5f3fc" />
      <Suspense fallback={null}>
        <ParallaxRig>
          <Core />
          <Shell />
          <Satellites colors={accents} />
          <Dust />
        </ParallaxRig>
      </Suspense>
    </Canvas>
  )
}
