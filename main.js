// Animation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  // S'assurer que toutes les ressources sont chargées avant d'animer
  window.addEventListener("load", () => {
    // Animation du header
    const header = document.querySelector("header")
    if (header) {
      setTimeout(() => {
        header.classList.add("loaded")
      }, 100)
    }

    // Animation des sections avec délai progressif
    const sections = document.querySelectorAll("section")
    sections.forEach((section, index) => {
      setTimeout(
        () => {
          section.classList.add("visible")
        },
        300 + index * 150,
      )
    })

    // Animation du menu actif
    highlightCurrentPage()

    // Initialisation des animations au scroll
    initScrollAnimations()

    // Initialisation du thème
    initThemeToggle()
  })
})

// Mettre en évidence la page active dans le menu
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop() || "accueil.html"
  const navLinks = document.querySelectorAll("nav ul li a")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "accueil.html" && href === "index.html")) {
      link.classList.add("active")
    }
  })
}

// Animations au scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajouter un délai progressif pour éviter le clignotement
          setTimeout(() => {
            entry.target.classList.add("animated")
          }, 100)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  )

  animatedElements.forEach((element) => {
    observer.observe(element)
  })
}

// Gestion du thème clair/sombre
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")
  if (!themeToggle) return

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

  // Vérifier si l'utilisateur a déjà une préférence enregistrée
  const currentTheme = localStorage.getItem("theme")
  if (currentTheme) {
    document.body.classList.toggle("dark-theme", currentTheme === "dark")
    themeToggle.checked = currentTheme === "dark"
  } else {
    // Sinon, utiliser la préférence du système
    document.body.classList.toggle("dark-theme", prefersDarkScheme.matches)
    themeToggle.checked = prefersDarkScheme.matches
  }

  // Changer le thème lorsque l'utilisateur clique sur le toggle
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-theme")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove("dark-theme")
      localStorage.setItem("theme", "light")
    }
  })
}

// Animation du menu mobile
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu")
  const hamburger = document.querySelector(".hamburger")

  mobileMenu.classList.toggle("open")
  hamburger.classList.toggle("active")
  document.body.classList.toggle("menu-open")
}

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('tableModal');
  const btn = document.getElementById('viewTableBtn');
  const closeBtn = document.querySelector('.close-modal');
  
  // Ouvrir le modal
  btn.addEventListener('click', function() {
      modal.style.display = 'block';
  });
  
  // Fermer le modal avec le bouton X
  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });
  
  // Fermer le modal en cliquant en dehors
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});