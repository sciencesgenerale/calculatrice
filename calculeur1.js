function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Remplacer x² par Math.pow(x, 2)
        display.value = eval(display.value.replace(/\*\*2/g, 'Math.pow($&, 2)'));
    } catch (error) {
        display.value = 'Erreur';
    }
}
