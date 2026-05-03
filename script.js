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

    const modal = document.getElementById("projectModal");
    const content = document.getElementById("modalContent");

    const project = projects[id];

    modal.style.display = "flex";

    content.innerHTML = `
        <span class="close-btn" onclick="closeModal()">×</span>

        <div class="modal-layout">

            <div class="modal-left">

                <h2>${project.title}</h2>

                <div class="modal-block">
                    <h4>Contexte</h4>
                    <p>${project.content.contexte}</p>
                </div>

                <div class="modal-block">
                    <h4>Objectifs</h4>
                    <p>${project.content.objectifs}</p>
                </div>

                <div class="modal-block">
                    <h4>Points de réalisation</h4>
                    <ul>
                        ${project.content.realisations.map(r => `<li>${r}</li>`).join("")}
                    </ul>
                </div>

                <div class="modal-block">
                    <h4>Difficultés</h4>
                    <p>${project.content.difficulte}</p>
                </div>

                <div class="modal-tags">
                    ${project.tags.map(t => `<span>${t}</span>`).join("")}
                </div>

            </div>

            <div class="modal-right">
                ${project.images.map(img => `<img src="${img}">`).join("")}
            </div>

        </div>
    `;
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
            difficulte: "Gestion du CSS responsive et déploiement FTP via Filezilla."
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
            difficulte: "Connexion API entre front et back."
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