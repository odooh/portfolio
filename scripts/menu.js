function clickMenu() {
    let click = document.getElementById("dropdown-content");
            if(click.style.display === "none"){
                click.style.display = "block";
 
            }else{
                click.style.display = "none";
                console.log("working");
            
            }
        }
        

function showL1() {
    let click = document.getElementById("lettering1-content");
    if(click.style.display === "none"){
        click.style.display = "block";
        console.log("wk");
    }else{
        click.style.display = "none";
        console.log("wk");
    
    }

}

function qcontent() {
    let click = document.getElementById("lettering1-content");
    click.style.display = "none";
}
var menu = document.getElementById('menu');
menu.addEventListener("click", clickMenu);

function clickMenu2() {
    let click = document.getElementById("dropdown-content2");
            if(click.style.display === "none"){
                click.style.display = "block";
                console.log("working");
 
            }else{
                click.style.display = "none";
                console.log("working");
            
            }
        }

var menu_2 = document.getElementById('menu2');
menu_2.addEventListener("click", clickMenu2);