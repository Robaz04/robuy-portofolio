<template>
  <section class="w-full pt-20 pb-stack-lg" id="projects">
    <!-- Header -->
    <header class="mb-stack-lg max-w-2xl">
      <div class="flex items-center gap-4 mb-4">
        <div class="h-[2px] w-12 bg-primary" />
        <span class="text-primary font-label-md tracking-widest uppercase"
          >Portfolio</span
        >
      </div>
      <h1
        class="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-sm text-on-surface"
      >
        Projects
      </h1>
      <p class="text-on-surface-variant font-body-lg text-body-lg">
        A curated selection of projects spanning web development, data, and
        software engineering.
      </p>
    </header>

    <section class="mb-stack-lg w-full max-w-[1200px] mx-auto">
      <div
        class="relative group overflow-hidden rounded-2xl surface_glass flex flex-col md:block"
        @mouseenter="pauseAutoplay"
        @mouseleave="resumeAutoplay"
      >
        <div
          class="aspect-[16/10] md:aspect-[21/9] w-full relative bg-surface-container-highest flex items-center justify-center overflow-hidden"
        >
          <Transition name="featured-slide" mode="out-in">
            <div
              :key="activeFeatured"
              class="absolute inset-0 flex items-center justify-center"
            >
              <span
                class="material-symbols-outlined text-7xl md:text-9xl text-primary/10 select-none"
              >
                {{ featuredProjects[activeFeatured].icon }}
              </span>
            </div>
          </Transition>

          <div
            class="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent md:bg-gradient-to-t md:from-surface md:via-surface/20 md:to-transparent"
          />

          <div
            class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden z-20"
          >
            <button
              v-for="(_, index) in featuredProjects"
              :key="index"
              class="h-1.5 rounded-full transition-all duration-300"
              :class="
                activeFeatured === index
                  ? 'bg-primary w-5'
                  : 'bg-on-surface-variant/30 w-1.5'
              "
              @click="activeFeatured = index"
            />
          </div>

          <button
            class="absolute hidden md:flex hover:cursor-pointer hover:scale-105 left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full surface_glass items-center justify-center hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100"
            @click="prevFeatured"
          >
            <span class="material-symbols-outlined text-primary"
              >chevron_left</span
            >
          </button>
          <button
            class="absolute hidden md:flex hover:cursor-pointer hover:scale-105 right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full surface_glass items-center justify-center hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100"
            @click="nextFeatured"
          >
            <span class="material-symbols-outlined text-primary"
              >chevron_right</span
            >
          </button>
        </div>

        <div
          class="p-6 sm:p-8 md:absolute md:inset-0 md:p-0 md:pointer-events-none z-10 flex flex-col justify-between"
        >
          <div class="hidden md:block"></div>

          <div
            class="flex flex-col md:flex-row md:items-end md:justify-between md:p-8 w-full gap-6 md:gap-4 md:pointer-events-auto"
          >
            <div class="flex-1 max-w-xl">
              <Transition name="featured-text" mode="out-in">
                <div :key="activeFeatured">
                  <p
                    class="text-primary text-xs md:text-sm font-label-md tracking-widest uppercase mb-1.5 md:mb-2"
                  >
                    Featured Project
                  </p>
                  <h3
                    class="text-xl sm:text-2xl md:text-display-lg-mobile font-display-lg text-on-surface mb-2 md:mb-3"
                  >
                    {{ featuredProjects[activeFeatured].title }}
                  </h3>
                  <p
                    class="text-on-surface-variant text-sm leading-relaxed mb-4 md:mb-5 line-clamp-3 md:line-clamp-none"
                  >
                    {{ featuredProjects[activeFeatured].description }}
                  </p>

                  <div class="flex gap-3">
                    <NuxtLink
                      v-if="featuredProjects[activeFeatured].github"
                      :to="featuredProjects[activeFeatured].github"
                      target="_blank"
                      class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high border border-on-surface/10 md:surface_glass hover:bg-primary/20 hover:scale-105 transition-all"
                    >
                      <span
                        class="material-symbols-outlined text-primary text-[18px]"
                        >terminal</span
                      >
                    </NuxtLink>
                    <NuxtLink
                      v-if="featuredProjects[activeFeatured].demo"
                      :to="featuredProjects[activeFeatured].demo"
                      target="_blank"
                      class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high border border-on-surface/10 md:surface_glass hover:bg-primary/20 hover:scale-105 transition-all"
                    >
                      <span
                        class="material-symbols-outlined text-primary text-[18px]"
                        >open_in_new</span
                      >
                    </NuxtLink>
                  </div>
                </div>
              </Transition>
            </div>

            <div class="hidden md:flex gap-3 flex-shrink-0">
              <button
                v-for="(project, index) in featuredProjects"
                :key="index"
                class="relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 hover:cursor-pointer"
                :class="
                  activeFeatured === index
                    ? 'ring-2 ring-primary shadow-[0_0_12px_rgba(208,188,255,0.4)] scale-105'
                    : 'opacity-50 hover:opacity-80 grayscale hover:grayscale-0'
                "
                @click="activeFeatured = index"
              >
                <div
                  class="w-full h-full bg-surface-container-high flex items-center justify-center"
                >
                  <span
                    class="material-symbols-outlined text-primary/40 text-2xl"
                    >{{ project.icon }}</span
                  >
                </div>

                <div
                  v-if="activeFeatured === index"
                  class="absolute inset-0 bg-primary/10 flex items-end justify-center pb-1"
                >
                  <span
                    class="text-[8px] uppercase tracking-widest font-bold text-primary"
                    >Active</span
                  >
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Grid -->
    <section>
      <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h2 class="font-headline-md text-headline-md text-on-surface">
          All Projects
        </h2>

        <!-- Filter chips -->
        <div class="flex gap-2 flex-wrap">
          <button
            v-for="tag in filterTags"
            :key="tag"
            :class="[
              'tech-chip px-4 py-1 transition-all cursor-pointer rounded',
              activeFilter === tag
                ? 'bg-primary/30 border-primary/60'
                : 'hover:bg-primary/20',
            ]"
            @click="activeFilter = activeFilter === tag ? null : tag"
          >
            {{ tag }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="project in filteredProjects"
          :key="project.title"
          class="surface_glass rounded-xl overflow-hidden flex flex-col h-full"
        >
          <!-- Thumbnail -->
          <div
            class="aspect-video w-full overflow-hidden bg-surface-container-highest flex items-center justify-center"
          >
            <span class="material-symbols-outlined text-5xl text-primary/20">{{
              project.icon
            }}</span>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">
              {{ project.title }}
            </h3>
            <p
              class="text-on-surface-variant font-body-md text-body-md mb-6 flex-grow"
            >
              {{ project.description }}
            </p>

            <!-- Tech tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in project.tech" :key="tech" class="tech-chip">
                {{ tech }}
              </span>
            </div>

            <!-- Footer card -->
            <div
              class="flex justify-between items-center mt-auto pt-4 border-t border-outline-variant/20"
            >
              <div class="flex gap-4">
                <NuxtLink
                  v-if="project.github"
                  :to="project.github"
                  target="_blank"
                  class="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span class="material-symbols-outlined text-[20px]"
                    >code</span
                  >
                </NuxtLink>

                <NuxtLink
                  v-if="project.demo"
                  :to="project.demo"
                  target="_blank"
                  class="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span class="material-symbols-outlined text-[20px]"
                    >open_in_new</span
                  >
                </NuxtLink>
              </div>
              <span class="text-label-md font-label-md text-primary/60">{{
                project.year
              }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="mt-stack-lg py-stack-md text-center">
      <div
        class="surface_glass p-stack-md rounded-2xl border border-primary/20 max-w-4xl mx-auto"
      >
        <h2 class="font-headline-md text-headline-md text-on-surface mb-4">
          Have a project in mind?
        </h2>
        <p class="text-on-surface-variant mb-8 max-w-xl mx-auto">
          I'm open to freelance opportunities and collaborations. Let's build
          something great together.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4">
          <button
            class="bg-primary text-on-primary font-bold py-4 px-10 rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all active:scale-95"
          >
            Start a Conversation
          </button>
          <button
            class="surface_glass text-primary border border-primary/30 font-bold py-4 px-10 rounded-lg hover:bg-primary/10 transition-all active:scale-95"
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
// ---- DATA ----
// Ganti dengan project asli kamu nanti

// Featured carousel
const activeFeatured = ref(0);

const featuredProjects = [
  {
    title: "NatSense AR",
    description:
      "Aplikasi AR Unity untuk simulasi bencana alam dengan mode diorama interaktif — banjir, kebakaran hutan, dan badai.",
    icon: "view_in_ar",
    github: "#",
    demo: null,
  },
  {
    title: "HOG + SVM Human Detection",
    description:
      "Sistem deteksi manusia real-time dengan HOG descriptor, SVM classifier, dan Hard Negative Mining. Dilengkapi Streamlit app.",
    icon: "person_search",
    github: "#",
    demo: "#",
  },
  {
    title: "Way2Home",
    description:
      "Dashboard mandor berbasis Laravel Blade dengan manajemen proyek konstruksi dan sistem pelaporan real-time.",
    icon: "home_work",
    github: "#",
    demo: null,
  },
];

const nextFeatured = () => {
  activeFeatured.value = (activeFeatured.value + 1) % featuredProjects.length;
};
const prevFeatured = () => {
  activeFeatured.value =
    (activeFeatured.value - 1 + featuredProjects.length) %
    featuredProjects.length;
};

// Auto-play opsional
let autoplayInterval = null;
onMounted(() => {
  autoplayInterval = setInterval(nextFeatured, 5000);
});
onUnmounted(() => clearInterval(autoplayInterval));

// Pause autoplay saat hover
const pauseAutoplay = () => clearInterval(autoplayInterval);
const resumeAutoplay = () => {
  autoplayInterval = setInterval(nextFeatured, 5000);
};

const projects = [
  {
    title: "NatSense AR",
    description:
      "Aplikasi AR Unity untuk simulasi bencana alam (banjir & kebakaran hutan) dengan mode diorama interaktif.",
    tech: ["Unity", "AR Foundation", "C#"],
    icon: "view_in_ar",
    year: "2024",
    github: "#",
    demo: null,
  },
  {
    title: "HOG + SVM Human Detection",
    description:
      "Sistem deteksi manusia menggunakan HOG descriptor dan SVM dengan Hard Negative Mining. Dilengkapi Streamlit app.",
    tech: ["Python", "OpenCV", "Scikit-learn", "Streamlit"],
    icon: "person_search",
    year: "2024",
    github: "#",
    demo: null,
  },
  {
    title: "Way2Home",
    description:
      "Dashboard mandor berbasis Laravel Blade dengan sistem manajemen proyek konstruksi.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind"],
    icon: "home_work",
    year: "2024",
    github: "#",
    demo: null,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio dengan Nuxt.js, Three.js particle background, dan animasi cosmic.",
    tech: ["Nuxt", "Vue", "Three.js", "Tailwind"],
    icon: "web",
    year: "2025",
    github: "#",
    demo: "#",
  },
];

// Filter tags — auto-generate dari semua tech yang ada
const filterTags = [...new Set(projects.flatMap((p) => p.tech))].slice(0, 6);

const activeFilter = ref(null);

const filteredProjects = computed(() => {
  if (!activeFilter.value) return projects;
  return projects.filter((p) => p.tech.includes(activeFilter.value));
});
</script>
