<template>
  <section class="w-full pt-20 pb-stack-lg" id="projects" ref="sectionRef">
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
        A curated collection of projects spanning computer vision, data
        engineering, web development, and interactive 3D experiences.
      </p>
    </header>

    <!-- Featured Carousel -->
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
              <NuxtImg
                :src="featuredProjects[activeFeatured].photos"
                alt="Featured Project"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
              />
            </div>
          </Transition>

          <div
            class="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent md:from-surface md:via-surface/20"
          />

          <!-- Dot indicators mobile -->
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

          <!-- Arrow nav -->
          <button
            class="absolute hidden bg-black md:flex hover:cursor-pointer hover:scale-105 left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full surface_glass items-center justify-center hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100"
            @click="prevFeatured"
          >
            <span class="material-symbols-outlined text-primary"
              >chevron_left</span
            >
          </button>
          <button
            class="absolute hidden bg-black md:flex hover:cursor-pointer hover:scale-105 right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full surface_glass items-center justify-center hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100"
            @click="nextFeatured"
          >
            <span class="material-symbols-outlined text-primary"
              >chevron_right</span
            >
          </button>
        </div>

        <!-- Info panel -->
        <div
          class="p-6 sm:p-8 md:absolute md:inset-0 md:p-0 md:pointer-events-none z-10 flex flex-col justify-between"
        >
          <div class="hidden md:block" />
          <div
            class="flex flex-col md:flex-row md:items-end md:justify-between md:p-8 w-full gap-6 md:gap-4 md:pointer-events-auto"
          >
            <div class="flex-1 max-w-xl">
              <Transition name="featured-text" mode="out-in">
                <div :key="activeFeatured">
                  <!-- Ditambahkan [text-shadow] tipis agar label teks kecil tetap terbaca -->
                  <p
                    class="text-primary text-[10px] md:text-xs font-label-sm tracking-widest uppercase mb-1 md:mb-1.5 [text-shadow:_0_1px_2px_rgba(0,0,0,0.6)]"
                  >
                    Featured Project
                  </p>
                  <!-- Ditambahkan [text-shadow] hitam lembut agar judul pop-out dari background -->
                  <h3
                    class="text-lg sm:text-xl md:text-2xl font-display-md text-on-surface mb-1.5 md:mb-2 [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    {{ featuredProjects[activeFeatured].title }}
                  </h3>
                  <!-- Menggunakan filter: drop-shadow agar seluruh teks paragraf memiliki bayangan pengaman kontras -->
                  <p
                    class="text-on-surface-variant text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
                  >
                    {{ featuredProjects[activeFeatured].description }}
                  </p>
                  <div class="flex gap-3">
                    <NuxtLink
                      v-for="link in featuredProjects[activeFeatured].links"
                      :key="link.url"
                      :to="link.url"
                      target="_blank"
                      class="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high border border-on-surface/10 md:surface_glass hover:bg-primary/20 hover:scale-105 transition-all"
                      :title="link.label"
                    >
                      <span
                        class="material-symbols-outlined text-primary text-[18px]"
                        >{{ link.icon }}</span
                      >
                    </NuxtLink>
                  </div>
                </div>
              </Transition>
            </div>

            <!-- Thumbnail previews -->
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
                  <NuxtImg
                    :src="project.photos"
                    alt="Thumbnail"
                    class="w-full h-full object-cover"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="projects-grid">
      <!-- Section title dengan animasi -->
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 w-full"
      >
        <Transition name="title-fade" mode="out-in">
          <h2
            :key="sectionTitle"
            class="font-headline-md text-headline-md text-on-surface whitespace-nowrap flex-shrink-0"
          >
            {{ sectionTitle }}
          </h2>
        </Transition>

        <div
          class="flex gap-2 flex-wrap w-full md:flex-1 md:flex-nowrap md:justify-end md:overflow-x-auto no-scrollbar py-1"
        >
          <button
            v-for="tag in filterTags"
            :key="tag.label"
            :class="[
              'px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1.5 transition-all duration-300 ease-out border cursor-pointer select-none flex-shrink-0 whitespace-nowrap',
              activeFilter === tag.label
                ? 'bg-primary text-black border-primary shadow-[0_0_12px_rgba(208,188,255,0.3)] font-semibold -translate-y-0.5'
                : 'bg-surface-container-low text-on-surface-variant border-outline/20 hover:bg-primary/15 hover:text-primary hover:border-primary/40 hover:-translate-y-0.5',
            ]"
            @click="setFilter(tag.label)"
          >
            <span
              class="material-symbols-outlined text-[16px] transition-transform duration-300"
              :class="{ 'rotate-12 scale-110': activeFilter === tag.label }"
            >
              {{ tag.icon }}
            </span>
            <span>{{ tag.label }}</span>
          </button>
        </div>
      </div>
      <!--Test-->
      <!-- Ganti TransitionGroup dengan structure ini -->
      <div class="space-y-8" ref="gridRef">
        <div
          v-for="(row, rowIndex) in displayedRows"
          :key="`row-${rowIndex}-${activeFilter}`"
          class="reveal-row"
          :style="{ transitionDelay: `${rowIndex * 0.05}s` }"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              v-for="(project, cardIndex) in row"
              :key="project.title"
              class="reveal-card relative group flex flex-col h-full rounded-xl overflow-hidden border border-white/10 bg-transparent transition-all duration-300 hover:border-violet-500/80 hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] hover:-translate-y-1"
              :style="{ transitionDelay: `${cardIndex * 0.1}s` }"
            >
              <div
                class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              >
                <div
                  class="absolute inset-0 rounded-xl border border-violet-400/80 shadow-[0_0_15px_rgba(139,92,246,0.45)]"
                />
              </div>
              <div
                class="relative z-10 flex flex-col h-full w-full rounded-[11px] overflow-hidden bg-transparent group-hover:bg-black/75 transition-colors duration-300"
              >
                <div
                  class="aspect-video w-full overflow-hidden bg-surface-container-highest relative group/card"
                >
                  <Transition name="photo-slide" mode="out-in">
                    <NuxtImg
                      :key="project.activePhoto ?? 0"
                      :src="project.photos[project.activePhoto ?? 0]"
                      alt="Foto"
                      class="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover/card:scale-105"
                    />
                  </Transition>

                  <div
                    v-if="project.photos.length > 1"
                    class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity"
                  >
                    <button
                      v-for="(_, pi) in project.photos"
                      :key="pi"
                      class="h-1 rounded-full transition-all duration-300"
                      :class="
                        (project.activePhoto ?? 0) === pi
                          ? 'bg-primary w-4'
                          : 'bg-white/40 w-1'
                      "
                      @click="project.activePhoto = pi"
                    />
                  </div>

                  <div v-if="project.photos.length > 1">
                    <button
                      class="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover/card:opacity-100 hover:bg-black/60 z-10 hover:scale-120 hover:cursor-pointer transition-all duration-300"
                      @click="prevPhoto(project)"
                    >
                      <span
                        class="material-symbols-outlined text-white text-[14px]"
                        >chevron_left</span
                      >
                    </button>
                    <button
                      class="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover/card:opacity-100 hover:bg-black/60 z-10 hover:scale-120 hover:cursor-pointer transition-all duration-300"
                      @click="nextPhoto(project)"
                    >
                      <span
                        class="material-symbols-outlined text-white text-[14px]"
                        >chevron_right</span
                      >
                    </button>
                  </div>
                </div>

                <div class="p-6 flex flex-col flex-grow text-on-surface">
                  <div class="flex items-start justify-between gap-2 mb-2">
                    <h3 class="font-headline-sm text-headline-sm">
                      {{ project.title }}
                    </h3>
                    <span
                      class="text-label-md font-label-md text-primary/60 flex-shrink-0"
                    >
                      {{ project.year }}
                    </span>
                  </div>

                  <p
                    class="text-on-surface-variant font-body-md text-body-md mb-4 flex-grow"
                  >
                    {{ project.description }}
                  </p>

                  <div class="flex flex-wrap gap-2 mb-4">
                    <span
                      v-for="tech in project.tech"
                      :key="tech"
                      class="tech-chip px-3 py-1 text-xs font-medium rounded-full bg-white/[0.03] border border-white/10 text-white/70 transition-colors group-hover:border-violet-500/30"
                    >
                      {{ tech }}
                    </span>
                  </div>

                  <div
                    class="flex items-center gap-3 mt-auto pt-4 border-t border-outline-variant/20"
                  >
                    <NuxtLink
                      v-for="link in project.links"
                      :key="link.url"
                      :to="link.url"
                      target="_blank"
                      class="flex items-center gap-1.5 text-on-surface-variant hover:text-violet-400 transition-all text-sm hover:translate-x-0.5 duration-300"
                      :title="link.label"
                    >
                      <span class="material-symbols-outlined text-[18px]">{{
                        link.icon
                      }}</span>
                      <span class="text-xs">{{ link.label }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
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
import { ref, computed, reactive, nextTick, onMounted, onUnmounted } from "vue";
import { useRowReveal } from "~/composables/useRowReveal";

// ── FEATURED ────────────────────────────────────────────────
const activeFeatured = ref(0);

const featuredProjects = [
  {
    title: "NatSense AR",
    description:
      "An augmented reality mobile application built with Unity and AR Foundation, simulating natural disaster scenarios such as flood, forest fire, and storm through interactive diorama scenes with real-time mode toggling, particle effects, and animated environments.",
    icon: "view_in_ar",
    photos: "/images/projects/natsense/nat1.webp",
    links: [
      {
        label: "Drive",
        icon: "folder",
        url: "https://drive.google.com/drive/folders/1L805bJFY12Gp8MxTbwu5Lq_ZiGCWpU0T?usp=sharing",
      },
    ],
  },
  {
    title: "HOG + SVM Human Detection",
    description:
      "A real-time human detection system leveraging Histogram of Oriented Gradients (HOG) and Support Vector Machine (SVM) classifier with Hard Negative Mining for improved accuracy. Deployed as an interactive Streamlit web app with multi-scale detection pipeline.",
    icon: "person_search",
    photos: "/images/projects/hog/hog1.webp",
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/Robaz04/human-detection-with-hog-svm",
      },
    ],
  },
  {
    title: "Way2Home",
    description:
      "A full-stack construction project management platform built with Laravel Blade, enabling foreman-level monitoring, task assignment, and real-time reporting. Features a responsive dashboard with role-based access and a sticky flexbox layout system.",
    icon: "home_work",
    photos: "/images/projects/way2home/way1.webp",
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/yumairai/Way2Home_KuliPremium_PPL7",
      },
      {
        label: "Live",
        icon: "open_in_new",
        url: "https://way2home.edhyrg.my.id/",
      },
    ],
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

