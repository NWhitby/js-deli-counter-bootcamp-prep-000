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

function currentLine(katzDeli) {
  let theLine = [];
  for (let i = 0; i < katzDeli.length; i += 1) {
  theLine.push(`${i + 1}. ${katzDeli[i]}`)
}
  return(`The line is currently:` + theLine);
}


function currentLine1(line){
  if (line.length === 0){
    return "The line is currently empty."
  }else{
    var lineObject = {};
    for (var i=0; i<line.length; i++){
      lineObject[i+1] = line[i]
    }
    console.log(lineObject)
  }
  var item = ''
  var arr = ["The line is currently: "]
  for (var key in lineObject){
    item = key + ": " + lineObject[key]
    arr.push(item)
  }
  return arr;