let BASEURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let dropdown = document.querySelectorAll(".selectdropdown select");
let button = document.querySelector(".button ");
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");
let msg = document.querySelector(".msg");

dropdown.forEach(select => {
    for (const currcode in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        select.append(newoption);
        if (select.name === "from" && currcode === "USD") {
            newoption.selected = "selected";
        }
        else if (select.name === "to" && currcode === "INR") {
            newoption.selected = "selected";
        }
    }
    select.addEventListener("change", (evt) => {
        changeflag(evt.target);
    })


});

const updatarate = async () => {
    let input = document.querySelector(".inputamount input");
    let amtval = input.value;
    if (amtval < 1 || amtval === "") {
        amtval = 1;
        input.value = "1";
    }
    const URL = `${BASEURL}/${fromcurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
    let convertedAmount = amtval * rate;
    msg.innerText = `${amtval} ${fromcurr.value} = ${convertedAmount} ${tocurr.value}`
}

const changeflag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
}
window.addEventListener("load", () => {
    updatarate();
    ;
})

button.addEventListener("click", (ele) => {
    ele.preventDefault();
    updatarate();

})