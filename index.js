function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


function currentLine(katzDeli){
  if (katzDeli.length===0){
    return "The line is currently empty.";
  }
  else {
  var results = [];
  for(var i=0; i<katzDeli.length; i++){
    results. push(parseInt([i])+1+'. '+katzDeli[i]);
  }
  
  return "The line is currently: "+ results.join(', ')
}}