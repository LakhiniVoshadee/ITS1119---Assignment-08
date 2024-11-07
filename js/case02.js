let color = ["red", "green", "blue", "yellow", "lightpink", "purple"];
const boxes = document.querySelectorAll(".box");
console.log(boxes);

setInterval(() => {
  let last = color.pop();
  color.unshift(last);

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = color[i];
  }
}, 2000);
