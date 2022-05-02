let mem = "0";
let value = "0";
let lastOp = "";
let dot = true;
// let counter = "";
// let input = document.querySelector(`.calculator .screen input`);

// const cln = document.getElementById("clean");
// let rezul = `0`;

function onDigit(digit) {
  value += digit;
  let counter = 15;
  if (value.length > counter) {
    value = value.substring(0, counter);
  }
  display();
}
function onDot() {
  // let dot = true;
  if (dot) {
    value += `.`;
    dot = dot ? false : true;
  }

  display();
}
function onOp(op) {
  if (op === `=`) {
    if (lastOp === `+`) {
      value = parseFloat(mem) + parseFloat(value);
    }
    if (lastOp === `-`) {
      value = parseFloat(mem) - parseFloat(value);
    }
    if (lastOp === `*`) {
      value = parseFloat(mem) * parseFloat(value);
    }
    if (lastOp === `/`) {
      value = parseFloat(mem) / parseFloat(value);
    }
  } else {
    mem = value;
    value = `0`;
    lastOp = op;
    onDot();
    dot = true;
  }

  display();
}
function onClean() {
  mem = "0";
  value = "0";

  onDot();
  dot = true;
  display();
}
function display() {
  let input = document.querySelector(`.calculator .screen input`);
  input.placeholder = value;
}
