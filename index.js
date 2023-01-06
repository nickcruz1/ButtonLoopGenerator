function startBtnLoop() {

let insertText = document.querySelector(".insertText").value;
let btn1 = `<button class="btn btn-primary">Button 1</button>`;
let btn2 = `<button class="btn btn-warning">Button 2</button>`;
let btn3 = `<button class="btn btn-danger">Button 3</button>`;

let group = [btn1, btn2, btn3];
  
  if(insertText == "Nick") {
    for(let i = 0; i < group.length; i++) {
  document.getElementById("output").innerHTML = group;
} 
   } else {
    return false;
  } 

}

function refresh() {
  let btn1 = `<button class="btn btn-primary">Button 1</button>`;
let btn2 = `<button class="btn btn-warning">Button 2</button>`;
let btn3 = `<button class="btn btn-danger">Button 3</button>`;

let group = [btn1, btn2, btn3];

for(let i = 0; i < group.length; i++) {
  document.getElementById("output").innerHTML = "";
}
  
}
