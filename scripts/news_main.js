var navigationBar, header, contentSegment1, contentSegment2, slideshow, footer;
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
      sideText: DATA.news_page.side_text,
      title: DATA.news_page.title,
      image: DATA.news_page.background_image,
      actions: DATA.news_page.actions,
    }
  });

  contentSegment1 = new Vue({
    el: "#content-segment1",
    data: {
      key: DATA.news_page.content_segment1.key,
      header: DATA.news_page.content_segment1.header,
      article_title: DATA.news_page.content_segment1.article_title,
      page_title: DATA.news_page.content_segment1.page_title,
      posts: DATA.news_page.content_segment1.posts.reverse(),
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
}

loadHTML();
