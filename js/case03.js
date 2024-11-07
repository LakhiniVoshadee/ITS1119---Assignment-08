const light_count = 7;
let current_light = 0;
let direction = "RIGHT";
let intervalId = null;
const music = document.getElementById("music");

updateLight = () => {
  if (direction === "RIGHT") {
    current_light++;
    $(".light").css("background", "rgb(255, 94, 0)");
    $(".light").eq(current_light).css("background", "red");
    $(".light")
      .eq(current_light - 1)
      .css("background", "rgb(214, 119, 42)");

    if (current_light == light_count - 1) {
      direction = "LEFT";
    }
  } else {
    current_light--;
    $(".light").css("background", "rgb(255, 94, 0)");
    $(".light").eq(current_light).css("background", "red");
    $(".light")
      .eq(current_light + 1)
      .css("background", "rgb(214, 119, 42)");

    if (current_light === 0) {
      direction = "RIGHT";
    }
  }
};

$("#start").on("click", function () {
  intervalId = setInterval(updateLight, 100);
  music.play();
});

$("#stop").on("click", function () {
  clearInterval(intervalId);
  music.pause();
});
