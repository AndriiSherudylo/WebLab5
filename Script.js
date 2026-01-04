function SwapText() {
    const item2 = document.querySelector('.item2'); // Header
    const item6 = document.querySelector('.item6'); // Footer

    if (item2 && item6) {
        let temp = item2.innerHTML;
        item2.innerHTML = item6.innerHTML;
        item6.innerHTML = temp;
        console.log("Тексти змінили місця.");
    }
}
// Викликаємо функцію відразу при завантаженні
SwapText();