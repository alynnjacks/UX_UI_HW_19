console.log("Hi!");

$("#work").click(function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(".mywork-title").offset().top,
    },
    2000
  );
});

$("#about").click(function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(".mySkills").offset().top,
    },
    2000
  );
});

$("#contact").click(function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(".button-container").offset().top,
    },
    2000
  );
});
