import { onMounted, onUnmounted } from 'vue'

export function useScrollFade(selector = '.scroll-section') {
  let observer: IntersectionObserver

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible')
            entry.target.classList.remove('section-hidden')
          } else {
            entry.target.classList.add('section-hidden')
            entry.target.classList.remove('section-visible')
          }
        })
      },
      {
        threshold: 0.15,       // trigger saat 15% section terlihat
        rootMargin: '0px'
      }
    )

    document.querySelectorAll(selector).forEach(el => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}