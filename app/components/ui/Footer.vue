<template>
  <footer
    class="w-full py-stack-md bg-transparent border-t border-outline-variant/10 mt-stack-lg relative z-10"
  >
    <div
      class="flex flex-col md:flex-row justify-evenly items-center px-gutter max-w-container-max mx-auto space-y-4 md:space-y-0"
    >
      <button
        class="font-display-lg cursor-pointer hover:scale-110 transition-transform duration-300"
        @click="globalNavigate('home')"
      >
        <NuxtImg
          src="/images/logos/logo.webp"
          alt="My Logo"
          class="w-10 h-10 object-contain"
        />
      </button>
      <p class="font-body-md text-body-md text-on-surface-variant">
        © 2026 Robby Azwan Saputra. Built with precision.
      </p>
      <div class="flex space-x-2">
        <NuxtLink
          to="https://github.com/Robaz04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UIcon name="i-custom-github" class="w-7 h-7 hover:scale-110 transition-all duration-300" />
        </NuxtLink>
        <NuxtLink
          to="https://instagram.com/robbyazwan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UIcon name="i-custom-instagram" class="w-7 h-7 hover:scale-110 transition-all duration-300" />
        </NuxtLink>
        <NuxtLink
          to="https://wa.me/6281384310179"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UIcon name="i-custom-whatsapp" class="w-7 h-7 hover:scale-110 transition-all duration-300" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from "vue";
const globalNavigate = inject("globalNavigate");
</script>
