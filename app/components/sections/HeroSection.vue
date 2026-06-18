<template>
  <section
    class="scroll-section min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative pt-20 pb-20"
    id="home"
  >
    <!-- Left: Text -->
    <div class="flex flex-col items-start text-left z-10">
      <!-- Badge -->
      <div class="inline-flex items-center space-x-2 bg-surface-container/50 border border-outline-variant/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(208,188,255,0.8)]" />
        <span class="text-sm text-on-surface-variant font-label-md">Open to collaborate</span>
      </div>

      <!-- Name -->
      <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 font-bold tracking-tighter">
        Robby Azwan Saputra
      </h1>

      <!-- Typewriter -->
      <div class="h-12 mb-6">
        <span class="font-headline-md text-headline-sm md:text-headline-md gradient-text font-semibold typewriter-text">
          {{ currentRole }}
        </span>
      </div>

      <!-- Tagline -->
      <p class="max-w-xl text-on-surface-variant font-body-lg text-body-lg mb-10 leading-relaxed">
        I build things for the web, explore patterns in data, experiment with machine learning and turning curiosity into code.
      </p>

      <!-- CTA -->
      <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <a href="#work" class="bg-gradient-to-r from-inverse-primary to-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:shadow-[0_0_20px_rgba(109,59,215,0.4)] transition-all duration-300 text-center">
          View My Work
        </a>
        <a href="#contact" class="bg-transparent border border-primary text-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary/10 transition-colors duration-300 text-center">
          Get In Touch
        </a>
      </div>
    </div>

    <!-- Right: Photo placeholder -->
    <div class="flex justify-center md:justify-end items-center z-10 w-full">
      <div class="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(208,188,255,0.25)] border border-primary/30">
        <!-- Ganti src dengan foto kamu nanti -->
        <div class="w-full h-full bg-surface-container flex items-center justify-center">
          <span class="material-symbols-outlined text-8xl text-primary/30">person</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow text-on-surface-variant">
      <span class="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const roles = ['Web Developer', 'Software Engineer', 'Data Enthusiast', 'ML Explorer']
const currentRole = ref(roles[0])
let interval = null

onMounted(() => {
  let i = 0
  interval = setInterval(() => {
    i = (i + 1) % roles.length
    currentRole.value = roles[i]
  }, 4000)
})

onUnmounted(() => clearInterval(interval))
</script>