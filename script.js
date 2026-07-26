// script.js

function convertToBitcoin() {
    // Taux de conversion actuel (par exemple, 1 Bitcoin = 30,000 Euros)
    const conversionRate = 30000; // Tu peux le mettre à jour avec une API

    // Récupérer le montant en euros de l'input
    let euroAmount = document.getElementById("euro-input").value;

    // Convertir en Bitcoin
    let bitcoinAmount = euroAmount / conversionRate;

    // Afficher le résultat
    document.getElementById("result").innerHTML = `Valeur en Bitcoin : ${bitcoinAmount.toFixed(8)} BTC`;
}
