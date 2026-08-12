/* =========================================
   LUXORA GLOBAL GROUP
   Main JavaScript
========================================= */

/* =========================================
   NAVBAR SCROLL
========================================= */
const navbar = document.getElementById("navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

/* =========================================
   MOBILE MENU TOGGLE
========================================= */
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        document.body.classList.toggle("menu-open", isOpen);
    });
}

/* =========================================
   CLOSE MOBILE MENU ON LINK CLICK
========================================= */
const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (mobileMenu) mobileMenu.classList.remove("active");
        if (menuToggle) {
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
        document.body.classList.remove("menu-open");
    });
});

/* =========================================
   SCROLL REVEAL OBSERVER
========================================= */
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0 && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
} else {
    // Fallback si IntersectionObserver no está disponible
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}

/* =========================================
   CONTACT FORM VALIDATION & HANDLING
========================================= */
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const companyInput = document.getElementById("company");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const subjectInput = document.getElementById("subject");
        const messageInput = document.getElementById("message");

        const name = nameInput ? nameInput.value.trim() : "";
        const company = companyInput ? companyInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const phone = phoneInput ? phoneInput.value.trim() : "";
        const subject = subjectInput ? subjectInput.value.trim() : "";
        const message = messageInput ? messageInput.value.trim() : "";

        // Validaciones
        if (!name || name.length < 2) {
            showFormError("Por favor, ingrese un nombre válido.");
            if (nameInput) nameInput.focus();
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            showFormError("Por favor, ingrese un correo electrónico corporativo válido.");
            if (emailInput) emailInput.focus();
            return;
        }

        if (!message || message.length < 5) {
            showFormError("Por favor, escriba un mensaje con al menos 5 caracteres.");
            if (messageInput) messageInput.focus();
            return;
        }

        const emailDestino = "info@luxoraglobal.com";
        const asunto = subject ? `Consulta Luxora - ${subject}` : "Nueva consulta comercial - Luxora Global Group";
        const cuerpo = `Nombre: ${name}\nEmpresa: ${company || 'N/A'}\nEmail: ${email}\nTeléfono: ${phone || 'N/A'}\nAsunto: ${subject || 'General'}\n\nMensaje:\n${message}`;

        const mailto = `mailto:${emailDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

        if (formMessage) {
            formMessage.style.color = "#4cd964";
            formMessage.textContent = "✓ Formulario validado. Abriendo su cliente de correo...";
        }

        window.location.href = mailto;
    });
}

function showFormError(msg) {
    if (formMessage) {
        formMessage.style.color = "#ff453a";
        formMessage.textContent = `✕ ${msg}`;
    }
}