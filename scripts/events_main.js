var navigationBar, header, contentSegment1, footer;
let navbarToggled = false;

let upcomingEvents = [
  {
    date: "",
    title: ""
  },
  {
    date: "",
    title: ""
  },
  {
    date: "",
    title: ""
  },
  {
    date: "",
    title: ""
  },
  {
    date: "",
    title: ""
  },
  {
    date: "",
    title: ""
  },
  {
    date: "",
    title: ""
  },
  {
    date: "",
    title: ""
  },
  {
    date: "",
    title: ""
  },
  {
    date: "",
    title: ""
  }
];

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
      let date = event[0].substring(
        event[0].indexOf(" ") + 1,
        event[0].indexOf(",")
      );
      let year = event[0].substring(event[0].indexOf(",") + 2);
      console.log(`${month}--${date}--${year}`);
      console.log(event[0].includes(","));

      date = parseInt(date) + 1;
      upcomingEvents[i].date = `${month} ${date}, ${year}`;
      upcomingEvents[i].title = event[1];
    }
  }
}

function toggleEvent() {
  document.getElementById("all-events").classList.toggle("d-none");
  document
    .getElementById("toggle-position-button")
    .classList.toggle("toggle-position-active");
  if (document.getElementById("all-events").classList.contains("d-none"))
    document.getElementById("toggle-position-button").innerHTML = "+";
  else document.getElementById("toggle-position-button").innerHTML = "–";
}

async function loadHTML() {
  await fetchPageData();
  await fetchNextCalendarEvents(10);
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
      sideText: DATA.events_page.side_text,
      title: DATA.events_page.title,
      image: DATA.events_page.background_image,
      actions: DATA.events_page.actions
    }
  });

  contentSegment1 = new Vue({
    el: "#content-segment1",
    data: {
      key: DATA.events_page.content_segment1.key,
      header: DATA.events_page.content_segment1.header,
      page_title: DATA.events_page.content_segment1.page_title,
      calendar_url: DATA.events_page.content_segment1.calendar_url,
      article_title: DATA.events_page.content_segment1.article_title,
      upcoming_events: upcomingEvents.slice(0, 4),
      all_events: upcomingEvents.slice(4)
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
  document.getElementById("loading-screen").classList.add("d-none");
}

loadHTML();
