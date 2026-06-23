<template>
  <section class="w-full py-stack-lg" id="experience">
    <!-- Section Title -->
    <div class="mb-stack-md flex items-center space-x-4">
      <h2 class="font-headline-md text-headline-sm md:text-headline-md text-on-surface font-semibold">
        Experience
      </h2>
      <div class="h-px bg-gradient-to-r from-primary to-transparent flex-grow max-w-md opacity-50" />
    </div>

    <!-- Tabs -->
    <div class="flex justify-center mb-10">
      <div class="inline-flex p-1 bg-surface-container-low rounded-full border border-outline-variant/30">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="[
            'px-6 py-2 rounded-full font-label-md text-label-md transition-all duration-300',
            activeTab === tab.key
              ? 'bg-[#8b5cf6cc] text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
              : 'text-on-surface-variant hover:text-on-surface'
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
                <div class="w-12 h-12 rounded-lg bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-primary">{{ item.icon }}</span>
                </div>
                <div
                  v-if="index !== currentData.length - 1"
                  class="hidden md:block w-px flex-1 border-l border-dashed border-outline-variant/50 mt-4"
                />
              </div>

              <!-- Middle: Content -->
              <div class="flex-grow">
                <!-- Header row -->
                <div class="flex flex-col md:flex-row md:items-start justify-between mb-2">
                  <div>
                    <h3 class="text-on-surface font-bold text-lg">{{ item.role }}</h3>
                    <p class="text-primary font-medium">{{ item.org }}</p>
                  </div>
                  <!-- Date + Badge (kanan) -->
                  <div class="flex flex-col items-start md:items-end mt-2 md:mt-0 gap-1">
                    <span class="text-sm text-on-surface-variant">{{ item.date }}</span>
                    <span class="tech-chip text-[10px] px-2 py-0.5 rounded-full">{{ item.type }}</span>
                  </div>
                </div>

                <!-- Location -->
                <div class="flex items-center text-on-surface-variant text-sm mb-4">
                  <span class="material-symbols-outlined text-sm mr-1">location_on</span>
                  {{ item.location }}
                </div>

                <!-- Toggle button -->
                <button
                  class="flex items-center text-primary text-sm font-label-md"
                  @click="toggleDetails(index)"
                >
                  {{ expandedIndices.includes(index) ? 'Hide Details' : 'Show Details' }}
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
                  :style="expandedIndices.includes(index) ? 'max-height: 600px; opacity: 1' : 'max-height: 0; opacity: 0'"
                >
                  <div class="pt-6 space-y-4">
                    <!-- Bullets -->
                    <ul class="list-disc list-inside text-on-surface-variant space-y-2 text-sm leading-relaxed">
                      <li v-for="(bullet, i) in item.bullets" :key="i">{{ bullet }}</li>
                    </ul>

                    <div class="border-t border-outline-variant/20 pt-4">
                      <p class="text-xs font-bold text-on-surface uppercase tracking-widest mb-3">
                        Activity Photos
                      </p>
                      <div class="grid grid-cols-2 gap-4">
                        <div
                          v-for="n in 2"
                          :key="n"
                          class="aspect-video bg-surface-container-highest rounded-lg border border-outline-variant/20 flex items-center justify-center"
                        >
                          <span class="material-symbols-outlined opacity-20 text-4xl">image</span>
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
import { ref, computed } from 'vue'

const tabs = [
  { key: 'work', label: 'Work' },
  { key: 'org', label: 'Organization & Volunteer' },
  { key: 'edu', label: 'Education' },
]

const activeTab = ref('work')
const expandedIndices = ref([])

// Reset accordion saat ganti tab
const switchTab = (tab) => {
  activeTab.value = tab
  expandedIndices.value = []
}

const toggleDetails = (index) => {
  if (expandedIndices.value.includes(index)) {
    expandedIndices.value = expandedIndices.value.filter(i => i !== index)
  } else {
    expandedIndices.value.push(index)
  }
}

const data = {
  work: [
    {
      role: 'Frontend Developer Intern',
      org: 'Tech Studio XYZ',
      location: 'Jakarta, Indonesia (Remote)',
      date: 'June 2023 – Aug 2023',
      type: 'Internship',
      icon: 'developer_mode',
      bullets: [
        'Developed responsive UI components using React and Tailwind CSS.',
        'Collaborated with the design team to implement high-fidelity Figma prototypes.',
        'Optimized website performance, achieving a 20% improvement in Lighthouse scores.',
      ],
    },
    {
      role: 'Freelance Web Developer',
      org: 'Self-employed',
      location: 'Bandung, Indonesia',
      date: 'Jan 2022 – Present',
      type: 'Contract',
      icon: 'laptop_mac',
      bullets: [
        'Built custom web applications for small to medium enterprises.',
        'Managed full-stack development cycles from database design to deployment.',
        'Provided technical consultation for SEO and digital marketing integration.',
      ],
    },
  ],
  org: [
    {
      role: 'Head of Technology',
      org: 'University Tech Community',
      location: 'Universitas Padjadjaran',
      date: 'Sept 2022 – Sept 2023',
      type: 'Leadership',
      icon: 'groups',
      bullets: [
        'Led a team of 15 developers in building community-driven projects.',
        'Organized monthly workshops on modern web technologies and cloud computing.',
        'Architected the official community portal using Next.js.',
      ],
    },
    {
      role: 'Web Developer',
      org: 'Open Source Club',
      location: 'Universitas Padjadjaran',
      date: 'Oct 2021 – Aug 2022',
      type: 'Member',
      icon: 'code',
      bullets: [
        'Contributed to several open-source projects on GitHub.',
        'Helped maintain internal tools used by student organizations.',
        'Advocated for best practices in version control and documentation.',
      ],
    },
  ],
  edu: [
    {
      role: 'Bachelor of Computer Science',
      org: 'Universitas Padjadjaran',
      location: 'Sumedang, Indonesia',
      date: '2023 – Present',
      type: 'Higher Education',
      icon: 'school',
      bullets: [
        'Relevant coursework: Data Structures, Algorithms, Machine Learning, Web Engineering.',
        'Actively participating in national competitive programming contests.',
        'Focused on web engineering and data science specialization tracks.',
      ],
    },
    {
      role: 'High School — Science Major',
      org: 'SMAN 1 Contoh',
      location: 'Indonesia',
      date: '2020 – 2023',
      type: 'Secondary Education',
      icon: 'history_edu',
      bullets: [
        'Graduated with honors in Science major.',
        'President of the IT and Robotics club.',
        'Represented school in regional Math Olympiad.',
      ],
    },
  ],
}

const currentData = computed(() => data[activeTab.value])
</script>