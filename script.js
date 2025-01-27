const list = [
    "Full stack web development.",
    "Cybersecurity.",
    "Network security.",
    "Artificial intelligence.",
    "Data science.",
];

document.getElementById("view-btn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * list.length);
    document.getElementById("list-text").textContent = list[randomIndex];
});