function clickMenu() {
    let click = document.getElementById("dropdown-content");
            if(click.style.display === "none"){
                click.style.display = "block";
                console.log("working");
 
            }else{
                click.style.display = "none";
                console.log("working");
            
            }
        }
        

var menu = document.getElementById('menu');

menu.addEventListener("click", clickMenu);