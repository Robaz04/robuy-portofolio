<template>
  <section class="w-full py-stack-lg" id="experience">
    <!-- Section Title -->
    <div class="mb-stack-md flex items-center space-x-4">
      <h2
        class="font-headline-md text-headline-sm md:text-headline-md text-on-surface font-semibold"
      >
        Experience
      </h2>
      <div
        class="h-px bg-gradient-to-r from-primary to-transparent flex-grow max-w-md opacity-50"
      />
    </div>

    <!-- Tabs -->
    <div class="flex justify-center mb-5 w-full">
      <div
        class="inline-flex p-1 bg-surface-container-low rounded-full border border-outline-variant/30 w-full items-center justify-center"
      >
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="[
            'flex-1 text-center px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-sm md:text-lg transition-all duration-300 cursor-pointer',
            activeTab === tab.key
              ? 'bg-[#8b5cf6cc] text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
              : 'text-on-surface-variant hover:text-on-surface',
          ]"
          @click="switchTab(tab.key)"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <!-- Cards -->
    <div class="w-full min-h-[400px]">
      <Transition name="tab-fade" mode="out-in">
        <div :key="activeTab" class="space-y-6">
          <div
            v-for="(item, index) in currentData"
            :key="index"
            class="surface_glass p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/40"
          >
            <div class="flex flex-col md:flex-row md:items-start gap-6">
              <!-- Left: Icon + Timeline -->
              <div class="flex flex-col items-center">
                <div
                  class="w-12 h-12 flex items-center justify-center flex-shrink-0"
                >
                  <NuxtImg
                    :src="item.icon"
                    :alt="item.alt"
                    class="w-12 h-12 object-contain"
                  />
                </div>
                <div
                  v-if="index !== currentData.length - 1"
                  class="hidden md:block w-px flex-1 border-l border-dashed border-outline-variant/50 mt-4"
                />
              </div>

              <!-- Middle: Content -->
              <div class="flex-grow">
                <!-- Header row -->
                <div
                  class="flex flex-col md:flex-row md:items-start justify-between mb-2"
                >
                  <div>
                    <h3 class="text-on-surface font-bold text-lg">
                      {{ item.org }}
                    </h3>
                    <p class="text-primary font-medium">{{ item.role }}</p>
                  </div>
                  <!-- Date + Badge (kanan) -->
                  <div
                    class="flex flex-col items-start md:items-end mt-2 md:mt-0 gap-1"
                  >
                    <span class="text-sm text-on-surface-variant">{{
                      item.date
                    }}</span>
                    <span
                      class="tech-chip text-[10px] px-2 py-0.5 rounded-full"
                      >{{ item.type }}</span
                    >
                  </div>
                </div>

                <!-- Location -->
                <div
                  class="flex items-center text-on-surface-variant text-sm mb-4"
                >
                  <span class="material-symbols-outlined text-sm mr-1"
                    >location_on</span
                  >
                  {{ item.location }}
                </div>

                <!-- Toggle button -->
                <button
                  class="flex items-center text-primary text-sm font-label-md cursor-pointer hover:scale-110 transition-all duration-300"
                  @click="toggleDetails(index)"
                >
                  {{
                    expandedIndices.includes(index)
                      ? "Hide Details"
                      : "Show Details"
                  }}
                  <span
                    :class="expandedIndices.includes(index) ? 'rotate-180' : ''"
                    class="material-symbols-outlined text-sm transition-transform duration-300 ml-1"
                  >
                    expand_more
                  </span>
                </button>

                <!-- Accordion -->
                <div
                  class="overflow-hidden transition-all duration-500 ease-in-out"
                  :style="
                    expandedIndices.includes(index)
                      ? 'max-height: 600px; opacity: 1'
                      : 'max-height: 0; opacity: 0'
                  "
                >
                  <div class="pt-6 space-y-4">
                    <!-- Bullets -->
                    <ul
                      class="list-disc list-inside text-on-surface-variant space-y-2 text-sm leading-relaxed"
                    >
                      <li v-for="(bullet, i) in item.bullets" :key="i">
                        {{ bullet }}
                      </li>
                    </ul>

                    <div class="border-t border-outline-variant/20 pt-4">
                      <p
                        class="text-xs font-bold text-on-surface uppercase tracking-widest mb-3"
                      >
                        Activity Photos
                      </p>
                      <div class="grid grid-cols-2 gap-4">
                        <div
                          v-for="n in 2"
                          :key="n"
                          class="aspect-video bg-surface-container-highest rounded-lg border border-outline-variant/20 flex items-center justify-center"
                        >
                          <span
                            class="material-symbols-outlined opacity-20 text-4xl"
                            >image</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const tabs = [
  { key: "work", label: "Work" },
  { key: "org", label: "Organization & Volunteer" },
  { key: "edu", label: "Education" },
];

const activeTab = ref("work");
const expandedIndices = ref([]);

