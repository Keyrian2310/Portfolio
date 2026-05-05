document.querySelectorAll('.item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});
const cards = document.querySelectorAll(
    '.featured-project-card'
);

cards.forEach(card => {
    card.addEventListener('mousemove', e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});
function openModal(id) {
    const project = projects[id];

    document.getElementById("modalTitle").innerText = project.title;

    document.getElementById("modalDesc").innerHTML = `
        <strong>Contexte :</strong> ${project.content.contexte}<br><br>
        <strong>Objectifs :</strong> ${project.content.objectifs}<br><br>
        <strong>Réalisations :</strong>
        <ul>
            ${project.content.realisations.map(r => `<li>${r}</li>`).join("")}
        </ul>
        <br>
        <strong>Difficultés :</strong> ${project.content.difficulte || "Non précisé"}
    `;

    // LIEN (PROPRE + CONDITIONNEL)
    if (project.content.lien) {
        document.getElementById("modalDesc").innerHTML += `
            <br><br><a href="${project.content.lien}" target="_blank">🔗 Voir le site</a>
        `;
    }

    document.getElementById("modalTags").innerHTML =
        project.tags.map(t => `<span>${t}</span>`).join("");

    document.getElementById("modalImages").innerHTML =
        project.images.map(img => `<img src="${img}" onclick="openImage('${img}')">`).join("");

    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(e){
    const modal = document.getElementById("projectModal");
    if(e.target === modal){
        modal.style.display = "none";
    }
}
function scrollProjects(direction){
    const slider = document.getElementById("projectsSlider");

    slider.scrollBy({
        left: direction * 320,
        behavior: "smooth"
    });
}

const projects = {

    adcpg03: {
        title: "ADCPG 03",
        images: [
            "assets/UncpgAcceuil.png",
            "assets/UncpgFooter.png",
            "assets/UncpgEspace.png",
            "assets/UncpgAdherent.png"
        ],
        content: {
            contexte: "Stage WordPress réalisé dans le cadre de ma formation BTS SIO.",
            objectifs: "Créer un site WordPress complet avec thème personnalisé.",
            realisations: [
                "Thème enfant PHP personnalisé",
                "Menu responsive mobile",
                "Module de don interactif",
                "Déploiement FTP via FileZilla"
                
            ],
            difficulte: "Gestion du CSS responsive et déploiement FTP via Filezilla.",

             lien: "https://adcpg03.free.nf"
        },
        tags: ["WordPress", "PHP", "JS", "FTP"]
    },

    vibz: {
        title: "Plateforme musique",
        images: ["assets/VIBZ.png"],
        content: {
            contexte: "Projet de plateforme musicale.",
            objectifs: "Créer une application de streaming simple et moderne.",
            realisations: [
                "Frontend Vue.js",
                "Backend Java",
                "Base de données MySQL"
            ],
            difficulte: "Connexion API entre front et back.",

            lien: "https://vibz-music.netlify.app"
        },
        tags: ["Vue.js", "Java", "MySQL"]
    },

    sport: {
        title: "Gestion sportifs",
        images: [
            "assets/SportConnexion.png",
            "assets/SportAcceuil.png",
            "assets/SportGestion.png",
            "assets/SportCompte.png",
        ],
        content: {
            contexte: "Application de gestion de sportifs.",
            objectifs: "Créer une application en C#.",
            realisations: [
                "Interface WinForms",
                "Base de données SQL",
                "Gestion CRUD"
            ],
            difficulte: "Gestion des relations SQL."
        },
        tags: ["C#", "SQL", "WinForms"]
    }
};

if (project.content.lien) {
    html += `
        <a href="${project.content.lien}" target="_blank" class="project-link">
            Voir le projet →
        </a>
    `;
}

function openImage(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightboxImg");

    img.src = src;
    lightbox.style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}