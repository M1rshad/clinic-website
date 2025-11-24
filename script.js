// // Register GSAP ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// // 1. Preloader & Hero Animation
// window.addEventListener('load', () => {
//     const tl = gsap.timeline();

//     tl.from(".gsap-hero-text", {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out"
//     })
//     .from(".gsap-hero-button", {
//         y: 20,
//         opacity: 0,
//         duration: 0.8,
//         ease: "back.out(1.7)"
//     }, "-=0.5");
// });

// // 2. Scroll Animations (Fade Up Sections)
// const fadeUpElements = document.querySelectorAll(".gsap-fade-up");
// fadeUpElements.forEach(elem => {
//     gsap.from(elem, {
//         scrollTrigger: {
//             trigger: elem,
//             start: "top 85%",
//             toggleActions: "play none none reverse"
//         },
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out"
//     });
// });

// // 3. Card Stagger Animation
// gsap.from(".gsap-stagger-card", {
//     scrollTrigger: {
//         trigger: "#treatments",
//         start: "top 75%"
//     },
//     y: 50,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 0.2,
//     ease: "power2.out"
// });

// // 4. Doctor Section Left/Right Fade
// gsap.from(".gsap-fade-right", {
//     scrollTrigger: {
//         trigger: "#doctors",
//         start: "top 80%"
//     },
//     x: -50,
//     opacity: 0,
//     duration: 1
// });

// gsap.from(".gsap-fade-left", {
//     scrollTrigger: {
//         trigger: "#doctors",
//         start: "top 80%"
//     },
//     x: 50,
//     opacity: 0,
//     duration: 1,
//     delay: 0.2
// });

// // 5. Dark Mode Logic
// const themeToggleBtn = document.getElementById('theme-toggle');
// const themeIcon = document.getElementById('theme-icon');
// const html = document.documentElement;

// // Check local storage
// if (localStorage.getItem('theme') === 'dark') {
//     html.classList.add('dark');
//     themeIcon.classList.replace('fa-moon', 'fa-sun');
// }

// themeToggleBtn.addEventListener('click', () => {
//     html.classList.toggle('dark');
//     if (html.classList.contains('dark')) {
//         localStorage.setItem('theme', 'dark');
//         themeIcon.classList.replace('fa-moon', 'fa-sun');
//     } else {
//         localStorage.setItem('theme', 'light');
//         themeIcon.classList.replace('fa-sun', 'fa-moon');
//     }
// });

// // 6. Mobile Menu Logic
// const btn = document.getElementById('mobile-menu-btn');
// const menu = document.getElementById('mobile-menu');
// const links = document.querySelectorAll('.mobile-link');

// btn.addEventListener('click', () => {
//     menu.classList.toggle('hidden');
// });

// // Close menu when a link is clicked
// links.forEach(link => {
//     link.addEventListener('click', () => {
//         menu.classList.add('hidden');
//     });
// });

// // 7. Testimonial Slider (Vanilla JS)
// const testimonials = [
//     {
//         text: "The Panchakarma treatment here changed my life. My chronic migraines are gone, and I feel 10 years younger. Dr. Sharma is a gem.",
//         author: "Rajesh Kumar",
//         role: "IT Professional"
//     },
//     {
//         text: "A truly serene environment. The staff is incredibly polite, and the Shirodhara therapy helped me overcome severe anxiety.",
//         author: "Sarah Jenkins",
//         role: "Yoga Instructor"
//     },
//     {
//         text: "Authentic Kerala Ayurveda in the heart of the city. Highly recommended for anyone looking for genuine detox programs.",
//         author: "Priya Menon",
//         role: "Banker"
//     }
// ];

// let currentSlide = 0;
// const sliderContainer = document.getElementById('testimonial-slider');

// function renderSlide() {
//     const data = testimonials[currentSlide];
//     // Fade out
//     sliderContainer.style.opacity = 0;
    
//     setTimeout(() => {
//         sliderContainer.innerHTML = `
//             <div class="text-center transition-all duration-500">
//                 <p class="text-xl md:text-2xl font-serif italic text-gray-700 dark:text-gray-200 mb-6">"${data.text}"</p>
//                 <div>
//                     <h4 class="font-bold text-ayurGreen dark:text-ayurCream">${data.author}</h4>
//                     <p class="text-sm text-gray-500 dark:text-gray-400">${data.role}</p>
//                 </div>
//                 <div class="text-yellow-500 mt-3 text-sm">
//                     <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
//                 </div>
//             </div>
//         `;
//         // Fade in
//         sliderContainer.style.opacity = 1;
//     }, 300);
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % testimonials.length;
//     renderSlide();
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
//     renderSlide();
// }

