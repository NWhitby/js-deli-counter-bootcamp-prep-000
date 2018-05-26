function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) { 
  if(katzDeliLine.length === 0) { //checks if length of array(katzDeli) is = to 0
//    return 'There is nobody waiting to be served!'; //returns string no one is waiting
// }
//    var customer = katzDeliLine.shift(); // shift array of people
//    return "Currently serving " + customer + "."; //return string with customer name
// }