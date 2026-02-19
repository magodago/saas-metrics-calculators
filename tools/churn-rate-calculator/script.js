<script>
document.getElementById('churnCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

function calculateChurnRate() {
    const totalSubscriptions = document.getElementById('totalSubscriptions').value;
    const endOfPeriodSubscriptions = document.getElementById('endOfPeriodSubscriptions').value;

    if (isNaN(totalSubscriptions) || isNaN(endOfPeriodSubscriptions)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    const churnRate = ((totalSubscriptions - endOfPeriodSubscriptions) / totalSubscriptions) * 100;
    
    document.getElementById('churnRate').innerText = `${churnRate.toFixed(2)}%`;
}
</script>