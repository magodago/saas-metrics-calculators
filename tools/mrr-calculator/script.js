<script>
document.getElementById('mrrForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const pricePerUser = parseFloat(document.getElementById('pricePerUser').value);
    const numUsers = parseInt(document.getElementById('numUsers').value);
    const trialPeriod = parseFloat(document.getElementById('trialPeriod').value);

    if (isNaN(pricePerUser) || isNaN(numUsers)) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    const mrr = pricePerUser * numUsers;

    document.getElementById('mrrResult').textContent = `Tu MRR es: $${mrr.toFixed(2)} USD/mes`;
    document.getElementById('resultArea').classList.remove('hidden');
});
</script>