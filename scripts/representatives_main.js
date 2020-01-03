var navigationBar,
  header,
  contentSegment1,
  contentSegment2,
  contentSegment3,
  slideshow1,
  slideshow2,
  footer;
let navbarToggled = false;

$(window).scroll(function() {
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > $(window).height() * 0.75)
    $("#navigation-bar").addClass("navbar-scrolled");
  else $("#navigation-bar").removeClass("navbar-scrolled");
});

function toggleNavbarButton() {
  if (navbarToggled)
    document.getElementById("navbar-toggler").innerHTML = "Menu";
  else document.getElementById("navbar-toggler").innerHTML = "Close";
  navbarToggled = !navbarToggled;
}

function togglePerson(index) {
  document.getElementById("position-" + index).classList.toggle("d-none");
  document.getElementById("button-" + index).classList.toggle("toggle-position-active");
  if (document.getElementById("position-" + index).classList.contains("d-none"))
    document.getElementById("button-" + index).innerHTML = "+";
  else document.getElementById("button-" + index).innerHTML = "–";
}

async function loadHTML() {
  await fetchPageData();

  navigationBar = new Vue({
    el: "#navigation-bar",
    data: {
      brand: DATA.navbar[0],
      links: DATA.navbar[1],
      actions: DATA.navbar[2]
    }
  });

  header = new Vue({
    el: "#header",
    data: {
      sideText: DATA.representatives_page.side_text,
      title: DATA.representatives_page.title,
      image: DATA.representatives_page.background_image,
      actions: DATA.representatives_page.actions
    }
  });

  contentSegment1 = new Vue({
    el: "#content-segment1",
    data: {
      key: DATA.representatives_page.content_segment1.key,
      header: DATA.representatives_page.content_segment1.header,
      page_title: DATA.representatives_page.content_segment1.page_title,
      article_title: DATA.representatives_page.content_segment1.article_title,
      main_text: DATA.representatives_page.content_segment1.main_text,
      detail1: DATA.representatives_page.content_segment1.detail1,
      detail2: DATA.representatives_page.content_segment1.detail2,
      links_title: DATA.representatives_page.content_segment1.links_title,
      links: DATA.representatives_page.content_segment1.links
    }
  });

  contentSegment2 = new Vue({
    el: "#content-segment2",
    data: {
      key: DATA.representatives_page.content_segment2.key,
      header: DATA.representatives_page.content_segment2.header,
      page_title: DATA.representatives_page.content_segment2.page_title,
      article_title: DATA.representatives_page.content_segment2.article_title,
      main_text: DATA.representatives_page.content_segment2.main_text,
      detail1: DATA.representatives_page.content_segment2.detail1,
      detail2: DATA.representatives_page.content_segment2.detail2,
      links_title: DATA.representatives_page.content_segment2.links_title,
      links: DATA.representatives_page.content_segment2.links
    }
  });

  contentSegment3 = new Vue({
    el: "#content-segment3",
    data: {
      key: DATA.representatives_page.content_segment3.key,
      header: DATA.representatives_page.content_segment3.header,
      page_title: DATA.representatives_page.content_segment3.page_title,
      article_title: DATA.representatives_page.content_segment3.article_title,
      positions: DATA.representatives_page.content_segment3.positions
    }
  });

  slideshow1 = new Vue({
    el: "#slideshow1",
    data: {
      image1: DATA.representatives_page.slideshow1[0],
      images: DATA.representatives_page.slideshow1.slice(1)
    }
  });

  slideshow2 = new Vue({
    el: "#slideshow2",
    data: {
      image1: DATA.representatives_page.slideshow2[0],
      images: DATA.representatives_page.slideshow2.slice(1)
    }
  });

  footer = new Vue({
    el: "#footer",
    data: {
      links: DATA.navbar[1],
      actions: DATA.navbar[2]
    }
  });

  document.getElementById("header").scrollIntoView();
  togglePerson(0);
}

loadHTML();
