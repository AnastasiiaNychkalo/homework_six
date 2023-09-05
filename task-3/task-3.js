const body =document.querySelector("body");

const main = document.createElement("main");
main.classList.add("mainClass_check_item");

body.prepend(main);

const div = document.createElement("div");
div.id = "myDiv"

main.prepend(div);

const paragraph = document.createElement("p");

paragraph.innerHTML = "First paragraph";

div.prepend(paragraph);