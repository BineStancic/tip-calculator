



function calculateTip() {
  var billAmount = document.getElementById("billAmount").value;
  var tipAmount = document.getElementById("tipAmount").value;


  if (billAmount =="" || tipAmount == 0) {
    alert("Please enter values");
    return;
  }

  var total = (billAmount * tipAmount) + billAmount

  document.getElementById("finalBill").innerhtml = total;
}


document.getElementById("calculate").onclick = function() {
  calculateTip();

};
