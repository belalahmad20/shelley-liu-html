var homepageHeaderHeight =
  $("header.homepage-header").outerHeight() +
  $("footer.homepage-footer").outerHeight();
finalhomepageHeaderHeight =
  "calc(100vh - " + String(homepageHeaderHeight) + "px)";
$(".homepage-section").css("min-height", finalhomepageHeaderHeight);
