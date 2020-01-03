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

function readCalendarEvents() {
  if (document.getElementById("events-upcoming").textContent == "") {
    setTimeout(function() {
      readCalendarEvents();
    }, 400);
  } else {
    let eventsString = document.getElementById("events-upcoming").textContent;
    let eventsList = eventsString.substring(3).split("---");
    let event;
    for (let i = 0; i < eventsList.length; i++) {
      event = eventsList[i].split(":");
      let month = event[0].substring(0, event[0].indexOf(" "));
      let date = event[0].substring(event[0].indexOf(" ") + 1, event[0].indexOf(","));
      let year = event[0].substring(event[0].indexOf(",") + 2);
      console.log(`${month}--${date}--${year}`);
      console.log(event[0].includes(","));

      date = parseInt(date) + 1;
      DATA.home_page.events[i].date = `${month} ${date}, ${year}`;
      DATA.home_page.events[i].title = event[1];
    }
  }
}

async function loadHTML() {
  await fetchPageData();
  await fetchNextCalendarEvents(3);
  readCalendarEvents();

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
      sideText: DATA.home_page.side_text,
      title: DATA.home_page.title,
      image: DATA.home_page.background_image,
      actions: DATA.home_page.actions,
      events: DATA.home_page.events
    }
  });

  contentSegment1 = new Vue({
    el: "#content-segment1",
    data: {
      key: DATA.home_page.content_segment1.key,
      header: DATA.home_page.content_segment1.header,
      page_title: DATA.home_page.content_segment1.page_title,
      article_title: DATA.home_page.content_segment1.article_title,
      main_text: DATA.home_page.content_segment1.main_text,
      detail1: DATA.home_page.content_segment1.detail1,
      detail2: DATA.home_page.content_segment1.detail2,
      links_title: DATA.home_page.content_segment1.links_title,
      links: DATA.home_page.content_segment1.links
    }
  });

  contentSegment2 = new Vue({
    el: "#content-segment2",
    data: {
      key: DATA.home_page.content_segment2.key,
      header: DATA.home_page.content_segment2.header,
      page_title: DATA.home_page.content_segment2.page_title,
      article_title: DATA.home_page.content_segment2.article_title,
      main_text: DATA.home_page.content_segment2.main_text,
      detail1: DATA.home_page.content_segment2.detail1,
      detail2: DATA.home_page.content_segment2.detail2,
      links_title: DATA.home_page.content_segment2.links_title,
      links: DATA.home_page.content_segment2.links
    }
  });

  slideshow = new Vue({
    el: "#slideshow",
    data: {
      image1: DATA.home_page.slideshow[0],
      images: DATA.home_page.slideshow.slice(1)
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
