import { onMounted, onUnmounted, type Ref } from 'vue'

export function useRowReveal(containerRef?: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null

  const observe = () => {
    // Disconnect observer lama kalau ada
    observer?.disconnect()

    const targets = containerRef?.value
      ? containerRef.value.querySelectorAll('.reveal-row')
      : document.querySelectorAll('.reveal-row')

    if (!targets.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-row-visible')
            // Unobserve setelah muncul — animasi hanya sekali
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px'
      }
    )

    targets.forEach(el => observer!.observe(el))
  }

  onMounted(() => {
    // Delay sedikit agar DOM sudah render
    setTimeout(observe, 150)
  })

  onUnmounted(() => observer?.disconnect())

  // Expose observe untuk dipanggil ulang setelah filter
  return { reObserve: observe }
}