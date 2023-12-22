// let title = document.querySelector('h1');

// console.log(title);



// title.addEventListener("click" , () =>  {
//     title.innerHTML = 'Nuriddin';
//     title.style.color = 'red';
//     title.style.textAlign = 'center';
//     title.style.backgroundColor = 'blue';
// });

// title.addEventListener("dblclick" , () =>  {
//     title.innerHTML = 'Abujafar';
//     title.style.color = 'white';
//     title.style.textAlign = 'center';
//     title.style.backgroundColor = 'black';
// });

// title.addEventListener("mouseover" , () =>  {
//     title.innerHTML = 'islombek';
//     title.style.color = 'blue';
//     title.style.textAlign = 'center';
//     title.style.backgroundColor = 'greenyellow';
// });

// title.addEventListener("mouseout" , () =>  {
//     title.innerHTML = 'Abujafar';
//     title.style.color = 'white';
//     title.style.textAlign = 'center';
//     title.style.backgroundColor = 'blue';
// });



// nuriddin

let header = document.querySelector("header");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (btn.innerHTML == "tun") {
    header.classList.add("tun");
    header.classList.remove("kun");
    btn.innerHTML = "kun";

  } else {
    header.classList.remove("tun");
    header.classList.add("kun");
    btn.innerHTML = "tun";
  }
});
