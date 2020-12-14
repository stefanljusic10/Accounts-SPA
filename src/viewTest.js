// Ne radi preventDefault() iz nekog razloga
// Ne sprecava eventListener da ode na drugi link

// for (let i = 0; i < links.length; i++) {
//   links.addEventListener("click", showView);
// }
// function showView(e){
//   for (let i = 0; i < views.length; i++) {
//     views[i].style.display = "none";
//   }
//   if(e instanceof Event){
//     e.preventDefault();
//     let id = `#${e.target.getAttribute("href")}`;
//     document.querySelector(id).style.display = "block";
//   }
//   else {
//     document.querySelector(e).style.display = "block";
//   }
// }
