const userInput = document.getElementById("user_input");
const evenNumsSelector = document.getElementById("even_nums_selector");
const totalNumsSelector = document.getElementById("total_nums_selector");
const button = document.getElementById("button");
const result = document.getElementById("result");

//Even Numbers Function
const evenNumsFn = (arrOfNums) => {
  const evenNumsResult = arrOfNums.filter((arrOfNums) => arrOfNums % 2 === 0);
  result.textContent = evenNumsResult;
  //console.log(evenNumsResult)
};

//Total Numbers Function
const totalNumsFn = (arrOfNums) => {
  const totalNumsResult = arrOfNums.reduce((total, amount) => total + amount);

  isNaN(totalNumsResult)
    ? (result.textContent = "Please enter numbers only.")
    : (result.textContent = totalNumsResult);
  //console.log(totalNumsResult)
  // returns true if value is NaN otherwise false
};

button.addEventListener("click", function () {
  const inputArr = userInput.value.split(",");
  const arrOfNums = inputArr.map(Number);
  //covert array of strings ['1',' 2',' 3'] to array of numbers [1,2,3]
  //console.log(arrOfNums)

  // coverted from if/else to ternary
  evenNumsSelector.checked
    ? evenNumsFn(arrOfNums)
    : totalNumsSelector.checked
    ? totalNumsFn(arrOfNums)
    : (result.textContent = `Please make a selection! Even or Total?`);
});

/*
Add JavaScript so that when the user clicks the button, 
one of the functions is run and the result is shown on the page.

The input should be given in the first input box as a string. 
The user should be able to enter numbers, separated by commas. 
In JavaScript, you’ll convert this string to an array of numbers.

Based on which radio button is selected, choose which function
to run. Pass an array as an argument to the particular function.

Finally, return the result from the 
function and display it on the page. */
