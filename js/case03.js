const light_count = 6;
let current_light = -1;
let direction = "Right";
let intervalId = null;
updateLight = () => {
  if (direction === "Right") {
    current_light++;
    $(".light").css("background", "white");
    $(".light").eq(current_light).css("background", "red");
    $(".light")
      .eq(current_light - 1)
      .css("background", "pink");

    if (current_light == light_count - 1) {
      direction = "Left";
    }
  } else {
    current_light--;
    $(".light").css("background", "white");
    $(".light").eq(current_light).css("background", "red");
    $(".light")
      .eq(current_light - 1)
      .css("background", "pink");

    if (current_light == 0) {
      direction = "Right";
    }
  }
};

$("#start").on("click", function () {
  intervalId = setInterval(updateLight, 100);
});

$("#stop").on("click", function () {
  clearInterval(intervalId);
});
