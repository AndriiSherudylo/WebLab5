function SwapText() {
    const item2 = document.querySelector('.item2'); // Header
    const item6 = document.querySelector('.item6'); // Footer

    const temp = item2.innerHTML;
    item2.innerHTML = item6.innerHTML;
    item6.innerHTML = temp;

    //console.log(item2);
    //console.log(item6);
} SwapText();

function FindAreaOfDiamond() {
    const d1 = 15;
    const d2 = 10;
    const S = (d1 * d2) / 2;

    document.getElementById("Result").textContent = `Area Of Diamond: ${S}`;

    //console.log(S);

} FindAreaOfDiamond();




let numbersArray = [];
let n = 3; // Кількість значень згідно з умовою завдання

// Головна функція, що спрацьовує при завантаженні сторінки
window.onload = function () {
    // Виконання функцій з попередніх завдань
    if (typeof SwapText === "function") SwapText();
    if (typeof FindAreaOfDiamond === "function") FindAreaOfDiamond();

    // Перевірка Cookies згідно з пунктами a, b, c
    checkCookieOnLoad();
};

// Функція для додавання чисел у масив з форми
document.getElementById("Button_AddNumberInArray").onclick = function () {
    const input = document.getElementById("InputBox_Number");
    const label = document.getElementById("Label_Array");
    let val = input.value;

    // Перевірка, чи не перевищено ліміт у 10 чисел
    if (numbersArray.length >= n) {
        alert(`You have already entered ${n} numbers. Please click 'Find Min And Max'.`);
        return;
    }

    // Якщо поле не порожнє, додаємо число до масиву
    if (val !== "") {
        numbersArray.push(Number(val));
        // Оновлення тексту масиву на сторінці для візуального прогресу
        label.textContent = `Array (${numbersArray.length}/${n}): [${numbersArray.join(", ")}]`;
        input.value = ""; // Очищення поля
        input.focus();    // Повернення курсору в поле
    }
};

// Функція для розрахунку Min/Max та запису результату в Cookies
document.getElementById("FindMinAndMax").onclick = function () {
    // Перевірка, чи введено рівно 10 чисел
    if (numbersArray.length < n) {
        alert(`Please enter exactly ${n} numbers. Currently entered: ${numbersArray.length}`);
        return;
    }
    const min = Math.min(...numbersArray);
    const max = Math.max(...numbersArray);

    // Виведення результату через діалогове вікно (Пункт 3)
    alert(`Calculation Results:\nMinimum: ${min}\nMaximum: ${max}`);

    // Зберігання результату в Cookies з кодуванням тексту
    const cookieText = encodeURIComponent(`Min: ${min}, Max: ${max}`);
    document.cookie = `MinMaxResult=${cookieText}; path=/; max-age=3600`;
};

// Допоміжна функція для отримання значення конкретного Cookie
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Реалізація логіки перевірки Cookies при завантаженні (Пункти a, b, c)
function checkCookieOnLoad() {
    const savedResult = getCookie("MinMaxResult");
    const formContainer = document.getElementById('ArrayContainer');

    if (savedResult) {
        // а) Якщо Cookies існують — ховаємо форму введення
        if (formContainer) {
            formContainer.style.display = 'none';
        }

        // а) Виводимо збережений результат і питаємо про видалення
        const deleteData = confirm(`Saved result in Cookies: "${savedResult}".\n\nDo you want to delete the data from cookies?`);

        if (deleteData) {
            // b) Якщо користувач згоден — видаляємо Cookies та оновлюємо сторінку
            document.cookie = "MinMaxResult=; path=/; max-age=-1";
            alert("Cookies have been deleted. The page will now reload.");
            location.reload();
        } else {
            // c) Якщо користувач відмовився — виводимо інфо-вікно, форма залишається прихованою
            alert("Cookies are preserved. To restore the form, you must delete them and reload the page.");
        }
    }
}