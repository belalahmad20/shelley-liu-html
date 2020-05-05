var homepageHeaderHeight =
  $("header").outerHeight() + $("footer").outerHeight();
finalhomepageHeaderHeight =
  "calc(100vh - " + String(homepageHeaderHeight) + "px)";
$(".homepage-section").css("min-height", finalhomepageHeaderHeight);
