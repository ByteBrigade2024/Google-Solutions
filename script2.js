function calculateLoan() {
    var salary = parseFloat(document.getElementById('salary').value);
    var interest = parseFloat(document.getElementById('interest').value);
    var time = parseFloat(document.getElementById('time').value);

    if (isNaN(salary) || isNaN(interest) || isNaN(time)) {
        alert("Please enter valid numbers.");
        return;
    }

    var maxLoan = (salary * 0.25) / (1 + (interest / 100) * time);
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Maximum amount of loan you can take: $" + maxLoan.toFixed(2);
}