let autoplayInterval = null;
onMounted(() => {
  autoplayInterval = setInterval(nextFeatured, 5000);
});
onUnmounted(() => clearInterval(autoplayInterval));
const pauseAutoplay = () => clearInterval(autoplayInterval);
const resumeAutoplay = () => {
  autoplayInterval = setInterval(nextFeatured, 5000);
};

// ── PROJECTS GRID ───────────────────────────────────────────
const projects = reactive([
  {
    title: "SPDS - Sistem Pendeteksi Slot Parkir",
    description:
      "A web-based parking slot detection system built with Streamlit and a CNN model trained on the PKLot dataset.",
    tech: ["Python", "TensorFlow", "OpenCV", "Streamlit", "Pillow"],
    icon: "local_parking",
    year: "2024",
    photos: [
      "/images/projects/spds/spds1.webp",
      "/images/projects/spds/spds2.webp",
      "/images/projects/spds/spds3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/KangDap/smart-parking-detection-system",
      },
    ],
  },
  {
    title: "3D Earth Climate Visualization",
    description:
      "An interactive web application visualizing the real-time orbital system of Earth, Moon, and Sun using Three.js for 3D rendering and Chart.js for dynamic data charts. Aligned with SDG 7 and SDG 13.",
    tech: ["Three.js", "WebGL", "Chart.js", "HTML", "CSS", "JavaScript"],
    icon: "public",
    year: "2024",
    photos: [
      "/images/projects/3d_earth/3d1.webp",
      "/images/projects/3d_earth/3d2.webp",
      "/images/projects/3d_earth/3d3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/Robaz04/3d-earth-climate",
      },
    ],
  },
  {
    title: "Robot Angklung",
    description:
      "An intelligent robotic angklung control system that utilizes computer vision and hand gesture recognition to detect finger counts in real time and automatically play eight different angklung notes through Arduino-controlled solenoid actuators.",
    tech: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "PySerial",
      "Arduino",
      "Computer Vision",
    ],
    icon: "smart_toy",
    year: "2024",
    photos: [
      "/images/projects/robot/angklung1.webp",
      "/images/projects/robot/angklung2.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/luthfiarsd/robot-angklung-hand-detection",
      },
    ],
  },
  {
    title: "DecisionHub",
    description:
      "A web-based Decision Support System (DSS) that enables users to perform interactive multi-criteria decision-making analyses using SAW, Weighted Product, TOPSIS, and AHP methodologies within a unified platform.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "SAW",
      "Weighted Product",
      "TOPSIS",
      "AHP",
    ],
    icon: "hub",
    year: "2024",
    photos: [
      "/images/projects/decisionhub/decision1.webp",
      "/images/projects/decisionhub/decision2.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/Robaz04/decision-hub",
      },
    ],
  },
  {
    title: "COREN",
    description:
      "A customer segmentation and analytics platform that leverages RFM analysis and K-Means clustering to transform transactional data into actionable customer insights through an interactive web-based dashboard.",
    tech: [
      "Flask",
      "Flask-CORS",
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "HTML",
      "CSS",
      "JavaScript",
      "K-Means Clustering",
    ],
    icon: "analytics",
    year: "2025",
    photos: [
      "/images/projects/coren/coren1.webp",
      "/images/projects/coren/coren2.webp",
      "/images/projects/coren/coren3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/KangDap/coren",
      },
    ],
  },
  {
    title: "Rodaza Mining",
    description:
      "A web-based data mining application designed to support data preprocessing, normalization, clustering analysis, and exploratory data analytics using multiple unsupervised machine learning algorithms.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "K-Means",
      "Hierarchical Clustering",
      "DBSCAN",
      "Data Mining",
    ],
    icon: "data_exploration",
    year: "2025",
    photos: [
      "/images/projects/mining/mining1.webp",
      "/images/projects/mining/mining2.webp",
      "/images/projects/mining/mining3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/Robaz04/rodaza-mining",
      },
    ],
  },
  {
    title: "Forecasting Potensi Energi Terbarukan",
    description:
      "A data mining project that classifies and clusters Indonesian regions based on renewable energy potential by analyzing multidimensional datasets containing weather conditions, energy consumption, and renewable resource availability.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "K-Means Clustering",
      "Data Mining",
      "Data Analysis",
    ],
    icon: "bolt",
    year: "2025",
    photos: [
      "/images/projects/forecasting/datmin1.webp",
      "/images/projects/forecasting/datmin2.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "Paper",
        icon: "description",
        url: "https://drive.google.com/file/d/1jvBoJw76G7GXtgETLWrSsErWMjB30DKC/view",
      },
      {
        label: "Colab",
        icon: "science",
        url: "https://colab.research.google.com/drive/1N2vOlIKf4BoFMe6tE8fJgqq9qT3cfrc1",
      },
    ],
  },
  {
    title: "Data Warehouse for Retail Marketing Analytics",
    description:
      "A comprehensive data warehouse solution developed using a star schema architecture, ETL pipelines, OLAP analysis, and historical data management to support business intelligence and strategic decision-making processes.",
    tech: [
      "PostgreSQL",
      "MySQL",
      "Python",
      "SQL",
      "ETL",
      "OLAP",
      "Data Warehouse",
      "Star Schema",
    ],
    icon: "warehouse",
    year: "2025",
    photos: [
      "/images/projects/warehouse/datware1.webp",
      "/images/projects/warehouse/datware2.webp",
      "/images/projects/warehouse/datware3.webp",
    ],
    activePhoto: 0,
    links: [
      { label: "GitHub", icon: "code", url: "#" },
      { label: "Paper", icon: "description", url: "#" },
    ],
  },
  {
    title: "HOG + SVM Human Detection",
    description:
      "A human detection system based on classical computer vision techniques that combines Histogram of Oriented Gradients (HOG), Support Vector Machines (SVM), and Hard Negative Mining to improve pedestrian detection performance.",
    tech: [
      "Python",
      "OpenCV",
      "Scikit-image",
      "Scikit-learn",
      "Matplotlib",
      "Joblib",
      "Streamlit",
      "HOG",
      "SVM",
    ],
    icon: "person_search",
    year: "2024",
    photos: [
      "/images/projects/hog/hog1.webp",
      "/images/projects/hog/hog2.webp",
      "/images/projects/hog/hog3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/Robaz04/human-detection-with-hog-svm",
      },
    ],
  },
  {
    title: "NatSense AR",
    description:
      "An augmented reality mobile educational simulation application featuring interactive disaster preparedness scenarios and assessment quizzes to enhance users’ awareness and understanding of disaster response procedures.",
    tech: ["Unity", "C#", "AR Foundation", "Blender"],
    icon: "view_in_ar",
    year: "2026",
    photos: [
      "/images/projects/natsense/nat1.webp",
      "/images/projects/natsense/nat2.webp",
      "/images/projects/natsense/nat3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "Drive",
        icon: "folder",
        url: "https://drive.google.com/drive/folders/1L805bJFY12Gp8MxTbwu5Lq_ZiGCWpU0T?usp=sharing",
      },
    ],
  },
  {
    title: "Way2Home",
    description:
      "A digital construction platform that streamlines home building, renovation, and construction material procurement services across West Java through an integrated and user-friendly web ecosystem.",
    tech: [
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "PostgreSQL",
      "Midtrans",
    ],
    icon: "home_work",
    year: "2024",
    photos: [
      "/images/projects/way2home/way1.webp",
      "/images/projects/way2home/way2.webp",
      "/images/projects/way2home/way3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/yumairai/Way2Home_KuliPremium_PPL7",
      },
      {
        label: "Live",
        icon: "open_in_new",
        url: "https://way2home.edhyrg.my.id/",
      },
    ],
  },
  {
    title: "NusaGraph",
    description:
      "A semantic web search platform that enables integrated knowledge discovery through direct client-to-triple-store communication, leveraging ontology-based data modeling and SPARQL-powered semantic querying.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Apache Jena Fuseki",
      "SPARQL",
      "Ontology",
      "GeoNames",
      "Leaflet.js",
    ],
    icon: "hub",
    year: "2026",
    photos: [
      "/images/projects/nusagraph/nusa1.webp",
      "/images/projects/nusagraph/nusa2.webp",
      "/images/projects/nusagraph/nusa3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/Kurtz17/NusaGraph",
      },
      {
        label: "Live",
        icon: "open_in_new",
        url: "https://nusagraph.vercel.app/",
      },
    ],
  },
  {
    title: "UAV Waste Mapping",
    description:
      "An intelligent waste density mapping system that analyzes UAV imagery using visual feature extraction and ANFIS-based classification models to identify environmental conditions as safe, moderate, or critical through interactive heatmap visualization.",
    tech: [
      "Python",
      "OpenCV",
      "PyTorch",
      "ANFIS",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "GLCM",
      "Computer Vision",
    ],
    icon: "flight",
    year: "2025",
    photos: [
      "/images/projects/uav/uav1.webp",
      "/images/projects/uav/uav2.webp",
      "/images/projects/uav/uav3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/dzikribassyril/UAV-Waste-Severity-Mapping",
      },
      {
        label: "Live",
        icon: "open_in_new",
        url: "https://uav-waste-severity-mapping.streamlit.app/",
      },
    ],
  },
  {
    title: "Spotify Clone",
    description:
      "A modern music streaming web application inspired by Spotify, featuring a responsive user interface and interactive user experience built with contemporary frontend technologies.",
    tech: ["Next.js", "React", "Vite", "Tailwind CSS", "JavaScript"],
    icon: "music_note",
    year: "2025",
    photos: [
      "/images/projects/spotify/spoti1.webp",
      "/images/projects/spotify/spoti2.webp",
      "/images/projects/spotify/spoti3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/Robaz04/spotify-clone",
      },
      {
        label: "Live",
        icon: "open_in_new",
        url: "https://spotify-clone.vercel.app/",
      },
    ],
  },
  {
    title: "Perampok Market",
    description:
      "A financial education platform focused on cryptocurrency investment literacy, offering premium learning content, subscription-based services, and secure payment processing through an integrated web application.",
    tech: [
      "Node.js",
      "Express.js",
      "EJS",
      "JavaScript",
      "HTML",
      "CSS",
      "Midtrans",
    ],
    icon: "storefront",
    year: "2025",
    photos: [
      "/images/projects/perampok/rampok1.webp",
      "/images/projects/perampok/rampok2.webp",
      "/images/projects/perampok/rampok3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/Robaz04/perampok-market",
      },
    ],
  },
  {
    title: "Simple FPS Game",
    description:
      "A first-person shooter desktop game developed with Unity where players complete objective-based missions by accurately targeting and destroying in-game objects within a simulated environment.",
    tech: ["Unity", "C#", "Game Development", "Blender"],
    icon: "sports_esports",
    year: "2024",
    photos: [
      "/images/projects/fps/fps1.webp",
      "/images/projects/fps/fps2.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/Robaz04/robaz-shooting-game",
      },
      {
        label: "Drive",
        icon: "folder",
        url: "https://drive.google.com/drive/folders/1r5iz9VERJGO69FE03dBqWW1QCcUBjk1b?usp=sharing",
      },
    ],
  },
  {
    title: "Rodaza Coffee",
    description:
      "A web-based coffee ordering and management system that enables customers to place orders online while providing administrators with operational dashboards and integrated payment processing.",
    tech: [
      "CodeIgniter 4",
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Midtrans",
    ],
    icon: "coffee",
    year: "2024",
    photos: [
      "/images/projects/coffee/cafe1.webp",
      "/images/projects/coffee/cafe2.webp",
      "/images/projects/coffee/cafe3.webp",
    ],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/KangDap/rodaza-coffee",
      },
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio platform showcasing projects, technical skills, and professional experiences through an interactive user interface enhanced with immersive 3D cosmic visualizations.",
    tech: ["Nuxt", "Vue.js", "Three.js", "Tailwind CSS", "JavaScript"],
    icon: "web",
    year: "2025",
    photos: ["/images/projects/porto/porto1.webp"],
    activePhoto: 0,
    links: [
      {
        label: "GitHub",
        icon: "code",
        url: "https://github.com/Robaz04/robuy-portofolio",
      },
      {
        label: "Live",
        icon: "open_in_new",
        url: "https://robbyazwan.vercel.app/",
      },
    ],
  },
]);

