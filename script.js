function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', function() {
    var sentences = [
        "Là pour vous faciliter la vie 🤍",
        "La meilleure équipe, nan mais sérieux.",
        "Crackoooooo! 🦖",
        "*bruit de t-rex*",
        "Inégalé depuis la nuit des temps…"
    ];

    function getRandomSentence() {
        var index = Math.floor(Math.random() * sentences.length);
        return sentences[index];
    }

    var sentenceElement = document.querySelector('.sentence');
    sentenceElement.textContent = getRandomSentence();
});
