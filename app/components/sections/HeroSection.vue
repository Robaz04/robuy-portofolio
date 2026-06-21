<template>
  <section
    class="scroll-section min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative pt-20 pb-20"
    id="home"
  >
    <!-- Left: Text -->
    <div class="flex flex-col items-start text-left z-10">
      <!-- Badge -->
      <div
        class="inline-flex items-center space-x-2 bg-surface-container/50 border border-outline-variant/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
      >
        <span
          class="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(208,188,255,0.8)]"
        />
        <span class="text-sm text-on-surface-variant font-label-md"
          >Open to collaborate</span
        >
      </div>

      <!-- Name -->
      <h1
        class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 font-bold tracking-tighter"
      >
        Robby Azwan Saputra
      </h1>

      <!-- Typewriter -->
      <div class="h-12 mb-6">
        <span
          class="font-headline-md text-headline-sm md:text-headline-md gradient-text font-semibold typewriter-text"
        >
          {{ currentRole }}
        </span>
      </div>

      <!-- Tagline -->
      <p
        class="max-w-xl text-on-surface-variant font-body-lg text-body-lg mb-10 leading-relaxed"
      >
        I build things for the web, explore patterns in data, experiment with
        machine learning and turning curiosity into code.
      </p>

      <!-- CTA -->
      <div
        class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
      >
        <!-- Tombol View My Work -->
        <button
          @click="navigateTo('projects')"
          class="bg-gradient-to-r from-inverse-primary to-primary text-on-primary hover:text-black px-8 py-3 rounded-full font-label-md text-label-md hover:shadow-[0_0_20px_rgba(109,59,215,0.4)] transition-all duration-300 text-center cursor-pointer"
        >
          View My Work
        </button>

        <!-- Tombol Get In Touch -->
        <button
          @click="navigateTo('contact')"
          class="bg-transparent border border-primary text-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary/10 transition-colors duration-300 text-center cursor-pointer"
        >
          Get In Touch
        </button>
      </div>
    </div>

    <!-- Right: Photo placeholder -->
    <div class="flex justify-center md:justify-end items-center z-10 w-full">
      <div
        ref="tiltCard"
        class="relative w-full max-w-md aspect-square rounded-2xl border border-primary/30 bg-[#161021]/50 backdrop-blur-sm transition-all duration-300 ease-out preserve-3d cursor-pointer group"
        style="
          box-shadow:
            0 0 40px -5px rgba(168, 85, 247, 0.2),
            0 0 20px -5px rgba(217, 70, 239, 0.1);
        "
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        @mouseenter="handleMouseEnter"
      >
        <div
          class="absolute inset-[-2px] rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 flex items-center justify-center"
        >
          <div class="animated-cosmic-border"></div>
        </div>

        <div
          class="absolute inset-4 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-2xl opacity-0 group-hover:opacity-40 group-hover:blur-2xl transition-all duration-500 -z-20"
        ></div>

        <div
          class="w-full h-full rounded-2xl overflow-hidden inner-card-shadow transform-3d bg-[#161021]"
        >
          <NuxtImg
            src="/images/foto1.webp"
            alt="Foto Portofolio"
            class="w-full h-full object-cover rounded-2xl scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        <div
          class="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
          :style="shineStyle"
        ></div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow text-on-surface-variant"
    >
      <span class="material-symbols-outlined text-3xl"
        >keyboard_arrow_down</span
      >
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, inject } from "vue";

// Tangkap fungsi navigasi dari layout default
const navigateTo = inject("globalNavigate");

const roles = [
  "Web Developer",
  "Software Engineer",
  "Data Enthusiast",
  "ML Explorer",
];
const currentRole = ref(roles[0]);
let interval = null;

onMounted(() => {
  let i = 0;
  interval = setInterval(() => {
    i = (i + 1) % roles.length;
    currentRole.value = roles[i];
  }, 4000);
});

onUnmounted(() => clearInterval(interval));

// tilt effect
const tiltCard = ref(null);
const rotateX = ref(0);
const rotateY = ref(0);
const shineX = ref(0);
const shineY = ref(0);
const isHovered = ref(false);

// Menghitung refleksi kilatan cahaya (shine effect) berdasarkan posisi mouse
const shineStyle = computed(() => {
  if (!isHovered.value) return {};
  return {
    background: `radial-gradient(circle 200px at ${shineX.value}px ${shineY.value}px, rgba(255,255,255,0.15), transparent)`,
  };
});

const handleMouseMove = (e) => {
  const card = tiltCard.value;
  if (!card) return;

  const rect = card.getBoundingClientRect();

  // Posisi absolut mouse di dalam kartu
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  shineX.value = x;
  shineY.value = y;

  // Normalisasi posisi menjadi rentang -0.5 sampai 0.5
  const normalizedX = x / rect.width - 0.5;
  const normalizedY = y / rect.height - 0.5;

  // Maksimal kemiringan (15 derajat). Kalibrasi arah rotasi agar terasa "ditekan"
  rotateX.value = -(normalizedY * 20).toFixed(2); // Batas kemiringan sumbu X
  rotateY.value = (normalizedX * 20).toFixed(2); // Batas kemiringan sumbu Y

  // Terapkan transformasi langsung via style untuk performa 60FPS yang smooth
  card.style.transform = `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) scale3d(1.02, 1.02, 1.02)`;
};

const handleMouseEnter = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
  const card = tiltCard.value;
  if (!card) return;

  // Kembalikan ke posisi semula secara smooth memakai transisi CSS bawaan
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  card.style.transition = "transform 0.5s ease-out";
};
</script>

<style scoped>
.preserve-3d {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.transform-3d {
  transform: translateZ(20px);
}

.inner-card-shadow {
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.4);
}

/* ==========================================
   CSS UNTUK ANIMASI BORDER BERPUTAR KOSMIK
   ========================================== */

/* Kita buat kotak raksasa di belakang yang ukurannya melampaui kartu (150%) */
.animated-cosmic-border {
  position: absolute;
  width: 150%;
  height: 150%;
  /* Menggunakan conic-gradient agar putarannya mulus tanpa garis patah */
  background: conic-gradient(
    from 0deg,
    #a855f7 0%,
    /* Purple */ #d946ef 25%,
    /* Fuchsia */ #6366f1 50%,
    /* Indigo */ #3b82f6 75%,
    /* Blue */ #a855f7 100% /* Kembali ke Purple agar seamless */
  );
}

/* Jalankan animasi putar HANYA saat parent (.group) di-hover oleh user */
.group:hover .animated-cosmic-border {
  animation: spinBorder 3s linear infinite;
}

@keyframes spinBorder {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
