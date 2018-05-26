function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i += 1;
  }
  if (katzDeli.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

