let cards = document.querySelectorAll('.text');

cards.forEach(text => {
    text.innerText = text.innerText.substr(0, 300) + "...";
});