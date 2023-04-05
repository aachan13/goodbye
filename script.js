function createHeart() {
    const coffee = document.createElement("div");
    coffee.classList.add("coffee");

    coffee.style.left = Math.random() * 100 + "vw";
    coffee.style.animationDuration = Math.random() * 2 + 3 + "s";

    coffee.innerText = "☕️";

    document.body.appendChild(coffee);

    setTimeout(() => {
        coffee.remove();
    }, 5000);
}

setInterval(createHeart, 300);
