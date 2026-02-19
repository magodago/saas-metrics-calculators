<script>
document.getElementById('arr-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const monthlyRevenue = parseFloat(document.getElementById('monthly-revenue').value);
    const customerCount = parseInt(document.getElementById('customer-count').value);
    const averageContractDuration = parseFloat(document.getElementById('average-contract-duration').value);

    if (isNaN(monthlyRevenue) || isNaN(customerCount) || isNaN(averageContractDuration)) {
        alert("Por favor, verifica los campos y asegúrate de que estén correctamente completados.");
        return;
    }

    const arrValue = monthlyRevenue * customerCount * averageContractDuration;

    document.getElementById('arr-value').textContent = `$${arrValue.toFixed(2)}`;
});
</script>