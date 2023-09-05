const submitBtn = document.getElementById("submitBtn");

const outBlock = document.querySelector(".out");

submitBtn.addEventListener("click", function (event) {
    const inputElements = this.querySelectorAll(".arr");
    let outputText = "";
    inputElements.forEach(function (inputElement) {
        const label = inputElement.getAttribute("data-form");
        const value = inputElement.value;
        outputText += `${label}: ${value}<br>`;
      });
      outBlock.innerHTML = outputText;
});
