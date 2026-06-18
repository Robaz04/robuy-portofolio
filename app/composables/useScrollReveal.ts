import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(selector = '.reveal') {
    let observer: IntersectionObserver

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible')
                        observer.unobserve(entry.target) // animasi hanya sekali
                    }
                })
            },
            { threshold: 0.15 }
        )

        document.querySelectorAll(selector).forEach(el => observer.observe(el))
    })

    onUnmounted(() => observer?.disconnect())
}