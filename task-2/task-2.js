const title = document.querySelector("h1");
title.style.backgroundColor = "green";

const paragraph = document.getElementsByTagName("p")[0];
paragraph.style.fontWeight = "bold";

const paragraphTwo = document.getElementsByTagName("p")[1];
paragraphTwo.style.color = "red";

const paragraphThird = document.getElementsByTagName("p")[2];
paragraphThird.style.textDecoration = "underline";

const paragraphFour = document.getElementsByTagName("p")[3];
paragraphFour.style.fontStyle = "italic";

const myList = document.getElementById("myList");
const listItems = myList.getElementsByTagName('li');
let oneWord = "";
for (let i = 0; i < listItems.length; i++) {
    oneWord += listItems[i].textContent;
  }
  myList.innerHTML = oneWord;