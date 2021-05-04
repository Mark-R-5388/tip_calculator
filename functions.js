const findTip = (billAsNum, tipSelect) => {
  let percent = 0;
  if (tipSelect === '1') {
    percent += 0.25;
  } else if (tipSelect === '2') {
    percent += 0.2;
  } else if (tipSelect === '3') {
    percent += 0.15;
  } else if (tipSelect === '4') {
    percent += 0.1;
  } else {
    console.log('error');
  }

  return (tipTotal = billAsNum * percent);
};

const totalBill = (billAsNum, tipTotal) => {
  return (billTotal = billAsNum + tipTotal);
};

const costPerPerson = (billTotal, partySizeAsNum) => {
  return (perPerson = billTotal / partySizeAsNum);
};
