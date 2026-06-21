<template>
  <Transition name="fade">
    <div 
      v-if="isLoading" 
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#161021]"
    >
      <div class="spinner">
        <div class="Spinner"></div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>
  /* Spinner style asli kamu */
  .spinner {
    background-image: linear-gradient(#acb6e5 35%, #86fde8);
    width: 100px;
    height: 100px;
    animation: spinning21 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255),
                0px 5px 20px 0px rgb(0, 225, 255);
  }

  .Spinner {
    background-color: rgb(36, 36, 36);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);
  }

  @keyframes spinning21 {
    to {
      transform: rotate(360deg);
    }
  }

  /* Animasi Fade Out saat loading selesai */
  .fade-leave-active {
    transition: opacity 0.6s ease-in-out;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>