const submitButton = document.querySelector('#submit-btn');
const form = document.querySelector('#input-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bill = e.target.elements.bill.value;
  const partySize = e.target.elements.partySize.value;
  const tipSelect = e.target.elements.tipSelect.value;

  const billAsNum = parseFloat(e.target.elements.bill.value);
  const partySizeAsNum = parseInt(e.target.elements.partySize.value);

  findTip(billAsNum, tipSelect);
  totalBill(billAsNum, tipTotal);
  costPerPerson(billTotal, partySizeAsNum);

  form.reset();

  setTimeout(() => {
    if (bill > 0 && partySize > 0 && tipSelect !== '0') {
      printMessage(tipTotal, billTotal, perPerson);
      setTimeout(() => {
        document.querySelector('#printSuccess').remove();
      }, 6000);
    }
  }, 2000);

  setTimeout(() => {
    if (bill <= 0 || partySize <= 0 || tipSelect === '0') {
      unfilledMessage(bill, partySize, tipSelect);
      setTimeout(() => {
        document.querySelector('#failMessage').remove();
      }, 6000);
    }
  }, 2000);
});

// Unfilled Message
const unfilledMessage = (bill, partySize, tipSelect) => {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.id = 'failMessage';

  if (bill <= 0) {
    const billFailEl = document.createElement('p');
    billFailEl.textContent = 'Please enter a total greater than 0 please.';
    container.appendChild(billFailEl);
  }
  if (partySize <= 0) {
    const partyFailEl = document.createElement('p');
    partyFailEl.textContent =
      'Please enter the number of people in your party.';
    container.appendChild(partyFailEl);
  }
  if (tipSelect === '0') {
    const tipFailEl = document.createElement('p');
    tipFailEl.textContent = 'Please select how the service was.';
    container.appendChild(tipFailEl);
  }

  body.insertBefore(container, form);
};

const printMessage = (tipTotal, billTotal, perPerson) => {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.id = 'printSuccess';

  const tipEl = document.createElement('p');
  tipEl.textContent = `The tip total for this bill is $${tipTotal.toFixed(2)}`;

  const billTotalEl = document.createElement('p');
  billTotalEl.textContent = `The total bill is $${billTotal.toFixed(2)}`;

  const perPersonEl = document.createElement('p');
  perPersonEl.textContent = `Each person owes $${perPerson.toFixed(2)}`;

  container.appendChild(tipEl);
  container.appendChild(billTotalEl);
  container.appendChild(perPersonEl);
  body.appendChild(container);
};
