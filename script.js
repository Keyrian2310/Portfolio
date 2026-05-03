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
function openModal(title, desc, tags) {
    document.getElementById("projectModal").style.display = "flex";

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;

    const container = document.getElementById("modalTags");
    container.innerHTML = "";

    tags.forEach(tag => {
        const span = document.createElement("span");
        span.innerText = tag;
        container.appendChild(span);
    });
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