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
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="tech-chip px-3 py-1 rounded-full font-label-md text-xs uppercase"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'Languages',
    icon: 'terminal',
    skills: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'PHP'],
  },
  {
    title: 'Frontend',
    icon: 'web',
    skills: ['Vue', 'Nuxt', 'React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend & DB',
    icon: 'dns',
    skills: ['Laravel', 'Node.js', 'MySQL', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Data & ML',
    icon: 'monitoring',
    skills: ['NumPy', 'Pandas', 'OpenCV', 'Scikit-learn', 'TensorFlow'],
  },
  {
    title: 'Tools & Environment',
    icon: 'build',
    wide: true,
    skills: ['Git', 'GitHub', 'Figma', 'Unity', 'VS Code', 'Docker', 'Linux'],
  },
]
</script>