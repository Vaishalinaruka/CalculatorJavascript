let inputString = "";
let buttons = document.querySelectorAll("button");

// console.log(buttons);
// console.log(Array.from(buttons));
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event.target);

    if (event.target.innerHTML == "=") {
      inputString = eval(inputString);
      document.getElementById("inputId").value = inputString;
    } else if (event.target.innerHTML == "Clear all") {
      inputString = "";
      document.getElementById("inputId").value = inputString;
    } else {
      inputString = inputString + event.target.innerHTML;
      document.getElementById("inputId").value = inputString;
    }
  });
});
