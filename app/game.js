/**
 * DICTIONARY AND REQUIREMENTS
 * 
 * 
 */

var health = 100;
var hits = 0;
var name = "Scarecrow";

document.getElementById("health").innerText = health;
document.getElementById("hits").innerText = hits;
document.getElementById("name").innerText = name;

function slap() {
    health--;
    hits++;
    //alert("health:  " + health)
    update()
}

function punch() {
    health += -5
    hits++;
    update()

}

function kick() {
    health += -10
    hits++;
    update()
}

function update() {
    document.getElementById("health").innerText = health;
    document.getElementById("hits").innerText = hits;
    document.getElementById("name").innerText = name;
}