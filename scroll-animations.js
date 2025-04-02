// Animations avancées au défilement
document.addEventListener("DOMContentLoaded", () => {
  // Créer un observateur d'intersection pour les animations au défilement
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")

          // Si l'élément a une classe spécifique, ajouter une animation spéciale
          if (entry.target.classList.contains("fade-in")) {
            entry.target.style.animationDelay = "0.2s"
          } else if (entry.target.classList.contains("slide-in-left")) {
            entry.target.style.animationDelay = "0.3s"
          } else if (entry.target.classList.contains("slide-in-right")) {
            entry.target.style.animationDelay = "0.4s"
          } else if (entry.target.classList.contains("zoom-in")) {
            entry.target.style.animationDelay = "0.5s"
          }
        }
      })
    },
    { threshold: 0.1 },
  )

  // Observer tous les éléments avec la classe 'scroll-animation'
  document.querySelectorAll(".scroll-animation").forEach((element) => {
    observer.observe(element)
  })

  // Ajouter des classes d'animation aux éléments
  const headings = document.querySelectorAll("h1, h2, h3, h4")
  headings.forEach((heading) => {
    heading.classList.add("scroll-animation", "fade-in")
  })

  const paragraphs = document.querySelectorAll("p")
  paragraphs.forEach((paragraph, index) => {
    if (index % 2 === 0) {
      paragraph.classList.add("scroll-animation", "slide-in-left")
    } else {
      paragraph.classList.add("scroll-animation", "slide-in-right")
    }
  })

  const images = document.querySelectorAll("img")
  images.forEach((image) => {
    image.classList.add("scroll-animation", "zoom-in")
  })
})

// Ajouter des styles CSS pour les animations au défilement
const scrollStyle = document.createElement("style")
scrollStyle.textContent = `
  .scroll-animation {
    opacity: 0;
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .scroll-animation.in-view {
    opacity: 1;
  }
  
  .fade-in {
    transform: translateY(20px);
  }
  
  .fade-in.in-view {
    transform: translateY(0);
  }
  
  .slide-in-left {
    transform: translateX(-50px);
  }
  
  .slide-in-left.in-view {
    transform: translateX(0);
  }
  
  .slide-in-right {
    transform: translateX(50px);
  }
  
  .slide-in-right.in-view {
    transform: translateX(0);
  }
  
  .zoom-in {
    transform: scale(0.8);
  }
  
  .zoom-in.in-view {
    transform: scale(1);
  }
`
document.head.appendChild(scrollStyle)

