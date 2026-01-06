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
document.getElementById("Button_AddNumberInArray").onclick = function () {
    const input = document.getElementById("InputBox_Number");
    const label = document.getElementById("Label_Array");
    let val = input.value;

    if (numbersArray.length >= n) {
        alert(`You have already entered ${n} numbers. Please click 'Find Min And Max'.`);
        return;
    }
    if (val !== "") {
        numbersArray.push(Number(val));

        label.textContent = `Array (${numbersArray.length}/${n}): [${numbersArray.join(", ")}]`;
        input.value = ""; // Очищення поля
        input.focus();    // Повернення курсору в поле
    }
};

document.getElementById("FindMinAndMax").onclick = function () {
    if (numbersArray.length < n) {
        alert(`Please enter exactly ${n} numbers. Currently entered: ${numbersArray.length}`);
        return;
    }
    const min = Math.min(...numbersArray);
    const max = Math.max(...numbersArray);

    alert(`Calculation Results:\nMinimum: ${min}\nMaximum: ${max}`);

    document.cookie = `MinMaxResult=Min: ${min}, Max: ${max}; path=/; max-age=3600`;
    location.reload();
};

window.onload = function () {
    if (document.cookie) {

        document.getElementById("ArrayContainer").style.display = 'none';
        // а) Виводимо збережений результат і питаємо про видалення
        const deleteData = confirm(`${document.cookie}\nDo you want to delete the data from cookies?`);

        if (deleteData) {
            // b) Якщо користувач згоден — видаляємо Cookies та оновлюємо сторінку
            document.cookie = "MinMaxResult=; path=/; max-age=-1";
            alert("Cookies have been deleted. The page will now reload.");
            location.reload();
        } else {
            // c) Якщо користувач відмовився — виводимо інфо-вікно, форма залишається прихованою
            alert("Cookies are preserved. To restore the form, you must reload the page.");
        }
    }

    const savedColor = localStorage.getItem('BorderColor');
    if (savedColor) {
        applyColorToBorders(savedColor);
        colorInput.value = savedColor;
    }
};

//colorInput.onfocus = function () {
//    // 1. Отримуємо колір, який зараз обраний в інпуті
//    const chosenColor = colorInput.value;

//    // 2. Фарбуємо всі блоки 1-6
//    for (let i = 1; i <= 6; i++) {
//        document.querySelector(`.item${i}`).style.borderColor = chosenColor;
//    }

//    // 3. Записуємо цей вибір у пам'ять браузера
//    localStorage.setItem('savedColor', chosenColor);
//};

const colorInput = document.getElementById('InputBox_Color');

// Це і є функція, яка спрацьовує ПРИ ФОКУСІ
colorInput.onfocus = function () {

    console.log(`${colorInput.value}_1`);
    localStorage.setItem('BorderColor', colorInput.value);

    applyColorToBorders(colorInput.value);
};

function applyColorToBorders(color) {
    const items = document.querySelectorAll('.Header, .MainContainer, .Footer, .item1, .item3, .item4');
    items.forEach(item => {
        // Змінюємо колір рамки для самого блока
        item.style.borderColor = color;
    });
};
