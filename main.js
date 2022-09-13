// Triangle Perimeter Assignment
// Calculate click event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    // Get triangle vertices
    let xAInput = +document.getElementById("xAInp").value;
    let yAInput = +document.getElementById("yAInp").value;
    let xBInput = +document.getElementById("xBInp").value;
    let yBInput = +document.getElementById("yBInp").value;
    let xCInput = +document.getElementById("xCInp").value;
    let yCInput = +document.getElementById("yCInp").value;

    // Get calculated side lengths and perimeter
    document.getElementById("aBOutp").innerHTML = dist(xAInput, yAInput, xBInput, yBInput);
    document.getElementById("aCOutp").innerHTML = dist(xAInput, yAInput, xCInput, yCInput);
    document.getElementById("bCOutp").innerHTML = dist(xBInput, yBInput, xCInput, yCInput);

    // // Uhh whole perimeter stuff
    // let sideAB = +document.getElementById("aBOutp").value
    // let sideAC = +document.getElementById("aCOutp").value
    // let sideBC = +document.getElementById("bCOutp").value
    // document.getElementById("abcPerimeter").innerHTML = (sideAB + sideAC + sideBC);
}

function dist(x1, y1, x2, y2) {
    let sideCalc = Math.sqrt(x1 ** 2 - x2 ** 2) + Math.sqrt(y1 ** 2 - y2 ** 2);
    return sideCalc;
}

