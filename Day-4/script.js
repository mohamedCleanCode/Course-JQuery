$(document).ready(function () {
  // $('selector').animate({styles}, speed, easing, calback);
  // $('selector).animate({styles}, {options})
  // just value of number not value of string
  $(".btn-1").click(function () {
    $("div").animate({ width: 200 }, 1000, "linear");
    $("div").animate({ height: 500 }, "linear");
    $("div").animate({ width: 300 }, "linear");
    console.log($(this).queue().length);
    // $(this).dequeue(); عشان يكمل الحجات ال في الكيو لان الكيو نفسه بيوقف الانيميشن
  });

  $(".btn-2").click(function () {
    var div = $("div");
    div.animate(
      { width: 400, height: 600, fontSize: 50, padding: 30 },
      1000,
      function () {
        alert("Some Thing");
      }
    );
  });

  $("button").click(function () {
    $(".child").animate(
      { width: ($("#option").val() * 900) / 100 },
      {
        duration: 1000,
        easing: "linear",
        complete: function () {
          alert("is completed");
        },
        step: function (x) {
          $("span").text(Math.round((x * 100) / 900));
        },
      }
    );
  });

  // .clearQueue
  // .stop(false, false) stopall, gotoend ==> true, true
  // .finish() بيعمل اخر حاجه في الانميشن وبيوقف اي انميشن تانب
  // .delay(1000).effect();
  // there is chain effects like .hide().show().....etc;
});
