const App = {
  preLoading: () => {
    $(window).on("load", function () {
      $(".loader-container").fadeOut(1000);
    });
  },
  SetBackground: () => {
    $("[setBackground]").each(function () {
      var background = $(this).attr("setBackground");
      $(this).css({
        "background-image": "url(" + background + ")",
        "background-size": "cover",
        "background-position": "center center",
      });
    });
    $("[setBackgroundRepeat]").each(function () {
      var background = $(this).attr("setBackgroundRepeat");
      $(this).css({
        "background-image": "url(" + background + ")",
        "background-repeat": "repeat",
      });
    });
  },
  EqualHeightElement: (el) => {
    let height = 0;
    let thisHeight = 0;
    $(el).each(function () {
      thisHeight = $(this).height();
      if (thisHeight > height) {
        height = thisHeight;
      }
    });
    $(el).height(height);
  },
  ScrollTo: (y) => {
    $("html, body").animate(
      {
        scrollTop: y,
      },
      1000
    );
  },
  Init: () => {
    App.SetBackground();
    App.preLoading();
    App.ScrollTo();
  },
};

function InitSlider() {}
$(document).ready(function () {
  App.Init();

  InitSlider();
});
