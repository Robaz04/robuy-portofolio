<template>
  <main class="relative z-10 flex flex-col items-center w-full px-5 md:px-6 max-w-[1200px] mx-auto">
    <SectionsHeroSection />
    <SectionsAboutSection />
    <SectionsSkillsSection />
  </main>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'
useScrollReveal()

import { useScrollFade } from '~/composables/useScrollFade'
useScrollFade()
</script>