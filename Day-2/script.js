$(document).ready(function () {
  // $("div").mouseenter(function () {
  //   $(this).css("background", "green");
  // });
  // $("div").mouseleave(function () {
  //   $(this).css("background", "green");
  // });

  $(".one").hover(
    //funcin, funcout
    function () {
      $(this).css("background", "green");
    },
    function () {
      $(this).css("background", "red");
    }
  );
  let [x, y, z] = [0, 0, 0];
  // y, (z = 0);
  $(".over").mouseover(function () {
    $(this).text((x += 1));
  });
  $(".enter").mouseenter(function () {
    $(this).text((y += 1));
  });
  $(".move").mousemove(function () {
    $(this).text((z += 1));
  });
  $(".out").mouseleave(function () {
    $(this).text((y += 1));
  });
  $(".leave").mouseout(function () {
    $(this).text((z += 1));
  });
  $(".down").mousedown(function () {
    $(this).css("background", "red");
  });
  $(".up").mouseup(function () {
    $(this).css("background", "green");
  });
  $(".downk").keydown(function () {
    $("span").css("background", "red");
  });
  $(".pressk").keypress(function () {
    $("span").css("background", "green");
  });
  $(".upk").keyup(function () {
    $("span").css("background", "blue");
  });
});
