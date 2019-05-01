
document.addEventListener("DOMContentLoaded", () => {

    const thankYou = () => alert("Dziękujemy za Twoje zgłoszenie!");

    const mainForm = document.querySelector(".mainForm");
    const btn = document.querySelector("button");

    btn.addEventListener("mouseover", () => mainForm.style.background = "#7f962f");
    btn.addEventListener("mouseout", () => mainForm.style.background = "rgba(0, 0, 0, 0.8)");

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const city = document.querySelector("#city");
    const firstCheckbox = document.querySelector("#firstCheckbox");
    const secondCheckbox = document.querySelector("#secondCheckbox");
    const warnings = document.querySelectorAll(".warning p");

    btn.addEventListener("click", (event) => {
        const warningsArray = [];
        if (!name.value) {
            warningsArray.push(0);
            warnings[0].innerText = "Proszę wypełnić pole";
        }

        if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
            warningsArray.push(1);
            warnings[1].innerText = "Proszę wypełnić pole";
        }

        const numbers = /^[-+]?[0-9]+$/;
        if (!phone.value.match(numbers) || phone.value.toString().length < 6) {
            warningsArray.push(2);
            warnings[2].innerText = "Proszę wypełnić pole";
        }

        if (!city.value) {
            warningsArray.push(3);
            warnings[3].innerText = "Proszę wypełnić pole";
        }

        if (!firstCheckbox.checked) {
            warningsArray.push(4);
            warnings[4].innerText = "Proszę wyrazić zgodę";
        }

        if (!secondCheckbox.checked) {
            warningsArray.push(5);
            warnings[5].innerText = "Proszę wyrazić zgodę";
        }

        if (warningsArray.length != 0) {
            event.preventDefault();
        }
        else {
            thankYou();
        }
    })
})
