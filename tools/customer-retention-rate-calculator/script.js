<script>
document.getElementById('crr-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const currentCustomers = parseInt(document.getElementById('current-customers').value);
    const newCustomers = parseInt(document.getElementById('new-customers').value);
    const lostCustomers = parseInt(document.getElementById('lost-customers').value);

    if (isNaN(currentCustomers) || isNaN(newCustomers) || isNaN(lostCustomers)) {
        alert("Por favor, ingresa números válidos en todos los campos.");
        return;
    }

    const retainedCustomers = currentCustomers - lostCustomers + newCustomers;
    const crrPercentage = ((retainedCustomers / currentCustomers) * 100).toFixed(2);

    document.getElementById('crr-result').innerText = `Tu Customer Retention Rate (CRR) es: ${crrPercentage}%`;
});
</script>