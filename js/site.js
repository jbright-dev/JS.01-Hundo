//Get values from the page
//Controller Function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //validate data as int
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
                
        //call generate numbers
        let numbers = generateNumbers(startValue, endValue);            
        //call display numbers
        displayNumbers(numbers);

    }else{
        alert("Please enter an integer");
    }

}

//Generate numbers from startValue to endValue
//Business Logic Function
function generateNumbers(sValue, eValue){
    
    //assign the variable numbers a value of an empty array
    let numbers = [];

    //we want to get all number from start to end
    for (let index = sValue; index <= eValue; index++) {
        
        //this will execute in a loop until index = eValue
        numbers.push(index);
        
    }

    return numbers;
}

//Display numbers with the even numbers being bold
//View Function
function displayNumbers(numbers){
    
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let className ="even";

        let number = numbers[index];

        if (number % 2 == 0) {
            className = "even";
        }else{
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}