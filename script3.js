function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Erreur';
    }
}

function convert(currency) {
    const amount = parseFloat(document.getElementById("amount").value);
    let conversionRate;
    let result;

    // Définir les taux de conversion (exemples)
    const rates = {
        BTC: 0.000034, // 1 Euro ≈ 0.000034 Bitcoin (à vérifier)
        USD: 1.08, // 1 Euro ≈ 1.08 Dollars
        GBP: 0.86, // 1 Euro ≈ 0.86 Livres Sterling
    };

    if (!isNaN(amount) && amount > 0) {
        conversionRate = rates[currency];
        result = amount * conversionRate;
        document.getElementById("conversionResult").textContent = `Résultat : ${result.toFixed(4)} ${currency}`;
    } else {
        document.getElementById("conversionResult").textContent = 'Veuillez entrer un montant valide.';
    }
}
