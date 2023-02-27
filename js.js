
let a = 0.1;
let b = 0.2;
let firstAddition = a + b;
console.log(firstAddition.toFixed(1));
document.getElementById("firstAdd").innerHTML = firstAddition.toFixed(1).toString();


let c = '1';
let d = 2;
let secondAddition = d + + c;
console.log(secondAddition);
document.getElementById("secondAdd").innerHTML = secondAddition.toString();

function getData() {
    let data = document.getElementById("inputGb").value;
    console.log(data);
    let getDataResult = data * 1024;
    document.getElementById("dataRes").innerHTML = getDataResult.toString();
    let getDataResultDivision = getDataResult / 820;
    console.log(getDataResultDivision.toFixed(0));
    document.getElementById("dataResDivision").innerHTML = getDataResultDivision.toFixed(0).toString();
}


function getChocolate() {
    let money = document.getElementById("inputChoco").value;
    let price = document.getElementById("inputPrice").value;
    console.log(money);
    console.log(price);
    let getChocolateResult = Math.floor(money / price);
    console.log(getChocolateResult.toFixed(0));
    document.getElementById("chocoResult").innerHTML = getChocolateResult.toFixed(0).toString();
    let getChocolateResultReshta = Math.floor(money % price);
    console.log(getChocolateResultReshta);
    document.getElementById("reshta").innerHTML = getChocolateResultReshta.toString();
}

function reverseNumber() {
    let number = document.getElementById('number').value;

    let firstDigit = Math.floor(number / 100);
    console.log(firstDigit.toFixed(0));
    let secondDigit = Math.floor((number / 10) % 10);
    console.log(secondDigit.toFixed(0));
    let thirdDigit = Math.floor(number % 10);
    console.log(thirdDigit.toFixed(0));

    let reversed = Math.floor(thirdDigit * 100 + secondDigit * 10 + firstDigit)
    console.log(reversed);

    document.getElementById('numberResult').innerHTML = reversed.toString();
}

function vklad() {
    let amount = parseFloat(document.getElementById('amount').value);
    let monthPercent = 0.05 / 12;
    let result = amount + (amount * monthPercent);
    result = result.toFixed(2);

    document.getElementById('result').innerHTML = result.toString();
}


console.log(2 && 0 && 3);
let firstVyrazResult = 2 && 0 && 3;
document.getElementById('firstVyraz').innerHTML = firstVyrazResult.toString();

console.log(2 || 0 || 3);
let secondVyrazResult = 2 || 0 || 3;
document.getElementById('secondVyraz').innerHTML = secondVyrazResult.toString();

console.log(2 && 0 || 3);
let thirdVyrazResult = 2 && 0 || 3;
document.getElementById('thirdVyraz').innerHTML = thirdVyrazResult.toString();

