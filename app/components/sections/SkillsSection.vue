<template>
  <section class="scroll-section w-full py-stack-lg" id="skills">
    <div class="mb-stack-md flex items-center space-x-4">
      <h2 class="font-headline-md text-headline-sm md:text-headline-md text-on-surface font-semibold">
        Skills & Tools
      </h2>
      <div class="h-px bg-secondary flex-grow max-w-xs opacity-50"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="category in skillCategories" :key="category.title"
        :class="['surface_glass p-6 rounded-xl', category.wide ? 'lg:col-span-2' : '']">
        <h3 class="font-headline-sm text-headline-sm text-on-surface mb-4 flex items-center">
          <span class="material-symbols-outlined mr-2 text-primary">{{ category.icon }}</span>
          {{ category.title }}
        </h3>
        
        <div class="flex flex-wrap gap-3">
          <div
            v-for="skill in category.skills"
            :key="skill.name"
            class="group tech-chip flex items-center space-x-2 px-3 py-1.5 rounded-xl font-label-md text-xs uppercase border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] cursor-default"
            :style="`--hover-color: ${skill.color}`"
          >
            <img 
              :src="`https://cdn.simpleicons.org/${skill.iconSlug}`" 
              :alt="skill.name"
              class="w-4 h-4 object-contain transition-all duration-300 filter grayscale invert opacity-70 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100"
              :style="`--tw-drop-shadow: drop-shadow(0 2px 8px ${skill.color}40);`"
            />
            
            <span class="text-white/70 transition-colors duration-300 group-hover:text-white">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Data diubah menjadi Object agar memiliki properti iconSlug dan warna brand (Hex)
const skillCategories = [
  {
    title: 'Languages',
    icon: 'terminal',
    skills: [
      { name: 'C++', iconSlug: 'cplusplus', color: '#00599C' },
      { name: 'Python', iconSlug: 'python', color: '#3776AB' },
      { name: 'Java', iconSlug: 'openjdk', color: '#007396' }, 
      { name: 'JavaScript', iconSlug: 'javascript', color: '#F7DF1E' },
      { name: 'TypeScript', iconSlug: 'typescript', color: '#3178C6' },
      { name: 'PHP', iconSlug: 'php', color: '#777BB4' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'web',
    skills: [
      { name: 'Vue', iconSlug: 'vuedotjs', color: '#4FC08D' },
      { name: 'Nuxt', iconSlug: 'nuxt', color: '#00DC82' },
      { name: 'React', iconSlug: 'react', color: '#61DAFB' },
      { name: 'Next.js', iconSlug: 'nextdotjs', color: '#ffffff' },
      { name: 'Tailwind CSS', iconSlug: 'tailwindcss', color: '#06B6D4' },
      { name: 'HTML5', iconSlug: 'html5', color: '#E34F26' },
    ],
  },
  {
    title: 'Backend & DB',
    icon: 'dns',
    skills: [
      { name: 'Laravel', iconSlug: 'laravel', color: '#FF2D20' },
      { name: 'Node.js', iconSlug: 'nodedotjs', color: '#5FA442' },
      { name: 'MySQL', iconSlug: 'mysql', color: '#4479A1' },
      { name: 'PostgreSQL', iconSlug: 'postgresql', color: '#4169E1' },
      { name: 'Supabase', iconSlug: 'supabase', color: '#3ECF8E' },
    ],
  },
  {
    title: 'Data & ML',
    icon: 'monitoring',
    skills: [
      { name: 'NumPy', iconSlug: 'numpy', color: '#013243' },
      { name: 'Pandas', iconSlug: 'pandas', color: '#150458' },
      { name: 'OpenCV', iconSlug: 'opencv', color: '#5C3EE8' },
      { name: 'Scikit-learn', iconSlug: 'scikitlearn', color: '#F7931E' },
      { name: 'TensorFlow', iconSlug: 'tensorflow', color: '#FF6F00' },
    ],
  },
  {
    title: 'Tools & Environment',
    icon: 'build',
    wide: true,
    skills: [
      { name: 'Git', iconSlug: 'git', color: '#F05032' },
      { name: 'GitHub', iconSlug: 'github', color: '#ffffff' },
      { name: 'Figma', iconSlug: 'figma', color: '#F24E1E' },
      { name: 'Unity', iconSlug: 'unity', color: '#ffffff' },
      { name: 'Docker', iconSlug: 'docker', color: '#2496ED' },
      { name: 'Linux', iconSlug: 'linux', color: '#FCC624' },
    ],
  },
]
</script>