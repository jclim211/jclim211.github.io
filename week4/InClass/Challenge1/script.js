function calculate() {

    // YOUR CODE GOES HERE
    var num1 = parseInt(document.getElementById("number1").value);
    var num2 = parseInt(document.getElementById("number2").value);
    
    var sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    
    document.getElementById("result").innerText = "The sum is: " + sum;
}