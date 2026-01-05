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


document.getElementById("Button_AddNumberInArray").onclick() = function(){
    console.log("Hi");

}


