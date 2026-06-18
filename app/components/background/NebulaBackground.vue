<template>
  <canvas ref="canvas" class="particle-canvas" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvas = ref(null)
let renderer, scene, camera, particleSystem, raf

const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

// Texture lingkaran dengan soft glow
function makeCircleTexture(size = 64) {
  const c = document.createElement('canvas')
  c.width = c.height = size
  const ctx = c.getContext('2d')
  const r = size / 2
  const grad = ctx.createRadialGradient(r, r, 0, r, r, r)
  grad.addColorStop(0,   'rgba(255,255,255,1)')
  grad.addColorStop(0.3, 'rgba(255,255,255,0.8)')
  grad.addColorStop(0.7, 'rgba(255,255,255,0.15)')
  grad.addColorStop(1,   'rgba(255,255,255,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(c)
}

// Texture nebula blur
function makeNebulaTexture(color, size = 512) { // 1. Naikkan size ke 512 untuk tekstur gas yang lebih halus
  const c = document.createElement('canvas')
  c.width = c.height = size
  const ctx = c.getContext('2d')
  const r = size / 2
  
  const col = new THREE.Color(color)
  const rgb = `${col.r * 255 | 0},${col.g * 255 | 0},${col.b * 255 | 0}`
  
  const grad = ctx.createRadialGradient(r, r, 0, r, r, r)
  
  // 2. Kunci rahasianya: Distribusi warna melandai secara eksponensial
grad.addColorStop(0,   `rgba(${rgb}, 0.30)`) // Pusat lebih tebal/terang
grad.addColorStop(0.15,`rgba(${rgb}, 0.15)`) // Langsung drop di awal agar tidak membentuk lingkaran keras
grad.addColorStop(0.4, `rgba(${rgb}, 0.06)`) 
grad.addColorStop(0.7, `rgba(${rgb}, 0.01)`) // Menyisakan bias sangat tipis yang luas
grad.addColorStop(0.8, `rgba(${rgb}, 0)`)    // Sudah mati total di 80%
grad.addColorStop(1,   `rgba(${rgb}, 0)`)    // Buffer kosong 20% agar tepinya dijamin ga kepotong
  
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  
  const texture = new THREE.CanvasTexture(c)
  
  // 3. Matikan Mipmapping & Atur Filtering agar interpolasi blur-nya sempurna
  texture.generateMipmaps = false
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  
  return texture
}

function addNebula(color, x, y, z, scale) {
  const mat = new THREE.SpriteMaterial({
    map: makeNebulaTexture(color),
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const sprite = new THREE.Sprite(mat)
  sprite.position.set(x, y, z)
  sprite.scale.set(scale, scale, 1)
  
  // Tambahkan ini: Putar sprite secara acak agar tumpukan gas terlihat natural
  sprite.material.rotation = Math.random() * Math.PI * 2
  
  scene.add(sprite)
  return sprite
}

let nebulae = []
let clock = 0

onMounted(() => {
  const el = canvas.value
  renderer = new THREE.WebGLRenderer({ canvas: el, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

  const W = window.innerWidth, H = window.innerHeight
  renderer.setSize(W, H, false)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100)
  camera.position.z = 30

  // Particles
  const COUNT = 400
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(COUNT * 3)
  const colors = new Float32Array(COUNT * 3)

  const palette = [
    new THREE.Color('#7c3aed'),
    new THREE.Color('#8b5cf6'),
    new THREE.Color('#a78bfa'),
    new THREE.Color('#d946ef'),
    new THREE.Color('#c084fc'),
    new THREE.Color('#e9d5ff'),
  ]

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 60
    positions[i * 3 + 1] = (Math.random() - 0.5) * 60
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40
    const col = palette[Math.floor(Math.random() * palette.length)]
    colors[i * 3] = col.r; colors[i * 3 + 1] = col.g; colors[i * 3 + 2] = col.b
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const pMat = new THREE.PointsMaterial({
    size: 0.35,
    map: makeCircleTexture(64),  // ← kunci: texture lingkaran
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  })

  particleSystem = new THREE.Points(geometry, pMat)
  scene.add(particleSystem)

  // Nebula — kiri atas dan kanan bawah
nebulae = [
  addNebula('#6d28d9', -30,  12, -15, 55), // dari 28 ke 38
  addNebula('#9333ea', -27,  8, -18, 40), // dari 20 ke 28
  addNebula('#7c3aed',  26, -12, -12, 34), // dari 24 ke 34
  addNebula('#c026d3',  30, -16, -20, 30), // dari 18 ke 26
  addNebula('#a855f7', -48, -18, -14, 15),
  addNebula('#a855f7', 48, 14, -14, 15),
  addNebula('#d946ef', -6, -30, -25, 50)
]

  const onResize = () => {
    const w = window.innerWidth, h = window.innerHeight
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }

  const onMouseMove = (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1
  }

  window.addEventListener('resize', onResize)
  window.addEventListener('mousemove', onMouseMove)

  const tick = (ts) => {
    raf = requestAnimationFrame(tick)
    clock = ts * 0.001

    particleSystem.rotation.y += 0.0006
    particleSystem.rotation.x += 0.0002

    mouse.x += (mouse.targetX - mouse.x) * 0.04
    mouse.y += (mouse.targetY - mouse.y) * 0.04
    camera.position.x = mouse.x * 3
    camera.position.y = mouse.y * 3
    camera.lookAt(scene.position)

    // Nebula breathe (hanya opacity, sangat ringan)
    nebulae.forEach((n, i) => {
      n.material.opacity = 0.7 + Math.sin(clock * 0.4 + i * 1.3) * 0.3
    })

    renderer.render(scene, camera)
  }
  tick(0)

  onUnmounted(() => {
    cancelAnimationFrame(raf)
    geometry.dispose()
    pMat.dispose()
    renderer.dispose()
    window.removeEventListener('resize', onResize)
    window.removeEventListener('mousemove', onMouseMove)
  })
})
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  display: block;
  background: radial-gradient(circle at center, #0f0720 0%, #05020a 100%);
}
</style>