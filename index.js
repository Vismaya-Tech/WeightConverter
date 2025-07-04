const inputel = document.getElementById("input");
const btnel = document.getElementById("btn");
const resultel = document.getElementById("result");
const errorel = document.getElementById("error");
const resultSpan = resultel.querySelector("span");

let errortimeout, resulttimeout;

btnel.addEventListener("click", updateChange);

function updateChange() {
    const value = parseFloat(inputel.value);

    if (value <= 0 || isNaN(value)) {
        errorel.innerText = "Please enter a valid number";
        clearTimeout(errortimeout);
        errortimeout = setTimeout(() => {
            errorel.innerText = "";
            inputel.value = "";
        }, 2000);
    } else {
        errorel.display="none";
        const kg = (value / 2.2).toFixed(2);
        resultSpan.innerText = kg;
        clearTimeout(resulttimeout);
        resulttimeout = setTimeout(() => {
            resultSpan.innerText = "";
            inputel.value = "";
        }, 3000);
    }
}
