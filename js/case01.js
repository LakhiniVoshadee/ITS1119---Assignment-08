let arr = ["A", "B", "C", "D", "E", "F"];
setInterval(() => {
  let last_value = arr.pop();
  arr.unshift(last_value);
  console.log(arr);

  document.getElementsByTagName("h1")[0].innerText = arr[0];
  document.getElementsByTagName("h1")[1].innerText = arr[1];
  document.getElementsByTagName("h1")[2].innerText = arr[2];
  document.getElementsByTagName("h1")[3].innerText = arr[3];
  document.getElementsByTagName("h1")[4].innerText = arr[4];
  document.getElementsByTagName("h1")[5].innerText = arr[5];
}, 3000);