const nextPhoto = (project) => {
  project.activePhoto = (project.activePhoto + 1) % project.photos.length;
};
const prevPhoto = (project) => {
  project.activePhoto =
    (project.activePhoto - 1 + project.photos.length) % project.photos.length;
};

// ── FILTERS ─────────────────────────────────────────────────
const filterTags = [
  { label: "Web Dev", icon: "web" },
  { label: "Machine Learning", icon: "psychology" },
  { label: "Data", icon: "analytics" },
  { label: "Computer Vision", icon: "visibility" },
  { label: "AR / Unity", icon: "view_in_ar" },
  { label: "Python", icon: "code" },
];

const filterMap = {
  "Web Dev": [
    "Nuxt",
    "Vue",
    "React",
    "Next.js",
    "Laravel",
    "CodeIgniter 4",
    "HTML",
    "Flask",
    "JavaScript",
  ],
  "Machine Learning": ["TensorFlow", "Scikit-learn", "Python"],
  Data: ["SQL", "PostgreSQL", "ETL", "Pandas", "NumPy"],
  "Computer Vision": ["OpenCV", "TensorFlow", "Pillow"],
  "AR / Unity": ["Unity", "C#", "AR Foundation"],
  Python: ["Python", "Flask", "Streamlit"],
};

const activeFilter = ref(null);
const isExiting = ref(false);
const gridRef = ref(null);
const displayedProjects = ref([...projects]);

