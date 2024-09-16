// Cash register setup
const price = 19.5;
const cid = [
  ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0],
  ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
];

// Currency values
const currencyValues = {
  "PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25,
  "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100
};

// DOM elements
const cashInput = document.getElementById('cash');
const changeDueDisplay = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

// Main function
purchaseBtn.addEventListener('click', function() {
  const cash = parseFloat(cashInput.value);
  let changeDue = cash - price;
  
  // Check if enough cash
  if (cash < price) {
    alert("Not enough cash!");
    return;
  }
  
  // Check if exact cash
  if (changeDue === 0) {
    changeDueDisplay.textContent = "No change due - customer paid with exact cash";
    return;
  }
  
  // Calculate total in drawer
  const totalInDrawer = cid.reduce((sum, [, amount]) => sum + amount, 0);
  
  // Check if drawer has enough
  if (changeDue > totalInDrawer) {
    changeDueDisplay.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }
  
  // Check if exact change in drawer
  if (changeDue.toFixed(2) === totalInDrawer.toFixed(2)) {
    changeDueDisplay.textContent = "Status: CLOSED " + formatChange(cid);
    return;
  }
  
  // Calculate change
  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const [unit, amount] = cid[i];
    const unitValue = currencyValues[unit];
    let unitAmount = 0;
    
    while (changeDue >= unitValue && amount > unitAmount) {
      changeDue -= unitValue;
      unitAmount += unitValue;
      changeDue = Math.round(changeDue * 100) / 100;
    }
    
    if (unitAmount > 0) {
      change.push([unit, unitAmount]);
    }
  }
  
  // Final check
  if (changeDue > 0) {
    changeDueDisplay.textContent = "Status: INSUFFICIENT_FUNDS";
  } else {
    changeDueDisplay.textContent = "Status: OPEN " + formatChange(change);
  }
});

// Helper function to format change
function formatChange(changeArray) {
  return changeArray
    .filter(([, amount]) => amount > 0)
    .map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`)
    .join(' ');
}