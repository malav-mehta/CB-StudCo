var navigationBar, header, contentSegment1, contentSegment2, slideshow, footer;
let navbarToggled = false;
$(window).scroll(function() {
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > $(window).height() * 0.2)
    $("#navigation-bar").addClass("navbar-scrolled");
  else $("#navigation-bar").removeClass("navbar-scrolled");
});
function toggleNavbarButton() {
  if (navbarToggled)
    document.getElementById("navbar-toggler").innerHTML = "Menu";
  else document.getElementById("navbar-toggler").innerHTML = "Close";
  navbarToggled = !navbarToggled;
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
      sideText: DATA.about_page.side_text,
      title: DATA.about_page.title,
      image: DATA.about_page.background_image,
      actions: DATA.about_page.actions
    }
  });
  contentSegment1 = new Vue({
    el: "#content-segment1",
    data: {
      key: DATA.about_page.content_segment1.key,
      header: DATA.about_page.content_segment1.header,
      page_title: DATA.about_page.content_segment1.page_title,
      article_title: DATA.about_page.content_segment1.article_title,
      main_text: DATA.about_page.content_segment1.main_text,
      detail1: DATA.about_page.content_segment1.detail1,
      detail2: DATA.about_page.content_segment1.detail2,
      links_title: DATA.about_page.content_segment1.links_title,
      links: DATA.about_page.content_segment1.links
    }
  });
  contentSegment2 = new Vue({
    el: "#content-segment2",
    data: {
      key: DATA.about_page.content_segment2.key,
      header: DATA.about_page.content_segment2.header,
      page_title: DATA.about_page.content_segment2.page_title,
      article_title: DATA.about_page.content_segment2.article_title,
      main_text: DATA.about_page.content_segment2.main_text,
      detail1: DATA.about_page.content_segment2.detail1,
      detail2: DATA.about_page.content_segment2.detail2,
      links_title: DATA.about_page.content_segment2.links_title,
      links: DATA.about_page.content_segment2.links
    }
  });
  slideshow = new Vue({
    el: "#slideshow",
    data: {
      image1: DATA.about_page.slideshow[0],
      images: DATA.about_page.slideshow.slice(1)
    }
  });
  footer = new Vue({
    el: "#footer",
    data: { links: DATA.navbar[1], actions: DATA.navbar[2] }
  });
  document.getElementById("header").scrollIntoView();
  document.getElementById("loading-screen").classList.add("d-none");
}
loadHTML();
