/* =========================
   LOADING SCREEN
========================= */
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s ease";
        setTimeout(() => loader.style.display = "none", 500);
    }, 1000);
});

/* =========================
   TYPING EFFECT (HERO TEXT)
========================= */
const text =
"I build and support secure, reliable network systems and IT infrastructure.";

let index = 0;
const speed = 40;

function typeWriter() {
    const target = document.getElementById("typing-text");

    if (!target) return;

    if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.addEventListener("load", typeWriter);

/* =========================
   SIMPLE CHATBOT LOGIC
========================= */
function chatReply() {
    const input = document.getElementById("chatInput").value.toLowerCase();
    const output = document.getElementById("chatOutput");

    if (!input) {
        output.innerText = "Please type a question.";
        return;
    }

    let response = "I am still learning, but I can tell you about my IT skills.";

    // Basic keyword responses
    if (input.includes("network")) {
        response = "I specialize in Cisco networking, VLANs, routing, switching, and troubleshooting.";
    }
    else if (input.includes("skill")) {
        response = "My skills include Networking, Cybersecurity, Azure, Linux, Python, and IT Support.";
    }
    else if (input.includes("project")) {
        response = "I built VLAN network simulations and a responsive portfolio website.";
    }
    else if (input.includes("contact")) {
        response = "You can contact me via email or phone listed in the contact section.";
    }
    else if (input.includes("hello") || input.includes("hi")) {
        response = "Hello! Feel free to ask about my skills or projects.";
    }

    output.innerText = response;
}

/* =========================
   PARTICLES BACKGROUND
========================= */
window.addEventListener("load", function () {
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 60
                },
                color: {
                    value: "#00aaff"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5
                },
                size: {
                    value: 3
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00aaff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    }
                }
            },
            retina_detect: true
        });
    }
});