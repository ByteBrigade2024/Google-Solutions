function calculateTax() {
    const income = parseFloat(document.getElementById("income").value);
    const expenditure = parseFloat(document.getElementById("expenditure").value);

    if (expenditure > income) {
        alert("Annual expenditure cannot be greater than annual income!");
        return;
    }

    const result = income - expenditure;

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <h2>Income Remaining</h2>
        <p>Your annual income after taxes and expenses is Rs ${result}</p>
    `;

    if (result <= 100000) {
        resultElement.innerHTML += "<p>You can start with insurance cover and similar investments.</p>";
    } else if (result > 100000 && result <= 200000) {
        resultElement.innerHTML += "<p>You can invest 60% of this in insurance cover and similar safe investments and the remaining in your preferred and researched mutual funds through SYSTEMATIC INVESTMENT PLAN (SIP). Popular mutual funds include AQW Mutual Fund, ICC Prudential Mutual Fund, and LMN Mutual Fund.</p>";
    } else if (result > 200000 && result <= 400000) {
        resultElement.innerHTML += "<p>You can start by investing 30 % of this amount in insurance cover and similar safer investments and the remaining in your preferred and selected mutual funds through SYSTEMATIC INVESTMENT PLAN (SIP). Popular mutual funds include  Bluechip Fund, ABC Asset Large Cap Fund, and ABS Life Equity Fund.</p>";
    } else if (result > 400000) {
        resultElement.innerHTML += "<p>You can start by investing 20 % of the amount in Insurance cover and other safer options, the other 30 % in your preferred and researched mutual funds through SYSTEMATIC INVESTMENT PLAN (SIP) and the remaining 50 percent in banks through fixed deposits for constant and safe returns. Some top banks offering fixed deposits with attractive interest rates include XYZ Bank with interest rates ranging from 5.1% to 6.75%, ABC Bank with interest rates ranging from 3.50% to 6.25%, and IJK Bank with interest rates ranging from 4.00% to 6.30%.</p>";
    }
}
