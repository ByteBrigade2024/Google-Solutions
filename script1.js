function calculateResults() {
    var salary = parseFloat(document.getElementById('salary').value);
    var expenses = parseFloat(document.getElementById('expenses').value);
    var riskTolerance = document.getElementById('riskTolerance').value;
    var retirementGoal = parseFloat(document.getElementById('retirementGoal').value) || 0;
    var debtGoal = parseFloat(document.getElementById('debtGoal').value) || 0;
    var purchaseGoal = parseFloat(document.getElementById('purchaseGoal').value) || 0;
    var hasInsurance = document.getElementById('medicalInsurance').checked;
    var insuranceAmount = parseFloat(document.getElementById('insuranceAmount').value) || 0;

    var availableFunds = salary - expenses;
    if (hasInsurance) {
        availableFunds -= insuranceAmount;
    }

    var recommendations = [];
    if (availableFunds > 0) {
        recommendations.push("Consider investing in mutual funds.");
        if (riskTolerance === 'low') {
            recommendations.push("Explore safe investment options like bonds or savings accounts.");
        } else if (riskTolerance === 'medium') {
            recommendations.push("Consider a balanced investment portfolio with moderate risk.");
        } else if (riskTolerance === 'high') {
            recommendations.push("You may consider investing in stocks for higher potential returns.");
        }
    } else {
        recommendations.push("You are spending more than you earn. Review your expenses and budget.");
    }

    document.getElementById('availableFunds').innerText = "$" + availableFunds.toFixed(2);
    var recommendationsList = document.getElementById('recommendations');
    recommendationsList.innerHTML = "";
    recommendations.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        recommendationsList.appendChild(li);
    });

    document.getElementById('results').style.display = 'block';
}

document.getElementById('medicalInsurance').addEventListener('change', function () {
    document.getElementById('insuranceInput').style.display = this.checked ? 'block' : 'none';
});