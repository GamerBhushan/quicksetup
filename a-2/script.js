let amts = document.getElementById("amts");
let btn = document.getElementById("btn");
let totalDiv = document.getElementById("totalDiv");
let fsTotal = document.getElementById("fsTotal");

const GST = 18;

const calculateBill = (...amounts) => {
  let total = 0;
  amounts.forEach((value) => {
    value = Number.parseFloat(value);
    total += value;
  });
  let gstAmount = (18 / 100) * total;
  let totalWithGST = total + gstAmount;
  let obj = {
    "Without GST": total,
    "GST Amount": gstAmount,
    "Total With GST": totalWithGST,
  };
  return obj;
};

const showOutput = (obj) => {
  fsTotal.classList.remove("dNone");
  totalDiv.innerHTML = "";
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      totalDiv.innerHTML += `<br><p>${key} : Rs.${obj[key]}/-</p>`;
    }
  }
};

btn.onclick = () => {
  const regex = /^[\d,]*\.?[\d]*$/;
  let amounts = amts.value;
  if (!amounts || !regex.test(amounts)) {
    alert("invalid Amounts");
    return;
  }
  amounts = amounts.split(",");
  let obj = calculateBill(...amounts);
  showOutput(obj);
};
