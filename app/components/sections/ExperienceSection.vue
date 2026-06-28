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
                  :data-accordion="`accordion-${index}`"
                  class="overflow-hidden transition-all duration-500 ease-in-out"
                  style="max-height: 0; opacity: 0"
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
                    <div
                      v-if="item.activityPhotos?.length"
                      class="border-t border-outline-variant/20 pt-4"
                    >
                      <p
                        class="text-xs font-bold text-on-surface uppercase tracking-widest mb-3"
                      >
                        Activity Photos
                      </p>

                      <!-- 1 foto: full width -->
                      <div v-if="item.activityPhotos.length === 1">
                        <div
                          class="w-full aspect-video rounded-lg overflow-hidden border border-outline-variant/20"
                        >
                          <NuxtImg
                            :src="item.activityPhotos[0]"
                            alt="Activity Photo"
                            class="w-full h-full object-cover"
                            loading="lazy"
                            format="webp"
                            quality="80"
                          />
                        </div>
                      </div>

                      <!-- 2 foto: side by side -->
                      <div
                        v-else-if="item.activityPhotos.length === 2"
                        class="grid grid-cols-2 gap-3"
                      >
                        <div
                          v-for="(photo, pi) in item.activityPhotos"
                          :key="pi"
                          class="aspect-video rounded-lg overflow-hidden border border-outline-variant/20"
                        >
                          <NuxtImg
                            :src="photo"
                            alt="Activity Photo"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            format="webp"
                            quality="80"
                          />
                        </div>
                      </div>
                      <!-- 4 foto: grid 2x2 -->
                      <div
                        v-else-if="item.activityPhotos.length === 4"
                        class="grid grid-cols-2 gap-3"
                      >
                        <div
                          v-for="(photo, pi) in item.activityPhotos"
                          :key="pi"
                          class="aspect-video rounded-lg overflow-hidden border border-outline-variant/20"
                        >
                          <NuxtImg
                            :src="photo"
                            alt="Activity Photo"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            format="webp"
                            quality="80"
                          />
                        </div>
                      </div>

                      <!-- 5+ foto: grid masonry-like, 3 kolom di desktop -->
                      <div v-else class="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div
                          v-for="(photo, pi) in item.activityPhotos"
                          :key="pi"
                          class="aspect-video rounded-lg overflow-hidden border border-outline-variant/20"
                          :class="pi === 0 ? 'col-span-2 md:col-span-1' : ''"
                        >
                          <NuxtImg
                            :src="photo"
                            alt="Activity Photo"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            format="webp"
                            quality="80"
                          />
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
import { ref, computed, nextTick } from "vue";

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
  const key = `accordion-${index}`;
  const el = document.querySelector(`[data-accordion="${key}"]`);

  if (expandedIndices.value.includes(index)) {
    // Tutup: set height ke aktual dulu, lalu animate ke 0
    if (el) {
      el.style.maxHeight = el.scrollHeight + "px";
      requestAnimationFrame(() => {
        el.style.maxHeight = "0";
        el.style.opacity = "0";
      });
    }
    expandedIndices.value = expandedIndices.value.filter((i) => i !== index);
  } else {
    // Buka: animate ke scrollHeight aktual
    expandedIndices.value.push(index);
    nextTick(() => {
      if (el) {
        el.style.maxHeight = el.scrollHeight + "px";
        el.style.opacity = "1";
      }
    });
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
      activityPhotos: [
        "images/experiences/asprak/asprak1.webp",
        "images/experiences/asprak/asprak2.webp",
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
      activityPhotos: [
        "images/experiences/depsos/depsos1.webp",
        "images/experiences/depsos/depsos2.webp",
        "images/experiences/depsos/depsos3.webp",
        "images/experiences/depsos/depsos4.webp",
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
        "Managed participant communications for technology competitions involving approximately 100 participants across 38 teams, ensuring the timely delivery of technical information, schedules, and event requirements.",
        "Coordinated with external vendors and competition partners to support the successful implementation of the Competitive Programming track, including platform readiness and competition logistics.",
        "Contributed to the planning and execution of the Hackathon event by supporting competition design, participant engagement, and on-site operations throughout the event lifecycle.",
      ],
      activityPhotos: [
        "images/experiences/itcomp/itcomp1.webp",
        "images/experiences/itcomp/itcomp2.webp",
        "images/experiences/itcomp/itcomp3.webp",
      ],
    },
    {
      role: "Algorithm and Programming Tutor",
      org: "Character Building Season 2025",
      location: "Jatinangor, Sumedang",
      date: "Aug 2025 – Nov 2025",
      type: "Volunteer",
      icon: "images/logos/himatif.webp",
      bullets: [
        "Delivered tutorial sessions on algorithm design, problem-solving techniques, and programming fundamentals using C++ as the primary instructional language.",
        "Guided students through programming assignments and practical exercises by providing technical mentorship and debugging support.",
        "Evaluated coding projects, assessed student performance, and provided constructive feedback to strengthen analytical and computational thinking skills.",
      ],
      activityPhotos: [
        "images/experiences/cbs/cbs1.webp",
        "images/experiences/cbs/cbs2.webp",
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
        "Coordinated accommodation and transportation arrangements to ensure participants, committees, and event activities operated smoothly throughout the program.",
        "Collaborated with multiple event divisions to identify operational needs and provide logistical support for successful event execution.",
        "Assisted in resolving on-site challenges and contributed to maintaining an organized, efficient, and participant-friendly event environment.",
      ],
      activityPhotos: [
        "images/experiences/iffd/iffd1.webp",
        "images/experiences/iffd/iffd2.webp",
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
        "Managed the procurement, preparation, and distribution of logistical resources required for various event activities and sessions.",
        "Participated in brainstorming and planning discussions to develop effective logistics strategies and improve operational efficiency.",
        "Coordinated with committee members to ensure all equipment, materials, and venue requirements were available and ready according to the event schedule.",
      ],
      activityPhotos: ["images/experiences/instagram/logistikig.webp"],
    },
    {
      role: "Staff of Logistics",
      org: "SETARA 2022 SMAN 70 Jakarta",
      location: "Jakarta, Indonesia",
      date: "Sep 2021 – Sep 2022",
      type: "Contract",
      icon: "images/logos/setara.webp",
      bullets: [
        "Supported the planning and execution of event logistics by preparing necessary equipment, materials, and venue arrangements.",
        "Worked closely with organizing committees to anticipate resource requirements and ensure timely availability of logistical support.",
        "Contributed to the overall success of the event through proactive coordination, problem-solving, and effective teamwork.",
      ],
      activityPhotos: [
        "images/experiences/setara/setara1.webp",
        "images/experiences/setara/setara2.webp",
        "images/experiences/setara/setara3.webp",
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
