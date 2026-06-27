<template>
  <!-- Navbar Utama -->
  <nav
    class="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-sm border-b border-outline-variant/10 transition-all duration-300"
  >
    <!-- Perubahan di class: md:justify-center dan justify-between -->
    <div
      class="flex justify-between md:justify-center items-center gap-16 px-gutter py-4 max-w-[1200px] mx-auto w-full"
    >
      <!-- Logo (Otomatis di kiri saat HP karena justify-between) -->
      <button
        class="font-display-lg cursor-pointer"
        @click="emit('navigate', 'home')"
      >
        <NuxtImg
          src="/images/logos/logo.webp"
          alt="My Logo"
          class="w-10 h-10 object-contain"
        />
      </button>

      <!-- Menu Desktop (Tetap tersembunyi di HP) -->
      <div class="hidden md:flex space-x-8">
        <button
          v-for="item in navItems"
          :key="item.view"
          :class="[
            'font-label-md text-label-md transition-all pb-1 border-b-2 cursor-pointer',
            activeView === item.view
              ? 'text-primary border-primary scale-110'
              : 'text-on-surface-variant border-transparent hover:text-primary hover:border-primary',
          ]"
          @click="emit('navigate', item.view)"
        >
          {{ item.label }}
        </button>
      </div>

      <!-- Tombol Hamburger (Otomatis di kanan saat HP, ditambahkan event click) -->
      <button
        @click="isOpen = true"
        class="md:hidden text-on-surface cursor-pointer flex items-center justify-center p-1"
      >
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </nav>

  <!-- Backdrop Gelap saat Menu HP Terbuka -->
  <div
    v-if="isOpen"
    @click="isOpen = false"
    class="fixed inset-0 bg-black/50 z-50 md:hidden backdrop-blur-sm transition-opacity"
  ></div>

  <!-- Aside Navigation Menu untuk HP -->
  <aside
    :class="[
      'fixed top-0 right-0 h-full w-[250px] bg-surface z-50 p-6 shadow-2xl transform transition-transform duration-300 md:hidden flex flex-col',
      isOpen ? 'translate-x-0' : 'translate-x-full',
    ]"
  >
    <!-- Tombol Close di dalam Aside -->
    <div class="flex justify-end mb-8">
      <button @click="isOpen = false" class="text-on-surface cursor-pointer">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>

    <!-- Daftar Menu Link untuk HP -->
    <div class="flex flex-col space-y-6">
      <button
        v-for="item in navItems"
        :key="item.view"
        :class="[
          'text-left font-label-md text-lg py-2 border-b transition-all cursor-pointer',
          activeView === item.view
            ? 'text-primary border-primary pl-2'
            : 'text-on-surface-variant border-transparent hover:text-primary',
        ]"
        @click="handleMobileNavigate(item.view)"
      >
        {{ item.label }}
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  activeView: { type: String, default: "home" },
});

const emit = defineEmits(["navigate"]);

const navItems = [
  { label: "Home", view: "home" },
  { label: "Experiences", view: "experiences" },
  { label: "Projects", view: "projects" },
  { label: "Contact", view: "contact" },
];

// State tambahan untuk mengontrol buka/tutup menu HP
const isOpen = ref(false);

// Fungsi untuk navigasi di HP (pindah halaman sekaligus menutup aside)
const handleMobileNavigate = (view) => {
  emit("navigate", view);
  isOpen.value = false;
};
</script>
