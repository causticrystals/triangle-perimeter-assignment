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
    //
    document.getElementById("aBOutp").innerHTML = dist((xBInput - xAInput) + (yBInput - yAInput));
    document.getElementById("aCOutp").innerHTML = dist((xCInput - xAInput) + (yCInput - yAInput));
    document.getElementById("bCOutp").innerHTML = dist((xCInput - xBInput) + (yCInput - yBInput));
    document.getElementById("abcPerimeter").innerHTML = dist();
}

function dist() {
    
}
