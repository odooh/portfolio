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
var lettering1 = document.getElementById("lettering1");
lettering1.addEventListener("click", showL1);

var x_btn = document.getElementById('x_btn');
x_btn.addEventListener("click", qcontent)