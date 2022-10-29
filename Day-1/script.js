// Syntax
// $(function() {}) ==> another way
// $(document).ready(function () {
//   $("div").hide();
//   // #id
//   // .class
//   // element
//   // [type=""]
// });

$(document).ready(function () {
  $(".click").click(function () {
    console.log("Button Has Been Clicked");
  });

  $(".dblclick").dblclick(function () {
    console.log("Button Has Been Clicked");
  });

  $(".change").change(function () {
    console.log("Button Has Been Changed");
  });
  $(".focus").focus(function () {
    console.log("Is focus");
  });
  $(".focusin").focusin(function () {
    $("div").css("border", "1px solid #000");
  });
  $(".focusout").focusout(function () {
    $("div").css("border", "1px solid red");
  });
  $(".blur").blur(function () {
    console.log("is blur");
  });
});
