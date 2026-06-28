<template>
  <div class="relative min-h-screen bg-transparent text-white">
    <ClientOnly>
      <BackgroundNebulaBackground />
    </ClientOnly>

    <UiNavbar :active-view="currentView" @navigate="handleNavigate" />

    <Transition :name="transitionName" mode="out-in">
      <main
        v-if="currentView === 'home'"
        key="home"
        :class="[
          'transition-all duration-1000 delay-300 min-h-screen bg-transparent flex flex-col items-center w-full px-5 md:px-6',
          isLoading
            ? 'opacity-0 scale-95 blur-sm'
            : 'opacity-100 scale-100 blur-0',
        ]"
      >
        <slot />
      </main>

      <main
        v-else-if="currentView === 'experiences'"
        key="experiences"
        class="min-h-screen bg-transparent flex flex-col items-center w-full px-5 md:px-6"
      >
        <div class="w-full max-w-[1200px] mx-auto pt-20">
          <SectionsExperienceSection />
        </div>
      </main>

      <main
        v-else-if="currentView === 'projects'"
        key="projects"
        class="min-h-screen bg-transparent flex flex-col items-center w-full px-5 md:px-6"
      >
        <div class="w-full max-w-[1200px] mx-auto pt-20">
          <SectionsProjectSection @navigate="handleNavigate"/>
        </div>
      </main>

      <main
        v-else-if="currentView === 'contact'"
        key="contact"
        class="min-h-screen bg-transparent flex flex-col items-center w-full px-5 md:px-6"
      >
        <div class="w-full max-w-[1200px] mx-auto pt-20">
          <SectionsContactSection />
        </div>
      </main>
    </Transition>

    <UiFooter />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'

const currentView = ref('home')
const transitionName = ref('rotate-forward')
const viewOrder = ['home', 'experiences', 'projects', 'contact']

const handleNavigate = (view) => {
  if (view === currentView.value) return

  const currentIndex = viewOrder.indexOf(currentView.value)
  const nextIndex = viewOrder.indexOf(view)
  transitionName.value = nextIndex > currentIndex ? 'rotate-forward' : 'rotate-back'

  currentView.value = view
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

provide('globalNavigate', handleNavigate)
</script>
