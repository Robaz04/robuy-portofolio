<template>
 <nav class="fixed top-0 w-full z-50 bg-surface/30 backdrop-blur-md border-b border-outline-variant/20">
        <div class="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
            <a class="font-display-lg text-display-lg-mobile md:text-headline-md text-primary tracking-tighter"
                href="#">R</a>
            <div class="hidden md:flex space-x-8">
                <a class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
                    href="#work">Work</a>
                <a class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
                    href="#about">About</a>
                <a class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
                    href="#skills">Skills</a>
                <a class="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
                    href="#contact">Contact</a>
            </div>
            <!-- Mobile Menu Icon (simplified) -->
            <button class="md:hidden text-on-surface">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
 </nav>
</template>