// Row reveal — pass gridRef agar scope observe hanya di dalam grid
const { reObserve } = useRowReveal(gridRef);

// Computed untuk grouping per row
const displayedRows = computed(() => {
  const rows = [];
  const list = displayedProjects.value;
  for (let i = 0; i < list.length; i += 3) {
    rows.push(list.slice(i, i + 3));
  }
  return rows;
});

const sectionTitle = computed(() =>
  activeFilter.value ? `${activeFilter.value} Projects` : "All Projects",
);

// Filter dengan sequential animation
const setFilter = async (label) => {
  // 1. Fade out semua row yang ada
  isExiting.value = true;
  const rows = gridRef.value?.querySelectorAll(".reveal-row");
  rows?.forEach((row, i) => {
    row.style.transition = `opacity 0.25s ease ${i * 0.04}s, transform 0.25s ease ${i * 0.04}s`;
    row.style.opacity = "0";
    row.style.transform = "translateY(-12px)";
  });

  // 2. Tunggu exit selesai
  await new Promise((resolve) => setTimeout(resolve, 350));

  // 3. Update data
  activeFilter.value = activeFilter.value === label ? null : label;
  const allowed = filterMap[activeFilter.value] ?? [];
  displayedProjects.value = activeFilter.value
    ? projects.filter((p) => p.tech.some((t) => allowed.includes(t)))
    : [...projects];

  // 4. Tunggu DOM render dengan data baru
  await nextTick();

  // 5. Reset inline style — biarkan CSS class yang handle
  gridRef.value?.querySelectorAll(".reveal-row").forEach((row) => {
    row.style.transition = "";
    row.style.opacity = "";
    row.style.transform = "";
    // Reset class agar bisa animate masuk lagi
    row.classList.remove("reveal-row-visible");
  });

  // 6. Re-observe rows baru dengan delay kecil
  await nextTick();
  setTimeout(() => {
    reObserve();
    isExiting.value = false;
  }, 50);
};

// Entrance animation saat component mount
const sectionRef = ref(null);
onMounted(() => {
  if (!sectionRef.value) return;
  const children = sectionRef.value.querySelectorAll(
    ":scope > header, :scope > section",
  );
  children.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
  });
});
</script>
