// // -----------typing animation------------
// let typed = new Typed(".typing", {
//   strings: ["", "Software Developer", "Software Developer"],
//   typeSpeed: 100,
//   BackSpeed: 60,
//   loop: true,
// })

// ----------------active link-----------------------
const linkNavRef = document.getElementsByClassName("nav-link")

for (let i = 0; i < linkNavRef.length; i++) {
  linkNavRef[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active")
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "")
    }
    this.className += " active"
  })
}