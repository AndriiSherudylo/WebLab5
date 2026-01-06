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

} FindAreaOfDiamond();

let numbersArray = [];
let n = 10;
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
        input.value = ""; // ќчищенн€ пол€
        input.focus();    // ѕоверненн€ курсору в поле
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
        // а) ¬иводимо збережений результат ≥ питаЇмо про видаленн€
        const deleteData = confirm(`${document.cookie}\nDo you want to delete the data from cookies?`);

        if (deleteData) {
            // b) якщо користувач згоден Ч видал€Їмо Cookies та оновлюЇмо стор≥нку
            document.cookie = "MinMaxResult=; path=/; max-age=-1";
            alert("Cookies have been deleted. The page will now reload.");
            location.reload();
        } else {
            // c) якщо користувач в≥дмовивс€ Ч виводимо ≥нфо-в≥кно, форма залишаЇтьс€ прихованою
            alert("Cookies are preserved. To restore the form, you must reload the page.");
        }
    }

    const savedColor = localStorage.getItem('BorderColor');
    if (savedColor) {
        applyColorToBorders(savedColor);
        colorInput.value = savedColor;
    }

    const GalleryString = localStorage.getItem('Gallery');
    let GalleryArray = [];

    if (GalleryString !== null) GalleryArray = JSON.parse(GalleryString);
    GalleryArray.forEach(url => {
        renderImage(url, document.querySelector('.item1'));
    });
};

const colorInput = document.getElementById('InputBox_Color');
colorInput.onfocus = function () {

    console.log(`${colorInput.value}_1`);
    localStorage.setItem('BorderColor', colorInput.value);

    applyColorToBorders(colorInput.value);
};
function applyColorToBorders(color) {
    const items = document.querySelectorAll('.Header, .MainContainer, .Footer, .item1, .item3, .item4');
    items.forEach(item => {
        // «м≥нюЇмо кол≥р рамки дл€ самого блока
        item.style.borderColor = color;
    });
};



document.getElementById("TextToHighlight").onmouseup = function () {
    document.getElementById("FormOfAddingImagesContainer").style.display = `block`
}

document.getElementById("Button_AddImage").onclick = function () {

    let input = document.getElementById("InputBox_LinkOfImage");

    renderImage(input.value, document.querySelector('.item4'));

    const GalleryString = localStorage.getItem('Gallery');
    let GalleryArray = [];

    if (GalleryString !== null) GalleryArray = JSON.parse(GalleryString);

    GalleryArray.push(input.value);
    localStorage.setItem('Gallery', JSON.stringify(GalleryArray));

    input.value = "";
}

document.getElementById("Button_DeleteAllImages").onclick = function () {
    localStorage.removeItem('Gallery');

    const imagesInBlock1 = document.querySelectorAll('.item1 .DynamicImage');

    imagesInBlock1.forEach(img => img.remove());
}

function renderImage(url, container) {
    const imgHTML = `
            <div class="DynamicImage" style="margin-top:10px;">
                <img src="${url}" style="width: 100%; border: 1px solid black">
            </div>`;
    container.insertAdjacentHTML('beforeend', imgHTML);
}