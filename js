let drag_item = document.querySelectorAll("p");
let drop_area = document.querySelectorAll(".box");
let message = document.querySelector("#message");
let drag = null;

for (let element of drag_item) {
  element.ondragstart = dragStart;
  element.ondragend = dragEnd;
}

function dragStart() {
  drag = this;
  setTimeout(() => (this.style.display = "none"), 0);
}
function dragEnd() {
  drag = null;
  setTimeout(() => (this.style.display = "block"), 0);
}

for (let element of drop_area) {
  element.ondragover = dragOver;
  element.ondragenter = dragEnter;
  element.ondragleave = dragLeave;
  element.ondrop = Drop;
}

function dragOver(event) {
  event.preventDefault();
  this.style.border = "2px dotted #000";
}
function dragEnter(event) {
  event.preventDefault();
}

function dragLeave() {
  this.style.border = "2px solid #000";
}
function Drop() {
  this.append(drag);
}
