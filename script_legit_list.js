document.addEventListener('DOMContentLoaded', () => {
    const jsonUrl = 'https://crackochat.github.io/data/links.json'; // Replace with your raw JSON URL

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => generateBoxes(data))
        .catch(error => console.error('Error loading JSON:', error));
});

function generateBoxes(elements) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing content
    elements.forEach(element => {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerText = element.name;
        box.onclick = () => navigateTo(element.link);
        container.appendChild(box);
    });
}

function navigateTo(page) {
    window.location.href = page;
}
