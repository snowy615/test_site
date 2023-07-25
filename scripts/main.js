//change the title name
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

//open with a hello! message
// alert("hello!");

//switch the images if clicked upon
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox.png");
  }
};

//if web page is clicked, message will show
// document.querySelector("html").addEventListener("click", 
// function () {
//     alert("Ouch! Stop poking me!");
//   });

  //personalized welcome message
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
  
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};




  
  
//create button
// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");
  