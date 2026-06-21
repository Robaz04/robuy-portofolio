<template>
  <nav class="fixed top-0 w-full z-50 bg-surface/30 backdrop-blur-md border-b border-outline-variant/20">
    <div class="flex justify-center items-center gap-16 px-gutter py-4 max-w-[1200px] mx-auto">
      <button
        class="font-display-lg text-headline-md text-primary tracking-tighter cursor-pointer"
        @click="emit('navigate', 'home')"
      >
        R
      </button>

      <div class="hidden md:flex space-x-8">
        <button
          v-for="item in navItems"
          :key="item.view"
          :class="[
            'font-label-md text-label-md transition-all pb-1 border-b-2 cursor-pointer',
            activeView === item.view
              ? 'text-primary border-primary scale-110'
              : 'text-on-surface-variant border-transparent hover:text-primary hover:border-primary'
          ]"
          @click="emit('navigate', item.view)"
        >
          {{ item.label }}
        </button>
      </div>

      <button class="md:hidden text-on-surface absolute right-6 cursor-pointer">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  activeView: { type: String, default: 'home' }
})

const emit = defineEmits(['navigate'])

const navItems = [
  { label: 'Home', view: 'home' },
  { label: 'Experiences', view: 'experiences' },
  { label: 'Projects', view: 'projects' },
  { label: 'Contact', view: 'contact' },
]
</script>