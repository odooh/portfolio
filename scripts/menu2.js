function clickMenu() {
    let click1 = document.getElementById("dropdown-content");
            if(click1.style.display === "none"){
                click1.style.display = "block";
                console.log("working");
 
            }else{
                click1.style.display = "none";
                console.log("working");
            
            }
        }

function clickMenu2() {
    let click2 = document.getElementById("dropdown-content2");
            if(click2.style.display === "none"){
                click2.style.display = "block";
                console.log("working");
 
            }else{
                click2.style.display = "none";
                console.log("working");
            
            }
        }
    
        

function showL1() {
    let click3 = document.getElementById("lettering1-content");
    if(click3.style.display === "none"){
        click3.style.display = "block";
        console.log("wk");
    }else{
        click3.style.display = "none";
        console.log("wk");
    
    }

}
function qcontent() {
    let click = document.getElementById("lettering1-content");
    click.style.display = "none";
}
var menu = document.getElementById('menu');
menu.addEventListener("click", clickMenu);

var menu2 = document.getElementById('menu2');
menu2.addEventListener("click", clickMenu2);
