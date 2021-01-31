function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    let newTicketCount = ticketCount;
    if (isIncrease == true) {
        newTicketCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        newTicketCount = ticketCount - 1;
    }
    ticketInput.value = newTicketCount;
    let ticketTotal;
    if (ticket == 'first-class') {
        ticketTotal = newTicketCount * 150;
    } else {
        ticketTotal = newTicketCount * 100;
    }
    calculateTotal();
}

function calculateTotal() {
    const firstClassCount = getInputValue('first-class')
    const economyCount = getInputValue('economy');

    const subTotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText = subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax-amount').innerText = tax;

    const grandTotal = subTotal + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

function confirmMessage() {
    confirm("You have purchased " + parseInt(document.getElementById('first-class-count').value) + " First Class tickets and " + parseInt(document.getElementById('economy-count').value) + " Economy Class Tickets." + " Your Subtotal price is $" + document.getElementById('sub-total').innerText + ", Tax $" + document.getElementById('tax-amount').innerText + " and Total Price is $" + document.getElementById('grand-total').innerText);
    location.reload();
}