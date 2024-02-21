function calculateLoan() {
    var grossSalary = parseFloat(document.getElementById('grossSalary').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanDuration = parseFloat(document.getElementById('loanDuration').value);

    if (isNaN(grossSalary) || isNaN(interestRate) || isNaN(loanDuration)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate maximum loan amount using the formula
    var totalGrossIncome = grossSalary;
    var totalMonthlyDebtPayments = 0; // Assuming no existing debt payments for simplicity
    var debtToIncomeRatio = 0.25; // 25% for the debt-to-income ratio
    var maximumLoanAmount = (totalGrossIncome - totalMonthlyDebtPayments) * debtToIncomeRatio;

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Maximum amount of loan you can take: $" + maximumLoanAmount.toFixed(2);
}
