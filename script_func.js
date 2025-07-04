//     nav function 
function navv(x) {
        const page1 = document.getElementById("projeler_liste");
        const page2 = document.getElementById("projeler_notu");

        switch(x){
                case 1:
                        page1.style.display = "block";
                        page2.style.display = "none";  
                        break;
                case 2:
                        page1.style.display = "none";  
                        page2.style.display = "block";
                        break;
                }
        }

//     sub nav function
function subb(num) {
        for (let i = 1; i <= 4; i++) {
                const el = document.getElementById("subb" + i);
                if (el) {
                  el.style.display = (i === num) ? "block" : "none";
                }
        }
}