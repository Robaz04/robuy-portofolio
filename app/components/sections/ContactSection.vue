<template>
  <section class="w-full pt-20 pb-stack-lg" id="contact">
    <!-- Header -->

    <div>
      <div class="mb-4 flex items-center space-x-4">
        <h2
          class="font-headline-md text-headline-sm md:text-headline-md text-on-surface font-semibold whitespace-nowrap"
        >
          Get In Touch
        </h2>
        <div
          class="h-px bg-gradient-to-r from-primary to-transparent flex-grow max-w-md opacity-50"
        />
      </div>

      <p
        class="text-on-surface-variant font-body-lg text-body-md md:text-body-lg leading-relaxed max-w-2xl mb-10"
      >
        I'm currently open to new opportunities — whether it's a freelance
        project, internship, or just a conversation about tech. My inbox is
        always open.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Left: Info -->
      <div class="space-y-8">
        <!-- Location Info -->
        <div
          class="surface_glass p-gutter rounded-xl flex items-center justify-around gap-1"
        >
          <!-- Blok Lokasi -->
          <div class="flex items-center justify-center gap-2 text-on-surface">
            <UIcon name="i-custom-indonesia" class="w-5 h-5" />
            <p class="text-base font-normal">Jakarta, Indonesia</p>
          </div>

          <!-- Blok Universitas (Pekerjaan) -->
          <div class="flex items-center justify-center gap-2 text-on-surface">
            <NuxtImg
              src="/images/logos/unpad.svg"
              alt="UNPAD Logo"
              class="w-6 h-6 object-contain"
            />
            <p class="text-base font-normal">Padjadjaran University</p>
          </div>
        </div>
        <div class="space-y-4">
          <NuxtLink
            to="mailto:oby.azwan@gmail.com"
            class="flex items-center gap-4 glass-card p-4 rounded-xl group cursor-pointer"
          >
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <UIcon name="i-custom-google" class="w-8 h-8" />
            </div>
            <div>
              <p class="text-xs text-on-surface-variant mb-1">Email</p>
              <p
                class="text-on-surface font-small group-hover:text-primary transition-colors"
              >
                oby.azwan@gmail.com
              </p>
            </div>
            <div
              class="ml-auto w-8 h-8 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.02] text-on-surface-variant group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
            >
              <span
                class="material-symbols-outlined text-[18px] transform group-hover:translate-x-0.5 transition-transform"
                >arrow_forward</span
              >
            </div>
          </NuxtLink>

          <NuxtLink
            to="https://linkedin.com/in/robbyazwan"
            target="_blank"
            class="flex items-center gap-4 glass-card p-4 rounded-xl group cursor-pointer"
          >
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <UIcon name="i-custom-linkedin" class="w-8 h-8" />
            </div>
            <div>
              <p class="text-xs text-on-surface-variant mb-1">LinkedIn</p>
              <p
                class="text-on-surface font-small group-hover:text-primary transition-colors"
              >
                Connect with me on LinkedIn
              </p>
            </div>
            <div
              class="ml-auto w-8 h-8 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.02] text-on-surface-variant group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
            >
              <span
                class="material-symbols-outlined text-[18px] transform group-hover:translate-x-0.5 transition-transform"
                >arrow_forward</span
              >
            </div>
          </NuxtLink>

          <NuxtLink
            to="https://github.com/Robaz04"
            target="_blank"
            class="flex items-center gap-4 glass-card p-4 rounded-xl group cursor-pointer"
          >
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <UIcon name="i-custom-github" class="w-8 h-8" />
            </div>
            <div>
              <p class="text-xs text-on-surface-variant mb-1">GitHub</p>
              <p
                class="text-on-surface font-small group-hover:text-primary transition-colors"
              >
                Explore my open-source projects on GitHub
              </p>
            </div>
            <div
              class="ml-auto w-8 h-8 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.02] text-on-surface-variant group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
            >
              <span
                class="material-symbols-outlined text-[18px] transform group-hover:translate-x-0.5 transition-transform"
                >arrow_forward</span
              >
            </div>
          </NuxtLink>

          <NuxtLink
            to="https://instagram.com/robbyazwan"
            target="_blank"
            class="flex items-center gap-4 glass-card p-4 rounded-xl group cursor-pointer"
          >
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <UIcon name="i-custom-instagram" class="w-8 h-8" />
            </div>
            <div>
              <p class="text-xs text-on-surface-variant mb-1">Instagram</p>
              <p
                class="text-on-surface font-small group-hover:text-primary transition-colors"
              >
                Check out my daily life and projects on Instagram
              </p>
            </div>
            <div
              class="ml-auto w-8 h-8 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.02] text-on-surface-variant group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
            >
              <span
                class="material-symbols-outlined text-[18px] transform group-hover:translate-x-0.5 transition-transform"
                >arrow_forward</span
              >
            </div>
          </NuxtLink>

          <NuxtLink
            to="https://youtube.com/@robaztv390"
            target="_blank"
            class="flex items-center gap-4 glass-card p-4 rounded-xl group cursor-pointer"
          >
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <UIcon name="i-custom-youtube" class="w-8 h-8" />
            </div>
            <div>
              <p class="text-xs text-on-surface-variant mb-1">Youtube</p>
              <p
                class="text-on-surface font-small group-hover:text-primary transition-colors"
              >
                Watch my youtube channel for tutorials and projects
              </p>
            </div>
            <div
              class="ml-auto w-8 h-8 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.02] text-on-surface-variant group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
            >
              <span
                class="material-symbols-outlined text-[18px] transform group-hover:translate-x-0.5 transition-transform"
                >arrow_forward</span
              >
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Right: Form -->
      <div class="surface_glass p-8 rounded-xl">
        <!-- Success state -->
        <Transition name="fade">
          <div v-if="submitState === 'success'" class="text-center py-8">
            <div
              class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
            >
              <span class="material-symbols-outlined text-primary text-3xl"
                >check_circle</span
              >
            </div>
            <h3 class="text-on-surface font-semibold text-lg mb-2">
              Message Sent!
            </h3>
            <p class="text-on-surface-variant text-sm">
              Thanks for reaching out. I'll get back to you soon.
            </p>
            <button
              class="mt-6 text-primary text-sm hover:underline"
              @click="resetForm"
            >
              Send another message
            </button>
          </div>

          <!-- Form -->
          <form v-else class="space-y-5" @submit.prevent="handleSubmit">
            <div>
              <label
                class="block text-xs text-on-surface-variant mb-2 font-label-md"
              >
                Name <span class="text-primary">*</span>
              </label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Write your name..."
                class="w-full bg-surface-container/50 border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                :class="{ 'border-red-500/50': errors.name }"
              />
              <p v-if="errors.name" class="text-red-400 text-xs mt-1">
                {{ errors.name }}
              </p>
            </div>

            <div>
              <label
                class="block text-xs text-on-surface-variant mb-2 font-label-md"
              >
                Email <span class="text-primary">*</span>
              </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="Write your email..."
                class="w-full bg-surface-container/50 border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                :class="{ 'border-red-500/50': errors.email }"
              />
              <p v-if="errors.email" class="text-red-400 text-xs mt-1">
                {{ errors.email }}
              </p>
            </div>

            <div>
              <label
                class="block text-xs text-on-surface-variant mb-2 font-label-md"
              >
                Subject
              </label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Project collaboration, internship, just saying hi..."
                class="w-full bg-surface-container/50 border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            <div>
              <label
                class="block text-xs text-on-surface-variant mb-2 font-label-md"
              >
                Message <span class="text-primary">*</span>
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Tell me about your project or just say hello..."
                class="w-full bg-surface-container/50 border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                :class="{ 'border-red-500/50': errors.message }"
              />
              <p v-if="errors.message" class="text-red-400 text-xs mt-1">
                {{ errors.message }}
              </p>
            </div>

            <!-- Error global -->
            <p
              v-if="submitState === 'error'"
              class="text-red-400 text-sm text-center"
            >
              Something went wrong. Please try again or email me directly.
            </p>

            <button
              type="submit"
              :disabled="submitState === 'loading'"
              class="w-full bg-gradient-to-r from-inverse-primary to-primary text-on-primary font-bold py-3 px-8 rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span
                v-if="submitState === 'loading'"
                class="material-symbols-outlined text-[18px] animate-spin"
              >
                progress_activity
              </span>
              {{ submitState === "loading" ? "Sending..." : "Send Message" }}
              <span
                v-if="submitState !== 'loading'"
                class="material-symbols-outlined text-[18px]"
                >send</span
              >
            </button>
          </form>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  message: "",
});

// 'idle' | 'loading' | 'success' | 'error'
const submitState = ref("idle");

const validate = () => {
  let valid = true;
  errors.name = "";
  errors.email = "";
  errors.message = "";

  if (!form.name.trim()) {
    errors.name = "Name is required";
    valid = false;
  }
  if (!form.email.trim()) {
    errors.email = "Email is required";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email";
    valid = false;
  }
  if (!form.message.trim()) {
    errors.message = "Message is required";
    valid = false;
  } else if (form.message.trim().length < 10) {
    errors.message = "Message is too short";
    valid = false;
  }

  return valid;
};

const handleSubmit = async () => {
  if (!validate()) return;

  submitState.value = "loading";

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
    });
    submitState.value = "success";
  } catch {
    submitState.value = "error";
  }
};

const resetForm = () => {
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
  submitState.value = "idle";
};
</script>