// // Initialize first slide
// renderSlide();

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Preloader & Hero Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.from(".gsap-hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    })
    .from(".gsap-hero-button", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.5");
});

// 2. Scroll Animations (Fade Up Sections)
const fadeUpElements = document.querySelectorAll(".gsap-fade-up");
fadeUpElements.forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// 3. Card Stagger Animation
// Check if element exists to avoid errors
if(document.querySelector(".gsap-stagger-card")) {
    gsap.from(".gsap-stagger-card", {
        scrollTrigger: {
            trigger: "#treatments",
            start: "top 75%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });
}

// 4. Doctor Section Left/Right Fade
gsap.from(".gsap-fade-right", {
    scrollTrigger: {
        trigger: "#doctors",
        start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 1
});

gsap.from(".gsap-fade-left", {
    scrollTrigger: {
        trigger: "#doctors",
        start: "top 80%"
    },
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2
});

// ==========================================
// 5. UPDATED DARK MODE LOGIC (Desktop + Mobile)
// ==========================================
const html = document.documentElement;
const desktopBtn = document.getElementById('theme-toggle');
const desktopIcon = document.getElementById('theme-icon');
const mobileBtn = document.getElementById('mobile-theme-toggle');
const mobileIcon = document.getElementById('mobile-theme-icon');
const mobileText = document.getElementById('mobile-theme-text');

// Helper function to update UI for both buttons
function updateThemeUI(isDark) {
    if (isDark) {
        // Switch to Dark
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        
        // Update Desktop Icon
        if(desktopIcon) desktopIcon.classList.replace('fa-moon', 'fa-sun');
        
        // Update Mobile Icon & Text
        if(mobileIcon) mobileIcon.classList.replace('fa-moon', 'fa-sun');
        if(mobileText) mobileText.textContent = "Light Mode";
        
    } else {
        // Switch to Light
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        
        // Update Desktop Icon
        if(desktopIcon) desktopIcon.classList.replace('fa-sun', 'fa-moon');
        
        // Update Mobile Icon & Text
        if(mobileIcon) mobileIcon.classList.replace('fa-sun', 'fa-moon');
        if(mobileText) mobileText.textContent = "Dark Mode";
    }
}

// Initial Check on Load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    updateThemeUI(true);
} else {
    updateThemeUI(false);
}

// Event Listeners
if(desktopBtn) {
    desktopBtn.addEventListener('click', () => {
        const isDark = html.classList.contains('dark');
        updateThemeUI(!isDark); // Toggle current state
    });
}

if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        const isDark = html.classList.contains('dark');
        updateThemeUI(!isDark); // Toggle current state
    });
}


// 6. Mobile Menu Logic
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const links = document.querySelectorAll('.mobile-link');

if(btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        
        // Optional: Toggle Hamburger Icon to 'X'
        const icon = btn.querySelector('i');
        if (menu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            // Reset icon
            const icon = btn.querySelector('i');
            if(icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// 7. Testimonial Slider (Vanilla JS)
const testimonials = [
    {
        text: "The Panchakarma treatment here changed my life. My chronic migraines are gone, and I feel 10 years younger. Dr. Sharma is a gem.",
        author: "Rajesh Kumar",
        role: "IT Professional"
    },
    {
        text: "A truly serene environment. The staff is incredibly polite, and the Shirodhara therapy helped me overcome severe anxiety.",
        author: "Sarah Jenkins",
        role: "Yoga Instructor"
    },
    {
        text: "Authentic Kerala Ayurveda in the heart of the city. Highly recommended for anyone looking for genuine detox programs.",
        author: "Priya Menon",
        role: "Banker"
    }
];

let currentSlide = 0;
const sliderContainer = document.getElementById('testimonial-slider');

function renderSlide() {
    if(!sliderContainer) return; // Guard clause
    
    const data = testimonials[currentSlide];
    // Fade out
    sliderContainer.style.opacity = 0;
    
    setTimeout(() => {
        sliderContainer.innerHTML = `
            <div class="text-center transition-all duration-500">
                <p class="text-xl md:text-2xl font-serif italic text-gray-700 dark:text-gray-200 mb-6">"${data.text}"</p>
                <div>
                    <h4 class="font-bold text-ayurGreen dark:text-ayurCream">${data.author}</h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400">${data.role}</p>
                </div>
                <div class="text-yellow-500 mt-3 text-sm">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
            </div>
        `;
        // Fade in
        sliderContainer.style.opacity = 1;
    }, 300);
}

// Make these global so HTML onclick attributes can find them
window.nextSlide = function() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    renderSlide();
}

window.prevSlide = function() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    renderSlide();
}

// Initialize first slide
renderSlide();