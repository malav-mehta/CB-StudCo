var navigationBar, footer;
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
  footer = new Vue({
    el: "#footer",
    data: { links: DATA.navbar[1], actions: DATA.navbar[2] }
  });
  document.getElementById("header").scrollIntoView();
  document.getElementById("loading-screen").classList.add("d-none");
}
loadHTML();
