//     nav function 
function navv(x) {
  const navy = document.getElementById("nav_yazilim");
  const navt = document.getElementById("nav_tasarim");
  const page1 = document.getElementById("yazilim");
  const page2 = document.getElementById("tasarim");

  navy.classList.remove("active");
  navt.classList.remove("active"); 

  if (x === 1) {
    page1.style.display = "block";
    page2.style.display = "none";

    navy.classList.add("active");
  } else {
    page1.style.display = "none";
    page2.style.display = "block";

    navt.classList.add("active");
  }
}
  

//     sub nav function
function subb(num) {
        for (let i = 1; i <= 4; i++) {
                const el = document.getElementById("area" + i);
                if (el) {
                  el.style.display = (i === num) ? "block" : "none";
                  el.classList.add("fade-in");
                }
        }
}

 //     sub nav function
function subb2(num) {
        for (let i = 1; i <= 2; i++) {
                const el = document.getElementById("areaa" + i);
                if (el) {
                  el.style.display = (i === num) ? "block" : "none";
                  el.classList.add("fade-in");
                }
        }
}
 