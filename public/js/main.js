const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
navToggle.addEventListener("click", (e) => {
  links.classList.toggle("show-links");
});

const current_location = location.href; // URL of curent page as displayed on address bar
const linkItems = document.querySelectorAll(".links a"); // Array of anchor elements in li
len = linkItems.length; // length of Array
for (let p = 0; p < len; p++) {
  if (linkItems[p].href === current_location) {
    linkItems[p].classList.add("active");
  }
}
    // why can't use arrow fn? becoz this = window. Regular fn this = btn that receive event click.    // href attribute links to of href as location
/*  Fetch test */
// console.log("Hello Guys!");
// var res = fetch("https://reqres.in/api/users/");

// res
//   .then((result) => {
//     return result.json(); // promise
//   })
//   .then((data) => {
//     console.log(data.data[5]);
//   });
/*  Fetch test */