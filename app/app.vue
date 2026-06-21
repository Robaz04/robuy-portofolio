<template>
  <div>
    <UiLoadingScreen :is-loading="isLoading" />

    <NuxtLayout :is-loading="isLoading">
      <NuxtPage :is-loading="isLoading" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

useHead({
  htmlAttrs: {
    style: 'background-color: #161021;'
  },
  bodyAttrs: {
    style: 'background-color: #161021; margin: 0; padding: 0; overflow-x: hidden;'
  }
})

onMounted(() => {
  if (document.readyState === 'complete') {
    finishLoading()
  } else {
    window.addEventListener('load', finishLoading)
  }
})

const finishLoading = () => {
  setTimeout(() => {
    isLoading.value = false
  }, 1200)
}
</script>