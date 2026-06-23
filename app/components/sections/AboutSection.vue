<template>
  <!-- About Section -->
        <section class="scroll-section w-full py-stack-lg relative" id="about">
            <div class="mb-stack-md flex items-center space-x-4">
                <h2 class="font-headline-md text-headline-sm md:text-headline-md text-on-surface font-semibold">About Me
                </h2>
                <div class="h-px bg-primary flex-grow max-w-xs opacity-50"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                    <p>
                        Hello! I'm Robby, a computer science student with a passion for building digital experiences. My
                        journey into tech started with a curiosity about how things work behind the screen, which
                        quickly turned into a deep dive into web development, data science, and machine learning.
                    </p>
                    <p>
                        Currently, I'm focused on finishing my degree while actively working on projects that challenge
                        my understanding of modern frameworks and data algorithms. I believe in writing clean,
                        maintainable code and always strive to learn the 'why' behind the 'how'.
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        <div class="glass-card p-4 rounded-lg text-center">
                            <span class="material-symbols-outlined text-primary text-3xl mb-2">school</span>
                            <h3 class="font-label-md text-label-md text-on-surface mb-1">CS Student</h3>
                            <p class="text-xs text-on-surface-variant">Continuous learner</p>
                        </div>
                        <div class="glass-card p-4 rounded-lg text-center">
                            <span class="material-symbols-outlined text-primary text-3xl mb-2">psychology</span>
                            <h3 class="font-label-md text-label-md text-on-surface mb-1">Curious</h3>
                            <p class="text-xs text-on-surface-variant">Exploring new tech</p>
                        </div>
                        <div class="glass-card p-4 rounded-lg text-center">
                            <span class="material-symbols-outlined text-primary text-3xl mb-2">construction</span>
                            <h3 class="font-label-md text-label-md text-on-surface mb-1">Builder</h3>
                            <p class="text-xs text-on-surface-variant">Turning ideas to code</p>
                        </div>
                    </div>
                </div>
                <!-- Abstract Terminal/Code Visual -->
                <div class="relative w-full aspect-square max-w-md mx-auto">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-full animate-pulse blur-sm">
                    </div>
                    <div class="absolute inset-4 bg-surface-container/50 border border-outline-variant/30 rounded-full backdrop-blur-md flex items-center justify-center flex-col p-8 text-center overflow-hidden">
                        <NuxtImg 
                            src="images/profile/foto2.webp" 
                            alt="Foto Portofolio"
                            class="w-full h-full object-cover rounded-full" 
                        />
                        </div>
                </div>
            </div>
        </section>
</template>
