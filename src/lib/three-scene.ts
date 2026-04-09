import * as THREE from 'three'

export function initThreeScene(canvas: HTMLCanvasElement): () => void {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    55,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
  )
  camera.position.z = 6

  // Icosahedron wireframe
  const icoGeometry = new THREE.IcosahedronGeometry(2.2, 1)
  const edgesGeometry = new THREE.EdgesGeometry(icoGeometry)
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xe85d27,
    opacity: 0.7,
    transparent: true,
  })
  const wireframe = new THREE.LineSegments(edgesGeometry, lineMaterial)
  scene.add(wireframe)

  // Particles
  const particleCount = 80
  const particleGeometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const velocities = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 2.2 + Math.random() * 2
    positions[i3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i3 + 2] = r * Math.cos(phi)

    velocities[i3] = (positions[i3] / r) * 0.01
    velocities[i3 + 1] = (positions[i3 + 1] / r) * 0.01
    velocities[i3 + 2] = (positions[i3 + 2] / r) * 0.01
  }

  particleGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
  )

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xc98a1a,
    size: 0.04,
    transparent: true,
    opacity: 0.9,
  })

  const particles = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(particles)

  // Animation
  let frameId: number

  function animate() {
    frameId = requestAnimationFrame(animate)

    wireframe.rotation.x += 0.003
    wireframe.rotation.y += 0.005

    const posAttr = particleGeometry.getAttribute(
      'position'
    ) as THREE.BufferAttribute
    const posArray = posAttr.array as Float32Array

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      posArray[i3] += velocities[i3]
      posArray[i3 + 1] += velocities[i3 + 1]
      posArray[i3 + 2] += velocities[i3 + 2]

      const dist = Math.sqrt(
        posArray[i3] ** 2 + posArray[i3 + 1] ** 2 + posArray[i3 + 2] ** 2
      )

      if (dist > 8) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = 2.2
        posArray[i3] = r * Math.sin(phi) * Math.cos(theta)
        posArray[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        posArray[i3 + 2] = r * Math.cos(phi)
        velocities[i3] = (posArray[i3] / r) * 0.01
        velocities[i3 + 1] = (posArray[i3 + 1] / r) * 0.01
        velocities[i3 + 2] = (posArray[i3 + 2] / r) * 0.01
      }
    }

    posAttr.needsUpdate = true

    renderer.render(scene, camera)
  }

  animate()

  // Resize handler
  function onResize() {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }

  window.addEventListener('resize', onResize)

  // Cleanup
  return () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('resize', onResize)
    icoGeometry.dispose()
    edgesGeometry.dispose()
    lineMaterial.dispose()
    particleGeometry.dispose()
    particleMaterial.dispose()
    renderer.dispose()
  }
}
