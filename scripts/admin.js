let navigationBar,
  footer,
  voiceHeader,
  contactHeader,
  newsPage,
  repContentSegment3;
function toggleNavbarButton() {
  if (navbarToggled)
    document.getElementById("navbar-toggler").innerHTML = "Menu";
  else document.getElementById("navbar-toggler").innerHTML = "Close";
  navbarToggled = !navbarToggled;
}
function submitForm() {
  let first_name = document.getElementById("first-name").value;
  let last_name = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("comment").value;
  firebase
    .database()
    .ref(
      "contact/" +
        new Date()
          .toLocaleString()
          .toLowerCase()
          .split(" ")
          .join("-")
          .split(":")
          .join("-")
    )
    .set({
      first_name: first_name,
      last_name: last_name,
      email: email,
      subject: subject,
      message: message
    })
    .then(function() {
      document.getElementById("form-submitted").innerHTML =
        "Thank you! Your message was received.";
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("comment").value = "";
    });
}
function getVal(id) {
  return document.getElementById(id).value;
}
function updateHomePage() {
  let home_page = {
    actions: DATA.home_page.actions,
    background_image: getVal("home-bg"),
    content_segment1: {
      article_title: getVal("home-cs1-title"),
      detail1: getVal("home-cs1-detail1"),
      detail2: getVal("home-cs1-detail2"),
      header: getVal("home-cs1-header"),
      key: DATA.home_page.content_segment1.key,
      links: DATA.home_page.content_segment1.links,
      links_title: DATA.home_page.content_segment1.links_title,
      main_text: getVal("home-cs1-main"),
      page_title: DATA.home_page.content_segment1.page_title
    },
    content_segment2: {
      article_title: getVal("home-cs2-title"),
      detail1: getVal("home-cs2-detail1"),
      detail2: getVal("home-cs2-detail2"),
      header: getVal("home-cs2-header"),
      key: DATA.home_page.content_segment2.key,
      links: DATA.home_page.content_segment2.links,
      links_title: DATA.home_page.content_segment2.links_title,
      main_text: getVal("home-cs2-main"),
      page_title: DATA.home_page.content_segment2.page_title
    },
    events: DATA.home_page.events,
    side_text: DATA.home_page.side_text,
    slideshow: [
      getVal("home-s1-i0"),
      getVal("home-s1-i1"),
      getVal("home-s1-i2"),
      getVal("home-s1-i3"),
      getVal("home-s1-i4")
    ],
    title: getVal("home-title"),
    video_showcase: DATA.home_page.video_showcase
  };
  firebase
    .database()
    .ref("/home_page")
    .set({ ...home_page });
}
function updateAboutPage() {
  let about_page = {
    actions: DATA.about_page.actions,
    background_image: getVal("about-bg"),
    content_segment1: {
      article_title: getVal("about-cs1-title"),
      detail1: getVal("about-cs1-detail1"),
      detail2: getVal("about-cs1-detail2"),
      header: getVal("about-cs1-header"),
      key: DATA.about_page.content_segment1.key,
      links: DATA.about_page.content_segment1.links,
      links_title: DATA.about_page.content_segment1.links_title,
      main_text: getVal("about-cs1-main"),
      page_title: DATA.about_page.content_segment1.page_title
    },
    content_segment2: {
      article_title: getVal("about-cs2-title"),
      detail1: getVal("about-cs2-detail1"),
      detail2: getVal("about-cs2-detail2"),
      header: getVal("about-cs2-header"),
      key: DATA.about_page.content_segment2.key,
      links: DATA.about_page.content_segment2.links,
      links_title: DATA.about_page.content_segment2.links_title,
      main_text: getVal("about-cs2-main"),
      page_title: DATA.about_page.content_segment2.page_title
    },
    side_text: DATA.about_page.side_text,
    slideshow: [
      getVal("about-s1-i0"),
      getVal("about-s1-i1"),
      getVal("about-s1-i2"),
      getVal("about-s1-i3"),
      getVal("about-s1-i4")
    ],
    title: getVal("about-title")
  };
  firebase
    .database()
    .ref("/about_page")
    .set({ ...about_page });
}
function getPositions() {
  return getVal("rep-cs3-positions")
    .split("----")
    .map(function(position) {
      let positionSplit = position.split("---");
      let title = positionSplit[0];
      let description = positionSplit[1];
      let people = positionSplit.splice(2).map(function(person) {
        personSplit = person.split("--");
        return {
          name: personSplit[0],
          email: personSplit[1],
          image: personSplit[2]
        };
      });
      return { title: title, description: description, people: people };
    });
}
function updateRepPage() {
  let representatives_page = {
    actions: DATA.representatives_page.actions,
    background_image: getVal("rep-bg"),
    content_segment1: {
      article_title: getVal("rep-cs1-title"),
      detail1: getVal("rep-cs1-detail1"),
      detail2: getVal("rep-cs1-detail2"),
      header: getVal("rep-cs1-header"),
      key: DATA.representatives_page.content_segment1.key,
      links: DATA.representatives_page.content_segment1.links,
      links_title: DATA.representatives_page.content_segment1.links_title,
      main_text: getVal("rep-cs1-main"),
      page_title: DATA.representatives_page.content_segment1.page_title
    },
    content_segment2: {
      article_title: getVal("rep-cs2-title"),
      detail1: getVal("rep-cs2-detail1"),
      detail2: getVal("rep-cs2-detail2"),
      header: getVal("rep-cs2-header"),
      key: DATA.representatives_page.content_segment2.key,
      links: DATA.representatives_page.content_segment2.links,
      links_title: DATA.representatives_page.content_segment2.links_title,
      main_text: getVal("rep-cs2-main"),
      page_title: DATA.representatives_page.content_segment2.page_title
    },
    content_segment3: {
      article_title: getVal("rep-cs3-title"),
      header: getVal("rep-cs3-header"),
      key: DATA.representatives_page.content_segment3.key,
      page_title: DATA.representatives_page.content_segment3.page_title,
      positions: getPositions()
    },
    side_text: DATA.representatives_page.side_text,
    slideshow1: [
      getVal("rep-s1-i0"),
      getVal("rep-s1-i1"),
      getVal("rep-s1-i2"),
      getVal("rep-s1-i3"),
      getVal("rep-s1-i4")
    ],
    slideshow2: [
      getVal("rep-s2-i0"),
      getVal("rep-s2-i1"),
      getVal("rep-s2-i2"),
      getVal("rep-s2-i3"),
      getVal("rep-s2-i4")
    ],
    title: getVal("rep-title")
  };
  firebase
    .database()
    .ref("/representatives_page")
    .set({ ...representatives_page });
}
function updateEventsPage() {
  let events_page = {
    actions: DATA.events_page.actions,
    background_image: getVal("events-bg"),
    content_segment1: DATA.events_page.content_segment1,
    side_text: DATA.events_page.side_text,
    title: getVal("events-title")
  };
  firebase
    .database()
    .ref("/events_page")
    .set({ ...events_page });
}
function postNews() {
  let posts = [
    ...DATA.news_page.content_segment1.posts,
    {
      author: getVal("n-author"),
      content: getVal("n-content"),
      date: getVal("n-date"),
      title: getVal("n-title")
    }
  ];
  firebase
    .database()
    .ref("/news_page/content_segment1/posts/")
    .set({ ...posts });
  fetchPageData();
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
  let homeHeader = new Vue({
    el: "#home-header",
    data: {
      sideText: DATA.home_page.side_text,
      title: DATA.home_page.title,
      image: DATA.home_page.background_image,
      actions: DATA.home_page.actions,
      events: DATA.home_page.events
    }
  });
  let homeContentSegment1 = new Vue({
    el: "#home-content-segment1",
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
  let homeContentSegment2 = new Vue({
    el: "#home-content-segment2",
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
  let homeSlideshow = new Vue({
    el: "#home-slideshow",
    data: { images: DATA.home_page.slideshow }
  });
  let aboutHeader = new Vue({
    el: "#about-header",
    data: {
      sideText: DATA.about_page.side_text,
      title: DATA.about_page.title,
      image: DATA.about_page.background_image,
      actions: DATA.about_page.actions
    }
  });
  let aboutContentSegment1 = new Vue({
    el: "#about-content-segment1",
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
  let aboutContentSegment2 = new Vue({
    el: "#about-content-segment2",
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
  let aboutSlideshow = new Vue({
    el: "#about-slideshow",
    data: { images: DATA.about_page.slideshow }
  });
  let repHeader = new Vue({
    el: "#rep-header",
    data: {
      sideText: DATA.representatives_page.side_text,
      title: DATA.representatives_page.title,
      image: DATA.representatives_page.background_image,
      actions: DATA.representatives_page.actions
    }
  });
  let repContentSegment1 = new Vue({
    el: "#rep-content-segment1",
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
  let repContentSegment2 = new Vue({
    el: "#rep-content-segment2",
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
  repContentSegment3 = new Vue({
    el: "#rep-content-segment3",
    data: {
      key: DATA.representatives_page.content_segment3.key,
      header: DATA.representatives_page.content_segment3.header,
      page_title: DATA.representatives_page.content_segment3.page_title,
      article_title: DATA.representatives_page.content_segment3.article_title,
      positions: DATA.representatives_page.content_segment3.positions
    },
    computed: {
      breakPositions: function() {
        let brokenPositions = "";
        this.positions.map(position => {
          brokenPositions += `${position.title}---${position.description}`;
          position.people.map(person => {
            brokenPositions += `---${person.name}--${person.email}--${
              person.image == "" ? "NO LINK" : person.image
            }`;
          });
          brokenPositions += "----";
        });
        brokenPositions = brokenPositions.substring(
          0,
          brokenPositions.length - 4
        );
        return brokenPositions;
      }
    }
  });
  let repSlideshow1 = new Vue({
    el: "#rep-slideshow1",
    data: { images: DATA.representatives_page.slideshow1 }
  });
  let repSlideshow2 = new Vue({
    el: "#rep-slideshow2",
    data: { images: DATA.representatives_page.slideshow2 }
  });
  let eventsHeader = new Vue({
    el: "#events-header",
    data: {
      sideText: DATA.events_page.side_text,
      title: DATA.events_page.title,
      image: DATA.events_page.background_image,
      actions: DATA.events_page.actions
    }
  });
  voiceHeader = new Vue({
    el: "#voice-output",
    data: { forms: Object.values(DATA.voice).reverse(), formIndex: 0 },
    methods: {
      next: function() {
        if (this.formIndex + 1 >= this.forms.length) {
          this.formIndex = 0;
        } else {
          this.formIndex += 1;
        }
      },
      previous: function() {
        if (this.formIndex - 1 < 0) {
          this.formIndex = this.forms.length - 1;
        } else {
          this.formIndex -= 1;
        }
      },
      deleteForm: function() {
        this.forms.splice(this.formIndex, 1);
        let newForms = this.forms;
        firebase
          .database()
          .ref("/voice/")
          .set({ ...newForms });
        this.next();
      }
    }
  });
  contactHeader = new Vue({
    el: "#contact-output",
    data: { forms: Object.values(DATA.contact).reverse(), formIndex: 0 },
    methods: {
      next: function() {
        if (this.formIndex + 1 >= this.forms.length) {
          this.formIndex = 0;
        } else {
          this.formIndex += 1;
        }
      },
      previous: function() {
        if (this.formIndex - 1 < 0) {
          this.formIndex = this.forms.length - 1;
        } else {
          this.formIndex -= 1;
        }
      },
      deleteForm: function() {
        this.forms.splice(this.formIndex, 1);
        let newForms = this.forms;
        firebase
          .database()
          .ref("/contact/")
          .set({ ...newForms });
        this.next();
      }
    }
  });
  newsPage = new Vue({
    el: "#news-output",
    data: { posts: DATA.news_page.content_segment1.posts, postIndex: 0 },
    methods: {
      next: function() {
        if (this.postIndex + 1 >= this.posts.length) {
          this.postIndex = 0;
        } else {
          this.postIndex += 1;
        }
      },
      previous: function() {
        if (this.postIndex - 1 < 0) {
          this.postIndex = this.posts.length - 1;
        } else {
          this.postIndex -= 1;
        }
      },
      deleteForm: function() {
        this.posts.splice(this.postIndex, 1);
        let newPosts = this.posts;
        firebase
          .database()
          .ref("/news_page/content_segment1/posts/")
          .set({ ...newPosts });
        this.next();
      }
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
