$(document).ready(function () {
  $(window).scroll(function () {
    console.log("scrolling");
  });
  $(window).resize(function () {
    console.log("resizing");
  });
  $("form").submit(function () {
    alert("submited");
  });
  $("input").select(function () {
    alert("submited");
  });

  // On Event

  // $('selector).om(event(s), childselector, data, function, map)
  var x = 0;
  // $(".on").on("mouseenter mouseleave", "p", function () {
  //   $(".on p").text((x += 1));
  // });

  $(".on").on({
    // map
    mouseenter: function () {
      $(this).css("background", "red");
    },
    mouseout: function () {
      $(this).css("background", "green");
    },
    click: function () {
      $(this).css("background", "blue");
    },
  });

  // Off Event

  // $('selector).off(event, selector, function)

  $(".off").on("click", function () {
    $(".off p").css("color", "blue");
  });
  $("button").click(function () {
    $(".off").off("click");
  });

  // One === On $('selector).one(event(s), data, function) just once time

  // Effects (hide, show, toggle) $('selector).effects(speed, easing, callback) all is options

  $(".hide").click(function () {
    $(".effects div").hide(1000, "linear", function () {}); // or .hide({duration: "", easing: ""})
  });
  $(".show").click(function () {
    $(".effects div").show(1000, "linear", function () {
      alert("some thing");
    });
  });
  $(".toggle").click(function () {
    $(".effects div").toggle();
  });

  // Effects smooth (fadeIn = show, fadeOut = hide, fadeToggle = toggle, fadeTo(speed, opacity is must + all))
  // $('selector).effects(speed, easing, callback) all is options

  // Effects (slideUp = hide, slideDown = show, SlideToggle = toggle) $('selector).effects(speed, easing, callback) all is options
});