// Reset accordion saat ganti tab
const switchTab = (tab) => {
  activeTab.value = tab;
  expandedIndices.value = [];
};

const toggleDetails = (index) => {
  if (expandedIndices.value.includes(index)) {
    expandedIndices.value = expandedIndices.value.filter((i) => i !== index);
  } else {
    expandedIndices.value.push(index);
  }
};

const data = {
  work: [
    {
      role: "Web Programming Laboratory Assistant",
      org: "Informatics Department, Universitas Padjadjaran",
      location: "Jatinangor, Sumedang",
      date: "Aug 2025 – Dec 2025",
      type: "Contract",
      icon: "images/logos/unpad.svg",
      bullets: [
        "Supported the instruction of web programming courses for more than 40 students, covering both theoretical concepts and practical implementation.",
        "Served as a project mentor, assisting students in designing, developing, and debugging web-based applications throughout the course.",
        "Collaborated with lecturers and fellow assistants to create an engaging learning environment and improve students understanding of full-stack web development.",
      ],
    },
  ],
  org: [
    {
      role: "Senior Staff of Social Department",
      org: "HIMATIF FMIPA Unpad",
      location: "Jatinangor, Sumedang",
      date: "Feb 2024 – Dec 2025",
      type: "Seasonal",
      icon: "images/logos/himatif.webp",
      bullets: [
        "Organized and participated in community service programs benefiting rural communities and social care institutions in the Bandung area through educational initiatives and charitable contributions.",
        "Coordinated with team members and organizational stakeholders to ensure the successful planning and implementation of social impact activities.",
        "Provided leadership and mentorship to junior members, fostering effective teamwork, communication, and operational efficiency across departmental programs.",
      ],
    },
    {
      role: "Staff of IT Competition IFest 2025",
      org: "Informatics Festival 2025",
      location: "Bandung, Jawa Barat",
      date: "Jun 2025 – Oct 2025",
      type: "Member",
      icon: "images/logos/ifest.webp",
      bullets: [
        "Contributed to several open-source projects on GitHub.",
        "Helped maintain internal tools used by student organizations.",
        "Advocated for best practices in version control and documentation.",
      ],
    },
    {
      role: "C++ Programming Tutor",
      org: "Character Building Season 2025",
      location: "Jatinangor, Sumedang",
      date: "Aug 2025 – Nov 2025",
      type: "Volunteer",
      icon: "images/logos/himatif.webp",
      bullets: [
        "Contributed to several open-source projects on GitHub.",
        "Helped maintain internal tools used by student organizations.",
        "Advocated for best practices in version control and documentation.",
      ],
    },
    {
      role: "Staff of Accomodation & Transportation",
      org: "Informatics Fun Day 2025",
      location: "Jatinangor, Sumedang",
      date: "November 2024",
      type: "Contract",
      icon: "images/logos/himatif.webp",
      bullets: [
        "Contributed to several open-source projects on GitHub.",
        "Helped maintain internal tools used by student organizations.",
        "Advocated for best practices in version control and documentation.",
      ],
    },
     {
      role: "Staff of Logistics",
      org: "Informatics Gram 2024",
      location: "Jatinangor, Sumedang",
      date: "Mar 2024 – Jun 2024",
      type: "Contract",
      icon: "images/logos/himatif.webp",
      bullets: [
        "Contributed to several open-source projects on GitHub.",
        "Helped maintain internal tools used by student organizations.",
        "Advocated for best practices in version control and documentation.",
      ],
    },
    {
      role: "Staff of Logistics",
      org: "SETARA 2022 SMAN 70 Jakarta",
      location: "Jakarta, Indonesia",
      date: "Sep 2021 – Sep 2022",
      type: "Contract",
      icon: "images/logos/setara.webp",
      bullets: [
        "Contributed to several open-source projects on GitHub.",
        "Helped maintain internal tools used by student organizations.",
        "Advocated for best practices in version control and documentation.",
      ],
    },
  ],
  edu: [
    {
      role: "Bachelor of Computer Science",
      org: "Universitas Padjadjaran",
      location: "Sumedang, Indonesia",
      date: "2023 – Present",
      type: "Present Education",
      icon: "images/logos/unpad.svg",
      bullets: [
        "Relevant coursework: Data Structures, Algorithms, Machine Learning, Web Engineering.",
        "Current GPA: 3.86/4.00.",
      ],
    },
    {
      role: "Mathematics and Natural Sciences",
      org: "SMAN 70 Jakarta",
      location: "Jakarta, Indonesia",
      date: "2020 – 2023",
      type: "Last Education",
      icon: "images/logos/sman70.webp",
      bullets: [
        "Graduated with honors in science major.",
        "Always in the top 5 of the class.",
        "Final grade: 92.67/100.",
      ],
    },
  ],
};

const currentData = computed(() => data[activeTab.value]);
</script>
