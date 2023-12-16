$(() => {
  let moveX = 0;
  let moveY = 0;
  let areaX;
  let areaY;
  let color = 1;
  let invert = -5;
  let maxX = $("header").outerWidth() - $(".hero").outerWidth();
  let maxY = $("header").outerHeight() - $(".hero").outerHeight();
  $(".hero").css("left", "-20%");
  $(".hero").css("top", "-10%");
  let music = new Audio("../music/music.mp3");
  // loader
  $(window).on("load", function () {
    $(".loader").fadeOut();
  });
  // welcome
  $(".welcome").on("mousemove", function () {
    $(this).fadeOut(1500, function () {
      $(".scroll").delay(3000).animate({ opacity: 1 }, 1000);
      music.play();
    });
  });
  // mouse-enter

  $("header").mouseenter((e) => {
    console.log(e);
    areaX = e.pageX - $("header").offset().left;
    areaY = e.pageY - $("header").offset().top;

    checkMouse();
  });
  // mouse-move
  $("body").mousemove((e) => {
    maxX = $("header").outerWidth() - $(".hero").outerWidth();
    maxY = $("header").outerHeight() - $(".hero").outerHeight();
    moveX = e.originalEvent.movementX;
    moveY = e.originalEvent.movementY;
    areaX = e.pageX - $("header").offset().left;
    areaY = e.pageY - $("header").offset().top;
    cssLeft = parseInt($(".hero").css("left"));
    cssTop = parseInt($(".hero").css("top"));

    position();
    navShow();
  });

  // position
  function position() {
    $(".hero").css({
      top: cssTop - moveY * 2 + "px",
      left: cssLeft - moveX * 2 + "px",
    });

    if (parseInt($(".hero").css("left")) >= 0) {
      $(".hero").css("left", "0px");
    } else if (parseInt($(".hero").css("left")) <= maxX) {
      $(".hero").css("left", maxX + "px");
    }
    if (parseInt($(".hero").css("top")) >= 0) {
      $(".hero").css("top", "0px");
    } else if (parseInt($(".hero").css("top")) <= maxY) {
      $(".hero").css("top", maxY + "px");
    }
  }
  // check-mouse-area
  function checkMouse() {
    if (
      areaX > ($("header").outerWidth() * 2) / 3 &&
      areaY > ($("header").outerHeight() * 2) / 3
    ) {
      $(".hero").animate(
        { left: maxX + "px", top: maxY + "px" },
        1000,
        function () {
          $(".hero").clearQueue();
        }
      );
    }
    if (
      areaX < $("header").outerWidth() / 3 &&
      areaY > ($("header").outerHeight() * 2) / 3
    ) {
      $(".hero").animate({ left: "0px", top: maxY + "px" }, 1000, function () {
        $(".hero").clearQueue();
      });
    }
    if (
      areaX < $("header").outerWidth() / 3 &&
      areaY < $("header").outerHeight() / 3
    ) {
      $(".hero").animate({ left: "0px", top: "0px" }, 1000, function () {
        $(".hero").clearQueue();
      });
    }
    if (
      areaX > ($("header").outerWidth() * 2) / 3 &&
      areaY < $("header").outerHeight() / 3
    ) {
      $(".hero").animate({ left: maxX + "px", top: "0px" }, 1000, function () {
        $(".hero").clearQueue();
      });
    }

    if (areaX > ($("header").outerWidth() * 2) / 3) {
      $(".hero").animate({ left: maxX + "px" }, 1000, function () {
        $(".hero").clearQueue();
      });
    }
    if (areaX < $("header").outerWidth() / 3) {
      $(".hero").animate({ left: "0px" }, 1000, function () {
        $(".hero").clearQueue();
      });
    }
    if (areaY < $("header").outerHeight() / 3) {
      $(".hero").animate({ top: "0px" }, 1000, function () {
        $(".hero").clearQueue();
      });
    }
    if (areaY > ($("header").outerHeight() * 2) / 3) {
      $(".hero").animate({ top: maxY + "px" }, 1000, function () {
        $(".hero").clearQueue();
      });
    }
  }
  // nave-show
  function navShow() {
    if ($("nav").is(":hover") || moveY <= 0) {
      $("nav").css("opacity", "1");
      return;
    } else {
      $("nav").css("opacity", "0");
    }
  }
  // search-box
  $(".fa-search").click(function () {
    $(".logo , .menu").fadeOut(function () {
      $(".search").css("display", "flex");
    });
  });
  // close-search
  $(".fa-times").click(function () {
    $(".search").fadeOut(function () {
      $(".logo , .menu").css("display", "grid");
    });
  });
  // mouse-wheel-actions-container

  $(".container").on("mousewheel", function (e) {
    e.preventDefault();
    if (e.originalEvent.deltaY > 0) {
      $(".container").animate(
        {
          marginTop: "-=" + $(window).height(),
        },
        1000,
        function () {
          $(this).clearQueue();
        }
      );
    }

    if (e.originalEvent.deltaY < 0) {
      $(".container").animate(
        {
          marginTop: "+=" + $(window).height(),
        },
        1000,
        function () {
          $(this).clearQueue();
        }
      );
    }

    if (
      parseInt($(".container").css("margin-top")) >= 0 &&
      e.originalEvent.deltaY < 0
    ) {
      $(".container").css("margin-top", "0");
      $(".container").stop().clearQueue();
    }
  });
  // mouse-wheel-action-section1
  $(".section1").on("mousewheel", function (e) {
    if (
      parseInt($(".section1 p").css("top")) < ($(window).height() * 2) / 3 &&
      e.originalEvent.deltaY > 0
    ) {
      e.stopPropagation();
    }

    if (e.originalEvent.deltaY > 0) {
      $(".biger-img").css({ transform: "translate3d(0,0,0)" });
    }

    if (
      $(".biger-img").css("transform") == "matrix(1, 0, 0, 1, 0, 0)" &&
      e.originalEvent.deltaY > 0
    ) {
      $(".smaller-img").fadeIn(function () {
        $(this).css({ transform: "rotate(360deg)" });
      });
    }
    console.log($(".smaller-img").css("transform"));
    if (
      $(".smaller-img").css("transform") == "matrix(1, 0, 0, 1, 0, 0)" &&
      e.originalEvent.deltaY > 0
    ) {
      $(".section1 p").css({
        top: "+=" + e.originalEvent.deltaY + "px",
        opacity: 1,
      });
    }
    if (parseInt($(".section1 p").css("top")) >= ($(window).height() * 2) / 3) {
      $(".section1 p").css({
        top: ($(window).height() * 2) / 3 + 1,
      });
    }
  });
  // mouse-wheel-action-section2
  $(".background").on("mousewheel", function (e) {
    if (e.originalEvent.deltaY > 0) {
      e.stopPropagation();
    }

    let currentWidth = parseInt($(".background img").css("width"));
    color += e.originalEvent.deltaY;
    currentWidth -= e.originalEvent.deltaY;
    let left = parseInt($(".background img").eq(0).css("left"));
    let right = parseInt($(".background img").eq(1).css("right"));
    if (
      parseInt($(".background img").css("width")) >=
      parseInt($(".background").css("width")) / 3.9
    ) {
      $(".background img").css({ width: currentWidth + "px" });
    }
    // photo-movement
    if (
      parseInt($(".background img").css("width")) <
      parseInt($(".background").css("width")) / 3.9
    ) {
      $(".background img")
        .eq(0)
        .css("left", left - e.originalEvent.deltaY + "px");
      $(".background img")
        .eq(1)
        .css("right", right - e.originalEvent.deltaY + "px");
    }
    if (parseInt($(".background img").css("width")) < -left * 2) {
      $(".background").fadeOut();
    }
    // color
    $(".background p").css(`color`, `rgb(${70000 / color},${color},0`);
  });

  // mousewheel-underback
  $(".under-back").on("mousewheel", function (e) {
    if (invert < 100 && e.originalEvent.deltaY > 0) {
      e.stopPropagation();

      invert += e.originalEvent.deltaY / 4;
    }

    $(".under-back img").css({
      transform: "translate(0)",
    });
    $(".under-back .article").css({
      transform: "translate(0)",
    });
    if (
      $(".under-back .article").css("transform", "matrix(1, 0, 0, 1, 0, 0)")
    ) {
      $(".under-back img ,.article ").css("filter", `invert(${invert}%)`);
    }

    // console.log($(".under-back img ,.article ").css("filter"));
    // if()
  });

  // footer
  $("footer").on("mousewheel", function (e) {
    if (e.originalEvent.deltaY > 0) {
      e.stopPropagation();

      $(".scroll img").css("transform", "rotate(180deg)");
      $(".scroll").css("cursor", "pointer");
      $(".scroll p").html("go to first page");
    }
    // $("footer").mousemove(function () {});
  });
  // scroll
  $(".scroll").click(function () {
    if ($(".scroll p").html() == "go to first page") {
      $(".container").css("margin-top", "0");
      $(".scroll img").css({ transform: "rotate(0)" });
      $(".scroll").css("cursor", "default");
      $(".scroll p").html("scroll to continue");
    }
  });
});
