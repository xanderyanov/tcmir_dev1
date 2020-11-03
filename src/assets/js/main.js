$(function () {
  

  $(".only_num").keydown(function (event) {
    // Разрешаем: backspace, delete, tab и escape
    if (
      event.keyCode == 46 ||
      event.keyCode == 8 ||
      event.keyCode == 9 ||
      event.keyCode == 27 ||
      // Разрешаем: Ctrl+A
      (event.keyCode == 65 && event.ctrlKey === true) ||
      // Разрешаем: home, end, влево, вправо
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      // Ничего не делаем
      return;
    } else {
      // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
      if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
        event.preventDefault();
      }
    }
  });

  function openIntroInBrand2() {
    $(".brands2openIntro").on("click", function () {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this).children(".content__redmore_open").show();
        $(this).children(".content__redmore_close").hide();
        $(this).closest(".brands2promo__right").find(".content_hide").slideUp(300);
      } else {
        $(this).addClass("open");
        $(this).children(".content__redmore_open").hide();
        $(this).children(".content__redmore_close").show();
        $(this).closest(".brands2promo__right").find(".content_hide").slideDown(300);
      }
    });
  }
  openIntroInBrand2();

  var swiper = new Swiper(".brands2slider-container", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,
    speed: 600,
    autoplay: {
      delay: 177000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".brands2slider__right",
      prevEl: ".brands2slider__left",
    },
    keyboard: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  $(".tabSizeOpen").on("click", function (e) {
    e.preventDefault;
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("body").removeClass("stop");
      $(".tabSize__overlay").hide();
      $(".tabSize__window").hide();
    } else {
      $(this).addClass("active");
      $("body").addClass("stop");
      $(".tabSize__overlay").show();
      $(".tabSize__window").show();
    }
  });
  $(".tabSize__overlay").on("click", function (e) {
    e.preventDefault;
    $(".tabSizeOpen").removeClass("active");
    $("body").removeClass("stop");
    $(".tabSize__overlay").hide();
    $(".tabSize__window").hide();
  });
  $(".tabSize__windowClose").on("click", function (e) {
    e.preventDefault;
    $(".tabSizeOpen").removeClass("active");
    $("body").removeClass("stop");
    $(".tabSize__overlay").hide();
    $(".tabSize__window").hide();
  });

  ////////

  $(".header2__search_jsEvent").on("click", function (e) {
    e.preventDefault;
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".header2__searchArea").hide();
    } else {
      $(this).addClass("active");
      $(".header2__searchArea").show();
    }
  });
  $(".header2_searchClose").on("click", function (e) {
    e.preventDefault;
    $(".header2__search_jsEvent").removeClass("active");
    $(".header2__searchArea").hide();
  });

  //index2_sliders
  // Маленький слайдер убрали - заменили на статичный баннер
  // var swiper = new Swiper(".s1-container", {
  //   slidesPerView: 1,
  //   loop: true,
  //   spaceBetween: 0,
  //   speed: 600,
  //   autoplay: {
  //     delay: 7000,
  //     disableOnInteraction: true,
  //   },
  //   navigation: {
  //     nextEl: ".ss1__right",
  //     prevEl: ".ss1__left",
  //   },
  //   pagination: {
  //     el: ".s1-pagination",
  //     clickable: true,
  //   },
  //   keyboard: true,
  // });

  

  

  var swiper = new Swiper(".best3-container", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 7000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".best3__right",
      prevEl: ".best3__left",
    },
    // mousewheel: true,
    keyboard: true,
  });

  var swiper = new Swiper(".bottomWide-container", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 177000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".bottomWide__right",
      prevEl: ".bottomWide__left",
    },
    keyboard: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 6,
      },
    },
  });

  //табы
  $(".aBrandsTabs__title").on("click", function (e) {
    e.preventDefault();
    var tabNumber;
    if (!$(this).hasClass("active")) {
      tabNumber = $(this).data("tab");
      $(".aBrandsTabs__title").removeClass("active");
      $(".aBrandsTabs__widget").hide().removeClass("active");
      $(this).addClass("active");
      $(".aBrandsTabs__widgets")
        .find("[data-widget='" + tabNumber + "']")
        .fadeIn(400)
        .addClass("active");
    }
  });

  $(".aShopsTabs__title").on("click", function (e) {
    e.preventDefault();
    var tabNumber;
    if (!$(this).hasClass("active")) {
      tabNumber = $(this).data("tab");
      $(".aShopsTabs__title").removeClass("active");
      $(".aShopsTabs__widget").hide().removeClass("active");
      $(this).addClass("active");
      $(".aShopsTabs__widgets")
        .find("[data-widget='" + tabNumber + "']")
        .fadeIn(400)
        .addClass("active");
    }
  });

  // товарные слайдеры ны главной
  if ($(".septSlider1__outer").length) {
    var mySwiper1 = new Swiper(".septSlider1", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 337000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".septSlider1__outer .septSlider__Next",
        prevEl: ".septSlider1__outer .septSlider__Prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      },
    });
  }
  if ($(".septSlider2__outer").length) {
    var mySwiper1 = new Swiper(".septSlider2", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".septSlider2__outer .septSlider__Next",
        prevEl: ".septSlider2__outer .septSlider__Prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      },
    });
  }

  // aboutDelivery
  $(".infoTitle_js").on("click", function () {
    $(this).closest(".infoArea_js").find(".infoContent_js").slideToggle();
  });
  // end-aboutDelivery

  //brandDesktop
  // $(".brandBtnDT").on("click", function (e) {
  //   e.preventDefault;
  //   if ($(this).hasClass("active")) {
  //     $(this).removeClass("active");
  //     $("body").removeClass("stop");
  //     $(".aBrands__overlay").hide();
  //     $(".aBrands__area").hide();
  //   } else {
  //     $(this).addClass("active");
  //     $("body").addClass("stop");
  //     $(".aBrands__overlay").show();
  //     $(".aBrands__area").show();
  //   }
  // });
  // $(".aBrands__overlay").on("click", function (e) {
  //   e.preventDefault;
  //   $(".brandBtnDT").removeClass("active");
  //   $("body").removeClass("stop");
  //   $(".aBrands__overlay").hide();
  //   $(".aBrands__area").hide();
  // });
  // $(".aBrands__close").on("click", function (e) {
  //   e.preventDefault;
  //   $(".brandBtnDT").removeClass("active");
  //   $("body").removeClass("stop");
  //   $(".aBrands__overlay").hide();
  //   $(".aBrands__area").hide();
  // });

  // end brandDesktop

  //allBrandMobile
  $(".aBrandOpenBtn, .openBrands_dt").on("click", function (e) {
    e.preventDefault;
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("body").removeClass("stop");
      $(".aBrands__overlay").hide();
      $(".aBrands__area").hide();
    } else {
      $(this).addClass("active");
      $("body").addClass("stop");
      $(".aBrands__overlay").show();
      $(".aBrands__area").show();
    }
  });
  $(".aBrands__overlay").on("click", function (e) {
    e.preventDefault;
    $(".aBrandOpenBtn, .openBrands_dt").removeClass("active");
    $("body").removeClass("stop");
    $(".aBrands__overlay").hide();
    $(".aBrands__area").hide();
  });
  $(".aBrands__close").on("click", function (e) {
    e.preventDefault;
    $(".aBrandOpenBtn, .openBrands_dt").removeClass("active");
    $("body").removeClass("stop");
    $(".aBrands__overlay").hide();
    $(".aBrands__area").hide();
  });

  if ($(window).width() <= 1080) {
    var m2_menuHeight2 = $(".m2_bottomMenu__area").outerHeight();
    $(".aBrands__area_mb").css({ bottom: m2_menuHeight2 });
  }

  $(window).resize(function () {
    if ($(window).width() <= 1080) {
      var m2_menuHeight2 = $(".m2_bottomMenu__area").outerHeight();
      $(".aBrands__area_mb").css({ bottom: m2_menuHeight2 });
    }

    // if ($(window).width() > 1080) {
    //   $(".aBrands__area").hide();
    //   $(".aBrands__overlay").hide();
    //   $("body").removeClass("stop");
    //   $(".aBrandOpenBtn").removeClass("active");
    //   $(".aBrands__area_mb").css({ bottom: "auto" });
    // }
  });

  // end brandMobile

  $(".aShopOpenBtn, .openShops_dt").on("click", function (e) {
    e.preventDefault;
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("body").removeClass("stop");
      $(".aShops__overlay").hide();
      $(".aShops__area").hide();
    } else {
      $(this).addClass("active");
      $("body").addClass("stop");
      $(".aShops__overlay").show();
      $(".aShops__area").show();
    }
    $(".menuButton1__areaJS").removeClass("open");
    $(".menuButton1").removeClass("open");
    $(".orangeHeader__area").removeClass("orangeHeader__area_fixed");
    $(".orangeHeader__areaFake2").css({ height: "0" });
    $(".upBox__area").slideUp(200);
  });
  $(".aShops__overlay").on("click", function (e) {
    e.preventDefault;
    $(".aShopOpenBtn, .openShops_dt").removeClass("active");
    $("body").removeClass("stop");
    $(".aShops__overlay").hide();
    $(".aShops__area").hide();
  });
  $(".aShops__close").on("click", function (e) {
    e.preventDefault;
    $(".aShopOpenBtn, .openShops_dt").removeClass("active");
    $("body").removeClass("stop");
    $(".aShops__overlay").hide();
    $(".aShops__area").hide();
  });

  if ($(window).width() <= 1080) {
    var m2_menuHeight2 = $(".m2_bottomMenu__area").outerHeight();
    $(".aShops__area_mb").css({ bottom: m2_menuHeight2 });
  }

  $(window).resize(function () {
    if ($(window).width() <= 1080) {
      var m2_menuHeight2 = $(".m2_bottomMenu__area").outerHeight();
      $(".aShops__area_mb").css({ bottom: m2_menuHeight2 });
    }

    // if ($(window).width() > 1080) {
    //   $(".aBrands__area").hide();
    //   $(".aBrands__overlay").hide();
    //   $("body").removeClass("stop");
    //   $(".aBrandOpenBtn").removeClass("active");
    //   $(".aBrands__area_mb").css({ bottom: "auto" });
    // }
  });

  // aCatalog - скрипт перенесен в студию
  // $(".aCatalogOpenBtn").click(function (e) {
  //   e.preventDefault;
  //   if ($(this).hasClass("active")) {
  //     $(this).removeClass("active");
  //     $("body").removeClass("stop");
  //     $(".aCatalog__area").hide();
  //   } else {
  //     $(this).addClass("active");
  //     $("body").addClass("stop");
  //     $(".aCatalog__area").show();
  //   }
  // });

  // var m2_menuHeight = $(".m2_bottomMenu__area").outerHeight();
  // $(".aCatalog__area").css({ bottom: m2_menuHeight });
  // $(window).resize(function () {
  //   var m2_menuHeight = $(".m2_bottomMenu__area").outerHeight();
  //   $(".aCatalog__area").css({ bottom: m2_menuHeight });
  //   if ($(window).width() > 1080) {
  //     $(".aCatalog__area").hide();
  //   }
  // });

  // $(".aCatalog__close").click(function (e) {
  //   e.preventDefault();
  //   $(this).parent().parent().parent(".aCatalog__wrapper").hide();
  //   if ($(this).hasClass("aCatalog__close_main")) {
  //     $(".aCatalog__area").hide();
  //     $(".aC_level0").show();
  //     $("body").removeClass("stop");
  //     $(".aCatalogOpenBtn").removeClass("active");
  //   }
  // });
  //aCatalog

  $(".openBtn").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(this).children(".openBtnMinus").hide();
      $(this).children(".openBtnPlus").show();
      $(this).closest(".skladTab__item").find(".skladTab__itemDetail").slideUp();
    } else {
      $(this).addClass("open");
      $(this).children(".openBtnMinus").show();
      $(this).children(".openBtnPlus").hide();
      $(this).closest(".skladTab__item").find(".skladTab__itemDetail").slideDown();
    }
  });

  function CollapserClick(ev) {
    var a = $(ev.target);
    var p = a.closest("[data-treepath]"); //.parent().parent();
    var k = p.data("treepath");
    var subitems = $('.lmtp[data-treepath^="' + k + '-"]');
    var caption = a.html();
    if (caption === "&nbsp;") return;
    if (subitems.length === 0) {
      a.html("&nbsp;");
      return;
    }
    if (caption === "–") {
      a.html("+");
      subitems.hide();
    } else {
      a.html("–");
      var protector = "_";
      var i;
      for (i = 0; i < subitems.length; i++) {
        var ii = $(subitems[i]);
        if (ii.data("treepath").startsWith(protector)) continue;
        if (ii.find(".collapser").html() === "+") protector = ii.data("treepath") + "-";
        ii.show();
      }
    }
  }

  function CollapseAll() {
    $(".lmtp[data-treepath]")
      .each(function (index, item) {
        $(item).find(".collapser").first().html("+");
      })
      .filter("[data-treepath*=-]")
      .hide();
  }

  CollapseAll();

  function ExpandAll() {
    var alltr = $(".lmtp[data-treepath]");
    alltr.show().each(function (index, item) {
      var $item = $(item);
      var k = $item.data("treepath");
      var subitems = alltr.filter('[data-treepath^="' + k + '-"]');
      $item
        .find(".collapser")
        .first()
        .html(subitems.length > 0 ? "–" : "&nbsp;");
    });
  }

  $(".collapser").on("click", CollapserClick);
  ExpandAll();

  window.addEventListener("pageshow", function (event) {
    var historyTraversal =
      event.persisted || (typeof window.performance !== "undefined" && window.performance.navigation.type === 2);
    if (historyTraversal) {
      CartRequest("loadCart", "0", "0");
    }
  });

  // $(document).on("click", ".backBtn", function (e) {
  //   e.preventDefault();
  //   window.history.back();
  //   console.log("Кнопка назад");
  // });

  $(".backBtn").on("click", function () {
    window.history.back();
    console.log("Кнопка назад");
  });

  // var topLineHeight = $(".topLine__area").outerHeight();
  // if ($(this).scrollTop() > topLineHeight) {
  //   $(".topLine__area").css({ position: "fixed", top: "0", left: "0" });
  // } else if ($(this).scrollTop() <= topLineHeight) {
  //   $(".topLine__area").css({ position: "relative", top: "auto", left: "auto" });
  // }
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > topLineHeight) {
  //     $(".topLine__area").css({ position: "fixed", top: "0", left: "0" });
  //   } else if ($(this).scrollTop() <= topLineHeight) {
  //     $(".topLine__area").css({ position: "relative", top: "auto", left: "auto" });
  //   }
  // });

  var orangeHeaderHeight = $(".orangeHeader").outerHeight();
  var searchWhite = $(".searchWhite__area");
  var searchWhiteHeight = $(".searchWhite__area").outerHeight();
  if ($(this).scrollTop() > orangeHeaderHeight) {
    searchWhite.css({ position: "fixed", top: "0", left: "0" });
    $(".orangeHeader__areaFake").css({ height: searchWhiteHeight });
  } else if ($(this).scrollTop() <= orangeHeaderHeight) {
    searchWhite.css({ position: "relative", top: "auto", left: "auto" });
    $(".orangeHeader__areaFake").css({ height: "0" });
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() > orangeHeaderHeight) {
      searchWhite.css({ position: "fixed", top: "0", left: "0" });
      $(".orangeHeader__areaFake").css({ height: searchWhiteHeight });
    } else if ($(this).scrollTop() <= orangeHeaderHeight) {
      searchWhite.css({ position: "relative", top: "auto", left: "auto" });
      $(".orangeHeader__areaFake").css({ height: "0" });
    }
  });

  var m2_headerHeight = $(".m2_header").outerHeight();
  $(".m2_headerFake").css({ height: m2_headerHeight });

  //верхний отступ левого меню в зависимости от высоты полоски фильтров
  if ($(".catalogFilter1__area").length) {
    var catalogFilter1Height = $(".catalogFilter1__area").outerHeight();
    $(".catalogMenu__outer").css({ marginTop: catalogFilter1Height });
  }

  ////////////////////////////////////

  var orangeHeaderAreaHeight = $(".orangeHeader__area").outerHeight();
  var bottomMenuHeight = $(".m2_bottomMenu__area").outerHeight();
  $(".menuButton1__areaJS").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".menuButton1").removeClass("open");
      $(".orangeHeader__area").removeClass("orangeHeader__area_fixed");
      $(".orangeHeader__areaFake2").css({ height: "0" });
      $(".upBox__area").slideUp(200);
      $("body").removeClass("stop");
    } else {
      $("body,html").animate({ scrollTop: 0 }, 400);
      $(this).addClass("open");
      $(".menuButton1").addClass("open");
      $(".orangeHeader__area").addClass("orangeHeader__area_fixed");
      $(".orangeHeader__areaFake2").css({ height: orangeHeaderAreaHeight });
      $(".upBox__area").css({ paddingTop: orangeHeaderAreaHeight, paddingBottom: bottomMenuHeight }).slideDown(200);
      $("body").addClass("stop");
    }
  });

  //resolution screen info
  // var wWidth = $(window).width();
  // var wHeight = $(window).height();
  // console.log(wWidth + "x" + wHeight);

  // $(".screenResolutionInfo").text(wWidth + "x" + wHeight);

  // discount_btn
  if ($(".getDiscountBtn").length) {
    $(".getDiscountBtn").on("click", function () {
      // if ($(this).hasClass("callActionBtn_open")) {
      //   $(this).removeClass("callActionBtn_open");
      // } else {
      $(this).addClass("getDiscountBtn_active");
      // }
    });
  }

  if ($(".getDiscountBtn_mobile").length) {
    $(".getDiscountBtn_mobile").on("click", function () {
      // if ($(this).hasClass("callActionBtn_open")) {
      //   $(this).removeClass("callActionBtn_open");
      // } else {
      $(this).addClass("getDiscountBtn_mobile_active");
      setTimeout(function () {
        $(".getDiscountBtn__tooltipMobile").slideDown(500);
      }, 500);
    });
  }

  // Главный слайдер при верстке - надо закомментировать если в студию добавлять
  // setTimeout(function () {
  //   if ($(".julySlider__outer").length) {
  //     var galleryThumbs = new Swiper(".julySlider__tovars", {
  //       spaceBetween: 10,
  //       slidesPerView: 1,
  //       loop: true,
  //       watchSlidesVisibility: true,
  //       watchSlidesProgress: true,
  //       speed: 600,
  //       nested: true,
  //       allowTouchMove: false,
  //     });

  //     var galleryTop = new Swiper(".julySlider", {
  //       preloadImages: true,
  //       updateOnImagesReady: true,
  //       speed: 600,
  //       slidesPerView: "auto",
  //       centeredSlides: true,
  //       spaceBetween: 10,
  //       loop: true,
  //       slideToClickedSlide: true,
  //       autoplay: {
  //         delay: 5500,
  //         disableOnInteraction: false,
  //       },
  //       pagination: {
  //         el: ".julySlider__pagination",
  //         type: "bullets",
  //         dynamicBullets: false,
  //         clickable: true,
  //       },
  //       navigation: {
  //         nextEl: ".julySlider__Next",
  //         prevEl: ".julySlider__Prev",
  //       },
  //       thumbs: {
  //         swiper: galleryThumbs,
  //       },
  //       on: {
  //         init: function () {
  //           console.log("initialized.");
  //         },
  //         imagesReady: function () {
  //           console.log("images ready.");
  //         },
  //       },
  //     });
  //     $(".swiper-container").mouseenter(function () {
  //       galleryTop.autoplay.stop();
  //     });
  //     $(".swiper-container").mouseleave(function () {
  //       galleryTop.autoplay.start();
  //     });
  //   }
  // }, 500);

  // Главный слайдер в студии
  function StartSwipers(haveThumbs) {
    if ($(".julySlider__outer").length) {
      if (haveThumbs) {
        var galleryThumbs = new Swiper(".julySlider__tovars", {
          spaceBetween: 10,
          slidesPerView: 1,
          loop: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          speed: 600,
          nested: true,
          allowTouchMove: false,
        });
      }

      var MainSwiperParams = {
        preloadImages: true,
        updateOnImagesReady: true,
        speed: 600,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        slideToClickedSlide: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".julySlider__pagination",
          type: "bullets",
          dynamicBullets: false,
          clickable: true,
        },
        navigation: {
          nextEl: ".julySlider__Next",
          prevEl: ".julySlider__Prev",
        },
        on: {
          init: function () {
            console.log("initialized.");
          },
          imagesReady: function () {
            console.log("images ready.");
          },
        },
      };
      if (haveThumbs) {
        MainSwiperParams.thumbs = {
          swiper: galleryThumbs,
        };
      }
      var galleryTop = new Swiper(".julySlider", MainSwiperParams);
      $(".swiper-container").mouseenter(function () {
        galleryTop.autoplay.stop();
      });
      $(".swiper-container").mouseleave(function () {
        galleryTop.autoplay.start();
      });
    }
  }
  setTimeout(function () {
    if (!$(".julySlider__outer").length) return;
    var $window = $(window);
    $.ajax("/ru/GetSwipers?w=" + $window.width() + "&h=" + $window.height(), {
      method: "GET",
      success: function (data) {
        $(".julySlider__outer").html(data.html);
        setTimeout(function () {
          StartSwipers(data.haveThumbs);
        }, 500);
      },
    });
  }, 10);

  // слайдер товара 7

  if ($(".tovarSlider7").length) {
    if ($(".tovarSlider7__img .tovarSlider7__imgItem").length === 1) {
      $("tovarSlider7__imgItem .swiper-wrapper").addClass("disabled");
      $(".tovarSlider7__pagination").addClass("disabled");
      $(".tovarSlider7__Prev").addClass("disabled");
      $(".tovarSlider7__Next").addClass("disabled");
      $(".tovarSlider7__min").hide();
    } else {
      var galleryThumbs7 = new Swiper(".tovarSlider7__min", {
        spaceBetween: 10,
        slidesPerView: 5,
        loop: false,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        // direction: "vertical",
        centeredSlides: false,
      });

      var galleryTop7 = new Swiper(".tovarSlider7__img", {
        autoHeight: false,
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".tovarSlider7__pagination",
          type: "bullets",
          dynamicBullets: false,
          clickable: true,
        },
        navigation: {
          nextEl: ".tovarSlider7__Next",
          prevEl: ".tovarSlider7__Prev",
        },
        thumbs: {
          swiper: galleryThumbs7,
        },
      });
    }
  }

  //новая кнопка адаптивного каталога

  $(".aCatalogOpenBtn2").on("click", function (e) {
    e.preventDefault;
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("body").removeClass("stop");
      $(".am__area").slideUp();
      $(".am__ovarlay").hide();
    } else {
      $(this).addClass("active");
      $("body").addClass("stop");
      $(".am__area").slideDown(200);
      $(".am__ovarlay").show();
    }
  });
  $(".am__ovarlay").on("click", function (e) {
    e.preventDefault;
    $(".aCatalogOpenBtn2").removeClass("active");
    $("body").removeClass("stop");
    $(".am__ovarlay").hide();
    $(".am__area").slideUp();
  });
  var am__area_bottom = $(".m2_bottomMenu__area").outerHeight();
  $(".am__area").css({ bottom: am__area_bottom });

  $(window).resize(function () {
    var am__area_bottom = $(".m2_bottomMenu__area").outerHeight();
    $(".am__area").css({ bottom: am__area_bottom });
    if ($(window).width() > 1080) {
      $(".am__area").hide();
      $(".am__ovarlay").hide();
      $("body").removeClass("stop");
      $(".aCatalogOpenBtn2").removeClass("active");
    }
  });

  // Открытие и закрытие адаптивного меню по кнопке
  $(".am__JS").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".menuButton1").removeClass("open");
      $(".am__area").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".menuButton1").addClass("open");
      $(".am__area").slideDown(200);

      //подгружает контент активного меню в .am_active
      // и его родителя в .am_back
    }
  });
  // Закрытие адаптивного меню по кнопке Close
  $(".am__close").on("click", function () {
    $(".am__JS").removeClass("open");
    $(".menuButton1").removeClass("open");
    $(".am__area").slideUp(200);
    $(".am__ovarlay").hide();
    $("body").removeClass("stop");
    $(".aCatalogOpenBtn2").removeClass("active");
  });

  $(".am__BackBtn").on("click", function (e) {
    e.preventDefault();
    console.log("клик назад ");

    var menuWrapper = $(this).closest(".am__area").find(".am_active");
    var menuWrapperBack = $(this).closest(".am__area").find(".am_active").prev();
    var menuWrapperNexn = $(this).closest(".am__area").find(".am_active").next();

    menuWrapperBack.animate({ left: 0 + "%" }, 300);
    menuWrapper.animate({ left: 100 + "%" }, 300);
    menuWrapperNexn.animate({ left: 200 + "%" }, 300);

    menuWrapper.removeClass("am_active");
    menuWrapperBack.addClass("am_active");

    var new_menuWrapper = $(this).closest(".am__area").find(".am_active");
    var new_menuWrapperBack = new_menuWrapper.prev();

    //подгружает контент родителя в new_menuWrapperBack
  });

  $(".am__more").on("click", function (e) {
    e.preventDefault();
    console.log("клик подробнее");

    //подгружает контент дочернего пункта в .am_next
    //дальше определяет блоки и анимирует

    var menuWrapper = $(this).closest(".am__area").find(".am_active");
    var menuWrapperBack = $(this).closest(".am__area").find(".am_active").prev();
    var menuWrapperNexn = $(this).closest(".am__area").find(".am_active").next();

    menuWrapperBack.animate({ left: -200 + "%" }, 300);
    menuWrapper.animate({ left: -100 + "%" }, 300);
    menuWrapperNexn.animate({ left: 0 + "%" }, 300);

    menuWrapper.removeClass("am_active");
    menuWrapperNexn.addClass("am_active");
  });

  /* Адаптивное меню для всей структуры - подойдет для modx - его код в чанке __adaptive-menu.pug
  
  // Открытие и закрытие адаптивного меню по кнопке
  $(".menuButton1__areaJS").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".menuButton1").removeClass("open");
      $(".adaptiveMenu__areaJS").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".menuButton1").addClass("open");
      $(".adaptiveMenu__areaJS").slideDown(200);
      var adaptiveMenu__titleH = $(".adaptiveMenu__title").outerHeight();
      console.log("adaptiveMenu__titleH " + adaptiveMenu__titleH);
      $(".adaptiveMenu__wrapper").css({ paddingTop: adaptiveMenu__titleH });
    }
  });
  $(".adaptiveMenu__areaClose").click(function () {
    $(".menuButton1__areaJS").removeClass("open");
    $(".menuButton1").removeClass("open");
    $(".adaptiveMenu__areaJS").slideUp(200);
  });

  // создание блока заголовка дочернего меню и кнопки назад
  $(".adaptiveMenu li:has(ul)").addClass("hasInner");
  $(".adaptiveMenu li.hasInner").each(function () {
    // var liTitle = $(this).children("a").text();
    var liTitle1 = $(this).children("a").children("span:first-child").text();
    var liTitle2 = $(this).children("a").children("span:last-child").text();
    var liTitle = liTitle1 + " " + liTitle2;
    $(this)
      .children("ul")
      .prepend(
        "<div class='adaptiveMenuUlTitle'><span>" +
          liTitle +
          "</span><div class='adaptiveMenuUlTitleBack'>Назад</div></div>"
      );
    $(this).children("a").append('<span class="menuMoreLink">Подробнее</span>');
  });

  var x = 0;
  $(".adaptiveMenu li.hasInner > a > .menuMoreLink").click(function (e) {
    e.preventDefault();
    // $(this).addClass("active");
    console.log(x);
    x = x - 100;
    console.log(x);
    $(".adaptiveMenu").animate({ left: x + "%" }, 300);
  });

  $(".adaptiveMenuUlTitleBack").click(function (e) {
    e.preventDefault();
    console.log("клик назад ");
    x = x + 100;
    console.log(x);
    $(".adaptiveMenu").animate({ left: x + "%" }, 300);
  });

  $(".adaptiveMenuUlTitleBack").click(function () {
    var dataurl = this.attr("data-follow");
    $.ajax({
      type: "get",
      url: "some.php",
      data: "dataurl",
      success: function (x, y, z) {
        // в заголовок вставляем x
        // в новый адрес назад вставляем y
        // в список вставляем z и т.д.
      },
    });
  });
  */

  $(".adaptiveSearchOn__btn").on("click", function () {
    $(this).toggleClass("open");
    $(".adaptiveSearch__area").slideToggle(200);
  });

  $(".adaptiveSearch__areaClose").on("click", function () {
    $(".adaptiveSearchOn__btn").toggleClass("open");
    $(".adaptiveSearch__area").slideToggle(200);
  });

  //Слайдер на странице товара
  if ($(".slider__new").length) {
    var galleryThumbs = new Swiper(".slider__newThumbs", {
      spaceBetween: 5,
      loop: false,
      direction: "vertical",
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        1: {
          direction: "horizontal",
          autoHeight: true,
        },
        // when window width is >= 480px
        481: {
          direction: "vertical",
          autoHeight: false,
        },
      },
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: false,
      autoHeight: false,
    });
    var galleryTop = new Swiper(".slider__newContent", {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: false,
      effect: "slide",
      autoHeight: false,
      navigation: {
        nextEl: ".sliderImgBtnNext",
        prevEl: ".sliderImgBtnPrev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
      breakpoints: {
        // when window width is >= 320px
        1: {
          autoHeight: true,
        },
        // when window width is >= 480px
        481: {
          autoHeight: false,
        },
      },
      setWrapperSize: true,
    });
  }

  $("#my-slider").sliderPro({
    width: 500,
    height: 600,
    arrows: true,
    fadeArrows: true,
    buttons: false,
    waitForLayers: false,
    centerImage: true,
    autoSlideSize: false,
    loop: false,
    fade: false,
    forceSize: true,
    autoplay: false,
    autoScaleLayers: false,
    imageScaleMode: "contain",
    thumbnailsPosition: "right",
    thumbnailPointer: false,
    thumbnailWidth: 66,
    thumbnailHeight: 100,
    breakpoints: {
      1280: {
        // height: 500,
        // thumbnailsPosition: "bottom",
      },
      1024: {
        width: 450,
        height: 500,
        thumbnailWidth: 60,
        thumbnailHeight: 90,
        thumbnailsPosition: "bottom",
      },
      // 768: {
      //   height: 400,
      //   thumbnailsPosition: "bottom",
      // },
      // 600: {
      //   height: 350,
      // },
      // 568: {
      //   height: 320,
      // },
      // 480: {
      //   height: 320,
      // },
    },
  });
  $(".sp-arrow").append("<i class='icon-arr-left1'></i>");
  // $(".sp-next-arrow").append("<i class='icon-arr-right1'></i>");
  $(".tovarSliderPro").css("visibility", "visible");

  // слайдер на странице магазина
  if ($(".swiper-container_shop").length) {
    var mySwiper1 = new Swiper(".swiper-container_shop", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: ".swiper-pagination_shop",
      //   type: "bullets",
      //   dynamicBullets: false,
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-nextShop",
        prevEl: ".swiper-button-prevShop",
      },
      on: {
        init: function () {
          console.log("swiper initialized");
          $(".swiper-slide_shop").children(".swiper__cadr_shop").removeClass("animationfadeIn").fadeOut(500);
          // setTimeout(function () {
          //   $(".swiper-slide-active")
          //     .children(".swiper__cadr_shop")
          //     .fadeIn(500)
          //     .addClass("animated")
          //     .addClass("animationfadeIn");
          // }, 500);
          $(".swiper-container").on("mouseenter", function () {
            mySwiper1.autoplay.stop();
            console.log("swiper autoplay stop");
          });
          $(".swiper-container").on("mouseleave", function () {
            mySwiper1.autoplay.start();
            console.log("swiper autoplay start again");
          });
        },
        slideChange: function () {
          $(".swiper-slide_shop").children(".swiper__cadr_shop").removeClass("animationfadeIn").fadeOut(500);
          // setTimeout(function () {
          //   $(".swiper-slide-active")
          //     .children(".swiper__cadr_shop")
          //     .fadeIn(500)
          //     .addClass("animated")
          //     .addClass("animationfadeIn");
          // }, 500);
        },
      },
    });
  }
  // карусель брендов-
  if ($(".brandsCarousel-container1").length) {
    var brandsCarousel = new Swiper(".brandsCarousel-container1", {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: false,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".brandsCarousel__btnPrev",
        nextEl: ".brandsCarousel__btnNext",
      },
      breakpoints: {
        1141: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        921: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        481: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        401: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        321: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });
    $(".brandsCarousel").mouseenter(function () {
      brandsCarousel.autoplay.stop();
    });
    $(".brandsCarousel").mouseleave(function () {
      brandsCarousel.autoplay.start();
    });
  }

  //минус и плюс в количестве товара на одной карточке
  //в студии раблотает другой скрипт Арсения
  // $(".minus").click(function () {
  //   var $input = $(this).parent().find("input");
  //   var count = parseInt($input.val()) - 1;
  //   count = count < 1 ? 1 : count;
  //   $input.val(count);
  //   $input.change();
  //   return false;
  // });
  // $(".plus").click(function () {
  //   var $input = $(this).parent().find("input");
  //   $input.val(parseInt($input.val()) + 1);
  //   $input.change();
  //   return false;
  // });
  //минус и плюс в количестве товара в таблице для одной строки
  //в студии раблотает другой скрипт Арсения
  // $(".minus_tab").click(function () {
  //   var $input = $(this).parent().find("input");
  //   var count = parseInt($input.val()) - 1;
  //   count = count < 0 ? 0 : count;
  //   $input.val(count);
  //   $input.change();
  //   return false;
  // });
  // $(".plus_tab").click(function () {
  //   var $input = $(this).parent().find("input");
  //   $input.val(parseInt($input.val()) + 1);
  //   $input.change();
  //   return false;
  // });

  // $(".catalogMenu li:has(ul)").addClass("fw600");

  //Обертывание всех таблиц в блоке .content для правильного их поведения на адаптиве -
  //дальше работает нужный стиль
  $(".content table").wrap('<div class="table_outer"></div>');

  // Скрипт добавления в избранное через localstorage
  var favorites = JSON.parse(localStorage.getItem("myFavorites")) || [];
  if (favorites.length) {
    console.log("есть записи");
    $(".topFavBtn_notFav").hide();
    $(".topFavBtn_yesFav").css("display", "flex");
    // console.log(favorites);
    favorites.forEach(function (entry) {
      // console.log(entry);
      $("#" + entry).addClass("inFav");
      $("#" + entry)
        .find(".tovarCard__fav")
        .addClass("inFav");
      $("#" + entry)
        .find(".tovarCard__fav")
        .children(".favOff")
        .hide();
      $("#" + entry)
        .find(".tovarCard__fav")
        .children(".favOn")
        .show();
      $(".topFavBtn").addClass("favLinkReady");
    });
  } else {
    console.log("нет записей");
  }
  $(".tovarCard__fav").on("click", function (e) {
    e.preventDefault();
    var value = $(this).closest(".tovarCard__area").attr("id");
    if ($(this).hasClass("inFav")) {
      $(this).removeClass("inFav");
      $(this).children(".favOff").show();
      $(this).children(".favOn").hide();
      var index = favorites.indexOf(value);
      if (index >= 0) {
        favorites.splice(index, 1);
      }
    } else {
      $(this).addClass("inFav");
      $(this).children(".favOff").hide();
      $(this).children(".favOn").show();
      favorites.push(value);
    }
    console.log(value);
    console.log(favorites);
    var serialFavorites = JSON.stringify(favorites);
    localStorage.setItem("myFavorites", serialFavorites);
    if (favorites.length) {
      $(".topFavBtn_notFav").hide();
      $(".topFavBtn_yesFav").css("display", "flex");
    } else {
      $(".topFavBtn_notFav").css("display", "flex");
      $(".topFavBtn_yesFav").hide();
    }
  });

  // раскоммментировать - для перехода в избранное
  // $(".topFavBtn_yesFav").click(function () {
  //   console.log("переход на страницу избранного");
  //   var parameters = favorites.join();
  //   console.log(parameters);
  //   $(location).attr("href", "http://mir.deltal.beget.tech/category.html/" + parameters);
  // });

  var windowForScroll = $(window).height() - 250;
  $(".filterBox__content").each(function (i, elem) {
    var scrollBoxHeight = $(elem).outerHeight();
    console.log(scrollBoxHeight);
    if (scrollBoxHeight > windowForScroll) {
      $(elem).addClass("filterBox__content_scroll");
    }
  });

  //Раскрытие фильтра в каталоге по клику на его заголовке
  $(".catalogFilter1__itemTitle").on("click", function () {
    var fCont = $(this).closest(".catalogFilter1__item").find(".catalogFilter1__itemContent");
    var fAll = $(this).closest(".catalogFilter1");
    if ($(this).hasClass("open1")) {
      $(this).removeClass("open1");
      fAll.find(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__overlay").hide();
      // $("body").removeClass("stop");
      $(".topLine__area").removeClass("stop");
    } else {
      fAll.find(".catalogFilter1__itemTitle").removeClass("open1");
      fAll.find(".catalogFilter1__itemContent").removeClass("visible");
      $(this).addClass("open1");
      fCont.addClass("visible");
      $(".catalogFilter1__overlay").show();
      // $("body").addClass("stop");
      $(".topLine__area").addClass("stop");
    }
  });

  //Применение выбранного фильтра - эффект изменения заголовка фильтра на темный при наличии выбраных пунктов внутри
  // $(".filterEnterBtn").on("click", function () {
  //   var filtrItemParent = $(this).closest(".filterBox");

  //   if (filtrItemParent.find("input").is(":checked")) {
  //     console.log("Выбрано");
  //     filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").addClass("active");
  //     $(".catalogFilter1__itemContent").removeClass("visible");
  //     $(".catalogFilter1__itemTitle").removeClass("open1");
  //   } else {
  //     console.log("не выбрано");
  //     filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").removeClass("active");
  //     $(".catalogFilter1__itemContent").removeClass("visible");
  //     $(".catalogFilter1__itemTitle").removeClass("open1");
  //   }
  // });
  // Работающий по старому - выше

  $(".catalogFilter1__overlay").on("click", function () {
    $(".catalogFilter1__overlay").hide();
    $(".catalogFilter1__itemContent").removeClass("visible");
    $(".catalogFilter1__itemTitle").removeClass("open1");
    $("body").removeClass("stop");
    $(".topLine__area").removeClass("stop");
  });

  $(".filterEnterBtn").on("click", function () {
    var filtrItemParent = $(this).closest(".filterBox");

    if (filtrItemParent.find("input").is(":checked")) {
      console.log("Выбрано");
      filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").addClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
      $(".catalogFilter1__overlay").hide();
    } else {
      console.log("не выбрано");
      filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").removeClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
      $(".catalogFilter1__overlay").hide();
    }
  });

  $(".priceFilterEnterBtn").on("click", function () {
    var filtrItemParent = $(this).closest(".filterBox");

    if (filtrItemParent.find("input").val() != "") {
      console.log("Выбрано");
      filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").addClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
      $(".catalogFilter1__overlay").hide();
    } else {
      console.log("не выбрано");
      filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").removeClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
      $(".catalogFilter1__overlay").hide();
    }
  });

  //скрипт визуального добавления атрибута checked для чекбокса обычного
  // if ($(".filterBox__checkbox").length) {
  //сам выбор
  // $(".xcheckbox").click(function (e) {
  //   e.preventDefault();
  //   if ($(this).hasClass("checked")) {
  //     $(this).removeClass("checked");
  //     $(this).children("input").removeAttr("checked");
  //   } else {
  //     $(this).addClass("checked");
  //     $(this).children("input").attr("checked", "checked");
  //   }
  // });
  //Кнопка сброса обычных чекбоксов (не цвета) внутри одного блока фильта *найти  checked  false
  // $(".filter__checkboxReset").click(function () {
  //   console.log("сброс фильтров");
  //   $(this)
  //     .closest(".filterBox")
  //     .find("input[type=checkbox]")
  //     .each(function (i) {
  //       this.checked = false;
  //     });
  //   $(this).closest(".filterBox").find(".xcheckbox").removeClass("checked");
  // });
  // }

  $(".filter__xInputBoxReset").on("click", function () {
    $(this).closest(".filterBox").find("input[type=text]").val("");
    // $(this).closest(".filterBox").find(".only_num").val("");
  });

  //Выбор чекбоксов с цветами - применение эффекта по клику на пункт
  if ($(".filter__checkboxColor").length) {
    //сам выбор
    $(".checkboxColor__item").on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("checked")) {
        $(this).removeClass("checked");
        $(this).children(".checkboxColorBox").removeClass("checked");
        $(this).children(".checkboxColorTitle").removeClass("checkColor");
        $(this).children("input").removeAttr("checked");
      } else {
        $(this).addClass("checked");
        $(this).children(".checkboxColorBox").addClass("checked");
        $(this).children(".checkboxColorTitle").addClass("checkColor");
        $(this).children("input").attr("checked", "checked");
      }
    });
    //сброс выбора именно для чекбоксов с цветами
    $(".filter__checkboxColorReset").on("click", function (e) {
      console.log("сброс фильтров");
      e.preventDefault();
      $(this).closest(".filterBox").find("input[type=checkbox]").removeAttr("checked");
      $(this).closest(".filterBox").find(".checkboxColor__item").removeClass("checked");
      $(this).closest(".filterBox").find(".checkboxColorBox").removeClass("checked");
      $(this).closest(".filterBox").find(".checkboxColorTitle").removeClass("checkColor");
    });
  }

  //Скрипт блока сортировки в фильтах
  if ($(".filterBox__sort").length) {
    $(".filterSort__item").on("click", function (e) {
      e.preventDefault();
      $(this).closest(".filterBox__content").find(".filterSort__item").removeClass("filterSort__item_active");
      $(this).addClass("filterSort__item_active");
      var activeSortName = $(this).text();
      console.log(activeSortName);
      $(".catalogFilter1__itemTitle_sort span").html(activeSortName);
      $(this).closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").addClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
      $(".catalogFilter1__overlay").hide();
    });
  }

  //Кнопка очистки всех фильтров
  $(".resetAllFiltersBtn").click(function (e) {
    e.preventDefault();
    //сброс обычныч чекбоксов и закрытие раскрытых блоков
    $(this).closest(".catalogFilter1").find("input[type=checkbox]").removeAttr("checked");
    $(this).closest(".catalogFilter1").find(".xcheckbox").removeClass("checked");
    $(this).closest(".catalogFilter1").find(".catalogFilter1__itemTitle").removeClass("active");
    $(this).closest(".catalogFilter1").find(".catalogFilter1__itemContent").removeClass("visible");
    $(this).closest(".catalogFilter1").find(".catalogFilter1__itemTitle").removeClass("open1");
    //сброс чекбоксов с цветом
    $(this).closest(".catalogFilter1").find(".checkboxColorTitle").removeClass("checkColor");
    $(this).closest(".catalogFilter1").find(".checkboxColor__item").removeClass("checked");
    $(this).closest(".catalogFilter1").find(".checkboxColorBox").removeClass("checked");
    //сброс сортировки
    $(this).closest(".catalogFilter1").find(".filterSort__item").removeClass("filterSort__item_active");
    $(".catalogFilter1__itemTitle_sort span").html("Сортировка");
    $(".catalogFilter1__overlay").hide();
  });

  //Убирает лишний фансибокс у слайдера при дублировании блоков для loop true
  $(".swiper-slide-duplicate a[data-fancybox]").each(function (i, elem) {
    $(elem).removeAttr("data-fancybox");
  });

  $("a[data-fancybox]").fancybox({
    closeBtn: false,
    arrows: true,
    keyboard: true,
    nextClick: true,
    infobar: true,
    protect: true,
    backFocus: false, // убирает рассинхрон с swiper
    nextEffect: "elastic",
    prevEffect: "elastic",
    padding: 0,
    loop: true,
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true, // Continue movement after releasing mouse/touch when panning
    },
  });

  // Adaptive filters js
  // Открытие фильтров
  $(".filtersBtn_filtr").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".overlay1").hide();
      $(".aFilters__wrapper").fadeOut(200);
      $("body").removeClass("stop");
    } else {
      $(this).addClass("open");
      $(".overlay1").show();
      $(".aFilters__wrapper").fadeIn(200);
      $("body").addClass("stop");
    }
  });
  // Закрытие фильтров по кнопке Close
  $(".aFilters__close").on("click", function () {
    $(".filtersBtn_filtr").removeClass("open");
    $(".overlay1").hide();
    $(".aFilters__wrapper").fadeOut(200);
    $("body").removeClass("stop");
  });

  // Закрытие фильтров по оверлею - не будет работать, так как aFilters__wrapper выше его.
  // $(".overlay1").on("click",function () {
  //   $(".filtersBtn_filtr").removeClass("open");
  //   $(".overlay1").hide();
  //   $(".aFilters__wrapper").fadeOut(200);
  //   $("body").removeClass("stop");
  // });

  $(".aFilterBox__title").on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".overlay2").hide();
      $(this).closest(".aFilterBox").children(".aFilterBox__inner").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".overlay2").show();
      $(this).closest(".aFilterBox").children(".aFilterBox__inner").slideDown(200);
    }
  });

  $(".aFilterBox__innerClose").on("click", function () {
    $(this).closest(".aFilterBox").find(".aFilterBox__inner").slideUp(200);
    $(this).closest(".aFilterBox").find(".aFilterBox__title").removeClass("open");
    $(".overlay2").hide();
  });

  ////////////////////////////////////////////////////////////

  // $(".aFilterBoxEnterBtn").on("click", function () {
  //   var filtrItemParent = $(this).closest(".aFilterBox__inner");

  //   if (filtrItemParent.find("input").is(":checked")) {
  //     console.log("Выбрано");
  //     filtrItemParent.closest(".aFilterBox").find(".aFilterBox__title").addClass("choose").removeClass("open");
  //     filtrItemParent.slideUp(200);
  //     $(".overlay2").hide();
  //   } else {
  //     console.log("не выбрано");
  //     filtrItemParent.closest(".aFilterBox").find(".aFilterBox__title").removeClass("choose").removeClass("open");
  //     filtrItemParent.slideUp(200);
  //     $(".overlay2").hide();
  //   }
  // });
  // $(".aFilterBox__Reset").click(function () {
  //   console.log("сброс фильтров");
  //   $(this)
  //     .closest(".aFilterBox__innerContent")
  //     .find("input[type=checkbox]")
  //     .each(function (i) {
  //       this.checked = false;
  //     });
  //   $(this).closest(".filterBox").find(".xcheckbox").removeClass("checked");
  // });

  ////////////////////////////////////////////////////////////

  $(".aFilter__footerReset").on("click", function () {
    $(this)
      .closest(".aFilters__area")
      .find("input[type=checkbox]")
      .each(function (i) {
        this.checked = false;
      });

    $(this).closest(".aFilters__area").find(".aFilterBox__title").removeClass("choose");
  });

  $(".aFilter__footerEnter").on("click", function () {
    // применить фильтры
  });

  if ($(".sizeSelector__area").length) {
    $(".sizeSelector__item").on("click", function () {
      if ($(this).hasClass("sizeSelector__item_selected")) {
        $(this).removeClass("sizeSelector__item_selected");
      } else {
        $(this).addClass("sizeSelector__item_selected");
      }
    });
  }

  if ($(".callActionBtn").length) {
    $(".callActionBtn").on("click", function () {
      // if ($(this).hasClass("callActionBtn_open")) {
      //   $(this).removeClass("callActionBtn_open");
      // } else {
      $(this).addClass("callActionBtn_open");
      // }
    });
  }

  $(".toTop").hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });
  $(".toTop").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 400);
    return false;
  });

  // sizeToPrice

  $(".sizeToPrice__selector").find(".sizeToPrice__selectorItem:first-child").addClass("active");
  $(".sizeToPrice__result").find(".sizeToPrice__resultItem:first-child").addClass("active");

  $(".sizeToPrice__selector").on("click", ".sizeToPrice__selectorItem:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest(".sizeToPrice")
      .find(".sizeToPrice__resultItem")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });

  // телефон в поле регистраци пользователя

  var pattern = /^[9]{1}[0-9]{9}$/g;

  $("#formBoxInputPhone").on("input", function (e) {
    var value = $(this).val();
    var result = pattern.test(value);

    if (result) {
      $(".confirmPhoneBtn").addClass("confirmPhoneBtn_enabled");
    } else {
      $(".confirmPhoneBtn").removeClass("confirmPhoneBtn_enabled");
    }

    // if ($(this).val().length >= 10) {
    //   $(".confirmPhoneBtn").addClass("confirmPhoneBtn_enabled");
    // } else {
    //   $(".confirmPhoneBtn").removeClass("confirmPhoneBtn_enabled");
    // }
  });

  $(".confirmPhoneBtn").on("click", function () {
    $(".inputBox_confirmPhoneArea").slideDown(200);
    $(this).addClass("confirmPhoneBtn_enabled_openBottom");
    $("#formBoxInputPhone").prop("disabled", true);
    $(".changePhoneBtn").addClass("changePhoneBtn_visible");
  });

  $("#formBoxInputConfirmPhone").on("input", function (e) {
    if ($(this).val().length === 4) {
      $(".sendPhoneCodeBtn").addClass("sendPhoneCodeBtn_enabled");
    } else {
      $(".sendPhoneCodeBtn").removeClass("sendPhoneCodeBtn_enabled");
    }
  });

  $(".sendPhoneCodeBtn").on("click", function () {
    if ($(this).hasClass("sendPhoneCodeBtn_enabled")) {
      console.log("код подтверждения отправлен");
      setTimeout(function () {
        $(".inputBox_confirmPhoneArea").slideUp(200);
      }, 500);
    }
  });

  // отправка при выбраном чекбоксе
  $(".formUsePrivacy").on("change", function (e) {
    console.log("change");
    btn = $(this).closest(".formBox").find(".formBox__registration");
    if ($(this).prop("checked")) {
      btn.prop("disabled", false);
    } else {
      btn.prop("disabled", true);
    }
  });

  $(".changePhoneBtn").on("click", function () {
    if ($(this).hasClass("changePhoneBtn_visible")) {
      console.log("Изменение телефона");
      $("#formBoxInputPhone").prop("disabled", false).val("");
      $(".confirmPhoneBtn ").removeClass("confirmPhoneBtn_enabled").removeClass("confirmPhoneBtn_enabled_openBottom");
      $(".inputBox_confirmPhoneArea").slideUp(200);
      $(this).removeClass("changePhoneBtn_visible");
      $("#formBoxInputConfirmPhone").val("");
      $(".sendPhoneCodeBtn").removeClass("sendPhoneCodeBtn_enabled");
    }
  });

  // кнопка резерва товара на странице товара - комментируем для студии - в верстке раскрыть
  // $(".rezervBtn").on("click", function () {
  //   if ($(this).hasClass("rezervBtn_inReserv")) {
  //     $(this).removeClass("rezervBtn_inReserv");
  //     $(".rezervYes").hide();
  //     $(".rezervNo").show();
  //   } else {
  //     $(this).addClass("rezervBtn_inReserv");
  //     $(".rezervNo").hide();
  //     $(".rezervYes").show();
  //   }
  // });

  // установливаем обработчик события resize
  // $(window).resize(function () {
  var bm = $(".m2_bottomMenu__area").outerHeight();
  $(".m2_bottomMenu__areaFake").css({ height: bm });
  $(".rezerv__area").css({ bottom: bm });

  if ($(window).width() <= 1080) {
    $(".cabTab__itemContent").hide();
    $(".cabTab__item.active .cabTab__itemContent").show();

    $(".cabTab__title_mobile").on("click", function (e) {
      e.stopPropagation();
      $(".cabTab__itemContent").slideUp();
      if ($(this).parent().hasClass("active")) {
        $(".cabTab__item").removeClass("active");
        $(this).parent().find(".cabTab__itemContent").slideUp();
      } else {
        $(".cabTab__item").removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().find(".cabTab__itemContent").slideDown();
      }
    });
  } else {
    $(".cabTab__itemContent").show();
    $(".cabTabHeader").each(function (i) {
      var storage = localStorage.getItem("tab", i);
      console.log(storage);
      if (storage) {
        $(this)
          .find(".cabTab__title")
          .removeClass("active")
          .eq(storage)
          .addClass("active")
          .closest(".cabTab")
          .find(".cabTab__item")
          .removeClass("active")
          .eq(storage)
          .addClass("active");
      }
    });

    $(".cabTabHeader").on("click", ".cabTab__title:not(.active)", function () {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".cabTab")
        .find(".cabTab__item")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
      var ulIndex = $(".cabTab__title").index($(this).parents(".cabTabHeader"));
      console.log(ulIndex);
      localStorage.removeItem("tab");
      localStorage.setItem("tab", $(this).index());
    });
  }
  // });

  // $(window).resize();

  $(".order__itemTovarsListTitle").on("click", function () {
    $(this).closest(".order__itemTovarsList").find(".order__itemTovarsListInfo").slideToggle();
  });
});
