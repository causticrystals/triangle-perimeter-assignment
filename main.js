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

    // Process
    let aBSide = dist(xAInput, yAInput, xBInput, yBInput);
    let aCSide = dist(xAInput, yAInput, xCInput, yCInput);
    let bCSide = dist(xBInput, yBInput, xCInput, yCInput);

    // Get calculated side lengths and perimeter
    document.getElementById("aBOutp").innerHTML = aBSide;
    document.getElementById("aCOutp").innerHTML = aCSide;
    document.getElementById("bCOutp").innerHTML = bCSide;
    document.getElementById("abcPerimeter").innerHTML = aBSide + aCSide + bCSide;
}

function dist(x1, y1, x2, y2) {
    let sideCalc = Math.sqrt((x1 - x2) ** 2 + (y1 - y2)** 2);
    return sideCalc;
}

